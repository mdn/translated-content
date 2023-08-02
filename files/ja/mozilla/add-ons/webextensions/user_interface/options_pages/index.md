---
title: オプションページ
slug: Mozilla/Add-ons/WebExtensions/user_interface/Options_pages
---

{{AddonSidebar}}

オプションページでは、ユーザーから変更できるような拡張機能の設定画面を定義することができます。ユーザーはアドオンマネージャーを通じて、アドオンのオプションページにアクセスすることができます。

{{EmbedYouTube("eODy24csH5M")}}

このページにユーザーがアクセスする方法や、ブラウザー UI との連携については各ブラウザーによって異なります。

このページは、プログラムから [`runtime.openOptionsPage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/openOptionsPage) を呼び出して開くこともできます。

オプションページにはコンテンツセキュリティポリシーがあり、リソースの読み込み元のソースを制限したり、 [`eval()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/eval) のような安全でない行為を禁止したりすることができます。詳細は[コンテンツセキュリティポリシー](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy)を参照してください。

## オプションページの設定

オプションページを作成するには、ページを定義する HTML を書きます。このページは通常のページと同様に、 CSS と JavaScript ファイルを入れることができます。このページは、 [favourite-color](https://github.com/mdn/webextensions-examples/tree/master/favourite-colour) の例から取ってきていて、 JavaScript ファイルが含まれています。

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
  </head>

  <body>
    <form>
      <label>Favorite color</label>
      <input type="text" id="color" />
      <button type="submit">Save</button>
    </form>
    <script src="options.js"></script>
  </body>
</html>
```

このページ内で動く JavaScript は、すべての [WebExtension API](/ja/Add-ons/WebExtensions/API) のうち、アドオンが[権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)を持っているものを使用することができます。特に、設定を保管する [`storage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage) API が利用できます。

ページファイルを拡張機能の中にパッケージします。

[`options_ui`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) キーを manifest.json に書く必要もあります。これがページの URL を指定します。

```json
"options_ui": {
  "page": "options.html",
  "browser_style": true
},
```

> **メモ:** **Google Chrome** と **Opera** は `chrome_style` を `browser_style` の代わりに使用しますので、これらに対応する場合は、両方のキーを追加する必要があります。

[`options_ui`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_ui) ページでオプションページと背景やコンテンツスクリプトの**共有オプション**を参照してください。

## オプションコンテンツのデザイン

Firefox のスタイルにマッチするオプションコンテンツをデザインする方法は [Photon Design System](https://design.firefox.com/photon/index.html) および[ブラウザースタイル](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)の文書を参照してください。

## 例

GitHub の [webextensions-examples](https://github.com/mdn/webextensions-examples) リポジトリーでは、オプションページを機能を実装している [favourite-color](https://github.com/mdn/webextensions-examples/tree/master/favourite-colour) の例があります。
