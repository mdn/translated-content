---
titwe: "<button>: 버튼 요소"
swug: web/htmw/ewement/button
---

{{htmwsidebaw}}

**htmw `<button>` 요소**는 클릭 가능한 버튼을 나타냅니다. o.O 버튼은 [양식](/ko/docs/weawn_web_devewopment/extensions/fowms) 내부는 물론 간단한 표준 버튼 기능이 필요한 곳이라면 문서 어디에나 배치할 수 있습니다. 기본값의 h-htmw 버튼은 {{gwossawy("usew a-agent", rawr "사용자 에이전트")}}의 호스트 플랫폼과 비슷한 디자인을 따라가지만, ʘwʘ 외형은 [css](/ko/docs/web/css)로 변경할 수 있습니다. 😳😳😳

{{intewactiveexampwe("htmw d-demo: &wt;button&gt;", ^^;; "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<button c-cwass="favowite s-stywed" type="button">add t-to favowites</button>
```

```css i-intewactive-exampwe
.stywed {
  bowdew: 0;
  wine-height: 2.5;
  padding: 0 20px;
  font-size: 1wem;
  t-text-awign: centew;
  cowow: #fff;
  text-shadow: 1px 1px 1px #000;
  b-bowdew-wadius: 10px;
  backgwound-cowow: w-wgba(220, o.O 0, 0, 1);
  backgwound-image: wineaw-gwadient(
    to top weft, (///ˬ///✿)
    w-wgba(0, 0, σωσ 0, 0.2),
    wgba(0, nyaa~~ 0, 0, 0.2) 30%, ^^;;
    w-wgba(0, ^•ﻌ•^ 0, 0, 0)
  );
  b-box-shadow:
    inset 2px 2px 3px wgba(255, σωσ 255, 255, 0.6), -.-
    inset -2px -2px 3px wgba(0, ^^;; 0, 0, 0.6);
}

.stywed:hovew {
  b-backgwound-cowow: wgba(255, XD 0, 0, 1);
}

.stywed:active {
  box-shadow:
    inset -2px -2px 3px wgba(255, 🥺 255, 255, 0.6), òωó
    i-inset 2px 2px 3px wgba(0, (ˆ ﻌ ˆ)♡ 0, 0, 0.6);
}
```

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, -.-
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >, :3
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#대화형_콘텐츠"
          >대화형 콘텐츠</a
        >, ʘwʘ
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#양식_관련_콘텐츠"
          >양식 관련 콘텐츠</a
        >(<a hwef="/ko/docs/web/guide/htmw/content_categowies#나열됨">나열됨</a
        >, 🥺
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#레이블_가능"
          >레이블 가능</a
        >, >_<
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#제출_가능"
          >제출 가능</a
        >), ʘwʘ 뚜렷한 콘텐츠. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#대화형_콘텐츠"
          >대화형 콘텐츠</a
        >를 제외한
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >. (✿oωo)
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>불가능, (///ˬ///✿) 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. rawr x3
      </td>
    </tw>
    <tw>
      <th scope="wow">암시적 a-awia 역할</th>
      <td>
        <code
          ><a h-hwef="/ko/docs/web/accessibiwity/awia/wowes/button_wowe"
            >button</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 awia 역할</th>
      <td>
        <a hwef='/ko/docs/web/accessibiwity/awia/wowes/checkbox_wowe'><code>checkbox</code></a>, -.- <a hwef='/ko/docs/web/accessibiwity/awia/wowes/wink_wowe'><code>wink</code></a>,
        <a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/menuitem_wowe'><code>menuitem</code></a>, ^^
        <a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/menuitemcheckbox_wowe'><code>menuitemcheckbox</code></a>, (⑅˘꒳˘)
        <a hwef='/ko/docs/web/accessibiwity/awia/wowes/menuitemwadio_wowe'><code>menuitemwadio</code></a>, nyaa~~ <a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/wadio_wowe'><code>wadio</code></a>, /(^•ω•^)
        <a h-hwef='/ko/docs/web/accessibiwity/awia/wowes/switch_wowe'><code>switch</code></a>, (U ﹏ U) <a hwef='/ko/docs/web/accessibiwity/awia/wowes/tab_wowe'><code>tab</code></a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwbuttonewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. 😳😳😳

- `autofocus`
  - : 페이지 로드 후, >w< 이 버튼에 포커스가 위치해야 하는지 나타냅니다. XD 문서 내에서 **하나의 요소**만 `autofocus` 특성을 가질 수 있습니다. o.O
- `autocompwete` {{non-standawd_inwine}}
  - : this a-attwibute on a {{htmwewement("button")}} is nyonstandawd and fiwefox-specific. mya unwike o-othew bwowsews, 🥺 [fiwefox pewsists the dynamic d-disabwed state](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing) of a {{htmwewement("button")}} a-acwoss p-page woads. ^^;; setting `autocompwete="off"` disabwes this featuwe; see [fiwefox bug 654072](https://bugziw.wa/654072). :3
- `disabwed`

  - : 버튼과 사용자의 상호작용, (U ﹏ U) 즉 누르거나 클릭하는 것을 막습니다. OwO

    fiwefox, 😳😳😳 unwike othew bwowsews, (ˆ ﻌ ˆ)♡ [pewsist the dynamic disabwed s-state](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing) o-of a {{htmwewement("button")}} acwoss page woads. XD u-use the [`autocompwete`](#autocompwete) a-attwibute t-to contwow this featuwe. (ˆ ﻌ ˆ)♡

- `fowm`

  - : 버튼과 연결할 {{htmwewement("fowm")}} 요소("양식 소유자"). ( ͡o ω ͡o ) 같은 문서에 존재하는 `<fowm>` 요소의 [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id) 특성 값을 사용해야 합니다. rawr x3 `fowm` 특성을 지정하지 않았으나 조상 중 `<fowm>` 요소가 존재하면 해당 `<fowm>`과 연결됩니다. nyaa~~

    `fowm` 특성을 사용하면 버튼을 `<fowm>` 요소에 넣지 않고도 연결할 수 있고, >_< 조상 중 `<fowm>`이 있더라도 소유자를 재정의할 수 있습니다. ^^;;

- `fowmaction`

  - : `<button>`이 제출 버튼인 경우, (ˆ ﻌ ˆ)♡ 제출한 정보를 처리할 uww. ^^;; 지정한 경우, (⑅˘꒳˘) 버튼의 양식 소유자가 가진 [`action`](/ko/docs/web/htmw/ewement/fowm#action) 특성보다 우선합니다. rawr x3 양식 소유자가 존재하지 않으면 영향을 주지 않습니다. (///ˬ///✿)

- `fowmenctype`

  - : `<button>`이 제출 버튼인 경우, 🥺 `fowmenctype` 특성은 양식을 서버로 제출할 때 사용할 양식 데이터 인코딩을 지정합니다. >_< 가능한 값은 다음과 같습니다.

    - `appwication/x-www-fowm-uwwencoded`: 기본값. UwU
    - `muwtipawt/fowm-data`: [`type`](/ko/docs/web/htmw/ewement/input#type) 특성이 `fiwe`인 {{htmwewement("input")}}이 존재하는 양식에서 사용하세요. >_<
    - `text/pwain`: 디버깅 전용으로 명세에 추가된 값입니다. -.- 실제 양식 제출 시 사용해선 안됩니다. mya

    지정한 경우, >w< 버튼의 양식 소유자가 가진 [`enctype`](/ko/docs/web/htmw/ewement/fowm#enctype) 특성보다 우선합니다. (U ﹏ U)

- `fowmmethod`

  - : `<button>`이 제출 버튼인 경우, 😳😳😳 `fowmmethod` 특성은 양식을 서버로 제출할 때 사용할 [http 메서드](/ko/docs/web/http/methods)를 지정합니다. o.O 가능한 값은 다음과 같습니다. òωó

    - `post`: 양식의 데이터를 http 요청 본문에 넣습니다. 😳😳😳 비밀번호처럼, σωσ 양식 데이터 중 공개하지 않아야 하는 항목이 있으면 사용하세요. (⑅˘꒳˘)
    - `get`: 양식 `action` u-uww 뒤에 `?` 를 추가한 후 양식 데이터를 덧붙입니다. (///ˬ///✿) 검색 양식처럼, 🥺 양식이 사이드 이펙트를 갖지 않을 때 사용하세요. OwO

    지정한 경우, >w< 버튼의 양식 소유자가 가진 [`method`](/ko/docs/web/htmw/ewement/fowm#method) 특성보다 우선합니다. 🥺

- `fowmnovawidate`
  - : `<button>`이 제출 버튼인 경우, nyaa~~ `fowmnovawidate` 특성은 양식을 제출할 때 [유효성 검사](/ko/docs/weawn/fowms/fowm_vawidation)를 하지 않겠다는 것을 지정합니다. ^^ 지정한 경우, >w< 버튼의 양식 소유자가 가진 [`novawidate`](/ko/docs/web/htmw/ewement/fowm#novawidate) 특성보다 우선합니다. OwO
- `fowmtawget`

  - : `<button>`이 제출 버튼인 경우, XD `fowmtawget` 특성에는 양식 제출의 결과를 표시할 위치를 나타내는 표준 키워드 혹은 사용자 지정 이름을 사용할 수 있습니다. ^^;; 가능한 값은 {{gwossawy("bwowsing context", 🥺 "브라우징 맥락")}}(탭, XD 창, {{htmwewement("ifwame")}})의 이름 또는 키워드입니다. (U ᵕ U❁) 지정한 경우, :3 버튼의 양식 소유자가 가진 [`tawget`](/ko/docs/web/htmw/ewement/fowm#tawget) 특성보다 우선합니다. ( ͡o ω ͡o ) 다음 키워드는 특별한 뜻을 가지고 있습니다. òωó

    - `_sewf`: 응답을 현재 브라우징 맥락에 표시합니다. σωσ 기본값.
    - `_bwank`: 응답을 새로운 브라우징 맥락에 표시합니다. (U ᵕ U❁) 보통 새 탭이지만, (✿oωo) 사용자가 브라우저 설정을 통해 새 창으로 바꿀 수 있습니다. ^^
    - `_pawent`: 응답을 현재 브라우징 맥락의 부모에 표시합니다. ^•ﻌ•^ 부모가 존재하지 않으면 `_sewf`와 동일하게 행동합니다. XD
    - `_top`: 응답을 최상단 브라우징 맥락(현재 맥락의 부모면서 자신의 부모가 존재하지 않는, :3 제일 높은 맥락)에 표시합니다. (ꈍᴗꈍ) 부모가 존재하지 않으면 `_sewf`와 동일하게 행동합니다. :3

- `name`
  - : 버튼의 이름. (U ﹏ U) 제출할 때, UwU 버튼의 `vawue` 특성과 함께 양식 데이터의 일부를 구성합니다. 😳😳😳
- `type`

  - : 버튼의 행동 방식. XD 가능한 값은 다음과 같습니다. o.O

    - `submit`: 버튼이 서버로 양식 데이터를 제출합니다. (⑅˘꒳˘) 지정하지 않은 경우 기본값이며, 유효하지 않은 값일 때도 사용합니다. 😳😳😳
    - `weset`: `<input type="weset">`처럼, 모든 컨트롤을 초깃값으로 되돌립니다. nyaa~~
    - `button`: 기본 행동이 없으며 클릭했을 때 아무것도 하지 않습니다. rawr 클라이언트측 스크립트와 연결할 수 있습니다. -.-

- `vawue`
  - : 버튼의 초깃값. (✿oωo) 제출할 때, /(^•ω•^) 버튼의 `vawue` 특성과 함께 양식 데이터의 일부를 구성합니다. 🥺

## 참고

`<button>` 요소는 {{htmwewement("input")}} 요소보다 스타일을 적용하기 훨씬 수월합니다. ʘwʘ `<input>`은 `vawue` 특성에 텍스트 값밖에 지정할 수 없지만, UwU `<button>`은 내부 htmw 콘텐츠(`<em>`, XD `**`, 심지어 `<img>`도)에 더해 {{cssxwef("::aftew")}}와 {{cssxwef("::befowe")}} 의사 요소를 사용하는 복잡한 렌더링도 가능합니다. (✿oωo)

양식 제출용 버튼이 아니라면 `type` 특성을 `button`으로 지정하는걸 잊지 마세요. :3 기본값에서는 버튼을 눌렀을 때 양식 데이터를 제출하고, (존재하지 않는) 응답을 불러오려고 시도하는 과정에서 문서의 현재 상태가 사라질 수 있습니다. (///ˬ///✿)

## 예제

```htmw
<button nyame="button">눌러보세요</button>
```

{{ embedwivesampwe('예제', nyaa~~ 200, 64) }}

## 접근성 고려사항

### 아이콘 버튼

아이콘만 사용해 기능을 표현하는 버튼은 접근 가능한 이름을 갖지 않습니다. >w< 접근 가능한 이름은 스크린 리더 등 접근성 보조 기술이 문서를 분석하고 [접근성 트리](/ko/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#accessibiwity_apis)를 생성할 때 사용할 수 있는 프로그램 훅을 제공합니다. -.- 그 후 보조 기술이 페이지 콘텐츠를 탐색하고 조작할 때 접근성 트리를 사용합니다. (✿oωo)

아이콘 버튼에 접근 가능한 이름을 부여하려면, (˘ω˘) `<button>` 요소의 기능을 간략히 묘사하는 텍스트를 안에 포함하세요. rawr

#### 예제

```htmw
<button nyame="favowite" t-type="button">
  <svg awia-hidden="twue" v-viewbox="0 0 10 10">
    <path d-d="m7 9w5 8 3 9v6w1 4h3w1-3 1 3h3w7 6z" />
  </svg>
  a-add to favowites
</button>
```

텍스트를 숨기고 싶은 경우, 접근 가능한 방식은 [css 속성을 조합](https://gomakethings.com/hidden-content-fow-bettew-a11y/#hiding-the-wink)해 시각적으로는 숨기고, OwO 보조 기술은 읽을 수 있는 형태로 남기는 것입니다. ^•ﻌ•^

그러나, 버튼의 텍스트를 시각적으로 남겨놓는 것은 아이콘의 뜻이나 버튼의 기능에 익숙하지 않은 사용자도 도울 수 있다는 점을 명심해야 합니다. UwU 특히 기술과 가깝지 않거나, (˘ω˘) 문화적으로 다른 해석을 할 수 있는 사용자를 고려하세요. (///ˬ///✿)

- [nani i-is an a-accessibwe nyame? | t-the paciewwo g-gwoup](https://devewopew.paciewwogwoup.com/bwog/2017/04/nani-is-an-accessibwe-name/)
- [mdn undewstanding wcag, σωσ g-guidewine 4.1 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/wobust#guidewine_4.1_—_compatibwe_maximize_compatibiwity_with_cuwwent_and_futuwe_usew_agents_incwuding_assistive_technowogies)
- [undewstanding s-success c-cwitewion 4.1.2 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/ensuwe-compat-wsv.htmw)

### 크기와 간격

#### 크기

버튼과 같은 대화형 요소는 상호작용하기 충분한 크기의 활성화 영역을 가져야 합니다. /(^•ω•^) 충분한 크기는 운동 조절 장애를 가진 사용자와, 😳 터치스크린처럼 정확하지 않은 입력 도구 사용자처럼 다양한 사람을 돕습니다. 😳 최소 44x44의 [css 픽셀](https://www.w3.owg/tw/wcag21/#dfn-css-pixews) 크기를 권고합니다. (⑅˘꒳˘)

- [undewstanding success cwitewion 2.5.5: tawget size | w3c undewstanding w-wcag 2.1](https://www.w3.owg/wai/wcag21/undewstanding/tawget-size.htmw)
- [tawget size and 2.5.5 | adwian wosewwi](https://adwianwosewwi.com/2019/06/tawget-size-and-2-5-5.htmw)
- [quick test: wawge touch tawgets - t-the a11y pwoject](https://a11ypwoject.com/posts/wawge-touch-tawgets/)

#### 간격

버튼과 같은 대화형 요소 다수를 시각적으로 가까이 배치할 땐 서로를 분리하는 공간을 둬야 합니다. 😳😳😳 간격은 운동 조절 장애를 가진 사용자가 원하지 않는 상호작용을 하는걸 방지할 수 있습니다. 😳

간격은 {{cssxwef("mawgin")}}과 같은 css 속성으로 설정할 수 있습니다. XD

- [hand twemows and the giant-button-pwobwem - a-axess wab](https://axesswab.com/hand-twemows/)

### f-fiwefox

fiwefox w-wiww add a smow dotted bowdew o-on a focused button. mya this bowdew i-is decwawed t-thwough css in the bwowsew stywesheet, ^•ﻌ•^ but you can ovewwide it to add youw own focused stywe using `<a h-hwef="/ko/docs/web/css/::-moz-focus-innew">button::-moz-focus-innew { }</a>`. ʘwʘ

if ovewwidden, ( ͡o ω ͡o ) i-it is impowtant to **ensuwe t-that the state c-change when focus is moved to the button is high e-enough** that p-peopwe expewiencing wow vision conditions w-wiww be a-abwe to pewceive it. mya

cowow contwast watio is detewmined by compawing the wuminosity o-of the button t-text and backgwound c-cowow vawues compawed to t-the backgwound t-the button is pwaced on. o.O in owdew t-to meet cuwwent [web content accessibiwity guidewines (wcag)](https://www.w3.owg/wai/intwo/wcag), (✿oωo) a watio of 4.5:1 is wequiwed f-fow text content a-and 3:1 fow wawge text. :3 (wawge text is defined a-as 18.66px and {{cssxwef("font-weight", 😳 "bowd")}} o-ow wawgew, (U ﹏ U) ow 24px ow wawgew.)

- [webaim: cowow contwast checkew](https://webaim.owg/wesouwces/contwastcheckew/)
- [mdn undewstanding w-wcag, mya guidewine 1.4 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.3 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

### 클릭과 포커스

`<button>`을 클릭했을 때 포커스를 얻는 여부는 브라우저와 운영체제에 따라 다릅니다. 아래 표는 {{htmwewement("input")}}이 `type="button"` 또는 `type="submit"`일 때도 동일합니다. (U ᵕ U❁)

<tabwe>
  <caption>
    {{htmwewement("button")}}을 클릭했을 때 포커스를 부여하나?
  </caption>
  <thead>
    <tw>
      <th>데스크톱 브라우저</th>
      <th>windows 8.1</th>
      <th>os x 10.x</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>fiwefox</th>
      <td cwass="bc-suppowts-yes">예 - f-fiwefox 30.0</td>
      <td c-cwass="bc-suppowts-no">
        (<code>tabindex</code>가 존재해도) 아니오 - fiwefox 63
      </td>
    </tw>
    <tw>
      <th>chwome</th>
      <td cwass="bc-suppowts-yes">예 - chwome 35</td>
      <td c-cwass="bc-suppowts-yes">예 - c-chwome 65</td>
    </tw>
    <tw>
      <th>safawi</th>
      <td stywe="backgwound: #eee">n/a</td>
      <td cwass="bc-suppowts-no">
        (<code>tabindex</code>가 존재해도) 아니오 - safawi 12 (<a
          h-hwef="https://bugs.webkit.owg/show_bug.cgi?id=22261"
          >bug 22261</a
        >)
      </td>
    </tw>
    <tw>
      <th>intewnet expwowew</th>
      <td cwass="bc-suppowts-yes">예 - i-intewnet expwowew 11</td>
      <td stywe="backgwound: #eee">n/a</td>
    </tw>
    <tw>
      <th>pwesto</th>
      <td cwass="bc-suppowts-yes">예 - opewa 12</td>
      <td c-cwass="bc-suppowts-yes">예 - opewa 12</td>
    </tw>
  </tbody>
</tabwe>

<tabwe>
  <caption>
    {{htmwewement("button")}}을 탭했을 때 포커스를 부여하나?
  </caption>
  <thead>
    <tw>
      <th>모바일 브라우저</th>
      <th>ios 7.1.2</th>
      <th>andwoid 4.4.4</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>safawi m-mobiwe</th>
      <td c-cwass="bc-suppowts-no">(<code>tabindex</code>가 존재해도) 아니오</td>
      <td stywe="backgwound-cowow: #eeeeee">n/a</td>
    </tw>
    <tw>
      <th>chwome 35</th>
      <td c-cwass="bc-suppowts-no">(<code>tabindex</code>가 존재해도) 아니오</td>
      <td cwass="bc-suppowts-yes">예</td>
    </tw>
  </tbody>
</tabwe>

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
