---
title: 텍스트 표시 방향 제어하기
slug: Learn/CSS/Building_blocks/Handling_different_text_directions
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks")}}

CSS 학습에서 지금까지 경험한 많은 속성과 값은 화면의 크기와 연결되어 있습니다. 예를 들어, 박스의 위, 오른쪽, 아래쪽 및 왼쪽에 테두리를 만듭니다. 이러한 실제 측정 기준은 가로로 표시되는 콘텐츠에 매우 깔끔하게 매핑되며, 기본적으로 웹은 오른쪽에서 왼쪽으로 쓰는 언어 (예: 아랍어) 보다 왼쪽에서 오른쪽으로 쓰는 언어 (예: 영어 또는 프랑스어) 를 더 잘 지원하는 경향이 있습니다.

그러나 최근 몇 년 동안, CSS 는 오른쪽에서 왼쪽 뿐만 아니라 위에서 아래로 오는 콘텐츠 (예: 일본어) 를 포함하여 다른 내용의 방향성을 더 잘 지원하기 위해 발전했습니다 — 이러한 다른 방향을 **쓰기 모드 (writing modes)** 라고 합니다. 학습 과정을 진행하고 레이아웃 작업을 시작함에 따라 쓰기 모드에 대한 이해가 도움이 될 것이므로 지금 소개하겠습니다.

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
      <td>최신 CSS 에 대한 쓰기 모드의 중요성을 이해하기.</td>
    </tr>
  </tbody>
</table>

## 쓰기 모드 (writing modes)란 무엇인가?

CSS 쓰기 모드는 텍스트가 가로 또는 세로로 표시되는지 여부를 나타냅니다. {{cssxref("writing-mode")}} 속성을 사용하면 쓰기 모드에서 다른 쓰기 모드로 전환할 수 있습니다. 이를 위해 세로 쓰기 모드를 사용하는 언어로 작업할 필요는 없습니다 — 창의적 목적으로 레이아웃 일부의 쓰기 모드를 변경할 수도 있습니다.

아래 예에서는 `writing-mode: vertical-rl` 를 사용하여 표시되는 제목이 있습니다. 이제 텍스트가 세로로 나타납니다. 세로 텍스트는 그래픽 디자인에서 일반적이며, 웹 디자인에서 보다 흥미로운 모양과 느낌을 추가할 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/simple-vertical.html", '100%', 800)}}

[`writing-mode`](/ko/docs/Web/CSS/writing-mode) 속성에 가능한 세 가지 값은 다음과 같습니다:

- `horizontal-tb`: 블록의 표시 방향은 위에서 아래 입니다. 문장은 가로로 표시됩니다.
- `vertical-rl`: 블록의 표시 방향은 오른쪽에서 왼쪽입니다. 문장은 수직으로 표시됩니다.
- `vertical-lr`: 블록의 표시 방향은 왼쪽에서 오른쪽입니다. 문장은 수직으로 표시됩니다.

따라서 `writing-mode` 속성은 실제로 페이지에서 블록 수준 요소가 표시되는 방향을 설정합니다 — 위에서 아래로, 오른쪽에서 왼쪽으로 또는 왼쪽에서 오른쪽으로. 그러면 문장의 텍스트 방향이 지시됩니다.

## 쓰기 모드 와 블록 및 인라인 레이아웃

우리는 이미 [블록 및 인라인 레이아웃](/ko/docs/Learn/CSS/Building_blocks/The_box_model#Block_and_inline_boxes) 과 일부는 블록 요소로 표시되고 다른 것은 인라인 요소로 표시된다는 사실에 대해 이미 논의했습니다. 위에서 설명한 것처럼 블록과 인라인은 실제 화면이 아니라 문서의 쓰기 모드와 연결되어 있습니다. 영어와 같이 텍스트를 가로로 표시하는 쓰기 모드를 사용하는 경우 블록은 페이지의 맨 위에서 아래로만 표시됩니다.

예제를 보면 더 명확해집니다. 이 다음 예제에서는 제목과 단락을 포함하는 두 개의 박스가 있습니다. 첫 번째 쓰기 모드는 페이지 상단에서 하단으로 수평으로 표시되는 `writing-mode: horizontal-tb` 를 사용합니다. 두 번째 쓰기 모드는 세로로 오른쪽에서 왼쪽으로 표시되는 `writing-mode: vertical-rl` 를 사용합니다.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/block-inline.html", '100%', 1200)}}

쓰기 모드를 전환하면, 블록 (block) 방향과 인라인 (inline) 방향을 변경합니다. `horizontal-tb` 쓰기 모드에서 블록 방향은 위에서 아래로 진행됩니다. `vertical-rl` 쓰기 모드에서 블록 방향은 오른쪽에서 왼쪽으로 수평으로 표시됩니다. 따라서 **블록 크기**는 항상 쓰기 모드에서 페이지에 표시되는 방향 블록입니다. **인라인 크기**는 항상 문장이 표시되는 방향입니다.

이 그림은 가로 쓰기 모드에 있을 때 2 차원 모양을 보여줍니다.![가로 쓰기 모드에 대한 블록 및 인라인 축을 표시](horizontal-tb.png)

이 그림은 세로 쓰기 모드에서 2 차원 모양을 보여줍니다.

![수직 쓰기 모드에 대한 블록 및 인라인 축을 표시](vertical.png)

CSS 레이아웃, 특히 최신 레이아웃 방법을 살펴보기 시작하면, 블록 및 인라인에 대한 이 아이디어가 매우 중요해 집니다. 나중에 다시 방문하겠습니다.

### 방향 (Direction)

쓰기 모드 외에 텍스트 방향도 있습니다. 위에서 언급한 것처럼, 아랍어와 같은 일부 언어는 가로로 작성되지만, 오른쪽에서 왼쪽으로 작성됩니다. 이것은 창의적 의미에서 사용할 가능성이 있는 것이 아닙니다 — 단순히 오른쪽에 무언가를 정렬하려면 다른 방법이 있습니다 — 그러나 CSS 의 특성의 일부로 이것을 이해하는 것이 중요합니다. 웹은 왼쪽에서 오른쪽으로 표시되는 언어만을 위한 것이 아닙니다!

쓰기 모드와 텍스트 방향이 변경될 수 있기 때문에, 최신 CSS 레이아웃 방법은 왼쪽과 오른쪽, 위와 아래를 참조하지 않습니다. 대신에 그들은 인라인과 블록이라는 아이디어와 함께 _시작_ 과 _끝_ 에 대해 이야기할 것입니다. 지금 그것에 대해 너무 걱정하지 말고 레이아웃을 살펴보기 시작할 때, 이러한 아이디어를 명심하십시오. CSS 에 대한 이해에 도움이 될 것입니다.

## 논리적 속성 및 값

그러나 이 시점의 학습에서 쓰기 모드와 방향에 대해 이야기하는 이유는 우리가 이미 화면의 크기와 관련된 많은 속성을 보았고, 수평 쓰기 모드에 있을 때 가장 의미가 있기 때문입니다.

두 개의 박스를 다시 살펴 보겠습니다 — 하나는 `horizontal-tb` 쓰기 모드이고 다른 하나는 `vertical-rl` 입니다. 이 두 박스 모두 {{cssxref("width")}} 를 제공했습니다. 박스가 세로 쓰기 모드일 때 여전히 너비가 있으며, 이로 인해 텍스트가 overflow 되는 것을 알 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/width.html", '100%', 1200)}}

이 시나리오에서 우리가 정말로 원하는 것은 쓰기 모드와 함께 높이와 너비를 본질적으로 바꾸는 것입니다. 세로 쓰기 모드인 경우 박스를 가로 쓰기 모드에서와 같이 블록 크기로 확장하려고 합니다.

이를 쉽게하기 위해, CSS 는 최근에 매핑된 속성 세트를 개발했습니다. 이것들은 본질적으로 — `width` 및 `height` — 와 같은 물리적 속성을 **논리적** 또는 **flow relative** 버전으로 대체합니다.

가로 쓰기 모드인 경우 `width` 에 매핑된 속성을 {{cssxref("inline-size")}} 라고 합니다 — 인라인의 크기를 나타냅니다. `height` 의 속성 이름은 {{cssxref("block-size")}} 이며 블록의 크기입니다. `width` 가 `inline-size` 로 대체된 아래 예에서 이것이 어떻게 작동하는지 볼 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/inline-size.html", '100%', 1200)}}

### 논리적 마진, 테두리 및 패딩 속성

지난 두 가지 수업에서 CSS 박스 모델과 CSS 테두리에 대해 배웠습니다. 마진, 테두리 및 패딩 속성에는 {{cssxref("margin-top")}}, {{cssxref("padding-left")}} 및 {{cssxref("border-bottom")}} 과 같은 여러 물리적 속성 인스턴스가 있습니다. 너비와 높이에 대한 매핑과 같은 방식으로 이러한 속성에 대한 매핑도 있습니다.

`margin-top` 속성은 {{cssxref("margin-block-start")}} 에 매핑됩니다 — 이것은 항상 블록 크기의 시작에서 마진을 나타냅니다.

{{cssxref("padding-left")}} 속성은 인라인 방향의 시작 부분에 적용되는 패딩 {{cssxref("padding-inline-start")}} 에 매핑됩니다. 이것은 쓰기 모드에서 문장이 시작되는 곳입니다. {{cssxref("border-bottom")}} 속성은 블록 크기의 끝의 경계인 {{cssxref("border-block-end")}} 에 매핑됩니다.

아래에서 물리적 속성과 논리적 속성을 비교할 수 있습니다.

**`.box` 의 쓰기 모드 속성을 `vertical-rl` 로 전환하여 박스의 `writing-mode` 를 변경하면 물리적 속성이 물리적 방향과 연결되어 있는 반면, 논리적 속성은 쓰기 모드로 전환됩니다.**

**또한 {{htmlelement("h2")}} 에 검은색 `border-bottom` 이 있음을 알 수 있습니다. 아래쪽 테두리가 항상 두 쓰기 모드에서 텍스트 아래로 이동하는 방법을 알아낼 수 있습니까?**

{{EmbedGHLiveSample("css-examples/learn/writing-modes/logical-mbp.html", '100%', 1200)}}

모든 개별 테두리를 고려할 때 많은 속성이 있으며, [논리 속성 및 값](/ko/docs/Web/CSS/CSS_Logical_Properties) 에 대한 MDN 페이지에서 매핑된 속성을 모두 볼 수 있습니다.

### 논리적 값

지금까지 논리적 속성 이름을 살펴보았습니다. `top`, `right`, `bottom` 및 `left` 의 물리적 값을 취하는 속성도 있습니다 — 이러한 값에는 `block-start`, `inline-end`, `block-end` 및 `inline-start` 과 같은 논리값에 대한 매핑도 있습니다.

예를 들어, 이미지를 왼쪽으로 띄워서 텍스트가 이미지를 감싸도록 할 수 있습니다. 아래 예와 같이 `left` 을 `inline-start` 으로 바꿀 수 있습니다.

**이 예제에서 쓰기 모드를 `vertical-rl` 로 변경하여 이미지에 어떤 일이 발생하는지 확인하십시오. float 를 변경하려면 `inline-start` 를 `inline-end` 로 변경하십시오.**

{{EmbedGHLiveSample("css-examples/learn/writing-modes/float.html", '100%', 1200)}}

여기에서는 쓰기 모드가 무엇이든 상관없이 논리 마진값을 사용하여 마진이 올바른 위치에 있는지 확인합니다.

### 물리적 또는 논리적 속성을 사용해야 합니까?

논리적 속성과 값은 물리적 속성보다 최신이므로, 브라우저에서만 최근에 구현되었습니다. 브라우저 지원이 얼마나 돌아가는지 보려면, MDN 의 속성 페이지를 확인할 수 있습니다. 여러 쓰기 모드를 사용하지 않는 경우, 지금은 실제 버전을 사용하는 것이 좋습니다. 그러나 궁극적으로 사람들은 flexbox 및 grid 와 같은 레이아웃 방법을 다루기 시작하면, 많은 의미가 있기 때문에 사람들이 대부분의 경우 논리적 버전으로 전환할 것으로 기대합니다.

## 요약

이 학습에서 설명 개념은 CSS 에서 점점 중요해지고 있습니다. 블록과 인라인 방향에 대한 이해와 쓰기 모드의 변화에 따른 텍스트 방향의 변화는 앞으로 매우 유용할 것입니다. 가로 이외의 쓰기 모드를 사용하지 않아도 CSS 를 이해하는 데 도움이 됩니다.

다음 학습에서는 CSS 의 overflow 를 자세히 살펴볼 것입니다.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks")}}
