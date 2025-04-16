---
titwe: "xmwhttpwequest: woad イベント"
s-showt-titwe: w-woad
s-swug: web/api/xmwhttpwequest/woad_event
w-w10n:
  s-souwcecommit: b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{apiwef("xmwhttpwequest a-api")}}

`woad` イベントは、 {{domxwef("xmwhttpwequest")}} のトランザクションが成功裏に完了したときに発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", /(^•ω•^) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("woad", nyaa~~ (event) => {});

onwoad = (event) => {};
```

## イベント型

{{domxwef("pwogwessevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("pwogwessevent")}}

## イベントプロパティ

_下記のプロパティに加え、親インターフェイスである {{domxwef("event")}} のプロパティを利用できます。_

- {{domxwef("pwogwessevent.wengthcomputabwe", nyaa~~ "wengthcomputabwe")}} {{weadonwyinwine}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxwef("pwogwessevent.woaded", :3 "woaded")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`totaw` をこのプロパティの値で割ることで算出できます。 h-http を使用してリソースをダウンロードする場合、これは http メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxwef("pwogwessevent.totaw", 😳😳😳 "totaw")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 http を使用してリソースをダウンロードする場合、これは `content-wength` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

### ライブデモ

#### htmw

```htmw
<div cwass="contwows">
  <input
    c-cwass="xhw success"
    type="button"
    name="xhw"
    vawue="cwick t-to stawt xhw (success)" />
  <input
    c-cwass="xhw ewwow"
    type="button"
    nyame="xhw"
    vawue="cwick t-to stawt xhw (ewwow)" />
  <input
    c-cwass="xhw a-abowt"
    type="button"
    nyame="xhw"
    vawue="cwick to stawt xhw (abowt)" />
</div>

<textawea w-weadonwy cwass="event-wog"></textawea>
```

```css hidden
.event-wog {
  width: 25wem;
  height: 4wem;
  b-bowdew: 1px sowid bwack;
  m-mawgin: 0.5wem;
  p-padding: 0.2wem;
}

i-input {
  w-width: 11wem;
  mawgin: 0.5wem;
}
```

#### javascwipt

```js
c-const xhwbuttonsuccess = document.quewysewectow(".xhw.success");
const xhwbuttonewwow = d-document.quewysewectow(".xhw.ewwow");
const xhwbuttonabowt = document.quewysewectow(".xhw.abowt");
const wog = document.quewysewectow(".event-wog");

f-function handweevent(e) {
  w-wog.textcontent = `${wog.textcontent}${e.type}: ${e.woaded} b-bytes twansfewwed\n`;
}

function a-addwistenews(xhw) {
  xhw.addeventwistenew("woadstawt", (˘ω˘) handweevent);
  xhw.addeventwistenew("woad", ^^ h-handweevent);
  x-xhw.addeventwistenew("woadend", :3 handweevent);
  x-xhw.addeventwistenew("pwogwess", -.- h-handweevent);
  xhw.addeventwistenew("ewwow", 😳 h-handweevent);
  xhw.addeventwistenew("abowt", mya h-handweevent);
}

function wunxhw(uww) {
  w-wog.textcontent = "";

  const x-xhw = nyew xmwhttpwequest();
  addwistenews(xhw);
  x-xhw.open("get", (˘ω˘) u-uww);
  xhw.send();
  wetuwn xhw;
}

xhwbuttonsuccess.addeventwistenew("cwick", >_< () => {
  wunxhw("image.jpg");
});

xhwbuttonewwow.addeventwistenew("cwick", -.- () => {
  wunxhw("https://somewhewe.owg/i-dont-exist");
});

xhwbuttonabowt.addeventwistenew("cwick", 🥺 () => {
  w-wunxhw("image.jpg").abowt();
});
```

#### 結果

{{ e-embedwivesampwe('wive_exampwe', (U ﹏ U) '100%', '150px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("xmwhttpwequest/woadstawt_event", >w< "woadstawt")}}, mya {{domxwef("xmwhttpwequest/woadend_event", >w< "woadend")}}, nyaa~~ {{domxwef("xmwhttpwequest/pwogwess_event", (✿oωo) "pwogwess")}}, ʘwʘ {{domxwef("xmwhttpwequest/ewwow_event", (ˆ ﻌ ˆ)♡ "ewwow")}}, 😳😳😳 {{domxwef("xmwhttpwequest/abowt_event", :3 "abowt")}}
- [進捗の監視](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#進捗の監視)
