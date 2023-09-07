---
title: <abbr>
slug: Web/HTML/Element/abbr
---

{{HTMLSidebar}}

**HTML `<abbr>` 요소**는 준말 또는 머리글자를 나타냅니다. 선택 속성인 [`title`](/ko/docs/Web/HTML/Global_attributes#title)을 사용하면 준말의 전체 뜻이나 설명을 제공할 수 있습니다. `title` 속성은 전체 설명만을 가져야 하며 다른건 포함할 수 없습니다.

{{EmbedInteractiveExample("pages/tabbed/abbr.html", "tabbed-shorter")}}

<table class="htmlelt">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a
          href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          title="HTML/Content categories#Flow content"
          >플로우 콘텐츠</a
        >,
        <a
          href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          title="HTML/Content categories#Phrasing content"
          >구문 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a
          href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          title="HTML/Content_categories#Phrasing_content"
          >구문 콘텐츠</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a
          href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          title="HTML/Content_categories#Phrasing_content"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소.
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다. 단, 다른 요소와 달리 `<abbr>` 요소에서의 [`title`](/ko/docs/Web/HTML/Global_attributes#title) 특성은 특정한 의미를 가지며, `title`은 준말에 대한 설명 혹은 확장 형태를 사람이 읽을 수 있는 형태를 값으로 가져야 합니다. 브라우저는 `title`의 값을 보통 마우스 커서를 올렸을 때 나타나는 툴팁으로 보여줍니다.

각각의 `<abbr>` 요소는 서로 독립적입니다. 하나의 요소에 `title`을 제공한다고 나머지에 지정하지 않아도 되는 것은 아닙니다.

## 사용 일람

### 많이 쓰이는 곳

당연히 모든 준말을 `<abbr>`로 표시해야 하는 것은 아닙니다. 그러나 표시할 경우 도움이 될, 다음과 같은 경우가 있습니다.

- 사용한 준말과 머리글자를 문서 콘텐츠 플로우 밖에서 풀어서 설명하고 싶으면 적절한 [`title`](/ko/docs/Web/HTML/Global_attributes#title) 특성을 지정한 `<abbr>` 요소를 사용하세요.
- 독자에게 익숙하지 않을 수 있는 준말을 사용할 경우 `<abbr>`과 함께 `title` 특성이나 인라인 텍스트로 단어에 대한 정의를 제공하세요.
- 준말임을 명시적으로 나타내야 할 경우 `<abbr>` 요소가 유용합니다. 이를 응용하면 스타일링이나 스크립트 적용에도 사용할 수 있습니다.
- `<abbr>`을 {{HTMLElement("dfn")}}과 같이 사용하면 준말이나 머리글자를 그 정의와 연결할 수 있습니다. 아래의 [준말 정의하기](#준말_정의하기)을 참고하세요.

### 문법 고려사항

수량이 문법에 영향을 미치는 언어(one apple vs. two apple**s**)의 경우, `<abbr>` 요소의 텍스트와 `title` 특성의 내용이 같은 형태를 따르도록 하세요. 아랍어처럼 두 개 이상의 복수형 구분을 두는 언어에서 특히 중요하나, 영어도 해당합니다.

## 기본 스타일

`<abbr>`의 목적은 오로지 HTML 작성자의 편리함을 위함이며, 모든 브라우저는 기본적으로 인라인({{cssxref('display')}}`: inline`)으로 렌더링 합니다. 그러나 기본 스타일은 브라우저마다 다를 수 있습니다.

- Internet Explorer 등 일부 브라우저는 {{HTMLElement("span")}} 요소와 동일하게 그립니다.
- Opera, Firefox 등은 요소에 점선 밑줄을 추가합니다.
- 몇몇은 점선을 추가할 뿐만 아니라, 영어 소문자도 작은 대문자로 표현합니다. 이를 제거하려면 CSS {{cssxref('font-variant')}}를 `none`으로 설정하세요.

## 예제

### 준말임을 나타내기

설명 없이, 단순히 특정 단어가 준말임을 나타내기만 하고자 하면 `<abbr>`을 다른 특성 없이 사용하세요.

#### HTML

```html
<p>Using <abbr>HTML</abbr> is fun and easy!</p>
```

#### 결과

{{EmbedLiveSample("준말임을_나타내기")}}

### 준말 스타일링

CSS를 사용해 준말에 적용할 사용자 지정 스타일을 적용할 수 있습니다.

#### HTML

```html
<p>Using <abbr>CSS</abbr>, you can style your abbreviations!</p>
```

#### CSS

```css
abbr {
  font-variant: all-small-caps;
}
```

#### 결과

{{EmbedLiveSample("준말_스타일링")}}

### 펼친 형태 보여주기

[`title`](/ko/docs/Web/HTML/Global_attributes#title) 특성을 사용하면 준말과 머리글자를 펼친 원래 형태를 보여줄 수 있습니다.

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big time.</p>
```

#### 결과

{{EmbedLiveSample("펼친_형태_보여주기")}}

### 준말 정의하기

`<abbr>`과 {{HTMLElement("dfn")}}을 사용하면 준말을 정식으로 정의할 수 있습니다.

#### HTML

```html
<p>
  <dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr> </dfn> is a
  markup language used to create the semantics and structure of a web page.
</p>

<p>
  A <dfn id="spec">Specification</dfn> (<abbr title="Specification">spec</abbr>)
  is a document that outlines in detail how a technology or API is intended to
  function and how it is accessed.
</p>
```

#### 결과

{{EmbedLiveSample("준말_정의하기", 600, 120)}}

## 접근성 고려사항

준말과 머리글자가 처음 사용될 때, 그 뜻을 풀어 설명하면 독자가 문서를 이해하기 쉬워집니다. 특히 콘텐츠가 기술이나 산업에 관련된 전문적인 내용인 경우 더욱 그렇습니다.

#### 예제

```html
<p>
  JavaScript Object Notation(<abbr>JSON</abbr>)은 경량의 데이터 교환 형식입니다.
</p>
```

무엇보다 용어나 개념에 익숙하지 않은 사람, 언어를 새로 접한 사람, 그리고 인지력 문제를 겪고 있는 사용자에게 큰 도움이 됩니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
