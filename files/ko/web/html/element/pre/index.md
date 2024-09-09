---
title: "<pre>: 미리 서식 정의된 텍스트 요소"
slug: Web/HTML/Element/pre
l10n:
  sourceCommit: e31cb5978e9f3c731c49db9ed0a15795b870e141
---

{{HTMLSidebar}}

**[HTML](/ko/docs/Web/HTML) `<pre>` 요소**는 미리 서식을 지정한 텍스트를 나타내며, HTML에 작성한 내용 그대로 표현합니다. 텍스트는 보통 [고정폭 글꼴](https://ko.wikipedia.org/wiki/고정폭_글꼴)을 사용해 렌더링하고, 요소 내 공백문자를 그대로 유지합니다.

{{EmbedInteractiveExample("pages/tabbed/pre.html", "tabbed-standard")}}

`<pre>` 태그 안에서 `<`, `>`, `&`, `"` 와 같은 예약 문자를 표시하려면, 각각의 [HTML 개체](/ko/docs/Glossary/Entity)를 사용해 이스케이프해야 합니다.

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

- `cols` {{non-standard_inline}} {{deprecated_inline}}
  - : 행에 포함되어야 하는 기본 문자 갯수입니다. [`width`](#width)의 비표준 동의어였습니다. 이러한 효과를 얻으려면 대신 CSS {{Cssxref("width")}}를 사용하십시오.
- `width` {{deprecated_inline}} {{Non-standard_Inline}}
  - : 행에 포함되어야 하는 기본 문자 갯수입니다. 기술적으로는 여전히 구현되어 있으나, 이 특성은 시각적 효과가 없습니다. 이러한 효과를 얻으려면 대신 CSS {{Cssxref("width")}}를 사용하십시오.
- `wrap` {{non-standard_inline}} {{Deprecated_Inline}}
  - : 오버플로가 어떤 식으로 발생해야 하는지 나타내는 힌트입니다. 최신 브라우저에서 이 힌트는 무시되어 시각적 효과가 나타나지 않습니다. 이러한 효과를 얻으려면 대신 CSS {{Cssxref("white-space")}}를 사용하십시오.

## 접근성 고려사항

`<pre>` 요소로 만든 이미지나 도표에 대한 대체 설명을 지정하는 것이 중요합니다. 대체 설명은 분명하고 간결하게 이미지 또는 도표 콘텐츠를 설명해야 합니다.

시력이 낮은 사용자가 스크린 리더와 같은 보조 기술을 사용 중이라면, 미리 서식 적용한 텍스트의 문자를 차례대로 읽어서는 이게 무엇을 의미하는지 이해하지 못할 수 있습니다.

{{HTMLElement("figure")}}과 {{HTMLElement("figcaption")}}에 더해, [ARIA](/ko/docs/Web/Accessibility/ARIA) `role`과 [`aria-label`](/ko/docs/Web/Accessibility/ARIA/Attributes/aria-label) 특성을 조합하면 `<pre>`와 사용하면, 미리 서식 지정된 {{Glossary("ASCII")}} 아트를 마치 이미지처럼 표현하면서 `<figcaption>`을 대체 설명으로 사용할 수 있습니다.

### 예제

```html
<figure>
  <pre role="img" aria-label="ASCII COW">
      ___________________________
  &lt;     나는 이 분야의 전문가다.     &gt;
      ---------------------------
          \   ^__^
           \  (oo)\_______
              (__)\       )\/\
                  ||----w |
                  ||     ||
  </pre>
  <figcaption id="cow-caption">
    소 한 마리가 "나는 이 분야의 전문가다"라고 말하고 있습니다. 소는 미리 서식을
    적용한 텍스트로 그려져있습니다.
  </figcaption>
</figure>
```

- [MDN Understanding WCAG, Guideline 1.1 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_—_Providing_text_alternatives_for_non-text_content)
- [H86: Providing text alternatives for ASCII art, emoticons, and leetspeak | W3C Techniques for WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H86.html)

## 예제

### 기초 예제

#### HTML

```html
<p>CSS로 글자 색을 바꾸는건 쉽습니다.</p>
<pre>
body {
  color:red;
}
</pre>
```

#### 결과

{{EmbedLiveSample("기초_예제")}}

### 예약 문자 이스케이프

#### HTML

```html
<pre>
let i = 5;

if (i &lt; 10 &amp;&amp; i &gt; 0)
  return &quot;한 자리 숫자&quot;
</pre>
```

#### 결과

{{EmbedLiveSample("예약_문자_이스케이프")}}

## 기술 요약

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
      <td>불가능, 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
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
      <th scope="row">포함되는 ARIA 역할</th>
      <td>
        <code
          ><a href="/ko/docs/Web/Accessibility/ARIA/Roles/generic_role"
            >포괄적</a
          ></code
        >
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

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS: {{Cssxref('white-space')}}, {{Cssxref('word-break')}}
- [HTML 개체](/ko/docs/Glossary/Entity)
- 관련된 요소: {{HTMLElement("code")}}
