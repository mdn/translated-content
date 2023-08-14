---
title: get Array[@@species]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@species
---

{{JSRef}}

**`Array[@@species]`** 접근자 속성은 `Array` 생성자를 반환합니다.

## 구문

```js
Array[Symbol.species];
```

### 반환 값

{{jsxref("Array")}} 생성자.

## 설명

`species` 접근자 속성은 `Array` 객체의 기본 생성자를 반환합니다. 서브클래스 생성자는 생성자 할당을 변경하기 위해 이 속성을 재정의할 수 있습니다.

## 예제

`species` 속성은 `Array` 객체의 `Array` 생성자를 반환합니다.

```js
Array[Symbol.species]; // function Array()
```

파생 콜렉션 개체(예시: 사용자 설정 배열인 `MyArray`)에서, `MyArray` 종(species)은 `MyArray` 생성자입니다. 그러나 이 속성을 재정의하면 파생 클래스 메서드에서 상위 `Array` 객체를 반환할 수 있습니다.

```js
class MyArray extends Array {
  // MyArray species를 부모 Array 생성자로 재설정
  static get [Symbol.species]() {
    return Array;
  }
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array")}}
- {{jsxref("Symbol.species")}}
