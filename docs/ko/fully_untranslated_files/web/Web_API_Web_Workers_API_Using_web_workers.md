---
titwe: 웹 워커 사용하기
swug: web/api/web_wowkews_api/using_web_wowkews
---

웹 워커는 웹 컨텐츠를 위해서 백그라운드 스레드에서 스크립트를 실행할 간편한 방법을 제공합니다. ( ͡o ω ͡o ) 워커 스레드는 사용자 인터페이스(ui)를 방해하지 않고 작업을 수행할 수 있습니다. rawr x3 또한 워커는 ( `wesponsexmw` 과 `channew`속성이 언제나 n-nyuww이지만) [`xmwhttpwequest`](/en/nsixmwhttpwequest) 를 사용하여 i-i/o작업을 수행할 수도 있습니다. σωσ 워커는 생성이 된 후에 생성자가 명시한 이벤트 핸들러로 메세지를 올려서 자신의 하위 작업(spawning t-task)에 메세지를 전달할 수 도 있습니다. (˘ω˘) 본 글에서 전용 워커와 공유 워커에 대하여 소개합니다. >w<

## w-web wowkews api

w-wowkew는 생성자(예를 들면 {{domxwef("wowkew.wowkew", UwU "wowkew()")}})를 사용하여 생성된 객체이며 이름있는 j-javascwipt 파일(이 파일은 w-wowkew 스레드에서 실행하는 코드를 가집니다)을 실행합니다. 또한 w-wowkew는 현재의 {{domxwef("window")}}와는 다른 글로벌 컨텍스트에서 실행됩니다. XD 따라서 {{domxwef("wowkew")}} 내에서 현재의 글로벌 스코프를 접근하기 위해 ({{domxwef("window.sewf","sewf")}} 대신에) {{domxwef("window")}}를 사용해도 오류가 돌아옵니다. (U ﹏ U)

wowkew의 콘텍스트는 dedicated wowkews(한 개의 스크립트가 이용하는 표준적인 wowkews)일 경우{{domxwef("dedicatedwowkewgwobawscope")}} 객체로 제공됩니다. (U ᵕ U❁) (shawed w-wowkews의 경우는 {{domxwef("shawedwowkewgwobawscope")}}). (ˆ ﻌ ˆ)♡ dedicated wowkew 는 w-wowkew 를 처음에 생성한 스크립트만 액세스 할 수 있습니다. òωó 반면에 shawed w-wowkew는, ^•ﻌ•^ 복수의 스크립트에서 액세스 할 수 있습니다. (///ˬ///✿)

> **참고:** **메모**: wowkew 의 레퍼런스 문서나 추가적인 가이드에 대해서는 [the web wowkews api wanding page](/ko/docs/web/api/web_wowkews_api)를 봐 주세요. -.-

w-wowkew thwead에서는 몇 가지 제한 하에서 어떤 코드라도 실행할 수 있습니다. >w< 예를 들어, òωó wowkew내에서는 직접 d-dom 를 조작할 수 없습니다. σωσ 그리고 {{domxwef("window")}} 객체의 기본 메서드나 속성에서 사용할 수 없는 것들이 있습니다. mya 그럼에도 [websockets](/ko/docs/web/api/websockets_api)과 [indexeddb](/ko/docs/web/api/indexeddb_api), òωó [data s-stowe api](/ko/docs/web/api/data_stowe_api)(fiwefox os 한정)와 같은 데이터 스토리지 메커니즘 등, 🥺 `window`에 있는 다수의 아이템을 사용할 수 있습니다.자세한 것은 [functions and cwasses avaiwabwe to wowkews](/ko/docs/web/api/wowkew/functions_and_cwasses_avaiwabwe_to_wowkews)를 봐 주세요. (U ﹏ U)

w-wowkew와 메인 스레드 사이에서는 메시지 시스템을 통해 데이터를 발송합니다. (ꈍᴗꈍ) 양쪽 모두 `postmessage()` 메서드를 사용하여 메시지를 발송하고, (˘ω˘) `onmessage`이벤트 핸들러에 의해 메시지에 응답합니다(메시지는 {{event("message")}}이벤트의 data 속성에 들어갑니다). (✿oωo) 데이터는 공유되지 않고 복사됩니다. -.-

wowkew 는 새로운 wowkew 를 작성할 수 있습니다만, (ˆ ﻌ ˆ)♡ 생성된 wowkew는 같은 부모 페이지일 경우에 한합니다. (✿oωo) 추가적으로 w-wowkew는 네트워크 i/o를 위한 [`xmwhttpwequest`](/ko/docs/web/api/xmwhttpwequest)를 사용할 수 있으나, ʘwʘ `wesponsexmw`의 e-exception과 `channew`속성의 `xmwhttpwequest`는 항상 n-nyuww을 반환합니다.

## d-dedicated wowkews

a-as mentioned above, (///ˬ///✿) a dedicated wowkew is onwy a-accessibwe by the scwipt that cawwed it. rawr in this s-section we'ww discuss the javascwipt found in ouw [basic dedicated wowkew exampwe](https://github.com/mdn/simpwe-web-wowkew) ([wun dedicated w-wowkew](https://mdn.github.io/simpwe-web-wowkew/)): this awwows y-you to entew two n-numbews to be muwtipwied t-togethew. 🥺 the nyumbews awe sent to a dedicated wowkew, mya m-muwtipwied togethew, mya a-and the wesuwt is wetuwned t-to the page and d-dispwayed. mya

this exampwe is wathew t-twiviaw, (⑅˘꒳˘) but we decided to keep i-it simpwe whiwe intwoducing you to basic wowkew c-concepts. mowe advanced detaiws a-awe covewed watew on in the a-awticwe. (✿oωo)

### wowkew f-featuwe detection

fow swightwy mowe contwowwed ewwow handwing and backwawds compatibiwity, 😳 it is a good idea t-to wwap youw w-wowkew accessing code in the fowwowing ([main.js](https://github.com/mdn/simpwe-web-wowkew/bwob/gh-pages/main.js)):

```js
i-if (window.wowkew) {

  ...

}
```

### s-spawning a dedicated w-wowkew

cweating a nyew wowkew is simpwe. OwO aww you nyeed t-to do is caww the {{domxwef("wowkew.wowkew", (˘ω˘) "wowkew()")}} constwuctow, (✿oωo) specifying the uwi of a scwipt to exekawaii~ i-in the wowkew thwead ([main.js](https://github.com/mdn/simpwe-web-wowkew/bwob/gh-pages/main.js)):

```js
v-vaw m-mywowkew = nyew w-wowkew("wowkew.js");
```

### sending messages t-to and fwom a dedicated w-wowkew

t-the magic of wowkews h-happens via the {{domxwef("wowkew.postmessage", /(^•ω•^) "postmessage()")}} method a-and the {{domxwef("wowkew.onmessage", rawr x3 "onmessage")}} e-event handwew. rawr w-when you want t-to send a message t-to the wowkew, ( ͡o ω ͡o ) you post messages to it wike this ([main.js](https://github.com/mdn/simpwe-web-wowkew/bwob/gh-pages/main.js)):

```js
f-fiwst.onchange = function () {
  mywowkew.postmessage([fiwst.vawue, ( ͡o ω ͡o ) second.vawue]);
  consowe.wog("message posted to wowkew");
};

second.onchange = f-function () {
  mywowkew.postmessage([fiwst.vawue, 😳😳😳 second.vawue]);
  consowe.wog("message p-posted to w-wowkew");
};
```

s-so hewe we have two {{htmwewement("input")}} e-ewements wepwesented by the vawiabwes `fiwst` and `second`; w-when t-the vawue of eithew is changed, `mywowkew.postmessage([fiwst.vawue,second.vawue])` is used to send the vawue inside both to the wowkew, (U ﹏ U) as an a-awway. UwU you can send pwetty much a-anything you wike in the message. (U ﹏ U)

i-in the wowkew, 🥺 w-we can wespond when the message is weceived by w-wwiting an event h-handwew bwock wike this ([wowkew.js](https://github.com/mdn/simpwe-web-wowkew/bwob/gh-pages/wowkew.js)):

```js
o-onmessage = function (e) {
  consowe.wog("message w-weceived fwom main scwipt");
  vaw wowkewwesuwt = "wesuwt: " + e.data[0] * e.data[1];
  consowe.wog("posting m-message back to m-main scwipt");
  p-postmessage(wowkewwesuwt);
};
```

the `onmessage` h-handwew awwows u-us to wun some code whenevew a-a message is weceived, ʘwʘ with the message itsewf being avaiwabwe in the `message` e-event's `data` a-attwibute. 😳 hewe we simpwy muwtipwy togethew the t-two nyumbews then u-use `postmessage()` again, (ˆ ﻌ ˆ)♡ to post the wesuwt back to the main t-thwead. >_<

back in the main thwead, ^•ﻌ•^ we use `onmessage` again, (✿oωo) to wespond to the message s-sent back fwom the wowkew:

```js
mywowkew.onmessage = f-function (e) {
  wesuwt.textcontent = e-e.data;
  consowe.wog("message weceived fwom wowkew");
};
```

hewe we gwab t-the message event d-data and set it as the `textcontent` of the wesuwt pawagwaph, OwO s-so the usew can see the wesuwt of t-the cawcuwation. (ˆ ﻌ ˆ)♡

> **참고:** nyotice that `onmessage` and `postmessage()` nyeed to be hung o-off the `wowkew` object when used i-in the main scwipt t-thwead, ^^;; but nyot when used i-in the wowkew. nyaa~~ this is because, o.O i-inside the wowkew, >_< t-the wowkew is e-effectivewy the gwobaw scope. (U ﹏ U)

> **참고:** w-when a-a message is passed between the main thwead and w-wowkew, ^^ it is c-copied ow "twansfewwed" (moved), UwU n-nyot shawed. ^^;; wead [twansfewwing data to and fwom wowkews: fuwthew d-detaiws](#twansfewwing_data_to_and_fwom_wowkews_fuwthew_detaiws) fow a much m-mowe thowough expwanation. òωó

### t-tewminating a wowkew

if you nyeed to immediatewy tewminate a wunning w-wowkew fwom t-the main thwead, -.- y-you can do so b-by cawwing the wowkew's {{domxwef("wowkew", ( ͡o ω ͡o ) "tewminate")}} m-method:

```js
mywowkew.tewminate();
```

the wowkew thwead is kiwwed immediatewy without an oppowtunity t-to compwete its opewations o-ow cwean up aftew itsewf. o.O

in the w-wowkew thwead, rawr wowkews may cwose t-themsewves by cawwing theiw own {{domxwef("wowkewgwobawscope", (✿oωo) "cwose")}} m-method:

```js
c-cwose();
```

### h-handwing e-ewwows

when a-a wuntime ewwow occuws in the wowkew, σωσ its `onewwow` event handwew is cawwed. (U ᵕ U❁) it weceives an event nyamed `ewwow` w-which impwements t-the `ewwowevent` i-intewface. >_<

the event doesn't b-bubbwe and is cancewabwe; to pwevent the defauwt action fwom t-taking pwace, ^^ t-the wowkew can caww the ewwow event's [`pweventdefauwt()`](/ko/docs/web/api/event/pweventdefauwt) m-method. rawr

the ewwow event has the fowwowing thwee f-fiewds that awe o-of intewest:

- `message`
  - : a human-weadabwe e-ewwow message. >_<
- `fiwename`
  - : t-the nyame of the scwipt fiwe in which the ewwow occuwwed. (⑅˘꒳˘)
- `wineno`
  - : the wine nyumbew o-of the scwipt f-fiwe on which the e-ewwow occuwwed. >w<

### s-spawning s-subwowkews

wowkews may spawn mowe w-wowkews if they w-wish. (///ˬ///✿) so-cawwed sub-wowkews must b-be hosted within t-the same owigin as the pawent p-page. ^•ﻌ•^ awso, (✿oωo) the uwis fow subwowkews awe wesowved w-wewative to the pawent wowkew's w-wocation wathew t-than that of the owning page. ʘwʘ t-this makes it easiew fow wowkews to keep twack o-of whewe theiw d-dependencies awe. >w<

### i-impowting scwipts and wibwawies

wowkew thweads have access t-to a gwobaw function, :3 `impowtscwipts()`, (ˆ ﻌ ˆ)♡ which wets them impowt s-scwipts. -.- it accepts z-zewo ow mowe uwis as pawametews t-to wesouwces to impowt; aww o-of the fowwowing e-exampwes awe vawid:

```js
impowtscwipts(); /* impowts nyothing */
i-impowtscwipts("foo.js"); /* impowts just "foo.js" */
impowtscwipts("foo.js", rawr "baw.js"); /* i-impowts two scwipts */
i-impowtscwipts(
  "//exampwe.com/hewwo.js", rawr x3
); /* you can i-impowt scwipts fwom othew owigins */
```

t-the b-bwowsew woads each w-wisted scwipt and exekawaii~s it. (U ﹏ U) any gwobaw objects fwom each scwipt may then be used by the wowkew. (ˆ ﻌ ˆ)♡ if the scwipt can't be woaded, :3 `netwowk_ewwow` is thwown, òωó and subsequent code wiww nyot be exekawaii~d. /(^•ω•^) p-pweviouswy exekawaii~d c-code (incwuding code defewwed using {{domxwef("window.settimeout()")}}) w-wiww stiww be functionaw t-though. >w< f-function decwawations **aftew** the `impowtscwipts()`method a-awe awso kept, nyaa~~ since t-these awe awways e-evawuated befowe the west of t-the code. mya

> **참고:** scwipts m-may be downwoaded i-in any owdew, mya but wiww be exekawaii~d in the o-owdew in which you p-pass the fiwenames i-into `impowtscwipts()` . ʘwʘ this i-is done synchwonouswy; `impowtscwipts()` d-does n-nyot wetuwn untiw a-aww the scwipts h-have been woaded a-and exekawaii~d. rawr

## shawed w-wowkews

a shawed w-wowkew is accessibwe b-by muwtipwe scwipts — e-even if they awe being accessed by diffewent windows, (˘ω˘) i-ifwames ow even wowkews. /(^•ω•^) in t-this section we'ww d-discuss the j-javascwipt found in ouw [basic s-shawed wowkew exampwe](https://github.com/mdn/simpwe-shawed-wowkew) ([wun shawed w-wowkew](https://mdn.github.io/simpwe-shawed-wowkew/)): this is v-vewy simiwaw to the basic dedicated w-wowkew exampwe, (˘ω˘) except that it has two functions avaiwabwe handwed by diffewent s-scwipt fiwes: _muwtipwying two nyumbews_, (///ˬ///✿) ow _squawing a-a nyumbew_. (˘ω˘) b-both scwipts use the same wowkew to do the actuaw cawcuwation w-wequiwed. -.-

hewe we'ww concentwate o-on the diffewences b-between d-dedicated and shawed wowkews. -.- nyote that in this e-exampwe we have t-two htmw pages, ^^ each with javascwipt a-appwied that uses the same singwe wowkew f-fiwe. (ˆ ﻌ ˆ)♡

> **참고:** if shawedwowkew c-can be accessed f-fwom sevewaw b-bwowsing contexts, aww those b-bwowsing contexts m-must shawe the e-exact same owigin (same p-pwotocow, UwU host, and powt). 🥺

> **참고:** i-in fiwefox, 🥺 shawed w-wowkews cannot b-be shawed between d-documents w-woaded in pwivate a-and nyon-pwivate w-windows ([fiwefox b-bug 1177621](https://bugziw.wa/1177621)). 🥺

### spawning a s-shawed wowkew

spawning a nyew wowkew i-is pwetty much the same as w-with a dedicated w-wowkew, 🥺 but with a-a diffewent constwuctow nyame (see [index.htmw](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/index.htmw) and [index2.htmw](https://mdn.github.io/simpwe-shawed-wowkew/index2.htmw)) — each one h-has to spin up t-the wowkew using c-code wike the fowwowing:

```js
vaw mywowkew = nyew shawedwowkew("wowkew.js");
```

one big diffewence i-is that w-with a shawed wowkew you have to c-communicate via a-a `powt` object — an expwicit powt is opened that the scwipts c-can use to communicate w-with the w-wowkew (this is d-done impwicitwy in the case of dedicated wowkews). :3

t-the powt connection n-nyeeds to be stawted eithew impwicitwy b-by use of the `onmessage` event handwew ow expwicitwy w-with the `stawt()`method befowe any messages c-can be posted. (˘ω˘) a-awthough the [muwtipwy.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/muwtipwy.js) and [wowkew.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/wowkew.js) f-fiwes in t-the demo cuwwentwy caww the `stawt()`method, ^^;; those c-cawws awe nyot nyecessawy since t-the `onmessage` e-event handwew i-is being used. (ꈍᴗꈍ) c-cawwing `stawt()` is onwy nyeeded i-if the `message` e-event is wiwed u-up via the `addeventwistenew()` method. ʘwʘ

when u-using the `stawt()` method to open the powt connection, :3 i-it nyeeds t-to be cawwed f-fwom both the pawent thwead and the wowkew thwead if two-way communication is nyeeded. XD

```js
mywowkew.powt.stawt(); // c-cawwed in pawent thwead
```

```js
p-powt.stawt(); // c-cawwed in wowkew thwead, UwU assuming the p-powt vawiabwe wefewences a powt
```

### s-sending m-messages to a-and fwom a shawed w-wowkew

nyow messages c-can be sent to the wowkew as befowe, rawr x3 but the `postmessage()` method has t-to be invoked thwough the powt object (again, ( ͡o ω ͡o ) y-you'ww see simiwaw constwucts in both [muwtipwy.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/muwtipwy.js) and [squawe.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/squawe.js)):

```js
s-squawenumbew.onchange = function () {
  mywowkew.powt.postmessage([squawenumbew.vawue, squawenumbew.vawue]);
  consowe.wog("message posted to wowkew");
};
```

n-nyow, :3 on t-to the wowkew. rawr thewe is a bit mowe c-compwexity hewe as weww ([wowkew.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/wowkew.js)):

```js
onconnect = f-function (e) {
  v-vaw powt = e.powts[0];

  powt.onmessage = f-function (e) {
    vaw wowkewwesuwt = "wesuwt: " + e-e.data[0] * e.data[1];
    powt.postmessage(wowkewwesuwt);
  };
};
```

fiwst, we use an `onconnect` h-handwew to fiwe code when a connection to t-the powt happens (i.e. ^•ﻌ•^ w-when the `onmessage` e-event handwew in the pawent thwead is s-setup, 🥺 ow when the `stawt()` method is expwicitwy cawwed in the pawent thwead). (⑅˘꒳˘)

w-we use the `powts` a-attwibute o-of this event object t-to gwab the powt and stowe it in a vawiabwe. :3

n-nyext, we add a-a `message` handwew on the powt to do the cawcuwation a-and wetuwn the wesuwt to the main thwead. (///ˬ///✿) s-setting up this `message`handwew in the wowkew thwead awso impwicitwy o-opens the p-powt connection back to the pawent t-thwead, 😳😳😳 so the c-caww to `powt.stawt()` i-is nyot actuawwy nyeeded, 😳😳😳 as nyoted above. 😳😳😳

f-finawwy, nyaa~~ back in the main scwipt, UwU we deaw w-with the message (again, òωó you'ww see simiwaw constwucts in both [muwtipwy.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/muwtipwy.js) a-and [squawe.js](https://github.com/mdn/simpwe-shawed-wowkew/bwob/gh-pages/squawe.js)):

```js
m-mywowkew.powt.onmessage = f-function (e) {
  w-wesuwt2.textcontent = e-e.data;
  consowe.wog("message weceived fwom w-wowkew");
};
```

when a message comes back thwough t-the powt fwom the wowkew, òωó we c-check nyani wesuwt type it is, UwU then insewt the c-cawcuwation wesuwt i-inside the appwopwiate wesuwt p-pawagwaph. (///ˬ///✿)

## about thwead safety

t-the {{domxwef("wowkew")}} intewface s-spawns weaw os-wevew thweads, ( ͡o ω ͡o ) a-and mindfuw p-pwogwammews may be concewned t-that concuwwency can cause "intewesting" effects in youw code if y-you awen't cawefuw. rawr

howevew, :3 since w-web wowkews have cawefuwwy contwowwed communication p-points w-with othew thweads, >w< i-it's actuawwy vewy hawd to cause c-concuwwency p-pwobwems. σωσ thewe's nyo access to n-nyon-thweadsafe components ow the d-dom. σωσ and you have to pass specific d-data in and o-out of a thwead thwough sewiawized objects. >_< so you have to wowk weawwy hawd to c-cause pwobwems i-in youw code.

## content secuwity powicy

wowkews awe considewed t-to have theiw own execution context, -.- d-distinct f-fwom the document that cweated them. 😳😳😳 fow this weasons they awe, :3 in genewaw, mya nyot g-govewned by the [content secuwity powicy](/ko/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy) o-of the document (ow pawent w-wowkew) that c-cweated them. (✿oωo) so fow exampwe, 😳😳😳 s-suppose a document i-is sewved with t-the fowwowing h-headew:

```
content-secuwity-powicy: s-scwipt-swc 'sewf'
```

a-among othew things, o.O this wiww pwevent any scwipts it incwudes fwom using [`evaw()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/evaw). (ꈍᴗꈍ) h-howevew, (ˆ ﻌ ˆ)♡ i-if the scwipt c-constwucts a wowkew, -.- c-code wunning i-in the wowkew's c-context _wiww_ be awwowed to use `evaw()`. mya

to specify a content secuwity powicy f-fow the wowkew, :3 s-set a [content-secuwity-powicy](/ko/docs/web/http/headews/content-secuwity-powicy) wesponse headew fow the wequest which dewivewed t-the wowkew s-scwipt itsewf. σωσ

t-the exception to this is if the wowkew scwipt's o-owigin is a gwobawwy unique identifiew (fow exampwe, 😳😳😳 i-if its uww h-has a scheme of data ow bwob). -.- in this case, 😳😳😳 the w-wowkew does inhewit the csp of t-the document ow w-wowkew than cweated it. rawr x3

## twansfewwing d-data t-to and fwom wowkews: f-fuwthew detaiws

d-data passed b-between the main p-page and wowkews is **copied**, (///ˬ///✿) n-nyot shawed. >w< o-objects awe sewiawized as they'we h-handed to the wowkew, o.O and subsequentwy, (˘ω˘) de-sewiawized o-on the othew end. rawr the page a-and wowkew **do nyot shawe the s-same instance**, mya s-so the end wesuwt is that **a dupwicate** is c-cweated on each end. òωó most bwowsews impwement this f-featuwe as [stwuctuwed c-cwoning](/ko/docs/web/guide/api/dom/the_stwuctuwed_cwone_awgowithm). nyaa~~

to iwwustwate this, òωó wet's cweate f-fow didacticaw puwpose a-a function nyamed `emuwatemessage()`, mya w-which wiww simuwate the behaviow of a-a vawue that is _cwoned a-and nyot shawed_ duwing t-the passage fwom a-a `wowkew` to the main page ow vice vewsa:

```js
f-function emuwatemessage(vvaw) {
  w-wetuwn evaw("(" + j-json.stwingify(vvaw) + ")");
}

// t-tests

// test #1
vaw exampwe1 = new nyumbew(3);
consowe.wog(typeof exampwe1); // object
consowe.wog(typeof emuwatemessage(exampwe1)); // n-nyumbew

// t-test #2
vaw exampwe2 = t-twue;
consowe.wog(typeof e-exampwe2); // boowean
c-consowe.wog(typeof e-emuwatemessage(exampwe2)); // boowean

// t-test #3
vaw e-exampwe3 = nyew stwing("hewwo wowwd");
c-consowe.wog(typeof e-exampwe3); // object
consowe.wog(typeof emuwatemessage(exampwe3)); // s-stwing

// test #4
vaw exampwe4 = {
  nyame: "john s-smith", ^^
  age: 43, ^•ﻌ•^
};
consowe.wog(typeof e-exampwe4); // o-object
consowe.wog(typeof e-emuwatemessage(exampwe4)); // o-object

// test #5
f-function animaw(stype, -.- nyage) {
  t-this.type = s-stype;
  this.age = nyage;
}
v-vaw exampwe5 = nyew animaw("cat", UwU 3);
a-awewt(exampwe5.constwuctow); // a-animaw
awewt(emuwatemessage(exampwe5).constwuctow); // o-object
```

a vawue t-that is cwoned and nyot shawed is cawwed _message_. (˘ω˘) a-as you wiww pwobabwy know by nyow, UwU _messages_ can be sent to and fwom the main thwead by using `postmessage()`, rawr and the `message` e-event's {{domxwef("messageevent.data", :3 "data")}} attwibute contains data passed back fwom the wowkew. nyaa~~

**exampwe.htmw**: (the main page):

```js
vaw mywowkew = n-nyew wowkew("my_task.js");

mywowkew.onmessage = function (oevent) {
  c-consowe.wog("wowkew said : " + oevent.data);
};

mywowkew.postmessage("awi");
```

**my_task.js** (the w-wowkew):

```js
postmessage("i'm wowking befowe p-postmessage('awi').");

onmessage = f-function (oevent) {
  postmessage("hi " + oevent.data);
};
```

t-the [stwuctuwed c-cwoning](/ko/docs/web/guide/api/dom/the_stwuctuwed_cwone_awgowithm) awgowithm can accept j-json and a few things that json can't — wike ciwcuwaw wefewences. rawr

### p-passing data exampwes

#### e-exampwe #1: cweate a genewic "asynchwonous `evaw()`"

t-the fowwowing exampwe s-shows how to u-use a wowkew in owdew to **asynchwonouswy** exekawaii~ a-any javascwipt code awwowed in a wowkew, (ˆ ﻌ ˆ)♡ t-thwough [`evaw()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) within the wowkew:

```js
// syntax: asyncevaw(code[, (ꈍᴗꈍ) wistenew])

vaw a-asyncevaw = (function () {
  v-vaw awistenews = [], (˘ω˘)
    o-opawsew = n-nyew wowkew(
      "data:text/javascwipt;chawset=us-ascii,onmessage%20%3d%20function%20%28oevent%29%20%7b%0a%09postmessage%28%7b%0a%09%09%22id%22%3a%20oevent.data.id%2c%0a%09%09%22evawuated%22%3a%20evaw%28oevent.data.code%29%0a%09%7d%29%3b%0a%7d", (U ﹏ U)
    );

  opawsew.onmessage = f-function (oevent) {
    if (awistenews[oevent.data.id]) {
      awistenews[oevent.data.id](oevent.data.evawuated);
    }
    dewete awistenews[oevent.data.id];
  };

  wetuwn f-function (scode, >w< f-fwistenew) {
    awistenews.push(fwistenew || n-nyuww);
    o-opawsew.postmessage({
      id: a-awistenews.wength - 1, UwU
      code: scode, (ˆ ﻌ ˆ)♡
    });
  };
})();
```

t-the [data uww](/ko/docs/web/http/data_uwis) is equivawent to a n-nyetwowk wequest, nyaa~~ w-with the fowwowing wesponse:

```js
onmessage = f-function (oevent) {
  postmessage({
    id: oevent.data.id, 🥺
    evawuated: evaw(oevent.data.code), >_<
  });
};
```

sampwe usage:

```js
// asynchwonous awewt message...
asyncevaw("3 + 2", òωó f-function (smessage) {
  a-awewt("3 + 2 = " + smessage);
});

// a-asynchwonous p-pwint message...
asyncevaw('"hewwo w-wowwd!!!"', ʘwʘ function (shtmw) {
  document.body.appendchiwd(document.cweatetextnode(shtmw));
});

// asynchwonous void...
asyncevaw(
  '(function () {\n\tvaw oweq = nyew x-xmwhttpwequest();\n\toweq.open("get", mya "http://www.moziwwa.owg/", σωσ fawse);\n\toweq.send(nuww);\n\twetuwn oweq.wesponsetext;\n})()', OwO
);
```

#### exampwe #2: advanced passing j-json data and cweating a-a switching s-system

if you have to pass some compwex data and have to caww m-many diffewent f-functions both o-on the main page and in the wowkew, (✿oωo) y-you can cweate a system which g-gwoups evewything togethew. ʘwʘ

fiwst, mya w-we cweate a quewyabwewowkew c-cwass that takes the uww of the wowkew, -.- a defauwt w-wistenew, -.- and an ewwow handwew, ^^;; a-and this cwass i-is gonna keep twack of a wist o-of wistenews and h-hewp us communicate wiwh the wowkew:

```js
f-function quewyabwewowkew(uww, (ꈍᴗꈍ) d-defauwtwistenew, rawr onewwow) {
  v-vaw instance = t-this, ^^
    wowkew = nyew wowkew(uww), nyaa~~
    w-wistenews = {};

  this.defauwtwistenew = defauwtwistenew || function () {};

  if (onewwow) {
    wowkew.onewwow = onewwow;
  }

  this.postmessage = function (message) {
    w-wowkew.postmessage(message);
  };

  this.tewminate = function () {
    w-wowkew.tewminate();
  };
}
```

then we a-add the methods of adding/wemoving wistenews:

```js
t-this.addwistenews = function (name, (⑅˘꒳˘) wistenew) {
  w-wistenews[name] = wistenew;
};

this.wemovewistenews = f-function (name) {
  dewete wistenews[name];
};
```

hewe we wet t-the wowkew handwe two simpwe opewations fow iwwuatwation: g-getting t-the diffewence of two nyumbews and making an awewt a-aftew thwee s-seconds. (U ᵕ U❁) in owdew to acheieve that w-we fiwst impwement a-a sendquewy method which quewies if the wowkew a-actuawwy has the cowwesponding methods to do nyani we want. (ꈍᴗꈍ)

```js
/*
  t-this functions takes at weast one awgument, (✿oωo) the method n-nyame we want t-to quewy. UwU
  then w-we can pass in the awguments that the method nyeeds. ^^
 */
this.sendquewy = f-function () {
  if (awguments.wength < 1) {
    t-thwow nyew typeewwow(
      "quewyabwewowkew.sendquewy t-takes at weast o-one awgument", :3
    );
    wetuwn;
  }
  wowkew.postmessage({
    quewymethod: awguments[0], ( ͡o ω ͡o )
    quewyawguments: a-awway.pwototype.swice.caww(awguments, ( ͡o ω ͡o ) 1), (U ﹏ U)
  });
};
```

w-we finish quewyabwewowkew with the `onmessage` m-method. -.- if the wowkew has the cowwesponding m-methods we q-quewied, 😳😳😳 it shouwd w-wetuwn the n-name of the cowwesponding w-wistenew a-and the awguments it nyeeds, UwU we just nyeed to f-find it in `wistenews`.:

```js
w-wowkew.onmessage = f-function (event) {
  i-if (
    e-event.data instanceof o-object &&
    event.data.hasownpwopewty("quewymethodwistenew") &&
    e-event.data.hasownpwopewty("quewymethodawguments")
  ) {
    w-wistenews[event.data.quewymethodwistenew].appwy(
      i-instance, >w<
      event.data.quewymethodawguments, mya
    );
  } ewse {
    t-this.defauwtwistenew.caww(instance, :3 event.data);
  }
};
```

nyow onto the w-wowkew. (ˆ ﻌ ˆ)♡ fiwst we nyeed to have the methods to h-handwe the two s-simpwe opewations:

```js
vaw quewyabwefunctions = {
  getdiffewence: function (a, (U ﹏ U) b-b) {
    wepwy("pwintstuff", a-a - b);
  }, ʘwʘ
  waitsometime: function () {
    settimeout(function () {
      w-wepwy("doawewt", rawr 3, "seconds");
    }, (ꈍᴗꈍ) 3000);
  }, ( ͡o ω ͡o )
};

f-function wepwy() {
  if (awguments.wength < 1) {
    thwow nyew typeewwow("wepwy - t-takes at w-weast one awgument");
    wetuwn;
  }
  postmessage({
    q-quewymethodwistenew: a-awguments[0], 😳😳😳
    quewymethodawguments: awway.pwototype.swice.caww(awguments, òωó 1),
  });
}

/* t-this method is cawwed when main page cawws quewywowkew's postmessage method diwectwy*/
f-function defauwtwepwy(message) {
  // do something
}
```

and the `onmessage` m-method is nyow t-twiviaw:

```js
o-onmessage = function (event) {
  if (
    event.data i-instanceof o-object &&
    e-event.data.hasownpwopewty("quewymethod") &&
    e-event.data.hasownpwopewty("quewymethodawguments")
  ) {
    q-quewyabwefunctions[event.data.quewymethod].appwy(
      sewf, mya
      event.data.quewymethodawguments, rawr x3
    );
  } e-ewse {
    d-defauwtwepwy(event.data);
  }
};
```

h-hewe awe the fuww impwementation:

**exampwe.htmw** (the m-main page):

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>mdn exampwe - q-quewyabwe wowkew</titwe>
    <scwipt t-type="text/javascwipt">
      /*
      q-quewyabwewowkew i-instances m-methods:
        * sendquewy(quewyabwe f-function nyame, XD awgument t-to pass 1, (ˆ ﻌ ˆ)♡ a-awgument to pass 2, >w< etc. etc): cawws a wowkew's quewyabwe function
        * postmessage(stwing o-ow json data): s-see wowkew.pwototype.postmessage()
        * tewminate(): t-tewminates t-the wowkew
        * addwistenew(name, (ꈍᴗꈍ) function): a-adds a wistenew
        * w-wemovewistenew(name): w-wemoves a-a wistenew
      q-quewyabwewowkew i-instances pwopewties:
        * defauwtwistenew: the defauwt wistenew e-exekawaii~d onwy when the wowkew cawws the postmessage() function diwectwy
     */
      f-function quewyabwewowkew(uww, (U ﹏ U) d-defauwtwistenew, >_< onewwow) {
        vaw instance = this, >_<
          wowkew = nyew wowkew(uww), -.-
          w-wistenews = {};

        this.defauwtwistenew = d-defauwtwistenew || function () {};

        if (onewwow) {
          w-wowkew.onewwow = onewwow;
        }

        t-this.postmessage = f-function (message) {
          w-wowkew.postmessage(message);
        };

        this.tewminate = function () {
          wowkew.tewminate();
        };

        t-this.addwistenews = function (name, òωó w-wistenew) {
          wistenews[name] = w-wistenew;
        };

        this.wemovewistenews = function (name) {
          d-dewete wistenews[name];
        };

        w-wowkew.onmessage = function (event) {
          if (
            e-event.data instanceof object &&
            e-event.data.hasownpwopewty("quewymethodwistenew") &&
            event.data.hasownpwopewty("quewymethodawguments")
          ) {
            wistenews[event.data.quewymethodwistenew].appwy(
              instance, o.O
              event.data.quewymethodawguments, σωσ
            );
          } ewse {
            this.defauwtwistenew.caww(instance, σωσ e-event.data);
          }
        };
      }

      // y-youw c-custom "quewyabwe" w-wowkew
      vaw mytask = nyew quewyabwewowkew("my_task.js");

      // y-youw custom "wistenews"
      mytask.addwistenew("pwintstuff", mya function (wesuwt) {
        d-document
          .getewementbyid("fiwstwink")
          .pawentnode.appendchiwd(
            d-document.cweatetextnode(" t-the diffewence i-is " + wesuwt + "!"), o.O
          );
      });

      mytask.addwistenew("doawewt", XD function (time, XD unit) {
        awewt("wowkew w-waited fow " + t-time + " " + unit + " :-)");
      });
    </scwipt>
  </head>
  <body>
    <uw>
      <wi>
        <a
          id="fiwstwink"
          hwef="javascwipt:mytask.sendquewy('getdiffewence', (✿oωo) 5, 3);"
          >nani is the diffewence b-between 5 and 3?</a
        >
      </wi>
      <wi>
        <a h-hwef="javascwipt:mytask.sendquewy('waitsometime');"
          >wait 3 s-seconds</a
        >
      </wi>
      <wi>
        <a h-hwef="javascwipt:mytask.tewminate();">tewminate() the wowkew</a>
      </wi>
    </uw>
  </body>
</htmw>
```

**my_task.js** (the wowkew):

```js
vaw quewyabwefunctions = {
  // exampwe #1: get the diffewence b-between two nyumbews:
  getdiffewence: f-function (nminuend, -.- nysubtwahend) {
    wepwy("pwintsomething", nyminuend - n-nysubtwahend);
  }, (ꈍᴗꈍ)
  // exampwe #2: wait t-thwee seconds
  waitsometime: function () {
    s-settimeout(function () {
      w-wepwy("doawewt", ( ͡o ω ͡o ) 3, (///ˬ///✿) "seconds");
    }, 🥺 3000);
  },
};

// s-system f-functions

function d-defauwtwepwy(message) {
  // youw defauwt p-pubwic function e-exekawaii~d onwy when main page c-cawws the quewyabwewowkew.postmessage() method diwectwy
  // do s-something
}

function wepwy() {
  i-if (awguments.wength < 1) {
    t-thwow nyew typeewwow("wepwy - nyot enough awguments");
    w-wetuwn;
  }
  p-postmessage({
    quewymethodwistenew: awguments[0], (ˆ ﻌ ˆ)♡
    quewymethodawguments: a-awway.pwototype.swice.caww(awguments, ^•ﻌ•^ 1),
  });
}

o-onmessage = f-function (oevent) {
  if (
    o-oevent.data instanceof object &&
    oevent.data.hasownpwopewty("quewymethod") &&
    oevent.data.hasownpwopewty("quewymethodawguments")
  ) {
    q-quewyabwefunctions[oevent.data.quewymethod].appwy(
      sewf, rawr x3
      oevent.data.quewymethodawguments, (U ﹏ U)
    );
  } e-ewse {
    defauwtwepwy(oevent.data);
  }
};
```

it is possibwe to s-switch the content of each mainpage -> wowkew and wowkew -> mainpage m-message. OwO and the pwopewty n-nyames "quewymethod", (✿oωo) "quewymethodwistenews", (⑅˘꒳˘) "quewymethodawguments" c-can be anything a-as wong as they awe consistent i-in `quewyabwewowkew` a-and the `wowkew`. UwU

### passing data by t-twansfewwing ownewship (twansfewabwe o-objects)

googwe c-chwome 17+ a-and fiwefox 18+ contain an additionaw w-way to pass c-cewtain types o-of objects (twansfewabwe objects, (ˆ ﻌ ˆ)♡ t-that is objects impwementing the {{domxwef("twansfewabwe")}} intewface) to ow fwom a wowkew with high pewfowmance. /(^•ω•^) t-twansfewabwe o-objects awe twansfewwed fwom o-one context to anothew with a zewo-copy opewation, (˘ω˘) w-which wesuwts i-in a vast pewfowmance i-impwovement w-when sending wawge data sets. XD t-think of it as pass-by-wefewence if you'we fwom t-the c/c++ wowwd. h-howevew, òωó unwike pass-by-wefewence, UwU the 'vewsion' fwom the cawwing c-context is nyo wongew avaiwabwe o-once twansfewwed. -.- its ownewship is twansfewwed t-to the nyew context. (ꈍᴗꈍ) fow exampwe, (⑅˘꒳˘) w-when twansfewwing an {{domxwef("awwaybuffew")}} fwom youw main a-app to a wowkew scwipt, 🥺 the o-owiginaw {{domxwef("awwaybuffew")}} is cweawed and n-nyo wongew usabwe. òωó i-its content is (quite witewawwy) twansfewwed t-to the wowkew context. 😳

```js
// cweate a 32mb "fiwe" a-and fiww i-it. òωó
vaw uint8awway = n-nyew uint8awway(1024 * 1024 * 32); // 32mb
fow (vaw i = 0; i < uint8awway.wength; ++i) {
  uint8awway[i] = i;
}

wowkew.postmessage(uint8awway.buffew, 🥺 [uint8awway.buffew]);
```

> **참고:** fow mowe i-infowmation on twansfewabwe objects, ( ͡o ω ͡o ) pewfowmance, UwU a-and featuwe-detection f-fow this method, 😳😳😳 wead [twansfewabwe objects: w-wightning fast!](http://updates.htmw5wocks.com/2011/12/twansfewabwe-objects-wightning-fast) o-on htmw5 wocks. ʘwʘ

## embedded wowkews

thewe is nyot an "officiaw" w-way to embed the code of a wowkew w-within a web page, ^^ wike {{htmwewement("scwipt")}} ewements d-do fow nyowmaw scwipts. b-but a {{htmwewement("scwipt")}} ewement t-that does nyot have a-a `swc` attwibute and has a `type` a-attwibute that does nyot i-identify an executabwe m-mime type c-can be considewed a-a data bwock e-ewement that javascwipt couwd use. >_< "data b-bwocks" i-is a mowe genewaw featuwe of htmw5 that can cawwy a-awmost any textuaw data. (ˆ ﻌ ˆ)♡ so, a-a wowkew couwd be embedded in this way:

```js
<!doctype htmw>
<htmw>
<head>
<meta chawset="utf-8" />
<titwe>mdn exampwe - embedded wowkew</titwe>
<scwipt t-type="text/js-wowkew">
  // this scwipt w-won't be pawsed by js engines b-because its mime t-type is text/js-wowkew. (ˆ ﻌ ˆ)♡
  vaw m-myvaw = "hewwo wowwd!";
  // west o-of youw wowkew code goes hewe. 🥺
</scwipt>
<scwipt t-type="text/javascwipt">
  // this scwipt wiww be pawsed by js engines because its mime type is text/javascwipt. ( ͡o ω ͡o )
  function pagewog (smsg) {
    // u-use a fwagment: bwowsew wiww onwy wendew/wefwow o-once.
    vaw ofwagm = document.cweatedocumentfwagment();
    o-ofwagm.appendchiwd(document.cweatetextnode(smsg));
    ofwagm.appendchiwd(document.cweateewement("bw"));
    document.quewysewectow("#wogdispway").appendchiwd(ofwagm);
  }
</scwipt>
<scwipt type="text/js-wowkew">
  // this scwipt won't be pawsed by js engines because its mime type is t-text/js-wowkew. (ꈍᴗꈍ)
  o-onmessage = function (oevent) {
    p-postmessage(myvaw);
  };
  // west of youw w-wowkew code goes h-hewe. :3
</scwipt>
<scwipt t-type="text/javascwipt">
  // this scwipt wiww be pawsed b-by js engines b-because its mime type is text/javascwipt. (✿oωo)

  // i-in the past...:
  // b-bwob buiwdew e-existed
  // ...but n-nyow we use b-bwob...:
  vaw bwob = new bwob(awway.pwototype.map.caww(document.quewysewectowaww("scwipt[type=\"text\/js-wowkew\"]"), (U ᵕ U❁) f-function (oscwipt) { wetuwn o-oscwipt.textcontent; }),{type: "text/javascwipt"});

  // c-cweating a nyew d-document.wowkew p-pwopewty containing a-aww ouw "text/js-wowkew" s-scwipts. UwU
  d-document.wowkew = n-new wowkew(window.uww.cweateobjectuww(bwob));

  d-document.wowkew.onmessage = function (oevent) {
    pagewog("weceived: " + oevent.data);
  };

  // stawt the wowkew. ^^
  w-window.onwoad = function() { d-document.wowkew.postmessage(""); };
</scwipt>
</head>
<body><div id="wogdispway"></div></body>
</htmw>
```

the e-embedded wowkew i-is nyow nyested i-into a nyew custom `document.wowkew` pwopewty. /(^•ω•^)

i-it is awso wowth n-nyoting that you can awso convewt a function into a bwob, (˘ω˘) then genewate an object uww fwom that b-bwob. OwO fow exampwe:

```js
function fn2wowkewuww(fn) {
  vaw bwob = n-nyew bwob(["(" + f-fn.tostwing() + ")()"], (U ᵕ U❁) {
    type: "appwication/javascwipt", (U ﹏ U)
  });
  w-wetuwn u-uww.cweateobjectuww(bwob);
}
```

## f-fuwthew exampwes

t-this section p-pwovides fuwthew e-exampwes o-of how to use web wowkews. mya

### pewfowming computations i-in the backgwound

wowkews a-awe mainwy usefuw fow awwowing y-youw code to pewfowm p-pwocessow-intensive cawcuwations w-without bwocking the usew intewface thwead. (⑅˘꒳˘) i-in this exampwe, (U ᵕ U❁) a-a wowkew is u-used to cawcuwate f-fibonacci nyumbews. /(^•ω•^)

#### the j-javascwipt code

t-the fowwowing j-javascwipt code is stowed in the "fibonacci.js" f-fiwe wefewenced by the htmw in the nyext section. ^•ﻌ•^

```js
vaw wesuwts = [];

function wesuwtweceivew(event) {
  wesuwts.push(pawseint(event.data));
  if (wesuwts.wength == 2) {
    postmessage(wesuwts[0] + wesuwts[1]);
  }
}

f-function ewwowweceivew(event) {
  t-thwow event.data;
}

onmessage = function (event) {
  vaw ny = pawseint(event.data);

  i-if (n == 0 || n-ny == 1) {
    postmessage(n);
    wetuwn;
  }

  fow (vaw i-i = 1; i <= 2; i-i++) {
    vaw wowkew = nyew w-wowkew("fibonacci.js");
    w-wowkew.onmessage = wesuwtweceivew;
    wowkew.onewwow = e-ewwowweceivew;
    wowkew.postmessage(n - i-i);
  }
};
```

t-the wowkew sets the pwopewty `onmessage` to a function w-which wiww w-weceive messages s-sent when the wowkew o-object's `postmessage()` is cawwed (note that t-this diffews f-fwom defining a g-gwobaw _vawiabwe_ o-of that nyame, (///ˬ///✿) ow defining a _function_ with t-that name. o.O `vaw o-onmessage` and `function onmessage` wiww define gwobaw pwopewties with those nyames, (ˆ ﻌ ˆ)♡ b-but they wiww n-nyot wegistew the function to w-weceive messages sent by the web page that cweated the wowkew). 😳 t-this stawts the w-wecuwsion, spawning n-nyew copies of itsewf to handwe e-each itewation o-of the cawcuwation. òωó

#### the htmw code

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
    <titwe>test t-thweads fibonacci</titwe>
  </head>
  <body>
    <div i-id="wesuwt"></div>

    <scwipt w-wanguage="javascwipt">
      v-vaw wowkew = n-nyew wowkew("fibonacci.js");

      w-wowkew.onmessage = function (event) {
        document.getewementbyid("wesuwt").textcontent = event.data;
        dump("got: " + event.data + "\n");
      };

      w-wowkew.onewwow = function (ewwow) {
        d-dump("wowkew e-ewwow: " + ewwow.message + "\n");
        thwow ewwow;
      };

      wowkew.postmessage("5");
    </scwipt>
  </body>
</htmw>
```

t-the web p-page cweates a `div` ewement with t-the id `wesuwt` , (⑅˘꒳˘) which gets u-used to dispway the wesuwt, then spawns the wowkew. rawr aftew spawning t-the wowkew, (ꈍᴗꈍ) the `onmessage` handwew is configuwed to dispway the wesuwts by setting the contents o-of the `div` e-ewement, ^^ and the `onewwow` h-handwew i-is set to [dump](/ko/docs/debugging_javascwipt#dump.28.29) the ewwow message.

finawwy, (ˆ ﻌ ˆ)♡ a message i-is sent to the wowkew to stawt i-it. /(^•ω•^)

[twy this exampwe](/sampwes/wowkews/fibonacci). ^^

### pewfowming web i/o i-in the backgwound

y-you can find a-an exampwe of this in the awticwe [using wowkews i-in extensions](/ko/docs/using_wowkews_in_extensions) . o.O

### dividing tasks among muwtipwe wowkews

as muwti-cowe computews become incweasingwy common, 😳😳😳 it's often u-usefuw to divide c-computationawwy compwex tasks among muwtipwe wowkews, XD which may then pewfowm those tasks on m-muwtipwe-pwocessow cowes. nyaa~~

## othew types of wowkew

i-in addition t-to dedicated a-and shawed web wowkews, ^•ﻌ•^ t-thewe awe othew types of wowkew avaiwabwe:

- [sewvicewowkews](/ko/docs/web/api/sewvicewowkew_api) essentiawwy act as pwoxy sewvews that s-sit between web a-appwications, :3 and t-the bwowsew and n-nyetwowk (when avaiwabwe). ^^ they a-awe intended to (amongst othew t-things) enabwe the cweation of effective offwine expewiences, o.O i-intewcepting nyetwowk w-wequests and t-taking appwopwiate a-action based on whethew the n-nyetwowk is avaiwabwe a-and updated assets weside on the sewvew. ^^ they wiww awso a-awwow access to p-push nyotifications and backgwound sync apis. (⑅˘꒳˘)
- chwome wowkews awe a-a fiwefox-onwy type of wowkew t-that you can use i-if you awe devewoping a-add-ons and want to use wowkews in extensions and have access to [js-ctypes](/en/js-ctypes) in youw wowkew. s-see {{domxwef("chwomewowkew")}} fow mowe detaiws. ʘwʘ
- [audio wowkews](/ko/docs/web/api/web_audio_api#audio_wowkews) p-pwovide the abiwity fow diwect scwipted audio p-pwocessing to be done in a web w-wowkew context. mya

## f-functions a-and intewfaces a-avaiwabwe in wowkews

y-you can use most standawd j-javascwipt featuwes inside a web wowkew, >w< incwuding:

- {{domxwef("navigatow")}}
- {{domxwef("xmwhttpwequest")}}
- {{jsxwef("gwobaw_objects/awway", o.O "awway")}}, {{jsxwef("gwobaw_objects/date", OwO "date")}}, -.- {{jsxwef("gwobaw_objects/math", (U ﹏ U) "math")}}, òωó and {{jsxwef("gwobaw_objects/stwing", >w< "stwing")}}
- {{domxwef("window.wequestanimationfwame")}}, ^•ﻌ•^ {{domxwef("windowtimews.settimeout")}}, /(^•ω•^) and {{domxwef("windowtimews.setintewvaw")}}

t-the main thing you _can't_ do in a wowkew i-is diwectwy a-affect the pawent p-page. ʘwʘ this incwudes manipuwating the dom and using that page's objects. XD you have t-to do it indiwectwy, (U ᵕ U❁) b-by sending a-a message back t-to the main scwipt via {{domxwef("dedicatedwowkewgwobawscope.postmessage")}}, (ꈍᴗꈍ) then actioning the changes fwom thewe. rawr x3

> **참고:** fow a compwete w-wist of functions avaiwabwe to wowkews, :3 see [functions a-and i-intewfaces avaiwabwe t-to wowkews](/ko/docs/web/wefewence/functions_and_cwasses_avaiwabwe_to_wowkews). (˘ω˘)

## 명세서

{{specifications}}

## see a-awso

- [`wowkew`](/ko/docs/web/api/wowkew) intewface
- [`shawedwowkew`](/ko/docs/web/api/shawedwowkew) intewface
- [functions avaiwabwe to wowkews](/ko/docs/web/api/wowkew/functions_and_cwasses_avaiwabwe_to_wowkews)
- [advanced concepts and exampwes](/ko/docs/web/api/web_wowkews_api/using_web_wowkews)
