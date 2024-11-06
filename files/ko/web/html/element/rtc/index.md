---
title: "<rtc>: 루비 텍스트 콘테이너 요소"
slug: Web/HTML/Element/rtc
---

{{HTMLSidebar}}

**HTML `<rtc>` 요소**는 {{htmlelement("rb")}} 요소가 표시하는 문자의 의미에 대한 주석을 나타냅니다. `<rb>`는 발음({{htmlelement("rt")}})과 의미(`<rtc>`) 둘 다 가질 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/rtc.html", "tabbed-standard")}}

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
        >
        또는 {{htmlelement("rt")}} 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        바로 뒤따르는 요소가 {{htmlelement("rb")}},
        {{htmlelement("rt")}}, 다른 <code>&#x3C;rtc></code> 요소거나,
        자신이 부모의 마지막 요소라면 닫는 태그를 생략할 수 있습니다.
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

```html
<div class="info">
  <ruby>
    <rbc>
      <rb>馬</rb><rt>마</rt> <rb>來</rb><rt>래</rt> <rb>西</rb><rt>서</rt>
      <rb>亞</rb><rt>아</rt>
    </rbc>
    <rtc>말레이시아</rtc>
  </ruby>
</div>
```

```css hidden
.info {
  padding-top: 10px;
  font-size: 36px;
}
```

{{EmbedLiveSample("예제", 600, 120)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("ruby")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rbc")}}
