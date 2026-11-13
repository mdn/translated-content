---
title: version_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version_name
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
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
      <th scope="row">Manifest 版本</th>
      <td>2 或更高</td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td><pre class="brush: json">"version_name": "0.1 beta"</pre></td>
    </tr>
  </tbody>
</table>

除了用于更新的 [version](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) 字段，你还可以设置 [version_name](https://developer.chrome.google.cn/docs/extensions/reference/manifest/version) 字段作为扩展的描述性版本字符串。如果提供该字段，则其将用于显示。

若没有提供 **version_name**，则 **version** 字段也将用于显示。

## 浏览器兼容性

{{Compat}}
