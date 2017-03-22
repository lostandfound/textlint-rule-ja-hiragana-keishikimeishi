# textlint-rule-ja-hiragana-keishikimeishi

Check easy-to-read Keishikimeishi(pronouns) written in Hiragana than Kanji.

漢字よりもひらがなで表記したほうが読みやすい形式名詞を指摘します。検出には形態素解析を使っています。自動修正にも対応しています。

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-ja-hiragana-keishikimeishi

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "ja-hiragana-keishikimeishi": true
    }
}
```

Via CLI

```
textlint --rule ja-hiragana-keishikimeishi README.md
```

### Fixable

```
textlint --fix ja-hiragana-keishikimeishi README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester "textlint-tester").

    npm test

### List

| From | To |
| --- | --- |
| 〜する上(で) | 〜するうえ(で) |
| 〜する事(が) | 〜すること(が) |
| 〜する度(に) | 〜するたび(に) |
| 〜する方(が) | 〜するほう(が) |
| 〜する時(に) | 〜するとき(に) |
| 〜する毎(に) | 〜するごと(に) |
| 〜する為(に) | 〜するため(に) |
| 〜する訳(が) | 〜するわけ(が) |
| 〜する所(だ) | 〜するところ(だ) |
| 〜する通り(に) | 〜するとおり(に) |
| 〜する物(だ) | 〜するもの(だ) |

## License

MIT © Hiroshi Takase
