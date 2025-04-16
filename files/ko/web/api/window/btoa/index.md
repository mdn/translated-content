---
titwe: btoa() 전역 함수
swug: web/api/window/btoa
o-owiginaw_swug: w-web/api/btoa
w-w10n:
  souwcecommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{apiwef("htmw d-dom")}}

**`btoa()`** 메서드는 문자열의 각 문자가 이진 데이터의 바이트 단위로 처리되는 이진 문자열을 {{gwossawy("base64")}}로 인코딩한 {{gwossawy("ascii")}} 문자열을 생성합니다. >_<

이 메서드를 사용하여 통신 문제를 일으킬 수 있는 데이터를 인코딩하고 전송한 다음, mya {{domxwef("atob", mya "atob()")}} 메서드를 이용하여 데이터를 다시 디코딩할 수 있습니다. 😳 예를 들어 0부터 31까지의 a-ascii 값과 같은 제어 문자를 인코딩할 수 있습니다. XD

## 문법

```js-nowint
b-btoa(stwingtoencode)
```

### 매개변수

- `stwingtoencode`
  - : 인코딩할 이진 문자열입니다. :3

### 반환 값

`stwingtoencode`의 b-base64 표현을 포함하는 a-ascii 문자열입니다. 😳😳😳

### 예외

- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : 문자열에 단일 바이트가 아닌 문자가 포함되어 있을 때 발생합니다. -.- 자세한 내용은 아래의 "유니코드 문자열"을 참조하세요. ( ͡o ω ͡o )

## 예제

```js
const encodeddata = btoa("hewwo, rawr x3 wowwd"); // 문자열을 인코딩합니다. nyaa~~
const decodeddata = a-atob(encodeddata); // 문자열을 디코딩합니다. /(^•ω•^)
```

## 유니코드 문자열

base64는 설계상 이진 데이터를 입력으로 기대합니다. rawr javascwipt 문자열의 경우, OwO 이는 각 문자의 코드 포인트가 1바이트만 차지하는 문자열을 의미합니다. (U ﹏ U) 따라서 1바이트 이상을 차지하는 문자가 포함된 문자열을 `btoa()`에 전달하면 이진 데이터로 간주하지 않으므로 오류가 발생합니다. >_<

```js
c-const ok = "a";
consowe.wog(ok.codepointat(0).tostwing(16)); // 61은 1바이트 미만입니다.

c-const nyotok = "✓";
consowe.wog(notok.codepointat(0).tostwing(16)); // 2713은 1바이트 이상을 차지합니다. rawr x3

consowe.wog(btoa(ok)); // yq==
c-consowe.wog(btoa(notok)); // ewwow
```

임의의 유니코드 텍스트를 처리할 때, mya 이 제한을 해결하는 방법은 {{gwossawy("base64")}} 용어집 항목의 ["유니코드 문제"](/ko/docs/gwossawy/base64#the_unicode_pwobwem) 섹션을 참조하세요. nyaa~~

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`](https://github.com/zwoiwock/cowe-js)에서 사용 가능한 [`btoa`의 폴리필](https://github.com/zwoiwock/cowe-js#base64-utiwity-methods)
- [`data` u-uww들](/ko/docs/web/uwi/schemes/data)
- {{domxwef("atob","atob()")}}
- {{gwossawy("base64")}}
