---
title: 자바스크립트의 자료형
slug: Web/JavaScript/Data_structures
translation_of: Web/JavaScript/Data_structures
---
{{jsSidebar("More")}}

모든 프로그래밍 언어는 내장 자료형이 있지만, 종종 이러한 내장 자료형은 언어마다 다르다. 이 문서에서는 자바스크립트의 내장 자료형과, 내장 자료형에서 사용할 수 있는 속성들에 대해 알아본다. 이로써 내장 자료형들로 더 복잡한 자료형을 만드는데 사용할 수 있을 것이다. 가능하다면 다른 언어와도 비교해보자.

## 동적 타이핑

자바스크립트는 _느슨한 타입 (loosely typed)_ 언어, 혹은 _동적 (dynamic)_ 언어이다. 그 말은, 변수의 타입을 미리 선언할 필요가 없다는 뜻이다. 타입은 프로그램이 처리되는 과정에서 자동으로 파악될 것이다. 또한 그 말은 같은 변수에 여러 타입의 값을 넣을 수 있다는 뜻이다.

```js
var foo = 42;    // foo 는 이제 Number 임
var foo = "bar"; // foo 는 이제 String 임
var foo = true;  // foo 는 이제 Boolean 임
```

## 데이터 및 구조 유형

최신 ECMAScript 표준은 9가지 유형을 정의합니다.

- [typeof](/ko/docs/Web/JavaScript/Reference/Operators/typeof) 연산자로 확인되는 6가지 [기본](/ko/docs/Glossary/Primitive) **데이터 유형**:

  - [undefined](/en-US/docs/Glossary/undefined) : `typeof instance === "undefined"`
  - [Boolean](/en-US/docs/Glossary/Boolean) : `typeof instance === "boolean"`
  - [Number](/en-US/docs/Glossary/Number) : `typeof instance === "number"`
  - [String](/en-US/docs/Glossary/String) : `typeof instance === "string"`
  - [BigInt](/en-US/docs/Glossary/BigInt) : `typeof instance === "bigint"`
  - [Symbol](/en-US/docs/Glossary/Symbol) : `typeof instance === "symbol"` (ECMAScript 6 에 추가됨)

## **구조 유형**:

  - [Object](/en-US/docs/Glossary/Object) : `typeof instance === "object"`. **데이터 구조**로 사용되는 모든 [생성된](/ko/docs/Learn/JavaScript/Objects#the_constructor) 개체 인스턴스에 대한 데이터가 아닌 특수한 구조 유형: new {{jsxref("Object")}}, new {{jsxref("Array")}}, new {{jsxref("Map")}}, new {{jsxref("Set")}}, new {{jsxref("WeakMap")}}, new {{jsxref("WeakSet")}}, new {{jsxref("Date")}} 그리고 거의 모든 것이 [new keyword](/en-US/docs/Web/JavaScript/Reference/Operators/new) 로 만들어졌습니다;
  - [Function](/en-US/docs/Glossary/Function) : 비데이터 구조이지만 `typeof` 연산자에도 값이 나옵니다: `typeof instance === "function"`. 모든 Function 생성자는 Object 생성자에서 파생되지만 이것은 단순히 Functions의 특수 축약형입니다.

- **Structural Root** Primitive:

  - **[null](/en-US/docs/Glossary/Null)** : `typeof instance === "object"`. 값에 대한 추가 사용법이 있는 특수 [기본](/ko/docs/Glossary/Primitive) 유형: 객체가 상속되지 않으면 `null`이 표시됩니다.

`typeof` 연산자 사용의 유일한 가치 있는 목적은 데이터 유형을 확인하는 것임을 명심하십시오. `Object`에서 파생된 Structural Type을 확인하려면 항상 `"object"`를 수신하므로 typeof를 사용하는 것은 무의미합니다. 어떤 종류의 객체를 사용하고 있는지 확인하는 적절한 방법은 instanceof 키워드입니다. 그러나 그런 경우에도 오해가 있을 수 있습니다.

우리가 볼 수 있듯이 거의 동일한 undefined와 null을 제외하고 모든 기본 유형의 의미는 분명합니다. 이것은 시간의 개념이 알고리즘의 목적과 엄격하게 연결되어 있기 때문에 발생합니다. 우리는 아직 존재하지 않거나 더 이상 존재하지 않는 것을 의미할 수 있습니다: **undefined**. 그러나 비어 있는 것으로 존재하는 것을 표현하려면 다른 키워드를 발명해야 합니다. 이것이 **null**이 의미하는 것입니다. 구조적 의미의 시작입니다.
## 기본 타입 (Primitive value)

오브젝트를 제외한 모든 값은 변경 불가능한 값 (immutable value) 이다. 예를 들자면, 특히 C 언어와는 다르게도, 문자열은 불변값 (immutable) 이다. 이런 값을 "primitive values" 라고 일컫는다. 아래의  {{ anch("Strings") }} 장에서 더 자세히 설명할 것이다.

### Boolean 타입

Boolean 은 논리적인 요소를 나타내고, `true` 와 `false` 의 두 가지 값을 가질 수 있다. 세부 사항을 보고싶으면 [Boolean](/ko/docs/Glossary/Boolean)과 {{jsxref("Boolean")}}을 참고하자.

### Null 타입

Null 타입은 딱 한 가지 값, `null` 을 가질 수 있다. 더 알아보려면 {{jsxref("null")}} 와 [Null](/ko/docs/Glossary/Null) 을 보라.

### Undefined 타입

값을 할당하지 않은 변수는 `undefined` 값을 가진다. 더 알아보려면 {{jsxref("undefined")}} 와 [Undefined](/ko/docs/Glossary/undefined) 을 보라.

### Number 타입

ECMAScript에는 **Number** 및 **BigInt**의 두 가지 기본 제공 숫자 유형이 있습니다(아래 참조).

ECMAScript 표준에 따르면, 숫자의 자료형은 [배정밀도 64비트 형식 IEEE 754 값](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) (-(2^53 -1) 와 2^53 -1 사이의 숫자값) 단 하나만 존재한다. **정수만을 표현하기 위한 특별한 자료형은 없다.** 부동 소수점을 표현할 수 있는 것 말고도, Number 타입은 세 가지 의미있는 몇가지 상징적인 값들도 표현할 수 있다. 이 값에는 `+Infinity`, `-Infinity`, and [`NaN`](/ko/docs/Web/JavaScript/Reference/Global_Objects/NaN) ("**N**ot a **N**umber")이 있다.

`+/-Infinity` 보다 크거나 작은지 확인하는 용도로 상수값인 {{jsxref("Number.MAX_VALUE")}} 나 {{jsxref("Number.MIN_VALUE")}} 을 사용할 수 있다. 

> **참고:** ECMAScript 2015부터 {{jsxref("Number.isSafeInteger()")}}와 {{jsxref("Number.MAX_SAFE_INTEGER")}} 및 {{jsxref("Number.MIN_SAFE_INTEGER")}}를 사용하여 숫자가 배정밀도 부동 소수점 숫자 범위에 있는지 확인할 수도 있습니다.
>
> 이 범위를 넘어서면 JavaScript의 정수는 더 이상 안전하지 않으며 값의 배정도 부동 소수점 근사값이 됩니다.

Number 타입의 값 중에는 두 가지 방식으로 표현할 수 있는 유일한 값이 있는데, 0 이다. 0 은 -0 이나 +0 으로 표시할 수 있다. ("0" 은 물론 +0 이다.) 

실제로는 이러한 사실은 거의 효력이 없다. 그 예로, `+0 === -0` 은 `true` 이다. 하지만 0으로 나누는 경우 그 차이가 눈에 띌 것이다.

```js
> 42 / +0
Infinity
> 42 / -0
-Infinity
```

숫자가 보통 값만으로 표현되긴 하지만, 자바스크립트는 [몇 가지 이진 연산자](/ko/docs/JavaScript/Reference/Operators/Bitwise_Operators)도 제공한다. 

> **참고:** 이러한 이진 연산자들은 [비트 마스킹(bit masking)](https://en.wikipedia.org/wiki/Mask_%28computing%29) 기법으로 한 숫자 안에 여러 Boolean 값을 저장하는데도 쓸 수 있다. 일반적으로 이런 방법은 나쁜 방법이지만, 자바스크립트에서는 (Boolean 값의 배열이나 Boolean 값들을 이름있는 속성들로 가지는 객체 같은) Boolean 덩어리를 나타낼 다른 방법이 없다. 비트 마스킹은 또한 코드를 이해하고, 읽고, 유지보수하는데에 있어서 좀 더 어렵게 만드는 경향이 있다. 

하지만 이러한 기법은 local storage 의 저장공간이 부족해서 절약하려고 하거나, 네트워크 상에서 각각의 비트를 전송하는 등의 극단적인 상황 같은 굉장히 제한적인 환경에서 필요할 수도 있다. 그래서 비트 마스킹 기법은 크기를 최대한 줄여야하는 상황에서만 사용을 고려해야 한다.

### BigInt type

[BigInt](/ko/docs/Web/JavaScript/Reference/Global_Objects/BigInt) 타입은 임의 정밀도로 정수를 나타낼 수 있는 자바스크립트의 숫자 원시 형식이다. `BigInt`를 사용하면 `Number`의 정수 한계를 넘어서는 큰 정수도 안전하게 저장 및 연산할 수 있다.

`BigInt`는 정수 끝에 `n`을 추가하거나 생성자를 호출하여 생성된다.

`BigInt`의 도입으로, 다음의 [Number.MAX_SAFE_INTEGER](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)로 작업할 수 있으며 상수 [Number.MAX_SAFE_INTEGER](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)를 사용하여 숫자로 증가시킬 수 있는 가장 안전한 값을 얻을 수 있다.

이 예제는 [Number.MAX_SAFE_INTEGER](/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)를 증가시키면 예상 결과가 반환된다는 것을 보여준다:

```js
> const x = 2n ** 53n;
9007199254740992n
> const y = x + 1n;
9007199254740993n
```

산술 연산자 `+`, `*`, `-`, `**` 및 `%`를 `BigInt`에서도 사용할 수 있다. `BigInt`는 정확히 `Number`와 같지는 않으나 대략적으로는 같다.

`BigInt`는 `if`, `||`, `&&,` `Boolean`, `!`와 같이 `Boolean 타입`으로 변환되는 경우 `Number`처럼 작동한다.

`BigInt`는 `Number`로 교체할 수 없으며 [TypeError](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypeError)가 발생한다.

### String 타입

자바스크립트의 {{jsxref("Global_Objects/String", "String")}} 타입은 텍스트 데이터를 나타내는데 사용한다. 이는 16비트 부호없는 정수 값 요소들의 집합이다. String의 각 요소는 String의 위치를 차지한다. 첫 번째 요소는 `0`번 인덱스에 있고, 다음 요소는 `1`번, 그 다음 요소는 2번... 같은 방식이다. String 의 길이는 String이 가지고있는 요소의 갯수이다.

C 같은 언어와는 다르게, 자바스크립트의 문자열은 변경 불가능 (immutable) 하다. 이것은 한 번 문자열이 생성되면, 그 문자열을 수정할 수 없다는걸 의미한다. 그러나 원래 문자열에서 일부가 수정된 다른 문자열을 만드는건 가능하다. 예를 들자면 이렇다.

- 원래 문자열에서 각각의 글자를 추출하거나 [`String.substr()`](/ko/docs/JavaScript/Reference/Global_Objects/String/substr)을 사용해서 만든 부분 문자열
- 접합 연산자 (`+`) 나 [`String.concat()`](/ko/docs/JavaScript/Reference/Global_Objects/String/concat) 으로 두 문자열을 합친 문자열

#### "문자열의 자료형화"를 조심하라!

문자열을 복잡한 자료형을 표현하는 용도로 쓰는 방법이 꽤나 매력적일 수 있다. 단기적으로 이런 장점들이 있다.

- 접합 연산자로 손쉽게 복잡한 문자열을 만들 수 있다.
- 문자열은 디버깅이 쉽다 (화면에 출력한 내용이 문자열 변수에 있는 값과 같다)
- 문자열은 많은 API 에서 사용하는 공통분모이고 ([입력 필드](/ko/docs/DOM/HTMLInputElement), [로컬 스토리지](/ko/docs/Web/API/Web_Storage_API)  값, {{ domxref("XMLHttpRequest") }} 요청에서 `responseText`를 사용할 때 등) 그러다보니 문자열만으로 작업하는게 매혹적일 수 있다.

규칙만 잘 정의해놓는다면, 어떤 자료구조가 되던 문자열로 표시할 수 있다. 그렇다고 해서 이게 좋은 방법이 되는 건 아니다. 예를 들자면, 구분자로 리스트 자료형을 흉내낼 수 있을 것이다 (하지만 자바스크립트의 배열을 사용하는게 더 알맞을 것이다). 불행하게도, 리스트의 요소중에 구분자가 들어있는 요소가 있다면 리스트는 엉망진창이 될 것이다. 물론 탈출 문자 (escape character) 등을 사용하거나 할 수도 있을 것이다. 하지만 이런 것들은 모두 미리 정해놓은 규칙을 필요로 하고, 덕분에 불필요한 관리 부담을 낳는다.

문자열은 텍스트 데이터에만 사용하자. 복잡한 데이터를 나타낼때는, 문자열을 분석해서 적합한 추상화를 선택해 사용하자.

### Symbol 타입

Symbol 은 ECMAScript 6 에서 추가되었다. Symbol은 **유일**하고 **변경 불가능한** (immutable) 기본값 (primitive value) 이다. 또한, 객체 속성의 key 값으로도 사용될 수 있다 (아래를 볼 것). 몇몇 프로그래밍 언어에서는 Symbol을 atom 이라고 부른다. 또, C 언어의 이름있는 열거형 (enum) 과도 비슷하다. 좀 더 자세히 알아보려면, 자바스크립트의  [Symbol](/ko/docs/Glossary/Symbol) 와 {{jsxref("Symbol")}} 객체 래퍼 (wrapper) 를 보라.

## 객체 (Objects)

컴퓨터 과학에서, 객체는 [식별자](/ko/docs/Glossary/Identifier) 로 참조할 수 있는, 메모리에 있는 값이다.

### 속성 (Properties)

자바스크립트에서, 객체는 속성들을 담고있는 가방 (collection) 으로 볼 수 있다. [객체 리터럴 문법 (object literal syntax)](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals) 으로 제한적으로 몇 가지 속성을 초기화할 수 있고, 그러고 나서 속성들을 추가하거나 제거할 수도 있다. 속성 값은 객체를 포함해 어떠한 자료형도 될 수 있고, 그 덕분에  복잡한 데이터 구조를 형성하는게 가능해진다. 속성은 키 (key) 값으로 식별된다. 키 값은 String 이거나 Symbol 값이다.

두 종류의 객체 속성이 있는데, 이들은 종류에 따라 특성값들을 가질 수 있다. 데이터 (data) 속성과 접근자 (accessor) 속성이 그것이다.

> **Note:** 각 프로퍼티에는 `특성들`이 있다. 특성은 자바스크립트 엔진에서 내부적으로 사용되므로 사용자가 직접 액세스할 수 없다. 그렇기 때문에 속성이 단일 대괄호가 아닌 이중 대괄호로 나열된다.
>
> 더 알아보려면 [Object.defineProperty()](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)를 확인하자.

#### 데이터 속성 (Data property)

키에 값을 연결하고, 아래와 같은 특성들 (attribute) 이 있다.

|Attribute|Type|Description|Default value|
|---------|----|-----------|-------------|
|[[Value]]|Any<br>JavaScript<br>type|액세스로 검색된 값의 속성을 가져온다.|`undefined`|
|[[Writable]]|Boolean|만약 `false` 라면, 속성의 [[Value]] 를 변경할 수 없다.|`false`|
|[[Enumerable]]|Boolean|만약 `true`이면, 이 속성은 [for...in](/ko/docs/Web/JavaScript/Reference/Statements/for...in)로 루프에서 열거될 수 있다.<br>참고 : [Enumerability and ownership of properties](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)|`false`|
|[[Configurable]]|Boolean|만약 `false` 라면, 속성을 삭제하거나 접근자 속성으로 변경할 수 없으며, [[Value]] 와 [[Writable]] 특성 외에는 변경할 수 없다.|`false`|

| Attribute  | Type    | Description                                           |
| ---------- | ------- | ----------------------------------------------------- |
| Read-only  | Boolean | ES5의 [[Writable]] 특성으로 변경되었다.           |
| DontEnum   | Boolean | ES5의 [[Enumerable]] 특성으로 변경되었다.         |
| DontDelete | Boolean | ES5의 [[Configurable]] 특성으로 변경되었다.       |

#### 접근자 속성 (Accessor property)

값을 가져오거나 값을 저장하기 위해 키에 하나 혹은 두 개의 접근자 함수 (`get`, `set`) 연결짓는다. 아래와 같은 특성이 있다.

| Attribute        | Type                           | Description                                                                                                                                                                                                              | Default value |
| ---------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| [[Get]]          | Function 객체 혹은 `undefined` | 이 속성의 값에 접근할 때마다, 인자 목록 없이 함수가 호출되고, 함수의 반환된 값으로 속성값을 가져온다. 같이보기 [`get`](/ko/docs/Web/JavaScript/Reference/Functions/get).               | `undefined`   |
| [[Set]]          | Function 객체 혹은 `undefined` | 이 속성의 값이 바뀌려고 할 때마다, 할당된 값을 인자로 함수가 호출된다. 같이보기 [`set`](/ko/docs/Web/JavaScript/Reference/Functions/set). | `undefined`   |
| [[Enumerable]]   | Boolean                        | 만약 `true`이면, 이 속성은, [for...in](/ko/docs/Web/JavaScript/Reference/Statements/for...in)로 루프에서 열거될 수 있다.                                                                                                | `false`       |
| [[Configurable]] | Boolean                        | 만약 `false`이면, 이 속성은 제거될 수 없고, 데이터 속성을 수정할 수 없다.                                                                                                         | `false`       |

### "Normal" objects, and functions

자바스크립트 오브젝트는 키와 값의 매핑이다. 키는 문자열이고 값은 다른 어떤 값도 될 수 있다. 오브젝트는 [hashmaps](https://en.wikipedia.org/wiki/Hash_table)을 표현하는데 적합하다. 표준이 아닌 [\_\_proto\_\_](/ko/docs/JavaScript/Reference/Global_Objects/Object/proto "__proto__")  슈도 프로퍼티를 사용할 때는 주의하자. 이것을 지원하는 환경에서는 `'__proto__'는 오브젝트의 프로토타입을 의미하므로 이 이름을 키로 사용할 수 없다. 속성을 사용할 수 없다. 문자열의 출처가 분명하지 않을 때(입력 필드의 입력값 등)`주의가 필요하다. [이런 일이 생길 수도 있다](https://productforums.google.com/forum/#!category-topic/docs/documents/0hQWeOvCcHU). 이 때는  [StringMap abstraction](https://code.google.com/p/google-caja/source/browse/trunk/src/com/google/caja/ses/StringMap.js?r=4779) 같은 대안을 사용해보자.함수는 일반 오브젝트에서 호출 가능한 특성을 추가한 오브젝트이다.

### Dates

시간을 나타내려면 [Date utility](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date "en/JavaScript/Reference/Global_Objects/Date")를 사용하자. 최고의 선택이다.

### Arrays

[배열(Arrays](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array "Array")) 는 정수키를 가지는 일련의 값들을 표현하기 위한 오브젝트이다. 배열 오브젝트에는 길이를 나타내는 'length'란 속성도 있다. 배열은 Array.prototype을 상속받으므로 배열을 다룰 때 편한 [indexOf](/ko/docs/JavaScript/Reference/Global_Objects/Array/indexOf) (배열에서 값 검색)와 [push](/ko/docs/JavaScript/Reference/Global_Objects/Array/push) (새로운 값 추가) 같은 함수를 사용할 수 있다. 배열은 리스트나 집합을 표현하는데 적합하다.

[Typed Arrays](/ko/docs/Web/JavaScript/Typed_arrays)는 ECMAScript 2015에서 JavaScript의 새로운 기능이며 기본 바이너리 데이터 버퍼의 배열과 유사한 보기를 제공합니다. 다음 표는 동등한 C 데이터 유형을 결정하는 데 도움이 됩니다.

| Type                                     | Value Range                   | Size in bytes | Description                                                                  | Web IDL type          | Equivalent C type               |
| ---------------------------------------- | ----------------------------- | ------------- | ---------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxref("Int8Array")}}         | `-128` to `127`               | 1             | 8-bit two's complement signed integer                                        | `byte`                | `int8_t`                        |
| {{jsxref("Uint8Array")}}         | `0` to `255`                  | 1             | 8-bit unsigned integer                                                       | `octet`               | `uint8_t`                       |
| {{jsxref("Uint8ClampedArray")}} | `0` to `255`                  | 1             | 8-bit unsigned integer (clamped)                                             | `octet`               | `uint8_t`                       |
| {{jsxref("Int16Array")}}         | `-32768` to `32767`           | 2             | 16-bit two's complement signed integer                                       | `short`               | `int16_t`                       |
| {{jsxref("Uint16Array")}}         | `0` to `65535`                | 2             | 16-bit unsigned integer                                                      | `unsigned short`      | `uint16_t`                      |
| {{jsxref("Int32Array")}}         | `-2147483648` to `2147483647` | 4             | 32-bit two's complement signed integer                                       | `long`                | `int32_t`                       |
| {{jsxref("Uint32Array")}}         | `0` to `4294967295`           | 4             | 32-bit unsigned integer                                                      | `unsigned long`       | `uint32_t`                      |
| {{jsxref("Float32Array")}}     | `1.2E-38` to `3.4E38`         | 4             | 32-bit IEEE floating point number (7 significant digits e.g., `1.1234567`)   | `unrestricted float`  | `float`                         |
| {{jsxref("Float64Array")}}     | `5E-324` to `1.8E308`         | 8             | 64-bit IEEE floating point number (16 significant digits e.g., `1.123...15`) | `unrestricted double` | `double`                        |
| {{jsxref("BigInt64Array")}}     | `-2^63` to `2^63 - 1`         | 8             | 64-bit two's complement signed integer                                       | `bigint`              | `int64_t (signed long long)`    |
| {{jsxref("BigUint64Array")}}     | `0` to `2^64 - 1`             | 8             | 64-bit unsigned integer                                                      | `bigint`              | `uint64_t (unsigned long long)` |

### Keyed collections: Maps, Sets, WeakMaps, WeakSets

표준이 아니지만 ECMAScript 6에서 표준이 될 것 같다.

이 자료형들에서는 키가 문자열 뿐만 아니라 오브젝트도 될 수 있다. Set은 오브젝트의 집합을 나타내는 반면에 `WeakMaps`와 `Maps`는 오브젝트에 값을 연관시킬 수 있다. `Map`과 `WeakMap`의 차이는 전자는 오브젝트 키를 열거할 수 있다는 것이다. 이것은 가비지 콜렉션에서 이점을 준다.

ECMAScript 5를 이용해서 Map과 Set을 구현할 수 있을 것이다. 그러나 오브젝트는 크기 비교가 안된다는 점 때문에(예를들어 어떤 오브젝트는 다른 오브젝트보다 '작다'라고 할 수 없다) look-up에 소요되는 시간이 선형 시간이지 않을 것이다. 네이티브 구현은(WeakMaps를 포함해서) look-up 시간이 거의 로그 시간에서 상수 시간이다.

DOM 노드에 데이터를 지정하기 위해서 직접 속성을 지정할 수도 있지만 `data-\*` 속성을 사용할 수도 있다. 여기에는 다른 스크립트도 모두 그 속성에 접근할 수 있다는 나쁜 점이 있다. `Map`과 `WeakMap`은 오브젝트만 사용할 수 있는 개인 데이터를 쉽게 만들 수 있게 해준다.

### Structured data: JSON

JSON(**J**ava**S**cript **O**bject **N**otation)은 JavaScript에서 파생된 경량 데이터 교환 형식이지만 많은 프로그래밍 언어에서 사용됩니다. JSON은 범용 데이터 구조를 구축합니다.

세부사항은 [JSON](/ko/docs/Glossary/JSON) 와 {{jsxref("JSON")}} 를 보세요.

### 표준 라이브러리의 더 많은 객체

JavaScript에는 내장 객체의 표준 라이브러리가 있습니다.

더 많은 객체에 대해 알아보려면 [참조](/ko/docs/Web/JavaScript/Reference/Global_Objects)를  살펴보십시오.

## `typeof` 연산자를 사용하여 유형 결정

`typeof` 연산자는 변수의 유형을 찾는 데 도움이 될 수 있습니다.

자세한 내용과 edge cases에 대한 정보는 [reference page](/ko/docs/Web/JavaScript/Reference/Operators/typeof)를 참고하세요.

## 같이보기

- [Nicholas Zakas collection of common data structure and common algorithms in JavaScript.](https://github.com/nzakas/computer-science-in-javascript/)
- [Search Tre(i)es implemented in JavaScript](https://github.com/monmohan/DataStructures_In_Javascript)
- [Data Types and Values in the ECMAScript specification](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)
