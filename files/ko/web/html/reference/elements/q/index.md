---
title: "<q>: 인라인 인용문 요소"
slug: Web/HTML/Reference/Elements/q
original_slug: Web/HTML/Element/q
---

{{HTMLSidebar}}

**HTML `<q>`요소**는 둘러싼 텍스트가 짧은 인라인 인용문이라는것을 나타냅니다. 대부분의 브라우저에서는 앞과 뒤에 따옴표를 붙여 표현합니다. `<q>`는 줄 바꿈이 없는 짧은 경우에 적합합니다. 긴 인용문은 {{htmlelement("blockquote")}} 요소를 사용하세요.

{{InteractiveExample("HTML Demo: &lt;q&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  When Dave asks HAL to open the pod bay door, HAL answers:
  <q
    cite="https://www.imdb.com/title/tt0062622/quotes/?item=qt0396921&ref_=ext_shr_lnk">
    I'm sorry, Dave. I'm afraid I can't do that.
  </q>
</p>
```

```css interactive-example
q {
  font-style: italic;
}
```

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
        >, 뚜렷한 콘텐츠.
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
      <td>불가능, 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
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
      <td>{{domxref("HTMLQuoteElement")}}</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> 오래된 브라우저에서는 앞뒤 따옴표를 적용하려면 추가 스타일을 사용해야 할 수 있습니다.

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes)을 포함합니다.

- `cite`
  - : 인용문의 출처 문서나 메시지를 가리키는 URL. 인용문의 맥락 혹은 출처 정보를 가리킬 용도입니다.

## 예제

```html
<p>
  Mozilla 재단의 웹사이트에 따르면,
  <q cite="https://www.mozilla.org/en-US/about/history/details/"
    >Firefox 1.0 은 2004년 처음 공개되어 큰 성공을 거두었습니다.</q
  >
</p>
```

{{EmbedLiveSample('예제')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 긴 인용문을 위한 {{HTMLElement("blockquote")}} 요소.
- 출처 표기를 위한 {{HTMLElement("cite")}} 요소.
