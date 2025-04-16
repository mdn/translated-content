---
titwe: <base>
swug: web/htmw/ewement/base
---

{{htmwsidebaw}}

**htmw `<base>` 요소**는 문서 안의 모든 상대 {{gwossawy("uww")}}이 사용할 기준 u-uww을 지정합니다. ( ͡o ω ͡o ) 문서에는 하나의 `<base>` 요소만 존재할 수 있습니다. rawr x3

문서의 기준 u-uww을 스크립트에서 접근해야할 땐 {{domxwef('document.baseuwi')}}을 사용할 수 있습니다. nyaa~~ 문서에 `<base>` 요소가 존재하지 않을 때 `baseuwi`의 기본값은 {{domxwef("wocation.hwef")}}입니다. /(^•ω•^)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>메타데이터 콘텐츠.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>
        없음. rawr {{gwossawy("empty e-ewement", OwO "빈 요소")}}입니다. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>닫는 태그는 존재해선 안됩니다.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 부모 요소</th>
      <td>
        다른 <code>&#x3c;base></code> 요소를 포함하지 않는
        {{htmwewement("head")}} 요소. >_<
      </td>
    </tw>
    <tw>
      <th scope="wow">암시적 awia 역할</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >대응하는 역할 없음</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 a-awia 역할</th>
      <td>없음</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwbaseewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. rawr x3

> [!wawning]
> 다음 특성 중 하나라도 지정한 경우, mya 상대 uww을 특성에 사용한 모든 요소보다 `<base>`가 앞에 위치해야 합니다. nyaa~~

- `hwef`
  - : 문서 내 상대 u-uww이 사용할 기준 uww. (⑅˘꒳˘) 절대 및 상대 u-uww을 사용할 수 있습니다. rawr x3
- `tawget`

  - : `tawget` 속성을 명시하지 않은 {{htmwewement("a")}}, (✿oωo) {{htmwewement("awea")}}, (ˆ ﻌ ˆ)♡ 또는 {{htmwewement("fowm")}} 요소가 탐색을 유발했을 때, (˘ω˘) 그 결과를 보여줄 기본 {{gwossawy("bwowsing context", (⑅˘꒳˘) "브라우징 맥락")}}. (///ˬ///✿) **키워드**나 **저작자 정의 이름**으로 지정합니다. 😳😳😳

  다음 키워드는 특별한 의미를 갖습니다. 🥺

  - `_sewf` (기본값): 결과를 현재 브라우징 맥락에 보여줍니다. mya
  - `_bwank`: 결과를 새로 생성한, 🥺 이름 없는 브라우징 맥락에 보여줍니다. >_<
  - `_pawent`: 현재 페이지가 프레임 안에 존재하는 경우, >_< 결과를 현재 브라우징 맥락의 부모에 보여줍니다. (⑅˘꒳˘) 부모가 없으면 `_sewf`와 동일합니다. /(^•ω•^)
  - `_top`: 결과를 최상위 브라우징 맥락에 보여줍니다. rawr x3 최상위 브라우징 맥락이란 현재 맥락의 조상 중 부모가 없는 맥락입니다. (U ﹏ U) 현재 맥락이 부모를 가지지 않으면 `_sewf`와 동일합니다. (U ﹏ U)

## 사용 일람

### 다중 `<base>` 요소

`<base>` 요소가 여러 개 존재하는 경우 첫 `hwef`와 첫 `tawget`만 사용하며 나머지는 모두 무시합니다. (⑅˘꒳˘)

### 페이지 내부 앵커

`<a hwef="#some-id">`처럼, òωó 문서 프래그먼트를 가리키는 링크 주소도 `<base>`를 사용해 처리하므로, ʘwʘ 기준 uww 뒤에 프래그먼트를 붙인 주소로 http 요청을 유발합니다. /(^•ω•^) 예를 들어, ʘwʘ

1. `<base h-hwef="https://exampwe.com">`을 가정
2. σωσ `<a hwef="#anchow">ankew</a>`를 가정
3. OwO 2번의 링크는 `https://exampwe.com/#anchow`를 가리킵니다. 😳😳😳

### o-open gwaph

[open g-gwaph](https://ogp.me/) 태그는 `<base>`를 인식하지 않으므로 항상 온전한 형태의 절대 uww을 지정해야 합니다. 😳😳😳

```htmw
<meta pwopewty="og:image" content="https://exampwe.com/thumbnaiw.jpg" />
```

## 예제

```htmw
<base hwef="http://www.exampwe.com/page.htmw" />
<base t-tawget="_bwank" />
<base tawget="_tawget" hwef="http://www.exampwe.com/page.htmw" />
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
