---
title: WeakSet.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/delete
l10n:
  sourceCommit: 88d71e500938fa8ca969fe4fe3c80a5abe23d767
---

{{JSRef}}

{{jsxref("WeakSet")}} 인스턴스의 **`delete()`** 메서드는 이 `WeakSet`에서 특정 요소를 제거합니다.

{{InteractiveExample("JavaScript Demo: WeakSet.Prototype.delete()")}}

```js interactive-example
const weakset1 = new WeakSet();
const object1 = {};

weakset1.add(object1);

console.log(weakset1.has(object1));
// Expected output: true

weakset1.delete(object1);

console.log(weakset1.has(object1));
// Expected output: false
```

## 구문

```js-nolint
weakSetInstance.delete(value)
```

### 매개변수

- `value`
  - : `WeakSet` 객체에서 제거할 값

### 반환 값

이 `WeakSet` 객체에서 요소가 성공적으로 제거된 경우 `true`.
`value`를 이 `WeakSet`에서 찾지 못했을 경우 `false`.
`value`가 객체가 아니거나 혹은 [등록되지 않은 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#전역_심볼_레지스트리의_공유_심볼)일 경우 언제나 `false`를 반환합니다.

## 예제

### delete() 메서드 사용하기

```js
const ws = new WeakSet();
const obj = {};

ws.add(window);

ws.delete(obj); // false 를 반환합니다. 삭제할 객체를 찾지 못했습니다
ws.delete(window); // true 를 반환합니다. 성공적으로 삭제했습니다.

ws.has(window); // false 를 반환합니다. window 는 더 이상 이 WeakSet에 존재하지 않습니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.add()")}}
- {{jsxref("WeakSet.prototype.has()")}}
