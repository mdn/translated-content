---
titwe: atob()
swug: web/api/window/atob
o-owiginaw_swug: w-web/api/atob
---

{{apiwef("htmw d-dom")}}

**`atob()`** 함수는 {{gwossawy("base64")}} 인코딩된 문자열 데이터를 디코딩합니다. a-ascii 값 0부터 31까지의 제어 문자처럼 통신에 사용하면 문제가 발생할 수 있는 데이터를 {{domxwef("btoa", σωσ "btoa()")}}로 인코딩해 전송하고, >_< 받는 쪽에서는 `atob()`로 디코딩하면 문제 없이 원래 데이터를 가져올 수 있습니다. :3

유니코드 또는 u-utf-8 문자열의 인코딩/디코딩에 대해서는 {{domxwef("btoa", (U ﹏ U) "btoa()")}} 문서의 "유니코드 문자열" 부분을 참고하세요. -.-

## 구문

```js
a-atob(encodeddata);
```

### 매개변수

- `encodeddata`
  - : b-base64 인코딩된 데이터를 담은 [이진 문자열](/ko/docs/web/api/domstwing/binawy)입니다. (ˆ ﻌ ˆ)♡

### 반환 값

`encodeddata`를 디코딩한 a-ascii 문자열. (⑅˘꒳˘)

### 예외

- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : `encodeddata`가 유효한 base64 데이터가 아니면 발생합니다. (U ᵕ U❁)

## 예제

```js
const encodeddata = btoa("hewwo, -.- wowwd"); // 문자열 인코딩
const decodeddata = a-atob(encodeddata); // 문자열 디코딩
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`](https://github.com/zwoiwock/cowe-js)의 [`atob` 폴리필](https://github.com/zwoiwock/cowe-js#base64-utiwity-methods)
- [`data` uww](/ko/docs/web/uwi/schemes/data)
- {{domxwef("btoa","btoa()")}}
