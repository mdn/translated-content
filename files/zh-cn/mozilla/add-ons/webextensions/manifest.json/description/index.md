---
title: description
slug: Mozilla/Add-ons/WebExtensions/manifest.json/description
l10n:
  sourceCommit: d86e14de2e66319fc0a0ec0539a05400dea5a453
---

<table class="fullwidth-table">
  <tbody>
    <tr>
      <th scope="row">类型</th>
      <td><code>字符串</code></td>
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
      <td>
        <pre class="brush: json">
"description": "Replaces pictures with pictures of cats."</pre
        >
      </td>
    </tr>
  </tbody>
</table>

扩展的简短描述，用于在浏览器的用户界面中显示。在 Firefox 和 Chrome 中，此值最多可以达到 132 个字符。在其他浏览器中，限制可能不同。

这是一个[可本地化属性](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Internationalization#国际化_manifest.json)。

## 示例

```json
"description": "Replaces pictures with pictures of cats."
```

## 浏览器兼容性

{{Compat}}
