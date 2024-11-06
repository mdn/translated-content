---
title: CSS 카운터 사용하기
slug: Web/CSS/CSS_counter_styles/Using_CSS_counters
l10n:
  sourceCommit: f75fd658f627b5730a14ada901120cfa4ee01bda
---

{{CSSRef}}

**CSS counters**를 사용하면 문서에서의 위치에 따라 콘텐츠의 모양을 조정할 수 있습니다. 예를 들어, 카운터를 사용해 웹페이지의 제목에 자동으로 번호를 매기거나 순서가 있는 목록의 서수를 변경할 수 있습니다.

카운터는 요소가 몇 번이나 사용되었는지 추적하여 CSS 규칙에 따라 증가하거나 감소하며, 본질적으로 변수입니다.
카운터에 사용자 지정 이름을 적용할 수 있고, 모든 순서가 있는 목록에 대해 기본적으로 생성되는 `list-item` 카운터도 조작할 수 있습니다.

## Counters 사용하기

CSS 카운터를 사용하려면 먼저 {{cssxref("counter-reset")}} 속성을 사용하여 초기화 해야합니다. 카운터의 값은 {{cssxref("counter-increment")}} 속성을 이용하여 증가하거나 감소시킬 수 있습니다. 카운터의 현재 값은 {{cssxref("counter", "counter()")}} 혹은 {{cssxref("counters", "counters()")}} 함수로 표시되는데, 일반적으로 [가상 요소](/ko/docs/Web/CSS/Pseudo-elements)인 {{CSSxRef("content")}} 속성 내에서 쓰입니다.

카운터는 박스를 생성하는 요소에 대해서만 설정, 재설정, 혹은 증가시킬 수 있습니다.
예를 들어, 요소에 `display: none` 가 설정되어 있다면, 해당 요소에서 적용되는 카운터는 모두 무시됩니다.

카운터의 속성은 {{cssxref("contain")}} 속성에 상세하게 설명된 스타일 격리를 사용하여 특정 요소 내에서 범위를 지정할 수 있습니다.

### 카운터 값 조작하기

CSS 카운터를 사용하려면 먼저 {{cssxref("counter-reset")}} 속성을 사용하여 초기화 해야합니다.
이 속성은 카운터의 값을 아무 숫자로 변경하는 데에 사용됩니다.

아래 예제에서는 `section` 이라고 명명된 카운터를 기본값 (0)으로 초기화합니다.

```css
counter-reset: section;
```

각각에 대해 초기값을 특정한다면 여러 개의 카운터를 초기화할 수도 있습니다.
아래 예제에서는 `section` 과 `topic` 카운터를 기본값으로 초기화하고, `page` 카운터는 3으로 설정합니다.

```css
counter-reset: section page 3 topic;
```

한번 초기화가 되면 카운터의 값은 {{cssxref("counter-increment")}} 을 사용하여 증가하거나 감소시킬 수 있습니다.
예를 들어, 아래 선언에서는 모든 `h3` 태그에 대해 `section` 카운터를 하나씩 증가시킵니다.

```css
h3::before {
  counter-increment: section; /* section 카운터를 1씩 증가 */
}
```

카운터의 이름 뒤에 양수나 음수를 사용함으로써증가하거나 감소시킬 값을 설정할 수 있습니다.

카운터의 이름으로 `none`, `inherit`, 또는 `initial` 는 사용 불가하고, 이런 이름을 사용하면 선언은 무시됩니다.

### 카운터 표시하기

카운터의 값은 {{cssxref("content")}} 속성에서 {{cssxref("counter()")}}나 {{cssxref("counters()")}} 함수를 사용하여 표시할 수 있습니다.

예를 들어, 다음 선언에서는 `counter()` 를 사용하여 각각의 `h3` 제목 앞에 `Section <number>:` 라는 텍스트를 추가하고, 여기서의 `<number>` 는 십진수로 카운트된 값입니다. (기본으로 표시되는 스타일)

```css
h3::before {
  counter-increment: section; /* section 카운터를 1씩 증가 */
  content: "Section " counter(section) ": "; /* 기본 스타일(십진수)로 카운터 값 표시 */
}
```

{{cssxref("counter", "counter()")}} 함수는 중첩된 단계의 번호 매기기가 부모 단계의 맥락을 포함하지 않을 때에 사용됩니다.
여기 각각의 중첩 단계가 1부터 시작하는 예제가 있습니다.

```plain
1 One
  1 Nested one
  2 Nested two
2 Two
  1 Nested one
  2 Nested two
  3 Nested three
3 Three
```

{{cssxref("counters", "counters()")}} 함수는 중첩된 단계의 카운트가 부모 단계의 카운트를 포함해야 할 때 사용됩니다.
예를 들어, 다음과 같이 섹션을 레이아웃하는 데에 사용할 수 있습니다.

```plain
1 One
  1.1 Nested one
  1.2 Nested two
2 Two
  2.1 Nested one
  2.2 Nested two
  2.3 Nested three
3 Three
```

{{cssxref("counter", "counter()")}} 함수는 `counter(<counter-name>)` 와 `counter(<counter-name>, <counter-style>)` 처럼 두 가지 형태로 사용될 수 있습니다.
생성된 텍스트는 의사 요소의 범위 내에서 주어진 이름의 가장 안쪽의 카운터 값입니다.

{{cssxref("counters", "counters()")}} 함수 또한 두 가지 형태를 가지는데, `counters(<counter-name>, <separator>)` 와 `counters(<counter-name>, <separator>, <counter-style>)` 입니다.
생성된 텍스트는 의사 요소의 범위 내에서 주어진 이름의 모든 카운터 값이고, 가장 바깥쪽부터 가장 안쪽까지를 문자열 (`<separator>`)를 사용하여 분리합니다.

카운터는 두 가지 방법 모두에서 지정된 `<counter-style>` 로 렌더링됩니다. (기본값은 `decimal`)
{{cssxref("list-style-type")}} 값들을 사용하거나 사용자 지정의 [맞춤 스타일](/ko/docs/Web/CSS/CSS_counter_styles)을 사용할 수도 있습니다.

`counter()` 와 `counters()` 의 사용에 대한 예제는 아래 [기본 예제](#기본_예제) 그리고 [중첩 카운터 예제](#중첩_카운터_예제)에서 확인할 수 있습니다.

### 역순 카운터

역순 카운터는 증가가 아닌 감소를 목적으로 하는 카운터입니다.
역순 카운터는 {{cssxref("counter-reset")}} 에서 카운터의 이름을 지정할 때 `reversed()` 함수 표기를 사용하여 생성할 수 있습니다.

역순 카운터는 기본 초기값을 가지고 있는데, 이는 요소의 수와 동일합니다. (기본값이 0인 일반적인 카운터와는 다릅니다.)
이는 요소의 수에서 하나까지 감소시키는 카운터의 구현을 더 쉽게 만듭니다.

예를 들어, `section` 이라는 이름의 역순 카운터를 기본 초기값으로 생성하기 위해서는 아래 문법처럼 작성할 수 있습니다.

```css
counter-reset: reversed(section);
```

물론 원하는 초기값을 지정할 수도 있습니다.

카운터의 값은 {{cssxref("counter-increment")}} 의 음수값을 특정함에 따라 감소하게 됩니다.

> **참고:** {{cssxref("counter-increment")}} 를 사용하여 역순이 아닌 카운터를 감소시킬 수 있습니다.
> 역순 카운터의 주요 이점은 기본 초기값이며,`list-item` 카운터가 역순 카운터를 자동으로 감소시킨다는 점입니다.

### 목록 요소의 카운터

{{HTMLElement("ol")}} 요소로 생성된 것과 같은 순서가 있는 목록에서, 카운터는 암묵적으로 `list-item` 라는 이름을 갖습니다.

다른 카운터들처럼 이 또한 0의 기본 초기값을 가지게 되는데, "요소의 숫자" 역시 역순 카운터의 초기값으로 쓰입니다.
사용자가 지정한 카운터가 아니라면 `list-item` 은 카운터가 역순인지 아닌지 여부에 따라 자동적으로 각각의 요소에 대하여 1씩 증가하거나 감소하게 됩니다.

`list-item` 카운터는 CSS 를 사용한 순서가 있는 목록의 기본 동작을 조작할 수도 있습니다.
예를 들어 기본 초기값을 변경하거나, {{cssxref("counter-increment")}} 를 사용하여 목록 요소가 증가하거나 감소되는 것을 변경할 수 있습니다.

## 예제

### 기본 예제

이 예제는 각 제목의 시작 부분에 "Section \[카운터 값]:"을 추가합니다.

#### CSS

```css
body {
  counter-reset: section; /* 카운터의 이름을 'section' 으로 지정하며, 초기값은 0이 됩니다. */
}

h3::before {
  counter-increment: section; /* section 카운터를 1씩 증가 */
  content: "Section " counter(section) ": "; /* 'Section ' 단어를 표시하고,
                                                각 h3의 내용 앞에 섹션 카운터 값과
                                                콜론을 추가합니다. */
}
```

#### HTML

```html
<h3>도입</h3>
<h3>본문</h3>
<h3>결론</h3>
```

#### 결과

{{EmbedLiveSample("Basic_example", "100%", 150)}}

### 기본 예제: 역순 카운터

이 예제는 위에서 본 예제와 동일하지만, 역순 카운터를 사용한다는 점만 다릅니다.
만일 브라우저가 `reversed()` 함수 표기법을 지원한다면, 결과는 아래와 같이 보일 것입니다.

![역순 카운터](reversed_headings_basic.png)

#### CSS

```css
body {
  counter-reset: reversed(
    section
  ); /* 카운터의 이름을 'section' 으로 지정하며, 초기값은 0이 됩니다. */
}

h3::before {
  counter-increment: section -1; /* section 카운터를 1씩 감소 */
  content: "Section " counter(section) ": "; /* 'Section ' 단어를 표시하고,
                                                각 h3의 내용 앞에 섹션 카운터 값과
                                                콜론을 추가합니다. */
}
```

#### HTML

```html
<h3>도입</h3>
<h3>본문</h3>
<h3>결론</h3>
```

#### 결과

{{EmbedLiveSample("Basic example: reversed counter", "100%", 150)}}

### 더 정교한 예제

카운터는 증가할 때마다 반드시 표시될 필요는 없습니다.
이 예제는 모든 링크를 세면서, 링크에 텍스트가 없을 때만 카운터를 표시하여 편리한 대체 방법으로 사용합니다.

#### CSS

```css
:root {
  counter-reset: link;
}

a[href] {
  counter-increment: link;
}

a[href]:empty::after {
  content: "[" counter(link) "]";
}
```

#### HTML

```html
<p>보기 <a href="https://www.mozilla.org/"></a></p>
<p><a href="contact-me.html">메시지를 남기는 것을</a> 잊지 마세요!</p>
<p>같이 보기 <a href="https://developer.mozilla.org/"></a></p>
```

#### 결과

{{EmbedLiveSample("A_more_sophisticated_example", "100%", 150)}}

### 중첩 카운터 예제

CSS 카운터는 자식 요소 안에서 새 인스턴스를 자동으로 만들어주어 목차를 만드는데 유용합니다.
{{cssxref("counters", "counters()")}} 함수를 사용해 중첩된 다른 레벨의 카운터 사이를 분리하는 글자를 지정할 수 있습니다.

#### CSS

```css
ol {
  counter-reset: section; /* ol 요소마다
                                            이름이 section인
                                            새 인스턴스를 생성합니다. */
  list-style-type: none;
}

li::before {
  counter-increment: section; /* 해당 인스턴스 안에서
                                            section 카운터 값 증가 */
  content: counters(section, ".") " "; /* section 카운터 값을
                                            마침표(.)로 구분해 결합하여
                                            표시합니다. */
}
```

#### HTML

```html-nolint
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item               <!-- 2     -->
    <ol>
      <li>item</li>      <!-- 2.1   -->
      <li>item</li>      <!-- 2.2   -->
      <li>item           <!-- 2.3   -->
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
        </ol>
        <ol>
          <li>item</li>  <!-- 2.3.1 -->
          <li>item</li>  <!-- 2.3.2 -->
          <li>item</li>  <!-- 2.3.3 -->
        </ol>
      </li>
      <li>item</li>      <!-- 2.4   -->
    </ol>
  </li>
  <li>item</li>          <!-- 3     -->
  <li>item</li>          <!-- 4     -->
</ol>
<ol>
  <li>item</li>          <!-- 1     -->
  <li>item</li>          <!-- 2     -->
</ol>
```

#### 결과

{{EmbedLiveSample("Example_of_a_nested_counter", "100%", 350)}}

## 명세서

{{Specifications}}

## 같이 보기

- {{cssxref("contain")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- [CSS 카운터 스타일](/ko/docs/Web/CSS/CSS_counter_styles) 모듈
- [CSS 목록과 카운터](/ko/docs/Web/CSS/CSS_lists) 모듈
