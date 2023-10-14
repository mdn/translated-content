---
title: 대체 정렬 (Fallback alignment)
slug: Glossary/Fallback_Alignment
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

[CSS 상자 정렬](/ko/docs/Web/CSS/CSS_box_alignment)에서, 요청된 정렬을 수행할 수 없는 경우를 처리하기 위해 대체 정렬이 지정됩니다. 예를 들어, `justify-content: space-between`을 지정하는 경우, [정렬 제목](/ko/docs/Glossary/Alignment_Subject)이 하나 이상 있어야 합니다. 그렇지 않은 경우, 대체 정렬이 사용됩니다. 아래에 설명된 대로 정렬 방법에 따라 지정됩니다.

- First baseline
  - : `start`
- Last baseline
  - : `safe end`
- Baseline
  - : `start`
- Space-between
  - : `flex-start` (start)
- Space-around
  - : `center`
- Space-evenly
  - : `center`
- Stretch
  - : `flex-start` (start)

## 같이 보기

- [CSS 상자 정렬](/ko/docs/Web/CSS/CSS_box_alignment)
