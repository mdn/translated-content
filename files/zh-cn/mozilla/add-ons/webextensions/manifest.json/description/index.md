---
title: 描述 - description
slug: Mozilla/Add-ons/WebExtensions/manifest.json/description
l10n:
  sourceCommit: d86e14de2e66319fc0a0ec0539a05400dea5a453
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">值类型</th>
      <td><code>字符串</code></td>
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
      <td>
        <pre class="brush: json">
"description": "Replaces pictures with pictures of cats."</pre
        >
      </td>
    </tr>
  </tbody>
</table>

扩展的简短描述，用于在浏览器的用户界面中显示。在 Firefox 和 Chrome 中，此值最多可以达到 132 个字符。在其他浏览器中，限制可能不同。

这是一个[可本地化属性](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json)。

## 示例

```json
"description": "Replaces pictures with pictures of cats."
```

## 浏览器兼容性

{{Compat}}
