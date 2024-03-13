---
title: RGB
slug: Glossary/RGB
l10n:
  sourceCommit: d71f07e831c84f37c25e920571471d2ea032b63c
---

{{GlossarySidebar}}

_Red-Green-Blue_ (**RGB**)는 'red', 'green' 및 'blue'라는 세 가지 기본 구성 요소(또는 채널)의 혼합으로 색상을 나타내는 색상 모델입니다. 이 모델은 일련의 세 개의 숫자(일반적으로 0.0에서 1.0 사이 또는 0에서 255 사이)로 색상을 설명합니다. 각 숫자는 최종 색상을 결정하는 데 있어 기본 색상의 다양한 강도(또는 기여도)를 나타냅니다.

RGB 값만으로는 의미가 없습니다. 색상 모델은 세 가지 구성 요소가 색상 공간과 어떻게 관련되는지 정의합니다. 그래픽적으로, 3차원 격자나 큐브의 점은 색상을 나타냅니다. 각 차원(또는 축)은 서로 다른 채널에 해당합니다. RGB 색상 모델은 기본 색상 공간의 '입방체(cubic)' 또는 '데카르트(Cartesian)' 좌표계입니다.

웹의 경우, RGB 값의 기본 색상 공간은 'sRGB' (표준 RGB)이고 각 RGB 구성 요소는 0에서 255 사이의 숫자입니다.

'Adobe RGB' 색상 공간과 같이 'sRGB' 색상 공간보다 더 넓은 {{glossary("gamut", "색 재현율")}} 색상을 표현할 수 있는 다른 RGB 색상 공간이 있습니다. 'sRGB'와 'Adobe RGB'의 좌표가 다릅니다.

색상의 RGB 구성 요소를 설명하는 방법에는 여러가지가 있습니다. {{Glossary("CSS")}}에서는 16진수 표기법(예, `#add8e6`은 연한 파란색) 또는 함수 표기법(`rgb(46 139.5 87)`와 같이 0과 255 사이의 세 개의 개별 숫자로 표현할 수 있는 [`rgb()`](/ko/docs/Web/CSS/color_value/rgb))으로 단일 24비트 정수로 표시할 수 있습니다. [`color()`](/ko/docs/Web/CSS/color_value/color) 함수에는 `srgb`, `srgb-linear`, `a98-rgb` 및 `prophoto-rgb` 색상 공간도 있습니다.

RGB가 'sRGB' 색상 공간을 표현할 수 있는 유일한 색상 모델은 아닙니다. [`HSL`](/ko/docs/Web/CSS/color_value/hsl) (색상-채도-밝기(hue-saturation-lightness)) 또는 [`HWB`](/ko/docs/Web/CSS/color_value/hwb) (색상-백색-흑도(hue-whiteness-blackness))와 같은 원통형 좌표계 색상 모델은 웹에서 sRGB 색상을 나타내는 데에도 사용됩니다.

## 같이 보기

- [위키백과의 RGB 색상 모델](https://en.wikipedia.org/wiki/RGB_color_model)
- [위키백과의 sRGB 색 공간](https://en.wikipedia.org/wiki/SRGB)
- [위키백과의 Adobe RGB 색 공간](https://en.wikipedia.org/wiki/Adobe_RGB_color_space)
- [CSS 데이터 타입: \<color>](/ko/docs/Web/CSS/color_value)
