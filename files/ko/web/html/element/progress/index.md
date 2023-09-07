---
title: <progress>
slug: Web/HTML/Element/progress
---

{{HTMLSidebar}}

**HTML `<progress>` 요소**는 어느 작업의 완료 정도를 나타내며, 주로 진행 표시줄의 형태를 띕니다.

{{EmbedInteractiveExample("pages/tabbed/progress.html", "tabbed-standard")}}

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
        >, 레이블 가능, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        ><a
          href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC#%EA%B5%AC%EB%AC%B8_%EC%BD%98%ED%85%90%EC%B8%A0"
          >.</a
        >
        단, 다른 <code>&#x3C;progress></code> 요소는 사용할 수 없습니다.
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
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLProgressElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{ htmlattrdef("max") }}
  - : `<progress>` 요소가 나타내는 작업에 필요한 작업량. 지정하는 경우, 반드시 0보다 크고 유효한 부동소수점 숫자여야 합니다. 기본값은 1입니다.
- {{ htmlattrdef("value") }}
  - : `<progress>` 요소가 나타내는 작업을 완료한 양. 유효한 부동소수점 숫자여야 하고, `max` 특성을 지정한 경우 0 이상 `max` 이하, 그렇지 않으면 0 이상 1 이하여야 합니다. `value` 특성이 없으면 미결정 상태로, 현재 작업의 종료 시점을 예측할 수 없음을 나타냅니다.

> **참고:** {{htmlelement("meter")}} 요소와 달리, 최솟값은 항상 0이며 `min` 특성을 지정할 수 없습니다.

> **참고:** CSS {{cssxref(":indeterminate")}} [의사 클래스](/ko/docs/Web/CSS/Pseudo-classes)를 사용하면 미결정 상태의 진행 표시줄을 선택할 수 있습니다. 값을 지정한 진행 표시줄을 미결정 상태로 바꾸려면 {{domxref("Element.removeAttribute", "element.removeAttribute('value')")}}를 사용해 `value` 특성을 제거해야 합니다.

## 예제

```html
<progress value="70" max="100">70 %</progress>
```

### 결과

{{ EmbedLiveSample("예제", 200, 50) }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{htmlelement("meter")}}
- {{ cssxref(":indeterminate") }}
- {{ cssxref("-moz-orient") }}
- {{ cssxref("::-moz-progress-bar") }}
- {{ cssxref("::-ms-fill") }}
- {{ cssxref("::-webkit-progress-bar") }}
- {{ cssxref("::-webkit-progress-value") }}
- {{ cssxref("::-webkit-progress-inner-element") }}
