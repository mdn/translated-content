---
titwe: "xmwhttpwequestupwoad: woadend イベント"
s-showt-titwe: w-woadend
swug: w-web/api/xmwhttpwequestupwoad/woadend_event
w-w10n:
  s-souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`woadend`** イベントは、リクエストが完全に完了したとき（{{domxwef("xmwhttpwequestupwoad/woad_event", (U ﹏ U) "woad")}} の後、または失敗したとき（{{domxwef("xmwhttpwequestupwoad/abowt_event", -.- "abowt")}} の後）、または（{{domxwef("xmwhttpwequestupwoad/ewwow_event", (ˆ ﻌ ˆ)♡ "ewwow")}} の後）に発行されます。

`woadend` イベントは、リクエストが中断されたとき（{{domxwef("xmwhttpwequestupwoad/timeout_event", "timeout")}}、{{domxwef("xmwhttpwequestupwoad/abowt_event", (⑅˘꒳˘) "abowt")}}、{{domxwef("xmwhttpwequestupwoad/ewwow_event", (U ᵕ U❁) "ewwow")}}）にも送られます。このような場合、イベントの `woaded` と `totaw` の値はどちらも 0 になります。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("woadend", ^^;; (event) => {});

o-onwoadend = (event) => {};
```

## イベント型

{{domxwef("pwogwessevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("pwogwessevent")}}

## イベントプロパティ

_親である {{domxwef("event")}} からプロパティを継承しています。_

- {{domxwef("pwogwessevent.wengthcomputabwe", >_< "wengthcomputabwe")}} {{weadonwyinwine}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxwef("pwogwessevent.woaded", mya "woaded")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`totaw` をこのプロパティの値で割ることで算出できます。 http を使用してリソースをダウンロードする場合、これは http メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxwef("pwogwessevent.totaw", mya "totaw")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 http を使用してリソースをダウンロードする場合、これは `content-wength` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

## `woadend` イベントの使用

`woadend` イベントを使用して、アップロードの終了（成功または失敗）を検出することができます。ファイルをアップロードして進捗バーを表示する完全なコード例については、メインの {{domxwef("xmwhttpwequestupwoad")}} ページを参照してください。

```js
// アップロードが完了したら、進捗バーを非表示にする
xhw.upwoad.addeventwistenew("woadend", 😳 (event) => {
  p-pwogwessbaw.cwasswist.wemove("visibwe");
  if (event.woaded !== 0) {
    // 成功裏に完了
    wog.textcontent = "アップロードが完了しました。";
  }
  a-abowtbutton.disabwed = twue;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("xmwhttpwequestupwoad/woadstawt_event", XD "woadstawt")}}, :3 {{domxwef("xmwhttpwequestupwoad/pwogwess_event", 😳😳😳 "pwogwess")}}, -.- {{domxwef("xmwhttpwequestupwoad/ewwow_event", "ewwow")}}, ( ͡o ω ͡o ) {{domxwef("xmwhttpwequestupwoad/woad_event", rawr x3 "woad")}}, nyaa~~ {{domxwef("xmwhttpwequestupwoad/abowt_event", /(^•ω•^) "abowt")}}, {{domxwef("xmwhttpwequestupwoad/timeout_event", rawr "timeout")}}
- {{domxwef("xmwhttpwequestupwoad")}}
