---
title: options_ui
slug: Mozilla/Add-ons/WebExtensions/manifest.json/options_ui
l10n:
  sourceCommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">マニフェストバージョン</th>
      <td>2 以上</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json;">
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

`options_ui` を拡張機能にパッケージされた HTML ファイルへのパスとして指定します。通常のウェブページのように、HTML、CSS、JavaScript ファイルを含めることができます。しかし、通常のページと異なり、拡張機能が[権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)を持つすべての [WebExtension API](/ja/docs/Mozilla/Add-ons/WebExtensions/API) を使用できます。しかし、バックグラウンドスクリプトとは異なるスコープで実行されます。

**オプションページ**と**バックグラウンドスクリプト**の JavaScript 上で、データや関数を**共有したい**場合、バックグラウンドスクリプトの [Window](/ja/docs/Web/API/Window) への参照を {{WebExtAPIRef("extension.getBackgroundPage()")}} を使用して直接取得するか、拡張機能内で実行されているいずれかのページの {{domxref("Window")}} を {{WebExtAPIRef("extension.getViews()")}} で取得します。あるいは、JavaScript で {{WebExtAPIRef("runtime.sendMessage()")}}、{{WebExtAPIRef("runtime.onMessage")}}、{{WebExtAPIRef("runtime.connect()")}} を使用することで、オプションページとバックグラウンドスクリプト間で相互にコミュニケーションできます。
後者の方法 (や同等の {{WebExtAPIRef("runtime.Port")}} ) でも [バックグラウンドスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts)と **[コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)** とでオプションを共有できます。

一般的に、オプションページで変更されたオプションは、{{WebExtAPIRef("storage", "ストレージ API", "", "true")}} を使用して、{{WebExtAPIRef("storage.sync()")}} (ユーザーがログインしているすべてのブラウザーインスタンス間で設定を同期する場合) か {{WebExtAPIRef("storage.local()")}} (現在のマシン / プロファイルのローカル設定にする場合) のいずれかに保存します。バックグラウンドスクリプトに変更を通知する必要がある場合、[バックグラウンドスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts)で {{WebExtAPIRef("storage.onChanged")}} にリスナーを追加します。

## 構文

`options_ui` キーは次のコンテンツを持つオブジェクトです。

| `open_in_tab` | `Boolean` | 省略可能。既定値は `false`。`true` の場合、オプションページはブラウザーのアドオンマネージャーに統合されたものではなく、通常のブラウザータブで開かれる。 |
| `page` | `String` | 必須。オプションページの仕様を含む HTML ファイルへのパス。パスは manifest.json 自体への相対パス。 |

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">名前</th>
      <th scope="col">型</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><a
            href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles"
            >browser_style</a
          ></code
        ><br />{{optional_inline}}
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>既定値は <code>true</code> です。</p>
        <p>
          ブラウザーの UI と、<code>browser_style</code> プロパティを使用する他の拡張機能とで見た目が一致するようにするスタイルシートを、ページに記載するために使用します。既定値は <code>true</code> ですが、このプロパティを記載することをお勧めします。
        </p>
        <p>
          Firefox では <code>chrome://browser/content/extension.css</code>、macOS では <code>chrome://browser/content/extension-mac.css<code> で、このスタイルシートは見ることができます。寸法を設定する場合、このスタイルシートが現在 <code>box-sizing: border-box</code> を設定していることに注意してください（<a href="/ja/docs/Web/CSS/box-sizing">box-sizing</a> を参照してください）。
        </p>
        <p>
          <a class="external external-icon" href="https://design.firefox.com/photon/">Firefox スタイルガイド</a>では、特定のスタイルを取得するためにポップアップの要素に適用できるクラスについて記述しています。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>open_in_tab</code><br />{{optional_inline}}</td>
      <td><code>Boolean</code></td>
      <td>
        <p>既定値は <code>false</code> です。</p>
        <p>
          <code>true</code> の場合、オプションページはブラウザーのアドオンマネージャーに統合されるのではなく、通常のブラウザータブで開かれます。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>page</code></td>
      <td><code>String</code></td>
      <td>
        <p>必須です。</p>
        <p>
          オプションページの仕様を含む HTML ファイルへのパスです。
        </p>
        <p>
          パスは <code>manifest.json</code> 自体の位置からの相対パスです。
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 例

```json
"options_ui": {
  "page": "options/options.html"
}
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`options_page`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/options_page) {{deprecated_inline}}
- [ブラウザースタイル](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles)
- [オプションページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)
