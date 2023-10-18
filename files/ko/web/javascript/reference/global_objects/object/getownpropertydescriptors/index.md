---
title: Object.getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
---

{{JSRef}}

**`Object.getOwnPropertyDescriptors()`** 메서드는 주어진 객체의 모든 속성들의 설명자(descriptor)들을 반환합니다.

{{EmbedInteractiveExample("pages/js/object-getownpropertydescriptors.html")}}

## 구문

```js
Object.getOwnPropertyDescriptors(obj);
```

### 매개변수

- `obj`
  - : 가지고 있는 모든 속성들의 설명자를 반환받고 싶은 객체

### 반환 값

객체의 모든 속성의 설명자를 가지는 객체를 반환합니다. 매개변수 객체에 속성이 없다면, 빈 객체가 반환됩니다.

## 설명

이 메서드를 사용하면, 객체의 모든 속성들에 대한 설명자를 정확하게 확인할 수 있습니다.
자바스크립트의 *속성*은 문자열로된 이름 또는 심볼, 그리고 속성 설명자로 이루어져 있습니다.
속성 설명자 종류와 특성에 대한 자세한 정보는 {{jsxref("Object.defineProperty()")}}에 있습니다..

_속성 설명자_ 는 다음과 같은 특징들을 가진 레코드입니다.

- `value`
  - : 속성과 관련된 값입니다. (데이터 설명자만 해당됨)
- `writable`
  - : `참(true)`인 경우, 속성과 관련된 값이 변경될 수 있는 상태입니다. (데이터 설명자만 해당됨)
- `get`
  - : 속성에 대한 getter 역할을 하는 함수거나, getter가 정의되지 않은 경우에는 {{jsxref("undefined")}} 입니다.
    (접근자 설명자만 해당됨)
- `set`
  - : 속성에 대한 setter 역할을 하는 함수거나, setter 정의되지 않은 경우에는 {{jsxref("undefined")}} 입니다.
    (접근자 설명자만 해당됨)
- `configurable`
  - : `참(true)`인 경우, 객체로 부터 속성 설명자가 변경 및 삭제될 수 있는 상태입니다.
- `enumerable`
  - : `true`인 경우, 열거 가능한 상태의 속성입니다.

## 예시

### 얕은 복사하기

{{jsxref("Object.assign()")}} 메서드는 원본 객체에서 목표 객체로 열거 가능한 속성과 객체의 속성들만 복사하는 반면,
이 메서드와 {{jsxref("Object.create()")}} 를 사용하면 어느 두 객체를 얕은 복사에 사용할 수 있습니다.

```js
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
```

### 서브클래스 만들기

서브클래스를 만드는 일반적인 방법은 서브클래스를 정의하고, 프로토타입을 슈퍼 클래스의 인스턴스로 설정한 다음, 그 인스턴스에 속성을 정의하는 것입니다.
이 방법은 게터와 세터의 경우 굉장히 불편합니다. 대신, 다음 코드를 사용하여 프로토타입을 설정할 수 있습니다.

```js
function superclass() {}
superclass.prototype = {
  // 여기에 슈퍼 클래스의 생성자, 매서드, 속성을 정의합니다.
};
function subclass() {}
subclass.prototype = Object.create(superclass.prototype, {
  // 여기에 서브클래스의 생성자, 매서드, 속성을 정의합니다.
});
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `Object.getOwnPropertyDescriptors`의 폴리필은 다음에서 확인 할 수 있습니다. [`core-js`](https://github.com/zloirock/core-js#ecmascript-object)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.defineProperty()")}}
- [Polyfill](https://github.com/tc39/proposal-object-getownpropertydescriptors)
