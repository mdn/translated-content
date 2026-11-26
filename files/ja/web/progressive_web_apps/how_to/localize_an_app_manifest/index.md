---
title: アプリマニフェストをローカライズする
slug: Web/Progressive_web_apps/How_to/Localize_an_app_manifest
l10n:
  sourceCommit: 429a5b3c0a9363f7f9c700d56380af6226d2348f
---

[プログレッシブウェブアプリ (PWA)](/ja/docs/Web/Progressive_web_apps) のマニフェストをローカライズすると、ブラウザーの言語設定に基づいて、ユーザーのロケールに最適なテキスト文字列やアイコンを選択できます。マニフェストは、[`_localized`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized) を接尾辞に持つローカライズ可能なメンバーを使ってローカライズできます。

このガイドでは、PWA マニフェストをローカライズする方法を説明します。

## ローカライズ前の PWA

このガイドでは、次の例を出発点として、多言語対応の PWA マニフェストを作成します。

```json
{
  "name": "The SuperSausage sausage app",
  "short_name": "SuperSausage",
  "description": "Find information on all your favorite sausages!",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ab510d",
  "icons": [
    {
      "src": "./icons/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "shortcuts": [
    {
      "name": "Open menu",
      "short_name": "Menu",
      "description": "Go to the menu.",
      "url": "./menu",
      "icons": [
        {
          "src": "./icons/menu-128.png",
          "sizes": "128x128",
          "type": "image/png",
          "purpose": "any"
        }
      ]
    }
  ]
}
```

## ローカライズするマニフェストメンバーを選ぶ

以下のメンバーはローカライズされた値に対応しています。

- [`name`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/name)
- [`short_name`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/short_name)
- [`description`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/description)
- [`icons`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/icons)
- [`shortcuts`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/shortcuts)

サンプルのマニフェストにはこれらすべてのメンバーが含まれています。それぞれをローカライズする方法を見ていきましょう。

## 対応する言語を選ぶ

一般に、主な対象ユーザーのロケールに関係する言語すべてに対応することをおすすめします。

この例では、フランス語 (`fr`)、カナダフランス語 (`fr-CA`)、ドイツ語 (`de`)、ウルドゥー語 (`ur`)、日本語 (`ja`) に対応します。

## `name` メンバーのローカライズ

`name` メンバーのローカライズ版は `name_localized` メンバーに記述します。`name_localized` 内の各プロパティのキーは、対象言語の {{glossary("BCP 47 language tag", "BCP 47 言語タグ")}} のいずれかと一致させる必要があります。値には、その言語にローカライズしたテキストを表すオブジェクトまたは文字列を指定します。

例を見てみましょう。

```json
"name_localized": {
  "fr": "L'application de saucisse SuperSausage",
  "de": "Die SuperWurst-App",
  "ur": "سپر ساسیج ساسیج ایپ",
  "ja": "スーパーソーセージのソーセージアプリ"
}
```

ユーザーのブラウザー言語が `fr`、`de`、`ur`、`ja` のいずれかに設定されている場合、ブラウザーは `name_localized` メンバーから該当する言語の名前を選び、アプリの `name` として使用します。それ以外の場合は、`name` メンバーに指定された名前を使用します。

ブラウザー言語を `fr-CA` に設定したカナダフランス語のユーザーには、`fr` の値が使用されます。関連する言語のバリエーションが複数指定されている場合、ブラウザーはより詳細な言語タグを優先して照合し、一致しなければ、より一般的なタグを使います。この例では `fr-CA` の値が指定されていないため、そのユーザーには `fr` の値が使われます。

## その他のテキストメンバーのローカライズ

`name` メンバーと同じパターンで、`short_name` メンバーと `description` メンバーもローカライズできます。

```json
"short_name_localized": {
  "fr": {
    "lang": "en-US",
    "value": "Sausage Super"
  },
  "de": "SuperWurst",
  "ur": "سپر ساسیج",
  "ja": "スーパーソーセージ"
},
"description_localized": {
  "fr": "Trouvez des informations sur toutes vos saucisses préférées!",
  "de": "Finden Sie Informationen zu all Ihren Lieblingswürstchen!",
  "ur": "اپنی تمام پسندیدہ ساسیجز کے بارے میں معلومات حاصل کریں!",
  "ja": "お気に入りのソーセージに関する情報を見つけましょう！"
},
```

フランス語 (`fr`) の `short_name` の値は、`lang` プロパティを指定するオブジェクト形式の一般的な使用例です。この場合、フランス語のユーザーには英語ブランド名の別表記である "Sausage Super" でアプリが知られているため、発音などの目的で、フランス語ではなく英語として扱うよう指定しています。

## `icons` メンバーのローカライズ

`icons_localized` メンバーの各プロパティには、ローカライズ済みアイコンの詳細を示すオブジェクトの配列を指定します。各オブジェクトには、ローカライズ前の `icons` メンバーと同じプロパティが含まれます。

例を示します。

```json
"icons_localized": {
  "fr": [
    {
      "src": "./icons/l10n/fr/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/fr/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "fr-CA": [
    {
      "src": "./icons/l10n/fr-CA/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/fr-CA/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "de": [
    {
      "src": "./icons/l10n/de/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/de/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "ur": [
    {
      "src": "./icons/l10n/ur/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/ur/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "ja": [
    {
      "src": "./icons/l10n/ja/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/l10n/ja/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
}
```

この例では、カナダフランス語のユーザー向けに固有のバリエーションを用意しています。`fr` のテキストは `fr` と `fr-CA` のユーザーのどちらにも適していますが、カナダのロケールに合ったアイコンを明示的に用意するのもよいでしょう。ブラウザー言語を `fr-CA` に設定したユーザーには `fr-CA` のアイコンが使われ、`fr` に設定したユーザーには `fr` のアイコンが使われます。

## `shortcuts` メンバーのローカライズ

`shortcuts` メンバーの場合、ローカライズした値を `shortcuts_localized` メンバー内に指定するのではありません。代わりに、`shortcuts` メンバー内の各ショートカットオブジェクトに、`name`、`short_name`、`description`、`icons` メンバーの `*_localized` 版を指定します。

この例では、次のようになります。

```json
"shortcuts": [
  {
    "name": "Open menu",
    "name_localized": {
      "fr": "Menu ouvert",
      "de": "Menü öffnen",
      "ur": "اوپن مینو",
      "ja": "メニューを開く"
    },
    "short_name": "Menu",
    "short_name_localized": {
      "fr": "Menu",
      "de": "Speisekarte",
      "ur": "مینو",
      "ja": "メニュー"
    },
    "description": "Go to the menu.",
    "description_localized": {
      "fr": "Allez au menu.",
      "de": "Geh zur Speisekarte.",
      "ur": "مینو پر جائیں۔",
      "ja": "メニューに移動します。"
    },
    "url": "./menu",
    "icons": [
      { "src": "./icons/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
    ],
    "icons_localized": {
      "fr": [
        { "src": "./icons/l10n/fr/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "de": [
        { "src": "./icons/l10n/de/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "ur": [
        { "src": "./icons/l10n/ur/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ],
      "ja": [
        { "src": "./icons/l10n/ja/menu-128.png", "sizes": "128x128", "type": "image/png", "purpose": "any" }
      ]
    }
  }
]
```

## 完成したマニフェスト

これまでの内容をまとめると、マニフェスト全体は次のようになります。

```json
{
  "name": "The SuperSausage sausage app",
  "short_name": "SuperSausage",
  "description": "Find information on all your favorite sausages!",
  "start_url": "./",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#ab510d",
  "icons": [
    {
      "src": "./icons/saus-128.png",
      "sizes": "128x128",
      "type": "image/png"
    },
    {
      "src": "./icons/saus-256.png",
      "sizes": "256x256",
      "type": "image/png"
    }
  ],
  "name_localized": {
    "fr": "L'application de saucisse SuperSausage",
    "de": "Die SuperWurst-App",
    "ur": "سپر ساسیج ساسیج ایپ",
    "ja": "スーパーソーセージのソーセージアプリ"
  },
  "short_name_localized": {
    "fr": {
      "lang": "en-US",
      "value": "Sausage Super"
    },
    "de": "SuperWurst",
    "ur": "سپر ساسیج",
    "ja": "スーパーソーセージ"
  },
  "description_localized": {
    "fr": "Trouvez des informations sur toutes vos saucisses préférées !",
    "de": "Finden Sie Informationen zu all Ihren Lieblingswürstchen!",
    "ur": "اپنی تمام پسندیدہ ساسیجز کے بارے میں معلومات حاصل کریں!",
    "ja": "お気に入りのソーセージに関する情報を見つけましょう！"
  },
  "icons_localized": {
    "fr": [
      {
        "src": "./icons/l10n/fr/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/fr/saus-256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ],
    "fr-CA": [
      {
        "src": "./icons/l10n/fr-CA/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/fr-CA/saus-256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ],
    "de": [
      {
        "src": "./icons/l10n/de/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/de/saus-256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ],
    "ur": [
      {
        "src": "./icons/l10n/ur/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/ur/saus-256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ],
    "ja": [
      {
        "src": "./icons/l10n/ja/saus-128.png",
        "sizes": "128x128",
        "type": "image/png"
      },
      {
        "src": "./icons/l10n/ja/saus-256.png",
        "sizes": "256x256",
        "type": "image/png"
      }
    ]
  },
  "shortcuts": [
    {
      "name": "Open menu",
      "name_localized": {
        "fr": "Menu ouvert",
        "de": "Menü öffnen",
        "ur": "اوپن مینو",
        "ja": "メニューを開く"
      },
      "short_name": "Menu",
      "short_name_localized": {
        "fr": "Menu",
        "de": "Speisekarte",
        "ur": "مینو",
        "ja": "メニュー"
      },
      "description": "Go to the menu.",
      "description_localized": {
        "fr": "Allez au menu.",
        "de": "Geh zur Speisekarte.",
        "ur": "مینو پر جائیں۔",
        "ja": "メニューに移動します。"
      },
      "url": "./menu",
      "icons": [
        {
          "src": "./icons/menu-128.png",
          "sizes": "128x128",
          "type": "image/png",
          "purpose": "any"
        }
      ],
      "icons_localized": {
        "fr": [
          {
            "src": "./icons/l10n/fr/menu-128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "any"
          }
        ],
        "de": [
          {
            "src": "./icons/l10n/de/menu-128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "any"
          }
        ],
        "ur": [
          {
            "src": "./icons/l10n/ur/menu-128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "any"
          }
        ],
        "ja": [
          {
            "src": "./icons/l10n/ja/menu-128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "any"
          }
        ]
      }
    }
  ]
}
```

## 関連情報

- [`*_localized`](/ja/docs/Web/Progressive_web_apps/Manifest/Reference/*_localized) マニフェストメンバー
- [ウェブアプリマニフェストのローカライズ対応](https://developer.chrome.com/blog/manifest-localization)<sup>(英語)</sup> (developer.chrome.com, 2026)
