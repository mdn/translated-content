---
title: 웹 성능 리소스
slug: Learn_web_development/Extensions/Performance/Web_Performance_Basics
original_slug: Learn/Performance/Web_Performance_Basics
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{LearnSidebar}}{{PreviousMenu("Learn/Performance/business_case_for_performance", "Learn/Performance")}}

웹 사이트가 가능한 최고의 성능을 가져야 하는 데에는 다양한 [이유](https://web.dev/articles/why-speed-matters)가 있습니다. 다음은 각 주제에 대한 추가 정보를 제공하는 링크를 포함한 모범 사례, 도구, API에 대한 간략한 개요입니다.

## 모범 사례

- 브라우저의 [중요 렌더링 경로](/ko/docs/Web/Performance/Critical_rendering_path)를 학습하는 것부터 시작하세요. 이 지식은 웹 사이트의 성능을 개선하는 방법을 이해하는 데 도움이 될 것입니다.
- [`rel=preconnect`](/ko/docs/Web/HTML/Attributes/rel/preconnect), [`rel=dns-prefetch`](/ko/docs/Web/HTML/Attributes/rel/dns-prefetch), [`rel=prefetch`](/ko/docs/Web/HTML/Attributes/rel/prefetch), [`rel=preload`](/ko/docs/Web/HTML/Attributes/rel/preload)와 같은 리소스 힌트를 사용하세요.
- JavaScript의 크기를 [최소화](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4)하세요. 현재 페이지에 필요한 JavaScript만 사용하세요.
- [CSS](/ko/docs/Learn/Performance/CSS) 성능 요소 고려.
- 서버(또는 CDN)에 {{Glossary("HTTP_2", "HTTP/2")}}를 사용하세요.
- [gzip](https://www.gnu.org/software/gzip/), [Brotli](https://github.com/google/brotli), and [Zopfli](https://github.com/google/zopfli)를 사용하여 리소스를 압축하세요.
- 이미지 최적화 (CSS 애니메이션 또는 가능하다면 SVG 사용하기).
- 뷰포트 외부의 애플리케이션 부분을 지연 로딩하기. 그렇게 할 경우, SEO를 위한 백업 계획을 마련하세요 (예: 봇 트래픽에 대해 전체 페이지 렌더). 예를 들어, {{HTMLElement("img")}} 요소에 [`loading`](/ko/docs/Web/HTML/Element/img#loading) 속성 사용하기.
- 사용자에게 정말 중요한 것이 무엇인지 인지하는 것도 중요합니다. 절대적인 타이밍이 아닌 [사용자 인식](/ko/docs/Learn/Performance/Perceived_performance)이 중요할 수 있습니다.

## 빠르게 적용해 보기

### CSS

웹 성능은 사용자 경험과 인지된 성능에 달려 있습니다. [critical rendering path](/ko/docs/Web/Performance/Critical_rendering_path) 문서에서 배웠던 것처럼, 전통적 링크 태그와 rel="stylesheet"로 CSS를 연결하면 동기적으로 실행되어 렌더링을 차단합니다. 렌더링을 차단하는 CSS를 제거하여 페이지 렌더링을 최적화하세요.

CSS를 비동기적으로 로드하려면 media 타입을 print로 설정한 다음 로드가 완료되면 all로 변경할 수 있습니다. 다음 코드 스니펫에는 onload 속성이 포함되어 있어 JavaScript가 필요하므로, 전통적 폴백과 noscript를 포함하는 것이 중요합니다.

```html
<link
  rel="stylesheet"
  href="/path/to/my.css"
  media="print"
  onload="this.media='all'" />
<noscript><link rel="stylesheet" href="/path/to/my.css" /></noscript>
```

이 방법의 단점은 스타일이 적용되지 않은 텍스트의 깜빡임(FOUT)입니다. 가장 간단한 해결책은 폴드 위쪽에 렌더되는 모든 콘텐츠, 즉 스크롤하기 전 브라우저 뷰포트에서 볼 수 있는 내용에 필요한 CSS를 인라인으로 넣는 것입니다. 이 스타일의 경우 CSS가 파일 요청을 하지 않기 때문에 인지된 성능을 개선할 것입니다.

```html
<style>
  /* 여기에 CSS를 넣으세요 */
</style>
```

### JavaScript

[async](/ko/docs/Web/HTML/Element/script) 또는 [defer](/ko/docs/Web/HTML/Element/script) 속성을 사용하거나 페이지의 DOM 요소 뒤에 JavaScript 애셋을 연결하여 JavaScript 렌더링 차단을 피하세요. JavaScript는 DOM 트리에서 스크립트 태그 뒤에 나타나는 요소들의 렌더링만 차단합니다.

### 웹 폰트

EOT와 TTF 형식은 기본적으로 압축되지 않습니다. 이러한 파일 유형들에 대해 GZIP 또는 Brotli와 같은 압축을 적용하세요. WOFF와 WOFF2를 사용하세요. 이 형식들은 압축이 내장되어 있습니다.

@font-face 내에서 font-display: swap을 사용하세요. font display swap을 사용하면 브라우저는 렌더링을 차단하지 않고 정의된 백업 시스템 폰트를 사용할 것입니다. 웹 폰트와 가능한 한 유사하도록 [font weight](/ko/docs/Web/CSS/font-weight)를 최적화하세요.

#### 아이콘 웹 폰트

가능하면 아이콘 웹 폰트를 피하고 압축된 SVG를 사용하세요. HTTP 요청을 방지하기 위해 HTML 마크업에 SVG 데이터를 인라인으로 넣어 추가로 최적화하세요.

### 도구

- [Firefox Dev Tools](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)를 사용하여 사이트를 분석하는 방법을 배워보세요.
- [PageSpeed Insights](https://pagespeed.web.dev/)로 페이지를 분석하고 성능 개선에 대한 전반적인 힌트를 얻을 수 있습니다.
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)로 성능, SEO, 접근성을 포함한 사이트의 다양한 측면에 대해 구체적으로 분석할 수 있습니다.
- 다양한 실제 기기 유형과 위치를 선택할 수 있는 [WebPageTest.org](https://webpagetest.org/)로 페이지의 속도를 테스트해 보세요.
- 실제 사용자 지표를 정량화하는 [Chrome User Experience Report](https://developer.chrome.com/docs/crux/)를 활용해 보세요.
- [performance budget](/ko/docs/Web/Performance/Performance_budgets)를 설정하세요.

### API

- [boomerang](https://github.com/akamai/boomerang) 라이브러리를 사용하여 사용자 지표를 수집하세요.
- 또는 [window.performance.timing](/ko/docs/Web/API/Performance/timing)로 직접 사용자 지표를 수집하세요.

### 하지 말아야 할 것들(좋지 않은 사례)

- 모든 것을 다운로드하기
- 압축되지 않은 미디어 파일 사용하기

### 같이 보기

- <https://github.com/filamentgroup/loadCSS>
