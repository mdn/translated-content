---
title: '<strong>: 높은 중요도 요소'
slug: Web/HTML/Element/strong
---

{{HTMLSidebar}}

**HTML `<strong>` 요소**는 중대하거나 긴급한 콘텐츠를 나타냅니다. 보통 브라우저는 굵은 글씨로 표시합니다.

{{EmbedInteractiveExample("pages/tabbed/strong.html", "tabbed-shorter")}}

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
        >
        또는
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 사용 일람

The `<strong>` element is for content that is of "strong importance," including things of great seriousness or urgency (such as warnings). This could be a sentence that is of great importance to the whole page, or you could merely try to point out that some words are of greater importance compared to nearby content.

Typically this element is rendered by default using a bold font weight. However, it should _not_ be used simply to apply bold styling; use the CSS {{cssxref("font-weight")}} property for that purpose. Use the {{HTMLElement("b")}} element to draw attention to certain text without indicating a higher level of importance. Use the {{HTMLElement("em")}} element to mark text that has stress emphasis.

Another accepted use for `<strong>` is to denote the labels of paragraphs which represent notes or warnings within the text of a page.

### `<b>` vs. `<strong>`

It is often confusing to new developers why there are so many ways to express the same thing on a rendered website. {{HTMLElement("b")}} and `<strong>` are perhaps one of the most common sources of confusion, causing developers to ask "Should I use `<b>` or `<strong>`? Don't they both do the same thing?"

Not exactly. The `<strong>` element is for content that is of greater importance, while the `<b>` element is used to draw attention to text without indicating that it's more important.

It may help to realize that both are valid and semantic elements in HTML5 and that it's a coincidence that they both have the same default styling (boldface) in most browsers (although some older browsers actually underline `<strong>`). Each element is meant to be used in certain types of scenarios, and if you want to bold text simply for decoration, you should instead actually use the CSS {{cssxref("font-weight")}} property.

The intended meaning or purpose of the enclosed text should be what determines which element you use. Communicating meaning is what semantics are all about.

### `<em>` vs. `<strong>`

Adding to the confusion is the fact that while HTML 4 defined `<strong>` as simply indicating a stronger emphasis, HTML 5 defines `<strong>` as representing "strong importance for its contents." This is an important distinction to make.

While `<em>` is used to change the meaning of a sentence as spoken emphasis does ("I _love_ carrots" vs. "I love _carrots_"), `<strong>` is used to give portions of a sentence added importance (e.g., "**Warning!** This is **very dangerous.**") Both `<strong>` and `<em>` can be nested to increase the relative degree of importance or stress emphasis, respectively.

## 예제

### 기본 예제

```html
<p>Before proceeding, <strong>make sure you put on your safety goggles</strong>.</p>
```

{{EmbedLiveSample("기본_예제", 650, 80)}}

### 경고 표시

```html
<p><strong>Important:</strong> Before proceeding, make sure you add plenty of butter.</p>
```

{{EmbedLiveSample("경고_표시", 650, 80)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("b")}} 요소
- {{HTMLElement("em")}} 요소
- {{cssxref("font-weight")}} 속성
