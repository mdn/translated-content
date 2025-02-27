---
title: homepage_url
slug: Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url
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
        <pre class="brush: json">
"homepage_url": "https://example.org/my-addon"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

拡張機能のホームページの URL です。

[developer](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) キーが提供されていて、そこに "url" プロパティが含まれている場合、homepage_url キーは上書きされます。

これは[国際化できるプロパティ](/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json)です。

## 例

```json
"homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify"
```

## ブラウザーの互換性

{{Compat}}
