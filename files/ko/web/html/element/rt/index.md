---
title: "<rt>: 루비 텍스트 요소"
slug: Web/HTML/Element/rt
---

{{HTMLSidebar}}

**HTML `<rt>` 요소**는 동아시아 문자의 루비 주석에서 발음, 번역 등을 나타내는 텍스트 부분을 지정합니다.

{{EmbedInteractiveExample("pages/tabbed/rt.html", "tabbed-shorter")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>없음.</td>
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
      <td>
        바로 뒤따르는 요소가 {{htmlelement("rp")}}, 다른
        <code>&#x3C;rt></code> 요소거나 자신이 부모의 마지막 요소라면 닫는
        태그를 생략할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>{{htmlelement("ruby")}} 요소.</td>
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

다음 예제는 {{htmlelement("ruby")}} 요소를 사용해 한자의 발음을 표기합니다.

```html
<ruby> 漢 <rt>한</rt> 字 <rt>자</rt> </ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

결과는 다음과 같습니다.

{{EmbedLiveSample("with-ruby", 600, 60)}}

브라우저가 루비를 지원하지 않는 경우엔 다음처럼 보일 것입니다.

```html hidden
漢 한 字 자
```

```css hidden
body {
  font-size: 22px;
}
```

{{EmbedLiveSample("without-ruby", 600, 60)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("ruby")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
