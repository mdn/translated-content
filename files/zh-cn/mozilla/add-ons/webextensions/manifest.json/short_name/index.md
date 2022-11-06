---
title: 短名称 - short_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/short_name
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
      <td>不强制</td>
    </tr>
    <tr>
      <th scope="row">示例</th>
      <td><pre class="brush: json">"short_name": "附加组件的短名称"</pre></td>
    </tr>
  </tbody>
</table>

附加组件的短名称。一般用在 [name](/zh-CN/Add-ons/WebExtensions/manifest.json/name) 特性太长的情况下。建议短名称的长度不要超过 12 个字符。如果没有在 manifest.json 主文件中声明 short_name, 并且 name 特性的值又比较长的话，用户界面显示的时候可能只会显示一部分。

关于本地化，可查看 [localizable property](/zh-CN/Add-ons/WebExtensions/Internationalization#Internationalizing_manifest.json).

## 示例

```json
"short_name": "附加组件的短名称"
```

## Browser compatibility

{{Compat}}
