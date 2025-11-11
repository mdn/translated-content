---
title: "<div>: 콘텐츠 구분 요소"
slug: Web/HTML/Reference/Elements/div
original_slug: Web/HTML/Element/div
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

[HTML](/ko/docs/Web/HTML) **`<div>`** 요소는 플로우 콘텐츠를 담는 일반적인 컨테이너입니다. {{glossary("CSS")}}를 통해 직접 스타일을 적용하거나 [플렉스박스](/ko/docs/Web/CSS/CSS_flexible_box_layout) 같은 레이아웃 모델이 부모 요소에 적용되지 않는 한, 해당 요소 자체는 콘텐츠나 레이아웃에 아무런 영향을 주지 않습니다.

{{InteractiveExample("HTML Demo: &lt;div&gt;", "tabbed-standard")}}

```html interactive-example
<div class="warning">
  <img
    src="/shared-assets/images/examples/leopard.jpg"
    alt="An intimidating leopard." />
  <p>Beware of the leopard</p>
</div>
```

```css interactive-example
.warning {
  border: 10px ridge #f00;
  background-color: #ff0;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
}

.warning img {
  width: 100%;
}

.warning p {
  font: small-caps bold 1.2rem sans-serif;
  text-align: center;
}
```

"순수한" 컨테이너로서 `<div>` 요소는 본래 아무런 의미를 갖지 않습니다. 대신, 콘텐츠를 그룹화해서 [`class`](/ko/docs/Web/HTML/Reference/Global_attributes/class)나 [`id`](/ko/docs/Web/HTML/Reference/Global_attributes/id) 속성을 사용해 쉽게 스타일을 지정하거나, [`lang`](/ko/docs/Web/HTML/Reference/Global_attributes/lang) 속성을 사용해 문서의 일부가 다른 언어로 작성되었음을 표시하는 등의 용도로 사용됩니다.

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes)을 포함합니다.

> [!NOTE] > `align` 속성은 더 이상 사용되지 않는 구식 속성이므로 사용하지 않습니다. 대신, `<div>` 요소를 정렬하거나 배치할 때는 [CSS Grid](/ko/docs/Web/CSS/CSS_grid_layout)나 [CSS Flexbox](/ko/docs/Learn_web_development/Core/CSS_layout/Flexbox) 같은 CSS 속성이나 기술을 사용하는 것이 좋습니다.

## 사용 일람

- `<div>` 요소는 {{HTMLElement("article")}}나 {{HTMLElement("nav")}} 같은 다른 시맨틱 요소를 사용할 수 없는 경우에만 사용해야 합니다.

## 접근성

`<div>` 요소는 [암시적으로 `generic`의 역할](https://www.w3.org/TR/wai-aria-1.2/#generic)을 가지며, none이 아닙니다. 이로 인해 특정 역할을 가진 자식 요소가 있어야 제대로 동작하는 일부 ARIA 조합 선언에서는 영향을 줄 수 있습니다.

## 예제

### 기본 예제

```html
<div>
  <p>
    Any kind of content here. Such as &lt;p&gt;, &lt;table&gt;. You name it!
  </p>
</div>
```

#### 결과

{{EmbedLiveSample("A_basic_example", 650, 60)}}

### 스타일 적용 예제

이 예제는 `<div>` 요소에 CSS 스타일을 적용해 그림자 박스를 만듭니다. `"shadowbox"`라는 스타일을 적용하기 위해 `<div>`에 [`class`](/ko/docs/Web/HTML/Reference/Global_attributes/class) 속성을 사용한 점에 주목하세요.

#### HTML

```html
<div class="shadowbox">
  <p>Here's a very interesting note displayed in a lovely shadowed box.</p>
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

{{EmbedLiveSample("A_styled_example", 650, 120)}}

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/HTML/Guides/Content_categories"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a href="/ko/docs/Web/HTML/Guides/Content_categories#flow_content"
          >플로우 콘텐츠</a
        >, <a href="/ko/docs/Web/HTML/Guides/Content_categories#palpable_content">인식 가능 콘텐츠</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/HTML/Guides/Content_categories#flow_content"
          >플로우 콘텐츠</a
        >.<br />또는 ({{glossary("WHATWG")}} HTML 기준으로),
        {{HTMLElement("dl")}}가 부모 요소인 경우 하나 이상의
        {{HTMLElement("dt")}} 요소 다음에 하나 이상의
        {{HTMLElement("dd")}} 요소가 와야하며, 필요에 따라
        {{HTMLElement("script")}}나
        {{HTMLElement("template")}} 요소가 섞여 있어도 됩니다.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>생략 불가. 시작과 종료 태그 모두 필수.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/HTML/Guides/Content_categories#flow_content"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.<br />또는 ({{glossary("WHATWG")}} HTML 기준으로),
        {{HTMLElement("dl")}} 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <code
          ><a href="/ko/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>제한 없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLDivElement")}}</td>
    </tr>
  </tbody>
</table>

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 시맨틱 구획 요소: {{HTMLElement("section")}}, {{HTMLElement("article")}}, {{HTMLElement("nav")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}
- 문장 콘텐츠에 스타일을 적용할 수 있는 {{HTMLElement("span")}} 요소
