---
title: "<strong>: 강한 중요 요소"
slug: Web/HTML/Reference/Elements/strong
original_slug: Web/HTML/Element/strong
l10n:
  sourceCommit: e31cb5978e9f3c731c49db9ed0a15795b870e141
---

{{HTMLSidebar}}

**`<strong>`** [HTML](/ko/docs/Web/HTML) 요소는 강한 중요성, 중대함 혹은 긴급한 내용임을 나타냅니다. 브라우저는 일반적으로 이 내용을 굵은 글씨로 렌더링합니다.

{{InteractiveExample("HTML Demo: &lt;strong&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  ... the most important rule, the rule you can never forget, no matter how much
  he cries, no matter how much he begs:
  <strong>never feed him after midnight</strong>.
</p>
```

```css interactive-example
p {
  font-size: 1rem;
}
```

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes)만 포함합니다.

## 사용 일람

`<strong>` 요소는 "강한 중요성"을 가진 내용을 위한 것으로, 아주 중대하거나 경고와 같은 긴급한 내용을 포함할 수 있습니다. 이 요소는 전체 페이지를 통틀어 아주 중요한 문장이 될 수 있고, 단순히 어떤 단어가 주변의 내용보다 더 중요하다는 것을 부각시킬 수도 있습니다.

보통 이 요소는 기본적으로 굵은 글씨체로 렌더링됩니다. 하지만, 단지 굵은 글씨체를 적용하기 위해 사용되어서는 안됩니다. 이러한 목적을 위해서는 CSS {{cssxref("font-weight")}} 속성을 사용해야 합니다. 높은 수준의 중요도를 나타내는 것 없이 특정 텍스트에 주목을 이끌려면 {{HTMLElement("b")}} 요소를 사용하세요. 강조 표시가 필요한 텍스트에는 {{HTMLElement("em")}} 요소를 사용하세요.

`<strong>`의 또다른 허용된 사례는, 페이지의 텍스트들 사이에서 주목이나 경고를 나타내는 문장의 라벨을 표시하는 것입니다.

### \<b> vs. \<strong>

웹사이트에서 같은 것을 표현하기 위해 많은 방법이 있다는 것은 새로운 개발자들에게 종종 혼란을 줍니다. {{HTMLElement("b")}}와 `<strong>`은 아마 가장 흔한 혼란 중의 하나이며, 개발자들이 "`<b>`를 사용해야 할까요? `<strong>`을 사용해야 할까요? 둘 다 같은 일을 하지 않나요?"라는 질문을 하게 만듭니다.

정확히는 같지 않습니다. `<strong>` 요소는 더 큰 중요성을 가진 내용을 위한 것이고, `<b>` 요소는 내용이 더 중요하다는 것을 나타내지 않고 텍스트에 주목을 끄는 데 사용됩니다.

둘 다 유효하고 HTML에서 의미론적인 HTML 요소임을 인지하는 것은 도움이 되며, 둘 다 대부분의 브라우저에서 기본적으로 같은 굵은 글씨체 스타일링을 가지고 있는 것은 우연의 일치입니다(실제로 어떤 오래된 브라우저에서는 `<strong>`을 밑줄로 표현합니다). 각 요소는 특정 유형의 시나리오에서 사용될 의도로 만들어졌으며, 텍스트를 굵은 글씨체로 꾸미길 원한다면 CSS {{cssxref("font-weight")}} 속성을 사용해야 합니다.

포함된 텍스트의 의도된 의미나 목적이 어떤 요소를 사용할지 결정해야 합니다. 의미를 전달하는 것이 의미론의 전부입니다.

### \<em> vs. \<strong>

혼란을 더하는 사실은 HTML 4가 `<strong>`을 더 강한 강조 표시로 정의한 반면, HTML 5는 `<strong>`을 "내용의 강한 중요성"을 나타내는 것으로 정의한다는 것입니다.

`<em>`은 문장의 맥락을 변화시키는 데에 사용되는 반면("나는 당근을 _사랑한다_" vs. "나는 _당근을_ 사랑한다"), `<strong>`은 문장의 일부분에 중요성을 더하기 위해 사용됩니다(예를 들어, "**경고!** 이것은 **매우 위험합니다.**"). `<strong>`과 `<em>` 둘 다 각각 중요도나 강조의 정도를 증가시키기 위해 중첩될 수 있습니다.

## 예제

### 기본 예제

```html
<p>
  Before proceeding, <strong>make sure you put on your safety goggles</strong>.
</p>
```

#### 결과

{{EmbedLiveSample("Basic_example", 650, 80)}}

### 경고 라벨링

```html
<p>
  <strong>Important:</strong> Before proceeding, make sure you add plenty of
  butter.
</p>
```

#### 결과

{{EmbedLiveSample("Labeling_warnings", 650, 80)}}

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/HTML/Content_categories"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a href="/ko/docs/Web/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >, <a href="/ko/docs/Web/HTML/Content_categories#뚜렷한_콘텐츠">뚜렷한 콘텐츠</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>불가능, 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        > 혹은
        <a href="/ko/docs/Web/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <code
          ><a href="/ko/docs/Web/Accessibility/ARIA/Roles/structural_roles#structural_roles_with_html_equivalents">strong</a
          >
        </code>
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

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("b")}} 요소
- {{HTMLElement("em")}} 요소
- {{cssxref("font-weight")}} 속성
