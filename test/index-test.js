"use strict";

const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
const rule = require("../src/index");
// ruleName, rule, { valid, invalid }
tester.run("rule", rule, {
  valid: [
    // no problem
    "text",
  ],

  invalid: [
    // 動詞 + 形式名詞
    {
      text: "する上で",
      output: "するうえで",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "上" => "うえ"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "した上で",
      output: "したうえで",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "上" => "うえ"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "しない上で",
      output: "しないうえで",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "上" => "うえ"`,
        line: 1,
        column: 4
      }]
    },
    // 助動詞 + 助動詞 + 形式名詞
    {
      text: "しなかった上で",
      output: "しなかったうえで",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "上" => "うえ"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 形式名詞
    {
      text: "嬉しい上に",
      output: "嬉しいうえに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "上" => "うえ"`,
        line: 1,
        column: 4
      }]
    },
    // 形容詞 + 助動詞 + 形式名詞
    {
      text: "嬉しかった上に",
      output: "嬉しかったうえに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "上" => "うえ"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 助動詞 + 形式名詞
    {
      text: "嬉しくない上に",
      output: "嬉しくないうえに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "上" => "うえ"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 助動詞 + 助動詞 + 形式名詞
    {
      text: "嬉しくなかった上に",
      output: "嬉しくなかったうえに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "上" => "うえ"`,
        line: 1,
        column: 8
      }]
    },
    // 動詞 + 形式名詞
    {
      text: "する事で",
      output: "することで",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "事" => "こと"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "した事で",
      output: "したことで",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "事" => "こと"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "しない事で",
      output: "しないことで",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "事" => "こと"`,
        line: 1,
        column: 4
      }]
    },
    // 助動詞 + 助動詞 + 形式名詞
    {
      text: "しなかった事で",
      output: "しなかったことで",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "事" => "こと"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 形式名詞
    {
      text: "嬉しい事が",
      output: "嬉しいことが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "事" => "こと"`,
        line: 1,
        column: 4
      }]
    },
    // 形容詞 + 助動詞 + 形式名詞
    {
      text: "嬉しかった事が",
      output: "嬉しかったことが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "事" => "こと"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 助動詞 + 形式名詞
    {
      text: "嬉しくない事が",
      output: "嬉しくないことが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "事" => "こと"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 助動詞 + 助動詞 + 形式名詞
    {
      text: "嬉しくなかった事が",
      output: "嬉しくなかったことが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "事" => "こと"`,
        line: 1,
        column: 8
      }]
    },
    // 動詞 + 形式名詞
    {
      text: "する毎に",
      output: "するごとに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "毎" => "ごと"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "した毎に",
      output: "したごとに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "毎" => "ごと"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "しない毎に",
      output: "しないごとに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "毎" => "ごと"`,
        line: 1,
        column: 4
      }]
    },
    // 助動詞 + 助動詞 + 形式名詞
    {
      text: "しなかった毎に",
      output: "しなかったごとに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "毎" => "ごと"`,
        line: 1,
        column: 6
      }]
    },
    // 名詞 + 形式名詞
    {
      text: "一文字毎に",
      output: "一文字ごとに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "毎" => "ごと"`,
        line: 1,
        column: 4
      }]
    },
    // 動詞 + 形式名詞
    {
      text: "する度に",
      output: "するたびに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "度" => "たび"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "した度に",
      output: "したたびに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "度" => "たび"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "しない度に",
      output: "しないたびに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "度" => "たび"`,
        line: 1,
        column: 4
      }]
    },
    // 助動詞 + 助動詞 + 形式名詞
    {
      text: "しなかった度に",
      output: "しなかったたびに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "度" => "たび"`,
        line: 1,
        column: 6
      }]
    },
    // 動詞 + 形式名詞
    {
      text: "する為で",
      output: "するためで",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "為" => "ため"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "した為で",
      output: "したためで",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "為" => "ため"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "しない為で",
      output: "しないためで",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "為" => "ため"`,
        line: 1,
        column: 4
      }]
    },
    // 助動詞 + 助動詞 + 形式名詞
    {
      text: "しなかった為で",
      output: "しなかったためで",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "為" => "ため"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 形式名詞
    {
      text: "嬉しい為に",
      output: "嬉しいために",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "為" => "ため"`,
        line: 1,
        column: 4
      }]
    },
    // 形容詞 + 助動詞 + 形式名詞
    {
      text: "嬉しかった為に",
      output: "嬉しかったために",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "為" => "ため"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 助動詞 + 形式名詞
    {
      text: "嬉しくない為に",
      output: "嬉しくないために",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "為" => "ため"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 助動詞 + 助動詞 + 形式名詞
    {
      text: "嬉しくなかった為に",
      output: "嬉しくなかったために",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "為" => "ため"`,
        line: 1,
        column: 8
      }]
    },
    // 動詞 + 形式名詞
    {
      text: "言う通りに",
      output: "言うとおりに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "通り" => "とおり"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "言った通りに",
      output: "言ったとおりに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "通り" => "とおり"`,
        line: 1,
        column: 4
      }]
    },
    // 助動詞 + 助動詞 + 形式名詞
    {
      text: "言われた通りに",
      output: "言われたとおりに",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "通り" => "とおり"`,
        line: 1,
        column: 5
      }]
    },
    // 動詞 + 形式名詞
    {
      text: "する時は",
      output: "するときは",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "した時は",
      output: "したときは",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "しない時は",
      output: "しないときは",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
        line: 1,
        column: 4
      }]
    },
    // 助動詞 + 助動詞 + 形式名詞
    {
      text: "しなかった時は",
      output: "しなかったときは",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 形式名詞
    {
      text: "嬉しい時が",
      output: "嬉しいときが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
        line: 1,
        column: 4
      }]
    },
    // 形容詞 + 助動詞 + 形式名詞
    {
      text: "嬉しかった時が",
      output: "嬉しかったときが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 助動詞 + 形式名詞
    {
      text: "嬉しくない時が",
      output: "嬉しくないときが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 助動詞 + 助動詞 + 形式名詞
    {
      text: "嬉しくなかった時が",
      output: "嬉しくなかったときが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
        line: 1,
        column: 8
      }]
    },
    // 動詞 + 形式名詞
    {
      text: "する所だ",
      output: "するところだ",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "所" => "ところ"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "した所だ",
      output: "したところだ",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "所" => "ところ"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "しない所だ",
      output: "しないところだ",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "所" => "ところ"`,
        line: 1,
        column: 4
      }]
    },
    // 助動詞 + 助動詞 + 形式名詞
    {
      text: "しなかった所だ",
      output: "しなかったところだ",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "所" => "ところ"`,
        line: 1,
        column: 6
      }]
    },
    // 名詞 + の:助詞 + 形式名詞
    {
      text: "今の所は",
      output: "今のところは",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "所" => "ところ"`,
        line: 1,
        column: 3
      }]
    },
    // 動詞 + 形式名詞
    {
      text: "する方が",
      output: "するほうが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "方" => "ほう"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "した方が",
      output: "したほうが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "方" => "ほう"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "しない方が",
      output: "しないほうが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "方" => "ほう"`,
        line: 1,
        column: 4
      }]
    },
    // 助動詞 + 助動詞 + 形式名詞
    {
      text: "しなかった方が",
      output: "しなかったほうが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "方" => "ほう"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 形式名詞
    {
      text: "嬉しい方が",
      output: "嬉しいほうが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "方" => "ほう"`,
        line: 1,
        column: 4
      }]
    },
    // 形容詞 + 助動詞 + 形式名詞
    {
      text: "嬉しかった方が",
      output: "嬉しかったほうが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "方" => "ほう"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 助動詞 + 形式名詞
    {
      text: "嬉しくない方が",
      output: "嬉しくないほうが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "方" => "ほう"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 助動詞 + 助動詞 + 形式名詞
    {
      text: "嬉しくなかった方が",
      output: "嬉しくなかったほうが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "方" => "ほう"`,
        line: 1,
        column: 8
      }]
    },
    // 動詞 + 形式名詞
    {
      text: "する訳が",
      output: "するわけが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "訳" => "わけ"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "した訳が",
      output: "したわけが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "訳" => "わけ"`,
        line: 1,
        column: 3
      }]
    },
    // 助動詞 + 形式名詞
    {
      text: "しない訳が",
      output: "しないわけが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "訳" => "わけ"`,
        line: 1,
        column: 4
      }]
    },
    // 助動詞 + 助動詞 + 形式名詞
    {
      text: "しなかった訳が",
      output: "しなかったわけが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "訳" => "わけ"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 形式名詞
    {
      text: "嬉しい訳が",
      output: "嬉しいわけが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "訳" => "わけ"`,
        line: 1,
        column: 4
      }]
    },
    // 形容詞 + 助動詞 + 形式名詞
    {
      text: "嬉しかった訳が",
      output: "嬉しかったわけが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "訳" => "わけ"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 助動詞 + 形式名詞
    {
      text: "嬉しくない訳が",
      output: "嬉しくないわけが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "訳" => "わけ"`,
        line: 1,
        column: 6
      }]
    },
    // 形容詞 + 助動詞 + 助動詞 + 形式名詞
    {
      text: "嬉しくなかった訳が",
      output: "嬉しくなかったわけが",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "訳" => "わけ"`,
        line: 1,
        column: 8
      }]
    },
    // multiple match
    {
      text: `する上で

する事で`,
      output: `するうえで

することで`,
      errors: [{
          message: "ひらがなで表記したほうが読みやすい形式名詞: \"上\" => \"うえ\"",
          line: 1,
          column: 3
        },
        {
          message: "ひらがなで表記したほうが読みやすい形式名詞: \"事\" => \"こと\"",
          line: 3,
          column: 3
        }
      ]
    }
  ]
});