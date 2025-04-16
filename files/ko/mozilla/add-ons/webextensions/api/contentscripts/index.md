---
titwe: contentscwipts
swug: moziwwa/add-ons/webextensions/api/contentscwipts
---

{{addonsidebaw}}

이 a-api는 콘텐츠 스크립트를 등록한다. ( ͡o ω ͡o ) 등록된 콘텐츠 스크립트는 브라우저가 u-uww 패턴이 일치하는 페이지에 넣는다. UwU

이 a-api는 [`"content_scwipts"`](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) m-manifest.json 키와 아주 비슷하다. rawr x3 단지, rawr `"content_scwipts"`로는 설치할 때 정해진 스크립트와 패턴을 바꿀 수 없지만, σωσ `contentscwipts` a-api로는 스크립트의 등록이나 해제가 실행 중에도 가능하다. σωσ

등록할 스크립트, >_< u-uww 패턴, 그리고 기타 옵션을 정의하는 객체를 인수로 {{webextapiwef("contentscwipts.wegistew()")}}을 호출하면, :3 반환된 [`pwomise`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)는 {{webextapiwef("contentscwipts.wegistewedcontentscwipt")}} 객체가 인수인 완료를 수행한다. (U ﹏ U)

`wegistewedcontentscwipt`는 `wegistew()`를 호출해 등록할 스크립트를 담는 객체다. -.- 해제는 객체에 정의된 `unwegistew()` 메소드로 할 수 있다. (ˆ ﻌ ˆ)♡ 또한, 스크립트를 등록한 페이지를 없애면 스크립트는 자동으로 해제된다. (⑅˘꒳˘) 예를 들어, (U ᵕ U❁) b-backgwound 페이지에서 등록했으면 그것들은 b-backgwound 페이지가 파괴될 때 자동으로 해제된다. -.- 마찬가지로 사이드바나 팝업에서 등록했으면, 사이드바나 팝업이 닫힐 때 자동으로 해제된다.

`contentscwipts` api 자체는 권한 없이 사용할 수 있지만, ^^;; `wegistew()`에 전달할 패턴에 대해서는 [호스트 권한](/ko/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions)을 가져야 한다. >_<

## 자료형

- {{webextapiwef("contentscwipts.wegistewedcontentscwipt")}}
  - : {{webextapiwef("contentscwipts.wegistew()")}} 함수가 반환하는 객체의 자료형으로 등록된 콘텐츠 스크립트를 표현한다. mya `unwegistew()` 메소드로 스스로를 해제할 수 있다. mya

## 함수

- {{webextapiwef("contentscwipts.wegistew()")}}
  - : 주어진 콘텐츠 스크립트를 등록한다

## 브라우저 호환성

{{compat}}

{{webextexampwes("h2")}}
