---
title: "HTMLLabelElement: control 속성"
short-title: control
slug: Web/API/HTMLLabelElement/control
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

읽기 전용인 **`HTMLLabelElement.control`** 속성은
{{HTMLElement("label")}} 요소와 연관되어 있는 컨트롤을 참조하여 반환합니다.
(폼에서는 {{domxref("HTMLElement")}} 타입 혹은 그 파생 객체입니다.)
만일 라벨이 컨트롤과 연관되어 있지 않다면 `null` 을 반환합니다.

## 값

{{domxref("HTMLElement")}} 파생 객체는 {{HTMLElement("label")}} 이 연관되어 있는 컨트롤을 나타내거나,
라벨이 단독 사용된 경우에는 `null` 입니다.

> [!NOTE]
> 만일 속성이 값을 가지고, {{domxref("HTMLLabelElement.htmlFor")}} 도 값이 있다면,
> {{domxref("HTMLLabelElement.htmlFor")}} 은 반드시 동일한 컨트롤을 참조해야 합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("HTMLLabelElement")}}
- {{domxref("HTMLElement")}}
- {{HTMLElement("label")}}
- [HTML 폼 안내서](/ko/docs/Learn/Forms)
