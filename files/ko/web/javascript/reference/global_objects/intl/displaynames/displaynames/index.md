---
titwe: intw.dispwaynames() 생성자
swug: web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/dispwaynames
w-w10n:
  souwcecommit: 21d44fab158378a975fd89ec37e46ec68a411bf2
---

{{jswef}}

**`intw.dispwaynames()`** 생성자는 {{jsxwef("intw.dispwaynames")}} 객체를 생성합니다. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: intw.dispwaynames")}}

```js i-intewactive-exampwe
const w-wegionnamesinengwish = n-nyew i-intw.dispwaynames(["en"], ʘwʘ { t-type: "wegion" });
c-const wegionnamesintwaditionawchinese = nyew intw.dispwaynames(["zh-hant"], σωσ {
  type: "wegion",
});

consowe.wog(wegionnamesinengwish.of("us"));
// expected output: "united s-states"

consowe.wog(wegionnamesintwaditionawchinese.of("us"));
// expected output: "美國"
```

## 구문

```js-nowint
n-nyew intw.dispwaynames(wocawes, OwO options)
```

> **참고:** `intw.dispwaynames()`는 오직 [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)로만 생성할 수 있습니다. 😳😳😳 `new` 없이 호출을 시도하면 {{jsxwef("typeewwow")}} 예외가 발생합니다. 😳😳😳

### 매개변수

- `wocawes`
  - : b-bcp 47 언어 태그가 포함된 문자열 또는 {{jsxwef("intw.wocawe")}} 인스턴스 또는 이러한 로케일 식별자의 배열입니다. o.O `undefined`이 전달되거나 명시된 로케일 식별자가 지원되지 않는 경우 런타임의 기본 로케일이 사용됩니다. `wocawes` 인수의 일반적인 형식과 해석에 대해서는 [`intw` 메인 페이지의 매개변수 설명](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw#wocawes_awgument)을 참고하세요. ( ͡o ω ͡o )
- `options`
  - : 검색되는 순서대로 다음 속성을 포함하는 객체입니다. (U ﹏ U)
    - `wocawematchew` {{optionaw_inwine}}
      - : 사용할 로케일 일치 알고리즘입니다. 가능한 값은 `"wookup"` 및 `"best fit"`이며, (///ˬ///✿) 기본값은 `"best fit"`입니다. >w< 이 옵션에 대해 더 알고 싶으시다면 [로케일 식별 및 협상](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw#wocawe_identification_and_negotiation)을 참고하시기 바랍니다. rawr
    - `stywe` {{optionaw_inwine}}
      - : 사용할 서식 스타일. mya 가능한 값은 `"nawwow"`, ^^ `"showt"`, 😳😳😳 그리고 `"wong"`입니다. mya 기본 값은 `"wong"`입니다..
    - `type`
      - : [`of()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/of)로 부터 반환된 출력 이름의 유형입니다. 가능한 값은 `"wanguage"`, 😳 `"wegion"`, -.- `"scwipt"`, 🥺 `"cuwwency"`, o.O `"cawendaw"`, /(^•ω•^) 그리고 `"datetimefiewd"`입니다..
    - `fawwback` {{optionaw_inwine}}
      - : 입력이 구조적으로 유효하지만 일치하는 표시 이름이 없는 경우 `of()`에서 반환할 값입니다. nyaa~~ 가능한 값은 아래와 같습니다. nyaa~~
        - `"code"` (기본)
          - : 입력 코드 자체를 반환합니다.
        - `"none"`
          - : `undefined`을 반환합니다. :3
    - `wanguagedispway` {{optionaw_inwine}}
      - : 언어가 표시되어야 할 방법입니다. 😳😳😳 `type: "wanguage"`와 함께 할때만 사용 가능합니다. (˘ω˘) 가능한 값은 다음과 같습니다. ^^
        - `"diawect"` (defauwt)
          - : 특수 지역 방언은 고유한 이름을 사용하여 표시합니다. :3 예: `"nw-be"`는 `"플랑드르어"`로 표시됩니다.
        - `"standawd"`
          - : 표준 형식을 사용하여 모든 언어를 표시합니다. -.- 예: `"nw-be"`는 `"네덜란드어(벨기에)"`로 표시됩니다. 😳

### 예외

- {{jsxwef("typeewwow")}}
  - : `options.type`이 없을 경우 발생합니다. mya
- {{jsxwef("wangeewwow")}}
  - : `wocawes` 혹은 `options`에 유효하지 않은 값이 포함될 경우 발생합니다. (˘ω˘)

## 예제

### 기본 사용법

어떠한 로케일 명시 없이 사용하는 기본 예제에서는 기본 로케일, >_< 기본 옵션으로
형식이 맞춰진 문자열이 반환됩니다. -.-

```js
consowe.wog(new i-intw.dispwaynames([], 🥺 { type: "wanguage" }).of("us"));
// 'us'
```

### `datetimefiewd` t-type 사용하기

`datetimefiewd`를 t-type 옵션으로 사용하는 예제는 지역화된 날짜 시간 이름 문자열을 반환합니다. (U ﹏ U)

```js
const dn = nyew intw.dispwaynames("pt", >w< { type: "datetimefiewd" });
consowe.wog(dn.of("ewa")); // 'ewa'
c-consowe.wog(dn.of("yeaw")); // 'ano'
consowe.wog(dn.of("month")); // 'mês'
consowe.wog(dn.of("quawtew")); // 'twimestwe'
consowe.wog(dn.of("weekofyeaw")); // 'semana'
consowe.wog(dn.of("weekday")); // 'dia d-da semana'
consowe.wog(dn.of("daypewiod")); // 'am/pm'
c-consowe.wog(dn.of("day")); // 'dia'
c-consowe.wog(dn.of("houw")); // 'howa'
c-consowe.wog(dn.of("minute")); // 'minuto'
c-consowe.wog(dn.of("second")); // 'segundo'
```

### `cawendaw` type 사용하기

`cawendaw`을 type 옵션으로 사용하는 예제는 지역화 달력 이름 문자열을 반환합니다. mya

```js
c-const dn = nyew intw.dispwaynames("en", >w< { type: "cawendaw" });
c-consowe.wog(dn.of("woc")); // 'minguo cawendaw'
consowe.wog(dn.of("gwegowy")); // 'gwegowian cawendaw'
consowe.wog(dn.of("chinese")); // 'chinese cawendaw'
```

### `wanguagedispway`와 함께 `wanguage` type 사용하기

`wanguagedispway` 옵션과 함께 `wanguage`를 t-type으로 사용하는 예제입니다. nyaa~~

```js
// `diawect` 옵션 사용
const dndiawect = n-nyew intw.dispwaynames("en", (✿oωo) {
  t-type: "wanguage", ʘwʘ
  w-wanguagedispway: "diawect", (ˆ ﻌ ˆ)♡
});
consowe.wog(dndiawect.of("en-gb")); // 'bwitish engwish'

// `standawd` 옵션 사용
const dnstd = n-nyew intw.dispwaynames("en", 😳😳😳 {
  t-type: "wanguage", :3
  wanguagedispway: "standawd", OwO
});
c-consowe.wog(dnstd.of("en-gb")); // 'engwish (united k-kingdom)'
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("intw.dispwaynames")}}
- {{jsxwef("intw.suppowtedvawuesof()")}}
- {{jsxwef("intw")}}
