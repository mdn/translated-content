---
title: 그리드 컨테이너 (Grid container)
slug: Glossary/Grid_Container
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

요소에 `grid` 또는 `inline-grid` 값을 사용하면 해당 요소가 [CSS 그리드 레이아웃](/ko/docs/Web/CSS/CSS_grid_layout)을 사용하여 **그리드 컨테이너**로 변환되고, 바로 밑의 모든 자식 요소도 그리드 요소가 됩니다.

요소가 그리드 컨테이너가 되면 **그리드 서식 지정 컨텍스트**가 설정됩니다. 바로 밑의 자식 요소는 이제 {{cssxref("grid-template-columns")}} 및 {{cssxref("grid-template-rows")}}를 사용하여 정의된 명시적 그리드 또는 요소가 '명시적 그리드' 외부에 배치될 때 생성된 '암시적 그리드'에 배치될 수 있습니다.

## 같이 보기

### 속성 참고서

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### 더 읽어보기

- CSS 그리드 레이아웃 안내서: [그리드 레이아웃의 기본 개념](/ko/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
