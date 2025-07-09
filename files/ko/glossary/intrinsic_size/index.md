---
title: 고유 크기 (Intrinsic size)
slug: Glossary/Intrinsic_Size
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

CSS에서, 요소의 고유 크기(intrinsic size)는 외부 요인이 적용되지 않은 경우에, 콘텐츠를 기반으로 하는 크기입니다. 예를 들어, 인라인 요소의 크기는 본질적으로 `너비`, `높이`로 결정되며, 가로 여백과 패딩은 영향을 주지만, 세로 여백과 패딩은 영향을 미치지 않습니다.

고유 크기를 계산하는 방법은 [CSS 내장 및 외부 크기 조정 명세서](https://www.w3.org/TR/css-sizing-3/#intrinsic-sizes)에 정의되어 있습니다.

고유 크기 조정은 요소의 `min-content` 및 `max-content` 크기를 고려합니다. 텍스트의 경우 `min-content` 크기는 텍스트가 오버플로를 일으키지 않고 인라인 방향으로 최대한 작게 래핑되어, 가능한 한 많은 자동 줄바꿈(Soft Wrap)을 수행하는 경우입니다. 텍스트 문자열이 포함된 상자의 경우, `min-content` 크기는 가장 긴 단어로 정의됩니다. {{cssxref("width")}} 속성에 대한 `min-content` 키워드 값은 `min-content` 크기에 따라 요소의 크기를 지정합니다.

`max-content` 크기는 그 반대입니다. 텍스트의 경우, 오버플로가 발생하더라도 자동 줄바꿈(Soft Wrap)을 수행하지 않고 텍스트를 최대한 넓게 표시합니다. `max-content` 키워드 값은 이 동작을 노출합니다.

이미지의 경우, 고유 크기는 동일한 의미를 갖습니다. 렌더링을 변경하기 위해 CSS를 적용하지 않은 경우 이미지가 표시되는 크기입니다. 기본적으로 이미지는 "1x" 픽셀 밀도(1 장치 픽셀 = 1 CSS 픽셀)를 갖는 것으로 가정하므로, 고유 크기는 단순히 픽셀 높이와 너비입니다. 고유 이미지 크기와 해상도는 {{Glossary("EXIF")}} 데이터에서 명시적으로 지정할 수 있습니다. [`srcset`](/ko/docs/Web/HTML/Reference/Elements/img#srcset) 속성을 사용하여 이미지에 대해 고유 픽셀 밀도를 설정할 수도 있습니다. (note that 두 메커니즘을 모두 사용하는 경우, the `srcset`값은 EXIF 값 "위에" 적용됩니다).
