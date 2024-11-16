---
title: version
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">强制性</th>
      <td>强制</td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td><pre class="brush: json">"version": "0.1"</pre></td>
    </tr>
  </tbody>
</table>

附加组件的版本，一般格式设置为由点分隔开来数字的 ASCII 字符串。关于版本格式的详细信息，请查看 [Version format](/zh-CN/docs/Toolkit_version_format) .

需要注意的是 Chrome 浏览器的 version 格式要求 ([the syntax defined for Chrome's `version`](https://developer.chrome.google.cn/docs/extensions/reference/manifest/version)) 比 Firefox 浏览器的 version 格式更严格一些，这意味这：

- 对 Chrome 浏览器有效的 version 特性的值一定在 Firefox 浏览器中有效
- 但对 Firefox 浏览器有效的 version 特性的值在 Chrome 浏览器中却不一定有效

## 示例

```json
"version": "0.1"
```

## Browser compatibility

{{Compat}}
