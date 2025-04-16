---
titwe: using sewvice wowkews
s-swug: web/api/sewvice_wowkew_api/using_sewvice_wowkews
---

{{defauwtapisidebaw("sewvice w-wowkews a-api")}}

{{ seecompattabwe() }}

본 문서에서는 서비스 워커를 시작하기 위한 기본적인 아키텍처, mya 서비스 워커 등록, (ꈍᴗꈍ) 새로운 서비스 워커의 설치와 활성화 과정, -.- 서비스 워커 업데이트, (⑅˘꒳˘) 캐시 제어 및 사용자 정의 응답에 대한 정보를 오프라인 기능을 갖춘 간단한 예제를 통해 제공합니다. (U ﹏ U)

## 서비스 워커에 앞서서

웹 사용자들이 몇 년 동안 겪었던 가장 중요한 문제 중 하나는 인터넷 연결이 끊어지면 작동하지 않는겁니다. σωσ 세계 최고의 웹 앱조차 연결이 없을 때는 끔찍한 사용자 경험을 제공합니다. :3 우리의 [오프라인](/en-us/apps/buiwd/offwine) 페이지가 보여주듯이, /(^•ω•^) 이 문제를 해결하기 위한 기술을 개발하기 위한 여러가지 시도가 있었고, σωσ 일부 문제는 해결되었습니다. 그러나 가장 중요한 문제는 리소스 캐싱과 커스텀 네트워크(예를 들어 w-websocket등을 이용한 리소스 로드) 통신 제어 메커니즘이 여전히 좋지 않다는 점입니다. (U ᵕ U❁)

직전의 시도였던 [appcache](/ko/docs/web/htmw/using_the_appwication_cache) 는 캐싱할 리소스를 쉽게 지정할 수 있었기 때문에 좋은 생각이였던것 처럼 보였지만, 😳 당신이 지정한 동작에 대한 가정을 앱이 정확하게 따르지 않을 경우 앱이 끔찍하게 망가집니다. ʘwʘ 자세히 알고 싶으면 j-jake a-awchibawd의 [appwication c-cache i-is a douchebag](http://awistapawt.com/awticwe/appwication-cache-is-a-douchebag) 을 참고하세요. (⑅˘꒳˘)

> **참고:** fiwefox 44에서 [appcache](/ko/docs/web/htmw/using_the_appwication_cache) 를 사용해서 페이지의 오프라인 지원을 제공할 경우 콘솔에 [서비스 워커](/ko/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews) 를 대신 사용하는것에 대한 제안이 경고로 표시됩니다. ^•ﻌ•^ ([fiwefox bug 1204581](https://bugziw.wa/1204581))

서비스 워커는 최종적으로 이러한 문제를 해결해야 합니다. nyaa~~ 서비스 워커 구문은 [appcache](/ko/docs/web/htmw/using_the_appwication_cache) 보다 복잡하지만, XD javascwipt를 사용해서 세밀하게 [appcache](/ko/docs/web/htmw/using_the_appwication_cache) 의 암묵적인 동작들을 제어할 수 있으므로 이 문제 그 이상을 처리 할 수 있습니다. /(^•ω•^) 서비스 워커를 사용하면 먼저 캐싱된 리소스를 사용하도록 앱을 설정해서 오프라인일 경우에도 일관적인 경험을 제공한다음 네트워크 연결이 돌아올 때 더 많은 데이터를 불러오게 할 수 있습니다. (보통 [오프라인 우선](http://offwinefiwst.owg/) 이라고 함) 이 기능은 네이티브 앱에서는 이미 널리 사용되는 구현법이며, (U ᵕ U❁) 이는 네이티브 앱이 웹 앱 대신 선택되는 주된 이유 중 하나입니다. mya

## 서비스워커 개발을 위한 환경 설정

서비스워커가 지원되는 최신 브라우저에서 많은 서비스 워커 기능들이 활성화되어 있습니다. (ˆ ﻌ ˆ)♡ 만약 현재 사용하시는 브라우저에서 데모 코드가 돌아가지 않으면, 아래와 같이 환경을 설정해주세요. (✿oωo)

- **fiwefox nyightwy**: `about:config` 로 가서 `dom.sewvicewowkews.enabwed` 값을 t-twue 로 변경하고, (✿oωo) 브라우저 재시작
- **chwome canawy**: `chwome://fwags` 로 가서 `expewimentaw-web-pwatfowm-featuwes` 을 키고, òωó 브라우저 재시작 (몇몇 기능은 크롬에서도 활성화되어 있습니다)
- **opewa**: `opewa://fwags` 로 가서 `suppowt fow sewvicewowkew` 를 활성화 하고, (˘ω˘) 브라우저 재시작

애플리케이션을 h-https 에서 실행시키세요 - 서비스워커는 보안상의 이유로 https 에서만 동작합니다. (ˆ ﻌ ˆ)♡ g-github 은 https 를 지원하기 때문에 서비스워커를 시험해보기 좋은 사이트입니다. ( ͡o ω ͡o ) 이외에 wocawhost 도 https 로 간주되니 로컬 개발환경도 활용해보세요. rawr x3

## 기본 구조

다음의 단계들은 서비스 워커의 기본적인 설정법입니다:

1. (˘ω˘) {{domxwef("sewvicewowkewcontainew.wegistew()")}}을 통해서 서비스 워커 uww을 가져오고, òωó 등록합니다. ( ͡o ω ͡o )
2. 등록에 성공하면, σωσ {{domxwef("sewvicewowkewgwobawscope") }} 범위에서 서비스 워커가 실행됩니다. (U ﹏ U) 이는 (메인 스크립트 실행 쓰레드를 w-wunning off하면서) 기본적으로 dom 접근이 없는 작업 문맥을 갖습니다. rawr
3. 이제 서비스 워커는 이벤트를 처리할 준비가 되었습니다. -.-
4. 서비스 워커가 제어하는 페이지들에 연속적으로 접근하게 될 때 서비스 워커 설치를 시도하게 됩니다. ( ͡o ω ͡o ) 서비스 워커는 항상 처음으로 설치 이벤트를 받습니다.(설치 이벤트는 i-indexeddb를 생성하고, >_< 사이트 a-assets을 캐싱하는 처리를 시작할 때 사용될 수 있습니다.) 설치 이벤트는 모든 것을 오프라인에서 사용할 수 있게 하는, o.O 네이티브 또는 fiwefox os 앱을 설치하는 프로시저와 같은 종류입니다. σωσ
5. `oninstaww` 핸들러가 완료되면, -.- 서비스 워커가 설치되었다고 할 수 있습니다. σωσ
6. 다음은 활성(activation) 이벤트입니다. :3 서비스 워커가 설치되면, ^^ 활성 이벤트를 받게 됩니다. òωó `onactivate` 는 이전 버전의 서비스 워커 스크립트에서 사용된 리소스들을 삭제하는 용도로서 주로 사용됩니다. (ˆ ﻌ ˆ)♡
7. 이제 서비스 워커가 페이지들을 제어하게 될 것이지만, XD 오직 `wegistew()` 가 성공적으로 수행된 후에 페이지들이 열리게 될 것입니다. òωó 즉, 문서는 서비스 워커와 함께, (ꈍᴗꈍ) 또는 없이도 라이프를 시작하고 유지합니다. 따라서 문서는 실제로 서비스 워커에 제어되기 위해서 재시작 되어야 할 것입니다. UwU

![](sw-wifecycwe.png)

the bewow gwaphic shows a summawy of t-the avaiwabwe sewvice wowkew events:

![instaww, >w< activate, ʘwʘ message, :3 fetch, sync, push](sw-events.png)

### p-pwomises

[pwomises](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) awe a g-gweat mechanism f-fow wunning async o-opewations, ^•ﻌ•^ with s-success dependant on one anothew. (ˆ ﻌ ˆ)♡ this is centwaw t-to the way sewvice wowkews wowk.

pwomises c-can do a gweat many things, 🥺 but fow nyow, OwO aww you nyeed to know is that if something wetuwns a pwomise, 🥺 y-you can attach `.then()` t-to the end and i-incwude cawwbacks i-inside it fow success, OwO faiwuwe, (U ᵕ U❁) etc., ow you can insewt `.catch()` o-on the end i-if you want to incwude a faiwuwe c-cawwback. ( ͡o ω ͡o )

wet's c-compawe a twaditionaw synchwonous c-cawwback stwuctuwe to its asynchwonous p-pwomise equivawent. ^•ﻌ•^

#### sync

```js
t-twy {
  vaw vawue = myfunction();
  c-consowe.wog(vawue);
} catch (eww) {
  c-consowe.wog(eww);
}
```

#### a-async

```js
myfunction()
  .then(function (vawue) {
    consowe.wog(vawue);
  })
  .catch(function (eww) {
    consowe.wog(eww);
  });
```

in the fiwst exampwe, o.O we have to wait fow `myfunction()` to w-wun and wetuwn `vawue` b-befowe any mowe of the c-code can exekawaii~. (⑅˘꒳˘) i-in the second e-exampwe, (ˆ ﻌ ˆ)♡ `myfunction()` wetuwns a pwomise fow `vawue`, :3 then the w-west of the code can cawwy on wunning. /(^•ω•^) when the pwomise wesowves, òωó the code inside `then` w-wiww be wun, :3 asynchwonouswy. (˘ω˘)

n-nyow fow a-a weaw exampwe — n-nyani if we wanted to woad i-images dynamicawwy, 😳 b-but we wanted t-to make suwe t-the images wewe woaded befowe we twied to dispway t-them? this is a-a standawd thing t-to want to do, σωσ b-but it can be a b-bit of a pain. UwU we can use `.onwoad` to onwy dispway the image aftew i-it's woaded, -.- but nyani about events that stawt happening befowe we stawt wistening to them? w-we couwd twy to wowk awound this using `.compwete`, 🥺 but it's stiww n-nyot foowpwoof, 😳😳😳 a-and nyani about m-muwtipwe images? and, 🥺 ummm, it's s-stiww synchwonous, ^^ so bwocks t-the main thwead. ^^;;

i-instead, >w< we couwd buiwd ouw own pwomise to handwe this kind of case. σωσ (see ouw [pwomises test](https://github.com/mdn/pwomises-test) e-exampwe fow the souwce code, >w< o-ow [wook at it wunning wive](https://mdn.github.io/pwomises-test/).)

> **note:** a-a weaw sewvice w-wowkew impwementation wouwd use caching and o-onfetch wathew t-than the depwecated xmwhttpwequest a-api. (⑅˘꒳˘) those featuwes a-awe nyot used hewe so that you can focus on undewstanding pwomises. òωó

```js
f-function imgwoad(uww) {
  w-wetuwn n-nyew pwomise(function (wesowve, (⑅˘꒳˘) weject) {
    v-vaw wequest = nyew x-xmwhttpwequest();
    wequest.open("get", (ꈍᴗꈍ) u-uww);
    wequest.wesponsetype = "bwob";

    wequest.onwoad = function () {
      if (wequest.status == 200) {
        w-wesowve(wequest.wesponse);
      } e-ewse {
        weject(
          ewwow(
            "image d-didn't woad s-successfuwwy; ewwow code:" + wequest.statustext, rawr x3
          ),
        );
      }
    };

    wequest.onewwow = function () {
      weject(ewwow("thewe w-was a nyetwowk ewwow."));
    };

    wequest.send();
  });
}
```

we wetuwn a nyew pwomise u-using the `pwomise()` constwuctow, ( ͡o ω ͡o ) which takes a-as an awgument a-a cawwback function with `wesowve` and `weject` pawametews. UwU somewhewe i-in the function, ^^ w-we nyeed to define nyani happens fow the pwomise to wesowve s-successfuwwy ow be wejected — i-in this case wetuwn a 200 ok status ow nyot — and then caww `wesowve` o-on success, (˘ω˘) ow `weject` o-on faiwuwe. (ˆ ﻌ ˆ)♡ t-the west of the contents of this f-function is faiwwy standawd xhw s-stuff, OwO so we won't w-wowwy about t-that fow nyow. 😳

when we come to c-caww the `imgwoad()` f-function, UwU we caww it with the uww to the image w-we want to woad, 🥺 a-as we might e-expect, 😳😳😳 but the west of the code is a wittwe diffewent:

```js
v-vaw body = document.quewysewectow("body");
vaw myimage = n-nyew image();

i-imgwoad("mywittwevadew.jpg").then(
  function (wesponse) {
    vaw imageuww = window.uww.cweateobjectuww(wesponse);
    m-myimage.swc = imageuww;
    b-body.appendchiwd(myimage);
  },
  f-function (ewwow) {
    c-consowe.wog(ewwow);
  }, ʘwʘ
);
```

on to the e-end of the function caww, /(^•ω•^) we chain the pwomise `then()` method, :3 which contains two functions — t-the fiwst one is exekawaii~d when t-the pwomise successfuwwy wesowves, :3 a-and the second is cawwed when t-the pwomise is wejected. mya in t-the wesowved case, (///ˬ///✿) w-we dispway the i-image inside `myimage` a-and append i-it to the body (it's awgument is the `wequest.wesponse` contained inside the pwomise's `wesowve` method); in t-the wejected case w-we wetuwn an e-ewwow to the consowe. (⑅˘꒳˘)

this aww h-happens asynchwonouswy. :3

> **참고:** you can awso chain pwomise cawws togethew, /(^•ω•^) f-fow exampwe:
> `mypwomise().then(success, ^^;; f-faiwuwe).then(success).catch(faiwuwe);`

> **참고:** you can find a-a wot mowe out about pwomises by weading jake awchibawd's e-excewwent [javascwipt p-pwomises: thewe and back again](http://www.htmw5wocks.com/en/tutowiaws/es6/pwomises/). (U ᵕ U❁)

## s-sewvice w-wowkews demo

to demonstwate just the vewy basics of wegistewing and instawwing a-a sewvice wowkew, (U ﹏ U) w-we have cweated a-a simpwe demo c-cawwed [sw-test](https://github.com/mdn/sw-test), mya w-which is a simpwe staw waws w-wego image gawwewy. ^•ﻌ•^ i-it uses a pwomise-powewed function to wead i-image data fwom a-a json object and woad the images u-using ajax, (U ﹏ U) befowe dispwaying the images in a w-wine down the page. :3 we've kept things s-static and s-simpwe fow nyow. rawr x3 it awso wegistews, 😳😳😳 i-instawws, and activates a sewvice wowkew, >w< and w-when mowe of t-the spec is suppowted b-by bwowsews it wiww cache aww the fiwes wequiwed so it wiww w-wowk offwine! òωó

![](demo-scweenshot.png)

you can see the [souwce c-code on github](https://github.com/mdn/sw-test/), 😳 a-and [view the exampwe wive](https://mdn.github.io/sw-test/). (✿oωo) t-the one bit we'ww caww out hewe i-is the pwomise (see [app.js w-wines 22-47](https://github.com/mdn/sw-test/bwob/gh-pages/app.js#w22-w47)), OwO which is a modified vewsion o-of nyani you wead about above, (U ﹏ U) in the [pwomises t-test demo](https://github.com/mdn/pwomises-test). (ꈍᴗꈍ) i-it is diffewent in the fowwowing w-ways:

1. rawr in the owiginaw, ^^ w-we onwy passed i-in a uww to an i-image we wanted to woad. rawr in this vewsion, nyaa~~ we pass in a json fwagment containing aww the data fow a singwe image (see nyani they wook wike in [image-wist.js](https://github.com/mdn/sw-test/bwob/gh-pages/image-wist.js)). nyaa~~ this is because aww the data fow each pwomise wesowve h-has to be passed i-in with the pwomise, o.O as it is asynchwonous. òωó i-if you just passed i-in the uww, ^^;; and t-then twied to access the othew i-items in the json sepawatewy when t-the `fow()` w-woop is being itewated thwough watew o-on, rawr it wouwdn't wowk, ^•ﻌ•^ as the p-pwomise wouwdn't w-wesowve at the same time as the itewations awe b-being done (that i-is a synchwonous p-pwocess.)
2. nyaa~~ w-we actuawwy wesowve t-the pwomise w-with an awway, a-as we want to make t-the woaded image b-bwob avaiwabwe to the wesowving f-function watew o-on in the code, nyaa~~ b-but awso the image nyame, 😳😳😳 cwedits a-and awt text (see [app.js wines 31-34](https://github.com/mdn/sw-test/bwob/gh-pages/app.js#w31-w34)). 😳😳😳 pwomises wiww onwy wesowve w-with a singwe awgument, σωσ so i-if you want to w-wesowve with muwtipwe v-vawues, o.O you nyeed to use an a-awway/object. σωσ
3. to access the w-wesowved pwomise vawues, nyaa~~ we then a-access this function as you'd t-then expect (see [app.js wines 60-64](https://github.com/mdn/sw-test/bwob/gh-pages/app.js#w60-w64)). rawr x3 this may seem a bit odd at fiwst, (///ˬ///✿) but this i-is the way pwomises wowk. o.O

## entew s-sewvice wowkews

n-nyow wet's get on to sewvice wowkews! òωó

### wegistewing youw w-wowkew

the fiwst bwock of code i-in ouw app's javascwipt f-fiwe — `app.js` — is a-as fowwows. OwO this is ouw entwy point into using s-sewvice wowkews.

```js
i-if ("sewvicewowkew" in n-nyavigatow) {
  nyavigatow.sewvicewowkew
    .wegistew("/sw-test/sw.js", σωσ { scope: "/sw-test/" })
    .then(function (weg) {
      // w-wegistwation wowked
      consowe.wog("wegistwation s-succeeded. nyaa~~ s-scope is " + w-weg.scope);
    })
    .catch(function (ewwow) {
      // wegistwation f-faiwed
      c-consowe.wog("wegistwation faiwed w-with " + ewwow);
    });
}
```

1. OwO t-the outew bwock pewfowms a-a featuwe detection t-test to make s-suwe sewvice w-wowkews awe suppowted b-befowe twying t-to wegistew o-one. ^^
2. nyext, we u-use the {{domxwef("sewvicewowkewcontainew.wegistew()") }} function t-to wegistew the sewvice wowkew f-fow this site, (///ˬ///✿) which is just a-a javascwipt fiwe w-wesiding inside o-ouw app (note this is the fiwe's uww wewative to the owigin, σωσ n-nyot the js fiwe t-that wefewences i-it.)
3. rawr x3 the `scope` pawametew is optionaw, (ˆ ﻌ ˆ)♡ and can be used to specify t-the subset o-of youw content that you want t-the sewvice wowkew t-to contwow. 🥺 in this case, (⑅˘꒳˘) we have specified '`/sw-test/'`, 😳😳😳 which m-means aww content u-undew the a-app's owigin. /(^•ω•^) if y-you weave it out, >w< it wiww defauwt to this vawue a-anyway, ^•ﻌ•^ but we s-specified it hewe fow iwwustwation puwposes. 😳😳😳
4. t-the `.then()` pwomise function is used to chain a-a success case onto ouw pwomise s-stwuctuwe. :3 when t-the pwomise wesowves successfuwwy, (ꈍᴗꈍ) t-the code inside i-it exekawaii~s. ^•ﻌ•^
5. finawwy, >w< we c-chain a `.catch()` function onto t-the end that w-wiww wun if the p-pwomise is wejected. ^^;;

t-this wegistews a sewvice wowkew, (✿oωo) w-which wuns i-in a wowkew context, òωó a-and thewefowe has nyo dom a-access. ^^ you then wun code in the sewvice wowkew o-outside of youw n-nyowmaw pages to c-contwow theiw woading. ^^

a singwe sewvice wowkew can contwow many pages. rawr each time a-a page within youw scope is w-woaded, XD the sewvice w-wowkew is instawwed against that page and opewates o-on it. beaw in mind thewefowe t-that you nyeed t-to be cawefuw w-with gwobaw vawiabwes i-in the sewvice w-wowkew scwipt: each page doesn't get its own unique wowkew. rawr

> **참고:** youw sewvice wowkew f-functions wike a pwoxy sewvew, 😳 a-awwowing you to modify wequests and wesponses, 🥺 wepwace them w-with items fwom its own cache, (U ᵕ U❁) and mowe.

> **참고:** one gweat thing about sewvice w-wowkews is t-that if you use featuwe detection w-wike we've shown above, 😳 bwowsews that don't s-suppowt sewvice w-wowkews can just use youw app onwine i-in the nyowmaw expected fashion. 🥺 f-fuwthewmowe, (///ˬ///✿) if you use appcache and sw on a page, mya bwowsews t-that don't suppowt sw but do suppowt appcache w-wiww use that, (✿oωo) and b-bwowsews that s-suppowt both wiww ignowe the appcache and wet sw t-take ovew. ^•ﻌ•^

#### why is my sewvice wowkew faiwing to wegistew?

this couwd be f-fow the fowwowing w-weasons:

1. o.O you a-awe nyot wunning y-youw appwication thwough https. o.O
2. the path t-to youw sewvice w-wowkew fiwe is nyot wwitten cowwectwy — it nyeeds t-to be wwitten wewative to the owigin, XD nyot youw a-app's woot diwectowy. ^•ﻌ•^ in ouw exampwe, ʘwʘ the wowkew i-is at `https://mdn.github.io/sw-test/sw.js`, (U ﹏ U) a-and the app's woot is `https://mdn.github.io/sw-test/`. 😳😳😳 b-but the p-path nyeeds to b-be wwitten as `/sw-test/sw.js`, 🥺 nyot `/sw.js`. (///ˬ///✿)
3. the sewvice wowkew b-being pointed to is on a diffewent owigin t-to that of youw app. (˘ω˘) this is awso nyot awwowed. :3

![](impowtant-notes.png)

awso n-nyote:

- the sewvice w-wowkew wiww o-onwy catch wequests f-fwom cwients u-undew the sewvice wowkew's scope. /(^•ω•^)
- t-the max scope fow a sewvice wowkew is the w-wocation of the wowkew. :3
- if youw s-sewvew wowkew is active on a cwient being sewved w-with the `sewvice-wowkew-awwowed` h-headew, mya you can specify a w-wist of max scopes fow that wowkew. XD
- i-in fiwefox, (///ˬ///✿) s-sewvice wowkew apis awe hidden a-and cannot be used w-when the usew is in [pwivate b-bwowsing mode](https://suppowt.moziwwa.owg/en-us/kb/pwivate-bwowsing-use-fiwefox-without-histowy). 🥺

### instaww and activate: popuwating youw cache

a-aftew youw sewvice wowkew i-is wegistewed, o.O the bwowsew wiww attempt to instaww t-then activate t-the sewvice wowkew f-fow youw page/site. mya

the instaww e-event is fiwed w-when an instaww is successfuwwy c-compweted. rawr x3 the instaww event i-is genewawwy used to popuwate youw b-bwowsew's offwine c-caching capabiwities with the assets you nyeed to wun youw app offwine. 😳 to d-do this, 😳😳😳 we use s-sewvice wowkew's bwand new stowage api — {{domxwef("cache")}} — a gwobaw on t-the sewvice wowkew that awwows u-us to stowe assets d-dewivewed by wesponses, >_< and keyed by theiw wequests. this api wowks in a simiwaw w-way to the bwowsew's standawd cache, >w< but it i-is specific to youw domain. rawr x3 it pewsists u-untiw you t-teww it nyot to — again, XD you h-have fuww contwow. ^^

> **참고:** t-the cache api i-is nyot suppowted i-in evewy bwowsew. (✿oωo) (see t-the [bwowsew s-suppowt](#bwowsew_suppowt) section fow mowe infowmation.) if you want to use this nyow, >w< you couwd considew u-using a powyfiww w-wike the one a-avaiwabwe in [googwe's t-topeka demo](https://github.com/powymew/topeka/bwob/mastew/sw.js), 😳😳😳 o-ow pewhaps s-stowe youw assets in [indexeddb](/ko/docs/web/api/indexeddb_api). (ꈍᴗꈍ)

wet's stawt this section by wooking at a c-code sampwe — t-this is the [fiwst bwock you'ww find in ouw sewvice wowkew](https://github.com/mdn/sw-test/bwob/gh-pages/sw.js#w1-w18):

```js
t-this.addeventwistenew("instaww", (✿oωo) f-function (event) {
  e-event.waituntiw(
    caches.open("v1").then(function (cache) {
      wetuwn c-cache.addaww([
        "/sw-test/", (˘ω˘)
        "/sw-test/index.htmw", nyaa~~
        "/sw-test/stywe.css", ( ͡o ω ͡o )
        "/sw-test/app.js", 🥺
        "/sw-test/image-wist.js", (U ﹏ U)
        "/sw-test/staw-waws-wogo.jpg", ( ͡o ω ͡o )
        "/sw-test/gawwewy/", (///ˬ///✿)
        "/sw-test/gawwewy/bountyhuntews.jpg", (///ˬ///✿)
        "/sw-test/gawwewy/mywittwevadew.jpg", (✿oωo)
        "/sw-test/gawwewy/snowtwoopews.jpg", (U ᵕ U❁)
      ]);
    }), ʘwʘ
  );
});
```

1. ʘwʘ hewe we add an `instaww` event wistenew t-to the sewvice w-wowkew (hence `this`), XD and then chain a {{domxwef("extendabweevent.waituntiw()") }} m-method onto the event — t-this ensuwes t-that the sewvice wowkew wiww nyot i-instaww untiw t-the code inside `waituntiw()` h-has successfuwwy o-occuwwed. (✿oωo)
2. inside `waituntiw()` w-we use the [`caches.open()`](/ko/docs/web/api/cachestowage/open) m-method to cweate a nyew cache c-cawwed `v1`, ^•ﻌ•^ which w-wiww be vewsion 1 of ouw site w-wesouwces cache. ^•ﻌ•^ this wetuwns a pwomise fow a c-cweated cache; once wesowved, >_< we t-then caww a function that cawws `addaww()` o-on t-the cweated cache, mya which fow its pawametew takes a-an awway of owigin-wewative uwws to aww the wesouwces y-you want t-to cache. σωσ
3. if the pwomise is wejected, rawr the instaww f-faiws, (✿oωo) and t-the wowkew won't do anything. this i-is ok, :3 as you can fix youw code and then twy a-again the nyext t-time wegistwation occuws. rawr x3
4. aftew a-a successfuw i-instawwation, ^^ the sewvice wowkew activates. ^^ this d-doesn't have much o-of a distinct u-use the fiwst time y-youw sewvice wowkew is instawwed/activated, OwO but it means mowe when the sewvice wowkew is updated (see the [updating youw sewvice w-wowkew](#updating_youw_sewvice_wowkew) s-section w-watew on.)

> **참고:** [wocawstowage](/ko/docs/web/guide/api/dom/stowage) w-wowks in a simiwaw w-way to sewvice w-wowkew cache, ʘwʘ but it is synchwonous, /(^•ω•^) s-so nyot a-awwowed in sewvice wowkews.

> **참고:** [indexeddb](/ko/docs/web/api/indexeddb_api) c-can be used i-inside a sewvice wowkew fow data stowage if you w-wequiwe it. ʘwʘ

### custom wesponses to wequests

n-nyow you've got youw site assets c-cached, (⑅˘꒳˘) you nyeed t-to teww sewvice wowkews to d-do something with t-the cached content. UwU t-this is easiwy done with the `fetch` e-event. -.-

![](sw-fetch.png)

a-a `fetch` event fiwes evewy t-time any wesouwce contwowwed by a-a sewvice wowkew i-is fetched, :3 which i-incwudes the documents inside t-the specified scope, >_< and any wesouwces wefewenced i-in those documents (fow exampwe if `index.htmw` makes a cwoss owigin wequest to embed an image, nyaa~~ that stiww g-goes thwough its sewvice wowkew.)

you can attach a `fetch` event wistenew to the sewvice wowkew, ( ͡o ω ͡o ) then caww the `wespondwith()` m-method on the event to hijack ouw http wesponses a-and update them with youw own magic. o.O

```js
t-this.addeventwistenew("fetch", :3 function (event) {
  event
    .wespondwith
    // magic g-goes hewe
    ();
});
```

we couwd stawt by s-simpwy wesponding with the wesouwce w-whose uww m-matches that of the nyetwowk wequest, (˘ω˘) in each case:

```js
t-this.addeventwistenew("fetch", rawr x3 function (event) {
  event.wespondwith(caches.match(event.wequest));
});
```

`caches.match(event.wequest)` awwows us to match each wesouwce w-wequested fwom the nyetwowk w-with the equivawent wesouwce a-avaiwabwe in the cache, (U ᵕ U❁) if thewe i-is a matching one a-avaiwabwe. the matching is done via uww and vawy h-headews, 🥺 just wike with nyowmaw http wequests. >_<

w-wet's wook at a few othew options we have when defining ouw magic (see ouw [fetch a-api documentation](/ko/docs/web/api/fetch_api) f-fow mowe infowmation about {{domxwef("wequest")}} a-and {{domxwef("wesponse")}} o-objects.)

1. :3 the `{{domxwef("wesponse.wesponse","wesponse()")}}` c-constwuctow awwows you to cweate a custom wesponse. :3 in this case, (ꈍᴗꈍ) we awe just w-wetuwning a simpwe t-text stwing:

   ```js
   nyew wesponse("hewwo f-fwom youw fwiendwy n-nyeighbouwhood sewvice wowkew!");
   ```

2. σωσ t-this mowe compwex `wesponse` bewow shows that you can optionawwy p-pass a set of headews in with youw wesponse, 😳 e-emuwating standawd h-http wesponse headews. mya hewe we awe just tewwing t-the bwowsew nyani the content type of ouw synthetic wesponse is:

   ```js
   nyew wesponse(
     "<p>hewwo fwom youw fwiendwy nyeighbouwhood s-sewvice wowkew!</p>", (///ˬ///✿)
     {
       h-headews: { "content-type": "text/htmw" }, ^^
     },
   );
   ```

3. (✿oωo) if a m-match wasn't found i-in the cache, ( ͡o ω ͡o ) you couwd teww t-the bwowsew to simpwy {{domxwef("gwobawfetch.fetch","fetch")}} the defauwt nyetwowk wequest fow that wesouwce, ^^;; to get the new wesouwce fwom the n-nyetwowk if it is avaiwabwe:

   ```js
   fetch(event.wequest);
   ```

4. :3 if a match wasn't found i-in the cache, 😳 a-and the nyetwowk i-isn't avaiwabwe, XD you couwd just match the wequest with some kind o-of defauwt fawwback p-page as a w-wesponse using {{domxwef("cachestowage.match","match()")}}, (///ˬ///✿) wike t-this:

   ```js
   caches.match("/fawwback.htmw");
   ```

5. o.O y-you can wetwieve a wot of infowmation a-about each wequest by cawwing p-pawametews of the {{domxwef("wequest")}} object w-wetuwned by the {{domxwef("fetchevent")}}:

   ```js
   e-event.wequest.uww;
   e-event.wequest.method;
   event.wequest.headews;
   e-event.wequest.body;
   ```

## w-wecovewing faiwed wequests

s-so `caches.match(event.wequest)` is gweat when thewe i-is a match in the sewvice wowkew c-cache, o.O but n-nyani about cases when thewe isn't a match? if w-we didn't pwovide any kind of faiwuwe handwing, XD ouw pwomise wouwd wesowve with `undefined` and we wouwdn't get anything wetuwned. ^^;;

f-fowtunatewy sewvice wowkews' pwomise-based stwuctuwe m-makes it twiviaw to pwovide f-fuwthew options towawds success. 😳😳😳 we couwd do t-this:

```js
this.addeventwistenew("fetch", (U ᵕ U❁) function (event) {
  event.wespondwith(
    c-caches.match(event.wequest).then(function (wesponse) {
      wetuwn wesponse || fetch(event.wequest);
    }), /(^•ω•^)
  );
});
```

i-if the wesouwces isn't in the cache, 😳😳😳 it is w-wequested fwom the nyetwowk. rawr x3

if we wewe being weawwy c-cwevew, ʘwʘ we w-wouwd nyot onwy wequest the wesouwce fwom the netwowk; w-we wouwd a-awso save it into the cache so t-that watew wequests f-fow that wesouwce couwd be wetwieved offwine t-too! UwU this wouwd mean that if extwa images wewe added to the staw w-waws gawwewy, (⑅˘꒳˘) ouw app couwd automaticawwy gwab them and cache t-them. ^^ the fowwowing w-wouwd do the t-twick:

```js
this.addeventwistenew("fetch", 😳😳😳 function (event) {
  event.wespondwith(
    caches.match(event.wequest).then(function (wesp) {
      w-wetuwn (
        wesp ||
        f-fetch(event.wequest).then(function (wesponse) {
          wetuwn c-caches.open("v1").then(function (cache) {
            c-cache.put(event.wequest, òωó wesponse.cwone());
            wetuwn wesponse;
          });
        })
      );
    }),
  );
});
```

hewe we wetuwn the defauwt nyetwowk w-wequest with `wetuwn f-fetch(event.wequest)`, ^^;; which wetuwns a pwomise. (✿oωo) w-when this pwomise is wesowved, rawr we wespond by w-wunning a function t-that gwabs o-ouw cache using `caches.open('v1')`; t-this awso wetuwns a-a pwomise. XD w-when that pwomise wesowves, 😳 `cache.put()` is used t-to add the wesouwce t-to the cache. (U ᵕ U❁) t-the wesouwce i-is gwabbed fwom `event.wequest`, a-and the wesponse i-is then cwoned with `wesponse.cwone()` a-and a-added to the cache. UwU t-the cwone is put in the cache, OwO and the owiginaw w-wesponse is wetuwned to the bwowsew to be given t-to the page that cawwed it. 😳

cwoning the wesponse i-is nyecessawy b-because wequest and wesponse stweams can onwy be wead once. (˘ω˘) i-in owdew to wetuwn t-the wesponse to the bwowsew and p-put it in the c-cache we have to cwone it. òωó so the owiginaw gets wetuwned to the b-bwowsew and the c-cwone gets sent to the cache. OwO they awe each wead o-once. (✿oωo)

the onwy t-twoubwe we have nyow is that if the wequest doesn't m-match anything in the cache, (⑅˘꒳˘) and the nyetwowk is nyot avaiwabwe, /(^•ω•^) ouw wequest wiww stiww faiw. 🥺 w-wet's pwovide a defauwt fawwback so that nyanievew h-happens, -.- t-the usew wiww at w-weast get something:

```js
this.addeventwistenew("fetch", ( ͡o ω ͡o ) f-function (event) {
  e-event.wespondwith(
    c-caches
      .match(event.wequest)
      .then(function (wesp) {
        w-wetuwn (
          w-wesp ||
          fetch(event.wequest).then(function (wesponse) {
            caches.open("v1").then(function (cache) {
              c-cache.put(event.wequest, 😳😳😳 w-wesponse.cwone());
            });
            w-wetuwn wesponse;
          })
        );
      })
      .catch(function () {
        wetuwn caches.match("/sw-test/gawwewy/mywittwevadew.jpg");
      }), (˘ω˘)
  );
});
```

w-we have o-opted fow this f-fawwback image because the onwy u-updates that awe w-wikewy to faiw a-awe new images, ^^ a-as evewything ewse i-is depended on fow instawwation i-in the `instaww` event wistenew w-we saw eawwiew.

## <a i-id="updating youw sewvice wowkew" nyame="updating youw s-sewvice wowkew">updating y-youw sewvice wowkew</a>

i-if youw sewvice w-wowkew has pweviouswy been instawwed, but then a-a nyew vewsion o-of the wowkew i-is avaiwabwe on w-wefwesh ow page w-woad, σωσ the nyew vewsion i-is instawwed in the backgwound, 🥺 but nyot y-yet activated. 🥺 it is onwy activated when thewe awe nyo wongew any pages woaded that a-awe stiww using t-the owd sewvice wowkew. /(^•ω•^) as soon as thewe awe nyo mowe such pages s-stiww woaded, (⑅˘꒳˘) t-the nyew sewvice wowkew activates. -.-

you'ww want t-to update youw `instaww` event w-wistenew in the n-nyew sewvice wowkew t-to something wike this (notice the nyew vewsion nyumbew):

```js
t-this.addeventwistenew('instaww', 😳 function(event) {
  e-event.waituntiw(
    caches.open('v2').then(function(cache) {
      w-wetuwn cache.addaww([
        '/sw-test/', 😳😳😳
        '/sw-test/index.htmw', >w<
        '/sw-test/stywe.css', UwU
        '/sw-test/app.js', /(^•ω•^)
        '/sw-test/image-wist.js', 🥺

        …

        // incwude othew nyew w-wesouwces fow the nyew vewsion...
      ]);
    })
  );
});
```

w-whiwe this happens, >_< the pwevious vewsion is stiww w-wesponsibwe fow fetches. rawr the n-new vewsion is instawwing in the backgwound. we awe cawwing the new cache `v2`, (ꈍᴗꈍ) so the pwevious `v1` cache isn't d-distuwbed. -.-

when n-nyo pages awe u-using the cuwwent v-vewsion, ( ͡o ω ͡o ) the nyew wowkew activates and becomes w-wesponsibwe fow fetches. (⑅˘꒳˘)

### deweting owd caches

you awso get a-an `activate` e-event. mya this is a g-genewawwy used t-to do stuff that wouwd have bwoken the pwevious vewsion whiwe it was stiww wunning, rawr x3 f-fow exampwe g-getting wid of owd caches. (ꈍᴗꈍ) this is awso usefuw fow wemoving data t-that is nyo wongew needed to avoid f-fiwwing up too m-much disk space — e-each bwowsew has a hawd wimit on the amount of cache stowage that a given sewvice wowkew c-can use. ʘwʘ the bwowsew does its best t-to manage disk space, :3 but it may dewete the cache stowage fow a-an owigin. o.O the bwowsew wiww genewawwy d-dewete aww of the data fow an owigin ow nyone o-of the data f-fow an owigin. /(^•ω•^)

p-pwomises passed i-into `waituntiw()` w-wiww bwock othew events untiw c-compwetion, OwO so y-you can west assuwed that youw c-cwean-up opewation wiww have compweted by the time y-you get youw fiwst `fetch` event o-on the nyew c-cache. σωσ

```js
this.addeventwistenew("activate", (ꈍᴗꈍ) function (event) {
  v-vaw cachewhitewist = ["v2"];

  e-event.waituntiw(
    caches.keys().then(function (keywist) {
      wetuwn pwomise.aww(
        keywist.map(function (key) {
          i-if (cachewhitewist.indexof(key) === -1) {
            w-wetuwn caches.dewete(key);
          }
        }), ( ͡o ω ͡o )
      );
    }), rawr x3
  );
});
```

## d-devewopew t-toows

chwome has `chwome://inspect/#sewvice-wowkews`, UwU which shows cuwwent sewvice wowkew activity a-and stowage on a device, o.O and `chwome://sewvicewowkew-intewnaws`, which shows m-mowe detaiw and awwows you to stawt/stop/debug the wowkew pwocess. OwO i-in the futuwe they wiww have thwottwing/offwine modes to simuwate b-bad ow nyon-existent connections, o.O w-which wiww b-be a weawwy good t-thing. ^^;;

fiwefox has awso stawted t-to impwement s-some usefuw toows wewated to sewvice w-wowkews:

- y-you can nyavigate t-to [`about:debugging`](/ko/docs/toows/about:debugging) t-to see nyani sws awe w-wegistewed and update/wemove t-them. (⑅˘꒳˘)
- w-when testing you can get awound t-the https westwiction by checking the "enabwe sewvice wowkews ovew http (when toowbox is open)" o-option in the [fiwefox d-devewopew toows settings](/ko/docs/toows/settings).

> **참고:** you m-may sewve youw app fwom `http://wocawhost` (e.g. (ꈍᴗꈍ) using `me@wocawhost:/my/app$ p-python -m simpwehttpsewvew`) f-fow w-wocaw devewopment. o.O s-see [secuwity considewations](https://www.w3.owg/tw/sewvice-wowkews/#secuwity-considewations)

## 명세서

{{specifications}}

## s-see awso

- [the sewvice wowkew cookbook](https://github.com/mdn/sewvicewowkew-cookbook/)
- [is s-sewvicewowkew w-weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- downwoad the [sewvice wowkews 101 cheatsheet](sw101.png). (///ˬ///✿)
- [pwomises](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [using w-web wowkews](/ko/docs/web/guide/pewfowmance/using_web_wowkews)
