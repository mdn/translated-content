---
title: 다단 레이아웃에서 넘침 처리
slug: Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout
l10n:
  sourceCommit: f7b308af624b3ec6acfeef1c06d7a8c9ac46410d
---

{{CSSRef}}

이 안내서에서는 다단 (_multicol_) 레이아웃에서 넘침을 처리하는 방법을 살펴봅니다. 열 상자 내부의 넘침뿐만 아니라 컨테이너에 맞지 않는 콘텐츠가 있을 때의 상황도 다룹니다

## 열 상자 내부의 넘침

항목의 크기가 열 상자보다 클 때 넘침 상황이 발생합니다. 예를 들어, 열 안에 있는 이미지가 `column-width` 값이나 `column-count`로 선언된 열의 개수를 기반으로 한 열 너비보다 넓을 때 이러한 상황이 발생할 수 있습니다.

이 경우, 콘텐츠는 열 상자에 의해 잘리지 않고 다음 열로 눈에 보이게 넘쳐야 합니다.

{{EmbedGHLiveSample("css-examples/multicol/overflow/image.html", '100%', 800)}}

두 개의 텍스트 열이 있습니다. 왼쪽 열에는 열 너비보다 넓은 사진이 있으며, 이미지가 두 번째 열로 확장되어 오른쪽 열의 텍스트 뒤에 나타납니다. 오른쪽 열의 텍스트 흐름은 튀어나온 사진에 영향을 받지 않지만, 시각적인 모습은 달라집니다.

이미지를 열 상자에 맞추고 싶다면 `max-width: 100%`를 설정하면 이미지가 해당 컨테이너, 즉 열 상자를 넘어서 커지지 않도록 할 수 있습니다.

{{EmbedGHLiveSample("css-examples/multicol/overflow/image-max-width.html", '100%', 800)}}

## 들어갈 수 있는 열보다 많은 열이 있을 때

열이 넘치는 상황에서 어떻게 처리되는지는 매체의 종류에 따라 달라집니다. 매체가 인쇄물처럼 나뉜 경우(예: 책 페이지), 한 페이지에 열이 다 채워지면, 나머지 열은 다음 페이지로 이동해 그 페이지도 열로 채웁니다.

반면, 웹 페이지처럼 연속적인 매체에서는 열이 화면 너비를 넘으면 옆으로 넘치게 되고, 그 결과 가로 스크롤바가 생깁니다.

아래 예시는 이러한 넘침 현상을 보여줍니다. 다단 컨테이너에 {{CSSXref("height")}}가 설정되어 있고, 텍스트가 너무 많아 컨테이너 밖으로 열이 만들어지는 경우입니다.

{{EmbedGHLiveSample("css-examples/multicol/overflow/overflow-inline.html", '100%', 800)}}

## 수직 미디어 쿼리 사용하기

웹에서 다단 레이아웃을 사용할 때 발생할 수 있는 문제 중 하나는 열이 뷰포트보다 높으면 사용자가 페이지를 위아래로 스크롤해야 한다는 점입니다. 이는 좋은 사용자 경험을 제공하지 못합니다. 이를 피하는 한 가지 방법은 수직 공간이 충분할 때만 열 속성을 적용하는 것입니다.

아래 예시에서는 {{CSSXref("min-height")}}와 [@미디어 쿼리](/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries) 쿼리를 사용하여 열 속성을 적용하기 전에 수직 공간이 충분한지 확인합니다.

{{EmbedGHLiveSample("css-examples/multicol/overflow/min-height.html", '100%', 800)}}

## 다음 단계

이 시리즈의 마지막 안내서에서는 [다단 레이아웃에서 콘텐츠 분리가 어떻게 작동하는지 살펴보고](/ko/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout), 열 사이에서 콘텐츠가 어떻게 나뉘는지 제어하는 방법을 알아봅니다.
