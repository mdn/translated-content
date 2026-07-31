---
title: Content-Digest ヘッダー
short-title: Content-Digest
slug: Web/HTTP/Reference/Headers/Content-Digest
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
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

## ディレクティブ

- `<digest-algorithm>`
  - : メッセージのコンテンツのダイジェストを作成するために使用するアルゴリズム。
    安全であると見なされる登録済みのダイジェストアルゴリズムは、`sha-512` と `sha-256` の 2 つだけです。
    安全でない（古い）登録済みダイジェストアルゴリズムは、`md5`、`sha` (SHA-1)、`unixsum`、`unixcksum`、`adler` (ADLER32)、`crc32c` です。
- `<digest-value>`
  - : `<digest-algorithm>` を使用することで算出された、メッセージコンテンツのバイト単位のダイジェスト。
    ダイジェストアルゴリズムの選択によって、使用するエンコード方式も決まります。`sha-512` や `sha-256` は {{Glossary(「base64」)}} エンコード方式を使用しますが、`unixsum` などの一部の古いダイジェストアルゴリズムは10進整数を使用します。
    仕様の以前の草案とは異なり、標準の Base64 エンコードされたダイジェストバイトは、[辞書構文](https://www.rfc-editor.org/info/rfc8941/#name-byte-sequences)の一部としてコロン (`:`, ASCII 0x3A) で囲まれています。

## 解説

以前の仕様では `Digest` ヘッダーが定義されていましたが、ダイジェストが適用される範囲が明確でなかったため、問題が生じました。
仕様上、ダイジェストがリソース表現全体に適用されるのか、それとも HTTP メッセージの特定のコンテンツに適用されるのかを判別することが困難でした。
そのため、HTTP メッセージのコンテンツダイジェストとリソースの表現ダイジェストをそれぞれ伝達するために、2 つの別個のヘッダー（`Content-Digest` および `Repr-Digest`）が定義されました。

## 例

### SHA-256 Content-Digest に対するユーザーエージェントのリクエスト

次の例では、ユーザーエージェントが、SHA-256 を推奨し、次いで優先度の低い SHA-1 を使用して、メッセージコンテンツのダイジェストをリクエストしています。

```http
GET /items/123 HTTP/1.1
Host: example.com
Want-Content-Digest: sha-256=10, sha=3
```

サーバーは、SHA-256 アルゴリズムを使用してメッセージのコンテンツの `Content-Digest` を返します。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### Content-Digest と Repr-Digest の値が同一である場合

ユーザーエージェントが、`Want-Content-Digest` フィールドを指定せずにリソースをリクエストする場合、

```http
GET /items/123 HTTP/1.1
Host: example.com
```

このサーバーは、レスポンスに要求されていないダイジェストヘッダーを送信するように設定されています。
`Repr-Digest` フィールドと `Content-Digest` フィールドの値が一致しているのは、同じアルゴリズムが使用されており、リソース全体が 1 つのメッセージで送信されているためです。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 19
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"hello": "world"}
```

### Content-Digest と Repr-Digest の値が一致しない場合

前回の例と同じリクエストを繰り返し、{{HTTPMethod("GET")}} の代わりに {{HTTPMethod("HEAD")}} メソッドを使用した場合、`Repr-Digest` および `Content-Digest` フィールドの内容は異なります。

```http
GET /items/123 HTTP/1.1
Host: example.com
```

`Repr-Digest` の値は以前と同じですが、メッセージの本体がないため、サーバーからは異なる `Content-Digest` が送信されます。

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
```

### ユーザーエージェントがリクエストで Content-Digest を送信する場合

次の例では、ユーザーエージェントが SHA-512 を使用してメッセージ内容のダイジェストを送信します。
`Content-Digest` と `Repr-Digest` の両方を送信しますが、これらは `Content-Encoding` の違いにより互いに異なります。

```http
POST /bank_transfer HTTP/1.1
Host: example.com
Content-Encoding: zstd
Content-Digest: sha-512=:ABC…=:
Repr-Digest: sha-512=:DEF…=:

{
 "recipient": "Alex",
 "amount": 900000000
}
```

サーバーは、受信したコンテンツのダイジェストを計算し、その結果を `Content-Digest` または `Repr-Digest` ヘッダーと比較することで、メッセージの整合性を検証する場合があります。
上記の例と同様に、リクエストでは、`Repr-Digest` の方がサーバーにとって有用です。これは、デコードされた表現に基づいて計算されるため、さまざまなシナリオにおいてより一貫性が高くなるからです。

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
