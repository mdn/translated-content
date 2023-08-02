---
title: <center>
slug: Web/HTML/Element/center
---

{{deprecated_header()}}

## 개요

이 HTML Center (`<center>`)요소는 또다른 블록요소을 포함하거나, 인라인요소(Inline)를 포함할 수 있는 [블록속성(block-level)](/ko/docs/HTML/Block-level_elements) 의 요소이다. 그리고 해당 \<center> 요소안에 포함된 전체요소는 \<center>의 내용안에 가운데 정렬이 된다. (통상적으로 {{HTMLElement("body")}}로 쓰임).

이 태그는 HTML4(또는 XHTML 1)이후에는 잘사용되지 않고, CSS의 {{Cssxref("text-align")}} 속성이 즐겨 사용된다. {{HTMLElement("div")}} 요소나 {{HTMLElement("p")}}요소 같은 블록속성이 있는 요소에 사용될 수 있다.또 다른 방법으로는 CSS속성을 사용하여 {{Cssxref("margin-left")}} 또는 {{Cssxref("margin-right")}} 또는 margin을 자동(Css("margin") 를 `0 auto)`으로 설정한다.

## DOM 인터페이스

이 요소는 {{domxref("HTMLElement")}} 인터페이스를 구현합니다.

> **참고:** **Implementation note:** up to Gecko 1.9.2 inclusive, Firefox implements the {{domxref("HTMLSpanElement")}} interface for this element.

## 예제 1

```html
<center>
  This text will be centered.
  <p>So will this paragraph.</p>
</center>
```

## 예제 2 (CSS 대안)

```html
<div style="text-align:center">
  This text will be centered.
  <p>So will this paragraph.</p>
</div>
```

## 예제 3 (CSS 대안)

```html
<p style="text-align:center">
  This line will be centered.<br />
  And so will this line.
</p>
```

## 메모

Applying {{Cssxref("text-align")}}`:center` to a {{HTMLElement("div")}} or {{HTMLElement("p")}} element centers the _contents_ of those elements while leaving their overall dimensions unchanged.

## 더 보기

- {{Cssxref("text-align")}}
- {{Cssxref("display")}}

{{HTMLSidebar}}
