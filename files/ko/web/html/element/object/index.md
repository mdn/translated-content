---
title: <object>
slug: Web/HTML/Element/object
---

{{HTMLSidebar}}

**HTML `<object>` 요소**는 이미지나, 중첩된 브라우저 컨텍스트, 플러그인에 의해 다뤄질수 있는 리소스와 같은 외부 리소스를 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/object.html", "tabbed-standard")}}

- `[컨텐츠 범주](/ko/docs/HTML/Content_categories)` [플로우 컨텐츠](/ko/docs/Web/HTML/Content_categories#flow_content); [구문 컨텐츠](/ko/docs/Web/HTML/Content_categories#phrasing_content); [포함된 컨텐츠](/ko/docs/Web/HTML/Content_categories#embedded_content), palpable 컨텐츠; 만약 요소가 **usemap ** 속성을 가지고 있다면, [대화형 컨텐츠](/ko/docs/Web/HTML/Content_categories#interactive_content); [listed](/ko/docs/Web/HTML/Content_categories#form_listed), [submittable](/ko/docs/Web/HTML/Content_categories#form_submittable) [form-associated](/ko/docs/Web/HTML/Content_categories#form-associated_content) element.
- `허용된 컨텐츠` 0개 이상의 {{HTMLElement("param")}} elements, then [Transparent content](/ko/docs/Web/HTML/Content_categories#transparent_content_models).
- `태그 생략` 불가능, 시작과 끝에 태그를 추가하는 것은 필수입니다.
- `허용된 부모 요소` [포함된 컨텐츠](/ko/docs/Web/HTML/Content_categories#embedded_content)를 허용하는 모든 요소
- `DOM 인터페이스` {{domxref("HTMLObjectElement")}}

## 속성

이 속성은 [전역 속성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- `archive` {{deprecated_inline}}
  - : A space-separated list of URIs for archives of resources for the object.
- `border` {{deprecated_inline}}
  - : The width of a border around the control, in pixels.
- `classid` {{deprecated_inline}}
  - : The URI of the object's implementation. It can be used together with, or in place of, the **data** attribute.
- `codebase` {{deprecated_inline}}
  - : The base path used to resolve relative URIs specified by **classid**, **data**, or **archive**. If not specified, the default is the base URI of the current document.
- `codetype` {{deprecated_inline}}
  - : The content type of the data specified by **classid**.
- `data`
  - : 리소스의 URL. 최소 하나의 **data**와 **type**가 정의되어야 합니다.
- `declare` {{deprecated_inline}}
  - : The presence of this Boolean attribute makes this element a declaration only. The object must be instantiated by a subsequent `<object>` element. In HTML5, repeat the \<object> element completely each that that the resource is reused.
- `form`
  - : object 요소와 관련된 form 요소. 이 속성의 값은 같은 문서의 {{HTMLElement("form")}} 요소의 ID 속성의 값이여야 합니다.
- `height`
  - : 표시될 리소스의 높이를 CSS 픽셀 단위로 지정합니다.
- `name`
  - : 유효한 브라우징 컨텍스트의 이름(HTML5) 또는, 컨트롤의 이름(HTML 4)
- `standby` {{deprecated_inline}}
  - : A message that the browser can show while loading the object's implementation and data.
- `tabindex` {{deprecated_inline}}
  - : The position of the element in the tabbing navigation order for the current document.
- `type`
  - : **data**에 의해 지정된 리소스의 [컨텐츠 타입](/ko/docs/Glossary/MIME_type). 최소 한 개의 **data**와 **type**가 정의되어야 합니다.
- `typemustmatch`
  - : **type**와 리소스의 실제 [컨텐츠 타입](/ko/docs/Glossary/MIME_type)이 일치해야되는지를 나타내는 불리언 속성
- `usemap`
  - : {{HTMLElement("map")}} 요소에 대한 해쉬-이름 참조; #와 그 뒤에 map 요소의 [`name`](/ko/docs/Web/HTML/Element/map#name) 값이 붙음
- `width`
  - : 표시될 리소스의 가로 길이를 CSS 픽셀단위로 지정합니다.

## 예제

### 포함된 플래시 무비

```html
<!-- Embed a flash movie -->
<object data="move.swf" type="application/x-shockwave-flash"></object>

<!-- Embed a flash movie with parameters -->
<object data="move.swf" type="application/x-shockwave-flash">
  <param name="foo" value="bar" />
</object>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("embed")}}
- {{HTMLElement("param")}}
