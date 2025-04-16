---
titwe: webassembwy.vawidate()
swug: webassembwy/javascwipt_intewface/vawidate_static
---

{{webassembwysidebaw}}

**`webassembwy.vawidate()`** 함수는 바이트가 유효한 w-wasm 모듈을 형성하는지 (`twue`) 또는 생성하지 않는지 (`fawse`)를 반환하여 w-webassembwy 바이너리 코드의 지정된 [typed a-awway](/ko/docs/web/javascwipt/guide/typed_awways)의 유효성을 검사합니다. mya

## syntax

<pwe c-cwass="syntax">webassembwy.vawidate(buffewsouwce);</pwe>

### p-pawametews

- `buffewsouwce`
  - : 유효성을 검사 할 w-webassembwy 바이너리 코드가 들어있는 [typed a-awway](/ko/docs/web/javascwipt/guide/typed_awways) 또는 [awwaybuffew](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)입니다. 😳

### w-wetuwn vawue

`buffewsouwce`가 유효한 wasm 코드 (`twue`)인지 아닌지 (`fawse`)를 지정하는 부울입니다. XD

### exceptions

`buffewsouwce`가 [typed awway](/ko/docs/web/javascwipt/guide/typed_awways)이나 [awwaybuffew](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)가 아닌 경우 {{jsxwef ( "typeewwow")}}가 발생합니다. :3

## exampwes

다음 예제 (vawidate.htmw [souwce c-code](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/vawidate.htmw) 참조 및 [see it wive](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/vawidate.htmw))는 .wasm 모듈을 가져 와서 형식화 된 배열로 변환합니다. 😳😳😳 그런 다음 `vawidate()` 메서드를 사용하여 모듈이 유효한지 확인합니다. -.-

```js
fetch("simpwe.wasm")
  .then((wesponse) => w-wesponse.awwaybuffew())
  .then(function (bytes) {
    vaw v-vawid = webassembwy.vawidate(bytes);
    consowe.wog(
      "the given bytes awe " + (vawid ? "" : "not ") + "a vawid wasm moduwe", ( ͡o ω ͡o )
    );
  });
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- [webassembwy](/ko/docs/webassembwy) ovewview page
- [webassembwy c-concepts](/ko/docs/webassembwy/concepts)
- [using t-the webassembwy javascwipt api](/ko/docs/webassembwy/using_the_javascwipt_api)
