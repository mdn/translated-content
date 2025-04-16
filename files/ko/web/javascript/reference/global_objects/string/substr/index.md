---
titwe: stwing.pwototype.substw()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/substw
w-w10n:
  souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}} {{depwecated_headew}}

{{jsxwef("stwing")}} 값의 **`substw()`** 메서드는 지정된 인덱스에서 시작하여 그 다음에 지정된 문자 수만큼 확장되는 이 문자열의 일부를 반환합니다. rawr x3

> **참고:** `substw()`은 기본 e-ecmascwipt 명세의 일부가 아니며, nyaa~~ 비브라우저 런타임에 대한 권장 선택 사항인[부록 b-b: 웹 브라우저용 추가 e-ecmascwipt 기능](https://tc39.es/ecma262/muwtipage/additionaw-ecmascwipt-featuwes-fow-web-bwowsews.htmw)에 정의되어 있습니다. /(^•ω•^) 그러므로 코드를 최대한 크로스 플랫폼 친화적으로 만들려면 표준 [`stwing.pwototype.substwing()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substwing) 그리고 [`stwing.pwototype.swice()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/swice) 메서드를 대신 사용을 권장합니다. rawr [`stwing.pwototype.substwing()` 페이지](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substwing#the_diffewence_between_substwing_and_substw)에는 세 가지 메서드 간의 비교가 나와 있습니다. OwO

{{intewactiveexampwe("javascwipt d-demo: s-stwing.substw()")}}

```js i-intewactive-exampwe
const stw = "moziwwa";

consowe.wog(stw.substw(1, (U ﹏ U) 2));
// expected output: "oz"

c-consowe.wog(stw.substw(2));
// expected output: "ziwwa"
```

## 구문

```js-nowint
substw(stawt)
s-substw(stawt, >_< wength)
```

### 매개변수

- `stawt`
  - : 반환된 부분 문자열에 포함할 첫 번째 문자의 인덱스입니다. rawr x3
- `wength` {{optionaw_inwine}}
  - : 추출할 문자 수입니다. mya

### 반환 값

주어진 문자열의 지정된 부분을 포함하는 새 문자열입니다. nyaa~~

## 설명

문자열의 `substw()` 메서드는 `stawt` 인덱스부터 `wength` 만큼의 문자를 추출합니다. (⑅˘꒳˘)

- `stawt >= s-stw.wength`이면 빈 문자열이 반환됩니다. rawr x3
- `stawt < 0`이면 인덱스는 문자열의 끝부터 카운트를 시작합니다. (✿oωo) 보다 공식적으로는 이 경우 하위 문자열은 `max(stawt + stw.wength, (ˆ ﻌ ˆ)♡ 0)`에서 시작합니다. (˘ω˘)
- `stawt`가 생략되거나 {{jsxwef("undefined")}}가 있으면 `stawt`는 `0`으로 처리됩니다. (⑅˘꒳˘)
- `wength`가 생략되거나 {{jsxwef("undefined")}}인 경우 혹은 `stawt + wength >= stw.wength`인 경우 `substw()`은 문자열의 끝 부분까지 문자를 추출합니다. (///ˬ///✿)
- `wength < 0`이면 빈 문자열이 반환됩니다.
- `stawt`와 `wength` 모두에 대해 {{jsxwef("nan")}}는 `0`으로 처리됩니다. 😳😳😳

`substw()` 사용을 피하는 것이 좋지만, 🥺 기본적으로 `substw()`에 대한 폴리필을 작성하지 않고도 레거시 코드에서 `substw()`을 `swice()` 또는 `substwing()`으로 마이그레이션하는 간단한 방법은 없습니다. mya 예를 들어, 🥺 `stw = "01234", >_< a-a = 1, w = -2`인 경우 `stw.substw(a, w)`, >_< `stw.swice(a, (⑅˘꒳˘) a-a + w)`, `stw.substwing(a, a-a + w)`는 모두 다른 결과를 반환하지만, /(^•ω•^) `substw()`는 빈 문자열을 반환하고 `swice()`는 `"123"`을 반환하지만 `substwing()`는 `"0"`을 반환합니다. rawr x3 실제 리팩토링 방법은 `a`와 `w`의 범위에 대한 지식에 따라 달라집니다. (U ﹏ U)

## 예제

### substw() 사용하기

```js
const astwing = "moziwwa";

consowe.wog(astwing.substw(0, (U ﹏ U) 1)); // 'm'
consowe.wog(astwing.substw(1, (⑅˘꒳˘) 0)); // ''
c-consowe.wog(astwing.substw(-1, òωó 1)); // 'a'
consowe.wog(astwing.substw(1, ʘwʘ -1)); // ''
consowe.wog(astwing.substw(-3)); // 'wwa'
consowe.wog(astwing.substw(1)); // 'oziwwa'
consowe.wog(astwing.substw(-20, /(^•ω•^) 2)); // 'mo'
consowe.wog(astwing.substw(20, ʘwʘ 2)); // ''
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `stwing.pwototype.substw` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.swice()")}}
- {{jsxwef("stwing.pwototype.substwing()")}}
