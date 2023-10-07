---
title: "<br>: 줄바꿈 요소"
slug: Web/HTML/Element/br
---

{{HTMLSidebar}}

**HTML `<br>` 요소**는 텍스트 안에 줄바꿈(캐리지 리턴)을 생성합니다. 주소나 시조 등 줄의 구분이 중요한 내용을 작성할 때 유용합니다.

{{EmbedInteractiveExample("pages/tabbed/br.html", "tabbed-standard")}}

위 예제에서 확인할 수 있듯, `<br>` 요소는 텍스트를 끊고 싶은 지점에 삽입해야 합니다. `<br>` 이후의 텍스트는 텍스트 블록의 다음 줄에서 다시 시작합니다.

> **참고:** 문단 사이에 여백을 두기 위한 용도로 `<br>`을 사용하지 마세요. 대신 {{htmlelement("p")}} 요소로 감싼 후 [CSS](/ko/docs/Web/CSS)의 {{cssxref("margin")}} 속성으로 여백의 크기를 조절하세요.

## 특성

이 요소는 [전역 특성](/ko/docs/HTML/Global_attributes)만 포함합니다.

## CSS 스타일링

`<br>` 요소는 텍스트 블록에서 줄을 바꾼다는 하나의 명확한 목적만 가지고 있습니다. 따라서 크기도, 외형도 없으므로 스타일을 적용할 것도 거의 없습니다.

`<br>` 요소에 {{cssxref("margin")}}을 적용하면 줄 간격을 늘릴 수 있겠지만 좋은 방법은 아닙니다. 이런 목적을 위해 만들어진 CSS {{cssxref("line-height")}} 속성을 사용하세요.

## 예제

```html
Mozilla Foundation<br />
1981 Landings Drive<br />
Building K<br />
Mountain View, CA 94043-0801<br />
USA
```

결과는 다음과 같습니다.

{{EmbedLiveSample("예제", "100%", "90")}}

## 접근성 고려사항

문단 구분을 `<br>`로 하는건 나쁜 사례일 뿐만 아니라 스크린 리더를 사용해 탐색하는 사용자에게도 문제가 됩니다. 스크린 리더가 요소의 존재는 알려주겠지만, `<br>`에는 아무런 내용도 없기 때문입니다. 따라서 사용자는 내용이 어딨는지 몰라 혼란을 느낄 수 있습니다.

{{htmlelement("p")}} 요소와 함께 CSS {{cssxref("margin")}} 속성 등을 조합해 간격을 조절하세요.

## 기술 요약

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
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        없음. {{glossary("empty element", "빈 요소")}}입니다.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>여는 태그는 필수입니다. 닫는 태그는 존재해선 안됩니다.</td>
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
      <td>{{domxref("HTMLBRElement")}}</td>
    </tr>
  </tbody>
</table>

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("address")}} 요소
- {{HTMLElement("p")}} 요소
