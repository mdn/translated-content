---
title: <address>
slug: Web/HTML/Element/address
---

{{HTMLSidebar}}

**HTML `<address>` 요소**는 가까운 HTML 요소의 사람, 단체, 조직 등에 대한 연락처 정보를 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/address.html", "tabbed-standard")}}

`<address>` 요소의 콘텐츠가 제공하는 연락처 정보는 현재 맥락에 적절한 아무 형태나 취할 수 있으며, 물리적 주소, URL, 이메일 주소, 전화번호, SNS 식별자, 좌표 등 어떠한 정보라도 포함할 수 있습니다. 반드시 포함해야 하는 정보는 연락처가 가리키는 개인, 조직, 단체의 이름입니다.

`<address>`는 다양한 맥락에서 사용할 수 있습니다. 사업체 연락 방법을 페이지 헤더에 배치할 때도 쓸 수 있고, {{HTMLElement("article")}} 내부에 배치해서 글의 작성자를 나타낼 수도 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >. 단, 다음의 요소는 사용할 수 없습니다.<br />다른
        <code>&#x3C;address></code>, 제목 콘텐츠
        ({{HTMLElement("hgroup")}}, {{HTMLElement("h1")}},
        {{HTMLElement("h2")}}, {{HTMLElement("h3")}},
        {{HTMLElement("h4")}}, {{HTMLElement("h5")}},
        {{HTMLElement("h6")}}), 구획 콘텐츠
        ({{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("section")}}, {{HTMLElement("nav")}}),
        {{HTMLElement("header")}}, {{HTMLElement("footer")}} 요소.
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
        >를 허용하는 모든 요소. 단, <code>&#x3C;address></code> 요소 제외.
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
      <td>없음</td>
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

- 기존 명세에서의 `<address>` 요소는 문서 작성자의 연락처만 나타내는 요소였습니다. 그러나 최신 명세에서 임의의 연락처를 포함할 수 있도록 수정됐습니다.
- 연락처 외의 정보(출판일 등)를 담아서는 안됩니다.
- 보통, 현재 구획에 {{htmlelement("footer")}} 요소가 존재하면 `<address>`를 그 안에 배치할 수 있습니다.

## 예제

다음 예제는 `<address>`를 사용해 글 작성자의 연락처를 구별하는 모습을 보입니다.

```html
<address>
  You can contact author at
  <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>.<br />
  If you see any bugs, please
  <a href="mailto:webmaster@somedomain.com"> contact webmaster</a>.<br />
  You may also want to visit us:<br />
  Mozilla Foundation<br />
  331 E Evelyn Ave<br />
  Mountain View, CA 94041<br />
  USA
</address>
```

### 결과

{{EmbedLiveSample("예제", "300", "200")}}

비록 겉보기는 {{HTMLElement("i")}}나 {{HTMLElement("em")}} 요소와 같지만, `<address>` 요소는 자체적인 의미를 갖고 있으므로 연락처 표기에는 `<address>`가 더 적합합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
