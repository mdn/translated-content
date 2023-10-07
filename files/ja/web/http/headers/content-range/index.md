---
title: Content-Range
slug: Web/HTTP/Headers/Content-Range
---

{{HTTPSidebar}}

**`Content-Range`** レスポンスの HTTP ヘッダーは、全体のメッセージのどこにメッセージが含まれているかを示します。

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
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Content-Range: <unit> <range-start>-<range-end>/<size>
Content-Range: <unit> <range-start>-<range-end>/*
Content-Range: <unit> */<size>
```

## ディレクティブ

- \<unit>
  - : 範囲を指定する単位。これは通常 `bytes` です。

<!---->

- \<range-start>
  - : 指定された単位の整数で、リクエスト範囲の開始を示します。
- \<range-end>
  - : リクエストされた範囲の終わりを示す指定された単位の整数。
- \<size>
  - : ドキュメントの合計サイズ (または未知の場合は `'*'` )。

## 例

```
Content-Range: bytes 200-1000/67589
```

## 仕様

| 仕様書                                  | タイトル                                               |
| --------------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "Content-Range", "4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## ブラウザーの互換性

{{Compat("http.headers.Content-Range")}}

## 関連情報

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206")}} `Partial Content`
- {{HTTPStatus("416")}} `Range Not Satisfiable`
