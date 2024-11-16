---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}} {{non-standard_header}}

**`InternalError`** 객체는 JavaScript 엔진 내부에서 발생한 오류를 나타냅니다.

다음의 오류 예시의 경우는 일반적으로 어떤 값이 너무 큰 경우입니다.

- "too many switch cases", (swich case의 수가 너무 많음)
- "too many parentheses in regular expression", (정규표현식에 너무 많은 괄호가 있음)
- "array initializer too large", (배열 초기화 값이 너무 큼)
- "too much recursion". (너무 많은 재귀 호출)

`InternalError`는 {{jsxref("Error")}}의 하위 클래스입니다.

## 생성자

- {{jsxref("InternalError/InternalError", "InternalError()")}} {{non-standard_inline}}
  - : 새로운 `InternalError` 객체를 만듭니다.

## 인스턴스 속성

또한 부모 {{jsxref("Error")}}에서 인스턴스 속성을 상속합니다.

아래 속성은 `InternalError.prototype`에서 정의되었고, 모든 `InternalError` 인스턴스애서 공유됩니다.

- {{jsxref("Object/constructor", "InternalError.prototype.constructor")}}
  - : 인스턴스 객체를 생성하는 생성자 함수입니다. `InternalError` 인스턴스의 경우 초기 값은 {{jsxref("InternalError/InternalError", "InternalError")}} 생성자입니다.
- {{jsxref("Error/name", "InternalError.prototype.name")}}
  - : 오류 유형의 이름을 나타냅니다. `InternalError.prototype.name`의 경우 초기 값은 `"InternalError"`입니다.

## 인스턴스 메서드

부모인 {{jsxref("Error")}}로부터 인스턴스 메서드를 상속합니다.

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

이 조건을 매우 높은 값으로 설정하면 작동하지 않습니다.

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

## 명세서

어떤 표준에도 속하지 않습니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Error")}}
- [InternalError: too much recursion(너무 많은 재귀 호출)](/ko/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)
