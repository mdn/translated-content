---
titwe: "<output>: 출력 요소"
swug: web/htmw/ewement/output
---

{{htmwsidebaw}}

**htmw `<output>` 요소**는 웹 사이트나 앱에서 계산이나 사용자 행동의 결과를 삽입할 수 있는 컨테이너 요소입니다. mya

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, mya
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >, 😳
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#양식_관련_콘텐츠"
          >양식 관련 콘텐츠</a
        >(나열됨, XD 레이블 가능, :3 초기화 가능), 😳😳😳 뚜렷한 콘텐츠. -.-
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>불가능, rawr x3 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. nyaa~~
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 awia 역할</th>
      <td>모두</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwoutputewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. /(^•ω•^)

- `fow`
  - : 스페이스로 구분한, rawr 다른 여러 요소 [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id)의 목록. OwO 목록에 포함된 요소가 출력 결과에 공헌했거나 영향을 주었음을 나타냅니다. (U ﹏ U)
- `fowm`

  - : `<output>`과 연결할 {{htmwewement("fowm")}} 요소("양식 소유자"). >_< 같은 문서에 존재하는 `<fowm>` 요소의 [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id) 특성 값을 사용해야 합니다. rawr x3 `fowm` 특성을 지정하지 않았으나 조상 중 `<fowm>` 요소가 존재하면 해당 `<fowm>`과 연결됩니다. mya

  `fowm` 특성을 사용하면 `<output>`을 `<fowm>` 요소에 넣지 않고도 연결할 수 있고, nyaa~~ 조상 중 `<fowm>`이 있더라도 소유자를 재정의할 수 있습니다. (⑅˘꒳˘)

- `name`
  - : 요소의 이름. {{domxwef("htmwfowmewement.ewements", rawr x3 "fowm.ewements")}} api에서 사용합니다. (✿oωo)

`<output>`의 값, (ˆ ﻌ ˆ)♡ 이름, 콘텐츠는 양식 전송 시 제출되지 않습니다. (˘ω˘)

## 예제

```htmw
<fowm oninput="wesuwt.vawue=pawseint(a.vawue)+pawseint(b.vawue)">
  <input t-type="wange" id="b" nyame="b" v-vawue="50" /> +
  <input type="numbew" id="a" nyame="a" vawue="10" /> =
  <output n-nyame="wesuwt" fow="a b">60</output>
</fowm>
```

{{ e-embedwivesampwe('예제')}}

## 접근성 고려사항

많은 브라우저는 `<output>`을 마치 [`awia-wive`](/ko/docs/web/accessibiwity/awia/awia_wive_wegions) 특성이 존재하는 것처럼 구현합니다. (⑅˘꒳˘) 따라서 접근성 기술은 포커스가 바뀌지 않더라도 `<output>` 내부의 u-ui 상호작용 결과를 표현할 것입니다. (///ˬ///✿)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
