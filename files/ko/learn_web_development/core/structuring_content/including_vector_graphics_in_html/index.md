---
title: 웹에 벡터 그래픽 추가하기
slug: Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML
original_slug: Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}

벡터 그래픽은 파일 크기가 작고 확장성이 뛰어나 확대하거나 큰 크기로 확대해도 픽셀이 깨지지 않기 때문에 여러 상황에서 매우 유용합니다. 이 글에서는 웹페이지에 벡터 그래픽을 삽입하는 방법을 보여드리겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        <a href="/ko/docs/Learn/HTML/Introduction_to_HTML">HTML의 기본 사항</a>
        과
        <a href="/ko/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML">문서에 이미지를 삽입하는 방법</a>
        을 알고 있어야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>웹 페이지에 SVG(벡터) 이미지를 삽입하는 방법을 알아보세요.</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 이 글에서는 SVG가 무엇인지, 웹 페이지에 추가하는 방법만 설명합니다.

## 벡터 그래픽이란 무엇인가요?

웹에서는 **래스터 이미지**와 **벡터 이미지**의 두 가지 유형의 이미지로 작업하게 됩니다.

- **래스터 이미지**는 픽셀 그리드를 사용하여 정의되며, 래스터 이미지 파일에는 각 픽셀이 배치될 위치와 정확한 색상을 나타내는 정보가 포함되어 있습니다. 널리 사용되는 웹 래스터 형식에는 비트맵(`.bmp`), PNG(`.png`), JPEG(`.jpg`), GIF(`.gif`) 등이 있습니다.
- **벡터 이미지**는 알고리즘을 사용하여 정의되며, 벡터 이미지 파일에는 컴퓨터가 화면에 렌더링할 때 이미지가 어떻게 보일지 계산하는 데 사용할 수 있는 모양 및 경로 정의가 포함되어 있습니다. {{glossary("SVG")}} 형식을 사용하면 웹에서 사용할 수 있는 강력한 벡터 그래픽을 만들 수 있습니다.

이 둘의 차이점을 알기 위해 예시를 살펴보겠습니다. 이 예제는 GitHub 리포지토리에서 [벡터 대 래스터.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html)로 확인할 수 있으며, 검은색 그림자가 있는 빨간색 별의 겉보기에는 동일한 두 개의 이미지를 나란히 보여줍니다. 차이점은 왼쪽은 PNG이고 오른쪽은 SVG 이미지라는 점입니다.

페이지를 확대하면 그 차이가 분명해집니다. PNG 이미지에는 각 픽셀의 위치(및 색상)에 대한 정보가 포함되어 있기 때문에 확대할수록 픽셀화됩니다. 확대하면 각 픽셀의 크기가 커져 화면의 여러 픽셀을 채우므로 이미지가 뭉개져 보이기 시작합니다. 그러나 벡터 이미지는 이미지의 크기에 관계없이 알고리즘을 사용하여 이미지의 모양을 계산하고 크기가 커짐에 따라 값을 조정하기 때문에 계속 선명하고 멋지게 보입니다.

![별 이미지 2개](raster-vector-default-size.png)

![두 개의 별 이미지 확대, 하나는 선명하고 다른 하나는 흐릿함](raster-vector-zoomed.png)

> [!NOTE]
> 위의 이미지는 모두 PNG이며, 각각의 경우 왼쪽 별은 래스터 이미지를 나타내고 오른쪽 별은 벡터 이미지를 나타냅니다. 다시 한 번 [벡터 대 래스터.html](https://mdn.github.io/learning-area/html/multimedia-and-embedding/adding-vector-graphics-to-the-web/vector-versus-raster.html) 데모로 이동하여 실제 예시를 확인하세요!

또한 벡터 이미지 파일은 이미지의 모든 픽셀에 대한 정보를 개별적으로 저장하는 대신 몇 가지 알고리즘만 저장하면 되기 때문에 래스터 이미지 파일보다 훨씬 가볍습니다.

## SVG란 무엇인가요?

[SVG](/ko/docs/Web/SVG)는 벡터 이미지를 설명하기 위한 {{glossary("XML")}} 기반 언어입니다. 기본적으로 HTML과 같은 마크업이지만, 이미지에 표시할 모양과 해당 모양에 적용할 효과를 정의하는 다양한 요소가 있다는 점이 다릅니다. SVG는 콘텐츠가 아닌 그래픽을 마크업하기 위한 것입니다. 가장 간단하게는 {{svgelement("circle")}}, {{svgelement("rect")}}과 같은 간단한 도형을 만들기 위한 요소가 있습니다. 고급 SVG 기능에는 {{svgelement("feColorMatrix")}}(변환 매트릭스를 사용하여 색상 변환), {{svgelement("animate")}}(벡터 그래픽의 일부에 애니메이션 적용), {{svgelement("mask")}}(이미지 위에 마스크 적용) 등이 있습니다.

간단한 예로 다음 코드는 원과 직사각형을 만듭니다.

```html
<svg
  version="1.1"
  baseProfile="full"
  width="300"
  height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="black" />
  <circle cx="150" cy="100" r="90" fill="blue" />
</svg>
```

그러면 다음과 같은 출력이 생성됩니다.

{{ EmbedLiveSample('What_is_SVG', 300, 240, "", "") }}

위의 예시를 보면 SVG가 손으로 코딩하기 쉽다는 인상을 받을 수 있는데요. 이처럼, 텍스트 편집기에서 간단한 SVG를 직접 코딩할 수 있습니다. 그러나 복잡한 이미지의 경우 매우 어려워지기 시작합니다. SVG 이미지를 만들 때 대부분의 사람들은 [Inkscape](https://inkscape.org/)나 [Illustrator](https://en.wikipedia.org/wiki/Adobe_Illustrator)와 같은 벡터 그래픽 편집기를 사용합니다. 이러한 패키지를 사용하면 다양한 그래픽 도구를 사용하여 다양한 일러스트레이션을 만들고 사진의 근사치를 만들 수 있습니다. 예를 들어, Inkscape의 트레이스 비트맵 기능이 있습니다.

SVG에는 지금까지 설명한 것 외에도 몇 가지 추가적인 이점이 있습니다.

- 벡터 이미지의 텍스트는 계속 액세스할 수 있습니다({{glossary("SEO")}}에도 도움이 됩니다).
- SVG는 이미지의 각 구성 요소가 CSS를 통해 스타일을 지정하거나 JavaScript를 통해 스크립트를 작성할 수 있는 요소이기 때문에 스타일링/스크립팅에 적합합니다.

그렇다면 왜 SVG 대신 래스터 그래픽을 사용해야 할까요? SVG에는 몇 가지 단점이 있습니다.

- SVG는 매우 빠르게 복잡해져 파일 크기가 커질 수 있으며, 복잡한 SVG는 브라우저에서 처리하는 데 상당한 시간이 걸릴 수 있습니다.
- SVG는 만들려는 이미지의 종류에 따라 래스터 이미지보다 만들기가 더 어려울 수 있습니다.

래스터 그래픽은 위에서 설명한 이유로 사진과 같은 복잡한 정밀 이미지에 더 적합할 수 있습니다.

> [!NOTE]
> Inkscape에서 파일을 일반 SVG로 저장하면 공간을 절약할 수 있습니다. 또한 [웹용 SVG를 준비하는 방법을 설명하는 이 문서](http://tavmjong.free.fr/INKSCAPE/MANUAL/html/Web-Inkscape.html)를 참조하세요.

## 페이지에 SVG 추가하기

이 섹션에서는 웹 페이지에 SVG 벡터 그래픽을 추가할 수 있는 다양한 방법을 살펴봅니다.

### 빠른 방법: `img` 요소

{{htmlelement("img")}} 요소를 통해 SVG를 임베드하려면 예상대로 src 속성에서 참조하기만 하면 됩니다. `height` 또는 `width` 속성(또는 SVG에 고유한 가로 세로 비율이 없는 경우 둘 다)이 필요합니다. 아직 읽어보지 않았다면 [HTML로 이미지 만들기](/ko/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)를 읽어보세요.

```html
<img
  src="equilateral.svg"
  alt="세 변이 모두 같은 삼각형"
  height="87"
  width="100" />
```

#### 장점

- `alt` 속성에 텍스트에 해당하는 기본 제공 이미지 구문을 빠르고 친숙하게 사용할 수 있습니다.
- {{htmlelement("a")}} 요소 안에 `<img>`를 중첩하여 이미지를 하이퍼링크로 쉽게 만들 수 있습니다.
- SVG 파일은 브라우저에서 캐시할 수 있으므로 나중에 로드된 이미지를 사용하는 모든 페이지의 로딩 시간이 빨라집니다.

#### 단점

- Javascript로 이미지를 조작할 수 없습니다.
- CSS로 SVG 콘텐츠를 제어하려면 SVG 코드에 인라인 CSS 스타일을 포함해야 합니다. SVG 파일에서 호출된 외부 스타일시트는 적용되지 않습니다.
- CSS 의사 클래스(예: `:focus`)를 사용하여 이미지 스타일을 다시 지정할 수 없습니다.

### 문제 해결 및 브라우저 간 지원

SVG를 지원하지 않는 브라우저(IE 8 이하, Android 2.3 이하)의 경우, `src` 속성에서 PNG 또는 JPG를 참조하고 [`srcset`](/ko/docs/Web/HTML/Element/img#srcset) 속성(최신 브라우저만 인식)을 사용하여 SVG를 참조할 수 있습니다. 이 경우 지원 브라우저에서만 SVG를 로드하며, 이전 브라우저에서는 대신 PNG를 로드합니다.

```html
<img src="equilateral.png" alt="변이 같은 삼각형" srcset="equilateral.svg" />
```

아래와 같이 SVG를 CSS 배경 이미지로 사용할 수도 있습니다. 아래 코드에서 구형 브라우저는 인식하는 PNG를 그대로 사용하지만 최신 브라우저는 SVG를 로드합니다:

```css
background: url("fallback.png") no-repeat center;
background-image: url("image.svg");
background-size: contain;
```

위에서 설명한 `<img>` 방법과 마찬가지로 CSS 배경 이미지를 사용하여 SVG를 삽입하면 Javascript로 SVG를 조작할 수 없으며 동일한 CSS 제한이 적용됩니다.

SVG가 전혀 표시되지 않는다면 서버가 제대로 설정되지 않았기 때문일 수 있습니다. [이 문서에서 올바른 방향을 안내](/ko/docs/Web/SVG/Tutorial/Getting_Started)해 드립니다.

### HTML에 SVG 코드를 포함하는 방법

텍스트 편집기에서 SVG 파일을 열고 SVG 코드를 복사한 후 HTML 문서에 붙여넣을 수도 있는데, 이를 **SVG 인라인 넣기** 또는 **인라이닝 SVG**라고도 합니다. SVG 코드 스니펫이 `<svg>` 시작 태그로 시작하고 `</svg>` 끝 태그로 끝나는지 확인하세요. 다음은 문서에 붙여넣을 수 있는 아주 간단한 예시입니다.

```html
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="green" />
</svg>
```

#### 장점

- SVG를 인라인에 넣으면 HTTP 요청이 절약되므로 로딩 시간을 조금 줄일 수 있습니다.
- SVG 요소에 `클래스` 및 `ID`를 할당하고 SVG 내 또는 HTML 문서에 대한 CSS 스타일 규칙을 넣는 모든 위치에서 CSS로 스타일을 지정할 수 있습니다. 실제로 모든 [SVG 프레젠테이션 속성](/ko/docs/Web/SVG/Attribute#presentation_attributes)을 CSS 속성으로 사용할 수 있습니다.
- SVG 인라인은 일반 스타일시트에서도 SVG 이미지에 CSS 상호 작용(예: `:focus`) 및 CSS 애니메이션을 사용할 수 있는 유일한 접근 방식입니다.
- SVG 마크업을 {{htmlelement("a")}} 요소로 감싸서 하이퍼링크로 만들 수 있습니다.

#### 단점

- 이 방법은 SVG를 한 곳에서만 사용하는 경우에만 적합합니다. 복제로 인해 리소스 집약적인 유지 관리가 필요합니다.
- 추가 SVG 코드는 HTML 파일의 크기를 증가시킵니다.
- 브라우저는 일반 이미지 자산을 캐시하는 것처럼 인라인 SVG를 캐시할 수 없으므로 이미지가 포함된 첫 페이지가 로드된 후에는 이미지가 포함된 페이지가 더 빨리 로드되지 않습니다.
- {{svgelement("foreignObject")}} 요소에 폴백을 포함할 수 있지만 SVG를 지원하는 브라우저는 여전히 폴백 이미지를 다운로드합니다. 구형 브라우저를 지원하기 위해 추가 오버헤드를 감수할 가치가 있는지를 잘 따져봐야 합니다.

### `iframe`을 사용하여 SVG를 삽입하는 방법

웹페이지처럼 브라우저에서 SVG 이미지를 열 수 있습니다. 따라서 `<iframe>`으로 SVG 문서를 임베드하는 것은 [다른 임베딩 기술인 \<object>에서 \<iframe>으로](/ko/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)에서 공부한 것처럼 수행됩니다.

간단히 살펴보세요.

```html
<iframe src="triangle.svg" width="500" height="500" sandbox>
  <img src="triangle.png" alt="세 변이 같지 않은 삼각형" />
</iframe>
```

이것은 확실히 최선의 방법은 아닙니다.

#### 단점

- 보시다시피 `iframe`에는 대체 메커니즘이 있지만 브라우저는 `iframe`을 전혀 지원하지 않는 경우에만 대체를 표시합니다.
- 또한 SVG와 현재 웹페이지의 {{glossary('origin')}}가 같지 않으면 기본 웹페이지에서 JavaScript를 사용하여 SVG를 조작할 수 없습니다.

## 능동적 학습: SVG로 놀기

이 능동적 학습 섹션에서는 몇 가지 SVG를 재미있게 사용해 보시기 바랍니다. 아래의 입력 섹션에서 시작하는 데 도움이 되는 몇 가지 샘플을 이미 제공한 것을 확인할 수 있습니다. 또한 [SVG 요소 참조](/ko/docs/Web/SVG/Element)로 이동하여 SVG에서 사용할 수 있는 다른 장난감에 대한 자세한 내용을 찾아서 사용해 볼 수도 있습니다. 이 섹션은 여러분의 리서치 기술을 연습하고 재미를 느끼기 위한 것입니다.

코드가 멈춰서 작동되지 않는 경우 언제든지 재설정 버튼을 사용하여 코드를 재설정할 수 있습니다.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Editable code</h2>
<p class="a11y-label">
  Press Esc to move focus away from the code area (Tab inserts a tab character).
</p>

<textarea id="code" class="input" style="width: 95%;min-height: 200px;">
  <svg width="100%" height="100%">
    <rect width="100%" height="100%" fill="red" />
    <circle cx="100%" cy="100%" r="150" fill="blue" stroke="black" />
    <polygon points="120,0 240,225 0,225" fill="green"/>
    <text x="50" y="100" font-family="Verdana" font-size="55"
          fill="white" stroke="black" stroke-width="2">
            Hello!
    </text>
  </svg>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" disabled />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const solution = document.getElementById("solution");
const output = document.querySelector(".output");
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Show solution";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Show solution") {
    textarea.value = solutionEntry;
    solution.value = "Hide solution";
  } else {
    textarea.value = userEntry;
    solution.value = "Show solution";
  }
  updateCode();
});

const htmlSolution = "";
let solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// 텍스트 영역에서 탭 키 사용을 중지하고
// 대신 캐럿 위치에 탭을 작성하도록 합니다.

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  const scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;
  const front = textarea.value.substring(0, caretPos);
  const back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );

  textarea.value = front + text + back;
  caretPos += text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// 사용자가 텍스트 영역 코드를 업데이트할 때마다 저장된 사용자 코드를 업데이트합니다.

textarea.onkeyup = function () {
  // 솔루션이 아닌 사용자 코드가 표시될 때의 상태만 저장하여 사용자 코드 위에 솔루션이 저장되지 않도록 하려는 것입니다.
  if (solution.value === "Show solution") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Active_Learning_Playing_with_SVG', 700, 540) }}

## 요약

이 글에서는 벡터 그래픽과 SVG가 무엇인지, 왜 알아두면 유용한지, 웹페이지에 SVG를 포함하는 방법에 대해 간략하게 살펴보았습니다. 이 글은 SVG를 배우기 위한 완전한 가이드가 아니라 웹을 돌아다니다가 SVG를 만났을 때 어떤 것인지 알 수 있도록 포인터를 제공하기 위한 것입니다. 따라서 아직 SVG 전문가가 아니라고 생각되더라도 걱정하지 마세요. 작동 원리에 대해 자세히 알아보고 싶으시다면 아래에 도움이 될 만한 링크가 포함되어 있습니다.

이 모듈의 마지막 글에서는 [반응형 이미지](/ko/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)에 대해 자세히 살펴보면서 다양한 기기에서 이미지가 더 잘 작동하도록 하는 HTML의 도구를 살펴봅니다.

## 같이 보기

- MDN의 [SVG 튜토리얼](/ko/docs/Web/SVG/Tutorial/Getting_Started)
- [반응형 SVG를 위한 빠른 팁](https://thenewcode.com/744/Making-SVG-Responsive)
- [Sara Soueidan의 반응형 SVG 이미지 튜토리얼](https://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/)
- [SVG의 접근성 이점](https://www.w3.org/TR/SVG-access/)
- [SVG 속성 및 CSS](https://css-tricks.com/svg-properties-and-css/)
- [SVG 크기를 조정하는 방법](https://css-tricks.com/scale-svg/) (래스터 그래픽만큼 간단하지 않습니다!)

{{PreviousMenuNext("Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies", "Learn/HTML/Multimedia_and_embedding/Responsive_images", "Learn/HTML/Multimedia_and_embedding")}}
