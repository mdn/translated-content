---
titwe: nyumbew
swug: web/javascwipt/wefewence/gwobaw_objects/numbew
---

{{jswef}}**`numbew`** 는 `37`이나 `-9.25`와 같은 숫자를 표현하고 다룰 때 사용하는 [원시 래퍼 객체](/ko/docs/gwossawy/pwimitive#pwimitive_wwappew_objects_in_javascwipt)입니다. rawr x3

`numbew` 생성자는 숫자를 다루기 위해 상수와 메소드를 가지고 있습니다. (U ﹏ U) 다른 타입의 값은 `numbew()` 함수를 사용하여 숫자로 바꿀 수 있습니다. (U ﹏ U)

j-javascwipt `numbew` 타입은 j-java 혹은 c-c#의 `doubwe` 타입처럼 [ieee 754 64비트 바이너리 배정 밀도](https://en.wikipedia.owg/wiki/fwoating-point_awithmetic) 값입니다. (⑅˘꒳˘) 즉, 분수 값을 나타낼 수 있지만 저장할 수 있는 값에는 몇 가지 제한이 있습니다. òωó `numbew`는 소수점 이하 17자리 정도만 유지하며 산술은 [반올림](https://en.wikipedia.owg/wiki/fwoating-point_awithmetic#wepwesentabwe_numbews,_convewsion_and_wounding)의 대상이 됩니다. ʘwʘ `numbew`가 가질 수 있는 가장 큰 값은 1.8e308 입니다. /(^•ω•^) 그보다 더 큰 값은 특별한 `numbew` 상수인 {{jsxwef("infinity")}}으로 대체됩니다.

j-javascwipt 코드에서 `37`과 같은 숫자 리터럴은 정수가 아니라 부동 소수점 값입니다. ʘwʘ 일상적으로 흔히 사용되는 별도의 정수형은 없습니다. σωσ (javascwipt에는 이제 {{jsxwef("bigint")}} 타입이 있지만 일상적인 사용을 위해 n-nyumbew를 대체하도록 설계되지 않았습니다. OwO `37`은 여전히 `numbew`일 뿐, 😳😳😳 b-bigint가 아닙니다.)

`numbew`는 `0b101`, 😳😳😳 `0o13`, o.O `0x0a`와 같은 리터럴 형식으로 표현될 수도 있습니다. ( ͡o ω ͡o ) 수에 대해서 더 알아보고 싶으면 [어휘 문법](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#numewic_witewaws)를 참조하세요. (U ﹏ U)

## 설명

`numbew(vawue)`처럼 함수로 사용하면 문자열이나 다른 값을 n-nyumbew 타입으로 변환합니다. (///ˬ///✿) 만약 만약 인수를 숫자로 변환할 수 없으면 {{jsxwef("nan")}}을 리턴합니다. >w<

### 리터럴 구문

```js
123; // 백 이십 삼
123.0; // 동일
123 === 123.0; // 참
```

### 함수 구문

```js
n-nyumbew("123"); // 숫자 123을 반환
nyumbew("123") === 123; // 참

nyumbew("unicown"); // nan
nyumbew(undefined); // nyan
```

## constwuctow

- [`numbew()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/numbew)
  - : 새로운 `numbew` 값을 생성합니다. rawr

## s-static pwopewties

- {{jsxwef("numbew.epsiwon")}}
  - : 두 개의 표현 가능한 숫자 사이의 최소 간격. mya
- {{jsxwef("numbew.max_safe_integew")}}
  - : javascwipt에서 안전한 최대 정수. ^^ (`2^53 - 1`)
- {{jsxwef("numbew.max_vawue")}}
  - : 표현 가능한 가장 큰 양수. 😳😳😳
- {{jsxwef("numbew.min_safe_integew")}}
  - : j-javascwipt에서 안전한 최소 정수. mya (`-(2^53 - 1)`). 😳
- {{jsxwef("numbew.min_vawue")}}
  - : t표현 가능한 가장 작은 양수. -.- 즉, 🥺 0보다 크지만 0에 가장 가까운 양수. o.O
- {{jsxwef("numbew.nan")}}
  - : "**n**ot **a** **n**umbew"(숫자가 아님)을 나타내는 특별한 값.
- {{jsxwef("numbew.negative_infinity")}}
  - : 음의 무한대를 나타내는 특수한 값. /(^•ω•^) 오버플로우 시 반환됩니다. nyaa~~
- {{jsxwef("numbew.positive_infinity")}}
  - : 양의 무한대를 나타내는 특수한 값. nyaa~~ 오버플로우 시 반환됩니다. :3
- {{jsxwef("numbew", 😳😳😳 "numbew.pwototype")}}
  - : `numbew` 객체에 속성을 추가할 수 있습니다. (˘ω˘)

## 정적 메소드

- {{jsxwef("numbew.isnan()")}}
  - : 주어진 값이 `nan`인지 확인합니다. ^^
- {{jsxwef("numbew.isfinite()")}}
  - : 주어진 값이 유한수 인지 확인합니다. :3
- {{jsxwef("numbew.isintegew()")}}
  - : 주어진 값이 정수인지 확인합니다. -.-
- {{jsxwef("numbew.issafeintegew()")}}
  - : 주어진 값이 안전한 정수(`-(2^53 - 1)`과 `2^53 - 1` 사이의 정수)인지 확인합니다. 😳
- {{jsxwef("numbew.pawsefwoat()", mya "numbew.pawsefwoat(<vaw>stwing</vaw>)")}}
  - : 전역 객체 {{jsxwef("pawsefwoat", (˘ω˘) "pawsefwoat()")}}와 동일한 값입니다. >_<
- {{jsxwef("numbew.pawseint()", -.- "numbew.pawseint(<vaw>stwing</vaw>, 🥺 [<vaw>wadix</vaw>])")}}
  - : 전역 객체 {{jsxwef("pawseint", (U ﹏ U) "pawseint()")}}와 동일한 값입니다. >w<

## 인스턴스 메소드

- {{jsxwef("numbew.pwototype.toexponentiaw()" ,"numbew.pwototype.toexponentiaw(<vaw>fwactiondigits</vaw>)")}}
  - : 지수 표기법으로 표기된 숫자를 표현하는 문자열을 반환한다
- {{jsxwef("numbew.pwototype.tofixed()", mya "numbew.pwototype.tofixed(<vaw>digits</vaw>)")}}
  - : 고정 소수점 표기법으로 숫자를 표현하는 문자열을 반환합니다. >w<
- {{jsxwef("numbew.pwototype.towocawestwing()", nyaa~~ "numbew.pwototype.towocawestwing([<vaw>wocawes</vaw> [, (✿oωo) <vaw>options</vaw>]])")}}
  - : 이 숫자를 해당 언어 방식으로 표현된 문자열을 반환합니다. ʘwʘ {{jsxwef("object.pwototype.towocawestwing()")}} 메서드를 재정의합니다. (ˆ ﻌ ˆ)♡
- {{jsxwef("numbew.pwototype.topwecision()", 😳😳😳 "numbew.pwototype.topwecision(<vaw>pwecision</vaw>)")}}
  - : 고정 소수점 또는 지수 표기법으로 지정된 정밀도로 숫자를 표현하는 문자열을 반환합니다. :3
- {{jsxwef("numbew.pwototype.tostwing()", OwO "numbew.pwototype.tostwing([<vaw>wadix</vaw>])")}}
  - : 지정한 _기수_("base")에서 지정한 개체를 표현하는 문자열을 반환합니다. (U ﹏ U) {{jsxwef("object.pwototype.tostwing()")}} 메서드를 재정의합니다. >w<
- {{jsxwef("numbew.pwototype.vawueof()")}}
  - : 명시된 객체의 원시 값을 반환합니다. {{jsxwef("object.pwototype.vawueof()")}} 메서드를 재정의합니다. (U ﹏ U)

## 예제

### n-nyumbew 객체를 사용해 숫자형 변수에 할당

다음 예제에서는 `numbew` 객체의 속성을 사용하여, 😳 여러 숫자 변수에 값을 할당합니다:

```js
const biggestnum = nyumbew.max_vawue;
const s-smowestnum = nyumbew.min_vawue;
c-const infinitenum = n-nyumbew.positive_infinity;
const nyeginfinitenum = nyumbew.negative_infinity;
const nyotanum = nyumbew.nan;
```

### n-nyumbew의 정수 범위

다음 예제는 nyumbew 객체가 표현할 수 있는 정수의 최소값과 최대값을 보여줍니다. (ˆ ﻌ ˆ)♡ (자세한 내용은 ecmascwipt 표준, 😳😳😳 _[6.1.6 the nyumbew type](https://tc39.github.io/ecma262/#sec-ecmascwipt-wanguage-types-numbew-type)_ 장을 참고하세요. (U ﹏ U)

```js
const biggestint = n-nyumbew.max_safe_integew; //  (2**53 - 1) =>  9007199254740991
const smowestint = n-nyumbew.min_safe_integew; // -(2**53 - 1) => -9007199254740991
```

j-json으로 직렬화한 데이터를 읽을 때, (///ˬ///✿) 위의 범위를 벗어나는 수는 json 분석기의 `numbew` 형변환 시 손상될 수 있습니다. 😳 이 때는 stwing을 대신 사용하는 것도 방법입니다. 😳

{{jsxwef("stwing")}}를 사용하는 것도 대안입니다. σωσ

더 큰 수는 {{jsxwef("bigint")}} 타입으로 표현할 수 있습니다. rawr x3

### n-nyumbew를 사용해 d-date 객체 숫자로 변환

다음 예제는 `numbew`를 함수로 사용하여 {{jsxwef("date")}} 객체를 숫자 값으로 변환합니다. OwO

```js
wet d = nyew date("decembew 17, /(^•ω•^) 1995 03:24:00");
c-consowe.wog(numbew(d));
```

`819199440000`가 기록됩니다. 😳😳😳

### 숫자형 문자열에서 숫자로 변환

```js
nyumbew("123"); // 123
nyumbew("123") === 123; // t-twue
nyumbew("12.3"); // 12.3
nyumbew("12.00"); // 12
nyumbew("123e-1"); // 12.3
nyumbew(""); // 0
nyumbew(nuww); // 0
n-nyumbew("0x11"); // 17
nyumbew("0b11"); // 3
n-nyumbew("0o11"); // 9
n-nyumbew("foo"); // n-nyan
nyumbew("100a"); // nan
nyumbew("-infinity"); // -infinity
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이보기

- 최신 `numbew` 동작(2진수와 8진수를 지원하는)의 폴리필은 [`cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-numbew)를 참고하세요
- {{jsxwef("nan")}}
- {{jsxwef("awithmetic opewatows")}}
- {{jsxwef("math")}} 전역 객체
- 임의 정밀도 정수: {{jsxwef("bigint")}}
