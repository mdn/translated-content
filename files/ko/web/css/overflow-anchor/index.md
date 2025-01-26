---
title: overflow-anchor
slug: Web/CSS/overflow-anchor
l10n:
  sourceCommit: 7a9f9baa25d9a7313bd6c62ef5ef585b28459c58
---

{{CSSRef}}

**`overflow-anchor`** [CSS](/ko/docs/Web/CSS) 속성은 콘텐츠 이동을 최소화하기 위해 스크롤의 위치를 조정하는 브라우저의 스크롤 앵커링 동작을 선택적으로 비활성화하는 방법을 제공합니다.

스크롤 앵커링 동작은 이를 지원하는 브라우저에서는 기본적으로 활성화되어 있습니다. 따라서 이 속성의 값을 바꾸는 것은 일반적으로 문서나, 혹은 문서의 일부분에서 스크롤 앵커링에 문제가 있다고 느껴질 때에 한하여 동작을 비활성화할 수 있습니다.

{{EmbedInteractiveExample("pages/css/overflow-anchor.html")}}

## 구문

```css
/* 키워드 값 */
overflow-anchor: auto;
overflow-anchor: none;

/* 전역 값 */
overflow-anchor: inherit;
overflow-anchor: initial;
overflow-anchor: revert;
overflow-anchor: revert-layer;
overflow-anchor: unset;
```

### 값

- `auto`
  - : 스크롤 위치를 조정할 때 요소가 잠재적인 앵커 동작을 합니다.
- `none`
  - : 요소가 잠재적인 앵커 동작을 하지 않습니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 스크롤 앵커링 방지하기

문서에서 스크롤 앵커링 동작을 방지하기 위해 `overflow-anchor` 속성을 사용합니다.

```css
* {
  overflow-anchor: none;
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Guide to scroll anchoring](/ko/docs/Web/CSS/overflow-anchor/Guide_to_scroll_anchoring)
