---
title: Box-shadow generator
slug: Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator
l10n:
  sourceCommit: 883b021c97375f872d0702f0d0747b1373155cef
---

{{CSSRef}}

이 도구를 사용하면 {{cssxref("box-shadow")}} 효과를 통하여 CSS 객체에 박스 음영 그림자 효과를 적용할 수 있습니다.

{{EmbedGHLiveSample("css-examples/tools/box-shadow-generator/", '100%', 900)}}

박스 그림자 생성기는 요소에 하나 혹은 그 이상의 박스 그림자를 적용할 수 있게 합니다.

도구를 열면, 도구의 오른쪽 상단 섹션에 직사각형을 찾을 수 있습니다. 이 요소가 바로 그림자를 적용해 볼 요소입니다. (페이지를 처음 로드하게 되면) 이 요소가 선택된 상태가 되며 이 요소에 몇 가지 기본 스타일을 적용할 수 있습니다.

- color picker tool을 이용하여 요소에 {{cssxref("color")}} 를 설정할 수 있습니다.
- "border" 체크박스를 사용하여 요소에 {{cssxref("border")}} 를 줄 수 있습니다.
- 슬라이더를 활용하여 요소에 {{cssxref("top")}}, {{cssxref("left")}}, {{cssxref("width")}}, 그리고 {{cssxref("height")}} 속성을 부여할 수 있습니다.

박스에 그림자를 적용하기 위해서는 왼쪽 상단에 있는 "+" 버튼을 클릭해 보세요. 이는 그림자를 추가하고, 그림자는 왼쪽 열에 목록으로 표시됩니다. 이제 새 그림자의 값을 지정할 수 있습니다.

- color picker tool을 이용하여 그림자의 {{cssxref("color")}} 를 설정합니다.
- "inset" 체크박스를 사용하여 안쪽 그림자로 설정할 수 있습니다.
- 슬라이더를 활용하여 요소의 위치, 흐림, 확산을 설정할 수 있습니다.

다른 그림자를 추가하기 위해서는, 다시 "+" 를 클릭해 보세요. 이제 설정된 모든 값이 새 그림자에 적용될 것입니다. 왼쪽 상단에 위치한 ↑ 와 ↓ 버튼을 이용하여 두 개의 그림자의 적용 순서를 변경할 수 있습니다. 왼쪽 열에서 첫번째 그림자를 클릭하여 다시 선택해 보세요. 요소에 적용된 스타일을 업데이트하려면 상단에 있는 "element" 라벨의 버튼을 클릭하면 됩니다.

요소에 {{cssxref("::before")}} 와 {{cssxref("::after")}} 가상 요소를 추가하고, 이것에도 박스 그림자 효과를 줄 수 있습니다. 각 가상 요소 간의 전환은 상단에 있는 "element", ":before", 그리고 ":after" 버튼을 이용하면 됩니다.

오른쪽 하단에 있는 박스에는 `before::` 혹은 `::after` 의 가상 요소가 포함되어 있습니다.

## 같이 보기

- [Border-image 생성기](/ko/docs/Web/CSS/CSS_backgrounds_and_borders/Border-image_generator)
  - : 이 인터랙티브 도구를 사용하여 시각적으로 테두리 이미지를 생성할 수 있습니다. ({{cssxref("border-image")}} 속성)
- [Border-radius 생성기](/ko/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator)
  - : 이 인터랙티브 도구를 사용하면 둥글기가 적용된 모서리를 생성할 수 있습니다. ({{cssxref("border-radius")}} 속성)
