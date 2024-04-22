---
title: "<small>: 덧붙임 글 요소"
slug: Web/HTML/Element/small
---

{{HTMLSidebar}}

**HTML `<small>`** **요소**는 덧붙이는 글이나, 저작권과 법률 표기 등의 작은 텍스트를 나타냅니다. 기본 상태에서 `<small>`은 자신의 콘텐츠를 한 사이즈 작은 글꼴(`small`에서 `x-small` 등)로 표시하지만, 스타일을 적용한 후에도 글씨 크기가 작을 필요는 없습니다.

{{EmbedInteractiveExample("pages/tabbed/small.html", "tabbed-shorter")}}

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
        >.
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
        >를 허용하는 모든 요소, 또는
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

## 예제

### 기본 사용법

```html
<p>
  This is the first sentence.
  <small>This whole sentence is in small letters.</small>
</p>
```

{{EmbedLiveSample("기본_사용법")}}

### CSS 예제

```html
<p>
  This is the first sentence.
  <span style="font-size:0.8em">This whole sentence is in small letters.</span>
</p>
```

{{EmbedLiveSample("CSS_예제")}}

## 명세

{{Specifications}}

## 참고

{{htmlelement("b")}}, {{htmlelement("i")}}, `<small>` 요소는 구조와 표현을 분리하는 원칙을 위배하는 것처럼 보이지만, 셋 모두 HTML5에서 유효합니다. 작성자는 `<small>`과 CSS 중 어느 것을 사용할지 결정하기 전에 심사숙고해야 합니다.

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("b")}}
