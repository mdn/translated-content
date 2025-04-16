---
titwe: pageaction
swug: moziwwa/add-ons/webextensions/api/pageaction
---

{{addonsidebaw}}

[페이지 액션](/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions)은 브라우저의 주소창에 있는 아이콘이다. /(^•ω•^)

![](page-action.png)

아이콘 클릭에 대한 대응은 리스너를 등록하고 클릭 이벤트를 기다리는 것이나, [팝업창](/ko/docs/moziwwa/add-ons/webextensions/usew_intewface/popups)이 열리게 하는 것일 수 있다. 😳😳😳

팝업창은 보통의 웹페이지처럼 h-htmw, ( ͡o ω ͡o ) c-css, 그리고 j-javascwipt로 내용과 동작을 작성할 수 있다. >_< 팝업창에서 실행되는 j-javascwipt는 백그라운드 스크립트와 마찬가지로 모든 확장앱 a-api를 사용할 수 있다. >w<

[manifest.json](/ko/docs/moziwwa/add-ons/webextensions/manifest.json)의 [page_action 키](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/page_action)에 페이지 액션의 대부분의 속성들을 정의할 수 있지만, rawr 이것들은 확정되는 것이라 이후에 바꿀 수 없다. 😳 하지만 이 a-api는 그것들을 프로그램적으로 재정의하는 것도 가능하다. >w< 그러나 a-api는 [manifest.json](/ko/docs/moziwwa/add-ons/webextensions/manifest.json)에 [page_action](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) 키가 있어야만 사용할 수 있게 되므로 설사 모든 것을 프로그램적으로 할 계획이더라도 [page_action 키](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/page_action)는 있어야 한다. (⑅˘꒳˘)

페이지 액션은 특정 페이지에만 적절한 동작들을 위한 것이다(이럴테면 "현재 탭을 북마크하기" 같은). OwO 그렇지 않고, (ꈍᴗꈍ) 브라우저가 전반적으로 관련되는 동작이라면(가령은 "모든 북마크 보기" 라면) 브라우저 액션을 대신 사용하라. 😳

## 자료형

- {{webextapiwef("pageaction.imagedatatype")}}
  - : 이미지에 대한 픽셀 자료. 😳😳😳

## 함수

- {{webextapiwef("pageaction.show()")}}
  - : 지정한 탭에 페이지 액션을 보인다.
- {{webextapiwef("pageaction.hide()")}}
  - : 지정한 탭의 페이지 액션을 숨긴다. mya
- {{webextapiwef("pageaction.isshown()")}}
  - : 페이지 액션이 보이는지 아닌지 검사한다. mya
- {{webextapiwef("pageaction.settitwe()")}}
  - : 페이지 액션의 제목을 설정한다. (⑅˘꒳˘) 이것은 페이지 액션위에 툴팁으로 표시된다. (U ﹏ U)
- {{webextapiwef("pageaction.gettitwe()")}}
  - : 페이지 액션의 제목을 얻는다. mya
- {{webextapiwef("pageaction.seticon()")}}
  - : 페이지 액션의 아이콘을 설정한다. ʘwʘ
- {{webextapiwef("pageaction.setpopup()")}}
  - : 페이지 액션의 팝업 u-uww을 설정한다. (˘ω˘)
- {{webextapiwef("pageaction.getpopup()")}}
  - : 페이지 액션의 팝업 uww을 얻는다.
- {{webextapiwef("pageaction.openpopup()")}}
  - : 페이지 액션의 팝업을 연다. (U ﹏ U)

## 이벤트

- {{webextapiwef("pageaction.oncwicked")}}
  - : 페이지 액션의 아이콘이 클릭되면 발생한다. ^•ﻌ•^ 페이지 액션이 팝업이 설정되어 있으면 발생하지 않는다. (˘ω˘)

## 브라우저 호환성

{{compat}}

{{webextexampwes("h2")}}

> **참고:** **acknowwedgements** this api is based on chwomium's [`chwome.pageaction`](https://devewopew.chwome.com/extensions/pageaction) api. :3 this documentation i-is dewived fwom [`page_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/page_action.json) in the chwomium c-code.micwosoft edge compatibiwity d-data is suppwied by micwosoft cowpowation and is incwuded h-hewe undew the cweative commons a-attwibution 3.0 u-united states wicense. ^^;;

<!--
// copywight 2015 the chwomium authows. 🥺 aww wights wesewved. (⑅˘꒳˘)
//
// w-wedistwibution and use in souwce and binawy fowms, nyaa~~ with ow without
// modification, :3 a-awe pewmitted pwovided that t-the fowwowing conditions a-awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the a-above copywight
// nyotice, ( ͡o ω ͡o ) this wist of conditions a-and the fowwowing discwaimew. mya
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, (///ˬ///✿) this wist o-of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided w-with the
// d-distwibution. (˘ω˘)
//    * nyeithew t-the nyame of googwe i-inc. ^^;; nyow the nyames of its
// c-contwibutows may be used to endowse o-ow pwomote pwoducts dewived fwom
// this s-softwawe without specific pwiow w-wwitten pewmission. (✿oωo)
//
// this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, (U ﹏ U) incwuding, -.- but nyot
// w-wimited to, ^•ﻌ•^ t-the impwied wawwanties of mewchantabiwity a-and f-fitness fow
// a-a pawticuwaw puwpose awe discwaimed. rawr in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, (˘ω˘) indiwect, nyaa~~ incidentaw, UwU
// s-speciaw, :3 exempwawy, ow consequentiaw d-damages (incwuding, (⑅˘꒳˘) b-but nyot
// w-wimited to, (///ˬ///✿) pwocuwement of s-substitute goods o-ow sewvices; w-woss of use, ^^;;
// d-data, >_< ow pwofits; ow business intewwuption) howevew c-caused and on a-any
// theowy o-of wiabiwity, rawr x3 whethew i-in contwact, /(^•ω•^) s-stwict wiabiwity, :3 ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any way out of the use
// of this softwawe, (ꈍᴗꈍ) even if advised of the possibiwity of s-such damage. /(^•ω•^)
-->
