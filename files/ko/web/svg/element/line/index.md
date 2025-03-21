---
title: <line>
slug: Web/SVG/Element/line
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

{{SVGRef}}

**`<line>`** [SVG](/ko/docs/Web/SVG) 요소는 두 개의 점을 연결하는 선을 생성하는 기본적인 SVG 모양입니다.

## 예제

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <line x1="0" y1="80" x2="100" y2="20" stroke="black" />

  <!-- 색상을 지정하지 않으면
       선이 보이지 않습니다. -->
</svg>
```

{{EmbedLiveSample('Example', 100, 100)}}

## 특성

- {{SVGAttr('x1')}}
  - : 선의 시작 지점의 x축 좌표를 설정합니다.
    값의 타입: [**\<length>**](/ko/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ko/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/ko/docs/Web/SVG/Content_type#number) ; 기본 값: `0`; 애니메이션 설정 여부: **yes**
- {{SVGAttr('x2')}}
  - : 선의 마지막 지점의 x축 좌표를 설정합니다.
    값의 타입: [**\<length>**](/ko/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ko/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/ko/docs/Web/SVG/Content_type#number) ; 기본 값: `0`; 애니메이션 설정 여부: **yes**
- {{SVGAttr('y1')}}
  - : 선의 시작 지점의 y축 좌표를 설정합니다.
    값의 타입: [**\<length>**](/ko/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ko/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/ko/docs/Web/SVG/Content_type#number) ; 기본 값: `0`; 애니메이션 설정 여부: **yes**
- {{SVGAttr('y2')}}
  - : 선의 마지막 지점의 y축 좌표를 설정합니다.
    값의 타입: [**\<length>**](/ko/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ko/docs/Web/SVG/Content_type#percentage)|[**\<number>**](/ko/docs/Web/SVG/Content_type#number) ; 기본 값: `0`; 애니메이션 설정 여부: **yes**
- {{SVGAttr("pathLength")}}
  - : 사용자 단위의 전체 선 길이를 설정합니다.
    값의 타입: [**\<number>**](/ko/docs/Web/SVG/Content_type#number) ; 기본 값: _none_; 애니메이션 설정 여부: **yes**

## 사용 일람

{{svginfo}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 다른 기본 SVG 모양: {{ SVGElement('circle') }}, {{ SVGElement('ellipse') }}, {{ SVGElement('polygon') }}, **{{ SVGElement('polyline') }}**, {{ SVGElement('rect') }}
