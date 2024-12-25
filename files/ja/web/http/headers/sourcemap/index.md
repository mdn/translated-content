---
title: SourceMap
slug: Web/HTTP/Headers/SourceMap
---

{{HTTPSidebar}}

**`SourceMap`** [HTTP](/ja/docs/Web/HTTP) レスポンスヘッダーは、生成されたコードを[ソースマップ](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)にリンクし、ブラウザーが元のソースを再構成し、再構成されたオリジナルをデバッガに提示できるようにします。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダータイプ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
SourceMap: <url>
X-SourceMap: <url> (deprecated)
```

### ディレクティブ

- `<url>`
  - : (リクエスト URL に対する) 相対パスまたはソースマップファイルを指す絶対 URL

## 例

```
SourceMap: /path/to/file.js.map
```

## 仕様

| 仕様書                                                                                            | タイトル                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------ |
| [Draft document](https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k) | Source Map Revision 3 Proposal |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Firefox Developer Tools: using a source map](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html)
