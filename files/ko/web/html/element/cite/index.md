---
title: <cite>
slug: Web/HTML/Element/cite
---

{{HTMLSidebar}}

**HTML `<cite>` 요소**는 저작물의 출처를 표기할 때 사용하며, 제목을 반드시 포함해야 합니다. 적절한 맥락 아래에서는 출처를 축약해서 표기할 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/cite.html", "tabbed-standard")}}

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

`<cite>` 요소의 저작물로는 다음과 같은 예제를 들 수 있습니다.

- 책
- 논문
- 에세이
- 시
- 악보
- 음악
- 대본
- 영화
- TV 쇼
- 게임
- 조각
- 그림
- 연극
- 공연
- 오페라
- 뮤지컬
- 전시회
- 판례
- 컴퓨터 프로그램
- 웹사이트
- 웹페이지
- 블로그 글과 댓글
- 게시판 글과 댓글
- 트윗
- Facebook 글
- 성명서
- 기타 등등

W3C 명세는 `<cite>` 요소로 저작물의 출처를 표기할 때 저작자도 표기할 수 있음을 명시하고 있습니다. 그러나 정반대로, WHATWG 명세는 사람 이름을 어떤 상황에서도 **절대** 포함하지 말아야 한다고 적혀있다는 점을 알아두는 것이 좋습니다.

{{htmlelement("blockquote")}}, {{htmlelement("q")}} 요소가 가진 인용문의 출처를 나타내려면 [`cite`](/ko/docs/Web/HTML/Element/blockquote#cite) 특성을 사용하세요.

보통 브라우저는 `<cite>` 요소를 그릴 때 기울임꼴로 표현합니다. 기울임꼴을 제거하려면 CSS {{cssxref("font-style")}} 속성을 `<cite>`에 적용하세요.

## 예제

```html
<p>More information can be found in <cite>[ISO-0000]</cite>.</p>
```

### 결과

{{EmbedLiveSample("예제", 640, 60)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 긴 인용문을 위한 {{HTMLElement("blockquote")}} 요소.
- 인라인 인용문을 위한 {{HTMLElement("q")}} 요소.
