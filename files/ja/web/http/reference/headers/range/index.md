---
title: Range ヘッダー
short-title: Range
slug: Web/HTTP/Reference/Headers/Range
l10n:
  sourceCommit: ca1647a3e2b77cdf9df220244998f25b86629048
---

HTTP の **`Range`** {{Glossary("Request header", "リクエストヘッダー")}}は、サーバーが返すべき文書の部分を示します。
1 つの `Range` ヘッダーで複数の部分を一度にリクエストすることができ、サーバーはこれらの範囲をマルチパートの文書で返すことができます。
サーバーが範囲を送り返す場合、サーバーはレスポンスに {{HTTPStatus("206", "206 Partial Content")}} を使用します。
範囲が無効な場合、サーバーは {{HTTPStatus("416", "416 Range Not Satisfiable")}} エラーを返します。

範囲付きリクエストに対応していないサーバーは、`Range` ヘッダーを無視して、文書全体を {{HTTPStatus("200")}} のステータスコードで返すこともできます。
古いブラウザーでは、{{HTTPHeader("Accept-Ranges", "Accept-Ranges: none")}} というレスポンスヘッダーを使用して、ダウンロードマネージャーの「一時停止」や「再開」といった機能を無効にしていましたが、サーバーが `Range` ヘッダーを無視することは `Accept-Ranges: none` で応答することと同じ意味を持つため、このヘッダーがこのような目的で使用されることはほとんどありません。

現在、登録されている単位は [`bytes` のみ](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units) で、これらはオフセット（インデックスは 0 から始まり、値は 0 を含む）です。
リクエストされたデータに[コンテンツエンコーディング](/ja/docs/Web/HTTP/Reference/Headers/Content-Encoding)が適用されている場合、それぞれのバイト範囲は、デコード後に得られるバイト列ではなく、エンコードされたバイト列を表します。

このディレクティブで単一のバイト範囲が指定されている場合、このヘッダーは [CORS セーフリストリクエストヘッダー](/ja/docs/Glossary/CORS-safelisted_request_header) となります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Range: <unit>=<range-start>-
Range: <unit>=<range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, …, <range-startN>-<range-endN>
Range: <unit>=-<suffix-length>
```

## ディレクティブ

- `<unit>`
  - : 範囲を指定する単位です。
    現在のところ、`bytes` のみが登録された単位です。
- `<range-start>`
  - : 整数値で、指定した単位でリクエストする範囲の先頭位置を示します。
- `<range-end>`
  - : 整数値で、指定した単位でリクエストする範囲の末尾を示します。
    この値は省略可能で、省略時は文書の末尾が範囲の末尾として扱われます。
- `<suffix-length>`
  - : 整数値で、リソースの末尾から返す単位数を示します。

## 例

次の例では、`Range` ヘッダーを使用して、CORS セーフリストに登録されたリクエストや、複数の範囲を指定するリクエストを行う方法を示します。
他の例については、[HTTP 範囲リクエスト](/ja/docs/Web/HTTP/Guides/Range_requests)ガイドをご覧ください。

### 単一のバイトの範囲および CORS セーフリストに登録されたリクエスト

`Range` ヘッダーは、その値が 1 バイトの範囲である場合、[CORS セーフリストリクエストヘッダー](/ja/docs/Glossary/CORS-safelisted_request_header)となります。
つまり、[プリフライト](/ja/docs/Glossary/Preflight_request)リクエストが発生することなく、オリジンを越えたリクエストで使用できるため、メディアのリクエストやダウンロードの再開に役立ちます。

次の例では、リソースの最初の 500 バイトをリクエストしています。

```http
Range: bytes=0-499
```

次の 500 バイトをリクエストするには、次のようにします。

```http
Range: bytes=500-999
```

終了位置を省略すると、そのリソースの残りのすべての単位をリクエストするようになるため、長さが 1000 バイトのリソースの最後の 100 バイトは、次のようにしてリクエストできます。

```http
Range: bytes=900-
```

あるいは、リソースのサイズが不明な場合は、接尾辞範囲 `-n` を使用して、最後の `n` バイトをリクエストすることもできます。

```http
Range: bytes=-100
```

### 複数の範囲をリクエスト

指定された長さが 10000 バイトのリソースについて、次の例では、`200`-`999`（800 バイト）、`2000`-`2499`（500 バイト）、そして最後に `9500-` の 3 つの別個の範囲をリクエストしています。
範囲指定子の値 `9500-` は終了位置を除外しており、9500 以降のすべてのバイトが 3 つ目（500 バイト）の範囲に含まれることを示しています。

```http
Range: bytes=200-999, 2000-2499, 9500-
```

ファイルの先頭の 500 バイトと末尾の 500 バイトをリクエストします。範囲が重複した場合はサーバーがリクエストを拒否することがあります。

```http
Range: bytes=0-499, -500
```

### サーバーが範囲リクエストに対応しているかを調べる

次の curl コマンドは、画像に対して {{HTTPMethod("HEAD")}} リクエストを送信します。

```bash
curl -v --http1.1 -I https://i.imgur.com/z4d4kWk.jpg
# または OPTIONS メソッドを使用して、
# curl -v --http1.1 -X OPTIONS https://i.imgur.com/z4d4kWk.jpg
```

その結果、次のような HTTP リクエストが送信されます。

```http
HEAD /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
User-Agent: curl/8.7.1
Accept: */*
```

サーバーは `200` レスポンスで応答し、`Accept-Ranges: bytes` ヘッダーが存在します（簡潔にするため、一部のヘッダーは除外しています）。

```http
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 146515
Content-Type: image/jpeg
…
Accept-Ranges: bytes
```

### blob URL から範囲を取得

[`blob:`](/ja/docs/Web/URI/Reference/Schemes/blob) URL も、[`fetch()`](/ja/docs/Web/API/Window/fetch)を使用することで、範囲リクエストに対応しています。

```js
const blob = new Blob(["Hello, world!"], { type: "text/plain" });
const url = URL.createObjectURL(blob);
fetch(url, {
  headers: {
    Range: "bytes=7-11",
  },
})
  .then((response) => response.text())
  .then((text) => console.log(text)); // "world"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("If-Range")}} 条件付きリクエストヘッダー
- {{HTTPHeader("Content-Range")}} レスポンスヘッダー
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Accept-Ranges")}}
- {{HTTPStatus("206", "206 Partial Content")}}
- {{HTTPStatus("416", "416 Range Not Satisfiable")}}
- [HTTP 範囲付きリクエスト](/ja/docs/Web/HTTP/Guides/Range_requests)ガイド
- [CORS セーフリストリクエストヘッダー](/ja/docs/Glossary/CORS-safelisted_request_header)
