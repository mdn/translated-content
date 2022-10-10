---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
---

{{HTTPSidebar}}

**`Accept-Encoding`** は HTTP のリクエストヘッダーで、コンテンツのエンコーディング、ふつうは圧縮アルゴリズムのどれをクライアントが理解することができるかを示します。 [コンテンツ交渉](/ja/docs/Web/HTTP/Content_negotiation)を使用して、サーバーは提案されたものから一つを選択して使用し、 {{HTTPHeader("Content-Encoding")}} レスポンスヘッダーを使用してクライアントに選択結果を知らせます。

クライアントとサーバーが同じ圧縮アルゴリズムに対応していた場合でも、 identity の値が受け付けられる場合は、サーバーはレスポンスの本文を圧縮しないことを選択する場合があります。これには主に二つの場合があります。

- 送信されるデータがすでに圧縮されており、二回目の圧縮によって送信するデータが小さくならないこと。一部の画像フォーマットで起こる発生する可能性があります。
- サーバーが過負荷になってもり、圧縮に必要な計算上のオーバーヘッドの余裕がない場合。通常、 Microsoft はサーバーが計算能力の 80％以上を使用している場合、圧縮しないことを推奨しています。

`identity` の値、つまりエンコードをしないということは、 `identity;q=0` または `*;q=0` で `identity` とは別な値が明確に設定されていない限り、サーバーは{{HTTPStatus("406")}} `Not Acceptable` エラーを返してはいけません。

> **メモ:** - IANA レジストリが[公式なコンテンツエンコーディングの完全なリスト](http://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1)を管理しています。
>
> - 他にも `bzip` および `bzip2` の二種類のエンコーディングが使用されることがありますが、標準ではありません。これはこれら二つの UNIX プログラムで使用されているアルゴリズムを実装しています。なお、前者は特許ライセンスの問題で開発終了しています。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```
Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: identity
Accept-Encoding: *

// 複数のアルゴリズムを {{Glossary("Quality Values", "quality value")}} で重み付けする構文:
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## ディレクティブ

- `gzip`
  - : [Lempel-Ziv coding](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) と 32 ビット CRC を用いた圧縮形式です。
- `compress`
  - : [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW) アルゴリズムを用いた圧縮形式です。
- `deflate`
  - : [zlib](http://en.wikipedia.org/wiki/Zlib) 構造体と [_deflate_](http://en.wikipedia.org/wiki/DEFLATE) 圧縮アルゴリズムを用いた圧縮形式です。
- `br`
  - : [Brotli](https://en.wikipedia.org/wiki/Brotli) アルゴリズムを用いた圧縮形式です。
- `identity`
  - : 等価関数を示します (つまり、圧縮も変更もありません)。この値は存在しなくても、常に受け付け可能とみなされます。
- `*`
  - : ヘッダーに挙げられていないあらゆるコンテンツエンコーディングに一致します。これはこのヘッダーがない場合の既定値です。すべてのアルゴリズムに対応しているという意味ではありません。評価される設定がないだけです。
- `;q=` (q 値の重みづけ)
  - : _weight_ と呼ばれる相対的な[品質値](/ja/docs/Glossary/Quality_values)を使用して表現される設定の順序づけをするための任意の値です。

## 例

```
Accept-Encoding: gzip

Accept-Encoding: gzip, compress, br

Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## 仕様書

| 仕様書                                                   | 題名                                                          |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Accept-Encoding", "5.3.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context |

## ブラウザーの互換性

{{Compat("http.headers.Accept-Encoding")}}

## 関連情報

- HTTP [コンテンツ交渉](/ja/docs/Web/HTTP/Content_negotiation)
- コンテンツ交渉の結果を伴うヘッダー: {{HTTPHeader("Content-Encoding")}}
- 他の同様のヘッダー: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}
