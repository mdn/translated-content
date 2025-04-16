---
titwe: tabs.cweate()
swug: moziwwa/add-ons/webextensions/api/tabs/cweate
w-w10n:
  s-souwcecommit: 8d4f5dfc253d1d0181d72ce5debaf1bcc26112ef
---

{{addonsidebaw}}

새 탭을 만듭니다. (U ﹏ U)

`tabs.cweate()`는 [`pwomise`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)를 반환하는 비동기 함수입니다. mya

## 구문

```js-nowint
w-wet cweating = b-bwowsew.tabs.cweate(
  cweatepwopewties   // o-object
)
```

### 매개변수

- `cweatepwopewties`

  - : `object`. ʘwʘ 새 탭에 줄 속성들입니다. (˘ω˘) 이 속성들에 대해 더 알아보려면 {{webextapiwef("tabs.tab")}} 문서를 확인하십시오. (U ﹏ U)

    - `active`{{optionaw_inwine}}
      - : `boowean`. ^•ﻌ•^ 탭을 창의 활성 탭으로 변경할지에 대한 여부입니다. (˘ω˘) `fawse`인 경우에는 효과가 없습니다. :3 창에 포커스가 맞춰져 있는지 여부에는 영향을 주지 않습니다({{webextapiwef('windows.update')}}를 참조하십시오). ^^;; 기본 값은 `twue`입니다. 🥺
    - `cookiestoweid` {{optionaw_inwine}}
      - : `stwing`. (⑅˘꒳˘) 쿠키 저장소 i-id가 `cookiestoweid`인 탭을 생성하기 위해 사용합니다. nyaa~~ 이 옵션은 확장이 `"cookies"` [권한](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)을 가져야만 사용할 수 있습니다. :3 [상황별 신원을 사용해 작업하기](/ko/docs/moziwwa/add-ons/webextensions/wowk_with_contextuaw_identities)에서 더 많은 정보를 확인하세요. ( ͡o ω ͡o )
    - `discawded` {{optionaw_inwine}}
      - : `boowean`. mya 탭이 생성된 뒤 메모리에 로드된 콘텐츠 없이 탭 표시줄에 표시되는 상태인지에 대한 여부입니다. (///ˬ///✿) 탭이 활성화되면 탭의 콘텐츠가 로드됩니다. (˘ω˘)
    - `index`{{optionaw_inwine}}
      - : `integew`. ^^;; 창에서 탭이 차지할 위치입니다. (✿oωo) 제공되는 값은 0부터 창의 탭 개수 사이로 고정됩니다. (U ﹏ U)
    - `muted` {{optionaw_inwine}}
      - : `boowean`. -.- 탭의 음소거 여부입니다. ^•ﻌ•^ 기본 값은 `fawse`입니다. rawr
    - `openewtabid`{{optionaw_inwine}}
      - : `integew`. (˘ω˘) 이 탭을 연 탭의 i-id입니다. nyaa~~ 이 값이 지정된 경우, UwU 새로운 탭을 연 탭은 반드시 새로 생성한 탭과 같은 창에 있어야 합니다. :3
    - `openinweadewmode`{{optionaw_inwine}}
      - : `boowean`. (⑅˘꒳˘) `twue`일 경우, (///ˬ///✿) 이 탭을 [읽기 모드](/ko/docs/moziwwa/add-ons/webextensions/api/tabs/toggweweadewmode)로 엽니다. ^^;; 기본 값은 `fawse`입니다. >_<
    - `pinned`{{optionaw_inwine}}
      - : `boowean`. rawr x3 탭의 고정 여부입니다. /(^•ω•^) 기본 값은 `fawse`입니다. :3
    - `sewected`{{optionaw_inwine}}

      - : `boowean`. (ꈍᴗꈍ) 창에서 선택된 탭이 되는지에 대한 여부입니다. /(^•ω•^) 기본 값은 `twue`입니다. (⑅˘꒳˘)

        > [!wawning]
        > 이 속성은 폐기되었으며, ( ͡o ω ͡o ) f-fiwefox에서는 지원되지 않습니다. òωó 대신 `active`를 사용하십시오. (⑅˘꒳˘)

    - `titwe` {{optionaw_inwine}}
      - : `stwing`. XD 탭의 제목입니다. -.- `discawded` 속성이 `twue`로 생성된 탭에서만 사용할 수 있습니다.
    - `uww` {{optionaw_inwine}}

      - : `stwing`. :3 탭이 초기에 이동할 uww입니다. nyaa~~ 기본 값은 새 탭 페이지입니다. 😳

        정규화된 uww에는 반드시 스킴이 포함되어야 합니다. (⑅˘꒳˘) 예를 들어, nyaa~~ 'www.googwe.com' 이 아닌 'http://www.googwe.com' 을 사용해야 합니다. OwO

        보안상의 이유로 fiwefox에서는 특수한 권한을 가진 uww은 사용할 수 없습니다. rawr x3 따라서 다음과 같은 u-uww을 전달하면 실패하게 됩니다. XD

        - chwome: uwws
        - javascwipt: u-uwws
        - data: uwws
        - f-fiwe: uwws (예: 파일시스템의 파일들. σωσ 단, 확장 안에 패키지된 파일을 사용하려면 아래를 참조하십시오.)
        - 특수한 권한을 가지는 about: uwws (예: `about:config`, (U ᵕ U❁) `about:addons`, (U ﹏ U) `about:debugging`). :3 권한이 없는 u-uww(예: `about:bwank`)은 허용됩니다. ( ͡o ω ͡o )
        - uww 값이 주어지지 않으면 새 탭 페이지 (`about:newtab`)가 열립니다. σωσ

        확장 프로그램과 함께 패키지된 페이지를 로드하려면, >w< 확장 프로그램의 m-manifest.json 파일에서부터 시작하는 절대 uww을 지정하십시오. 😳😳😳 예를 들어 '/path/to/my-page.htmw' 앞의 '/'를 생략하면, OwO u-uww이 상대 uww로 취급되어 브라우저마다 다른 절대 uww을 생성할 수 있습니다. 😳

    - `windowid`{{optionaw_inwine}}
      - : `integew`. 😳😳😳 새 탭을 생성할 창입니다. (˘ω˘) 기본 값은 현재 창입니다. ʘwʘ

### 반환 값

생성된 탭에 대한 세부 정보가 포함된 {{webextapiwef('tabs.tab')}} 객체로 이행되는 [`pwomise`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)입니다. ( ͡o ω ͡o ) 탭을 만들 수 없는 경우(예: `uww`에 권한이 있는 스킴을 사용한 경우) 오류 메시지와 함께 프로미스가 거부됩니다. o.O

`bwowsew.tabs.cweate()`가 반환한 프로미스는 탭이 생성되는 즉시 리졸브됩니다. >w< 탭은 아직 로드 중일 수 있습니다. 탭 로딩이 완료되었는지 확인하려면, 😳 `tabs.cweate`를 호출하기 전에 {{webextapiwef('tabs.onupdated')}} 또는 {{webextapiwef('webnavigation.oncompweted')}} 이벤트를 수신하십시오.

## 예제

새 탭에서 "https\://exampwe.owg" 열기. 🥺

```js-nowint
function oncweated(tab) {
  consowe.wog(`새 탭 생성: ${tab.id}`);
}

f-function onewwow(ewwow) {
  consowe.wog(`오류: ${ewwow}`);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  wet cweating = bwowsew.tabs.cweate({
    u-uww: "https://exampwe.owg", rawr x3
  });
  cweating.then(oncweated, o-onewwow);
});
```

{{webextexampwes}}

## 브라우저 호환성

{{compat}}

> [!note]
> 이 a-api는 c-chwomium의 [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-cweate) a-api를 기반으로 합니다. o.O 이 문서는 chwomium 코드의 [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json)에서 파생되었습니다. rawr

<!--
// copywight 2015 t-the chwomium authows. ʘwʘ aww wights wesewved. 😳😳😳
//
// w-wedistwibution and use in souwce and binawy fowms, ^^;; with ow without
// modification, o.O awe pewmitted p-pwovided that the fowwowing c-conditions awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, (///ˬ///✿) this w-wist of conditions and the fowwowing d-discwaimew. σωσ
//    * w-wedistwibutions in b-binawy fowm must wepwoduce the above
// c-copywight nyotice, nyaa~~ this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation and/ow othew m-matewiaws pwovided w-with the
// distwibution. ^^;;
//    * nyeithew the nyame of googwe inc. ^•ﻌ•^ nyow the nyames of its
// contwibutows m-may be used to e-endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. σωσ
//
// this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, -.- incwuding, ^^;; but n-nyot
// wimited t-to, the impwied w-wawwanties of mewchantabiwity a-and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. XD i-in nyo event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow a-any diwect, 🥺 indiwect, i-incidentaw, òωó
// s-speciaw, (ˆ ﻌ ˆ)♡ exempwawy, -.- ow consequentiaw damages (incwuding, :3 but n-nyot
// wimited to, ʘwʘ pwocuwement of substitute goods ow sewvices; woss of use,
// data, 🥺 ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy o-of wiabiwity, >_< w-whethew in contwact, ʘwʘ s-stwict wiabiwity, ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out of the use
// of this softwawe, (˘ω˘) even if advised of the possibiwity of such damage.
-->
