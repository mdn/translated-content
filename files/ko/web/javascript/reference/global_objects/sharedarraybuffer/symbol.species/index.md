---
title: SharedArrayBuffer[Symbol.species]
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/Symbol.species
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

**`SharedArrayBuffer[Symbol.species]`** 정적 접근자 속성은 `SharedArrayBuffer` 메서드에서 반환 값을 생성하는 데 사용되는 생성자를 반환합니다.

> [!WARNING] > [Symbol.species]의 존재로 인해 임의의 코드 실행이 가능하며, 이는 보안 취약점을 만들 수 있습니다. 또한 특정 최적화를 매우 어렵게 만듭니다. 엔진 구현자들은 [이 기능을 제거할지 검토](https://github.com/tc39/proposal-rm-builtin-subclassing) 중입니다. 가능하다면 이 기능에 의존하지 않는 것이 좋습니다.

## 구문

```js-nolint
SharedArrayBuffer[Symbol.species]
```

### 반환 값

`get [Symbol.species]`가 호출된 생성자(`this`)의 값입니다. 이 반환 값은 새로운 배열 버퍼를 생성하는 배열 버퍼 메서드의 반환 값을 구성하는 데 사용됩니다.

## 설명

`[Symbol.species]` 접근자 속성은 `SharedArrayBuffer` 객체의 기본 생성자를 반환합니다. 하위 클래스 생성자는 이를 재정의하여 생성자 할당을 변경할 수 있습니다. 기본 구현은 기본적으로 다음과 같습니다.

```js
// 설명을 위한 가상의 기본 구현
class SharedArrayBuffer {
  static get [Symbol.species]() {
    return this;
  }
}
```

이러한 다형성 구현으로 인해, 파생된 하위 클래스의 `[Symbol.species]`도 기본적으로 생성자 자체를 반환합니다.

```js
class SubArrayBuffer extends SharedArrayBuffer {}
SubArrayBuffer[Symbol.species] === SharedArrayBuffer; // true
```

기존 배열을 변경하지 않고 새로운 배열 버퍼 인스턴스를 반환하는 배열 버퍼 메서드(예: [`slice()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice))를 호출할 때, 배열의 `constructor[Symbol.species]`에 접근합니다. 반환된 생성자는 배열 버퍼 메서드의 반환 값을 구성하는 데 사용됩니다.

## 예제

### 원본 객체에서 Species

`[Symbol.species]` 속성은 기본 생성자 함수를 반환합니다. `SharedArrayBuffer`의 경우 이는 `SharedArrayBuffer` 생성자입니다.

```js
SharedArrayBuffer[Symbol.species]; // function SharedArrayBuffer()
```

### 파생 객체에서 Species

`MySharedArrayBuffer`와 같은 사용자 정의 `SharedArrayBuffer` 하위 클래스의 인스턴스에서, `MySharedArrayBuffer` species는 `MySharedArrayBuffer`의 생성자입니다. 그러나 파생 클래스 메서드에서 부모 `SharedArrayBuffer` 객체를 반환하고 싶다면 이를 재정의할 수 있습니다.

```js
class MySharedArrayBuffer extends SharedArrayBuffer {
  // SharedArrayBuffer species를 부모 SharedArrayBuffer 생성자로 덮어 씌웁니다.
  static get [Symbol.species]() {
    return SharedArrayBuffer;
  }
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("SharedArrayBuffer")}}
- {{jsxref("Symbol.species")}}
