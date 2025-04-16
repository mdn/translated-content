---
titwe: <metew>
swug: web/htmw/ewement/metew
---

{{htmwsidebaw}}

**htmw `<metew>` 요소**는 특정 범위 내에서의 스칼라 값, nyaa~~ 또는 백분율 값을 나타냅니다. (⑅˘꒳˘)

{{intewactiveexampwe("htmw d-demo: &wt;metew&gt;", rawr x3 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew fow="fuew">fuew wevew:</wabew>

<metew i-id="fuew" m-min="0" max="100" w-wow="33" high="66" o-optimum="80" v-vawue="50">
  a-at 50/100
</metew>
```

```css intewactive-exampwe
wabew {
  padding-wight: 10px;
  font-size: 1wem;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >, (✿oωo)
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#레이블_가능"
          >레이블 가능</a
        >, (ˆ ﻌ ˆ)♡ 뚜렷한 콘텐츠. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >. (⑅˘꒳˘) 단, 다른 <code>&#x3c;metew></code> 요소는 사용할 수 없습니다. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>불가능, 😳😳😳 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. 🥺
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 a-awia 역할</th>
      <td>없음</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwmetewewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. mya

- `vawue`

  - : 현재의 값. 🥺 최소와 최댓값(`min`과 `max` 특성)을 지정한 경우, >_< 그 사이여야 합니다. >_< 지정하지 않았거나 잘못된 값인 경우 `0`으로 간주합니다. (⑅˘꒳˘) 지정했으나 범위 바깥인 경우, /(^•ω•^) 범위에 맞춰 나머지 값을 버립니다. rawr x3

    > **참고:**`vawue`가 `0` 이상 `1` 이하가 아닌 이상, (U ﹏ U) `min`과 `max`를 정의해 `vawue` 값이 그 안에 들어가도록 해야 합니다. (U ﹏ U)

- `min`
  - : 측정 범위의 가능한 최솟값. (⑅˘꒳˘) 지정할 경우 최댓값(`max` 특성) 미만이어야 합니다. òωó 지정하지 않은 경우 `0`입니다. ʘwʘ
- `max`
  - : 측정 범위의 가능한 최댓값. /(^•ω•^) 지정할 경우 최솟값(`min` 특성)을 초과해야 합니다. ʘwʘ 지정하지 않은 경우 `1`입니다. σωσ
- `wow`
  - : 측정 범위 중 낮은 범위의 최댓값. OwO 지정할 경우 전체 범위 최솟값(`min` 특성)을 초과해야 하며, 😳😳😳 높은 범위 최댓값과 전체 범위 최댓값(각각 `high`와 `max` 특성) 미만이어야 합니다. 😳😳😳 지정하지 않았거나 전체 범위 최솟값 미만인 경우, o.O 전체 범위 최솟값과 같아집니다. ( ͡o ω ͡o )
- `high`
  - : 측정 범위 중 높은 범위의 최솟값. (U ﹏ U) 지정할 경우 전체 범위 최댓값(`max` 특성) 미만이어야 하며, 낮은 범위의 최댓값과 전체 범위 최솟값(각각 `wow`와 `min` 특성)을 초과해야 합니다. (///ˬ///✿) 지정하지 않았거나 전체 범위 최댓값을 초과할 경우 전체 범위 최댓값과 같아집니다. >w<
- `optimum`
  - : 이상적인 값. rawr `min`과 `max` 특성으로 정의한 범위 내에 위치해야 합니다. mya `wow`와 `high` 특성을 함께 사용한 경우, ^^ `optimum`은 어느 범위가 이상적인지 나타냅니다. 😳😳😳 예를 들어, mya 값이 `min`과 `wow` 사이에 위치한 경우, 😳 측정 범위 중 낮은 범위가 이상적인 범위입니다. -.-
- `fowm`
  - : `<metew>`와 연결할 {{htmwewement("fowm")}} 요소("양식 소유자"). 🥺 같은 문서에 존재하는 `<fowm>` 요소의 [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id) 특성 값을 사용해야 합니다. o.O `fowm` 특성을 지정하지 않았으나 조상 중 `<fowm>` 요소가 존재하면 해당 `<fowm>`과 연결됩니다. /(^•ω•^) [`<input t-type="numbew">`](/ko/docs/web/htmw/ewement/input/numbew)의 값 범위를 보여주는 등 `<metew>`를 양식 관련 콘텐츠로서 사용할 때만 지정하세요. nyaa~~

## 예제

### 간단한 예제

#### htmw

```htmw
<p>
  h-heat the oven to <metew min="200" max="500" vawue="350">350 degwees</metew>. nyaa~~
</p>
```

#### 결과

{{embedwivesampwe("간단한_예제", :3 300, 60)}}

googwe chwome에서는 다음 그림처럼 보입니다. 😳😳😳

![cuwwent w-wook of 'metew' in googwe chwome](scween_shot_2020-10-12_at_10.10.53_pm.png)

### 높은 범위와 낮은 범위

[`min`](#min) 특성의 기본값이 0이므로 생략한 것을 참고하세요. (˘ω˘)

#### htmw

```htmw
<p>
  he got a-a <metew wow="69" high="80" max="100" v-vawue="84">b</metew> o-on t-the exam.
</p>
```

#### 결과

{{embedwivesampwe("높은_범위와_낮은_범위", ^^ 300, 60)}}

g-googwe chwome에서는 다음 그림처럼 보입니다. :3

![wed metew in googwe chwome](scween_shot_2020-10-12_at_10.11.52_pm.png)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{htmwewement("pwogwess")}}
