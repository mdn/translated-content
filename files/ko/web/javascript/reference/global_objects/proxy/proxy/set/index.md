---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
---

{{JSRef}}

**`handler.set()`** 메서드는 속성 값을 설정을 위한 트랩입니다.

{{EmbedInteractiveExample("pages/js/proxyhandler-set.html", "taller")}}

## 구문

```js
new Proxy(target, {
  set(target, property, value, receiver) {},
});
```

### 매개 변수

다음 매개변수는 `set()` 메서드에 전달됩니다. `this`는 처리기에 바인딩됩니다.

- `target`
  - : 대상 객체
- `property`
  - : 설정할 속성의 이름 또는 {{jsxref("Symbol")}}
- `value`
  - : 설정할 속성의 새 값
- `receiver`

  - : 할당이 지시된 원래 객체입니다. 이것은 일반적으로 프록시 자체입니다.
    그러나 `set()` 처리기는 프로토타입 체인이나 다양한 다른 방법 등을 통해
    간접적으로 호출할 수도 있습니다.

    예를 들어, 스크립트가 `obj.name = "jen"`을 수행하는데,
    `obj`는 프록시가 아니면서 속성 `.name`이 없고,
    프로토타입 체인에는 프록시가 있다고 가정해봅시다.
    이떄 해당 프록시의 `set()` 처리기가 호출되고나서 `obj`가 수신자로 전달됩니다.

### 반환 값

`set()` 메서드는 불리언 값을 반환합니다.

- 할당이 성공했으면 `true`를 반환합니다.
- 엄격 모드에서 `set()` 메서드가 `false`를 반환하면 {{jsxref("TypeError")}} 예외가 발생합니다.

## 설명

**`handler.set()`** 메서드는 속성 값을 설정을 위한 트랩입니다.

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다.

- 속성 할당: `proxy[foo] = bar`와 `proxy.foo = bar`
- 상속된 속성 할당:
  `Object.create(proxy)[foo] = bar`
- {{jsxref("Reflect.set()")}}

### 불변 조건

다음 불변 조건이 위반되면 프록시에서 {{jsxref("TypeError")}}가 발생합니다.

- 대상 객체 속성이 쓰기 및 구성할 수 없는 데이터 속성인 경우, 속성 값을 대상 객체 속성의 값과 다르게 변경할 수 없습니다.
- 대상 객체 속성의 `[[Set]]` 속성이 `undefined` 인 구성 불가능한 접근자 속성인 경우, 속성 값을 설정할 수 없습니다.
- 엄격 모드에서 `set()` 처리기가 `false`를 반환하면 {{jsxref("TypeError")}} 예외가 발생합니다.

## 예제

### 속성 값 설정 트랩

다음 코드는 속성 값을 설정하는 것을 트랩합니다.

```js
const p = new Proxy(
  {},
  {
    set(target, prop, value, receiver) {
      target[prop] = value;
      console.log(`property set: ${prop} = ${value}`);
      return true;
    },
  },
);

console.log("a" in p); // false

p.a = 10; // "property set: a = 10"
console.log("a" in p); // true
console.log(p.a); // 10
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Proxy")}}
- [`Proxy()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Reflect.set()")}}
