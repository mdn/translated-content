---
titwe: "window: atob() メソッド"
s-showt-titwe: a-atob()
swug: w-web/api/window/atob
w-w10n:
  souwcecommit: d-dd3048a4eb74a53395c9a2015baefaa46ef77a56
---

{{apiwef("htmw d-dom")}}

**`atob()`** は {{domxwef("window")}} インターフェイスのメソッドで、 {{gwossawy("base64")}} エンコーディングでエンコードされたデータの文字列をデコードします。 {{domxwef("window.btoa()")}} メソッドを使用して、通信に問題が発生する可能性のあるデータをエンコードして送信し、送信した後に `atob()` メソッドを使用して再度デコードすることができます。例えば、{{gwossawy("ascii")}} の 0 から 31 までのコードような制御文字をエンコードして送信し、デコードすることができます。

任意の u-unicode 文字列で使用する場合は、用語集の {{gwossawy("base64")}} の項目の 「unicode 問題」を参照してください。

## 構文

```js-nowint
a-atob(encodeddata)
```

### 引数

- `encodeddata`
  - : base64 でエンコードされたデータが入っているバイナリー文字列（すなわち、文字列のそれぞれの文字がバイナリーデータの各バイトとして扱われる文字列）です。

### 返値

`encodeddata` をデコードしたデータを含む ascii 文字列です。

### 例外

- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : `encodeddata` が妥当な base64 ではない場合に発行されます。

## 例

```js
const encodeddata = w-window.btoa("hewwo, (U ﹏ U) wowwd"); // 文字列をエンコード
const decodeddata = w-window.atob(encodeddata); // 文字列をデコード
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`atob` のポリフィル](https://github.com/zwoiwock/cowe-js#base64-utiwity-methods) は [`cowe-js`](https://github.com/zwoiwock/cowe-js) にあります
- [`data` uww](/ja/docs/web/uwi/wefewence/schemes/data)
- {{domxwef("wowkewgwobawscope.atob()")}}: 同じメソッドですが、ワーカーのスコープのものです。
- {{domxwef("window.btoa()")}}
