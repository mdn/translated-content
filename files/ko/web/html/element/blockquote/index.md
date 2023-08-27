---
title: "<blockquote>: 인용 블록 요소"
slug: Web/HTML/Element/blockquote
---

{{HTMLSidebar}}

**HTML `<blockquote>` 요소**는 안쪽의 텍스트가 긴 인용문임을 나타냅니다. 주로 들여쓰기를 한 것으로 그려집니다. (외형을 바꾸는 법은 [사용 일람](#사용_일람)을 참고하세요) 인용문의 출처 URL은 [`cite`](/ko/docs/Web/HTML/Element/blockquote#cite) 특성으로, 출처 텍스트는 {{htmlelement("cite")}} 요소로 제공할 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/blockquote.html","tabbed-standard")}}

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
        >, 구획 루트, 뚜렷한 콘텐츠.
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
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소
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
      <td>{{domxref("HTMLQuoteElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("cite")}}
  - : 인용문의 출처 문서나 메시지를 가리키는 URL. 인용문의 맥락 혹은 출처 정보를 가리킬 용도입니다.

## 사용 일람

인용문의 들여쓰기를 바꾸려면 {{glossary("CSS")}} {{cssxref("margin-left")}}와 {{cssxref("margin-right")}}, 혹은 {{cssxref("margin")}} 단축 속성을 사용하세요.

별도의 블록을 쓰지 않아도 될 짧은 인용문은 {{htmlelement("q")}} 요소를 사용하세요.

## 예제

다음 예제는 `<blockquote>` 요소를 사용해 {{RFC(1149)}} A Standard for the Transmission of IP Datagrams on Avian Carriers의 문단을 인용합니다.

```html
<blockquote cite="https://tools.ietf.org/html/rfc1149">
  <p>
    Avian carriers can provide high delay, low throughput, and low altitude
    service. The connection topology is limited to a single point-to-point path
    for each carrier, used with standard carriers, but many carriers can be used
    without significant interference with each other, outside of early spring.
    This is because of the 3D ether space available to the carriers, in contrast
    to the 1D ether used by IEEE802.3. The carriers have an intrinsic collision
    avoidance system, which increases availability.
  </p>
</blockquote>
```

{{EmbedLiveSample("예제", 640, 180)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 인라인 인용문을 위한 {{HTMLElement("q")}} 요소.
- 인용문 출처 표기를 위한 {{HTMLElement("cite")}} 요소.
