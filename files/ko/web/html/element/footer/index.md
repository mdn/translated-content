---
title: <footer>
slug: Web/HTML/Element/footer
---

{{HTMLSidebar}}

**HTML `<footer>` 요소**는 가장 가까운 [구획 콘텐츠](/ko/docs/Web/HTML/HTML5_문서의_섹션과_윤곽)나 [구획 루트](/ko/docs/Web/HTML/HTML5_문서의_섹션과_윤곽)의 푸터를 나타냅니다. 푸터는 일반적으로 구획의 작성자, 저작권 정보, 관련 문서 등의 내용을 담습니다.

{{EmbedInteractiveExample("pages/tabbed/footer.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a
          href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          title="HTML/Content categories#Flow content"
          >플로우 콘텐츠</a
        >. 단, {{htmlelement("header")}}와 다른
        <code>&#x3C;footer></code>는 자손이 될 수 없습니다.
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
          href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          title="HTML/Content categories#Flow content"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소. 단, <code>&#x3C;footer></code> 요소는
        {{htmlelement("address")}}, {{htmlelement("header")}},
        혹은 다른 <code>&#x3C;footer></code>의 자손일 수 없습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/group_role'><code>group</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role'><code>presentation</code></a>
      </td>
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

- {{HTMLElement("address")}} 요소로 감싼 작성자 정보를 `<footer>` 요소에 배치하세요.
- `<footer>` 요소는 구획 콘텐츠가 아니므로 [개요](/ko/docs/Web/HTML/HTML5_%EB%AC%B8%EC%84%9C%EC%9D%98_%EC%84%B9%EC%85%98%EA%B3%BC_%EC%9C%A4%EA%B3%BD)에 새로운 구획을 추가하지 않습니다.

## 예제

```html
<footer>
  Some copyright info or perhaps some author info for an &lt;article&gt;?
</footer>
```

## 접근성 고려사항

[VoiceOver](https://help.apple.com/voiceover/mac) 스크린 리더는 랜드마크 로터에서 푸터의 랜드마크 역할을 표현하지 않는 문제가 있습니다. 해결하려면 `<footer>`에 `role="contentinfo"`를 추가하세요.

- [WebKit Bugzilla: 146930 – AX: HTML native elements (header, footer, main, aside, nav) should work the same as ARIA landmarks, sometimes they don't](https://bugs.webkit.org/show_bug.cgi?id=146930)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 다른 구획 관련 요소들: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}
