---
title: <meter>
slug: Web/HTML/Element/meter
---

{{HTMLSidebar}}

**HTML `<meter>` 요소**는 특정 범위 내에서의 스칼라 값, 또는 백분율 값을 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/meter.html", "tabbed-shorter")}}

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
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#레이블_가능"
          >레이블 가능</a
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >. 단, 다른 <code>&#x3C;meter></code> 요소는 사용할 수 없습니다.
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
      <td>{{domxref("HTMLMeterElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("value")}}

  - : 현재의 값. 최소와 최댓값(`min`과 `max` 특성)을 지정한 경우, 그 사이여야 합니다. 지정하지 않았거나 잘못된 값인 경우 `0`으로 간주합니다. 지정했으나 범위 바깥인 경우, 범위에 맞춰 나머지 값을 버립니다.

    > **참고:**`value`가 `0` 이상 `1` 이하가 아닌 이상, `min`과 `max`를 정의해 `value` 값이 그 안에 들어가도록 해야 합니다.

- {{htmlattrdef("min")}}
  - : 측정 범위의 가능한 최솟값. 지정할 경우 최댓값(`max` 특성) 미만이어야 합니다. 지정하지 않은 경우 `0`입니다.
- {{htmlattrdef("max")}}
  - : 측정 범위의 가능한 최댓값. 지정할 경우 최솟값(`min` 특성)을 초과해야 합니다. 지정하지 않은 경우 `1`입니다.
- {{htmlattrdef("low")}}
  - : 측정 범위 중 낮은 범위의 최댓값. 지정할 경우 전체 범위 최솟값(`min` 특성)을 초과해야 하며, 높은 범위 최댓값과 전체 범위 최댓값(각각 `high`와 `max` 특성) 미만이어야 합니다. 지정하지 않았거나 전체 범위 최솟값 미만인 경우, 전체 범위 최솟값과 같아집니다.
- {{htmlattrdef("high")}}
  - : 측정 범위 중 높은 범위의 최솟값. 지정할 경우 전체 범위 최댓값(`max` 특성) 미만이어야 하며, 낮은 범위의 최댓값과 전체 범위 최솟값(각각 `low`와 `min` 특성)을 초과해야 합니다. 지정하지 않았거나 전체 범위 최댓값을 초과할 경우 전체 범위 최댓값과 같아집니다.
- {{htmlattrdef("optimum")}}
  - : 이상적인 값. `min`과 `max` 특성으로 정의한 범위 내에 위치해야 합니다. `low`와 `high` 특성을 함께 사용한 경우, `optimum`은 어느 범위가 이상적인지 나타냅니다. 예를 들어, 값이 `min`과 `low` 사이에 위치한 경우, 측정 범위 중 낮은 범위가 이상적인 범위입니다.
- {{htmlattrdef("form")}}
  - : `<meter>`와 연결할 {{htmlelement("form")}} 요소("양식 소유자"). 같은 문서에 존재하는 `<form>` 요소의 [`id`](/ko/docs/Web/HTML/Global_attributes#id) 특성 값을 사용해야 합니다. `form` 특성을 지정하지 않았으나 조상 중 `<form>` 요소가 존재하면 해당 `<form>`과 연결됩니다. [`<input type="number">`](/ko/docs/Web/HTML/Element/input/number)의 값 범위를 보여주는 등 `<meter>`를 양식 관련 콘텐츠로서 사용할 때만 지정하세요.

## 예제

### 간단한 예제

#### HTML

```html
<p>
  Heat the oven to <meter min="200" max="500" value="350">350 degrees</meter>.
</p>
```

#### 결과

{{EmbedLiveSample("간단한_예제", 300, 60)}}

Google Chrome에서는 다음 그림처럼 보입니다.

![current look of 'meter' in Google Chrome](screen_shot_2020-10-12_at_10.10.53_pm.png)

### 높은 범위와 낮은 범위

[`min`](/ko/docs/Web/HTML/Element/meter#min) 특성의 기본값이 0이므로 생략한 것을 참고하세요.

#### HTML

```html
<p>
  He got a <meter low="69" high="80" max="100" value="84">B</meter> on the exam.
</p>
```

#### 결과

{{EmbedLiveSample("높은_범위와_낮은_범위", 300, 60)}}

Google Chrome에서는 다음 그림처럼 보입니다.

![red meter in Google Chrome](screen_shot_2020-10-12_at_10.11.52_pm.png)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("progress")}}
