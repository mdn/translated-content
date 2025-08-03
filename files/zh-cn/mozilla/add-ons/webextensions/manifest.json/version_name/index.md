---
title: version_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version_name
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
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
      <th scope="row">Manifest 版本</th>
      <td>2 或更高</td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td><pre class="brush: json">"version_name": "0.1 beta"</pre></td>
    </tr>
  </tbody>
</table>

除了用于更新的 [version](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) 字段外，还可以设置 [version_name](https://developer.chrome.google.cn/docs/extensions/reference/manifest/version) 作为扩展的描述性版本字符串并在设置该值时用于显示。

如果没有提供 **version_name**，则 **version** 字段也将用于显示。

## 浏览器兼容性

{{Compat}}
