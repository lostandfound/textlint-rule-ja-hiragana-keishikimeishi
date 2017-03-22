// http://www.yamanouchi-yri.com/yrihp/techwrt-2-4s/t-2-4s03fb.htm
module.exports = [{
    message: `ひらがなで表記したほうが読みやすい形式名詞: "上" => "うえ"`,
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
  }, {
    message: `ひらがなで表記したほうが読みやすい形式名詞: "上" => "うえ"`,
    expected: "うえ",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "surface_form": "た",
        "pos": "助動詞",
        "pos_detail_1": "*",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "特殊・タ",
        "conjugated_form": "基本形",
        "basic_form": "た",
        "reading": "タ",
        "pronunciation": "タ"
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
    message: `ひらがなで表記したほうが読みやすい形式名詞: "事" => "こと"`,
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
  }, {
    message: `ひらがなで表記したほうが読みやすい形式名詞: "事" => "こと"`,
    expected: "こと",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens:

      [{
          "pos": "動詞"
        },
        {
          "surface_form": "た",
          "pos": "助動詞",
          "pos_detail_1": "*",
          "pos_detail_2": "*",
          "pos_detail_3": "*",
          "conjugated_type": "特殊・タ",
          "conjugated_form": "基本形",
          "basic_form": "た",
          "reading": "タ",
          "pronunciation": "タ"
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
    message: `ひらがなで表記したほうが読みやすい形式名詞: "事" => "こと"`,
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
  }, {
    message: `ひらがなで表記したほうが読みやすい形式名詞: "事" => "こと"`,
    expected: "こと",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "形容詞"
      },
      {
        "surface_form": "た",
        "pos": "助動詞",
        "pos_detail_1": "*",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "特殊・タ",
        "conjugated_form": "基本形",
        "basic_form": "た",
        "reading": "タ",
        "pronunciation": "タ"
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
    message: `ひらがなで表記したほうが読みやすい形式名詞: "毎" => "ごと"`,
    expected: "ごと",
    extensions: {},
    tokens: [{
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
    }]
  },
  {
    message: `ひらがなで表記したほうが読みやすい形式名詞: "度" => "たび"`,
    expected: "たび",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
      "pos": "動詞"
    }, {
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
    }, ]
  }, {
    message: `ひらがなで表記したほうが読みやすい形式名詞: "為" => "ため"`,
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
  }, {
    message: `ひらがなで表記したほうが読みやすい形式名詞: "為" => "ため"`,
    expected: "ため",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "surface_form": "た",
        "pos": "助動詞",
        "pos_detail_1": "*",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "特殊・タ",
        "conjugated_form": "基本形",
        "basic_form": "た",
        "reading": "タ",
        "pronunciation": "タ"
      }, {
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
    message: `ひらがなで表記したほうが読みやすい形式名詞: "為" => "ため"`,
    expected: "ため",
    extensions: {
      offset: 1 // 置換をスタートするtokenの添字
    },
    tokens: [{
      "pos": "形容詞"
    }, {
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
    }]
  }, {
    message: `ひらがなで表記したほうが読みやすい形式名詞: "為" => "ため"`,
    expected: "ため",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "形容詞"
      },
      {
        "surface_form": "た",
        "pos": "助動詞",
        "pos_detail_1": "*",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "特殊・タ",
        "conjugated_form": "基本形",
        "basic_form": "た",
        "reading": "タ",
        "pronunciation": "タ"
      }, {
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
  }, {
    message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
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
  }, {
    message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
    expected: "とき",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "surface_form": "た",
        "pos": "助動詞",
        "pos_detail_1": "*",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "特殊・タ",
        "conjugated_form": "基本形",
        "basic_form": "た",
        "reading": "タ",
        "pronunciation": "タ"
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
  , {
    message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
    expected: "とき",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "動詞"
      },
      {
        "pos": "動詞",
        "pos_detail_1": "接尾"
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
    message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
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
    }]
  }, {
    message: `ひらがなで表記したほうが読みやすい形式名詞: "時" => "とき"`,
    expected: "とき",
    extensions: {
      offset: 2 // 置換をスタートするtokenの添字
    },
    tokens: [{
        "pos": "形容詞"
      },
      {
        "surface_form": "た",
        "pos": "助動詞",
        "pos_detail_1": "*",
        "pos_detail_2": "*",
        "pos_detail_3": "*",
        "conjugated_type": "特殊・タ",
        "conjugated_form": "基本形",
        "basic_form": "た",
        "reading": "タ",
        "pronunciation": "タ"
      }, {
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
  }
]