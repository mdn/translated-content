---
title: version_name
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version_name
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
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"version_name": "0.1 beta"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

アップデート目的で使われる [version](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) 項目に加えて、[version_name](https://developer.chrome.com/docs/extensions/reference/manifest/version) はバージョン説明の文字列をセットできて、存在する場合は表示目的に使われます。

**version_name** が存在しない場合、**version** 項目が同様な表示目的で使われます。

## ブラウザーの互換性

{{Compat}}
