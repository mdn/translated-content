---
title: HTMLLabelElement
slug: Web/API/HTMLLabelElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

**`HTMLLabelElement`** 인터페이스는 {{HTMLElement("label")}} 요소의 특정한 속성에 접근할 수 있도록 합니다. 이 인터페이스는 기본 {{domxref("HTMLElement")}} 인터페이스의 메서드와 속성을 상속합니다.

{{InheritanceDiagram}}

## 인스턴스 속성

부모 {{domxref("HTMLElement")}} 로부터 상속받은 속성들

- {{domxref("HTMLLabelElement.control")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLElement")}} 는 라벨과 연관되어 있는 컨트롤을 나타냅니다.
- {{domxref("HTMLLabelElement.form")}} {{ReadOnlyInline}}
  - : {{domxref("HTMLFormElement")}} 객체는 라벨이 지정된 컨트롤러와 연관이 있는 폼을 나타냅니다. 연관되어 있는 컨트롤이 없거나, 해당 컨트롤이 폼 내부에 존재하지 않는 경우에 `null` 을 반환합니다. 다시 말해서, 이는 단순히 `HTMLLabelElement.control.form` 단축 속성입니다.
- {{domxref("HTMLLabelElement.htmlFor")}}
  - : 라벨이 지정된 컨트롤의 ID 문자열을 포함합니다. 이는 [`for`](/ko/docs/Web/HTML/Element/label#for) 특성을 반영합니다.

> **참고:** `for` 특성을 프로그래밍 방식으로 지정하기 위해서는, [`htmlFor`](/ko/docs/Web/API/HTMLLabelElement/htmlFor) 을 사용하세요.

## 인스턴스 메서드

특정 메서드가 존재하지 않습니다. {{domxref("HTMLElement")}} 로부터 메서드를 상속받습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 이 인터페이스를 구성하는 HTML 요소: {{HTMLElement("label")}}
- {{HTMLElement("form")}}
- {{domxref("HTMLFormElement")}}
