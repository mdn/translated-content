---
title: '<sup>: 위 첨자 요소'
slug: Web/HTML/Element/sup
---

{{HTMLSidebar}}

**HTML** **`<sup>`** 요소는 활자 배치를 위 첨자로 해야 하는 인라인 텍스트를 지정합니다. 위 첨자는 보통 더 작은 글씨 크기를 가지고, 기준선을 위로 올려 렌더링 합니다.

{{EmbedInteractiveExample("pages/tabbed/sup.html", "tabbed-shorter")}}

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

`<sup>` 요소는 타이포그래피적인 이유에 맞춰서만 사용해야 합니다. 타이포그래피적 이유란 기존의 관례나 표준이 위 첨자로 나타내는 경우를 말하며, 단순히 작은 글자를 위로 올려야 할 때는 사용해서는 안됩니다.

예를 들어 비즈니스나 상품의 [워드마크](https://en.wikipedia.org/wiki/Wordmark) 글씨 기준선을 올려야 한다면 `<sup>` 대신 CSS(대개 {{cssxref("vertical-align")}})를 사용해야 합니다. `vertical-align: super`를 사용할 수도 있고, 기준선을 50% 올려야 한다면 `vertical-align: 50%`로도 쓸 수 있습니다.

`<sup>`의 적절한 사용처의 몇 가지는 다음과 같습니다.

- "x<sup>3</sup>" 등 거듭제곱 연산의 지수 표기. 더 복잡한 표기를 해야 할 경우 [MathML](/ko/docs/Web/MathML)을 고려하세요. 아래의 [지수 표기](#지수_표기) 예제를 참고하세요.
- Displaying [superior letter](https://en.wikipedia.org/wiki/Superior_letter), which is used in some languages when rendering certain abbreviations. For example, in French, the word "mademoiselle" can be abbreviated "M<sup>lle</sup>"); this is an acceptable use case. See [Superior lettering](#superior_lettering) for examples.
- "4<sup>th</sup>" 등 서수 표기. 아래의 [서수 표기](#서수_표기) 예제를 참고하세요.

## 예제

### 지수 표기

위 첨자를 가장 많이 사용할만한 곳 중 하나는 거듭제곱의 지수 표기입니다.

```html
<p>One of the most common equations in all of physics is
<var>E</var>=<var>m</var><var>c</var><sup>2</sup>.<p>
```

{{EmbedLiveSample("지수_표기", 650, 80)}}

### Superior lettering

Superior lettering is not technically the same thing as superscript. However, it is common to use `<sup>` to present superior lettering in HTML. Among the most common uses of superior lettering is the presentation of certain abbreviations in French:

```html
<p>Robert a présenté son rapport à M<sup>lle</sup> Bernard.</p>
```

The resulting output:

{{EmbedLiveSample("Superior_lettering", 650, 80)}}

### 서수 표기

영어 "fourth", 스페인어 "quinto" 등 서수는 숫자와, 위 첨자로 표기한 언어별 특정 텍스트를 사용해 축약할 수 있습니다.

```html
<p>The ordinal number "fifth" can be abbreviated in various
languages as follows:</p>

<ul>
  <li>English: 5<sup>th</sup></li>
  <li>French: 5<sup>ème</sup></li>
</ul>
```

{{EmbedLiveSample("서수_표기", 650, 160)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 아래 첨자를 나타내는 {{HTMLElement("sub")}} 요소. 위 첨자와 아래 첨자가 같은 공간에 공존할 수는 없습니다. 따라서 화학의 질량수/원자 번호 표기 등을 구현하려면 [MathML](/ko/docs/Web/MathML)이 필요합니다.
- [`<msub>`](/ko/docs/Web/MathML/Element/msub), [`<msup>`](/ko/docs/Web/MathML/Element/msup), [`<msubsup>`](/ko/docs/Web/MathML/Element/msubsup) MathML 요소.
- CSS {{cssxref("vertical-align")}} 속성.
