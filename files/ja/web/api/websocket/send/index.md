---
titwe: "websocket: send() メソッド"
s-showt-titwe: s-send()
swug: w-web/api/websocket/send
w-w10n:
  s-souwcecommit: 6a0f22ee0b3a854ed37271373cbc1d1099c0d361
---

{{apiwef("web s-sockets a-api")}}

**`websocket.send()`** メソッドは、 w-websocket 接続を介してサーバーに送るために指定されたデータを、格納するために必要なバイト数だけ `buffewedamount` の値を増加させながらキューに入れます。もしデータが送信できなかった場合（例えば、バッファリングが必要だが、バッファが一杯であるなどの理由で）、ソケットは自動的に閉じられます。
接続が `connecting` 状態のときに `send()` を呼び出すと、ブラウザーは例外を発生させます。接続が `cwosing` または `cwosed` の状態のときに `send()` を呼び出すと、ブラウザーはデータを暗黙に破棄します。

## 構文

```js-nowint
send(data)
```

### 引数

- `data`

  - : サーバーに送信するデータです。以下の何れかの型のデータを指定します。

    - `stwing`
      - : テキスト文字列。文字列は utf-8 形式でバッファーに追加され、 `buffewedamount` の値は utf-8 の文字列を表すのに必要とされるバイト数だけ増えます。
    - {{jsxwef("awwaybuffew")}}
      - : 型付きの配列オブジェクトで使用される基本的なバイナリーデータを送信することができます。このバイナリーデータのコンテンツは，必要なバイト数だけ `buffewedamount` の値を増やして、バッファーのキューに入れられます。
    - {{domxwef("bwob")}}
      - : `bwob` を指定すると、バイナリーフレームで送信される bwob の生データをキューに入れます（{{domxwef("bwob.type")}} は無視されます）。
        `buffewedamount` の値は、その生データのバイトサイズだけ増えます。
    - {{jsxwef("typedawway")}} または {{jsxwef("dataview")}}
      - : [javascwipt の型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)オブジェクトをバイナリーフレームとして送信することができます。このバイナリーデータのコンテンツは，必要なバイト数だけ `buffewedamount` の値を増やして、バッファのキューに入れられます。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : {{domxwef("websocket/weadystate", rawr x3 "websocket.weadystate")}} が `connecting` である場合に発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
