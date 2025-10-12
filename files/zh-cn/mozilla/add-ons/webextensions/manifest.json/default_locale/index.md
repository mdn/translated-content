---
title: default_locale
slug: Mozilla/Add-ons/WebExtensions/manifest.json/default_locale
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">强制性</th>
      <td>可能发生的：如果存在_locales 子目录，必须存在，否则不存在。</td>
    </tr>
    <tr>
      <th scope="row">例子</th>
      <td><pre class="brush: json">"default_locale": "en"</pre></td>
    </tr>
  </tbody>
</table>

如果扩展名包含\_locales 目录，则该 key 必须存在，否则不得存在。它标识 \_locales 的一个子目录，该子目录将用于查找扩展名的默认字符串。

见 [国际化](/zh-CN/docs/Mozilla/Add-ons/WebExtensions/Internationalization) 。

## 范例

```json
"default_locale": "en"
```

## Browser compatibility

{{Compat}}
