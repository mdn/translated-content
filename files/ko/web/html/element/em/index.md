---
title: "<em>: 강세 요소"
slug: Web/HTML/Element/em
---

{{HTMLSidebar}}

**HTML `<em>` 요소**는 텍스트의 강세를 나타냅니다. `<em>` 요소를 중첩하면 더 큰 강세를 뜻하게 됩니다.

{{EmbedInteractiveExample("pages/tabbed/em.html", "tabbed-shorter")}}

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
      <td>{{no_tag_omission}}</td>
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 사용 일람

`<em>` 요소는 주위 텍스트에 비해 강조된 부분을 나타냅니다. 보통 한 문장에서 단어 하나 혹은 몇 개로 제한되며, 문장의 의미에 영향을 미칠 수 있습니다.

`<em>`은 주로 기울임꼴을 적용해 표현합니다. 그러나 단순히 기울임꼴이 필요해서 `<em>`을 사용하면 안됩니다. CSS {{cssxref("font-style")}} 속성을 사용하세요. 그 외에 흔히 기울임꼴을 많이 쓰는 경우를 정리하자면 저작물(책, 연극, 음악 등등)의 제목은 {{htmlelement("cite")}}, 학명 등 과학적인 이름이나 다른 언어의 단어 등, 주변과 다른 톤을 가진 텍스트에는 {{htmlelement("i")}}를 사용하세요. 주변보다 훨씬 중요한 텍스트는 {{htmlelement("strong")}}으로 강조하면 됩니다.

### `<i>`와 `<em>`

신입 개발자가 자주 혼란스러운 부분 중 하나가, 서로 다른 요소인데 비슷한 결과물을 내놓는 경우입니다. `<em>`과 {{htmlelement("i")}}가 그 예로서, 둘 다 글자를 기울이는데 그러면 차이가 뭘까요? 어떤 걸 써야 할까요?

기본 설정에서 시각적 모습은 동일합니다. 그러나 의미는 다릅니다. `<em>`은 콘텐츠를 강조하지만, `<i>`는 외국어, 등장인물의 생각 등 일반적인 산문에서 벗어난 경우 사용합니다. (책이나 영화 등의 제목은 {{htmlelement("cite")}}를 사용하세요.)

그러므로 요소 선택은 상황에 따라 달라야 하며, 순수하게 꾸밈을 위한 요소는 없습니다. 스타일은 CSS에 맡기세요.

`<em>`은 "Just _do_ it already!"나 "We _had_ to do something about it."처럼 쓸 수 있습니다. 이 글을 읽는 사람이나 소프트웨어는 기울임꼴 부분에 강세를 두고 말할 것입니다.

`<i>`는 "The _Queen Mary_ sailed last night."처럼 사용합니다. "Queen Mary"를 강조하는 것도 아니고, 중요한 단어도 아닙니다. 다만 이 단어가 Mary라는 이름의 여왕이 아니고, *Queen Mary*라는 이름의 선박임을 나타낼 뿐입니다. "The word _the_ is an article"도 좋은 예제가 되겠습니다.

## 예제

`<em>` 요소는 명시적이거나 암시적인 대조를 표현할 때 주로 사용합니다.

```html
<p>
  과거에 <em>block-level</em>이라 불렸던 콘텐츠는 HTML 5부터
  <em>flow</em> 콘텐츠라고 말합니다.
</p>
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("i")}}
