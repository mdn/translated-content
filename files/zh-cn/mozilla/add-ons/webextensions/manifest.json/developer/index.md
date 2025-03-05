---
title: developer
slug: Mozilla/Add-ons/WebExtensions/manifest.json/developer
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">值类型</th>
      <td><code>对象</code></td>
    </tr>
    <tr>
      <th scope="row">强制性</th>
      <td>非强制</td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td>
        <pre class="brush: json">
"developer": {
  "name": "Walt Whitman",
  "url": "https://en.wikipedia.org/wiki/Walt_Whitman"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

插件开发者的名字和主页地址，用于显示在浏览器的用户界面中。

该对象的两个属性都是可选的。如果存在“name”和“url”属性，将会分别覆盖[author](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author)和[homepage_url](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url)键。这个对象仅仅允许指定一个开发者名字的主页地址。

## 示例

```json
"developer": {
  "name": "Walt Whitman",
  "url": "https://en.wikipedia.org/wiki/Walt_Whitman"
}
```

## Browser compatibility

{{Compat}}
