---
title: homepage_url
slug: Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url
l10n:
  sourceCommit: 6b7f22c8cc81515d9a17d988f4bb8006357dcd59
---

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
      <th scope="row">Manifest 版本</th>
      <td>2 或更高</td>
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

如果 [developer](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/developer) 键包含“url”属性并且“homepage_url”被定义，Firefox 会使用“developer.url”然而 Opera 会使用“homepage_url”。Chrome 和 Safari 不支持“developer”键。

这是一个[可本地化属性](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json)。

## 示例

```json
"homepage_url": "https://github.com/mdn/webextensions-examples/tree/main/beastify"
```

## 浏览器兼容性

{{Compat}}
