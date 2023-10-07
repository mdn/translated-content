---
title: 명시도
slug: Web/CSS/Specificity
---

{{cssref}}

**명시도**란 브라우저가 어느 요소와 가장 연관된 속성을 찾는 수단으로, 이렇게 찾은 속성이 해당 요소에 적용됩니다. 명시도는 여러 종류의 [CSS 선택자](/ko/docs/Web/CSS/CSS_Reference#Selectors)로 구성된 일치 규칙에 기반합니다.

## 어떻게 계산되는가?

명시도는 주어진 CSS 선언에 적용되는 가중치(weight)로, 일치하는 선택자 내 각 [선택자 유형](#selector-type)의 수에 의해 결정됩니다. 여러 선언이 명시도가 같은 경우, CSS에서 맨 끝에 오는 선언이 요소에 적용됩니다. 명시도는 같은 요소가 여러 선언의 대상이 되는 경우에만 적용합니다. CSS 규칙에 따라 [직접 대상 요소](#directly-targeted-elements)는 요소가 부모로부터 상속받는 규칙보다 항상 우선합니다.

> **참고:** **주의:** 문서 트리 내 [요소의 근접도(proximity, 가까움)](#tree-proximity-ignorance)는 명시도에 영향이 없습니다.

### 선택자 유형

아래 선택자는 유형별로 명시도를 증가시킵니다.

1. [유형 선택자](/ko/docs/Web/CSS/Type_selectors)(`h1` 등) 및 의사 요소(`:before` 등).
2. [클래스 선택자](/ko/docs/Web/CSS/Class_selectors)(`.example` 등), 속성 선택자(`[type="radio"]` 등), 의사 클래스(`:hover` 등).
3. [ID 선택자](/ko/docs/Web/CSS/ID_selectors)(`#example` 등).

전역 선택자({{cssxref("Universal_selectors", "*")}}), 조합자({{CSSxRef("Adjacent_sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("General_sibling_combinator", "~")}}, [" "](/ko/docs/Web/CSS/Descendant_combinator), {{CSSxRef("Column_combinator", "||")}}) 및 부정 의사 클래스(`:not()`)는 명시도에 영향을 주지 않습니다. (`:not()` _내부에_ 선언한 선택자는 영향을 끼칩니다)

<https://specifishity.com>에서 자세한 정보를 확인할 수 있습니다.

요소에 추가한 인라인 스타일(`style="font-weight: bold"`처럼)은 항상 외부 스타일시트의 모든 스타일을 덮어쓰므로 가장 높은 명시도를 갖는 것으로 생각할 수 있습니다.

### `!important` 예외

`!important` 규칙이 스타일 선언에 사용된 경우, 이 선언은 다른 선언보다 우선합니다. 엄밀히 말해 `!important` 자체는 명시도와 아무 관련이 없지만, 명시도에 직접 영향을 미칩니다. 그러나 `!important` 사용은 **나쁜 습관**이고 스타일시트 내 자연스러운 [종속](/ko/docs/Web/CSS/Cascade)을 깨뜨려 디버깅을 더 어렵게 만들기에 피해야 합니다. `!important` 규칙으로 충돌하는 두 선언이 같은 요소에 적용된 경우, 더 큰 명시도를 갖는 선언이 적용됩니다.

**몇몇 경험 법칙들:**

- **항상** !important를 고려하기도 전에 명시도를 활용할 방법을 찾아보세요.
- 외부 CSS(Bootstrap 또는 Normalize.css 같은 외부 라이브러리에서)를 재정의하는 페이지 전용 CSS에**만** `!important`를 쓰세요.
- 플러그인/매시업을 작성할 때 `!important`는 **절대** 쓰지 마세요.
- 사이트 전반 CSS에는 `!important`를 **절대** 쓰지 마세요.

**`!important`를 사용하는 대신에, 다음을 고려하세요:**

1. CSS 종속cascading을 더 잘 활용하세요.
2. 더 명시된(명확한) 규칙을 쓰세요. 선택 중인 요소 앞에 하나 이상의 요소를 나타냄으로써 규칙은 더 명확해지고 더 높은 우선 순위를 얻습니다:

   ```html
   <div id="test">
     <span>Text</span>
   </div>
   ```

   ```css
   div#test span {
     color: green;
   }
   div span {
     color: blue;
   }
   span {
     color: red;
   }
   ```

   순서와 무관하게 첫 번째 규칙이 가장 명확하므로 텍스트는 녹색이 됩니다. (또한, 역시 순서와 무관하게 파란색 규칙이 빨간색 규칙보다 우선합니다.)

3. (2)의 말도 안 되는 특별한 경우로, 더 이상 명시할 요소가 없는 경우 간단한 선택자를 여러 번 써서 명시도를 높일 수 있습니다.

   ```css
   #myId#myId span {
     color: yellow;
   }
   .myClass.myClass span {
     color: orange;
   }
   ```

#### `!important`를 사용하는 때

##### A) 인라인 스타일을 재정의할 때

사이트 전체의 시각적 요소를 설정하는 전역 CSS 파일은 각 요소에 직접 정의된 인라인 스타일에 덮어쓰일 수 있습니다. 인라인 스타일과 `!important` 모두 매우 나쁜 습관으로 취급되지만, 가끔씩은 `!important`로 인라인 스타일을 덮어써야 할 때가 있습니다.

이때는 전역 CSS 파일의 몇몇 스타일을 `!important`로 설정해서 요소에 직접 작성한 인라인 스타일을 덮어쓸 수 있습니다.

```html
<div class="foo" style="color: red;">나는 무슨 색일까?</div>
```

```css
.foo[style*="color: red"] {
  color: firebrick !important;
}
```

여러 자바스크립트 프레임워크와 라이브러리에서 인라인 스타일을 추가합니다. 이런 인라인 스타일을 덮어쓸 때 매우 구체적인 선택자와 함께 `!important`를 사용할 수 있습니다.

##### B) 명시도가 높은 규칙을 재정의할 때

```css
#someElement p {
  color: blue;
}

p.awesome {
  color: red;
}
```

어떻게 하면 `awesome` 문단이 `#someElement` 안에 있더라도 항상 빨갛게 만들 수 있을까요? `!important`를 사용하지 않으면 위쪽 규칙의 명시도가 높으므로 아래쪽 규칙보다 우선합니다.

#### `!important`를 덮어쓰는 방법

A) 태그, ID나 클래스를 추가함으로써 명시도가 더 높은 !important한 CSS 규칙을 만듭니다.

```css
table td {
  height: 50px !important;
}
.myTable td {
  height: 50px !important;
}
#myTable td {
  height: 50px !important;
}
```

B) 혹은 기존의 선택자 아래에 똑같은 선택자를 하나 더 만듭니다(명시도가 같으면 나중에 정의된 규칙이 우선하므로).

```css
td {
  height: 50px !important;
}
```

C) 아니면 기존 규칙을 수정해서 아예 `!important`를 사용하지 않게 만드는 것이 더 좋은 방법입니다.

```css
[id="someElement"] p {
  color: blue;
}

p.awesome {
  color: red;
}
```

ID를 ID 선택자 대신 속성 선택자로 선택하면 클래스 1개와 같은 명시도가 됩니다. 두 선택자의 명시도가 같아졌으므로 나중에 오는 규칙이 우선합니다.

#### 아래에서 자세한 정보를 확인하세요

- <https://stackoverflow.com/questions/3706819/what-are-the-implications-of-using-important-in-css>
- <https://stackoverflow.com/questions/9245353/what-does-important-in-css-mean>
- <https://stackoverflow.com/questions/5701149/when-to-use-important-property-in-css>
- <https://stackoverflow.com/questions/11178673/how-to-override-important>
- <https://stackoverflow.com/questions/2042497/when-to-use-important-to-save-the-day-when-working-with-css>

### `:is()` 및 `:not()` 예외

모두 일치 의사 클래스 {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}} 및 부정 의사 클래스 {{CSSxRef(":not", ":not()")}}은 명시도 계산에서 의사 클래스로 취급되지 _않습니다_. 그러나 이들 의사 클래스 안에 명시된 선택자는 [선택자 유형](#selector-type)의 수를 결정할 때 일반 선택자로 셉니다.

다음 CSS 조각과 HTML은...

```css
div.outer p {
  color: orange;
}
div:not(.outer) p {
  color: lime;
}
```

```html
<div class="outer">
  <p>This is in the outer div.</p>
  <div class="inner">
    <p>This text is in the inner div.</p>
  </div>
</div>
```

...다음과 같이 화면에 표시됩니다.

{{EmbedLiveSample('is_및_not_예외','600','100')}}

### `:where()` 예외 {{Experimental_Inline}}

{{SeeCompatTable}}

명시도 조정 가상 클래스 {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}}의 명시도는 항상 0입니다.

다음 CSS 조각과 HTML은...

```css
div:where(.outer) p {
  color: orange;
}

div p {
  color: blueviolet;
}
```

```css hidden
#no-where-support {
  margin: 0.5em;
  border: 1px solid red;
}

#no-where-support:where(*) {
  display: none !important;
}
```

```html hidden
<div id="no-where-support">
  ⚠️ Your browser doesn't support the
  <code
    ><a href="https://developer.mozilla.org/docs/Web/CSS/:where" target="_top"
      >:where()</a
    ></code
  >
  pseudo-class.
</div>
```

```html
<div class="outer">
  <p>This is in the outer div.</p>
  <div class="inner">
    <p>This text is in the inner div.</p>
  </div>
</div>
```

...다음과 같이 화면에 표시됩니다.

{{EmbedLiveSample('The_where_exception','600','100')}}

### 형태 기반 명시도

명시도는 선택자의 형태(form)를 기반으로 합니다. 아래에서 선택자 `*[id="foo"]`는 그 자체로는 ID를 선택하지만 선택자의 명시도를 계산할 때는 속성 선택자로 취급됩니다.

다음 스타일 선언과 마크업은...

```css
*#foo {
  color: green;
}
*[id="foo"] {
  color: purple;
}
```

```html
<p id="foo">I am a sample text.</p>
```

...다음과 같이 표시됩니다.

{{EmbedLiveSample('형태_기반_명시도','600','100')}}

같은 요소와 일치하지만 ID 선택자는 더 높은 명시도를 갖기 때문입니다.

### 트리 근접도 무시

요소와 주어진 선택자로 참조된 다른 요소와의 근접도(proximity)는 명시도에 영향을 주지 않습니다.

다음 스타일 선언과 HTML은...

```css
body h1 {
  color: green;
}
html h1 {
  color: purple;
}
```

```html
<html>
  <body>
    <h1>Here is a title!</h1>
  </body>
</html>
```

...아래와 같이 렌더링됩니다.

{{EmbedLiveSample('트리_근접도_무시','600','100')}}

두 선언은 [선택자 유형](#selector-type) 갯수가 같지만 `html h1` 선택자가 나중에 선언되었기 때문입니다.

### 직접 일치 요소와 상속된 스타일

특정한 요소와 직접적으로 일치하는 스타일은 상속된 규칙의 명시도와 무관하게 항상 상속된 스타일보다 우선합니다.

다음 CSS와 HTML은...

```css
#parent {
  color: green;
}
h1 {
  color: purple;
}
```

```html
<html>
  <body id="parent">
    <h1>Here is a title!</h1>
  </body>
</html>
```

...역시 아래와 같이 렌더링됩니다.

{{EmbedLiveSample('직접_일치_요소와_상속된_스타일','600','100')}}

`h1` 선택자는 특정한 요소와 직접 일치하지만 초록색 선택자는 그렇지 않고 부모로부터 상속되기 때문입니다.

## 명세

{{Specifications}}

## 같이 보기

- 명시도 계산기: CSS 규칙을 테스트하고 이해할 수 있는 대화형 웹사이트 - <https://specificity.keegan.st/>
- CSS3 선택자 명시도 - <http://www.w3.org/TR/selectors/#specificity>
- CSS 주요 개념

  - [CSS 문법](/ko/docs/Web/CSS/Syntax)
  - [@규칙](/ko/docs/Web/CSS/At-rule)
  - [주석](/ko/docs/Web/CSS/Comments)
  - [명시도](/ko/docs/Web/CSS/Specificity)
  - [상속](/ko/docs/Web/CSS/inheritance)
  - [박스 모델](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [레이아웃 모드](/ko/docs/Web/CSS/Layout_mode)
  - [시각적 서식 모델](/ko/docs/Web/CSS/Visual_formatting_model)
  - [마진 중첩](/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - 값

    - [초깃값](/ko/docs/Web/CSS/initial_value)
    - [계산값](/ko/docs/Web/CSS/computed_value)
    - [결정값](/ko/docs/Web/CSS/resolved_value)
    - [지정값](/ko/docs/Web/CSS/specified_value)
    - [사용값](/ko/docs/Web/CSS/used_value)
    - [실제값](/ko/docs/Web/CSS/actual_value)

  - [값 정의 구문](/ko/docs/Web/CSS/Value_definition_syntax)
  - [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)
  - [대체 요소](/ko/docs/Web/CSS/Replaced_element)
