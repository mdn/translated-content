---
title: 영역 (Gamut)
slug: Glossary/Gamut
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{GlossarySidebar}}

색상의 **영역 (Gamut)**은 일반적으로 디스플레이나 인쇄 장치가 나타낼 수 있는 색상의 하위 집합입니다.

어떤 디스플레이나 프린터도 인간의 눈이 인지할 수 있는 전체 색상의 범위를 표현할 수 없습니다. 장치 'gamut'는 색상의 범위를 지원하는 세트를 나타냅니다.

전통적으로, 웹 개발에서, 사용되는 유일한 색영역은 '[표준 빨강-녹색-파랑(Standard Red-Green-Blue, sRGB)](https://en.wikipedia.org/wiki/SRGB)'였습니다. sRGB의 각 기본 색상에 대해서 3바이트를 사용합니다. 그러나, '와이드 컬러(wide-color)' 모니터와 전문 프린터는 이 범위를 사용하여 표현할 수 없는 더 넓은 범위의 색상을 지원합니다.

2021년부터, 브라우저는 영화 산업에서 널리 사용되는 [P3](https://en.wikipedia.org/wiki/DCI-P3) 및 [rec2020](https://en.wikipedia.org/wiki/Rec._2020)와 같은 다른 영역에 대한 기능을 제공하기 시작했습니다.

개발자는 [`color-gamut`](/ko/docs/Web/CSS/@media/color-gamut) [미디어 기능](/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries)을 사용하여 더 넓은 영역을 지원하는 장치에 대해서 다양한 색상 세트를 정의할 수 있습니다. LCH 원통형 좌표계에 대해 [`lch()`](/ko/docs/Web/CSS/color_value/lch) 또는 Lab 좌표계에 대해 [`lab()`](/ko/docs/Web/CSS/color_value/lab)과 같은 특정 CSS 함수를 사용하여 RGB 영역 외부의 색상을 설명할 수 있습니다.

## 같이 보기

- 위키백과의 [Gamut](https://en.wikipedia.org/wiki/Gamut)
