---
title: Repr-Digest ヘッダー
short-title: Repr-Digest
slug: Web/HTTP/Reference/Headers/Repr-Digest
l10n:
  sourceCommit: f4174abd45aefde55b6d45144c57ec3c2dc037a1
---

HTTP の **`Repr-Digest`** は、{{Glossary("Request header", "リクエストヘッダー")}}および {{Glossary("Response header", "レスポンスヘッダー")}}として、対象リソースの選択された表現の{{Glossary("hash function", "ダイジェスト")}}を提供します。
選択された表現全体を受信して再構成した後、その完全性を検証するために使用できます。

選択された表現は、[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)によって選択されたリソースの特定の形式です。
表現の詳細は、{{Glossary("Representation header", "表現ヘッダー")}}（{{HTTPHeader("Content-Language")}}、{{HTTPHeader("Content-Type")}}、{{HTTPHeader("Content-Encoding")}} など）から判断できます。

表現のダイジェストは、表現を送信するために使われたメッセージのエンコーディングやチャンク分割ではなく、表現全体を対象とします。
{{HTTPHeader("Content-Digest")}} は特定のメッセージのコンテンツを対象とするため、各メッセージの {{HTTPHeader("Content-Encoding")}} と {{HTTPHeader("Content-Range")}} によって値が異なります。

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
Repr-Digest: <digest-algorithm>=<digest-value>

// 複数のダイジェストアルゴリズム
Repr-Digest: <digest-algorithm>=<digest-value>,…,<digest-algorithmN>=<digest-valueN>
```

`Repr-Digest` は構造化フィールド辞書（{{rfc("9651","Structured Field Values for HTTP")}}）であり、キーは `<digest-algorithm>`、値は `<digest-value>` です。

## ディレクティブ

- `<digest-algorithm>`
  - : 表現のダイジェストを生成するために使用するアルゴリズムです。
    登録済みのダイジェストアルゴリズムのうち、安全とみなされるのは `sha-512` と `sha-256` の 2 つだけです。
    保護されていない（古い）登録済みダイジェストアルゴリズムは、`md5`、`sha` (SHA-1)、`unixsum`、`unixcksum`、`adler` (ADLER32)、`crc32c` です。
- `<digest-value>`
  - : `<digest-algorithm>` を使用して計算した、選択された表現データ全体のダイジェストです（[HTTP Semantics 仕様の第 8.1 節](https://www.rfc-editor.org/info/rfc9110/#section-8.1)を参照）。これは {{Glossary("base64")}} でエンコードされ、コロン (`:`, ASCII 0x3A) で囲まれます。仕様では、このエンコーディングを[バイト列](https://www.rfc-editor.org/info/rfc9651/#name-byte-sequences)と呼びます。

## 例

すべての例で、エンドポイントは要求されていないダイジェストヘッダーを送信するよう構成されています。送信者は {{HTTPHeader("Want-Content-Digest")}} および {{HTTPHeader("Want-Repr-Digest")}} フィールドを使用して、希望するハッシュアルゴリズムを指定し、`Content-Digest` または `Repr-Digest` を要求することもできます。

### レスポンス内の SHA-256 Repr-Digest

ユーザーエージェントがリソースをリクエストします。

```http
GET /items/123 HTTP/1.1
Host: example.com
```

サーバーは SHA-256 アルゴリズムを使用した表現の `Repr-Digest` を返します。
ダイジェストは表現の正確なバイト列 `{"hello": "mdn"}`（16 バイト。末尾の改行は含みません）を対象に計算されます。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Content-Digest と Repr-Digest の値が同一の場合

ユーザーエージェントがリソースをリクエストします。

```http
GET /items/123 HTTP/1.1
Host: example.com
```

サーバーは SHA-256 アルゴリズムを使用してメッセージコンテンツの `Content-Digest` と `Repr-Digest` を返します。
この場合、表現全体が 1 つのメッセージで送信され、同じバイト列 `{"hello": "mdn"}`（16 バイト）に同じアルゴリズムを使用して計算されるため、`Repr-Digest` と `Content-Digest` の値は一致します。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Content-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Content-Digest と Repr-Digest の値が異なる場合

ユーザーエージェントが[範囲リクエスト](/ja/docs/Web/HTTP/Guides/Range_requests)を使用して、リソースの一部だけをリクエストします。

```http
GET /items/123 HTTP/1.1
Host: example.com
Range: bytes=0-7
```

サーバーは {{HTTPStatus("206", "206 Partial Content")}} レスポンスを返します。このレスポンスのメッセージコンテンツには、リクエストされたバイト列 `{"hello"`（8 バイト）だけが含まれます。
`Content-Digest` はそのバイト列だけを対象としますが、`Repr-Digest` は表現全体 `{"hello": "mdn"}`（16 バイト）を対象とするため、2 つの値は異なります。

```http
HTTP/1.1 206 Partial Content
Content-Type: application/json
Content-Range: bytes 0-7/16
Content-Digest: sha-256=:pKQv0IAKChzGfyfxu5TNqcnvxIzaG4XICf6NQnB1YhY=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### gzip でエンコードされた表現のダイジェスト

このリクエストでは、クライアントは gzip 圧縮に対応していることを示すために {{httpheader("Accept-Encoding")}} ヘッダーを使用します。

```http
GET /items/123 HTTP/1.1
Host: example.com
Accept-Encoding: gzip
```

サーバーのレスポンスには {{httpheader("Content-Encoding")}} ヘッダーが含まれ、メッセージのバイト列がリソースの gzip 表現に由来することを示します。

ダイジェストは、元の非圧縮テキストではなく gzip でエンコードされたバイト列を対象に計算されます。
ここでは、16 バイトの JSON 本文 `{"hello": "mdn"}` を gzip で圧縮すると 36 バイトの表現になり、`Content-Digest` と `Repr-Digest` はその 36 バイトを対象に計算されます（読みやすさのため、ここでは 16 進数で示します）。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Encoding: gzip
Content-Length: 36
Content-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
Repr-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:

1F 8B 08 00 00 00 00 00 02 FF AB 56 CA 48 CD C9 C9 57 B2 52 50 CA 4D C9 53 AA 05 00 35 D8 1D 91 10 00 00 00
```

### コンテンツがない場合の Repr-Digest の扱い

同じリソースを {{HTTPMethod("GET")}} の代わりに {{HTTPMethod("HEAD")}} メソッドでリクエストした場合、レスポンスにコンテンツはありません。

```http
HEAD /items/123 HTTP/1.1
Host: example.com
```

`Repr-Digest` の値は前述の例と同じです。常に表現全体 `{"hello": "mdn"}` を対象とするためです。
ただし、サーバーはレスポンスにコンテンツを送信しないため、`Content-Digest` ヘッダーを省略できます。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

コンテンツがないときに `Content-Digest` を省略する代わりに、サーバーは空文字列を対象に明示的に計算できます。
[RFC 9530 の第 6.3 節](https://www.rfc-editor.org/info/rfc9530/#section-6.3)によると、これにより受信者は、特にダイジェストが HTTP メッセージ署名の対象となっている場合に、ヘッダーが省略されていないことを確認するだけでなく、コンテンツが追加または削除されていないことを検証できます。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### リクエストでダイジェストを送信するユーザーエージェント

次の例では、ユーザーエージェントが SHA-512 を使用してメッセージコンテンツのダイジェストを送信します。
ダイジェストは、メッセージ本文の正確なバイト列 `{"recipient":"Alex","amount":900000000}`（39 バイト。末尾の改行は含みません）を対象に計算されます。
表現全体がこの 1 件のリクエストで送信されるため、`Content-Digest` と `Repr-Digest` の値は同じです。

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

このヘッダーには仕様で定義されたブラウザー統合がなく、「ブラウザーの互換性」は該当しません。
開発者は `fetch()` を使用して HTTP ヘッダーを設定および取得し、アプリケーション固有の動作を実装できます。

## 関連情報

- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("ETag")}}
- {{HTTPHeader("Content-Encoding")}}
- [API のデジタル署名](https://developer.ebay.com/develop/guides/sell/digital-signatures-for-apis) SDK ガイドでは、HTTP リクエストのデジタル署名に `Content-Digest` を使用しています (developer.ebay.com)
