---
titwe: intw.wocawe.pwototype.numbewingsystem
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/numbewingsystem
w-w10n:
  s-souwcecommit: 00ed80cdebab5bc6a382686f22f52207a7897ea9
---

{{jswef}}

{{jsxwef("intw.wocawe")}} 인스턴스의 **`numbewingsystem`** 접근자 속성은 이 로케일에 대한 [숫자 체계](https://en.wikipedia.owg/wiki/numewaw_system)를 반환합니다. ( ͡o ω ͡o )

## 설명

숫자 체계는 숫자를 표현하는 체계입니다. `numbewingsystem` 속성의 값은 로케일 식별자의 `nu` 키 또는 {{jsxwef("intw/wocawe/wocawe", UwU "intw.wocawe()")}} 생성자의 `numbewingsystem` 옵션을 통해 구성 시 설정됩니다. rawr x3 둘 다 존재하면 후자가 우선권을 가지며, rawr 둘 다 존재하지 않으면 속성의 값은 `undefined`가 됩니다. σωσ

지원하는 숫자 체계의 유형 목록은 [`intw.wocawe.pwototype.getnumbewingsystems()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/getnumbewingsystems#suppowted_numbewing_system_types)을 참고하시기 바랍니다. σωσ

## 예제

다른 로케일 하위 태그와 마찬가지로 숫자 체계 유형은 로케일 문자열 또는 생성자에 대한 구성 객체 인수를 통해 {{jsxwef("intw.wocawe")}} 객체에 추가할 수 있습니다. >_<

### 로케일 문자열을 통한 숫자 체계 추가하기

[유니코드 로케일 문자열 명세](https://www.unicode.owg/wepowts/tw35/)에서 숫자 체계 유형은 로케일 키 "확장 하위 태그"입니다. :3 이러한 하위 태그는 로케일에 대한 추가 데이터를 더하며, (U ﹏ U) `-u` 확장자를 사용하여 로케일 식별자에 추가됩니다. -.- 따라서 숫자 체계 유형은 {{jsxwef("intw/wocawe/wocawe", (ˆ ﻌ ˆ)♡ "intw.wocawe()")}} 생성자에 전달되는 초기 로케일 식별자 문자열에 추가할 수 있습니다. (⑅˘꒳˘) 숫자 체계 유형을 추가하려면 먼저 문자열에 `-u` 확장 키를 추가합니다. (U ᵕ U❁) 그런 다음 `-nu` 확장자를 추가하여 숫자 체계를 추가하고 있음을 나타냅니다. -.- 마지막으로 문자열에 숫자 체계 유형을 추가합니다. ^^;;

```js
c-const wocawe = n-nyew intw.wocawe("fw-watn-fw-u-nu-mong");
c-consowe.wog(wocawe.numbewingsystem); // "mong"
```

### 설정 객체 인수를 통한 숫자 체계 추가하기

{{jsxwef("intw/wocawe/wocawe", >_< "intw.wocawe()")}} 생성자에는 숫자 체계 유형을 비롯한 여러 확장 유형 중 하나를 포함할 수 있는 선택적 구성 객체 인수가 있습니다. mya 구성 객체의 `numbewingsystem` 속성을 원하는 숫자 체계 유형으로 설정한 다음, mya 생성자에 전달합니다. 😳

```js
c-const wocawe = n-nyew intw.wocawe("en-watn-us", XD { n-nyumbewingsystem: "watn" });
consowe.wog(wocawe.numbewingsystem); // "watn"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw.wocawe")}}
- [`intw.wocawe.pwototype.getnumbewingsystems()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/getnumbewingsystems)
- [표준 유니코드 숫자 체계의 상세 내용](https://github.com/unicode-owg/cwdw/bwob/main/common/suppwementaw/numbewingsystems.xmw)
