---
title: homepage_url
slug: Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url
tags:
  - Add-ons
  - Extensions
  - WebExtensions
translation_of: Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url
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
        <pre
          class="brush: json no-line-numbers language-json"
        ><code class="language-json"><span class="key token">"homepage_url":</span> <span class="string token">"https://example.org/my-addon"</span></code></pre>
      </td>
    </tr>
  </tbody>
</table>

拡張機能のホームページの URL です。

[developer](/ja/Add-ons/WebExtensions/manifest.json/developer) キーが提供されていて、そこに "url" プロパティが含まれている場合、homepage_url キーは上書きされます。

これは[国際化できるプロパティ](/ja/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json)です。

## 例

```json
"homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify"
```

## ブラウザーの互換性

{{Compat("webextensions.manifest.homepage_url")}}
