---
title: 作者 - author
slug: Mozilla/Add-ons/WebExtensions/manifest.json/author
l10n:
  sourceCommit: d86e14de2e66319fc0a0ec0539a05400dea5a453
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">值类型</th>
      <td><code>字符串（String）</code></td>
    </tr>
    <tr>
      <th scope="row">强制性</th>
      <td>非强制</td>
    </tr>
    <tr>
      <th scope="row">Manifest 版本</th>
      <td>2 或更高</td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td><pre class="brush: json">"author": "Walt Whitman"</pre></td>
    </tr>
  </tbody>
</table>

扩展的作者，用于显示在浏览器的用户界面中。如果提供了 [developer](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) 键，并且它包含“name”属性，则它将覆盖作者键。无法指定多个作者。

这是一个[可本地化属性](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json)。

## 示例

```json
"author": "Walt Whitman"
```

## 浏览器兼容性

{{Compat}}
