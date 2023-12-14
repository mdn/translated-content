---
title: 잉크 오버플로우 (Ink overflow)
slug: Glossary/Ink_overflow
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

상자의 **잉크 오버플로우 (Ink overflow)**는 상자의 테두리 상자 외부에 시각적 효과를 생성하는 상자 부분과 내용을 나타냅니다. 시각적으로만 잉크 오버플로는 상자 모델 속성에 영향을 주지 않으므로, 레이아웃에 영향을 주지 않습니다.

잉크 오버플로는 레이아웃에 영향을 주지 않거나 스크롤 가능한 오버플로 영역을 확장하지 않는 [상자 그림자](/ko/docs/Web/CSS/box-shadow), [테두리 이미지](/ko/docs/Web/CSS/CSS_backgrounds_and_borders), [텍스트 장식](/ko/docs/Web/CSS/CSS_text_decoration), [테두리](/ko/docs/Web/CSS/outline) 등과 같은 페인팅 효과의 오버플로우입니다. 잉크 오버플로는 em 박스 외부로 확장되는 상승 및 하강과 같은 글자의 모양(glyph, 글리프)가 돌출된 현상이기도 합니다.

[대체된 요소](/ko/docs/Web/CSS/Replaced_element)는 항상 독립적인 [서식 컨텍스트](/ko/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)를 설정하므로, 대체된 콘텐츠의 오버플로는 항상 잉크 오버플로입니다([스크롤 가능한 오버플로](/ko/docs/Learn/CSS/Building_blocks/Overflowing_content)와 반대입니다).

## 같이 보기

- [CSS 오버플로우 모듈](/ko/docs/Web/CSS/CSS_overflow)
