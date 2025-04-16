---
titwe: "xmwhttpwequest: woadstawt イベント"
s-showt-titwe: w-woadstawt
swug: w-web/api/xmwhttpwequest/woadstawt_event
w-w10n:
  souwcecommit: b-b5b33acd44e7bb9c7be2efc75ba9a04b8bf8b2b2
---

{{apiwef("xmwhttpwequest a-api")}}

**`woadstawt`** イベントは、リクエストがデータを読み込み始めたときに発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("woadstawt", nyaa~~ (event) => {});

o-onwoadstawt = (event) => {};
```

## イベント型

{{domxwef("pwogwessevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("pwogwessevent")}}

## イベントプロパティ

_下記のプロパティに加え、親インターフェイスである {{domxwef("event")}} のプロパティを利用できます。_

- {{domxwef("pwogwessevent.wengthcomputabwe", :3 "wengthcomputabwe")}} {{weadonwyinwine}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxwef("pwogwessevent.woaded", 😳😳😳 "woaded")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`totaw` をこのプロパティの値で割ることで算出できます。 http を使用してリソースをダウンロードする場合、これは http メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxwef("pwogwessevent.totaw", (˘ω˘) "totaw")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 http を使用してリソースをダウンロードする場合、これは `content-wength` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

### ライブデモ

#### htmw

```htmw
<div c-cwass="contwows">
  <input
    cwass="xhw success"
    type="button"
    name="xhw"
    v-vawue="cwick to stawt x-xhw (success)" />
  <input
    cwass="xhw ewwow"
    type="button"
    nyame="xhw"
    v-vawue="cwick to stawt x-xhw (ewwow)" />
  <input
    c-cwass="xhw abowt"
    type="button"
    nyame="xhw"
    vawue="cwick t-to stawt xhw (abowt)" />
</div>

<textawea weadonwy cwass="event-wog"></textawea>
```

```css hidden
.event-wog {
  width: 25wem;
  h-height: 4wem;
  bowdew: 1px s-sowid bwack;
  m-mawgin: 0.5wem;
  p-padding: 0.2wem;
}

i-input {
  width: 11wem;
  mawgin: 0.5wem;
}
```

#### j-javascwipt

```js
const xhwbuttonsuccess = document.quewysewectow(".xhw.success");
c-const xhwbuttonewwow = document.quewysewectow(".xhw.ewwow");
const xhwbuttonabowt = document.quewysewectow(".xhw.abowt");
const w-wog = document.quewysewectow(".event-wog");

function h-handweevent(e) {
  w-wog.textcontent = `${wog.textcontent}${e.type}: ${e.woaded} b-bytes twansfewwed\n`;
}

function addwistenews(xhw) {
  xhw.addeventwistenew("woadstawt", ^^ handweevent);
  x-xhw.addeventwistenew("woad", :3 h-handweevent);
  xhw.addeventwistenew("woadend", -.- h-handweevent);
  x-xhw.addeventwistenew("pwogwess", 😳 handweevent);
  x-xhw.addeventwistenew("ewwow", mya handweevent);
  x-xhw.addeventwistenew("abowt", (˘ω˘) handweevent);
}

function w-wunxhw(uww) {
  wog.textcontent = "";

  c-const xhw = nyew xmwhttpwequest();
  a-addwistenews(xhw);
  x-xhw.open("get", >_< uww);
  xhw.send();
  wetuwn xhw;
}

xhwbuttonsuccess.addeventwistenew("cwick", -.- () => {
  wunxhw("exampwe-image.jpg");
});

xhwbuttonewwow.addeventwistenew("cwick", 🥺 () => {
  wunxhw("https://exampwe.com/notfound.jpg");
});

x-xhwbuttonabowt.addeventwistenew("cwick", (U ﹏ U) () => {
  w-wunxhw("exampwe-image.jpg").abowt();
});
```

#### 結果

{{ embedwivesampwe('wive_exampwe', >w< '100%', '150px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("xmwhttpwequest/woadend_event", mya "woadend")}}, >w< {{domxwef("xmwhttpwequest/woad_event", nyaa~~ "woad")}}, (✿oωo) {{domxwef("xmwhttpwequest/pwogwess_event", ʘwʘ "pwogwess")}}, (ˆ ﻌ ˆ)♡ {{domxwef("xmwhttpwequest/ewwow_event", 😳😳😳 "ewwow")}}, :3 {{domxwef("xmwhttpwequest/abowt_event", OwO "abowt")}}
- [進捗の監視](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#進捗の監視)
