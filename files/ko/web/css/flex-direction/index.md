---
title: flex-direction
slug: Web/CSS/flex-direction
---

{{CSSRef}}

**`flex-direction`** [CSS](/ko/docs/Web/CSS) 속성은 플렉스 컨테이너 내의 아이템을 배치할 때 사용할 주축 및 방향(정방향, 역방향)을 지정합니다.

{{EmbedInteractiveExample("pages/css/flex-direction.html")}}

`row`와 `row-reverse`의 경우 플렉스 컨테이너의 방향성에 영향을 받음을 참고하세요. 컨테이너의 `dir` 값이 `ltr`이라면 `row`는 왼쪽부터 시작하는 가로축을, `row-reverse`는 오른쪽부터 시작하는 가로축을 나타냅니다. 그러나 `dir` 값이 `rtl`이라면 `row`가 오른쪽부터 시작하는 가로축을, `row-reverse`가 왼쪽부터 시작하는 가로축을 나타냅니다.

## 구문

```css
/* 한 줄의 글을 작성하는 방향대로 */
flex-direction: row;

/* <row>처럼, 대신 역방향 */
flex-direction: row-reverse;

/* 글 여러 줄이 쌓이는 방향대로 */
flex-direction: column;

/* <column>처럼, 대신 역방향 */
flex-direction: column-reverse;

/* 전역 값 */
flex-direction: inherit;
flex-direction: initial;
flex-direction: unset;
```

### 값

- `row`
  - : 플렉스 컨테이너의 주축이 글의 작성 방향과 동일합니다. 주축의 시작점과 끝점이 콘텐츠 방향과 동일합니다.
- `row-reverse`
  - : `row`와 동일하게 동작하지만 시작점과 끝점이 반대에 위치합니다.
- `column`
  - : 플렉스 컨테이너의 주축이 블록 축과 동일합니다. 주축의 시작점과 끝점이, 글 작성 모드의 이전 지점 및 이후 지점과 동일합니다.
- `column-reverse`
  - : `column`과 동일하게 동작하지만 시작점과 끝점이 반대에 위치합니다.

### 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<h4>This is a Column-Reverse</h4>
<div id="content">
  <div class="box" style="background-color:red;">A</div>
  <div class="box" style="background-color:lightblue;">B</div>
  <div class="box" style="background-color:yellow;">C</div>
</div>
<h4>This is a Row-Reverse</h4>
<div id="content1">
  <div class="box1" style="background-color:red;">A</div>
  <div class="box1" style="background-color:lightblue;">B</div>
  <div class="box1" style="background-color:yellow;">C</div>
</div>
```

### CSS

```css
#content {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: -webkit-flex;
  -webkit-flex-direction: column-reverse;
  display: flex;
  flex-direction: column-reverse;
}

.box {
  width: 50px;
  height: 50px;
}

#content1 {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: -webkit-flex;
  -webkit-flex-direction: row-reverse;
  display: flex;
  flex-direction: row-reverse;
}

.box1 {
  width: 50px;
  height: 50px;
}
```

### 결과

{{ EmbedLiveSample('예제', '', '300') }}

## 접근성 고려사항

`flex-direction` 속성에 `row-reverse` 또는 `column-reverse` 값을 사용하면 DOM 구조와 그 시각적 표현에 차이가 생깁니다. 이는 낮은 시력으로 스크린 리더 등 접근성 기술을 사용해 이동하는 사용자의 경험에 부정적인 영향을 줄 수 있습니다. 시각적(CSS) 순서가 중요하다고 해도, 스크린 리더 사용자는 그 순서가 어떻게 되는지 알 수 없습니다.

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

- CSS 플렉스박스 가이드: _[Basic Concepts of Flexbox](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS 플렉스박스 가이드: _[Ordering flex items](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)_
