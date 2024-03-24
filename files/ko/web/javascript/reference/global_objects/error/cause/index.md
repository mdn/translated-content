---
title: Error.prototype.cause
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
---

{{JSRef}}

**`cause`** 속성은 오류의 구체적인 원래 원인을 나타냅니다.

예외를 잡아서 다시 예외를 발생시킬 때 원래 발생한 오류에 접근 할 수 있으면서 보다 구체적인 혹은 유용한 에러 메시지를 추가할때 사용합니다.

## 값

`options.cause` 인자의 [`Error()` 생성자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)에 전달되는 값입니다.

값은 어떤 타입이든 가능합니다. `catch`문의 변수 역시 `Error`라고 확신할 수 없는 것과 마찬가지로 여러분이 처리할 오류의 `cause`에 `Error`가 있다고 가정하지 마시기 바랍니다. 아래의 예제 "오류 원인으로 구조화된 데이터 제공"는 의도적으로 오류가 아닌 것을 `cause`로 제공하는 경우를 보여줍니다.

## 예제

### cause와 함께 오류 재발생시키기

오류를 발견하고 새 메시지로 다시 던지는 것이 유용할 수 있습니다. 이 경우 그림과 같이 새 `Error`에 대한 원래 오류를 생성자에 전달해야 합니다.

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Connecting to database failed.", { cause: err });
}
```

보다 자세한 예제는 [Error > Differentiate between similar errors](/ko/docs/Web/JavaScript/Reference/Global_Objects/Error#differentiate_between_similar_errors)를 참조하세요.

### 오류 원인으로 구조화된 데이터 제공

사람을 위해 쓰인 오류 메시지는 기계 구문 분석에는 적합하지 않을 수 있습니다. 왜냐하면 기계 구문 분석은 단어 변경이나 구두점 변경으로도 기존 분석이 제대로 동작하지 않을 수 있기 때문입니다. 그래서 함수에서 오류를 발생시킬 때, 사람이 읽을 수 있는 오류 메시지의 대안으로 기계 구문 분석을 위해 구조화된 데이터로 원인을 제공할 수 있습니다.

```js
function makeRSA(p, q) {
  if (!Number.isInteger(p) || !Number.isInteger(q)) {
    throw new Error("RSA key generation requires integer inputs.", {
      cause: { code: "NonInteger", values: [p, q] },
    });
  }
  if (!areCoprime(p, q)) {
    throw new Error("RSA key generation requires two co-prime integers.", {
      cause: { code: "NonCoprime", values: [p, q] },
    });
  }
  // rsa algorithm…
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
