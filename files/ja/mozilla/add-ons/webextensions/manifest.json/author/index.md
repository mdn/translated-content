---
title: author
slug: Mozilla/Add-ons/WebExtensions/manifest.json/author
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
        <pre class="brush: json no-line-numbers">"author": "Walt Whitman"</pre>
      </td>
    </tr>
  </tbody>
</table>

拡張機能の作者で、ブラウザーの UI で表示されることを目的とするものです。[developer](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) キーが与えられてそこに "name" プロパティが含まれる場合、それは author キーを上書きします。複数の作者を指定する方法はありません。

これは[ローカライズ可能なプロパティ](/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json)です。

## 例

```json
"author": "Walt Whitman"
```

## ブラウザーの互換性

{{Compat}}
