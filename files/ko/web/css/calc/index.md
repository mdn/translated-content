---
title: calc()
slug: Web/CSS/calc
---

{{CSSRef}}

**`calc()`** [CSS](/ko/docs/Web/API/CSS) 함수를 사용하면 CSS 속성의 값으로 계산식을 지정할 수 있습니다. {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;frequency&gt;")}}, {{cssxref("&lt;angle&gt;")}}, {{cssxref("&lt;time&gt;")}}, {{cssxref("&lt;percentage&gt;")}}, {{cssxref("&lt;number&gt;")}}, 또는 {{cssxref("&lt;integer&gt;")}}를 받는 속성의 값으로 사용할 수 있습니다.

## 구문

```css
/* property: calc(expression) */
width: calc(100% - 80px);
```

`calc()` 함수는 매개변수로 표현식 하나를 받고, 표현식의 결과가 최종 값이 됩니다. 표현식은 단순 계산식은 무엇이든 가능하며, 표준 연산자 우선순위를 따릅니다.

- `+`
  - : 덧셈.
- `-`
  - : 뺄셈.
- `*`
  - : 곱셈. 하나 이상의 피연산자가 {{cssxref("&lt;number&gt;")}}여야 합니다.
- `/`
  - : 나눗셈. 오른쪽 피연산자는 {{cssxref("&lt;number&gt;")}}여야 합니다.

피연산자로는 {{cssxref("&lt;length&gt;")}} 구문의 아무 값이나 사용할 수 있고, 원한다면 서로 다른 단위끼리도 계산할 수 있습니다. 괄호를 사용해서 연산 순서를 바꿀 수도 있습니다.

### 참고

- 0으로 나누면 HTML 구문분석기에서 오류가 발생합니다.
- `+`와 `-` 연산자는 좌우에 공백이 있어야 합니다. `calc(50% -8px)`은 백분율 값과 음수 길로 해석하여 유효하지 않지만, `calc(50% - 8px)`은 백분율과 길이의 뺄셈으로 해석합니다. 마찬가지로, `calc(8px + -50%)`는 길이와 음의 백분율간의 덧셈으로 처리합니다.
- `*`와 `/` 연산자는 좌우 공백을 요구하지 않지만, 그래도 추가하는 편이 일관성을 유지하기에 좋습니다.
- 표의 행, 열, 행/열 그룹, 자동이나 고정 레이아웃 칸에서 백분율을 포함한 수학식을 너비나 높이로 사용하면 `auto` 키워드를 사용한 것과 동일하게 처리합니다.
- `calc()` 함수를 중첩해서 사용하면 내부의 `calc()`는 단순한 괄호로 간주합니다.

### 형식 구문

{{csssyntax}}

## 예제

### 요소를 화면에 여백과 함께 배치하기

`calc()`를 이용하면 고정된 너비의 여백을 가진 요소를 쉽게 배치할 수 있습니다. 다음 예제에서는 화면을 가로지르면서 창의 좌우 모서리와 간격이 40픽셀인 배너를 생성합니다.

```css
.banner {
  position: absolute;
  left: 40px;
  width: calc(100% - 80px);
  border: solid black 1px;
  box-shadow: 1px 2px;
  background-color: yellow;
  padding: 6px;
  text-align: center;
  box-sizing: border-box;
}
```

```html
<div class="banner">이건 현수막입니다!</div>
```

{{EmbedLiveSample('요소를_화면에_여백과_함께_배치하기', 'auto', '60')}}

### 입력 양식 요소를 컨테이너 크기에 자동으로 맞추기

`calc()`의 다른 용도는 입력 양식의 필드가 적절한 여백을 갖추면서도 컨테이너 모서리 바깥으로 빠져나가지 않도록 설정하는 것입니다.

다음 CSS 코드를 살펴보세요.

```css
input {
  padding: 2px;
  display: block;
  width: calc(100% - 1em);
}

#formbox {
  width: calc(100% / 6);
  border: 1px solid black;
  padding: 4px;
}
```

위 코드에서, 폼 스스로는 창에서 사용 가능한 공간의 1/6을 차지합니다. 그 후, 입력 필드가 적절한 크기를 가질 수 컨테이너 너비에서 1em 뺀 만큼을 calc()로 지정했습니다. 이제 HTML에 CSS를 적용해보겠습니다.

```html
<form>
  <div id="formBox">
    <label>뭔가 입력해 보세요.</label>
    <input type="text" />
  </div>
</form>
```

{{EmbedLiveSample('입력_양식_요소를_컨테이너_크기에_자동으로_맞추기', '100%', '80')}}

### CSS 변수와 중첩 `calc()`

[CSS 변수](/ko/docs/Web/CSS/CSS_Variables)도 `calc()`와 같이 사용할 수 있습니다. 다음 코드를 살펴보세요.

```css
.foo {
  --widthA: 100px;
  --widthB: calc(var(--widthA) / 2);
  --widthC: calc(var(--widthB) / 2);
  width: var(--widthC);
}
```

모든 변수를 펼치면 `widthC`의 값은 `calc( calc( 100px / 2) / 2)`가 됩니다. 그 후 `.foo`의 너비 속성으로 지정될 때, 모든 중첩 `calc()`는 깊이에 관계 없이 단순한 괄호로 바뀌므로 `width` 속성의 값은 `calc( ( 100px / 2) / 2)`, 즉 `25px`이 됩니다. 요약하자면 `calc()` 안의 `calc()`는 그냥 괄호와 같습니다.

## 접근성 고려사항

`calc()`를 사용해 글씨 크기를 조절할땐 아래 코드처럼 피연산자 중 하나로 꼭 [상대길이 단위](/ko/docs/Web/CSS/length#상대길이_단위)를 사용해주세요.

```css
h1 {
  font-size: calc(1.5rem + 3vw);
}
```

이제 페이지를 확대해도 글씨 크기의 비율이 적절히 유지됩니다.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Firefox 4: CSS3 calc() ✩ Mozilla Hacks – the Web developer blog](https://hacks.mozilla.org/2010/06/css3-calc/)
