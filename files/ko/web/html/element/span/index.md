---
title: <span>
slug: Web/HTML/Element/span
---

{{HTMLSidebar}}

**HTML `<span>` 요소**는 구문 콘텐츠를 위한 통용 인라인 컨테이너로, 본질적으로는 아무것도 나타내지 않습니다. 스타일을 적용하기 위해서, 또는 [`lang`](/ko/docs/Web/HTML/Global_attributes#lang) 등 어떤 특성의 값을 서로 공유하는 요소를 묶을 때 사용할 수 있습니다. 적절한 의미를 가진 다른 요소가 없을 때에만 사용해야 합니다. `<span>`은 {{htmlelement("div")}}와 매우 유사하지만, {{htmlelement("div")}}는 [블록 레벨 요소](/ko/docs/Web/HTML/Block-level_elements)인 반면 `<span>`은 [인라인 요소](/ko/docs/Web/HTML/Inline_elements)입니다.

{{EmbedInteractiveExample("pages/tabbed/span.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_컨텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_컨텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_컨텐츠"
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
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_컨텐츠"
          >구문 콘텐츠</a
        >
        또는
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_컨텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>모두</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLSpanElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 예제

### 예제 1

#### HTML

<pre class="brush:html gutter:false">&#x3C;p>&#x3C;span>Some text&#x3C;/span>&#x3C;/p></pre>

#### 결과

{{EmbedLiveSample('예제_1')}}

### 예제 2

#### HTML

<pre class="brush:html gutter:false">&#x3C;li>&#x3C;span>
    &#x3C;a href="portfolio.html" target="_blank">See my portfolio&#x3C;/a>
&#x3C;/span>&#x3C;/li>
</pre>

#### CSS

```css
li span {
  background: gold;
}
```

#### Result

{{EmbedLiveSample('예제_2')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- HTML {{HTMLElement("div")}} 요소
