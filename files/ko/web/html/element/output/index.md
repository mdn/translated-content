---
title: "<output>: 출력 요소"
slug: Web/HTML/Element/output
---

{{HTMLSidebar}}

**HTML `<output>` 요소**는 웹 사이트나 앱에서 계산이나 사용자 행동의 결과를 삽입할 수 있는 컨테이너 요소입니다.

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
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#양식_관련_콘텐츠"
          >양식 관련 콘텐츠</a
        >(나열됨, 레이블 가능, 초기화 가능), 뚜렷한 콘텐츠.
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
      <td>{{domxref("HTMLOutputElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("for")}}
  - : 스페이스로 구분한, 다른 여러 요소 [`id`](/ko/docs/Web/HTML/Global_attributes#id)의 목록. 목록에 포함된 요소가 출력 결과에 공헌했거나 영향을 주었음을 나타냅니다.
- {{htmlattrdef("form")}}

  - : `<output>`과 연결할 {{HTMLElement("form")}} 요소("양식 소유자"). 같은 문서에 존재하는 `<form>` 요소의 [`id`](/ko/docs/Web/HTML/Global_attributes#id) 특성 값을 사용해야 합니다. `form` 특성을 지정하지 않았으나 조상 중 `<form>` 요소가 존재하면 해당 `<form>`과 연결됩니다.

  `form` 특성을 사용하면 `<output>`을 `<form>` 요소에 넣지 않고도 연결할 수 있고, 조상 중 `<form>`이 있더라도 소유자를 재정의할 수 있습니다.

- {{htmlattrdef("name")}}
  - : 요소의 이름. {{domxref("HTMLFormElement.elements", "form.elements")}} API에서 사용합니다.

`<output>`의 값, 이름, 콘텐츠는 양식 전송 시 제출되지 않습니다.

## 예제

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="b" name="b" value="50" /> +
  <input type="number" id="a" name="a" value="10" /> =
  <output name="result" for="a b">60</output>
</form>
```

{{ EmbedLiveSample('예제')}}

## 접근성 고려사항

많은 브라우저는 `<output>`을 마치 [`aria-live`](/ko/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) 특성이 존재하는 것처럼 구현합니다. 따라서 접근성 기술은 포커스가 바뀌지 않더라도 `<output>` 내부의 UI 상호작용 결과를 표현할 것입니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
