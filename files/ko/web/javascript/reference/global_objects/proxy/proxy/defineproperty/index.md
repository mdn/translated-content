---
title: handler.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
---

{{JSRef}}

**`handler.defineProperty()`** 메서드는 {{jsxref("Object.defineProperty()")}}에 대한 트랩입니다.

{{EmbedInteractiveExample("pages/js/proxyhandler-defineproperty.html", "taller")}}

## 구문

```js
new Proxy(target, {
  defineProperty(target, property, descriptor) {},
});
```

### 매개 변수

다음 매개변수는 `defineProperty()` 메서드에 전달됩니다. `this`는 처리기에 바인딩됩니다.

- `target`
  - : 대상 객체
- `property`
  - : 설명을 검색할 속성의 이름 또는 {{jsxref("Symbol")}}입니다.
- `descriptor`
  - : 정의 또는 수정 중인 속성에 대한 설명자입니다.

### 반환 값

`handler.defineProperty()` 메서드는 속성이 성공적으로 정의되었는지를 나타내는 {{jsxref("Boolean", "불리언")}}을 반환합니다.

## 설명

**`handler.defineProperty()`** 메서드는 {{jsxref("Object.defineProperty()")}}에 대한 트랩입니다.

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다.

- [`Object.prototype.__defineGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.defineProperty()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxref("TypeError")}}가 발생합니다.

- 대상 객체를 확장할 수 없는 경우, 속성을 추가할 수 없습니다.
- 속성이 대상 객체를 구성할 수 없는 자체 속성으로 존재하지 않는다면 속성을 구성할 수 없도록 추가하거나 수정할 수 없습니다.
- 대상 객체의 구성 가능한 속성이 있는 경우, 속성을 구성할 수 없을 수 있습니다.
- 속성에 해당 대상 개체 속성이 있는 경우 `Object.defineProperty(target, prop, descriptor)`는 예외를 발생하지 않습니다.
- 엄격 모드에서 `defineProperty()` 처리기의 `false` 반환 값은 {{jsxref("TypeError")}} 예외를 발생시킵니다.

## 예제

### defineProperty 트랩하기

다음 코드는 {{jsxref("Object.defineProperty()")}}를 트랩합니다.

```js
const p = new Proxy(
  {},
  {
    defineProperty(target, prop, descriptor) {
      console.log(`called: ${prop}`);
      return true;
    },
  },
);

const desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, "a", desc); // "호출: a"
```

{{jsxref("Object.defineProperty()")}} 또는 {{jsxref("Reflect.defineProperty()")}}를 호출할 때 `defineProperty()` 트랩에 전달된 `descriptor`에는 한 가지 제한 사항이 있어 다음 속성만 사용할 수 있습니다.(비표준 속성은 무시됨)

- `enumerable`
- `configurable`
- `writable`
- `value`
- `get`
- `set`

```js
const p = new Proxy(
  {},
  {
    defineProperty(target, prop, descriptor) {
      console.log(descriptor);
      return Reflect.defineProperty(target, prop, descriptor);
    },
  },
);

Object.defineProperty(p, "name", {
  value: "proxy",
  type: "custom",
}); // { value: 'proxy' }
```

## 명세서

{{Specifications}}

## 브라우저 호한성

{{Compat}}

## 같이 보기

- {{jsxref("Proxy")}}
- [`Proxy()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.defineProperty()")}}
