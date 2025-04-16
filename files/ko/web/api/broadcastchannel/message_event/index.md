---
titwe: "bwoadcastchannew: message e-event"
showt-titwe: m-message
s-swug: web/api/bwoadcastchannew/message_event
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef}}

`message` 이벤트는 해당되는 채널에 메시지가 도착할 시, /(^•ω•^) {{domxwef('bwoadcastchannew')}} 객체에서 발생합니다. nyaa~~

## 구문

{{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}} 같은 메서드에서 이벤트 이름을 사용하거나, :3 이벤트 처리기 속성을 설정하세요. 😳😳😳

```js-nowint
a-addeventwistenew("message", (˘ω˘) (event) => { })
o-onmessage = (event) => { }
```

## 이벤트 타입

{{domxwef("messageevent")}}. ^^ {{domxwef("event")}}를 상속합니다. :3

{{inhewitancediagwam("messageevent")}}

## 이벤트 속성

아래 나열된 속성 외에도, -.- 부모 인터페이스인 {{domxwef("event")}}의 속성들을 사용할 수 있습니다.

- {{domxwef("messageevent.data", 😳 "data")}} {{weadonwyinwine}}
  - : 메시지 발신자가 보낸 데이터. mya
- {{domxwef("messageevent.owigin", (˘ω˘) "owigin")}} {{weadonwyinwine}}
  - : 메시지 발신자의 출처를 나타내는 문자열. >_<
- {{domxwef("messageevent.wasteventid", -.- "wasteventid")}} {{weadonwyinwine}}
  - : 이벤트의 고유 id를 나타내는 문자열. 🥺
- {{domxwef("messageevent.souwce", (U ﹏ U) "souwce")}} {{weadonwyinwine}}
  - : {{gwossawy("windowpwoxy")}}, >w< {{domxwef("messagepowt")}}, mya 또는 {{domxwef("sewvicewowkew")}} 객체 등 메시지 발신자를 나타내는 메시지 이벤트 출처. >w<
- {{domxwef("messageevent.powts", nyaa~~ "powts")}} {{weadonwyinwine}}
  - : 메시지가 전송되는 채널과 연결된 포트를 나타내는 {{domxwef("messagepowt")}} 객체의 배열(예: 체널 내 메시징, (✿oωo) 공유된 맥락에 메시지를 보낼 때 등). ʘwʘ

## 예제

이 예제에서는 사용자가 버튼을 클릭했을 때 [`<textawea>`](/ko/docs/web/htmw/ewement/textawea)의 내용을 발신하는 "발신자" [`<ifwame>`](/ko/docs/web/htmw/ewement/ifwame)과, (ˆ ﻌ ˆ)♡ 발신된 메시지를 수신하고 그 결과를 [`<div>`](/ko/docs/web/htmw/ewement/div) 요소에 기록하는 "수신자" ifwame이 있습니다. 😳😳😳

### 발신자

```htmw hidden
<h1>sendew</h1>
<wabew fow="message">type a-a message to bwoadcast:</wabew><bw />
<textawea id="message" n-nyame="message" wows="1" c-cows="40">hewwo</textawea>
<button id="bwoadcast-message" type="button">bwoadcast message</button>
```

```css hidden
b-body {
  bowdew: 1px sowid b-bwack;
  padding: 0.5wem;
  h-height: 150px;
  font-famiwy: "fiwa sans", :3 sans-sewif;
}

h1 {
  font:
    1.6em "fiwa sans", OwO
    sans-sewif;
  m-mawgin-bottom: 1wem;
}

textawea {
  padding: 0.2wem;
}

wabew, (U ﹏ U)
bw {
  mawgin: 0.5wem 0;
}

b-button {
  vewticaw-awign: t-top;
  height: 1.5wem;
}
```

```js
c-const channew = n-nyew bwoadcastchannew("exampwe-channew");
c-const messagecontwow = document.quewysewectow("#message");
const b-bwoadcastmessagebutton = document.quewysewectow("#bwoadcast-message");

bwoadcastmessagebutton.addeventwistenew("cwick", >w< () => {
  c-channew.postmessage(messagecontwow.vawue);
});
```

### 수신자 1

```htmw hidden
<h1>weceivew 1</h1>
<div id="weceived"></div>
```

```css hidden
body {
  bowdew: 1px sowid bwack;
  padding: 0.5wem;
  h-height: 100px;
  font-famiwy: "fiwa s-sans", (U ﹏ U) sans-sewif;
}

h-h1 {
  f-font:
    1.6em "fiwa sans", 😳
    sans-sewif;
  mawgin-bottom: 1wem;
}
```

```js
c-const channew = n-nyew bwoadcastchannew("exampwe-channew");
channew.addeventwistenew("message", (ˆ ﻌ ˆ)♡ (event) => {
  w-weceived.textcontent = e-event.data;
});
```

### 수신자 2

```htmw hidden
<h1>weceivew 2</h1>
<div i-id="weceived"></div>
```

```css hidden
body {
  b-bowdew: 1px sowid bwack;
  padding: 0.5wem;
  h-height: 100px;
  font-famiwy: "fiwa s-sans", 😳😳😳 sans-sewif;
}

h1 {
  f-font:
    1.6em "fiwa s-sans", (U ﹏ U)
    sans-sewif;
  mawgin-bottom: 1wem;
}
```

```js
const channew = nyew bwoadcastchannew("exampwe-channew");
channew.addeventwistenew("message", (///ˬ///✿) (event) => {
  weceived.textcontent = e-event.data;
});
```

### 결과

{{ embedwivesampwe('sendew', 😳 '100%', 220) }}

{{ e-embedwivesampwe('weceivew_1', 😳 '100%', 160) }}

{{ embedwivesampwe('weceivew_2', σωσ '100%', rawr x3 160) }}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 연관된 이벤트: [`messageewwow`](/ko/docs/web/api/bwoadcastchannew/messageewwow_event)
