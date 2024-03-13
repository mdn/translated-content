---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
---

{{JSRef}} {{non-standard_header}}

**`InternalError`** 객체는 JavaScript 엔진 내부에서 발생한 오류를 나타냅니다.

다음의 오류 예시의 경우는 일반적으로 어떤 값이 너무 큰 경우입니다.

- "too many switch cases", (swich case의 수가 너무 많음)
- "too many parentheses in regular expression", (정규표현식에 너무 많은 괄호가 있음)
- "array initializer too large", (배열 초기화 값이 너무 큼)
- "too much recursion". (너무 많은 재귀 호출)

## 생성자

- {{jsxref("InternalError/InternalError", "InternalError()")}}
  - : 새로운 `InternalError` 객체를 만듭니다.

## 인스턴스 속성

- {{jsxref("Error.prototype.message", "InternalError.prototype.message")}}
  - : 오류 메시지. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.name", "InternalError.prototype.name")}}
  - : 오류 이름. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.fileName", "InternalError.prototype.fileName")}}
  - : 오류가 발생한 파일 경로. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.lineNumber", "InternalError.prototype.lineNumber")}}
  - : 오류가 발생한 곳의 줄 번호. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.columnNumber", "InternalError.prototype.columnNumber")}}
  - : 오류가 발생한 행의 열 번호. {{jsxref("Error")}}로부터 상속되었습니다.
- {{jsxref("Error.prototype.stack", "InternalError.prototype.stack")}}
  - : 스택 추적. {{jsxref("Error")}}로부터 상속되었습니다.

## 예제

### 너무 많은 재귀 호출

이 재귀 함수는 종료 조건에 따라 10번 수행됩니다.

```js
function loop(x) {
  if (x >= 10) {
    // "x >= 10" 는 종료 조건입니다.
    return;
  }
  // 어떤 코드
  loop(x + 1); // 재귀 호출
}
loop(0);
```

이 조건을 매우 높은 값으로 설정하면 작동하지 않습니다:

```js example-bad
function loop(x) {
  if (x >= 1000000000000) return;
  // 어떤 코드
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion(너무 많은 재귀 호출)
```

더 많은 정보를 보려면 [InternalError: too much recursion(너무 많은 재귀 호출)](/ko/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)를 보시길 바랍니다.

## 명세

어떤 표준에도 속하지 않습니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error")}}
- [InternalError: too much recursion(너무 많은 재귀 호출)](/ko/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)
