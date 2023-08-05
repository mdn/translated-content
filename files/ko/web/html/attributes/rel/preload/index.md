---
title: "링크 유형: preload"
slug: Web/HTML/Attributes/rel/preload
---

{{HTMLSidebar}}

{{htmlelement("link")}} 요소의 [`rel`](/ko/docs/Web/HTML/Element/link#rel) 특성의 `preload` 값은 HTML의 {{htmlelement("head")}}에서 가져오기 요청을 선언할 수 있게 해주며, 페이지에서 즉시 필요로 할 리소스를 명시할 수 있습니다. 이러한 리소스는 브라우저의 주요 렌더링 절차가 개입하기 전에 페이지 생명주기의 초기에서 불러오고자 하는 리소스입니다. 이는 해당 리소스들을 더 빨리 사용할 수 있게 하고, 페이지의 렌더링을 막을 가능성이 낮아져 성능이 향상됩니다.

## 기본

페이지를 스타일링하기 위해 주로 다음과 같이 `<link>`를 이용해 CSS 파일을 로드할 것입니다.

```html
<link rel="stylesheet" href="styles/main.css" />
```

하지만 여기서는 `<link>`를 원하는 어떤 리소스에도 사용 가능한 프리로더로 바꿔주는 `preload`의 `rel` 값을 사용하겠습니다. 동시에 다음 사항도 명시해야 합니다.

- [`href`](/ko/docs/Web/HTML/Element/link#href) 특성에 리소스의 경로를 명시해야 합니다.
- [`as`](/ko/docs/Web/HTML/Element/link#as) 특성에 리소스의 유형을 명시해야 합니다.

이와 같은 간단한 예제를 구성할 수 있습니다. ([JavaScript 및 CSS 예제 소스](https://github.com/mdn/html-examples/tree/master/link-rel-preload/js-and-css)와, and [라이브 예제](https://mdn.github.io/html-examples/link-rel-preload/js-and-css/)도 참고하세요):

```html
<head>
  <meta charset="utf-8" />
  <title>JavaScript 및 CSS 예제 소스</title>

  <link rel="preload" href="style.css" as="style" />
  <link rel="preload" href="main.js" as="script" />

  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <h1>bouncing balls</h1>
  <canvas></canvas>

  <script src="main.js" defer></script>
</body>
```

여기서는 페이지의 렌더링 과정에 CSS와 JavaScript 파일이 필요할 때 즉시 사용할 수 있도록 프리로드했습니다. 이 예제는 브라우저가 `<link rel="stylesheet">` 요소와 `<script>` 요소가 프리로드 요소임을 동일한 HTML 청크에서 발견하기 때문에 단순해 보이지만, 다음의 경우처럼 리소스가 늦게 발견되거나 크기가 클수록 프리로드의 이점은 더욱더 명확해집니다.

- 폰트, 이미지 등 CSS 내부에서 명시된 리소스.
- JSON, import된 스크립트, 웹 워커 등 JavaScript가 요청할 수 있는 리소스.
- 크기가 더 큰 이미지와 비디오 파일.

`preload`는 또다른 장점을 가지고 있습니다. `as`를 이용해 특정한 유형의 콘텐츠를 프리로드하도록 지정하면 브라우저는 다음과 같은 작업을 할 수 있습니다.

- 리소스의 우선순위를 더욱 정확하게 지정할 수 있습니다.
- 캐시에 리소스를 저장하여 추후 요청에 적절하게 재사용할 수 있습니다.
- 리소스에 대해 올바른 [콘텐츠 보안 정책](/ko/docs/Web/HTTP/CSP)을 적용할 수 있습니다.
- 리소스에 대해 올바른 {{HTTPHeader("Accept")}} 요청 헤더를 설정할 수 있습니다.

### 어떤 유형의 콘텐츠를 프리로드 할 수 있나요?

다양한 유형의 콘텐츠를 프리로드할 수 있습니다. `as` 특성으로 지정 가능한 값은 다음과 같습니다.

- `audio`: 주로 {{htmlelement("audio")}}에서 쓰이는 오디오 파일.
- `document`: {{htmlelement("frame")}} 혹은 {{htmlelement("iframe")}}에 의해 삽입되는 문서.
- `embed`: {{htmlelement("embed")}} 요소 내부에 삽입되는 리소스.
- `fetch`: ArrayBuffer 혹은 JSON 파일 등의 fetch 요청이나 XHR 요청에 의해 액세스할 수 있는 리소스.
- `font`: 폰트 파일.
- `image`: 이미지 파일.
- `object`: {{htmlelement("object")}} 요소 내부에 삽입되는 리소스.
- `script`: JavaScript 파일.
- `style`: CSS 스타일시트.
- `track`: WebVTT 파일.
- `worker`: JavaScript 웹 워커 혹은 공유 워커.
- `video`: 주로 {{htmlelement("video")}}에 사용되는 비디오 파일.

> **참고:** `video`를 프리로딩하는 것은 프리로드 스펙에 포함되어 있지만 현재 브라우저에는 구현되지 않았습니다.

> **참고:** 브라우저에서 사용될 수 있는 이러한 값들과 웹의 기능에 대한 더 자세한 내용은 프리로드 스펙에 기재되어 있습니다. - [link 요소 확장](https://w3c.github.io/preload/#link-element-extensions)을 참고하세요. 또한, `as` 특성에 사용할 수 있는 값들의 전체 목록은 Fetch 스펙에 의해 관리되고 있음을 참고하세요 - [요청 대상](https://fetch.spec.whatwg.org/#concept-request-destination)을 참고하세요.

## MIME 타입 포함하기

`<link>` 요소는 [`type`](/ko/docs/Web/HTML/Element/link#type) 특성을 가질 수 있는데, 이 특성은 `<link>` 요소가 가리키고 있는 리소스의 MIME 타입을 포함하고 있습니다. 이는 리소스를 프리로드하는 데 특히 유용합니다. 브라우저는 `type` 특성의 값을 사용하여 해당 리소스를 지원할 때에만 작업을 수행하거나 다운로드하고, 지원하지 않는다면 무시하기 때문입니다.

비디오 예제([전체 소스 코드](https://github.com/mdn/html-examples/tree/master/link-rel-preload/video)를 참고하세요)와 아래 나와있는 코드로 만들어진 [라이브 예제](https://mdn.github.io/html-examples/link-rel-preload/video/)에서 이에 대한 예제를 볼 수 있습니다. 코드 조각은 바로 아래에 나와 있습니다. 또한, 모든 브라우저에서 비디오 프리로딩을 지원하는 것은 아니기 때문에 이 예제 코드로 모든 브라우저에서 프리로딩을 할 수 있는 것은 아니지만 프리로드의 근간을 이루는 핵심 동작을 전체적으로 볼 수 있습니다.

```html
<head>
  <meta charset="utf-8" />
  <title>비디오 프리로드 예제</title>

  <link rel="preload" href="sintel-short.mp4" as="video" type="video/mp4" />
</head>
<body>
  <video controls>
    <source src="sintel-short.mp4" type="video/mp4" />
    <source src="sintel-short.webm" type="video/webm" />
    <p>
      현재 브라우저는 HTML5를 지원하지 않습니다. 대신
      <a href="sintel-short.mp4">이 비디오 링크</a>를 사용하세요.
    </p>
  </video>
</body>
```

위 예제의 코드는 지원하는 브라우저에 한해 `video/mp4` 비디오를 프리로드합니다. 그리고 `video/mp4`를 지원하는 브라우저 사용자를 위해 `video/mp4`를 우선으로 사용하게 합니다({{htmlelement("source")}}에서 `video/mp4`가 첫 번째 항목이기 때문입니다). 이로 인해 비디오 플레이어가 `video/mp4`를 지원하는 브라우저 사용자에게 더 부드럽고 빠르게 반응할 수 있습니다.

또한, `video/mp4`와 `video/webm`을 모두 지원하는 브라우저 사용자의 경우 위 코드에 `<link rel="preload" href="sintel-short.webm" as="video" type="video/webm">` 요소가 추가된다면 `video/mp4`와 `video/webm` '모두' 프리로드될 것입니다(물론 브라우저에서는 실제로 두 유형의 비디오 중 하나만 보여질 것입니다).

따라서, 동일한 리소스에 대해 여러 개의 타입을 지정해 프리로드 하는 것은 권장되지 않습니다. 대신, 모범 사례는 가장 많은 사용자에게 해당될 것으로 예상되는 타입에 대해서만 프리로드하는 것입니다. 이 때문에 위 예제 코드에서는 `video/webm` 비디오에 대해 프리로드를 명시하지 않았습니다.

하지만, `video/webm`을 프리로딩하지 않는다고 해서 `video/webm` 비디오를 필요로 하는 경우에 이를 사용할 수 없는 것은 아닙니다. `video/mp4`를 지원하지 않지만 `video/webm`은 지원하는 브라우저 사용자들의 경우, 위 예시 코드에서 여전히 `video/webm` 비디오를 사용할 수 있습니다. 다만 다른 사용자들 중 대다수에게 `video/webm`을 불필요하게 프리로드하지 않은 채로 사용할 수 있다는 점입니다.

## CORS가 활성화된 fetch

[CORS](/ko/docs/Web/HTTP/CORS)가 활성화한 채로 리소스를 프리로드할 때([`fetch()`](/ko/docs/Web/API/fetch), [`XMLHttpRequest`](/ko/docs/Web/API/XMLHttpRequest), [fonts](/ko/docs/Web/CSS/@font-face) 등), [`crossorigin`](/ko/docs/Web/HTML/Element/link#crossorigin) 특성을 [`<link>`](/ko/docs/Web/HTML/Element/link) 요소에 지정했는지 세심하게 살펴봐야 합니다. 이 특성은 교차 출처 요청이 아닌 경우에도 해당 리소스의 CORS와 credentials 모드를 일치시키기 위해 지정해야 하는 특성입니다.

위에서 언급된 것과 같이, 폰트 파일을 로딩하는 것이 이와 관련된 흥미로운 사례입니다. 여러 이유로 인해, 폰트 파일은 익명 모드 CORS를 통해 요청 되어야 합니다([폰트 요청 조건](https://drafts.csswg.org/css-fonts/#font-fetching-requirements)를 참고하세요).

이 경우를 아래 예제에서 다뤄보겠습니다. [GitHub에 업로드된 전체 코드](https://github.com/mdn/html-examples/tree/master/link-rel-preload/fonts)를 참고하세요([라이브 예제](https://mdn.github.io/html-examples/link-rel-preload/fonts/)로도 볼 수 있습니다).

```html
<head>
  <meta charset="utf-8" />
  <title>웹 폰트 예제</title>

  <link
    rel="preload"
    href="fonts/cicle_fina-webfont.woff2"
    as="font"
    type="font/woff2"
    crossorigin />
  <link
    rel="preload"
    href="fonts/zantroke-webfont.woff2"
    as="font"
    type="font/woff2"
    crossorigin />

  <link href="style.css" rel="stylesheet" />
</head>
<body>
  …
</body>
```

위 예제에서는 `type` 특성에 MIME 타입 힌트를 제공했을 뿐만 아니라, 프리로드의 CORS 모드를 최종 폰트 리소스 요청과 확실하게 일치시키기 위해 `crossorigin` 특성도 지정했습니다.

## 미디어 포함하기

`<link>` 요소의 한 가지 멋진 기능은 [`media`](/ko/docs/Web/HTML/Element/link#media) 특성을 포함할 수 있다는 것입니다. `<link>`는 [미디어 타입](/ko/docs/Web/CSS/@media#media_types) 혹은 완전한 [미디어 쿼리](/ko/docs/Web/CSS/Media_Queries/Using_media_queries)를 포함할 수 있기 때문에 반응형 프리로드를 할 수 있습니다.

예제를 살펴보겠습니다(GitHub에서 [소스 코드](https://github.com/mdn/html-examples/tree/master/link-rel-preload/media)와 [라이브 예제](https://mdn.github.io/html-examples/link-rel-preload/media/)를 참고하세요).

```html
<head>
  <meta charset="utf-8" />
  <title>반응형 프리로드 예제</title>

  <link
    rel="preload"
    href="bg-image-narrow.png"
    as="image"
    media="(max-width: 600px)" />
  <link
    rel="preload"
    href="bg-image-wide.png"
    as="image"
    media="(min-width: 601px)" />

  <link rel="stylesheet" href="main.css" />
</head>
<body>
  <header>
    <h1>내 사이트</h1>
  </header>

  <script>
    var mediaQueryList = window.matchMedia("(max-width: 600px)");
    var header = document.querySelector("header");

    if (mediaQueryList.matches) {
      header.style.backgroundImage = "url(bg-image-narrow.png)";
    } else {
      header.style.backgroundImage = "url(bg-image-wide.png)";
    }
  </script>
</body>
```

위 예제에서는 사용자가 좁은 폭의 뷰포트를 가지고 있는 경우 작은 이미지를 프리로드하고, 넓은 폭의 뷰포트를 가지고 있는 경우 더 큰 이미지를 프리로드하기 위해 `<link>` 요소에 `media` 특성을 포함했습니다. 이를 위해 {{domxref("Window.matchMedia")}} / {{domxref("MediaQueryList")}}를 사용했습니다(더 상세한 내용은 [미디어 쿼리 테스트하기](/ko/docs/Web/CSS/Media_Queries/Testing_media_queries)를 참고하세요).

위 방법은 폰트가 페이지가 렌더링될 때 사용 가능하도록 만들어 FOUT(스타일이 적용되지 않은 텍스트가 잠시 표출되는 현상)을 줄입니다.

또한 위 방법은 이미지에 국한될 필요가 없고, 반드시 같은 유형의 파일끼리만 사용할 수 있는 것도 아닙니다. 더 넓게 생각해보세요! 대역폭과 CPU가 특히 더 제한적일 수 있는 좁은 화면으로 접속한 사용자가 있다면 단순한 SVG 도형을 프리로드해서 보여주거나, 충분한 대역폭과 CPU를 가진 사용자에게는 복잡한 JavaScript 청크를 프리로드하여 상호작용이 가능한 3D 모델을 렌더링할 수도 있을 것입니다.

## 스크립팅과 프리로드

이러한 프리로드의 또 다른 멋진 점은 JavaScript를 통해 프리로드를 할 수 있다는 점입니다. 예를 들어, {{domxref("HTMLLinkElement")}} 인스턴스를 생성해 이를 DOM에 부착해보겠습니다.

```js
var preloadLink = document.createElement("link");
preloadLink.href = "myscript.js";
preloadLink.rel = "preload";
preloadLink.as = "script";
document.head.appendChild(preloadLink);
```

이는 브라우저가 `myscript.js` 파일을 프리로드할 것이지만 아직 사용하지는 않았음을 의미합니다. 파일을 사용하려면, 다음과 같이 할 수 있습니다.

```js
var preloadedScript = document.createElement("script");
preloadedScript.src = "myscript.js";
document.body.appendChild(preloadedScript);
```

이 방법은 스크립트를 프리로드하고 싶지만, 실제 이 스크립트를 필요로 할 때까지 실행을 늦추려고 할 때 유용합니다.

## 다른 리소스 프리로딩 작동 방식

다른 프리로딩 관련 기능이 존재하기는 하지만, `<link rel="preload">` 만큼 목적에 잘 부합하는 기능은 없습니다.

- `<link rel="prefetch">`는 여러 브라우저들에서 오랫동안 지원되어 왔지만, 이는 **다음** 페이지 이동이나 페이지 로드에 사용될 리소스를 프리로딩하기 위한 목적이었습니다(예를 들어, 다음 페이지로 이동할 때). 이 역시 훌륭하지만, 현재 페이지에는 유용한 것은 아닙니다! 게다가, 브라우저는 `prefetch` 리소스에게 `preload` 리소스보다 더 낮은 우선순위를 부여할 것입니다. 현재 페이지가 다음 페이지보다 더 중요하기 때문이죠. 더 상세한 내용을 보려면 [링크 프리페칭 FAQ](/ko/docs/Web/HTTP/Link_prefetching_FAQ)를 참고하세요.
- `<link rel="prerender">`는 특정한 웹 페이지를 백그라운드에서 렌더링해 사용자가 해당 페이지에 접근할 때의 로딩 속도를 높입니다. 이는 사용자의 대역폭을 낭비할 가능성이 있기 때문에, Chrome은 `prerender`를 [NoState prefetch](https://developer.chrome.com/blog/nostate-prefetch/)로 대신 간주합니다.
- `<link rel="subresource">` {{non-standard_inline}}은 Chrome에서 예전에 `preload`와 같은 문제를 해결하기 위해 지원됐지만, 한 가지 문제가 있었습니다. 항목에 대한 우선순위를 지정할 방법이 없었습니다(당시는 `as`가 존재하지 않았습니다). 따라서 이를 사용한 리소스는 동일하게 낮은 우선순위로 불러와졌습니다.
- 다양한 스크립트 기반의 리소스 로더들이 나와 있지만, 그 어떤 로더도 브라우저의 fetch 우선순위 큐보다 강력한 파워를 가지지는 못했을 뿐만 아니라, 성능 문제가 발생할 가능성이 높습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/) by Yoav Weiss
