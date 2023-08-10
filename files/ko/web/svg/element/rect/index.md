---
title: <rect>
slug: Web/SVG/Element/rect
l10n:
  sourceCommit: c0eef9c5828e919c8128c99e0f95cc7a0bcdbc4e
---

{{SVGRef}}

**`<rect>`** 요소는 위치, 너비, 그리고 높이로 정의된 사각형을 그리는 [기본 SVG 모양](/ko/docs/Web/SVG/Tutorial/Basic_Shapes)입니다. 이 직사각형은 둥근 모서리를 가질 수 있습니다.

## 예제

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Simple rectangle -->
  <rect width="100" height="100" />

  <!-- Rounded corner rectangle -->
  <rect x="120" width="100" height="100" rx="15" />
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## 속성

- {{SVGAttr("x")}}
  - : 직사각형의 x 좌표입니다.
    값 유형: [**\<length>**](/ko/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ko/docs/Web/SVG/Content_type#percentage) ; 기본값: `0`; 애니메이션 가능: **예**
- {{SVGAttr("y")}}
  - : 직사각형의 y 좌표입니다.
    값 유형: [**\<length>**](/ko/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ko/docs/Web/SVG/Content_type#percentage) ; 기본 값: `0`; 애니메이션 가능: **예**
- {{SVGAttr("width")}}
  - : 직사각형의 너비.
    값 유형: `auto`|[**\<length>**](/ko/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ko/docs/Web/SVG/Content_type#percentage) ; 기본 값: `auto`; 애니메이션 가능: **예**
- {{SVGAttr("height")}}
  - : 직사각형의 높이.
    값 유형: `auto`|[**\<length>**](/ko/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ko/docs/Web/SVG/Content_type#percentage) ; 기본 값: `auto`; 애니메이션 가능: **예**
- {{SVGAttr("rx")}}
  - : 직사각형의 가로 모서리 반지름입니다. `ry`가 지정 된 경우 `ry`가 기본값입니다.
    값 유형: `auto`|[**\<length>**](/ko/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ko/docs/Web/SVG/Content_type#percentage) ; 기본 값: `auto`; 애니메이션 가능: **예**
- {{SVGAttr("ry")}}
  - : 직사각형의 세로 모서리 반지름입니다. `rx`가 지정 된 경우 `rx`가 기본값입니다.
    값 유형: `auto`|[**\<length>**](/ko/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ko/docs/Web/SVG/Content_type#percentage) ; 기본 값: `auto`; 애니메이션 가능: **예**
- {{SVGAttr("pathLength")}}
  - : 직사각형 둘레의 총 길이(사용자 단위).
    값 유형: [**\<number>**](/ko/docs/Web/SVG/Content_type#number) ; 기본 값: 없음; 애니메이션 가능: **예**

> **참고:** SVG2부터 시작하여 `x`, `y`, `width`, `height`, `rx` 그리고 `ry`는 기하학 속성입니다. 즉, 해당 속성을 해당 요소의 CSS 속성으로도 사용할 수 있습니다.

### 전역 속성

- [코어 속성](/ko/docs/Web/SVG/Attribute/Core)
  - : 특히: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [스타일 속성](/ko/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [조건부 처리 속성](/ko/docs/Web/SVG/Attribute/Conditional_Processing)
  - : 특히: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- 이벤트 속성
  - : [전역 이벤트 속성](/ko/docs/Web/SVG/Attribute/Events#global_event_attributes), [그래픽 이벤트 속성](/ko/docs/Web/SVG/Attribute/Events#graphical_event_attributes)
- [프레젠테이션 속성](/ko/docs/Web/SVG/Attribute/Presentation)
  - : 특히: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- ARIA 속성
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## 사용 참고 사항

{{svginfo}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 기타 기본 SVG 모양: {{SVGElement('circle')}}, {{ SVGElement('ellipse') }}, {{ SVGElement('line') }}, **{{ SVGElement('polygon') }}**, {{ SVGElement('polyline') }}
