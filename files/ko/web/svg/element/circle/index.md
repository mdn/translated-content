---
title: <circle>
slug: Web/SVG/Element/circle
translation_of: Web/SVG/Element/circle
---
{{SVGRef}}

`circle(원)은` 엘리먼트는 중심점과 반지름에 기초하여 원을 생성하는데 사용되는 SVG의 기본 모양이다.

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50"/>
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## 사용예 컨텍스트

{{svginfo}}

## 예제

```xml
<?xml version="1.0"?>
<svg viewBox="0 0 120 120" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50"/>
</svg>
```

» [circle.svg](https://mdn.mozillademos.org/files/7707/circle2.svg)

## 속성들

### 글로벌 속성들

- [조건부 처리 속성들](/en-US/SVG/Attribute#Conditional_processing_attributes) »
- [주요 속성들](/en-US/SVG/Attribute#Core_attributes) »
- [그래픽 이벤트 속성들](/en-US/SVG/Attribute#Graphical_event_attributes) »
- [표현 속성들](/en-US/SVG/Attribute#Presentation_attributes) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### 특정 속성들

- {{ SVGAttr("cx") }}
- {{ SVGAttr("cy") }}
- {{ SVGAttr("r") }}

## DOM 인터페이스

이 엘리먼트는 {{ domxref("SVGCircleElement") }} 를 구현한다..

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{ SVGElement("ellipse") }}
