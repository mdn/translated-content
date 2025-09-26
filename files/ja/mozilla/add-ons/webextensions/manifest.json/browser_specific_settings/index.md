---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
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
      <td>
        <p>
          通常は不要です (<a
            href="/ja/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_Add-on_ID"
          >
            いつ Add-on ID が必要か？</a
          >を参考に) 。Firefox 48 より前と Android版Firefox では必須です。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json;">
"browser_specific_settings": {
  "gecko": {
    "id": "addon@example.com",
    "strict_min_version": "42.0"
  }
}
</pre
        >
      </td>
    </tr>
  </tbody>
</table>

## 説明

`browser_specific_settings` キーは、特定のホストアプリケーションのキーを含みます。

### Firefox (Gecko) プロパティ

現在、4 つの文字列属性を含む `gecko` キーのみが存在します。

- `id` は [拡張機能 ID](/ja/docs/Mozilla/Add-ons/Install_Manifests#id) です。Firefox 48 からオプションですが、Firefox 48 より前では必須です。いつ特定の add-on ID が必要になるかについては、[拡張機能と Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/) を見てください。
- `strict_min_version`: サポートする Gecko の最小バージョンです。"\*" を含むバージョンは、このフィールドでは無効です。既定は "42a1" です。
- `strict_max_version`: サポートする Gecko の最大バージョンです。拡張機能がこのバージョンを超えた Firefox のバージョンにインストールや実行された場合、拡張機能は無効または、インストールが許可されません。既定は "\*" で、最大バージョンのチェックは無効です。
- `update_url` は [add-on update manifest](/ja/docs/Mozilla/Add-ons/Updates) へのリンクです。リンクは "https" で始まっている必要があることに注意してください。このキーは拡張機能が自分自身で更新を管理するためのものです(つまり AMO 以外で)。

[有効な Gecko バージョン](https://addons.mozilla.org/en-US/firefox/pages/appversions/)のリストを見てください。

### 拡張機能 ID フォーマット

拡張機能 ID は次のどれかでなければなりません:

- [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- メールアドレスのような文字列フォーマット: `extensionname@example.org`

後者のフォーマットは生成したり扱うのが簡単です。本当のメールアドレスをここで使うと SPAM を呼びかねないのに気を払ってください。

例えば：

```json
"id": "extensionname@example.org",

"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

## 例

使用可能なキーをすべて使用した例です。たいていの拡張機能では `strict_max_version` と `update_url` は省略するのに注意してください。

```json
"browser_specific_settings": {
  "gecko": {
    "id": "addon@example.com",
    "strict_min_version": "42.0",
    "strict_max_version": "50.*",
    "update_url": "https://example.com/updates.json"
  }
}
```

## ブラウザーの互換性

{{Compat}}
