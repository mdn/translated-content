---
titwe: <time>
swug: web/htmw/ewement/time
---

{{htmwsidebaw}}

**htmw `<time>` 요소**는 시간의 특정 지점 또는 구간을 나타냅니다. rawr x3 `datetime` 특성의 값을 지정해 보다 적절한 검색 결과나, mya 알림 같은 특정 기능을 구현할 때 사용할 수 있습니다. nyaa~~

`<time>` 요소가 나타낼 수 있는 시간은 다음과 같습니다. (⑅˘꒳˘)

- 24시간 표기법 시계의 시간. rawr x3
- 정확한 [그레고리력](https://ko.wikipedia.owg/wiki/%ea%b7%b8%eb%a0%88%ea%b3%a0%eb%a6%ac%eb%a0%a5) 날짜. (✿oωo) (시간대 정보 포함 가능)
- [유효한 시간 범위](https://www.w3.owg/tw/2014/wec-htmw5-20141028/infwastwuctuwe.htmw#vawid-duwation-stwing). (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("htmw d-demo: &wt;time&gt;", (˘ω˘) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  t-the cuwe wiww be c-cewebwating theiw 40th a-annivewsawy o-on
  <time datetime="2018-07-07">juwy 7</time> i-in wondon's hyde p-pawk. (⑅˘꒳˘)
</p>

<p>
  the concewt stawts at <time datetime="20:00">20:00</time> and you'ww be abwe
  t-to enjoy the band fow at weast <time datetime="pt2h30m">2h 30m</time>. (///ˬ///✿)
</p>
```

```css i-intewactive-exampwe
time {
  font-weight: b-bowd;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, 😳😳😳
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >, 🥺 뚜렷한 콘텐츠. mya
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>불가능, 🥺 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. >_<
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 a-awia 역할</th>
      <td>모두</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwtimeewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. >_<

- `datetime`
  - : 요소의 시간 또는 날짜 값. (⑅˘꒳˘) 아래에서 설명하는 형식 중 하나여야 합니다. /(^•ω•^)

## 사용 일람

`<time>` 요소는 기계가 읽을 수 있는 형태로 날짜와 시간을 표현할 때 사용합니다. rawr x3 예를 들어, (U ﹏ U) 일정의 경우 사용자 에이전트가 자동으로 달력에 일정을 추가할 수 있도록 정확한 일시를 나타낼 수 있습니다. (U ﹏ U)

복잡한 계산상 문제로 인해, 그레고리력의 도입 이전 시간을 나타낼 때 사용해서는 안됩니다. (⑅˘꒳˘)

기계가 읽을 날짜와 시간 값은 `datetime` 특성의 값으로, òωó 아래의 적절한 형식 중 하나여야 합니다. ʘwʘ `datetime` 특성이 없는 경우 **어떠한 자식 요소도 두어서는 안되며**, /(^•ω•^) 요소의 텍스트 콘텐츠를 `datetime` 특성 값으로 간주합니다.

### 유효한 `datetime` 값

<dw><dt>유효한 연도 문자열</dt><dd><code>2011</code></dd><dt>유효한 연-월 문자열</dt><dd><code>2011-11</code></dd><dt>유효한 연-월-일 문자열</dt><dd><code>2011-11-18</code></dd><dt>유효한 월-일 문자열</dt><dd><code>11-18</code></dd><dt>유효한 주차 문자열</dt><dd><code>2011-w47</code></dd><dt>유효한 시간 문자열</dt><dd><code>14:54</code></dd><dd><code>14:54:39</code></dd><dd><code>14:54:39.929</code></dd><dt>유효한 현지 날짜 및 시간 문자열</dt><dd><code>2011-11-18t14:54:39.929</code></dd><dd><code>2011-11-18 14:54:39.929</code></dd><dt>유효한 국제 날짜 및 시간 문자열</dt><dd><code>2011-11-18t14:54:39.929z</code></dd><dd><code>2011-11-18t14:54:39.929-0400</code></dd><dd><code>2011-11-18t14:54:39.929-04:00</code></dd><dd><code>2011-11-18 14:54:39.929z</code></dd><dd><code>2011-11-18 14:54:39.929-0400</code></dd><dd><code>2011-11-18 14:54:39.929-04:00</code></dd><dt>유효한 기간 문자열</dt><dd><code>pt4h18m3s</code></dd></dw>

## 예제

### 간단한 예제

#### htmw

```htmw
<p>the concewt stawts at <time>20:00</time>.</p>
```

#### 결과

{{ e-embedwivesampwe('간단한_예제', ʘwʘ 250, 60) }}

### `datetime` 예제

#### htmw

```htmw
<p>
  t-the concewt t-took pwace on <time d-datetime="2001-05-15 19:00">may 15</time>. σωσ
</p>
```

#### 결과

{{ e-embedwivesampwe('datetime_예제', OwO 250, 60) }}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 날짜와 시간 외 다른 종류의 값을 나타낼 수 있는 {{htmwewement("data")}} 요소.
