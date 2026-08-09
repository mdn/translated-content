---
title: Content-Range ヘッダー
short-title: Content-Range
slug: Web/HTTP/Reference/Headers/Content-Range
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Content-Range`** {{Glossary("Response header", "レスポンスヘッダー")}}は、[範囲リクエスト](/en-US/docs/Web/HTTP/Guides/Range_requests)において、レスポンス本体のコンテンツがリソース全体の中でどの範囲に該当するかを示すために使用されます。

これは、{{HTTPStatus("206", "206 Partial Content")}} または {{HTTPStatus("416", "416 Range Not Satisfiable")}} のレスポンスにのみ含める必要があります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}},
        {{Glossary("Content header", "コンテンツヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header", "CORS セーフリストリクエストヘッダー")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Range: <unit> <range>/<size>
Content-Range: <unit> <range>/*
Content-Range: <unit> */<size>
```

## ディレクティブ

- `<unit>`
  - : 範囲を指定する単位。
    今のところ、`bytes` のみが対応されています。
- `<range>`
  - : `<range-start>-<range-end>` という形式の範囲。`<range-start>` および `<range-end>` は、指定された `<unit>` における範囲の開始位置および終了位置（0 から数え、両端を含む）を表す整数です。
    `*` は {{HTTPStatus("416", "416 Range Not Satisfiable")}} レスポンスで使用し、この値が範囲でないことを示します。
- `<size>`
  - : 文書の全長（未知の場合は `*`）です。

## 例

### 部分的なコンテンツのリクエスト

この {{HTTPStatus("206", "206 Partial Content")}} レスポンスは部分的なレスポンスを示し、`Content-Range` には、146515 バイトのファイルのうち最初の 1024 バイトが含まれていることが示されています。

```http
HTTP/2 206
content-type: image/jpeg
content-length: 1024
content-range: bytes 0-1023/146515
…

（バイナリーコンテンツ）
```

### 範囲に対応できない場合

サーバーがリクエストされた範囲に対応できない場合、{{HTTPStatus("416", "416 Range Not Satisfiable")}} ステータスをつけて応答し、`Content-Range` には範囲として `*` を指定するとともに、リソースの合計サイズも明記する必要があります。

```http
HTTP/2 416

Content-Range: bytes */67589
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTTP 範囲付きリクエスト](/ja/docs/Web/HTTP/Guides/Range_requests)ガイド
- {{HTTPHeader("If-Range")}}, {{HTTPHeader("Range")}} ヘッダー
- {{HTTPHeader("Content-Type")}}
- {{HTTPStatus("206", "206 Partial Content")}}, {{HTTPStatus("416", "416 Range Not Satisfiable")}} ステータスコード
