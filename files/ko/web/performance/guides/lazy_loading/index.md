---
title: 지연 로딩
slug: Web/Performance/Guides/Lazy_loading
original_slug: Web/Performance/Lazy_loading
l10n:
  sourceCommit: 0c45d0d3ec3e3eeb80fcf2101a30704dae7c8ee9
---

{{QuickLinksWithSubPages("Web/Performance")}}

**지연 로딩**은 리소스를 논 블로킹(중요하지 않음)으로 식별하여 필요할 때만 로드하는 전략입니다. 이는 [중요 렌더링 경로](/ko/docs/Web/Performance/Guides/Critical_rendering_path)의 길이를 단축하는 방법으로, 페이지 로드 시간을 감소시킬 수 있습니다.

지연 로딩은 애플리케이션의 여러 순간에 발생할 수 있지만, 일반적으로 스크롤 및 내비게이션과 같은 일부 사용자의 상호 작용에서 발생합니다.

## 개요

웹이 발전함에 따라 사용자에게 보내지는 에셋의 수와 크기가 크게 증가했습니다. 2011년과 2019년 사이에 리소스 무게의 중앙값은 데스크톱의 경우 **\~100KB** 에서 **\~400KB**로, 모바일의 경우 **\~50KB**에서 **\~350KB**로 증가했습니다. 반면 이미지 크기는 테스크톱의 경우 **\~250KB** 에서 **\~900KB**로, 모바일의 경우 **\~100KB** 에서 **\~850KB**로 증가했습니다.

이 문제를 해결하기 위해 사용할 수 있는 방법 중 하나는 첫 번째 렌더링이 발생하는데 중요하지 않은 리소스를 지연 로딩하여 [중요 렌더링 경로](/ko/docs/Web/Performance/Guides/Critical_rendering_path) 길이를 단축시키는 것입니다. 실제적인 예제로는 장바구니 페이지/섹션으로 연결하는 링크가 있는 전자 상거래 사이트의 홈페이지에 방문했을 때, **해당 페이지로 이동할 때까지** 장바구니 페이지의 리소스(예를 들어 JavaScript, CSS, 이미지)가 다운로드되지 않는 경우를 들 수 있습니다.

## 전략

지연 로딩은 여러 리소스와 전략을 통해 적용될 수 있습니다.

### 일반적인 사용

#### 코드 분할

JavaScript, CSS, HTML을 더 작은 덩어리로 분할할 수 있습니다. 이렇게 하면 값을 제공하는데 요구되는 최소한의 코드만 미리 보내서 페이지 로드 시간을 개선할 수 있습니다. 나머지는 필요에 따라 로드될 수 있습니다.

- 진입점 분할: 앱의 진입점에 따라 코드를 분리합니다.
- 동적 분할: [dynamic import()](/ko/docs/Web/JavaScript/Reference/Statements/import) 문이 사용되는 코드를 분리합니다.

### JavaScript

#### 스크립트 type module

`type="module"`이 있는 모든 스크립트 태그는 [JavaScript 모듈](/ko/docs/Web/JavaScript/Guide/Modules)로 취급되며 기본적으로 지연됩니다.

### CSS

기본적으로 CSS는 렌더링 [렌더링 차단](/ko/docs/Web/Performance/Guides/Critical_rendering_path) 리소스로 취급되므로 브라우저는 [CSSOM](/ko/docs/Web/API/CSS_Object_Model)이 구성될 때까지 어떠한 처리된 콘텐츠를 렌더링하지 않습니다. CSS는 얇고 가능한 빠르게 전달되어야 하며 사용 미디어 타입 및 쿼리는 렌더링 차단을 해제하는 것이 좋습니다.

```html
<link href="style.css" rel="stylesheet" media="all" />
<link href="portrait.css" rel="stylesheet" media="(orientation:portrait)" />
<link href="print.css" rel="stylesheet" media="print" />
```

이를 달성하기 위해 몇몇 [CSS 최적화](/ko/docs/Learn/Performance/CSS)를 수행할 수 있습니다.

### 폰트

기본적으로 폰트 요청은 렌더 트리가 구성될 때까지 지연되므로 텍스트 렌더링이 지연될 수 있습니다.

기본 동작을 재정의하고 `<link rel="preload">`, [CSS 폰트 표시 속성](/ko/docs/Web/CSS/@font-face/font-display) 및 [폰트 로딩 API](/ko/docs/Web/API/CSS_Font_Loading_API)를 사용하여 웹 폰트 리소스를 미리 로드할 수 있습니다.

같이 보기: [Element Link](/ko/docs/Web/HTML/Reference/Elements/link)

### 이미지 및 iframes

웹페이지에는 데이터 사용량과 페이지 로드 속도에 영향을 미치는 많은 이미지가 포함되어 있는 경우가 많습니다. 이러한 이미지의 대부분은 화면 밖([중요하지 않음](/ko/docs/Web/Performance/Guides/Critical_rendering_path))에 있으므로 스크롤과 같은 사용자 상호 작용이 있어야 볼 수 있습니다.

#### 로딩 속성

{{HTMLElement("img")}} 요소의 [`loading`](/ko/docs/Web/HTML/Reference/Elements/img#loading) 속성 또는 {{HTMLElement("iframe")}}의 [`loading`](/ko/docs/Web/HTML/Element/iframe#loading) 속성을 사용하여 화면 밖에 있는 이미지/iframe의 로딩을 사용자가 가까이 스크롤할 때까지 지연시키도록 브라우저에 지시할 수 있습니다. 이렇게 하면 중요하지 않은 리소스가 필요한 경우에만 로드되어 초기 페이지 로드 속도가 빨라지고 네트워크 사용량이 감소할 수 있습니다.

```html
<img src="image.jpg" alt="..." loading="lazy" />
<iframe src="video-player.html" title="..." loading="lazy"></iframe>
```

`load` 이벤트는 열심히 로드된 콘텐츠가 모두 로드되었을 때 발생합니다. 이때 {{Glossary("visual viewport")}} 내에 아직 로드되지 않은 느리게 로드된 이미지나 iframe이 있을 수 있습니다. (또는 그럴 가능성이 높습니다.)

지정된 이미지의 불리언 {{domxref("HTMLImageElement.complete", "complete")}} 속성 값을 검사하여 로딩이 완료되었는지 확인할 수 있습니다.

#### Intersection Observer API

[Intersection Observers](/ko/docs/Web/API/IntersectionObserver)는 관찰된 요소가 브라우저의 뷰포트에 들어오고 나가는 시점을 사용자가 알 수 있도록 해줍니다.

#### 이벤트 처리기

브라우저 호환성이 중요한 경우 몇 가지 옵션이 있습니다.

- [polyfill intersection observer](https://github.com/w3c/IntersectionObserver)
- 특정 요소가 뷰포트에 있는지 확인하기 위해 스크롤, 크기 조정 또는 방향 변경 이벤트 처리기로 대체합니다.

## 명세서

{{Specifications}}

## 같이 보기

- [Render blocking CSS](https://web.dev/critical-rendering-path-render-blocking-css/)
- [Optimizing loading and rendering](https://web.dev/fast/#optimize-webfonts)
- [Lazy loading images and video](https://web.dev/fast/#lazy-load-images-and-video)
