---
title: author
slug: Mozilla/Add-ons/WebExtensions/manifest.json/author
l10n:
  sourceCommit: d86e14de2e66319fc0a0ec0539a05400dea5a453
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">类型</th>
      <td>字符串（<code>String</code>）</td>
    </tr>
    <tr>
      <th scope="row">是否必须</th>
      <td>否</td>
    </tr>
    <tr>
      <th scope="row">清单版本</th>
      <td>2 或更高</td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td><pre class="brush: json">"author": "Walt Whitman"</pre></td>
    </tr>
  </tbody>
</table>

扩展的作者，用于显示在浏览器的用户界面中。如果提供了 [developer](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) 键，并包含了“name”属性，则它将会覆盖 author 键。无法指定多个作者。

这是一个[可本地化属性](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Internationalization#国际化_manifest.json)。

## 示例

```json
"author": "Walt Whitman"
```

## 浏览器兼容性

{{Compat}}
