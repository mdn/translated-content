---
title: 동등 비교 및 동일성
slug: Web/JavaScript/Equality_comparisons_and_sameness
l10n:
  sourceCommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

{{jsSidebar("Intermediate")}}

JavaScript는 다음 세 가지의 값 비교 연산을 제공합니다.

- [`===`](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality) - 엄격한 동등 (삼중 등호)
- [`==`](/ko/docs/Web/JavaScript/Reference/Operators/Equality) - 느슨한 동등 (이중 등호)
- [`Object.is()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is)

어느 연산을 사용할지 선택하는 것은 여러분이 어떤 종류의 비교를 수행하려고 하는지에 달려있습니다. 간단히 말하자면 다음과 같습니다.

- 이중 등호(`==`)는 두 대상을 비교할 때 유형 변환을 수행한 뒤, IEEE 754를 준수하도록 `NaN`, `-0`, `+0`을 특별히 처리합니다(따라서 `NaN != NaN`이고 `-0 == +0`).
- 삼중 등호(`===`)는 이중 등호와 동일한 비교(`NaN`, `-0`, `+0`에 대한 특수 처리 포함)를 수행하지만 유형 변환은 수행하지 않습니다. 유형이 다르면 `false`가 반환됩니다.
- `Object.is()`는 `NaN`, `-0`, `+0`에 대한 형식 변환과 특수 처리를 수행하지 않습니다(특수 숫자 값을 제외하고 `===`와 동일한 동작 제공).

이들은 JavaScript의 4가지 동등 알고리즘 중 3가지에 해당합니다.

- [IsLooselyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-islooselyequal): `==`
- [IsStrictlyEqual](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-isstrictlyequal): `===`
- [SameValue](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevalue): `Object.is()`
- [SameValueZero](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-samevaluezero): 많은 내장 연산에 사용됨.

이들 사이의 구별은 모두 원시 값 처리와 관련 있습니다. 이들 중 어느 것도 매개변수가 구조에서 개념적으로 유사한지 비교하지 않습니다. 동일한 구조를 가지고 있지만, 고유한 객체인 비 원시 값 객체 `x`와 `y`의 경우, 위의 모든 형식은 `false`로 평가됩니다.

## ===를 사용하는 엄격한 동등

엄격한 동등은 두 값이 같은지 비교합니다. 비교되기 전 어떠한 값도 암시적으로 다른 값으로 변환되지 않습니다. 값의 형식이 다른 경우, 두 값은 동등하지 않다고 간주됩니다. 값의 형식이 같고 숫자가 아니고 값이 같다면 두 값은 동등하다고 간주됩니다. 마지막으로 두 값이 모두 숫자인 경우, 둘 다 `NaN`이 아닌 동일한 값이거나, 하나가 `+0`이고 하나가 `-0`이면 동등한 것으로 간주됩니다.

```js
const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false
```

엄격한 동등은 거의 항상 사용하는 올바른 비교 연산입니다. 숫자를 제외한 모든 값에 대해 "한 값은 자신과만 같다"라는 명백한 의미 체계를 사용합니다. 숫자의 경우 약간 다른 의미 체계를 사용하여 서로 다른 두 가지 경우를 처리합니다. 첫 번째는 부동 소수점 0이 양수 또는 음수로 부호화 된다는점입니다. 이는 특정 수학 해를 나타내는 데 유용하지만, 대부분의 상황에서는 `+0`과 `-0`의 차이를 신경 쓰지 않으므로 엄격한 동등은 두 값을 동일한 값으로 취급합니다. 두 번째는 부동 소수점이 `NaN`이라는 숫자가 아닌 값의 개념을 포함하여 어떤 불분명한 수학 문제(예: 양의 무한대에 음의 무한대를 더함)에 대한 해를 나타내는 경우입니다. 엄격한 동등은 `NaN`을 다른 모든 값과 같지 않은 것으로 취급합니다. (`(x !== x)`가 `true`인 유일한 경우는 `x`가 `NaN`일 때입니다.)

`===` 외에도 엄격한 동등은 [`Array.prototype.indexOf()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf), [`Array.prototype.lastIndexOf()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf), [`TypedArray.prototype.indexOf()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf), [`TypedArray.prototype.lastIndexOf()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf), 그리고 [`case`](/ko/docs/Web/JavaScript/Reference/Statements/switch) 일치를 포함한 인덱스 검색 메서드에서 사용됩니다. 즉, `indexOf(NaN)`을 사용하여 배열에서 `NaN` 값의 인덱스를 찾거나 `NaN`을 `switch` 문에서 `case` 값으로 사용하여 어떤 항목과 일치하도록 만들 수 없습니다.

```js
console.log([NaN].indexOf(NaN)); // -1
switch (NaN) {
  case NaN:
    console.log("Surprise"); // 아무것도 로그되지 않습니다.
}
```

## ==를 사용하는 느슨한 동등

느슨한 동등은 대칭입니다. 즉, `A == B`는 `A`와 `B`가 어떤 값이든 항상 `B == A`와 동일한 의미 체계를 가집니다(적용된 변환 순서 제외). `==`를 사용하여 느슨한 동등을 수행하는 동작은 다음과 같습니다.

1. 피연산자의 형식이 동일한 경우 다음과 같이 비교됩니다.
   - 객체: 두 피연산자가 동일한 객체를 참조하는 경우에만 `true`를 반환합니다.
   - 문자열: 두 피연산자가 동일한 순서로 동일한 문자를 갖는 경우에만 `true`를 반환합니다.
   - 숫자: 두 피연산자의 값이 같은 경우에만 `true`를 반환합니다. `+0`과 -`0`은 같은 값으로 취급합니다. 피연산자 중 하나가 `NaN` 이면 `false`를 반환합니다. 따라서 `NaN`은 결코 `NaN`과 같지 않습니다.
   - 불리언: 피연산자가 둘 다 `true`이거나 둘 다 `false`인 경우에만 `true`를 반환합니다.
   - BigInt: 두 피연산자가 동일한 값인 경우에만 `true`를 반환합니다.
   - Symbol: 두 피연산자가 동일한 symbol을 참조하는 경우에만 `true`를 반환합니다.
2. 피연산자 중 하나가 `null`이거나 `undefined`인 경우 `true`를 반환하려면 다른 피연산자도 `null`이거나 `undefined` 여야 합니다. 그렇지 않으면 `false`를 반환합니다.
3. 피연산자 중 하나가 객체이고 다른 하나가 원시 값인 경우 [객체를 원시 값으로 변환](/ko/docs/Web/JavaScript/Data_structures#primitive_coercion)합니다.
4. 이 단계에서 두 피연산자는 원시 값(문자열, 숫자, 불리언, Symbol, BigInt 중 하나)로 변환됩니다. 나머지 변환은 사항별로 수행됩니다.
   - 동일한 형식인 경우, 1단계를 사용하여 비교합니다.
   - 피연산자 중 하나가 Symbol이고 다른 피연산자는 아닌 경우, `false`를 반환합니다.
   - 피연산자 중 하나가 불리언이고 다른 피연산자는 아닌 경우, [불리언을 숫자로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)합니다. `true`는 1로 변환되고 `false`는 0으로 변환됩니다. 그런 다음 두 피연산자를 다시 느슨하게 비교합니다.
   - 숫자를 문자열로: [문자열을 숫자로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)합니다. 변환 실패로 인해 `NaN`이 발생하면 동등성이 `false` 임을 보장합니다.
   - 숫자를 BigInt로: 숫자 값으로 비교합니다. 숫자가 ±Infinity이거나 `NaN` 이면 `false`를 반환합니다.
   - 문자열을 BigInt로: [`BigInt()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 생성자와 동일한 알고리즘을 사용하여 문자열을 BigInt로 변환합니다. 변환에 실패하면 `false`를 반환합니다.

전통적으로, 그리고 ECMAScript에 따르면 모든 원시 값과 객체는 `undefined`와 `null`과 느슨하게 동등하지 않습니다. 그러나 대부분의 브라우저는 특정한 클래스의 객체(특히 모든 페이지의 `document.all` 객체)가 일부 상황에서 마치 값 `undefined`을 모방하는 것처럼 동작하는 것을 허용합니다. 느슨한 동등성은 다음 맥락 중 하나입니다. `null == A`와 `undefined == A`는 A가 `undefined`로 에뮬레이트 하는 객체인 경우에만 `true`로 평가됩니다. 다른 모든 경우에는 객체가 `undefined` 또는 `null`과 느슨하게 동등하지 않습니다.

대부분의 경우에서 느슨한 동등을 사용하는 것이 권장되지 않습니다. 엄격한 동등을 사용한 비교 결과는 예측하기 쉽고, 강제 형변환이 없기 때문에 더 빨리 평가될 수 있습니다.

다음 예제는 숫자 원시 값 `0`, bigint 원시 값 `0n`, 문자열 원시 값 `'0'`, 그리고 `toString()` 값이 `'0'`인 객체와 관련된 느슨한 동등 비교를 보여줍니다.

```js
const num = 0;
const big = 0n;
const str = "0";
const obj = new String("0");

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true
```

느슨한 동등에는 `==` 연산자만 사용합니다.

## Object.is()를 사용한 동일 값 동등

동일 값 동등은 두 값이 모든 맥락에서 기능적으로 동일한지 여부를 결정합니다. (이 사용 사례는[Liskov 대체 원칙](https://en.wikipedia.org/wiki/Liskov_substitution_principle) 사례를 보여줍니다.) 변경할 수 없는 속성을 변경하려 하는 경우 한 사례가 발생합니다.

```js
// 변경할 수 없는 NEGATIVE_ZERO 속성을 Number 생성자에 추가합니다.
Object.defineProperty(Number, "NEGATIVE_ZERO", {
  value: -0,
  writable: false,
  configurable: false,
  enumerable: false,
});

function attemptMutation(v) {
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
```

`Object.defineProperty`는 변경할 수 없는 속성을 변경하려고 시도할 때 예외를 발생시키지지만, 실제 변경이 요청되지 않으면 아무 작업도 수행하지 않습니다. `v`가 `-0`이면 변경이 요청되지 않았으며, 오류가 발생하지 않습니다. 내부적으로 변경할 수 없는 속성이 재정의되면, 새로 지정된 값을 동일 값 동등을 사용하여 현재 값과 비교합니다.

동일 값 동등은 {{jsxref("Object.is")}} 메서드에 의해 제공됩니다. 이는 동등한 ID 값이 예상되는 언어의 거의 모든 곳에서 사용됩니다.

## 동일 값 제로 동등

동일 값 값 동등과 유사하지만, +0과 -0은 같은 것으로 간주됩니다.

동일 값 제로 동등은 JavaScript API로 노출되지 않지만, 사용자 지정 코드로 구현할 수 있습니다.

```js
function sameValueZero(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    // x와 y는 같거나(-0과 0일 수 있음) 둘 다 NaN입니다.
    return x === y || (x !== x && y !== y);
  }
  return x === y;
}
```

동일 값 제로는 `NaN`을 동등하게 취급하는 점에서만 엄격한 동등과 다르고, `-0`을 `0`과 동등하게 취급하는 점에서만 동일 값 동등과 다릅니다. 따라서 특히 NaN으로 작업할 때, 일반적으로 검색에서 가장 합리적인 동작을 수행합니다. 키 동등을 비교하기 위해 [`Array.prototype.includes()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes), [`TypedArray.prototype.includes()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/includes), 그리고 [`Map`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map)과 [`Set`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set) 메서드에서 사용됩니다.

## 동등 메서드 비교

사람들은 종종 삼중 등호가 이중 등호의 "향상된" 버전이라고 말하면서 이 둘을 비교합니다. 예를 들어, 이중 등호는 삼중 등호의 확장된 버전이라고 말할 수 있습니다. 왜냐하면 전자는 후자의 모든 작업을 수행하지만 피연산자에 유형 변환이 있기 때문입니다(예: `6 == "6"`). 또는 이중 등호가 기준선이고 삼중 등호가 향상된 버전이라고 주장할 수 있습니다. 두 피연산자가 동일한 유형이어야 하므로 추가 제약 조건이 추가되기 때문입니다.

그러나 이러한 생각은 방식은 동등 비교가 한쪽 끝에는 "완전히 엄격함"이 있고, 다른쪽에는 "완전히 느슨함"이 있는 1차원 "스펙트럼"을 형성합니다. 이 스펙트럼은 {{jsxref("Object.is")}}에서 부족한 점이 드러나는데, 이는 이중 등호보다 "느슨하지"도 않고, 삼중 등호보다 "엄격"하지도 않아 중간 어딘가에 맞지도 않기 때문입니다(즉, 이중 등호보단 엄격하지만 삼중 등호보다 느슨하다). 아래의 동일성 비교 표에서 이것이 {{jsxref("Object.is")}}가 `NaN`을 처리하는 방식 때문임을 알 수 있습니다. 만약 `Object.is(NaN, NaN)`이 `false`로 평가되면 {{jsxref("Object.is")}}는 `-0`과 `+0`을 구별하는 더 엄격한 삼중 등호의 형식으로 느슨/엄격 스펙트럼에 적합하다고 말할 수 있습니다. 그러나 `NaN` 처리는 이것이 사실이 아님을 의미합니다. 불행하게도 {{jsxref("Object.is")}}는 등호 연산자에 대한 느슨함이나 엄격함이 아니라 고유한 특성의 관점에서 생각해야 합니다.

| x                   | y                   | `==`       | `===`      | `Object.is` | `SameValueZero` |
| ------------------- | ------------------- | ---------- | ---------- | ----------- | --------------- |
| `undefined`         | `undefined`         | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `null`              | `null`              | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `true`              | `true`              | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `false`             | `false`             | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `'foo'`             | `'foo'`             | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `0`                 | `0`                 | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `+0`                | `-0`                | `✅ true`  | `✅ true`  | `❌ false`  | `✅ true`       |
| `+0`                | `0`                 | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `-0`                | `0`                 | `✅ true`  | `✅ true`  | `❌ false`  | `✅ true`       |
| `0n`                | `-0n`               | `✅ true`  | `✅ true`  | `✅ true`   | `✅ true`       |
| `0`                 | `false`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `""`                | `false`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `""`                | `0`                 | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `'0'`               | `0`                 | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `'17'`              | `17`                | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `[1, 2]`            | `'1,2'`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `new String('foo')` | `'foo'`             | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `null`              | `undefined`         | `✅ true`  | `❌ false` | `❌ false`  | `❌ false`      |
| `null`              | `false`             | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `undefined`         | `false`             | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `{ foo: 'bar' }`    | `{ foo: 'bar' }`    | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `new String('foo')` | `new String('foo')` | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `0`                 | `null`              | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `0`                 | `NaN`               | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `'foo'`             | `NaN`               | `❌ false` | `❌ false` | `❌ false`  | `❌ false`      |
| `NaN`               | `NaN`               | `❌ false` | `❌ false` | `✅ true`   | `✅ true`       |

### 언제 Object.is()와 삼중 등호를 사용해야 할까?

일반적으로 0에 대한 {{jsxref("Object.is")}}의 특별한 동작에 관심을 가질 수 있는 유일한 시간은 특정 메타 프로그래밍 체계를 추구할 때, 특히 속성 설명자와 관련하여 작업이 {{jsxref("Object.defineProperty")}}의 일부 특성을 반영하는 것이 바람직할 때 입니다. 여러분의 사용 사례에 이것이 필요하지 않은 경우, {{jsxref("Object.is")}}를 피하고 대신 [`===`](/ko/docs/Web/JavaScript/Reference/Operators)를 사용하는 것이 좋습니다. 요구 사항에 두 {{jsxref("NaN")}} 값 간의 비교가 `true`로 평가되는 것이 포함되더라도, 일반적으로 {{jsxref("NaN")}} 검사(이전 버전의 ECMAScript에서 사용할 수 있는 {{jsxref("isNaN")}} 메서드 사용)를 특수한 경우로 지정하는 것이 비교에서 발생하는 0의 부호가 주변 계산에 어떻게 영향을 미칠 수 있는지 알아내는 것보다 쉽습니다.

다음은 코드에서 `-0`과 `+0`을 구분할 수 있는 내장 메서드와 연산자의 일부 목록입니다.

- [`-` (단항 부정)](/ko/docs/Web/JavaScript/Reference/Operators/Unary_negation)

  - : 다음 예제를 참조하세요.

    ```js
    const stoppingForce = obj.mass * -obj.velocity;
    ```

    `obj.velocity`가 `0`(또는 `0`으로 계산)이면 해당 위치에 `-0`이 도입되고 `stopsingForce`로 전파됩니다.

- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : 경우에 따라 `-0`이 매개변수 중 하나로 존재하지 않는 경우에도 `-0`이 이 메서드의 반환 값으로 식에 도입될 수 있습니다. 예를 들어 {{jsxref("Math.pow")}}를 사용하여 {{jsxref("Infinity", "-Infinity")}}를 음의 거듭제곱으로 올리면 홀수 지수는 `-0`으로 평가됩니다. 개별 메서드에 대한 문서를 참조하세요.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : `-0`이 매개변수 중 하나로 존재하는 경우에 이 메서드에서 `-0` 반환 값을 가져올 수 있습니다. 예를 들어 `Math.min(-0, +0)`은 `-0`으로 평가됩니다. 개별 메서드,에 대한 문서를 참조하세요.
- [`~`](/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT), [`<<`](/ko/docs/Web/JavaScript/Reference/Operators/Left_shift), [`>>`](/ko/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : 이러한 연산자는 내부적으로 ToInt32 알고리즘을 사용합니다. 내부 32비트 정수 유형에는 0에 대한 표현이 하나만 있기 때문에 `-0`은 역 연산 후 왕복 여행에서 살아남지 못합니다. 예를 들어, `Object.is(~~(-0), -0)`과 `Object.is(-0 << 2 >> 2, -0)`은 모두 `false`로 평가됩니다.

0의 부호가 고려되지 않은 경우 {{jsxref("Object.is")}}에 의존하는 것은 위험할 수 있습니다. 물론 의도가 `-0`과 `+0`을 구분하는 것이라면 정확히 원하는대로 수행됩니다.

### 주의: Object.is()와 NaN

{{jsxref("Object.is")}} 사양은 {{jsxref("NaN")}}의 모든 인스턴스를 동일한 객체로 취급합니다. 그러나 형식화 배열을 사용할 수 있으므로 모든 맥락에서 동일하게 작동하지 않는 `NaN`의 고유한 부동 소수점 표현을 가질 수 있습니다.

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// NaN의 바이트 표현을 가져옵니다.
const n = f2b(NaN);
// NaN에 중요하지 않은 부호 비트인 첫 번째 비트를 변경합니다.
n[0] = 1;
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]
```

## 같이 보기

- [JS 비교 표](https://dorey.github.io/JavaScript-Equality-Table/)
