---
title: ":first-of-type"
slug: Web/CSS/:first-of-type
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`:first-of-type`** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)는 형제 요소 중 자신의 유형과 일치하는 제일 첫 요소를 나타냅니다.

```css
/* Selects any <p> that is the first element
   of its type among its siblings */
p:first-of-type {
  color: red;
}
```

> **참고:** 초기 정의에서는 부모가 있는 요소만 선택할 수 있었습니다. Selectors Level 4부터는 이 제한이 사라졌습니다.

## 구문

{{csssyntax}}

## 예제

### 첫 문단 스타일링

#### HTML

```html
<h2>Heading</h2>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
```

#### CSS

```css
p:first-of-type {
  color: red;
  font-style: italic;
}
```

#### 결과

{{EmbedLiveSample('첫_문단_스타일링')}}

### 중첩 요소

아래 코드는 중첩 요소를 선택하는 방법을 보입니다. 기본 선택자를 지정하지 않은 경우 [전체 선택자](/ko/docs/Web/CSS/Universal_selectors)(`*`)가 암시된다는 점도 볼 수 있습니다.

#### HTML

```html
<article>
  <div>This `div` is first!</div>
  <div>This <span>nested `span` is first</span>!</div>
  <div>
    This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!
  </div>
  <div>This <span>nested `span` gets styled</span>!</div>
  <b>This `b` qualifies!</b>
  <div>This is the final `div`.</div>
</article>
```

#### CSS

```css
article :first-of-type {
  background-color: pink;
}
```

#### 결과

{{EmbedLiveSample('중첩_요소', 500)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Cssxref(":first-child")}}, {{Cssxref(":last-of-type")}}, {{Cssxref(":nth-of-type")}}
