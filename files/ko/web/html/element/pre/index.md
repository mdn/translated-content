---
title: <pre>
slug: Web/HTML/Element/pre
---

{{HTMLSidebar}}

**HTML `<pre>` 요소**는 미리 서식을 지정한 텍스트를 나타내며, HTML에 작성한 내용 그대로 표현합니다. 텍스트는 보통 고정폭 글꼴을 사용해 렌더링하고, 요소 내 공백문자를 그대로 유지합니다.

{{EmbedInteractiveExample("pages/tabbed/pre.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구문_콘텐츠"
          >플로우 콘텐츠</a
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
      <td>{{domxref("HTMLPreElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

- {{htmlattrdef("cols")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Contains the _preferred_ count of characters that a line should have. It was a non-standard synonym of [`width`](/ko/docs/Web/HTML/Element/pre#width). To achieve such an effect, use CSS styling instead.
- {{htmlattrdef("width")}} {{deprecated_inline}}
  - : Contains the _preferred_ count of characters that a line should have. Though technically still implemented, this attribute has no visual effect; to achieve such an effect, use CSS styling instead.
- {{htmlattrdef("wrap")}} {{non-standard_inline}}
  - : Is a _hint_ indicating how the overflow must happen. In modern browser this hint is ignored and no visual effect results in its present; to achieve such an effect, use CSS styling instead.

## 예제

### HTML

```html
<p>CSS로 글자 색을 바꾸는건 쉽습니다.</p>
<pre>
body {
  color:red;
}
</pre>
```

### 결과

{{EmbedLiveSample("예제")}}

## 접근성 고려사항

`<pre>` 요소로 만든 이미지나 도표에 대한 대체 설명을 지정하는 것이 중요합니다. 대체 설명은 분명하고 간결하게 이미지 또는 도표 콘텐츠를 설명해야 합니다.

시력이 낮은 사용자가 스크린 리더와 같은 보조 기술을 사용 중이라면, 미리 서식 적용한 텍스트의 문자를 차례대로 읽어서는 이게 무엇을 의미하는지 이해하지 못할 수 있습니다.

{{htmlelement("figure")}}과 {{htmlelement("figcaption")}}에 더해 [`id`](/ko/docs/Web/HTML/Global_attributes#id)와 [ARIA](/ko/docs/Web/Accessibility/ARIA) `role`과 `aria-labelledby` 특성을 조합하면 `<pre>`를 마치 이미지처럼 표현하면서 `<figcaption>`을 대체 설명으로 사용할 수 있습니다.

### 예제

```
<figure role="img" aria-labelledby="cow-caption">
  <pre>
  _______________________
< 나는 이 분야의 전문가다. >
  -----------------------
         \   ^__^
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
  </pre>
  <figcaption id="cow-caption">
    소 한 마리가 "나는 이 분야의 전문가다"라고 말하고 있습니다. 소는 미리 서식을 적용한 텍스트로 그려져있습니다.
  </figcaption>
</figure>
```

- [MDN Understanding WCAG, Guideline 1.1 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_—_Providing_text_alternatives_for_non-text_content)
- [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS: {{ Cssxref('white-space') }}, {{ Cssxref('word-break') }}
