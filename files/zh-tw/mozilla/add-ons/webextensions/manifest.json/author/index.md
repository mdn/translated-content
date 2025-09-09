---
title: 作者
slug: Mozilla/Add-ons/WebExtensions/manifest.json/author
---

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
      <td><pre class="brush: json">"author": "cool puppy"</pre></td>
    </tr>
  </tbody>
</table>

套件作者，用來顯示在瀏覽器的用戶介面中。如果有提供 [developer](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) 鍵而且裡面包含 "name" 屬性，那會覆蓋 author 鍵。不能指定多個作者。

這是一個[可侷限的屬性](/zh-TW/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json)。

## 範例

```json
"author": "cool puppy"
```

## 瀏覽器兼容

{{Compat}}
