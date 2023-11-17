---
title: Content-Encoding
slug: Web/HTTP/Headers/Content-Encoding
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

**`Content-Encoding`** は{{Glossary("representation header", "表現ヘッダー")}}で、表現（メッセージの内容）に適用されているエンコード方式とその順番を保持しています。
これによって受信者は、元の内容の形式を取得するために、その表現をデコードする方法を知ることができます。
コンテンツのエンコード方式は、主に元のメディア形式に関する情報を失うことなくメッセージデータを圧縮するために使用されます。

元のメディア/コンテンツの形式は {{HTTPHeader("Content-Type")}} ヘッダーで指定し、 `Content-Encoding` はデータの表現、つまり「コード化形式」に適用されることに注意してください。元のメディアが何らかの方法でエンコードされている場合（zip ファイルなど）、この情報は `Content-Encoding` ヘッダーには含まれません。

可能な限りデータを圧縮してこのフィールドを使用することを推奨しますが、 JPEG 画像などの一部のリソースは、すでに圧縮されています。時には、さらに圧縮をしても長さが短縮されないどころか、かえって長くなることもあります。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Representation header", "表現ヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "禁止ヘッダー名")}}</th>
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

// 複数の場合、適用された順序
Content-Encoding: deflate, gzip
```

## ディレクティブ

- `gzip`
  - : [Lempel-Ziv coding](https://ja.wikipedia.org/wiki/LZ77) (LZ77) を使用し、32 ビットの CRC が付いた形式です。これは UNIX の _gzip_ プログラムの独自形式です。 HTTP/1.1 標準は、このエンコード方式に対応するサーバーは、互換性の面から `x-gzip` もエイリアスとして解釈するよう推奨しています。
- `compress`
  - : [Lempel-Ziv-Welch](https://ja.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Welch) (LZW) アルゴリズムを使用した形式です。この値の名前は、このアルゴリズムを実装している UNIX の _compress_ プログラムから取られました。このエンコード方式は、特許問題（2003 年に期限切れ）を一因として、 compress プログラムが多くの UNIX ディストリビューションから削除されたのと同様に、現在では多くのブラウザーから削除されています。
- `deflate`
  - : [zlib](https://ja.wikipedia.org/wiki/Zlib) 構造（{{rfc(1950)}} で定義）の [deflate](https://ja.wikipedia.org/wiki/Deflate) 圧縮アルゴリズム（{{rfc(1951)}}) で定義）を使用します。
- `br` {{Non-standard_Inline}}
  - : [Brotli](https://ja.wikipedia.org/wiki/Brotli) アルゴリズムを使用した形式です。

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
