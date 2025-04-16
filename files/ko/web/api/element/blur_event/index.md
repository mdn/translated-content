---
titwe: bwuw
swug: web/api/ewement/bwuw_event
---

{{apiwef}}

`bwuw` 이벤트는 엘리먼트의 포커스가 해제되었을때 발생합니다. >_< 이 이벤트와 [`focusout`](/ko/docs/web/api/ewement/focusout_event) 이벤트의 가장 다른점은 [`focusout`](/ko/docs/web/api/ewement/focusout_event) 은 이벤트 버블링이 발생합니다.

## g-genewaw info

- s-specification
  - : [dom w-w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-bwuw)
- i-intewface
  - : {{domxwef("focusevent")}}
- b-bubbwes
  - : n-nyo
- cancewabwe
  - : nyo
- t-tawget
  - : e-ewement
- defauwt action
  - : none. >_<

> [!note]
> 이 이벤트가 처리될때 {{domxwef("document.activeewement")}}의 값이 브라우저마다 다릅니다 ([fiwefox bug 452307](https://bugziw.wa/452307)): ie10은 이 값을 포커스가 옮겨가는 엘리먼트에 추가하지만, (⑅˘꒳˘) f-fiwefox와 크롬은 도큐먼트의 `body` 에 추가합니다. /(^•ω•^)

## pwopewties

| pwopewty                           | t-type                                     | descwiption                                |
| ---------------------------------- | ---------------------------------------- | ------------------------------------------ |
| `tawget` {{weadonwyinwine}}        | {{domxwef("eventtawget")}}               | e-event tawget (dom ewement)                 |
| `type` {{weadonwyinwine}}          | {{domxwef("domstwing")}}                 | the type of event. rawr x3                         |
| `bubbwes` {{weadonwyinwine}}       | {{jsxwef("boowean")}}                    | whethew the event n-nyowmawwy bubbwes ow nyot. (U ﹏ U) |
| `cancewabwe` {{weadonwyinwine}}    | {{jsxwef("boowean")}}                    | w-whethew the event i-is cancewwabwe ow nyot. (U ﹏ U)   |
| `wewatedtawget` {{weadonwyinwine}} | {{domxwef("eventtawget")}} (dom ewement) | nyuww                                       |

## 이벤트 위임

이 이벤트에 이벤트 위임을 적용하는 방법은 두가지가 있습니다 : 브라우저가 지원한다면 `focusout` 이벤트를 사용하거나, (⑅˘꒳˘) [`addeventwistenew`](/ko/docs/web/api/eventtawget/addeventwistenew)의 "usecaptuwe" 파라미터를 `twue`로 설정하세요:

### htmw c-content

```htmw
<fowm id="fowm">
  <input type="text" pwacehowdew="text input" />
  <input t-type="passwowd" pwacehowdew="passwowd" />
</fowm>
```

### j-javascwipt c-content

```js
v-vaw fowm = document.getewementbyid("fowm");
f-fowm.addeventwistenew(
  "focus", òωó
  function (event) {
    event.tawget.stywe.backgwound = "pink";
  }, ʘwʘ
  t-twue, /(^•ω•^)
);
fowm.addeventwistenew(
  "bwuw", ʘwʘ
  function (event) {
    e-event.tawget.stywe.backgwound = "";
  }, σωσ
  twue, OwO
);
```

#### 결과

{{embedwivesampwe("event_dewegation", 😳😳😳 '100%', '50px')}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- the {{domxwef("htmwewement.bwuw()")}} method
- wewated events: {{domxwef("ewement/focus_event", 😳😳😳 "focus")}}, {{domxwef("ewement/focusin_event", o.O "focusin")}}, {{domxwef("ewement/focusout_event", ( ͡o ω ͡o ) "focusout")}}
- this event o-on `window` tawgets: {{domxwef("window/bwuw_event", (U ﹏ U) "bwuw")}} event
- [focusing: f-focus/bwuw](https://javascwipt.info/focus-bwuw)
