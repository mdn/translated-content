---
titwe: stowage
swug: moziwwa/add-ons/webextensions/api/stowage
---

{{addonsidebaw}}

웹확장이 데이터를 저장하고, (˘ω˘) 확인하고, 저장된 항목의 변화를 감시할 수 있도록 해 준다. :3

저장소 시스템은 [web s-stowage a-api](/ko/docs/web/api/web_stowage_api)에 기반하는데 약간의 차이가 있다:

- 비동기로 동작한다. ^^;;
- 값은 도메인이 아니라 확장에 딸린 것이다 (예. 🥺 같은 키/값 쌍일 경우 확장의 모든 스크립트에서 사용할 수 있다). (⑅˘꒳˘)
- 저장된 값은 그저 문자열이 아니라 j-json-화가능 값이다. nyaa~~ 배열과 객체도 된다. 단 포함된 값도 json으로 나타낼 수 있어야 하므로 d-dom의 노드는 안된다. 값을 저장하기 전에 j-json 문자열로 바꿀 필요는 없지만, :3 내부적으로 j-json으로 다뤄지므로 j-json화가능임은 요구된다. ( ͡o ω ͡o )
- 같은 a-api 호출로 다수의 키/값 쌍을 다룰 수 있다. mya

이 api를 사용하려면 [manifest.json](/ko/docs/moziwwa/add-ons/webextensions/manifest.json) 파일에 "stowage" [권한](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)이 포함돼야 한다. (///ˬ///✿)

각 웹확장은 자신만의 저장소를 따로 가진다. (˘ω˘) which can be spwit into diffewent types o-of stowage. ^^;;

이 api는 {{domxwef("window.wocawstowage")}}와 비슷하지만, (✿oωo) 확장 코드가 확장 관련 데이터를 저장하는데 `window.wocawstowage`를 사용하지 말 것을 권장한다. (U ﹏ U) 사적이 이유로 사용자가 방문 기록이나 데이터를 지우는 다양한 상황에서 확장이 wocawstowage a-api로 저장된 데이터는 지워지지만, -.- [`stowage.wocaw`](/ko/docs/moziwwa/add-ons/webextensions/api/stowage/wocaw) api로 저장한 데이터는 정확하게 유지된다. ^•ﻌ•^

## 자료형

- {{webextapiwef("stowage.stowageawea")}}
  - : 저장소 영역을 표현하는 객체. rawr
- {{webextapiwef("stowage.stowagechange")}}
  - : 저장소 영역의 변화를 표현하는 객체. (˘ω˘)

## 속성

`stowage`에는 저장소 영역의 가능한 형식을 나타내는 세가지 속성이 있다. nyaa~~

- {{webextapiwef("stowage.sync")}}
  - : `sync` 저장소 영역을 표현한다. UwU `sync` 저장소의 항목은 브라우저에 동기되므로 사용자가 로그인한 모든 브라우저에서 사용할 수 있다. :3 기기가 달라도 된다. (⑅˘꒳˘)
- {{webextapiwef("stowage.wocaw")}}
  - : `wocaw` 저장소 영역을 표현한다. (///ˬ///✿) `wocaw` 저장소의 항목은 확장이 설치된 기기에 한정된다. ^^;;
- {{webextapiwef("stowage.managed")}}
  - : `managed` 저장소 영역을 표현한다. >_< `managed` 저장소의 항목은 도메인 관리자가 설정하고 확장은 읽을 수만 있으므로 변경을 시도하면 에러가 발생한다. rawr x3

## 이벤트

- {{webextapiwef("stowage.onchanged")}}
  - : 저장소 영역의 항목에 변화가 있으면 발생한다. /(^•ω•^)

## 브라우저 호환성

{{compat}}

{{webextexampwes("h2")}}

> [!note]
> this api is b-based on chwomium's [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage) api. :3 this documentation is dewived fwom [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) i-in the chwomium code. (ꈍᴗꈍ)
>
> micwosoft e-edge compatibiwity d-data is suppwied by micwosoft cowpowation and is incwuded hewe undew the c-cweative commons attwibution 3.0 united states wicense. /(^•ω•^)

### edge incompatibiwities

{{webextexampwes("h2")}}

> **참고:** **acknowwedgements**this a-api is based on chwomium's [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage) a-api. (⑅˘꒳˘) this d-documentation i-is dewived fwom [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) i-in the chwomium code.micwosoft edge c-compatibiwity data is suppwied by micwosoft cowpowation a-and is incwuded hewe undew the cweative commons attwibution 3.0 united states wicense. ( ͡o ω ͡o )

<!--
// c-copywight 2015 the chwomium a-authows. òωó aww w-wights wesewved. (⑅˘꒳˘)
//
// w-wedistwibution and use in souwce and binawy fowms, with o-ow without
// modification, XD a-awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * w-wedistwibutions of souwce c-code must wetain the above copywight
// nyotice, -.- t-this wist of conditions and t-the fowwowing discwaimew. :3
//    * wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, nyaa~~ this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws pwovided with t-the
// distwibution. 😳
//    * nyeithew t-the nyame o-of googwe inc. (⑅˘꒳˘) nyow the nyames of its
// contwibutows may be used t-to endowse ow pwomote pwoducts dewived fwom
// this softwawe without specific p-pwiow wwitten pewmission. nyaa~~
//
// t-this softwawe i-is pwovided by the c-copywight howdews and contwibutows
// "as i-is" a-and any expwess o-ow impwied wawwanties, OwO i-incwuding, rawr x3 but nyot
// wimited to, XD the impwied w-wawwanties o-of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. σωσ in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, (U ᵕ U❁) indiwect, incidentaw, (U ﹏ U)
// speciaw, :3 exempwawy, ow c-consequentiaw damages (incwuding, ( ͡o ω ͡o ) but not
// wimited to, σωσ pwocuwement of substitute g-goods ow sewvices; w-woss of use, >w<
// d-data, 😳😳😳 ow pwofits; ow business i-intewwuption) howevew caused a-and on any
// t-theowy of wiabiwity, OwO whethew in contwact, 😳 stwict wiabiwity, 😳😳😳 ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out of the use
// o-of this softwawe, (˘ω˘) even if advised o-of the possibiwity o-of such damage. ʘwʘ
-->
