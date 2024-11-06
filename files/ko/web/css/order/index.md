---
title: order
slug: Web/CSS/order
---

{{CSSRef}}

**`order`** [CSS](/ko/docs/Web/CSS) 속성은 플렉스 또는 그리드 컨테이너 안에서 현재 요소의 배치 순서를 지정합니다. 컨테이너 아이템의 정렬 순서는 오름차순 `order` 값이고, 같은 값일 경우 소스 코드의 순서대로 정렬됩니다.

{{EmbedInteractiveExample("pages/css/order.html")}}

## 구문

```css
/* <integer> 값 */
order: 5;
order: -5;

/* 전역 값 */
order: inherit;
order: initial;
order: unset;
```

> **참고:** `order` 속성은 논리적인 순서나 탭 순서와는 전혀 상관 없이 **화면에 보이는 순서**에만 영향을 줍니다. 따라서 비시각적 매체에 적용해선 안됩니다.

### 값

- {{cssxref("&lt;integer&gt;")}}
  - : 아이템의 순서.

### 형식 구문

{{csssyntax}}

## 예제

```html
<header>...</header>
<main>
  <article>Article</article>
  <nav>Nav</nav>
  <aside>Aside</aside>
</main>
<footer>...</footer>
```

위와 같은 기본적인 HTML에서, 다음 CSS 코드는 콘텐츠 블록을 감싸는, 고전적인 양쪽 사이드바 레이아웃을 만듭니다. Flexible Box Layout 모듈이 자동으로 모든 블록의 높이를 동일하게 하며 가능한 가로축 공간을 모두 분배합니다.

```css
main {
  display: flex;
  text-align: center;
}
main > article {
  flex: 1;
  order: 2;
}
main > nav {
  width: 200px;
  order: 1;
}
main > aside {
  width: 200px;
  order: 3;
}
```

### 결과

{{ EmbedLiveSample('Example') }}

## 접근성 고려사항

`order` 속성을 사용하면 실제 DOM 순서와 화면에 보여지는 콘텐츠의 순서가 서로 연결되지 않습니다. 이는 낮은 시각으로 스크린 리더 등 보조 기술을 사용해 이동하는 사용자의 경험에 부정적인 영향을 줄 수 있습니다. 시각적 순서(CSS)가 중요하더라도 스크린 리더 사용자는 제대로 된 읽기 순서를 알 수 없습니다.

- [Flexbox & the keyboard navigation disconnect — Tink](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [Source Order Matters | Adrian Roselli](http://adrianroselli.com/2015/09/source-order-matters.html)
- [MDN Understanding WCAG, Guideline 1.3 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.3_%E2%80%94_Create_content_that_can_be_presented_in_different_ways)
- [Understanding Success Criterion 1.3.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-sequence.html)

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS 플렉스박스 안내서: _[플렉스박스의 기본 개념](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS 플렉스박스 안내서: _[플렉스 아이템의 순서 정하기](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
- CSS 그리드 안내서: _[CSS 그리드 레이아웃과 접근성](/ko/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)_
