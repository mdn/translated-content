---
title: Transfer-Encoding ヘッダー
short-title: Transfer-Encoding
slug: Web/HTTP/Reference/Headers/Transfer-Encoding
l10n:
  sourceCommit: dc18e207e48c04447d979a731129d1ae253a2109
---

HTTP の **`Transfer-Encoding`** {{glossary("request header", "リクエストヘッダー")}}および{{glossary("Response header", "レスポンスヘッダー")}}ヘッダーは、ネットワーク上のノード間でメッセージを転送する際に使用するエンコード方式を指定します。

`Transfer-Encoding` は[ホップバイホップヘッダー](/ja/docs/Web/HTTP/Reference/Headers#ホップバイホップヘッダー)であり、リソース自体ではなく、二つのノード間のメッセージに適用されます。
ノード間のコネクションが複数ある場合は、それぞれの区間で使用する `Transfer-Encoding` の値が異なることがあります。
コネクション全体を通してデータを圧縮したい場合は、代わりにエンドトゥエンドの {{HTTPHeader("Content-Encoding")}} ヘッダーを使用してください。

実際にはこのヘッダーはほとんど使用されず、使用される場合でもほぼ常に `chunked` で使用されます。

すなわち、仕様書では、メッセージ内に存在する場合、そのホップにおけるメッセージの圧縮方式や、メッセージがチャンク化されているか否かを示すとしています。
例えば、`Transfer-Encoding: gzip, chunked` は、コンテンツが gzip 符号化で圧縮された後、メッセージ本体を形成する際にチャンク符号化でチャンク化されたことを示します。

{{HTTPMethod("HEAD")}} リクエストへのレスポンスでは、このヘッダーは省略可能です。これらのメッセージには本体がなく、したがって転送エンコード方式も存在しないためです。
存在する場合、対応するレスポンスに適用される値を示します。これは、その {{HTTPMethod("GET")}} メッセージに対するレスポンスであり、その `GET` リクエストに優先される`Transfer-Encoding` が指定されていない場合に適用されます。

> [!WARNING]
> HTTP/2 では `Transfer-Encoding` ヘッダーの使用をすべて禁止しています。
> HTTP/2 以降では、チャンク転送よりも効率的なデータストリーミングの仕組みを提供しているからです。
> HTTP/2 でこのヘッダーを使用すると、特定のプロトコルエラーが発生する可能性が高いです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Request header", "リクエストヘッダー")}}, {{Glossary("Response header", "レスポンスヘッダー")}}, {{Glossary("Content header", "コンテンツヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
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
  - : データはチャンク（塊）の連続で送られます。
    コンテンツは、長さが区切られたバッファーの連続として転送される未知のサイズのストリームで送信可能であるため、送信者は接続を開いたままに保ち、受信者がメッセージ全体を受信した時点で通知することができます。
    この場合は {{HTTPHeader("Content-Length")}} ヘッダーが省略されます。それぞれのチャンクの先頭に現在のチャンクの長さを 16 進数の形式で追加し、その後で `\r\n` が続き、チャンク自体ももう一つの `\r\n` が続きます。
    最後のチャンクは長さ 0 のチャンクです。
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

チャンク化の符号化は、大量のデータをクライアントに送り、リクエストが完了するまでレスポンスの合計の長さが分からない場合に便利です。
例えば、巨大な HTML の表をデータベースのクエリーの結果として作成したり、大きな画像を転送したりする場合などです。チャンク化されたレスポンスは以下のようになります。

```http
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked

7\r\n
Welcome\r\n
1c\r\n
to Mozilla Developer Network\r\n
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
- [チャンク化された転送エンコーディング](https://en.wikipedia.org/wiki/Chunked_transfer_encoding)
