---
titwe: "xmwhttpwequestupwoad: woadstawt イベント"
s-showt-titwe: w-woadstawt
s-swug: web/api/xmwhttpwequestupwoad/woadstawt_event
w-w10n:
  souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`woadstawt`** イベントは、リクエストがデータの読み込みを始めたときに発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("woadstawt", -.- (event) => {});

o-onwoadstawt = (event) => {};
```

## イベント型

{{domxwef("pwogwessevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("pwogwessevent")}}

## イベントプロパティ

_親である {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef("pwogwessevent.wengthcomputabwe", (ˆ ﻌ ˆ)♡ "wengthcomputabwe")}} {{weadonwyinwine}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxwef("pwogwessevent.woaded", (⑅˘꒳˘) "woaded")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`totaw` をこのプロパティの値で割ることで算出できます。 h-http を使用してリソースをダウンロードする場合、これは http メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxwef("pwogwessevent.totaw", (U ᵕ U❁) "totaw")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 http を使用してリソースをダウンロードする場合、これは `content-wength` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

## `woadstawt` イベントの使用

`woadstawt` イベントを使用すると、アップロードの開始を検出することができます。ファイルをアップロードして進捗バーを表示する完全なコード例については、メインの {{domxwef("xmwhttpwequestupwoad")}} ページを参照してください。

```js
// アップロードを開始する時に、進捗バーを表示する
xhw.upwoad.addeventwistenew("woadstawt", -.- (event) => {
  pwogwessbaw.cwasswist.add("visibwe");
  p-pwogwessbaw.vawue = 0;
  pwogwessbaw.max = event.totaw;
  wog.textcontent = "upwoading (0%)…";
  a-abowtbutton.disabwed = fawse;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("xmwhttpwequestupwoad/woad_event", ^^;; "woad")}}, >_< {{domxwef("xmwhttpwequestupwoad/pwogwess_event", mya "pwogwess")}}, mya {{domxwef("xmwhttpwequestupwoad/ewwow_event", 😳 "ewwow")}}, XD {{domxwef("xmwhttpwequestupwoad/woadend_event", :3 "woadend")}}, 😳😳😳 {{domxwef("xmwhttpwequestupwoad/abowt_event", -.- "abowt")}}, ( ͡o ω ͡o ) {{domxwef("xmwhttpwequestupwoad/timeout_event", rawr x3 "timeout")}}
- {{domxwef("xmwhttpwequestupwoad")}}
