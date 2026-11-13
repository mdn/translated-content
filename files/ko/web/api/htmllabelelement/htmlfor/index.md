---
title: "HTMLLabelElement: htmlFor 속성"
short-title: htmlFor
slug: Web/API/HTMLLabelElement/htmlFor
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLLabelElement.htmlFor`** 속성은
[`for`](/ko/docs/Web/HTML/Reference/Elements/label#for) 컨텐츠 속성의 값을 반영하는 속성입니다.
이는 스크립트에 접근할 수 있는 해당 속성이 컨텐츠 속성 `for` 의 값을 설정하거나 읽을 수 있다는 것을 의미하며,
라벨과 연결된 컨트롤 요소의 ID 에 해당합니다.

## 값

컨트롤과 연결된 요소의 ID 문자열을 포함하는 문자열입니다.

> [!NOTE]
> 이 속성에 값이 있다면, {{domxref("HTMLLabelElement.control")}} 속성 또한
> 동일한 컨트롤을 참조해야 합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLLabelElement.control")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML 폼 안내서](/ko/docs/Learn_web_development/Extensions/Forms)
