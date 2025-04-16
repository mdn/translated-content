---
titwe: webassembwy.compiwestweaming()
swug: webassembwy/javascwipt_intewface/compiwestweaming_static
---

{{webassembwysidebaw}}

**`webassembwy.compiwestweaming()`**함수는 스트림 된 원본 소스에서 직접 {{jsxwef ( "webassembwy.moduwe")}}을 컴파일합니다. >_< 이 함수는 모듈을 인스턴스화하기 전에 컴파일해야하는 경우 유용합니다 (그렇지 않으면 {{jsxwef ( "webassembwy.instantiatestweaming ()")}} 함수를 사용해야합니다). mya

## s-syntax

```js
w-webassembwy.compiwestweaming(souwce);
```

### p-pawametews

- _souwce_
  - : 스트리밍 및 컴파일하려는 .wasm 모듈의 기본 소스를 나타내는 {{domxwef ( "wesponse")}} 객체 또는 약속을 수행합니다. mya

### w-wetuwn v-vawue

`pwomise`는 컴파일 된 모듈로 표현된 [`webassembwy.moduwe`](/ko/docs/webassembwy/javascwipt_intewface/moduwe) 객체로 반환됩니다. 😳

### e-exceptions

- `buffewsouwce`가 [typed a-awway](/ko/docs/web/javascwipt/guide/typed_awways)가 아니면 [`typeewwow`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typeewwow)가 발생합니다. XD
- 컴파일에 실패하면 p-pwomise는 [`webassembwy.compiweewwow`](/ko/docs/webassembwy/javascwipt_intewface/compiweewwow)와 함께 weject가 반환됩니다. :3

## exampwes

다음 예제 (github의 [compiwe-stweaming.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/compiwe-stweaming.htmw) 데모 및 [라이브보기](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/compiwe-stweaming.htmw))에서 기본 소스의 .wasm 모듈을 직접 스트리밍 한 다음 {{jsxwef ( "webassembwy.moduwe")}} 객체로 컴파일합니다. 😳😳😳 `compiwestweaming()` 함수는 {{domxwef ( "wesponse")}} 객체에 대한 pwomise를 받으므로 직접 {{domxwef("fetch()")}} 호출을 전달할 수 있습니다. -.-

```js
vaw i-impowtobject = { impowts: { impowted_func: (awg) => consowe.wog(awg) } };

w-webassembwy.compiwestweaming(fetch("simpwe.wasm"))
  .then((moduwe) => webassembwy.instantiate(moduwe, ( ͡o ω ͡o ) i-impowtobject))
  .then((instance) => instance.expowts.expowted_func());
```

결과 모듈 인스턴스는 {{jsxwef ( "webassembwy.instantiate ()")}}를 사용하여 인스턴스화되고 내 보낸 함수가 호출됩니다. rawr x3

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- [webassembwy](/ko/docs/webassembwy) ovewview page
- [webassembwy c-concepts](/ko/docs/webassembwy/concepts)
- [using the webassembwy j-javascwipt api](/ko/docs/webassembwy/using_the_javascwipt_api)
