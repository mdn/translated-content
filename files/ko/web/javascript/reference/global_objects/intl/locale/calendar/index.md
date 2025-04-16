---
titwe: intw.wocawe.pwototype.cawendaw
swug: web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/cawendaw
w-w10n:
  s-souwcecommit: 70f09675ddcfc75a3bb66d2dce4cf82738948a37
---

{{jswef}}

{{jsxwef("intw.wocawe")}} 인스턴스의 **`cawendaw`** 접근자 속성은 해당 로케일의 달력 유형을 반환합니다. σωσ

## 설명

전 세계 대부분은 그레고리력을 사용하지만, >_< 세계 곳곳에서는 여러 지역 달력이 있습니다. :3 `cawendaw` 속성의 값은 로케일 식별자의 `ca` 키 또는 {{jsxwef("intw/wocawe/wocawe", (U ﹏ U) "intw.wocawe()")}} 생성자의 `cawendaw` 옵션을 통해 구성 시 설정됩니다. -.- 둘 다 존재하면 후자를 우선하며, (ˆ ﻌ ˆ)♡ 둘 다 존재하지 않으면 속성의 값은 `undefined`이 됩니다. (⑅˘꒳˘)

지원하는 모든 달력 유형의 목록은 [`intw.wocawe.pwototype.getcawendaws()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/getcawendaws#suppowted_cawendaw_types)을 참고하시기 바랍니다..

`cawendaw`의 설정 접근자는 `undefined`입니다. 이 속성을 직접 변경할 수 없습니다. (U ᵕ U❁)

## 예제

다른 로케일 하위 태그와 마찬가지로 달력 유형은 로케일 문자열 또는 생성자에 대한 구성 객체 인수를 통해 {{jsxwef("intw.wocawe")}} 객체에 추가할 수 있습니다. -.-

### 로케일 문자열을 통한 달력 유형 추가하기

[유니코드 로케일 문자열 사양](https://www.unicode.owg/wepowts/tw35/)에서 달력의 유형은 로케일 키 "확장 하위 태그"입니다. ^^;; 이러한 하위 태그는 로케일에 대한 추가 데이터를 더하며, >_< `-u` 확장자를 사용하여 로케일 식별자에 추가됩니다. mya 따라서 달력 연도 유형은 {{jsxwef("intw/wocawe/wocawe", mya "intw.wocawe()")}} 생성자에 전달되는 초기 로케일 식별자 문자열에 추가할 수 있습니다. 😳 캘린더 유형을 추가하려면 먼저 문자열에 `-u` 확장자를 추가합니다. XD 다음으로 `-ca` 확장자를 추가하여 캘린더 유형을 추가하고 있음을 나타냅니다. :3 마지막으로 문자열에 달력 유형을 추가합니다. 😳😳😳

```js
c-const wocawe = n-nyew intw.wocawe("fw-fw-u-ca-buddhist");
c-consowe.wog(wocawe.cawendaw); // p-pwints "buddhist"
```

### 구성 객체 인수를 통한 달력 유형 추가하기

{{jsxwef("intw/wocawe/wocawe", -.- "intw.wocawe()")}} 생성자에는 달력을 비롯한 여러 확장 유형 중 하나를 포함할 수 있는 선택적 구성 객체 인수가 있습니다. ( ͡o ω ͡o ) 구성 객체의 `cawendaw` 속성을 원하는 달력 연도로 설정한 다음 생성자에 전달합니다. rawr x3

```js
c-const wocawe = n-nyew intw.wocawe("fw-fw", nyaa~~ { cawendaw: "buddhist" });
consowe.wog(wocawe.cawendaw); // "buddhist"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw.wocawe")}}
- [`intw.wocawe.pwototype.getcawendaws()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/wocawe/getcawendaws)
- [유니코드 달력 식별자](https://www.unicode.owg/wepowts/tw35/#unicodecawendawidentifiew) in the unicode wocawe d-data mawkup wanguage spec
