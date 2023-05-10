---
title: '<div>: 콘텐츠 분할 요소'
slug: Web/HTML/Element/div
---

{{HTMLSidebar}}

**HTML `<div>` 요소**는 플로우 콘텐츠를 위한 통용 컨테이너입니다. {{glossary("CSS")}}로 꾸미기 전에는 콘텐츠나 레이아웃에 어떤 영향도 주지 않습니다.

{{EmbedInteractiveExample("pages/tabbed/div.html","tabbed-standard")}}

The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone [https://github.com/mdn/interactive-examples](https://github.com/mdn/interactive-examples) and send us a pull request.

`<div>` 요소는 "순수" 컨테이너로서 아무것도 표현하지 않습니다. 대신 다른 요소 여럿을 묶어 {{htmlattrxref("class")}}나 {{htmlattrxref("id")}} 속성으로 꾸미기 쉽도록 돕거나, 문서의 특정 구역이 다른 언어임을 표시({{htmlattrxref("lang")}} 속성 사용)하는 등의 용도로 사용할 수 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, 뚜렷한 콘텐츠
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >.<br />또는 ({{glossary("WHATWG")}} HTML에서): 부모가
        {{HTMLElement("dl")}} 요소라면: 하나 이상의
        {{HTMLElement("dt")}} 요소, 이후 하나 이상의
        {{HTMLElement("dd")}} 요소, 선택적으로
        {{HTMLElement("script")}}와 {{HTMLElement("template")}}
        요소 혼합 가능.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 아무 요소.<br />또는 ({{glossary("WHATWG")}}
        HTML에서) {{HTMLElement("dl")}} 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >대응하는 역할 없음</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>모두</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLDivElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 사용 일람

- `<div>` 요소는 의미를 가진 다른 요소({{htmlelement("article")}}, {{htmlelement("nav")}} 등)가 적절하지 않을 때만 사용해야 합니다.

## 예제

### 간단한 예제

```html
<div>
   <p>어떤 콘텐츠든 좋습니다.
   &lt;p&gt;, &lt;table&gt;같이 말이죠. 써보세요!</p>
</div>
```

결과는 다음과 같습니다.

{{ EmbedLiveSample('간단한_예제') }}

### 스타일 예제

다음 예제는 CSS로 \<div>에 그림자를 입힙니다. `<div>`의 {{htmlattrxref("class")}} 속성을 통해 `"shadowbox"` 스타일을 적용한 점에 주목하세요.

#### HTML

```html
<div class="shadowbox">
  <p>Here's a very interesting note displayed in a
  lovely shadowed box.</p>
</div>
```

#### CSS

```css
.shadowbox {
  width: 15em;
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}
```

#### 결과

{{EmbedLiveSample("스타일_예제", 650, 120)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 의미를 지닌 구획 요소: {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}
- 구문 콘텐츠를 꾸밀 때 사용하는 {{HTMLElement("span")}} 요소
