---
title: homepage_url
slug: Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">值类型</th>
      <td>字符串（<code>String</code>）</td>
    </tr>
    <tr>
      <th scope="row">强制性</th>
      <td>非强制</td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td>
        <pre class="brush: json">
"homepage_url": "https://example.org/my-addon"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

该扩展的主页地址。

如果 [developer](/zh-CN/Add-ons/WebExtensions/manifest.json/developer) 键存在且包含“url”属性，它将会覆盖 `homepage_url` 键。

这是一个 [localizable property](/zh-CN/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json).

## 示例

```json
"homepage_url": "https://github.com/mdn/webextensions-examples/tree/main/beastify"
```

## 浏览器兼容性

{{Compat}}
