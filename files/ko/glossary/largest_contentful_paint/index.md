---
title: LCP
slug: Glossary/Largest_contentful_paint
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**최대 콘텐츠풀 페인트 (Largest contentful paint, LCP)** 성능 지표는 페이지가 처음 로드되기 시작할 때부터 기록된, 뷰포트 내에 표시되는 가장 큰 이미지 또는 텍스트 블록의 렌더링 시간을 제공합니다.

LCP를 결정할 때 아래 요소가 포함되어 측정됩니다.

- {{HTMLElement("img")}} 요소.
- SVG 내부의 [`<image>`](/ko/docs/Web/SVG/Element/image) 요소.
- {{HTMLElement("video")}} 요소의 포스터 이미지.
- {{cssxref("background-image")}}가 있는 요소.
- {{HTMLElement("p")}}와 같은, 텍스트 노드 그룹.

## 같이 보기

- [`LargestContentfulPaint`](/ko/docs/Web/API/LargestContentfulPaint)
- [최초 콘텐츠풀 페인트](/ko/docs/Glossary/First_contentful_paint)
- [최초 페인트](/ko/docs/Glossary/First_paint)
