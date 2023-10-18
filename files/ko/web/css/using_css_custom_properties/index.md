---
title: 사용자 지정 CSS 속성 사용하기 (변수)
slug: Web/CSS/Using_CSS_custom_properties
---

{{cssref}}

**사용자 지정 속성**(**CSS 변수**, **종속 변수**)은 CSS 저작자가 정의하는 개체로, 문서 전반적으로 재사용할 임의의 값을 담습니다. 사용자 지정 속성은 전용 표기법을 사용해 정의하고, (`--main-color: black;`) {{cssxref("var", "var()")}} 함수를 사용해 접근할 수 있습니다. (`color: var(--main-color);`)

복잡한 웹사이트는 어마어마한 양의 CSS를 가지고 있는데, 종종 많은 값을 반복적으로 사용합니다. 예를 들어, 수 백 곳의 서로 다른 위치에서 같은 색상을 사용한다면, 그 색을 바꿔야 할 상황이 왔을 때 대규모 전역 검색 바꾸기를 피할 수 없습니다. 사용자 지정 속성을 사용하면 한 영역에 값을 저장해놓고 다른 여러 곳에서 참조해갈 수 있습니다. 추가로 오는 장점은 의미를 가지는 식별자를 사용한다는 것으로, `#00ff00`보다는 `--main-text-color`가 이해하기 쉽다는 것입니다. 특히 같은 색을 다른 맥락에서 사용할 때 이 장점이 도드라집니다.

사용자 지정 속성은 종속 대상이며 부모로부터 상속합니다.

## 기본 사용법

사용자 지정 속성은 두 개의 붙임표로 시작하는 속성의 이름과 함께, 유효한 CSS 값이라면 아무거나 그 값으로 지정해 선언합니다. 다른 일반적인 속성과 마찬가지로 사용자 지정 속성도 아래와 같이 규칙 집합 내에 작성합니다.

```css
element {
  --main-bg-color: brown;
}
```

규칙 집합의 선택자는 사용자 지정 속성을 사용할 수 있는 범위를 정의합니다. 흔히 보이는 패턴은 {{cssxref(":root")}} 의사 클래스에 선언해서 여러분의 HTML 문서 어디에서나 사용자 지정 속성에 접근할 수 있도록 구성하는 것입니다.

```css
:root {
  --main-bg-color: brown;
}
```

그러나 반드시 이렇게 선언해야 하는 것은 아닙니다. 범위를 제한해야 하는 적절한 이유가 있을 수도 있으니까요.

> **참고:** 사용자 지정 속성의 이름은 대소문자를 구분합니다. 따라서 `--my-color`와 `--My-color`는 서로 다른 속성으로써 처리합니다.

위에서 언급했듯, 사용자 지정 속성의 값을 사용할 때에는 일반적인 값의 자리에 {{cssxref("var()")}} 함수를 지정하고, 그 매개변수로는 사용자 지정 속성의 이름을 제공합니다.

```css
element {
  background-color: var(--main-bg-color);
}
```

## 사용자 지정 속성 첫 단계

동일한 색상을 여러 클래스에 적용하는, 다음의 간단한 예제로 시작하겠습니다.

```css
.one {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.two {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.three {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 100px;
}

.five {
  background-color: brown;
}
```

HTML에 적용해보겠습니다.

```html
<div>
  <div class="one">1:</div>
  <div class="two">2: Text <span class="five">5 - more text</span></div>
  <input class="three" />
  <textarea class="four">4: Lorem Ipsum</textarea>
</div>
```

결과는 다음과 같습니다.

{{EmbedLiveSample("사용자_지정_속성_첫_단계",600,180)}}

반복되는 CSS에 주목해보세요. 배경 색을 여러 곳에서 `brown`으로 지정하고 있습니다. 일부 CSS 선언의 경우 더 상위 단계로 반복되는 항목을 옮겨서 CSS의 상속을 통해 자연스럽게 해결할 수도 있습니다. 그러나 보다 복잡한 프로젝트의 경우 항상 이렇게 할 수 있는 것은 아닙니다. 이 때 {{cssxref(":root")}} 의사 클래스에 사용자 지정 속성을 선언하고, 필요한 곳에서 그 속성을 참조함으로써 반복 코드의 필요를 줄일 수 있습니다.

```css
:root {
  --main-bg-color: brown;
}

.one {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.two {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.three {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 75px;
}
.four {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 100px;
}

.five {
  background-color: var(--main-bg-color);
}
```

위의 코드는 이전 예제와 동일한 결과물을 낳지만, 원하는 값에 대한 단 하나의 선언만이 필요합니다. 나중에 페이지 전체에 걸쳐 해당 값을 바꿔야 할 경우 특이 유용해집니다.

## 사용자 지정 속성의 상속

사용자 지정 속성은 상속 대상입니다. 그러므로 특정 요소에 사용자 지정 속성 값을 설정하지 않은 경우, 그 부모의 값을 사용합니다. 다음 HTML 코드를 살펴보세요.

```html
<div class="one">
  <div class="two">
    <div class="three"></div>
    <div class="four"></div>
  </div>
</div>
```

아래의 CSS 코드를 적용할 것입니다.

```css
.two {
  --test: 10px;
}

.three {
  --test: 2em;
}
```

그러면, `var(--test)`의 결과는 다음과 같습니다.

- `class="two"` 요소: `10px`
- `class="three"` 요소: `2em`
- `class="four"` 요소: `10px` (부모로부터 상속)
- `class="one"` 요소: 유효하지 않음. 모든 사용자 지정 속성의 기본값.

이것들은 실제 CSS변수가 아니라 사용자 지정 속성이라는 것을 염두해 두자. 이 값들은 다른 규칙에서 사용하기 위해 따로 저장되는 것이 아니라, 필요할 때만 계산된다. 예를 들어, 요소의 속성을 설정하거나, 형제의 자손 규칙에서 이 요소를 검색할 수는 없다. 이 속성은 일반적인 CSS와 같이, 선택자가 일치하거나 해당 선택자의 하위 항목일 경우에만 설정된다.

## 사용자 지정 속성 대안 값

주어진 변수가 아직 정의되지 않았을 때, [var()](/ko/docs/Web/CSS/var) 를 이용하여 여러 개의 **대체 변수**를 정의할 수 있다. 이는 사용자 정의 요소(Custom Element)및 섀도우 돔(Shadow DOM)으로 작업할 때 유용하게 쓸 수 있다.

함수에 있어서의 첫번째 논쟁은 대체될 [사용자 속성](https://www.w3.org/TR/css-variables/#custom-property)의 이름이다. 두번째는 아래와 같이 잘못된 [사용자 속성](https://www.w3.org/TR/css-variables/#custom-property)을 참조하였을 때 대신 사용할 수 있는 대체 변수이다:

```css
.two {
  color: var(--my-var, red); /* --my-var가 정의되지 않았을 경우 red로 표시됨 */
}

.three {
  background-color: var(
    --my-var,
    var(--my-background, pink)
  ); /* my-var와 --my-background가 정의되지 않았을 경우 pink로 표시됨 */
}

.three {
  background-color: var(
    --my-var,
    --my-background,
    pink
  ); /* 유효하지 않음: "--my-background, pink" */
}
```

> **참고:** [사용자 속성](https://www.w3.org/TR/css-variables/#custom-property)같은 대체 구문은 쉼표를 허용한다. 예를 들어, var(--foo, red, blue)는 빨강, 파랑의 fallback을 정의하고 있다; 즉, 첫번째 쉼표와 함수 마지막 사이에 있는 값들은 모두 대체 변수로 간주한다.

## 유효성과 값

_각 속성과 연관된 기본 CSS 개념의 유효성은 사용자 지정 속성과 관련하여 별로 유용하지 않다. 사용자 속성 값을 분석할 때, 브라우저는 그것들이 어디서 사용되는지 모르기 때문에 거의 모든 값을 유효한 것으로 간주할 수 밖에 없다._

불행히도, 이 유효한 값들은 `var()` 함수 표현을 통하여 이해할 수 없는 문맥 안에서도 사용될 수 있다. 속성 및 사용자 변수로 인해 유효하지 않은 CSS 선언문이 만들어지면 계산된 시간에 유효한 새로운 개념이 생기게 된다*.*

## 유효하지 않은 변수를 만날 때

만일 브라우저가 유효하지 않은 `var()` 구문을 만나게 되면, 그 속성의 초기값이나 상속된 값이 사용된다.

아래의 코드를 보자.

### HTML

```html
<p>This paragraph is initial black.</p>
```

### CSS

```css
:root {
  --text-color: 16px;
}
p {
  color: blue;
}
p {
  color: var(--text-color);
}
```

예상대로 브라우저는 `--text-color` 의 값으로 `var(--text-color)` 를 대체했지만 `16px` 는 {{cssxref("color")}}에 유효한 값이 아니다. 대체한 결과, 그 속성은 의미가 통하지 않는다. 브라우저는 이 상황을 두 단계로 처리한다:

1. color 속성이 상속되었는지를 확인한다. 확인, 그런데 `<p>` 가 color 속성과 연관된 부모 엘리먼트가 없다. 그렇다면 다음 단계로 넘어간다.
2. 값을 **default initial value**,(초기 설정 디폴트값) 즉, black 으로 처리한다.

### 결과

{{EmbedLiveSample('What_happens_with_invalid_variables')}}

단락의 color 값은 blue가 되지 못한다. 유효하지 않은 값이 폴백 (fallback)이 아닌 초기설정 디포트값으로 대체되었기 때문이다. 만일 사용자가 어떠한 매개변수값 없이 `color: 16px` 를 쓴다면 에러(syntax error)를 받게 될 것이다. 대신 그 전에 지정된 선언이 사용된다.

> **참고:** CSS 속성/값 쌍에서 에러(syntax error)가 나면 그 라인은 무시되지만 계단식으로 지정된 값, 유효하지 않은 대체적용(substitution) - 유효하지 않은 사용자 지정값을 사용하는 것 - 은 무시되지 않으며, 그 값은 상속된다.

## JavaScript에서의 값

JavaScript로 사용자 속성값을 사용하는 것은 표준 속성을 사용하는 것과 같다.

```js
// 인라인 스타일에서 변수 얻기
element.style.getPropertyValue("--my-var");

// 어느 곳에서나 변수 얻기
getComputedStyle(element).getPropertyValue("--my-var");

// 인라인 스타일에 변수 설정하기
element.style.setProperty("--my-var", jsVar + 4);
```

## 같이 보기

- {{cssxref("--*", "사용자 지정 속성")}}
