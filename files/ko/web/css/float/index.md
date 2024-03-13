---
title: float
slug: Web/CSS/float
---

{{CSSRef}}

CSS 속성(property) **`float`** 은 한 요소(element)가 보통 흐름(normal flow)으로부터 빠져 텍스트 및 인라인(inline) 요소가 그 주위를 감싸는 자기 컨테이너의 좌우측을 따라 배치되어야 함을 지정합니다.

{{EmbedInteractiveExample("pages/css/float.html")}}

부동**(floating) 요소** 는 `float` 의 계산값(computed value)이 `none`이 아닌 요소입니다.

{{cssinfo}}

`float` 은 블록 레이아웃의 사용을 뜻하기 때문에, 일부 경우에 {{cssxref("display")}} 값의 계산값을 수정합니다:

| 지정값(Specified value) | 계산값                                                   |
| ----------------------- | -------------------------------------------------------- |
| `inline`                | `block`                                                  |
| `inline-block`          | `block`                                                  |
| `inline-table`          | `table`                                                  |
| `table-row`             | `block`                                                  |
| `table-row-group`       | `block`                                                  |
| `table-column`          | `block`                                                  |
| `table-column-group`    | `block`                                                  |
| `table-cell`            | `block`                                                  |
| `table-caption`         | `block`                                                  |
| `table-header-group`    | `block`                                                  |
| `table-footer-group`    | `block`                                                  |
| `flex`                  | `flex`, 다만 `float` 은 이러한 요소에 효과가 없음        |
| `inline-flex`           | `inline-flex`, 다만 `float` 은 이러한 요소에 효과가 없음 |
| _그외_                  | _변화없음_                                               |

> **참고:** **주의:** JavaScript에서 이 속성을 {{domxref("element.style")}} 객체의 멤버로서 참조한다면, 당신은 `cssFloat`으로 철자를 써야 합니다. 또한 Internet Explorer 8 이전 버전에서는 `styleFloat`으로 썼음을 주의하세요. 이는 DOM 멤버의 이름은 dash(-)로 구분된 CSS 이름의 카멜케이스(camel-case) 명이다는 규칙의 예외(이고 "class"는 "className"으로 \<label>의 "for"는 "htmlFor"로 이스케이프할 필요와 같이 "float"이 JavaScript에서 예약어란 사실 때문)입니다.

## 구문

```css
/* 키워드 값 */
float: left;
float: right;
float: none;
float: inline-start;
float: inline-end;

/* 전역 값 */
float: inherit;
float: initial;
float: unset;
```

### 값

- `left`
  - : 는 요소가 자신의 포함(containing) 블록의 좌측에 부동(float, 떠움직여)해야 함을 나타내는 키워드입니다.
- `right`
  - : 는 요소가 자신의 포함 블록의 우측에 부동해야 함을 나타내는 키워드입니다.
- `none`
  - : 는 요소가 부동하지 않아야 함을 나타내는 키워드입니다.
- `inline-start`
  - : 는 요소가 자신의 포함 블록의 시작쪽에 부동해야 함을 나타내는 키워드입니다. 즉, ltr(left to right) 스크립트 상에서 왼쪽 그리고 rtl(right to left) 스크립트 상에서는 오른쪽.
- `inline-end`
  - : 는 요소가 자신의 포함 블록의 끝쪽에 부동해야 함을 나타내는 키워드입니다. 즉, ltr 스크립트 상에서 오른쪽 그리고 rtl 스크립트 상에서는 왼쪽.

### 형식 구문

{{csssyntax}}

## 예제

### CSS

```css
div {
  border: solid red;
  max-width: 70ex;
}
h4 {
  float: left;
  margin: 0;
}
```

### HTML

```html
<div>
  <h4>HELLO!</h4>
  This is some text. This is some text. This is some text. This is some text.
  This is some text. This is some text. This is some text. This is some text.
  This is some text. This is some text. This is some text. This is some text.
</div>
```

{{EmbedLiveSample('예제')}}

### float이 위치 지정되는 법

위에서 말한 바와 같이, 요소가 부동되면 문서의 보통 흐름에서 빠집니다. 부동된 요소는 포함 박스나 *다른 부동된 요소*의 가장자리(edge)에 닿을 때까지 좌나 우로 이동됩니다.

아래 이미지에는, 빨간 사각형이 세 개 있습니다. 둘은 좌에 부동되고 하나는 우에 부동됩니다. "왼쪽" 두 번째 빨간 사각형은 첫 번째 사각형 오른쪽에 놓임을 주의하세요. 추가 사각형은 그들이 포함 박스를 채울 때까지 계속해서 오른쪽으로 쌓입니다. 그 후엔 다음 줄로 넘어갑니다(wrap).

![](floats.png)

### float 지우기

위 예제에서, 부동된 요소는 안에 텍스트가 부동된 블록보다 세로가 더 짧습니다. 그러나, 텍스트가 모든 부동 요소 하단 아래로 넘어갈 만큼 길지 않다면, 예상치 못한 결과를 볼 수 있습니다. 예를 들어, 위 단락(paragraph)이 오직 "Lorem ipsum dolor sit amet,"만 읽고 "Floats Example" 머릿글(heading)처럼 같은 스타일의 다른 머릿글이 이어졌다면, 두 번째 머릿글은 빨간 박스 사이에 보입니다. 아마도, 우리는 다음 머릿글이 완전히 왼쪽으로 정렬되기를 원합니다. 이를 달성하기 위해, 우리는 float을 지워야(clear) 합니다.

이 예제에서 float을 지우는 가장 간단한 방법은 우리가 왼쪽으로 정렬되는 지 확인하고 싶은 새 머릿글에 {{Cssxref("clear")}} 속성을 추가하는 것입니다:

```css
h2.secondHeading {
  clear: both;
}
```

그러나, 이 방법은 우리가 머릿글이 가로로 옆에 계속 보이기를 원하는 같은 블록 형식 문맥([block formatting context](/ko/docs/Web/Guide/CSS/Block_formatting_context)) 내에 다른 요소가 없을 때만 동작합니다. 우리 `h2` 좌우로 부동되는 사이드바(sidebar)인 형제(sibling)가 있다면, `clear` 사용은 강제로 머릿글이 두 사이드바 아래로 나타나게 하고 이는 아마 우리가 원하는 게 아닙니다.

그들 아래 요소의 float을 지우는 게 선택사항이 아니라면, 다른 방법(approach)은 부동 요소가 담긴 컨테이너의 블록 형식 문맥을 제한하는 겁니다. 다시 위 예제를 참조하면, 빨간 박스 셋은 모두 `p` 요소 내에 있는 걸로 보입니다. 우리는 박스를 포함하도록 늘어나지만, 그 하단 밖(밑)으로 사라지지 않게 `hidden` 혹은 `auto` 로 p의 {{Cssxref("overflow")}} 속성을 설정할 수 있습니다:

```css
p.withRedBoxes {
  overflow: hidden;
  height: auto;
}
```

> **참고:** **주의:** `overflow` 를 `scroll` 로 설정하면 부동된 모든 자식(child) 요소도 포함합니다. 하지만 스크롤바가 콘텐츠의 높이에 상관없이 보입니다. 그 컨테이너가 콘텐츠를 수용하기 위해 늘어야(grow) 함을 나타내는 기본(default)임에도 불구하고, 여기에서 우리는 `height` 를 `auto` 로 설정하고 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Block formatting context](/ko/docs/Web/Guide/CSS/Block_formatting_context)
