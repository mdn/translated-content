---
title: JavaScript의 타입과 자료구조
slug: Web/JavaScript/Data_structures
l10n:
  sourceCommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

{{jsSidebar("More")}}

모든 프로그래밍 언어에는 내장된 자료구조가 존재하지만, 보통 그 내용은 언어마다 다릅니다. 이 글에서는 JavaScript에서 사용할 수 있는 내장 자료구조와 그 속성에 대해 알아보겠습니다. 그러면 이 자료구조들을 다른 자료구조 개발에 사용할 수 있을 것입니다.

[언어 개요](/ko/docs/Web/JavaScript/Language_overview)는 일반적인 데이터 타입에 대한 유사한 정리된 내용을 제공하지만, 다른 언어와 더 많은 비교를 제공합니다.

## 동적 및 약타입

JavaScript는 [동적 타입](https://en.wikipedia.org/wiki/Type_system#DYNAMIC)이 있는 [동적](https://en.wikipedia.org/wiki/Dynamic_programming_language) 언어입니다. JavaScript의 변수는 어떤 특정 타입과 연결되지 않으며, 모든 타입의 값으로 할당 (및 재할당) 가능합니다.

```js
let foo = 42; // foo는 이제 숫자입니다
foo = "bar"; // foo는 이제 문자열입니다
foo = true; // foo는 이제 불리언입니다
```

JavaScript는 또한 [약타입](https://en.wikipedia.org/wiki/Strong_and_weak_typing) 언어이기도 합니다. 즉, 작업에 타입 오류가 발생하는 대신, 일치하지 않는 타입이 포함된 경우 암시적 타입 변환이 가능합니다.

```js
const foo = 42; // foo는 숫자입니다.
const result = foo + "1"; // JavaScript는 foo를 문자열로 강제 변환하므로, 다른 피연산자와 연결할 수 있습니다.
console.log(result); // 421
```

암시적 형변환은 매우 편리하지만, 개발자가 변환을 수행할 의도가 없거나, 다른 방향으로 변환하려는 경우(예: 숫자에서 문자열 대신, 문자열에서 숫자로 변환하는 것) 잠재적인 오류(footgun)가 될 수 있습니다.
[기호](#symbol_타입) 및 [BigInts](#bigint_타입)의 경우, JavaScript는 의도적으로 특정 암시적 타입 변환을 허용하지 않습니다.

## 원시 값(Primitive values)

[Object](#객체)를 제외한 모든 타입은 언어의 최하위 수준에서 직접 표현되는 [불변](/ko/docs/Glossary/Immutable) 값을 정의합니다. 이러한 타입의 값을 '원시 값'이라고 합니다.

[`null`](/ko/docs/Web/JavaScript/Reference/Operators/null)을 제외한 모든 기본 타입은 [`typeof`](/ko/docs/Web/JavaScript/Reference/Operators/typeof) 연산자로 테스트할 수 있습니다. `typeof null`은 `"object"`를 반환하므로 `=== null`을 사용하여 `null`을 테스트해야 합니다.

[`null`](/ko/docs/Web/JavaScript/Reference/Operators/null) 및 [`undefined`](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)를 제외한, 모든 원시 타입에는 원시 값으로 작업하는 데 유용한 메서드를 제공하는 해당 객체 래퍼 타입이 있습니다. 예를 들어, [`Number`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number) 객체는 [`toExponential()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential)와 같은 메서드를 제공합니다. 원시 값에서 속성에 접근하면, JavaScript는 값을 해당 래퍼 객체로 자동으로 감싸는 대신 객체의 속성에 접근합니다. 그러나 `null` 또는 `undefined`에서 속성에 접근하면, `TypeError` 예외가 발생하므로 [선택적 체이닝](/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining) 연산자를 도입해야 합니다.

| Type                              | `typeof` return value | Object wrapper        |
| --------------------------------- | --------------------- | --------------------- |
| [Null 타입](#null_타입)           | `"object"`            | N/A                   |
| [Undefined 타입](#undefined_타입) | `"undefined"`         | N/A                   |
| [Boolean 타입](#boolean_타입)     | `"boolean"`           | {{jsxref("Boolean")}} |
| [Number 타입](#number_타입)       | `"number"`            | {{jsxref("Number")}}  |
| [BigInt 타입](#bigint_타입)       | `"bigint"`            | {{jsxref("BigInt")}}  |
| [String 타입](#string_타입)       | `"string"`            | {{jsxref("String")}}  |
| [Symbol 타입](#symbol_타입)       | `"symbol"`            | {{jsxref("Symbol")}}  |

객체 래퍼 클래스의 참조 페이지에는 각 타입에 사용할 수 있는 메서드 및 속성에 대한 자세한 정보와, 원시 타입 자체의 의미 체계에 대한 자세한 설명이 포함되어 있습니다.

### Null 타입

Null 타입은 [`null`](/ko/docs/Web/JavaScript/Reference/Operators/null)이라는 오직 하나의 값만 가질 수 있습니다.

### Undefined 타입

Undefined 타입은 [`undefined`](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)이라는 오직 하나의 값만 가질 수 있습니다.

개념적으로, `undefined`는 값이 없음을 의미하고, `null`은 객체가 없음을 의미합니다.
([`typeof null === "object"`](/ko/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null)에 대한 변명이 될 수도 있습니다). 일반적으로 값이 없는 경우 언어의 기본값은 `undefined`입니다.

- 반환 값이 없는 [`return`](/ko/docs/Web/JavaScript/Reference/Statements/return)문(`return;`)은 암시적으로 `undefined`를 반환합니다.
- 존재하지 않는 [객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object) 속성에 접근 (`obj.iDontExist`) 하면 `undefined`가 반환됩니다.
- 초기화(`let x;`)가 없는 변수 선언은 변수를 `undefined`로 암시적으로 초기화합니다.
- {{jsxref("Array.prototype.find()")}} 및 {{jsxref("Map.prototype.get()")}}와 같은 대부분의 메서드는, 요소를 찾을 수 없을 때 `undefined`를 반환합니다.

`null`은 언어의 핵심적인 부분에선 덜 자주 사용됩니다. 가장 중요한 위치는 [prototype chain](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)의 끝부분입니다. 이어서, {{jsxref("Object.getPrototypeOf()")}}, {{jsxref("Object.create()")}} 등 프로토타입과 상호 작용하는 메서드는 `undefined` 대신 `null`을 받거나 반환합니다.

`null`은 [키워드](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)이지만, `undefined`는 전역 속성인 일반적인 [식별자](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)입니다. 실제로는 `undefined`가 재정의되거나 가려져서는 안 되기 때문에 그 차이는 미미합니다.

### Boolean 타입

{{jsxref("Boolean")}} 타입은 논리 요소를 나타내며 `true`와 `false` 두 가지의 값을 가질 수 있습니다.

불리언 값은 일반적으로 [삼항 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Conditional_operator) , [`if...else`](/ko/docs/Web/JavaScript/Reference/Statements/if...else), [`while`](/ko/docs/Web/JavaScript/Reference/Statements/while) 등을 포함한, 조건부 연산에 사용됩니다.

### Number 타입

{{jsxref("Number")}} 타입은 [배정밀도 64비트 이진 형식 IEEE 754 값](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_encoding)입니다. 2<sup>-1074</sup> ({{jsxref("Number.MIN_VALUE")}}) 와 2<sup>1024</sup> ({{jsxref("Number.MAX_VALUE")}}) 사이의 양수 부동 소수점 뿐만 아니라, -2<sup>-1074</sup> 와 -2<sup>1024</sup> 사이의 음수 부동 소수점 숫자도 저장할 수 있지만, -(2<sup>53</sup> − 1) ({{jsxref("Number.MIN_SAFE_INTEGER")}}) 와 2<sup>53</sup> − 1 ({{jsxref("Number.MAX_SAFE_INTEGER")}}) 범위의 정수만 안전하게 저장할 수 있습니다. 이 범위를 벗어나면, JavaScript는 더 이상 정수를 안전하게 표시할 수 없습니다. 대신 배정밀도 부동 소수점 근사값으로 표시됩니다. {{jsxref("Number.isSafeInteger()")}}를 사용하여 숫자가 안전한 정수 범위 내에 있는지 확인할 수 있습니다.

±(2<sup>-1074</sup> to 2<sup>1024</sup>) 범위를 벗어나는 값은 자동으로 변환됩니다.

- {{jsxref("Number.MAX_VALUE")}}보다 큰 양수값은 `+Infinity`로 변환됩니다.
- {{jsxref("Number.MIN_VALUE")}}보다 작은 양수값은 `+0`으로 변환됩니다.
- {{jsxref("Number.MAX_VALUE")}}보다 작은 음수값은 `-Infinity`로 변환됩니다.
- {{jsxref("Number.MIN_VALUE")}}보다 큰 음수값은 `-0`으로 변환됩니다.

`+Infinity` 및 `-Infinity`는 수학에서의 무한대와 유사하게 작동하지만, 약간의 차이가 있습니다. 자세한 내용은 {{jsxref("Number.POSITIVE_INFINITY")}} 및 {{jsxref("Number.NEGATIVE_INFINITY")}}를 참고하세요.

Number 타입에는 여러 표현이 있는 하나의 값만 있습니다. `0`은 `-0`과 `+0` 둘 다로 표현됩니다(여기서 `0`은 `+0`의 별칭입니다). 실제로는, 서로 다른 표현 간에 거의 차이가 없습니다. 예를 들어, `+0 === -0`은 `true`입니다. 그러나, 0으로 나누면 다음과 같이 알 수 있습니다.

```js
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

{{jsxref("NaN")}} ("**N**ot **a** **N**umber")는 산술 연산의 결과를 숫자로 표현할 수 없을 때, 일반적으로 발생하는 특별한 종류의 숫자 값입니다. 또한, "NaN" 자기 자신과 같지 않은 JavaScript의 유일한 값이기도 합니다.

숫자는 개념적으로 "수학적인 값"이고 항상 암시적으로 부동 소수점으로 인코딩되지만, JavaScript는 [비트 연산자](/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#bitwise_operators)를 제공합니다. 비트 연산자를 적용할 때 숫자는 먼저 32비트 정수로 변환됩니다.

> **참고:** [비트 마스킹](<https://ko.wikipedia.org/wiki/마스크_(컴퓨팅)>)을 사용해서 하나의 숫자 안에 다수의 불리언 값을 나타낼 때 비트 연산자를 사용할 수 있긴 하지만 이건 보통 나쁜 방법으로 여겨집니다. JavaScript는 일련의 불리언 값들을 나타내는 방법을 (배열이나 불리언 속성 값을 할당한 객체로) 제공합니다. 비트 마스킹은 코드를 읽고, 이해하고, 유지하기 힘들게 만듭니다.

다만 로컬 저장소의 한정된 공간을 활용해야 한다거나, 네트워크의 비트 하나하나가 소중한 극한 상황처럼 제한된 환경에서는 이런 기술이 필요할 수도 있습니다. 비트 마스킹은 용량 최적화의 마지막 수단으로만 고려해야 합니다.

### BigInt 타입

{{jsxref("BigInt")}} 타입은 임의 정밀도로 정수를 나타낼 수 있는 JavaScript 숫자 원시 값입니다. BigInt로 Number의 안전한 정수 제한({{jsxref("Number.MAX_SAFE_INTEGER")}})을 넘어서는 큰 정수도 안전하게 저장하고 연산할 수 있습니다.

BigInt는 정수 끝에 `n`을 추가하거나 [`BigInt()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt) 함수를 호출해 생성할 수 있습니다.

다음 예제는 {{jsxref("Number.MAX_SAFE_INTEGER")}}를 증가시키면, 예상된 값을 반환하는 것을 보여줍니다.

```js
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // 9007199254740992n는 9007199254740993n과 같지 않아 false입니다.

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // 둘 다 9007199254740992 이기 때문에 true입니다.
```

`+`, `*`, `-`, `**`, `%` 연산자를 BigInt에서도 사용할 수 있습니다. 금지된 연산자는 [`>>>`](/ko/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)뿐 입니다. BigInt는 Number와 [엄격하게 같지는](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality) 않지만 [느슨하게](/ko/docs/Web/JavaScript/Reference/Operators/Equality) 유사합니다.

BigInt는 소수를 나타낼 수 없지만, 큰 정수를 더 정확하게 나타낼 수 있기 때문에, BigInt 값은 숫자보다 항상 더 정확하거나 덜 정확하지 않습니다. 어떤 타입도 다른 타입을 수반하지 않으며, 서로 대체할 수 없습니다. {{jsxref("TypeError")}}는 BigInt 값이 산술 표현식의 일반 숫자와 혼합되거나 서로 [암시적으로 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)되는 경우 발생합니다.

### String 타입

{{jsxref("String")}} 타입은 텍스트 데이터를 나타내며, [UTF-16 코드 단위 수](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters)를 나타내는 16비트 부호 없는 정수 값의 나열로 인코딩됩니다. String의 각 요소는 String 내부의 위치를 차지합니다. 첫 번째 요소는 인덱스 `0`에, 다음 요소는 인덱스 `1`에 있습니다. String의 [길이](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/length)는 UTF-16 코드 단위의 수이며, 실제 유니코드 문자 수와 일치하지 않을 수 있습니다. 자세한 내용은 [`String`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#utf-16_characters_unicode_code_points_and_grapheme_clusters) 페이지를 참조하세요.

JavaScript String은 변경할 수 없습니다. 즉, String이 생성되면 수정할 수 없습니다. String 메서드는 현재 String의 내용을 기반으로 새 String을 만듭니다. 예를 들면, 다음과 같습니다.

- [`substring()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substring)을 사용해 원래 String의 하위 String을 만들 수 있습니다.
- 연결 연산자(`+`) 또는 [`concat()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/concat)를 사용하여 두 문자열을 연결합니다.

#### "문자열의 타입화"를 조심하라

문자열을 사용해 복잡한 데이터를 표현하는 것이 매력적으로 보일지도 모르고, 단기적으로는 다음과 같은 장점이 있습니다.

- 연결 연산자를 통해 복잡한 문자열을 쉽게 만들 수 있습니다.
- 문자열은 디버깅이 쉽습니다. (출력 내용이 항상 문자열의 값과 동일)
- 문자열은 많은 API([입력 칸](/ko/docs/Web/API/HTMLInputElement), [로컬 스토리지](/ko/docs/Web/API/Web_Storage_API) 값, `responseText`와 함께 사용하는 [`XMLHttpRequest`](/ko/docs/Web/API/XMLHttpRequest) 등등)의 공통 분모이며 문자열로만 작업하고 싶을 수 있습니다.

규칙을 통해, 어떤 자료구조라도 문자열로 표현할 수 있습니다. 그러나 그게 좋은 방법은 아닙니다. 예를 들어, 구분자를 사용하면 (물론 JavaScript 배열이 더 적합하겠지만) 문자열로 리스트를 흉내낼 수도 있을 것입니다. 그러나 구분자를 리스트의 요소로 사용하는 순간 리스트가 망가지고 맙니다. 이제 구분자를 구분하기 위해 이스케이프 문자를 선택하고, 등등... 이 모든 것이 각자의 규칙을 필요로 하고 불필요한 유지보수 부담이 발생합니다.

문자열은 텍스트 데이터에만 사용하세요. 복잡한 데이터를 표현해야 할 땐 문자열을 구문 분석하고 적합한 추상화를 사용하세요.

### Symbol 타입

{{jsxref("Symbol")}}은 **고유**하고 **변경 불가능한** 원시 값이며 객체의 속성(아래를 참고하세요) 키로 사용할 수 있습니다. 어떤 프로그래밍 언어들에선 "원자"라고 부르기도 합니다. 기호의 목적은 다른 코드의 키와 충돌하지 않도록 보장되는 고유한 속성 키를 만드는 것입니다.

## 객체

컴퓨터 과학에서의 객체란 [식별자](/ko/docs/Glossary/Identifier)로 참조할 수 있는 메모리 상의 값을 말합니다. JavaScript에서 객체는 유일한 [변경 가능한](/ko/docs/Glossary/Mutable) 값입니다. [Functions](/ko/docs/Web/JavaScript/Reference/Functions)는 사실 callable 이라는 추가 기능이 있는 객체이기도 합니다.

### 속성

JavaScript에서의 객체는 속성의 컬렉션으로 볼 수 있습니다. [객체 리터럴 구문](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#객체_리터럴)을 사용해 제한적으로 속성을 초기화할 수의 있고, 그 후에 속성을 추가하거나 제거할 수도 있습니다. 객체 속성은 키-값 쌍과 동일합니다. 속성 키는 [strings](#string_타입)타입 또는 [symbols](#symbol_타입)타입이 될 수 있습니다. 속성 값으로는 다른 객체를 포함해 모든 타입을 사용할 수 있으므로 복잡한 자료구조의 구축이 가능합니다.

객체 속성에는 [데이터 속성](#데이터_속성)과 [접근자 속성](#접근자_속성) 두 종류가 있습니다. 각각의 속성에는 다시 '특성'(attribute)들이 존재합니다. 특성은 JavaScript 엔진 내부에서는 접근되지만, {{jsxref("Object.defineProperty()")}}를 통해 설정하거나, {{jsxref("Object.getOwnPropertyDescriptor()")}} 를 통해 읽을 수 있습니다.

{{jsxref("Object.defineProperty()")}}에서 더 알아보세요.

#### 데이터 속성

데이터 속성은 키를 값과 연결하며, 다음과 같은 특성을 가집니다.

- `value`
  - : 속성의 get 접근으로 검색된 값입니다. 모든 JavaScript의 값이 볼 수 있습니다.
- `writable`
  - : 할당으로 속성을 변경할 수 있는지 여부를 나타내는 불리언 값입니다.
- `enumerable`
  - : A boolean value indicating if the property can be enumerated by a [`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in) loop. See also [Enumerability and ownership of properties](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties) for how enumerability interacts with other functions and syntaxes.
  - : 속성을 [`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 루프로 열거할 수 있는지 여부를 나타내는 불리언 값입니다. 열거 가능성이 다른 함수 및 구문과 상호 작용하는 방식에 대해서는 [속성 열거 가능성 및 소유권](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)을 참조하세요.
- `configurable`
  - : 속성을 삭제할 수 있는지, 접근자 속성으로 변경할 수 있는지, 속성을 변경할 수 있는지를 나타내는 불리언 값입니다.

#### 접근자 속성

접근자 속성은 키를 두 개의 접근자 함수(`get`, `set`) 중 하나와 연결하여 값을 가져오거나 저장합니다.

> [!NOTE]
> 접근자 '메서드'가 아니라 접근자 '속성'임을 인지하는 것이 중요합니다. 함수를 값으로 사용하여 JavaScript 객체에 클래스처럼 접근자를 부여할 수 있지만, 그렇다고 그 객체가 클래스로 바뀌는 것은 아닙니다.

접근자 속성은 다음과 같은 특성을 가집니다.

- `get`
  - : 값에 대한 get 접근이 수행될 때마다 속성 값을 검색하기 위해 비어 있는 인수 목록으로 호출되는 함수입니다. [getters](/ko/docs/Web/JavaScript/Reference/Functions/get)를 참고하세요. `undefined`일 수 있습니다.
- `set`
  - : 할당된 값을 포함하는 인수로 호출되는 함수입니다. 지정된 속성을 변경하려고 시도할 때마다 실행됩니다. [setters](/ko/docs/Web/JavaScript/Reference/Functions/set)도 참고하세요. `undefined`일 수 있습니다.
- `enumerable`
  - : 속성을 [`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 루프로 열거할 수 있는지 여부를 나타내는 불리언 값입니다. 열거 가능성이 다른 함수 및 구문과 상호 작용하는 방식에 대해서는 [속성 열거 가능성 및 소유권](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)을 참조하세요.
- `configurable`
  - : 속성을 삭제할 수 있는지, 데이터 속성으로 변경할 수 있는지, 속성을 변경할 수 있는지를 나타내는 불리언 값입니다.

객체의 [prototype](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)은 다른 객체 또는 `null`을 가리킵니다. 이는 개념적으로 객체의 숨겨진 속성이며, 일반적으로 `[[Prototype]]`으로 표시됩니다. 객체의 `[[Prototype]]`속성은 객체 자체에서도 접근할 수 있습니다.

객체는 임시 키-값 쌍이므로, 종종 맵으로 사용됩니다. 그러나 인체 공학, 보안 및 성능 문제가 있을 수 있습니다. 대신 임의의 데이터를 저장하려면, {{jsxref("Map")}}을 사용하세요. [`Map` 참조](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps)에는 키-값 연결을 저장하기 위한 일반 객체와 Map 간의 장단점에 대한 자세한 설명이 포함되어 있습니다.

### 날짜

날짜와 시간을 나타낼 때의 가장 좋은 선택은 JavaScript 내장 [`Date` 유틸리티](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)를 사용하는 것입니다.

### 인덱스 컬렉션: 배열과 형식화 배열

[배열](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)은 정수 키를 가진 속성과 `length` 속성 사이에 특별한 연관을 지어놓은 일반 객체입니다.

이에 더해, 배열은 배열을 조작할 수 있는 몇 가지 편리한 메서드를 제공하는 `Array.prototype`에서 상속됩니다. 예를 들어, [`indexOf()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)는 배열에서 값을 탐색하고, [`push()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push)는 배열에 요소를 추가합니다. 따라서 배열은 정렬된 목록을 나타내는 완벽한 후보가 됩니다.

[형식화 배열(Typed Arrays)](/ko/docs/Web/JavaScript/Guide/Typed_arrays)은 안쪽의 이진 데이터 버퍼에 대해 배열과 같은 뷰를 제공하고, 배열과 의미 체계가 유사한 많은 메서드를 제공합니다. "(형식화 배열)Typed Array"은 `Int8Array`, `Float32Array` 등을 비롯한 다양한 데이터 구조를 가리키는 포괄적인 용어입니다. 자세한 내용은 [typed array](/ko/docs/Web/JavaScript/Guide/Typed_arrays)을 참고하세요. Typed Array는 종종 {{jsxref("ArrayBuffer")}} 및 {{jsxref("DataView")}}와 함께 사용됩니다.

### 키 컬렉션: Maps, Sets, WeakMaps, WeakSets

키 컬렉션 자료구조는 객체 참조를 키로 가집니다. {{jsxref("Set")}}과 {{jsxref("WeakSet")}}은 고유한 값의 모음을 나타내고, {{jsxref("Map")}}과 {{jsxref("WeakMap")}}은 객체와 값을 연결 짓는 쌍들의 모음을 나타냅니다.

`Map`과 `Set`을 직접 구현할 수 있습니다. 그러나 객체를 직접 비교(`<`, '작음' 비교와 같이)할 방법은 없고, 엔진도 객체에 대한 해시 함수를 노출하지 않기 때문에, 조회 성능이 필연적으로 선형입니다. (`WeakMap`을 포함해) 네이티브 구현은 상수 시간에 대한 로그함수의 조회 성능을 가질 수 있습니다.

보통 DOM 노드에 데이터를 연결할 땐 해당 객체에 직접 속성을 추가하거나 `data-*` 특성을 사용하겠지만, 동일한 컨텍스트에서 이렇게 추가한 데이터를 모든 스크립트에서 다 사용할 수 있다는 문제가 있습니다. `Map`과 `WeakMap`을 사용하면 비공개 데이터를 객체에 쉽게 바인딩 할 수 있습니다.

`WeakMap` 및 `WeakSet`은 가비지 컬렉션이 가능한 객체 또는 [등록되지 않은 기호](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry)만 키로 허용하며, 키가 컬렉션에 남아있어도 가비지 컬렉션할 수 있습니다. 특히 [메모리 사용량 최적화](/ko/docs/Web/JavaScript/Memory_management#data_structures_aiding_memory_management)에 사용됩니다.

### 구조화된 자료: JSON

JSON(**J**ava**S**cript **O**bject **N**otation)은 경량 데이터 교환 형식으로, JavaScript에서 파생됐지만 많은 프로그래밍 언어에서 사용하고 있습니다. JSON은 다양한 환경과 언어 간에 전송할 수 있는 범용 데이터 구조를 구성합니다. 자세한 내용은 {{jsxref("JSON")}}를 참조하세요.

### 표준 라이브러리의 더 많은 객체

JavaScript는 내장 객체로 구성된 표준 라이브러리를 포함합니다. 내장 객체에 대해 자세히 알아보려면 [참고서](/ko/docs/Web/JavaScript/Reference/Global_Objects)를 읽어보세요.

## 타입 강제 변환

위에서 언급했듯이, JavaScript는 [약타입](#동적_및_약타입) 언어입니다. 즉, 다른 타입이 예상되는 하나의 타입의 값을 자주 사용할 수 있으며, 언어에서 이를 적합한 타입으로 변환해줍니다. 이를 위해, JavaScript는 몇 가지 강제 변환 규칙을 정의합니다.

### 원시 타입 강제 변환

[원시 타입 강제 변환](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toprimitive) 프로세스는 원시 값이 예상되는 경우에 사용되지만, 실제 타입이 무엇이어야 하는지에 대한 강력한 선호도는 없습니다. 일반적으로 [string](#string_타입), [number](#number_타입) 또는 [BigInt](#bigint_타입)이 동등하게 허용되는 경우입니다. 예를 들면 아래와 같습니다.

- [`Date()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) 생성자는 `Date` 인스턴스가 아닌 하나의 인수를 받는 경우, String은 날짜 String을 나타내는 반면, 숫자는 타임스탬프를 나타냅니다.
- [`+`](/ko/docs/Web/JavaScript/Reference/Operators/Addition) 연산자, 하나의 피연산자가 String이면 String 연결이 수행됩니다.
- [`==`](/ko/docs/Web/JavaScript/Reference/Operators/Equality) 연산자, 피연산자 중 하나가 원시 타입이고 다른 피연산자는 객체인 경우, 객체는 선호 타입이 없는 원시 값으로 변환됩니다.

이 작업은 값이 이미 원시 타입인 경우, 변환을 수행하지 않습니다. 객체는 [`[@@toPrimitive]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive) (힌트로 `"default"` 사용), `valueOf()`, `toString()` 메서드를 차례로 호출하여 원시 타입으로 변환됩니다. 원시 타입 변환은 `toString()` 이전에 `valueOf()`를 호출하는데, 이는 [숫자 강제 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)의 동작과 비슷하지만, [string 강제 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)과는 다릅니다.

`[@@toPrimitive]()` 메서드가 있는 경우, 원시 타입을 반환해야 합니다. 객체를 반환하면 {{jsxref("TypeError")}}가 발생합니다. `valueOf()` 및 `toString()`의 경우, 하나가 객체를 반환하면 반환 값은 무시되고 다른 하나의 반환 값이 대신 사용됩니다. 둘 다 존재하지 않거나, 원시 타입을 반환하지 않으면 {{jsxref("TypeError")}}가 발생합니다. 다음 코드를 예로 들 수 있습니다.

```js
console.log({} + []); // "[object Object]"
```

`{}` 또는 `[]`에는 `[@@toPrimitive]()` 메서드가 없습니다. `{}` 및 `[]` 모두 객체 자체를 반환하는 {{jsxref("Object.prototype.valueOf")}}에서 `valueOf()`를 상속합니다. 반환 값은 객체이므로 무시됩니다. 따라서 `toString()`이 대신 호출됩니다. [`{}.toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)은 `"[object Object]"`를 반환하는 반면, [`[].toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)는 `""`를 반환하므로, 결과는 연결된 값인 `"[object Object]"`입니다.

`[@@toPrimitive]()` 메서드는 원시 타입으로 변환할 때 항상 우선합니다. 원시 타입 변환은 일반적으로 `valueOf()`가 우선적으로 호출되기 때문에, 숫자 강제 변환과 같이 동작합니다. 그러나 사용자 지정 `[@@toPrimitive]()` 메서드가 있는 객체는 모든 원시 타입을 반환하도록 선택할 수 있습니다. {{jsxref("Date")}} 및 {{jsxref("Symbol")}} 객체는 `[@@toPrimitive]()` 메서드를 재정의하는 유일한 내장 객체입니다. [`Date.prototype[@@toPrimitive]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive)는 `"default"` 힌트를 `"string"`인 것처럼 취급하는 반면, [`Symbol.prototype[@@toPrimitive]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive)는 힌트를 무시하고 항상 기호(symbol)을 반환합니다.

### 숫자 강제 변환

[Number](#number_타입) 및 [BigInt](#bigint_타입)의 두 가지 숫자 타입이 있습니다. 때때로 언어는 특별히 숫자 또는 BigInt(예: 인덱스가 숫자여야 하는 {{jsxref("Array.prototype.slice()")}})를 기대합니다. 다른 경우에는, 둘 중 하나를 허용하고 피연산자의 타입에 따라 다른 작업을 수행할 수 있습니다. 다른 타입의 암시적 변환을 허용하지 않는 엄격한 강제 변환 프로세스는 [숫자 강제 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) 및 [BigInt 강제 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion)을 참조하세요.

숫자 강제 변환은 BigInt가 {{jsxref("TypeError")}}를 발생시키는 대신 있는 그대로 반환된다는 점을 제외하면 [수 강제 변환(number coercion)](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion)하고 거의 동일합니다. 숫자 강제 변환은 Number와 BigInt 모두에 대해 오버로딩되기 때문에, 모든 산술 연산자에서 사용됩니다. 유일한 예외는 항상 숫자 강제 변환을 수행하는 [단항 더하기](/ko/docs/Web/JavaScript/Reference/Operators/Unary_plus)입니다.

### 기타 강제 변환

Null, Undefined 및 Symbol을 제외한 모든 데이터 타입에는 각각의 강제 변환 프로세스가 있습니다. 자세한 내용은 [string 강제 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), [불리언(boolean) 강제 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion) 및 [객체 강제 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#object_coercion)에서 확인하세요.

눈치채셨겠지만, 객체를 원시 타입으로 변환할 수 있는 세 가지 경로가 있습니다.

- [원시 타입 강제 변환](#원시_타입_강제_변환): `[@@toPrimitive]("default")` → `valueOf()` → `toString()`
- [숫자 강제 변환](#숫자_강제_변환), [number coercion](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion), [BigInt coercion](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt#bigint_coercion): `[@@toPrimitive]("number")` → `valueOf()` → `toString()`
- [문자열 강제 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion): `[@@toPrimitive]("string")` → `toString()` → `valueOf()`

모든 경우에, `[@@toPrimitive]()`이 있으면 호출 가능하고, 원시 타입을 반환해야 하며, `valueOf` 또는 `toString`은 호출 가능하지 않거나 객체를 반환하는 경우 무시됩니다. 프로세스가 끝나고, 성공하면 결과가 원시 타입임을 보장합니다. 결과 원시 타입은 컨텍스트에 따라 추가 강제 적용을 받습니다.

## 같이 보기

- Oleksii Trekhleb의 [JavaScript 데이터 구조 및 알고리즘](https://github.com/trekhleb/javascript-algorithms)
- Nicholas Zakas의 [JavaScript 공통 데이터 구조 및 알고리즘 모음](https://github.com/humanwhocodes/computer-science-in-javascript)
