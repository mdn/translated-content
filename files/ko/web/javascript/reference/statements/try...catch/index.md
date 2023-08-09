---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
---

{{jsSidebar("Statements")}}

**`try...catch`** 문은 실행할 코드블럭을 표시하고 예외(exception)가 발생(throw)할 경우의 응답을 지정합니다.

{{EmbedInteractiveExample("pages/js/statement-trycatch.html")}}

## 문법

```js
    try {
      try_statements
    }
    [catch (exception_var) {
      catch_statements
    }]
    [finally {
      finally_statements
    }]
```

- `try_statements`
  - : 실행될 선언들
- `catch_statements`
  - : try 블록에서 예외가 발생했을 때 실행될 선언들
- `exception_var`
  - : catch 블록과 관련된 예외 객체를 담기 위한 식별자
- `finally_statements`
  - : try 선언이 완료된 이후에 실행된 선언들. 이 선언들은 예외 발생 여부와 상관없이 실행된다.

## 설명

try 선언의 구성은 하나 혹은 그 이상의 선언을 포함한 try 블록 및 catch 항목이나 finally 항목 중 최소한 하나 혹은 둘 다 포함하여 이루어진다. 즉, try 선언에는 세 가지 형식이 존재한다.

1. `try...catch`
2. `try...finally`
3. `try...catch...finally`

`catch` 블록은 `try` 블록 안에서 예외가 발생(throw)하는 경우 무엇을 할지 명시하는 코드를 포함합니다. `try` 블록 (또는 `try` 블록 내에서 호출된 함수) 내의 명령문이 예외를 throw 하면 제어가 `catch` 블록으로 이동합니다. `try` 블록에 예외가 발생하지 않으면 `catch` 블록을 건너뜁니다.

`finally` 블록은 `try` 블록과 `catch` 블록(들)이 실행을 마친 후 항상 실행됩니다. 예외가 발생했는지에 관계없이 항상 실행됩니다.

하나 이상의 `try` 문을 중첩 할 수 있습니다. 내부의 `try` 문에 `catch` 블록이 없으면, 둘러싼 `try` 문의 `catch` 블록이 입력됩니다.

또한 `try` 문을 사용하여 예외처리를 합니다. 예외처리에 대해 더 알고 싶다면, [JavaScript Guide](/ko/docs/Web/JavaScript/Guide) 를 참고하세요.

### 무조건적 `catch` 문

`try`-block 내에서 예외가 발생하면 `catch`-block이 실행됩니다. 예를 들어, 다음 코드에서 예외가 발생하면 제어가 `catch` 블록으로 전송됩니다.

```js
try {
  throw "myException"; // generates an exception
} catch (e) {
  // statements to handle any exceptions
  logMyErrors(e); // pass exception object to error handler
}
```

### 조건적 `catch` 문

다음과 같이 `try...catch`블록을 `if...else if...else` 구조와 결합하여 '조건부 `catch`-blocks'을 만들 수 있습니다.

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

이에 대한 일반적인 사용 사례는 예상 오류의 작은 하위 집합 만 포착 (및 침묵) 한 다음 다른 경우에 오류를 다시 발생시키는 것입니다.

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

### The exception identifier

`try`-block에서 예외가 발생하면 `exception_var` (즉, `catch (e)`내부의 `e`)가 예외 값을 보유합니다. 이 식별자를 사용하여 발생한 예외에 대한 정보를 얻을 수 있습니다. 이 식별자는 `catch`-block의 {{Glossary("Scope", "scope")}}에서만 사용할 수 있습니다.

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

### The finally-block

The `finally`-block contains statements to execute after the `try`-block and `catch`-block(s) execute, but before the statements following the `try...catch...finally`-block. Note that the `finally`-block executes regardless of whether an exception is thrown. Also, if an exception is thrown, the statements in the `finally`-block execute even if no `catch`-block handles the exception.

The following example shows one use case for the `finally`-block. The code opens a file and then executes statements that use the file; the `finally`-block makes sure the file always closes after it is used even if an exception was thrown.

```js
openMyFile();
try {
  // tie up a resource
  writeMyFile(theData);
} finally {
  closeMyFile(); // always close the resource
}
```

## Examples

### Nested try-blocks

First, let's see what happens with this:

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

// Output:
// "finally"
// "outer" "oops"
```

Now, if we already caught the exception in the inner `try`-block by adding a `catch`-block

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

// Output:
// "inner" "oops"
// "finally"
```

And now, let's rethrow the error.

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

// Output:
// "inner" "oops"
// "finally"
// "outer" "oops"
```

Any given exception will be caught only once by the nearest enclosing `catch`-block unless it is rethrown. Of course, any new exceptions raised in the "inner" block (because the code in `catch`-block may do something that throws), will be caught by the "outer" block.

### Returning from a finally-block

If the `finally`-block returns a value, this value becomes the return value of the entire `try-catch-finally` statement, regardless of any `return` statements in the `try` and `catch`-blocks. This includes exceptions thrown inside of the `catch`-block:

```js
(function () {
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

// Output:
// "inner" "oops"
// "finally"
```

The outer "oops" is not thrown because of the return in the `finally`-block. The same would apply to any value returned from the `catch`-block.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{jsxref("Error")}}
- {{jsxref("Statements/throw", "throw")}}
