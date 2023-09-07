---
title: 반응형 이미지
slug: Learn/HTML/Multimedia_and_embedding/Responsive_images
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}

이 글에서는 화면 크기, 해상도 및 기타 기능이 매우 다양한 기기에서 잘 작동하는 이미지인 반응형 이미지의 개념에 대해 알아보고 이를 구현하는 데 도움이 되는 HTML이 제공하는 도구를 살펴봅니다. 이를 통해 다양한 기기에서 성능을 개선할 수 있습니다. 반응형 이미지는 [반응형 디자인](/ko/docs/Learn/CSS/CSS_layout/Responsive_Design)의 한 부분일 뿐이며, 향후 학습해야 할 CSS 주제입니다.

<table class="learn-box nostripe standard-table">
  <tbody>
    <tr>
      <th scope="row">전제조건</th>
      <td>
        <a href="https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML">
          HTML의 기본 사항
        </a>
        과
        <a href="https://developer.mozilla.org/ko/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML">
          웹 페이지에 정적 이미지를 추가하는 방법
        </a>
        을 이미 알고 있어야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표</th>
      <td>
        <a href="/ko/docs/Web/HTML/Element/img#srcset">
          <code>srcset</code>
        </a>
        및 {{htmlelement("picture")}} 요소와 같은 기능을 사용하여 웹사이트에 반응형 이미지 솔루션을 구현하는 방법을 알아보세요.
      </td>
    </tr>
  </tbody>
</table>

## 왜 반응형 이미지를 사용해야 할까요?

일반적인 시나리오를 살펴봅시다. 일반적인 웹사이트에는 헤더 이미지와 헤더 아래에 일부 콘텐츠 이미지가 포함될 수 있습니다. 헤더 이미지는 헤더 너비 전체에 걸쳐 있고 콘텐츠 이미지는 콘텐츠 열 안쪽 어딘가에 위치할 가능성이 높습니다. 다음은 간단한 예입니다.

![와이드 스크린 화면에서 보았을 때 예제 사이트. 여기서는 첫번째 이미지는 화면이 크기 때문에 중앙의 얼굴을 볼 수 있을 정도로 크게 보여주기 때문에 잘 작동한다.](picture-element-wide.png)

노트북이나 데스크톱과 같은 와이드 스크린 장치에서 잘 작동합니다([실제 예시는 여기에 있고](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html), Github에서 [소스코드](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/not-responsive.html)를 볼 수 있습니다.) 이 단원에서는 CSS에 대해 자세히 설명하지 않지만, 다음 내용들은 알아둡시다.

- 본문 콘텐츠는 최대 너비가 1200픽셀로 설정되어 있으며, 이 너비를 초과하는 뷰포트에서는 본문이 1200픽셀로 유지되고 사용 가능한 공간의 중앙에 배치됩니다. 이 너비보다 작은 뷰포트에서는 본문이 뷰포트 너비의 100%로 유지됩니다.
- 헤더 이미지가 설정된 너비에 관계없이 항상 헤더의 중앙에 위치하도록 설정되었습니다. 좁은 화면에서 사이트를 보는 경우 이미지 중앙의 중요한 세부 사항(사람)은 여전히 볼 수 있으며 초과분은 양쪽에서 손실됩니다. 높이는 200픽셀입니다.
- 콘텐츠 이미지는 본문 요소가 이미지보다 작아지면 이미지가 축소되기 시작하여 이미지가 넘치지 않고 항상 본문 안에 유지되도록 설정되었습니다.

하지만 화면이 좁은 기기에서 사이트를 보기 시작하면 문제가 발생합니다. 아래 헤더는 괜찮아 보이지만 모바일 기기에서 화면 높이를 많이 차지하기 시작합니다. 그리고 이 크기에서는 첫 번째 콘텐츠 이미지에서 두 사람의 얼굴을 보기가 어렵습니다.

![좁은 화면에서 예제 사이트를 보았을 때. 여기서는 첫번째 이미지가 중앙의 얼굴을 보지 힘들 정도로 줄어들었다.](non-responsive-narrow.png)

좁은 화면에서 사이트를 볼 때 이미지의 중요한 세부 정보를 표시하는 이미지의 잘린 버전을 표시하는 것도 개선할 수 있습니다. 태블릿과 같은 중간 너비의 화면 장치에는 두 번째 잘린 이미지를 표시할 수 있습니다. 다양한 레이아웃에 대해 이러한 방식으로 서로 다른 자른 이미지를 제공하려는 일반적인 문제를 일반적으로 **아트 디렉션 문제(art direction problem)** 라고 합니다.

또한 모바일 화면에서 페이지를 보는 경우 페이지에 이렇게 큰 이미지를 삽입할 필요가 없습니다. 특히 모바일 사용자는 자신의 디바이스에 작은 이미지로 충분할 텐데 데스크톱 사용자용으로 큰 이미지를 다운로드하여 대역폭을 낭비하고 싶지 않을 것입니다. 반대로 작은 [래스터 이미지](/en-US/docs/Glossary/Raster_image)는 원래 크기보다 크게 표시되면 거칠게 보이기 시작합니다 (래스터 이미지는 [벡터 그래픽](/ko/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)에서 보았듯이 가로와 세로가 정해진 픽셀 수로 이루어진 이미지입니다). 이상적으로는 사용자의 웹 브라우저에서 여러 해상도를 사용할 수 있어야 합니다. 그러면 브라우저는 사용자 디바이스의 화면 크기에 따라 로드할 최적의 해상도를 결정할 수 있습니다. 이를 **해상도 전환 문제(resolution wsitching problem)** 라고 합니다.

상황을 더 복잡하게 생각하자면, 일부 기기에는 이미지를 제대로 보여주기 위해 예상보다 더 고해상도의 이미지가 필요한 고해상도 화면도 있습니다. 이것은 본질적으로 동일한 문제이지만 약간 다른 맥락에서 발생합니다.

벡터 이미지가 이러한 문제를 해결해 줄 것이라고 생각할 수도 있고, 실제로 어느 정도는 파일 크기가 작고 크기가 잘 조정되므로 가능한 한 벡터 이미지를 사용하는 것이 좋습니다. 하지만 모든 이미지 유형에 적합한 것은 아닙니다. 벡터 이미지는 단순한 그래픽, 패턴, 인터페이스 요소 등에는 적합하지만 사진에서 볼 수 있는 디테일이 있는 벡터 기반 이미지를 만들려면 매우 복잡해집니다. JPEG와 같은 래스터 이미지 형식은 위의 예시에서 볼 수 있는 종류의 이미지에 더 적합합니다.

웹이 처음 등장한 90년대 초중반에는 이러한 문제가 존재하지 않았습니다. 당시에는 웹을 탐색할 수 있는 기기가 데스크톱과 노트북뿐이었기 때문에 브라우저 엔지니어와 사양 작성자는 해결책을 구현할 생각조차 하지 못했죠. 반응형 이미지 기술은 위에서 언급한 문제를 해결하기 위해 최근에 구현된 기술로, 동일한 내용을 표시하지만 픽셀 수가 다른 여러 이미지 파일을 브라우저에 제공하거나(해상도 전환), 공간 할당에 적합한 다른 이미지를 제공(아트 디렉션)할 수 있도록 합니다.

> **참고:** 이 문서에서 설명하는 새로운 기능인 [srcset](/ko/docs/Web/HTML/Element/img#srcset)/[sizes](/ko/docs/Web/HTML/Element/img#sizes)/{{htmlelement("picture")}} 은 최신 데스크톱 및 모바일 브라우저에서 모두 지원됩니다.

## 반응형 이미지를 어떻게 만드나요?

이 섹션에서는 위에 예시된 두 가지 문제를 살펴보고 HTML의 반응형 이미지 기능을 사용하여 해결하는 방법을 보여드리겠습니다. 이 섹션에서는 위 예시의 콘텐츠 영역에서 볼 수 있듯이 사이트 헤더의 이미지는 장식용이므로 CSS 배경 이미지를 사용하여 구현된 {{htmlelement("img")}} 요소에 초점을 맞출 것입니다. [CSS에는 HTML보다 반응형 디자인을 위한 더 나은 도구](http://blog.cloudfour.com/responsive-images-101-part-8-css-images/)가 있으며, 이에 대해서는 향후 CSS 모듈에서 다룰 예정입니다.

### 해상도 전환: 다양한 크기

그렇다면 해상도 전환을 통해 해결하고자 하는 문제는 무엇일까요? 동일한 이미지 콘텐츠를 기기에 따라 더 크게 또는 더 작게 표시하고 싶을 때, 예시의 두 번째 콘텐츠 이미지가 이러한 상황입니다. 표준 {{htmlelement("img")}} 요소는 일반적으로 브라우저에서 단일 소스 파일만 가리킬 수 있습니다.

```html
<img src="elva-fairy-800w.jpg" alt="요정 옷을 입은 엘바" />
```

그러나 두 가지 속성([`srcset`](/ko/docs/Web/HTML/Element/img#srcset) 및 [`sizes`](/ko/docs/Web/HTML/Element/img#sizes))을 사용하여 브라우저가 올바른 이미지를 선택하는 데 도움이 되는 힌트와 함께 여러 개의 추가 소스 이미지를 제공할 수 있습니다. 이에 대한 예제는 GitHub의 [responsive.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) 예제에서 확인할 수 있습니다([소스 코드](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/responsive.html) 참조).

```html
<img
  srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"
  sizes="(max-width: 600px) 480px,
         800px"
  src="elva-fairy-800w.jpg"
  alt="요정 옷을 입은 엘바" />
```

`srcset` 및 `sizes` 속성은 복잡해 보이지만 위와 같이 각 줄에 속성 값의 다른 부분을 사용하여 형식을 지정하면 이해하기가 그리 어렵지 않습니다. 각 값은 쉼표로 구분된 목록을 포함하며, 각 목록의 각 부분은 세 개의 하위 부분으로 구성됩니다. 이제 각각의 내용을 살펴보겠습니다.

**`srcset`** 은 브라우저에서 선택할 수 있는 이미지 세트와 각 이미지의 크기를 정의합니다. 각 이미지 정보 세트는 쉼표로 이전 이미지와 구분됩니다. 각각에 대해 다음과 같이 작성합니다.

1. **이미지 파일 이름** (`elva-fairy-480w.jpg`.)
2. 공백
3. 이미지의 **고유 픽셀 너비** (`480w`). 예상하는 것처럼 `px` 단위가 아닌 `w` 단위를 사용한다는 점에 유의하세요. 이미지의 [고유 크기](/ko/docs/Glossary/Intrinsic_Size)는 컴퓨터에서 이미지 파일을 검사하여 확인할 수 있는 실제 크기입니다. 예를 들어 Mac의 경우 Finder에서 이미지를 선택한 다음 <kbd>Cmd</kbd> \+ <kbd>I</kbd> 를 눌러 정보 화면을 불러올 수 있습니다.

**`sizes`** 는 일련의 미디어 조건(예: 화면 너비)을 정의하고 특정 미디어 조건에 해당할 때 어떤 이미지 크기를 선택하는 것이 가장 좋을지 알려주는데, 이는 앞서 설명한 힌트입니다. 이 경우 각 쉼표 앞에 다음과 같이 작성합니다.

1. **미디어 조건** (`(max-width:600px)`). 이에 대한 자세한 내용은 [CSS 주제](/ko/docs/Learn/CSS)에서 배우겠지만, 지금은 미디어 조건이 화면이 될 수 있는 가능한 상태를 설명한다고 가정해 보겠습니다. 이 경우 "뷰포트 너비가 600픽셀 이하일 때"라고 말합니다.
2. 공백
3. 미디어 조건이 참(`480px`)일 때 이미지가 채울 **슬롯의 너비**입니다.

> **참고:** 슬롯 너비의 경우 절대 너비(예: `480px`)를 제공하는 대신 뷰포트에 대한 상대 너비(예: `50vw`)를 제공할 수 있지만 백분율은 제공하지 않습니다. 마지막 슬롯 너비에 미디어 조건이 없는 것을 보셨을 것입니다(미디어 조건이 모두 참일 때 선택되는 기본값입니다). 브라우저는 첫 번째 일치하는 조건 이후의 모든 것을 무시하므로 미디어 조건 순서에 주의해야 합니다.

따라서 이러한 속성을 설정하면 브라우저는 다음과 같이 작동합니다.

1. 기기 너비를 확인합니다.
2. `sizes` 목록에서 어떤 미디어 조건이 가장 먼저 참인지 알아냅니다.
3. 해당 미디어 쿼리에 지정된 슬롯 크기를 확인합니다.
4. 슬롯과 크기가 같은 `srcset` 목록에 참조된 이미지 또는 이미지가 없는 경우 선택한 슬롯 크기보다 큰 첫 번째 이미지를 로드합니다.

이제 끝입니다! 이 시점에서 뷰포트 너비가 480px인 지원 브라우저가 페이지를 로드하면 `(max-width: 600px)` 미디어 조건이 참이 되므로 브라우저는 `480px` 슬롯을 선택합니다. 고유의 너비(`480w`)가 슬롯 크기에 가장 가깝기 때문에 `elva-fairy-480w.jpg`가 로드됩니다. 800px 사진은 디스크에서 128KB인 반면 480px 버전은 63KB에 불과하므로 65KB를 절약할 수 있습니다. 이제 이 페이지에 많은 사진이 있다고 상상해 보세요. 이 기술을 사용하면 모바일 사용자의 대역폭을 크게 절약할 수 있습니다.

> **참고:** 데스크톱 브라우저에서 테스트할 때 창 너비를 가장 좁게 설정했는데도 브라우저에서 더 좁은 이미지를 로드하지 못하면 뷰포트의 크기를 살펴보세요. 브라우저의 JavaScript 콘솔로 이동하여 `document.querySelector('html').clientWidth`를 입력하면 대략적인 크기를 알 수 있습니다. 브라우저마다 창 너비를 줄일 수 있는 최소 크기가 있으며, 생각보다 더 넓을 수도 있습니다. 모바일 브라우저로 테스트할 때는 Firefox의 `about:debugging` 페이지와 같은 도구를 사용하여 데스크톱 개발자 도구를 사용하여 모바일에 로드된 페이지를 검사할 수 있습니다.
>
> 어떤 이미지가 로드되었는지 확인하려면 Firefox 개발자 도구의 [네트워크 모니터](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) 탭 또는 Chrome 개발자 도구의 [네트워크](https://developer.chrome.com/docs/devtools/network/) 패널을 사용하면 됩니다. Chrome의 경우 [캐시를 비활성화](https://stackoverflow.com/questions/5690269/disabling-chrome-cache-for-website-development/7000899#7000899)하여 이미 다운로드한 이미지를 선택하지 못하도록 할 수도 있습니다.

이러한 기능을 지원하지 않는 구형 브라우저는 이를 무시합니다. 대신 해당 브라우저는 [`src`](/ko/docs/Web/HTML/Element/img#src) 속성에 참조된 이미지를 정상적으로 로드합니다.

> **참고:** 위에 링크된 예제의 {{htmlelement("head")}}에 `<meta name="viewport" content="width=device-width">`라는 줄이 있는데, 이는 모바일 브라우저가 웹 페이지를 로드할 때 실제 뷰포트 너비를 적용하도록 합니다. 일부 모바일 브라우저는 뷰포트 너비를 속이고 더 큰 뷰포트 너비로 페이지를 로드한 다음 로드한 페이지를 축소하므로 반응형 이미지나 디자인에 도움이 되지 않습니다.

### 해상도 전환: 동일한 크기, 다른 해상도

여러 디스플레이 해상도를 지원하지만 모든 사람이 화면에서 동일한 실제 크기로 이미지를 보는 경우, 다소 쉬운 구문인 X-서술자 `sizes` 없이 `srcset`을 사용하여 브라우저가 적절한 해상도 이미지를 선택하도록 할 수 있습니다! [srcset-resolutions.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)에서 그 예시를 확인할 수 있습니다([소스 코드](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html) 참조).

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="요정 옷을 입은 엘바" />
```

![A picture of a little girl dressed up as a fairy, with an old camera film effect applied to the image](resolution-example.png)

이 예제에서는 이미지에 다음 CSS를 적용하여 화면 너비가 320픽셀(CSS 픽셀이라고도 합니다)이 되도록 합니다.

```css
img {
  width: 320px;
}
```

이 경우 `sizes`는 필요하지 않습니다. 브라우저는 표시되는 디스플레이의 해상도를 파악하여 `srcset`에 참조된 가장 적합한 이미지를 제공합니다. 따라서 페이지에 액세스하는 디바이스의 디스플레이 해상도가 표준/저해상도이고 각 CSS 픽셀당 디바이스 픽셀이 1개인 경우 `elva-fairy-320w.jpg` 이미지가 로드됩니다. 1x는 암시적이므로 포함할 필요가 없습니다. 디바이스의 해상도가 CSS 픽셀당 디바이스 픽셀이 2개 이상인 고해상도인 경우 `elva-fairy-640w.jpg` 이미지가 로드됩니다. 640픽셀 이미지는 93KB인 반면 320픽셀 이미지는 39KB에 불과합니다.

### 아트 디렉션

요약하자면, **아트 디렉션 문제**는 다양한 이미지 디스플레이 크기에 맞게 표시되는 이미지를 변경하려는 경우입니다. 예를 들어, 데스크톱 브라우저에서 볼 때 웹 페이지에 사람이 가운데에 있는 큰 풍경 사진이 포함되어 있다고 가정해 보겠습니다. 모바일 브라우저에서 볼 때는 동일한 이미지가 축소되어 이미지 속 사람이 매우 작아지고 잘 보이지 않습니다. 모바일에서는 인물을 확대하여 더 작은 세로형 이미지를 표시하는 것이 더 좋을 것입니다. {{htmlelement("picture")}} 요소를 사용하면 이러한 종류의 솔루션을 구현할 수 있습니다.

원래의 [not-responsive.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) 예제로 돌아가서 아트 디렉션이 절실히 필요한 이미지가 있습니다.

```html
<img src="elva-800w.jpg" alt="딸 엘바를 안고 서 있는 크리스" />
```

{{htmlelement("picture")}}으로 해결해 봅시다! [`<video>` 및 `<audio>`](/ko/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)와 마찬가지로 `<picture>` 요소는 브라우저가 선택할 수 있는 다양한 소스를 제공하는 여러 {{htmlelement("source")}} 요소를 포함하는 래퍼이며, 그 뒤에 가장 중요한 {{htmlelement("img")}} 요소가 있습니다. [responsive.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html)의 코드는 다음과 같습니다.

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="딸 엘바를 안고 서 있는 크리스" />
</picture>
```

- `<source>` 요소에는 미디어 조건이 포함된 `media` 속성이 포함되어 있습니다. 첫 번째 `srcset` 예제와 마찬가지로 이러한 조건은 표시할 이미지를 결정하는 테스트이며, 참을 반환하는 첫 번째 이미지가 표시됩니다. 이 경우 뷰포트 너비가 799px 이하인 경우 첫 번째 `<source>` 요소의 이미지가 표시됩니다. 뷰포트 너비가 800px 이상이면 두 번째 이미지가 표시됩니다.
- `srcset` 속성에는 표시할 이미지의 경로가 포함됩니다. 위의 `<img>`에서 살펴본 것처럼, `<source>`는 여러 이미지가 참조된 `srcset` 속성과 `sizes` 속성을 사용할 수 있습니다. 따라서 `<picture>` 요소를 통해 여러 이미지를 제공하면서 각 이미지의 해상도도 여러 개 제공할 수 있습니다. 현실적으로 이런 종류의 작업을 자주 수행하지는 않을 것입니다.
- 모든 경우에 `</picture>` 바로 앞에 `src` 및 `alt`와 함께 `<img>` 요소를 제공해야 하며, 그렇지 않으면 이미지가 표시되지 않습니다. 이는 미디어 조건 중 어느 것도 참을 반환하지 않을 때 적용되는 기본 사례와 `<picture>` 요소를 지원하지 않는 브라우저를 위한 폴백을 제공합니다. 이 예제에서는 실제로 두 번째 `<source>` 요소를 제거할 수 있습니다.

이 코드를 사용하면 아래와 같이 와이드 스크린과 좁은 스크린 디스플레이 모두에 적합한 이미지를 표시할 수 있습니다.

![Our example site as viewed on a wide screen - here the first image works ok, as it is big enough to see the detail in the center.](picture-element-wide.png)![Our example site as viewed on a narrow screen with the picture element used to switch the first image to a portrait close up of the detail, making it a lot more useful on a narrow screen](picture-element-narrow.png)

> **참고:** `media` 속성은 아트 디렉션 시나리오에서만 사용해야 하며, `media`를 사용하는 경우 `sizes` 속성 내에 미디어 조건도 제공하지 마세요.

### CSS나 자바스크립트를 사용하면 안 되는 이유는 무엇인가요?

브라우저가 페이지 로드를 시작하면 기본 구문 분석기가 페이지의 CSS와 JavaScript를 로드하고 해석하기 전에 이미지를 다운로드(사전 로드)하기 시작합니다. 이 메커니즘은 일반적으로 페이지 로드 시간을 단축하는 데 유용하지만 반응형 이미지에는 도움이 되지 않으므로 `srcset`과 같은 솔루션을 구현해야 합니다. 예를 들어, {{htmlelement("img")}} 요소를 로드한 다음 JavaScript를 사용하여 뷰포트 너비를 감지한 다음 원하는 경우 소스 이미지를 더 작은 이미지로 동적으로 변경할 수 없습니다. 그러면 원본 이미지가 이미 로드되어 작은 이미지도 함께 로드되므로 반응형 이미지 측면에서 더욱 좋지 않습니다.

## 능동적 학습: 나만의 반응형 이미지 구현하기

능동적인 학습을 위해서는 대부분 혼자서 용기를 내서 해보시기 바랍니다. `<picture>`을 사용하여 자신만의 적절한 아트 연출이 가능한 좁은 화면/넓은 화면 스크린샷을 구현해 보시고, `srcset`을 사용한 해상도 전환 예제도 구현해 보시기 바랍니다.

1. 코드를 포함할 간단한 HTML을 작성합니다. 원하는 경우 `not-responsive.html`을 시작점으로 사용합니다.
2. 어딘가에 디테일이 포함된 멋진 와이드 스크린 풍경 이미지를 찾습니다. 그래픽 편집기를 사용하여 웹 크기 버전을 만든 다음 세부 사항을 확대하여 더 작은 부분을 표시하도록 자르고 두 번째 이미지를 만듭니다. 약 480px 너비가 적당합니다.
3. `<picture>` 요소를 사용하여 아트 디렉션 사진 전환기를 구현하세요!
4. 크기가 다른 여러 개의 이미지 파일을 만들어 각각 동일한 사진을 표시합니다.
5. 장치 해상도에 따라 동일한 크기의 이미지를 다른 해상도로 제공하거나 뷰포트 너비에 따라 다른 이미지 크기를 제공하는 해상도 전환기 예제를 만들려면 `srcset`/`sizes`를 사용하세요.

## 요약

여기까지 반응형 이미지에 대해 알아보았습니다. 새로운 기술을 사용해 보셨기를 바랍니다. 요약하자면, 여기서 논의한 문제는 크게 두 가지입니다.

- **아트 디렉션**: 데스크톱 레이아웃에는 전체 장면을 보여주는 가로 이미지를, 모바일 레이아웃에는 주요 피사체를 확대하여 보여주는 세로 이미지를 제공하는 등 다양한 레이아웃에 맞게 잘린 이미지를 제공하려는 경우 문제가 발생할 수 있습니다. 이 문제는 {{htmlelement("picture")}} 요소를 사용하여 해결할 수 있습니다.
- **해상도 전환**: 데스크톱 디스플레이처럼 큰 이미지가 필요하지 않은 좁은 화면 기기에는 작은 이미지 파일을 제공하고, 고밀도/저밀도 화면에는 서로 다른 해상도의 이미지를 제공하려는 경우 문제가 발생할 수 있습니다. [`벡터 그래픽`](/ko/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)(SVG 이미지)과 [`sizes`](/ko/docs/Web/HTML/Element/img#sizes) 속성이 있는 [`srcset`](/ko/docs/Web/HTML/Element/img#srcset)을 사용하여 이 문제를 해결할 수 있습니다.

이것으로 [멀티미디어 및 임베딩](/ko/docs/Learn/HTML/Multimedia_and_embedding) 모듈 전체가 끝났습니다! 이제 다음 단계로 넘어가기 전에 해야 할 일은 [멀티미디어 및 임베딩 평가](/en-US/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)에 도전해보고 여러분의 실력을 확인하는 것입니다. 즐거운 시간 보내세요!

## 같이 보기

- [제이슨 그릭스비의 반응형 이미지에 대한 훌륭한 소개](https://cloudfour.com/thinks/responsive-images-101-definitions/)
- [반응형 이미지: 해상도를 변경하는 경우에는, srcset을 사용하세요.](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) 브라우저가 어떤 이미지를 사용할지 고르는 방법에 대한 더 상세한 설명이 포함되어 있습니다.
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}
