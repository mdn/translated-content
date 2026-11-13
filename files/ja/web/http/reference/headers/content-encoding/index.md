---
title: Content-Encoding ヘッダー
short-title: Content-Encoding
slug: Web/HTTP/Reference/Headers/Content-Encoding
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

**`Content-Encoding`** は{{Glossary("representation header", "表現ヘッダー")}}で、リソースに適用されたエンコード方式とその順序を示します。
これにより、受信側はデータをどのようにデコードすれば、{{HTTPHeader("Content-Type")}} ヘッダーで指定された元のコンテンツ形式を取得できるかを把握できます。
コンテンツのエンコード方式は、主に元のメディア形式に関する情報を失うことなくメッセージデータを圧縮するために使用されます。

サーバーは可能な限りデータを圧縮し、適切な場合にはコンテンツエンコーディングを使用すべきです。
.zip や .jpeg などの既に圧縮されたメディア形式をさらに圧縮すると、ファイルサイズが増加する可能性があるため、通常は適切ではありません。
元のメディアが既にエンコードされている場合（例えば .zip ファイルとして）、この情報は `Content-Encoding` ヘッダーには含まれません。

`Content-Encoding` ヘッダーが存在する場合、他のメタデータ（例：{{HTTPHeader("Content-Length")}}）は、明示的に指定されていない限り、元のリソースではなくデータのエンコードされた形式のものを表します。
コンテンツエンコード形式と {{HTTPHeader("Transfer-Encoding")}} との違いは、`Transfer-Encoding` が HTTP メッセージ自体のネットワーク上での配信方法を[ホップバイホップ](/ja/docs/Web/HTTP/Reference/Headers#ホップバイホップヘッダー)で処理するという点です。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Representation header", "表現ヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: br
Content-Encoding: zstd
Content-Encoding: dcb
Content-Encoding: dcz

// 複数の場合、適用された順序
Content-Encoding: deflate, gzip
```

## ディレクティブ

- `gzip`
  - : [Lempel-Ziv coding](https://ja.wikipedia.org/wiki/LZ77) (LZ77) を使用し、32 ビットの CRC が付いた形式です。
    これは UNIX の _gzip_ プログラムの独自形式です。 HTTP/1.1 標準は、このエンコード方式に対応するサーバーは、互換性の面から `x-gzip` もエイリアスとして解釈するよう推奨しています。
- `compress`
  - : [Lempel-Ziv-Welch](https://ja.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Welch) (LZW) アルゴリズムを使用した形式です。
    この値の名前は、このアルゴリズムを実装している UNIX の _compress_ プログラムから取られました。
    このエンコード方式は、特許問題（2003 年に期限切れ）を一因として、 compress プログラムが多くの UNIX ディストリビューションから削除されたのと同様に、現在では多くのブラウザーから削除されています。
- `deflate`
  - : [zlib](https://ja.wikipedia.org/wiki/Zlib) 構造（{{rfc(1950)}} で定義）の [deflate](https://ja.wikipedia.org/wiki/Deflate) 圧縮アルゴリズム（{{rfc(1951)}}) で定義）を使用します。
- `br`
  - : {{glossary("Brotli compression","Brotli")}} アルゴリズム構造を使用した形式です（{{rfc(7932)}} で定義されています）。
- `zstd`
  - : {{glossary("Zstandard compression","Zstandard")}} アルゴリズム構造を使用した形式です（{{rfc(8878)}} で定義されています）。
- `dcb` {{experimental_inline}}
  - : [圧縮辞書 Brotli アルゴリズム](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-brotl)を使用した形式です。[圧縮辞書転送](/ja/docs/Web/HTTP/Guides/Compression_dictionary_transport)を参照してください。

- `dcz` {{experimental_inline}}
  - : [圧縮辞書 Zstandard アルゴリズム](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-compression-dictionary#name-dictionary-compressed-zstan)を使用した形式です。[圧縮辞書転送](/ja/docs/Web/HTTP/Guides/Compression_dictionary_transport)を参照してください。

## 例

### gzip での圧縮

クライアント側では、送信で使用してほしい圧縮方式のリストを HTTP リクエストで示すことができます。 {{HTTPHeader("Accept-Encoding")}} ヘッダーを使用して、コンテンツのエンコード方式の交渉が行われます。

```http
Accept-Encoding: gzip, deflate
```

サーバーは使用した方式を、 `Content-Encoding` レスポンスヘッダーで応答します。

```http
Content-Encoding: gzip
```

なお、サーバーはどの圧縮方式も使用することを義務づけられていません。圧縮はサーバー設定や使用しているサーバーモジュールに強く依存します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{Glossary("Brotli compression", "Brotli 圧縮")}}
- {{Glossary("GZip compression", "GZip 圧縮")}}
- {{Glossary("Zstandard compression", "Zstandard 圧縮")}}
- [圧縮辞書転送ガイド](/ja/docs/Web/HTTP/Guides/Compression_dictionary_transport)
