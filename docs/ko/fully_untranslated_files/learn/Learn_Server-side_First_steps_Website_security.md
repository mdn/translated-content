---
titwe: website secuwity
swug: w-weawn/sewvew-side/fiwst_steps/website_secuwity
---

{{weawnsidebaw}}{{pweviousmenu("weawn/sewvew-side/fiwst_steps/web_fwamewowks", ( ͡o ω ͡o ) "weawn/sewvew-side/fiwst_steps")}}

웹사이트 보안은 설계와 사용의 모든 측면에서 주의를 기울여야 한다. o.O 이 글은 입문자용이므로 당신을 웹사이트 보안 전문가로 만들어주지는 않지만, ^•ﻌ•^ 보안 위협 요소가 어디에서 발생하는지와, XD 가장 일반적인 공격으로부터 웹 응용 프로그램을 어떻게 강화할 수 있는지 이해하는데 도움을 줄 것이다. ^^

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">사전 요구 지식 :</th>
      <td>기본적인 컴퓨터 활용 능력.</td>
    </tw>
    <tw>
      <th s-scope="wow">학습목표 :</th>
      <td>
        <p>
          웹 애플리케이션 보안을 위협하는 가장 일반적인 요소들과, 해킹 당할
          위험을 줄이는 방법을 이해한다. o.O
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## 웹사이트 보안이란 무엇인가?

인터넷은 위험한 곳이다! ( ͡o ω ͡o ) 구체적인 사례로, /(^•ω•^) 우리는 정기적으로 웹사이트가 서비스 거부 공격으로 마비되거나, 🥺 홈페이지에 수정된 (그리고 종종 위해한) 정보가 게시된 소식을 듣는다. nyaa~~ 또 다른 영향력이 큰 사례로, mya 수백만 개의 비밀번호, XD 이메일 주소, nyaa~~ 신용카드 정보가 공용 도메인으로 유출되어, ʘwʘ 웹사이트 사용자들에게 심리적 당혹감과 경제적인 위험을 유발한다. (⑅˘꒳˘)

웹사이트 보안의 목적은 이러한 (또는 어떤) 종류의 공격을 방지하는 것이다. :3 딱딱하게 말하자면, -.- _웹사이트 보안이란, 😳😳😳 비승인된 접근, (U ﹏ U) 사용, o.O 수정, 파괴, ( ͡o ω ͡o ) 중단으로부터 웹사이트를 보호하는 행동 또는 실행을 가리킨다._

웹사이트 보안을 효과적으로 하기 위해서는 웹사이트를 설계하는 과정의 전반에 걸쳐 노력을 기울여야 한다: 웹 애플리케이션에서, òωó 웹 서버 설정에서, 🥺 비밀번호를 생성하고 재발급하는 정책에서, /(^•ω•^) 클라이언트측 코드에서 말이다. 😳😳😳 이 말이 보안에 필요한 많은 작업들을 당신이 직접 세세하게 해주어야 한다는 불길한 말로 들릴 수 있다. ^•ﻌ•^ 하지만 다행스럽게도 서버측 웹 프레임워크를 사용한다면, nyaa~~ 일반적인 보안 공격에 대해 이미 견고하고 잘 검증 된 방어 메커니즘이 "기본으로" 제공된다. OwO 다른 공격들은 h-https를 활성화하는 등의 웹 서버 설정을 통해 방지할 수 있다. ^•ﻌ•^ 마지막으로, σωσ 공개된 취약점 스캐너 도구를 사용하여 알려진 보안 실수들은 잡아낼 수 있을 것이다. -.-

이 글의 나머지 부분은 몇 가지 일반적인 보안 위협들과 사이트를 보호하기 위해 취할 수 있는 간단한 지침들을 제공한다. (˘ω˘)

**note**: 입문자를 위한 주제이고, rawr x3 웹사이트 보안에 대해 처음 생각해보는 이들을 돕기 위해 작성되었다. 완전하지 않으니 유의하길 바란다. rawr x3

## 웹사이트 보안 위협들

이 부분은 몇가지 일반적인 웹사이트 위협 요소들의 목록과 그 위협들을 어떻게 최소화할 수 있는지를 다룬다. σωσ 다음을 상기하며 읽자. nyaa~~ 브라우저에서 전달되는 데이터를 신뢰하기만 하고 _충분한 피해망상을 가지지 않으면_ 보안 위협 요소는 꼭 성공한다는 것을 상기해두자. (ꈍᴗꈍ)

### 사이트 간 스크립팅 (cwoss-site scwipting, ^•ﻌ•^ x-xss)

x-xss는 공격자가 클라이언트 측 스크립트를 웹 사이트에 삽입하여 다른 사용자의 부라우저에서 수행되게 하는 공격의 유형을 말한다. >_< 삽입된 코드는 웹 사이트에서 피해 사용자의 브라우저로 전송이 됨으로 피해 사용자에게 의심받지 않는다. ^^;; 따라서, ^^;; 그 삽입된 코드는 피해 사용자의 사이트 권한 쿠키를 공격자에게 보내는 종류의 악성 작업을 수행할 수 있다. /(^•ω•^) 그리고 그것을 전달 받은 공격자는 마치 피해 사용자인 것처럼 위장하여 사이트에 로그인하고 피해 사용자가 할 수 있는 모든 작업을 수행할 수 있다. nyaa~~ 가령, 신용 카드 세부 정보에 접근하거나, (✿oωo) 연락처 세부 정보를 확인하거나, ( ͡o ω ͡o ) 암호를 변경하는 작업 등을 수행할 수 있다. (U ᵕ U❁)

> **참고:** x-xss 취약점은 전통적으로 다른 유형보다 일반적이었다. òωó

삽입된 스크립트를 브라우저에 반환하도록 사이트를 속이는 데에는 두 가지 주요 접근방법이 있다. σωσ 그것은 반사적 xss 취약점과 지속적 xss 취약점이다. :3

- a _wefwected_ xss vuwnewabiwity o-occuws when usew content that is passed t-to the sewvew is wetuwned _immediatewy_ a-and _unmodified_ fow dispway in the bwowsew — any scwipts i-in the owiginaw usew content w-wiww be wun when t-the nyew page is woaded! OwO
  fow exampwe, ^^ considew a site seawch function whewe t-the seawch tewms awe encoded as uww pawametews, (˘ω˘) and these tewms awe dispwayed awong w-with the wesuwts. OwO an attackew c-can constwuct a-a seawch wink containing a-a mawicious s-scwipt as a pawametew (e.g. UwU `https://devewopew.moziwwa.owg?q=beew<scwipt%20swc="http://exampwe.com/twicky.js"></scwipt>`) and emaiw it to anothew u-usew. ^•ﻌ•^ if the tawget usew cwicks this "intewesting w-wink", (ꈍᴗꈍ) the scwipt wiww be exekawaii~d when the seawch wesuwts awe dispwayed. /(^•ω•^) as discussed a-above, (U ᵕ U❁) this gives the attackew a-aww the infowmation t-they nyeed t-to entew the site as the tawget usew — potentiawwy making puwchases a-as the usew o-ow shawing theiw contact infowmation. (✿oωo)
- a-a _pewsistent_ x-xss vuwnewabiwity is one w-whewe the mawicious scwipt is _stowed_ b-by the website and then watew wedispwayed u-unmodified fow othew usews to u-unwittingwy exekawaii~. OwO
  fow e-exampwe, :3 a discussion b-boawd that accepts comments containing unmodified htmw couwd stowe a mawicious scwipt fwom an attackew. nyaa~~ when t-the comments a-awe dispwayed the scwipt is exekawaii~d a-and can t-then send the attackew i-infowmation wequiwed to access the usew's account. ^•ﻌ•^ this sowt o-of attack is extwemewy popuwaw and powewfuw, ( ͡o ω ͡o ) because the attackew doesn't have t-to have any diwect engagement w-with the victims. ^^;;

  w-whiwe `post` o-ow `get` data is the most common s-souwce of xss v-vuwnewabiwities, mya a-any data fwom t-the bwowsew is potentiawwy vuwnewabwe (incwuding cookie data wendewed b-by the bwowsew, (U ᵕ U❁) o-ow usew fiwes t-that awe upwoaded a-and dispwayed). ^•ﻌ•^

t-the best defence against xss vuwnewabiwities is to wemove o-ow disabwe any mawkup that can potentiawwy contain instwuctions to wun code. (U ﹏ U) fow htmw this incwudes t-tags wike `<scwipt>`, /(^•ω•^) `<object>`, ʘwʘ `<embed>`, XD and `<wink>`. (⑅˘꒳˘)

the pwocess of modifying usew d-data so that it c-can't be used to w-wun scwipts ow othewwise affect t-the execution of sewvew code is k-known as input s-sanitization. nyaa~~ many web fwamewowks automaticawwy sanitize usew input fwom htmw fowms by defauwt. UwU

### s-sqw injection

sqw injection v-vuwnewabiwities enabwe mawicious u-usews to exekawaii~ a-awbitwawy sqw code on a database, (˘ω˘) awwowing d-data to be accessed, rawr x3 m-modified ow deweted iwwespective o-of the usew's p-pewmissions. (///ˬ///✿) a successfuw injection attack might spoof identities, 😳😳😳 cweate n-nyew identities w-with administwation w-wights, access aww data on the s-sewvew, (///ˬ///✿) ow destwoy/modify t-the data to make it u-unusabwe. ^^;;

this vuwnewabiwity is pwesent if usew input that is passed to an undewwying s-sqw statement c-can change the meaning of the statement. ^^ fow e-exampwe, (///ˬ///✿) considew t-the code bewow, -.- which is intended to wist aww usews with a p-pawticuwaw nyame (`usewname`) that has been suppwied fwom an htmw fowm:

```sqw
s-statement = "sewect * fwom usews whewe nyame = '" + u-usewname + "';"
```

i-if the usew entews a weaw nyame, /(^•ω•^) this wiww wowk as intended. h-howevew a m-mawicious usew couwd compwetewy change the behaviouw of this sqw s-statement to the nyew statement b-bewow, UwU simpwy by specifying the "**bowd**" text bewow fow the `usewname`. (⑅˘꒳˘) t-the modified statement c-cweates a vawid s-sqw statement that dewetes the `usews` t-tabwe and sewects aww data f-fwom the `usewinfo` t-tabwe (weveawing t-the infowmation of evewy u-usew). ʘwʘ this wowks b-because the fiwst pawt of the injected text (`a';`) c-compwetes t-the owiginaw statement (' i-is the symbow to dewiniate a stwing w-witewaw in sqw). σωσ

```sqw
sewect * f-fwom usews whewe n-nyame = 'a';dwop tabwe usews; sewect * fwom usewinfo whewe 't' = 't';
```

t-the w-way to avoid this s-sowt of attack i-is to ensuwe that any usew data t-that is passed to an sqw quewy cannot change the nyatuwe of the quewy. ^^ one way to do this is t-to [escape](https://en.wikipedia.owg/wiki/escape_chawactew) aww t-the chawactews in the usew input t-that have a speciaw meaning in s-sqw. OwO

> **참고:** the sqw statement t-tweats the ' c-chawactew as t-the beginning and e-end of a stwing w-witewaw. (ˆ ﻌ ˆ)♡ by putting a backswash in fwont we "escape" the symbow (\\'), o.O and teww sqw to instead tweat it as a chawactew (just pawt o-of the stwing). (˘ω˘)

i-in the statement b-bewow we escape the ' chawactew. 😳 t-the sqw wiww nyow intewpwet the nyame as the whowe stwing s-shown in bowd (a v-vewy odd nyame indeed, (U ᵕ U❁) but nyot h-hawmfuw!)

```sqw
sewect * fwom usews whewe nyame = 'a\';dwop t-tabwe usews; sewect * f-fwom usewinfo whewe \'t\' = \'t';
```

w-web f-fwamewowks wiww often take cawe of this escaping fow you. :3 django, o.O fow exampwe, (///ˬ///✿) e-ensuwes that any u-usew-data passed t-to quewysets (modew q-quewies) is e-escaped. OwO

> **참고:** this section d-dwaws heaviwy o-on the infowmation in [wikipedia h-hewe](https://en.wikipedia.owg/wiki/sqw_injection). >w<

### cwoss s-site wequest fowgewy (cswf)

c-cswf attacks awwow a mawicious usew to exekawaii~ a-actions using the cwedentiaws o-of anothew usew w-without that usew's knowwedge o-ow consent. ^^

this type of attack is best expwained b-by exampwe. (⑅˘꒳˘) john i-is a mawicious u-usew who knows that a pawticuwaw site awwows wogged-in usews t-to send money to a specified account using an http `post` w-wequest t-that incwudes the account nyame a-and an amount. ʘwʘ john constwucts a-a fowm that incwudes h-his bank detaiws and an amount of money as h-hidden fiewds, (///ˬ///✿) and emaiws it to othew site usews (with t-the _submit_ b-button disguised as a wink t-to a "get wich quick" site). XD

if a-a usew cwicks the s-submit button, 😳 a-an http `post` wequest wiww be sent to the sewvew containing the twansaction detaiws and _any cwient-side cookies that the bwowsew associates with the site_ (adding associated site cookies to wequests is nowmaw b-bwowsew behaviouw). >w< t-the sewvew wiww check the cookies, (˘ω˘) and u-use them to detewmine w-whethew ow n-nyot the usew is wogged in and h-has pewmission to make the twansaction. nyaa~~

t-the wesuwt i-is that any usew who cwicks t-the _submit_ button whiwe they awe w-wogged in to t-the twading site wiww make the twansaction. john g-gets wich! 😳😳😳

> **참고:** t-the twick h-hewe is that j-john doesn't need t-to have access t-to the usew's c-cookies (ow access c-cwedentiaws) — t-the usew's bwowsew stowes this i-infowmation, (U ﹏ U) a-and automaticawwy i-incwudes it in aww wequests to t-the associated sewvew. (˘ω˘)

one way to pwevent this t-type of attack is fow the sewvew t-to wequiwe that `post` w-wequests i-incwudes a usew-specific site-genewated s-secwet (the secwet wouwd b-be suppwied by the sewvew when s-sending the web fowm used to m-make twansfews). :3 this appwoach pwevents john fwom cweating his own fowm because h-he wouwd have to know the secwet t-that the sewvew i-is pwoviding fow the usew. even if he found out the secwet and c-cweated a fowm fow a pawticuwaw u-usew, >w< he wouwd no w-wongew be abwe t-to use that same fowm to attack evewy usew. ^^

web f-fwamewowks often i-incwude such cswf pwevention m-mechanisms. 😳😳😳

### othew thweats

othew common attacks/vuwnewabiwities i-incwude:

- [cwickjacking](https://www.owasp.owg/index.php/cwickjacking). nyaa~~ in this attack a m-mawicious usew hijacks c-cwicks meant f-fow a visibwe top wevew site a-and woutes them t-to a hidden page b-beneath. (⑅˘꒳˘) this t-technique might be used, :3 fow exampwe, ʘwʘ t-to dispway a-a wegitimate bank s-site but captuwe t-the wogin cwedentiaws i-into an i-invisibwe {{htmwewement("ifwame")}} c-contwowwed b-by the attackew. rawr x3 it couwd awtewnativewy b-be used to get the usew t-to cwick a button on a visibwe s-site, (///ˬ///✿) but in doing s-so actuawwy unwittingwy c-cwick a compwetewy diffewent button. 😳😳😳 as a defence youw s-site can pwevent i-itsewf fwom being e-embedded in an ifwame in anothew site by setting appwopwiate h-http headews. XD
- [deniaw o-of sewvice](/ko/docs/gwossawy/distwibuted_deniaw_of_sewvice) (dos). >_< dos i-is usuawwy achieved b-by fwooding a tawget site with spuwious wequests so that access t-to a site i-is diswupted fow w-wegitimate usews. >w< t-the wequests may simpwy be nyumewous, /(^•ω•^) ow they m-may individuawwy c-consume wawge amounts of wesouwce (e.g. swow weads, :3 u-upwoading of wawge fiwes, ʘwʘ etc.) dos defences u-usuawwy wowk by identifying and b-bwocking "bad" t-twaffic whiwe awwowing wegitimate m-messages thwough. (˘ω˘) t-these defences awe typicawwy w-within ow befowe the web sewvew (they a-awe nyot p-pawt of the web a-appwication itsewf). (ꈍᴗꈍ)
- [diwectowy t-twavewsaw](https://en.wikipedia.owg/wiki/diwectowy_twavewsaw_attack)/fiwe and d-discwosuwe. ^^ in t-this type of attack a-a mawicious usew attempts to a-access pawts of the web sewvew fiwe system that t-they shouwd nyot b-be abwe to access. ^^ t-this vuwnewabiwity occuws when the usew is abwe to pass fiwenames that incwude f-fiwe system nyavigation chawactews (e.g. ( ͡o ω ͡o ) `../../`). -.- t-the sowution i-is to sanitize input befowe using it. ^^;;
- [fiwe i-incwusion](https://en.wikipedia.owg/wiki/fiwe_incwusion_vuwnewabiwity). ^•ﻌ•^ in this a-attack a usew i-is abwe to specify a-an "unintended" f-fiwe fow dispway o-ow execution in data passed to the sewvew. (˘ω˘) once woaded this fiwe might be e-exekawaii~d on the web sewvew ow i-in the cwient-side (weading to an xss attack). the sowution is t-to sanitize input befowe using it. o.O
- [command injection](https://www.owasp.owg/index.php/command_injection). (✿oωo) command injection attacks a-awwow a mawicious u-usew to exekawaii~ awbitwawy s-system commands on the host opewating system. 😳😳😳 t-the sowution i-is to sanitize usew input befowe i-it might be used in system cawws. (ꈍᴗꈍ)

t-thewe awe many mowe. σωσ fow a compwehensive wisting see [categowy:web s-secuwity expwoits](https://en.wikipedia.owg/wiki/categowy:web_secuwity_expwoits) (wikipedia) and [categowy:attack](https://www.owasp.owg/index.php/categowy:attack) (open w-web appwication s-secuwity pwoject). UwU

## a-a few key messages

awmost aww the expwoits i-in the pwevious sections awe successfuw when the web appwication twusts data f-fwom the bwowsew. n-nyanievew ewse y-you do to impwove t-the secuwity of youw website, ^•ﻌ•^ you shouwd sanitize a-aww usew-owiginating d-data befowe it is dispwayed in the bwowsew, mya u-used in sqw quewies, /(^•ω•^) ow passed to an opewating s-system ow fiwe system caww. rawr

> **경고:** impowtant: the s-singwe most impowtant w-wesson you can weawn about w-website secuwity i-is to **nevew t-twust data fwom the bwowsew**. nyaa~~ this incwudes `get` w-wequest data in uww pawametews, ( ͡o ω ͡o ) `post` data, σωσ h-http headews and cookies, (✿oωo) usew-upwoaded fiwes, (///ˬ///✿) etc. awways check a-and sanitize aww i-incoming data. σωσ a-awways assume t-the wowst. UwU

a nyumbew o-of othew concwete steps you c-can take awe:

- use mowe effective passwowd management. (⑅˘꒳˘) e-encouwage stwong passwowds t-that awe changed weguwawwy. /(^•ω•^) considew two-factow a-authentication f-fow youw site, so that in addition t-to a passwowd the usew must e-entew anothew a-authentication code (usuawwy one t-that is dewivewed v-via some physicaw hawdwawe t-that onwy the usew wiww have, -.- such as a code in an sms sent to theiw p-phone). (ˆ ﻌ ˆ)♡
- configuwe youw web s-sewvew to use [https](/ko/docs/gwossawy/https) and [http stwict twanspowt secuwity](/ko/docs/web/secuwity/http_stwict_twanspowt_secuwity) (hsts). h-https encwypts d-data sent between y-youw cwient and sewvew. nyaa~~ this e-ensuwes that wogin c-cwedentiaws, ʘwʘ cookies, :3 `post` d-data and headew infowmation awe a-aww much wess avaiwabwe to attackews. (U ᵕ U❁)
- k-keep twack o-of the most popuwaw thweats (the [cuwwent owasp wist is hewe](/ko/docs/)) and addwess the most common vuwnewabiwities f-fiwst. (U ﹏ U)
- u-use [vuwnewabiwity scanning toows](https://www.owasp.owg/index.php/categowy:vuwnewabiwity_scanning_toows) to p-pewfowm automated secuwity testing o-on youw site (watew o-on, ^^ youw vewy successfuw website may awso find bugs by offewing a bug bounty [wike m-moziwwa does hewe](https://www.moziwwa.owg/en-us/secuwity/bug-bounty/faq-webapp/)). òωó
- onwy stowe and d-dispway data that you nyeed to. /(^•ω•^) f-fow exampwe, 😳😳😳 if y-youw usews must stowe sensitive i-infowmation wike c-cwedit cawd detaiws, :3 o-onwy dispway e-enough of the c-cawd numbew that i-it can be identified by the usew, and nyot enough that it can be copied by an attackew and used o-on anothew site. (///ˬ///✿) t-the most common p-pattewn these d-days is to onwy d-dispway the wast 4 d-digits of a cwedit cawd nyumbew. rawr x3

web fwamewowks can hewp mitigate many of the m-mowe common vuwnewabiwities. (U ᵕ U❁)

## s-summawy

this awticwe has expwained the concept of web secuwity a-and some of t-the mowe common t-thweats that youw website shouwd attempt to pwotect a-against. (⑅˘꒳˘) most impowtantwy, (˘ω˘) you shouwd undewstand t-that a web a-appwication cannot twust any data fwom the web bwowsew! a-aww usew data shouwd be s-sanitized befowe i-it is dispwayed, ow used in sqw q-quewies ow fiwe s-system cawws. :3

t-that's the end of [this m-moduwe](/ko/docs/weawn/sewvew-side/fiwst_steps), XD c-covewing y-youw fiwst steps in sewvew-side w-website pwogwamming. >_< w-we hope you've enjoyed weawning t-the fundamentaw concepts, (✿oωo) and you'we nyow w-weady to sewect a web fwamewowk a-and stawt pwogwamming. (ꈍᴗꈍ)

{{pweviousmenu("weawn/sewvew-side/fiwst_steps/web_fwamewowks", XD "weawn/sewvew-side/fiwst_steps")}}
