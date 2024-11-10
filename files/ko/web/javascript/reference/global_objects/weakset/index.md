---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
l10n:
  sourceCommit: 10387e1345e60f93e939b873e953b8ae85557362
---

{{JSRef}}

**`WeakSet`**은 객체와 [등록되지 않은 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#전역_심볼_레지스트리의_공유_심볼)을 포함하여 쓰레기 수집이 가능한 값의 모음입니다. `WeakSet`의 값은 한 번만 나타날 수 있습니다. 이 값은 `WeakSet`의 컬렉션에서 고유합니다.

## 설명

WeakSet의 값은 필연적으로 쓰레기 수집될 수 있습니다. 대부분의 {{Glossary("Primitive", "원시 데이터 유형")}}은 대부분 임의로 생성될 수 있고 수명이 없으므로 저장할 수 없습니다. 객체와 [등록되지 않은 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#전역_심볼_레지스트리의_공유_심볼)은 쓰레기 수집이 가능하기 때문에 저장될 수 있습니다

{{jsxref("Set")}} 객체와 주된 차이는 다음과 같습니다.

- `Set`과 달리, `WeakSet`은 **객체와 심볼 만의 컬렉션**이며 모든 유형의 임의 값은 포함할 수 없습니다.
- `WeakSet`은 약합니다(weak). 즉 컬렉션 내 객체 참조는 약하게 유지됩니다. `WeakSet` 내 저장된 객체에 다른 참조가 없는 경우, 쓰레기 수집될 수 있습니다.

  > [!NOTE]
  > 이는 또한 컬렉션 내 현재 저장된 객체 목록이 없음을 뜻합니다. `WeakSets`은 열거불가입니다.

### 사용 예: 순환 참조 탐지하기

재귀적으로 자신을 호출하는 함수는 순환 데이터 구조를 방지하기 위해 이미 처리된 객체를 추적할 수 있는 방법이 필요합니다.

`WeakSet`은 이 목적을 위한 이상적인 방법입니다.

```js
// 객체 내 저장된 모든 것에 대해 콜백 실행
function execRecursively(fn, subject, _refs = new WeakSet()) {
  // 무한 재귀 회피
  if (_refs.has(subject)) {
    return;
  }

  fn(subject);
  if (typeof subject === "object" && subject) {
    _refs.add(subject);
    for (const key in subject) {
      execRecursively(fn, subject[key], _refs);
    }
    _refs.delete(subject);
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar",
  },
};

foo.bar.baz = foo; // 순환 참조!
execRecursively((obj) => console.log(obj), foo);
```

여기서는 첫 번째 실행 시 `WeakSet`이 생성되고 이후 모든 함수 호출(내부 `_refs` 매개변수 사용)과 함께 전달됩니다.

객체의 수 또는 순회 순서는 중요하지 않으므로, 특히 매우 많은 수의 객체가 관련된 경우 객체 참조를 추적하려면 `WeakSet`이 {{jsxref("Set")}}보다 더 적합하고 성능도 뛰어납니다.

## 생성자

- {{jsxref("WeakSet/WeakSet", "WeakSet()")}}
  - : 새 `WeakSet` 객체를 생성합니다.

## 인스턴스 속성

아래 속성은 `WeakSet.prototype`에 정의되어 있고, 모든 `WeakSet` 인스턴스와 공유됩니다.

- {{jsxref("Object/constructor", "WeakSet.prototype.constructor")}}
  - : 인스턴스 객체를 생성하는 생성자 함수입니다. `WeakSet` 인스턴스에서는 초기 값은 {{jsxref("WeakSet/WeakSet", "WeakSet")}} 생성자입니다.
- `WeakSet.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기 값은 문자열 `"WeakSet"`입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용됩니다.

## 인스턴스 메서드

- {{jsxref("WeakSet.prototype.add()")}}
  - : `WeakSet` 객체에 `value`를 추가합니다.
- {{jsxref("WeakSet.prototype.delete()")}}
  - : `WeakSet`에서 `value`를 제거합니다. 이 이후에 `WeakSet.prototype.has(value)`는 `false`를 반환합니다.
- {{jsxref("WeakSet.prototype.has()")}}
  - : `WeakSet` 객체에 `value` 값 존재 여부를 부울 값으로 반환합니다.

## 예제

### `WeakSet` 객체 사용

```js
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // set에서 foo를 제거
ws.has(foo); // false, foo 는 이미 제거
ws.has(bar); // true, bar 는 유지 됨
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `WeakSet` in `core-js`](https://github.com/zloirock/core-js#weakset)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakMap")}}
