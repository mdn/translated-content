---
title: Symbol.keyFor()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
l10n:
  sourceCommit: f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{JSRef}}

**`Symbol.keyFor()`** 정적 메서드는 주어진 심볼에 해당하는 공유 심볼의 키를 전역 심볼 레지스트리에서 검색합니다.

{{InteractiveExample("JavaScript Demo: Symbol.keyFor()")}}

```js interactive-example
const globalSym = Symbol.for("foo"); // Global symbol

console.log(Symbol.keyFor(globalSym));
// Expected output: "foo"

const localSym = Symbol(); // Local symbol

console.log(Symbol.keyFor(localSym));
// Expected output: undefined

console.log(Symbol.keyFor(Symbol.iterator));
// Expected output: undefined
```

## 구문

```js-nolint
Symbol.keyFor(sym)
```

### 매개변수

- `sym`
  - : Symbol, 필수 값. 키를 찾기 위한 Symbol

### 반환 값

[글로벌 레지스트리](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#shared_symbols_in_the_global_symbol_registry)에 있는 경우
지정된 심볼의 키를 나타내는 문자열이고, 그렇지 않으면 {{jsxref("undefined")}}입니다.

## 예제

### keyFor() 사용하기

```js
const globalSym = Symbol.for("foo"); // 새로운 전역 심볼 생성
Symbol.keyFor(globalSym); // "foo"

const localSym = Symbol();
Symbol.keyFor(localSym); // undefined

// 잘 알려진 심볼은 글로벌 심볼 레지스트리에 등록되지 않은 심볼입니다.
Symbol.keyFor(Symbol.iterator); // undefined
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Symbol.for()")}}
