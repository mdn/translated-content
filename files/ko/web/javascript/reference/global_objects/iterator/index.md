---
title: Iterator
slug: Web/JavaScript/Reference/Global_Objects/Iterator
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

**`Iterator`** 객체는 반복자 결과 객체를 반환하는 [`next()`] 메서드를 제공함으로써 [반복자 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)을 따르는 객체입니다. 모든 내장 반복자들은 `Iterator` 클래스를 상속합니다. `Iterator` 클래스는 반복자 객체 자신을 반환하는 [`[Symbol.iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator) 메서드를 제공하여 반복자가 [순회 가능](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)하도록 합니다. 또한 반복자를 다루기 위한 보조 메서드들도 제공합니다.

## 설명

다음은 모두 JavaScript에 내장된 반복자입니다.

- _Array Iterator_ 를 반환하는 {{jsxref("Array.prototype.values()")}}, {{jsxref("Array.prototype.keys()")}}, {{jsxref("Array.prototype.entries()")}}, [`Array.prototype[Symbol.iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator), {{jsxref("TypedArray.prototype.values()")}}, {{jsxref("TypedArray.prototype.keys()")}}, {{jsxref("TypedArray.prototype.entries()")}}, [`TypedArray.prototype[Symbol.iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator), [`arguments[Symbol.iterator]()`](/ko/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator).
- _String Iterator_ 를 반환하는 [`String.prototype[Symbol.iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator).
- _Map Iterator_ 를 반환하는 {{jsxref("Map.prototype.values()")}}, {{jsxref("Map.prototype.keys()")}}, {{jsxref("Map.prototype.entries()")}}, [`Map.prototype[Symbol.iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator).
- _Set Iterator_ 를 반환하는 {{jsxref("Set.prototype.values()")}}, {{jsxref("Set.prototype.keys()")}}, {{jsxref("Set.prototype.entries()")}}, [`Set.prototype[Symbol.iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.iterator).
- _RegExp String Iterator_ 를 반환하는 [`RegExp.prototype[Symbol.matchAll]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.matchAll), {{jsxref("String.prototype.matchAll()")}}.
- {{jsxref("Generator")}} 객체를 반환하는 [generator functions](/ko/docs/Web/JavaScript/Reference/Statements/function*).
- _Segments Iterator_ 는 [`[Symbol.iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator) 메소드가 반환하는 값이며, 이 메소드는 [`Intl.Segmenter.prototype.segment()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)에 의해 반환된 [`Segments`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) 객체의 메소드입니다.
- _Iterator Helper_ 는 {{jsxref("Iterator.prototype.filter()")}} 및 {{jsxref("Iterator.prototype.map()")}} 같은 반복자 보조 메소드의 반환 값입니다.

Web API도 반복자를 반환할 수 있습니다. 일부는 JavaScript의 기본 반복자를 재사용하고, 다른 일부는 고유한 반복자를 정의합니다.

- [유사 배열 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects)인 [`NodeList`](/ko/docs/Web/API/NodeList)는 `keys()`, `values()`, `entries()`, 그리고 `[Symbol.iterator]()`와 같은 메소드들로부터 _Array Iterator_ 를 반환합니다.
- [유사 Map 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis)인 [`Headers`](/ko/docs/Web/API/Headers)와 같은 Web API는 `keys()`, `values()`, `entries()`, 그리고 `[Symbol.iterator]()`와 같은 메서드들로부터 _Headers Iterator_ 와 같은 자체 반복자 타입을 반환합니다.
- [유사 Set 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis)인 [`FontFaceSet`](/ko/docs/Web/API/FontFaceSet)와 같은 Web API는 `keys()`, `values()`, `entries()`, 그리고 `[Symbol.iterator]()`와 같은 메서드들로부터 _FontFaceSet Iterator_ 와 같은 자체 반복자 타입을 반환합니다.

> **참고:** [`NodeIterator`](/ko/docs/Web/API/NodeIterator) 및 다른 오래된 인터페이스들은 이름에는 "Iterator"가 들어가 있지만, 실제로는 [반복자 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)이나 [순회 가능 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)을 따르지 않습니다.

각 이터레이터는 고유한 프로토타입 객체를 가지고 있으며, 이 객체는 해당 이터레이터에서 사용되는 `next()` 메서드를 정의합니다. 예를 들어, 모든 문자열 반복자 객체는 숨겨진 객체인 `StringIteratorPrototype`을 상속하며, 이 객체에는 문자열을 코드 포인트 단위로 순회하는 `next()` 메서드가 있습니다. `StringIteratorPrototype`은 초기 값이 문자열 `"String Iterator"`인 [`[Symbol.toStringTag]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성도 가지고 있으며, 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용됩니다. 이와 유사하게, 다른 반복자 프로토타입들도 각각 고유한 `[Symbol.toStringTag]` 값을 가지며, 이 값들은 위에서 언급한 이름들과 동일합니다.

이 모든 프로토타입 객체들은 `Iterator.prototype`을 상속하며, 이 객체는 이터레이터 자신을 반환하는 [`[Symbol.iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) 메서드를 제공함으로써, 반복자가 [순회 가능](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)하도록 합니다.

### 반복자 도우미 메서드

> [!NOTE]
> 이 메서드들은 '순회 가능' 도우미가 아니라 '반복자' 도우미입니다. 객체가 순회 가능하려면 [Symbol.iterator]() 메서드만 존재하면 되기 때문입니다. 이러한 메서드를 설치할 수 있는 공통의 프로토타입은 존재하지 않습니다.

Iterator 클래스 자체는 반복자를 다룰 수 있는 몇 가지 보조 메서드를 제공합니다. 예를 들어, 다음과 같이 사용할 수 있습니다.

```js
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

이 코드는 먼저 {{jsxref("Map.prototype.values()")}} 가 반환하는 반복자를 배열로 변환한 다음, {{jsxref("Array.prototype.reduce()")}} 메서드를 사용하여 합계를 계산합니다. 그러나 이 방법은 중간 배열을 생성하고 그 배열을 두 번 순회하게 됩니다. 대신, 반복자 자체의 `reduce()` 메서드를 사용할 수 있습니다:

```js
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

이 메서드는 특히 메모리 측면에서 더 효율적일 수 있습니다. 왜냐하면 중간 값을 저장하지 않고 반복자를 한 번만 순회하기 때문입니다. 반복자 도우미 메서드는 무한 반복자들을 다루기 위해 필요합니다.

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci();
const firstThreeDigitTerm = seq.find((n) => n >= 100);
```

`seq`는 무한히 진행함으로 배열로 변환할 수 없습니다. 대신, 반복자 자체의 `find()` 메서드를 사용할 수 있습니다. 이 메서드는 조건을 만족하는 첫 번째 값을 찾을 때까지 `seq`를 필요한 만큼만 순회합니다.

배열 메서드와 유사한 많은 반복자 메서드들을 찾을 수 있습니다.

| 반복자 메서드                                 | 배열 메서드                                |
| ------------------------------------------ | --------------------------------------- |
| {{jsxref("Iterator.prototype.every()")}}   | {{jsxref("Array.prototype.every()")}}   |
| {{jsxref("Iterator.prototype.filter()")}}  | {{jsxref("Array.prototype.filter()")}}  |
| {{jsxref("Iterator.prototype.find()")}}    | {{jsxref("Array.prototype.find()")}}    |
| {{jsxref("Iterator.prototype.flatMap()")}} | {{jsxref("Array.prototype.flatMap()")}} |
| {{jsxref("Iterator.prototype.forEach()")}} | {{jsxref("Array.prototype.forEach()")}} |
| {{jsxref("Iterator.prototype.map()")}}     | {{jsxref("Array.prototype.map()")}}     |
| {{jsxref("Iterator.prototype.reduce()")}}  | {{jsxref("Array.prototype.reduce()")}}  |
| {{jsxref("Iterator.prototype.some()")}}    | {{jsxref("Array.prototype.some()")}}    |

{{jsxref("Iterator.prototype.drop()")}} 와 {{jsxref("Iterator.prototype.take()")}} 를 결합하면 {{jsxref("Array.prototype.slice()")}} 와 유사합니다.

### 반복자 도우미 객체

> **참고:** '반복자 도우미 객체' 와 '반복자 도우미 메서드'는 서로 다른 개념입니다. '반복자 도우미 객체'는 런타임에서 감지할 수 있는 반면, '반복자 도우미 메서드' 는 단지 이해를 돕기 위해 부르는 메서드들의 집합을 지칭하는 이름일 뿐입니다. '반복자 도우미' 라는 표현은 문맥에 따라 객체를 의미할 수도 있고, 메서드를 의미할 수도 있습니다.

반복자 도우미 메서드들 중에서 {{jsxref("Iterator/filter", "filter()")}}, {{jsxref("Iterator/flatMap", "flatMap()")}}, {{jsxref("Iterator/map", "map()")}}, {{jsxref("Iterator/drop", "drop()")}}, 그리고 {{jsxref("Iterator/take", "take()")}}는 새로운 '반복자 도우미' 객체를 반환합니다. 이 반복자 도우미는 `Iterator` 인스턴스이기도 하므로, 이러한 도우미 메서드들은 체이닝이 가능합니다. 모든 반복자 도우미 객체는 공통된 프로토타입 객체를 상속하며, 이 프로토타입 객체는 다음과 같은 반복자 프로토콜을 따릅니다.

- `next()`
  - : 내부 반복자의 `next()` 메서드를 호출하고, 도우미 메서드를 그 결과에 적용한 후, 그 결과를 반환합니다.
- `return()`
  - : 내부 반복자의 `return()` 메서드를 호출하고, 그 결과를 반환합니다.

반복자 도우미는 내부 반복자와 동일한 데이터 소스를 공유하므로, 반복자 도우미를 순회하면 내부 반복자 역시 함께 순회됩니다. 반복자를 "분기"하여 여러 번 순회할 수 있도록 만드는 방법은 없습니다.

```js
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentially a copy
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### 완전한 반복자

"반복자"에는 두 가지 종류가 있습니다. 하나는 [반복자 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)을 따르는 객체이며 (이는 `next()` 메서드의 존재만을 요구합니다), 다른 하나는 `Iterator` 클래스를 상속받는 객체로, 도우미 메서드들을 사용할 수 있습니다. 이 둘은 서로를 자동으로 포함하지 않습니다 — `Iterator` 를 상속받는 객체가 자동으로 반복자가 되는 것은 아닙니다. 왜냐하면 `Iterator` 클래스는 `next()` 메서드를 정의하지 않기 때문입니다. 그대신, 객체가 스스로 `next()` 메서드를 정의해야 합니다. '완전한 반복자' 란 반복자 프로토콜을 따르면서 동시에 `Iterator`를 상속받는 객체를 말하며, 대부분의 코드는 반복자가 완전한 반복자일 것을 기대하고, 순회 가능 객체는 완전한 반복자를 반환할 것으로 예상합니다. 완전한 반복자를 만들려면 {{jsxref("Iterator/Iterator", "Iterator")}} 클래스를 확장하는 클래스를 정의하거나, {{jsxref("Iterator.from()")}} 메서드를 사용하면 됩니다.

```js
class MyIterator extends Iterator {
  next() {
    // …
  }
}

const myIterator = Iterator.from({
  next() {
    // …
  },
});
```

## 셍성자

- {{jsxref("Iterator/Iterator", "Iterator()")}}
  - : 반복자를 생성하는 다른 클래스에 의해 [확장](/ko/docs/Web/JavaScript/Reference/Classes/extends)되도록 의도되었습니다. 이 클래스 자체로 인스턴스를 생성하면 오류가 발생합니다.

## 정적 메서드

- {{jsxref("Iterator.from()")}}
  - : 반복자 또는 순회 가능 객체로부터 새로운 `Iterator` 객체를 생성합니다.

## 인스턴스 속성

이러한 속성들은 `Iterator.prototype`에 정의되어 있으며, 모든 `Iterator` 인스턴스들에서 공유됩니다.

- {{jsxref("Object/constructor", "Iterator.prototype.constructor")}}
  - : 인스턴스 객체를 생성한 생성자 함수입니다. `Iterator` 인스턴스의 경우, 초기 값은 {{jsxref("Iterator/Iterator", "Iterator")}} 생성자입니다.
- `Iterator.prototype[Symbol.toStringTag]`

  - : [`[Symbol.toStringTag]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기 값은 문자열 `"Iterator"`입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용됩니다.

    > [!NOTE]
    > 대부분의 내장 클래스에서 `[Symbol.toStringTag]`는 변경할 수 없지만, `Iterator.prototype[Symbol.toStringTag]`는 웹 호환성을 위해 변경할 수 있습니다.

## 인스턴스 메서드

- {{jsxref("Iterator.prototype.drop()")}}
  - : 주어진 수만큼 이 반복자의 처음 몇 개 요소를 건너뛴 새로운 반복자 도우미 객체를 반환합니다.
- {{jsxref("Iterator.prototype.every()")}}
  - : 반복자가 생성한 모든 요소가 제공된 함수의 테스트를 통과하는지 검사합니다.
- {{jsxref("Iterator.prototype.filter()")}}
  - : 콜백 함수가 `true`를 반환하는 요소만을 생성하는 새로운 반복자 도우미 객체를 반환합니다.
- {{jsxref("Iterator.prototype.find()")}}
  - : 제공된 테스트 함수를 만족하는 첫 번째 요소를 반환합니다. 만족하는 값이 없으면 {{jsxref("undefined")}}를 반환합니다.
- {{jsxref("Iterator.prototype.flatMap()")}}
  - : 원래 반복자의 각 요소에 매핑 (mapping) 함수를 적용하고, 그 함수가 반환하는 (다른 반복자 또는 순회 가능 객체에 포함된) 요소들을 생성하는 새로운 반복자 도우미 객체를 반환합니다.
- {{jsxref("Iterator.prototype.forEach()")}}
  - : 반복자가 생성한 각 요소에 대해 한 번씩 제공된 함수를 실행합니다.
- {{jsxref("Iterator.prototype.map()")}}
  - : 반복자의 각 요소에 매핑 (mapping) 함수를 적용한 결과를 생성하는 새로운 반복자 도우미 객체를 반환합니다.
- {{jsxref("Iterator.prototype.reduce()")}}
  - : 반복자가 생성한 각 요소에 대해 사용자가 제공한 리듀서 (reducer) 콜백 함수를 실행하고, 이전 계산 결과를 인자로 전달하여 누적합니다. 모든 요소에 대해 리듀서를 실행한 최종 결과는 하나의 값이 됩니다.
- {{jsxref("Iterator.prototype.some()")}}
  - : 반복자의 요소 중 적어도 하나가 제공된 함수의 테스트를 통과하는지 검사합니다. 불리언 값을 반환합니다.
- {{jsxref("Iterator.prototype.take()")}}
  - :  이 반복자에서 지정된 개수만큼의 요소를 생성한 후 종료하는 새로운 반복자 도우미 객체를 반환합니다.
- {{jsxref("Iterator.prototype.toArray()")}}
  - : 반복자가 생성한 요소들로 채워진 새로운 {{jsxref("Array")}} 인스턴스를 생성합니다.
- [`Iterator.prototype[Symbol.iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.iterator)
  - : 반복자 객체 자신을 반환합니다. 이를 통해 반복자 객체는 순회 가능하게 됩니다.

## 예제

### 반복자를 순회 가능 객체로써 사용하기

모든 내장 반복자는 순회 가능하므로, `for...of` 루프에서 사용할 수 있습니다.

```js
const arrIterator = [1, 2, 3].values();
for (const value of arrIterator) {
  console.log(value);
}
// Logs: 1, 2, 3
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `Iterator`의 폴리필은 [`core-js`](https://github.com/zloirock/core-js#iterator-helpers)에서 확인할 수 있습니다.
- `Iterator` 및 관련 도우미의 [es-shims polyfill](https://www.npmjs.com/package/es-iterator-helpers)은 해당 링크에서 확인할 수 있습니다.
- {{jsxref("Statements/function*", "function*")}}
- [순회 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
