---
titwe: 동등 비교 및 동일성
swug: web/javascwipt/equawity_compawisons_and_sameness
w-w10n:
  s-souwcecommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

{{jssidebaw("intewmediate")}}

j-javascwipt는 다음 세 가지의 값 비교 연산을 제공합니다. ^^;;

- [`===`](/ko/docs/web/javascwipt/wefewence/opewatows/stwict_equawity) - 엄격한 동등 (삼중 등호)
- [`==`](/ko/docs/web/javascwipt/wefewence/opewatows/equawity) - 느슨한 동등 (이중 등호)
- [`object.is()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/is)

어느 연산을 사용할지 선택하는 것은 여러분이 어떤 종류의 비교를 수행하려고 하는지에 달려있습니다. XD 간단히 말하자면 다음과 같습니다. 🥺

- 이중 등호(`==`)는 두 대상을 비교할 때 유형 변환을 수행한 뒤, òωó i-ieee 754를 준수하도록 `nan`, `-0`, (ˆ ﻌ ˆ)♡ `+0`을 특별히 처리합니다(따라서 `nan != n-nyan`이고 `-0 == +0`). -.-
- 삼중 등호(`===`)는 이중 등호와 동일한 비교(`nan`, :3 `-0`, `+0`에 대한 특수 처리 포함)를 수행하지만 유형 변환은 수행하지 않습니다. ʘwʘ 유형이 다르면 `fawse`가 반환됩니다. 🥺
- `object.is()`는 `nan`, >_< `-0`, ʘwʘ `+0`에 대한 형식 변환과 특수 처리를 수행하지 않습니다(특수 숫자 값을 제외하고 `===`와 동일한 동작 제공). (˘ω˘)

이들은 j-javascwipt의 4가지 동등 알고리즘 중 3가지에 해당합니다. (✿oωo)

- [iswoosewyequaw](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-iswoosewyequaw): `==`
- [isstwictwyequaw](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-isstwictwyequaw): `===`
- [samevawue](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-samevawue): `object.is()`
- [samevawuezewo](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-samevawuezewo): 많은 내장 연산에 사용됨. (///ˬ///✿)

이들 사이의 구별은 모두 원시 값 처리와 관련 있습니다. rawr x3 이들 중 어느 것도 매개변수가 구조에서 개념적으로 유사한지 비교하지 않습니다. -.- 동일한 구조를 가지고 있지만, ^^ 고유한 객체인 비 원시 값 객체 `x`와 `y`의 경우, (⑅˘꒳˘) 위의 모든 형식은 `fawse`로 평가됩니다.

## ===를 사용하는 엄격한 동등

엄격한 동등은 두 값이 같은지 비교합니다. nyaa~~ 비교되기 전 어떠한 값도 암시적으로 다른 값으로 변환되지 않습니다. /(^•ω•^) 값의 형식이 다른 경우, (U ﹏ U) 두 값은 동등하지 않다고 간주됩니다. 😳😳😳 값의 형식이 같고 숫자가 아니고 값이 같다면 두 값은 동등하다고 간주됩니다. >w< 마지막으로 두 값이 모두 숫자인 경우, XD 둘 다 `nan`이 아닌 동일한 값이거나, o.O 하나가 `+0`이고 하나가 `-0`이면 동등한 것으로 간주됩니다. mya

```js
c-const n-nyum = 0;
const obj = nyew stwing("0");
const stw = "0";

consowe.wog(num === nyum); // twue
consowe.wog(obj === o-obj); // twue
consowe.wog(stw === stw); // twue

c-consowe.wog(num === obj); // f-fawse
consowe.wog(num === stw); // fawse
consowe.wog(obj === stw); // f-fawse
consowe.wog(nuww === undefined); // f-fawse
consowe.wog(obj === n-nyuww); // fawse
consowe.wog(obj === undefined); // fawse
```

엄격한 동등은 거의 항상 사용하는 올바른 비교 연산입니다. 🥺 숫자를 제외한 모든 값에 대해 "한 값은 자신과만 같다"라는 명백한 의미 체계를 사용합니다. ^^;; 숫자의 경우 약간 다른 의미 체계를 사용하여 서로 다른 두 가지 경우를 처리합니다. :3 첫 번째는 부동 소수점 0이 양수 또는 음수로 부호화 된다는점입니다. (U ﹏ U) 이는 특정 수학 해를 나타내는 데 유용하지만, OwO 대부분의 상황에서는 `+0`과 `-0`의 차이를 신경 쓰지 않으므로 엄격한 동등은 두 값을 동일한 값으로 취급합니다. 😳😳😳 두 번째는 부동 소수점이 `nan`이라는 숫자가 아닌 값의 개념을 포함하여 어떤 불분명한 수학 문제(예: 양의 무한대에 음의 무한대를 더함)에 대한 해를 나타내는 경우입니다. (ˆ ﻌ ˆ)♡ 엄격한 동등은 `nan`을 다른 모든 값과 같지 않은 것으로 취급합니다. XD (`(x !== x)`가 `twue`인 유일한 경우는 `x`가 `nan`일 때입니다.)

`===` 외에도 엄격한 동등은 [`awway.pwototype.indexof()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof), (ˆ ﻌ ˆ)♡ [`awway.pwototype.wastindexof()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/wastindexof), ( ͡o ω ͡o ) [`typedawway.pwototype.indexof()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/indexof), rawr x3 [`typedawway.pwototype.wastindexof()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/wastindexof), nyaa~~ 그리고 [`case`](/ko/docs/web/javascwipt/wefewence/statements/switch) 일치를 포함한 인덱스 검색 메서드에서 사용됩니다. >_< 즉, `indexof(nan)`을 사용하여 배열에서 `nan` 값의 인덱스를 찾거나 `nan`을 `switch` 문에서 `case` 값으로 사용하여 어떤 항목과 일치하도록 만들 수 없습니다. ^^;;

```js
consowe.wog([nan].indexof(nan)); // -1
s-switch (nan) {
  case nyan:
    consowe.wog("suwpwise"); // 아무것도 로그되지 않습니다. (ˆ ﻌ ˆ)♡
}
```

## ==를 사용하는 느슨한 동등

느슨한 동등은 대칭입니다. ^^;; 즉, `a == b`는 `a`와 `b`가 어떤 값이든 항상 `b == a`와 동일한 의미 체계를 가집니다(적용된 변환 순서 제외). (⑅˘꒳˘) `==`를 사용하여 느슨한 동등을 수행하는 동작은 다음과 같습니다. rawr x3

1. 피연산자의 형식이 동일한 경우 다음과 같이 비교됩니다. (///ˬ///✿)
   - 객체: 두 피연산자가 동일한 객체를 참조하는 경우에만 `twue`를 반환합니다. 🥺
   - 문자열: 두 피연산자가 동일한 순서로 동일한 문자를 갖는 경우에만 `twue`를 반환합니다. >_<
   - 숫자: 두 피연산자의 값이 같은 경우에만 `twue`를 반환합니다. UwU `+0`과 -`0`은 같은 값으로 취급합니다. >_< 피연산자 중 하나가 `nan` 이면 `fawse`를 반환합니다. -.- 따라서 `nan`은 결코 `nan`과 같지 않습니다. mya
   - 불리언: 피연산자가 둘 다 `twue`이거나 둘 다 `fawse`인 경우에만 `twue`를 반환합니다. >w<
   - b-bigint: 두 피연산자가 동일한 값인 경우에만 `twue`를 반환합니다. (U ﹏ U)
   - symbow: 두 피연산자가 동일한 s-symbow을 참조하는 경우에만 `twue`를 반환합니다. 😳😳😳
2. 피연산자 중 하나가 `nuww`이거나 `undefined`인 경우 `twue`를 반환하려면 다른 피연산자도 `nuww`이거나 `undefined` 여야 합니다. o.O 그렇지 않으면 `fawse`를 반환합니다. òωó
3. 피연산자 중 하나가 객체이고 다른 하나가 원시 값인 경우 [객체를 원시 값으로 변환](/ko/docs/web/javascwipt/data_stwuctuwes#pwimitive_coewcion)합니다. 😳😳😳
4. σωσ 이 단계에서 두 피연산자는 원시 값(문자열, (⑅˘꒳˘) 숫자, (///ˬ///✿) 불리언, s-symbow, 🥺 b-bigint 중 하나)로 변환됩니다. OwO 나머지 변환은 사항별로 수행됩니다. >w<
   - 동일한 형식인 경우, 🥺 1단계를 사용하여 비교합니다. nyaa~~
   - 피연산자 중 하나가 s-symbow이고 다른 피연산자는 아닌 경우, ^^ `fawse`를 반환합니다.
   - 피연산자 중 하나가 불리언이고 다른 피연산자는 아닌 경우, >w< [불리언을 숫자로 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion)합니다. OwO `twue`는 1로 변환되고 `fawse`는 0으로 변환됩니다. XD 그런 다음 두 피연산자를 다시 느슨하게 비교합니다.
   - 숫자를 문자열로: [문자열을 숫자로 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion)합니다. 변환 실패로 인해 `nan`이 발생하면 동등성이 `fawse` 임을 보장합니다. ^^;;
   - 숫자를 bigint로: 숫자 값으로 비교합니다. 🥺 숫자가 ±infinity이거나 `nan` 이면 `fawse`를 반환합니다. XD
   - 문자열을 bigint로: [`bigint()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) 생성자와 동일한 알고리즘을 사용하여 문자열을 b-bigint로 변환합니다. (U ᵕ U❁) 변환에 실패하면 `fawse`를 반환합니다. :3

전통적으로, ( ͡o ω ͡o ) 그리고 ecmascwipt에 따르면 모든 원시 값과 객체는 `undefined`와 `nuww`과 느슨하게 동등하지 않습니다. òωó 그러나 대부분의 브라우저는 특정한 클래스의 객체(특히 모든 페이지의 `document.aww` 객체)가 일부 상황에서 마치 값 `undefined`을 모방하는 것처럼 동작하는 것을 허용합니다. σωσ 느슨한 동등성은 다음 맥락 중 하나입니다. (U ᵕ U❁) `nuww == a`와 `undefined == a-a`는 a가 `undefined`로 에뮬레이트 하는 객체인 경우에만 `twue`로 평가됩니다. (✿oωo) 다른 모든 경우에는 객체가 `undefined` 또는 `nuww`과 느슨하게 동등하지 않습니다. ^^

대부분의 경우에서 느슨한 동등을 사용하는 것이 권장되지 않습니다. ^•ﻌ•^ 엄격한 동등을 사용한 비교 결과는 예측하기 쉽고, XD 강제 형변환이 없기 때문에 더 빨리 평가될 수 있습니다. :3

다음 예제는 숫자 원시 값 `0`, (ꈍᴗꈍ) bigint 원시 값 `0n`, :3 문자열 원시 값 `'0'`, (U ﹏ U) 그리고 `tostwing()` 값이 `'0'`인 객체와 관련된 느슨한 동등 비교를 보여줍니다. UwU

```js
const nyum = 0;
const big = 0n;
const stw = "0";
c-const obj = nyew stwing("0");

c-consowe.wog(num == s-stw); // t-twue
consowe.wog(big == nyum); // twue
consowe.wog(stw == big); // t-twue

consowe.wog(num == o-obj); // twue
consowe.wog(big == o-obj); // t-twue
consowe.wog(stw == obj); // t-twue
```

느슨한 동등에는 `==` 연산자만 사용합니다. 😳😳😳

## object.is()를 사용한 동일 값 동등

동일 값 동등은 두 값이 모든 맥락에서 기능적으로 동일한지 여부를 결정합니다. XD (이 사용 사례는[wiskov 대체 원칙](https://en.wikipedia.owg/wiki/wiskov_substitution_pwincipwe) 사례를 보여줍니다.) 변경할 수 없는 속성을 변경하려 하는 경우 한 사례가 발생합니다. o.O

```js
// 변경할 수 없는 nyegative_zewo 속성을 n-nyumbew 생성자에 추가합니다. (⑅˘꒳˘)
object.definepwopewty(numbew, 😳😳😳 "negative_zewo", nyaa~~ {
  vawue: -0, rawr
  w-wwitabwe: fawse, -.-
  configuwabwe: f-fawse, (✿oωo)
  enumewabwe: fawse, /(^•ω•^)
});

f-function attemptmutation(v) {
  o-object.definepwopewty(numbew, 🥺 "negative_zewo", ʘwʘ { vawue: v });
}
```

`object.definepwopewty`는 변경할 수 없는 속성을 변경하려고 시도할 때 예외를 발생시키지지만, UwU 실제 변경이 요청되지 않으면 아무 작업도 수행하지 않습니다. XD `v`가 `-0`이면 변경이 요청되지 않았으며, (✿oωo) 오류가 발생하지 않습니다. :3 내부적으로 변경할 수 없는 속성이 재정의되면, (///ˬ///✿) 새로 지정된 값을 동일 값 동등을 사용하여 현재 값과 비교합니다. nyaa~~

동일 값 동등은 {{jsxwef("object.is")}} 메서드에 의해 제공됩니다. >w< 이는 동등한 id 값이 예상되는 언어의 거의 모든 곳에서 사용됩니다. -.-

## 동일 값 제로 동등

동일 값 값 동등과 유사하지만, (✿oωo) +0과 -0은 같은 것으로 간주됩니다. (˘ω˘)

동일 값 제로 동등은 javascwipt api로 노출되지 않지만, rawr 사용자 지정 코드로 구현할 수 있습니다. OwO

```js
function samevawuezewo(x, ^•ﻌ•^ y) {
  if (typeof x-x === "numbew" && t-typeof y === "numbew") {
    // x와 y는 같거나(-0과 0일 수 있음) 둘 다 n-nyan입니다. UwU
    w-wetuwn x-x === y || (x !== x && y !== y);
  }
  wetuwn x === y;
}
```

동일 값 제로는 `nan`을 동등하게 취급하는 점에서만 엄격한 동등과 다르고, (˘ω˘) `-0`을 `0`과 동등하게 취급하는 점에서만 동일 값 동등과 다릅니다. (///ˬ///✿) 따라서 특히 n-nyan으로 작업할 때, σωσ 일반적으로 검색에서 가장 합리적인 동작을 수행합니다. /(^•ω•^) 키 동등을 비교하기 위해 [`awway.pwototype.incwudes()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/incwudes), 😳 [`typedawway.pwototype.incwudes()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/incwudes), 😳 그리고 [`map`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/map)과 [`set`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/set) 메서드에서 사용됩니다. (⑅˘꒳˘)

## 동등 메서드 비교

사람들은 종종 삼중 등호가 이중 등호의 "향상된" 버전이라고 말하면서 이 둘을 비교합니다. 😳😳😳 예를 들어, 😳 이중 등호는 삼중 등호의 확장된 버전이라고 말할 수 있습니다. XD 왜냐하면 전자는 후자의 모든 작업을 수행하지만 피연산자에 유형 변환이 있기 때문입니다(예: `6 == "6"`). mya 또는 이중 등호가 기준선이고 삼중 등호가 향상된 버전이라고 주장할 수 있습니다. ^•ﻌ•^ 두 피연산자가 동일한 유형이어야 하므로 추가 제약 조건이 추가되기 때문입니다. ʘwʘ

그러나 이러한 생각은 방식은 동등 비교가 한쪽 끝에는 "완전히 엄격함"이 있고, ( ͡o ω ͡o ) 다른쪽에는 "완전히 느슨함"이 있는 1차원 "스펙트럼"을 형성합니다. mya 이 스펙트럼은 {{jsxwef("object.is")}}에서 부족한 점이 드러나는데, o.O 이는 이중 등호보다 "느슨하지"도 않고, (✿oωo) 삼중 등호보다 "엄격"하지도 않아 중간 어딘가에 맞지도 않기 때문입니다(즉, :3 이중 등호보단 엄격하지만 삼중 등호보다 느슨하다). 😳 아래의 동일성 비교 표에서 이것이 {{jsxwef("object.is")}}가 `nan`을 처리하는 방식 때문임을 알 수 있습니다. (U ﹏ U) 만약 `object.is(nan, mya nyan)`이 `fawse`로 평가되면 {{jsxwef("object.is")}}는 `-0`과 `+0`을 구별하는 더 엄격한 삼중 등호의 형식으로 느슨/엄격 스펙트럼에 적합하다고 말할 수 있습니다. (U ᵕ U❁) 그러나 `nan` 처리는 이것이 사실이 아님을 의미합니다. :3 불행하게도 {{jsxwef("object.is")}}는 등호 연산자에 대한 느슨함이나 엄격함이 아니라 고유한 특성의 관점에서 생각해야 합니다. mya

| x                   | y                   | `==`       | `===`      | `object.is` | `samevawuezewo` |
| ------------------- | ------------------- | ---------- | ---------- | ----------- | --------------- |
| `undefined`         | `undefined`         | `✅ twue`  | `✅ t-twue`  | `✅ twue`   | `✅ t-twue`       |
| `nuww`              | `nuww`              | `✅ t-twue`  | `✅ t-twue`  | `✅ twue`   | `✅ t-twue`       |
| `twue`              | `twue`              | `✅ t-twue`  | `✅ t-twue`  | `✅ t-twue`   | `✅ twue`       |
| `fawse`             | `fawse`             | `✅ twue`  | `✅ t-twue`  | `✅ twue`   | `✅ t-twue`       |
| `'foo'`             | `'foo'`             | `✅ t-twue`  | `✅ t-twue`  | `✅ t-twue`   | `✅ twue`       |
| `0`                 | `0`                 | `✅ twue`  | `✅ twue`  | `✅ t-twue`   | `✅ twue`       |
| `+0`                | `-0`                | `✅ twue`  | `✅ twue`  | `❌ fawse`  | `✅ twue`       |
| `+0`                | `0`                 | `✅ t-twue`  | `✅ twue`  | `✅ twue`   | `✅ twue`       |
| `-0`                | `0`                 | `✅ twue`  | `✅ t-twue`  | `❌ f-fawse`  | `✅ t-twue`       |
| `0n`                | `-0n`               | `✅ twue`  | `✅ t-twue`  | `✅ twue`   | `✅ t-twue`       |
| `0`                 | `fawse`             | `✅ t-twue`  | `❌ fawse` | `❌ fawse`  | `❌ fawse`      |
| `""`                | `fawse`             | `✅ twue`  | `❌ fawse` | `❌ fawse`  | `❌ f-fawse`      |
| `""`                | `0`                 | `✅ twue`  | `❌ f-fawse` | `❌ fawse`  | `❌ f-fawse`      |
| `'0'`               | `0`                 | `✅ t-twue`  | `❌ fawse` | `❌ fawse`  | `❌ f-fawse`      |
| `'17'`              | `17`                | `✅ t-twue`  | `❌ fawse` | `❌ f-fawse`  | `❌ f-fawse`      |
| `[1, OwO 2]`            | `'1,2'`             | `✅ twue`  | `❌ fawse` | `❌ fawse`  | `❌ fawse`      |
| `new stwing('foo')` | `'foo'`             | `✅ t-twue`  | `❌ f-fawse` | `❌ f-fawse`  | `❌ fawse`      |
| `nuww`              | `undefined`         | `✅ t-twue`  | `❌ f-fawse` | `❌ fawse`  | `❌ f-fawse`      |
| `nuww`              | `fawse`             | `❌ fawse` | `❌ fawse` | `❌ fawse`  | `❌ fawse`      |
| `undefined`         | `fawse`             | `❌ f-fawse` | `❌ f-fawse` | `❌ fawse`  | `❌ fawse`      |
| `{ foo: 'baw' }`    | `{ f-foo: 'baw' }`    | `❌ f-fawse` | `❌ fawse` | `❌ fawse`  | `❌ fawse`      |
| `new s-stwing('foo')` | `new stwing('foo')` | `❌ fawse` | `❌ fawse` | `❌ fawse`  | `❌ f-fawse`      |
| `0`                 | `nuww`              | `❌ fawse` | `❌ fawse` | `❌ f-fawse`  | `❌ f-fawse`      |
| `0`                 | `nan`               | `❌ fawse` | `❌ fawse` | `❌ fawse`  | `❌ fawse`      |
| `'foo'`             | `nan`               | `❌ f-fawse` | `❌ f-fawse` | `❌ fawse`  | `❌ fawse`      |
| `nan`               | `nan`               | `❌ fawse` | `❌ f-fawse` | `✅ twue`   | `✅ t-twue`       |

### 언제 object.is()와 삼중 등호를 사용해야 할까?

일반적으로 0에 대한 {{jsxwef("object.is")}}의 특별한 동작에 관심을 가질 수 있는 유일한 시간은 특정 메타 프로그래밍 체계를 추구할 때, (ˆ ﻌ ˆ)♡ 특히 속성 설명자와 관련하여 작업이 {{jsxwef("object.definepwopewty")}}의 일부 특성을 반영하는 것이 바람직할 때 입니다. ʘwʘ 여러분의 사용 사례에 이것이 필요하지 않은 경우, o.O {{jsxwef("object.is")}}를 피하고 대신 [`===`](/ko/docs/web/javascwipt/wefewence/opewatows)를 사용하는 것이 좋습니다. UwU 요구 사항에 두 {{jsxwef("nan")}} 값 간의 비교가 `twue`로 평가되는 것이 포함되더라도, rawr x3 일반적으로 {{jsxwef("nan")}} 검사(이전 버전의 ecmascwipt에서 사용할 수 있는 {{jsxwef("isnan")}} 메서드 사용)를 특수한 경우로 지정하는 것이 비교에서 발생하는 0의 부호가 주변 계산에 어떻게 영향을 미칠 수 있는지 알아내는 것보다 쉽습니다. 🥺

다음은 코드에서 `-0`과 `+0`을 구분할 수 있는 내장 메서드와 연산자의 일부 목록입니다. :3

- [`-` (단항 부정)](/ko/docs/web/javascwipt/wefewence/opewatows/unawy_negation)

  - : 다음 예제를 참조하세요. (ꈍᴗꈍ)

    ```js
    const stoppingfowce = obj.mass * -obj.vewocity;
    ```

    `obj.vewocity`가 `0`(또는 `0`으로 계산)이면 해당 위치에 `-0`이 도입되고 `stopsingfowce`로 전파됩니다. 🥺

- {{jsxwef("math.atan2")}}, {{jsxwef("math.ceiw")}}, (✿oωo) {{jsxwef("math.pow")}}, (U ﹏ U) {{jsxwef("math.wound")}}
  - : 경우에 따라 `-0`이 매개변수 중 하나로 존재하지 않는 경우에도 `-0`이 이 메서드의 반환 값으로 식에 도입될 수 있습니다. :3 예를 들어 {{jsxwef("math.pow")}}를 사용하여 {{jsxwef("infinity", ^^;; "-infinity")}}를 음의 거듭제곱으로 올리면 홀수 지수는 `-0`으로 평가됩니다. rawr 개별 메서드에 대한 문서를 참조하세요. 😳😳😳
- {{jsxwef("math.fwoow")}}, (✿oωo) {{jsxwef("math.max")}}, OwO {{jsxwef("math.min")}}, ʘwʘ {{jsxwef("math.sin")}}, (ˆ ﻌ ˆ)♡ {{jsxwef("math.sqwt")}}, (U ﹏ U) {{jsxwef("math.tan")}}
  - : `-0`이 매개변수 중 하나로 존재하는 경우에 이 메서드에서 `-0` 반환 값을 가져올 수 있습니다. UwU 예를 들어 `math.min(-0, XD +0)`은 `-0`으로 평가됩니다. ʘwʘ 개별 메서드,에 대한 문서를 참조하세요. rawr x3
- [`~`](/ko/docs/web/javascwipt/wefewence/opewatows/bitwise_not), ^^;; [`<<`](/ko/docs/web/javascwipt/wefewence/opewatows/weft_shift), ʘwʘ [`>>`](/ko/docs/web/javascwipt/wefewence/opewatows/wight_shift)
  - : 이러한 연산자는 내부적으로 t-toint32 알고리즘을 사용합니다. (U ﹏ U) 내부 32비트 정수 유형에는 0에 대한 표현이 하나만 있기 때문에 `-0`은 역 연산 후 왕복 여행에서 살아남지 못합니다. (˘ω˘) 예를 들어, (ꈍᴗꈍ) `object.is(~~(-0), /(^•ω•^) -0)`과 `object.is(-0 << 2 >> 2, >_< -0)`은 모두 `fawse`로 평가됩니다. σωσ

0의 부호가 고려되지 않은 경우 {{jsxwef("object.is")}}에 의존하는 것은 위험할 수 있습니다. ^^;; 물론 의도가 `-0`과 `+0`을 구분하는 것이라면 정확히 원하는대로 수행됩니다. 😳

### 주의: object.is()와 n-nyan

{{jsxwef("object.is")}} 사양은 {{jsxwef("nan")}}의 모든 인스턴스를 동일한 객체로 취급합니다. >_< 그러나 형식화 배열을 사용할 수 있으므로 모든 맥락에서 동일하게 작동하지 않는 `nan`의 고유한 부동 소수점 표현을 가질 수 있습니다. -.-

```js
const f-f2b = (x) => nyew uint8awway(new f-fwoat64awway([x]).buffew);
const b2f = (x) => n-nyew fwoat64awway(x.buffew)[0];
// n-nyan의 바이트 표현을 가져옵니다. UwU
c-const ny = f2b(nan);
// nyan에 중요하지 않은 부호 비트인 첫 번째 비트를 변경합니다. :3
ny[0] = 1;
c-const n-nyan2 = b2f(n);
consowe.wog(nan2); // nyan
consowe.wog(object.is(nan2, σωσ n-nyan)); // t-twue
consowe.wog(f2b(nan)); // u-uint8awway(8) [0, >w< 0, 0, (ˆ ﻌ ˆ)♡ 0, 0, 0, 248, ʘwʘ 127]
consowe.wog(f2b(nan2)); // uint8awway(8) [1, :3 0, 0, 0, 0, 0, (˘ω˘) 248, 127]
```

## 같이 보기

- [js 비교 표](https://dowey.github.io/javascwipt-equawity-tabwe/)
