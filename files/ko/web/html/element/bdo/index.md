---
title: "<bdo>: 양방향 텍스트 재정의 요소"
slug: Web/HTML/Element/bdo
---

{{HTMLSidebar}}

**HTML `<bdo>` 요소**는 현재 텍스트의 쓰기 방향을 덮어쓰고 다른 방향으로 렌더링 할 때 사용합니다.

{{EmbedInteractiveExample("pages/tabbed/bdo.html", "tabbed-standard")}}

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

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("dir")}}

  - : 요소 콘텐츠의 텍스트 쓰기 방향. 가능한 값은 다음과 같습니다.

    - `ltr`: 텍스트를 왼쪽에서 오른쪽으로 써야 함을 나타냅니다.
    - `rtl`: 텍스트를 오른쪽에서 왼쪽으로 써야 함을 나타냅니다.

## 예제

```html
<!-- 쓰기 방향 바꾸기 -->
<p>이 글은 왼쪽에서 오른쪽으로 작성합니다.</p>
<p><bdo dir="rtl">이 글은 오른쪽에서 왼쪽으로 작성합니다.</bdo></p>
```

### 결과

{{EmbedLiveSample('예제')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
