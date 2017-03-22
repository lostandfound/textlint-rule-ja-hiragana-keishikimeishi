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
    // single match
    {
      text: "運動する事ができる",
      output: "運動することができる",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "事" => "こと"`,
        line: 1,
        column: 5
      }]
    },
    {
      text: "連絡した事がある",
      output: "連絡したことがある",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "事" => "こと"`,
        line: 1,
        column: 5
      }]
    },
    {
      text: "表示する時には",
      output: "表示するときには",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
        line: 1,
        column: 5
      }]
    },
    {
      text: "表示される時には",
      output: "表示されるときには",
      errors: [{
        message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
        line: 1,
        column: 6
      }]
    },
    // multiple match
    {
      text: `とても悲しい事があった。

嬉しかった事を思い出した。

相談する上で、

相談した上で、

名前を呼ぶ毎に、

故障する度に、

圧力が低下する為、圧力が低下した為、圧力が低い為、圧力が低かった為
`,
      output: `とても悲しいことがあった。

嬉しかったことを思い出した。

相談するうえで、

相談したうえで、

名前を呼ぶごとに、

故障するたびに、

圧力が低下するため、圧力が低下したため、圧力が低いため、圧力が低かったため
`,
      errors: [{
          message: "ひらがなで表記したほうが読みやすい形式名詞: \"事\" => \"こと\"",
          line: 1,
          column: 7
        },
        {
          message: "ひらがなで表記したほうが読みやすい形式名詞: \"事\" => \"こと\"",
          line: 3,
          column: 6
        },
        {
          message: "ひらがなで表記したほうが読みやすい形式名詞: \"上\" => \"うえ\"",
          line: 5,
          column: 5
        },
        {
          message: "ひらがなで表記したほうが読みやすい形式名詞: \"上\" => \"うえ\"",
          line: 7,
          column: 5
        },
        {
          message: "ひらがなで表記したほうが読みやすい形式名詞: \"毎\" => \"ごと\"",
          line: 9,
          column: 6
        },
        {
          message: "ひらがなで表記したほうが読みやすい形式名詞: \"度\" => \"たび\"",
          line: 11,
          column: 5
        },
        {
          message: "ひらがなで表記したほうが読みやすい形式名詞: \"為\" => \"ため\"",
          line: 13,
          column: 8
        },
        {
          message: "ひらがなで表記したほうが読みやすい形式名詞: \"為\" => \"ため\"",
          line: 13,
          column: 17
        },
        {
          message: "ひらがなで表記したほうが読みやすい形式名詞: \"為\" => \"ため\"",
          line: 13,
          column: 24
        },
        {
          message: "ひらがなで表記したほうが読みやすい形式名詞: \"為\" => \"ため\"",
          line: 13,
          column: 33
        }
      ]
    }
  ]

});