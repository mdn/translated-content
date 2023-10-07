---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
---

{{HTTPSidebar}}

**`Content-Encoding`** エンティティヘッダーは、圧縮のメディア種別に使用します。存在する場合、値はエンティティ本体にどのエンコーディングが適用されているかを示します。これはクライアントに、 `Content-Type` ヘッダーで参照されるメディア種別を得るためにデコードする方法を知らせます。

可能な限りデータを圧縮してこのフィールドを使用することを推奨しますが、 JPEG 画像などの一部のリソースは、すでに圧縮されています。時には、さらに圧縮をしても長さが短縮されないどころか、かえって長くなることもあります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Entity header", "エンティティヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: identity
Content-Encoding: br

// 複数の場合、適用された順序
Content-Encoding: gzip, identity
Content-Encoding: deflate, gzip
```

## ディレクティブ

- `gzip`
  - : [Lempel-Ziv coding](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) を使用し、32 ビットの CRC が付いた形式です。これは UNIX の _gzip_ プログラムの独自形式です。 HTTP/1.1 標準は、この Content-Encoding に対応するサーバーは、互換性の面から `x-gzip` もエイリアスとして解釈するよう推奨しています。
- `compress`
  - : [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW) アルゴリズムを使用した形式です。この値の名前は、このアルゴリズムを実装している UNIX の _compress_ プログラムから取られました。特許問題 (2003 年に期限切れ) を一因として、 compress プログラムが多くの UNIX ディストリビューションから削除されたのと同様に、この Content-Encoding は現在では多くのブラウザーから削除されています。
- `deflate`
  - : [zlib](http://en.wikipedia.org/wiki/Zlib) 構造 ([RFC 1950](http://tools.ietf.org/html/rfc1950) で定義) の [_deflate_](http://en.wikipedia.org/wiki/DEFLATE) 圧縮アルゴリズム ([RFC 1951](http://tools.ietf.org/html/rfc1952) で定義) を使用します。
- `identity`
  - : 等価関数 (つまり、圧縮も変更もなし) を示します。このトークンは、明示的に指定された場合を除き、常に受け入れられます。
- `br`
  - : [Brotli](https://en.wikipedia.org/wiki/Brotli) アルゴリズムを使用した形式です。

## 例

### gzip での圧縮

クライアント側では、送信で使用してほしい圧縮方式のリストを HTTP 要求で示すことができます。 {{HTTPHeader("Accept-Encoding")}} ヘッダーを使用して、コンテンツのエンコード方式の交渉が行われます。

```
Accept-Encoding: gzip, deflate
```

サーバーは応答に使用したエンコード方式を、 `Content-Encoding` レスポンスヘッダーで示します。

```
Content-Encoding: gzip
```

なお、サーバーはどの圧縮方式も使用することを義務づけられていません。圧縮はサーバー設定や使用しているサーバーモジュールに強く依存します。

## 仕様書

| 仕様書                                           | 題名                                                          |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7932", "Brotli Compressed Data Format")}} | Brotli 圧縮データ形式                                         |
| {{RFC("7231", "Content-Encoding", "3.1.2.2")}}   | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |
| {{RFC("2616", "Content-Encoding", "14.11")}}     | Content-Encoding                                              |

## ブラウザーの互換性

{{Compat("http.headers.Content-Encoding")}}

## 関連情報

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Transfer-Encoding")}}
