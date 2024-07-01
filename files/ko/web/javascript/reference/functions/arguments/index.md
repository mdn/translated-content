---
title: arguments 객체
slug: Web/JavaScript/Reference/Functions/arguments
---

{{jsSidebar("Functions")}}

**`arguments`** 객체는 함수에 전달된 인수에 해당하는 `Array` 형태의 객체입니다.

> **참고:** ES6 호환 코드를 작성 중이라면 되도록 [나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters) 구문을 사용해야 합니다.

> **참고:** "`Array` 형태"란 `arguments`가 {{jsxref("Array.length", "length")}} 속성과 더불어 0부터 인덱스 된 다른 속성을 가지고 있지만, {{jsxref("Array")}}의 {{jsxref("Array.prototype.forEach()", "forEach")}}, {{jsxref("Array.prototype.map()", "map")}}과 같은 내장 메서드를 가지고 있지 않다는 뜻입니다.

{{EmbedInteractiveExample("pages/js/functions-arguments.html")}}

## 구문

```
    arguments
```

## 설명

`arguments` 객체는 모든 함수 내에서 이용 가능한 지역 변수입니다. `arguments` 객체를 사용하여 함수 내에서 모든 인수를 참조할 수 있으며, 호출할 때 제공한 인수 각각에 대한 항목을 갖고 있습니다. 항목의 인덱스는 0부터 시작합니다.

예를 들어, 함수가 세 개의 인수를 받은 경우 다음과 같이 접근할 수 있습니다.

```js
arguments[0];
arguments[1];
arguments[2];
```

각 인수를 설정하거나 재할당할 수도 있습니다.

```js
arguments[1] = "new value";
```

`arguments` 객체는 {{jsxref("Array")}}가 아닙니다. `Array`와 비슷하지만, {{jsxref("Array.prototype.length", "length")}} 빼고는 {{jsxref("Array.prototype.pop", "pop()")}}과 같은 어떤 `Array` 속성도 없습니다. 그러나 실제 `Array`로 변환할 수 있습니다:

```js
var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);
```

`arguments`를 실제 `Array`로 변환하기 위해 ES2015의 {{jsxref("Array.from()")}} 메서드 또는 [전개 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Spread_operator)를 사용할 수도 있습니다.

```js
var args = Array.from(arguments);
var args = [...arguments];
```

당신이 형식상 받기로 선언된 것보다 많은 인수로 함수를 호출하는 경우 `arguments` 객체를 사용할 수 있습니다. 이 기법은 가변 인수가 전달될 수 있는 함수에 유용합니다. 함수에 전달된 인수의 수를 결정하기 위해 [`arguments.length`](/ko/docs/JavaScript/Reference/Functions_and_function_scope/arguments/length)를 쓰세요, 그 뒤에 `arguments` 객체를 사용하여 각 인수를 처리하세요. 함수 [signature](/ko/docs/Glossary/Signature/Function)에 매개변수의 수를 결정하기 위해서는, [`Function.length`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/length) 속성을 쓰세요.

## 속성

- [`arguments.callee`](/ko/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : 현재 실행 중인 함수를 가리킵니다.
- [`arguments.caller`](/ko/docs/Web/JavaScript/Reference/Functions/arguments/caller) {{deprecated_inline}}
  - : 현재 실행 중인 함수를 호출한 함수를 가리킵니다.
- [`arguments.length`](/ko/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : 함수에 전달된 인수의 수를 가리킵니다.
- [`arguments[@@iterator]`](/ko/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator)
  - : arguments의 각 인덱스 값을 포함하는 새로운 Array Iterator 객체를 반환합니다.

## 예제

### 여러 문자열을 연결하는 함수 정의하기

이 예는 여러 문자열을 연결하는 함수를 정의합니다. 함수의 유일한 형식 인수는 연결할 항목을 구분하는 문자를 지정하는 문자열입니다. 함수는 다음과 같이 정의됩니다:

```js
function myConcat(separator) {
  var args = Array.prototype.slice.call(arguments, 1);
  return args.join(separator);
}
```

이 함수에 인수를 얼마든지 전달할 수 있으며 리스트 내 항목처럼 각 인수를 사용하여 리스트를 만듭니다.

```js
// "red, orange, blue" 반환
myConcat(", ", "red", "orange", "blue");

// "elephant; giraffe; lion; cheetah" 반환
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// "sage. basil. oregano. pepper. parsley" 반환
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
```

### HTML 리스트를 만드는 함수 정의하기

이 예는 리스트 HTML을 포함하는 문자열을 만드는 함수를 정의합니다. 함수의 유일한 형식 인수는 리스트가 정렬되지 않은(bulluet(글 머리 기호)가 붙는) 경우 "`u`" 또는 정렬된(번호가 매겨진) 경우 "`o`"인 문자열입니다. 함수는 다음과 같이 정의됩니다:

```js
function list(type) {
  var result = "<" + type + "l><li>";
  var args = Array.prototype.slice.call(arguments, 1);
  result += args.join("</li><li>");
  result += "</li></" + type + "l>"; // end list

  return result;
}
```

이 함수에 인수를 얼마든지 전달할 수 있고, 표시된 유형의 리스트에 항목으로 각 인수를 추가합니다. 예를 들면:

```js
var listHTML = list("u", "One", "Two", "Three");

/* listHTML은:

"<ul><li>One</li><li>Two</li><li>Three</li></ul>"

*/
```

### 나머지, 기본 및 비구조화된 매개변수

`arguments` 객체는 [나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters), [기본 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters) 또는 [비구조화된 매개변수](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)와 함께 사용될 수 있습니다.

```js
function foo(...args) {
  return arguments;
}
foo(1, 2, 3); // { "0": 1, "1": 2, "2": 3 }
```

그러나, 비엄격 함수에서는 **mapped `arguments` 객체**는 함수가 어떤 [나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters), [기본 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters) 또는 [비구조화된 매개변수](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)든 포함하지 **않는** 경우에만 제공됩니다. 예를 들어, 기본 매개변수를 사용하는 다음 함수에서는, 100 대신에 `10`이 반환됩니다:

```js
function bar(a = 1) {
  arguments[0] = 100;
  return a;
}
bar(10); // 10
```

이 예에서, 어떤 [나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters), [기본 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters) 또는 [비구조화된 매개변수](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)가 없는 경우에는, 100이 반환됩니다:

```js
function zoo(a) {
  arguments[0] = 100;
  return a;
}
zoo(10); // 100
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Function")}}
