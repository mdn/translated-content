---
title: Symbol.hasInstance
slug: Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance
l10n:
  sourceCommit: d27cac7971d2797448b8d037dfbcb460e512fdcd
---

{{JSRef}}

**`Symbol.hasInstance`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#잘_알려진_심볼) `@@hasInstance`를 나타냅니다.
{{jsxref("Operators/instanceof", "instanceof")}} 연산자는 생성자 객체가 객체를 인스턴스로 인식하는지 여부를 확인하기 위해
사용하는 메서드의 오른쪽 피연산자에서 이 심볼을 찾습니다.

{{EmbedInteractiveExample("pages/js/symbol-hasinstance.html")}}

## 값

잘 알려진 심볼 `@@hasInstance`.

{{js_property_attributes(0, 0, 0)}}

## 설명

`instanceof` 연산자는 다음 알고리즘을 사용하여 `object instanceof constructor`의 반환 값을 계산합니다.

1. `constructor`에 `@@hasInstance` 메서드가 있는 경우, 첫 번째 인수로 `object`를 사용하여 호출하고 [불리언으로 강제 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion)된 결과를 반환합니다.
   `constructor`가 객체가 아니거나 `constructor[@@hasInstance]`가 `null`, `undefined`, 함수 중 하나가 아닌 경우 {{jsxref("TypeError")}}가 발생합니다.

2. 그렇지 않으면, `constructor`에 `@@hasInstance` 메서드가 없는 경우(`constructor[@@hasInstance]`가 `null` 또는 `undefined`),
   [`Function.prototype[@@hasInstance]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance)와 동일한 알고리즘을 사용하여 결과를 결정합니다.
   `constructor`가 함수가 아닌 경우 {{jsxref("TypeError")}}가 발생합니다.

모든 함수는 기본적으로 `Function.prototype`을 상속하기 때문에, 대부분의 경우 [`Function.prototype[@@hasInstance]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance) 메서드는 오른쪽이 함수인 경우 `instanceof`의 동작을 지정합니다.

## 예제

### 사용자 지정 instanceof 동작

예를 들어 다음과 같이 사용자 정의 `instanceof` 동작을 구현할 수 있습니다.

```js
class MyArray {
  static [Symbol.hasInstance](instance) {
    return Array.isArray(instance);
  }
}
console.log([] instanceof MyArray); // true
```

```js
function MyArray() {}
Object.defineProperty(MyArray, Symbol.hasInstance, {
  value(instance) {
    return Array.isArray(instance);
  },
});
console.log([] instanceof MyArray); // true
```

### 객체의 인스턴스 검사하기

`instanceof` 키워드를 사용하여 객체가 클래스의 인스턴스 여부를 확인할 수 있는 것과 같은 방법으로
`Symbol.hasInstance`를 사용하여 동일한 검사를 수행할 수 있습니다.

```js
class Animal {
  constructor() {}
}

const cat = new Animal();

console.log(Animal[Symbol.hasInstance](cat)); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Operators/instanceof", "instanceof")}}
- [`Function.prototype[@@hasInstance]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance)
