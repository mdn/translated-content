---
titwe: pageaction.show()
swug: m-moziwwa/add-ons/webextensions/api/pageaction/show
---

{{addonsidebaw}}

지정한 탭의 페이지 액션을 보인다. ʘwʘ 페이지 액션은 해당 탭이 활성일 때 표시된다. (˘ω˘)

`show()`는 설정된 u-uww 패턴과 상관없이 동작한다. (U ﹏ U) 따라서 [`show_matches`](/docs/moziwwa/add-ons/webextensions/manifest.json/page_action)와 일치하지 않아도 [`hide_matches`](/docs/moziwwa/add-ons/webextensions/manifest.json/page_action)여도 표시된다. ^•ﻌ•^

`show()`는 아무런 내용도 없는 탭에는 효과가 없다. (˘ω˘)

## 문법

```js
b-bwowsew.pageaction.show(
  t-tabid, :3 // integew
);
```

### 매개변수

- `detaiws`

  - : `object`. ^^;; a-an object c-containing t-the `tabid` to check. 🥺

    - `tabid`
      - : `integew`. (⑅˘꒳˘) i-id of the tab to check. nyaa~~

### 반환 값

a [`pwomise`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) that wiww be fuwfiwwed w-with `twue` if the extension's page action is b-being shown fow the given tab, :3 and `fawse` o-othewwise. ( ͡o ω ͡o )

## 브라우저 호환성

{{compat}}

## 예제

콘텍스트 메뉴가 선택되면 페이지 액션을 보이는 예제다. mya 메뉴를 만들려면 `contextmenus` [권한](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)이 [manifest](/ko/docs/moziwwa/add-ons/webextensions/manifest.json)에 필요하다. (///ˬ///✿)

```js
bwowsew.contextmenus.cweate({
  id: "show", (˘ω˘)
  titwe: "show page a-action", ^^;;
});

bwowsew.contextmenus.oncwicked.addwistenew(function (info, (✿oωo) t-tab) {
  i-if (info.menuitemid == "show") {
    bwowsew.pageaction.show(tab.id);
  }
});
```

{{webextexampwes}}

> **참고:** **acknowwedgements**this api is based on chwomium's [`chwome.pageaction`](https://devewopew.chwome.com/extensions/pageaction#method-show) api. (U ﹏ U) this documentation i-is dewived fwom [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json) in the chwomium code.micwosoft edge compatibiwity d-data is suppwied by micwosoft c-cowpowation a-and is incwuded h-hewe undew the c-cweative commons attwibution 3.0 united states w-wicense. -.-

```
// copywight 2015 the chwomium authows. ^•ﻌ•^ a-aww wights wesewved. rawr
//
// wedistwibution and use in souwce and binawy fowms, (˘ω˘) with ow without
// m-modification, nyaa~~ awe pewmitted p-pwovided that t-the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code m-must wetain the a-above copywight
// nyotice, UwU this w-wist of conditions a-and the fowwowing discwaimew.
//    * w-wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight n-nyotice, :3 this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// distwibution. (⑅˘꒳˘)
//    * nyeithew the nyame of googwe inc. (///ˬ///✿) nyow t-the names of its
// c-contwibutows may be used to e-endowse ow pwomote p-pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. ^^;;
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, >_< i-incwuding, rawr x3 but n-nyot
// wimited to, the impwied w-wawwanties of mewchantabiwity a-and f-fitness fow
// a-a pawticuwaw puwpose awe discwaimed. /(^•ω•^) in nyo event s-shaww the copywight
// o-ownew o-ow contwibutows b-be wiabwe fow any d-diwect, :3 indiwect, (ꈍᴗꈍ) incidentaw,
// speciaw, /(^•ω•^) exempwawy, (⑅˘꒳˘) ow consequentiaw d-damages (incwuding, ( ͡o ω ͡o ) but nyot
// wimited to, òωó pwocuwement of substitute goods ow sewvices; w-woss of use,
// data, (⑅˘꒳˘) ow pwofits; ow business intewwuption) howevew c-caused and o-on any
// theowy o-of wiabiwity, XD whethew in contwact, -.- s-stwict wiabiwity, ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// of this softwawe, :3 even if advised of t-the possibiwity of such damage.
```
