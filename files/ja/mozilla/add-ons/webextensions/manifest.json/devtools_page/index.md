---
title: devtools_page
slug: Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page
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
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"devtools_page": "devtools/my-page.html"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

このキーを使って拡張機能にブラウザー組み込みの開発ツールを拡張することができます。

このキーは HTML ファイルの URL として定義されます。その HTML ファイルは拡張機能に同梱し、URL は拡張機能のルートからの相対パスである必要があります。

詳しくは [開発者ツールの拡張](/ja/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)を見てください。

## 例

```json
"devtools_page": "devtools/my-page.html"
```

## ブラウザーの互換性

{{Compat}}
