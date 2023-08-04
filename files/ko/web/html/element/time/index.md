---
title: <time>
slug: Web/HTML/Element/time
---

{{HTMLSidebar}}

**HTML `<time>` 요소**는 시간의 특정 지점 또는 구간을 나타냅니다. `datetime` 특성의 값을 지정해 보다 적절한 검색 결과나, 알림 같은 특정 기능을 구현할 때 사용할 수 있습니다.

`<time>` 요소가 나타낼 수 있는 시간은 다음과 같습니다.

- 24시간 표기법 시계의 시간.
- 정확한 [그레고리력](https://ko.wikipedia.org/wiki/%EA%B7%B8%EB%A0%88%EA%B3%A0%EB%A6%AC%EB%A0%A5) 날짜. (시간대 정보 포함 가능)
- [유효한 시간 범위](https://www.w3.org/TR/2014/REC-html5-20141028/infrastructure.html#valid-duration-string).

{{EmbedInteractiveExample("pages/tabbed/time.html", "tabbed-shorter")}}

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
      <td>{{domxref("HTMLTimeElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("datetime")}}
  - : 요소의 시간 또는 날짜 값. 아래에서 설명하는 형식 중 하나여야 합니다.

## 사용 일람

`<time>` 요소는 기계가 읽을 수 있는 형태로 날짜와 시간을 표현할 때 사용합니다. 예를 들어, 일정의 경우 사용자 에이전트가 자동으로 달력에 일정을 추가할 수 있도록 정확한 일시를 나타낼 수 있습니다.

복잡한 계산상 문제로 인해, 그레고리력의 도입 이전 시간을 나타낼 때 사용해서는 안됩니다.

기계가 읽을 날짜와 시간 값은 `datetime` 특성의 값으로, 아래의 적절한 형식 중 하나여야 합니다. `datetime` 특성이 없는 경우 **어떠한 자식 요소도 두어서는 안되며**, 요소의 텍스트 콘텐츠를 `datetime` 특성 값으로 간주합니다.

### 유효한 `datetime` 값

<dl><dt>유효한 연도 문자열</dt><dd><code>2011</code></dd><dt>유효한 연-월 문자열</dt><dd><code>2011-11</code></dd><dt>유효한 연-월-일 문자열</dt><dd><code>2011-11-18</code></dd><dt>유효한 월-일 문자열</dt><dd><code>11-18</code></dd><dt>유효한 주차 문자열</dt><dd><code>2011-W47</code></dd><dt>유효한 시간 문자열</dt><dd><code>14:54</code></dd><dd><code>14:54:39</code></dd><dd><code>14:54:39.929</code></dd><dt>유효한 현지 날짜 및 시간 문자열</dt><dd><code>2011-11-18T14:54:39.929</code></dd><dd><code>2011-11-18 14:54:39.929</code></dd><dt>유효한 국제 날짜 및 시간 문자열</dt><dd><code>2011-11-18T14:54:39.929Z</code></dd><dd><code>2011-11-18T14:54:39.929-0400</code></dd><dd><code>2011-11-18T14:54:39.929-04:00</code></dd><dd><code>2011-11-18 14:54:39.929Z</code></dd><dd><code>2011-11-18 14:54:39.929-0400</code></dd><dd><code>2011-11-18 14:54:39.929-04:00</code></dd><dt>유효한 기간 문자열</dt><dd><code>PT4H18M3S</code></dd></dl>

## 예제

### 간단한 예제

#### HTML

```html
<p>The concert starts at <time>20:00</time>.</p>
```

#### 결과

{{ EmbedLiveSample('간단한_예제', 250, 60) }}

### `datetime` 예제

#### HTML

```html
<p>
  The concert took place on <time datetime="2001-05-15 19:00">May 15</time>.
</p>
```

#### 결과

{{ EmbedLiveSample('datetime_예제', 250, 60) }}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 날짜와 시간 외 다른 종류의 값을 나타낼 수 있는 {{htmlelement("data")}} 요소.
