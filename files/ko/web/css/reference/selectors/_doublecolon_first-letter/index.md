---
title: ::first-letter
slug: Web/CSS/Reference/Selectors/::first-letter
original_slug: Web/CSS/::first-letter
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`::first-letter`** [CSS](/ko/docs/Web/CSS) [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 [블록 컨테이너](/ko/docs/Web/CSS/CSS_display/Visual_formatting_model#block_containers)의 첫 번째 줄에 있는 첫 글자에 스타일을 적용합니다. 단, 그 앞에 다른 콘텐츠(이미지나 인라인 테이블)가 없는 경우에만 적용됩니다.

{{InteractiveExample("CSS Demo: ::first-letter", "tabbed-shorter")}}

```css interactive-example
p::first-letter {
  font-size: 1.5rem;
  font-weight: bold;
  color: brown;
}
```

```html interactive-example
<p>
  Scientists exploring the depths of Monterey Bay unexpectedly encountered a
  rare and unique species of dragonfish. This species is the rarest of its
  species.
</p>

<p>
  When Robison and a team of researchers discovered this fish, they were aboard
  a week-long expedition.
</p>
```

요소의 첫 글자를 식별하는 일은 항상 단순하지 않습니다.

- 첫 글자 앞뒤에 오는 구두점은 매칭에 포함됩니다. 구두점에는 유니코드에서 정의된 여는 괄호(Ps), 닫는 괄호(Pe), 시작 따옴표(Pi), 끝 따옴표(Pf), 기타 구두점(Po) 클래스에 해당하는 문자가 포함됩니다.
- 일부 언어에는 항상 함께 대문자로 쓰이는 이중 문자(digraph)가 있습니다. 예를 들어 네덜란드어의 `IJ`가 그러합니다. 이런 경우 `::first-letter` 의사 요소는 두 글자를 모두 매칭해야 합니다.
- {{ cssxref("::before") }} 의사 요소와 {{ cssxref("content") }} 속성을 조합해 요소 앞에 텍스트를 삽입할 수 있습니다. 이 경우 `::first-letter`는 삽입된 콘텐츠의 첫 글자를 매칭합니다.

> [!NOTE]
> CSS는 [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)와 [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)를 구분하기 위해 `::first-letter`와 같이 콜론 두 개(`::`)를 사용하는 표기법을 도입했습니다. 하위 호환성을 위해 브라우저는 이전에 도입된 단일 콜론(`:first-letter`) 표기도 지원합니다.
>
> 네덜란드어 `IJ` 같은 이중 문자에 대한 브라우저 지원은 미흡합니다. 아래 호환성 표에서 현재 상태를 확인하세요.

## 사용 가능한 속성

`::first-letter` 의사 요소와 함께 사용할 수 있는 CSS 속성은 일부에 한정됩니다.

- 모든 글꼴 관련 속성: {{ Cssxref("font") }}, {{ Cssxref("font-style") }}, {{cssxref("font-feature-settings")}}, {{cssxref("font-kerning")}}, {{cssxref("font-language-override")}}, {{cssxref("font-stretch")}}, {{cssxref("font-synthesis")}}, {{ Cssxref("font-variant") }}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{ Cssxref("font-weight") }}, {{ Cssxref("font-size") }}, {{cssxref("font-size-adjust")}}, {{ Cssxref("line-height") }}, {{ Cssxref("font-family") }}
- 모든 배경 속성: {{ Cssxref("background") }}, {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{cssxref("background-clip")}}, {{cssxref("background-origin")}}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}, {{ cssxref("background-size") }}, {{ Cssxref("background-attachment") }}, {{cssxref("background-blend-mode")}}
- 모든 마진 속성: {{ Cssxref("margin") }}, {{ Cssxref("margin-top") }}, {{ Cssxref("margin-right") }}, {{ Cssxref("margin-bottom") }}, {{ Cssxref("margin-left") }}
- 모든 패딩 속성: {{ Cssxref("padding") }}, {{ Cssxref("padding-top") }}, {{ Cssxref("padding-right") }}, {{ Cssxref("padding-bottom") }}, {{ Cssxref("padding-left") }}
- 모든 테두리 속성: {{ Cssxref("border") }}, {{ Cssxref("border-style") }}, {{ Cssxref("border-color") }}, {{ cssxref("border-width") }}, {{ cssxref("border-radius") }}, {{cssxref("border-image")}}
- {{ cssxref("color") }} 속성
- {{ cssxref("text-decoration") }}, {{cssxref("text-shadow")}}, {{ cssxref("text-transform") }}, {{ cssxref("letter-spacing") }}, {{ cssxref("word-spacing") }} (적절한 경우), {{ cssxref("line-height") }}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, {{cssxref("box-shadow")}}, {{ cssxref("float") }}, {{ cssxref("vertical-align") }} (`float`이 `none`일 경우만)

## 구문

```css
::first-letter {
  /* ... */
}
```

## 예제

### 기본 드롭 캡 (drop cap)

이 예제에서는 `::first-letter` 의사 요소를 사용해 `<h2>` 바로 뒤에 오는 단락의 첫 글자를 드롭 캡 효과로 꾸밉니다.

#### HTML

```html
<h2>My heading</h2>
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est.
</p>
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
```

#### CSS

```css
p {
  width: 500px;
  line-height: 1.5;
}

h2 + p::first-letter {
  color: white;
  background-color: black;
  border-radius: 2px;
  box-shadow: 3px 3px 0 red;
  font-size: 250%;
  padding: 6px 3px;
  margin-right: 6px;
  float: left;
}
```

#### 결과

{{ EmbedLiveSample('Basic_drop_cap', '100%', 350) }}

### 특수 구두점 및 비라틴 문자에 대한 효과

이 예제는 `::first-letter`가 특수 구두점 및 비(非)라틴 문자에 어떻게 적용되는지 보여줍니다.

#### HTML

```html
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
<p>-The beginning of a special punctuation mark.</p>
<p>_The beginning of a special punctuation mark.</p>
<p>"The beginning of a special punctuation mark.</p>
<p>'The beginning of a special punctuation mark.</p>
<p>*The beginning of a special punctuation mark.</p>
<p>#The beginning of a special punctuation mark.</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>"特殊的汉字标点符号开头。</p>
```

#### CSS

```css
p::first-letter {
  color: red;
  font-size: 150%;
}
```

#### 결과

{{ EmbedLiveSample('Effect_on_special_punctuation_and_non-Latin_characters', '100%', 350) }}

### SVG text 요소에서 첫 글자 스타일링

이 예제에서는 `::first-letter` 의사 요소를 사용해 SVG {{SVGElement("text")}} 요소의 첫 글자를 스타일링합니다.

> [!NOTE]
> 작성 시점 기준으로 이 기능은 [제한적으로만 지원됩니다](#브라우저_호환성).

#### HTML

```html
<svg viewBox="0 0 300 40">
  <text y="30">First letter in &lt;text&gt; SVG</text>
</svg>
```

#### CSS

```css
text {
  font-family: sans-serif;
}

text::first-letter {
  font-family: serif;
  font-size: 2rem;
  font-weight: 600;
  fill: tomato;
  stroke: indigo;
}
```

#### 결과

{{ EmbedLiveSample("styling_first_letter_in_SVG_text_element", "100%", "100") }}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("::first-line")}}
