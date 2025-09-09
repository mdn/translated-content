---
title: version
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version
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
      <td><p>はい</p></td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td><pre class="brush: json">"version": "0.1"</pre></td>
    </tr>
  </tbody>
</table>

ドットで区切られた数字と ASCII 文字でフォーマットされた拡張機能のバージョンです。バージョンのフォーマットの詳細は [Version format](/ja/docs/Toolkit_version_format) ページを見てください。

[Chrome の `version` 定義の構文](https://developer.chrome.com/docs/extensions/reference/manifest/version)は、Firefox のものよりも制限が厳しいことに注意してください。

- Chrome で有効な `version` の値は、常に Firefox でも有効です。
- Firefox で有効な `version` の値は Chrome でも有効とは限りません。

AMO キュー内でバージョンを "beta" にマークする特別ルールについては [maintenance policy](/ja/docs/Mozilla/Add-ons/Distribution#beta_versions) を見てください。

## 例

```json
"version": "0.1"
```

## ブラウザーの互換性

{{Compat}}
