---
title: Transfer-Encoding
slug: Web/HTTP/Headers/Transfer-Encoding
---

{{HTTPSidebar}}

**`Transfer-Encoding`** ヘッダーは、{{Glossary("Payload body","ペイロード本文")}}をユーザーに安全に転送するために使われる符号化方式を指定します。

> **メモ:** [HTTP/2](https://wikipedia.org/wiki/HTTP/2) は HTTP 1.1 のチャンク化した転送エンコードの仕組みに対応しておらず、新規にもっと効率的な、データストリーミングの仕組みを提供しています。

`Transfer-Encoding` は[ホップバイホップヘッダー](/ja/docs/Web/HTTP/Headers#hbh)であり、リソース自体ではなく、二つのノード間のメッセージに適用されます。複数ノードコネクションのそれぞれの区間は、異なる `Transfer-Encoding` の値を使用することがあります。コネクション全体を通してデータを圧縮したい場合は、代わりにエンドトゥエンドの {{HTTPHeader("Content-Encoding")}} ヘッダーを使用してください。

本文のない {{HTTPMethod("HEAD")}} リクエストに対するレスポンスで使われたときは、対応する {{HTTPMethod("GET")}} メッセージに適用されるであろう値を示します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
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
Transfer-Encoding: chunked
Transfer-Encoding: compress
Transfer-Encoding: deflate
Transfer-Encoding: gzip
Transfer-Encoding: identity

// コンマで区切って複数の値を並べることができます
Transfer-Encoding: gzip, chunked
```

## ディレクティブ

- `chunked`
  - : データはチャンク (塊) の連続で送られます。この場合は {{HTTPHeader("Content-Length")}} ヘッダーが省略されます。それぞれのチャンクの先頭に現在のチャンクの長さを 16 進数の形式で追加し、その後で '`\r\n`' が続き、チャンク自体ももう一つの '`\r\n`' が続きます。最後のチャンクは通常のチャンクですが、長さが 0 であるという点が異なります。この後に、一連のエンティティのヘッダーフィールド (おそらく空) から成るトレイラーが続きます。
- `compress`
  - : [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW) アルゴリズムを使用した形式です。この値の名前はこのアルゴリズムを実装している UNIX の _compress_ プログラムから採られました。
    特許問題 (2003 年に期限切れ) の影響もあり、多くの UNIX ディストリビューションから compress プログラムが消滅したように、今日ではこのコンテンツ符号化方式を使用しているブラウザーはほとんどありません。
- `deflate`
  - : [zlib](http://en.wikipedia.org/wiki/Zlib) 構造体 ([RFC 1950](http://tools.ietf.org/html/rfc1950) で定義) と [_deflate_](http://en.wikipedia.org/wiki/DEFLATE) 圧縮アルゴリズム ([RFC 1951](http://tools.ietf.org/html/rfc1952) で定義) を使用します。
- `gzip`
  - : [Lempel-Ziv coding](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77) と 32 ビット CRC を使用する形式です。これは元は UNIX の _gzip_ プログラムの形式です。 HTTP/1.1 標準は、互換性のために、このコンテンツ符号化方式の別名として`x-gzip` を解釈することにサーバーが対応することを推奨しています。
- `identity`
  - : 恒等写像 (つまり、圧縮なし、変更なし) であることを示します。このトークンは、特に明示された場合は、常に受け付けられるとみなされます。

## 例

### チャンク化の符号化

チャンク化の符号化は、大量のデータをクライアントに送り、リクエストが完了するまでレスポンスの合計の長さが分からない場合に便利です。例えば、巨大な HTML の表をデータベースのクエリの結果として作成したり、大きな画像を転送したりする場合などです。チャンク化されたレスポンスは以下のようになります。

```
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
\r\n
```

## 仕様書

| 仕様書                                        | 題名                                                               |
| --------------------------------------------- | ------------------------------------------------------------------ |
| {{RFC("7230", "Transfer-Encoding", "3.3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing |

## ブラウザーの互換性

{{Compat("http.headers.Transfer-Encoding")}}

## 関連情報

- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- トレイラーの使用を制御するヘッダーフィールド: {{HTTPHeader("TE")}} (リクエスト) および {{HTTPHeader("Trailer")}} (レスポンス)
- [チャンク化された転送エンコーディング](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
