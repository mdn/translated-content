---
title: HTMLLIElement
slug: Web/API/HTMLLIElement
---

{{ APIRef("HTML DOM") }}

**`HTMLLIElement`** 인터페이스는 리스트 엘리먼트를 조작하기 위한 특정 프로퍼티와 메소드들을 제공합니다.

( 정규 {{domxref("HTMLElement")}} 인터페이스의 상속을통해 사용이 가능합니다. )

{{InheritanceDiagram(600, 120)}}

## Properties

_부모인 {{domxref("HTMLElement")}}에서 상속받습니다._

- {{domxref("HTMLLIElement.type")}} {{deprecated_inline}}
  - : 는 {{domxref("DOMString")}} 의 `"disc"`, `"square"` 나 `"circle"` 같은 bullets 타입을 대표합니다.
    리스트 유형을 정의하는 표준 정의 방법은 CSS {{cssxref("list-style-type")}} 프로퍼티를 통해서 이므로, 스트립트를 통하여 CSSSOM 메소드를 사용하세요.
- {{domxref("HTMLLIElement.value")}}
  - : 는 주어진 {{HTMLElement("ol")}} 리스트 엘리먼트 안에서 서수의 위치를 가르키는 오랜 서수적 포지션입니다. 이것은 HTML의 {{HTMLElement("li")}}엘리먼트의 [`value`](/ko/docs/Web/HTML/Element/li#value)속성을 나타냅니다. 그리고 `0` 보다 작을 수도 있습니다.
    만일 {{HTMLElement("li")}} 엘리먼트가 {{HTMLElement("ol")}} 엘리먼트의 자식이 아니라면, 프로퍼티는 아무 의미가 없게됩니다.

## Methods

_특정 메소드가 없으며, 부모로부터 프로퍼티를 상속 받습니다.{{domxref("HTMLElement")}}._

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("li")}}
