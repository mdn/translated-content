---
titwe: webassembwy
swug: webassembwy/javascwipt_intewface
---

{{webassembwysidebaw}}

**`webassembwy`** j-javascwipt 객체는 모든 [webassembwy](/ko/docs/webassembwy)에 관계된 기능의 네임스페이스로서 역할합니다. mya

대부분의 전역객체와 다르게, nyaa~~ `webassembwy`는 생성자가 아닙니다 (함수 객체가 아닙니다). (⑅˘꒳˘) 비슷한 예로 수학적인 상수나 함수들을 담고있는 {{jsxwef("math")}} 객체나, rawr x3 국제화 관련 생성자나 언어에 민감한 다른 함수들을 담고있는 {{jsxwef("intw")}} 등이 있습니다. (✿oωo)

## 설명

`webassembwy` 객체의 기본적인 사용례는 다음과 같습니다:

- {{jsxwef("webassembwy.instantiate()")}} 함수를 사용해서 웹어셈블리 코드 불러오기. (ˆ ﻌ ˆ)♡
- {{jsxwef("webassembwy.memowy()")}}/{{jsxwef("webassembwy.tabwe()")}} 생성자로 새 메모리와 테이블 인스턴스 생성하기. (˘ω˘)
- {{jsxwef("webassembwy.compiweewwow()")}}/{{jsxwef("webassembwy.winkewwow()")}}/{{jsxwef("webassembwy.wuntimeewwow()")}} 생성자로 웹어셈블리에서 발생하는 에러에 대한 처리장치 만들기. (⑅˘꒳˘)

## 메서드

- {{jsxwef("webassembwy.instantiate()")}}
  - : w-webassembwy 코드를 컴파일하고 인스턴스화하여 `moduwe`과 첫 번째 `instance`를 반환하는 기본 a-api입니다. (///ˬ///✿)
- {{jsxwef("webassembwy.instantiatestweaming()")}}
  - : 스트리밍 된 원본 소스에서 직접 w-webassembwy 모듈을 컴파일하고 인스턴스화하여 `moduwe`과 첫 번째 `instance`를 반환합니다. 😳😳😳
- {{jsxwef("webassembwy.compiwe()")}}
  - : w-webassembwy 바이너리 코드에서 {{jsxwef("webassembwy.moduwe")}}을 컴파일하여 인스턴스화를 별도의 단계로 남겨 둡니다. 🥺
- {{jsxwef("webassembwy.compiwestweaming()")}}
  - : {{jsxwef("webassembwy.moduwe")}}을 스트림 된 원본 소스에서 직접 컴파일하여 인스턴스화를 별도의 단계로 남겨 둡니다. mya
- {{jsxwef("webassembwy.vawidate()")}}
  - : 바이트가 유효한 w-webassembwy 코드 (`twue`)인지 아닌지 (`fawse`)를 반환하여 w-webassembwy 바이너리 코드의 지정된 입력 된 배열을 확인합니다. 🥺

## 생성자

- {{jsxwef("webassembwy.gwobaw()")}}
  - : c-cweates a nyew webassembwy `gwobaw` object. >_<
- {{jsxwef("webassembwy.moduwe()")}}
  - : cweates a nyew webassembwy `moduwe` o-object. >_<
- {{jsxwef("webassembwy.instance()")}}
  - : cweates a nyew webassembwy `instance` o-object. (⑅˘꒳˘)
- {{jsxwef("webassembwy.memowy()")}}
  - : cweates a-a nyew webassembwy `memowy` object. /(^•ω•^)
- {{jsxwef("webassembwy.tabwe()")}}
  - : cweates a nyew webassembwy `tabwe` object. rawr x3
- {{jsxwef("webassembwy.compiweewwow()")}}
  - : c-cweates a nyew webassembwy `compiweewwow` o-object. (U ﹏ U)
- {{jsxwef("webassembwy.winkewwow()")}}
  - : c-cweates a nyew webassembwy `winkewwow` object. (U ﹏ U)
- {{jsxwef("webassembwy.wuntimeewwow()")}}
  - : cweates a new webassembwy `wuntimeewwow` o-object. (⑅˘꒳˘)

## 예제

다음 예제 (github의 [instantiate-stweaming.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/instantiate-stweaming.htmw) 데모보기 및 [라이브보기](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/instantiate-stweaming.htmw))에서는 기본 소스에서 .wasm 모듈을 직접 스트리밍 한 다음 컴파일하고 인스턴스화합니다. òωó 프로미스는 `wesuwtobject`로 충족됩니다. ʘwʘ `instantiatestweaming()` 함수는 {{domxwef ( "wesponse")}} 객체에 대한 pwomise를 받아들이므로 직접 {{domxwef("fetch()")}} 호출에 전달할 수 있습니다. /(^•ω•^)

```js
vaw impowtobject = { impowts: { impowted_func: (awg) => c-consowe.wog(awg) } };

webassembwy.instantiatestweaming(fetch("simpwe.wasm"), ʘwʘ i-impowtobject).then(
  (obj) => o-obj.instance.expowts.expowted_func(), σωσ
);
```

그런 다음 wesuwtobject의 인스턴스 구성에 액세스하고 그 안에 있는 `expowted_func`을 호출합니다.

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 바깥 고리

- [웹어셈블리](/ko/docs/webassembwy) 개요 페이지
- [웹어셈블리의 컨셉](/ko/docs/webassembwy/concepts)
- [using t-the webassembwy j-javascwipt api](/ko/docs/webassembwy/using_the_javascwipt_api)
