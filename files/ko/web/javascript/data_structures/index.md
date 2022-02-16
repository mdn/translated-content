---
title: JavaScript의 타입과 자료구조
slug: Web/JavaScript/Data_structures
tags:
  - Beginner
  - Guide
  - JavaScript
  - Types
translation_of: Web/JavaScript/Data_structures
---

{{jsSidebar("More")}}

모든 프로그래밍 언어에는 내장된 자료구조가 존재하지만 보통 그 내용은 언어마다 다릅니다. 이 글에서는 JavaScript에서 사용할 수 있는 내장 자료구조와 그 속성에 대해 알아보겠습니다. 그러면 이 자료구조들을 다른 자료구조 개발에 사용할 수 있을 것입니다. 가능하다면 다른 언어와도 비교해보겠습니다.

## 동적 타입

JavaScript는 느슨한 타입(loosely typed)의 동적(dynamic) 언어입니다. JavaScript의 변수는 어떤 특정 타입과 연결되지 않으며, 모든 타입의 값으로 할당 (및 재할당) 가능합니다.

```js
let foo = 42 // foo가 숫자
foo = 'bar' // foo가 이제 문자열
foo = true // foo가 이제 불리언
```

## JavaScript의 타입

JavaScript 언어의 타입은 [원시 값](#원시_값)과 [객체](#객체)로 나뉩니다.

- [원시 값](#원시_값) (언어의 최고 로우레벨에서 직접 표현되는 불변 데이터)
  - [Boolean 타입](#불리언_타입)
  - [Null 타입](#null_타입)
  - [Undefined 타입](#undefined_타입)
  - [Number 타입](#숫자_타입)
  - [BigInt 타입](#bigint_타입)
  - [String 타입](#문자열_타입)
  - [Symbol 타입](#심볼_타입)
- [객체](#객체) (속성의 컬렉션)

## 원시 값

객체를 제외한 모든 타입은 불변 값(변경할 수 없는 값)을 정의합니다. 예를 들어 (C 언어와는 달리) 문자열은 불변합니다. 이런 일련의 타입을 "원시 값"이라고 합니다.

### Boolean 타입

Boolean 타입은 논리 요소를 나타내며 `true`와 `false` 두 가지의 값을 가질 수 있습니다. {{glossary("Boolean", "불리언")}}과 {{jsxref("Boolean")}}에서 더 자세히 알아보세요.

### Null 타입

Null 타입은 `null` 하나의 값만 가질 수 있습니다. {{glossary("Null")}}과 {{jsxref("null")}}에서 더 자세히 알아보세요.

### Undefined 타입

값을 할당하지 않은 변수는 `undefined` 값을 가집니다. {{glossary("Undefined")}}와 {{jsxref("undefined")}}에서 더 자세히 알아보세요.

### Number 타입

ECMAScript는 **Number**와 **BigInt** 두 가지의 내장 숫자 타입을 가지고 있습니다. (BigInt는 아래를 보세요)

Number 타입은 [배정밀도 64비트 이진 형식 IEEE 754 값](https://en.wikipedia.org/wiki/Double_precision_floating-point_format)(-(2^53 − 1)부터 2^53 − 1까지의 수)입니다. Number 타입은 부동소수점 숫자 외에도 `+Infinity`, `-Infinity`, {{jsxref("NaN")}}("**N**ot a **N**umber") 세 개의 상징적인 값을 가집니다.

{{jsxref("Infinity", "±Infinity")}} 범위 내에서 가능한 가장 크거나 작은 수를 확인하려면 {{jsxref("Number.MAX_VALUE")}}와 {{jsxref("Number.MIN_VALUE")}} 상수를 사용할 수 있습니다.

> **참고:** ECMAScript 2015부터는 {{jsxref("Number.isSafeInteger()")}}와 {{jsxref("Number.MAX_SAFE_INTEGER")}} 및 {{jsxref("Number.MIN_SAFE_INTEGER")}}를 사용하여 숫자가 배정밀도 부동 소수점 숫자 범위 안에 있는지 확인할 수도 있습니다.
>
> 이 범위를 넘어서면 JavaScript의 정수는 더 이상 안전하지 않으며, 그 값의 배정밀도 부동 소수점 근삿값이 됩니다.

Number 타입의 값 중 두 가지 방식으로 표현할 수 있는 유일한 값으로 `0`이 있습니다. `0`은 `-0`과 `+0` 둘 다로 표현할 수 있습니다. (`0`은 `+0`의 별칭입니다)

실제로는 이 사실이 영향을 주는 것은 거의 없습니다. 예컨대 `+0 === -0`은 참입니다. 그러나 0으로 나눌 경우 둘의 차이를 볼 수 있을 것입니다.

```js
> 42 / +0
Infinity
> 42 / -0
-Infinity
```

숫자는 보통 그 값만으로 표현되긴 하지만, JavaScript는 [이진(비트) 연산자](/ko/docs/Web/JavaScript/Reference/Operators)도 제공합니다.

> **참고:** [비트 마스킹](<https://ko.wikipedia.org/wiki/마스크_(컴퓨팅)>)을 사용해서 하나의 숫자 안에 다수의 불리언 값을 나타낼 때 비트 연산자를 사용할 수 있긴 하지만 이건 보통 나쁜 방법으로 여겨집니다. JavaScript는 일련의 불리언 값들을 나타내는 방법을 (배열이나 불리언 속성 값을 할당한 객체로) 제공합니다. 비트 마스킹은 코드를 읽고, 이해하고, 유지하기 힘들게 만듭니다.
>
> 다만 로컬 저장소의 한정된 공간을 활용해야 한다거나, 네트워크의 비트 하나하나가 소중한 극한 상황처럼 제한된 환경에서는 이런 기술이 필요할 수도 있습니다. 비트 마스킹은 용량 최적화의 마지막 수단으로만 고려해야 합니다.

### BigInt 타입

BigInt 타입은 임의 정밀도로 정수를 나타낼 수 있는 JavaScript 숫자 원시 값입니다. BigInt를 Number의 안전 한계를 넘어서는 큰 정수도 안전하게 저장하고 연산할 수 있습니다.

BigInt는 정수 끝에 `n`을 추가하거나 생성자를 호출해 생성할 수 있습니다.

Number의 안전 한계는 {{jsxref("Number.MAX_SAFE_INTEGER")}}로 알아볼 수 있습니다. BigInt의 도입 이후로는 이 한계를 넘는 숫자에 대해 계산이 가능합니다.

다음 예제는 `Number.MAX_SAFE_INTEGER` 밖으로 나가는 정수에서도 예상된 값을 반환하는 것을 보입니다.

```js
> const x = 2n ** 53n;
9007199254740992n
> const y = x + 1n;
9007199254740993n
```

`+`, `*`, `-`, `**`, `%` 연산자를 Number에 사용하듯 BigInt에서도 사용할 수 있습니다. BigInt는 Number와 엄격하게 같지는 않지만 유사합니다.

BigInt는 `if`, `||`, `&&`, `Boolean`, `!`처럼 불리언 변환이 발생하는 곳에서는 `Number`처럼 동작합니다.

BigInt는 Number와 혼합해 연산할 수 없으며, 이때 {{jsxref("TypeError")}}가 발생합니다.

### String 타입

JavaScript의 String 타입은 텍스트 데이터를 나타낼 때 사용합니다. String은 16비트 부호 없는 정수 값 "요소"로 구성된 집합으로, 각각의 요소가 String의 한 자리를 차지합니다. 첫 번째 요소는 인덱스 `0`에, 그 다음 요소는 인덱스 `1`, 그 다음은 `2`, ...입니다. String의 길이는 그 안의 요소 수와 같습니다.

C 언어와 같은 일부 프로그래밍 언어와 달리 JavaScript 문자열은 불변합니다. 즉 문자열을 생성한 후 바꾸는 것은 불가능합니다.

그러나 원본 문자열을 사용해 새로운 문자열을 생성하는 것은 가능합니다. 예를 들어,

- 원본 문자열에서 각각의 문자를 선택하거나 {{jsxref("String.substr()")}}을 사용해 생성한 부분문자열
- 연결 연산자(`+`)를 사용하거나 {{jsxref("String.concat()")}}을 사용해 두 개의 문자열을 합친 결과물

#### "문자열의 타입화"를 조심하라!

문자열을 사용해 복잡한 데이터를 표현하는 것이 매력적으로 보일지도 모르고, 단기적으로는 다음과 같은 장점이 있습니다.

- 연결 연산자를 통해 복잡한 문자열을 쉽게 만들 수 있습니다.
- 문자열은 디버깅이 쉽습니다. (출력 내용이 항상 문자열의 값과 동일)
- 문자열은 많은 API([입력 칸](/ko/docs/Web/API/HTMLInputElement), [로컬 스토리지](/ko/docs/Web/API/Web_Storage_AP) 값, `responseText`와 함께 사용하는 [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) 등등)의 공통 분모입니다.

규칙만 잘 정한다면 어떤 자료구조라도 문자열로 표현할 수 있습니다. 그러나 그게 좋은 방법이 되는 것은 아닙니다. 예컨대, 구분자를 사용하면 (물론 JavaScript 배열이 더 적합하겠지만) 문자열로 리스트를 흉내낼 수도 있을 것입니다. 그러나 구분자를 리스트의 요소로 사용하는 순간 리스트가 망가지고 맙니다. 이제 구분자를 구분하기 위해 이스케이프 문자를 선택하고, 등등... 이 모든 것이 각자의 규칙을 필요로 하고 불필요한 유지보수 부담을 낳습니다.

문자열은 텍스트 데이터에만 사용하세요. 복잡한 데이터를 표현해야 할 땐 문자열을 파싱해서 적합한 추상화로 덮으세요.

### Symbol 타입

Symbol은 **고유**하고 **변경 불가능한** 원시 값이며 객체의 속성(아래를 참고하세요) 키로 사용할 수 있습니다. 어떤 프로그래밍 언어들에선 "아톰"이라고 부르기도 합니다.

[심볼](/ko/docs/Glossary/Symbol)과 {{jsxref("Symbol")}}에서 더 자세히 알아보세요.

## 객체

컴퓨터 과학에서의 객체란 [식별자](/ko/docs/Glossary/Identifier)로 참조할 수 있는 메모리 상의 값을 말합니다.

### 속성

JavaScript에서의 객체는 속성의 컬렉션으로 볼 수 있습니다. [객체 리터럴 구문](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#객체_리터럴)을 사용해 제한적으로 속성을 초기화할 수의 있고, 그 후에 속성을 추가하거나 제거할 수도 있습니다. 속성 값으로는 다른 객체를 포함해 모든 타입을 사용할 수 있으므로 복잡한 자료구조의 구축이 가능합니다. 속성은 '키' 값으로 식별하며, 키 값으로는 {{glossary("String", "문자열 값")}}이나 {{glossary("Symbol", "심볼")}}을 사용할 수 있습니다.

객체 속성에는 [데이터 속성](#데이터_속성)과 [접근자 속성](#접근자_속성) 두 종류가 있습니다.

> **참고:** 각각의 속성에는 다시 '특성'들이 존재합니다. 특성은 JavaScript 엔진이 내부적으로 사용하므로 직접 접근하는 것은 불가능합니다. 따라서 특성은 표기할 때 이중 대괄호로 감싸서 나타냅니다.
>
> {{jsxref("Object.defineProperty()")}}에서 더 알아보세요.

#### 데이터 속성

데이터 속성은 키를 값과 연결하며, 다음과 같은 특성을 가집니다.

<table class="standard-table">
  <caption>
    데이터 속성의 특성
  </caption>
  <thead>
    <tr>
      <th scope="col">특성</th>
      <th scope="col">타입</th>
      <th scope="col">설명</th>
      <th scope="col">기본 값</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[[Value]]</td>
      <td>모든 JavaScript 타입</td>
      <td>속성에 대한 회수 접근에 반환하는 값입니다.</td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td>[[Writable]]</td>
      <td>Boolean</td>
      <td>
        <code>false</code>면 속성의 [[Value]]를 바꿀 수 없습니다.
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>[[Enumerable]]</td>
      <td>Boolean</td>
      <td>
        <p>
          <code>true</code>면 속성이
          <a href="/ko/docs/Web/JavaScript/Reference/Statements/for...in"
             ><code>for...in</code></a
          >
          반복문에 노출됩니다.
          <br />
          <a
            href="/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties"
            >열거 가능성과 속성 소유권</a
          >을 참고하세요.
        </p>
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>[[Configurable]]</td>
      <td>Boolean</td>
      <td>
        <code>false</code>면 속성을 삭제하거나, 접근자 속성으로 변경하거나, [[Value]]와 [[Writable]]을 제외한 특성을 변경할 수 없습니다.
      </td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

| 특성       | 타입    | 설명                                       |
| ---------- | ------- | ------------------------------------------ |
| Read-only  | Boolean | ES5 [[Writable]] 특성의 반대 값입니다.     |
| DontEnum   | Boolean | ES5 [[Enumerable]] 특성의 반대 값입니다.   |
| DontDelete | Boolean | ES5 [[Configurable]] 특성의 반대 값입니다. |

#### 접근자 속성

접근자 속성은 키를 두 개의 접근자 함수(`get`, `set`) 중 하나 이상과 연결하여 값을 가져오거나 저장합니다.

> **참고:** 접근자 '메서드'가 아니라 접근자 '속성'임을 인지하는 것이 중요합니다. JavaScript 객체에도 함수 값을 사용해서 클래스처럼 접근자를 부여할 수 있지만, 그렇다고 그 객체가 클래스로 바뀌는 것은 아닙니다.

접근자 속성은 다음과 같은 특성을 가집니다.

<table class="standard-table">
  <caption>
    접근자 속성의 특성
  </caption>
  <thead>
    <tr>
      <th scope="col">특성</th>
      <th scope="col">타입</th>
      <th scope="col">설명</th>
      <th scope="col">기본 값</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[[Get]]</td>
      <td>함수 객체 또는 Undefined</td>
      <td>
        값에 대해 접근을 시도하면 매개변수 없이 호출해서 속성 값을 회수합니다.
        <a href="/ko/docs/Web/JavaScript/Reference/Functions/get"><code>get</code>을 참고하세요.
      </td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td>[[Set]]]</td>
      <td>함수 객체 또는 Undefined</td>
      <td>
        값에 대해 변경을 시도하면 변경을 시도한 값을 유일한 매개변수로 사용해 호출합니다.
        <a href="/ko/docs/Web/JavaScript/Reference/Functions/set"><code>set</code>을 참고하세요.
      </td>
      <td><code>undefined</code></td>
    </tr>
    <tr>
      <td>[[Enumerable]]</td>
      <td>Boolean</td>
      <td>
        <p>
          <code>true</code>면 속성이
          <a href="/ko/docs/Web/JavaScript/Reference/Statements/for...in"
             ><code>for...in</code></a
          >
          반복문에 노출됩니다.
        </p>
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>[[Configurable]]</td>
      <td>Boolean</td>
      <td>
        <code>false</code>면 속성을 삭제하거나 데이터 속성으로 변경할 수 없습니다.
      </td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

### "일반" 객체와 함수

JavaScript 객체는 키와 값 사이의 맵핑입니다. 키는 문자열 또는 심볼이고 값은 아무 것이나 가능합니다. 따라서 객체는 자연스럽게 [해시 테이블](https://ko.wikipedia.org/wiki/해시_테이블)에 적합합니다.

함수는 '호출이 가능함'을 제외하면 일반적인 객체입니다.

### 날짜

날짜와 시간을 나타낼 때의 가장 좋은 선택은 JavaScript 내장 [`Date` 유틸리티](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)를 사용하는 것입니다.

### 인덱스 컬렉션: 배열과 형식화 배열

[배열](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)은 정수 키를 가진 속성과 `length` 속성 사이에 특별한 연관을 지어놓은 일반 객체입니다.

이에 더해, 배열은 `Array.prototype`을 상속하여 배열을 조작할 수 있는, {{jsxref("Array.prototype.indexOf", "indexOf()")}}(배열에서 값 탐색), {{jsxref("Array.prototype.push", "push()")}}(배열에 값 추가) 등 다양하고 편리한 메서드를 제공합니다.

[형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)은 안쪽의 이진 데이터 버퍼에 대해 배열과 같은 뷰를 제공합니다. 다음 표에서 형식화 배열에 대응하는 C 타입을 볼 수 있습니다.

| 타입                            | 값 범위                      | 바이트 크기 | 설명                                                             | Web IDL 타입          | 대응하는 C 타입                 |
| ------------------------------- | ---------------------------- | ----------- | ---------------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxref("Int8Array")}}         | `-128` ~ `127`               | 1           | 8비트 2의 보수 부호 있는 정수                                    | `byte`                | `int8_t`                        |
| {{jsxref("Uint8Array")}}        | `0` ~ `255`                  | 1           | 8비트 부호 없는 정수                                             | `octet`               | `uint8_t`                       |
| {{jsxref("Uint8ClampedArray")}} | `0` ~ `255`                  | 1           | 8비트 부호 없는 정수 (클램핑)                                    | `octet`               | `uint8_t`                       |
| {{jsxref("Int16Array")}}        | `-32768` ~ `32767`           | 2           | 16비트 2의 보수 부호 있는 정수                                   | `short`               | `int16_t`                       |
| {{jsxref("Uint16Array")}}       | `0` ~ `65535`                | 2           | 16비트 부호 없는 정수                                            | `unsigned short`      | `uint16_t`                      |
| {{jsxref("Int32Array")}}        | `-2147483648` ~ `2147483647` | 4           | 32비트 2의 보수 부호 있는 정수                                   | `long`                | `int32_t`                       |
| {{jsxref("Uint32Array")}}       | `0` ~ `4294967295`           | 4           | 32비트 부호 없는 정수                                            | `unsigned long`       | `uint32_t`                      |
| {{jsxref("Float32Array")}}      | `1.2E-38` ~ `3.4E38`         | 4           | 32비트 IEEE 부동소수점 실수 (7개의 유효숫자, e.g. `1.1234567`)   | `unrestricted float`  | `float`                         |
| {{jsxref("Float64Array")}}      | `5E-324` ~ `1.8E308`         | 8           | 64비트 IEEE 부동소수점 실수 (16개의 유효숫자, e.g. `1.123...15`) | `unrestricted double` | `double`                        |
| {{jsxref("BigInt64Array")}}     | `-2^63` ~ `2^63 - 1`         | 8           | 64비트 2의 보수 부호 있는 정수                                   | `bigint`              | `int64_t (signed long long)`    |
| {{jsxref("BigUint64Array")}}    | `0` ~ `2^64 - 1`             | 8           | 64비트 부호 없는 정수                                            | `bigint`              | `uint64_t (unsigned long long)` |

### 키 컬렉션: Map, Set, WeakMap, WeakSet

키 컬렉션 자료구조는 ECMAScript 6판에 추가됐으며 객체 참조를 키로 가집니다. {{jsxref("Set")}}과 {{jsxref("WeakSet")}}은 객체의 집합을 나타내며 {{jsxref("Map")}}과 {{jsxref("WeakMap")}}은 객체와 값을 연결짓습니다.

`Map`과 `WeakMap`의 차이는 `Map`에서만 객체 키를 열거할 수 있다는 점입니다. 덕분에 `WeakMap`에 대해서는 가비지 컬렉션 최적화를 수행할 수 있습니다.

`Map`과 `Set`은 순수한 ECMAScript 5에서도 구현할 수 있습니다. 그러나 객체를 직접 비교(`<`, "작음" 비교와 같이)할 방법은 없으므로 탐색 성능이 선형(_O(n)_)으로 강제됩니다. 반면 (`WeakMap`을 포함해) 네이티브 구현의 경우 대략 로그 시간(_O(log n)_)에 가까운 성능을 낼 수 있습니다.

보통 DOM 노드에 데이터를 연결할 땐 해당 객체에 직접 속성을 추가하거나 `data-*` 특성을 사용하겠지만, 같은 맥락 아래에서라면 이렇게 추가한 데이터를 모든 스크립트에서 다 사용할 수 있다는 문제가 있습니다. `Map`과 `WeakMap`을 사용하면 비공개 데이터를 객체에 쉽게 바인딩 할 수 있습니다.

### 구조화된 자료: JSON

JSON(**J**ava**S**cript **O**bject **N**otation)은 경량 데이터 교환 형식으로, JavaScript에서 파생됐지만 많은 프로그래밍 언어에서 사용하고 있습니다. JSON은 범용 데이터 구조를 구성합니다.

{{glossary("JSON")}}과 {{jsxref("JSON")}}에서 더 자세히 알아보세요.

### 표준 라이브러리의 더 많은 객체

JavaScript는 내장 객체로 구성된 표준 라이브러리를 포함합니다.

[참고서](/ko/docs/Web/JavaScript/Reference/Global_Objects)에서 내장 객체들에 대해 알아보세요.

## `typeof` 연산자를 사용한 타입 판별

`typeof` 연산자를 사용하면 변수의 타입을 알아낼 수 있습니다.

[참고서](/ko/docs/Web/JavaScript/Reference/Operators/typeof)에서 사용법과 주의사항에 대해 알아보세요.

## 같이 보기

- [ECMAScript 명세의 데이터 타입과 값](https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values)
