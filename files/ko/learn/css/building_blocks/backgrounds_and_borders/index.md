---
title: 배경 및 테두리
slug: Learn/CSS/Building_blocks/Backgrounds_and_borders
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}

이번 수업에서는 CSS 배경과 테두리로 할 수 있는 창의적인 작업을 살펴보겠습니다. 그라데이션 (gradients), 배경 이미지, 둥근 테두리를 추가하는 것에서 배경과 테두리는 CSS 의 많은 스타일 질문에 대한 답입니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        기본 컴퓨터 활용 능력,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >기본 소프트웨어 설치</a
        >,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >파일 작업</a
        >
        에 대한 기본 지식, HTML 기본 사항 (<a
          href="/ko/docs/Learn/HTML/Introduction_to_HTML"
          >HTML 소개</a
        >
        학습) 및 , CSS 작동 방식 이해 (<a
          href="/ko/docs/Learn/CSS/First_steps"
          >CSS 첫 번째 단계</a
        >
        학습)
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>박스의 배경과 테두리 스타일을 지정하는 방법 배우기.</td>
    </tr>
  </tbody>
</table>

## CSS 의 스타일링 배경

CSS {{cssxref("background")}} 속성은 이 수업에서 만나게 될 많은 background longhand 속성의 줄임말 입니다. 스타일 시트에서 복잡한 배경 속성을 발견하면, 한 번에 많은 값을 전달할 수 있으므로 이해하기 어려울 수 있습니다.

```css
.box {
  background:
    linear-gradient(
        105deg,
        rgba(255, 255, 255, 0.2) 39%,
        rgba(51, 56, 57, 1) 96%
      ) center center / 400px 200px no-repeat,
    url(big-star.png) center no-repeat,
    rebeccapurple;
}
```

이 자습서의 뒷부분에서 속기 (shorthand) 작동 방식으로 돌아가지만, 먼저 개별 배경 속성을 보고, CSS 에서 배경으로 수행할 수 있는 다양한 작업을 살펴보겠습니다.

### 배경 색상

{{cssxref("background-color")}} 속성은 CSS 의 모든 요소에 대한 배경색을 정의합니다. 이 속성은 유효한 [`<color>`](/ko/docs/Web/CSS/color_value) 를 허용합니다. `background-color` 는 요소의 내용 및 패딩 박스 아래로 확장됩니다.

아래 예에서는 다양한 색상 값을 사용하여 박스, 제목 및 {{htmlelement("span")}} 요소에 배경색을 추가했습니다.

**사용 가능한 [\<color>](/ko/docs/Web/CSS/color_value) 값을 사용하여, 이것들을 가지고 놀아보십시오.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/color.html", '100%', 800)}}

### 배경 이미지

{{cssxref("background-image")}} 속성을 사용하면 요소의 배경에 이미지를 표시할 수 있습니다. 아래 예에는 두 개의 박스가 있습니다 — 하나는 박스보다 큰 배경 이미지이고 다른 하나는 별 모양의 작은 이미지 입니다.

이 예제는 배경 이미지에 대한 두 가지를 보여줍니다. 기본적으로 큰 이미지는 박스에 맞게 축소되지 않으므로 작은 이미지만 표시되는 반면, 작은 이미지는 박스를 채우기 위해 바둑판 식으로 배열됩니다. 이 경우 실제 이미지는 단일 별 입니다.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background-image.html", '100%', 800)}}

**배경 이미지 외에 배경색을 지정하면 이미지가 색상 위에 표시됩니다. 위 예제에 `background-color` 속성을 추가하여 실제 상태를 확인하십시오.**

#### 배경 이미지 반복 제어

{{cssxref("background-repeat")}} 속성은 이미지의 타일링 동작을 제어하는 데 사용됩니다. 사용 가능한 값은 다음과 같습니다:

- `no-repeat` — 배경이 반복되지 않도록 합니다.
- `repeat-x` — 수평으로 반복합니다.
- `repeat-y` — 수직으로 반복합니다.
- `repeat` — 기본값; 양방향으로 반복합니다.

**아래 예에서 이러한 값을 사용해 보십시오. 값이 `no-repeat` 로 설정되어 별 하나만 표시됩니다. 다른 값 — `repeat-x` 및 `repeat-y` — 를 사용하여 그 효과가 무엇인지 확인하십시오.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/repeat.html", '100%', 800)}}

#### 배경 이미지 크기 조정

위의 예에서 배경의 요소보다 커서, 이미지가 크게 잘립니다. 이 경우 [길이](/ko/docs/Web/CSS/length) 나 [백분율](/ko/docs/Web/CSS/percentage) 값을 취할 수 있는 {{cssxref("background-size")}} 속성을 사용하여 이미지 크기를 배경 안에 맞출 수 있습니다.

키워드를 사용할 수도 있습니다:

- `cover` — 브라우저는 이미지를 박스 면적을 완전히 덮으면서 가로 세로 비율을 유지하며 이미지를 충분히 크게 만듭니다. 이 경우 일부 이미지가 박스 외부에 있을 수 있습니다.
- `contain` — 브라우저는 이미지를 박스 안에 들어가기에 적합한 크기로 만듭니다. 이 경우 이미지의 종횡비가 박스의 종횡비와 다른 경우, 이미지의 한쪽 또는 위쪽과 아래쪽에 간격이 생길 수 있습니다.

아래 예제에서는 위 예제의 큰 이미지를 사용했으며, 박스 안에 길이 단위를 사용하여 크기를 조정했습니다. 이미지가 왜곡된 것을 볼 수 있습니다.

다음을 시도해 보십시오.

- 배경 크기를 수정하는 데 사용되는 길이 단위를 변경 하십시오.
- 길이 단위를 제거하고 `background-size: cover` 또는 `background-size: contain` 을 사용할 때 어떻게 되는지 확인 하십시오.
- 이미지가 박스보다 작으면, `background-repeat` 의 값을 변경하여 이미지를 반복할 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/size.html", '100%', 800)}}

#### 배경 이미지 배치

{{cssxref("background-position")}} 속성을 사용하면 적용되는 박스에서 배경 이미지가 나타나는 위치를 선택할 수 있습니다. 박스의 왼쪽 상단 모서리가 `(0,0)` 이고, 박스가 가로 (`x`) 및 세로 (`y`) 축을 따라 위치하는 좌표계를 사용합니다.

> **참고:** `background-position` 의 기본값은 `(0,0)` 입니다.

가장 일반적인 `background-position` 값은 — 수평 값과 수직 값의 두 가지 개별 값을 갖습니다.

`top` 및 `right` ({{cssxref("background-image")}} 페이지에서 다른 키워드를 찾으십시오) 와 같은 키워드를 사용 할 수 있습니다:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top center;
}
```

그리고 [길이](/ko/docs/Web/CSS/length) 및 [백분율](/ko/docs/Web/CSS/percentage):

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

키워드 값을 길이 또는 백분율과 혼합할 수도 있습니다. 예를 들면:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px;
}
```

마지막으로, 박스의 특정 모서리로 부터의 거리를 나타내기 위해 4 값 구문을 사용할 수도 있습니다 — 이 경우 길이 단위는 앞에 오는 값과의 offset 입니다. 아래 CSS 에서 우리는 배경을 위쪽에서 20px, 오른쪽에서 10px 로 배치합니다:

```css
.box {
  background-image: url(star.png);
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

**아래 예제를 사용하여 이러한 값을 가지고 실습하면서 박스 안에서 별을 움직이십시오.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/position.html", '100%', 800)}}

> **참고:** `background-position` 은 {{cssxref("background-position-x")}} 및 {{cssxref("background-position-y")}} 의 줄임말로, 다른 축 위치 값을 개별적으로 설정할 수 있습니다.

### 그라데이션 (Gradient) 배경

배경에 사용될 때 — Gradient — 는 이미지 처럼 작동하며 {{cssxref("background-image")}} 속성을 사용하여 설정 됩니다.

[`<gradient>`](/ko/docs/Web/CSS/gradient) 데이터 유형에 대한 MDN 페이지에서 다양한 유형의 그라디언트 및 그라디언트로 수행 할 수 있는 작업에 대한 자세한 내용을 읽을 수 있습니다. 그라디언트를 재생하는 재미있는 방법은 웹에서 사용할 수 있는 많은 CSS 그라디언트 생성기 중 [하나](https://cssgradient.io/) 를 사용하는 것입니다. 그라디언트를 생성한 다음 이를 생성하는 소스 코드를 복사하여 붙여 넣을 수 있습니다.

아래 예제에서 다른 그라디언트를 사용해 보십시오. 두 개의 박스에는 각각 전체 박스에 걸쳐 펼쳐지는 선형 그라디언트와 설정된 크기의 방사형 그라디언트가 있습니다. 따라서 반복됩니다.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/gradients.html", '100%', 800)}}

### 여러 배경 이미지

여러 개의 배경 이미지를 가질 수도 있습니다 — 하나의 속성 값으로 여러 개의 `background-image` 값을 지정하고, 각 이미지를 쉼표로 구분합니다.

이렇게 하면 배경 이미지가 서로 겹칠 수 있습니다. 배경은 stack 맨 아래에 마지막으로 나열된 배경 이미지와 함께 쌓이고, 코드에서 그 뒤에 오는 이미지 위에 각각의 이전 이미지가 쌓입니다.

> **참고:** 그라디언트는 일반 배경 이미지와 혼합될 수 있습니다.

다른 `background-*` 속성은 `background-image` 와 같은 방식으로 쉼표로 구분된 값을 가질 수도 있습니다:

```css
background-image: url(image1.png), url(image2.png), url(image3.png),
  url(image1.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

다른 속성의 각 값은 다른 속성의 같은 위치에 있는 값과 일치합니다. 예를 들어, `image1` 의 `background-repeat` 값은 `no-repeat` 입니다. 그러나, 다른 속성의 값이 다른 경우 어떻게 됩니까? 답은 더 적은 수의 값이 순환한다는 것입니다 — 위의 예에서는 4 개의 배경 이미지가 있지만 2 개의 `background-position` 값만 있습니다. 처음 두 위치 값은 처음 두 이미지에 적용되고 다시 순환됩니다 — `image3` 에는 첫 번째 위치값이 제공되고, `image4` 에는 두 번째 위치값이 제공됩니다.

**해봅시다. 아래 예에서는 두 개의 이미지를 포함했습니다. 쌓인 순서를 설명하려면, 목록에서 어떤 배경 이미지가 먼저 나오는지 전환해 보십시오. 또는 다른 속성을 사용하여 위치, 크기 또는 반복 값을 변경하십시오.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/multiple-background-image.html", '100%', 800)}}

### 배경 첨부 (attachment)

배경에 사용할 수 있는 또 다른 옵션은 내용이 스크롤될 때 스크롤하는 방법을 지정하는 것입니다. 이는 {{cssxref("background-attachment")}} 속성을 사용하여 제어되며, 다음 값을 사용할 수 있습니다:

- `scroll`: 페이지가 스크롤될 때 요소의 배경이 스크롤 되도록 합니다. 요소 내용이 스크롤되면, 배경이 움직이지 않습니다. 실제로 배경은 페이지에서 동일한 위치로 고정되므로, 페이지가 스크롤될 때 스크롤 됩니다.
- `fixed`: 요소의 배경을 viewport 에 고정시켜, 페이지나 요소 내용을 스크롤할 때 스크롤되지 않도록 합니다. 항상 화면에서 동일한 위치에 유지됩니다.
- `local`: 이 값은 나중에 추가 되었습니다 (Explorer 9 이상에서만 지원되지만, 다른 값은 IE4 이상에서 지원됨). 왜냐하면 `scroll` 값이 다소 혼란스럽고 많은 경우 실제로 원하는 것을 수행하지 않기 때문입니다. `local` 값은 배경을 설정된 요소로 고정하므로, 요소를 스크롤하면 배경과 함께 스크롤 됩니다.

{{cssxref("background-attachment")}} 속성은 스크롤할 내용이 있을 때만 영향을 미치므로, 세 가지 값의 차이점을 보여주는 데모를 만들었습니다 — [background-attachment.html](http://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) 을 살펴보십시오 (여기에서 [소스 코드](https://github.com/mdn/learning-area/tree/master/css/styling-boxes/backgrounds) 를 참조하십시오).

### 배경 속기 (shorthand) 속성 사용

이 수업 시작 부분에서 언급했듯이, {{cssxref("background")}} 속성을 사용하여 지정된 배경을 자주 볼 수 있습니다. 이 속기 기능을 사용하면 모든 다른 속성을 한 번에 설정할 수 있습니다.

여러 배경을 사용하는 경우, 첫 번째 배경에 대한 모든 속성을 지정한 다음, 쉼표 뒤에 다음 배경을 추가해야 합니다. 아래 예에서는 크기와 위치가 있는 그라디언트, `no-repeat` 및 이미지 위치가 있는 이미지 배경, 색상이 있습니다.

배경 이미지 속기 값을 쓸 때 따라야 할 몇 가지 규칙이 있습니다. 예를 들면:

- `background-color` 는 마지막 쉼표 뒤에만 지정할 수 있습니다.
- `background-size` 의 값은 `background-position`, 직후에 포함되며 `center/80%` 와 같이 '/' 문자로 구분됩니다.

모든 고려 사항을 보려면 MDN 페이지의 {{cssxref("background")}} 를 살펴보십시오.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/background.html", '100%', 800)}}

### 배경이 있는 접근성 고려 사항

배경 이미지나 색상 위에 텍스트를 배치 할 때, 방문자가 텍스트를 읽을 수 있도록 contrast 를 충분히 유지해야 합니다. 이미지를 지정하고 해당 이미지 위에 텍스트를 배치하는 경우, 이미지가 로드되지 않은 경우 텍스트를 읽을 수 있는 `background-color` 도 지정해야 합니다.

화면 판독기는 배경 이미지를 구문 분석할 수 없으므로 순전히 장식이어야 합니다. 중요한 내용은 HTML 페이지의 일부여야 하며, 배경에 포함되지 않아야 합니다.

## 테두리

박스 모델에 대해 알아볼 때, 테두리가 박스 크기에 어떤 영향을 미치는지 알아 냈습니다. 이 수업에서는 테두리를 창의적으로 사용하는 방법을 살펴봅니다. 일반적으로 CSS 를 사용하여 요소에 테두리를 추가할 때는, CSS 의 한 라인에 테두리의 색상, 너비 및 스타일을 설정하는 속기 속성을 사용합니다.

{{cssxref("border")}} 를 사용하여 박스의 네 면 모두에 테두리를 설정할 수 있습니다:

```css
.box {
  border: 1px solid black;
}
```

또는 박스의 한쪽 가장자리를 대상으로 지정할 수 있습니다. 예를 들면:

```css
.box {
  border-top: 1px solid black;
}
```

이러한 속기의 개별 속성은 다음과 같습니다:

```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

그리고 longhands 는 다음과 같습니다:

```css
.box {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> **참고:** 위쪽, 오른쪽, 아래쪽 및 왼쪽 테두리 속성에는 문서의 쓰기 모드 (예: 왼쪽에서 오른쪽으로 또는 오른쪽에서 왼쪽으로 텍스트 또는 위에서 아래로) 와 관련된 논리적 속성이 매핑되어 있습니다. 다음 수업에서는 [다양한 텍스트 방향 처리](/ko/docs/Learn/CSS/Building_blocks/Handling_different_text_directions) 에 대해 다룰것입니다.

**테두리에 사용할 수 있는 다양한 스타일이 있습니다. 아래 예에서 우리는 박스의 네 면에 다른 테두리 스타일을 사용했습니다. 테두리 스타일, 너비 및 색상으로 실습하여 테두리의 작동 방식을 확인 하십시오.**

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/borders.html", '100%', 800)}}

### 둥근 테두리

박스의 둥근 테두리는 {{cssxref("border-radius")}} 속성 과 박스의 각 모서리와 관련되 관련 longhands 를 사용하여 수행됩니다. 두 개의 길이 또는 백분율을 값으로 사용할 수 있습니다. 첫 번째 값은 가로 반경을 정의하고 두 번째 값은 세로 반경을 정의합니다. 많은 경우에 하나의 값만 전달하면 둘 다에 사용됩니다.

예를 들어, 박스의 네 모서리를 모두 10px radius 로 만들려면:

```css
.box {
  border-radius: 10px;
}
```

또는 오른쪽 상단 모서리의 가로 반경이 1em 이고, 세로 반경이 10% 가 되도록 하려면:

```css
.box {
  border-top-right-radius: 1em 10%;
}
```

아래 예에서 네 모서리를 모두 설정한 다음, 오른쪽 위 모서리의 값을 변경하여 다르게 만들었습니다. 값을 사용하여 모서리를 변경할 수 있습니다. 사용 가능한 구문 옵션을 보려면 {{cssxref("border-radius")}} 의 속성 페이지를 살펴보십시오.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/corners.html", '100%', 800)}}

## 배경과 테두리로 실습하기

새로운 지식을 테스트하려면 아래 예제를 시작점으로 사용하여 배경과 테두리를 사용하여 다음을 작성하십시오:

1. 박스에 둥근 모서리가 10px 인, 5px 검은색 단색 테두리를 지정하십시오.
2. 배경 이미지를 추가하고 (URL `balloons.jpg` 사용) 박스를 덮도록 크기를 조정하십시오.
3. `<h2>` 에 반투명 검정색 배경색을 지정하고 텍스트를 흰색으로 만듭니다.

{{EmbedGHLiveSample("css-examples/learn/backgrounds-borders/task.html", '100%', 800)}}

> **참고:** [여기에서 해결책을 살펴 보기](https://github.com/mdn/css-examples/blob/master/learn/solutions.md) 할 수 있지만 — 먼저 스스로 알아보십시오!

## 요약

여기서는 많은 내용을 다루었으며, 박스에 배경이나 데두리를 추가하는 것이 상당히 많다는 것을 알 수 있습니다. 논의한 기능에 대해 더 자세히 알고 싶다면, 다른 속성 페이지를 살펴보십시오. MDN 의 각 페이지에는 지식을 가지고 실습하고 향상시키기 위한 더 많은 사용 예제가 있습니다.

다음 수업에서는 문서의 쓰기 모드가 CSS 와 어떻게 상호 작용하는지 알아봅니다. 텍스트가 왼쪽에서 오른쪽으로 표시되지 않으면 어떻게 됩니까?

{{PreviousMenuNext("Learn/CSS/Building_blocks/The_box_model", "Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks")}}
