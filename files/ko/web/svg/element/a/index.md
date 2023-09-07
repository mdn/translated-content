---
title: <a>
slug: Web/SVG/Element/a
l10n:
  sourceCommit: 1a9baa7353ead965d9221d9edbe30f45a711382b
---

{{SVGRef}}

**\<a>** SVG 요소는 다른 웹 페이지, 파일, 같은 페이지의 위치, 이메일 주소 또는 기타 URL에 대한 하이퍼링크를 생성합니다. HTML의 {{htmlelement("a")}} 요소와 매우 유사합니다.

SVG의 `<a>` 요소는 컨테이너이므로 HTML과 같은 텍스트 주위에 링크를 만들 수 있고, 모든 모양 주위에도 링크를 만들 수 있습니다.

## 예제

```css hidden
@namespace svg url(http://www.w3.org/2000/svg);
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- 모양에 링크 -->
  <a href="/docs/Web/SVG/Element/circle">
    <circle cx="50" cy="40" r="35" />
  </a>

  <!-- 텍스트에 링크 -->
  <a href="/docs/Web/SVG/Element/text">
    <text x="50" y="90" text-anchor="middle">&lt;circle&gt;</text>
  </a>
</svg>
```

```css
/* SVG는 링크에 대한 기본 시각적 스타일을 제공하지 않으므로
   몇 가지를 추가하는 것이 가장 좋습니다. */

@namespace svg url(http://www.w3.org/2000/svg);
/* HTML이 아닌 SVG <a> 요소만 선택하는 데 필요합니다.
   아래 경고 참조*/

svg|a:link,
svg|a:visited {
  cursor: pointer;
}

svg|a text,
text svg|a {
  fill: blue; /* 텍스트의 경우에도 SVG는 채우기 색상을 사용합니다.*/
  text-decoration: underline;
}

svg|a:hover,
svg|a:active {
  outline: dotted 1px blue;
}
```

{{EmbedLiveSample('Example', 100, 100)}}

> **경고:** 이 요소는 [HTML의 `<a>` 요소](/ko/docs/Web/HTML/Element/a)와 태그 이름을 공유하므로 CSS 또는 {{domxref("Document.querySelector", "querySelector")}}로 `a`를 선택하면 잘못된 요소를 선택할 수 있습니다. 둘을 구분하려면 [@namespace 규칙](/ko/docs/Web/CSS/@namespace)을 사용해 보세요.

## 속성

- [`download`](/ko/docs/Web/HTML/Element/a#download)
  - : {{Glossary("URL")}}로 이동하는 대신 URL을 다운로드하도록 브라우저에 지시하여 사용자에게 로컬 파일로 저장하라는 메시지가 표시됩니다.
    값 유형: **\<string>** ; 기본 값: 없음; 애니메이션 가능: **아니요**
- {{SVGAttr("href")}}
  - : 하이퍼링크가 가리키는 URL 또는 URL 조각입니다.
    값 유형: **[\<URL>](/ko/docs/Web/SVG/Content_type#url)** ; 기본값: 없음; 애니메이션 가능: **예**
- [`hreflang`](/ko/docs/Web/HTML/Element/a#hreflang)
  - : 하이퍼링크가 가리키는 URL 또는 URL 조각의 사람 언어입니다.
    값 유형: **\<string>** ; 기본값: 없음; 애니메이션 가능: **예**
- [`ping`](/ko/docs/Web/HTML/Element/a#ping) {{experimental_inline}}
  - : 공백으로 구분된 URL 목록으로, 하이퍼링크를 따라갈 때 `PING` 본문이 포함된 {{HTTPMethod("POST")}} 요청이 브라우저에서 전송됩니다(백그라운드에서). 일반적으로 추적에 사용됩니다. 동일한 사용 사례를 다루는 보다 광범위하게 지원되는 기능은 {{domxref("Navigator.sendBeacon()")}}을 참조하십시오.
    값 유형: **[\<list-of-URLs>](/ko/docs/Web/SVG/Content_type#list-of-ts)** ; 기본값: 없음; 애니메이션 가능: **아니요**
- [`referrerpolicy`](/ko/docs/Web/HTML/Element/a#referrerpolicy)
  - : {{Glossary("URL")}}을 가져올 때 보내는 [리퍼러](/ko/docs/Web/HTTP/Headers/Referer)입니다.
    값 유형: `no-referrer`|`no-referrer-when-downgrade`|`same-origin`|`origin`|`strict-origin`|`origin-when-cross-origin`|`strict-origin-when-cross-origin`|`unsafe-url` ; 기본 값: 없음; 애니메이션 가능: **아니요**
- [`rel`](/ko/docs/Web/HTML/Element/a#rel)
  - : 이 속성은 타겟 객체와 링크 객체의 관계를 지정합니다.
    값 유형: **[\<list-of-Link-Types>](/docs/Web/HTML/Link_types)** ; 기본 값: 없음; 에니메이션 가능: **예**
- {{SVGAttr("target")}}
  - : 연결된 {{Glossary("URL")}}을 표시할 위치입니다.
    값 유형: `_self`|`_parent`|`_top`|`_blank`|**\<name>** ; 기본 값: `_self`; 에니메이션 가능: **예**
- [`type`](/ko/docs/Web/HTML/Element/a#type)
  - : 연결된 URL의 {{Glossary("MIME type", "MIME 유형")}}입니다.
    값 유형: **\<string>** ; 기본 값: 없음; 에니메이션 가능: **예**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : 하이퍼링크가 가리키는 URL 또는 URL 조각입니다. 이전 브라우저의 이전 버전과의 호환성을 위해 필요할 수 있습니다.
    값 유형: **[\<URL>](/ko/docs/Web/SVG/Content_type#url)** ; 기본값: 없음; 애니메이션 가능: **예**

### 전역 속성

- [코어 속성](/ko/docs/Web/SVG/Attribute/Core)
  - : 특히: {{SVGAttr('id')}}, {{SVGAttr('lang')}}, {{SVGAttr('tabindex')}}
- [스타일 속성](/ko/docs/Web/SVG/Attribute/Styling)
  - : {{SVGAttr('class')}}, {{SVGAttr('style')}}
- [조건부 처리 속성](/ko/docs/Web/SVG/Attribute/Conditional_Processing)
  - : 특히: {{SVGAttr('requiredExtensions')}}, {{SVGAttr('systemLanguage')}}
- 이벤트 속성
  - : [전역 이벤트 속성](/ko/docs/Web/SVG/Attribute/Events#global_event_attributes), [문서 요소 이벤트 속성](/ko/docs/Web/SVG/Attribute/Events#document_element_event_attributes), [그래픽 이벤트 속성](/ko/docs/Web/SVG/Attribute/Events#graphical_event_attributes)
- [프레젠테이션 속성](/ko/docs/Web/SVG/Attribute/Presentation)
  - : 특히: {{SVGAttr('clip-path')}}, {{SVGAttr('clip-rule')}}, {{SVGAttr('color')}}, {{SVGAttr('color-interpolation')}}, {{SVGAttr('color-rendering')}}, {{SVGAttr('cursor')}}, {{SVGAttr('display')}}, {{SVGAttr('fill')}}, {{SVGAttr('fill-opacity')}}, {{SVGAttr('fill-rule')}}, {{SVGAttr('filter')}}, {{SVGAttr('mask')}}, {{SVGAttr('opacity')}}, {{SVGAttr('pointer-events')}}, {{SVGAttr('shape-rendering')}}, {{SVGAttr('stroke')}}, {{SVGAttr('stroke-dasharray')}}, {{SVGAttr('stroke-dashoffset')}}, {{SVGAttr('stroke-linecap')}}, {{SVGAttr('stroke-linejoin')}}, {{SVGAttr('stroke-miterlimit')}}, {{SVGAttr('stroke-opacity')}}, {{SVGAttr('stroke-width')}}, {{SVGAttr("transform")}}, {{SVGAttr('vector-effect')}}, {{SVGAttr('visibility')}}
- XLink 속성
  - : 특히: {{SVGAttr("xlink:title")}}
- ARIA 속성
  - : `aria-activedescendant`, `aria-atomic`, `aria-autocomplete`, `aria-busy`, `aria-checked`, `aria-colcount`, `aria-colindex`, `aria-colspan`, `aria-controls`, `aria-current`, `aria-describedby`, `aria-details`, `aria-disabled`, `aria-dropeffect`, `aria-errormessage`, `aria-expanded`, `aria-flowto`, `aria-grabbed`, `aria-haspopup`, `aria-hidden`, `aria-invalid`, `aria-keyshortcuts`, `aria-label`, `aria-labelledby`, `aria-level`, `aria-live`, `aria-modal`, `aria-multiline`, `aria-multiselectable`, `aria-orientation`, `aria-owns`, `aria-placeholder`, `aria-posinset`, `aria-pressed`, `aria-readonly`, `aria-relevant`, `aria-required`, `aria-roledescription`, `aria-rowcount`, `aria-rowindex`, `aria-rowspan`, `aria-selected`, `aria-setsize`, `aria-sort`, `aria-valuemax`, `aria-valuemin`, `aria-valuenow`, `aria-valuetext`, `role`

## 사용 참고 사항

{{svginfo}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
