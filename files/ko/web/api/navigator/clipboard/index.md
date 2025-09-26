---
title: "Navigator: clipboard 속성"
slug: Web/API/Navigator/clipboard
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{APIRef("Clipboard API")}} {{securecontext_header}}

**`clipboard`** 는 {{domxref("Navigator")}} 인터페이스의 읽기 전용 속성이며, 클립보드의 내용을 읽기 혹은 쓰기 용도로서 객체로 반환합니다.
[Clipboard API](/ko/docs/Web/API/Clipboard_API)는 웹 애플리케이션에서 잘라내기, 복사 혹은 붙여넣기 기능을 사용할 수 있도록 하는 기능입니다.

## 값

{{domxref("Clipboard")}} 는 시스템 클립보드에 접근하는 객체입니다.

## 예제

아래의 코드는 시스템 클립보드 내부 텍스트를 읽기 위해 접근하는 속성인 `navigator.clipboard`를 사용하는 예제입니다.

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".clip-text").innerText = clipText),
  );
```

위의 예제는 `"clip-text"` 클래스를 가지고 있는 요소의 내용을 클립보드 내용으로 변경하는 코드입니다.
이 코드는 클립보드의 내용을 불러오는 브라우저 익스텐션으로서 클립보드 내용이 주기적으로 혹은 자동으로 갱신되거나 특정 이벤트가 실행될 때 자동으로 갱신됩니다.

클립보드에 텍스트가 없거나 비어있다면 `"clip-text"` 클래스 요소의 내용은 초기화됩니다.
이러한 경우에는 [`readText()`](/ko/docs/Web/API/Clipboard/readText) 가 비어있는 스트링 값을 반환합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
