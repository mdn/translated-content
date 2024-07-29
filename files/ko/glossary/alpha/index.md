---
title: 알파 (알파 채널)
slug: Glossary/Alpha
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**알파 채널**은 ({{CSSxRef("&lt;color&gt;")}})의 불투명도를 지정합니다. 색상은 여러 숫자들의 디지털 형식으로 표현되고, 각 숫자는 색상의 특정 구성 요소의 강도 또는 강도 수준을 나타냅니다. 이러한 각 구성 요소를 **채널**이라고 합니다. 일반적인 이미지 파일에서 색상 채널은 최종 색상을 구성하는 데 빨간색, 녹색, 파란색이 얼마나 사용되는지를 나타냅니다. 배경을 어느 정도 볼 수 있는 색상을 표현하기 위해, 색상에 네 번째 채널인 알파 채널을 추가합니다.

예를 들어, 색상 `#8921F2`(`rgb(137 33 242)` 또는 `hsl(270 89% 54)`로 표현됩니다)는 멋진 보라색 음영입니다. 아래에는 왼쪽 상단 모서리에 해당 색상의 작은 상자가 있고, '동일' 색상이지만 알파 채널이 0.5(50% 불투명도)로 설정된 `#8921F280` 상자가 있습니다. `80`은 16진수로 50%에 해당합니다. 이 색상은 `rgb(137 33 242 / 0.5)` 또는 `hsl(270 89% 54 / 0.5)`. 두 개의 상자는 텍스트 단락 위에 그려집니다.

![색상에 대한 알파 채널의 효과를 보여주는 이미지입니다.](alpha-channel-example.png)

보시다시피, 알파 채널이 없는 색상은 배경 텍스트를 완전히 차단하는 반면, 알파 채널이 있는 상자는 보라색 배경 색상을 통해 표시됩니다.

## 같이 보기

- [CSS 색상](/ko/docs/Web/CSS/CSS_colors)
- [CSS 값과 단위 소개](/ko/docs/Learn/CSS/Building_blocks/Values_and_units)
- [이미지 파일 형식 및 형식 안내서](/ko/docs/Web/Media/Formats/Image_types)
- [알파 합성](https://en.wikipedia.org/wiki/Alpha_compositing) on Wikipedia
- [RGBA 색상 모델](https://en.wikipedia.org/wiki/RGBA_color_model) on Wikipedia
- [채널 (디지털 이미지)](<https://en.wikipedia.org/wiki/Channel_(digital_image)>) on Wikipedia
