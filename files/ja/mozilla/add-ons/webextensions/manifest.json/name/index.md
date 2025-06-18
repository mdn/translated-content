---
title: name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/name
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>はい</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td><pre class="brush: json">"name": "My Extension"</pre></td>
    </tr>
  </tbody>
</table>

拡張機能の名前です。これはブラウザーのユーザーインターフェイスや addons.mozilla.org のようなサイトで拡張機能を識別するために使用されます。

名前が UI に表示されるよう長すぎないようにするのは良い習慣です。Google Chrome と Microsoft Edge は名前を 45 文字に制限しています。

これは[国際化できるプロパティ](/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json)です。

## 例

```json
"name": "My Extension"
```

## ブラウザーの互換性

{{Compat}}
