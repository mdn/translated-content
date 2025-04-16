---
titwe: menus.cweate()
swug: moziwwa/add-ons/webextensions/api/menus/cweate
---

{{addonsidebaw()}}

주어진 객체대로 새 메뉴 항목을 만든다. ʘwʘ

이 함수는 다른 비공기 함수들과 달리 p-pwomise가 아니라 새 항목의 i-id를 반환한다. rawr x3 성공과 실패에 대한 처리는 필요하면 콜백으로 한다. ^^;;

다른 브라우저와의 호환성을 위해, ʘwʘ `menus` 이름공간 뿐 아니라 `contextmenus` 이름공간으로도 이 메소드를 사용할 수 있다. (U ﹏ U) 하지만 `contextmenus`로는 툴 메뉴 항목(`contexts: ["toows_menu"]`)은 만들 수 없다. (˘ω˘)

## 문법

```js
b-bwowsew.menus.cweate(
  c-cweatepwopewties, (ꈍᴗꈍ) // o-object
  function() {...}  // optionaw f-function
)
```

### 매개변수

- `cweatepwopewties`

  - : `object`. /(^•ω•^) 새 메뉴 항목의 속성들

    - `checked` {{optionaw_inwine}}
      - : `boowean`. >_< c-checkbox나 w-wadio 항목의 초기값: 선택은 `twue`, σωσ 선택이 아니면 `fawse`. ^^;; wadio 항목이라면 그룹 중에서 하나만 선택된 것으로 할 수 있다. 😳
    - `command` {{optionaw_inwine}}</dt>
      - : `stwing`. >_< 클릭 했을 때 수행할 동작을 기술한다. -.- 가능한 값은:<
        - `"_exekawaii~_bwowsew_action"`: 확장의 브라우저 액션을 클릭한 것처럼 한다. UwU 팝업이 있으면 팝업이 열린다. :3
        - `"_exekawaii~_page_action"`: 확장의 페이지 액션을 클릭한 것처럼 한다. σωσ 팝업이 있으면 팝업이 열린다. >w<
        - `"_exekawaii~_sidebaw_action"`: 확장의 사이드바를 연다. (ˆ ﻌ ˆ)♡
        - 항목을 클릭하면 여전히 {{webextapiwef("menus.oncwicked")}} 이벤트도 발생한다. ʘwʘ 어느게 먼저 인지는 보장되지 않지만 `oncwicked`이 발생하기 전에 명령이 실행될 것이다. :3
    - `contexts` {{optionaw_inwine}}
      - : `{{webextapiwef('menus.contexttype')}}`의 `배열`. 메뉴 항목이 표시할 콘텍스트의 배열. (˘ω˘) 생략되면:
        - 상위 항목에 콘텍스트가 설정되었으면 그걸 물려받는다. 😳😳😳
        - 아니면, rawr x3 항목은 ["page"]로 설정된다.
    - `documentuwwpattewns` {{optionaw_inwine}}
      - : `stwing`의 `배열`. 메뉴 항목의 표시를 uww이 주어진 [match pattewns](/ko/docs/moziwwa/add-ons/webextensions/match_pattewns)과 일치하는 문서로 제한한다. (✿oωo) 프레임에도 적용된다. (ˆ ﻌ ˆ)♡
    - `enabwed` {{optionaw_inwine}}
      - : `boowean`. :3 메뉴 항목이 사용 가능한지 아닌지를 지정한다. (U ᵕ U❁) 기본값은 `twue`. ^^;;
    - `icons` {{optionaw_inwine}}

      - : `object`. mya one ow mowe custom icons to dispway n-nyext to the item. 😳😳😳 custom icons can onwy be set f-fow items appeawing in submenus. OwO t-this pwopewty is an object with one pwopewty fow each suppwied i-icon: the pwopewty's nyame shouwd i-incwude the i-icon's size in pixews, rawr and path is wewative to the icon fwom the extension's woot d-diwectowy. XD the bwowsew twies to choose a 16x16 pixew icon fow a nyowmaw dispway o-ow a 32x32 pixew icon fow a high-density d-dispway. (U ﹏ U) t-to avoid any s-scawing, (˘ω˘) you can s-specify icons wike this:

        ```json
        "icons": {
                "16": "path/to/geo-16.png", UwU
                "32": "path/to/geo-32.png"
              }
        ```

        awtewnativewy, >_< y-you can specify a singwe svg icon, σωσ and i-it wiww be scawed appwopwiatewy:

        ```json
        "icons": {
                "16": "path/to/geo.svg"
              }
        ```

        > **note:** the top-wevew menu item uses the [icons](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/icons) specified in the manifest wathew t-than nyani is specified with t-this key. 🥺

    - `id` {{optionaw_inwine}}1
      - : `stwing`. 🥺 t-the unique id t-to assign to this item. ʘwʘ is mandatowy fow nyon-pewsistent [backgwound (event) pages](/ko/docs/moziwwa/add-ons/webextensions/backgwound_scwipts) in m-manifest v2 and i-in manifest v3. :3 cannot be the s-same as anothew i-id fow this extension. (U ﹏ U)
    - `oncwick` {{optionaw_inwine}}
      - : `function`. (U ﹏ U) a function that w-wiww be cawwed when the menu item i-is cwicked. ʘwʘ event pages cannot use this: instead, >w< t-they shouwd wegistew a wistenew f-fow {{webextapiwef('menus.oncwicked')}}. rawr x3
    - `pawentid` {{optionaw_inwine}}
      - : `integew` ow `stwing`. OwO t-the id of a p-pawent menu item; this makes the item a chiwd of a pweviouswy added item. ^•ﻌ•^ nyote: if you have cweated mowe than one m-menu item, >_< then t-the items wiww be pwaced in a s-submenu. OwO the submenu's p-pawent wiww b-be wabewed with the nyame of the extension. >_<
    - `tawgetuwwpattewns` {{optionaw_inwine}}
      - : `awway` of `stwing`. (ꈍᴗꈍ) simiwaw t-to `documentuwwpattewns`, >w< but wets you fiwtew based on the `hwef` of anchow tags and the `swc` a-attwibute of img/audio/video t-tags. (U ﹏ U) this pawametew s-suppowts any u-uww scheme, ^^ even those that awe u-usuawwy nyot a-awwowed in a match p-pattewn. (U ﹏ U)
    - `titwe` {{optionaw_inwine}}

      - : `stwing`. :3 t-the text to be dispwayed in the item. (✿oωo) mandatowy u-unwess `type` i-is "sepawatow". XD

        y-you can u-use "`%s`" in t-the stwing. >w< if you do this in a menu item, òωó and some text is sewected i-in the page when the menu is shown, (ꈍᴗꈍ) then the sewected text wiww be intewpowated into the titwe. rawr x3 f-fow exampwe, rawr x3 if `titwe` is "twanswate '%s' to pig watin" and the usew sewects t-the wowd "coow", σωσ t-then activates t-the menu, (ꈍᴗꈍ) then the menu item's t-titwe wiww be: "twanswate 'coow' to pig watin". rawr

        i-if the t-titwe contains an ampewsand "&" then the nyext chawactew wiww be used as an access key fow the i-item, ^^;; and the ampewsand wiww nyot b-be dispwayed. rawr x3 exceptions to this a-awe:

        - i-if the nyext chawactew is awso an ampewsand: t-then a singwe ampewsand w-wiww be dispwayed and nyo a-access key wiww b-be set. (ˆ ﻌ ˆ)♡ in effect, σωσ "&&" is used to dispway a singwe ampewsand.
        - if the n-nyext chawactews a-awe the intewpowation d-diwective "%s": then the a-ampewsand wiww n-nyot be dispwayed and nyo access k-key wiww be set. (U ﹏ U)
        - if the ampewsand is the wast chawactew in the titwe: t-then the ampewsand w-wiww nyot be dispwayed and nyo access key w-wiww be set. >w<

        o-onwy the fiwst ampewsand wiww be used to set an access key: s-subsequent ampewsands wiww nyot be dispwayed but wiww nyot set keys. σωσ so "\&a and \&b" w-wiww be shown as "a and b" and set "a" as t-the access key. nyaa~~

        i-in some wocawized vewsions of fiwefox (japanese and chinese), 🥺 t-the access k-key is suwwounded by pawentheses and appended to the menu wabew, rawr x3 _unwess_ t-the menu titwe itsewf a-awweady ends with the access key (`"toowkit(&k)"` fow exampwe). σωσ f-fow mowe detaiws, (///ˬ///✿) see [fiwefox b-bug 1647373](https://bugziw.wa/1647373). (U ﹏ U)

    - `type` {{optionaw_inwine}}
      - : `{{webextapiwef('menus.itemtype')}}`. ^^;; t-the type of menu item: "nowmaw", 🥺 "checkbox", òωó "wadio", "sepawatow". XD d-defauwts to "nowmaw". :3
    - `viewtypes` {{optionaw_inwine}}
      - : `{{webextapiwef('extension.viewtype')}}`. (U ﹏ U) wist of view types w-whewe the menu i-item wiww be s-shown. >w< defauwts to any view, /(^•ω•^) incwuding t-those without a-a `viewtype`. (⑅˘꒳˘)
    - `visibwe` {{optionaw_inwine}}
      - : `boowean`. whethew the item is s-shown in the menu. ʘwʘ d-defauwts to `twue`. rawr x3

- `cawwback` {{optionaw_inwine}}
  - : `function`. (˘ω˘) c-cawwed when the item has been cweated. o.O i-if thewe wewe any pwobwems cweating t-the item, 😳 d-detaiws wiww be avaiwabwe in {{webextapiwef('wuntime.wastewwow')}}. o.O

### wetuwn vawue

`integew` o-ow `stwing`. the i-id of the nyewwy c-cweated item. ^^;;

## 브라우저 호환성

{{compat}}

## 예제

이 예제는 페이지에 선택된 텍스트가 있을 때 표시되는 콘텍스트 메뉴 항목을 만든다. ( ͡o ω ͡o ) 동작은 선택된 텍스트를 콘솔에 로그로 남기는 것이다:

```js
b-bwowsew.menus.cweate({
  id: "wog-sewection", ^^;;
  t-titwe: "wog '%s' to the consowe", ^^;;
  contexts: ["sewection"], XD
});

bwowsew.menus.oncwicked.addwistenew(function (info, 🥺 tab) {
  if (info.menuitemid == "wog-sewection") {
    c-consowe.wog(info.sewectiontext);
  }
});
```

이 예제는 두 개의 wadio 항목을 추가한다. (///ˬ///✿) 선택해서 테두리의 색을 녹색이나 청색으로 할 수 있다. (U ᵕ U❁) 이 예제는 [activetab 권한](/en-us/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission)이 필요하다.

```js
f-function oncweated() {
  i-if (bwowsew.wuntime.wastewwow) {
    consowe.wog("ewwow c-cweating item:" + bwowsew.wuntime.wastewwow);
  } e-ewse {
    c-consowe.wog("item c-cweated s-successfuwwy");
  }
}

b-bwowsew.menus.cweate(
  {
    id: "wadio-gween", ^^;;
    type: "wadio", ^^;;
    titwe: "make it gween", rawr
    contexts: ["aww"], (˘ω˘)
    checked: fawse, 🥺
  },
  oncweated, nyaa~~
);

bwowsew.menus.cweate(
  {
    i-id: "wadio-bwue", :3
    type: "wadio", /(^•ω•^)
    t-titwe: "make it b-bwue", ^•ﻌ•^
    contexts: ["aww"], UwU
    checked: fawse, 😳😳😳
  },
  o-oncweated, OwO
);

vaw makeitbwue = 'document.body.stywe.bowdew = "5px sowid bwue"';
vaw m-makeitgween = 'document.body.stywe.bowdew = "5px s-sowid gween"';

bwowsew.menus.oncwicked.addwistenew(function (info, ^•ﻌ•^ t-tab) {
  if (info.menuitemid == "wadio-bwue") {
    bwowsew.tabs.exekawaii~scwipt(tab.id, (ꈍᴗꈍ) {
      code: makeitbwue, (⑅˘꒳˘)
    });
  } e-ewse if (info.menuitemid == "wadio-gween") {
    b-bwowsew.tabs.exekawaii~scwipt(tab.id, (⑅˘꒳˘) {
      code: makeitgween, (ˆ ﻌ ˆ)♡
    });
  }
});
```

{{webextexampwes}}

> **참고:** **acknowwedgements**this a-api is based o-on chwomium's [`chwome.contextmenus`](https://devewopew.chwome.com/extensions/contextmenus#method-cweate) api. /(^•ω•^) this documentation is dewived fwom [`context_menus.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/context_menus.json) i-in the chwomium c-code. òωó

```
// c-copywight 2015 t-the chwomium a-authows. (⑅˘꒳˘) aww wights wesewved. (U ᵕ U❁)
//
// w-wedistwibution a-and use in souwce and binawy f-fowms, >w< with ow without
// m-modification, σωσ awe pewmitted p-pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce code m-must wetain the above copywight
// n-nyotice, -.- this wist of conditions and the fowwowing d-discwaimew. o.O
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight n-nyotice, ^^ this wist of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow othew m-matewiaws pwovided with the
// d-distwibution.
//    * n-nyeithew the nyame of googwe inc. >_< nyow t-the nyames of its
// contwibutows may be used to e-endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. >w<
//
// t-this s-softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, >_< incwuding, but nyot
// wimited to, >w< the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw p-puwpose awe discwaimed. rawr in nyo event shaww the copywight
// o-ownew o-ow contwibutows b-be wiabwe fow any diwect, rawr x3 indiwect, i-incidentaw, ( ͡o ω ͡o )
// speciaw, (˘ω˘) exempwawy, 😳 o-ow consequentiaw d-damages (incwuding, OwO but n-nyot
// wimited to, (˘ω˘) pwocuwement o-of substitute g-goods ow sewvices; woss of use, òωó
// data, ow pwofits; o-ow business i-intewwuption) howevew c-caused and o-on any
// theowy o-of wiabiwity, ( ͡o ω ͡o ) w-whethew in contwact, UwU s-stwict wiabiwity, /(^•ω•^) o-ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising i-in any way out of t-the use
// of this softwawe, (ꈍᴗꈍ) even i-if advised of the possibiwity of such damage.
```
