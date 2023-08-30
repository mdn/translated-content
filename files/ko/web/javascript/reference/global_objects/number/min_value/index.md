---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
---

{{JSRef}}

**`Number.MIN_VALUE`** 속성은 JavaScript가 표현할 수 있는 제일 작은 양의 숫자 값을 나타냅니다.

{{EmbedInteractiveExample("pages/js/number-min-value.html")}}{{js_property_attributes(0, 0, 0)}}

## 설명

`MIN_VALUE` 속성은 JavaScript에서 표현할 수 있는, 0에 가장 가깝지만 음수는 아닌 수입니다.

`MIN_VALUE`의 값은 약 `5e-324`입니다. `MIN_VALUE`보다 작은 값("언더플로우 값")은 0으로 변환됩니다.

`MIN_VALUE`는 {{jsxref("Number")}}의 정적 속성이기 때문에, 직접 생성한 {{jsxref("Number")}} 객체의 속성이 아니라 `Number.MIN_VALUE` 형식으로 사용해야 합니다.

## 예제

### `MIN_VALUE` 사용하기

다음 코드는 숫자를 두 개의 수를 받아 나누기 연산을 합니다. 만약 결과가 `MIN_VALUE` 보다 크거나 같으면 `func1` 함수를 호출하고, 그렇지 않으면 `func2` 함수를 호출합니다.

```js
if (num1 / num2 >= Number.MIN_VALUE) {
  func1();
} else {
  func2();
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Number.MAX_VALUE")}}
