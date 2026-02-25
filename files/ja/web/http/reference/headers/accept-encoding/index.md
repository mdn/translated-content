---
title: Accept-Encoding ヘッダー
short-title: Accept-Encoding
slug: Web/HTTP/Reference/Headers/Accept-Encoding
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`Accept-Encoding`** は{{glossary("request header", "リクエストヘッダー")}}および{{glossary("Response header", "レスポンスヘッダー")}}で、送信者が理解できるコンテンツエンコード方式（通常は圧縮アルゴリズム）を示します。
リクエストでは、サーバーは[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)を使用してクライアントからのエンコード方式提案の中から 1 つを選択し、その選択を {{HTTPHeader("Content-Encoding")}} レスポンスヘッダーでクライアントに通知します。
レスポンスでは、要求されたリソースへのメッセージにおいて、サーバーが理解できるコンテンツエンコード方式に関する情報を提供し、そのエンコード方式をリソースへの後続のリクエストで使用できるようにします。
例えば、リソースへのリクエスト（例：{{HTTPMethod("PUT")}}）で対応していないエンコード方式が使用された場合、`Accept-Encoding` が {{HTTPStatus("415", "415 Unsupported Media Type")}} レスポンスに含まれます。

クライアントとサーバーが同じ圧縮アルゴリズムに対応していた場合でも、 `identity` の値が受け付けられる場合は、サーバーはレスポンスの本体を圧縮しないことを選択する場合があります。
これには主に 2 つの場合があります。

1. 送信されるデータがすでに圧縮されており、 2 回目の圧縮によって送信するデータが小さくならない場合。
   これは圧縮を伴う画像形式（JPEG など）が該当します。
2. サーバーが過負荷になってもり、圧縮に必要な計算上のオーバーヘッドの余裕がない場合。例えば、 Microsoft はサーバーが計算能力の 80% 以上を使用している場合、圧縮しないことを推奨しています。

`identity;q=0` または `*;q=0` ディレクティブによって、`identity` 値が明示的に禁止（すなわちエンコーディングしないこと）が行われていない限り、サーバーは決して {{HTTPStatus("406", "406 Not Acceptable")}} を返してはいけません。

> [!NOTE]
> IANA レジストリーが[公式なコンテンツエンコード方式の完全なリスト](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#content-coding)を管理しています。
> `bzip` および `bzip2` エンコード方式は標準ではありませんが、特に過去ののものに対応するために使用されることがあります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("request header", "リクエストヘッダー")}}、{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: zstd
Accept-Encoding: dcb
Accept-Encoding: dcz
Accept-Encoding: identity
Accept-Encoding: *

// 複数のアルゴリズムを品質値で重み付けする構文:
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## ディレクティブ

- `gzip`
  - : [Lempel-Ziv coding](https://ja.wikipedia.org/wiki/LZ77) (LZ77) と 32 ビット CRC を用いた圧縮形式です。
- `compress`
  - : [Lempel-Ziv-Welch](https://ja.wikipedia.org/wiki/LZW) (LZW) アルゴリズムを用いた圧縮形式です。
- `deflate`
  - : [zlib](https://ja.wikipedia.org/wiki/Zlib) 構造体と [_deflate_](https://ja.wikipedia.org/wiki/DEFLATE) 圧縮アルゴリズムを用いた圧縮形式です。
- `br`
  - : [Brotli](https://ja.wikipedia.org/wiki/Brotli) アルゴリズムを用いた圧縮形式です。
- `zstd`
  - : [Zstandard](https://ja.wikipedia.org/wiki/Zstandard) アルゴリズムを用いた圧縮形式です。
- `dcb` {{experimental_inline}}
  - : [圧縮辞書 Brotli](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl) アルゴリズムを用いた形式です。[圧縮辞書転送](/ja/docs/Web/HTTP/Guides/Compression_dictionary_transport)を参照してください。
- `dcz` {{experimental_inline}}
  - : [圧縮辞書 Zstandard](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan) アルゴリズムを用いた形式です。[圧縮辞書転送](/ja/docs/Web/HTTP/Guides/Compression_dictionary_transport)を参照してください。
- `identity`
  - : 等価関数を示します（つまり、圧縮も変更もありません）。この値は存在しなくても、常に受け付け可能とみなされます。
- `*`（ワイルドカード）
  - : ヘッダーに挙げられていないあらゆるコンテンツエンコード方式に一致します。これはこのヘッダーがない場合の既定値です。すべてのアルゴリズムに対応しているという意味ではありません。評価される設定がないだけです。
- `;q=` （q 値の重みづけ）
  - : _weight_ と呼ばれる相対的な[品質値](/ja/docs/Glossary/Quality_values)を使用して表現される設定の順序づけをするための任意の値です。

## 例

### デフォルトの Accept-Encoding 値

ブラウザーのナビゲーションでは通常、以下の `Accept-Encoding` リクエストヘッダー値が設定されます。

```http
GET /en-US/ HTTP/2
Host: developer.mozilla.org
Accept-Encoding: gzip, deflate, br, zstd
```

### 重み付けされた Accept-Encoding 値

次のヘッダーは、`0`（最優先）から `1`（最高優先度）までの品質値を使用して `Accept-Encoding` の優先度を示しています。
Brotli 圧縮は `1.0` の重み付けが与えられ、`br` がクライアントの第一選択となります。次に `0.8` の優先度で `gzip` が続き、その他のコンテンツエンコーディングは `0.1` の優先度となります。

```http
Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPStatus("415", "415 Unsupported Media Type")}}
- HTTP [コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)
- コンテンツネゴシエーションの結果を伴うヘッダー: {{HTTPHeader("Content-Encoding")}}
- 他の同様のヘッダー: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Language")}}
- {{Glossary("Brotli compression", "Brotli 圧縮")}}
- {{Glossary("GZip compression", "GZip 圧縮")}}
- {{Glossary("Zstandard compression", "Zstandard 圧縮")}}
- [圧縮辞書転送ガイド](/ja/docs/Web/HTTP/Guides/Compression_dictionary_transport)
