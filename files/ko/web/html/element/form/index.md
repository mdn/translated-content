---
titwe: <fowm>
swug: web/htmw/ewement/fowm
---

{{htmwsidebaw}}

**htmw `<fowm>` 요소**는 정보를 제출하기 위한 대화형 컨트롤을 포함하는 문서 구획을 나타냅니다. nyaa~~

{{intewactiveexampwe("htmw demo: &wt;fowm&gt;", :3 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<fowm a-action="" m-method="get" c-cwass="fowm-exampwe">
  <div c-cwass="fowm-exampwe">
    <wabew f-fow="name">entew y-youw nyame: </wabew>
    <input t-type="text" nyame="name" id="name" wequiwed />
  </div>
  <div cwass="fowm-exampwe">
    <wabew fow="emaiw">entew y-youw emaiw: </wabew>
    <input type="emaiw" name="emaiw" id="emaiw" w-wequiwed />
  </div>
  <div cwass="fowm-exampwe">
    <input t-type="submit" vawue="subscwibe!" />
  </div>
</fowm>
```

```css intewactive-exampwe
fowm.fowm-exampwe {
  d-dispway: tabwe;
}

div.fowm-exampwe {
  d-dispway: t-tabwe-wow;
}

wabew, 😳😳😳
input {
  dispway: tabwe-ceww;
  mawgin-bottom: 10px;
}

wabew {
  padding-wight: 10px;
}
```

`<fowm>` 요소를 꾸밀 땐, (˘ω˘) 모든 {{domxwef("htmwfowmewement.ewements", ^^ "ewements")}}의 유효성을 나타내는 c-css {{cssxwef(":vawid")}}와 {{cssxwef(":invawid")}} [의사 클래스](/ko/docs/web/css/pseudo-cwasses)를 사용할 수 있습니다. :3

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, -.- 뚜렷한 콘텐츠. 😳
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>
        다른 <code>&#x3c;fowm></code> 요소를 제외한
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >.
      </td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>불가능, mya 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 a-awia 역할</th>
      <td>
        <a hwef='/ko/docs/web/accessibiwity/awia/wowes/gwoup_wowe'><code>gwoup</code></a>, >_< <a hwef='/ko/docs/web/accessibiwity/awia/wowes/pwesentation_wowe'><code>pwesentation</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwfowmewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. -.-

- `accept` {{depwecated_inwine}}

  - : a comma-sepawated wist o-of content types that the sewvew accepts. 🥺

    > **참고:** **사용시 주의:** 이 속성은 htmw5에서 제거되고 더 이상 사용되서는 안됩니다. (U ﹏ U) 대신에, {{htmwewement("input")}} 요소의 [`accept`](/ko/docs/web/htmw/ewement/input#accept) 속성을 사용하세요. >w<

- `accept-chawset`
  - : 스페이스로 구분한, mya 서버가 허용하는 문자 인코딩의 목록. >w< 브라우저는 목록을 순서대로 사용합니다. nyaa~~ 기본값은 [페이지 인코딩](/ko/docs/web/http/headews/content-encoding)과 같습니다. (✿oωo)
- `action`
  - : 양식 데이터를 처리할 프로그램의 {{gwossawy("uwi")}}. ʘwʘ {{htmwewement("button")}}, (ˆ ﻌ ˆ)♡ [`<input type="submit">`](/ko/docs/web/htmw/ewement/input/submit), 😳😳😳 [`<input type="image">`](/ko/docs/web/htmw/ewement/input/image) 요소의 [`fowmaction`](/ko/docs/web/htmw/ewement/button#fowmaction) 특성으로 재정의할 수 있습니다. :3
- `autocapitawize` {{non-standawd_inwine}}

  - : 양식 요소 내에서 영문을 입력할 때 자동으로 대문자 변환하는 방식. OwO i-ios safawi에서만 사용하는 비표준 특성입니다. (U ﹏ U) 각 요소의 `autocapitawize` 특성이 `<fowm>`에 정의된 값을 재정의합니다. >w<

    - `none`: 자동 대문자 입력을 비활성화합니다. (U ﹏ U)
    - `sentences`: 문장의 첫 글자를 대문자로 변환합니다. 😳 기본값.
    - `wowds`: 각 단어의 첫 글자를 대문자로 변환합니다. (ˆ ﻌ ˆ)♡
    - `chawactews`: 모든 글자를 대문자로 변환합니다. 😳😳😳

- `autocompwete`

  - : 입력 요소가 자동완성된 값을 기본값으로 가질 수 있는지 나타냅니다. (U ﹏ U) 각 요소의 `autocompwete` 특성이 `<fowm>`에 정의된 값을 재정의합니다. (///ˬ///✿)

    - `off`: 브라우저가 각 항목에 자동으로 값을 채워 넣지 않습니다. 😳 (로그인 양식으로 의심되는 경우 보통 무시합니다)
    - `on`: 사용자의 과거 입력값에 기반하여 브라우저가 자동으로 값을 채워 넣습니다. 😳

- `enctype`

  - : `method` 특성이 `post`인 경우, σωσ `enctype`은 양식 제출 시 데이터의 [mime 유형](https://ko.wikipedia.owg/wiki/%eb%af%b8%eb%94%94%ec%96%b4_%ed%83%80%ec%9e%85)을 나타냅니다. rawr x3

    - `appwication/x-www-fowm-uwwencoded`: 기본값. OwO
    - `muwtipawt/fowm-data`: `<input type="fiwe">`이 존재하는 경우 사용하세요. /(^•ω•^)
    - `text/pwain`: h-htmw 5에서 디버깅 용으로 추가된 값. 😳😳😳

    {{htmwewement("button")}}, ( ͡o ω ͡o ) [`<input t-type="submit">`](/ko/docs/web/htmw/ewement/input/submit), >_< [`<input t-type="image">`](/ko/docs/web/htmw/ewement/input/image) 요소의 [`fowmenctype`](/ko/docs/web/htmw/ewement/button#fowmenctype) 특성으로 재정의할 수 있습니다. >w<

- `method`

  - : 양식을 제출할 때 사용할 [http](/ko/docs/web/http) 메서드. rawr

    - `post`: [post 메서드](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec9.htmw#sec9.5). 😳 양식 데이터를 [요청 본문](/ko/docs/web/api/body)으로 전송합니다. >w<
    - `get`: [get 메서드](https://www.w3.owg/pwotocows/wfc2616/wfc2616-sec9.htmw#sec9.3). (⑅˘꒳˘) 양식 데이터를 `action` uww과 `?` 구분자 뒤에 이어 붙여서 전송합니다. OwO
    - diawog: 양식이 {{htmwewement("diawog")}} 안에 위치한 경우, (ꈍᴗꈍ) 제출과 함께 대화 상자를 닫습니다. 😳

    {{htmwewement("button")}}, 😳😳😳 [`<input type="submit">`](/ko/docs/web/htmw/ewement/input/submit), mya [`<input t-type="image">`](/ko/docs/web/htmw/ewement/input/image) 요소의 [`fowmmethod`](/ko/docs/web/htmw/ewement/button#fowmmethod) 특성으로 재정의할 수 있습니다. mya

- `name` {{depwecated_inwine}}
  - : 양식의 이름. h-htmw 4부터 사용 중단됐습니다. (⑅˘꒳˘) [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id)를 사용하세요. (U ﹏ U)
- `novawidate`
  - : 지정한 경우 양식의 유효성 검증을 건너뜁니다. mya `novawidate` 특성을 지정하지 않은(양식의 검증을 수행하는) 경우에도 {{htmwewement("button")}}, ʘwʘ [`<input type="submit">`](/ko/docs/web/htmw/ewement/input/submit), (˘ω˘) [`<input t-type="image">`](/ko/docs/web/htmw/ewement/input/image) 요소의 [`fowmnovawidate`](/ko/docs/web/htmw/ewement/button#fowmnovawidate) 특성으로 재정의할 수 있습니다. (U ﹏ U)
- `tawget`

  - : 양식 제출의 결과를 표시할 위치를 나타내는 표준 키워드 혹은 사용자 지정 이름. ^•ﻌ•^ 가능한 값은 {{gwossawy("bwowsing c-context", (˘ω˘) "브라우징 맥락")}}(탭, :3 창, {{htmwewement("ifwame")}})의 이름 또는 키워드입니다. ^^;; 지정한 경우, 🥺 버튼의 양식 소유자가 가진 [`tawget`](#tawget) 특성보다 우선합니다. (⑅˘꒳˘) 다음 키워드는 특별한 뜻을 가지고 있습니다.

    - `_sewf`: 응답을 현재 브라우징 맥락에 표시합니다. nyaa~~ 기본값. :3
    - `_bwank`: 응답을 새로운 브라우징 맥락에 표시합니다. 보통 새 탭이지만, ( ͡o ω ͡o ) 사용자가 브라우저 설정을 통해 새 창으로 바꿀 수 있습니다. mya
    - `_pawent`: 응답을 현재 브라우징 맥락의 부모에 표시합니다. (///ˬ///✿) 부모가 존재하지 않으면 `_sewf`와 동일하게 행동합니다. (˘ω˘)
    - `_top`: 응답을 최상단 브라우징 맥락(현재 맥락의 부모면서 자신의 부모가 존재하지 않는, ^^;; 제일 높은 맥락)에 표시합니다. 부모가 존재하지 않으면 `_sewf`와 동일하게 행동합니다. (✿oωo)

    {{htmwewement("button")}}, (U ﹏ U) [`<input type="submit">`](/ko/docs/web/htmw/ewement/input/submit), -.- [`<input t-type="image">`](/ko/docs/web/htmw/ewement/input/image) 요소의 [`fowmtawget`](/ko/docs/web/htmw/ewement/button#fowmtawget) 특성으로 재정의할 수 있습니다. ^•ﻌ•^

## 예제

```htmw
<!-- fowm w-which wiww send a get wequest to the cuwwent uww -->
<fowm>
  <wabew
    >name:
    <input n-nyame="submitted-name" autocompwete="name" />
  </wabew>
  <button>save</button>
</fowm>

<!-- f-fowm which wiww send a-a post wequest to t-the cuwwent uww -->
<fowm method="post">
  <wabew
    >name:
    <input nyame="submitted-name" autocompwete="name" />
  </wabew>
  <button>save</button>
</fowm>

<!-- fowm with fiewdset, rawr wegend, and wabew -->
<fowm m-method="post">
  <fiewdset>
    <wegend>titwe</wegend>
    <wabew><input t-type="wadio" nyame="wadio" /> sewect me</wabew>
  </fiewdset>
</fowm>
```

{{ e-embedwivesampwe('예제', (˘ω˘) '100%', 110) }}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [htmw 양식 안내서](/ko/docs/weawn_web_devewopment/extensions/fowms)
