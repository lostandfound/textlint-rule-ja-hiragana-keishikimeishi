// http://www.yamanouchi-yri.com/yrihp/techwrt-2-4s/t-2-4s03fb.htm
module.exports = [
  // 上 => うえ
  {
    // 動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 上 => うえ`,
    expected: "うえ",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "surface_form": "上",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "上",
        "reading": "ウエ",
        "pronunciation": "ウエ"
      }
    ]
  },
  {
    // 形容詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 上 => うえ`,
    expected: "うえ",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "形容詞"
      },
      {
        "surface_form": "上",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "上",
        "reading": "ウエ",
        "pronunciation": "ウエ"
      }
    ]
  },
  {
    // 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 上 => うえ`,
    expected: "うえ",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "surface_form": "上",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "上",
        "reading": "ウエ",
        "pronunciation": "ウエ"
      }
    ]
  },
  {
    // 助動詞 + 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 上 => うえ`,
    expected: "うえ",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "pos": "助動詞"
      },
      {
        "surface_form": "上",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "上",
        "reading": "ウエ",
        "pronunciation": "ウエ"
      }
    ]
  },
  // 事 => こと
  {
    // 動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 事 => こと`,
    expected: "こと",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "surface_form": "事",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "事",
        "reading": "コト",
        "pronunciation": "コト"
      }
    ]
  },
  {
    // 形容詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 事 => こと`,
    expected: "こと",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "形容詞"
      },
      {
        "surface_form": "事",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "事",
        "reading": "コト",
        "pronunciation": "コト"
      }
    ]
  },
  {
    // 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 事 => こと`,
    expected: "こと",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "surface_form": "事",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "事",
        "reading": "コト",
        "pronunciation": "コト"
      }
    ]
  },
  {
    // 助動詞 + 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 事 => こと`,
    expected: "こと",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "pos": "助動詞"
      },
      {
        "surface_form": "事",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "事",
        "reading": "コト",
        "pronunciation": "コト"
      }
    ]
  },
  // 毎 => ごと
  {
    // 動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 毎 => ごと`,
    expected: "ごと",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "surface_form": "毎",
        "pos": "名詞",
        "pos_detail_1": "接尾",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "毎",
        "reading": "ゴト",
        "pronunciation": "ゴト"
      }
    ]
  },
  {
    // 名詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 毎 => ごと`,
    expected: "ごと",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "名詞"
      },
      {
        "surface_form": "毎",
        "pos": "名詞",
        "pos_detail_1": "接尾",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "毎",
        "reading": "ゴト",
        "pronunciation": "ゴト"
      }
    ]
  },
  {
    // 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 毎 => ごと`,
    expected: "ごと",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "surface_form": "毎",
        "pos": "名詞",
        "pos_detail_1": "接尾",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "毎",
        "reading": "ゴト",
        "pronunciation": "ゴト"
      }
    ]
  },
  {
    // 助動詞 + 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 毎 => ごと`,
    expected: "ごと",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "pos": "助動詞"
      },
      {
        "surface_form": "毎",
        "pos": "名詞",
        "pos_detail_1": "接尾",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "毎",
        "reading": "ゴト",
        "pronunciation": "ゴト"
      }
    ]
  },
  // 度 => たび
  {
    // 動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 度 => たび`,
    expected: "たび",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "surface_form": "度",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "度",
        "reading": "タビ",
        "pronunciation": "タビ"
      }
    ]
  },
  {
    // 形容詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 度 => たび`,
    expected: "たび",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "形容詞"
      },
      {
        "surface_form": "度",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "度",
        "reading": "タビ",
        "pronunciation": "タビ"
      }
    ]
  },
  {
    // 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 度 => たび`,
    expected: "たび",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "surface_form": "度",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "度",
        "reading": "タビ",
        "pronunciation": "タビ"
      }
    ]
  },
  {
    // 助動詞 + 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 度 => たび`,
    expected: "たび",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "pos": "助動詞"
      },
      {
        "surface_form": "度",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "度",
        "reading": "タビ",
        "pronunciation": "タビ"
      }
    ]
  },
  // 為 => ため
  {
    // 動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 為 => ため`,
    expected: "ため",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "surface_form": "為",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "為",
        "reading": "タメ",
        "pronunciation": "タメ"
      }
    ]
  },
  {
    // 形容詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 為 => ため`,
    expected: "ため",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "形容詞"
      },
      {
        "surface_form": "為",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "為",
        "reading": "タメ",
        "pronunciation": "タメ"
      }
    ]
  },
  {
    // 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 為 => ため`,
    expected: "ため",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "surface_form": "為",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "為",
        "reading": "タメ",
        "pronunciation": "タメ"
      }
    ]
  },
  {
    // 助動詞 + 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 為 => ため`,
    expected: "ため",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "pos": "助動詞"
      },
      {
        "surface_form": "為",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "為",
        "reading": "タメ",
        "pronunciation": "タメ"
      }
    ]
  },
  // 通り => とおり
  {
    // 動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 通り => とおり`,
    expected: "とおり",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "surface_form": "通り",
        "pos": "名詞",
        "pos_detail_1": "一般",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "通り",
        "reading": "トオリ",
        "pronunciation": "トーリ"
      }
    ]
  },
  {
    // 形容詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 通り => とおり`,
    expected: "とおり",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "形容詞"
      },
      {
        "surface_form": "通り",
        "pos": "名詞",
        "pos_detail_1": "一般",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "通り",
        "reading": "トオリ",
        "pronunciation": "トーリ"
      }
    ]
  },
  {
    // 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 通り => とおり`,
    expected: "とおり",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "surface_form": "通り",
        "pos": "名詞",
        "pos_detail_1": "一般",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "通り",
        "reading": "トオリ",
        "pronunciation": "トーリ"
      }
    ]
  },
  {
    // 助動詞 + 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 通り => とおり`,
    expected: "とおり",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "pos": "助動詞"
      },
      {
        "surface_form": "通り",
        "pos": "名詞",
        "pos_detail_1": "一般",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "通り",
        "reading": "トオリ",
        "pronunciation": "トーリ"
      }
    ]
  },
  // 時 => とき
  {
    // 動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 時 => とき`,
    expected: "とき",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "surface_form": "時",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "時",
        "reading": "トキ",
        "pronunciation": "トキ"
      }
    ]
  },
  {
    // 形容詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 時 => とき`,
    expected: "とき",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "形容詞"
      },
      {
        "surface_form": "時",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "時",
        "reading": "トキ",
        "pronunciation": "トキ"
      }
    ]
  },
  {
    // 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 時 => とき`,
    expected: "とき",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "surface_form": "時",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "時",
        "reading": "トキ",
        "pronunciation": "トキ"
      }
    ]
  },
  {
    // 助動詞 + 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 時 => とき`,
    expected: "とき",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "pos": "助動詞"
      },
      {
        "surface_form": "時",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "時",
        "reading": "トキ",
        "pronunciation": "トキ"
      }
    ]
  },
  // 所 => ところ
  {
    // 動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 所 => ところ`,
    expected: "ところ",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "surface_form": "所",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "所",
        "reading": "トコロ",
        "pronunciation": "トコロ"
      }
    ]
  },
  {
    // 形容詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 所 => ところ`,
    expected: "ところ",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "形容詞"
      },
      {
        "surface_form": "所",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "所",
        "reading": "トコロ",
        "pronunciation": "トコロ"
      }
    ]
  },
  {
    // 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 所 => ところ`,
    expected: "ところ",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "surface_form": "所",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "所",
        "reading": "トコロ",
        "pronunciation": "トコロ"
      }
    ]
  },
  {
    // 助動詞 + 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 所 => ところ`,
    expected: "ところ",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "pos": "助動詞"
      },
      {
        "surface_form": "所",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "所",
        "reading": "トコロ",
        "pronunciation": "トコロ"
      }
    ]
  },
  {
    // 名詞 + の:助詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 所 => ところ`,
    expected: "ところ",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [

      {
        "pos": "名詞"
      },
      {
        "surface_form": "の",
        "pos": "助詞",
        "pos_detail_1": "連体化",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "の",
        "reading": "ノ",
        "pronunciation": "ノ"
      },
      {
        "surface_form": "所",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "副詞可能",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "所",
        "reading": "トコロ",
        "pronunciation": "トコロ"
      }
    ]
  },
  // 方 => ほう
  {
    // 動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 方 => ほう`,
    expected: "ほう",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "surface_form": "方",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "方",
        "reading": "ホウ",
        "pronunciation": "ホー"
      }
    ]
  },
  {
    // 形容詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 方 => ほう`,
    expected: "ほう",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "形容詞"
      },
      {
        "surface_form": "方",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "方",
        "reading": "ホウ",
        "pronunciation": "ホー"
      }
    ]
  },
  {
    // 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 方 => ほう`,
    expected: "ほう",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "surface_form": "方",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "方",
        "reading": "ホウ",
        "pronunciation": "ホー"
      }
    ]
  },
  {
    // 助動詞 + 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 方 => ほう`,
    expected: "ほう",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "pos": "助動詞"
      },
      {
        "surface_form": "方",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "方",
        "reading": "ホウ",
        "pronunciation": "ホー"
      }
    ]
  },
  // 訳 => わけ
  {
    // 動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 訳 => わけ`,
    expected: "わけ",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "surface_form": "訳",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "訳",
        "reading": "ワケ",
        "pronunciation": "ワケ"
      }
    ]
  },
  {
    // 形容詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 訳 => わけ`,
    expected: "わけ",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "形容詞"
      },
      {
        "surface_form": "訳",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "訳",
        "reading": "ワケ",
        "pronunciation": "ワケ"
      }
    ]
  },
  {
    // 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 訳 => わけ`,
    expected: "わけ",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "surface_form": "訳",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "訳",
        "reading": "ワケ",
        "pronunciation": "ワケ"
      }
    ]
  },
  {
    // 助動詞 + 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 訳 => わけ`,
    expected: "わけ",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "助動詞"
      },
      {
        "pos": "助動詞"
      },
      {
        "surface_form": "訳",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "訳",
        "reading": "ワケ",
        "pronunciation": "ワケ"
      }
    ]
  },
  // 物 => もの
  {
    // 動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 物 => もの`,
    expected: "もの",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "surface_form": "物",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "物",
        "reading": "モノ",
        "pronunciation": "モノ"
      }
    ]
  },
  {
    // 形容詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 物 => もの`,
    expected: "もの",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "形容詞"
      },
      {
        "surface_form": "物",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "物",
        "reading": "モノ",
        "pronunciation": "モノ"
      }
    ]
  },
  {
    // 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 物 => もの`,
    expected: "もの",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [
      {
        "pos": "助動詞"
      },
      {
        "surface_form": "物",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "物",
        "reading": "モノ",
        "pronunciation": "モノ"
      }
    ]
  },
  {
    // 助動詞 + 助動詞 + 形式名詞
    message: `ひらがなで表記したほうが読みやすい形式名詞: 物 => もの`,
    expected: "もの",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [
      {
        "pos": "助動詞"
      },
      {
        "pos": "助動詞"
      },
      {
        "surface_form": "物",
        "pos": "名詞",
        "pos_detail_1": "非自立",
        "pos_detail_2": "一般",
        "pos_detail_3": "*",
        "conjugated_type": "*",
        "conjugated_form": "*",
        "basic_form": "物",
        "reading": "モノ",
        "pronunciation": "モノ"
      }
    ]
  }
];