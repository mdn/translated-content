---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
l10n:
  sourceCommit: 4e947e81afc753bedcaaba75f262a07b92511849
---

{{jsSidebar("Statements")}}

**`try...catch`** 문은 `try` 블록과 `catch` 블록, `finally` 블록 중 하나 혹은 두 블록으로 구성됩니다. `try` 블록 내 코드가 먼저 실행되고, 만약 그 안에서 예외가 발생한다면 `catch` 블록 내 코드가 실행됩니다. `finally` 블록 내 코드는 항상 실행되며, 제어 흐름이 전체 구문을 종료하기 전에 실행됩니다.

{{InteractiveExample("JavaScript Demo: Statement - Try...Catch")}}

```js interactive-example
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}
```

## 문법

```js-nolint
try {
  tryStatements
} catch (exceptionVar) {
  catchStatements
} finally {
  finallyStatements
}
```

- `tryStatements`
  - : `try` 블록에서 실행될 구문들입니다.
- `catchStatements`
  - : `try` 블록에서 예외가 발생했을 때 실행될 구문들입니다.
- `exceptionVar` {{optional_inline}}
  - : 해당 `catch` 블록에서 잡힌 예외를 담는 선택적 [식별자 혹은 패턴](#catch_binding)입니다. 만약 `catch` 블록에서 예외 값을 사용하지 않는 경우 `exceptionVar` 과 괄호를 생략할 수 있습니다.
- `finallyStatements`
  - : `try...catch...finally` 구문에서 제어 흐름이 빠져나가기 전에 실행되는 구문들입니다. 예외가 발생했는지 여부와 관계없이 항상 실행됩니다.

## 설명

`try` 문은 항상 `try` 블록으로 시작합니다. 그리고 `catch` 블록 또는 `finally` 블록 중 하나가 반드시 존재해야 합니다. `catch` 블록과 `finally` 블록을 모두 가질 수도 있습니다. 이렇게 해서 `try` 문에는 다음과 같은 세 가지 형태가 있습니다.

- `try...catch`
- `try...finally`
- `try...catch...finally`

다른 구조인 [`if`](/ko/docs/Web/JavaScript/Reference/Statements/if...else) 나 [`for`](/ko/docs/Web/JavaScript/Reference/Statements/for)와 달리, `try`, `catch`, `finally` 블록은 반드시 단일 구문이 아닌 중괄호 {} 로 감싸진 블록이어야 합니다.

```js-nolint example-bad
try doSomething(); // SyntaxError
catch (e) console.log(e);
```

`catch` 블록에는 `try` 블록에서 예외가 발생했을 때 어떻게 처리할지에 대한 구문들이 포함됩니다. 만약 `try` 블록 내의 어떤 구문(또는 `try` 블록 내에서 호출된 함수)에서 예외가 발생하면, 제어 흐름이 즉시 `catch` 블록으로 전환됩니다. `try` 블록에서 예외가 발생하지 않으면 `catch` 블록은 실행되지 않습니다.

`finally` 블록은 `try...catch...finally` 구문에서 제어 흐름이 빠져나가기 전에 항상 실행됩니다. 즉 예외가 발생했는지 여부와 관계없이, `finally` 블록은 항상 실행됩니다.

하나 이상의 `try` 문을 중첩해서 사용할 수 있습니다. 내부 `try` 문에 `catch` 블록이 없는 경우, 외부 `try` 문의 `catch` 블록이 대신 사용됩니다. 즉, 즉, 중첩된 `try` 문 내에서 예외가 발생하면, 가장 가까운 상위 `catch` 블록이 해당 예외를 처리하게 됩니다.

또한, `try` 문을 사용하여 JavaScript 예외를 처리할 수 있습니다. JavaScript 예외 처리에 대한 자세한 정보는 [JavaScript 안내서](/ko/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements)를 참고하시면 됩니다.

### Catch 바인딩

`try` 블록에서 예외가 발생하면, `exceptionVar`(즉, `catch (e)` 에서의 `e`)에 예외 값이 저장됩니다. 이 {{Glossary("binding")}}을 이용해 발생한 예외에 대한 정보를 얻을 수 있습니다. 이 {{Glossary("binding")}}은 `catch` 블록의 {{Glossary("Scope", "scope")}} 내에서만 사용할 수 있습니다.

`exceptionVar`는 반드시 단일 식별자일 필요가 없습니다. [구조 분해 할당](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)을 사용하여 여러 개의 식별자를 한 번에 할당할 수 있습니다.

```js
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oops"
}
```

`catch` 절에 의해 생성된 바인딩은 `catch` 블록과 동일한 범위에 존재합니다. 따라서 catch 블록 내에서 선언된 변수는 `catch` 절에 의해 생성된 바인딩과 동일한 이름을 가질 수 없습니다. ([이 규칙에 한가지 예외가 있지만](/ko/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#statements), 이는 더 이상 사용되지 않는 문법입니다.)

```js-nolint example-bad
try {
  throw new TypeError("oops");
} catch ({ name, message }) {
  var name; // SyntaxError: Identifier 'name' has already been declared
  let message; // SyntaxError: Identifier 'message' has already been declared
}
```

예외 바인딩은 쓰기 가능합니다. 예를 들어, 예외 값을 정규화하여 {{jsxref("Error")}} 객체인지 확인할 수 있습니다.

```js
try {
  throw "Oops; this is not an Error object";
} catch (e) {
  if (!(e instanceof Error)) {
    e = new Error(e);
  }
  console.error(e.message);
}
```

예외 값이 필요 없는 경우에는 괄호와 함께 예외 변수 자체를 생략할 수 있습니다.

```js
function isValidJSON(text) {
  try {
    JSON.parse(text);
    return true;
  } catch {
    return false;
  }
}
```

### finally 블록

`finally` 블록은 `try` 블록과 `catch` 블록(들)이 실행된 후에 실행할 구문들을 포함하지만, `try...catch...finally` 블록 다음의 구문들보다 먼저 실행됩니다. 제어 흐름은 항상 `finally` 블록으로 진입하며, 다음과 같은 방식 중 하나로 진행될 수 있습니다.

- `try` 블록이 정상적으로 실행을 마치고 (예외가 발생하지 않은 경우)
- `catch` 블록이 정상적으로 실행을 마치고
- `try` 블록이나 `catch` 블록에서 제어 흐름 구문(`return`, `throw`, `break`, `continue`)이 실행되어 해당 블록을 벗어나기 직전에

예외를 처리할 `catch` 블록이 없더라도 `try` 블록에서 예외가 발생한다면 `finally` 블록은 실행됩니다. 이러한 경우 `finally` 블록이 실행을 마친 직후 해당 예외가 다시 던져집니다.

다음 예제는 finally 블록의 한 가지 사용 사례를 보여줍니다. 이 코드는 파일을 열고 그 파일을 사용하는 구문들을 실행합니다. 그리고 `finally` 블록은 예외가 발생했더라도 파일이 항상 닫히도록 보장합니다.

```js
openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
}
```

`finally` 블록 내의 제어 흐름 구문(`return`, `throw`, `break`, `continue`)은 `try` 블록이나 `catch` 블록의 완료 값을 "가립니다". 아래 예시에서, `try`블록에서 1을 반환하려고 하지만, 반환하기 전에 제어 흐름이 `finally`블록에 먼저 전달되어 `finally` 블록의 반환 값(2)이 대신 반환됩니다.

```js
function doIt() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

doIt(); // returns 2
```

`finally` 블록 내에 제어 흐름 구문을 사용하는 것은 일반적으로 좋지 않은 생각입니다. `finally` 블록은 오직 정리 작업을 위한 코드에만 사용해야 합니다.

## 예시

### 무조건적 catch 블록

`catch` 블록을 사용하면 `try` 블록 내에서 어떤 예외가 발생하든 `catch` 블록이 실행됩니다. 예를 들어, 다음 코드에서 예외가 발생하면 제어 흐름이 `catch` 블록으로 전달됩니다.

```js
try {
  throw "myException"; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}
```

`catch` 블록에서는 식별자(`e`와 같은)를 지정하여 예외 객체의 값을 캡처할 수 있습니다. 이 식별자가 참조하는 예외 객체의 값은 `catch` 블록의 {{Glossary("Scope", "범위")}} 내에서만 사용할 수 있습니다.

### 조건적 catch 블록

여러 개의 `try...catch` 블록과 `if...else if...else` 구문을 조합하면 "조건부 `catch` 블록"을 만들 수 있습니다. 예를 들어, 다음과 같은 코드를 작성할 수 있습니다.

```js
try {
  myroutine(); // may throw three types of exceptions
} catch (e) {
  if (e instanceof TypeError) {
    // statements to handle TypeError exceptions
  } else if (e instanceof RangeError) {
    // statements to handle RangeError exceptions
  } else if (e instanceof EvalError) {
    // statements to handle EvalError exceptions
  } else {
    // statements to handle any unspecified exceptions
    logMyErrors(e); // pass exception object to error handler
  }
}
```

조건부 `catch` 블록의 일반적인 사용 사례는 예상되는 일부 오류만 포착하고 억제한 후, 다른 경우에는 오류를 다시 던지는 것입니다.

```js
try {
  myRoutine();
} catch (e) {
  if (e instanceof RangeError) {
    // statements to handle this very common expected error
  } else {
    throw e; // re-throw the error unchanged
  }
}
```

이것은 Java와 같은 다른 프로그래밍 언어와 유사한 형태를 취할 수 있습니다.

```java
try {
  myRoutine();
} catch (RangeError e) {
  // statements to handle this very common expected error
}
// Other errors are implicitly re-thrown
```

### 중첩 try 블록

먼저, 다음과 같은 코드가 어떻게 되는지 살펴보겠습니다.

```js
try {
  try {
    throw new Error("oops");
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Logs:
// "finally"
// "outer" "oops"
```

이제 `catch` 블록을 추가하여 내부 `try` 블록에서 이미 예외를 포착한다면:

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Logs:
// "inner" "oops"
// "finally"
```

이제 오류를 다시 발생시키겠습니다.

```js
try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Logs:
// "inner" "oops"
// "finally"
// "outer" "oops"
```

예외는 가장 가까운 `catch` 블록에서 한 번만 잡히게 되며, 다시 던져지지 않는 한 외부 `catch` 블록에서는 잡히지 않습니다. 물론 "내부" 블록(즉, `catch` 블록 내부)에서 새로운 예외가 발생한다면, "외부" 블록에서 해당 예외를 잡을 수 있습니다.

### finally 블록에서의 반환하기

만약 `finally` 블록에서 값을 반환하면, 해당 값이 전체 `try-catch-finally` 문의 반환 값이 됩니다. 이는 `try` 블록이나 `catch` 블록 내에 있는 `return` 문에 관계없이 적용됩니다. 이는 `catch` 블록 내에서 발생한 예외에도 포함합니다.

```js
(() => {
  try {
    try {
      throw new Error("oops");
    } catch (ex) {
      console.error("inner", ex.message);
      throw ex;
    } finally {
      console.log("finally");
      return;
    }
  } catch (ex) {
    console.error("outer", ex.message);
  }
})();

// Logs:
// "inner" "oops"
// "finally"
```

`finally` 블록에서 값을 반환했기 때문에 (이는 전체 `try-catch-finally` 문의 반환 값) 외부로 "oops"는 전파되지 않습니다. 이는 `catch` 블록에서 반환된 어떤 값에도 동일하게 적용됩니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련 항목

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
