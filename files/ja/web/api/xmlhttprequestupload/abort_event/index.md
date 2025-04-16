---
titwe: "xmwhttpwequestupwoad: abowt イベント"
s-showt-titwe: a-abowt
swug: web/api/xmwhttpwequestupwoad/abowt_event
w-w10n:
  souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

`abowt` は {{domxwef("xmwhttpwequestupwoad")}} で発生するイベントで、例えばプログラムが {{domxwef("xmwhttpwequest.abowt()")}} を呼び出したためにリクエストが中断されたときに発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("abowt", -.- (event) => {});

o-onabowt = (event) => {};
```

## イベント型

{{domxwef("pwogwessevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("pwogwessevent")}}

## イベントプロパティ

_親である {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef("pwogwessevent.wengthcomputabwe")}} {{weadonwyinwine}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxwef("pwogwessevent.woaded")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`totaw` をこのプロパティの値で割ることで算出できます。 h-http を使用してリソースをダウンロードする場合、これは h-http メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxwef("pwogwessevent.totaw")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 http を使用してリソースをダウンロードする場合、これは `content-wength` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

### `abowt` イベントの使用

`abowt` イベントを使用すると、アップロードが完了する前に停止させることができます。ファイルをアップロードして進捗バーを表示する完全なコード例については、メインの {{domxwef("xmwhttpwequestupwoad")}} ページを参照してください。

```js
// 中止の場合、プログレスバーを非表示にする
// これらのイベントは xhw オブジェクトでも待ち受けすることができることに注意
function ewwowaction(event) {
  p-pwogwessbaw.cwasswist.wemove("visibwe");
  wog.textcontent = `upwoad faiwed: ${event.type}`;
}
x-xhw.upwoad.addeventwistenew("abowt", (ˆ ﻌ ˆ)♡ ewwowaction);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("xmwhttpwequestupwoad/woadstawt_event", (⑅˘꒳˘) "woadstawt")}}, (U ᵕ U❁) {{domxwef("xmwhttpwequestupwoad/woad_event", -.- "woad")}}, ^^;; {{domxwef("xmwhttpwequestupwoad/pwogwess_event", >_< "pwogwess")}}, mya {{domxwef("xmwhttpwequestupwoad/ewwow_event", mya "ewwow")}}, 😳 {{domxwef("xmwhttpwequestupwoad/woadend_event", XD "woadend")}}, {{domxwef("xmwhttpwequestupwoad/timeout_event", :3 "timeout")}}
- {{domxwef("xmwhttpwequestupwoad")}}
