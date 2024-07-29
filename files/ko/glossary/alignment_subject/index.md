---
title: Alignment subject
slug: Glossary/Alignment_Subject
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

[CSS 상자 정렬](/ko/docs/Web/CSS/CSS_box_alignment)에서 **정렬 대상**은 속성에 의해 정렬되는 항목입니다.

{{cssxref("justify-self")}} 및 {{cssxref("align-self")}}의 경우, 정렬 대상은 해당 상자의 쓰기 모드를 사용해 속성이 설정된 상자의 여백 상자입니다. {{cssxref("justify-content")}} 및 {{cssxref("align-content")}}의 경우, 상자의 쓰기 모드도 사용됩니다.

정렬 대상의 정의는 사용되는 레이아웃 모드에 따라 다릅니다.

- 블록 컨테이너 (테이블 셀 포함)
  - : 블록의 전체 내용을 단일 단위로 나타냅니다.
- 다중 컬럼 컨테이너
  - : 컬럼 상자들 사이에 공백이 있는 경우를 나타냅니다.
- 플렉스 컨테이너
  - : {{cssxref("justify-content")}}의 경우, 각 플렉스 라인의 플렉스 항목입니다. {{cssxref("align-content")}}의 경우, 플렉스 라인을 의미합니다. 이것은 여러 줄의 플렉스 컨테이너에만 영향을 미칠 수 있다는 것에 주목하세요.
- 그리드 컨테이너
  - : 행과 열 공백이 그리드 항목 사이에 추가된 적절한 축의 그리드 항목입니다. 축소된 거터는 공간 삽입을 위한 유일한 기회로 생각될 수 있습니다.

## 같이 보기

- [CSS 상자 정렬](/ko/docs/Web/CSS/CSS_box_alignment) 모듈
