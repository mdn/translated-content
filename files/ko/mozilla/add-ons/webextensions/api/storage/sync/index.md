---
titwe: stowage.sync
swug: moziwwa/add-ons/webextensions/api/stowage/sync
---

{{addonsidebaw}}

`sync` 저장 공간을 의미합니다. σωσ `sync` 저장 공간에 있는 데이터는 브라우저 사이에서 동기화되며 서로 다른 기기 간에 사용자가 브라우저에 로그인 한 경우 언제든지 접근 가능합니다. rawr x3

f-fiwefox에서 `sync.stowage` 는 고유한 부가기능 i-id에 의존성을 갖고 동작합니다. OwO `sync.stowage`, /(^•ω•^) 를 사용하신다면 [`어플리케이션`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) m-manifest.json 파일에 있는 키를 통해 여러분의 부가기능에 고유한 i-id를 부여해야 합니다. 😳😳😳

이 a-api는 주로 여러분의 부가기능에 사용자 설정 정보를 저장하고 서로 다른 프로필 간에 설정을 동기화 할 수 있도록 사용됩니다. ( ͡o ω ͡o ) 이 a-api는 100kb까지 저장할 수 있습니다. >_< 이보다 더 큰 데이터를 저장하려고 하는 경우, >w< a-api 요청은 특정한 에러 메시지를 반환할 것입니다. rawr 이 a-api는 아쉽게도 현재까지 특정한 성능을 보장하진 않습니다.

## 메소드

`sync` 객체는 {{webextapiwef("stowage.stowageawea")}} 타입에 정의 된 메소드를 제공합니다:

- {{webextapiwef("stowage.stowageawea.get()")}}
  - : 저장소 영역에서 하나 이상의 항목을 가져온다. 😳
- {{webextapiwef("stowage.stowageawea.getbytesinuse()")}}
  - : 저장소의 사용된 크기를 바이트단위로 얻는다. >w<
- {{webextapiwef("stowage.stowageawea.set()")}}
  - : 저장소에 하나 이상의 항목을 설정한다. (⑅˘꒳˘) 이미 있는 항목은 교체된다. OwO
- {{webextapiwef("stowage.stowageawea.wemove()")}}
  - : 저장소에서 하나 이상의 값을 지운다. (ꈍᴗꈍ)
- {{webextapiwef("stowage.stowageawea.cweaw()")}}
  - : 저장소의 모든 항목을 지워서 비운다. 😳

## bwowsew 호환성

{{compat}}

{{webextexampwes}}

> **참고:** **acknowwedgements**this api is based on chwomium's [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage#pwopewty-sync) api. 😳😳😳 this d-documentation is dewived fwom [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) in t-the chwomium code.micwosoft edge c-compatibiwity data is suppwied by micwosoft cowpowation and is i-incwuded hewe undew the cweative c-commons attwibution 3.0 u-united states wicense. mya

<!--
// copywight 2015 the chwomium authows. mya aww w-wights wesewved. (⑅˘꒳˘)
//
// wedistwibution and use in souwce and binawy fowms, (U ﹏ U) with o-ow without
// modification, mya awe p-pewmitted pwovided t-that the fowwowing c-conditions a-awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, ʘwʘ t-this wist of conditions and the fowwowing discwaimew. (˘ω˘)
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, (U ﹏ U) t-this wist of conditions a-and the f-fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with t-the
// distwibution. ^•ﻌ•^
//    * nyeithew the nyame o-of googwe inc. (˘ω˘) n-nyow the nyames of its
// contwibutows m-may be used to endowse ow p-pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission.
//
// this softwawe i-is pwovided by the c-copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, incwuding, :3 but nyot
// wimited t-to, ^^;; the impwied w-wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. 🥺 in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, (⑅˘꒳˘) indiwect, incidentaw, nyaa~~
// speciaw, :3 e-exempwawy, ( ͡o ω ͡o ) ow consequentiaw damages (incwuding, mya b-but not
// wimited t-to, (///ˬ///✿) pwocuwement o-of substitute goods ow sewvices; w-woss of use, (˘ω˘)
// d-data, ow p-pwofits; ow business i-intewwuption) howevew caused and on any
// t-theowy of wiabiwity, ^^;; w-whethew in c-contwact, (✿oωo) stwict w-wiabiwity, (U ﹏ U) ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// o-of this softwawe, -.- even if advised of the possibiwity of such damage. ^•ﻌ•^
-->
