---
title: CSS 카운터 사용하기
slug: Web/CSS/CSS_counter_styles/Using_CSS_counters
---

{{CSSRef}}

**CSS counters**를 사용하면 문서에서의 위치에 따라 콘텐츠의 모양을 조정할 수 있습니다. 예를 들어, counters를 사용해 웹페이지의 제목에 자동으로 번호를 매길 수 있습니다. Counters는 요소가 몇 번이나 사용되었는지 추적하여 CSS 규칙에 따라 증가하며, 본질적으로 변수입니다.

## Counters 사용하기

### 카운터 값 조작하기

CSS counter를 사용하려면 먼저 {{cssxref("counter-reset")}} 속성(초깃값 `0`)을 사용하여 초기화 해야합니다. 동일한 속성으로 값을 특정 값으로 바꿀 수도 있습니다. 초기화 된 counter의 값은 {{cssxref("counter-increment")}}에 따라 증가하거나 감소합니다. counter의 이름으로 "none", "inherit", "initial"은 사용불가합니다. 이런 이름을 사용하면 선언은 무시됩니다.

### 카운터 표시하기

Counter의 값은 {{cssxref("content")}} 속성에서 {{cssxref("counter()")}}나 {{cssxref("counters()")}} 함수를 사용하여 표시할 수 있습니다.

`counter()` 함수는 'counter(name)'와 'counter(name, style)' 두 가지 형태로 사용할 수 있습니다. 생성된 텍스트는 가상 요소가 속한 범위에 있는 이름(name)의 가장 안쪽 counter의 값입니다. 텍스트는 지정된 서식(기본값은 십진수`decimal`)으로 뿌려집니다.

`counters()` 함수도 'counters(name, string)'나 'counters(name, string, style)' 두 가지 형태로 사용할 수 있습니다. 생성된 텍스트는 가상 요소가 속한 모든 범위에서 지정된 이름을 가진 counters의 값으로, 바깥 쪽부터 안쪽까지 값이 주어지며 지정된 문자열로 구분됩니다. counters는 지정된 스타일(기본값은 십진수`decimal`)로 렌더링 됩니다.

### 기본 예제

여기서는 제목 앞에 숫자를 붙여봅니다.

#### CSS

```css
body {
  counter-reset: section; /* counter 이름을 'section'으로 지정합니다.
                                                   초깃값은 0입니다. */
}

h3::before {
  counter-increment: section; /* section의 카운터 값을 1씩 증가시킵니다. */
  content: "Section " counter(section) ": "; /* section의 카운터 값을 표시합니다. */
}
```

#### HTML

```html
<h3>Introduction</h3>
<h3>Body</h3>
<h3>Conclusion</h3>
```

#### 결과

{{EmbedLiveSample("Basic_example", "100%", 150)}}

### 더 정교한 예시

카운터가 증가 할 때마다 반드시 표시되어야 하는 것은 아닙니다. 이 예시는 모든 링크를 계산하지만 카운터는 링크에 텍스트가 없는 경우에만 표시되므로 편리한 대체제입니다.

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
<p>See <a href="https://www.mozilla.org/"></a></p>
<p>Do not forget to <a href="contact-me.html">leave a message</a>!</p>
<p>See also <a href="https://developer.mozilla.org/"></a></p>
```

#### Result

{{EmbedLiveSample("A_more_sophisticated_example", "100%", 150)}}

## 중첩 카운터

CSS 카운터는 자식 요소 안에서 새 인스턴스를 자동으로 만들어주어 목차를 만드는데 유용합니다. {{cssxref("counters()")}} 함수를 사용해 중첩된 다른 레벨의 카운터 사이를 분리하는 글자를 지정할 수 있습니다.

### 중첩 카운터 예제

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
          <li>item</li>  <!-- 2.4.1 -->
          <li>item</li>  <!-- 2.4.2 -->
          <li>item</li>  <!-- 2.4.3 -->
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

## See also

- {{cssxref("counter-reset")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
