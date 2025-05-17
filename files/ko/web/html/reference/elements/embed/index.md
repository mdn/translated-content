---
title: <embed>
slug: Web/HTML/Reference/Elements/embed
original_slug: Web/HTML/Element/embed
---

{{HTMLSidebar}}

**HTML `<embed>` 요소**는 외부 어플리케이션이나 대화형 컨텐츠와의 통합점을 나타냅니다.

{{InteractiveExample("HTML Demo: &lt;embed&gt;", "tabbed-standard")}}

```html interactive-example
<embed
  type="video/mp4"
  src="/shared-assets/videos/flower.mp4"
  width="250"
  height="200" />
```

- **[컨텐츠 범주](/ko/docs/Web/HTML/Guides/Content_categories)** [플로우 컨텐츠](/ko/docs/Web/HTML/Guides/Content_categories#flow_content), [구문 컨텐츠](/ko/docs/Web/HTML/Guides/Content_categories#phrasing_content), 포함된 컨텐츠, 대화형 컨텐츠, palpable 컨텐츠.
- **허용된 컨텐츠** 없음. 이것은 {{Glossary("empty element")}}.
- **태그 생략** 시작 태그는 있어야 하며, 종료태그는 있어서는 안됩니다.
- **허용된 부모 요소** 포함된 컨텐츠를 허용하는 모든 요소
- **DOM 인터페이스** {{domxref("HTMLEmbedElement")}}

## 속성

이 요소는 [전역 속성](/ko/docs/Web/HTML/Reference/Global_attributes)을 포함합니다.

- `height`
  - : 리소스의 표시될 높이 길이를 CSS 픽셀로 지정
- `src`
  - : 포함된 리소스의 URL
- `type`
  - : 인스턴스화할 플러그인을 고르기 위해 사용되는 MIME 타입
- `width`
  - : 리소스의 표시될 가로 길이를 CSS 픽셀로 지정

## 예제

```html
<embed type="video/quicktime" src="movie.mov" width="640" height="480" />
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 다양한 타입의 포함된 컨텐츠를 위해 사용되는 다른 요소들 {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}}, and {{HTMLElement("video")}}.
