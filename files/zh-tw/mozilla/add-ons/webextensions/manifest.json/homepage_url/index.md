---
title: homepage_url
slug: Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">型別</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">強制</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">範例</th>
      <td>
        <pre class="brush: json">
"homepage_url": "https://example.org/my-addon"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

套件首頁的 URL。

如果有 [developer](/zh-TW/Add-ons/WebExtensions/manifest.json/developer) 鍵且它包含 "url" 屬性，這會覆蓋 homepage_url 鍵。

這是一個[可侷限的屬性](/zh-TW/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json)。

## 範例

```json
"homepage_url": "https://github.com/mdn/webextensions-examples/tree/main/beastify"
```

## 瀏覽器兼容性

{{Compat}}
