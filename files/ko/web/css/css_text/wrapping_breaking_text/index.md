---
title: 텍스트의 줄 바꾸기 및 끊기
slug: Web/CSS/CSS_text/Wrapping_breaking_text
l10n:
  sourceCommit: 5637472cb47c01ed1fda8bcad41a1244b239b226
---

{{CSSRef}}

이 안내서는 CSS에서 넘치는 텍스트를 관리하는 다양한 방법에 대해 설명합니다.

## 넘치는 텍스트가 무엇일까요?

CSS에서, 매우 긴 단어와 같이 끊을 수 없는 문자열이 있다면, 기본적으로 문자열보다 작은 크기의 컨테이너 밖 인라인 방향으로 넘치게 됩니다. 우리는 이 과정을 다음 예제에서 확인할 수 있습니다. 긴 단어는 그것이 포함된 박스의 경계 밖으로 확장되고 있습니다.

{{EmbedGHLiveSample("css-examples/css-text/inline-overflow.html", '100%', 420)}}

CSS는 데이터 손실을 방지하기 위해 넘치는 것을 이러한 방법으로 표현합니다. CSS에서 데이터 손실은 일부 콘텐츠가 사라지는 것을 의미합니다. 그래서 {{cssxref("overflow")}} 의 초기값은 `visible` 인데, 이렇게 하면 텍스트가 넘치는 것을 볼 수 있습니다. 일반적으로는 다소 지저분해 보이더라도 넘치는 내용을 볼 수 있는 것이 나을 겁니다. 만약 내용이 마치 `overflow` 가 `hidden` 인 것처럼 사라지거나 잘리게 된다면 사이트를 볼 때 그것이 있다는 것을 알아차리지 못할 겁니다. 지저분하게 넘치는 것은 최소한 내용이 있다는 것을 알아차릴 수는 있고, 최악의 경우에도 사이트 방문자가 그것이 조금 이상하게 보이더라도 내용을 보고 읽을 수 있을 것입니다.

다음 예제에서는 만일 `overflow` 값을 `hidden` 으로 설정하면 어떤 일이 일어나는지 확인할 수 있습니다.

{{EmbedGHLiveSample("css-examples/css-text/inline-overflow-hidden.html", '100%', 420)}}

## 최소 콘텐츠 크기 찾기

콘텐츠가 넘치지 않고 모두 포함하는 박스의 최소 크기를 찾으려면, 박스의 {{cssxref("width")}} 혹은 {{cssxref("inline-size")}} 속성을 {{cssxref("min-content")}} 로 설정합니다.

{{EmbedGHLiveSample("css-examples/css-text/min-content.html", '100%', 420)}}

따라서 `min-content` 를 사용하는 것은 넘치는 박스를 처리하는 하나의 방법입니다. 콘텐츠가 요구하는 최소 크기만큼 박스의 크기를 늘이려면, 그렇지만 그 이상으로 커지지 않도록 하려면, 이 키워드를 사용하여 크기를 얻을 수 있습니다.

## 긴 단어 끊기

만일 박스가 고정된 크기를 가져야 한다면, 혹은 긴 단어를 넘치치 않게 해야 한다면 {{cssxref("overflow-wrap")}} 속성이 도움이 될 겁니다. 이 속성은 단어가 한 줄로 표현되기에는 너무 길 때 단어를 끊습니다.

{{EmbedGHLiveSample("css-examples/css-text/overflow-wrap.html", '100%', 660)}}

> **참고:** `overflow-wrap` 속성은 비표준 속성인 `word-wrap` 과 같은 방식으로 동작합니다. 이제 브라우저에서는 `word-wrap` 속성을 표준 속성의 별칭처럼 취급합니다.

다른 대안 속성은 {{cssxref("word-break")}} 를 시도해 보는 것입니다. 이 속성은 단어를 넘치는 지점에서 끊습니다. 이 속성은 단어를 새 줄에 배치하면 끊지 않고 표시할 수 있는 경우에도 단어를 끊습니다.

다음 예제에서는, 같은 텍스트 문자열의 다른 두 속성에 대해 비교할 수 있습니다.

{{EmbedGHLiveSample("css-examples/css-text/word-break.html", '100%', 700)}}

이것은 문자열이 딱 들어맞을 만큼의 공간이 있는 경우 큰 공백이 나타나지 않게끔 하고자 할 때 사용하면 유용할 것입니다.
혹은, 다른 요소 바로 뒤에 즉각적으로 끊김이 발생하지 않아야 할 때도 유용합니다.

이 예제에서는 체크박스와 라벨이 존재합니다. 라벨이 박스보다 커서 이것을 끊어야 할 때를 가정해 봅시다. 하지만, 체크박스 바로 뒤에서 줄바꿈이 되는 것은 원하지 않습니다.

{{EmbedGHLiveSample("css-examples/css-text/word-break-checkbox.html", '100%', 660)}}

## 하이픈(-) 추가하기

단어가 끊길 때 하이픈을 추가하려면, CSS {{cssxref("hyphens")}} 속성을 사용하면 됩니다. `auto` 값을 사용하면, 브라우저는 하이픈이 있을 적절한 위치에서 자동으로 단어를 끊을 수 있고, 선택한 규칙을 따르게 됩니다. 과정에 대해 약간의 제어가 필요하다면, `manual` 값을 사용하고, 문자열에 강제로 혹은 선택적으로 줄바꿈 문자를 삽입합니다. 강제 줄바꿈 (`‐`) 은 그것이 필요하지 않을 때에도 항상 줄바꿈을 합니다. 선택적 줄바꿈은 (`&shy;`) 줄바꿈이 필요할 떄에만 줄바꿈을 합니다.

{{EmbedGHLiveSample("css-examples/css-text/hyphens.html", '100%', 600)}}

{{cssxref("hyphenate-character")}} 속성을 언어의 기본 하이픈 문자 대신 원하는 문자열을 줄 끝에서 (하이픈으로 줄바꿈을 하기 전) 사용할 수 있습니다. `auto` 값은 현재 콘텐츠 언어의 타이포그래피 관습에 따라 단어 중간의 줄바꿈을 표시하는 올바른 값을 선택합니다.

CSS 는 추가적인 하이폰 제어도 제공합니다. {{cssxref("hyphenate-limit-chars")}} 속성은 하이픈을 허용할 수 있는 최소 단어의 길이와 하이픈 앞뒤로 최소 문자 수를 설정하는 데에 사용됩니다.

## `<wbr>` 요소

긴 문자열을 어디서 끊을지 알고 있다면 HTML {{HTMLElement("wbr")}} 요소를 삽입하는 것 또한 가능합니다. 이것은 긴 URL 을 페이지에 표시하는 경우에 유용하게 사용됩니다. 읽기 쉬운 적절한 위치에서 문자열을 끊고자 할 때 이 속성을 추가합니다.

다음 예제에서는 {{HTMLElement("wbr")}}의 위치에서 텍스트가 끊깁니다.

{{EmbedGHLiveSample("css-examples/css-text/wbr.html", '100%', 460)}}

## 같이 보기

- HTML {{HTMLElement("wbr")}} 요소
- CSS {{cssxref("word-break")}} 속성
- CSS {{cssxref("overflow-wrap")}} 속성
- CSS {{cssxref("white-space")}} 속성
- CSS {{cssxref("text-wrap")}} 속성
- CSS {{cssxref("hyphens")}} 속성
- CSS {{cssxref("hyphenate-character")}} 속성
- CSS {{cssxref("hyphenate-limit-chars")}} 속성
- [CSS에서 넘침과 데이터 손실](https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/)
