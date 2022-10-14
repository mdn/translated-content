---
title: options_ui
slug: Mozilla/Add-ons/WebExtensions/manifest.json/options_ui
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"options_ui": {
  "page": "options/options.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

`options_ui` キーは、拡張機能の[オプションページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)を定義するために使用します。

オプションページは、拡張機能の設定を含みます。オプションページはブラウザーのアドオンマネージャー、または拡張機能内で {{WebExtAPIRef("runtime.openOptionsPage()")}} を使用することでアクセスできます。

`options_ui` を拡張機能にパッケージされた HTML ファイルへのパスとして指定します。通常のウェブページのように、HTML、CSS、JavaScript ファイルを含めることができます。しかし、通常のページと異なり、拡張機能が[権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)を持つすべての [WebExtension API](/ja/Add-ons/WebExtensions/API) を使用できます。しかし、バックグラウンドスクリプトとは異なるスコープで実行されます。

**オプションページ**と**バックグラウンドスクリプト**の JavaScript 上で、データや関数を**共有したい**場合、{{WebExtAPIRef("extension.getBackgroundPage()")}} を使用してバックグラウンドスクリプトの [Window](/ja/docs/Web/API/Window) への参照を直接取得するか、{{WebExtAPIRef("extension.getViews()")}} で拡張機能内で実行されているいずれかのページの {{domxref("Window")}} を取得します。あるいは、JavaScript で [`runtime.sendMessage()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage) や [`runtime.onMessage`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)、[`runtime.connect()`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/connect) を使用することで、オプションページとバックグラウンドスクリプト間で相互にコミュニケーションできます。後者の方法 (や同等の [`runtime.Port`](/ja/docs/Mozilla/Add-ons/WebExtensions/API/runtime/Port) ) でも [バックグラウンドスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts)と**[コンテンツスクリプト](/ja/Add-ons/WebExtensions/Content_scripts)**とでオプションを共有できます。

一般的に、オプションページで変更されたオプションは、[storage API](/ja/Add-ons/WebExtensions/API/storage) を使用して、[storage.sync](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/sync) (ユーザーがログインしているすべてのブラウザーインスタンス間で設定を同期する場合) か [storage.local](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/local) (現在のマシン / プロファイルのローカル設定にする場合) のいずれかに保存します。バックグラウンドスクリプトに変更を通知する必要がある場合、バックグラウンドスクリプトで [storage.onChanged](/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage/onChanged) にリスナーを追加します。

## 構文

`options_ui` キーは次のコンテンツを持つオブジェクトです:

| 名前            | 型        | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `browser_style` | `Boolean` | 省略可能。既定では `true`。これを使ってページにブラウザーの UI と `browser_style` プロパティを使う他の拡張機能とで一貫した見た目とするようなスタイルシートを入れることができる。既定では `true` だが、このプロパティを入れるのは推奨される。Firefox では、chrome://browser/content/extension.css か、OS X では chrome://browser/content/extension-mac.css でスタイルシートを見ることができる。[Firefox Style Guide](https://firefoxux.github.io/StyleGuide/#/controls) はポップアップ内の要素が特定のスタイルを取るために適用させるクラスを説明している。 |
| `open_in_tab`   | `Boolean` | 省略可能。既定値は `false`。`true` の場合、オプションページはブラウザーのアドオンマネージャーに統合されたものではなく、通常のブラウザータブで開かれる。                                                                                                                                                                                                                                                                                                                                                                                                   |
| `page`          | `String`  | 必須。オプションページの仕様を含む HTML ファイルへのパス。パスは manifest.json 自体への相対パス。                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## 例

```json
  "options_ui": {
    "page": "options/options.html"
  }
```

## ブラウザーの互換性

{{Compat("webextensions.manifest.options_ui")}}
