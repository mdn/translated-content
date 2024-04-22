---
title: CSS z-index 이해하기
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
---

우리들은 HTML 페이지를 2차원 평면으로 생각한다. 왜냐하면 여러 텍스트, 이미지와 다른 엘리먼트들이 서로 겹치지 않고 배열되기 때문이다. 하나의 렌더링 흐름만이 존재하며 모든 엘리먼트들은 다른 엘리먼트들이 어떤 공간을 차지하고 있는지 알고 있다.

> _In CSS 2.1, each box has a position in three dimensions. In addition to their horizontal and vertical positions, boxes lie along a "z-axis" and are formatted one on top of the other. Z-axis positions are particularly relevant when boxes overlap visually._

(from [CSS 2.1 Section 9.9.1 - Layered presentation](http://www.w3.org/TR/CSS21/visuren.html#z-index))

위에 소개된 CSS 스타일 규칙을 보면 기본 렌더링 레이어(layer 0) 이외의 추가적인 레이어를 생성하고 여기에 박스를 위치시킬수 있다는 것을 알 수 있다. 레이어의 Z축 위치는 렌더링 될 때 쌓임 순서를 결정하는 하나의 정수로 결정된다. 큰 정수는 화면을 보고있는 사용자에게 가까운 것을 의미한다. Z축 위치는 {{ cssxref("z-index") }} 속성 값을 설정함으로써 바꿀 수 있다.

엘리먼트의 Z축 위치를 결정하는 것은 굉장히 간단해 보인다. {{ cssxref("z-index") }} 라는 하나의 프로퍼티를 사용하고 이 프로퍼티는 하나의 정수 값을 가진다. 그러나 {{ cssxref("z-index") }} 속성이 복잡한 HTML 계층적 엘리먼트들에 지정되었을 때에는 동작을 이해하기 힘들고 심지어 예측하지 못할 때도 있다. 이것은 엘리먼트들의 쌓임 순서를 결정하는 규칙(이하 쌓임 규칙)이 복잡하기 때문이다. 오로지 이 규칙만을 설명하기 위한 CSS 명세 섹션이 있을 정도다. ([CSS-2.1 Appendix E](http://www.w3.org/TR/CSS21/zindex.html))

이 문서에서는 몇가지 간단한 예를 들어 쌓임 규칙에 대해 설명하려고 한다.

1. [z-index가 없는 경우의 쌓임](/ko/CSS/Understanding_z-index/Stacking_without_z-index) : 기본 쌓임 규칙
2. [floating 엘리먼트의 쌓임](/ko/CSS/Understanding_z-index/Stacking_and_float) : floating 엘리먼트들은 어떻게 다루어지는가
3. [z-index 적용](/ko/CSS/Understanding_z-index/Adding_z-index) : 기본 쌓임 순서를 변경하기 위해 z-index 사용하기
4. [쌓임 맥락(stacking context) 이야기](/ko/CSS/Understanding_z-index/The_stacking_context) : 쌓임 맥락(stacking context) 이야기
5. [쌓임 맥락 예제1](/ko/CSS/Understanding_z-index/Stacking_context_example_1) : 2레벨 HTML 계층구조, 마지막 레벨에서 z-index가 지정된 경우
6. [쌓임 맥락 예제2](/ko/CSS/Understanding_z-index/Stacking_context_example_2) : 2레벨 HTML 계층구조, 모든 레벨에서 z-index가 지정된 경우
7. [쌓임 맥락 예제3](/ko/CSS/Understanding_z-index/Stacking_context_example_3) : 3레벨 HTML 계층구조, 두번째 레벨에서 z-index가 지정된 경우

_저자의 말: 검토를 해준 Wladimir Palant씨와 Rod Whiteley씨에게 감사의 말을 전합니다._

### 원본 문서 정보

- 저자(s): Paolo Lombardi
- 이 문서는 [YappY](http://www.yappy.it)에 이탈리어로 게재된 문서의 영어 번역판입니다. [Creative Commons: Attribution-Sharealike license](http://creativecommons.org/licenses/by-sa/2.0/) 아래에서 공유할 수 있습니다.
- 마지막 수정일: July 9th, 2005
