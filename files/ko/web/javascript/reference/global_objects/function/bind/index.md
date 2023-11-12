---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
---

{{JSRef}}

**`bind()`** 메소드가 호출되면 새로운 함수를 생성합니다. 받게되는 첫 인자의 value로는 `this` 키워드를 설정하고, 이어지는 인자들은 바인드된 함수의 인수에 제공됩니다.

{{EmbedInteractiveExample("pages/js/function-bind.html", "taller")}}

## 구문

```js
    func.bind(thisArg[, arg1[, arg2[, ...]]])
```

### 매개변수

- `thisArg`
  - : 바인딩 함수가 대상 함수(target function)의 `this`에 전달하는 값입니다. 바인딩 함수를 {{jsxref("Operators/new", "new")}} 연산자로 생성한 경우 무시됩니다. `bind`를 사용하여 `setTimeout` 내에 콜백 함수를 만들 때, `thisArg`로 전달된 원시 값은 객체로 변환됩니다. `bind`할 인수(argument)가 제공되지 않으면 실행 스코프 내의 `this`는 새로운 함수의 `thisArg`로 처리됩니다.
- `arg1, arg2, ...`
  - : 대상 함수의 인수 앞에 사용될 인수.

### 반환 값

지정한 `this` 값 및 초기 인수를 사용하여 변경한 원본 함수의 복제본.

## 설명

`bind()` 함수는 새로운 바인딩한 함수를 만듭니다. 바인딩한 함수는 원본 함수 객체를 감싸는 함수로, ECMAScript 2015에서 말하는 특이 함수 객체(exotic function object)입니다. 바인딩한 함수를 호출하면 일반적으로 래핑된 함수가 호출 됩니다.

바인딩한 함수는 다음과 같은 내부 속성을 가지고 있습니다.

- **`[[BoundTargetFunction]]`** - 바인딩으로 감싼(wrapped) 원본 함수 객체.
- **`[[BoundThis]]`** - 감싸진 함수를 호출했을 때 항상 전달되는 값.
- **`[[BoundArguments]]`** - 감싸진 함수가 호출될 때 첫 번째 인수로 사용되는 값들의 목록.
- **`[[Call]]`** - 이 객체와 관련된 코드 실행. 함수 호출 식을 통해 호출됨. 내부 메소드의 인수는 this 값 및 호출 식으로 함수에 전달되는 인수를 포함하는 목록입니다.

바인딩된 함수가 호출될 때 `[[BoundTargetFunction]]`의 내부 메소드 `[[Call]]`을 호출합니다. `[[Call]]` 은 `Call(boundThis, args)`와 같은 인자를 가집니다. 이 때, `boundThis`는 `[[BoundThis]]`이고, `args`는 함수가 호출될 때 전달되어 따라오는 `[[BoundArguments]]` 입니다.

바인딩된 함수는 {{jsxref("Operators/new", "new")}} 연산자를 사용하여 생성될 수도 있습니다: 그렇게 하면 대상 함수가 마치 대신 생성된 것처럼 행동합니다. 제공된 `this` 값은 무시됩니다, 앞에 붙인(prepend) 인수는 에뮬레이트된 함수에 제공되지만.

## 예제

### 바인딩된 함수 생성

`bind()`의 가장 간단한 사용법은 호출 방법과 관계없이 특정 `this` 값으로 호출되는 함수를 만드는 겁니다. 초보 JavaScript 프로그래머로서 흔한 실수는 객체로부터 메소드를 추출한 뒤 그 함수를 호출할때, 원본 객체가 그 함수의 `this`로 사용될 것이라 기대하는 겁니다(예시 : 콜백 기반 코드에서 해당 메소드 사용). 그러나 특별한 조치가 없으면, 대부분의 경우 원본 객체는 손실됩니다. 원본 객체가 바인딩 되는 함수를 생성하면, 이러한 문제를 깔끔하게 해결할 수 있습니다.

```js
this.x = 9;
var module = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// 9 반환 - 함수가 전역 스코프에서 호출됐음

// module과 바인딩된 'this'가 있는 새로운 함수 생성
// 신입 프로그래머는 전역 변수 x와
// module의 속성 x를 혼동할 수 있음
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```

### 부분 적용 함수

`bind()`의 다음으로 간단한 사용법은 미리 지정된 초기 인수가 있는 함수를 만드는 겁니다. 지정될 초기 인수가 있다면 제공된 `this` 값을 따르고, 바인딩 된 함수에 전달되어 바인딩 된 함수가 호출될 때마다 대상 함수의 인수 앞에 삽입됩니다.

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// 선행될 인수를 설정하여 함수를 생성합니다.
var leadingThirtysevenList = list.bind(null, 37);

var list2 = leadingThirtysevenList(); // [37]

var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

var result1 = addArguments(1, 2); // 3

// 첫 번째 인수를 지정하여 함수를 생성합니다.
var addThirtySeven = addArguments.bind(null, 37);

var result2 = addThirtySeven(5); // 37 + 5 = 42

// 두 번째 인수는 무시됩니다.
var result3 = addThirtySeven(5, 10); // 37 + 5 = 42
```

### `setTimeout`과 함께 사용

{{domxref("window.setTimeout()")}} 내에서 기본으로, `this` 키워드는 {{ domxref("window") }} (또는 `global`) 객체로 설정됩니다. 클래스 인스턴스를 참조하는 `this`를 필요로 하는 클래스 메소드로 작업하는 경우, 명시해서 `this`를 콜백 함수에 바인딩할 수 있습니다, 인스턴스를 유지하기 위해.

```js
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

// 1초 지체 후 bloom 선언
LateBloomer.prototype.bloom = function () {
  window.setTimeout(this.declare.bind(this), 1000);
};

LateBloomer.prototype.declare = function () {
  console.log("I am a beautiful flower with " + this.petalCount + " petals!");
};

var flower = new LateBloomer();
flower.bloom();
// 1초 뒤, 'declare' 메소드 유발
```

### 생성자로 쓰이는 바인딩된 함수

> **경고:** 이 부분은 JavaScript 능력을 보이고 `bind()` 메소드의 일부 극단 상황(edge case)을 기록합니다. 아래 보이는 메소드는 일을 하는 가장 좋은 방법은 아니며 아마도 상용 환경에서 전혀 사용되지 않을 겁니다.

바인딩된 함수는 자동으로 대상 함수에 의해 생성되는 새로운 인스턴스를 생성하는 {{jsxref("Operators/new", "new")}} 연산자와 함께 쓰기에 적합합니다. 바인딩된 함수가 값을 생성하는 데 쓰이는 경우, 제공된 `this`는 무시됩니다. 그러나, 제공된 인수는 여전히 생성자 호출에 (인수부) 앞에 붙습니다:

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return this.x + "," + this.y;
};

var p = new Point(1, 2);
p.toString(); // '1,2'

// 아래 폴리필에서는 지원되지 않음,

// 원 bind와는 잘 작동:

var YAxisPoint = Point.bind(null, 0 /*x*/);

var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new Point(17, 42) instanceof YAxisPoint; // true
```

{{jsxref("Operators/new", "new")}}와 함께 쓰기 위한 바인딩된 함수를 만들기 위해 특별한 일을 할 필요가 없음을 주의하세요. 그 결과 분명히 호출되는 바인딩된 함수를 만들기 위해 특별히 아무것도 할 필요가 없습니다, 오히려 {{jsxref("Operators/new", "new")}}를 사용해서만 호출되는 바인딩된 함수를 요구하는 경우에도.

```js
// 예는 JavaScript 콘솔에서 직접 실행될 수 있음
// ...위에서부터 이어짐

// 여전히 일반 함수로서 호출될 수 있음
// (보통 이를 원하지 않더라도)
YAxisPoint(13);

emptyObj.x + "," + emptyObj.y;
// >  '0,13'
```

오로지 {{jsxref("Operators/new", "new")}}를 사용하거나 호출해서만 바인딩된 함수의 사용을 지원하고 싶은 경우, 대상 함수는 그 제한을 강제해야 합니다.

### 바로 가기 생성

`bind()`는 특정 `this` 값을 필요로 하는 함수의 바로 가기(shortcut)를 만들고 싶은 경우에도 도움이 됩니다.

가령, 배열 같은 객체를 실제 배열로 변환하는 데 사용하고 싶은 {{jsxref("Array.prototype.slice")}}를 취하세요. 이와 같은 바로 가기를 만들 수 있습니다:

```js
var slice = Array.prototype.slice;

// ...

slice.apply(arguments);
```

`bind()`로, 이는 단순화될 수 있습니다. 다음 조각 코드에서, `slice`는 {{jsxref("Function.prototype")}}의 {{jsxref("Function.prototype.apply()", "apply()")}} 함수에 바인딩된 함수입니다, `this` 값을 {{jsxref("Array.prototype")}}의 {{jsxref("Array.prototype.slice()", "slice()")}} 함수로 설정한 채. 이는 추가 `apply()` 호출은 삭제될 수 있음을 뜻합니다:

```js
// 이전 예에서 "slice"와 같음
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.apply.bind(unboundSlice);

// ...

slice(arguments);
```

## 폴리필

`bind` 함수는 ECMA-262 제5판에 추가되었습니다; 그러하기에 모든 브라우저에 없을 수 있습니다. 스크립트 시작 부분에 다음 코드를 삽입함으로써 이 문제를 부분적으로 해결할수 있으며, bind() 지원하지 않는 구현에서도 대부분의 기능을 사용할 수 있습니다.

```js
if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    if (typeof this !== "function") {
      // ECMAScript 5 내부 IsCallable 함수와
      // 가능한 가장 가까운 것
      throw new TypeError(
        "Function.prototype.bind - what is trying to be bound is not callable",
      );
    }

    var aArgs = Array.prototype.slice.call(arguments, 1),
      fToBind = this,
      fNOP = function () {},
      fBound = function () {
        return fToBind.apply(
          this instanceof fNOP ? this : oThis,
          aArgs.concat(Array.prototype.slice.call(arguments)),
        );
      };

    if (this.prototype) {
      // Function.prototype은 prototype 속성이 없음
      fNOP.prototype = this.prototype;
    }
    fBound.prototype = new fNOP();

    return fBound;
  };
}
```

이 알고리즘과 스펙화된 알고리즘 간 많은 차이(충분히 다른 차이가 있을 수 있습니다, 이 목록은 정말 철저히 하지 않았기에) 중 일부는 다음입니다:

- 부분 구현은 {{jsxref("Array.prototype.slice()")}}, {{jsxref("Array.prototype.concat()")}}, {{jsxref("Function.prototype.call()")}} 및 {{jsxref("Function.prototype.apply()")}}, 원래 값을 갖는 내장 메소드에 의존합니다.
- 부분 구현은 불변(immutable) "poison pill" {{jsxref("Function.caller", "caller")}} 및 get, set 또는 삭제 시 {{jsxref("Global_Objects/TypeError", "TypeError")}}가 발생하는 `arguments` 속성이 없는 함수를 만듭니다. (이는 구현이 {{jsxref("Object.defineProperty")}}를 지원하는 경우 추가 또는 구현이 [`Object.prototype.__defineGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) 및 [`Object.prototype.__defineSetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) 메소드를 지원하는 경우 \[삭제 시 오류 발생(throw-on-delete) 동작(behavior) 없이] 부분 구현될 수 있습니다.)
- 부분 구현은 `prototype` 속성이 있는 함수를 만듭니다. (고유 바인딩된 함수는 없습니다.)
- 부분 구현은 {{jsxref("Function.length", "length")}} 속성이 ECMA-262에 의해 부여된(mandated) 그것과 일치하지 않는 바인딩된 함수를 만듭니다: 길이 0인 함수를 만듭니다, 반면에 전체 구현은 대상 함수의 길이 및 미리 지정된 인수의 수에 따라 0이 아닌 길이를 반환할 수 있습니다.

이 부분 구현을 쓰기로 고른 경우, **동작이 ECMA-262 제5판을 벗어난 경우에 의존하지 않아야 합니다!** 그러나 주의 약간(과 아마도 특정 요구에 맞추기 위한 추가 수정)으로, 이 부분 구현은 `bind()`가 스펙에 따라 널리 구현될 때까지 적당한 다리가 될 수 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "함수", "", 1)}}
