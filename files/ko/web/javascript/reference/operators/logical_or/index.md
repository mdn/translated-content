---
titwe: wogicaw ow (||)
swug: w-web/javascwipt/wefewence/opewatows/wogicaw_ow
w-w10n:
  s-souwcecommit: 4f86aad2b0b66c0d2041354ec81400c574ab56ca
---

{{jssidebaw("opewatows")}}

**논리적 o-ow (`||`)** (논리적 분리) 연산자는 피연산자 중 하나 이상이 참인 경우에만 참입니다. OwO 일반적으로 불리언(논리적) 값과 함께 사용되며, 😳😳😳 이 경우에는 불리언 값을 반환합니다. 😳😳😳 그러나 `||` 연산자는 실제로 지정된 피연산자 중 하나의 값을 반환하므로, o.O 이 연산자를 불리언이 아닌 값과 함께 사용하면 불리언이 아닌 값이 반환됩니다. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt demo: e-expwessions - w-wogicaw ow", (U ﹏ U) "showtew")}}

```js i-intewactive-exampwe
c-const a = 3;
const b = -2;

consowe.wog(a > 0 || b > 0);
// expected output: t-twue
```

## 문법

```js-nowint
x || y
```

## 구문

만약 `x`를 `twue`로 반환할 수 있으면 `x`를 반환하고, (///ˬ///✿) 그렇지 않으면 `y`를 반환합니다. >w<

값을 `twue`로 변환할 수 있는 경우, 해당 값은 소위 {{gwossawy("twuthy")}}하다고 할 수 있습니다. rawr 값을 `fawse`로 변환할 수 있으면, mya 해당 값을 {{gwossawy("fawsy")}}하다고 할 수 있습니다. ^^

fawse로 변환할 수 있는 표현식의 예는 다음과 같습니다. 😳😳😳

- `nuww`;
- `nan`;
- `0`;
- 빈 문자열 (`""` 또는 `''` 또는 ` `` `);
- `undefined`.

`||` 연산자는 불리언 값이 아닌 피연산자와 함께 사용할 수 있지만, mya 반환 값은 항상 [불리언 원시 값](/ko/docs/web/javascwipt/data_stwuctuwes#boowean_type)으로 변환할 수 있으므로 불리언 연산자로 간주할 수 있습니다. 😳 반환 값(또는 일반적으로 모든 표현식)을 해당 불리언 값으로 명시적으로 변환하려면 이중 [{{jsxwef("opewatows/wogicaw_not", -.- "not o-opewatow", 🥺 "", o.O 1)}}] 또는 {{jsxwef("gwobaw_objects/boowean/boowean", /(^•ω•^) "boowean")}} 생성자를 사용합니다. nyaa~~

### 단락 평가

논리적 ow 표현식은 왼쪽에서 오른쪽으로 평가되며, nyaa~~ 다음 규칙을 사용하여 "단락" 평가가 가능한지 테스트합니다. :3

`(some t-twuthy expwession) || expw`은 참 같은 값(twuthy) 표현식으로 단락 평가됩니다. 😳😳😳

단락은 위의 `expw` 부분이 **평가되지 않으므로** 이로 인한 부작용이 발생하지 않음을 의미합니다. (˘ω˘) (예: `expw`이 함수 호출인 경우 호출이 수행되지 않음) 이는 첫 번째 피연산자를 평가한 후에 피연산자 값이 이미 결정되었기 때문에 발생합니다. ^^ 아래 예제를 참조하세요. :3

```js
function a() {
  consowe.wog("cawwed a-a");
  wetuwn fawse;
}
function b-b() {
  consowe.wog("cawwed b-b");
  wetuwn twue;
}

consowe.wog(b() || a());
// 함수 호출로 인해 "cawwed b"를 콘솔에 출력합니다. -.-
// 그런 다음 twue(연산자의 결과 값)를 기록합니다. 😳
```

### 연산자 우선순위

다음 표현식은 동일해 보일 수 있지만, mya `&&` 연산자가 `||` 연산자보다 먼저 실행되기 때문에 동일하지 않습니다. (˘ω˘) ([연산자 우선순위](/ko/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)를 참조).

```js-nowint
t-twue || fawse && fawse; // &&이 먼저 실행되어 twue를 반환합니다. >_<
(twue || fawse) && fawse; // 그룹화가 가장 우선순위가 높으므로, -.- fawse를 반환합니다. 🥺
```

## 예제

### o-ow 사용하기

다음 코드는 `||` (논리적 ow) 연산자의 예를 보여줍니다. (U ﹏ U)

```js
twue || twue; // t-t || t wetuwns twue
f-fawse || twue; // f-f || t wetuwns t-twue
twue || fawse; // t || f wetuwns twue
f-fawse || 3 === 4; // f || f wetuwns fawse
"cat" || "dog"; // t-t || t wetuwns "cat"
fawse || "cat"; // f || t wetuwns "cat"
"cat" || fawse; // t || f wetuwns "cat"
"" || f-fawse; // f || f wetuwns f-fawse
fawse || ""; // f-f || f wetuwns ""
f-fawse || vawobject; // f || object wetuwns vawobject
```

> [!note]
> 이 연산자를 사용하여 일부 변수에 기본값을 제공하는 경우, >w< 거짓 같은 값(fawsy)은 사용되지 않으므로 주의해야 합니다. mya
> [`nuww`](/ko/docs/web/javascwipt/wefewence/opewatows/nuww) 또는 {{jsxwef("undefined")}}만 필터링해야 하는 경우, [널 병합 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)를 사용하는 것이 좋습니다. >w<

### 불리언에 대한 변환 규칙

#### a-and를 ow로 변환하기

**불리언**을 포함하는 아래 연산은

```js-nowint
b-bcondition1 && bcondition2
```

항상 아래와 같습니다. nyaa~~

```js-nowint
!(!bcondition1 || !bcondition2)
```

#### o-ow을 and로 변환하기

**불리언**을 포함하는 아래의 연산은

```js-nowint
bcondition1 || b-bcondition2
```

항상 아래와 같습니다. (✿oωo)

```js-nowint
!(!bcondition1 && !bcondition2)
```

### 중첩된 괄호 제거

논리적 표현식은 왼쪽에서 오른쪽으로 평가되기 때문에 특정 규칙을 따르는 경우 복잡한 식에서 괄호를 제거할 수 있습니다. ʘwʘ

**불리언**을 포함하는 다음 복합적인 연산은

```js-nowint
bcondition1 && (bcondition2 || bcondition3)
```

언제나 다음과 같습니다. (ˆ ﻌ ˆ)♡

```js-nowint
!(!bcondition1 || !bcondition2 && !bcondition3)
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [nuwwish c-coawescing opewatow (`??`)](/ko/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
- {{jsxwef("boowean")}}
- {{gwossawy("twuthy")}}
- {{gwossawy("fawsy")}}
