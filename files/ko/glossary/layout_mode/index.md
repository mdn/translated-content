---
title: 레이아웃 모드
slug: Glossary/Layout_mode
original_slug: Web/CSS/Layout_mode
---

[CSS](/ko/docs/Web/CSS) **레이아웃 모드**, 줄여서 **레이아웃**은 형제(sibling) 및 조상(ancestor) 박스와 상호 작용하는 방식을 기반으로 박스의 위치와 크기를 결정하는 알고리즘입니다. 그 중 몇 가지입니다:

- 블록 레이아웃(_block layout_), 문서 배치를 위해 설계됨. 블록 레이아웃은 요소(element)를 [_float_](/ko/docs/Web/CSS/Reference/Properties/float) 하거나 여러 단([_multiple columns_](/ko/docs/Web/CSS/CSS_multicol_layout/Using_multicol_layouts))에 걸쳐 배치하는 기술 같은 문서 중심 기능을 포함합니다.
- 인라인 레이아웃(_inline layout_), 텍스트 배치를 위해 설계됨.
- 테이블 레이아웃(_table layout_), 표 배치를 위해 설계됨.
- 위치지정 레이아웃(_positioned layout_), 다른 요소와 상호 작용이 많이 없는 요소의 위치지정을 위해 설계됨.
- 신축 박스 레이아웃([_flexible box layout_](/ko/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)), 부드럽게 크기조정이 될 수 있는 복잡한 페이지 배치를 위해 설계됨. {{experimental_inline}}
- 그리드 레이아웃(_grid layout_), 고정된 격자(grid)에 상대적인 요소 배치를 위해 설계됨. {{experimental_inline}}

> [!NOTE]
> CSS 속성([CSS properties](/ko/docs/Web/CSS/Reference)) 모두가 모든 *레이아웃 모드*에 적용되지는 않습니다. 속성 대부분은 한 두 모드에 적용되고 속성이 다른 레이아웃 모드에 참여하는 요소에 설정되면 효과가 없습니다.

## 같이 보기

- CSS 주요 개념
  - [CSS 문법](/ko/docs/Web/CSS/CSS_syntax/Syntax)
  - [@규칙](/ko/docs/Web/CSS/CSS_syntax/At-rule)
  - [주석](/ko/docs/Web/CSS/CSS_syntax/Comments)
  - [명시도](/ko/docs/Web/CSS/CSS_cascade/Specificity)
  - [상속](/ko/docs/Web/CSS/CSS_cascade/Inheritance)
  - [박스 모델](/ko/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [레이아웃 모드](/ko/docs/Glossary/Layout_mode)
  - [시각적 서식 모델](/ko/docs/Web/CSS/Visual_formatting_model)
  - [마진 중첩](/ko/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 값
    - [초깃값](/ko/docs/Web/CSS/CSS_cascade/Value_processing)
    - [계산값](/ko/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_4129c9bf28ee4c2570fe2528f20c4b2cd9a30d9cf2ec4e75fb56fe903059e63e)
    - [결정값](/ko/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_a47f4c6da6bce4fc52f8ed2ce27dc58e53fa5bd72bfef0bb04a61adbc5249cc4)
    - [지정값](/ko/docs/conflicting/Web/CSS/CSS_cascade/Value_processing)
    - [사용값](/ko/docs/conflicting/Web/CSS/CSS_cascade/Value_processing_ec5028512f59a0673c4ed5cfd5bcbbe4dcec85980166da23f909867f8a36e8b2)
    - [실제값](/ko/docs/Web/CSS/actual_value)

  - [값 정의 구문](/ko/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
  - [단축 속성](/ko/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - [대체 요소](/ko/docs/Web/CSS/CSS_images/Replaced_element_properties)
