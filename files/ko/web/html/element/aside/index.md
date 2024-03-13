---
title: "<aside>: 별도 구획 요소"
slug: Web/HTML/Element/aside
---

{{HTMLSidebar}}

**HTML `<aside>` 요소**는 문서의 주요 내용과 간접적으로만 연관된 부분을 나타냅니다. 주로 사이드바 혹은 콜아웃 박스로 표현합니다.

{{EmbedInteractiveExample("pages/tabbed/aside.html", "tabbed-standard")}}

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
        >,
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구획_콘텐츠"
          >구획 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#뚜렷한_컨텐츠"
          >뚜렷한 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
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
        <a href="/ko/docs/Web/HTML/Content_categories#Flow_content"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.<br /><code>&#x3C;aside></code> 요소는
        {{HTMLElement("address")}}의 후손이 될 수 없음에 주의하세요.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <code
          ><a href="/ko/docs/Web/Accessibility/ARIA/Roles/Complementary_role"
            >complementary</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 요소</th>
      <td>
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/feed_role'><code>feed</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/none_role'><code>none</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/note_role'><code>note</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role'><code>presentation</code></a>,
        <a href='/ko/docs/Web/Accessibility/ARIA/Roles/region_role'><code>region</code></a>, <a href='/ko/docs/Web/Accessibility/ARIA/Roles/search_role'><code>search</code></a>
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

- 괄호에 묶인 텍스트라도 문서의 주요 플로우에 포함되어야 하므로 `<aside>`로 나타내선 안됩니다.

## 예제

### `<aside>` 사용하기

다음 예제는 글 내의 문단을 `<aside>`로 표시합니다. 해당 문단은 글의 주제와 간접적으로만 연결되어 있습니다.

```html
<article>
  <p>디즈니 만화영화 <em>인어 공주</em>는 1989년 처음 개봉했습니다.</p>
  <aside>인어 공주는 첫 개봉 당시 8700만불의 흥행을 기록했습니다.</aside>
  <p>영화에 대한 정보...</p>
</article>
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [HTML 구획과 개요 사용하기](/ko/docs/Web/HTML/HTML5_문서의_섹션과_윤곽)
