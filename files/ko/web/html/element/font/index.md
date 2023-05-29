---
title: <font>
slug: Web/HTML/Element/font
---

## 개요

_HTML에서의 Font 요소_ (`<font>`) 는 본문의 글자 크기, 색상과 및면을 정의합니다.

> **참고:** _사용 참고:_
>
> **이 요소를 사용하지 마세요!** HTML 3.2에서 정규화되었지만, HTML 4.01에서는 사용되지 않는 요소로 지정되었으며, 동시에 스타일링과 관련된 모든 요소가 HTML5에서 폐기되었습니다.
>
> Starting with HTML 4, HTML does not convey styling information anymore (outside the {{HTMLElement("style")}} element or the **style** attribute of each element). For any new web development, styling should be written using [CSS](/ko/docs/CSS) only.
>
> The former behavior of the {{HTMLElement("font")}} element can be achieved, and even better controlled using the [CSS Fonts](/ko/docs/Web/CSS/CSS_Fonts) CSS properties.

## 속성

다른 HTML 요소들과 같게, 이 요소도 [공용 속성](/ko/docs/HTML/Global_attributes)을 지원합니다.

- {{htmlattrdef("color")}}
  - : This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.
- {{htmlattrdef("face")}}
  - : This attribute contains a comma-separated list of one or more font names. The document text in the default style is rendered in the first font face that the client's browser supports. If no font listed is installed on the local system, the browser typically defaults to the proportional or fixed-width font for that system.
- {{htmlattrdef("size")}}
  - : This attribute specifies the font size as either a numeric or relative value. Numeric values range from `1` to `7` with `1` being the smallest and `3` the default. It can be defined using a relative value, like `+2` or `-3`, which set it relative to the value of the {{htmlattrxref("size", "basefont")}} attribute of the {{HTMLElement("basefont")}} element, or relative to `3`, the default value, if none does exist.

## DOM interface

This element implements the {{domxref("HTMLFontElement")}} interface.

## 브라우저 호환성

{{Compat}}

{{HTMLSidebar}}
