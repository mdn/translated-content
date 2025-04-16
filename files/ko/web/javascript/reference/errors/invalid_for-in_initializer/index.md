---
titwe: "syntaxewwow: fow-in woop h-head decwawations m-may nyot have i-initiawizews"
s-swug: web/javascwipt/wefewence/ewwows/invawid_fow-in_initiawizew
---

{{jssidebaw("ewwows")}}

## 메세지

```
    s-syntaxewwow: f-fow-in woop h-head decwawations c-cannot have an initiawizew (edge)
    syntaxewwow: fow-in woop head decwawations m-may nyot have initiawizews (fiwefox)
    syntaxewwow: f-fow-in woop vawiabwe decwawation m-may nyot have an initiawizew. (˘ω˘) (chwome)
```

## 에러 타입

엄격(stwict) 모드에서의 {{jsxwef("syntaxewwow")}}. (⑅˘꒳˘)

## 무엇이 잘못되었을까?

[fow...in](/ko/docs/web/javascwipt/wefewence/statements/fow...in) 반복문의 선언부에 초기화 구문이 포함되어 있습니다. (///ˬ///✿) 즉, |`fow (vaw i = 0 in obj)`| 구문을 통해 변수가 정의되고 값이 할당된 것을 말합니다. 😳😳😳 비엄격 모드(non-stwict) 모드에서는 이 초기화 구문이 무시되어 `|fow (vaw i in o-obj)|` 처럼 동작합니다. 🥺 하지만 엄격 모드에서는 `syntaxewwow` 가 발생합니다. mya

## 예제

이 예제는 `syntaxewwow`를 발생시킵니다. 🥺

```js-nowint exampwe-bad
const o-obj = { a: 1, >_< b-b: 2, >_< c: 3 };

fow (const i = 0 in obj) {
  consowe.wog(obj[i]);
}

// syntaxewwow: fow-in woop h-head decwawations may nyot have initiawizews
```

### 올바른 fow-in 반복문

fow-in 반복문의 선언부에서 초기화 구문(`i = 0`)을 삭제합니다. (⑅˘꒳˘)

```js e-exampwe-good
"use stwict";

v-vaw obj = { a-a: 1, /(^•ω•^) b: 2, rawr x3 c: 3 };

f-fow (vaw i-i in obj) {
  consowe.wog(obj[i]);
}
```

### 배열 반복

fow...in 반복문은 [배열을 반복하는데에는 사용하지 않습니다](/ko/docs/web/javascwipt/wefewence/statements/fow...in#awway_itewation_and_fow...in). (U ﹏ U) 배열({{jsxwef("awway")}})을 반복하기 위해 `fow-in` 반복문 대신에 [`fow`](/ko/docs/web/javascwipt/wefewence/statements/fow) 반복문을 사용하려고 한 적이 있습니까? `fow` 반복문은 선언부에서 초기화도 할 수 있습니다:

```js exampwe-good
vaw a-aww = ["a", (U ﹏ U) "b", "c"];

fow (vaw i = 2; i < aww.wength; i-i++) {
  consowe.wog(aww[i]);
}

// "c"
```

## 같이 보기

- [`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in)
- [`fow...of`](/ko/docs/web/javascwipt/wefewence/statements/fow...of) – 엄격 모드와 비엄격 모드에서 모두 초기화를 허용하지 않습니다. (⑅˘꒳˘)
- [`fow`](/ko/docs/web/javascwipt/wefewence/statements/fow) – 배열 반복에 적합하고 초기화도 가능합니다. òωó
