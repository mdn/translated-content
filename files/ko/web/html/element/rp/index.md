---
title: "<rp>: 루비 대체 괄호 요소"
slug: Web/HTML/Element/rp
---

{{HTMLSidebar}}

**HTML `<rp>` 요소**는 {{htmlelement("ruby")}} 요소를 사용한 루비 주석을 지원하지 않는 경우 보여줄 괄호를 제공할 때 사용합니다. {{htmlelement("rt")}} 요소를 감싸는 여는 괄호와 닫는 괄호를 각각의 `<rp>` 요소로 나타내야 합니다.

{{EmbedInteractiveExample("pages/tabbed/rp.html", "tabbed-shorter")}}

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
      <td>텍스트.</td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        바로 뒤따르는 요소가 {{HTMLElement("rt")}}, 다른
        <code>&#x3C;rp></code> 요소거나, 자신이 부모의 마지막 요소라면 닫는
        태그를 생략할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        {{htmlelement("ruby")}} 요소. <code>&#x3C;rp></code>는
        {{htmlelement("rt")}} 요소의 바로 앞 또는 바로 뒤에 위치해야
        합니다.
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

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만을 포함합니다.

## 사용 일람

- 루비 주석은 일본어 후리가나, 타이완어 주음부호와 같이 동아시아 문자의 발음 표기에 사용합니다. `<rp>` 요소는 {{htmlelement("ruby")}} 요소를 지원하지 않는 브라우저에서 루비 주석을 구분할 수 있는 텍스트(주로 괄호)를 제공합니다.

## 예제

다음 예제는 한자료 표기한 "경복궁"의 각 글자에 루비 주석을 적용합니다.

```html
<ruby>
  景 <rp>(</rp><rt>경</rt><rp>)</rp> 福 <rp>(</rp><rt>복</rt><rp>)</rp> 宮
  <rp>(</rp><rt>궁</rt><rp>)</rp>
</ruby>
```

```css hidden
body {
  font-size: 22px;
}
```

결과는 다음과 같습니다.

{{EmbedLiveSample("with-ruby", "100%", 60)}}

루비 주석을 지원하지 않는 브라우저에서는 아래와 같이 출력합니다.

```html hidden
景 (경) 福 (복) 宮 (궁)
```

```css hidden
body {
  font-size: 22px;
}
```

{{EmbedLiveSample("without-ruby", "100%", 60)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rb")}}
- {{HTMLElement("rtc")}}
