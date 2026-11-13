---
title: Content-Digest ヘッダー
short-title: Content-Digest
slug: Web/HTTP/Reference/Headers/Content-Digest
l10n:
  sourceCommit: e5a63f8d002dcac9654be79bd03bfda262dd4d89
---

HTTP の **`Content-Digest`** {{Glossary("request header", "リクエスト")}}・{{Glossary("response header", "レスポンスヘッダー")}}は、メッセージのコンテンツにハッシュアルゴリズムを適用して計算された{{Glossary("hash function", "ダイジェスト")}}を提供します。
受信側は、完全性を確認するために、`Content-Digest` を使用して HTTP メッセージのコンテンツを検証することができます。

{{HTTPHeader("Want-Content-Digest")}} フィールドを使用すると、送信者はハッシュアルゴリズムの設定とともに `Content-Digest` をリクエストすることができます。
コンテンツダイジェストは、{{HTTPHeader("Content-Encoding")}} および {{HTTPHeader("Content-Range")}} によって異なりますが、{{HTTPHeader("Transfer-Encoding")}} による違いはありません。

場合によっては、{{HTTPHeader("Repr-Digest")}} を使用することができます。これにより、部分メッセージやマルチパートメッセージの完全性を、完全な表現と照合して検証することができます。
例えば、[範囲リクエスト](/ja/docs/Web/HTTP/Guides/Range_requests)の場合、リクエストされたバイト範囲のみが異なる場合、`Repr-Digest` の値は常に同じになりますが、コンテンツダイジェストはそれぞれのパートで異なります。
このため、単一のメッセージで表現が送信される場合、`Content-Digest` は {{HTTPHeader("Repr-Digest")}} と同一となります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Request header", "リクエストヘッダー")}}, {{Glossary("Response header", "レスポンスヘッダー")}}, {{Glossary("Representation header", "表現ヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Digest: <digest-algorithm>=<digest-value>

// 複数のダイジェストアルゴリズム
Content-Digest: <digest-algorithm>=<digest-value>,<digest-algorithm>=<digest-value>, …
```

`Content-Digest` は構造化フィールド辞書 ({{rfc("9651","Structured Field Values for HTTP")}}) であり、そのキーは `<digest-algorithm>` で、値は `<digest-value>` です。

## ディレクティブ

- `<digest-algorithm>`
  - : メッセージのコンテンツのダイジェストを作成するために使用するアルゴリズム。
    安全であると見なされる登録済みのダイジェストアルゴリズムは、`sha-512` と `sha-256` の 2 つだけです。
    安全でない（古い）登録済みダイジェストアルゴリズムは、`md5`、`sha` (SHA-1)、`unixsum`、`unixcksum`、`adler` (ADLER32)、`crc32c` です。
- `<digest-value>`
  - : `<digest-algorithm>` を使用して生成されたメッセージコンテンツのダイジェストを、{{Glossary("base64")}} でエンコードし、コロン (`:`, ASCII 0x3A) で囲んだもの。このエンコード方式は、仕様書において[バイトシーケンス](https://www.rfc-editor.org/info/rfc9651/#name-byte-sequences)と呼ばれています。

## 例

これらすべての例において、エンドポイントは、要求されていないダイジェストヘッダーを送信するように設定されています。送信者は、必要に応じて {{HTTPHeader("Want-Content-Digest")}} および {{HTTPHeader("Want-Repr-Digest")}} フィールドを使用して、ハッシュアルゴリズムの環境設定とともに `Content-Digest` または `Repr-Digest` をリクエストすることができます。

### レスポンス内の SHA-256 Content-Digest

ユーザーエージェントが次のようにリソースをリクエストしたとします。

```http
GET /items/123 HTTP/1.1
Host: example.com
```

サーバーは、SHA-256 アルゴリズムを使用してメッセージのコンテンツの `Content-Digest` を返します。
ダイジェストは、メッセージ本体 `{"hello": "mdn"}` の正確なバイト数（16 バイト。末尾の改行は明示的に含まれない）に基づいて計算されます。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Content-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Content-Digest と Repr-Digest の値が同一である場合

ユーザーエージェントが次のようにリソースをリクエストしたとします。

```http
GET /items/123 HTTP/1.1
Host: example.com
```

サーバーは、SHA-256 アルゴリズムを使用してメッセージコンテンツの `Content-Digest` および `Repr-Digest` を返します。
`Repr-Digest` フィールドと `Content-Digest` フィールドの値が一致するのは、これらが同じバイト列 `{"hello": "mdn"}`（16 バイト）に対して同じアルゴリズムを用いて計算されているためであり、この場合、表現全体が 1 つのメッセージで送信されます。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Content-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Content-Digest と Repr-Digest の値が一致しない場合

ユーザーエージェントがリソースの一部だけを、次のような[範囲リクエスト](/ja/docs/Web/HTTP/Guides/Range_requests)でリクエストしたとします。

```http
GET /items/123 HTTP/1.1
Host: example.com
Range: bytes=0-7
```

サーバーは {{HTTPStatus("206", "206 Partial Content")}} レスポンスを返し、その中にはリクエストされたバイト数のみ、`{"hello"`（8 バイト）がメッセージのコンテンツとして含まれます。
`Content-Digest` はこれらのバイト列のみが対象になるのに対し、`Repr-Digest` は表現全体である `{"hello": "mdn"}`（16 バイト）が対象となるため、この 2 つの値は異なります。

```http
HTTP/1.1 206 Partial Content
Content-Type: application/json
Content-Range: bytes 0-7/16
Content-Digest: sha-256=:pKQv0IAKChzGfyfxu5TNqcnvxIzaG4XICf6NQnB1YhY=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### gzip 圧縮された表現のダイジェスト

このリクエストでは、クライアントは {{httpheader("Accept-Encoding")}} ヘッダーを使用して、gzip 圧縮を受け入れることを示しています。

```http
GET /items/123 HTTP/1.1
Host: example.com
Accept-Encoding: gzip
```

サーバーのレスポンスには {{httpheader("Content-Encoding")}} ヘッダーが含まれており、メッセージのバイト列がリソースの gzip 形式の表現から取得されたものであることを示しています。
ダイジェストは、元の非圧縮テキストではなく、gzip エンコードされたバイト列に対して計算されます。
ここでは、16 バイトの JSON 本体 `{"hello": "mdn"}` が gzip 圧縮されて 36 バイトの表現となり、`Content-Digest` および `Repr-Digest` は、その 36 バイトに対して計算されます（読みやすいように、ここでは 16 進数で示しています）。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Encoding: gzip
Content-Length: 36
Content-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
Repr-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
1F 8B 08 00 00 00 00 00 02 FF AB 56 CA 48 CD C9 C9 57 B2 52 50 CA 4D C9 53 AA 05 00 35 D8 1D 91 10 00 00 00
```

### コンテンツがない場合の Content-Digest 処理

{{HTTPMethod("HEAD")}} メソッドを {{HTTPMethod("GET")}} の代わりに使用して同じリソースをリクエストした場合、レスポンスにはコンテンツが含まれません。

```http
HEAD /items/123 HTTP/1.1
Host: example.com
```

`Repr-Digest` の値は以前と同じです。これは、常に完全な表現である `{"hello": "mdn"}` に適用されるためです。
ただし、サーバーはレスポンスにコンテンツを送信しないため、`Content-Digest` ヘッダーを省略できます。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

コンテンツがない場合に `Content-Digest` を省略する代わりに、サーバーは空文字列に対して明示的にこれを計算することができます。
[RFC 9530 のセクション 6.3](https://www.rfc-editor.org/info/rfc9530/#section-6.3) によると、これにより、受信者は、特にダイジェストが HTTP メッセージの署名によって提供されている場合、単にヘッダーが省略されたことだけでなく、コンテンツが追加または除去されていないことを検証できるようになります。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### ユーザーエージェントがリクエストで Content-Digest を送信する場合

次の例では、ユーザーエージェントが SHA-512 を使用してメッセージ内容のダイジェストを送信します。
ダイジェストは、メッセージ本文の正確なバイト数、`{"recipient":"Alex","amount":900000000}`（39 バイト、末尾の改行は明示的に含まない）に基づいて計算されます。
この単一のリクエストで表現全体が送信されるため、`Content-Digest` と `Repr-Digest` の値は同じになります。

```http
POST /bank_transfer HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 39
Content-Digest: sha-512=:PlrIZYU3M76B30wGsL0h6O79BoxHTdAG+RnMPjOyECTSJCN/KnYdOrSCCWjxV3ckkyvdRmZ52//M3WbehCXcPw==:
Repr-Digest: sha-512=:PlrIZYU3M76B30wGsL0h6O79BoxHTdAG+RnMPjOyECTSJCN/KnYdOrSCCWjxV3ckkyvdRmZ52//M3WbehCXcPw==:

{"recipient":"Alex","amount":900000000}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

このヘッダーには、仕様で定義されたブラウザーとの連携機能はありません（「ブラウザーの互換性」は適用されません）。
開発者は、HTTP ヘッダーを `fetch()` で設定および取得して、アプリケーション固有の実装動作を実現することができます。

## 関連情報

- {{HTTPHeader("Want-Content-Digest")}} ヘッダー、コンテンツダイジェストをリクエストするためのもの
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} 表現ダイジェストヘッダー
- {{HTTPHeader("ETag")}}
- [Digital Signatures for APIs](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) SDK ガイドでは、HTTP 呼び出しにおけるデジタル署名に `Content-Digest` を使用しています（developer.ebay.com）
