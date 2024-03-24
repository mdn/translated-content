---
title: "location: replace() method"
short-title: replace()
slug: Web/API/Location/replace
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("HTML DOM") }}

{{DOMXref("Location")}} 인터페이스의 **`replace()`** 메서드는 현재 리소스를 제공된 URL에 있는 리소스로 바꿔줍니다. `replace()`를 사용한 후에는 현재 페이지가 세션 {{domxref("History")}}에 저장되지 않으므로 사용자가 뒤로가기 버튼을 사용하여 해당 페이지로 이동할 수 없다는 점에서 {{domxref("Location.assign","assign()")}} 메서드와 차이점이 있습니다.

보안 정책 위반으로 인해 할당을 수행할 수 없는 경우, `SECURITY_ERROR` 유형의 {{domxref("DOMException")}}이 발생합니다. 이것은 메서드를 호출하는 스크립트의 원본이 {{domxref("Location")}} 객체에 의해 원래 설명된 페이지의 원본과 다를 때 발생합니다. 스크립트가 다른 도메인에 호스팅된 경우에 주로 발생합니다.

제공된 URL이 유효하지 않은 경우, `SYNTAX_ERROR` 유형의 {{domxref("DOMException")}}이 발생합니다.

## 문법

```js-nolint
replace(url)
```

### 매개변수

- `url`
  - : 탐색할 페이지의 URL이 포함된 문자열

### 반환 값

없음 ({{jsxref("undefined")}}).

## 예제

```js
// 이 페이지를 대체하여 Location.reload 문서로 이동합니다.
window.location.replace(
  "https://developer.mozilla.org/en-US/docs/Web/API/Location.reload",
);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 해당 메서드가 속한 {{domxref("Location")}} 인터페이스
- 비슷한 메서드: {{domxref("Location.assign()")}}와 {{domxref("Location.reload()")}}.
