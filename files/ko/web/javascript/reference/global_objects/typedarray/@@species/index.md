---
title: get TypedArray[@@species]
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@species
---

{{JSRef}}

**`TypedArray[@@species]`** 접근자 속성은 [형식화 배열](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_객체)의 생성자를 반환합니다.

## 설명

`species` 접근자 속성은 [형식화 배열](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_객체) 객체에 대한 기본 생성자를 반환합니다. 하위 클래스 생성자는 이를 재정의하여 생성자의 할당 값을 변경할 수 있습니다.

## 예제

### 일반 객체의 species

`species` 속성은 지정된 [형식화 배열](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_객체) 객체에 대한 형식화 배열 생성자 중 하나인 기본 생성자 함수를 반환합니다.

```js
Int8Array[Symbol.species]; // function Int8Array()
Uint8Array[Symbol.species]; // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
```

### 파생 객체의 species

파생 컬렉션 객체(예: 사용자 지정 형식 배열 `MyTypedArray`)에서 `MyTypedArray`의 species는 `MyTypedArray` 생성자입니다. 그러나 파생 클래스 메서드에서 부모의 [형식화 배열](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_객체) 객체를 반환하기 위해 이를 덮어쓸 수 있습니다.

```js
class MyTypedArray extends Uint8Array {
  // Overwrite MyTypedArray species to the parent Uint8Array constructor
  static get [Symbol.species]() {
    return Uint8Array;
  }
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("TypedArray")}}
- {{jsxref("Symbol.species")}}
