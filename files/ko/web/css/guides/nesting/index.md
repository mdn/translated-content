---
title: CSS nesting
slug: Web/CSS/Guides/Nesting
original_slug: Web/CSS/CSS_nesting
l10n:
  sourceCommit: 13746bf1d5d8e5c7c7bce5e1281e6eeee77b3d44
---

**CSS 중첩** 모듈은 중첩 선택자들의 문법을 정의합니다. 그리고 부모 규칙 선택자의 상대적인 자식 규칙의 선택자를 지정하여 하나의 스타일 규칙을 다른 스타일 규칙 안에 중첩할 수 있는 기능을 제공합니다.

CSS 중첩은 [Sass](https://sass-lang.com/) 와 같은 CSS 전처리기와는 다릅니다. CSS 전처리기는 사전에 컴파일되지만, CSS 중첩은 브라우저에 의해 파싱됩니다.

CSS 중첩은 스타일시트를 더 읽기 쉽게, 모듈화하며, 그리고 더 쉬운 유지 보수성을 갖출 수 있게 합니다. 뿐만 아니라 CSS 파일의 크기를 줄이는 데에 도움이 되기 때문에 사용자가 다운로드하는 데이터의 양을 감소시킬 수 있습니다.

## 참고서

### 선택자

- [`&` 중첩 선택자](/ko/docs/Web/CSS/Nesting_selector)

## 안내서

- [CSS 중첩 사용하기](/ko/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
  - : CSS 중첩 사용 방법에 대해 설명합니다.
- [CSS 중첩 @-규칙](/ko/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
  - : @-규칙을 어떻게 중첩하는지 설명합니다.
- [CSS 중첩과 명시도](/ko/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
  - : 중첩 CSS 를 사용할 때의 명시도가 어떻게 다른지 설명합니다.

## 연관 개념

- [선택자와 혼합자](/ko/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [가상 선택자](/ko/docs/Web/CSS/Pseudo-classes)
- [CSS 전처리기](/ko/docs/Glossary/CSS_preprocessor)

## 명세서

{{Specifications}}

## 같이 보기

- [명시도](/ko/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS 캐스케이드와 모듈 상속](/ko/docs/Web/CSS/CSS_cascade)
- [CSS 선택자 모듈](/ko/docs/Web/CSS/CSS_selectors)
