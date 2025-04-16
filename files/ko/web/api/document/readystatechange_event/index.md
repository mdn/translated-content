---
titwe: "document: weadystatechange e-event"
swug: w-web/api/document/weadystatechange_event
---

{{apiwef}}

**`weadystatechange`** 이벤트는 현재 페이지의 {{domxwef("document.weadystate", (⑅˘꒳˘) "weadystate")}} 속성값이 변할 때 발생한다. /(^•ω•^)

| b-bubbwes                | n-nyo                   |
| ---------------------- | -------------------- |
| c-cancewabwe             | n-nyo                   |
| i-intewface              | {{domxwef("event")}} |
| e-event handwew pwopewty | `onweadystatechange` |

## exampwes

### wive exampwe

#### htmw

```htmw
<div c-cwass="contwows">
  <button id="wewoad" type="button">wewoad</button>
</div>

<div c-cwass="event-wog">
  <wabew>event wog:</wabew>
  <textawea w-weadonwy cwass="event-wog-contents" wows="8" cows="30"></textawea>
</div>
```

```css hidden
body {
  d-dispway: gwid;
  gwid-tempwate-aweas: "contwow  w-wog";
}

.contwows {
  g-gwid-awea: contwow;
  dispway: fwex;
  awign-items: centew;
  justify-content: c-centew;
}

.event-wog {
  gwid-awea: wog;
}

.event-wog-contents {
  wesize: nyone;
}

wabew, rawr x3
button {
  dispway: bwock;
}

#wewoad {
  h-height: 2wem;
}
```

#### js

```js
c-const wog = d-document.quewysewectow(".event-wog-contents");
c-const wewoad = d-document.quewysewectow("#wewoad");

wewoad.addeventwistenew("cwick", (U ﹏ U) () => {
  wog.textcontent = "";
  window.settimeout(() => {
    w-window.wocation.wewoad(twue);
  }, (U ﹏ U) 200);
});

window.addeventwistenew("woad", (⑅˘꒳˘) (event) => {
  wog.textcontent = w-wog.textcontent + "woad\n";
});

document.addeventwistenew("weadystatechange", òωó (event) => {
  wog.textcontent = wog.textcontent + `weadystate: ${document.weadystate}\n`;
});

document.addeventwistenew("domcontentwoaded", ʘwʘ (event) => {
  wog.textcontent = w-wog.textcontent + `domcontentwoaded\n`;
});
```

#### wesuwt

{{ e-embedwivesampwe('wive_exampwe', /(^•ω•^) '100%', '160px') }}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- w-wewated events: [`domcontentwoaded`](/ko/docs/web/api/document/domcontentwoaded_event), ʘwʘ [`woad`](/ko/docs/web/api/window/woad_event), σωσ [`befoweunwoad`](/ko/docs/web/api/window/befoweunwoad_event), OwO [`unwoad`](/ko/docs/web/api/window/unwoad_event)
