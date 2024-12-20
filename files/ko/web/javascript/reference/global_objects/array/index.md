---
title: Array
slug: Web/JavaScript/Reference/Global_Objects/Array
l10n:
  sourceCommit: 4c26e8a3fb50d06963b06017f51ce19364350564
---

{{JSRef}}

다른 프로그래밍 언어의 배열과 마찬가지로, **`Array`** 객체는 [여러 항목의 컬렉션을 단일 변수 이름 아래 저장할 수 있고](/ko/docs/Learn/JavaScript/First_steps/Arrays), [일반적인 배열 연산을 수행하기](#예제) 위한 멤버가 있습니다.

## 설명

JavaScript에서 배열은 [원시 값](/ko/docs/Glossary/Primitive)이 아니라 다음과 같은 핵심적인 특성을 가진 `Array` 객체입니다.

- **JavaScript 배열은 크기를 조정이 가능하고, 다양한 [데이터 형식](/ko/docs/Web/JavaScript/Data_structures)을 혼합하여 저장할 수 있습니다**. (이러한 특성이 바람직하지 않은 경우라면, [형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays)을 대신 사용하세요.)
- **JavaScript 배열은 연관 배열이 아니므로** 임의의 문자열을 인덱스로 사용하여 배열 요소에 접근할 수 없습니다. 하지만, 음수가 아닌 정수(또는 해당 수의 문자열 형식)를 인덱스로 사용하여 접근해야 합니다.
- <strong>JavaScript 배열은 [0 인덱스](https://en.wikipedia.org/wiki/Zero-based_numbering)</strong>입니다. 배열의 첫 번째 요소는 인덱스 `0`, 두 번째 요소는 인덱스 `1`, 마지막 요소는 배열의 {{jsxref("Array/length", "length")}} 속성 값에서 1을 뺀 값에 위치합니다.
- **JavaScript [배열 복사 연산](#배열_복사하기)은 얕은 복사본을 생성합니다**. (모든 JavaScript 객체의 모든 표준 내장 복사 연산은 [깊은 복사본](/ko/docs/Glossary/Deep_copy)이 아닌 얕은 복사본을 생성합니다).

### 배열 인덱스

`Array` 객체는 ([연관 배열](https://en.wikipedia.org/wiki/Associative_array)에서처럼) 임의의 문자열을 요소 인덱스로 사용할 수 없으며 음수가 아닌 정수(또는 해당 수의 문자열 형식)를 사용해야 합니다. 정수가 아닌 것을 통해 배열의 요소를 설정하거나 접근하려고 하면, 배열 목록 자체에서 요소를 설정하거나 검색하는 것이 아니라 해당 배열의 [객체 속성 컬렉션](/ko/docs/Web/JavaScript/Data_structures#속성)과 연결된 변수를 설정하거나 접근하게 됩니다. 배열의 객체 속성과 배열의 요소 목록은 별개이며, 배열의 [순회 및 수정 연산](/ko/docs/Web/JavaScript/Guide/Indexed_collections#배열_메서드)은 이렇게 이름 붙여진 속성에 적용할 수 없습니다.

배열 요소는 `toString`이 속성인 것과 같은 방식으로 객체 속성입니다(하지만, 정확히 말하자면 `toString()`은 메서드입니다). 그럼에도 불구하고 다음과 같이 배열의 요소에 접근하려고 하면 속성 이름이 유효하지 않기 때문에 구문 오류가 발생합니다.

```js-nolint example-bad
arr.0; // 구문 오류
```

JavaScript 구문에서 숫자로 시작하는 속성은 [점 표기법](/ko/docs/Web/JavaScript/Reference/Operators/Property_accessors) 대신 [대괄호 표기법](/ko/docs/Web/JavaScript/Guide/Working_with_objects#객체와_속성)을 사용하여 접근해야 합니다. 배열 인덱스를 따옴표로 묶을 수도 있지만 (예: `years[2]` 대신 `years['2']`), 일반적으로는 필요하지 않습니다.

`years[2]`의 `2`는 JavaScript 엔진에 의해 암시적 `toString` 변환을 통해 문자열로 강제 변환됩니다. 결과적으로 `'2'`와 `'02'`는 `years` 객체에서 서로 다른 두 개의 슬롯을 참조하게 되며, 다음 예제는 `true` 일 수 있습니다.

```js
console.log(years["2"] !== years["02"]);
```

`years['2']`만이 실제 배열 인덱스입니다. `years['02']`는 배열 순회에서 방문되지 않는 임의의 문자열 속성입니다.

### length와 숫자 속성의 관계

JavaScript 배열의 {{jsxref("Array/length", "length")}} 속성과 숫자 속성은 연결되어 있습니다.

내장 배열 메서드 중 일부(예: {{jsxref("Array/join", "join()")}}, {{jsxref("Array/slice", "slice()")}}, {{jsxref("Array/indexOf", "indexOf()")}} 등)는 호출 시 배열의 {{jsxref("Array/length", "length")}} 속성 값을 고려합니다.

다른 메서드(예: {{jsxref("Array/push", "push()")}}, {{jsxref("Array/splice", "splice()")}} 등)도 배열의 {{jsxref("Array/length", "length")}} 속성을 갱신합니다.

```js
const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
```

속성이 유효한 배열 인덱스이고 해당 인덱스가 배열의 현재 범위를 벗어날 때 JavaScript 배열에 속성을 설정하면, 엔진은 배열의 {{jsxref("Array/length", "length")}} 속성을 적절히 갱신합니다.

```js
fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
```

{{jsxref("Array/length", "length")}}를 늘리면 새 요소를 만들지 않고 빈 슬롯을 추가하여 배열을 확장할 수 있습니다. `undefined`가 아닙니다.

```js
fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined
```

그러나 {{jsxref("Array/length", "length")}} 속성을 줄이면 요소가 삭제됩니다.

```js
fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
```

{{jsxref("Array/length", "length")}} 페이지에서 더 자세히 설명하겠습니다.

### 배열 메서드와 빈 슬롯

[희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)의 빈 슬롯은 배열 메서드 간에 일관성 없이 동작합니다. 일반적으로 오래된 메서드는 빈 슬롯을 건너뛰는 반면, 최신 메서드는 빈 슬롯을 `undefined`로 처리합니다.

여러 요소를 순회하는 메서드 중, 다음은 인덱스에 접근하기 전에 [`in`](/ko/docs/Web/JavaScript/Reference/Operators/in) 확인을 수행하여 빈 슬롯을 `undefined`로 취급하지 않습니다.

- {{jsxref("Array/concat", "concat()")}}
- {{jsxref("Array/copyWithin", "copyWithin()")}}
- {{jsxref("Array/every", "every()")}}
- {{jsxref("Array/filter", "filter()")}}
- {{jsxref("Array/flat", "flat()")}}
- {{jsxref("Array/flatMap", "flatMap()")}}
- {{jsxref("Array/forEach", "forEach()")}}
- {{jsxref("Array/indexOf", "indexOf()")}}
- {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}
- {{jsxref("Array/map", "map()")}}
- {{jsxref("Array/reduce", "reduce()")}}
- {{jsxref("Array/reduceRight", "reduceRight()")}}
- {{jsxref("Array/reverse", "reverse()")}}
- {{jsxref("Array/slice", "slice()")}}
- {{jsxref("Array/some", "some()")}}
- {{jsxref("Array/sort", "sort()")}}
- {{jsxref("Array/splice", "splice()")}}

빈 슬롯을 정확히 어떻게 처리하는지는 각 메서드의 페이지를 참조하세요.

아래 메서드는 빈 슬롯을 `undefined`로 취급합니다.

- {{jsxref("Array/entries", "entries()")}}
- {{jsxref("Array/fill", "fill()")}}
- {{jsxref("Array/find", "find()")}}
- {{jsxref("Array/findIndex", "findIndex()")}}
- {{jsxref("Array/findLast", "findLast()")}}
- {{jsxref("Array/findLastIndex", "findLastIndex()")}}
- {{jsxref("Array/includes", "includes()")}}
- {{jsxref("Array/join", "join()")}}
- {{jsxref("Array/keys", "keys()")}}
- {{jsxref("Array/toLocaleString", "toLocaleString()")}}
- {{jsxref("Array/values", "values()")}}

### 복사 메서드와 변경 메서드(mutating method)

일부 메서드는 메서드가 호출된 기존 배열을 변경하지 않는 대신, 새 배열을 반환합니다. 이러한 메서드는 먼저 새 배열을 구성한 다음 요소를 채우는 방식으로 수행됩니다. 복사는 항상 [얕게](/ko/docs/Glossary/Shallow_copy) 이루어지며, 메서드는 처음에 생성된 배열 이외에는 아무것도 복사하지 않습니다. 원래 배열의 요소는 다음과 같이 새 배열에 복사됩니다

- 객체: 객체 참조가 새 배열로 복사됩니다. 원래 배열과 새 배열 모두 동일한 객체를 참조합니다. 즉, 참조된 객체가 수정되면 변경 사항이 새 배열과 원래 배열 모두에 표시됩니다.
- 문자열, 숫자, 불리언과 같은 원시 유형({{jsxref("Global_Objects/String", "String")}}, {{jsxref("Global_Objects/Number", "Number")}}, {{jsxref("Global_Objects/Boolean", "Boolean")}} 객체 아님): 해당 값이 새 배열에 복사됩니다.

어떤 메서드는 메서드가 호출된 배열을 변경하며, 이 경우 반환값은 메서드에 따라 다릅니다. 때로는 같은 배열에 대한 참조를 반환하고, 때로는 새 배열의 길이를 반환합니다.

다음 메서드는 [`this.constructor[Symbol.species]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species)에 접근하여 사용할 생성자를 결정하고 새 배열을 생성합니다.

- {{jsxref("Array/concat", "concat()")}}
- {{jsxref("Array/filter", "filter()")}}
- {{jsxref("Array/flat", "flat()")}}
- {{jsxref("Array/flatMap", "flatMap()")}}
- {{jsxref("Array/map", "map()")}}
- {{jsxref("Array/slice", "slice()")}}
- {{jsxref("Array/splice", "splice()")}} (반환되는 제거된 요소의 배열을 구성하기 위해)

다음 메서드는 항상 `Array` 기본 생성자를 사용하여 새 배열을 생성합니다.

- {{jsxref("Array/toReversed", "toReversed()")}}
- {{jsxref("Array/toSorted", "toSorted()")}}
- {{jsxref("Array/toSpliced", "toSpliced()")}}
- {{jsxref("Array/with", "with()")}}

아래 표에는 원래 배열을 변경하는 메서드와 그에 상응하는 무변경 대체 메서드가 나열되어 있습니다.

| 변경 메서드                                    | 무변경 메서드                                            |
| ---------------------------------------------- | -------------------------------------------------------- |
| {{jsxref("Array/copyWithin", "copyWithin()")}} | 단일 메서드 대안 없음                                    |
| {{jsxref("Array/fill", "fill()")}}             | 단일 메서드 대안 없음                                    |
| {{jsxref("Array/pop", "pop()")}}               | {{jsxref("Array/slice", "slice(0, -1)")}}                |
| {{jsxref("Array/push", "push(v1, v2)")}}       | {{jsxref("Array/concat", "concat([v1, v2])")}}           |
| {{jsxref("Array/reverse", "reverse()")}}       | {{jsxref("Array/toReversed", "toReversed()")}}           |
| {{jsxref("Array/shift", "shift()")}}           | {{jsxref("Array/slice", "slice(1)")}}                    |
| {{jsxref("Array/sort", "sort()")}}             | {{jsxref("Array/toSorted", "toSorted()")}}               |
| {{jsxref("Array/splice", "splice()")}}         | {{jsxref("Array/toSpliced", "toSpliced()")}}             |
| {{jsxref("Array/unshift", "unshift(v1, v2)")}} | {{jsxref("Array/toSpliced", "toSpliced(0, 0, v1, v2)")}} |

변경 메서드를 무변경 대체 메서드로 변경하는 쉬운 방법은 [전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax) 또는 {{jsxref("Array/slice", "slice()")}}를 사용하여 먼저 복사본을 만드는 것입니다.

```js-nolint
arr.copyWithin(0, 1, 2); // arr을 변경함
const arr2 = arr.slice().copyWithin(0, 1, 2); // arr을 변경하지 않음
const arr3 = [...arr].copyWithin(0, 1, 2); // arr을 변경하지 않음
```

### 순회 메서드

많은 배열 메서드는 콜백 함수를 인수로 받습니다. 콜백 함수는 배열의 각 요소에 대해 순차적으로 최대 한 번만 호출되며, 콜백 함수의 반환값은 메서드의 반환값을 결정하는 데 사용됩니다. 이들은 모두 같은 모습을 공유합니다.

```js-nolint
method(callbackFn, thisArg)
```

여기서 `callbackFn`은 세 개의 인수를 받습니다.

- `element`
  - : 배열에서 현재 처리 중인 요소입니다.
- `index`
  - : 배열에서 현재 처리 중인 요소의 인덱스입니다.
- `array`
  - : 메서드가 호출된 배열입니다.

`callbackFn`이 반환할 것으로 예상되는 것은 호출된 배열 메서드에 따라 다릅니다.

`callbackFn`을 호출할 때 `thisArg` 인자(기본값은 `undefined`)는 `this` 값이 사용됩니다. `callbackFn`이 최종적으로 관찰할 수 있는 `this` 값은 [일반적인 규칙](/ko/docs/Web/JavaScript/Reference/Operators/this)에 따라 결정됩니다. `callbackFn`이 [비엄격](/ko/docs/Web/JavaScript/Reference/Strict_mode#this_대체_없음)이라면, 원시 `this` 값은 객체로 래핑되고, `undefined`/`null`은 [`globalThis`](/ko/docs/Web/JavaScript/Reference/Global_Objects/globalThis)로 대체됩니다. [화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)에는 자체 `this` {{glossary("binding", "바인딩")}}이 없으므로 `thisArg` 인자는 화살표 함수로 정의된 `callbackFn`과 관련이 없습니다.

모든 순회 메서드는 [복사](#복사_메서드와_변경_메서드)와 [범용](#범용_배열_메서드) 메서드 이지만, [빈 슬롯](#배열_메서드와_빈_슬롯)에서는 다르게 동작합니다.

다음 메서드는 순회 메서드입니다.

- {{jsxref("Array/every", "every()")}}
- {{jsxref("Array/filter", "filter()")}}
- {{jsxref("Array/find", "find()")}}
- {{jsxref("Array/findIndex", "findIndex()")}}
- {{jsxref("Array/findLast", "findLast()")}}
- {{jsxref("Array/findLastIndex", "findLastIndex()")}}
- {{jsxref("Array/flatMap", "flatMap()")}}
- {{jsxref("Array/forEach", "forEach()")}}
- {{jsxref("Array/map", "map()")}}
- {{jsxref("Array/some", "some()")}}

특히, {{jsxref("Array/every", "every()")}}, {{jsxref("Array/find", "find()")}}, {{jsxref("Array/findIndex", "findIndex()")}}, {{jsxref("Array/findLast", "findLast()")}}, {{jsxref("Array/findLastIndex", "findLastIndex()")}}, {{jsxref("Array/some", "some()")}}는 모든 요소에 대해 항상 `callbackFn`을 호출하는 것이 아니라, 반환 값이 결정되는 즉시 순회를 중지합니다.

콜백 함수를 받아 배열의 각 요소에 대해 최대 한 번만 실행하는 다른 두 가지 메서드가 있지만, 일반적인 순회 메서드와는 약간 다른 모습을 가집니다(예: `thisArg`를 허용하지 않음).

- {{jsxref("Array/reduce", "reduce()")}}
- {{jsxref("Array/reduceRight", "reduceRight()")}}

{{jsxref("Array/sort", "sort()")}} 메서드도 콜백 함수를 받지만, 순회 메서드는 아닙니다. 이 메서드는 배열을 제자리에서 변경하고, `thisArg`를 허용하지 않으며, 한 인덱스에서 콜백을 여러 번 호출할 수 있습니다.

### 범용 배열 메서드

배열 메서드는 항상 범용적이고, 이는 배열 객체의 내부 데이터에 접근하지 않습니다. `length` 속성과 인덱스된 요소를 통해서만 배열 요소에 접근합니다. 즉, 유사 배열 객체에서도 이 메서드를 호출할 수 있습니다.

```js
const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b'
```

#### length 속성 일반화

`length` 속성은 [정수로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#정수_변환)된 다음 0에서 2<sup>53</sup> - 1 사이의 범위로 고정됩니다. `NaN`은 `0`이 되므로, `length`가 없거나 `undefined`인 경우에도 `0` 값이 있는 것처럼 동작합니다.

이 언어는 `length`를 [안전하지 않은 정수](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)로 설정하지 못하도록 합니다. 모든 내장 메서드는 `length`가 2<sup>53</sup> - 1보다 큰 숫자로 설정될 때 {{jsxref("TypeError")}}를 발생시킵니다. 그러나 배열의 {{jsxref("Array/length", "length")}} 속성이 2<sup>32</sup> - 1보다 큰 값으로 설정되면 오류가 발생하기 때문에 배열이 아닌 객체에서 메서드를 호출하지 않는 한 일반적으로 안전한 정수 임곗값에 도달하지 못합니다.

```js
Array.prototype.flat.call({}); // []
```

일부 배열 메서드는 배열 객체의 `length` 속성을 설정합니다. 이러한 메서드는 항상 일반화한 후 값을 설정하므로 `length`는 항상 정수로 끝납니다.

```js
const a = { length: 0.7 };
Array.prototype.push.call(a);
console.log(a.length); // 0
```

#### 유사 배열 객체

[유사 배열 객체](/ko/docs/Web/JavaScript/Guide/Indexed_collections#유사_배열_객체로_작업하기)라는 용어는 위에서 설명한 `length` 변환 프로세스 중에 오류가 발생하지 않는 모든 객체를 의미합니다. 실제로 이러한 객체는 정말 `length` 속성을 가지며, `0`에서 `length - 1` 범위의 인덱스 요소를 가질 것으로 예상됩니다. (모든 인덱스가 없는 경우, 기능적으로 [희소 배열](#배열_메서드와_빈_슬롯)과 동일합니다.) 배열 메서드가 유사 배열 객체에서 작동할 때 `0`보다 작거나 `length - 1`보다 큰 정수의 인덱스는 무시됩니다.

많은 DOM 객체는 유사 배열입니다(예: [`NodeList`](/ko/docs/Web/API/NodeList)와 [`HTMLCollection`](/ko/docs/Web/API/HTMLCollection)). [`arguments`](/ko/docs/Web/JavaScript/Reference/Functions/arguments) 객체도 유사 배열입니다. 유사 배열에 배열 메서드가 없더라도 배열 메서드를 호출할 수 있습니다.

```js
function f() {
  console.log(Array.prototype.join.call(arguments, "+"));
}

f("a", "b"); // 'a+b'
```

## 생성자

- {{jsxref("Array/Array", "Array()")}}
  - : 새 `Array` 객체를 생성합니다.

## 정적 속성

- {{jsxref("Array/@@species", "Array[@@species]")}}
  - : `Array` 생성자를 반환합니다.

## 정적 메서드

- {{jsxref("Array.from()")}}
  - : 순회 가능 또는 유사 배열 객체에서 새 `Array`인스턴스를 생성합니다.
- {{jsxref("Array.fromAsync()")}}
  - : 비동기 순회 가능, 순회 가능, 또는 유사 배열 객체에서 새 `Array` 인스턴스를 생성합니다.
- {{jsxref("Array.isArray()")}}
  - : 인자가 배열이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.
- {{jsxref("Array.of()")}}
  - : 인자의 개수나 유형에 관계없이 가변적인 수의 인자를 가진 새 `Array` 인스턴스를 생성합니다.

## 인스턴스 속성

아래 속성은 `Array.prototype`에 정의되며 모든 `Array` 인스턴스에서 공유됩니다.

- {{jsxref("Object/constructor", "Array.prototype.constructor")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. `Array` 인스턴스의 경우, 초기 값은 {{jsxref("Array/Array", "Array")}} 생성자입니다.
- {{jsxref("Array/@@unscopables", "Array.prototype[@@unscopables]")}}
  - : ES2015 버전 이전의 ECMAScript 표준에 포함되지 않았으며 [`with`](/ko/docs/Web/JavaScript/Reference/Statements/with) 문 바인딩 목적으로 무시되는 속성 이름을 포함합니다.

아래 속성은 각 `Array` 인스턴스의 고유 속성입니다.

- {{jsxref("Array/length", "length")}}
  - : 배열 요소의 개수를 반영합니다.

## 인스턴스 메서드

- {{jsxref("Array.prototype.at()")}}
  - : 주어진 인덱스에 있는 배열의 항목을 반환합니다. 마지막 항목부터 셀 수 있는 음의 정수를 허용합니다.
- {{jsxref("Array.prototype.concat()")}}
  - : 다른 배열 및/또는 값과 결합된 호출 배열인 새 배열을 반환합니다.
- {{jsxref("Array.prototype.copyWithin()")}}
  - : 배열 내의 배열 요소 시퀀스를 복사합니다.
- {{jsxref("Array.prototype.entries()")}}
  - : 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새 [배열 반복자](/ko/docs/Web/JavaScript/Guide/Iterators_and_generators) 객체를 반환합니다.
- {{jsxref("Array.prototype.every()")}}
  - : 호출 배열의 모든 요소가 테스트 함수를 만족하면 `true`를 반환합니다.
- {{jsxref("Array.prototype.fill()")}}
  - : 시작 인덱스부터 끝 인덱스까지 배열의 모든 요소를 고정된 값으로 채웁니다.
- {{jsxref("Array.prototype.filter()")}}
  - : 제공된 필터링 함수가 `true`를 반환하는 호출 배열의 모든 요소를 포함하는 새 배열을 반환합니다.
- {{jsxref("Array.prototype.find()")}}
  - : 제공된 테스트 함수를 만족하는 배열의 첫 번째 요소의 값을 반환하고, 적절한 요소를 찾을 수 없으면 `undefined`를 반환합니다.
- {{jsxref("Array.prototype.findIndex()")}}
  - : 제공된 테스트 함수를 만족하는 배열의 첫 번째 요소의 인덱스를 반환하고, 적절한 요소를 찾을 수 없으면 `-1`을 반환합니다.
- {{jsxref("Array.prototype.findLast()")}}
  - : 제공된 테스트 함수를 만족하는 배열의 마지막 요소의 값을 반환하고, 적절한 요소를 찾을 수 없으면 `undefined`를 반환합니다.
- {{jsxref("Array.prototype.findLastIndex()")}}
  - : 제공된 테스트 함수를 만족하는 배열의 마지막 요소의 인덱스를 반환하고, 적절한 요소를 찾을 수 없는 경우 `-1`을 반환합니다.
- {{jsxref("Array.prototype.flat()")}}
  - : 지정된 깊이까지 재귀적으로 연결된 모든 하위 배열 요소가 포함된 새 배열을 반환합니다.
- {{jsxref("Array.prototype.flatMap()")}}
  - : 호출 배열의 각 요소에 지정된 콜백 함수를 적용한 다음 결과를 한 단계씩 평탄화하여 만들어진 새 배열을 반환합니다.
- {{jsxref("Array.prototype.forEach()")}}
  - : 호출 배열의 각 요소로 함수를 호출합니다.
- {{jsxref("Array.prototype.includes()")}}
  - : 호출하는 배열에 값이 포함되어 있는지 여부를 판단하여 적절하게 `true`나`false`를 반환합니다.
- {{jsxref("Array.prototype.indexOf()")}}
  - : 호출 배열에서 지정된 요소를 찾을 수 있는 첫 번째(최소) 인덱스를 반환합니다.
- {{jsxref("Array.prototype.join()")}}
  - : 배열의 모든 요소를 문자열로 결합합니다.
- {{jsxref("Array.prototype.keys()")}}
  - : 호출 배열의 각 인덱스에 대한 키를 포함하는 새 [배열 반복자](/ko/docs/Web/JavaScript/Guide/Iterators_and_generators)를 반환합니다.
- {{jsxref("Array.prototype.lastIndexOf()")}}
  - : 호출 배열에서 지정된 요소를 찾을 수 있는 마지막(가장 큰) 인덱스를 반환하고, 찾을 수 없는 경우 `-1`을 반환합니다.
- {{jsxref("Array.prototype.map()")}}
  - : 호출 배열의 모든 요소에 함수를 호출한 결과를 포함하는 새 배열을 반환합니다.
- {{jsxref("Array.prototype.pop()")}}
  - : 배열에서 마지막 요소를 제거하고 해당 요소를 반환합니다.
- {{jsxref("Array.prototype.push()")}}
  - : 배열 끝에 하나 이상의 요소를 추가하고, 배열의 새 `length`를 반환합니다.
- {{jsxref("Array.prototype.reduce()")}}
  - : 배열의 각 요소(왼쪽에서 오른쪽으로)에 대해 사용자가 제공한 "리듀서" 콜백 함수를 실행하여 하나의 값으로 줄입니다.
- {{jsxref("Array.prototype.reduceRight()")}}
  - : 배열의 각 요소(오른쪽에서 왼쪽으로)에 대해 사용자가 제공한 "리듀서" 콜백 함수를 실행하여 하나의 값으로 줄입니다.
- {{jsxref("Array.prototype.reverse()")}}
  - : 배열 요소의 순서를 반대로 바꿉니다. (첫 번째가 마지막이 되고, 마지막이 첫 번째가 됩니다.)
- {{jsxref("Array.prototype.shift()")}}
  - : 배열에서 첫 번째 요소를 제거하고 해당 요소를 반환합니다.
- {{jsxref("Array.prototype.slice()")}}
  - : 호출 배열의 구획을 추출하고 새 배열을 반환합니다.
- {{jsxref("Array.prototype.some()")}}
  - : 호출 배열의 요소 중 하나 이상이 제공된 테스트 함수를 만족하면 `true`를 반환합니다.
- {{jsxref("Array.prototype.sort()")}}
  - : 배열의 요소를 제자리 정렬하고 배열을 반환합니다.
- {{jsxref("Array.prototype.splice()")}}
  - : 배열에서 요소를 추가 및/또는 제거합니다.
- {{jsxref("Array.prototype.toLocaleString()")}}
  - : 호출 배열과 그 요소를 나타내는 지역화된 문자열을 반환합니다. {{jsxref("Object.prototype.toLocaleString()")}} 메서드를 재정의합니다.
- {{jsxref("Array.prototype.toReversed()")}}
  - : 원래 배열을 수정하지 않고, 요소가 역순으로 배열된 새 배열을 반환합니다.
- {{jsxref("Array.prototype.toSorted()")}}
  - : 원래 배열을 수정하지 않고, 오름차순으로 정렬된 요소가 있는 새 배열을 반환합니다.
- {{jsxref("Array.prototype.toSpliced()")}}
  - : 원래 배열을 수정하지 않고, 지정된 인덱스에서 일부 요소를 제거 및/또는 교체한 새 배열을 반환합니다.
- {{jsxref("Array.prototype.toString()")}}
  - : 호출 배열과 그 요소를 나타내는 문자열을 반환합니다. {{jsxref("Object.prototype.toString()")}} 메서드를 재정의합니다.
- {{jsxref("Array.prototype.unshift()")}}
  - : 배열 앞쪽에 하나 이상의 요소를 추가하고, 배열의 새 `length`를 반환합니다.
- {{jsxref("Array.prototype.values()")}}
  - : 배열의 각 인덱스의 값을 포함하는 새 [배열 순회자](/ko/docs/Web/JavaScript/Guide/Iterators_and_generators) 객체를 반환합니다.
- {{jsxref("Array.prototype.with()")}}
  - : 원래 배열을 수정하지 않고, 지정된 인덱스의 요소를 지정된 값으로 바꾼 새 배열을 반환합니다.
- [`Array.prototype[@@iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)
  - : 기본적으로 [`values()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/values) 메서드의 별칭입니다.

## 예제

이 구획은 JavaScript에서 흔히 사용되는 배열 연산에 대한 몇 가지 예제를 제공합니다.

> [!NOTE]
> 배열의 기초가 아직 익숙하지 않다면, 먼저 [JavaScript 첫걸음: 배열](/ko/docs/Learn/JavaScript/First_steps/Arrays)을 읽어보세요. 이곳은 [배열이 무엇인지](/ko/docs/Learn/JavaScript/First_steps/Arrays#배열이란) 설명하고 일반적인 배열 연산에 대한 다른 예제를 포함하고 있습니다.

### 배열 만들기

이 예제는 먼저 [배열 리터럴 표기법](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Array#배열_맅터럴_표기법)을 사용하고, 다음은 [`Array()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Array) 생성자를 사용하고, 마지막으로 문자열에서 배열을 생성하는 [`String.prototype.split()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 사용하여 새 배열을 만드는 세 가지 방법을 보여 줍니다.

```js
// 배열 리터럴 표기법을 사용하여 'fruits' 배열을 만듭니다.
console.log(fruits.length);
// 2

// Array() 생성자를 사용하여 'fruits2' 배열을 만듭니다.
const fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length);
// 2

// String.prototype.split()을 사용하여 'fruits3' 배열을 만듭니다.
const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3.length);
// 2
```

### 배열에서 문자열 만들기

이 예제에서는 [`join()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 메서드를 사용하여 `fruits` 배열로 문자열을 만듭니다.

```js
const fruits = ["Apple", "Banana"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);
// "Apple, Banana"
```

### 배열 인덱스로 항목에 접근하기

이 예제는 배열에서 해당 위치의 인덱스 번호를 지정하여 `fruits` 배열 항목에 접근하는 방법을 보여 줍니다.

```js
const fruits = ["Apple", "Banana"];

// 배열의 첫 번째 요소의 인덱스는 항상 0입니다.
fruits[0]; // Apple

// 배열의 두 번째 요소의 인덱스는 항상 1입니다.
fruits[1]; // Banana

// 배열의 마지막 요소의 인덱스는 항상
// 배열의 길이보다 1 작습니다.
fruits[fruits.length - 1]; // Banana

// 배열의 길이볻 큰 인덱스를 사용하면
// undefined가 반환됩니다.
fruits[99]; // undefined
```

### 배열에서 항목의 인덱스 찾기

이 예제는 [`indexOf()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) 메서드를 사용하여 `fruits` 배열에서 문자열 `"Banana"`의 위치(인덱스)를 찾습니다.

```js
const fruits = ["Apple", "Banana"];
console.log(fruits.indexOf("Banana"));
// 1
```

### 배열에 특정 항목이 포함되어 있는지 확인

이 예제는 `fruits` 배열에 `"Banana"`와 `"Cherry"`가 포함되어 있는지 확인하는 두 가지 방법을 보여줍니다. 먼저 [`includes()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) 메서드를 사용한 다음, [`indexOf()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) 메서드를 사용하여 인덱스가 `-1`이 아닌지 테스트합니다.

```js
const fruits = ["Apple", "Banana"];

fruits.includes("Banana"); // true
fruits.includes("Cherry"); // false

// indexOf()가 -1을 반환하지 않으면 배열에 지정된 항목이 포함되어 있습니다.
fruits.indexOf("Banana") !== -1; // true
fruits.indexOf("Cherry") !== -1; // false
```

### 배열에 항목 추가하기

이 예제는 [`push()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 메서드를 사용하여 `fruits` 배열에 새 문자열을 추가합니다.

```js
const fruits = ["Apple", "Banana"];
const newLength = fruits.push("Orange");
console.log(fruits);
// ["Apple", "Banana", "Orange"]
console.log(newLength);
// 3
```

### 배열에서 마지막 항목 제거하기

이 예제는 [`pop()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) 메서드를 사용하여 `fruits` 배열에서 마지막 항목을 제거합니다.

```js
const fruits = ["Apple", "Banana", "Orange"];
const removedItem = fruits.pop();
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItem);
// Orange
```

> **참고:** `pop()`은 배열에서 마지막 항목을 제거하는 데에만 사용할 수 있습니다. 배열의 끝에서 여러 항목을 제거하려면 다음 예제를 참조하세요.

### 배열의 끝에서 여러 항목 제거하기

이 예제는 [`splice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 메서드를 사용하여 `fruits` 배열에서 마지막 3개 항목을 제거합니다.

```js
const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = -3;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]
```

### 배열을 처음 N개의 항목으로만 잘라내기

이 예제는 [`splice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 메서드를 사용하여 `fruits` 배열을 처음 두 항목으로만 잘라냅니다.

```js
const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = 2;
const removedItems = fruits.splice(start);
console.log(fruits);
// ["Apple", "Banana"]
console.log(removedItems);
// ["Strawberry", "Mango", "Cherry"]
```

### 배열에서 첫 번째 항목 제거하기

이 예제는 [`shift()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) 메서드를 사용하여 `fruits` 배열에서 첫 번째 항목을 제거합니다.

```js
const fruits = ["Apple", "Banana"];
const removedItem = fruits.shift();
console.log(fruits);
// ["Banana"]
console.log(removedItem);
// Apple
```

> **참고:** `shift()`는 배열에서 첫 번째 항목을 제거하는 데에만 사용할 수 있습니다. 배열의 시작 부분에서 여러 항목을 제거하려면 다음 예제를 참조하세요.

### 배열의 시작 부분에서 여러 항목 제거하기

이 예제는 [`splice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 메서드를 사용하여 `fruits` 배열에서 처음 3개의 항목을 제거합니다.

```js
const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
const start = 0;
const deleteCount = 3;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Banana", "Mango"]
console.log(removedItems);
// ["Apple", "Strawberry", "Cherry"]
```

### 배열에 새로운 첫 번째 항목 추가하기

이 예제는 [`unshift()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) 메서드를 사용하여 `fruits`배열의 인덱스 `0`에 새 항목을 추가하고 배열의 새 첫 번째 항목으로 만듭니다.

```js
const fruits = ["Banana", "Mango"];
const newLength = fruits.unshift("Strawberry");
console.log(fruits);
// ["Strawberry", "Banana", "Mango"]
console.log(newLength);
// 3
```

### 인덱스로 단일 항목 제거하기

이 예제는 [`splice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 메서드를 사용하여 `"Banana"`의 인덱스 위치를 지정하여 `fruits` 배열에서 문자열 `"Banana"`를 제거합니다.

```js
const fruits = ["Strawberry", "Banana", "Mango"];
const start = fruits.indexOf("Banana");
const deleteCount = 1;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Strawberry", "Mango"]
console.log(removedItems);
// ["Banana"]
```

### 인덱스로 여러 항목 제거하기

이 예제는 [`splice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 메서드를 사용하여 `fruits` 배열에서 문자열 `"Banana"`와 `"Strawberry"`를 제거하는데, `"Banana"`의 인덱스 위치와 제거할 총 항목 수를 지정하여 제거합니다.

```js
const fruits = ["Apple", "Banana", "Strawberry", "Mango"];
const start = 1;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount);
console.log(fruits);
// ["Apple", "Mango"]
console.log(removedItems);
// ["Banana", "Strawberry"]
```

### 배열의 여러 항목 바꾸기

이 예제는 [`splice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) 메서드를 사용하여 `fruits` 배열의 마지막 2개 항목을 새 항목으로 바꿉니다.

```js
const fruits = ["Apple", "Banana", "Strawberry"];
const start = -2;
const deleteCount = 2;
const removedItems = fruits.splice(start, deleteCount, "Mango", "Cherry");
console.log(fruits);
// ["Apple", "Mango", "Cherry"]
console.log(removedItems);
// ["Banana", "Strawberry"]
```

### 배열 순회하기

이 예제에서는 [`for...of`](/ko/docs/Web/JavaScript/Reference/Statements/for...of) 루프를 사용하여 `fruits` 배열을 순회하며 각 항목을 콘솔에 기록합니다.

```js
const fruits = ["Apple", "Mango", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Apple
// Mango
// Cherry
```

그러나 `for...of`는 배열을 순회하는 여러 가지 방법 중 하나일 뿐입니다. 더 많은 방법은 [루프와 순회](/ko/docs/Web/JavaScript/Guide/Loops_and_iteration)와, [`every()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`filter()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`flatMap()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap), [`map()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`reduce()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), [`reduceRight()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) 메서드에 대한 문서, 그리고 [`forEach()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 메서드를 사용하는 다음 예시를 참조하세요.

### 배열의 각 요소에 대해 함수 호출

이 예제는 [`forEach()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 메서드를 사용하여 `fruits` 배열의 각 요소에 대해 함수를 호출합니다. 이 함수는 각 항목이 항목의 인덱스 번호를 함께 콘솔에 기록합니다.

```js
const fruits = ["Apple", "Mango", "Cherry"];
fruits.forEach((item, index, array) => {
  console.log(item, index);
});
// Apple 0
// Mango 1
// Cherry 2
```

### 여러 배열 병합하기

이 예제는 [`concat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) 메서드를 사용하여 `fruits` 배열을 `moreFruits` 배열과 병합해 새로운 `combinedFruits` 배열을 생성합니다. `fruits`와 `moreFruits`는 변경되지 않습니다.

```js
const fruits = ["Apple", "Banana", "Strawberry"];
const moreFruits = ["Mango", "Cherry"];
const combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits);
// ["Apple", "Banana", "Strawberry", "Mango", "Cherry"]

// 'fruits' 배열은 변경되지 않습니다.
console.log(fruits);
// ["Apple", "Banana", "Strawberry"]

// 'moreFruits' 배열도 변경되지 않습니다.
console.log(moreFruits);
// ["Mango", "Cherry"]
```

### 배열 복사하기

이 예제는 기존 `fruits` 배열에서 새 배열을 만드는 세 가지 방법을 보여줍니다. 먼저 [전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)을 사용하고, [`from()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 메서드, 그리고 [`slice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) 메서드를 사용합니다.

```js
const fruits = ["Strawberry", "Mango"];

// 전개 구문을 사용하여 복사본을 만듭니다.
const fruitsCopy = [...fruits];
// ["Strawberry", "Mango"]

// from() 메서드를 사용하여 복사본을 만듭니다.
const fruitsCopy2 = Array.from(fruits);
// ["Strawberry", "Mango"]

// slice() 메서드를 사용하여 복사본을 만듭니다.
const fruitsCopy3 = fruits.slice();
// ["Strawberry", "Mango"]
```

모든 내장 배열 복사 연산([전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`Array.from()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from), [`Array.prototype.slice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.prototype.concat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat))은 [얕은 복사본](/ko/docs/Glossary/Shallow_copy)을 생성합니다. 대신 배열의 [깊은 복사본](/ko/docs/Glossary/Deep_copy)을 원한다면 {{jsxref("JSON.stringify()")}}를 사용하여 배열을 JSON 문자열로 변환한 다음, {{jsxref("JSON.parse()")}}를 사용하여 문자열을 원래 배열과 완전히 독립된 새 배열로 다시 변환할 수 있습니다.

```js
const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));
```

[`structuredClone()`](/ko/docs/Web/API/Window/structuredClone) 메서드를 사용하여 깊은 복사본을 만들 수도 있는데, 이 메서드는 소스의 [전송 가능한 객체](/ko/docs/Web/API/Web_Workers_API/Transferable_objects)를 단순히 복제하는 것이 아니라 새 복사본으로 전송할 수 있다는 장점이 있습니다.

마지막으로, 기존 배열을 새 변수에 할당해도 배열이나 그 요소의 복사본이 생성되지 않는다는 점을 이해하는 것이 중요합니다. 대신 새 변수는 기존 배열에 대한 참조 또는 별칭일 뿐이며, 기존 배열의 이름과 새 변수 이름은 완전히 동일한 객체에 대한 두 개의 이름일 뿐입니다(따라서 항상 [엄격하게 동일](/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness#를_사용하는_엄격한_동등)한 것으로 평가됩니다). 따라서 기존 배열의 값이나 새 변수의 값을 조금이라도 변경하면, 다른 변수도 변경됩니다.

```js
const fruits = ["Strawberry", "Mango"];
const fruitsAlias = fruits;
// 'fruits'와 'fruitsAlias'는 동일한 객체이며, 엄격하게 동일합니다.
fruits === fruitsAlias; // true
// 'fruits' 배열에 대한 모든 변경 사항은 'fruitsAlias'도 변경합니다.
fruits.unshift("Apple", "Banana");
console.log(fruits);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
console.log(fruitsAlias);
// ['Apple', 'Banana', 'Strawberry', 'Mango']
```

### 2차원 배열 만들기

다음 예제는 2차원 문자열 배열로 체스 판을 만듭니다. 첫 번째 이동은 `'p'`가 `board[6][4]`에서 `board[4][4]`로 복사되어 이루어집니다. 이전 위치 `[6][4]`는 빈칸이 됩니다.

```js
const board = [
  ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ["P", "P", "P", "P", "P", "P", "P", "P"],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " "],
  ["p", "p", "p", "p", "p", "p", "p", "p"],
  ["r", "n", "b", "q", "k", "b", "n", "r"],
];

console.log(`${board.join("\n")}\n\n`);

// 킹의 폰을 2칸 앞으로 이동
board[4][4] = board[6][4];
board[6][4] = " ";
console.log(board.join("\n"));
```

출력 결과입니다.

```plain
R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
 , , , , , , ,
p,p,p,p,p,p,p,p
r,n,b,q,k,b,n,r

R,N,B,Q,K,B,N,R
P,P,P,P,P,P,P,P
 , , , , , , ,
 , , , , , , ,
 , , , ,p, , ,
 , , , , , , ,
p,p,p,p, ,p,p,p
r,n,b,q,k,b,n,r
```

### 배열을 사용하여 값 집합을 표로 만들기

```js
const values = [];
for (let x = 0; x < 10; x++) {
  values.push([2 ** x, 2 * x ** 2]);
}
console.table(values);
```

출력 결과입니다.

```plain
// 첫 번째 열은 인덱스입니다.
0  1    0
1  2    2
2  4    8
3  8    18
4  16   32
5  32   50
6  64   72
7  128  98
8  256  128
9  512  162
```

### 일치 결과를 사용하여 배열 만들기

{{jsxref("RegExp")}}와 문자열 간의 일치 결과는 일치에 대한 정보를 제공하는 속성과 요소를 포함하는 JavaScript 배열을 생성할 수 있습니다. 이러한 배열은 {{jsxref("RegExp.prototype.exec()")}}와 {{jsxref("String.prototype.match()")}}에서 반환됩니다.

예를 들어 다음과 같습니다.

```js
// 하나의 d, 하나 이상의 b, 하나의 d를 일치시킵니다.
// 일치하는 b와 뒤따라오는 d를 기억합니다.
// 대소문자는 무시.

const myRe = /d(b+)(d)/i;
const execResult = myRe.exec("cdbBdbsbz");

console.log(execResult.input); // 'cdbBdbsbz'
console.log(execResult.index); // 1
console.log(execResult); // [ "dbBd", "bB", "d" ]
```

일치 결과에 대한 자세한 내용은 {{jsxref("RegExp.prototype.exec()")}}와 {{jsxref("String.prototype.match()")}} 페이지를 참조하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [인덱스된 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
