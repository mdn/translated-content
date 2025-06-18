---
title: developer
slug: Mozilla/Add-ons/WebExtensions/manifest.json/developer
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">型</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"developer": {
  "name": "Walt Whitman",
  "url": "https://en.wikipedia.org/wiki/Walt_Whitman"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

拡張機能の開発者の名前と、そのホームページ URL で、ブラウザーの UI に表示されるためのもの。

このオブジェクトと、そのプロパティの 2 つ共、オプションです。"name" と "url" プロパティは、存在する場合、[author](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/author) と [homepage_url](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) キーをそれぞれ上書きします。このオブジェクトでは単独の開発者名と URL が指定できます。

これは[ローカライズ可能なプロパティです](/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization#internationalizing_manifest.json)。

## 例

```json
"developer": {
  "name": "Walt Whitman",
  "url": "https://en.wikipedia.org/wiki/Walt_Whitman"
}
```

## ブラウザーの互換性

{{Compat}}
