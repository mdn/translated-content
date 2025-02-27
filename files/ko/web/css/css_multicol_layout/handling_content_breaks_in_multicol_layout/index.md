---
title: 다단 레이아웃에서 콘텐츠 분리 처리
slug: Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout
l10n:
  sourceCommit: f7b308af624b3ec6acfeef1c06d7a8c9ac46410d
---

{{CSSRef}}

다단 레이아웃에서 열 상자 사이의 콘텐츠는 페이지가 나뉘는 방식과 유사하게 나뉩니다. 두 경우 모두 [CSS 분할](/ko/docs/Web/CSS/CSS_fragmentation) 모듈의 속성을 사용하여 콘텐츠가 어디에서 어떻게 나뉘는지를 제어할 수 있습니다. 이 안내서에서는 다단 컨테이너 (짧게는 멀티콜 컨테이너)에서 분할이 어떻게 작동하는지 살펴봅니다.

## 분할 기본 사항

CSS 분할 모듈은 분할 컨테이너 또는 분할기 사이에서 콘텐츠가 어떻게 나뉘는지에 대한 세부 정보를 제공합니다. [다단 레이아웃](/ko/docs/Web/CSS/CSS_multicol_layout) 모듈은 열 사이와 열 내부에서 일부 제어를 제공하는 {{cssxref("break-after")}}, {{cssxref("break-before")}}, {{cssxref("break-inside")}} 속성을 정의합니다. 다단 레이아웃에서 열 상자는 분할 컨테이너입니다.

열 상자는 다른 마크업을 포함할 수 있으며, 분할이 이상적이지 않은 경우가 많습니다. 예를 들어, 이미지의 캡션이 이미지와 분리된 새로운 열로 넘어가는 것을 일반적으로 선호하지 않습니다. 또한, 열의 끝에 제목이 있으면 어색해 보입니다. 다중 열 분할 속성은 이러한 상황에서 콘텐츠의 분할을 제어할 수 있는 방법을 제공합니다.

분할을 제어하고 싶은 다양한 위치가 있습니다.

- 상자 내부의 분할, 예를 들어 figure 요소 내부.
- 상자 전후의 분할, 위의 제목 예제를 포함.
- 줄 사이의 분할.

## 상자 내부의 분할

상자 내부의 분할을 제어하려면 {{cssxref("break-inside")}} 속성을 사용합니다. 이 속성은 다음과 같은 값을 가집니다

- `auto`
- `avoid`
- `avoid-page`
- `avoid-column`
- `avoid-region`

아래 예제에서는 figure 요소에 break-inside를 적용하여 캡션이 이미지와 분리되지 않도록 방지합니다.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/break-inside.html", '100%', 800)}}

## 상자 전후의 분할

{{cssxref("break-before")}}와 {{cssxref("break-after")}} 속성은 요소 전후의 분할을 제어하는 데 사용됩니다. 다단 맥락에서는 다음과 같은 값을 가집니다.

- auto
- avoid
- avoid-column
- column

다음 예제에서는 `h2` 요소 전에 열 분할을 강제로 적용하고 있습니다.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/break-before.html", '100%', 800)}}

## 줄 사이의 분할

{{cssxref("orphans")}}와 {{cssxref("widows")}} 속성은 CSS 분할 모듈의 일부로, 유용하며 언급할 가치가 있습니다. `orphans` 속성은 구간의 끝에서 혼자 남은 줄의 수를 제어합니다. `widows` 속성은 구간의 시작에서 혼자 남은 줄의 수를 제어합니다.

`orphans`와 `widows` 속성은 {{CSSXref("integer")}} 값을 가지며, 이는 각각 구간의 끝과 시작에서 함께 유지할 줄의 수를 나타냅니다. 이 속성들은 블록 컨테이너, 예를 들어 단락 내에서만 작동합니다. 블록에 지정한 값보다 적은 줄이 포함된 경우, 모든 줄이 함께 유지됩니다.

아래 예제에서는 `orphans` 속성을 사용하여 열의 하단에 남는 줄의 수를 제어합니다. 값을 변경하여 콘텐츠의 분할에 미치는 영향을 확인할 수 있습니다.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/orphans.html", '100%', 800)}}

## 예상과 다른 결과가 나올 때

컨텐츠가 적고 여러 요소에서 분할을 제어하려는 경우, 콘텐츠는 어딘가에서 분할될 필요가 있으므로 항상 원하는 결과를 얻을 수는 없습니다. 분할 사용은 브라우저에 대한 제안일 뿐이며, 가능하다면 이런 방식으로 분할을 제어하라는 것입니다. 콘텐츠가 의도한 대로 분할되지 않는 경우 결과가 어지러울 수 있지만, 여전히 사용자에게 콘텐츠는 제공됩니다.
