---
title: Transfer-Encoding
slug: Web/HTTP/Reference/Headers/Transfer-Encoding
original_slug: Web/HTTP/Headers/Transfer-Encoding
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

**`Transfer-Encoding`** ヘッダーは、ネットワーク上のノード間でメッセージを転送する際に使用するエンコード方式を指定します。

> [!WARNING]
> HTTP/2 では、Transfer-Encoding ヘッダーの使用は、HTTP/2 の特定の仕様である `"trailers"` 以外はすべて禁止されています。
> HTTP/2 以降では、チャンク転送よりも効率的なデータストリーミングの仕組みを自分自身で定義しており、このヘッダーの使用は禁止されています。
> HTTP/2 でこのヘッダーを使用すると、HTTP/2 プロトコルが使用を禁止しているため、特定のプロトコルエラーが発生する可能性が高いです。

`Transfer-Encoding` は[ホップバイホップヘッダー](/ja/docs/Web/HTTP/Reference/Headers#ホップバイホップヘッダー)であり、リソース自体ではなく、二つのノード間のメッセージに適用されます。
ノード間のコネクションが複数ある場合は、それぞれの区間で使用する `Transfer-Encoding` の値が異なることがあります。
コネクション全体を通してデータを圧縮したい場合は、代わりにエンドトゥエンドの {{HTTPHeader("Content-Encoding")}} ヘッダーを使用してください。

本文のない {{HTTPMethod("HEAD")}} リクエストに対するレスポンスで使われたときは、対応する {{HTTPMethod("GET")}} メッセージに適用されるであろう値を示します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}, {{Glossary("Response header", "レスポンスヘッダー")}}, {{Glossary("Content header", "コンテンツヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}
      </th>
      <td>はい</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip

// カンマで区切って複数の値を並べることができます
Transfer-Encoding: gzip, chunked
```

## ディレクティブ

- `chunked`
  - : データはチャンク（塊）の連続で送られます。この場合は {{HTTPHeader("Content-Length")}} ヘッダーが省略されます。それぞれのチャンクの先頭に現在のチャンクの長さを 16 進数の形式で追加し、その後で `\r\n` が続き、チャンク自体ももう一つの `\r\n` が続きます。
    最後のチャンクは通常のチャンクですが、長さが 0 であるという点が異なります。この後に、一連のエンティティのヘッダーフィールド（おそらく空）から成るトレイラーが続きます。
- `compress`
  - : [Lempel-Ziv-Welch](https://en.wikipedia.org/wiki/LZW) (LZW) アルゴリズムを使用した形式です。この値の名前はこのアルゴリズムを実装している UNIX の _compress_ プログラムから採られました。
    特許問題（2003 年に期限切れ）の影響もあり、多くの UNIX ディストリビューションから compress プログラムが消滅したように、今日ではこのコンテンツ符号化方式を使用しているブラウザーはほとんどありません。
- `deflate`
  - : [zlib](https://en.wikipedia.org/wiki/Zlib) 構造体（[RFC 1950](https://datatracker.ietf.org/doc/html/rfc1950) で定義）と [_deflate_](https://en.wikipedia.org/wiki/DEFLATE) 圧縮アルゴリズム（[RFC 1951](https://datatracker.ietf.org/doc/html/rfc1952) で定義）を使用します。
- `gzip`
  - : [Lempel-Ziv coding](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) と 32 ビット CRC を使用する形式です。
    これは元は UNIX の _gzip_ プログラムの形式です。
    HTTP/1.1 標準は、互換性のために、このコンテンツ符号化方式の別名として`x-gzip` を解釈することにサーバーが対応することを推奨しています。

## 例

### チャンク化の符号化

チャンク化の符号化は、大量のデータをクライアントに送り、リクエストが完了するまでレスポンスの合計の長さが分からない場合に便利です。例えば、巨大な HTML の表をデータベースのクエリーの結果として作成したり、大きな画像を転送したりする場合などです。チャンク化されたレスポンスは以下のようになります。

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
11\r\n
Developer Network\r\n
0\r\n
\r\n
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- トレイラーの使用を制御するヘッダーフィールド: {{HTTPHeader("TE")}} (リクエスト) および {{HTTPHeader("Trailer")}} (レスポンス)
- [チャンク化された転送エンコーディング](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
