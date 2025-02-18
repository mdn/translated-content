---
title: Symbol.species
slug: Web/JavaScript/Reference/Global_Objects/Symbol/species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`Symbol.species`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#잘_알려진_심볼) `Symbol.species`을 나타냅니다. 객체의 복사본을 생성하는 메서드는 생성자 함수가 복사본을 만들 때 사용할 객체에서 이 심볼을 검색할 수 있습니다.

> **경고:** `Symbol.species`가 존재하면 임의의 코드가 실행될 수 있으며 보안 취약점이 발생할 수 있습니다. 또한 특정 최적화를 훨씬 더 어렵게 만듭니다. 엔진 구현자는 [이 기능을 제거할지 여부를 조사](https://github.com/tc39/proposal-rm-builtin-subclassing)하고 있습니다. 가능하면 이 기능을 사용하지 마세요.

{{InteractiveExample("JavaScript Demo: Symbol.species")}}

```js interactive-example
class Array1 extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

const a = new Array1(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof Array1);
// Expected output: false

console.log(mapped instanceof Array);
// Expected output: true
```

## 값

잘 알려진 심볼 `Symbol.species`.

{{js_property_attributes(0, 0, 0)}}

## 설명

`Symbol.species` 접근자 속성을 사용하면 하위 클래스가 객체의 기본 생성자를 재정의할 수 있습니다. 이는 인스턴스 복사 방법에 대한 프로토콜을 지정합니다. 예를 들어, 배열의 복사 메서드를 사용하는 경우 {{jsxref("Array/map", "map()")}}와 같이 `map()` 메서드는 `instance.constructor[Symbol.species]`를 사용하여 새 배열을 구성하기 위한 생성자를 가져옵니다. 자세한 내용은 [하위 클래스 내장](/ko/docs/Web/JavaScript/Reference/Classes/extends#subclassing_built-ins)를 참조하십시오.

`Symbol.species`의 모든 내장 구현은 현재 인스턴스의 생성자인 `this` 값을 반환합니다. 따라서 메서드를 복사하면 기본 클래스가 아닌 파생 클래스의 인스턴스를 생성할 수 있습니다(예: `map()`은 원래 배열과 동일한 유형의 배열을 반환합니다).

## 예제

### species 사용하기

파생된 배열 클래스 `MyArray`에서 {{jsxref("Array")}} 객체를 반환하고 싶을 수 있습니다. 예를 들어 기본 생성자를 반환하는 {{jsxref("Array/map", "map()")}}와 같은 메서드를 사용할 때 이러한 메서드가 `MyArray` 객체 대신 부모 `Array` 객체를 반환하기를 원할 수 있습니다. `species` 심볼을 사용하면 이렇게 할 수 있습니다.

```js
class MyArray extends Array {
  // 부모 배열 생성자로 species 덮어쓰기
  static get [Symbol.species]() {
    return Array;
  }
}
const a = new MyArray(1, 2, 3);
const mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`Array[Symbol.species]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
- [`ArrayBuffer[Symbol.species]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species)
- [`Map[Symbol.species]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.species)
- [`Promise[Symbol.species]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
- [`RegExp[Symbol.species]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.species)
- [`Set[Symbol.species]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Set/Symbol.species)
- [`TypedArray[Symbol.species]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.species)
