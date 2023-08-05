---
title: 반응형 이미지
slug: Learn/HTML/Multimedia_and_embedding/Responsive_images
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

## 반응형 이미지를 사용하는 이유?

일반적인 웹 사이트를 떠올려 봅시다. 헤더 이미지가 있을 것이고, 헤더 이후 본문에는 이미지가 몇 개 있을 것입니다. 헤더 이미지는 헤더의 전체 가로 너비를 자치할 것이고, 본문 이미지는 본문 영역 안에서 어느 정도를 차지할 것입니다. 아래 간단한 예시가 있습니다.

![Our example site as viewed on a wide screen - here the first image works ok, as it is big enough to see the detail in the center.](picture-element-wide.png)

노트북이나 데스크톱처럼 화면이 넓은 기기에서는 잘 작동할 것입니다([실제 예시는 여기에 있고](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html), Github에서 [소스코드](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/not-responsive.html)를 볼 수 있습니다.) 이 단원에서는 CSS에 대해 자세히 설명하지 않겠습니다.

- 사이트 전체 너비는 최대 1200픽셀입니다. 뷰포트가 1200픽셀이 넘는 경우 남는 공간 안에서 가운데 정렬됩니다. 1200픽셀 이하 뷰포트에서는 뷰포트 전체 너비의 100%가 됩니다.
- 헤더 이미지는, 너비가 얼마든간에 언제나 헤더의 가운데 오게 설정했습니다. 좁은 화면에서 사이트를 보는 경우 이미지 중앙의 중요한 부분(사람)은 계속 볼 수 있지만, 여분의 부분은 양쪽에서 손실됩니다. 높이는 200픽셀입니다.
- 본문 이미지는 웹사이트 너비가 이미지보다 작아지면, 줄어들기 시작해 삐져나가지 않고 언제나 사이트 너비 안에 있게 됩니다.

그러나, 좁은 화면 기기로 사이트를 보기 시작하면 문제가 생깁니다. 헤더는 괜찮아 보이지만, 모바일 기기에서는 화면 높이를 너무 많이 차지합니다. 그리고 이 크기에서는 첫 번째 콘텐츠 이미지에서 두 사람의 얼굴을 보기가 어렵습니다.

![Our example site as viewed on a narrow screen; the first image has shrunk to the point where it is hard to make out the detail on it.](non-responsive-narrow.png)

개선책은 좁은 화면에서 사이트를 볼 때 이미지의 중요한 상세를 보여 주는 자른 이미지를 보여 주는 것입니다. 또 다르게 자른 이미지를 태블릿처럼 중간 정도 너비 화면의 기기에서 보여줄 수 있을 것입니다. 이를 보통 **아트 디렉션 문제(art direction problem)** 라고 합니다. \[아트 디렉션은 '연출 방향' 정도로 번역할 수 있을 듯한데, 보통은 용어를 그대로 사용합니다. 반응형 이미지에서는 이미지의 의도가 제대로 전달되도록 기기에 따라 사진의 핵심을 확대해서 보여 주거나 하는 방식을 의미합니다. - 역자 주]

게다가, 작은 모바일 화면에서는 페이지에 그렇게 큰 이미지를 포함할 필요가 없습니다. 이것을 **해상도 전환 문제(resolution switching problem)** 라고 부릅니다. [벡터 그래픽 단원](/ko/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)에서 배웠듯이, 래스터 이미지\[비트맵 이미지 - 역자 주]는 가로 픽셀들과 세로 픽셀들의 세트로 구성됩니다. 작은 래스터 이미지를 실제 사이즈보다 확대해서 보면 도트가 깨져 보입니다(벡터 그래픽은 그렇지 않은데 반해).

역으로, 적당한 크기보다 훨씬 작은 화면에 큰 이미지를 표시 할 필요가 없습니다. 그렇게 하는 것은 대역폭을 낭비하는 것입니다. 특히, 모바일 사용자는 기기에 맞는 작은 이미지 대신 데스크톱에 사용되는 커다른 이미지를 다운로드하느라 대역폭을 낭비하고 싶어하지 않습니다. 이상적인 상황은 다양한 해상도를 준비해 두고, 웹사이트 데이터를 받는 기기에 따라 적당한 사이즈를 제공하는 것입니다.

상황을 좀더 복잡하게 하면, 어떤 기기는 고해상도 화면이 있어서, 멋지게 보이려면 더 큰 이미지가 필요합니다. 이것은 근본적으로 같은 문제지만, 약간 맥락은 다릅니다.

벡터 이미지가 이러한 문제를 해결할 수 있을 것이라고 생각할 수 있으며, 어느 정도는 가능합니다 — 벡터 이미지는 파일 사이즈도 작고 확대해도 깨지지 않습니다. 사용할 수 있다면 언제나 사용해야 합니다. 그러나 벡터 이미지가 모든 유형에 맞는 것은 아닙니다. 간단한 그래픽, 패턴, 인터페이스 요소 등에 적합하지만, 사진 같은 상세한 종류의 이미지를 벡터 기반으로 만들려고 하면 복잡해지기 시작합니다. JPEG 같은 래스터 이미지 포맷은 위 예제에 나온 종류의 이미지에 더 적합합니다.

웹이 처음 등장한 90년대 초중반에는 이러한 문제가 존재하지 않았습니다. 당시에는 웹을 탐색할 수 있는 기기가 데스크톱과 노트북뿐이었기 때문에 브라우저 엔지니어와 사양 작성자는 해결책을 구현할 생각조차 하지 못했죠. *반응형 이미지 기술*은 위에서 언급한 문제를 해결하기 위해 최근에 구현된 기술로, 동일한 내용을 표시하지만 픽셀 수가 다른 여러 이미지 파일을 브라우저에 제공하거나(_해상도 전환_), 공간 할당에 적합한 다른 이미지를 제공(_아트 디렉션_)할 수 있도록 합니다.

> **참고:**
>
> 이 글에서 다루는 새로운 기능들 — [`srcset`](/ko/docs/Web/HTML/Element/img#srcset)/[`sizes`](/ko/docs/Web/HTML/Element/img#sizes)/{{htmlelement("picture")}} — 은 모두 출시된 최신 데스크톱과 모바일 브라우저(인터넷 익스플로러는 구현이 안 돼 있지만, 마이크로소프트 엣지를 포함해)에서 지원됩니다.

## 반응형 이미지를 어떻게 만들까요?

이 섹션에서는 위에서 설명한 두 가지 문제를 살펴보고 HTML 반응형 이미지 기법을 이용해 문제를 해결하는 방법을 보여줍니다. 이 섹션에서는, 위 예제의 본문 영역에서 봤듯, HTML {{htmlelement("img")}}에 초점을 맞출 것이라는 점을 주목하기 바랍니다(헤더 이미지는 장식용이고, 따라서 CSS 배경 이미지로 구현됐습니다). [CSS에는 분명 HTML보다 더 나은 반응형 디자인 도구](http://blog.cloudfour.com/responsive-images-101-part-8-css-images/)가 있고, 그것은 향후 CSS 모듈에서 다룰 것입니다.

### 해상도 전환: 다양한 사이즈

그렇다면 해상도 전환을 통해 해결하고자 하는 문제는 무엇일까요? 우리는 기기에 따라 단지 크기만 다른, 동일한 이미지 콘텐츠를 보여 주고 싶습니다. 우리 예제에서 본문 두 번째 이미지가 직면한 상황입니다. 표준 {{htmlelement("img")}} 요소는 전통적으로 브라우저에게 오직 하나의 소스 파일만 제시하도록 돼 있었습니다.

```html
<img src="elva-fairy-800w.jpg" alt="요정 옷을 입은 엘바" />
```

그러나 [`srcset`](/ko/docs/Web/HTML/Element/img#srcset)과 [`sizes`](/ko/docs/Web/HTML/Element/img#sizes)라는 두 가지 새로운 속성(attribute)을 사용해 브라우저가 올바른 것을 선택하는 데 도움이 되는 몇 가지 추가 소스 이미지와 힌트를 제공 할 수 있습니다. 이 예제는 Github의 [responsive.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) 예제 ([소스 코드](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/responsive.html) 참조)에서 볼 수 있습니다.

```html
<img
  srcset="
    elva-fairy-320w.jpg 320w,
    elva-fairy-480w.jpg 480w,
    elva-fairy-800w.jpg 800w
  "
  sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
  src="elva-fairy-800w.jpg"
  alt="요정 옷을 입은 엘바" />
```

`srcset`과 `sizes` 속성은 복잡해 보이지만 위에서 보여 준 것처럼 각 행에 속성 값을 나눠 적으면 이해하기 어렵지 않습니다. 각 값은 쉼표로 구분한 목록으로 적고, 목록의 각 부분은 세 부분으로 구성됩니다. 이제 각각의 내용을 살펴보겠습니다.

**`srcset`** 은 브라우저에게 제시할 이미지 목록과 그 크기를 정의합니다. 각 쉼표 앞에 이렇게 적습니다.

1. **이미지 파일명** (`elva-fairy-480w.jpg`.)
2. 공백
3. 이미지 **고유 픽셀 너비** (`480w`) — `px`이 아니라 `w` 단위를 사용한다는 데 주의하세요. 이것은 이미지의 실제 사이즈인데, 컴퓨터에서 이미지를 확인하면 찾을 수 있습니다. (예컨대, 맥에서는 파인더에서 이미지를 선택하고

   <kbd>Cmd</kbd>

   \+

   <kbd>I</kbd>

   를 눌러 정보를 표시 할 수 있습니다).

**`sizes`** 는 미디어 조건문들을 정의하고(예를 들면, 화면 크기) 특정 미디어 조건문이 참일 때 어떤 이미지 크기가 최적인지 나타냅니다(앞서 언급한 힌트). 이 경우, 각 쉼표 전에 이렇게 씁니다.

1. **미디어 조건문** (`(max-width:480px)`) — CSS 주제에서 이에 대해 더 많은 것을 배울 수 있을 테지만, 지금 간단히 말하면, 미디어 조건문은 가능한 화면 상태를 기술합니다. 이 경우, 이렇게 말하는 것입니다: "뷰포트 너비가 480픽셀 이하".
2. 공백.
3. 미디어 조건문이 참인 경우 이미지가 채울 **슬롯의 너비**(`440px`).

> **참고:**
>
> 슬롯 너비로 절대값(`px`, `em`)이나 뷰포트에 대한 상대값(`vw`)을 넣어야 합니다.
> 상대값으로 퍼센트(`%`)를 넣을 수는 없습니다.
> 마지막 슬롯 너비에는 미디어 조건문이 없다는 것을 확인했습니다. 이것은 미디어 조건문이 참인 경우가 하나도 없는 것우의 기본값입니다. 브라우저는 첫 번째 조건문이 맞으면 나머지 모든 조건문을 무시합니다.
> 따라서 미디어 조건문의 순서에 유의하세요.

따라서 이러한 속성을 설정하면 브라우저는 다음과 같이 작동합니다:

1. 기기 너비를 확인합니다.
2. `sizes` 목록에서 가장 먼저 참이 되는 미디어 조건문을 확인합니다.
3. 해당 미디어 쿼리가 제공하는 슬롯 크기를 확인합니다.
4. 해당 슬롯 크기에 가장 근접하게 맞는 `srcset`에 연결된 이미지를 불러옵니다.

여기까지 입니다! 이 시점에서 뷰포트 너비가 480px인 지원 브라우저가 페이지를 로드하면 (최대 너비: 600px) 미디어 조건이 참이므로 브라우저는 480px 슬롯을 선택합니다. 그러면 `440px`에 가장 가까운 고유 너비(`480w`)가 선택됨에 따라 `elva-fairy-480w.jpg`가 로딩될 것입니다. 800픽셀 사진의 디스크 용량은 128KB인 반면 480픽셀 버전은 63KB에 불과하여 65KB를 절약할 수 있습니다. 이제 이 페이지에 사진이 많은 페이지가 있다고 상상해 보세요. 이 기술을 사용하면 모바일 사용자의 대역폭을 크게 절약할 수 있습니다.

이 기능을 지원하지 않는 낡은 브라우저들은 이 속성들을 무시할 것입니다. 그리고 [`src`](/ko/docs/Web/HTML/Element/img#src) 속성에 참조된 보통 이미지를 불러올 것입니다.

> **참고:**
>
> 문서의 {{htmlelement("head")}}에서 `<meta name="viewport" content="width=device-width">` 줄을 찾을 수 있을 것입니다.
> 이것은 모바일 브라우저가 실제 뷰포트 너비로 웹페이지를 보여주도록 강제합니다.
> (몇몇 모바일 브라우저들은 뷰포트 너비를 속인다, 그리고 대신에 더 큰 뷰포트 너비에서 페이지를 불러오고, 불러온 페이지를 축소합니다. 이것은 반응형 이미지나 디자인에 별로 도움이 되지 않습니다. 이것에 대해서는 향후 더 자세히 다룰 것입니다.)

### 유용한 개발 도구

브라우저에는 필요한 슬롯 너비, 기타, 필요한 것들을 찾을 수 있게 도와 주는 유용한 [개발 도구들](/ko/docs/Learn/Common_questions/What_are_browser_developer_tools)이 있습니다. 나는 우선 반응형이 아닌 일반 버전의 예제를 불러옵니다(`not-responsive.html`). 그리고 나서 [반응형 디자인 모드](/ko/docs/Tools/Responsive_Design_Mode)(도구 > 웹 개발 도구 > 반응형 디자인 모드)로 갑니다. 이 모드는 다양한 크기의 기기로 보는 것처럼 웹페이지 레이아웃을 보게 해 줍니다.

나는 뷰포트 너비를 320px로 했다가 480px로 합니다. 각 너비에서 나는 [DOM 검사기](/ko/docs/%EB%8F%84%EA%B5%AC%EB%93%A4/Page_Inspector)로 가서, 확인하고 싶은 {{htmlelement("img")}} 요소를 클릭합니다. 그리고 화면의 오른쪽에 있는 박스 모델 뷰 탭에서 크기를 확인합니다. 이렇게 하면 필요한 고유 너비를 알 수 있습니다.

![A screenshot of the firefox devtools with an image element highlighted in the dom, showing its dimensions as 440 by 293 pixels.](box-model-devtools.png)

다음으로 원하는 뷰포트 너비를 설정해서 어떤 `srcset`이 작동하는지 체크할 수 있습니다(예컨대, 좁게 설정할 수 있습니다). 네트워크 검사기(도구 > 웹 개발 도구 > 네트워크)를 열고, 페이지를 새로 고침 합니다. 웹페이지를 만들기 위해 다운로드한 항목들을 보여 주는데, 따라서 어떤 이미지가 사용됐는지 여기서 확인할 수 있습니다.

> **참고:**
>
> 크롬에서 테스트할 때 캐시를 비활성화하십시오.
> 개발자 도구를 열고, **Network** 탭의 체크박스들 중 **Disable cache**에 체크하십시오. 이렇게 하지 않으면 크롬은 최적의 이미지보다 캐시된 이미지를 선호할 것입니다.

![a screenshot of the network inspector in firefox devtools, showing that the HTML for the page has been downloaded, along with three images, which include the two 800 wide versions of the responsive images](network-devtools.png)

### 해상도 전환: 같은 크기, 다른 해상도

만약 다양한 디스플레이 해상도를 지원해야 하는데, 모두가 이미지를 실제 사이즈로 동일하게 봐야 한다면, `srcset`에 `sizes` 없이 x-서술자를 사용해 브라우저가 적절한 해상도의 이미지를 선택하게 할 수 있습니다. 꽤 쉽습니다. [srcset-resolutions.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)에서 예제를 찾아 볼 수 있습니다. ([소스 코드](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/responsive-images/srcset-resolutions.html)도 볼 수 있습니다.)

```html
<img
  srcset="elva-fairy-320w.jpg, elva-fairy-480w.jpg 1.5x, elva-fairy-640w.jpg 2x"
  src="elva-fairy-640w.jpg"
  alt="요정 옷을 입은 엘바" />
```

![A picture of a little girl dressed up as a fairy, with an old camera film effect applied to the image](resolution-example.png)이 예에서, 다음 CSS가 이미지에 적용되고, 따라서 화면에서 너비는 320px이 됩니다(CSS 픽셀이라고 부르기도 합니다).

```css
img {
  width: 320px;
}
```

이 경우 sizes는 필요 없습니다. 브라우저는 단순히 보이는 해상도가 얼마인지는 확인하고 `srcset`에 참조돼 있는 것들 중 가장 적합한 이미지를 제공합니다. 따라서 기기의 1픽셀이 CSS의 1필셀에 대응되는, 보통/낮은 해상도 디스플레이의 기기가 페이지에 접속하면, `elva-fairy-320w.jpg`가 로드될 것입니다(1x가 적용됐고, 그걸 명시해서 적을 필요는 없습니다). 만약 기기의 2픽셀이 CSS 1픽셀에 해당하는 고해상도 기기라면, `elva-fairy-640w.jpg`가 로드될 것입니다. 640px 이미지는 93KB입니다. 320px 이미지는 39KB밖에 안 됩니다.

### 아트 디렉션

다시 말하면, **아트 디렉션 문제**는 서로 다른 이미지 디스플레이 사이즈에 맞추기 위해 디스플레이된 이미지를 변경하고자 하는 것과 관련 있습니다. 예를 들면, 웹사이트에 데스크톱 브라우저로 들어오면 가운데 한 사람이 있는 커다란 가로 사진이 있습니다. 그런데 모바일 브라우저로 줄여서 보면 사람이 보기 힘들 정도로 정말 작습니다. 사람이 확대된 좀더 작은 세로 사진으로 보여 주는 게 더 나을 것입니다. {{htmlelement("picture")}} 요소가 이런 종류의 해결책을 구현하게 해 줍니다.

원래의 [not-responsive.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/not-responsive.html) 예제로 돌아가 봅시다. 아트 디렉션이 절실히 필요한 사진이 있습니다.

```html
<img src="elva-800w.jpg" alt="딸 엘바를 안고 서 있는 크리스" />
```

{{htmlelement("picture")}}를 이용해 고쳐 봅시다! [`<video>`와 `<audio>`](/ko/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) 처럼, \<picture> 요소는 {{htmlelement("source")}} 요소들을 감쌉니다. `source` 요소는 브라우저가 고를 수 있는 여러 소스들을 제공합니다. `soucre` 요소들 뒤에는 가장 중요한 {{htmlelement("img")}} 요소가 뒤따릅니다. [responsive.html](http://mdn.github.io/learning-area/html/multimedia-and-embedding/responsive-images/responsive.html) 코드는 이렇습니다.

```html
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg" />
  <source media="(min-width: 800px)" srcset="elva-800w.jpg" />
  <img src="elva-800w.jpg" alt="딸 엘바를 안고 서 있는 크리스" />
</picture>
```

- `<source>` 요소에는 미디어 조건문이 있는 `media` 속성이 있습니다 — 처음에 살펴 봤던 `srcset` 예제처럼, 이 조건들도 어떤 이미지를 보여 줄 지 결정하는 데 사용합니다 — 참을 리턴하는 첫 번째 것이 표시됩니다. 이 경우, 만약 뷰포트 너비가 799px 이하라면, 첫 번째 `<source>` 요소의 이미지가 표시될 것입니다. 만약 뷰포트 너비가 800px 이상이라면, 두 번째 것을 보여 줄 것입니다.
- srcset 속성에는 보여 줄 이미지 경로가 있었습니다. 위의 `<img>`에서 살펴 봤듯이, `<source>`도 여러 참조 이미지와 `sizes` 속성을 `srcset` 속성에 넣을 수 있습니다. 따라서 우리는 이미지 여러 개를 `<picture>` 요소에서 제공할 수 있습니다. 하지만 그렇게 되면 각각 다양한 해상도도 제공해야 할 것입니다. 현실적으로, 이런 일을 자주 하고 싶지는 않을 것입니다.
- 이 모든 경우, `src`와 `alt` 속성이 있는 `<img>` 요소를 `</picture>` 바로 앞에 반드시 제공해야 합니다. 그렇지 않으면 이미지가 표시되지 않을 것입니다. 이것은 참을 리턴하는 미디어 조건문이 없는 경우 기본 이미지를 제공하는 것입니다(실제 이 예제에서 두 번째 `<source>` 요소는 제거해도 됩니다). 그리고 \<picture> 요소를 지원하지 않는 브라우저에 대체제를 제공하는 것이기도 합니다.

이 코드는 넓은 화면과 좁은 화면 둘 다에서 적절한 이미지를 표시하게 해 줍니다. 아래를 봅시다.

![Our example site as viewed on a wide screen - here the first image works ok, as it is big enough to see the detail in the center.](picture-element-wide.png)![Our example site as viewed on a narrow screen with the picture element used to switch the first image to a portrait close up of the detail, making it a lot more useful on a narrow screen](picture-element-narrow.png)

> **참고:**
>
> 미디어 속성은 아트 디렉션 시나리오에서만 사용하십시오. 만약 미디어를 사용한다면, 미디어 조건문을 사이즈 속성에 넣지 마십시오.

### 왜 CSS나 자바스크립트를 이용해 이렇게 할 수 없는가요?

브라우저가 페이지를 불러오기 시작할 때, 메인 파서가 CSS와 자바스크립트를 로드하고 해석하기 전에 이미지들을 다운로드(미리 불러오기)하기 시작합니다. 이렇게 하는 것은 평균적으로 페이지 로딩 시간을 20%쯤 단축시켜주는 유용한 기법입니다. 그러나 반응형 이미지에는 도움이 안 됩니다. 따라서 `srcset` 같은 해결책을 구현해야 합니다. 예를 들면, {{htmlelement("img")}} 요소를 불러온 후, 자바스크립트로 뷰포트 너비를 감지하고, 필요하면 더 작은 소스 이미지로 동적으로 바꾸는 식으로 할 수 없습니다. 그 시점에, 원래의 이미지가 이미 로드된 상태고, 작은 이미지까지 불러와야 합니다. 반응형 이미지 관점에서 더 나쁩니다.

### 최신 이미지 포맷을 대담하게 사용하시오

흥미로운 새 이미지 포맷들이 있습니다(WebP나 JPEG-2000). 이 포맷들은 작은 용량과 높은 질을 동시에 유지할 수 있게 해 줍니다. 그러나 브라우저 지원에 구멍이 많습니다.

`<picture>`는 상대적으로 낡은 브라우저들의 욕구도 채워 줍니다. 우리는 `type` 속성 안에 마임타입을 제공해 브라우저가 지원하지 않는 파일 유형을 즉시 거부하도록 할 수 있습니다.

```html
<picture>
  <source type="image/svg+xml" srcset="pyramid.svg" />
  <source type="image/webp" srcset="pyramid.webp" />
  <img src="pyramid.png" alt="정삼각형 4개로 만든 일반적인 피라미드" />
</picture>
```

- 아트 디렉션이 필요한 경우가 아니라면 `media` 속성을 사용하지 마시오.
- `<source>` 요소에서, `type`에 유형을 선언한 이미지만 사용할 수 있습니다.
- 앞서 다뤘듯, 필요에 따라 `srcset`과 `sizes`에 쉼표로 구분한 목록을 얼마든 사용할 수 있습니다.

## 능동적 학습: 나만의 반응형 이미지 구현

능동적 학습을 위해, 우리는 당신이 용기를 내 홀로 해 보길 기대합니다. (... 대개는.) 우리는 당신이 `<picture>`를 이용해 자신만의 딱 맞는 좁은 화면용/넓은 화면용 아트 디렉션 샷을 구현하고, `srcset`을 사용하는 해상도 전환 예제를 구현하길 바랍니다.

1. 자기 코드가 있는 간단한 HTML을 작성하시오(원한다면 `not-responsive.html`를 시작점으로 삼자).
2. 어딘가에 상세한 부분이 있는 멋진 가로 풍경 사진을 찾으시오. 그래픽 편집기를 이용해 웹 사이즈 버전을 만들고, 상세한 부분을 확대해 보여줄 수 있도록 그걸 더 작게 잘라서 두 번째 이미지를 만듭니다(대략 480px 정도면 적당하다).
3. `srcset` / `size` 를 사용해, 서로 다른 해상도에서 같은 크기의 이미지를 제공하거나 서로 다른 뷰포트 너비에서 서로 다른 크기 이미지를 제공하는 해상도 전환 예제를 만듭니다.

> **참고:**
>
> 위에서 봤듯이, 브라우저 개발자 도구를 사용해 필요한 크기가 얼마인지 찾아내는 데 도움을 얻습니다.

## 정리

이것이 반응형 이미지의 비밀입니다. 이 새로운 기법을 즐기길 바랍니다. 핵심을 되짚다면, 우리가 다룬 두 가지 구분된 문제가 있습니다.

- **아트 디렉션**: 다양한 레이아웃에 자른 이미지를 제공하고자 하는 문제. 예를 들면, 데스크톱 레이아웃에서 전체 풍경을 보여 주는 가로 이미지와 모바일 레이아웃에서 주요 대상을 좀더 가깝게 확대해서 보여 주는 세로 이미지. {{htmlelement("picture")}} 요소를 이용해 해결할 수 있습니다.
- **해상도 전환**: 데스크톱 디스플레이와 달리 커다란 이미지가 필요치 않은 좁은 화면 기기에 더 작은 이미지 파일을 제공하고자 하는 문제. 그리고 또한 선택적으로 다양한 해상도 이미지를 고밀도/저밀도 화면에 제공하고자 하는 문제. 이것은 [벡터 그래픽](/ko/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)(SVG 이미지), [`srcset`](/ko/docs/Web/HTML/Element/img#srcset)와 [`sizes`](/ko/docs/Web/HTML/Element/img#sizes) 속성을 이용해 해결할 수 있습니다.

이것으로 전체 [멀티미디어와 엠베딩](/ko/docs/Learn/HTML/Multimedia_and_embedding) 모듈을 끝냈습니다! 남은 것은 멀티미디어 평가를 치르는 것뿐입니다. 얼마나 배웠는지 확인해 봅시다. 즐겁게 진행하기를 바랍니다!

## 더 알아 보기

- [제이슨 그릭스비의 훌륭한 반응형 이미지 소개](http://blog.cloudfour.com/responsive-images-101-definitions)
- [반응형 이미지: 해상도를 변경할 뿐이라면, srcset을 사용하라](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) — 브라우저가 어떤 이미지를 사용할지 고르는 방법에 대한 더 상세한 설명 포함
- {{htmlelement("img")}}
- {{htmlelement("picture")}}
- {{htmlelement("source")}}

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web", "Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page", "Learn/HTML/Multimedia_and_embedding")}}
