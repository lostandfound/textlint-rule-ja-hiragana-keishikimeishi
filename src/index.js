"use strict";

const kuromojin = require("kuromojin");
const createMatcher = require("morpheme-match-all");
const dictionaries = require("./dict");

const matchAll = createMatcher(dictionaries);

function reporter(context, options = {}) {
  const {
    Syntax,
    RuleError,
    report,
    getSource,
    fixer
  } = context;
  return {
    [Syntax.Str](node) { // "Str" node
      const text = getSource(node); // Get text

      return kuromojin.tokenize(text).then((actualTokens) => {
        //console.log(actualTokens);
        const results = matchAll(actualTokens);
        
        if (results.length == 0) {
          return;
        }

        results.forEach(function(result) {
          
          if (result.dict.expected === "ほう" && Object.keys(options).length && !options.ditection_hou_kata){
            return;
          }

          const offset = result.dict.extensions.offset === undefined ? 0 : result.dict.extensions.offset;
          const index = Math.max(result.tokens[offset].word_position - 1, 0);

          let textToReplace = "";

          result.tokens.forEach(function(token, i){            
            if (i >= offset) {
              textToReplace += token.surface_form;
            }
          });

          const fix = fixer.replaceTextRange([index, index + textToReplace.length], result.dict.expected);
          const ruleError = new RuleError(result.dict.message,
            {
              index: index,
              fix: fix
            }
          );
          report(node, ruleError);
        });
      });
    }
  };
}

module.exports = {
  linter: reporter,
  fixer: reporter
};