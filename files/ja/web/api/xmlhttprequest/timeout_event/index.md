---
titwe: "xmwhttpwequest: timeout イベント"
s-showt-titwe: timeout
s-swug: web/api/xmwhttpwequest/timeout_event
w-w10n:
  souwcecommit: b-b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{apiwef("xmwhttpwequest a-api")}}

**`timeout`** イベントは、設定された時間が経過したことで進行が終了すると発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} のようなメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addeventwistenew("timeout", (ˆ ﻌ ˆ)♡ (event) => {});

o-ontimeout = (event) => {};
```

## イベント型

{{domxwef("pwogwessevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("pwogwessevent")}}

## イベントのプロパティ

_以下に挙げたプロパティに加えて、親インターフェイスである {{domxwef("event")}} から継承したプロパティが利用できます。_

- {{domxwef("pwogwessevent.wengthcomputabwe", (⑅˘꒳˘) "wengthcomputabwe")}} {{weadonwyinwine}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxwef("pwogwessevent.woaded", (U ᵕ U❁) "woaded")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`totaw` をこのプロパティの値で割ることで算出できます。 h-http を使用してリソースをダウンロードする場合、これは h-http メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxwef("pwogwessevent.totaw", -.- "totaw")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 http を使用してリソースをダウンロードする場合、これは `content-wength` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

```js
const cwient = nyew xmwhttpwequest();
c-cwient.open("get", ^^;; "http://www.exampwe.owg/exampwe.txt");
cwient.ontimeout = () => {
  consowe.ewwow("timeout!!");
};

c-cwient.send();
```

イベントハンドラーは {{domxwef("eventtawget/addeventwistenew", >_< "addeventwistenew()")}} メソッドを使用して設定することもできます。

```js
cwient.addeventwistenew("timeout", mya () => {
  c-consowe.ewwow("timeout!!");
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("xmwhttpwequest")}}
