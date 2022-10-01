---
title: <rect>
slug: Web/SVG/Element/rect
translation_of: Web/SVG/Element/rect
original_slug: Web/SVG/Element/사각형
---
{{SVGRef}}

**\<rect>** 요소는 SVG 기본 모형이고 코너의 위치와 폭과 높이에 따라 사각형을 만드는데 사용된다. 또한 모서리가 둥근 사각형을 만들 수 있다.

```css hidden
html,body,svg { height:100% }
```

```html
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Simple rect element -->
  <rect x="0" y="0" width="100" height="100" />

  <!-- Rounded corner rect element -->
  <rect x="120" y="0" width="100" height="100" rx="15" ry="15" />
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## 컨택스트 사용해보기

| 카테고리       | 기본 도형 요소, 그래픽 요소, 모형 요소                                                                                                                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 허용 된 콘텐츠 | Any number of the following elements, in any order: [Animation elements](/en/SVG/Element#Animation) » [Descriptive elements](/en/SVG/Element#Descriptive) » |
| 규범 문서      | [SVG 1.1 (2nd Edition)](http://www.w3.org/TR/SVG/shapes.html#RectElement)                                                                                                                                               |

## Example

### 간단한 `rect` 사용하기

» [rect-1.svg](https://developer.mozilla.org/files/3247/rect-1.svg)

### 라운드 코너와 rect 사용하기

» [rect-2.svg](https://developer.mozilla.org/files/3248/rect-2.svg)

## 속성

### 전역 속성

- [Conditional processing attributes](/en/SVG/Attribute#ConditionalProccessing) »
- [Core attributes](/en/SVG/Attribute#Core) »
- [Graphical event attributes](/en/SVG/Attribute#GraphicalEvent) »
- [Presentation attributes](/en/SVG/Attribute#Presentation) »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### 지정 속성

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("width") }}
- {{ SVGAttr("height") }}
- {{ SVGAttr("rx") }}
- {{ SVGAttr("ry") }}

## DOM Interface

This element implements the [`SVGRectElement`](/en/DOM/SVGRectElement) interface.

## Browser compatibility

{{Compat}}

## See also

- {{ SVGElement("path") }}
