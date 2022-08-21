---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
tags:
  - apply트랩
  - 트랩
  - 프록시
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
original_slug: Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
browser-compat: javascript.builtins.Proxy.handler.apply
---
{{JSRef}}

**`handler.apply()`** 메소드는 함수호출 시를 위한 트랩(trap)이다.

## 문법

```js
var p = new Proxy(target, {
  apply: function(target, thisArg, argumentsList) {
  }
});
```

### 인자

apply 메소드에는 다음과 같은 인자가 들어온다.. `this`는 `handler` 를 가리킨다.

- `target`
  - : 대상이 되는 객체(함수)
- `thisArg`
  - : 호출 시 바인딩 된 this
- `argumentsList`
  - : 호출 시 전달된 인자목록.

### 반환 값

`apply` 메소드는 어떤 값이든 반환할 수 있다.

## 설명

**`handler.apply`** 메소드는 함수호출 시를 위한 트랩이다.

### 가로채기

이 트랩은 다음과 같은 것들을 가로챌 수 있다:

- `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}} 와 {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

### 기본(불변)조건

`handler.apply` 메소드에 대한 특별히 지켜야 할 기본조건은 없다.

## 예제

다음의 코드는 함수 호출 시에 트랩을 건다.

```js
var p = new Proxy(function() {}, {
  apply: function(target, thisArg, argumentsList) {
    console.log('호출됨: ' + argumentsList.join(', '));
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  }
});

console.log(p(1, 2, 3)); // "호출됨: 1, 2, 3"
                         // 6
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련 내용

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Function.prototype.apply")}}
- {{jsxref("Function.prototype.call")}}
- {{jsxref("Reflect.apply()")}}
