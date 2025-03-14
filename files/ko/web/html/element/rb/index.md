---
title: "<rb>: 루비 베이스 요소"
slug: Web/HTML/Element/rb
---

{{HTMLSidebar}}

**HTML `<rb>` 요소**는 {{HTMLElement("ruby")}} 표기의 기반 텍스트 구성요소(루비 주석을 적용하려는 글자)를 나눌 때 사용합니다. 하나의 `<rb>` 요소는 기반 텍스트에서의 최소 단위를 하나 감싸야 합니다.

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
      <td>{{htmlelement("ruby")}} 요소의 자손.</td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>
        바로 뒤따르는 요소가 {{HTMLElement("rt")}},
        {{HTMLElement("rtc")}}, {{HTMLElement("rp")}}, 다른
        <code>&#x3C;rb></code> 요소거나, 자신이 부모의 마지막 요소라면 닫는
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

## 사용 일람

- 루비 주석은 일본어 후리가나, 타이완어 주음부호와 같이 동아시아 문자의 발음 표기에 사용합니다. `<rb>` 요소는 기반 텍스트의 각 조각을 나타내는 용도입니다.
- `<rb>`는 {{glossary("empty element", "빈 요소")}}가 아니지만, 보통 소스 코드에는 여는 태그만 사용해 루비 마크업을 덜 복잡하고 읽기 쉽게 합니다. 브라우저가 렌더링 때 알아서 닫는 태그를 추가합니다.
- 각각의 `<rb>` / 기반 조각 하나마다 {{htmlelement("rt")}} 요소 하나를 작성해야 합니다.

## 예제

다음 예제는 "경복궁"의 한자/한글 표기를 병행합니다.

```html
<ruby>
  <rb>景</rb><rb>福</rb><rb>宮 </rb><rp>(</rp><rt>경</rt><rt>복</rt><rt>궁</rt
  ><rp>)</rp>
</ruby>
```

세 개의 `<rb>` 요소를 사용해 기반 글자(한자)를 세 개로 나눴습니다. 반면, 한글 표기는 세 개의 {{htmlelement("rt")}} 요소를 사용합니다.

세 개의 기반 조각을 완전히 분리해 작성할 수도 있다는 점을 알아두세요. 이 때는 `<rb>` 요소를 사용하지 않아도 됩니다.

```html
<ruby>
  景 <rp>(</rp><rt>경</rt><rp>)</rp> 福 <rp>(</rp><rt>복</rt><rp>)</rp> 宮
  <rp>(</rp><rt>궁</rt><rp>)</rp>
</ruby>
```

결과는 다음과 같습니다.

{{EmbedLiveSample("with-ruby", "100%", 60)}}

루비 주석을 지원하지 않는 브라우저에서는 아래와 같이 출력합니다.

```html hidden
景福宮 (경복궁)
```

```css hidden
body {
  font-size: 22px;
}
```

{{EmbedLiveSample("without-ruby", "100%", 60)}}

> **참고:** {{HTMLElement("ruby")}} 요소 참고서를 방문해 다른 예제도 살펴보세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("ruby")}}
- {{HTMLElement("rt")}}
- {{HTMLElement("rp")}}
- {{HTMLElement("rtc")}}
