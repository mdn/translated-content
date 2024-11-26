---
title: Function.prototype[@@hasInstance]()
slug: Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance
original_slug: Web/JavaScript/Reference/Global_Objects/Function/@@hasInstance
l10n:
  sourceCommit: 0891bd2199fabb1ec00dfe4765019d54f21d965c
---

{{JSRef}}

{{jsxref("Function")}} 인스턴스의 **`[@@hasInstance]()`** 메서드는 생성자 함수가 객체를 생성자의 인스턴스 중 하나로 인식하는지 여부를 결정하는 기본 절차를 지정합니다.
이 메서드는 [`instanceof`](/ko/docs/Web/JavaScript/Reference/Operators/instanceof) 연산자에 의해 호출됩니다.

## 구문

```js-nolint
func[Symbol.hasInstance](value)
```

### 매개변수

- `value`
  - :평가할 객체입니다. 원시 값은 항상 `false`를 반환합니다.

### 반환 값

`func.prototype`이 `value`의 프로토타입 체인에 있으면 `true`, 그렇지 않으면 `false`를 반환합니다.
`value`가 객체가 아니거나 `this`가 함수가 아닌 경우 항상 `false`를 반환합니다. `this`가 [바인딩된 함수](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)인 경우, `value`와 대상 함수에 대한 `instanceof` 평가 결과를 반환합니다.

### 예외

- {{jsxref("TypeError")}}
  - : `this`가 바인딩된 함수가 아니고 `this.prototype`이 객체가 아닌 경우 발생합니다.

## 설명

[`instanceof`](/ko/docs/Web/JavaScript/Reference/Operators/instanceof) 연산자는 [`[@@hasInstance]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) 메서드가 존재하면 우항의 이 메서드를 호출합니다. 모든 함수는 기본적으로 `Function.prototype`을 상속하므로 `[@@hasInstance]()` 메서드를 모두 가지게 됩니다. 따라서 대부분의 경우 우항이 함수인 경우 `Function.prototype[@@hasInstance]` 메서드가 `instanceof`의 동작을 지정합니다. 이 메서드는 `instanceof` 연산자의 기본 동작을 구현합니다(`constructor`에 `@@hasInstance` 메서드가 없을 때와 동일한 알고리즘).

대부분의 메서드와 달리 `Function.prototype[@@hasInstance]()` 속성은 설정할 수 없고 쓸 수 없습니다. 이는 바인딩된 함수의 기본 대상 함수를 가져올 수 없도록 하기 위한 보안 기능입니다. 예를 들어 [이 StackOverflow 답변](https://stackoverflow.com/questions/38215027/trying-to-understand-the-official-es6-spec-regarding-symbol-hasinstance/38215392#38215392)을 참고하시기 바랍니다.

## 예제

### 기본 instanceof 동작으로 되돌리기

이 메서드를 직접 호출할 필요는 거의 없습니다. 대신 이 메서드는 `instanceof` 연산자가 호출합니다. 일반적으로 두 결과는 동일할 것으로 예상해야 합니다.

```js
class Foo {}
const foo = new Foo();
console.log(foo instanceof Foo === Foo[Symbol.hasInstance](foo)); // true
```

기본적인 `instanceof` 동작을 호출하고 싶지만 생성자에 재정의된 `[@@hasInstance]()` 메서드가 있는지 알 수 없는 경우 이 메서드를 사용할 수 있습니다.

```js
class Foo {
  static [Symbol.hasInstance](value) {
    // 맞춤 구현
    return false;
  }
}

const foo = new Foo();
console.log(foo instanceof Foo); // false
console.log(Function.prototype[Symbol.hasInstance].call(Foo, foo)); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`instanceof`](/ko/docs/Web/JavaScript/Reference/Operators/instanceof)
- {{jsxref("Symbol.hasInstance")}}
