---
title: default_locale
slug: Mozilla/Add-ons/WebExtensions/manifest.json/default_locale
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>
        条件次第: _locales
        サブディレクトリーがある場合は必要で、そうでない場合は不要。
      </td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td><pre class="brush: json">"default_locale": "en"</pre></td>
    </tr>
  </tbody>
</table>

このキーは拡張機能が \_locales ディレクトリーを含んでいる場合は必要で、そうでない場合は不要です。これは \_locales のサブディレクトリーを識別し、このサブディレクトリーは拡張機能の既定の文字列を探すために使用されます。

[国際化](/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization)を見てください。

## 例

```json
"default_locale": "en"
```

## ブラウザーの互換性

{{Compat}}
