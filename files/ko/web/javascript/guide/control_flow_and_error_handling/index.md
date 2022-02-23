---
title: 제어 흐름과 에러 처리
slug: Web/JavaScript/Guide/Control_flow_and_error_handling
tags:
  - 가이드
  - 자바 스크립트
  - 초보자
translation_of: Web/JavaScript/Guide/Control_flow_and_error_handling
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}

JavaScript는 어플리케이션 상의 상호작용을 통합하는데 사용할 수 있는 일련의 문법, 특히 제어흐름 문을 지원합니다. 이 장에서는 이러한 문법의 개요를 제공합니다.

[JavaScript reference](/en-US/docs/Web/JavaScript/Reference/Statements)는 이 장의 문법에 대한 철저하고 자세한 내용은 포함하고 있습니다. 세미콜론 (;) 은 JavaScript 코드 상에서 문장을 나누는데 사용됩니다.

JavaScript 표현식도 문법입니다. 표현식에 대한 자세한 내용은 [Expressions and operators](/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)를 참조하세요.

## Block 문

Block 문은 코드를 묶는 가장 기본적인 문법입니다. Block 문은 중괄호 ( { } )에 의해 범위가 결정됩니다.

```js
{
  statement_1;
  statement_2;
  .
  .
  .
  statement_n;
}
```

### 예시

Block 문은 일반적으로 제어 흐름 문(if, for, while)과 함께  사용됩니다.

```js
while (x < 10) {
  x++;
}
```

여기서, `{ x++; }`는 block 문입니다.

**중요**: ECMAScript2015 이전의 JavaScript는 **블록 범위를 가지고 있지 않습니다.** Block 내에서 선언한 변수는 블록을 넘어 변수가 위치한 함수 혹은 스크립트에 영향을 끼치게 됩니다.즉, block 문은 변수의 범위를 정의하지 않습니다. 자바스크립트의 "독립" block 은 C 혹은 Java의 그것과 완전히 다른 결과를 가집니다. 예를 들어:

```js
var x = 1;
{
  var x = 2;
}
console.log(x); // outputs 2
```

블록 내에 var x 문이 블록 전에 var x 문과 같은 범위에 있기 때문에 2를 출력합니다. C 나 Java에서 해당 코드는 1을 출력합니다.

ECMAScript2015부터, `let` 그리고 `const` 변수 선언으로 변수의 블록 범위를 제한할 수 있습니다. 자세한 내용은 {{jsxref("Statements/let", "let")}}와 {{jsxref("Statements/const", "const")}} 참조 페이지를 참조하세요.

## 조건문

조건문은 특정 조건이 참인 경우에 실행하는 명령의 집합입니다. JavaScript는 두 가지 조건문을 지원합니다: `if...else` and `switch`.

### `if...else` 문

특정 조건이 참인 경우 문장을 실행하기 위해 if 문을 사용합니다. 또한 선택적으로 조건이 거짓인 경우 문장을 실행하기 위해서는 else 절을 사용합니다. 다음과 같은 경우 :

```js
if (condition) {
  statement_1;
} else {
  statement_2;
}
```

조건의 참과 거짓에 따라 수행문이 정해질 때 사용할 수 있습니다.. 무엇이 참과 거짓으로 평가되는 지에 대한 설명은 [Boolean](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean#Description)을 참조하세요. 조건이 참으로 평가되면, statement_1은 실행됩니다. 그렇지 않으면, statement_2가 실행됩니다. statement_1과 statement_2는 if문이 더 중첩 된 경우를 포함한 문장이 될 수도 있습니다.

다음과 같은 순서대로 나열된 여러 조건을 가지고 else if를 사용하여 문장을 복잡하게 할 수 있습니다:

```js
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else if (condition_n) {
  statement_n;
} else {
  statement_last;
}
```

여러 줄의 문장을 실행하기 위해, block 문(`{ ... }`)안에 코드들을 작성합니다. 일반적으로, 특히 코드가 중첩할 때, 항상 block 문을 사용하는 것이 좋은 습관입니다:

```js
if (condition) {
  statement_1_runs_if_condition_is_true;
  statement_2_runs_if_condition_is_true;
} else {
  statement_3_runs_if_condition_is_false;
  statement_4_runs_if_condition_is_false;
}
```

조건문 안에서의 변수값 할당은 사용하지 않는 것이 좋습니다. 왜냐하면 그것은 코드를 자세히 보지 않는 경우, 동등비교연산자로 오해할 수 있기 때문입니다. 예를 들어, 다음 코드는 사용하지 마세요.

<div class="warning"><p>if (x = y) {<br>     /* statements here */<br>}</p></div>

만약 조건식에 할당을 사용해야하는 경우, 일반적인 관행은 할당 주위에 추가 괄호를 넣는 것입니다. 예를 들어:

```js
if ((x = y)) {
  /* statements here */
}
```

#### 거짓으로 취급하는 값

다음과 같은 값은 거짓으로 평가됩니다:

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- the empty string (`""`)

조건문에 전달되었을 때 모든 개체를 포함하여 다른 모든 값은 참으로 평가합니다.

{{jsxref("Boolean")}} 개체의 참과 거짓 값으로 원시 boolean 값 true와 false를 혼동하지 마세요. 예를 들어:

```js
var b = new Boolean(false);
if (b) // this condition evaluates to true
```

#### 예시

다음 예에서, `텍스트` 개체의 문자 수가 3인 경우 함수 `checkData`는 `true`를 반환합니다; 그렇지 않으면 경고를 표시하고 `false`를 반환합니다.

```js
function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert("Enter exactly three characters. " +
    document.form1.threeChar.value + " is not valid.");
    return false;
  }
}
```

### `switch`문

Switch문은 프로그램이 표현식을 평가하고  값을 조건과 비교합니다. 만약 값이 일치한다면,  프로그램은 각 조건의 하위 문장을 실행합니다. Switch문은 아래와 같이 사용합니다.:

```js
switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    ...
  default:
    statements_def
    [break;]
}
```

프로그램은 주어진 값과 일치하는 case 라벨을 찾습니다. 그리고나서 관련된 구문을 수행합니다. 만약 매치되는 라벨이 없다면 그 default 절을 찾습니다. 찾게되면, 관련된 구문을 수행합니다.  default 절을 못 찾게 된다면 프로그램의 switch문은 종료됩니다. 관례상, default 절은 마지막절입니다. 하지만 꼭 그럴 필요는 없습니다.

한번 일치된 문장이 수행되고 switch문을 따라서 계속 수행한다면 각각의 조건절로 연결된 선택적인 break문은 그 프로그램이 switch문을 벗어나게 합니다. 만약 break문이 생략된다면, 그 프로그램은 switch문안에서 다음 문장을 계속 수행합니다.

#### **예시**

아래 예에서, 만약 "fruittype"가 "Bananas"라면, 프로그램은 case "Bananas"와 값이 일치합니다. 그리고 관련된 문장을 실행합니다. 프로그램의 switch문은 break문을 만났을 때 종료됩니다. 그리고 switch문 다음에 나오는 문장을 실행합니다. 만약 break문이 생략되면, 조건문 "Cherries" 와 관련된 문장도 실행됩니다.

```js
switch (fruittype) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    console.log("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
    console.log("Mangoes are $0.56 a pound.");
    break;
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
   console.log("Sorry, we are out of " + fruittype + ".");
}
console.log("Is there anything else you'd like?");
```



## 예외처리문

여러분은 throw문을 사용하는 예외들을 사용 할 수 있고 try...catch문을 사용하는 예외들 또한 다룰 수 있습니다.

- [`throw` ](#throw_statement)문
- [`try...catch` ](#try_catch_statement)문

### 예외 유형

대부분 자바스크립트안에서 사용될 수 있습니다. 그럼에도 불구하고, 반드시 사용되는 객체들이 같은 것으로 만들어 지지는 않습니다. 이것들은 에러같은 숫자들이나 문자열들을 사용하는데 흔한 일이지만 특히 이런 목적으로 만들어진 예외 유형중 하나를 사용하는데 더 효과적입니다:

- [ECMAScript exceptions](/ko/docs/Web/JavaScript/Reference/Global_Objects#Fundamental_objects)
- {{domxref("DOMException")}} and {{domxref("DOMError")}}

### `throw` 문

예외를 사용할 때 `throw` 문을 사용합니다. 여러분이 예외를 사용할 때, 사용되는 값을 포함하는 표현을 명시해야합니다:

    throw expression;

여러분은 구체적 유형의 표현이 아니라도 어떤 표현이든지 사용할 것입니다. 다음 코드는 다양한 유형중의 여러 예외들을 사용합니다:

```js
throw "Error2";   // String type
throw 42;         // Number type
throw true;       // Boolean type
throw {toString: function() { return "I'm an object!"; } };
```

<div class="note"><strong>Note:</strong> 여러분은 <em> 예외를 사용할때 </em>객체를 명시할 수 있습니다. 그리고나서  <code>catch</code> 문안에서 객체의 특성들을 참조 할 수 있습니다. 다음 예시는 <code>myUserException</code> of type <code>UserException</code>객체를 만듭니다 그리고 throw문에서 사용합니다.</div>

```js
// Create an object type UserException
function UserException (message){
  this.message=message;
  this.name="UserException";
}

// Make the exception convert to a pretty string when used as a string
// (e.g. by the error console)
UserException.prototype.toString = function () {
  return this.name + ': "' + this.message + '"';
}

// Create an instance of the object type and throw it
throw new UserException("Value too high");
```

### `try...catch` 문법

`try...catch` 문법은 시도할 블록을 표시하고, 예외가 발생하였을때, 하나 이상의 반응을 명시합니다. 만약 예외가 발생하였을때, `try...catch` 문법은 예외를 잡아냅니다.

`try...catch` 문법은 하나 이상의 문장을 포함한 `try` 블록과, `try` 블록 에서 예외가 발생하였을때, 어떤 것을 할 것인지 명시된 문장을 포함한 0개 이상의 `catch` 블록으로 구성됩니다. `try` 블록이 성공하길 원하고, `try` 블록이 성공하지 않았다면, 제어를 `catch` 블록으로 넘기고 싶을 것입니다. 만약 `try` 블록(또는 `try` 블록에서 호출하는 함수) 의 문장이 예외를 발생시켰을때, 제어는 즉시 `catch` 블록으로 이동합니다. 만약 `try` 블록에서 예외가 발생하지 않았을 때, `catch` 블록을 건너뜁니다. `finally` 블록은 `try` 블록과 `catch` 블록의 시행이 끝나고 `try...catch` 문법 다음의 문장이 시행 되기 전에 시행됩니다.

다음의 예제는 `try...catch` 문법을 사용합니다. 예제는 함수에 전해진 값을 토대로 달의 이름을 검색하는 함수를 호출합니다. 만약 값이 달 숫자값(1-12) 에 일치하지 않으면,`"InvalidMonthNo"` 라는 값과 함께 예외가 발생하고 `catch` 블록의 문장들이 `monthName` 변수를 `unknown` 값으로 설정합니다.

```js
function getMonthName (mo) {
  mo = mo-1; // Adjust month number for array index (1=Jan, 12=Dec)
  var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul",
                "Aug","Sep","Oct","Nov","Dec"];
  if (months[mo] != null) {
    return months[mo];
  } else {
    throw "InvalidMonthNo"; //throw keyword is used here
  }
}

try { // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
}
catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pass exception object to error handler
}
```

#### `catch` 블록

`try` 블록에서 발생할수 있는 모든 예외를 처리하기 위해 `catch` 블록을 사용할 수 있습니다.

    catch (catchID) {
      statements
    }

`catch` 블록은 `throw`문장에 의해 명시된 값을 가지고 있는 식별자(앞 구문의 `catchID`)를 명시합니다; 이 식별자를 발생된 예외에 대한 정보를 얻기 위하여 사용할 수 있습니다. 자바스크립트는 `catch` 블록에 진입했을때 식별자를 생성합니다; 식별자는 `catch` 블록에 있는 동안만 유지됩니다; `catch` 블록의 시행이 끝난 후, 식별자는 더이상 사용하실 수 없습니다.

예를 들어, 다음의 코드는 예외를 발생시킵니다. 예외가 발생하였을때, 제어는 `catch` 블록으로 넘어갑니다.

```js
try {
  throw "myException" // generates an exception
}
catch (e) {
  // statements to handle any exceptions
  logMyErrors(e) // pass exception object to error handler
}
```

#### `finally` 블록

`finally` 블록은 `try` 블록과 `catch` 블록이 시행되고, `try...catch` 문법 다음 문장이 시행되기 전에 시행되는 문장들을 포함하고 있습니다. `finally` 블록은 예외가 발생하든 안하든 수행됩니다. 만약 예외가 발생하였을때, `finally` 블록 안의 문장들은 어떤 `catch` 블록도 예외를 처리하지 않더라도 시행됩니다.

`finally` 블록을 예외가 발생하였을때 여러분의 스크립트가 우아하게 실패하도록 만들기 위하여 사용할 수 있습니다. 예를 들어, 여러분의 스크립트가 묶어둔 자원들을 풀어줄 필요가 있습니다. 다음의 예제는 파일을 열고, 파일을 사용하는 문장(서버 측 자바스크립트는 파일에 접근하는 것을 허가합니다)을 시행합니다. 만약 파일이 열린 동안 예외가 발생했다면, `finally` 블록은 스크립트가 실패하기 전에 파일을 닫아줍니다.

```js
openMyFile();
try {
  writeMyFile(theData); //This may throw a error
} catch(e) {
  handleError(e); // If we got a error we handle it
} finally {
  closeMyFile(); // always close the resource
}
```

만약 `finally` 블록이 값을 반환하였을 경우, `try` 블록과 `catch`블록의 `return` 문장과 상관없이 전체 `try-catch-finally` 생산물의 반환값이 됩니다:

```js
function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch(e) {
    console.log(1);
    return true; // this return statement is suspended
                 // until finally block has completed
    console.log(2); // not reachable
  } finally {
    console.log(3);
    return false; // overwrites the previous "return"
    console.log(4); // not reachable
  }
  // "return false" is executed now
  console.log(5); // not reachable
}
f(); // alerts 0, 1, 3; returns false
```

`finally` 블록에 의한 반환값 덮어쓰기는 예외가 발생하거나 다시 예외가 발생했을때 또한 적용됩니다.

```js
function f() {
  try {
    throw "bogus";
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e; // this throw statement is suspended until
             // finally block has completed
  } finally {
    return false; // overwrites the previous "throw"
  }
  // "return false" is executed now
}

try {
  f();
} catch(e) {
  // this is never reached because the throw inside
  // the catch is overwritten
  // by the return in finally
  console.log('caught outer "bogus"');
}

// OUTPUT
// caught inner "bogus"
```

#### try...catch 문법 중첩하기



하나 이상의 `try ... catch` 문을 중첩 할 수 있습니다. 중첩된 안쪽 `try ... catch` 문에 `catch` 블록이 없으면 `finally` 블록이 있어야하고 `try ... catch` 문의 `catch` 블록에 일치하는 항목이 있는지 확인해야합니다. 자세한 내용은 [try...catch](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/try...catch) 참조 페이지의 [nested try-blocks](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/try...catch#Nested_try-blocks)을 참조하십시오.

### `Error` 객체를 도구화 하기

오류의 종류에 따라, 더 정제된 메세지를 얻기 위하여 'name'속성과 'message'속성을 사용할수도 있습니다. 'name'속성은 오류의 일반 클래스(e.g., 'DOMException' 또는 'Error')를 제공하고, 'message' 속성이 error 객체를 문자열로 바꿀수 있는 것 보다 더 간결한 메세지를 제공합니다.

만약 이 속성들에 대하여 이득을 얻기 위해(여러분의 catch 블록이 시스템의 예외와 여러분의 예외를 구분하지 않을 때와 같은 것) 여러분만의 예외를 발생시킨다면, 여러분은 Error 생성자를 사용할 수 있습니다. 예를 들어:

```js
function doSomethingErrorProne () {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}
....
try {
  doSomethingErrorProne();
}
catch (e) {
  console.log(e.name); // logs 'Error'
  console.log(e.message); // logs 'The message' or a JavaScript error message)
}
```

## Promises

ECMAScript2015를 시작하면서, 자바스크립트는 지연된 흐름과 비동기식의 연산을 제어할 수 있게 하는 {{jsxref("Promise")}} 객체에 대한 지원을 얻게 되었습니다.

`Promise` 는 다음의 상태중 하나입니다:

- _pending_: 초기상태, fulfilled 되거나 rejected 되지 않음.
- _fulfilled_: 연산 수행 성공.
- _rejected_: 연산 수행 실패.
- _settled_: Promise 가 fulfilled 이거나 rejected 이지만 pending 은 아님.

<img alt="" src="https://mdn.mozillademos.org/files/8633/promises.png">

### XHR 를 통해 이미지 불러오기

이미지를 불러오기 위해 `Promise` 와 [`XMLHttpRequest`](/en-US/docs/Web/API/XMLHttpRequest) 를 사용한 간단한 예제는 MDN GitHub [promise-test](https://github.com/mdn/promises-test/blob/gh-pages/index.html) repository 에 있습니다. [이 예제 가 동작하는 것을 보실 수 있습니다.](http://mdn.github.io/promises-test/) 각 단계는 설명되어있고 Promise 와 XHR 구조를 친밀하게 이해할수 있게 합니다. 여기 Promise 흐름을 보여줘서 아이디어를 얻을 수 있는 설명되지 않은 버전이 있습니다:

```js
function imgLoad(url) {
  return new Promise(function(resolve, reject) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';
    request.onload = function() {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error('Image didn\'t load successfully; error code:'
                     + request.statusText));
      }
    };
    request.onerror = function() {
      reject(Error('There was a network error.'));
    };
    request.send();
  });
}
```

더 자세한 정보를 얻기 위해선, {{jsxref("Promise")}} 참고 페이지를 보세요.

{{PreviousNext("Web/JavaScript/Guide/Grammar_and_types", "Web/JavaScript/Guide/Loops_and_iteration")}}
