---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
---

{{JSRef}}

**`valueOf()`** 메서드는 특정 객체의 원시 값을 반환합니다.

{{EmbedInteractiveExample("pages/js/object-prototype-valueof.html")}}

## 구문

```js
object.valueOf();
```

### 반환 값

객체의 원시 값.

> **참고:** [(단항) 더하기 기호](/ko/docs/Web/JavaScript/Reference/Operators#단항_연산자) 는 가끔 `valueOf` 의 단축 표현으로 사용됩니다. 예를 들면, 다음과 같은 표현을 보세요. `+new Number()`. [단항 더하기 사용하기](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf#단항_더하기_사용하기).도 참조 하세요.

## 설명

JavaScript는 객체를 원시 값으로 변환할 때 `valueOf` 메서드를 호출합니다. 보통 원시 값을 필요로 할 때 알아서 사용하므로 직접 호출해야 하는 경우는 매우 드뭅니다.

기본적으로 {{jsxref("Object")}}의 모든 후손 객체는 `valueOf`를 상속받습니다. 내장된 핵심 객체는 모두 `valueOf`를 재정의해 적합한 값을 반환합니다. 어떤 객체가 원시 값을 가지고 있지 않다면, `valueOf`는 객체 스스로를 반환합니다.

여러분의 코드에서 `valueOf`를 호출해 내장 객체를 원시 값으로 변환할 수 있습니다. 사용자 정의 객체를 만들 땐 `valueOf`를 재정의해 {{jsxref("Object")}}의 메서드 대신 다른 행동을 부여할 수도 있습니다.

### 사용자 정의 객체의 valueOf 오버라이딩

기본 `valueOf` 메서드 대신 사용할 함수를 생성할 수 있습니다. 이 때 함수는 매개변수를 받지 않아야 합니다.

`MyNumberType`이라는 객체 형태가 존재하고, 이 객체의 `valueOf` 메서드를 만들고 싶다고 가정하겠습니다. 다음의 코드는 객체의 `valueOf` 메서드에 사용자 정의 함수를 할당합니다.

```js
MyNumberType.prototype.valueOf = function () {
  return customPrimitiveValue;
};
```

위의 코드가 활성화된 상태에서 어떤 `MyNumberType` 객체를 원시 값으로 표현해야 하면 JavaScript가 자동으로 저 함수를 실행합니다.

이 객체의 `valueOf` 메서드는 보통 JavaScript가 호출하겠지만 다음처럼 직접 호출할 수도 있습니다.

```js
myNumberType.valueOf();
```

> **참고:** 문자열 문맥에서 객체-문자열 변환은 {{jsxref("Object.toString", "toString()")}} 메서드를 사용하며, {{jsxref("String")}} 객체의 `valueOf`를 사용해 원시 문자열로 변환하는 것과는 다릅니다. 모든 객체는, 비록 결과가 "`[object type]`" 뿐이라도 문자열 변환 기능을 가지고 있습니다. 그러나 대다수의 객체는 숫자, 불리언, 함수 등으로 변환되지 않습니다.

## 예제

### 커스텀 타입에 valueOf 사용하기

```js
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

var myObj = new MyNumberType(4);
myObj + 3; // 7
```

### 단항 더하기 사용하기

```js
+"5"; // 5 (string to number)
+""; // 0 (string to number)
+"1 + 2"; // NaN (doesn't evaluate)
+new Date(); // same as (new Date()).getTime()
+"foo"; // NaN (string to number)
+{}; // NaN
+[]; // 0 (toString() returns an empty string list)
+[1]; // 1
+[1, 2]; // NaN
+new Set([1]); // NaN
+BigInt(1); // Uncaught TypeError: Cannot convert a BigInt value to a number
+undefined; // NaN
+null; // 0
+true; // 1
+false; // 0
```

## 명세

{{Specifications}}

## 라우저 호환성

{{Compat}}

## 함께 보기

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt", "parseInt()")}}
- {{jsxref("Symbol.toPrimitive()")}}
