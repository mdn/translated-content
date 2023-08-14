---
title: 전개 구문
slug: Web/JavaScript/Reference/Operators/Spread_syntax
---

{{jsSidebar("Operators")}}

**전개 구문**을 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있습니다.

{{EmbedInteractiveExample("pages/js/expressions-spreadsyntax.html")}}

## 구문

함수 호출:

```js
myFunction(...iterableObj);
```

배열 리터럴과 문자열:

```js
[...iterableObj, "4", "five", 6];
```

객체 리터럴(ECMAScript 2018에서 추가):

```js
let objClone = { ...obj };
```

## 예제

### 함수 호출에서의 전개

#### `apply()` 대체

일반적으로 배열의 엘리먼트를 함수의 인수로 사용하고자 할 때 {{jsxref( "Function.prototype.apply()")}} 를 사용하였습니다.

```js
function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction.apply(null, args);
```

전개 구문을 사용해 위 코드는 다음과 같이 작성될 수 있습니다.

```js
function myFunction(x, y, z) {}
var args = [0, 1, 2];
myFunction(...args);
```

인수 목록의 모든 인수는 전개 구문을 사용할 수 있으며, 여러번 사용될 수도 있습니다.

```js
function myFunction(v, w, x, y, z) {}
var args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
```

#### `new`에 적용

{{jsxref("Operators/new", "new")}}를 사용해 생성자를 호출 할 때, 배열과 `apply` (`apply` 는 `[[Call]]` 을 하지만 `[[Construct]]` 는 그렇지 않음) 를 **직접** 사용하는 것은 불가했습니다. 하지만, 전개 구문 덕분에 배열을 `new` 와 함께 쉽게 사용될 수 있습니다.

```js
var dateFields = [1970, 0, 1]; // 1 Jan 1970
var d = new Date(...dateFields);
```

전개 구문 없이 파라미터의 배열과 함께 `new`를 사용하려면, 부분적인 어플리케이션을 통해 **간접적**으로 해야 합니다.

```js
function applyAndNew(constructor, args) {
  function partial() {
    return constructor.apply(this, args);
  }
  if (typeof constructor.prototype === "object") {
    partial.prototype = Object.create(constructor.prototype);
  }
  return partial;
}

function myConstructor() {
  console.log("arguments.length: " + arguments.length);
  console.log(arguments);
  this.prop1 = "val1";
  this.prop2 = "val2";
}

var myArguments = ["hi", "how", "are", "you", "mr", null];
var myConstructorWithArguments = applyAndNew(myConstructor, myArguments);

console.log(new myConstructorWithArguments());
// (internal log of myConstructor):           arguments.length: 6
// (internal log of myConstructor):           ["hi", "how", "are", "you", "mr", null]
// (log of "new myConstructorWithArguments"): {prop1: "val1", prop2: "val2"}
```

### 배열 리터럴에서의 전개

#### 더 강력한 배열 리터럴

전개 구문 없이, 이미 존재하는 배열을 일부로 하는 새로운 배열을 생성하기에, 배열 리터럴 문법은 더 이상 충분하지 않으며 {{jsxref("Array.prototype.push", "push()")}}, {{jsxref("Array.prototype.splice", "splice()")}}, {{jsxref("Array.prototype.concat", "concat()")}} 등의 조합을 사용하는 대신 명령형 코드를 사용해야 했습니다. 전개 구문으로 이는 훨씬 더 간결해졌습니다.

```js
var parts = ["shoulders", "knees"];
var lyrics = ["head", ...parts, "and", "toes"];
// ["head", "shoulders", "knees", "and", "toes"]
```

인수 목록을 위한 spread 처럼, `...` 은 배열 리터럴의 어디에서든 사용될 수 있으며 여러번 사용될 수도 있습니다.

#### 배열 복사

```js
var arr = [1, 2, 3];
var arr2 = [...arr]; // arr.slice() 와 유사
arr2.push(4);

// arr2 은 [1, 2, 3, 4] 이 됨
// arr 은 영향을 받지 않고 남아 있음
```

> **참고:** Spread 문법은 배열을 복사할 때 1 레벨 깊이에서 효과적으로 동작합니다. 그러므로, 다음 예제와 같이 다차원 배열을 복사하는것에는 적합하지 않을 수 있습니다. ({{jsxref("Object.assign()")}} 과 전개 구문이 동일합니다)

```js
var a = [[1], [2], [3]];
var b = [...a];
b.shift().shift(); // 1
// 이제 배열 a 도 영향을 받음: [[], [2], [3]]
```

#### 배열을 연결하는 더 나은 방법

{{jsxref("Array.prototype.concat()")}} 은 배열을 존재하는 배열의 끝에 이어붙이는데 종종 사용됩니다. 전개 구문 없이, 이는 다음과 같이 작성됩니다.

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// arr2 의 모든 항목을 arr1 에 붙임
arr1 = arr1.concat(arr2);
```

전개 구문을 사용해 이는 다음과 같아집니다.

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2]; // arr1 은 이제 [0, 1, 2, 3, 4, 5]
```

{{jsxref("Array.prototype.unshift()")}}는 존재하는 배열의 시작 지점에 배열의 값들을 삽입하는데 종종 사용됩니다. 전개 구문 없이, 이는 다음과 같이 작성됩니다.

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// arr2 의 모든 항목을 arr1 의 앞에 붙임
Array.prototype.unshift.apply(arr1, arr2); // arr1 은 이제 [3, 4, 5, 0, 1, 2] 가 됨
```

전개 구문으로, 이는 다음과 같아집니다.

```js
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr2, ...arr1]; // arr1 은 이제 [3, 4, 5, 0, 1, 2] 가 됨
```

<div class="blockIndicator note"><p><strong>참고</strong>: <code>unshift()</code>와 달리, 위 예제는 새로운 <code>arr1</code>을 만들며 기존 배열을 변형하지 않습니다.</p></div>

### 객체 리터럴에서의 전개

[ECMAScript의 Rest/Spread 프로퍼티](https://github.com/tc39/proposal-object-rest-spread) 제안 (stage 4) 은 [객체 리터럴](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)에 속성 전개를 추가합니다. 이는 제공된 객체가 소유한 열거형 프로퍼티를 새로운 객체로 복사합니다.

얕은 복제(prototype 제외) 또는 객체의 병합은 이제 {{jsxref("Object.assign()")}} 보다 더 짧은 문법을 사용해 가능합니다.

```js
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

{{jsxref("Object.assign()")}} 은 [setters](/ko/docs/Web/JavaScript/Reference/Functions/set) 를 트리거하지만 전개 구문은 그렇지 않음을 유의합니다.

{{jsxref("Object.assign()")}} 함수를 대체하거나 흉내낼 수 없음을 유의합니다.

```js
var obj1 = { foo: "bar", x: 42 };
var obj2 = { foo: "baz", y: 13 };
const merge = (...objects) => ({ ...objects });

var mergedObj = merge(obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

var mergedObj = merge({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }
```

위 예제에서, 전개 구문은 예상대로 동작하지 않습니다. 나머지 매개변수로 인해, 인수 배열을 객체 리터럴로 전개합니다.

### 이터러블 전용

전개 구문 (spread 프로퍼티인 경우 제외) 은 [iterable](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator) 객체에만 적용됩니다.

```js
var obj = { key1: "value1" };
var array = [...obj]; // TypeError: obj is not iterable
```

### 많은 값과 Spread

함수 호출에서 spread 문법을 사용할 때, 자바스크립트 엔진의 인수 길이 제한을 초과하지 않도록 주의합니다. 자세한 내용은 [`apply()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 를 보세요.

## 나머지 구문 (매개변수)

나머지 구문은 전개 구문과 정확히 같아보이지만, 대신 배열이나 객체를 분해할 때 사용됩니다. 어떤 면에서, 나머지 구문은 전개 구문과 반대입니다. 전개는 배열을 그 엘리먼트로 '확장' 하는 반면, 나머지는 여러 엘리먼트를 수집하며 이를 하나의 엘리먼트로 '압축' 합니다. [나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters) 문서를 보세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters) (또한 '`...`')
- [fn.apply](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) (또한 '`...`')
