---
title: TE
slug: Web/HTTP/Headers/TE
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`TE`** リクエストヘッダーは、ユーザーエージェントが受け入れる転送エンコーディング方式を指定します。（非公式に `Accept-Transfer-Encoding` と呼ばれることもあり、その方がより直感的でしょう。）

> **メモ:** [HTTP/2](https://httpwg.org/specs/rfc9113.html#ConnectionSpecific) と
> [HTTP/3](https://httpwg.org/specs/rfc9114.html#header-formatting) では、
> `TE` ヘッダーフィールドは、`trailer` 値が設定されている場合にのみ受け入れられます。

転送エンコード方式の詳細については、{{HTTPHeader("Transfer-Encoding")}} レスポンスヘッダーも参照してください。HTTP/1.1 の受信者では常にチャンクが受け入れられるので、`TE` ヘッダーを使用して `"chunked"` を指定する必要はないことに注意してください。しかし、"trailers" 値を使用して、クライアントがチャンク転送コードでトレーラーフィールドを受け入れるかどうかを設定するには有益です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー型</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
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

// 複数のディレクティブを指定し、{{glossary("quality values", "Q 値")}}で重みづけする構文:
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
  - : クライアントがチャンクされた転送コーディングでトレーラーフィールドを受け入れる意思があることを示します。
- `q`
  - : 複数の転送コーディングが受け入れられる場合、[品質値](/ja/docs/Glossary/Quality_values)構文の `q` 引数を使うことでランク付けをすることができます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Trailer")}}
- [チャンク転送エンコーディング](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)（英語）
