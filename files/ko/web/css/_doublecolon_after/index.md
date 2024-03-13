---
title: "::after (:after)"
slug: Web/CSS/::after
---

{{CSSRef}}

CSS에서, **`::after`** 는 선택한 요소의 맨 마지막 자식으로 [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)를 하나 생성합니다. 보통 {{cssxref("content")}} 속성과 함께 짝지어, 요소에 장식용 콘텐츠를 추가할 때 사용합니다. 기본값은 인라인입니다.

```css
/* 링크 뒤에 화살표 추가 */
a::after {
  content: "→";
}
```

> **참고:** `::before`와 `::after`로 생성한 의사 요소는 [원본 요소의 서식 박스에 포함되므로](https://www.w3.org/TR/CSS2/generate.html#before-after-content), {{HTMLElement("img")}}나 {{HTMLElement("br")}} 등 [대체 요소](/ko/docs/Web/CSS/Replaced_element)에 적용할 수 없습니다.

## 구문

{{csssyntax}}

> **참고:** [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)와 [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)를 구분하기 위해 CSS3부터`::after` 구문을 도입했습니다. 그러나 브라우저는 CSS2 구문인 `:after`도 허용합니다.

## 예제

### 간단한 사용법

평범한 문단과 흥미진진한 문단을 위해 클래스 두 개를 만들고, 문단 마지막에 의사 요소를 추가해보겠습니다.

#### HTML

```html
<p class="boring-text">적당히 평범하고 심심한 글입니다.</p>
<p>지루하지도 흥미진진하지도 않은 글입니다.</p>
<p class="exciting-text">MDN 기여는 쉽고 재밌습니다.</p>
```

#### CSS

```css
.exciting-text::after {
  content: " <- 흥미진진!";
  color: green;
}

.boring-text::after {
  content: " <- 먼지풀풀";
  color: red;
}
```

#### 결과

{{EmbedLiveSample('간단한_사용법', 500, 150)}}

### 장식 예제

{{cssxref("content")}} 속성을 활용해 자유롭게 텍스트나 이미지를 추가할 수 있습니다.

#### HTML

```html
<span class="ribbon">마지막의 주황색 상자를 바라보세요.</span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::after {
  content: "멋진 주황색 상자입니다.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### 결과

{{ EmbedLiveSample('장식_예제', 550, 40) }}

### 툴팁

다음 예제는 `::after`와 함께 CSS {{cssxref("attr", "attr()")}} 표현식, `data-descr` [사용자 설정 데이터 속성](/ko/docs/Web/HTML/Global_attributes/data-*)을 사용해 툴팁을 구현합니다. JavaScript 없이요!

`tabindex="0"`을 추가해 각 `span`에 포커스가 갈 수 있도록 지정한 후, CSS `:focus` 선택자를 추가하여 키보드 사용자도 지원할 수 있습니다. 예제를 통해 ::before와 ::after가 얼마나 유연한지 확인할 수 있지만, 가장 접근성이 뛰어난 구현을 위해서라면 [요약과 세부 요소](/ko/docs/Web/HTML/Element/details)처럼 의미를 담은 요소를 활용하는 편이 좋습니다.

#### HTML

```html
<p>
  이 예제는
  <span tabindex="0" data-descr="단어와 문장 부호의 집합">텍스트</span>와 함께
  약간의
  <span tabindex="0" data-descr="호버 시 보여지는 작은 팝업">툴팁</span>을
  포함합니다.
</p>
```

#### CSS

```css
span[data-descr] {
  position: relative;
  text-decoration: underline;
  color: #00f;
  cursor: help;
}

span[data-descr]:hover::after,
span[data-descr]:focus::after {
  content: attr(data-descr);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### 결과

{{EmbedLiveSample('툴팁', 450, 120)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
