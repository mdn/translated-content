---
title: Array[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.species
original_slug: Web/JavaScript/Reference/Global_Objects/Array/@@species
l10n:
  sourceCommit: 34a34bee83fb4accf073ebc0c8cfc8eff956dc9b
---

{{JSRef}}

**`Array[@@species]`** 정적 접근자 속성은 배열 메서드에서 반환 값을 구성하는 데 사용되는 생성자를 반환합니다.

> **경고:** `@@species`가 존재하면 임의 코드가 실행될 수 있어 보안 취약점이 발생할 수 있습니다. 또한 특정 최적화를 훨씬 더 어렵게 만듭니다. 엔진 구현자는 [이 기능을 제거할지 검토](https://github.com/tc39/proposal-rm-builtin-subclassing)하고 있습니다. 가능하면 이 기능에 의존하지 마십시오. {{jsxref("Array/toReversed", "toReversed()")}}와 같은 최신 배열 메서드는 `@@species`를 사용하지 않으며, 항상 새 `Array` 기반 클래스 인스턴스를 반환합니다.

## 구문

```js-nolint
Array[Symbol.species]
```

### 반환 값

`get @@species`가 호출된 생성자(`this`)의 값입니다. 반환값은 새 배열을 생성하는 배열 메서드에서 반환값을 구성하는 데 사용됩니다.

## 설명

`@@species` 접근자 속성은 `Array` 객체에 대한 기본 생성자를 반환합니다. 하위 클래스 생성자가 이를 재정의하여 생성자 할당을 변경할 수 있습니다. 기본 구현은 기본적으로 다음과 같습니다.

```js
// 설명을 위한 가상의 내부 구현
class Array {
  static get [Symbol.species]() {
    return this;
  }
}
```

이 다형성 구현으로 인해 파생된 하위 클래스의 `@@species`도 기본적으로 생성자 자체를 반환합니다.

```js
class SubArray extends Array {}
SubArray[Symbol.species] === SubArray; // true
```

기존 배열을 변경하지 않고 새 배열 인스턴스를 반환하는 배열 메서드(예: [`filter()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [`map()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map))를 호출하면, 배열의 `constructor[@@species]`에 접근합니다. 반환된 생성자는 배열 메서드의 반환값을 구성하는 데 사용됩니다. 이렇게 하면 배열 메서드가 배열과 관련이 없는 객체를 반환하도록 만드는 것이 기술적으로 가능합니다.

```js
class NotAnArray {
  constructor(length) {
    this.length = length;
  }
}

const arr = [0, 1, 2];
arr.constructor = { [Symbol.species]: NotAnArray };
arr.map((i) => i); // NotAnArray { '0': 0, '1': 1, '2': 2, length: 3 }
arr.filter((i) => i); // NotAnArray { '0': 1, '1': 2, length: 0 }
arr.concat([1, 2]); // NotAnArray { '0': 0, '1': 1, '2': 2, '3': 1, '4': 2, length: 5 }
```

## 예제

### 일반 객체의 species

`@@species` 속성은 기본 생성자 함수, 즉 `Array`의 `Array` 생성자를 반환합니다.

```js
Array[Symbol.species]; // [Function: Array]
```

### 파생 객체의 species

`MyArray`와 같은 사용자 정의 `Array`의 하위 클래스의 인스턴스에서, `MyArray`의 species는 `MyArray` 생성자입니다. 그러나 파생 클래스 메서드에서 부모 `Array` 객체를 반환하려면 이를 덮어쓰는 것이 좋습니다:

```js
class MyArray extends Array {
  // MyArray species를 부모 Array 생성자로 재설정
  static get [Symbol.species]() {
    return Array;
  }
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`Array[@@species]` 폴리필과 `core-js`의 영향을 받는 모든 `Array` 메서드에서의 `@@species` 지원](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스된 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
