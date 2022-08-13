---
title: page_action
slug: Mozilla/Add-ons/WebExtensions/manifest.json/page_action
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/page_action
---
{{AddonSidebar}}

| 型   | `Object` |
| ---- | -------- |
| 必須 | いいえ   |
| 例   | ```json  |

"page_action": { "browser_style": true, "default_icon": { "19": "button/geo-19.png", "38": "button/geo-38.png" }, "default_title": "Whereami?", "default_popup": "popup/geo.html" }

````|

ページアクションは拡張機能がブラウザーのURLバーの中に追加できるアイコンです。

拡張機能では関連したポップアップをつけて、そこでHTML、CSS、 JavaScript を使ったコンテンツを提供することもできます。

ポップアップを提供した場合、ユーザーがアイコンをクリックした時にポップアップが開いて、ポップアップ内で実行する JavaScript にてユーザーのインタラクションを扱います。ポップアップをつけない場合、ユーザーがアイコンをクリックした時のクリックイベントは拡張機能の [background scripts](/ja/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_pages) に送られます。

[pageAction API](/ja/Add-ons/WebExtensions/API/pageAction) を使用してプログラムでページアクションを作成および操作することもできます。

ページアクションはブラウザアクションと似ていますが、ブラウザ全体ではなく特定の Web ページに関連付けられている点が異なります。アクションが特定のページにのみ関連している場合は、ページアクションを使用して関連するページにのみ表示する必要があります。アクションがすべてのページまたはブラウザ自体に関連している場合は、ブラウザアクションを使用してください。

ブラウザアクションはデフォルトで表示されますが、ページアクションはデフォルトで非表示になります。タブのIDを渡して [`pageAction.show()`](/ja/Add-ons/WebExtensions/API/pageAction/show) を呼び出すことで、それらを特定のタブに対して表示できます。show_matches プロパティを使用してこのデフォルトの動作を変更することもできます。

## 構文

The `page_action` key is an object that may have any of three properties, all optional:

| 名前                                                                                      | 型                                              | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`browser_style`](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles) | `Boolean`                                      | Optional, defaulting to `false`.Use this to include a stylesheet in your popup that will make it look consistent with the browser's UI and with other extensions that use the `browser_style` property. Although this key defaults to `false`, it's recommended that you include it and set it to `true` in order to make your popups consistent with the look of the rest of the browser user interface.In Firefox, the stylesheet can be seen at chrome://browser/content/extension.css, or chrome://browser/content/extension-mac.css on OS X.The [Firefox Style Guide](https://firefoxux.github.io/StyleGuide/#/controls) describes the classes you can apply to elements in the popup in order to get particular styles.The [latest-download](https://github.com/mdn/webextensions-examples/tree/master/latest-download) example extension uses `browser_style` in its popup.                                                                        |
| `default_icon`                                                                          | `Object` or `String`                           | Use this to specify an icon for the action.It's recommended that you supply two icons here, one 19x19 pixels, and one 38x38 pixels, and specify them in an object with properties named "19" and "38", like this:```json
    "default_icon": {       "19": "geo-19.png",       "38": "geo-38.png"     }
```If you do this, then the browser will pick the right size icon for the screen's pixel density.You can just supply a string here:```json
"default_icon": "geo.png"
```If you do this, then the icon will be scaled to fit the toolbar, and may appear blurry.                                                                                                                                                                                                                                                                                                                                                                                   |
| `default_popup`                                                                         | `String`                                       | The path to an HTML file containing the specification of the popup.The HTML file may include CSS and JavaScript files using [`<link>`](/ja/docs/Web/HTML/Element/link) and [`<script>`](/ja/docs/Web/HTML/Element/script) elements, just like a normal web page. However, don't use [`<script>`](/ja/docs/Web/HTML/Element/script) with embedded code, because you'll get a Content Violation Policy error. Instead, [`<script>`](/ja/docs/Web/HTML/Element/script) must use the [`src`](/ja/docs/Web/HTML/Element/script) attribute to load a separate script file.Unlike a normal web page, JavaScript running in the popup can access all the [WebExtension APIs](/ja/Add-ons/WebExtensions/API) (subject, of course, to the extension having the appropriate [permissions](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)).これは[ローカライズ可能なプロパティ](/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json)です。 |
| `default_title`                                                                         | `String`                                       | Tooltip for the icon, displayed when the user moves their mouse over it.This is a [localizable property](/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `hide_matches`                                                                          | `Array` of `Match Pattern` except `<all_urls>` | Hide the page action 既定では for pages whose URLs match any of the given [match patterns](/ja/Add-ons/WebExtensions/match_patterns).Note that page actions are always hidden 既定では unless `show_matches` is given. Therefore it only makes sense to include this property if `show_matches` is also given, and in this case it will override the patterns in `show_matches`. 例えば、consider a value like:```json
"page_action": {   "show_matches": ["https://*.mozilla.org/*"],   "hide_matches": ["https://developer.mozilla.org/*"] }
```This shows the page action 既定では for all HTTPS URLs under the "mozilla.org" domain, except for pages under "developer.mozilla.org".                                                                                                                                                                                                                                                                                  |
| `show_matches`                                                                          | `Array` of `Match Pattern`                     | Show the page action 既定では for pages whose URLs match any of the given patterns.See also `hide_matches`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `pinned`                                                                                | `Boolean`                                      | Optional, defaulting to `true`.Controls whether or not the page action should appear in the location bar 既定では when the user installs the extension.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## 例

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  }
}
````

A page action with just an icon, specified in 2 different sizes. The extension's background scripts can receive click events when the user clicks the icon using code like this:

```js
 browser.pageAction.onClicked.addListener(handleClick);
```

```json
"page_action": {
  "default_icon": {
    "19": "button/geo-19.png",
    "38": "button/geo-38.png"
  },
  "default_title": "Whereami?",
  "default_popup": "popup/geo.html"
}
```

A page action with an icon, a title, and a popup. The popup will be shown when the user clicks the icon.

## ブラウザー実装状況

{{Compat("webextensions.manifest.page_action")}}

## 関連情報

- [`browser_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action)
- [`sidebar_action`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/sidebar_action)
- [Browser styles](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
