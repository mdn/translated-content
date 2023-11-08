---
title: CSS Basic Box Model
slug: Web/CSS/CSS_box_model
---

{{CSSRef}}

**CSS Basic Box Model**은 각 요소에 대해 [시각적 서식 모델](/ko/docs/Web/Guide/CSS/Visual_formatting_model)에 따라 생성하고 배치하는 사각형 박스(안팎 여백 포함)를 위한 CSS 모듈입니다.

## 박스 모델 개요

CSS에서 박스는 콘텐츠 영역을 포함하며, 이는 텍스트, 이미지, 혹은 HTML 요소들로 이루어져 있습니다. 이 영역의 여러 면들을 안쪽 여백(패딩), 테두리, 또는 바깥 여백(마진)으로 표현할 수 있습니다. 박스 모델은 이 요소들을 함께 사용함으로써 박스를 CSS로 표현하는 방식을 설명합니다. 더 많은 정보는 [CSS 기본 박스 모델 입문](/ko/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)에서 확인할 수 있습니다.

### 박스 경계 키워드

박스 모델 명세서는 각각의 테두리에 해당하는 키워드들을 정의하며, 이러한 키워드들은 CSS에서 속성으로 사용됩니다. 예로, 박스 모델의 사이즈를 계산하는 {{cssxref("box-sizing")}} 속성의 값으로 사용할 수 있습니다.

- `content-box`
  - : 박스의 콘텐츠 영역(content area)의 경계.
- `padding-box`
  - : 안쪽 여백(패딩) 영역의 경계. 안쪽 여백(패딩)이 없을 시, `content-box`과 동일합니다.
- `border-box`
  - : 박스 테두리의 경계. 테두리가 없을 시, `padding-box`과 동일합니다. `padding-box`.
- `margin-box`
  - : 바깥 여백(마진)의 경계. 바깥 여백이 없을 시, `border-box`과 동일합니다.
- `stroke-box`
  - : SVG의 stroke(SVG의 테두리)와 bounding-box(SVG에서의 경계 상자). CSS에서는 `content-box`과 동일합니다.
- `view-box`
  - : SVG의 근접 뷰포트(viewport) 요소의 출처 박스(orgin box). CSS에서는 `border-box`와 동일합니다.

## 참고서

### 속성

#### 박스 내 콘텐츠 흐름을 제어하는 속성

- {{cssxref("overflow")}}
- {{cssxref("overflow-x")}}
- {{cssxref("overflow-y")}}

#### 박스 크기를 제어하는 속성

- {{cssxref("height")}}
- {{cssxref("width")}}
- {{cssxref("max-height")}}
- {{cssxref("max-width")}}
- {{cssxref("min-height")}}
- {{cssxref("min-width")}}

#### 박스의 바깥 여백을 제어하는 속성

- {{cssxref("margin")}}
- {{cssxref("margin-bottom")}}
- {{cssxref("margin-left")}}
- {{cssxref("margin-right")}}
- {{cssxref("margin-top")}}
- {{cssxref("margin-trim")}} {{Experimental_Inline}}

#### 박스의 안쪽 여백을 제어하는 속성

- {{cssxref("padding")}}
- {{cssxref("padding-bottom")}}
- {{cssxref("padding-left")}}
- {{cssxref("padding-right")}}
- {{cssxref("padding-top")}}

#### 기타 속성

- {{cssxref("visibility")}}

## 안내서

- [CSS 박스 모델 입문](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - : CSS의 기초 개념 중 하나인 박스 모델을 설명합니다. 박스 모델은 CSS가 요소와 요소의 콘텐츠, 안쪽 여백, 테두리, 바깥 여백 영역을 배치하는 법을 정의합니다.
- [여백 상쇄 정복](/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - : 어떤 경우, 두 개의 인접한 바깥 여백은 하나로 상쇄됩니다. 이 글은 상쇄가 언제 어떻게 일어나고 이를 어떻게 제어하는지 설명합니다.
- [시각적 서식 모델](/ko/docs/Web/Guide/CSS/Visual_formatting_model)
  - : 시각적 서식 모델을 설명합니다.

## 명세

{{Specifications}}
