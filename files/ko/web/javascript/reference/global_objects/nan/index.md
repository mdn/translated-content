---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
---

{{jsSidebar("Objects")}}

전역 **`NaN`** 속성은 Not-A-Number(숫자가 아님)를 나타냅니다.

{{EmbedInteractiveExample("pages/js/globalprops-nan.html")}}

## 값

{{jsxref("Number.NaN")}}와 동일한 숫자 값입니다.

{{js_property_attributes(0,0,0)}}

## 설명

`NaN`은 전역 객체의 속성입니다. 즉 전역 범위의 변수입니다.

최신 브라우저에서 `NaN`은 설정 불가, 쓰기 불가 속성입니다. 그렇지 않다고 하더라도 덮어쓰는 건 피하는 게 좋습니다.

`NaN`을 반환하는 연산에는 다섯 가지 종류가 있습니다.

- 숫자로 변환 실패 (예시: `parseInt("blabla")`, `Number(undefined)`와 같은 명시적인 것 또는 `Math.abs(undefined)`와 같은 암시적인 것)
- 결과가 허수인 수학 계산식 (예시: `Math.sqrt(-1)`)
- 정의할 수 없는 계산식 (예시: `0 * Infinity`, `1 ** Infinity`, `Infinity / Infinity`, `Infinity - Infinity`)
- 피연산자가 `NaN`이거나 `NaN`으로 강제 변환되는 메서드 또는 표현식 (예시: `7 ** NaN`, `7 * "blabla"`) - 이것은 `NaN`이 전염성 있다는 것을 의미합니다.
- 유효하지 않은 값이 숫자로 표시되는 기타 경우 (예시: 잘못된 [날짜](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date) `new Date("blabla").getTime()`, `"".charCodeAt(1)`)

`NaN`과 `NaN`의 동작은 JavaScript에서 발명한 것이 아닙니다. 부동 소수점 산술의 의미(`NaN !== NaN` 포함)는 [IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format)에 의해 지정됩니다. `NaN`의 동작은 다음과 같습니다.

- `NaN`이 수학 연산에 포함된 경우 (그러나 [비트 연산](/ko/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators)는 아님) 결과도 일반적으로 `NaN` 입니다. (아래의 [counter-example](#silently_escaping_nan) 참조)
- `NaN`이 관계 비교(`>`, `<`, `>=`, `<=`)의 피연산자 중 하나인 경우 결과는 항상 `false`입니다.
- `NaN`은 ( [`==`](/ko/docs/Web/JavaScript/Reference/Operators/Equality), [`!=`](/ko/docs/Web/JavaScript/Reference/Operators/Inequality), [`===`](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality) 및 [`!==`](/ko/docs/Web/JavaScript/Reference/Operators/Strict_inequality) 를 통해) 다른 `NaN` 값을 포함하여 다른 값과 같지 않은 것으로 비교됩니다.

`NaN`은 JavaScript의 [falsy](/ko/docs/Glossary/Falsy) 값 중 하나이기도 합니다.

## 예제

### `NaN` 판별

값이 `NaN`인지 확인하려면, {{jsxref("Number.isNaN()")}} 또는 {{jsxref("Global_Objects/isNaN", "isNaN()")}}를 사용하여 값이 `NaN`인지 여부를 확인 할 수 있습니다. 또는 `NaN`은 자신과 같지 않다고 비교되는 유일한 값이므로 `x !== x`와 같은 자체 비교를 수행할 수 있습니다.

```js
NaN === NaN; // false
Number.NaN === NaN; // false
isNaN(NaN); // true
isNaN(Number.NaN); // true

function valueIsNaN(v) {
  return v !== v;
}
valueIsNaN(1); // false
valueIsNaN(NaN); // true
valueIsNaN(Number.NaN); // true
```

그러나 `isNaN()`과 `Number.isNaN()`의 차이를 유의해야 합니다. `isNaN`은 현재 값이 `NaN`이거나, 숫자로 변환했을 때 `NaN`이 되면 참을 반환하지만, `Number.isNaN`은 현재 값이 `NaN`이어야만 참을 반환합니다.

```js
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
```

같은 이유로 BigInt 값을 사용하면 `Number.isNaN()`이 아닌 `isNaN()`에서 오류가 발생합니다.

```js
isNaN(1n); // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false
```

또한 일부 배열 메서드는 `NaN`을 찾을 수 없는 반면에 다른 배열 메서드들은 찾을 수 있습니다. 즉, ({{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}})는 `NaN`을 찾을 수 없지만, {{jsxref("Array/includes", "includes()")}}는 값을 찾을 수 있습니다.

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// 적절하게 정의된 조건자를 허용하는 메서드는 항상 NaN을 찾을 수 있습니다.
arr.findIndex((n) => Number.isNaN(n)); // 2
```

`NaN`과 그 비교에 대한 자세한 내용은 [평등 비교 및 동일성](/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness)를 참조.

### 눈에 띄게 구별되는 NaN 값

`NaN`이 자신과 동등하지 않은 데는 동기가 있습니다. [IEEE 754 인코딩](https://en.wikipedia.org/wiki/NaN#Floating_point)에서 지수 `0x7ff`와 0이 아닌 가수부가 있는 부동 소수점 숫자는 `NaN`이기 때문에 서로 다른 이진 표현을 가진 두 개의 부동 소수점 숫자를 생성할 수 있지만 둘 다 `NaN`입니다. JavaScript에서 [typed arrays](/ko/docs/Web/JavaScript/Typed_arrays)를 사용하여 비트 수준 조작을 수행할 수 있습니다.

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// NaN의 byte 표현을 가져옵니다.
const n = f2b(NaN);
// 부호 비트이고 NaN에 중요하지 않은 첫 번째 비트를 변경합니다.
n[0] = 1;
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]
```

### 조용히 NaN 탈출

`NaN`은 수학적 연산을 통해 전파되므로 일반적으로 오류 조건을 감지하기 위해 계산이 끝날 때 한 번 `NaN`을 테스트하는 것으로 충분합니다. `NaN`이 자동으로 이스케이프되는 유일한 경우는 지수가 `0`인 [거듭제곱](/ko/docs/Web/JavaScript/Reference/Operators/Exponentiation)을 사용할 때입니다. 그러면 기본값을 검사하지 않고 즉시 `1`이 반환됩니다.

```js
NaN ** 0 === 1; // true
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("isNaN", "isNaN()")}}
