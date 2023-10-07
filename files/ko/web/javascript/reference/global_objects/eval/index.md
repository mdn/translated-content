---
title: eval()
slug: Web/JavaScript/Reference/Global_Objects/eval
---

{{jsSidebar("Objects")}}

> **경고:** **주의:** 문자열로부터 **`eval()`**을 실행하는 것은 엄청나게 위험합니다. **`eval()`**을 사용하면 해커가 위험한 코드를 사용할 수 있습니다. 아래에 [eval을 절대 사용하지 말 것!](<#eval을 절대 사용하지 말 것!>)을 확인하세요.

**`eval()`**은 문자로 표현된 JavaScript 코드를 실행하는 함수입니다.

{{EmbedInteractiveExample("pages/js/globalprops-eval.html")}}

## 구문

```js
eval(string);
```

### 매개변수

- `string`
  - : 자바스크립트 표현식, 명령문, 또는 연속되는 다수의 명령문을 나타내는 문자열. 표현식은 이미 존재하는 객체의 변수나 속성을 포함할 수 있습니다.

### 반환값

주어진 코드를 평가하여 얻은 값. 값이 없다면 {{jsxref("undefined")}}를 반환합니다.

## 설명

`eval()`은 전역 객체의 함수 속성입니다.

`eval()`의 인자는 문자열입니다. 인자가 표현식을 나타낸다면 `eval()`은 표현식을 평가합니다. 인자가 하나 이상의 JavaScript 명령문을 나타낸다면 모두 실행합니다. 연산식을 계산하기 위해 `eval()`을 호출하지 마세요. 자바스크립트는 연산식을 알아서 계산합니다.

문자열로 연산식을 구성하면 나중에 `eval()`로 계산할 수 있습니다. `x` 라는 변수가 있다고 가정하면 `x`가 포함된 연산식을 문자열로, 예를 들어 "`3 * x + 2`"로 나타내고 나중에 `eval()`을 호출해서 계산을 연기할 수 있습니다.

`eval()`의 인자가 문자열이 아니면 `eval()`은 인자를 그대로 반환합니다. 다음 예시에서, `String` 생성자가 명시된 경우 문자열을 계산하는 대신 `String` 객체를 반환합니다.

```js
eval(new String("2 + 2")); // "2 + 2"를 포함한 String 객체를 반환
eval("2 + 2"); // 4를 반환
```

`toString()`을 사용하는 일반적인 방식으로 제약을 피할 수 있습니다.

```js
var expression = new String("2 + 2");
eval(expression.toString()); // 4를 반환
```

`eval`을 직접 호출하지 않고 참조를 통해 _간접적으로_ 사용한다면 [ECMAScript 5부터는](http://www.ecma-international.org/ecma-262/5.1/#sec-10.4.2) 지역 범위가 아니라 전역 범위에서 동작합니다. 예를 들어 `eval()`로 함수를 선언하면 전역 함수가 되고, 실행되는 코드는 실행되는 위치의 지역 범위에 접근할 수 없습니다.

```js
function test() {
  var x = 2,
    y = 4;
  console.log(eval("x + y")); // 직접 호출, 지역 범위 사용, 결과값은 6
  var geval = eval; // eval을 전역 범위로 호출하는 것과 같음
  console.log(geval("x + y")); // 간접 호출, 전역 범위 사용, `x`가 정의되지 않았으므로 ReferenceError 발생
  (0, eval)("x + y"); // 다른 방식으로 간접 호출
}
```

## `eval`을 절대 사용하지 말 것!

`eval()`은 인자로 받은 코드를 caller의 권한으로 수행하는 위험한 함수입니다. 악의적인 영향을 받았을 수 있는 문자열을 `eval()`로 실행한다면, 당신의 웹페이지나 확장 프로그램의 권한으로 사용자의 기기에서 악의적인 코드를 수행하는 결과를 초래할 수 있습니다. 또한, 제3자 코드가 `eval()`이 호출된 위치의 스코프를 볼 수 있으며, 이를 이용해 비슷한 함수인 {{jsxref("Global_Objects/Function", "Function")}}으로는 실현할 수 없는 공격이 가능합니다.

또한 최신 JS 엔진에서 여러 코드 구조를 최적화하는 것과 달리 `eval()`은 JS 인터프리터를 사용해야 하기 때문에 다른 대안들보다 느립니다.

추가로, 최신 JavaScript 인터프리터는 자바스크립트를 기계 코드로 변환합니다. 즉, 변수명의 개념이 완전히 없어집니다. 그러나 `eval`을 사용하면 브라우저는 기계 코드에 해당 변수가 있는지 확인하고 값을 대입하기 위해 길고 무거운 변수명 검색을 수행해야 합니다. 또한 `eval()`을 통해 자료형 변경 등 변수에 변화가 일어날 수 있으며, 브라우저는 이에 대응하기 위해 기계 코드를 재작성해야 합니다. 그러나, (다행히) [window.Function](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function)이라는 `eval`보다 훨씬 나은 대안이 있습니다. `eval()`을 사용하는 코드를 `Function()`으로 바꾸는 방법에 대해서는 아래를 참조하세요.

`eval`을 사용하는 나쁜 코드:

```js
function looseJsonParse(obj) {
  return eval(obj);
}
console.log(looseJsonParse("{a:(4-1), b:function(){}, c:new Date()}"));
```

`eval`이 없는 코드:

```js
function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ")")();
}
console.log(looseJsonParse("{a:(4-1), b:function(){}, c:new Date()}"));
```

위의 두 코드는 얼핏 보면 같은 방식으로 실행되는 것처럼 보이지만, `eval`이 있는 코드가 훨씬 느립니다. 평가되는 객체의 `c: new Date()`를 주목하세요. `eval`이 없는 함수의 경우 이 객체는 전역 범위에서 평가되기 때문에 브라우저에서는 `Date`를 같은 이름의 지역 변수가 아니라 `window.Date`로 취급할 수 있습니다. 그러나 `eval()`을 사용하는 코드에서는 아래와 같은 경우도 존재할 수 있기 때문에 `Date`를 이렇게 취급할 수 없습니다.

```js
function Date(n) {
  return [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ][n % 7 || 0];
}
function looseJsonParse(obj) {
  return eval(obj);
}
console.log(looseJsonParse("{a:(4-1), b:function(){}, c:new Date()}"));
```

그러므로 `eval()`이 있는 코드의 경우 브라우저는 `Date()`라는 지역 변수의 존재를 확인하기 위해 무거운 변수명 탐색을 수행해야 하며, 이는 `Function()`과 비교하면 매우 느립니다.

만약 위의 상황에서 실제로 새로 선언한 `Date` 함수를 `Function()`에서 실행해야 하는 상황을 생각해 봅시다. 이렇게 되면 `eval()`로 돌아가야 할까요? 물론 아닙니다. 아래의 접근을 시도해 보세요.

```js
function Date(n) {
  return [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ][n % 7 || 0];
}
function runCodeWithDateFunction(obj) {
  return Function('"use strict";return (' + obj + ")")()(Date);
}
console.log(runCodeWithDateFunction("function(Date){ return Date(5) }"));
```

위 코드는 삼중 중첩 함수를 사용하기 때문에 매우 비효율적으로 보일 수 있지만, 이 방법의 이점을 우선 살펴봅시다.

1\. `runCodeWithDateFunction`에 문자열로 전달된 코드를 최소화할 수 있다.

2\. Function call overhead is minimal, making the far smaller code size well worth the benefit

3\. `Function()`은 `"use strict";`를 사용함으로써 코드의 성능을 최적화할 수 있다.

4\. `eval()`을 사용하지 않으므로 실행 속도가 훨씬 빠르다.

마지막으로 코드 최소화의 측면에서 살펴보면, 위와 같이 `Function()`을 사용했을 때는 아래의 최소화된 코드와 같이 함수의 인자 이름 역시 짧게 줄일 수 있으므로 runCodeWithDateFunction에 전달하는 코드 문자열을 더욱 효율적으로 줄일 수 있습니다.

```js
console.log(
  Function('"use strict";return(function(a){return a(5)})')()(function (a) {
    return "Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(
      " ",
    )[a % 7 || 0];
  }),
);
```

자주 쓰이는 용례에 대해서는 `eval()`이나 `Function()`보다 안전하고 빠른 대안도 존재합니다.

### 객체의 속성에 접근하기

속성명으로 속성을 찾는 데 `eval()`을 사용해서는 안 됩니다. 다음 예제와 같이 코드를 실행하기 전까지는 접근할 속성을 알 수 없는 상황을 생각해 봅시다. 이 상황은 `eval`로 처리할 수 있습니다.

```js
var obj = { a: 20, b: 30 };
var propname = getPropName(); // "a" 또는 "b"를 반환

eval("var result = obj." + propname);
```

그러나 여기에서 `eval()`을 쓸 필요가 없고, 지양되어야 합니다. 그 대신 훨씬 빠르고 안전한 [속성 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors)를 사용하여야 합니다.

```js
var obj = { a: 20, b: 30 };
var propname = getPropName(); // "a" 또는 "b"를 반환
var result = obj[propname]; //  obj[ "a" ]는 obj.a와 동일함
```

이 방법으로 더 깊은 속성에도 접근할 수 있습니다. `eval()`을 사용한다면 다음과 같을 것입니다.

```js
var obj = { a: { b: { c: 0 } } };
var propPath = getPropPath(); // "a.b.c"를 반환한다고 가정

eval("var result = obj." + propPath);
```

여기서 `eval()`의 사용을 피하려면 속성 경로를 [`split`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)한 다음 순서대로 접근할 수도 있습니다.

```js
function getDescendantProp(obj, desc) {
  var arr = desc.split(".");
  while (arr.length) {
    obj = obj[arr.shift()];
  }
  return obj;
}

var obj = { a: { b: { c: 0 } } };
var propPath = getPropPath(); // "a.b.c"를 반환한다고 가정
var result = getDescendantProp(obj, propPath);
```

속성에 값을 대입하는 것도 비슷하게 할 수 있습니다.

```js
function setDescendantProp(obj, desc, value) {
  var arr = desc.split(".");
  while (arr.length > 1) {
    obj = obj[arr.shift()];
  }
  return (obj[arr[0]] = value);
}

var obj = { a: { b: { c: 0 } } };
var propPath = getPropPath(); // "a.b.c"를 반환한다고 가정
var result = setDescendantProp(obj, propPath, 1); // test.a.b.c의 값은 1로 지정됨
```

### 단편적인 코드 수행 대신 함수 사용하기

JavaScript의 [함수는 1급 객체](http://en.wikipedia.org/wiki/First-class_function)이므로 다른 API에 함수를 인자로 전달할 수도 있고, 변수나 객체의 속성으로 대입할 수도 있습니다. 다수의 DOM API는 이 점을 염두에 두고 설계되므로, 다음과 같이 코드를 짜야 합니다.

```js
// setTimeout(" ... ", 1000) 대신에
setTimeout(function() { ... }, 1000);

// elt.setAttribute("onclick", "...") 대신에
elt.addEventListener("click", function() { ... } , false);
```

또한 [클로저](/ko/docs/Web/JavaScript/Closures)를 이용해 문자열을 합치는 등의 연산 없이 매개변수화된 함수를 생성할 수 있습니다.

### JSON 파싱 (문자열을 JavaScript 객체로 변환)

`eval()`을 호출하려는 문자열에 코드가 아니라 데이터가 포함되어 있다면(예를 들어 `"[1, 2, 3]"`과 같은 배열), 대신 JavaScript의 문법 일부를 이용해 문자열로 데이터를 표현할 수 있는 [JSON](/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON)을 사용하는 것을 고려해 보세요. [Downloading JSON and JavaScript in extensions](/ko/docs/Downloading_JSON_and_JavaScript_in_extensions)도 참고해 보세요.

JSON 문법은 JavaScript 문법에 비해 제약이 있기 때문에, 유효한 JavaScript 리터럴이 JSON으로 변환되지 않는 경우도 있습니다. 예를 들어, JSON에서는 배열이나 객체를 콤마로 끝낼 수 없고, 객체 리터럴에서 속성명(키)은 반드시 따옴표로 감싸야 합니다. 나중에 JSON으로 파싱할 문자열을 생성할 때는 JSON 직렬 변환기를 사용하여야 합니다.

### 코드 대신 데이터 전달하기

예를 들어, 웹 페이지의 내용을 추출하는 확장 프로그램은 JavaScript 코드 대신 [XPath](/ko/docs/XPath)에 스크랩 규칙을 정의할 수 있습니다.

### 제한된 권한으로 코드 실행하기

제3자 코드를 실행해야 할 때는 제한된 권한으로 실행하는 것을 고려해야 합니다. 이는 주로 확장 프로그램이나 XUL 어플리케이션에 적용되며, 이때 [Components.utils.evalInSandbox](/ko/docs/Components.utils.evalInSandbox)를 사용할 수 있습니다.

## 예제

### `eval` 사용하기

아래 코드에서 `eval()`를 포함하는 문장은 모두 42를 반환합니다. 전자는 문자열 "`x + y + 1`"을, 후자는 문자열 "`42`"를 평가합니다.

```js
var x = 2;
var y = 39;
var z = "42";
eval("x + y + 1"); // 42를 반환
eval(z); // 42를 반환
```

### `eval`을 사용해서 JavaScript 코드 문자열 평가하기

다음 예제에서는 `eval()`을 사용하여 `str` 문자열을 평가합니다. 이 문자열은 `x`가 5이면 로그를 출력한 다음 `z`에 42를 할당하고, 그렇지 않으면 `z`에 0 을 할당하는 JavaScript 코드입니다. 두 번째 문장이 실행되면, `eval()`은 이 문장의 집합을 수행하고, `z`에 할당된 값을 반환합니다.

```js
var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42;} else z = 0; ";

console.log("z is ", eval(str));
```

여러 값을 정의할 경우 마지막 값을 반환합니다.

```js
var x = 5;
var str = "if (x == 5) {console.log('z is 42'); z = 42; x = 420; } else z = 0;";

console.log("x is ", eval(str)); // z는 42, x는 420
```

### 마지막 표현식이 수행된다

`eval()` 은 마지막 표현식의 평가값을 반환합니다.

```js
var str = "if ( a ) { 1+1; } else { 1+2; }";
var a = true;
var b = eval(str); // 2를 반환

console.log("b is : " + b);

a = false;
b = eval(str); // 3을 반환

console.log("b is : " + b);
```

### 함수 정의 문자열로서의 `eval` 은 앞뒤를 "("와 ")"로 감싸야 한다

```js
var fctStr1 = "function a() {}";
var fctStr2 = "(function a() {})";
var fct1 = eval(fctStr1); // undefined를 반환
var fct2 = eval(fctStr2); // 함수를 반환
```

## 브라우저 호환성

{{Compat}}

## 참고

- {{jsxref("Global_Objects/uneval", "uneval()")}}
- [속성 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
- [WebExtensions: Using eval in content scripts](<https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Content_scripts#Using_eval()_in_content_scripts>)
