---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
---

{{JSRef}}

**`apply()`** 메서드는 주어진 `this` 값과 배열 (또는 [유사 배열 객체](/ko/docs/Web/JavaScript/Guide/Predefined_Core_Objects#Working_with_Array-like_objects)) 로 제공되는 `arguments` 로 함수를 호출합니다.

> **참고:** 이 함수의 구문은 거의 {{jsxref("Function.call", "call()")}} 구문과 유사합니다. 근본적인 차이점은 `call()` 은 함수에 전달될 **인수 리스트**를 받는데 비해, `apply()` 는 **인수들의 단일 배열**을 받는다는 점입니다.

{{EmbedInteractiveExample("pages/js/function-apply.html")}}

## 구문

```js
func.apply(thisArg, [argsArray]);
```

### 매개변수

- `thisArg`
  - : 옵션. `func` 를 호출하는데 제공될 `this` 의 값. `this` 는 메소드에 의해 실제로 보여지는 값이 아닐 수 있음을 유의합니다. 메소드가 {{jsxref("Strict_mode", "non-strict mode", "", 1)}} 코드의 함수일 경우, {{jsxref("null")}} 과 {{jsxref("undefined")}} 가 전역 객체로 대체되며, 기본 값은 제한됩니다.
- `argsArray`
  - : 옵션. _`func`_ 이 호출되어야 하는 인수를 지정하는 유사 배열 객체, 함수에 제공된 인수가 없을 경우 {{jsxref("null")}} 또는 {{jsxref("undefined")}}. ECMAScript 5 의 시작으로 이러한 인수들은 배열 대신 제네릭 유사 배열 객체로 사용될 수 있습니다. 아래의 [브라우저 호환성](#browser_compatibility) 정보를 보세요.

### 반환값

지정한 **`this`** 값과 인수들로 호출한 함수의 결과.

## 설명

이미 존재하는 함수를 호출할 때 다른 `this` 객체를 할당할 수 있습니다. `this` 는 현재 객체, 호출하는 객체를 참조합니다. `apply` 를 사용해, 새로운 객체마다 메소드를 재작성할 필요없이 한 번만 작성해 다른 객체에 상속시킬 수 있습니다.

`apply` 는 지원되는 인수의 타입만 제외하면 {{jsxref("Function.call", "call()")}} 과 매우 유사합니다. 인수(파라미터)의 리스트 대신 인수들의 배열을 사용할 수 있습니다. 또한 `apply` 를 사용해, 배열 리터럴이나 (예, _func_.apply(this, \['eat', 'bananas']), {{jsxref("Array")}} 객체 (예, _func_.apply(this, new Array('eat', 'bananas'))) 를 사용할 수 있습니다.

`argsArray` 파라미터를 위한 {{jsxref("Functions/arguments", "arguments")}} 를 사용할 수도 있습니다. `arguments` 는 함수의 지역 변수입니다. 이는 호출된 객체의 지정되지 않은 모든 인수에 대해 사용할 수 있습니다. 따라서, `apply` 메소드를 사용할 때 호출된 객체의 인수를 알 필요가 없습니다. `arguments` 를 사용해 모든 인수들을 호출된 객체로 전달할 수 있습니다. 그럼 호출된 객체는 그 인수들을 처리할 수 있게 됩니다.

ECMAScript 5번 째 판의 시작으로, 모든 유사 배열 객체 타입을 사용할 수 있으며, 실제로 이는 프로퍼티 `length` 와 범위 `(0..length-1)` 내의 정수 프로퍼티를 갖는 다는 것을 의미합니다. 예를 들면, 이제 {{domxref("NodeList")}} 또는 `{ 'length': 2, '0': 'eat', '1': 'bananas' }` 와 같은 커스텀 객체를 사용할 수 있습니다.

> **참고:** Chrome 14와 Internet Explorer 9를 포함한 대부분의 브라우저는 아직 유사배열객체를 apply에 사용할 수 없으며 오류가 출력됩니다.

## 예제

### 배열에 배열을 붙이기 위해 `apply` 사용하기

`push` 를 사용하여 요소를 배열에 추가 할 수 있습니다. `push` 는 가변 인수를 허용하기 때문에 여러 요소를 동시에 추가 할 수 있습니다. 그러나 `push` 에 배열을 전달하면 요소를 개별적으로 추가하는 대신 실제로 해당 배열을 단일 요소로 추가하므로 결국 배열 내부에 배열로 끝납니다. 그것이 우리가 원하는 것이 아니라면? 이 경우 `concat` 은 우리가 원하는 동작을 하지만 실제로는 기존 배열에 추가되지 않고 새 배열을 만들어 반환 합니다. 그러나 우리는 기존 배열에 추가하고 싶었습니다 ... 그럼 이제 어쩌죠? 루프를 작성 할까요? 분명히 아니죠?

방법은 `apply` !

```js
var array = ["a", "b"];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

### `apply` 와 내장함수 사용

`apply` 를 보다 효과적으로 이용하면 일부 내장 함수는 어떤 작업에 대해서는 배열과 루프없이 쉽게 처리됩니다. 다음 예제에서는 배열에서 최대값과 최소값을 구하기 위해 `Math.max`/`Math.min` 함수를 이용하고 있습니다.

```js
// min/max number in an array
var numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
var max = Math.max.apply(null, numbers);
// 이는 Math.max(numbers[0], ...) 또는 Math.max(5, 6, ...)
// 와 거의 같음

var min = Math.min.apply(null, numbers);

// vs. simple loop based algorithm
(max = -Infinity), (min = +Infinity);

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
```

하지만 이러한 방식으로 `apply` 를 사용하는 경우 주의해야 합니다. JavaScript 엔진의 인수 길이 제한을 초과하는 위험성에 대해 이해할 필요가 있습니다. 함수에 너무 많은(대략 몇 만개 이상) 인수를 줄 때의 상황은 엔진마다 다른데(예를 들어 JavaScriptCore의 경우 [인수의 개수 제한은 65536](https://bugs.webkit.org/show_bug.cgi?id=80797)), 상한이 특별히 정해져 있지 않기 때문입니다. 어떤 엔진은 예외를 던집니다. 더 심한 경우는 실제 함수에 인수를 전달했음에도 불구하고 참조할 수 있는 인수의 수를 제한하고 있는 경우도 있습니다(이러한 엔진에 대해 더 자세히 설명하면, 그 엔진이 arguments의 상한을 4개로 했다고 하면\[실제 상한은 물론 더 위일 것입니다], 위 예제 코드의 전체 배열이 아니라 `5, 6, 2, 3` 만 `apply` 에 전달되어 온 것처럼 작동합니다).

만약 사용하는 배열 변수의 수가 수만을 초과하는 경우에는 복합적인 전략을 강구해야할 것입니다:한 번에 전달할 배열을 분할하여 사용하기:

```js
function minOfArray(arr) {
  var min = Infinity;
  var QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);
```

### 생성자 체이닝을 위한 `apply` 사용

Java 와 유사하게, 객체를 위한 {{jsxref("Operators/new", "constructors", "", 1)}} 체이닝을 위해 `apply` 를 사용할 수 있습니다. 다음 예제에서 인수 리스트 대신 생성자로 유사 배열 객체를 사용할 수 있게 해주는 `construct` 라는 전역 {{jsxref("Function")}} 메소드를 생성할 것입니다.

```js
Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
```

> **참고:** **알림:** 위에서 사용된 `Object.create()` 메소드는 상대적으로 새로운 것입니다. 대안으로, 다음 접근법 중 하나를 고려하세요.

[`Object.prototype.__proto__`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) 사용:

```js
Function.prototype.construct = function (aArgs) {
  var oNew = {};
  oNew.__proto__ = this.prototype;
  this.apply(oNew, aArgs);
  return oNew;
};
```

[클로져](/ko/docs/Web/JavaScript/Guide/Closures) 사용:

```JS
Function.prototype.construct = function(aArgs) {
  var fConstructor = this, fNewConstr = function() {
    fConstructor.apply(this, aArgs);
  };
  fNewConstr.prototype = fConstructor.prototype;
  return new fNewConstr();
};
```

{{jsxref("Function")}} 생성자 사용

```JS
Function.prototype.construct = function (aArgs) {
  var fNewConstr = new Function("");
  fNewConstr.prototype = this.prototype;
  var oNew = new fNewConstr();
  this.apply(oNew, aArgs);
  return oNew;
};
```

사용 예제

```js
function MyConstructor() {
  for (var nProp = 0; nProp < arguments.length; nProp++) {
    this["property" + nProp] = arguments[nProp];
  }
}

var myArray = [4, "Hello world!", false];
var myInstance = MyConstructor.construct(myArray);

console.log(myInstance.property1); // logs 'Hello world!'
console.log(myInstance instanceof MyConstructor); // logs 'true'
console.log(myInstance.constructor); // logs 'MyConstructor'
```

**알림:** 네이티브가 아닌 `Function.construct` 메소드는 {{jsxref("Date")}} 와 같은 일부 네이티브 생성자와 동작하지 않을 것입니다. 그런 경우, {{jsxref("Function.prototype.bind")}} 메소드를 사용해야 합니다. 예를 들어, 다음과 같은 배열이 있다고 할 때, {{jsxref("Global_Objects/Date", "Date")}} 생성자: `[2012, 11, 4]` 와 함께 사용되려면 다음과 같이 작성해야 합니다: `new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()`. 이는 가장 좋은 방법이 아니며, 어떤 상용 환경에서도 사용되지 않을 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- {{jsxref("Functions/arguments", "arguments")}} 객체
- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Functions and function scope", "", 1)}}
- {{jsxref("Reflect.apply()")}}
