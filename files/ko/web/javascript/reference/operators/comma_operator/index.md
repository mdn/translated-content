---
title: 쉼표 연산자
slug: Web/JavaScript/Reference/Operators/Comma_operator
---

{{jsSidebar("Operators")}}

**쉼표 연산자**는 각각의 피연산자를 왼쪽에서 오른쪽 순서로 평가하고, 마지막 연산자의 값을 반환합니다.

{{EmbedInteractiveExample("pages/js/expressions-commaoperators.html")}}

## 구문

```js
    expr1, expr2, expr3...
```

### 매개변수

- `expr1`, `expr2, expr3...`
  - : 아무 표현식.

## 설명

단일 표현식을 요구하는 곳에 복수의 표현식을 사용하고 싶을 때 쉼표 연산자를 사용할 수 있습니다. 가장 흔히 사용되는 곳은 `for` 반복문에 다수의 매개변수를 제공할 때입니다.

쉼표 연산자는 배열, 객체, 함수의 매개변수와 호출 인수에서 사용하는 쉼표와는 전혀 다릅니다.

## 예제

`a`를 한 행에 10개의 요소를 가진 2차원 배열이라고 가정할 때, 아래 예제는 쉼표 연산자를 사용해 한 번에 `i`는 증가시키고 `j`는 감소시킵니다.

다음 코드는 2차원 배열의 대각선에 위치하는 요소의 값을 출력합니다.

```js
for (let i = 0, j = 9; i <= 9; i++, j--) {
  console.log(`a[${i}][${j}] = ${a[i][j]}`);
}
```

쉼표 연산자를 할당에 사용하면, 할당 연산이 표현식에 포함되지 않아 예상한 결과와는 다소 다를 수 있습니다. 다음 예제에서, `a`는 `b = 3`의 값(3)을 할당받지만, `c = 4` 표현식 역시 평가되어 콘솔에 기록됩니다. [연산자 우선순위와 결합성](/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) 때문입니다.

```js
var a, b, c;

(a = b = 3), (c = 4); // 콘솔에는 4를 반환
console.log(a); // 3 (제일 왼쪽)

var x, y, z;

x = ((y = 5), (z = 6)); // 콘솔에는 6을 반환
console.log(x); // 6 (제일 오른쪽)
```

### 연산 후 반환

쉼표 연산자를 사용하는 다른 방법은 값을 반환하기 전에 연산을 수행하는 것입니다. 쉼표 연산자는 마지막 표현식의 평가 결과만 반환하지만, 이전 피연산자에 대해서도 평가는 수행하므로 다음과 같은 코드를 작성할 수 있습니다.

```js
function myFunc() {
  var x = 0;

  return (x += 1), x; // ++x 와 같은 효과
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`for` 반복문](/ko/docs/Web/JavaScript/Reference/Statements/for)
