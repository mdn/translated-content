---
title: short_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/short_name
l10n:
  sourceCommit: d86e14de2e66319fc0a0ec0539a05400dea5a453
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">类型</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">强制性</th>
      <td>不强制</td>
    </tr>
    <tr>
      <th scope="row">Manifest 版本</th>
      <td>2 或更高</td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td><pre class="brush: json">"short_name": "My Extension"</pre></td>
    </tr>
  </tbody>
</table>

附加组件的短名称。一般用在 [name](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) 字段太长的情况下。建议短名称的长度不要超过 12 个字符。如果没有在 manifest.json 主文件中声明 short_name, 则将使用 name 的值，且可能会被截断。

这是一个[可本地化属性](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Internationalization#国际化_manifest.json)。

## 示例

```json
"short_name": "My Extension"
```

## 浏览器兼容性

{{Compat}}
