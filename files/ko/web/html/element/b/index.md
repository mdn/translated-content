---
title: <b>
slug: Web/HTML/Element/b
---

{{HTMLSidebar}}

**HTML `<b>` 요소**는 독자의 주의를 요소의 콘텐츠로 끌기 위한 용도로 사용합니다. 그 외의 다른 특별한 중요도는 주어지지 않습니다. 원래는 "굵은 글씨 요소"로 불렸으며, 대부분의 브라우저도 여전히 텍스트를 굵은 글씨체로 강조합니다. 그러나 `<b>`를 사용해 텍스트를 꾸미면 안됩니다. 대신 CSS {{cssxref("font-weight")}}를 사용해 굵은 글씨체를 적용하거나, {{htmlelement("strong")}} 요소를 사용해 특별히 중요한 텍스트를 나타내세요.

{{EmbedInteractiveExample("pages/tabbed/b.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구문_콘텐츠"
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
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구문_콘텐츠"
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

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 사용 일람

- 요약 키워드, 리뷰의 제품명 등, 특별한 중요성을 가지고 있지는 않지만 굵게 표시할 부분에 `&#x3C;b>`를 사용하세요.

- `&#x3C;b>` 요소와 {{HTMLElement("strong")}}, {{HTMLElement("em")}}, {{HTMLElement("mark")}} 요소를 혼동하지 않도록 주의하세요. {{HTMLElement("strong")}} 요소는 **중요**한 글을, {{HTMLElement("em")}} 요소는 약간의 강조가 필요한 글을, {{HTMLElement("mark")}} 요소는 관련성이 있는 글을 나타냅니다. `&#x3C;b>` 요소는 아무런 의미도 갖지 않으므로 다른 요소가 적합하지 않을 때만 사용하세요.

- 비슷한 이유로 `&#x3C;b>` 요소로만 제목을 만들어선 안됩니다. 제목은 {{HTMLElement("h1")}}에서 {{HTMLElement("h6")}} 태그로 표현하세요. 특히 스타일 시트를 사용해 제목 요소의 스타일을 바꿀 수 있다는 점을 생각해보면, 제목이 꼭 굵은 글씨체일 필요는 없습니다.

  - It is a good practice to use the **class** attribute on the `&#x3C;b>` in order to convey additional semantic information (for example `&#x3C;b class="lede">` for the first sentence in a paragraph). This eases the development of several stylings of a web document, without the need to change its HTML code.

- 과거 `&#x3C;b>` 요소는 굵을 글씨를 만들 때 사용했습니다. HTML4부터 스타일 정보는 사용하지 않으므로 `&#x3C;b>` 요소의 의미도 바뀌었습니다.

- &#x3C;b>의 의미와 관계 없이 굵은 글씨를 사용하고 있다면, CSS {{cssxref("font-weight")}} 속성의 `"bold"` 값을 사용하는 방법을 고려하세요.

## 예제

```html
<p>
  This article describes several <b class="keywords">text-level</b> elements. It
  explains their usage in an <b class="keywords">HTML</b> document.
</p>
Keywords are displayed with the default style of the
<b>element, likely in bold</b>.
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [\<b>와 \<i> 요소 사용하기 (W3C)](http://www.w3.org/International/questions/qa-b-and-i-tags)
