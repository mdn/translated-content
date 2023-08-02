---
title: 전역 객체
slug: Glossary/Global_object
---

전역 객체 {{glossary("object")}} 는 전역 범위 {{glossary("global scope")}} 에 항상 존재하는 객체를 의미합니다.

자바스크립트에는 전역 객체로 선언된 객체들이 항상 존재합니다. 웹브라우저에서 스크립트가 전역 변수를 생성할 때, 그것들은 전역 객체의 멤버로서 생성됩니다. (이것은 {{Glossary("Node.js")}} 에서는 예외입니다.) 전역 객체의 {{Glossary("interface")}} 는 스크립트가 실행되고 있는 곳의 실행 컨텍스트에 의존합니다. 예를 들어:

- 웹브라우저에 있는 스크립트가 특별히 백그라운드 작업으로 시작하지 않는 코드들은 그것의 전역 객체로써 {{domxref("Window")}} 를 가집니다. 이것은 Web에 있는 자바스크립트 코드의 상당수가 그렇습니다.
- {{domxref("Worker")}} 에서 실행하는 코드는 그것의 전역 객체로서 {{domxref("WorkerGlobalScope")}} 를 가집니다.
- {{Glossary("Node.js")}} 환경에서 실행하는 스크립트들은 [`global`](https://nodejs.org/api/globals.html#globals_global) 로 호출되는 객체를 그것들의 전역 객체로 가집니다.

## 브라우저 에서의 `window` 객체

`window` 객체는 브라우저에서 전역 객체입니다. 어느 전역 객체나 함수는 `window` 객체의 프로퍼티로서 접근될 수 있습니다.

### 전역 변수 접근

```js
var foo = "foobar";
foo === window.foo; // Returns: true
```

전역 객체로 `foo` 변수를 선언한 뒤, 우리는 `foo` 변수명을 사용해 전역 객체인 `window.foo` 의 프로퍼티로 `window` 객체에서 그것의 값에 직접 접근할 수 있습니다.,

#### 설명

전역 객체 `foo` 는 `window` 객체에 아래와 같이 저장됩니다:

```js
foo: "foobar";
```

### 전역 함수 접근

```js
function greeting() {
  console.log("Hi!");
}

window.greeting(); // It is the same as the normal invoking: greeting();
```

위의 예는 `window` 객체의 프로퍼티로서 어떻게 전역 함수가 저장되는지를 보여주고 있습니다 . 우리가 `greeting` 을 전역 함수로써 호출하면 내부적으로는 `window` 객체를 사용해 호출됨을 보여주고 있습니다.

#### 설명

전역 함수 `greeting` 은 아래와 같이 `window` 객체에 저장됩니다:

```js
greeting: function greeting() {
  console.log("Hi!");
}
```

## 같이 보기

- [MDN Web Docs Glossary](/ko/docs/Glossary)

  - {{glossary("global scope")}}
  - {{glossary("object")}}

- {{domxref("Window")}}
- {{domxref("WorkerGlobalScope")}}
- [`global`](https://nodejs.org/api/globals.html#globals_global)
