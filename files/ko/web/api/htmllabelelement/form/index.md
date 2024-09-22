---
title: "HTMLLabelElement: form 속성"
short-title: form
slug: Web/API/HTMLLabelElement/form
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

읽기 전용인 **`HTMLLabelElement.form`** 속성은
라벨과 연관된 컨트롤이 속한 폼을 나타내는 {{domxref("HTMLFormElement")}} 객체를 반환하며,
만일 연관된 컨트롤이 없거나,
해당 컨트롤이 폼 내부에 존재하지 않는 경우에 null 을 반환합니다.

이 속성은 `HTMLLabelElement.control.form` 의 단축 속성입니다.

## 값

{{domxref("HTMLFormElement")}} 은 라벨의
{{domxref("HTMLLabelElement.control", "control")}} 이 연관된 폼을 나타냅니다. 만일
{{domxref("HTMLLabelElement.control", "control")}} 이 `null` (라벨이 컨트롤과 연관되지 않은 경우),
혹은 컨트롤이 폼 내부 요소가 아니라면 이 속성은 `null` 을 반환합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML 폼 안내서](/ko/docs/Learn/Forms)
