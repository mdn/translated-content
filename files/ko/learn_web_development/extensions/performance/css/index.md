---
title: CSS 성능 최적화
slug: Learn_web_development/Extensions/Performance/CSS
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}

웹 사이트를 개발할 때, 브라우저가 사이트에서 CSS를 처리하는 방식을 고려해야 합니다. CSS가 원인이 되는 성능 이슈를 완화하기 위해서는, CSS를 최적화 해야 합니다. 예를 들어, [렌더링 차단](/ko/docs/Glossary/Render_blocking)을 완화하려면 CSS를 최적화 해야 하고 리플로우 횟수를 최소화 해야 합니다. 이번 글에서는 주요한 CSS 성능 최적화 기법을 살펴봅니다.

<table>
  <tbody>
    <tr>
      <th scope="row">사전 지식:</th>
      <td>
        <a
          href="/ko/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software"
          >기본 소프트웨어 설치</a
        >,
        <a href="/ko/docs/Learn_web_development/Getting_started/Your_first_website"
          >클라이언트 사이드 웹 기술</a
        >의 기본적인 지식
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        웹 사이트에서 미치는 CSS 영향과
        성능 향상을 위한 CSS를 최적화 방법을 배웁니다.
      </td>
    </tr>
  </tbody>
</table>

## 최적화 할 것인가, 하지 않을 것인가

CSS 최적화를 시작하기 전에 대답해야 하는 첫 번째 질문은 "어떤 부분을 최적화 할 것인가?"입니다. 아래에서 다루는 몇 가지 팁과 기법은 대부분 웹 프로젝트에서 좋은 영향을 주는 모범 사례이지만, 특정 상황에서만 필요한 경우도 있습니다. 모든 기법을 적용하려고 시도하는 것은 아마 불필요한 시간을 낭비할 수도 있습니다. 각 프로젝트에서 실제로 성능 최적화가 필요한 곳을 파악하는 것이 중요합니다.

이를 위해서는, 사이트 [성능 측정](/ko/docs/Learn_web_development/Extensions/Performance/Measuring_performance)을 할 필요가 있습니다. 위 링크에서 볼 수 있듯이, 정교한 [성능 API](/ko/docs/Web/API/Performance_API)를 포함해 성능을 측정하기 위한 몇 가지 다른 방법이 있습니다. 가장 쉽게 시작하는 방법은 브라우저에 내장되어 있는 [네트워크](/ko/docs/Learn_web_development/Extensions/Performance/Measuring_performance#network_monitor_tools)와 [성능](/ko/docs/Learn_web_development/Extensions/Performance/Measuring_performance#performance_monitor_tools) 도구 사용 방법을 배우고, 페이지 로딩 속도가 느린 부분을 찾아 최적화 하는 것입니다.

## 렌더링 최적화

브라우저는 특정한 렌더링 과정을 따릅니다. 페인트는 레이아웃이 완료된 후 발생하며, 레이아웃은 렌더 트리가 생성된 후 진행됩니다. 렌더 트리를 생성하려면 DOM과 CSSOM 트리가 모두 필요합니다.

사용자에게 스타일이 적용되지 않은 페이지를 보여주고 CSS가 분석된 이후에 다시 페인트를 하는 것은 좋지 않은 사용자 경험이 될 수 있습니다. 이러한 이유로, 브라우저는 필요한 CSS를 판별할 때까지 렌더링을 차단합니다. 브라우저는 CSS를 다운로드하고 [CSS 객체 모델 (CSSOM)](/ko/docs/Glossary/CSSOM)을 생성한 다음에 페이지를 페인트 할 수 있습니다.

CSSOM 생성을 최적화 하고 페이지 성능을 향상시키기 위해, 현재 CSS 상태에 따라 다음 중 한 가지 이상의 작업을 수행할 수 있습니다.

- **불필요한 스타일 제거하기**: 당연하게 들릴 수도 있지만 얼마나 많은 개발자들이 개발하는 동안 스타일시트를 추가하고 결국 사용하지 않는 CSS를 잊고 정리하지 않는 것은 놀랍습니다. 모든 스타일은 레이아웃 및 페인트 과정에서 사용되지 않더라도 분석됩니다. 따라서 사용하지 않는 스타일을 제거하면 페이지 렌더링 속도를 개선할 수 있습니다. [사이트에서 사용하지 않는 CSS를 어떻게 제거하나요?](https://css-tricks.com/how-do-you-remove-unused-css-from-a-site/) (csstricks.com, 2019) 요약에 따르면, 대규모 코드베이스에서는 해결하기 어려운 문제입니다. 또한, 확실하게 사용하지 않는 CSS를 찾아 제거하는 만능 해결책은 없습니다. CSS를 모듈화 하고 어떤 것을 추가하고 제거했는지 조심하고 신중함을 기울여야 합니다.

- **개별 모듈로 CSS 분리하기**: CSS를 모듈화하면 페이지 로드 시 필요하지 않은 CSS를 나중에 로드할 수 있어 초기 CSS의 렌더링 차단을 줄이고 로딩시간을 단축할 수 있습니다. 이를 가장 간단하게 구현하는 방법은 CSS를 개별 파일로 분리하고, 필요한 경우에만 로드하는 것입니다.

  ```html
  <!-- styles.css의 로딩 및 분석은 렌더링을 차단합니다 -->
  <link rel="stylesheet" href="styles.css" />

  <!-- print.css의 로딩 및 분석은 렌더링을 차단하지 않습니다 -->
  <link rel="stylesheet" href="print.css" media="print" />

  <!-- 큰 화면에서 mobile.css의 로딩 및 분석은 렌더링을 차단하지 않습니다. -->
  <link
    rel="stylesheet"
    href="mobile.css"
    media="screen and (max-width: 480px)" />
  ```

  위 예제에서는 세 가지 스타일 유형을 제공합니다. 기본적인 스타일은 항상 로드되고 하나는 문서가 인쇄될 때만 로드되고 다른 하나는 화면이 좁을 때 로드됩니다. 기본적으로, 브라우저는 각각 지정된 스타일 시트가 렌러딩을 차단한다고 가정합니다. 스타일 시트를 적용해야 하는 것을 브라우저에게 알리려면, [media query](/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries)가 포함되어 있는 `media` 특성을 추가하면 됩니다. 브라우저가 특정한 시나리오에서만 적용해야 하는 스타일 시트를 감지하면, 스타일 시트를 다운로드하지만 렌더링을 차단하지 않습니다. CSS를 여러 개의 파일로 분리하면, `styles.css` 같은 주요 렌더링 파일의 크기가 훨씬 작아져 렌더링이 차단되는 시간을 줄일 수 있습니다.

- **CSS를 경량하고 압축하기**: CSS를 경량화하는 것은, 프로덕션에 코드를 배포할 때 사람의 가독성만을 위한 불필요한 공백을 파일에서 전부 제거하는 것을 의미합니다. CSS를 경량화하면 로딩 시간을 크게 줄일 수 있습니다. 경량화는 일반적으로 빌드 과정에서 수행됩니다. 예를 들어, 대부분의 JavaScript 프레임워크는 프로젝트를 배포할 준비가 되었을 때 코드를 경량화합니다. 경량화 방법 외에도, 사이트를 호스팅하는 서버가 파일을 전달하기 전에 gizp 같은 압축 방식을 사용하도록 설정하세요.

- **선택자 단순화하기**: 사람들은 필요한 스타일을 적용할 때, 불필요하게 복잡한 선택자를 작성하는 경우가 많습니다. 이는 파일 크기 뿐만 아니라 선택자 파싱 시간도 증가시킵니다. 예를 들어, 다음과 같은 예제가 있습니다.

  ```css
  /* 아주 구체적인 선택자 */
  body div#main-content article.post h2.headline {
    font-size: 24px;
  }

  /* 아마도 이 선택자만 필요할 것입니다 */
  .headline {
    font-size: 24px;
  }
  ```

  선택자를 덜 복잡하고 덜 구체적으로 만드는 것은 유지보수에도 좋습니다. 간단한 선택자는 역할을 쉽게 이해할 수 있고 선택자가 덜 [구체적](/ko/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)이면 추후 스타일을 쉽게 덮어쓸 수 있습니다.

- **필요 이상으로 많은 요소에 스타일을 적용하지 마세요**: 흔한 실수는 [전체 선택자](/ko/docs/Web/CSS/Universal_selectors)를 사용하여 모든 요소 또는 필요 이상의 요소에 스타일을 적용하는 것입니다. 이러한 스타일링 방법은 특히 규모가 큰 사이트에서는 성능에 부정적인 영향을 줄 수 있습니다.

  ```css
  /* <body> 내부의 모든 요소를 선택합니다 */
  body * {
    font-size: 14px;
    display: flex;
  }
  ```

  {{cssxref("font-size")}} 같은 많은 속성은 부모 요소로부터 값을 상속받는다는 점을 기억하세요. 굳이 모든 요소에 속성을 적용할 필요는 없습니다. 그리고 [Flexbox](/ko/docs/Learn_web_development/Core/CSS_layout/Flexbox) 같은 강력한 도구는 신중하게 사용해야 합니다. 모든 곳에서 사용하는 것은 예기치 않은 동작을 일으키는 원인일 수 있습니다.

- **CSS 스프라이트로 사진 HTTP 요청 줄이기**: [CSS 스프라이트](https://css-tricks.com/css-sprites/)는 아이콘 같은 사이트에서 사용하려는 여러 작은 사진을 하나의 파일에 배치하고 각각 다른 위치에서 필요한 이미지 부분을 표시하도록, 각기 다른 {{cssxref("background-position")}} 값을 사용하여 각 위치에 필요한 사진 부분을 표시하는 기법입니다. 이 기법은 패칭한 사진을 불러오는 HTTP 요청 횟수를 극적으로 줄일 수 있습니다.

- **중요한 자원 프리로드 하기**: 중요한 자원을 위해 {{htmlelement("link")}} 요소가 프리로드로 실행되도록 [`rel="preload"`](/ko/docs/Web/HTML/Reference/Attributes/rel/preload)를 사용할 수 있습니다. 여기에는 CSS 파일, 글꼴, 사진이 포함됩니다.

  ```html
  <link rel="preload" href="style.css" as="style" />

  <link
    rel="preload"
    href="ComicSans.woff2"
    as="font"
    type="font/woff2"
    crossorigin />

  <link
    rel="preload"
    href="bg-image-wide.png"
    as="image"
    media="(min-width: 601px)" />
  ```

  `preload`를 사용하면, 브라우저는 참조된 자원을 가능한 빠르게 패치하고 브라우저 캐시에서 사용 가능하도록 만들 것입니다. 그래서 브라우저가 후속 코드에서 자원을 참조할 때 자원이 사용자에게 곧바로 준비될 수 있도록 합니다. 사용자가 페이지에서 먼저 마주하고 우선순위가 높은 자원을 프리로드 하는 것은 유용하며, 사용자 경험은 최대한 매끄러워집니다. `media` 특성을 사용하여 반응형 프리로더를 만드는 방법에 주목하세요.

  [로딩 속도 개선을 위해 중요 자원 프리로드 하기](https://web.dev/articles/preload-critical-assets) web.dev (2020)에서 더 살펴보세요.

## 애니메이션 다루기

애니메이션은 인지된 성능을 향상시킬 수 있습니다. 인터페이스가 더 빠르게 느껴지게 하고 사용자가 페이지 로드를 기다릴 때 로딩 스피너와 같은 요소를 통해 진행 상황을 알려줍니다. 그러나, 더 크고 많은 애니메이션은 자연스럽게 더 많은 처리 능력을 요구합니다. 그리고 성능을 저하시킬 수 있습니다.

가장 간단한 조언은 불필요한 모든 애니메이션을 줄이는 것입니다. 사용자가 저전력 기기나 제한된 배터리 전력을 사용 중이라면 애니메이션을 끌 수 있는 제어 장치나 사이트 환경설정을 제공할 수 있습니다. 첫 페이지에서 애니메이션 적용 여부를 JavaScript로 제어할 수도 있습니다. [`prefers-reduced-motion`](/ko/docs/Web/CSS/@media/prefers-reduced-motion)이라는 미디어 쿼리가 있으며, 사용자의 애니메이션 OS 레벨 환경설정에 따라 선택적으로 애니메이션 스타일을 제공하거나 적용하지 않을 수 있습니다.

필수적인 DOM 애니메이션일 때, 가능한 경우 JavaScript 애니메이션 대신 [CSS 애니메이션](/ko/docs/Web/CSS/CSS_animations/Using_CSS_animations) 사용을 권장합니다. [웹 애니메이션 API](/ko/docs/Web/API/Web_Animations_API)는 JavaScript로 CSS 애니메이션에 직접 연결할 수 있는 방법을 제공합니다.

### 애니메이션 속성 선택하기

다음으로, 애니메이션 성능은 애니메이션을 적용하는 속성에 크게 의존합니다. 애니메이션을 적용할 때, 특정 속성은 [리플로우](/ko/docs/Glossary/Reflow)와 [리페인트](/ko/docs/Glossary/Repaint)를 일으키므로 피해야 합니다. 이러한 속성은 다음과 같습니다.

- 요소의 크기 변경, [`width`](/ko/docs/Web/CSS/Reference/Properties/width), [`height`](/ko/docs/Web/CSS/Reference/Properties/height), [`border`](/ko/docs/Web/CSS/Reference/Properties/border), [`padding`](/ko/docs/Web/CSS/Reference/Properties/padding)이 있습니다.
- 요소 위치 변경, [`margin`](/ko/docs/Web/CSS/Reference/Properties/margin), [`top`](/ko/docs/Web/CSS/top), [`bottom`](/ko/docs/Web/CSS/bottom), [`left`](/ko/docs/Web/CSS/left), [`right`](/ko/docs/Web/CSS/right)가 있습니다.
- 요소 레이아웃 조정, [`align-content`](/ko/docs/Web/CSS/Reference/Properties/align-content), [`align-items`](/ko/docs/Web/CSS/Reference/Properties/align-items), [`flex`](/ko/docs/Web/CSS/Reference/Properties/flex)가 있습니다.
- 요소 시각적 효과 추가, [`box-shadow`](/ko/docs/Web/CSS/box-shadow)가 있습니다.

현대 브라우저는 전체 페이지보다 문서의 변경된 부분만 리페인트 하는데 충분히 똑똑합니다. 결과적으로 더 큰 애니메이션은 성능에 더 큰 부담을 줍니다.

가능하다면, 리플로우나 리페인트를 일으키지 않는 속성으로 애니메이션을 하는 것이 더 좋습니다. 다음과 같습니다.

- [Transforms](/ko/docs/Web/CSS/CSS_transforms)
- [`opacity`](/ko/docs/Web/CSS/Reference/Properties/opacity)
- [`filter`](/ko/docs/Web/CSS/Reference/Properties/filter)

### GPU에서 애니메이션 적용하기

더 나아가 성능을 향상시키기 위해, 애니메이션을 메인 스레드에서 벗어나게 하고 합성과 관련된 GPU에서 처리하도록 옮기는 것을 고려해야 합니다. 이를 위해 브라우저가 자동으로 GPU에서 처리하도록 특정 애니메이션 유형을 선택해야 합니다. 다음과 같습니다.

- [`transform: translateZ()`](/ko/docs/Web/CSS/Reference/Properties/transform), [`rotate3d()`](/ko/docs/Web/CSS/transform-function/rotate3d)와 같은 3D 변환 애니메이션
- [`position: fixed`](/ko/docs/Web/CSS/Reference/Properties/position)와 같은 특정 속성이 적용된 애니메이션 요소
- [`will-change`](/ko/docs/Web/CSS/Reference/Properties/will-change) 속성이 적용된 요소. 아래서 자세히 살펴봅니다.
- 자신의 레이어에서 렌더링되는 특정 요소, [`<video>`](/ko/docs/Web/HTML/Reference/Elements/video), [`<canvas>`](/ko/docs/Web/HTML/Reference/Elements/canvas), [`<iframe>`](/ko/docs/Web/HTML/Element/iframe)이 있습니다.

GPU에서 애니메이션을 실행하면 특히 모바일에서 성능이 향상될 수 있습니다. 하지만, 애니메이션을 GPU로 옮기는 과정은 항상 간단한 것은 아닙니다. 이에 대한 유용하고 자세한 분석은 [CSS GPU 애니메이션: 올바르게 하기](https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/) smashingmagazine.com, 2016에서 확인해보세요.

## `will-change`로 요소 변경 최적화 하기

브라우저는 요소가 실제로 변경되기 전에 미리 최적화를 수행할 수도 있습니다. 이러한 최적화는 성능 부담이 큰 작업을 미리 수행함으로써 페이지 응답성을 향상시킬 수 있습니다. CSS [`will-change`](/ko/docs/Web/CSS/Reference/Properties/will-change) 속성은 요소가 어떻게 변경될지 브라우저에게 미리 알려줍니다.

> **주의** `will-change`는 기존 성능 문제를 해결하기 위한 최후의 수단으로 사용해야 합니다. 성능 문제가 발생할 것을 예상하고 사용하는 것은 권장되지 않습니다.

```css
.element {
  will-change: opacity, transform;
}
```

## 렌더링 차단 최적화 하기

CSS는 미디어 쿼리로 스타일을 특정 조건에 맞춰 범위를 지정할 수 있습니다. 미디어 쿼리는 반응형 웹 디자인에 중요하고 중요 렌더링 경로를 최적화 하는데 도움을 줍니다. 브라우저는 모든 스타일을 분석할 때까지 렌더링을 차단하지만 프린트 스타일시트 같은 사용하지 않는 스타일인 경우에는 렌더링을 차단하지 않습니다. 미디어 쿼리에 기반하여 CSS를 다수 파일로 분리함으로써, 사용되지 않는 CSS 다운로드를 하는 렌더링 차단을 예방할 수 있습니다. 논 블로킹 CSS 링크를 생성하려면, 프린트 스타일과 같이 바로 사용되지 않는 스타일을 별도의 파일로 분리하고 HTML 마크업에 [`<link>`](/ko/docs/Web/HTML/Reference/Elements/link) 요소를 추가한 후, 미디어 쿼리를 추가하세요. 이 경우, 해당 스타일시트는 프린트 스타일시트 상태로 지정됩니다.

```html
<!-- styles.css의 로딩 및 파싱은 렌더링을 차단합니다 -->
<link rel="stylesheet" href="styles.css" />

<!-- print.css의 로딩 및 파싱은 렌더링을 차단하지 않습니다. -->
<link rel="stylesheet" href="print.css" media="print" />

<!-- 큰 화면에서 mobile.css의 로딩 및 파싱은 렌더링을 차단하지 않습니다. -->
<link
  rel="stylesheet"
  href="mobile.css"
  media="screen and (max-width: 480px)" />
```

기본적으로, 브라우저는 각각의 특정 스타일 시트를 렌더링 차단하도록 추정합니다. [media query](/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries)로 `media` 특성을 추가하여 언제 스타일 시트가 적용되어야 하는지 브라우저에게 알려줄 수 있습니다. 브라우저가 특정 상황에서만 필요한 스타일 시트임을 인식하면, 해당 파일을 로드하더라도 렌더링을 차단하지 않습니다. CSS를 여러 파일로 분리하면, 렌더링 차단이 발생하는 주요 스타일 시트 `styles.css` 파일 크기를 훨씬 더 줄일 수 있어 렌더링 차단 시간이 단축됩니다.

## 글꼴 성능 개선하기

이 섹션에서는 웹 글꼴의 성능을 향상시키는 유용한 팁을 포함하고 있습니다.

일반적으로, 사이트에서 사용하려는 글꼴에 관해 신중하게 생각하세요. 일부 글꼴 파일은 용량이 수 메가바이트 이상으로 매우 클 수 있습니다. 시각적 효과를 위해 많은 글꼴 사용을 시도할 수 있지만, 페이지 로드는 상당히 느려질 수 있고 사이트가 어수선해 보이는 원인일 수 있습니다. 아마 두 세 개의 글꼴만 필요로 할 겁니다. 그리고 [웹 안전 글꼴](/ko/docs/Learn_web_development/Core/Text_styling/Fundamentals#web_safe_fonts)을 사용하면 더 적게 사용할 수 있습니다.

### 글꼴 로딩

글꼴은 [`font-family`](/ko/docs/Web/CSS/font-family) 속성을 사용하여 요소에 실제로 적용될 때만 로드된다는 것을 명심하세요. [`@font-face`](/ko/docs/Web/CSS/@font-face) 규칙을 사용하여 처음 참조된다고 해서 글꼴이 로드되는 것은 아닙니다.

```css
/* 글꼴은 여기서 로드되지 않습니다 */
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
}

h1,
h2,
h3 {
  /* 실제로 여기서 로드됩니다 */
  font-family: "Open Sans";
}
```

그러므로 중요한 글꼴을 먼저 불러오기 위해 `rel="preload"`를 사용하는 것은 유익할 수 있습니다. 이렇게 하면 실제로 글꼴이 필요할 때 더 빨리 사용할 수 있게 됩니다.

```html
<link
  rel="preload"
  href="OpenSans-Regular-webfont.woff2"
  as="font"
  type="font/woff2"
  crossorigin />
```

이 방법은 `font-family` 선언이 외부의 큰 스타일시트 안에 숨겨져 있고 분석 과정에서 상당히 늦게 적용될 경우 더욱 유익할 수 있습니다. 그러나 글꼴 파일이 상당히 크기 때문에, 다수의 파일을 프리로드 하면 다른 자원의 로드가 지연될 수 있는 점을 감안해야 합니다.

다음 사항도 고려해볼 수 있습니다.

- [`rel="preconnect"`](/ko/docs/Web/HTML/Attributes/rel/preconnect)를 사용하여 글꼴 제공자와 미리 연결할 수 있습니다. 자세한 사항은 [주요한 제 3의 출처와 사전 연결하기](https://web.dev/articles/font-best-practices#preconnect_to_critical_third-party_origins)에서 살펴보세요.
- [CSS 글꼴 로딩 API](/ko/docs/Web/API/CSS_Font_Loading_API)를 사용하여 JavaScript로 글꼴 로딩을 사용자 정의할 수 있습니다다.

### 필요한 글리프만 로딩하기

본문 문구에 사용할 글꼴을 선택할 때, 특히 사용자가 생성한 콘텐츠나 여러 언어를 포함하는 콘텐츠를 다룬다면 어떤 글리프가 사용될지 확신하기 어렵습니다.

그러나, 제목이나 특정 문장 부호와 같이 사용할 글리프 집합을 구체적으로 알고 있다면, 브라우저가 다운로드해야 하는 글리프 수를 제한할 수 있습니다. 이는 필요한 글리프만 포함된 글꼴 파일을 생성하는 방식으로 이루어집니다. 이 과정을 [부분 집합화](https://fonts.google.com/knowledge/glossary/subsetting)라고 합니다. 그런 다음 [`unicode-range`](/ko/docs/Web/CSS/@font-face/unicode-range) `@font-face` 설명자를 사용하여 언제 하위 집합 글꼴을 사용할지 지정할 수 있습니다. 페이지가 이 범위에서 포함된 글자를 사용하지 않으면, 해당 글꼴을 다운로드하지 않습니다.

```css
@font-face {
  font-family: "Open Sans";
  src: url("OpenSans-Regular-webfont.woff2") format("woff2");
  unicode-range: U+0025-00FF;
}
```

### `font-display` 설명자로 글꼴 표시 동작 정의하기

`@font-face` 규칙에 적용되는 [`font-display`](/ko/docs/Web/CSS/@font-face/font-display) 설명자는 브라우저가 글꼴 파일을 어떻게 로드하고 표시할지 정의합니다. 그리고 글꼴이 로드되거나 로드되지 않을 때, 폴백 글꼴로 나타나게 합니다. 이렇게 하면 빈 화면 대신 글자를 보여줌으로써 성능을 향상시키지만, 스타일되지 않은 글자가 잠시 나타나는 절충이 발생합니다.

```css
@font-face {
  font-family: someFont;
  src: url(/path/to/fonts/someFont.woff) format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## CSS containment로 스타일링 재계산 최적화하기

[CSS containment](/ko/docs/Web/CSS/CSS_containment) 모듈에서 정의한 속성을 사용하면 브라우저에게 페이지의 다른 부분들을 독립적으로 격리하고 렌더링을 최적화하도록 지시할 수 있습니다. 이를 통해 개별 부분 렌더링 성능을 향상시킬 수 있습니다. 하나의 예시로, 뷰포트에 보이기 전까지 특정 컨테이너를 렌더링하지 않도록 브라우저에 지시할 수 있습니다.

{{cssxref("contain")}} 속성은 저자가 페이지의 개별 컨테이너에 적용할 [containment 유형](/ko/docs/Web/CSS/CSS_containment/Using_CSS_containment)을 정확하게 지정할 수 있게 합니다. 이를 통해 브라우저는 DOM의 제한된 부분에 대해 레이아웃, 스타일, 페인트, 크기 또는 이들의 조합을 재계산할 수 있습니다.

```css
article {
  contain: content;
}
```

{{cssxref("content-visibility")}} 속성은 유용하고 손쉬운 방법입니다. 이 속성은 저자가 컨테이너의 설정에서 강력한 격리 설정을 적용하도록 하고 브라우저가 필요할 때까지 해당 컨테이너들을 레이아웃하고 렌더링하지 않도록 지정합니다.

두 번째 속성인 {{cssxref("contain-intrinsic-size")}}도 사용 가능합니다. 이 속성은 컨테이너가 격리 효과를 받는 동안 자리 표시자 크기를 제공할 수 있게 해줍니다. 즉, 콘텐츠가 아직 렌더링되지 않았더라도 컨테이너가 공간을 차지하게 되어, 요소가 렌더링 되고 화면에 나타날 때 스크롤바 이동과 버벅거림 없이 성능 최적화를 구현할 수 있습니다.이 속성은 콘텐츠가 로드될 때 사용자 경험을 개선합니다.

```css
article {
  content-visibility: auto;
  contain-intrinsic-size: 1000px;
}
```

## 같이 보기

- [CSS 애니메이션 성능](/ko/docs/Web/Performance/CSS_JavaScript_animation_performance)
- [글꼴 모범 예제](https://web.dev/articles/font-best-practices) web.dev (2022)
- [content-visibility: 렌더링 성능을 개선하는 새로운 CSS 속성](https://web.dev/articles/content-visibility) web.dev (2022)

{{PreviousMenuNext("Learn_web_development/Extensions/Performance/html", "Learn_web_development/Extensions/Performance/business_case_for_performance", "Learn_web_development/Extensions/Performance")}}
