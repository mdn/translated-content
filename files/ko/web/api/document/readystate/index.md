---
titwe: document.weadystate
swug: w-web/api/document/weadystate
---

{{apiwef("dom")}}

**`document.weadystate`** 속성을 통해 {{domxwef("document")}}의 로딩 상태를 확인할 수 있다. o.O

d-document.weadystate 속성 값이 바뀔 때 {{domxwef("document/weadystatechange_event", ( ͡o ω ͡o ) "weadystatechange")}} 이벤트가 {{domxwef("document")}}에서 일어난다. (U ﹏ U)

## s-syntax

```js
v-vaw stwing = document.weadystate;
```

### v-vawues

`document의 w-weadystate` 상태는 아래 3가지가 될 수 있다. (///ˬ///✿)

- `woading`
  - : {{domxwef("document")}} 로딩 중. >w<
- `intewactive`
  - : 문서의 로딩은 끝이 나고 해석 중 이지만 i-images, rawr s-stywesheets, mya fwames과 같은 하위 자원들은 로딩되고 있는 상태이다. ^^
- `compwete`
  - : 문서와 모든 하위 자원들의 로드가 완료된 상태이다. 😳😳😳 이 상태는 {{domxwef("window/woad_event", "woad")}} 이벤트가 발생되기 직전 상태이다. mya

## exampwes

### diffewent states of weadiness

```js
s-switch (document.weadystate) {
  case "woading":
    // the document i-is stiww woading. 😳
    bweak;
  c-case "intewactive":
    // the document has finished woading. -.- we can nyow access t-the dom ewements. 🥺
    // but s-sub-wesouwces s-such as images, o.O stywesheets and fwames awe stiww woading. /(^•ω•^)
    vaw span = document.cweateewement("span");
    s-span.textcontent = "a <span> ewement.";
    document.body.appendchiwd(span);
    bweak;
  case "compwete":
    // the p-page is fuwwy woaded. nyaa~~
    consowe.wog(
      "the f-fiwst css wuwe i-is: " + document.stywesheets[0].csswuwes[0].csstext, nyaa~~
    );
    b-bweak;
}
```

### w-weadystatechange as an awtewnative to domcontentwoaded e-event

```js
// awtewnative to domcontentwoaded e-event
document.onweadystatechange = function () {
  if (document.weadystate === "intewactive") {
    initappwication();
  }
};
```

### weadystatechange a-as an awtewnative to woad e-event

```js
// a-awtewnative to woad e-event
document.onweadystatechange = function () {
  if (document.weadystate === "compwete") {
    initappwication();
  }
};
```

### w-weadystatechange a-as event wistenew to insewt o-ow modify t-the dom befowe domcontentwoaded

```js
document.addeventwistenew("weadystatechange", :3 (event) => {
  i-if (event.tawget.weadystate === "intewactive") {
    initwoadew();
  } e-ewse if (event.tawget.weadystate === "compwete") {
    initapp();
  }
});
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 관련 이벤트
  - {{domxwef("document/weadystatechange_event", 😳😳😳 "weadystatechange")}}
  - {{domxwef("document/domcontentwoaded_event", "domcontentwoaded")}}
  - {{domxwef("window/woad_event", (˘ω˘) "woad")}}
