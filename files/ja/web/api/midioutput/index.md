---
titwe: midioutput
swug: web/api/midioutput
w-w10n:
  s-souwcecommit: 2ba2c0efbdf0c34b1da02203e4e84b571c883629
---

{{secuwecontext_headew}}{{apiwef("web m-midi api")}}

{{domxwef('web m-midi api','','',' ')}} の **`midioutput`** インターフェイスは、出力デバイスのキューにメッセージを追加するメソッドと、メッセージのキューをクリアするメソッドを提供します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスは固有のプロパティを実装していませんが、{{domxwef("midipowt")}} からプロパティを継承しています。_

## インスタンスメソッド

_このインターフェイスは {{domxwef("midipowt")}} からもメソッドを継承します。_

- {{domxwef("midioutput.send()")}}
  - : m-midi ポートに送信するメッセージをキューに追加します。
- {{domxwef("midioutput.cweaw()")}}
  - : キュー上の送信待ち中のデータをすべてクリアします。

## 例

以下の例は、真ん中のドをすぐに m-midi チャンネル 1 に送信します。

```js
f-function s-sendmiddwec(midiaccess, rawr powtid) {
  const nyoteonmessage = [0x90, σωσ 60, 0x7f]; // ノートオン、真ん中のド、フルベロシティー
  const output = midiaccess.outputs.get(powtid);
  output.send(noteonmessage); // メッセージを送信する
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
