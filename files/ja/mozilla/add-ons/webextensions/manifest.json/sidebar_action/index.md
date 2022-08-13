---
title: sidebar_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action
tags:
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action
---
{{AddonSidebar}}

| 型   | `Object` |
| ---- | -------- |
| 必須 | いいえ   |
| 例   | ```json  |

"sidebar_action": { "default_icon": { "16": "button/geo-16.png", "32": "button/geo-32.png" }, "default_title": "My sidebar", "default_panel": "sidebar/sidebar.html" }

````|

[サイドバー](/ja/docs/Mozilla/Add-ons/WebExtensions/Sidebars)はブラウザーウィンドウの左側の、ウェブページの横に表示されるペインです。ブラウザーはユーザーに現在利用できるサイドバーを表示して表示するサイドバーを選ぶUIを提供します。

sidebar_action キーによりサイドバーの既定のプロパティを定義できます。このプロパティは {{WebExtAPIRef("sidebarAction")}} API.を使って変更できます。

## 構文

`sidebar_action` キーは下記に載っているプロパティを持つことのあるオブジェクトです。唯一の必須プロパティは `default_panel` です。

| 名前              | 型                    | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `browser_style` | `Boolean`            | オプション、デフォルトでは `true`。Use this to include a stylesheet in your popup that will make it look consistent with the browser's UI and with other extensions that use the `browser_style` property.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `default_icon`  | `Object` or `String` | これはサイドバーのアイコンを指定するのに使います。このアイコンはブラウザーのUI内でサイドバーを開いたり閉じたりするのに表示されます。Icons are specified as URLs relative to the manifest.json file itself.You can specify a single icon file by supplying a string here:```json
"default_icon": "path/to/geo.svg"
```To specify multiple icons in different sizes, specify an object here. The name of each property is the icon's height in pixels, and must be convertible to an integer. The value is the URL. For example:```json
    "default_icon": {       "16": "path/to/geo-16.png",       "32": "path/to/geo-32.png"     }
```See [Choosing icon sizes](/ja/Add-ons/WebExtensions/manifest.json/browser_action#Choosing_icon_sizes) for more guidance on this.This property is optional: if it is omitted, the sidebar doesn't get an icon. |
| `default_panel` | `String`             | サイドバーのコンテンツを指定する HTML ファイルのパス。HTML ファイルには、普通のウェブページと同様に CSS と JavaScript ファイルを [`<link>`](/ja/docs/Web/HTML/Element/link) と [`<script>`](/ja/docs/Web/HTML/Element/script) 要素を使って入れることができます。普通のウェブページと異なり、パネル内で実行される JavaScript はすべての [WebExtension APIs](/ja/Add-ons/WebExtensions/API) にアクセスできます(もちろん、拡張機能が持っている[権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)に従います)。このプロパティは必須です。これは[ローカライズ可能なプロパティです。](/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json)                                                                                                                                                                                                                                                                  |
| `default_title` | `String`             | サイドバーのタイトル。これはブラウザーのUIの中でサイドバーを一覧したり開くのに使われ、サイドバーが開いた時には上に表示されます。This property is optional: if it is omitted, the sidebar's title is the extension's [`name`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name).This is a [localizable property](/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json).                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## 例

```json
"sidebar_action": {
  "default_icon": "sidebar.svg",
  "default_title": "My sidebar!",
  "default_panel": "sidebar.html",
  "browser_style": true
}
````

For a simple example of an extension that uses a sidebar, see [annotate-page](https://github.com/mdn/webextensions-examples/tree/master/annotate-page).

## ブラウザ実装状況

{{Compat("webextensions.manifest.sidebar_action")}}
