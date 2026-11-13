---
title: TE ヘッダー
short-title: TE
slug: Web/HTTP/Reference/Headers/TE
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`TE`** {{Glossary("request header", "リクエストヘッダー")}}は、ユーザーエージェントが受け入れる転送エンコーディングを指定します。
転送エンコーディングは、送信中のメッセージの圧縮やデータのチャンク化を行うためのものです。

転送エンコーディングはプロトコル層で適用されるため、レスポンスを受け取るアプリケーションは、エンコーディングが適用されていないかのように本体を受け取ります。

> [!NOTE]
> [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) と [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) では、`TE` ヘッダーフィールドは、`trailers` 値が設定されている場合にのみ受け入れられます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー型</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
TE: compress
TE: deflate
TE: gzip
TE: trailers
```

複数のディレクティブを指定し、{{glossary("quality values", "Q 値")}}で重みづけする場合は次のようにします。

```http
TE: trailers, deflate;q=0.5
```

## ディレクティブ

- `compress`
  - : [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) アルゴリズムを使用する形式が、転送コーディング名として受け入れられます。
- `deflate`
  - : [zlib](https://ja.wikipedia.org/wiki/Zlib) 構造が、転送コーディング名として受け入れられます。
- `gzip`
  - : [Lempel-Ziv coding](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) を使用し、32 ビットの CRC を持つ形式が、転送コーディング名として受け入れられます。
- `trailers`
  - : クライアントが[チャンク化転送コーディング](/ja/docs/Web/HTTP/Reference/Headers/Transfer-Encoding#chunked)でトレーラーフィールドを受け入れる意思があることを示します。
- `q`
  - : 複数の転送コーディングが受け入れられる場合、`q` 引数（{{glossary("quality values", "品質値")}}）の構文を使うことでランク付けをすることができます。

なお、`chunked` は HTTP/1.1 の受信側で常に対応しているため、`TE` ヘッダーを使用して指定する必要はありません。
詳細については、{{HTTPHeader("Transfer-Encoding")}} ヘッダーを参照してください。

## 例

### TE ヘッダーを品質値付きで使用

以下のリクエストでは、クライアントは `q` 値を用いて、`gzip` 形式でエンコードされたレスポンスを第一希望とし、`deflate` を第二希望として指定しています。

```http
GET /resource HTTP/1.1
Host: example.com
TE: gzip; q=1.0, deflate; q=0.8
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Trailer")}}
- [チャンク転送エンコーディング](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)（英語）
