---
title: short_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/short_name
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
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"short_name": "My Extension"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

拡張機能の短い名前。与えられた場合、これは [name](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) 項目が長過ぎるコンテキストで使われます。短い名前は 12 文字を超えないことが推奨されます。manifest.json に短い名前が入ってない場合、name が代わりに使われて切り捨てられることがあります。

これは[ローカライズ可能なプロパティ](/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json)です。

## 例

```json
"short_name": "My Extension"
```

## ブラウザーの互換性

{{Compat}}
