---
title: text-align
slug: Web/CSS/text-align
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`text-align`** 속성은 블록 요소나 표의 칸 상자의 가로 정렬을 설정합니다. 즉 {{cssxref("vertical-align")}}과 동일하나 세로가 아닌 가로 방향으로 동작합니다.

{{EmbedInteractiveExample("pages/css/text-align.html")}}

## 구문

```css
/* 키워드 값 */
text-align: left;
text-align: right;
text-align: center;
text-align: justify;
text-align: justify-all;
text-align: start;
text-align: end;
text-align: match-parent;

/* 표 열의 문자 기반 정렬 */
text-align: ".";
text-align: "." center;

/* 블록 정렬 값 (비표준 구문) */
text-align: -moz-center;
text-align: -webkit-center;

/* 전역 값 */
text-align: inherit;
text-align: initial;
text-align: unset;
```

`text-align` 속성은 다음 방법 중 하나를 사용해 지정합니다.

- [`start`](#start), [`end`](#end), [`left`](#left), [`right`](#right), [`center`](#center), [`justify`](#justify), [`justify-all`](#justify-all), [`match-parent`](#match-parent) 키워드 중 하나.
- [`<string>`](#string) 값만 사용. 다른 값은 [`right`](#right)을 사용하게 됩니다.
- 키워드 값과 [`<string>`](#string) 값 모두 사용.

### 값

- `start` {{experimental_inline}}
  - : 쓰기 방식이 좌횡서면 `left`와 같고, 우횡서면 `right`과 같습니다.
- `end` {{experimental_inline}}
  - : 쓰기 방식이 좌횡서면 `right`과 같고, 우횡서면 `left`와 같습니다.
- `left`
  - : 인라인 콘텐츠를 줄 상자의 왼쪽 모서리로 정렬합니다.
- `right`
  - : 인라인 콘텐츠를 줄 상자의 오른쪽 모서리로 정렬합니다.
- `center`
  - : 인라인 콘텐츠를 줄 상자의 가운데로 정렬합니다.
- `justify`
  - : 인라인 콘텐츠를 양쪽 정렬합니다. 마지막 줄을 제외하고, 줄 상자의 왼쪽과 오른쪽 끝에 텍스트를 맞추기 위해 사이 공간을 띄웁니다.
- `justify-all` {{experimental_inline}}
  - : `justify`와 같지만 마지막 줄에도 적용합니다.
- `match-parent` {{experimental_inline}}
  - : `inherit`과 비슷하지만, `start`와 `end` 값을 부모의 {{cssxref("direction")}}에 맞춰 적절한 `left`와 `right` 값으로 치환합니다.
- {{cssxref("&lt;string&gt;")}} {{experimental_inline}}
  - : 표 칸에 적용할 경우, 칸의 콘텐츠를 해당 문자에 맞춰 정렬합니다.

## 접근성 고려사항

양쪽 정렬 적용 시 생기는 불규칙한 여백은 난독증 등 인지력 저하를 겪고 있는 사용자에게 문제가 될 수 있습니다.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.8 | Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 왼쪽 정렬

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: left;
  border: solid;
}
```

#### 결과

{{EmbedLiveSample("왼쪽_정렬","100%","100%")}}

### 가운데 정렬

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: center;
  border: solid;
}
```

#### 결과

{{EmbedLiveSample("가운데_정렬","100%","100%")}}

### 양쪽 정렬

#### HTML

```html
<p class="example">
  Integer elementum massa at nulla placerat varius. Suspendisse in libero risus,
  in interdum massa. Vestibulum ac leo vitae metus faucibus gravida ac in neque.
  Nullam est eros, suscipit sed dictum quis, accumsan a ligula.
</p>
```

#### CSS

```css
.example {
  text-align: justify;
  border: solid;
}
```

#### 결과

{{EmbedLiveSample("양쪽_정렬","100%","100%")}}

### 참고

인라인 콘텐츠를 가운데 정렬하지 않고 자신을 정렬하는 법은 {{cssxref("margin")}}을 `auto`로 설정하는 것입니다.

```css
.something {
  margin: auto;
}
```

```css
.something {
  margin: 0 auto;
}
```

```css
.something {
  margin-left: auto;
  margin-right: auto;
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{Cssxref("margin","margin: auto")}}, {{Cssxref("margin-left","margin-left: auto")}}, {{Cssxref("vertical-align")}}
