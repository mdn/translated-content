---
title: HTML 성능 최적화
slug: Learn_web_development/Extensions/Performance/HTML
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}} {{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}

HTML은 기본적으로 빠르고 접근하기 쉽습니다. HTML 코드를 작성하거나 수정할 때 이 두 가지 속성을 유지하도록 보장하는 것이 개발자로서의 업무입니다. 복잡한 문제가 발생 하기도 하는데, 삽입된 {{htmlelement("video")}} 파일 용량이 너무 크거나 JavaScript 파싱이 중요한 페이지 요소의 렌더링을 차단하는 상황이 일어날 수 있습니다. 이번 글에서는 웹 페이지 품질을 극적으로 향상시킬 수 있는 주요한 HTML 성능 기능을 살펴봅니다.

<table>
  <tbody>
    <tr>
      <th scope="row">사전 지식:</th>
      <td>
        <a
          href="/ko/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >기본 소프트웨어 설치</a
        >,
        <a href="/ko/docs/Learn/Getting_started_with_the_web"
          >클라이언트 사이드 웹 기술</a
        >의 기본적인 지식.
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        웹 사이트에서 HTML 성능이 미치는 영향과
        성능을 향상시키는 HTML 최적화 방법을 배웁니다.
      </td>
    </tr>
  </tbody>
</table>

## 최적화 할 것인가, 하지 않을 것인가

HTML 최적화를 시작하기 전에 대답해야 하는 첫 번째 질문은 "어떤 부분을 최적화 할 것인가?"입니다. 아래에서 다루는 몇 가지 팁과 기법은 대부분 웹 프로젝트에서 좋은 영향을 주는 모범 사례이지만, 특정 상황에서만 필요한 경우도 있습니다. 모든 기법을 적용하려고 시도하는 것은 아마 불필요한 시간을 낭비할 수도 있습니다. 각 프로젝트에서 실제로 성능 최적화가 필요한 곳을 파악하는 것이 중요합니다.

이를 위해서는, 사이트 [성능 측정](/ko/docs/Learn_web_development/Extensions/Performance/Measuring_performance)을 할 필요가 있습니다. 위 링크에서 볼 수 있듯이, 정교한 [성능 API](/ko/docs/Web/API/Performance_API)를 포함해 성능을 측정하기 위한 몇 가지 다른 방법이 있습니다. 가장 쉽게 시작하는 방법은 브라우저에 내장되어 있는 [네트워크](/ko/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools)와 [성능](/ko/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) 도구 사용 방법을 배우고, 페이지 로딩 속도가 느린 부분을 찾아 최적화 하는 것입니다.

## 주요한 HTML 성능 이슈

HTML은 성능 측면에서 간단합니다. 대부분 작은 용량인 글자여서 다운로드하고 렌더링하는데 빠릅니다. 웹 페이지 성능에 영향을 줄 수 있는 주요한 이슈는 다음과 같습니다.

- 사진과 영상 파일 용량: {{htmlelement("img")}}, {{htmlelement("video")}}와 같은 대체되는 요소의 콘텐츠를 다루는 방법을 고려하는 것이 중요합니다. 사진과 영상 파일은 크고 페이지 용량을 상당히 증가시킬 수 있습니다. 그러므로, 사용자의 기기에서 다운로드 되는 바이트 양을 최소화하는 것이 중요합니다. 더 작은 사진을 모바일 전용으로 제공하기도 합니다. 필요할 때만 사진과 영상을 페이지에서 로딩하여 인지된 성능을 향상하도록 고려하는 것이 필요합니다.
- 포함된 콘텐츠 전달: 이는 보통 {{htmlelement("iframe")}} 요소에 포함된 콘텐츠입니다. `<iframe>`에서 콘텐츠를 로딩하는 것은 성능에 상당한 영향을 미칠 수 있어서 조심스럽게 고려해야 합니다.
- 자원 로딩 순서: 인지된 성능과 실제 성능을 극대화하기 위해, 페이지에서 나타나는 순서 중에서 HTML이 첫 번째로 로드되어야 합니다. 그러면 자원 로드 순서에 영향을 주는 다양한 기능을 더 좋은 성능 향상을 위해 사용할 수 있습니다. 예를 들어, 중요한 CSS와 글꼴을 먼저 프리로드 할 수 있지만 중요하지 않는 JavaScript는 로드가 끝날 때까지 지연됩니다.

> [!NOTE]
> HTML 구조를 간단하고 코드를 [최소화](<https://en.wikipedia.org/wiki/Minification_(programming)>)해주는 인수가 있어서 렌더링과 다운로드가 더 빨라집니다. 하지만, HTML 파일 용량은 사진과 영상에 비교해보면 무시할 만합니다. 그리고 브라우저 렌러딩은 요즘 시대에 아주 빠르게 진행됩니다. HTML 자원이 너무 크고 복잡해서 렌더링과 다운로드 성능 저하를 만들고 있다면 아주 큰 문제일 가능성이 있습니다. HTML 자원을 간단하게 만들고 콘텐츠를 분리하는데 신경써야 합니다.

## 대체 요소 반응적으로 다루기

[반응형 디자인](/ko/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)은 웹 콘텐츠 레이아웃이 다른 기기 마다 다뤄지는 방식을 근본적으로 바꿨습니다. 반응형 디자인을 가능하게 해주는 한 가지 주요한 이점은 화면 크기에 맞춰 최적화된 레이아웃의 동적 전환입니다. 가로로 긴 화면 레이아웃과 이와 대비되는 세로로 긴 화면 레이아웃으로 전환합니다. 해상도나 밝고 어두운 테마 선호도와 같은 기기 속성에 기반하여 콘텐츠의 동적 전환을 다룰 수 있습니다.

이른바 "모바일 우선" 기법은 기본적인 레이아웃이 작은 화면 기기를 위하도록 보장할 수 있습니다. 그래서 모바일 화면에 맞는 적합한 사진을 다운로드 할 수 있어 더 큰 데스크탑용 사진을 다운로드 하는 성능 저하가 이뤄지지 않습니다. 그러나, [미디어 쿼리](/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries)를 CSS에서 사용하여 제어됨으로, CSS에서 불러오는 사진 성능에만 전적으로 영향을 줄 수 있게 되었습니다.

아래 섹션에서, 대체되는 요소를 반응형으로 구현하는 방법을 요약합니다. 이러한 구현에 관한 더 자세한 내용은 [HTML 영상과 음성](/ko/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)과 [반응형 사진](/ko/docs/Web/HTML/Guides/Responsive_images) 안내서에서 확인할 수 있습니다.

### srcset 통해 사진 해상도 다르게 제공하기

기기의 해상도와 뷰포트 크기에 따라 동일한 사진의 해상도를 다르게 제공하기 위해서는, [`srcset`](/ko/docs/Web/HTML/Reference/Elements/img#srcset) 속성과 [`sizes`](/ko/docs/Web/HTML/Reference/Elements/img#sizes) 속성을 사용할 수 있습니다.

다음 예제는 화면 너비에 맞춰 다른 크기의 사진을 제공합니다.

```html
<img
  srcset="480w.jpg 480w, 800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="800w.jpg"
  alt="Family portrait" />
```

`srcset` 속성은 파일 이름에 따라 원본 사진 크기를 제공합니다. 그리고 `sizes` 속성은 각각의 경우마다 채워야 하는 사진 슬롯 너비에 맞는 미디어 쿼리를 제공합니다. 그러면 브라우저는 각각의 슬롯으로 어느 사진을 로드해야 하는지 결정합니다. 예를 들면, 화면 너비가 `600px`이하면, `max-width: 600px`으로 적용됩니다. 그러면 채워져야 하는 슬롯은 `480px`으로 여겨집니다. 이러한 경우에서, 브라우저는 480px 너비의 사진인 480w.jpg 파일을 선택할 것입니다. 브라우저는 필요한 만큼 더 큰 사진을 로드하지 않기 때문에 이는 성능 향상에 도움됩니다.

다음 예제는 화면 해상도에 맞춰 다른 해상도 사진을 제공합니다.

```html
<img
  srcset="320w.jpg, 480w.jpg 1.5x, 640w.jpg 2x"
  src="640w.jpg"
  alt="Family portrait" />
```

`1.5x`, `2x`, 등등, 이는 해상도 지표와 관련있습니다. CSS에서 `width: 320px`으로 사진이 320px 너비로 스타일링 되어 있다면, 브라우저는 기기가 하나의 픽셀 당 CSS 픽셀을 가지고 있는 낮은 해상도 경우에 `320w.jpg` 파일을 로드합니다. 기기가 두 개의 픽셀 당 CSS 픽셀 이상을 가진 높은 해당도의 경우면 브라우저는 `640x.jpg` 파일을 로드합니다.

두 가지 경우에서, `src` 특성은 브라우저가 `src`이나 `srcset`을 지원하지 않은 경우에 기본 이미지를 로드하도록 합니다.

### 사진과 영상 자원을 다르게 제공하기

{{htmlelement("picture")}} 요소는 전통적인 {{htmlelement("img")}} 요소 기반입니다. 이 요소는 각 상황마다 다수의 다른 자원을 제공할 수 있도록 해줍니다. 예를 들어, 레이아웃이 넓다면 아마도 넓은 사진을 원하고 레이아웃이 길면 긴 사진을 원할 것입니다. 사진은 상황마다 계속 전환됩니다.

물론, 이 또한 모바일 기기에서 더 작은 정보를 다운로드하도록 하여 성능 향상을 돕습니다.

다음과 같은 예제가 있습니다.

```html
<picture>
  <source media="(max-width: 799px)" srcset="narrow-banner-480w.jpg" />
  <source media="(min-width: 800px)" srcset="wide-banner-800w.jpg" />
  <img src="large-banner-800w.jpg" alt="Dense forest scene" />
</picture>
```

{{htmlelement("source")}} 요소는 `media` 특성 안에서 미디어 쿼리를 포함하고 있습니다. 미디어 쿼리가 참을 반환하면, `<source>` 요소의 `srcset` 특성에서 참조하는 사진을 로드합니다. 위 예제에서, 뷰포트 너비가 `799px` 이하면, `narrow-banner-480w.jpg` 사진을 로드합니다. 또한 `<picture>` 요소가 `<img>` 요소를 포함하고 있는 방식에 주목하세요. 이는 브라우저가 `<picture>` 요소를 지원하지 않을 경우에 기본 사진을 제공하도록 합니다.

이번 예제에서 `srcset` 특성을 사용하는 것에 주목하세요. 이전 섹션에서 보여준 것처럼, 각각의 사진 자원에 따라 다른 해상도를 제공할 수 있습니다.

`<video>` 요소도 다른 자원을 제공하는 관점에서 유사한 방식으로 동작합니다.

```html
<video controls>
  <source src="video/smaller.mp4" type="video/mp4" />
  <source src="video/smaller.webm" type="video/webm" />
  <source src="video/larger.mp4" type="video/mp4" media="(min-width: 800px)" />
  <source
    src="video/larger.webm"
    type="video/webm"
    media="(min-width: 800px)" />

  <!-- 영상 요소를 지원하지 않는 브라우저를 위한 대안 -->
  <a href="video/larger.mp4">download video</a>
</video>
```

그러나, 사진과 영상 자원을 제공하는 것에서 주요한 차이점이 있습니다.

- 위의 예제에서, `srcset` 요소가 아닌 `src` 요소를 사용하고 있습니다. `srcset` 요소로 영상 해상도를 다르게 지정할 수 없습니다.
- 대신, `<source>` 요소 내에서 해상도를 다르게 지정할 수 있습니다.
- `<source>` 요소에서 각기 다른 영상 확장자를 지정하는 방식에 주목하세요. `type` 특성 안에서 MIME 타입을 통해 확장자를 식별하고 있습니다. 브라우저는 미디어 쿼리 테스트에서 참을 반환하는 요소 중 브라우저에서 지원하는 첫 번째 요소를 로드합니다.

### 사진 지연 로딩

성능 향상을 위한 가장 유용한 기법은 **지연 로딩**입니다. HTML이 렌더될 때 모든 사진을 바로 불러오지 않는 관행을 의미합니다. 대신 사용자 뷰포트에서 사진이 보여지거나 바로 보일 때만 로드합니다. 이는 즉각적으로 보이고 사용할 수 있는 콘텐츠가 더 빠르게 준비되는 것을 의미함으로 후속 콘텐츠를 스크롤 할 때만 사진을 렌더링합니다. 브라우저는 사용자가 결코 보지 않을 사진을 로딩하는데 대역폭을 낭비하지 않을 것입니다.

지연 로딩은 역사적으로 JavaScript을 사용하여 다뤄져 왔습니다. 하지만 현재 브라우저는 `loading` 특성을 가지고 있습니다. 브라우저가 사진을 자동적으로 지연 로드 하도록 지시할 수 있습니다.

```html
<img src="800w.jpg" alt="Family portrait" loading="lazy" />
```

더 자세한 정보는 [웹을 위한 브라우저 단계 사진 지연 로딩](https://web.dev/articles/browser-level-image-lazy-loading) web.dev에서 확인할 수 있습니다.

영상 또한 `preload` 특성을 사용하여 지연 로드를 적용할 수 있습니다. 다음과 같은 예제가 있습니다.

```html
<video controls preload="none" poster="poster.jpg">
  <source src="video.webm" type="video/webm" />
  <source src="video.mp4" type="video/mp4" />
</video>
```

`preload` 값을 `none`으로 할당하는 것은 사용자가 영상 실행을 결정하기 전까지 브라우저에게 프리로드를 하지 말라고 전합니다. 이는 성능 향상에 확실히 좋습니다. 대신, `poster` 특성을 나타냄으로써 사진을 표시할 수 있습니다. 각 브라우저는 영상을 로딩하는 기본 방식이 서로 달라서, 동작 방식을 명시하는 것이 좋습니다.

더 자세한 정보는 [음성 및 영상 프리로드로 빠른 재생](https://web.dev/articles/fast-playback-with-preload) web.dev에서 확인할 수 있습니다.

## 삽입된 콘텐츠 다루기

콘텐츠가 다른 자원으로부터 웹 페이지에 삽입되는 것은 매우 흔한 일입니다. 이는 사이트에서 수익을 창출하기 위해 광고를 표시할 때 주로 이뤄집니다. 광고는 보통 제 3자의 회사에서 생성하여 페이지에 삽입됩니다. 다른 삽입 예시로는 다음과 같습니다.

- 사용자가 여러 페이지에서 필요할 수 있는 공유 콘텐츠를 표시하는 것, 예시로는 장바구니 또는 프로필 정보가 있습니다.
- 조직의 주요 사이트와 관련된 제 3자 콘텐츠를 표시하는 것, 예시로는 소셜 미디어 게시물 피드가 있습니다.

삽입되는 콘텐츠는 대부분 {{htmlelement("iframe")}} 요소를 사용합니다, 드물게 {{htmlelement("object")}}와 {{htmlelement("embed")}} 요소를 사용하기도 합니다. 이번 섹션에서는 `<iframe>` 요소에 관하여 알아보겠습니다.

`<iframe>` 요소를 사용하면서 가장 중요하고 주요한 조언 중 하나는 "반드시 필요한 경우가 아니면 `<iframe>` 요소를 사용하지 않는 것" 입니다. 여러 정보의 창을 가지고 있는 페이지를 해당 요소로 만들고 있다면, 분리한 페이지를 세분화하고 각각 다른 `<iframe>` 요소로 로드하는 것은 논리적이라고 생각할지도 모릅니다. 하지만, 이는 성능과 또 다른 관점에서 수 많은 문제를 불러 일으킵니다.

- `<iframe>` 요소에서 콘텐츠를 로딩하는 것은 동일 페이지 부분인 콘텐츠를 직접 로딩하는 것보다 훨씬 더 많은 비용이 듭니다. 콘텐츠를 로드하기 위한 추가적인 HTTP 요청이 필요할 뿐만 아니라, 브라우저는 각 콘텐츠마다 분리된 페이지 인스턴스를 생성해야 합니다. 각각의 인스턴스는 사실상 최상위 웹 페이지에 삽입된 개별적인 웹 페이지 입니다.
- 이전 관점을 따르면, 동일 출처에서 삽입된 페이지가 아닌 이상 CSS 스타일링이나 JavaScript 조작으로 각각의 `<iframe>` 요소를 다루어야 할 것입니다. 그리고 이것은 훨씬 더 복잡할 겁니다. 최상단 페이지에 적용된 CSS와 JavaScript로 삽입한 콘텐츠를 대상으로 할 수 없으며 그 반대의 경우도 마찬가지입니다. 이것은 웹에서 근본적으로 민감한 보안 지표입니다. 서드파티로 삽입된 콘텐츠가 임의로 아무 페이지의 스크립트를 실행할 수 있다면 각 페이지에 삽입된 콘텐츠로 인해 발생되는 모든 문제를 상상해보세요!
- 각 `<iframe>` 요소는 공유된 데이터와 미디어 파일을 개별적으로 로드해야 합니다. 다시 언급하자면, 삽입된 페이지는 동일 출처가 아닌 이상, 캐시된 자원을 다른 페이지에 삽입하여 공유할 수 없습니다. 개별로드 하지 않는 것은 예상보다 훨씬 더 많은 대역폭 사용을 초래할 수 있습니다.

단일 페이지에 콘텐츠를 삽입하는 것은 타당합니다. 페이지 변화에 동적으로 새로운 콘텐츠를 끌어 당기고 싶다면, `<iframe>` 요소를 삽입하는 것보다 동일 페이지에서 콘텐츠를 로드하는 것이 성능 측면에서 더 유리합니다. {{domxref("Window/fetch", "fetch()")}} 메서드를 사용하여 새로운 데이터를 가져 올 수 있습니다. 예를 들어, DOM 스크립팅을 사용하여 페이지에서 콘텐츠를 주입할 수 있습니다. 더 많은 정보는 [JavaScript로 네트워크 요청하기](/ko/docs/Learn_web_development/Core/Scripting/Network_requests)와 [DOM 스크립팅 소개](/ko/docs/Learn_web_development/Core/Scripting/DOM_scripting)에서 확인할 수 있습니다.

> [!NOTE]
> 콘텐츠를 조작하고 상대적으로 콘텐츠가 간단하다면, base-64 인코드 된 콘텐츠를 `<iframe>` 요소를 채우기 위해 `src` 특성에서 사용하거나, 원시 HTML을 `srcdoc` 특성에 삽입하는 것을 고려할 수 있습니다. 더 많은 정보는 [Iframe 두 번째 성능 파트: 좋은 소식](https://medium.com/slices-of-bread/iframe-performance-part-2-the-good-news-26eb53cea429)에서 확인할 수 있습니다.

`<iframe>` 요소를 사용해야 한다면, 최소한으로 사용하세요.

### iframes 지연 로딩

`<img>` 요소와 동일한 방식으로, `loading` 특성을 사용하여 초기 화면 밖에서 `<iframe>` 콘텐츠를 지연 로드하여 브라우저를 구축할 수 있습니다. 그럼으로써 성능 향상이 이뤄집니다.

```html
<iframe src="https://example.com" loading="lazy" width="600" height="400">
</iframe>
```

더 자세한 정보는 [화면 밖에 있는 iframes를 지연로드 해봐요!](https://web.dev/articles/iframe-lazy-loading)에서 확인해보세요.

## 자원 로딩 순서 조정하기

자원 로딩 순서를 정하는 것은 인지된 성능과 실제 성능을 최대화 하는데 중요합니다. 다음은 웹 페이지 로드 과정입니다.

1. HTML은 일반적으로 페이지에 나타나는 순서대로 먼저 분석됩니다.
2. CSS 파일이 발견되면, 페이지에 적용할 스타일을 알아내기 위해 분석됩니다. 이 과정에서, 사진과 웹 글꼴 같은 연동된 자원이 패치되기 시작합니다.
3. JavaScript 파일이 발견되면, 페이지에 맞춰 분석, 평가, 실행됩니다. 기본적으로 이 과정은 JavaScript가 있는 {{htmlelement("script")}} 요소와 마주친 이후에 나타나는 HTML 분석을 차단합니다.
4. 조금 나중에, 브라우저는 각각의 HTML 요소가 어떻게 스타일링 되어야 하는지 적용된 CSS를 전달 받아 산출합니다.
5. 스타일이 적용된 결과는 화면에 페인트됩니다.

> [!NOTE]
> 이 과정은 무엇이 일어나는지 많이 요약된 설명으로 대략적으로 감을 잡게 해줍니다.

다양한 HTML 기능은 자원 로딩의 성능 향상을 어떻게 이루는지 수정하도록 해줍니다. 지금부터 알아보겠습니다.

### JavaScript 로딩 다루기

파싱되고 있고 실행 중인 JavaScript는 후속 DOM 콘텐츠 파싱을 차단합니다. 이는 콘텐츠가 사용자 페이지에 렌더링되고 사용 가능해질 때까지 시간을 지연시킵니다. 작은 스크립트는 큰 차이를 만들지 않지만, 최신 웹 애플리케이션은 JavaScript가 아주 무거운 경향이 있어 고려해야 합니다.

기본적인 JavaScript 파싱 특성으로 또 다른 사이드 이펙트가 있습니다. 페이지에서 렌더링되고 있는 스크립트가 추후에 나타나는 DOM 콘텐츠에 의존적이라면 오류를 발생시킬 수 있습니다.

예를 들어, 페이지에서 간단한 상황을 상상해보세요.

```html
<p>My paragraph</p>
```

JavaScript 파일은 다음과 같은 코드를 포함하고 있다고 생각하세요.

```js
const pElem = document.querySelector("p");

pElem.addEventListener("click", () => {
  alert("You clicked the paragraph");
});
```

이 스크립트를 `<script>` 요소로 참조하여 페이지에 다음과 같이 적용할 수 있습니다.

```html
<script src="index.js"></script>
```

자원 순서에 따라 {{htmlelement("head")}} 요소 안에 배치하듯이 `<p>` 요소 앞에 `<script>` 요소를 배치하면, 페이지는 오류를 발생시킬 것입니다. Chrome인 경우 "Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')" 오류를 콘솔로 출력합니다. 이는 스크립트가 동작하기 위해 `<p>` 요소에 의존하고 있으며 스크립트가 분석되는 지점에서 `<p>` 요소는 페이지에 존재하지 않기 때문입니다. 해당 요소는 아직 렌더링되지 않았습니다.

해당 이슈는 문서 본문 마지막에 배치하듯이 `<p>` 요소 다음에 `<script>` 요소를 배치하거나 적절한 이벤트 처리기에서 코드를 실행시켜 해결할 수 있습니다. 예를 들어, DOM이 완전히 분석되었을 때 동작하는 [`DOMContentLoaded`](/ko/docs/Web/API/Document/DOMContentLoaded_event)에서 코드를 실행할 수 있습니다.

하지만, 이는 로드되는 스크립트를 대기시키는 문제를 해결하지 않습니다. 더 좋은 성능 향상은 `<script>` 요소에 `async` 특성을 추가함으로써 달성할 수 있습니다.

```html
<script async src="index.js"></script>
```

해당 특성은 DOM 분석과 스크립트를 병렬로 가져와 동시에 준비하므로 렌더링을 차단하지 않으며, 이에 따라 성능 향상을 이룹니다.

> [!NOTE]
> 또 다른 특성인 `defer`가 있습니다. 문서가 분석된 후에 스크립트를 실행시키지만 `DOMContentLoaded` 동작 전에 이뤄집니다. 이는 `async` 효과와 유사합니다.

또 다른 JavaScript 로드를 다루는 팁은 모든 코드를 하나의 거대한 스크립트로 모으고 초기에 모든 스크립트를 로딩하는 대신에 스크립트를 코드 모듈로 나눠 필요한 곳에서 개별 로드하는 것입니다. 이는 [JavaScript 모듈](/ko/docs/Web/JavaScript/Guide/Modules)을 사용하며 수행됩니다. 자세한 안내는 링크가 첨부된 글에서 확인할 수 있습니다.

### rel="preload" 되어 있는 콘텐츠 프리로딩 하기

HTML, CSS, JavaScript와 연관된 사진이나 글꼴 파일 같은 자원을 패칭하는 것은 코드 실행을 막고 사용자 경험을 저하하는 성능 문제를 발생시킬 수 있습니다. 이러한 문제를 완화하는 한 가지 방법은 `rel="preload"`를 사용하여 {{htmlelement("link")}} 요소를 프리로더로 변환하는 것입니다. 다음 예제와 같습니다.

```html
<link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
```

브라우저는 `rel="preload"` 링크를 보자마자 가능한 빠르게 참조된 자원을 패치하고 브라우저 캐시에서 사용 가능하도록 만듭니다. 해당 자원이 후속 코드에서 참조되었을 때, 사용자에게 곧바로 준비됩니다. 사용자가 페이지에서 가장 먼저 마주할 중요 자원을 프리로드 하는 것은 사용자 경험을 최대한 매끄럽게 하는데 유용합니다.

다음 기사에서 `rel="preload"` 사용에 관한 더 자세한 정보를 확인해보세요.

- [`rel="preload"`](/ko/docs/Web/HTML/Reference/Attributes/rel/preload)
- [로딩 속도를 개선하기 위한 중요한 자산 프리로드 하기](https://web.dev/articles/preload-critical-assets) web.dev 2020

> [!NOTE] > `rel="preload"`는 CSS와 JavaScript 파일에서도 사용할 수 있습니다.

> [!NOTE]
> 페이지 로딩의 다양한 측면을 향상시키기 위해 고안된 다른 [`rel`](/ko/docs/Web/HTML/Reference/Attributes/rel) 값이 있습니다. `dns-prefetch`, `preconnect`, `modulepreload`, `prefetch`, `prerender`가 있습니다. 링크가 첨부된 페이지로 가서 해당 값이 어떤 동작을 하는지 알아보세요.

## 같이 보기

- [JavaScript로 네트워크 요청하기](/ko/docs/Learn_web_development/Core/Scripting/Network_requests)
- [DOM 스크립팅 소개](/ko/docs/Learn_web_development/Core/Scripting/DOM_scripting)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/Javascript", "Learn_web_development/Extensions/Performance/CSS", "Learn_web_development/Extensions/Performance")}}
