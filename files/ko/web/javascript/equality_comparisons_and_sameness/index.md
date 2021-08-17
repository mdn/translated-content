---
title: 동치 비교 및 동일성
slug: Web/JavaScript/Equality_comparisons_and_sameness
tags:
  - Comparison
  - Equality
  - Intermediate
  - JavaScript
  - SameValue
  - SameValueZero
  - Sameness
translation_of: Web/JavaScript/Equality_comparisons_and_sameness
---
{{jsSidebar("Intermediate")}}

ES2015에는 4가지 같음(equality) 알고리즘이 있습니다:

- 추상적(abstract) 같음 비교 (`==`)
- 엄격한(strict) 같음 비교 (`===`): `Array.prototype.indexOf`, `Array.prototype.lastIndexOf` 및 `case` 절 매칭에 쓰임
- 등가0(SameValueZero): `Map` 및 `Set` 연산뿐만 아니라 `%TypedArray%` 및 `ArrayBuffer` 생성자, 그리고 ES2016에 예정된 `String.prototype.includes`에 쓰임
- 등가(SameValue): 그 외 모든 곳에 쓰임

JavaScript는 3가지 서로 다른 값 비교 연산을 제공합니다:

- [===](/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Identity)를 사용하는 엄격한 같음 (또는 "삼중 등호" 또는 "항등(identity)"),
- [==](/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality)를 사용하는 느슨한(loose) 같음 ("이중 등호"),
- 그리고 [`Object.is`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/is) (ECMAScript 2015에 새로 들임).

어느 연산을 쓸 지 그 선택은 당신이 어떤 종류의 비교를 수행하기 위해 찾고 있는 지에 달렸습니다.



- 이중 equals (`==`)는 두 가지를 비교할 때 유형 변환을 수행하고 IEEE 754를 준수하기 위해 `NaN`, `-0` 및 `+0`을 특별히 처리합니다 (그래서`NaN != NaN`이고 `-0 == +0`입니다);
- 트리플 equals (`===`)는 이중 equals (`NaN`, `-0` 및 `+0`의 특수 처리 포함)와 동일한 비교를 수행하지만 유형 변환은 수행하지 않습니다. 형식이 다른 경우 `false`가 반환됩니다.
- `Object.is`는 형식 변환을하지 않으며 `NaN`, `-0` 및 `+0`에 대한 특수 처리를 수행하지 않습니다 (특수 숫자 값을 제외하고는 `===`와 동일한 동작을 제공함).

이들 사이의 구분은 모두 원시형(primitive) 처리와 관련이 있습니다. 매개 변수가 구조적, 개념적으로 유사한 지 비교하는 것이 없습니다. 같은 구조를 가지지만 개체 자체가 각각인 비원시형(non-primitive) 개체 x 및 y의 경우 위의 모든 형태(form)는 false로 평가됩니다.

## `===`를 사용하는 엄격한 같음

엄격한 같음(strict equality)은 두 값이 같은 지 비교합니다. 어느 값도 비교되기 전에 어떤 다른 값으로 남몰래 변환되지 않습니다. 둘이 서로 다른 형이면, 둘은 같지 않다고 여깁니다. 그렇지 않고 둘이 같은 형이고 숫자가 아닌 경우, 같은 값이면 같다고 여깁니다. 끝으로, 둘이 숫자인 경우, 둘 다 `NaN`이 아닌 같은 값이거나 하나는 `+0` 또 하나는 `-0`인 경우 같다고 여깁니다.

```js
var num = 0;
var obj = new String("0");
var str = "0";
var b = false;

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

엄격한 같음은 거의 항상 사용하는 올바른 비교 연산입니다. 숫자를 뺀 모든 값에 대해, 분명한 의미(semantics)를 사용합니다: 값은 그 자체와만 같습니다(/ 단지 그 자체입니다). 숫자는 서로 다른 두 극단 상황(edge case)을 얼버무리기(gloss over) 위해 약간 다른 의미를 사용합니다. 첫째는 부동 소수점 0은 양이든 음이든 하나의 부호를 지닙니다. 이는 특정 수학상의 해결책을 나타내는 데 유용하지만, 대부분의 상황에 `+0`과 `-0`의 차이에 신경쓰지 않기에, 엄격한 같음은 둘을 같은 값으로 다룹니다. 둘째는 부동 소수점은 not-a-number 값(`NaN`) 개념을 포함합니다, 특정 잘못 정의된(ill-defined) 수학 문제의 해결책을 보여주기 위해: 예를 들어, 양의 무한대(infinity)에 추가된 음의 무한대. 엄격한 같음은 `NaN`을 다른 모든 값과 같지 않게 다룹니다 -- 자신 포함. (`(x !== x)`가 `true`인 유일한 경우는 `x`가 `NaN`일 때입니다.)

## ==를 사용하는 느슨한 같음

The behavior for performing loose equality using `==` is as follows:

- 느슨한 같음(loose equality)은 두 값이 같은 지 비교합니다, 두 값을 공통(common) 형으로 변환한 후에. 변환 후 (하나 또는 양쪽이 변환을 거칠 수 있음), 최종 같음 비교는 꼭 `===`처럼 수행됩니다. 
- 느슨한 같음은 대칭(_symmetric_)입니다: `A == B`는 `A` 및 `B`가 어떤 값이든 항상 `B == A`와 같은 의미를 갖습니다 (적용된 변환의 순서 말고는).
- `undefined` and `null` are loosely equal; that is, `undefined == null` is true, and `null == undefined` is true

전통 및 ECMAScript에 따르면, 모든 객체는 `undefined` 및 `null`과 느슨하게 같지 않습니다. 그러나 대부분의 브라우저는 일부 문맥(context)에서 `undefined`값을 모방하는(_emulate_) 것처럼 행동하기 위해 매우 좁은 부류의 객체(특히, 모든 페이지에 대한 `document.all` 객체)에 허용합니다. 느슨한 같음이 그러한 문맥 중 하나입니다: `null == A` 및 `undefined == A`는 A가 `undefined`를 *모방*하는 객체인 경우, 그리고 그 경우에만 true로 평가합니다. 다른 모든 경우에 객체는 결코 `undefined` 또는 `null`과 느슨하게 같지 않습니다.

Loose equality comparisons among other combinations of operand types are performed as shown in the tables below. The following notations are used in the tables:

- `ToNumber(A)` attempts to convert its argument to a number before comparison. Its behavior is equivalent to `+A` (the unary + operator).
- `ToPrimitive(A)` attempts to convert its object argument to a primitive value, by invoking varying sequences of `A.toString()` and `A.valueOf()` methods on `A`.
- `ℝ(A)` attempts to convert its argument to an ECMAScript [mathematical value](https://tc39.es/ecma262/#mathematical-value).
- `StringToBigInt(A)` attempts to convert its argument to a `BigInt` by applying the ECMAScript [`StringToBigInt`](https://tc39.es/ecma262/#sec-stringtobigint) algorithm.

**number** primitive `A` compared to operand `B`:

| number    | bigint             | string              | boolean             | Object                |
| --------- | ------------------ | ------------------- | ------------------- | --------------------- |
| `A === B` | `ℝ(A) equals ℝ(B)` | `A === ToNumber(B)` | `A === ToNumber(B)` | `A == ToPrimitive(B)` |

**bigint** primitive `A` compared to operand `B`:

| number             | bigint    | string                    | boolean            | Object                |
| ------------------ | --------- | ------------------------- | ------------------ | --------------------- |
| `ℝ(A) equals ℝ(B)` | `A === B` | `A === StringToBigInt(B)` | `A == ToNumber(B)` | `A == ToPrimitive(B)` |

**string** primitive `A` compared to operand `B`:

| number              | bigint                    | string    | boolean                       | Object                |
| ------------------- | ------------------------- | --------- | ----------------------------- | --------------------- |
| `ToNumber(A) === B` | `StringToBigInt(A) === B` | `A === B` | `ToNumber(A) === ToNumber(B)` | `A == ToPrimitive(B)` |

**boolean** primitive `A` compared to operand `B`:

| number              | bigint             | string                        | boolean   | Object                          |
| ------------------- | ------------------ | ----------------------------- | --------- | ------------------------------- |
| `ToNumber(A) === B` | `ToNumber(A) == B` | `ToNumber(A) === ToNumber(B)` | `A === B` | `ToNumber(A) == ToPrimitive(B)` |

**Object** `A` compared to operand `B`:

| number                | bigint                | string                | boolean                         | Object    |
| --------------------- | --------------------- | --------------------- | ------------------------------- | --------- |
| `ToPrimitive(A) == B` | `ToPrimitive(A) == B` | `ToPrimitive(A) == B` | `ToPrimitive(A) == ToNumber(B)` | `A === B` |

In most cases, using loose equality is discouraged. The result of a comparison using strict equality is easier to predict, and may evaluate more quickly due to the lack of type coercion.

### Example

The following example demonstrates loose equality comparisons involving the number primitive `0`, the bigint primitive `0n`, the string primitive `'0'`, and an object whose `toString()` value is `'0'`.

```js
const num = 0;
const big = 0n;
const str = '0';
const obj = new String('0');

console.log(num == str); // true
console.log(big == num); // true
console.log(str == big); // true

console.log(num == obj); // true
console.log(big == obj); // true
console.log(str == obj); // true
```

대부분의 경우 느슨한 같음을 사용하는 것은 바람직하지 않습니다. strict equality를 사용한 비교의 결과는 예측하기가 쉽고 형 강제(coercion) 변환이 일어나지 않기에 평가가 빠를 수 있습니다.

## Same-value equality

등가(same-value) 같음은 최종 사용 사례(use case)를 다룹니다: 두 값이 모든 문맥에서 _기능상 같은지_ 여부를 결정하는. (이 사용 사례는 [리스코프 치환 원칙](https://ko.wikipedia.org/wiki/리스코프_치환_원칙 "Liskov substitution principle")의 실례를 보입니다.) 다음은 불변 속성(property)을 변화시키려 시도할 때 일어나는 한 사례입니다:

```js
// 불변(immutable) NEGATIVE_ZERO 속성을 Number 생성자에 추가.
Object.defineProperty(Number, "NEGATIVE_ZERO",
                      { value: -0, writable: false, configurable: false, enumerable: false });

function attemptMutation(v)
{
  Object.defineProperty(Number, "NEGATIVE_ZERO", { value: v });
}
```

`Object.defineProperty`는 변경 불가능한 속성을 변경하려고 시도 할 때 예외를 throw하지만 실제 변경이 요청되지 않으면 아무 것도 수행하지 않습니다. `v`가 `-0`이면, 변경 사항이 요청되지 않고 오류가 발생하지 않습니다. 내부적으로, 불변의 property가 재정의 (redefined)되었을 때, 새롭게 지정된 값은 같은 값의 동등성을 사용해 현재의 값과 비교됩니다.

Same-value equality는 {{jsxref("Object.is")}} 메서드로 제공됩니다.

## Same-value-zero equality

등가 같음과 비슷하지만 +0과 -0이 같다고 여깁니다.

## 스펙 내 추상적 같음, 엄격한 같음 및 등가

In ES5, the comparison performed by [`==`](/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) is described in [Section 11.9.3, The Abstract Equality Algorithm](https://ecma-international.org/ecma-262/5.1/#sec-11.9.3). The [`===`](/ko/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) comparison is [11.9.6, The Strict Equality Algorithm](https://ecma-international.org/ecma-262/5.1/#sec-11.9.6). (Go look at these. They're brief and readable. Hint: read the strict equality algorithm first.) ES5 also describes, in [Section 9.12, The SameValue Algorithm](https://ecma-international.org/ecma-262/5.1/#sec-9.12) for use internally by the JS engine. It's largely the same as the Strict Equality Algorithm, except that 11.9.6.4 and 9.12.4 differ in handling {{jsxref("Number")}}s. ES2015 simply proposes to expose this algorithm through {{jsxref("Object.is")}}.

We can see that with double and triple equals, with the exception of doing a type check upfront in 11.9.6.1, the Strict Equality Algorithm is a subset of the Abstract Equality Algorithm, because 11.9.6.2–7 correspond to 11.9.3.1.a–f.

## 같음 비교를 이해하기 위한 모델은?

ES2015 이전에, 이중 등호 및 삼중 등호에 대해 하나가 다른 하나의 "확장"판이라고 (말)했을 지 모릅니다. 예를 들어, 누군가는 이중 등호는 삼중 등호의 확장판이라고 합니다, 전자는 후자가 하는 모든 것을 하지만 그 피연산자에 형 변환을 하기에. 가령, `6 == "6"`. (대신에, 이중 등호는 기준선이고 삼중 등호는 향상판이라고 하는 이도 있습니다, 두 피연산자가 같은 형이길 요구하고 그래서 별도 제약을 추가하기에. 어느 게 더 이해하기 좋은 모델인지는 당신이 상태(things)를 보기 위해 선택한 방법에 달렸습니다.)

However, this way of thinking about the built-in sameness operators is not a model that can be stretched to allow a place for ES2015's {{jsxref("Object.is")}} on this "spectrum". {{jsxref("Object.is")}} isn't simply "looser" than double equals or "stricter" than triple equals, nor does it fit somewhere in between (i.e., being both stricter than double equals, but looser than triple equals). We can see from the sameness comparisons table below that this is due to the way that {{jsxref("Object.is")}} handles {{jsxref("NaN")}}. Notice that if `Object.is(NaN, NaN)`evaluated to `false`, we *could* say that it fits on the loose/strict spectrum as an even stricter form of triple equals, one that distinguishes between `-0` and `+0`. The {{jsxref("NaN")}} handling means this is untrue, however. Unfortunately, {{jsxref("Object.is")}} simply has to be thought of in terms of its specific characteristics, rather than its looseness or strictness with regard to the equality operators.



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

## {{jsxref("Object.is")}} 대신 삼중 등호를 사용하는 경우

In general, the only time {{jsxref("Object.is")}}'s special behavior towards zeros is likely to be of interest is in the pursuit of certain meta-programming schemes, especially regarding property descriptors, when it is desirable for your work to mirror some of the characteristics of {{jsxref("Object.defineProperty")}}. If your use case does not require this, it is suggested to avoid {{jsxref("Object.is")}} and use [`===`](/ko/docs/Web/JavaScript/Reference/Operators) instead. Even if your requirements involve having comparisons between two {{jsxref("NaN")}} values evaluate to `true`, generally it is easier to special-case the {{jsxref("NaN")}} checks (using the {{jsxref("isNaN")}} method available from previous versions of ECMAScript) than it is to work out how surrounding computations might affect the sign of any zeros you encounter in your comparison.

여기 당신 코드에서 그 자체를 드러내기 위해 `-0`과 `+0` 사이의 구별을 일으킬 수도 있는 철저하지 않은(in-exhaustive) 내장 메서드 및 연산자 목록이 있습니다:

- [-(unary negation)](/ko/docs/Web/JavaScript/Reference/Operators#-_.28unary_negation.29)
  - ```js
    let stoppingForce = obj.mass * -obj.velocity;
    ```
    If `obj.velocity` is `0` (or computes to `0`), a `-0` is introduced at that place and propagates out into `stoppingForce`.
- {{jsxref("Math.atan2")}}, {{jsxref("Math.ceil")}}, {{jsxref("Math.pow")}}, {{jsxref("Math.round")}}
  - : In some cases,it's possible for a `-0` to be introduced into an expression as a return value of these methods even when no `-0` exists as one of the parameters. For example, using {{jsxref("Math.pow")}} to raise {{jsxref("Infinity", "-Infinity")}} to the power of any negative, odd exponent evaluates to `-0`. Refer to the documentation for the individual methods.
- {{jsxref("Math.floor")}}, {{jsxref("Math.max")}}, {{jsxref("Math.min")}}, {{jsxref("Math.sin")}}, {{jsxref("Math.sqrt")}}, {{jsxref("Math.tan")}}
  - : It's possible to get a `-0` return value out of these methods in some cases where a `-0` exists as one of the parameters. E.g., `Math.min(-0, +0)` evaluates to `-0`. Refer to the documentation for the individual methods.
- [`~`](/en-US/docs/Web/JavaScript/Reference/Operators), [`<<`](/en-US/docs/Web/JavaScript/Reference/Operators), [`>>`](/en-US/docs/Web/JavaScript/Reference/Operators)
  - : Each of these operators uses the ToInt32 algorithm internally. Since there is only one representation for 0 in the internal 32-bit integer type, `-0` will not survive a round trip after an inverse operation. E.g., both `Object.is(~~(-0), -0)` and `Object.is(-0 << 2 >> 2, -0)` evaluate to `false`.

Relying on {{jsxref("Object.is")}} when the signedness of zeros is not taken into account can be hazardous. Of course, when the intent is to distinguish between `-0` and `+0`, it does exactly what's desired.

## Caveat: Object.is and NaN

The {{jsxref("Object.is")}} specification treats all instances of {{jsxref("NaN")}} as the same object. However, since [typed arrays](/ko/docs/Web/JavaScript/Typed_arrays) are available, we can have distinct instances, which don't behave identically in all contexts. For example:

```js
var f2b = x => new Uint8Array(new Float64Array([x]).buffer);
var b2f = x => new Float64Array(x.buffer)[0];
var n = f2b(NaN);
n[0] = 1;
var nan2 = b2f(n);
nan2;
// > NaN
Object.is(nan2, NaN);
// > true
f2b(NaN);
// > Uint8Array(8) [0, 0, 0, 0, 0, 0, 248,127)
f2b(nan2);
// > Uint8Array(8) [1, 0, 0, 0, 0, 0, 248,127)
```

## 참조

- [JS 비교 표](http://dorey.github.io/JavaScript-Equality-Table/)
