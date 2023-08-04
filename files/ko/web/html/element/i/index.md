---
title: <i>
slug: Web/HTML/Element/i
---

{{HTMLSidebar}}

**HTML `<i>` 요소**는 텍스트에서 어떤 이유로 주위와 구분해야 하는 부분을 나타냅니다. 기술 용어, 외국어 구절, 등장인물의 생각 등을 예시로 들 수 있습니다. 보통 기울임꼴로 표시합니다.

{{EmbedInteractiveExample("pages/tabbed/i.html", "tabbed-shorter")}}

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

- 일반 산문과 다른 문체를 가진 텍스트에 `<i>` 요소를 사용하세요. 주위 텍스트와 다른 의미를 가진 텍스트에 적용하면 됩니다.
- 초기 HTML 명세의 `<i>` 요소는, {{htmlelement("b")}} 요소가 굵은 글씨 적용에 그쳤던 것과 마찬가지로, 글자를 기울이기만 하는 단순한 시각적 요소였습니다. 그러나 지금은 글자 외형에 그치지 않고 특정한 의미를 지니는 요소이므로 시각적인 강조에 그치지 않습니다. 보통, 브라우저가 여전히 `<i>` 요소의 글자를 기울이겠지만, 명세에 따르면 꼭 그렇게 표시할 필요는 없습니다.
- `<i>` 요소가 글자를 기울이기는 하지만, 기울임꼴을 적용하기 위한 용도로 사용해서는 안됩니다. CSS {{cssxref("font-style")}} 속성을 사용하세요.
- 강조하려는 텍스트가 다른 요소에 더 적합하지 않은지 고려하세요.

  - {{htmlelement("em")}} 요소는 강세를 나타냅니다.
  - {{htmlelement("strong")}} 요소는 보다 강한 강조를 나타냅니다.
  - {{htmlelement("mark")}} 요소는 관련성을 나타냅니다.
  - {{htmlelement("cite")}} 요소는 책, 공연, 음악 등 저작물의 이름을 나타냅니다.
  - {{htmlelement("dfn")}} 요소는 정의 대상인 용어를 나타냅니다.

## 예제

다음 예제는 외국어를 강조하기 위해 `<i>` 요소를 사용합니다.

```html
<p>
  라틴어 문구 <i>Veni, vidi, vici</i>는 음악과 예술, 문학에 자주 등장합니다.
</p>
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("em")}}
