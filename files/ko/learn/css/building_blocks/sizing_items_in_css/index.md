---
title: CSS 에서 항목 크기 조정
slug: Learn/CSS/Building_blocks/Sizing_items_in_CSS
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}

지금까지 다양한 수업에서는 CSS 를 사용하여 웹 페이지의 항목 크기를 조정하는 여러가지 방법을 살펴 보았습니다. 디자인의 다양한 기능이 얼마나 큰지 이해하는 것이 중요하며, 이 수업에서는 CSS 를 통해 요소의 크기를 결정하는 다양한 방법을 요약하고 크기 조정과 관련하여 향후 도움이 될 몇 가지 용어를 정의합니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">전제조건:</th>
      <td>
        <p>
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
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>CSS 로 크기를 조정할 수 있는 다양한 방법 이해하기.</td>
    </tr>
  </tbody>
</table>

## 사물의 자연적 또는 본질적인 크기

HTML 요소는 CSS 의 영향을 받기 전에 설정한 자연스러운 크기입니다. 간단한 예는 이미지입니다. 이미지는 페이지에 포함된 이미지 파일에 정의된 너비와 높이를 갖습니다. 이 크기는 이미지 자체에서 나오는 — **고유 크기 (intrinsic size)** 로 설명됩니다.

페이지에 이미지를 배치하고 `<img>` 태그 또는 CSS 의 속성을 사용하여 높이와 너비를 변경하지 않으면, 고유 크기를 사용하여 이미지가 표시됩니다. 파일의 범위를 볼 수 있도록 아래 예제의 이미지에 테두리를 지정했습니다.

{{EmbedGHLiveSample("css-examples/learn/sizing/intrinsic-image.html", '100%', 600)}}

그러나 빈 {{htmlelement("div")}} 에는, 자체 크기가 없습니다. 내용이 없는 HTML 에 {{htmlelement("div")}} 를 추가한 다음 이미지와 마찬가지로 테두리를 지정하면, 페이지에 한 라인이 표시됩니다. 이것은 요소의 접힌 (collapsed) 테두리입니다 — 열려야 할 내용이 없습니다. 아래 예제에서, 이 테두리는 container 의 너비까지 확장됩니다. 이는 블록 레벨 요소이기 때문에 친숙해지기 시작해야 합니다. 내용이 없기 때문에 높이 (또는 블록의 크기) 가 없습니다.

{{EmbedGHLiveSample("css-examples/learn/sizing/intrinsic-text.html", '100%', 500)}}

위의 예에서, 빈 요소 안에 텍스트를 추가하십시오. 요소의 높이가 내용에 의해 정의되므로 테두리에 해당 텍스트가 포함됩니다. 따라서 블록 차원에서 이 `<div>` 의 크기는 내용의 크기에서 비롯됩니다. 다시 말하지만, 이것은 요소의 고유 크기입니다 — 크기는 내용에 의해 정의됩니다.

## 특정 크기 설정

물론 디자인의 요소에 특정 크기를 줄 수 있습니다. 요소에 크기가 주어지면 (그리고 그 내용이 그 크기에 맞아야 함) 우리는 이것을 **외적인 크기 (extrinsic size)** 로 지칭합니다. 위의 예에서 `<div>` 를 가져와서 — 구체적인 {{cssxref("width")}} 및 {{cssxref("height")}} 값을 지정할 수 있으며, 이제 어떤 내용이 들어가든 해당 크기를 갖습니다. [overflow 에 대한 이전 수업](/ko/docs/Learn/CSS/Building_blocks/Overflowing_content) 에서 발견한 것처럼 요소에 맞는 공간보다 많은 콘텐츠가 있으면 설정된 높이로 인해 콘텐츠가 overflow 될 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/sizing/height.html", '100%', 600)}}

이 overflow 문제로 인해, 요소의 높이를 길이 또는 백분율로 고정하는 것은 웹에서 매우 신중하게 수행해야 하는 작업입니다.

### 백분율 사용하기

여러 방법으로 백분율은 길이 단위처럼 작동하며, [값과 단위에 대한 수업에서 논의한 것처럼](/ko/docs/Learn/CSS/Building_blocks/Values_and_units#Percentages), 종종 길이와 상호 교환적으로 사용될 수 있습니다. 백분율을 사용하는 경우 백분율이 **_얼마인지_** 알고 있어야 합니다. 다른 container 안에 있는 박스의 경우 자식 박스에 백분율 너비를 지정하면, 부모 container 너비의 백분율이 됩니다.

{{EmbedGHLiveSample("css-examples/learn/sizing/percent-width.html", '100%', 600)}}

백분율을 포함하는 블록의 크기에 대해 결정되기 때문입니다. 백분율이 적용되지 않으면 `<div>` 는 블록 레벨 요소이므로 사용가능한 공간의 100% 를 차지합니다. 너비를 백분율로 지정하면, 일반적으로 채워지는 공간의 백분율이 됩니다.

### 백분율 마진 및 패딩

`margins` 과 `padding` 을 백분율로 설정하면 이상한 동작이 나타날 수 있습니다. 아래 예제에는 박스가 있습니다. 내부 박스에 {{cssxref("margin")}} 을 10% 로, {{cssxref("padding")}} 을 10% 로 지정했습니다. 박스 상단과 하단의 패딩과 마진은 왼쪽과 오른쪽의 마진과 크기가 같습니다.

{{EmbedGHLiveSample("css-examples/learn/sizing/percent-mp.html", '100%', 700)}}

예를 들어 상단 및 하단 마진 백분율이 요소 높이의 백분율이고, 왼쪽 및 오른쪽 마진 백분율이 요소 너비의 백분율일 것으로 예상할 수 있습니다. 그러나, 이것은 사실이 아닙니다!

백분율로 마진 및 패딩을 사용하는 경우, 값은 **인라인 크기 (inline size)** 에서 계산되므로 — horizontal 언어로 작업할 때의 너비입니다. 이 예에서 모든 마진과 패딩은 너비의 10% 입니다. 즉, 박스 전체에 같은 크기의 마진과 패딩을 둘 수 있습니다. 이 방법으로 백분율을 사용하면 기억할 가치가 있습니다.

## min- 및 max- 크기

고정된 크기를 주는 것 외에도, CSS 에 요소에 최소 또는 최대 크기를 제공하도록 요청할 수 있습니다. 가변적인 양의 내용을 포함할 수 있는 박스가 있고, **_항상_** 특정 높이 이상이 되도록 하려면, {{cssxref("min-height")}} 속성을 설정할 수 있습니다. 박스는 항상 이 높이 이상이지만, 박스의 최소 높이에 대한 공간보다 더 많은 내용이 있으면 키가 더 커집니다.

아래 예에서 정의된 높이가 150 픽셀인 두 개의 박스를 볼 수 있습니다. 왼쪽의 박스는 키가 150 픽셀입니다; 오른쪽의 상자에는 더 많은 공간이 필요한 내용이 있으므로, 최소 150 픽셀 이상으로 키가 커졌습니다.

{{EmbedGHLiveSample("css-examples/learn/sizing/min-height.html", '100%', 800)}}

이는 overflow 를 피하면서 가변적인 양의 콘텐츠를 처리할 때 매우 유용합니다.

{{cssxref("max-width")}} 의 일반적인 용도는 이미지를 원래 너비로 표시할 공간이 충분하지 않으면 이미지의 크기를 줄이면서, 해당 너비보다 크게되지 않도록 하는것입니다.

예를 들어, 이미지에서 `width: 100%` 를 설정하고 이미지의 고유 (intrinsic) 너비가 container 보다 작으면, 이미지가 강제로 늘어나고 커져 픽셀화되어 나타납니다. 고유 너비가 container 보다 크면 overflow 됩니다. 두 경우 모두 여러분이 원하는 것이 아닙니다.

`max-width: 100%` 를 대신 사용하면, 이미지가 고유 크기보다 작아질 수 있지만, 크기의 100% 에서 멈춥니다.

아래 예에서는 동일한 이미지를 두 번 사용했습니다. 첫 번째 이미지에는 `width: 100%` 로 주어졌으며, 그보다 큰 container 에 있으므로 container 너비로 늘어납니다. 두 번째 이미지에는 `max-width: 100%` 로 설정되어 있으므로 container 를 채우기 위해 늘어나지 않습니다. 세 번째 박스에는 동일한 이미지가 다시 포함되며, `max-width: 100%` 로 설정됩니다; 이 경우 박스에 맞게 크기가 어떻게 축소되었는지 확인할 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/sizing/max-width.html", '100%', 800)}}

이 기술은 이미지를 반응형으로 만드는 데 사용되므로 더 작은 장치에서 볼 때 이미지가 적절하게 축소됩니다. 그러나 이 기술을 사용하여 실제로 큰 이미지를 로드한 다음 브라우저에서 축소하면 안됩니다. 이미지는 디자인에 표시되는 가장 큰 크기보다 커야합니다. 지나치게 큰 이미지를 다운로드하면, 사이트 속도가 느려질 수 있으며, 데이터 요금제인 경우 더 많은 비용이 발생할 수 있습니다.

> **참고:** [반응형 이미지 기술](/ko/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) 에 대해 자세히 알아보십시오.

## Viewport 단위

Viewport — 사이트를 보는 데 사용하는 브라우저에서 페이지의 가시 영역 — 또한 크기가 있습니다. CSS 에는 viewport 의 크기와 관련된 단위가 있습니다 — viewport 너비의 경우 `vw` 단위, viewport 높이의 경우 `vh`. 이 단위를 사용하면 사용자의 viewport 에 상대적인 크기를 지정할 수 있습니다.

`1vh` 는 viewport 높이의 1% 와 같고, `1vw` 는 viewport 너비의 1% 와 같습니다. 이 단위를 사용하여 박스 크기 뿐만 아니라, 텍스트도 조정할 수 있습니다. 아래 예에서는 20vh 및 20vw 크기의 박스가 있습니다. 박스에는 문자 `A` 가 포함되어 있으며 {{cssxref("font-size")}} 에 10vh 가 지정되었습니다.

{{EmbedGHLiveSample("css-examples/learn/sizing/vw-vh.html", '100%', 600)}}

**`vh` 및 `vw` 값을 변경하면 박스 또는 글꼴의 크기가 변경됩니다; viewport 크기를 변경하면 viewport 를 기준으로 크기가 조정되므로 크기도 변경됩니다. viewport 크기를 변경할 때 예제 변경 사항을 보려면 크기를 조정할 수 있는 새 브라우저 창에 예제를 로드해야 합니다 (위에 표시된 예제가 포함된 `<iframe>` 이 viewport 임). [예제를 열고](https://mdn.github.io/css-examples/learn/sizing/vw-vh.html), 브라우저 창의 크기를 조정한 후 박스와 텍스트의 크기에 어떤 영향이 있는지 관찰하십시오.**

viewport 에 따라 크기를 조정하면 디자인에 유용할 수 있습니다. 예를 들어, 전체 콘텐츠 페이지 섹셩을 콘텐츠의 나머지 부분보다 먼저 표시하려면, 페이지의 해당 부분을 100vh 높이로 설정하면 나머지 콘텐츠가 viewport 아래로 밀려서 문서가 스크롤 된 후에만 표시됩니다.

## 요약

이번 수업에서는 웹에서 크기를 조정할 때 발생할 수 있는 몇 가지 주요 문제에 대해 설명합니다. [CSS 레이아웃](/ko/docs/Learn/CSS/CSS_layout) 으로 이동할 때, 크기 조정은 다양한 레이아웃 방법을 익히는 데 매우 중요하므로 계속 진행하기 전에 여기에서 개념을 이해하는 것이 좋습니다.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks")}}
