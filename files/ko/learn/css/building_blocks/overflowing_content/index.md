---
title: 콘텐츠 overflow
slug: Learn/CSS/Building_blocks/Overflowing_content
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}

이번 수업에서는 CSS 의 또 다른 중요한 개념인 — **overflow** 를 살펴봅니다. Overflow 는 박스 안에 편안하게 담기에는 너무 많은 내용이 있을 때 발생합니다. 이 안내서에서는 내용과 관리 방법에 대해 설명합니다.

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
      <td>overflow 및 이를 관리하는 방법 이해하기.</td>
    </tr>
  </tbody>
</table>

## overflow 란 무엇인가?

우리는 이미 CSS 의 모든 것이 박스라는 것을 알고 있으며, {{cssxref("width")}} 및 {{cssxref("height")}} (또는 {{cssxref("inline-size")}} 및 {{cssxref("block-size")}}) 의 값을 제공하여 박스의 크기를 제한할 수 있음을 알고 있습니다. Overflow 는 박스에 내용이 너무 많을 때 발생하므로, 박스 안에 들어가지 않습니다. CSS 는 이 overflow 를 관리할 수 있는 다양한 도구를 제공하며, 이 초기 단계에서 이해하는 데 유용한 개념이기도 합니다. CSS 를 작성할 때, 특히 CSS 레이아웃에 더 깊이 들어가면 overflow 상황이 자주 발생합니다.

## CSS 는 "데이터 손실" 을 피하려고 합니다

overflow 가 발생했을 때, CSS 가 기본적으로 어떻게 동작하는지 보여주는 두 가지 예를 살펴보도록 하겠습니다.

찻 번째는 `height` 를 지정하여 블록 크기가 제한된 박스입니다. 그런 다음 이 박스에 필요한 공간보다 많은 콘텐츠를 추가했습니다. 내용물이 박스에 넘쳐서 박스 아래의 단락 위에 다소 혼란스럽게 놓여 있습니다.

{{EmbedGHLiveSample("css-examples/learn/overflow/block-overflow.html", '100%', 600)}}

두 번째는 인라인 크기로 제한된 박스의 단어입니다. 박스가 해당 단어에 맞지 않도록 너무 작게 만들어져 박스 밖으로 나옵니다.

{{EmbedGHLiveSample("css-examples/learn/overflow/inline-overflow.html", '100%', 500)}}

왜 CSS 가 기본적으로 내용이 혼란스러워지는 어수선한 접근 방식을 취했는지 궁금할 것입니다. 추가 콘텐츠를 숨기거나 박스가 커지는 이유는 무엇입니까?

가능하면 CSS 는 내용을 숨기지 않습니다; 그렇게 하면 데이터가 손실될 수 있으며, 이는 일반적으로 문제입니다. CSS 용어로, 이는 일부 콘텐츠가 사라짐을 의미합니다. 콘텐츠 손실의 문제점은 손실 되었음을 알 수 없다는 것입니다. 방문자가 사라진 것을 눈치채지 못할 수도 있습니다. 그것이 사라지는 양식의 제출 버튼이고 아무도 양식을 완성할 수 없다면 큰 문제입니다! 따라서 CSS 는 눈에 띄게 overflow 되는 경향이 있습니다. 혼란스러워 보이거나, 최악의 경우 사이트 방문자가 일부 콘텐츠가 겹치므로 수정해야함을 알려줍니다.

`width` 또는`height` 가 있는 박스를 제한한 경우, CSS 는 사용자가 수행중인 작업을 알고 있으며, overflow 가능성을 관리한다고 가정합니다. 일반적으로 사이트를 디자인할 때 예상보다 많은 텍스트가 있거나 텍스트가 더 클 수 있으므로 — 예를 들어 사용자가 글꼴 크기를 늘린 경우 박스에 텍스트를 넣을 때 블록 크기를 제한하는 것은 문제가 됩니다.

다음 수업에서는 overflow 가 덜 발생하는 크기를 제어하는 다양한 방법을 살펴보겠습니다. 그러나 고정 크기가 필요한 경우, overflow 동작을 제어할 수도 있습니다. 계속 읽어 봅시다!

## overflow 속성

{{cssxref("overflow")}} 속성은 요소의 overflow 를 제어하고 브라우저가 원하는 방식으로 동작하도록 하는 방법입니다. overflow 의 기본값은 `visible` 이므로, overflows 가 발생하면 기본적으로 콘텐츠를 볼 수 있습니다.

콘텐츠가 넘칠 때 내용을 자르려면 박스에 `overflow: hidden` 을 설정할 수 있습니다. 이렇게 하면 — overflow 를 숨길 수 있습니다. 이로 인해 모든 것이 사라질 수 있으므로 콘텐츠를 숨기는 것이 문제를 일으키지 않을 경우에만 해야합니다.

{{EmbedGHLiveSample("css-examples/learn/overflow/hidden.html", '100%', 600)}}

아마도 내용이 넘칠 때 스크롤 막대를 추가하고 싶습니까? `overflow: scroll` 를 사용하면 브라우저에 항상 스크롤 막대가 표시됩니다 — 콘텐츠가 부족하여 overflow 할 수 없는 경우에도 마찬가지입니다. 내용에 따라 스크롤 막대가 나타나거나 사라지는 것을 방지하기 때문에 원하는 경우가 있습니다.

**아래 박스에서 일부 내용을 제거하면 스크롤 할 내용이 없어도 스크롤 막대가 여전히 남아 있습니다 (또는 스크롤 막대만).**

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll.html", '100%', 600)}}

위의 예제에서는 `y` 축만 스크롤하면 되지만, 두 축에는 스크롤바가 나타납니다. 대신 {{cssxref("overflow-y")}} 속성을 사용하여, `overflow-y: scroll` 로 설정하면 `y` 축에서만 스크롤하도록 할 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-y.html", '100%', 600)}}

{{cssxref("overflow-x")}} 를 사용하여 x 축을 스크롤할 수도 있지만, 긴 단어를 처리하는 데 권장되는 방법은 아닙니다! 작은 박스에서 긴 단어를 처리해야 하는 경우 {{cssxref("word-break")}} 또는 {{cssxref("overflow-wrap")}} 속성을 볼 수 있습니다. 또한 [CSS 항목 크기 조정](/ko/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) 에서 설명하는 일부 방법을 사용하면 다양한 양의 콘텐츠에 더 잘 맞는 박스를 만들 수 있습니다.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-x.html", '100%', 500)}}

`scroll` 과 마찬가지로 스크롤 막대를 유발할 내용이 충분한 지 여부에 따라 스크롤 크기에 스크롤 막대가 나타납니다.

> **참고:** `overflow` 속성을 사용하여 두 개의 값을 전달하여 x 와 y 스크롤을 지정할 수 있습니다. 두 개의 키워드가 지정되면, 첫 번째 키워드는 `overflow-x` 에 적용되고 두 번째 키워드는 `overflow-y` 에 적용됩니다. 그렇지 않으면 `overflow-x` 및 `overflow-y` 가 모두 같은 값으로 설정됩니다. 예를 들어, `overflow: scroll hidden` 은 `overflow-x` 를 `scroll` 로, `overflow-y` 를 `hidden` 으로 설정합니다.

박스에 넣을 수 있는 것보다 많은 내용이 있는 경우 스크롤 막대만 표시하려면, `overflow: auto` 를 사용하십시오. 이 경우 스크롤 막대를 표시할 지 여부를 결정하는 것은 브라우저에게 맡겨져 있습니다. 데스크톱 브라우저는 일반적으로 overflow 를 유발할 수 있는 충분한 콘텐츠가 있는 경우에만 그렇게 합니다.

**아래 예에서 박스에 들어갈 때까지 일부 내용을 제거하면, 스크롤 막대가 사라지는것을 볼 수 있습니다.**

{{EmbedGHLiveSample("css-examples/learn/overflow/auto.html", '100%', 600)}}

## Overflow 는 블록 서식 Context 를 설정합니다

CSS 에는 **Block Formatting Context** (BFC) 의 개념이 있습니다. 이것은 지금 너무 걱정할 필요는 없지만, `scroll` 또는 `auto` 와 같은 overflow 값을 사용할 때 BFC 를 생성한다는 것을 아는 것이 유용합니다. 결과적으로 `overflow` 값을 변경한 박스의 내용이 자체의 미니 레이아웃이 됩니다. container 외부의 물건은 container 에 찌를 수 없으며, 박스에서 주변 레이아웃으로 찌를 수는 없습니다. 이느 일관된 스크롤 환경을 만들기 위해, 박스의 모든 내용을 포함해야 하고 페이지의 다른 항목과 겹치지 않아야 하므로 스크롤 동작을 활성화하기 위한 것입니다.

## 웹 디자인에서 원치 않는 overflow

최신 레이아웃 방법 ([CSS 레이아웃](/ko/docs/Learn/CSS/CSS_layout) 강의에 설명되어 있음) 은 overflow 를 매우 잘 관리합니다. 우리가 웹에 얼마나 많은 콘텐츠를 가지고 있는지 예측할 수 없다는 사실에 대처하도록 설계되었습니다. 그러나 과거에는 개발자들이 종종 고정된 높이를 사용하여 서로 관계가 없는 박스의 하단을 정렬하려고 했습니다. 이것은 깨지기 쉬웠으며, legacy 응용 프로그램에서 때때로 내용이 페이지의 다른 내용과 겹치는 박스가 나타날 수 있습니다. 이러한 현상이 나타나면 overflow 가 발생한다는 것을 알수 있습니다. 박스 크기 고정에 의존하지 않도록 레이아웃을 리팩터링 하는것이 이상적입니다.

사이트를 개발할 때는 항상 overflow 문제를 염두에 두어야 합니다. 많은 양의 콘텐츠로 디자인을 테스트하고 텍스트의 글꼴 크기를 늘리면 CSS 가 강력한 방식으로 대처할 수 있는지 확인해야 합니다. 내용을 숨기거나 스크롤 막대를 추가하기 위해 overflow 값을 변경하는 것은 스크롤 박스를 원할 때와 같은 몇 가지 특별한 경우에만 예약할 수 있습니다.

## 요약

이 짧은 수업은 overflow 개념을 소개했습니다; 이제 CSS 가 넘쳐나는 내용을 보이지 않게 만들려고 하지만 데이터가 손실될 수 있음을 이해합니다. overflow 가능성을 관리할 수 있으며 실수로 overflow 문제가 발생하지 않도록 작업을 테스트해야 합니다.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}
