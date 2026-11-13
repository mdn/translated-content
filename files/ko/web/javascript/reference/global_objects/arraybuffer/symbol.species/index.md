---
title: ArrayBuffer[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/Symbol.species
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

**`ArrayBuffer[Symbol.species]`** 정적 접근자 속성은 배열 버퍼 메서드에서 반환 값을 생성하는데 사용되는 생성자를 반환합니다.

> [!WARNING]
> `Symbol.species` 존재는 임의의 코드가 실행될 수 있게하며 보안 취약점이 발생할 수 있습니다. 또한 어떠한 최적화를 훨씬 어렵게 만들 수 있습니다. 엔진 구현자들은 [이 기능을 제거할지 여부를 검토 중](https://github.com/tc39/proposal-rm-builtin-subclassing) 입니다. 가능하면 이 기능에 의존하지 마시기 바랍니다.

## 구문

```js-nolint
ArrayBuffer[Symbol.species]
```

### 반환 값

`get [Symbol.species]`이 호출된 생성자(`this`)의 값입니다. 반환 값은 새 배열 버퍼를 생성하는 배열 버퍼 메서드에서 반환 값을 구성하는 데 사용됩니다.

## 설명

`Symbol.species` 접근자 속성은 `ArrayBuffer` 객체를 생성하기 위한 기본 생성자를 반환합니다. 하위 클래스 생성자는 생성자 할당을 변경하기 위해 재정의 할 수 있습니다. 기본 구현은 기본적으로 아래와 같습니다.

```js
// 예시를 위한 가상의 구현
class ArrayBuffer {
  static get [Symbol.species]() {
    return this;
  }
}
```

이 다형성 구현으로 인해 파생된 하위 클래스의 `Symbol.species`은 기본적으로 생성자 자체도 반환합니다.

```js
class SubArrayBuffer extends ArrayBuffer {}
SubArrayBuffer[Symbol.species] === SubArrayBuffer; // true
```

기존 객체를 변경하지 않고 새 배열 버퍼 인스턴스를 반환하는 배열 버퍼 메서드를 호출할 때(예를 들어 [`slice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice)) 객체의 `constructor[Symbol.species]`에 접근하게 됩니다. 반환된 생성자는 배열 버퍼 메서드의 반환값을 구성하는 데 사용됩니다.

## 예제

### 일반적인 객체에서의 Species

`Symbol.species` 속성은 기본 생성자 함수, 즉 `ArrayBuffer`의 `ArrayBuffer` 생성자를 반환합니다.

```js
ArrayBuffer[Symbol.species]; // function ArrayBuffer()
```

### 파생 객체에서의 Species

`MyArrayBuffer`와 같은 사용자 정의 `ArrayBuffer` 하위 클래스의 인스턴스에서 `MyArrayBuffer`의 Species은 `MyArrayBuffer` 생성자입니다. 그러나 파생 클래스 메서드에서 부모 `ArrayBuffer` 객체를 반환하기 위해 이를 덮어쓸 수 있습니다.

```js
class MyArrayBuffer extends ArrayBuffer {
  // 부모 ArrayBuffer 생성자에 MyArrayBuffer Species 를 덮어 씀
  static get [Symbol.species]() {
    return ArrayBuffer;
  }
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("ArrayBuffer")}}
- {{jsxref("Symbol.species")}}
