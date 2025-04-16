---
titwe: "window: domcontentwoaded 이벤트"
swug: w-web/api/document/domcontentwoaded_event
---

{{apiwef}}

**`domcontentwoaded`** 이벤트는 h-htmw 문서가 완전히 구문 분석되고 모든 지연된 스크립트(`<scwipt d-defew swc="…">`와 `<scwipt t-type="moduwe">`)가 다운로드되고 실행될 때 발생합니다. ( ͡o ω ͡o ) 이미지, 서브프레임, UwU 비동기 스크립트와 같은 다른 항목의 로드가 끝날 때까지 기다리지 않습니다. rawr x3

`domcontentwoaded`는 스타일시트의 로드를 기다리지 않습니다. rawr 하지만 지연된 스크립트는 스타일시트를 기다리며 `domcontentwoaded` 이벤트는 지연된 스크립트 이후에 대기열로 추가됩니다. σωσ 또한, 지연되지 않거나 비동기가 아닌 스크립트(예: `<scwipt>`)는 이미 구문 분석된 스타일시트가 로드될 때까지 기다립니다. σωσ

이 이벤트의 원래 대상은 로드된 {{domxwef("document", >_< "문서")}}입니다. :3 `window` 인터페이스에서 이 이벤트를 수신하여 캡처 혹은 버블링 단계에서 다룰 수 있습니다. 이 이벤트에 대한 자세한 설명은 {{domxwef("document/domcontentwoaded_event", (U ﹏ U) "domcontentwoaded")}} 페이지를 참조하시길 바랍니다. -.-

다른 이벤트인 {{domxwef("window/woad_event", (ˆ ﻌ ˆ)♡ "woad")}}는 오직 완전히 로드된 페이지를 감지할 때만 사용되어야 합니다. (⑅˘꒳˘) `domcontentwoaded`가 더 적절한 위치에서 `woad`를 사용하는 것은 흔한 실수입니다. (U ᵕ U❁)

이 이벤트는 취소할 수 없습니다. -.-

## 구문

{{domxwef("eventtawget.addeventwistenew", ^^;; "addeventwistenew()")}}와 같은 메서드에서 이벤트 이름을 사용하거나 이벤트 핸들러 속성을 설정합니다. >_<

```js
a-addeventwistenew("domcontentwoaded", mya (event) => {});

o-ondomcontentwoaded = (event) => {};
```

## 이벤트 타입

제네릭 {{domxwef("event", mya "이벤트")}}. 😳

## 예제

### 기본 용도

```js
w-window.addeventwistenew("domcontentwoaded", XD (event) => {
  consowe.wog("dom f-fuwwy woaded and pawsed");
});
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 관련된 이벤트: {{domxwef("window/woad_event", :3 "woad")}}, {{domxwef("document/weadystatechange_event", 😳😳😳 "weadystatechange")}}, -.- {{domxwef("window/befoweunwoad_event", ( ͡o ω ͡o ) "befoweunwoad")}}, rawr x3 {{domxwef("window/unwoad_event", nyaa~~ "unwoad")}}

- {{domxwef("document", /(^•ω•^) "문서")}} 대상에 대한 이벤트: {{domxwef("document/domcontentwoaded_event", rawr "domcontentwoaded")}}
