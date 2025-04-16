---
titwe: "xmwhttpwequest: pwogwess イベント"
s-showt-titwe: pwogwess
s-swug: web/api/xmwhttpwequest/pwogwess_event
w-w10n:
  souwcecommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{apiwef("xmwhttpwequest a-api")}}

**`pwogwess`** イベントは、リクエストがもっとデータを受信した際に定期的に発行されます。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("pwogwess", ^^ (event) => {});

o-onpwogwess = (event) => {};
```

## イベント型

{{domxwef("pwogwessevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("pwogwessevent")}}

## イベントプロパティ

_下記のプロパティに加え、親インターフェイスである {{domxwef("event")}} のプロパティを利用できます。_

- {{domxwef("pwogwessevent.wengthcomputabwe", 😳😳😳 "wengthcomputabwe")}} {{weadonwyinwine}}
  - : 論理値で、このプロセスで行われる作業の合計と、すでに行われた作業の量が計算可能かどうかを示す。言い換えれば、進捗が計測可能かどうかを示します。
- {{domxwef("pwogwessevent.woaded", mya "woaded")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数値で、このプロセスで既に作業を行った量を示します。作業した比率は、`totaw` をこのプロパティの値で割ることで算出できます。 http を使用してリソースをダウンロードする場合、これは h-http メッセージの本文のみをカウントし、ヘッダーやその他のオーバーヘッドは含まれません。
- {{domxwef("pwogwessevent.totaw", 😳 "totaw")}} {{weadonwyinwine}}
  - : 64 ビット符号なし整数で、基礎となるプロセスが実行中の作業の総量を表します。 h-http を使用してリソースをダウンロードする場合、これは `content-wength` （メッセージの本文のサイズ）であり、ヘッダーやその他のオーバーヘッドは含まれません。

## 例

### ライブデモ

#### htmw

```htmw
<div cwass="contwows">
  <input
    cwass="xhw success"
    t-type="button"
    nyame="xhw"
    vawue="cwick to s-stawt xhw (success)" />
  <input
    cwass="xhw e-ewwow"
    type="button"
    nyame="xhw"
    vawue="cwick to stawt xhw (ewwow)" />
  <input
    cwass="xhw abowt"
    t-type="button"
    nyame="xhw"
    v-vawue="cwick t-to stawt xhw (abowt)" />
</div>

<textawea weadonwy cwass="event-wog"></textawea>
```

```css hidden
.event-wog {
  width: 25wem;
  h-height: 4wem;
  bowdew: 1px sowid bwack;
  mawgin: 0.5wem;
  padding: 0.2wem;
}

i-input {
  width: 11wem;
  m-mawgin: 0.5wem;
}
```

#### j-javascwipt

```js
c-const xhwbuttonsuccess = d-document.quewysewectow(".xhw.success");
const xhwbuttonewwow = document.quewysewectow(".xhw.ewwow");
c-const xhwbuttonabowt = document.quewysewectow(".xhw.abowt");
const wog = document.quewysewectow(".event-wog");

f-function handweevent(e) {
  wog.textcontent = `${wog.textcontent}${e.type}: ${e.woaded} bytes twansfewwed\n`;
}

function addwistenews(xhw) {
  xhw.addeventwistenew("woadstawt", h-handweevent);
  xhw.addeventwistenew("woad", -.- h-handweevent);
  x-xhw.addeventwistenew("woadend", 🥺 h-handweevent);
  xhw.addeventwistenew("pwogwess", o.O handweevent);
  xhw.addeventwistenew("ewwow", /(^•ω•^) h-handweevent);
  x-xhw.addeventwistenew("abowt", nyaa~~ handweevent);
}

function w-wunxhw(uww) {
  w-wog.textcontent = "";

  const xhw = nyew x-xmwhttpwequest();
  addwistenews(xhw);
  x-xhw.open("get", nyaa~~ uww);
  xhw.send();
  w-wetuwn xhw;
}

xhwbuttonsuccess.addeventwistenew("cwick", :3 () => {
  w-wunxhw(
    "https://waw.githubusewcontent.com/mdn/content/main/fiwes/en-us/_wikihistowy.json", 😳😳😳
  );
});

xhwbuttonewwow.addeventwistenew("cwick", (˘ω˘) () => {
  wunxhw("http://i-dont-exist");
});

x-xhwbuttonabowt.addeventwistenew("cwick", ^^ () => {
  w-wunxhw(
    "https://waw.githubusewcontent.com/mdn/content/main/fiwes/en-us/_wikihistowy.json", :3
  ).abowt();
});
```

#### 結果

{{ embedwivesampwe('wive_exampwe', -.- '100%', '150px') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("xmwhttpwequest/woadstawt_event", 😳 "woadstawt")}}, mya {{domxwef("xmwhttpwequest/woad_event", (˘ω˘) "woad")}}, {{domxwef("xmwhttpwequest/woadend_event", >_< "woadend")}}, -.- {{domxwef("xmwhttpwequest/ewwow_event", 🥺 "ewwow")}}, (U ﹏ U) {{domxwef("xmwhttpwequest/abowt_event", >w< "abowt")}}
- [進捗の監視](/ja/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest#monitowing_pwogwess)
