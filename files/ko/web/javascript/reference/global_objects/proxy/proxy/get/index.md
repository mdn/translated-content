---
title: handler.get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
---

{{JSRef}}

**`handler.get()`** 메서드는 속성 값을 가져오기 위한 트랩입니다.

{{EmbedInteractiveExample("pages/js/proxyhandler-get.html", "taller")}}

## 구문

```js
new Proxy(target, {
  get(target, property, receiver) {},
});
```

### 매개 변수

다음 매개변수는 `get()` 메서드에 전달됩니다. `this`는 처리기에 바인딩됩니다.

- `target`
  - : 대상 객체
- `property`
  - : 가져올 속성의 이름 또는 {{jsxref("Symbol")}}입니다.
- `receiver`
  - : 프록시 또는 프록시에서 상속되는 객체입니다.

### 반환 값

`get()` 메서드는 어떤 값이든 반환할 수 있습니다.

## 설명

**`handler.get()`** 메서드는 속성 값을 가져오기 위한 트랩입니다.

### 가로채기

이 트랩은 다음 작업을 가로챌 수 있습니다.

- 속성 접근: `proxy[foo]`와
  `proxy.bar`
- 상속된 속성 액세스:
  `Object.create(proxy)[foo]`
- {{jsxref("Reflect.get()")}}

### 불변 조건

다음 불변량이 위반되면 프록시에서 {{jsxref("TypeError")}}가 발생합니다.

- 대상 객체의 속성이 쓸 수 없거나 구성할 수 없는 자체 데이터 속성인 경우, 속성에 대해 보고된 값은 대상 객체 속성의 값과 동일해야 합니다.
- 대상 객체 속성이 `[[Get]]` 특성이 `undefined`인 구성할 수 없는 자체 접근자 속성인 경우, 속성에 대해 보고된 값은 정의되지 않아야 합니다.

## 예제

### 속성 값을 얻기 위한 트랩

다음 코드는 속성 값을 가져오는 것을 트랩합니다.

```js
const p = new Proxy(
  {},
  {
    get(target, property, receiver) {
      console.log(`called: ${property}`);
      return 10;
    },
  },
);

console.log(p.a); // "called: a"
// 10
```

다음 코드는 불변 조건을 위반합니다.

```js
const obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: false,
  value: 10,
  writable: false,
});

const p = new Proxy(obj, {
  get(target, property) {
    return 20;
  },
});

p.a; // TypeError is thrown
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Proxy")}}
- [`Proxy()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Reflect.get()")}}
