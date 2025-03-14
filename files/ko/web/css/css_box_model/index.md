---
title: CSS box model
slug: Web/CSS/CSS_box_model
l10n:
  sourceCommit: 8e595b9a3833765941374a5e75480a54fb337662
---

{{CSSRef}}

**CSS box model** 은 각 요소에 대해 [시각적 서식 모델](/ko/docs/Web/CSS/Visual_formatting_model)에 따라 생성되고 배치되는 안팎 여백을 포함한 사각형 박스를 위한 CSS 모듈입니다.

## 박스 모델 개요

CSS에서 박스는 콘텐츠 영역을 포함하며, 이는 텍스트, 이미지, 혹은 HTML 요소들로 이루어져 있습니다. 이 요소들의 각 면은 안쪽 여백, 테두리, 또는 바깥 여백으로 감싸질 수 있습니다. 박스 모델은 이 요소들을 함께 사용함으로써 박스를 CSS로 표현하는 방식을 설명합니다. 더 많은 정보는 [CSS 기본 박스 모델 입문](/ko/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)에서 확인할 수 있습니다.

### 박스 경계 키워드

박스 모델 명세서는 각각의 테두리에 해당하는 키워드들을 정의하며, 이러한 키워드들은 CSS에서 속성으로 사용됩니다. 예로, 박스 모델의 크기를 계산하는 {{cssxref("box-sizing")}} 속성의 값으로 사용할 수 있습니다.

- `content-box`
  - : 박스의 콘텐츠 영역의 경계.
- `padding-box`
  - : 안쪽 여백 영역의 경계. 안쪽 여백이 없을 시, `content-box`과 동일합니다.
- `border-box`
  - : 박스 테두리의 경계. 테두리가 없을 시, `padding-box`과 동일합니다. `padding-box`.
- `margin-box`
  - : 바깥 여백의 경계. 바깥 여백이 없을 시, `border-box`과 동일합니다.
- `stroke-box`
  - : SVG의 stroke bounding box. CSS에서는 `content-box`과 동일합니다.
- `view-box`
  - : SVG에서 가장 가까운 SVG 뷰포트 요소의 원점 상자를 의미합니다. 이 상자는 해당 요소에 대한 {{svgattr("viewBox")}} 속성에 의해 설정된 초기 SVG 사용자 좌표계의 너비와 높이를 가진 직사각형입니다. CSS에서는 `border-box`와 동일합니다.

## 참고서

> [!NOTE]
> 이 명세서는 물리적인 안쪽 여백과 바깥 여백 속성을 정의합니다. 글의 방향과 연관된 흐름과 연관된 속성은 [Logical Properties and Values](/ko/docs/Web/CSS/CSS_logical_properties_and_values)에 정의되어 있습니다.

#### 박스의 바깥 여백을 제어하는 속성

바깥 여백은 박스의 테두리 가장자리를 둘러싸고 박스 사이에 공간을 제공합니다.

- {{CSSxRef("margin")}}
- {{CSSxRef("margin-bottom")}}
- {{CSSxRef("margin-left")}}
- {{CSSxRef("margin-right")}}
- {{CSSxRef("margin-top")}}
- {{CSSxRef("margin-trim")}} {{Experimental_Inline}}

#### 박스의 안쪽 여백을 제어하는 속성

안쪽 여백은 내용 가장자리와 테두리 가장자리 사이에 삽입됩니다.

- {{CSSxRef("padding")}}
- {{CSSxRef("padding-bottom")}}
- {{CSSxRef("padding-left")}}
- {{CSSxRef("padding-right")}}
- {{CSSxRef("padding-top")}}

#### 기타 속성

박스 모델과 관련된 다른 속성들은 다른 곳에 정의되어 있습니다.

- [테두리](/ko/docs/Web/CSS/CSS_backgrounds_and_borders)
  - : 테두리 속성은 가장자리의 두께, 테두리 스타일, 색상을 정의합니다.
- [Overflow](/ko/docs/Web/CSS/overflow)
  - : 박스에 들어갈 내용이 너무 많을 때 발생하는 작업을 제어합니다.

## 안내서

- [CSS 박스 모델 입문](/ko/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - : CSS의 기초 개념 중 하나인 박스 모델을 설명합니다. 박스 모델은 CSS가 요소와 요소의 콘텐츠, 안쪽 여백, 테두리, 바깥 여백 영역을 배치하는 법을 정의합니다.
- [여백 상쇄 정복](/ko/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - : 어떤 경우, 두 개의 인접한 바깥 여백은 하나로 상쇄됩니다. 이 글은 상쇄가 언제 어떻게 일어나고 이를 어떻게 제어하는지 설명합니다.
- [시각적 서식 모델](/ko/docs/Web/CSS/Visual_formatting_model)
  - : 시각적 서식 모델을 설명합니다.

## 명세

{{Specifications}}
