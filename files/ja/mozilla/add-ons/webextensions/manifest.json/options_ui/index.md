---
title: options_ui
slug: Mozilla/Add-ons/WebExtensions/manifest.json/options_ui
l10n:
  sourceCommit: 38199423810927262c9cb4dec7ea7de4cb0c5e0f
---

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
        <pre class="brush: json">
"options_ui": {
  "page": "options/options.html"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

`options_ui` キーは、拡張機能の[オプションページ](/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages)を定義するために使用します。このページを使用すると、ユーザーが拡張機能の設定を変更できるようになります。

ユーザーがオプションページを開く方法はブラウザーによって異なり、`open_in_tab` 設定にも依存します。拡張機能から {{WebExtAPIRef("runtime.openOptionsPage()")}} を使用してページを開くこともできます。

`options_ui` を拡張機能にパッケージされた HTML ファイルへのパスとして指定します。通常のウェブページのように、HTML、CSS、JavaScript ファイルを含めることができます。しかし、通常のページと異なり、拡張機能が[権限](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions)を持つすべての [WebExtension API](/ja/docs/Mozilla/Add-ons/WebExtensions/API) を使用できます。しかし、バックグラウンドスクリプトとは異なるスコープで実行されます。

**オプションページ**と**バックグラウンドスクリプト**の JavaScript 上で、データや関数を**共有したい**場合、バックグラウンドスクリプトの [Window](/ja/docs/Web/API/Window) への参照を {{WebExtAPIRef("runtime.getBackgroundPage()")}} を使用して直接取得するか、拡張機能内で実行されているいずれかのページの {{domxref("Window")}} を {{WebExtAPIRef("extension.getViews()")}} で取得します。あるいは、JavaScript で {{WebExtAPIRef("runtime.sendMessage()")}}、{{WebExtAPIRef("runtime.onMessage")}}、{{WebExtAPIRef("runtime.connect()")}} を使用することで、オプションページとバックグラウンドスクリプト間で相互にコミュニケーションできます。
後者の方法 (や同等の {{WebExtAPIRef("runtime.Port")}} ) でも [バックグラウンドスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts)と **[コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)** とでオプションを共有できます。

一般的に、オプションページで変更された設定は、{{WebExtAPIRef("storage", "ストレージ API", "", "true")}} を使用して、{{WebExtAPIRef("storage.sync")}} (ユーザーがログインしているすべてのブラウザーインスタンス間で設定を同期する場合) または {{WebExtAPIRef("storage.local")}} (現在のマシン / プロファイルのローカル設定にする場合) に保存します。バックグラウンドスクリプトまたは[コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)が変更を知る必要がある場合、これらのスクリプトで {{WebExtAPIRef("storage.onChanged")}} にリスナーを追加できます。

## 構文

`options_ui` キーは次のコンテンツを持つオブジェクトです。

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
        <br />Manifest V3 では {{deprecated_inline}}
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>省略可能です。デフォルト値は次のとおりです。</p>
        <ul>
          <li>Manifest V2、および Firefox 115 より前の Manifest V3 では <code>true</code></li>
          <li>Firefox 115 以降の Manifest V3 では <code>false</code></li>
        </ul>
        <div class="notecard warning">
          <p>
            <code>browser_style</code> を <code>true</code> に設定しないでください。Firefox 118 以降の Manifest V3 ではサポートされていません。<a href="/ja/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_styles#manifest_v3_migration">Manifest V3 への <code>browser_style</code> の移行</a>を参照してください。
          </p>
        </div>
        <p>
          Firefox では <code>chrome://browser/content/extension.css</code>、macOS では <code>chrome://browser/content/extension-mac.css</code> でこのスタイルシートを確認できます。寸法を設定する場合、このスタイルシートが <code>box-sizing: border-box</code> を設定していることに注意してください（<a href="/ja/docs/Web/CSS/Reference/Properties/box-sizing">box-sizing</a> を参照してください）。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>open_in_tab</code><br />{{optional_inline}}</td>
      <td><code>Boolean</code></td>
      <td>
        <ul>
          <li><code>false</code> の場合、オプションページはブラウザーのアドオンマネージャーで開きます。</li>
          <li><code>true</code> の場合、オプションページは通常のブラウザータブで開きます。</li>
        </ul>
        <p>デフォルト値は <code>false</code> です。</p>
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
