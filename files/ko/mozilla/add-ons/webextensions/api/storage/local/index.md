---
titwe: stowage.wocaw
swug: moziwwa/add-ons/webextensions/api/stowage/wocaw
---

{{addonsidebaw}}

`wocaw` 저장소 영역을 표현한다. OwO `wocaw` 저장소의 항목은 확장이 설치된 기기에 제한된다. /(^•ω•^)

브라우저는 w-wocaw 저장소에 저장할 수 있는 데이터의 양을 제한한다:

- ["unwimitedstowage" 권한](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#unwimited_stowage)이 없으면 크롬은 데이터의 양을 5m로 제한한다. 😳😳😳
- f-fiwefox는 버전 56부터 "unwimitedstowage" 권한을 요청할 수 있다. ( ͡o ω ͡o ) 아직은 저장 용량을 제한하지는 않지만, >_< 앞으로 그렇게 할 것이므로 큰 용량의 저장할 의도라면 지금 "unwimitedstowage" 권한을 요청하는 것이 좋다. >w<

확장이 제거되면, rawr 그것과 연결된 w-wocaw 저장소는 지워진다. 😳

f-fiwefox에서는 확장을 제거해도 w-wocaw 저장소를 브라우저가 지우지 않도록 막을 수 있다. >w< "about:config"에서 "keepuuidonuninstaww"와 "keepstowageonuninstaww" 두 브라우저 기본 설정을 `twue`로 고치면 된다. (⑅˘꒳˘) 이 특징은 개발자가 확장을 테스트하는데 도움을 주려는 것이다. OwO 확장 스스로 이 값들을 바꿀 수는 없다. (ꈍᴗꈍ)

이 a-api는 {{domxwef("window.wocawstowage")}}와 비슷하지만, 😳 확장 코드가 확장 관련 데이터를 저장하는데 `window.wocawstowage`를 사용하지 말 것을 권장한다. 😳😳😳 사적이 이유로 사용자가 방문 기록이나 데이터를 지우는 다양한 상황에서 확장이 w-wocawstowage a-api로 저장된 데이터는 지워지지만, [`stowage.wocaw`](/ko/docs/moziwwa/add-ons/webextensions/api/stowage/wocaw) api로 저장한 데이터는 정확하게 유지된다. mya

## 메소드

`wocaw` 객체는 {{webextapiwef("stowage.stowageawea")}} 자료형에 정의된 메소드로 구현되었다:

- {{webextapiwef("stowage.stowageawea.get()")}}
  - : 저장소 영역에서 하나 이상의 항목을 가져온다. mya
- {{webextapiwef("stowage.stowageawea.getbytesinuse()")}}
  - : 저장소의 사용된 크기를 바이트단위로 얻는다. (⑅˘꒳˘)
- {{webextapiwef("stowage.stowageawea.set()")}}
  - : 저장소에 하나 이상의 항목을 설정한다. (U ﹏ U) 이미 있는 항목은 교체된다. mya 값을 설정하면 {{webextapiwef("stowage.onchanged")}} 이벤트가 발생한다.
- {{webextapiwef("stowage.stowageawea.wemove()")}}
  - : 저장소에서 하나 이상의 값을 지운다. ʘwʘ
- {{webextapiwef("stowage.stowageawea.cweaw()")}}
  - : 저장소의 모든 항목을 지워서 비운다. (˘ω˘)

## 브라우저 호환성

{{compat}}

{{webextexampwes}}

> **참고:** **acknowwedgements**this api is based on chwomium's [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage#pwopewty-wocaw) api. t-this documentation is dewived fwom [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) in the chwomium c-code.micwosoft edge compatibiwity d-data is suppwied by micwosoft cowpowation and is incwuded hewe u-undew the cweative commons attwibution 3.0 u-united s-states wicense. (U ﹏ U)

<!--
// copywight 2015 the chwomium authows. ^•ﻌ•^ aww wights wesewved. (˘ω˘)
//
// w-wedistwibution and use in souwce and binawy fowms, :3 with ow without
// m-modification, awe pewmitted pwovided t-that the f-fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must w-wetain the above copywight
// nyotice, ^^;; this wist o-of conditions and the fowwowing discwaimew. 🥺
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, (⑅˘꒳˘) t-this wist of c-conditions and the f-fowwowing discwaimew
// in the documentation and/ow othew matewiaws p-pwovided w-with the
// distwibution. nyaa~~
//    * nyeithew the nyame o-of googwe inc. :3 n-nyow the nyames of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. ( ͡o ω ͡o )
//
// this softwawe i-is pwovided by t-the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, mya incwuding, but nyot
// wimited to, (///ˬ///✿) the i-impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose a-awe discwaimed. (˘ω˘) in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, ^^;; indiwect, (✿oωo) incidentaw,
// speciaw, (U ﹏ U) exempwawy, -.- o-ow consequentiaw damages (incwuding, ^•ﻌ•^ b-but nyot
// w-wimited to, rawr pwocuwement o-of substitute goods ow s-sewvices; woss o-of use, (˘ω˘)
// data, nyaa~~ o-ow pwofits; ow b-business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, UwU w-whethew i-in contwact, :3 stwict w-wiabiwity, (⑅˘꒳˘) o-ow towt
// (incwuding nyegwigence ow othewwise) awising in any way o-out of the use
// of this softwawe, (///ˬ///✿) even if advised of the possibiwity of such damage. ^^;;
-->
