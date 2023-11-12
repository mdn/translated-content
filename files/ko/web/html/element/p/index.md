---
title: <p>
slug: Web/HTML/Element/p
---

{{HTMLSidebar}}

**HTML `<p>` 요소**는 하나의 문단을 나타냅니다. 시각적인 매체에서, 문단은 보통 인접 블록과의 여백과 첫 줄의 들여쓰기로 구분하지만, HTML에서 문단은 이미지나 입력 폼 등 서로 관련있는 콘텐츠 무엇이나 될 수 있습니다.

문단은 블록 레벨 요소이며, 자신의 닫는 태그(`</p>`) 이전에 다른 블록 레벨 태그가 분석되면 자동으로 닫힙니다. 아래의 "태그 생략" 항목을 참고하세요.

{{EmbedInteractiveExample("pages/tabbed/p.html", "tabbed-standard")}}

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
        >, 뚜렷한 콘텐츠
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
      <td>
        시작 태그는 필수입니다. 닫는 태그는 {{HTMLElement("p")}} 요소의
        바로 뒤에 {{HTMLElement("address")}},
        {{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("blockquote")}}, {{HTMLElement("div")}},
        {{HTMLElement("dl")}}, {{HTMLElement("fieldset")}},
        {{HTMLElement("footer")}}, {{HTMLElement("form")}},
        {{HTMLElement("h1")}}, {{HTMLElement("h2")}},
        {{HTMLElement("h3")}}, {{HTMLElement("h4")}},
        {{HTMLElement("h5")}}, {{HTMLElement("h6")}},
        {{HTMLElement("header")}}, {{HTMLElement("hr")}},
        {{HTMLElement("menu")}}, {{HTMLElement("nav")}},
        {{HTMLElement("ol")}}, {{HTMLElement("pre")}},
        {{HTMLElement("section")}}, {{HTMLElement("table")}},
        {{HTMLElement("ul")}}, {{HTMLElement("p")}} 요소가
        위치하는 경우, 또는 부모 태그의 콘텐츠가 더 존재하지 않고 부모가
        {{HTMLElement("a")}} 요소가 아닐 때 생략할 수 있습니다.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 부모</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>모두</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLParagraphElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 예제

### HTML

```html-nolint
<p>첫 번째 문단입니다.
  첫 번째 문단입니다.
  첫 번째 문단입니다.
  첫 번째 문단입니다.</p>
<p>두 번째 문단입니다.
  두 번째 문단입니다.
  두 번째 문단입니다.
  두 번째 문단입니다.</p>
```

### 결과

{{EmbedLiveSample('예제')}}

## 문단 꾸미기

브라우저 기본 스타일은 문단끼리 한 줄의 간격으로 분리합니다. 첫 줄 들여쓰기 등 다른 구분 방법은 {{glossary("CSS")}}를 통해 사용할 수 있습니다.

### HTML

```html
<p>
  독자 입장에선 문단 사이를 여백으로 구분하는게 제일 읽기 쉽지만, 첫 줄
  들여쓰기로도 구분할 수 있습니다. 들여쓰기는 보통 인쇄매체에서 공간과 종이를
  아끼기 위해 사용합니다.
</p>

<p>
  학교 과제나 초안 등 나중에 편집할 글은 여백과 들여쓰기 둘 다 사용합니다.
  그러나 완성한 글에 둘 다 사용하는건 불필요하고 초보적으로 여겨집니다.
</p>

<p>
  아주 오래된 글에서는 문단을 특수기호 ¶, <i>필크로</i>(단락 기호)로
  구분했습니다. 그러나 답답하고 읽기 힘들어 지금은 사용하지 않습니다.
</p>

<p>
  얼마나 읽기 힘들까요? 직접 알아보세요.
  <button data-toggle-text="안돼! 다시 돌려놔요!">단락 기호 써보기</button>
</p>
```

### CSS

```css
p {
  margin: 0;
  text-indent: 3ch;
}

p.pilcrow {
  text-indent: 0;
  display: inline;
}
p.pilcrow + p.pilcrow::before {
  content: " ¶ ";
}
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", function (event) {
  document.querySelectorAll("p").forEach(function (paragraph) {
    paragraph.classList.toggle("pilcrow");
  });
  var newButtonText = event.target.dataset.toggleText;
  var oldText = event.target.innerText;
  event.target.innerText = newButtonText;
  event.target.dataset.toggleText = oldText;
});
```

### 결과

{{EmbedLiveSample('문단_꾸미기')}}

## 접근성 고려사항

콘텐츠를 문단으로 나누면 페이지의 접근성을 높입니다. 스크린 리더 등 보조 기술은 다음 문단으로 넘어갈 수 있는 단축키 등을 제공하므로, 시각적 매체의 여백이 사용자의 빠른 콘텐츠 탐색을 돕는 것과 같은 효과를 얻을 수 있습니다.

빈 `<p>` 요소를 사용해 문단 사이에 여백을 추가하면 스크린 리더 사용자에게 부정적인 경험을 줄 수 있습니다. 스크린 리더가 문단의 존재는 알려주겠지만, 더 읽을 내용이 없기 때문입니다. 따라서 스크린 리더 사용자가 혼란을 느낄 수 있습니다.

여분의 공간이 필요하다면 {{cssxref("margin")}} 등 {{glossary("CSS")}} 속성을 통해 적용하세요.

```css
p {
  margin-bottom: 2em; /* 문단 다음 여백을 늘림 */
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("hr")}}
- {{HTMLElement("br")}}
