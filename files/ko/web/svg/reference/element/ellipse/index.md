---
title: <ellipse>
slug: Web/SVG/Reference/Element/ellipse
original_slug: Web/SVG/Element/ellipse
l10n:
  sourceCommit: 6313664032844cea1fa62bcc8577d3f68fcd97db
---

{{SVGRef}}

**`<ellipse>`** 요소는 중심 좌표와 x 및 y 반경을 기반으로 타원을 만드는 SVG 기본 모양입니다.

> [!NOTE]
> 타원은 타원의 정확한 방향을 지정할 수 없지만,(예를 들어 45도 각도로 기울어진 타원을 그리려는 경우) {{SVGAttr("transform")}} 속성을 사용하여 회전할 수 있습니다.

## 예제

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="100" cy="50" rx="100" ry="50" />
</svg>
```

{{EmbedLiveSample('Example', 100, '100%')}}

## 속성

- {{SVGAttr("cx")}}
  - : 타원 중심의 x좌표.
    값 유형: [**\<length>**](/ko/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ko/docs/Web/SVG/Content_type#percentage) ; 기본 값: `0`; 에니메이션 가능: **예**
- {{SVGAttr("cy")}}
  - : 타원 중심의 y좌표
    값 유형: [**\<length>**](/ko/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ko/docs/Web/SVG/Content_type#percentage) ; 기본 값: `0`; 에니메이션 가능: **예**
- {{SVGAttr("rx")}}
  - : x축의 타원 반경.
    값 유형: `auto`|[**\<length>**](/ko/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ko/docs/Web/SVG/Content_type#percentage) ; 기본 값: `auto`; 에니메이션 가능: **예**
- {{SVGAttr("ry")}}
  - : y축의 타원 반경.
    값 유형: `auto`|[**\<length>**](/ko/docs/Web/SVG/Content_type#length)|[**\<percentage>**](/ko/docs/Web/SVG/Content_type#percentage) ; 기본 값: `auto`; 에니메이션 가능: **예**
- {{SVGAttr("pathLength")}}
  - : 이 속성을 사용하면 경로의 총 길이를 사용자 단위로 지정할 수 있습니다.
    값 유형: [**\<number>**](/ko/docs/Web/SVG/Content_type#number) ; 기본 값: _none_; 에니메이션 가능: **예**

> [!NOTE]
> SVG2부터 시작하여 `cx`, `cy`, `rx`, 그리고 `ry`는 기하학 속성입니다. 즉, 해당 속성을 해당 요소의 CSS 속성으로도 사용할 수 있습니다.

### 전역 속성

- [코어 속성](/ko/docs/Web/SVG/Attribute)
  - : 특히: {{SVGAttr('id')}}, {{SVGAttr('tabindex')}}
- [스타일 속성](/ko/docs/Web/SVG/Attribute)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [조건부 처리 속성](/ko/docs/Web/SVG/Attribute)
  - : 특히: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- 이벤트 속성
  - : [전역 이벤트 속성](/ko/docs/Web/SVG/Attribute#global_event_attributes), [그래픽 이벤트 속성](/ko/docs/Web/SVG/Attribute#graphical_event_attributes)
- [프레젠테이션 속성](/ko/docs/Web/SVG/Attribute)
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

- 기타 기본 SVG 모양: **{{ SVGElement('circle') }}**, {{ SVGElement('line') }}, {{ SVGElement('polygon') }}, {{ SVGElement('polyline') }}, {{ SVGElement('rect') }}
