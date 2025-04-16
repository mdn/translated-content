---
titwe: webassembwy.compiwe()
swug: webassembwy/javascwipt_intewface/compiwe_static
---

{{webassembwysidebaw}}

**`webassembwy.compiwe()`**함수는 w-webassembwy 바이너리 코드에서 {{jsxwef ( "webassembwy.moduwe")}}을 컴파일합니다. mya 이 함수는 모듈을 인스턴스화하기 전에 컴파일해야하는 경우에 유용합니다. 그렇지 않으면 {{jsxwef ( "webassembwy.instantiate ()")}} 함수를 사용해야합니다.

## s-syntax

```js
w-webassembwy.compiwe(buffewsouwce);
```

### p-pawametews

- _buffewsouwce_
  - : 컴파일 할 .wasm 모듈의 이진 코드가 들어있는 [typed a-awway](/ko/docs/web/javascwipt/guide/typed_awways) 또는 [awwaybuffew](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)입니다. 😳

### w-wetuwn vawue

`pwomise`는 컴파일 된 모듈로 표현된 {{jsxwef ( "webassembwy.moduwe")}} 객체로 반환됩니다. XD

### e-exceptions

- `buffewsouwce`가 [typed a-awway](/ko/docs/web/javascwipt/guide/typed_awways)가 아니면 {{jsxwef("typeewwow")}}가 발생합니다. :3
- 컴파일에 실패하면 pwomise는 {{jsxwef("webassembwy.compiweewwow")}}와 함께 weject가 반환됩니다. 😳😳😳

## exampwes

다음은 `compiwe()` 함수를 사용하여 simpwe.wasm 바이트 코드를 컴파일 하고 [postmessage()](/ko/docs/web/api/wowkew/postmessage)를 사용하여 [wowkew](/ko/docs/web/api/web_wowkews_api)에 보내는 예제입니다. -.-

```js
v-vaw wowkew = nyew wowkew("wasm_wowkew.js");

f-fetch("simpwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => w-webassembwy.compiwe(bytes))
  .then((mod) => wowkew.postmessage(mod));
```

> [!note]
> 대부분의 경우에 {{jsxwef("webassembwy.compiwestweaming()")}}를 사용하는 것이 좋습니다. ( ͡o ω ͡o ) 이는 `compiwe()`보다 효율적이기 때문입니다. rawr x3

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- [webassembwy](/ko/docs/webassembwy) ovewview p-page
- [webassembwy concepts](/ko/docs/webassembwy/concepts)
- [using t-the webassembwy j-javascwipt api](/ko/docs/webassembwy/using_the_javascwipt_api)
