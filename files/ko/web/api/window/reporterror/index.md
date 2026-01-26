---
title: "Window: reportError() method"
short-title: reportError()
slug: Web/API/Window/reportError
l10n:
  sourceCommit: a44e9fc017ec15af0b8e0c0101ea895b9cb30522
---

{{APIRef("DOM")}}

{{DOMxRef("Window")}} 인터페이스의 **`reportError()`** 메서드는 탐지되지 않은 JavaScript의 예외를 시뮬레이션하여 콘솔이나 전역 스코프의 이벤트 핸들러에 에러를 보고하는 데에 사용될 수 있습니다.

이 특성은 사용자 설정 이벤트 디스패치나 콜백을 조작하는 라이브러리를 위해 설계되었습니다.
라이브러리들은 이 기능을 사용하여 콜백 코드의 오류를 캐치하고 최상위 핸들러에 다시 전달할 수 있습니다.
이를 통해 하나의 콜백의 예외가 다른 콜백들의 처리를 저해하지 않으면서도, 동시에 최상위 레벨에서 디버깅을 위한 스택 트레이스 정보를 쉽게 확인할 수 있도록 보장합니다.

## 구문

```js-nolint
reportError(throwable)
```

### 매개변수

- `throwable`
  - : {{jsxref("TypeError")}} 와 같은 오류 객체입니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

### 예외

- {{jsxref("TypeError")}}
  - : 이 메서드는 오류 인자 없이 호출됩니다.

## 예제

다음과 같이 메서드에 대한 기능 테스트를 수행합니다.

```js
if (typeof window.reportError === "function") {
  // function is defined
}
```

아래 코드에서는 오류를 생성하고 전달하는 과정을 확인할 수 있습니다. 그리고 `onerror` 이벤트 핸들러 속성을 사용하거나 `error` 이벤트에 대한 리스너를 추가하여 이를 탐지하는 방법을 보여줍니다.
`onerror` 에 할당된 핸들러는 추가적인 이벤트 전파를 막기 위해 `true` 를 반환해야 한다는 것을 주의하세요.

```js
const newError = new Error("Some error message", "someFile.js", 11);
window.reportError(newError);

window.onerror = (message, source, lineno, colno, error) => {
  console.error(`message: ${error.message}, lineno: ${lineno}`);
  return true;
};

window.addEventListener("error", (error) => {
  console.error(error.filename);
});

// Output
// > "message:Some error message, lineno: 11"
// > "someFile.js"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{DOMxRef("Window")}}
- {{DOMxRef("WorkerGlobalScope.reportError()")}}
- {{domxref("Window")}}: {{DOMxRef("Window/error_event", "error")}} 이벤트
- {{domxref("WorkerGlobalScope")}}: {{DOMxRef("WorkerGlobalScope/error_event", "error")}} 이벤트
- {{domxref("HTMLElement")}}: {{DOMxRef("HTMLElement/error_event", "error")}} 이벤트
