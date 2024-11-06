---
title: Symbol.for()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/for
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`Symbol.for(key)`** 메서드는 주어진 키를 사용해 런타임 범위의 심볼 레지스트리에서 존재하는 심볼을 찾고,
존재할 경우 이를 반환합니다. 존재하지 않는 경우에는 해당 키를 사용해 전역 심볼 레지스트리에 새로운 심볼을 생성합니다.

{{EmbedInteractiveExample("pages/js/symbol-for.html")}}

## 구문

```js-nolint
Symbol.for(key)
```

### 매개변수

- `key`
  - : 문자열, 필수. 심볼에 대한 키(심볼을 설명하기 위해서도 사용됨).

### 반환 값

주어진 키를 갖는 존재하는 심볼. 존재하지 않을 경우 새로운 심볼이 생성되고 반환됨.

## 설명

`Symbol()`과 대조적으로, `Symbol.for()` 함수는 전역 심볼 레지스트리 목록에서 사용 가능한 심볼을 생성합니다.
`Symbol.for()`는 호출할 때마다 새로운 심볼을 생성하지는 않으며 레지스트리에서 주어진 `key`를 갖는 심볼이
이미 존재하는지를 먼저 확인합니다. 존재하는 경우 해당하는 심볼이 반환됩니다.
주어진 키를 갖는 심볼이 존재하지 않는 경우, `Symbol.for()`는 새로운 전역 심볼을 생성합니다.

## 예제

### Symbol.for() 사용하기

```js
Symbol.for("foo"); // 새로운 전역 심볼을 생성
Symbol.for("foo"); // 이미 생성된 심볼을 반환

// 동일한 전역 심볼이지만 지역적으로는 그렇지 않음
Symbol.for("bar") === Symbol.for("bar"); // true
Symbol("bar") === Symbol("bar"); // false

// 키는 설명으로 사용되기도 함
var sym = Symbol.for("mario");
sym.toString(); // "Symbol(mario)"
```

전역 심볼 키와 다른 (라이브러리 코드) 전역 심볼의 이름 충돌을 피하려면, 심볼에 접두어를 붙이는 것이 좋습니다.

```js
Symbol.for("mdn.foo");
Symbol.for("mdn.bar");
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Symbol.keyFor()")}}
