---
title: "<sub>: 아래 첨자 요소"
slug: Web/HTML/Element/sub
---

{{HTMLSidebar}}

**HTML** **`<sub>`** 요소는 활자 배치를 아래 첨자로 해야 하는 인라인 텍스트를 지정합니다. 아래 첨자는 보통 더 작은 글씨 크기를 가지고, 기준선을 아래로 내려 렌더링 합니다.

{{EmbedInteractiveExample("pages/tabbed/sub.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>모두</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 사용 일람

`<sub>` 요소는 타이포그래피적인 이유에 맞춰서만 사용해야 합니다. 타이포그래피적 이유란 기존의 관례나 표준이 아래 첨자로 나타내는 경우를 말하며, 단순히 작은 글자를 아래로 올려야 할 때는 사용해서는 안됩니다.

예를 들어 비즈니스나 상품의 [워드마크](https://en.wikipedia.org/wiki/Wordmark) 글씨 기준선을 내려야 한다면 `<sub>` 대신 CSS(대개 {{cssxref("vertical-align")}})를 사용해야 합니다. `vertical-align: sub`를 사용할 수도 있고, 기준선을 25% 내려야 한다면 `vertical-align: -25%`로도 쓸 수 있습니다.

`<sub>`의 적절한 사용처 몇 가지는 다음과 같습니다.

- 각주 표기. 아래의 [각주 표기](#각주_표기) 예제를 참고하세요.
- 수학 변수의 숫자 표기. [MathML](/ko/docs/Web/MathML)을 사용하는 방향을 고려하세요. [변수 표기](#변수_표기) 예제를 참고하세요.
- 화학식에서 원소의 수를 나타낼 때. (개발자의 친구, C8H10N4O2, 카페인) 아래의 [화학식](#화학식) 예제를 참고하세요.

## 예제

### 각주 표기

각주의 숫자를 아래 첨자로 나타내는 경우도 있으며, `<sub>`가 흔히 쓰이는 경우입니다.

```html
<p>
  According to the computations by Nakamura, Johnson, and Mason<sub>1</sub> this
  will result in the complete annihilation of both particles.
</p>
```

{{EmbedLiveSample("각주_표기", 650, 80)}}

### 변수 표기

수학에서는 같은 축 위의 점 여럿과 같이, 동일한 개념을 가리키는 변수의 무리는 같은 변수명을 사용하며, 뒤의 아래 첨자 숫자로 서로 구분합니다.

```html
<p>
  The horizontal coordinates' positions along the X-axis are represented as
  <var>x<sub>1</sub></var> ... <var>x<sub>n</sub></var
  >.
</p>
```

{{EmbedLiveSample("변수_표기", 650, 80)}}

### 화학식

화학식에서 특정 원자의 수를 나타낼 때 아래 첨자를 사용합니다. H20의 아래 첨자 "2"는 화학식이 나타내는 물질에 수소 원자가 2개 존재한다는 뜻입니다.:

```html
<p>
  Almost every developer's favorite molecule is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, which is commonly known
  as "caffeine."
</p>
```

{{EmbedLiveSample("화학식", 650, 120)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 위 첨자를 나타내는 {{HTMLElement("sup")}} 요소. 위 첨자와 아래 첨자가 같은 공간에 공존할 수는 없습니다. 따라서 화학의 질량수/원자 번호 표기 등을 구현하려면 [MathML](/ko/docs/Web/MathML)이 필요합니다.
- [`<msub>`](/ko/docs/Web/MathML/Element/msub), [`<msup>`](/ko/docs/Web/MathML/Element/msup), [`<msubsup>`](/ko/docs/Web/MathML/Element/msubsup) MathML 요소.
- CSS {{cssxref("vertical-align")}} 속성.
