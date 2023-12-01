---
title: "TypeError: More arguments needed"
slug: Web/JavaScript/Reference/Errors/More_arguments_needed
---

{{jsSidebar("Errors")}}

## 메시지

```
    TypeError: argument is not an Object and is not null (Edge)
    TypeError: Object.create requires at least 1 argument, but only 0 were passed
    TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 0 were passed
    TypeError: Object.defineProperties requires at least 1 argument, but only 0 were passed
```

## 에러 타입

{{jsxref("TypeError")}}.

## 무엇이 잘 못 되었을까?

함수 호출 시 에러가 있습니다. 더 많은 인수가 주어져야 합니다.

## 예제

{{jsxref("Object.create()")}} 메서드는 적어도 1개의 인자가 필요하며, {{jsxref("Object.setPrototypeOf()")}} 메서드는 적어도 2개의 인자가 필요합니다.:

```js example-bad
var obj = Object.create();
// TypeError: Object.create requires at least 1 argument, but only 0 were passed

var obj = Object.setPrototypeOf({});
// TypeError: Object.setPrototypeOf requires at least 2 arguments, but only 1 were passed
```

예를 들면, 이렇게 프로토 타입으로 {{jsxref("null")}}를 세팅해서 고칠 수 있습니다.:

```js example-good
var obj = Object.create(null);

var obj = Object.setPrototypeOf({}, null);
```

## 참조

- [Functions](/ko/docs/Web/JavaScript/Guide/Functions)
