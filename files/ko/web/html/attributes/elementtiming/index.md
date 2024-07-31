---
title: "HTML attribute: elementtiming"
slug: Web/HTML/Attributes/elementtiming
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar}}

**`elementtiming`** 특성은 `"element"` 타입을 사용하는 {{domxref("PerformanceObserver")}} 객체가 추적할 요소를 표시하는 데 사용됩니다. 자세한 내용은 {{domxref("PerformanceElementTiming")}} 인터페이스를 참조하세요.

이 특성은 {{htmlelement("img")}}, {{SVGElement("image")}} 요소가 {{SVGElement("svg")}} 내부에 있을 때, {{htmlelement("video")}} 요소의 포스터 이미지, {{cssxref("background-image")}}를 가지는 요소, 그리고 {{htmlelement("p")}}와 같이 텍스트 노드를 포함하는 요소에 적용될 수 있습니다.

DOM에서의 해당 특성은 {{domxref("Element.elementTiming")}}로 반영됩니다.

## 사용

`elementtiming`에 주어진 값은 관찰된 요소의 식별자가 됩니다.

```html
<img alt="alt" src="img.jpg" elementtiming="label for element" />
```

관찰하고 싶은 요소로 좋은 후보들은 다음과 같습니다.

- 기사에 대한 주요 이미지
- 블로그 게시물 제목
- 쇼핑 사이트의 캐러셀에 있는 이미지들
- 페이지의 주요 비디오에 대한 포스터 이미지

## 예제

```html
<img alt="Alt for a main blog post image" src="my-massive-image.jpg" elementtiming="Main image">

<p elementtiming="important-text">Some very important information.</p">
```

## 같이 보기

- {{domxref("PerformanceElementTiming")}}
- {{domxref("Element.elementTiming")}}
