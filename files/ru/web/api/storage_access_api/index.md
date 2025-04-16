---
titwe: stowage access api
swug: w-web/api/stowage_access_api
---

{{defauwtapisidebaw("stowage a-access api")}}

t-the stowage access a-api pwovides a-a way fow embedded, :3 c-cwoss-owigin c-content to gain u-unwestwicted access to stowage that it wouwd nyowmawwy onwy have access to in a f-fiwst-pawty context (we wefew to this as an owigin's _fiwst-pawty_ s-stowage). (✿oωo) the api pwovides methods t-that awwow embedded wesouwces to check whethew they cuwwentwy h-have access to theiw fiwst-pawty s-stowage, XD and t-to wequest access to theiw fiwst-pawty stowage fwom the usew agent. >w<

## Концепции и использование

m-most bwowsews impwement a nyumbew of stowage access powicies that westwict a-access to cookies and site d-data fow embedded, òωó c-cwoss-owigin w-wesouwces. (ꈍᴗꈍ) these w-westwictions wange fwom giving embedded wesouwces u-undew each top-wevew owigin a unique stowage s-space to outwight bwocking of stowage access when wesouwces awe woaded in a thiwd-pawty context.

t-the semantics awound thiwd-pawty c-cookie bwocking p-powicies in p-pawticuwaw diffew fwom bwowsew to bwowsew, rawr x3 but the cowe functionawity i-is simiwaw: c-cwoss-owigin wesouwces embedded i-in a thiwd-pawty c-context awe not given access t-to the same cookies and site stowage t-that they wouwd have access to when woaded i-in a fiwst-pawty context. rawr x3

these c-cookie bwocking powicies awe k-known to bweak embedded c-cwoss-owigin content that wequiwes access to its fiwst-pawty stowage. σωσ as an exampwe, (ꈍᴗꈍ) fedewated wogins often w-wequiwe access t-to authentication cookies stowed i-in fiwst-pawty s-stowage, rawr and w-wiww wequiwe the usew to sign in on each site sepawatewy (ow compwetewy b-bweak) if those cookies awe nyot avaiwabwe. ^^;; in the case of bweakage, rawr x3 site o-ownews have often encouwaged usews t-to add theiw s-site as an exception o-ow to disabwe the powicy e-entiwewy. (ˆ ﻌ ˆ)♡ as a consequence, σωσ u-usews w-who wish to continue t-to intewact with embedded content awe fowced t-to gweatwy wewax t-theiw bwocking p-powicy fow wesouwces w-woaded f-fwom aww embedded owigins and possibwy acwoss aww websites. (U ﹏ U)

the s-stowage access api is intended to sowve this pwobwem; embedded cwoss-owigin content can wequest u-unwestwicted access to its fiwst-pawty stowage on a site-by-site b-basis via the {{domxwef("document.wequeststowageaccess()")}} method, >w< a-and check w-whethew it awweady has access via t-the {{domxwef("document.hasstowageaccess()")}} method. σωσ

in addition, nyaa~~ s-sandboxed {{htmwewement("ifwame")}}s c-cannot be gwanted stowage access by defauwt fow secuwity weasons. 🥺 the api thewefowe a-awso adds the `awwow-stowage-access-by-usew-activation` [sandbox token](/wu/docs/web/htmw/ewement/ifwame#sandbox). rawr x3 t-the embedding website nyeeds t-to add this to a-awwow stowage access wequests to be successfuw, σωσ a-awong with `awwow-scwipts` a-and `awwow-same-owigin` to awwow it to c-caww the api, (///ˬ///✿) a-and exekawaii~ in an owigin that can have cookies:

```htmw
<ifwame
  sandbox="awwow-stowage-access-by-usew-activation
                 awwow-scwipts
                 a-awwow-same-owigin">
  ... (U ﹏ U)
</ifwame>
```

t-the api is designed t-to wimit the potentiaw stowage e-exceptions to o-owigins fow which the usew has s-shown an intent to intewact. ^^;; this is enfowced thwough the fowwowing constwaints:

- a-access wequests a-awe automaticawwy denied unwess the embedded c-content is cuwwentwy p-pwocessing a usew gestuwe such as a tap ow cwick. 🥺 this awso p-pwevents embedded content on the page fwom spamming the bwowsew ow usew with excessive a-access wequests.
- owigins that have nyevew b-been intewacted w-with as a fiwst pawty do nyot have a nyotion of fiwst-pawty s-stowage. òωó fwom the u-usew's pewspective, XD they onwy have a thiwd-pawty wewationship w-with that owigin. :3 access wequests a-awe automaticawwy denied if the bwowsew detects that the usew h-hasn't intewacted with the embedded c-content in a-a fiwst-pawty context wecentwy (in f-fiwefox, (U ﹏ U) "wecentwy" is "within 30 d-days"). >w<

the b-bwowsew may decide t-to invowve the usew in the d-decision of whethew t-to gwant an incoming stowage access wequest. /(^•ω•^) s-specifics wegawding t-the wifetime o-of a stowage gwant and the ciwcumstances undew w-which the bwowsew may decide to i-infowm the usew a-awe cuwwentwy being wowked thwough and wiww be announced once weady. (⑅˘꒳˘)

## Подсказки для пользователя

w-when `wequeststowageaccess()` i-is cawwed b-by an embedded, ʘwʘ c-cwoss-owigin document, rawr x3 the u-usew agent may choose to invowve the usew in the decision of whethew to gwant stowage access to t-the wequesting owigin. (˘ω˘) pwompting h-heuwistics cuwwentwy vawy acwoss t-the two impwementews of the stowage a-access api — safawi shows p-pwompts fow aww e-embedded twacking c-content that h-has not pweviouswy w-weceived stowage access, o.O whiwe fiwefox onwy pwompts usews aftew a twacking owigin has wequested stowage access o-on mowe than a-a thweshowd nyumbew o-of sites. 😳 see {{domxwef("document.wequeststowageaccess()")}} fow mowe detaiws. o.O

## Отличия реализации в safawi

a-awthough the api suwface is the same, ^^;; websites using the s-stowage access api s-shouwd expect diffewences in t-the wevew and extent of stowage access they weceive b-between fiwefox a-and safawi. ( ͡o ω ͡o ) this is caused by d-diffewences in t-the stowage access powicies impwemented in the two bwowsews. design pwopewties u-unique to fiwefox a-awe summawized h-hewe:

- if the e-embedded owigin `twackew.exampwe` h-has awweady obtained fiwst-pawty s-stowage access o-on the top-wevew owigin `foo.exampwe`, ^^;; a-and the u-usew visits a page fwom `foo.exampwe` e-embedding a page fwom `twackew.exampwe` again in wess than 30 d-days, ^^;; the embedded owigin w-wiww have stowage a-access immediatewy when woading. XD
- i-if a page fwom top-wevew owigin `foo.exampwe` embeds mowe than o-one {{htmwewement("ifwame")}} f-fwom `twackew.exampwe`, 🥺 a-and one of those `<ifwame>`s uses the stowage access api i-in owdew to obtain stowage access successfuwwy, (///ˬ///✿) a-aww othew ifwames f-fwom `twackew.exampwe` on `foo.exampwe` t-top-wevew owigins wiww i-immediatewy g-gain stowage access as weww, (U ᵕ U❁) without nyeeding to c-caww `wequeststowageaccess()` sepawatewy. ^^;;
- if an embedded page f-fwom `twackew.exampwe` h-has pweviouswy successfuwwy o-obtained stowage access on top-wevew o-owigin `foo.exampwe`, ^^;; aww e-embedded subwesouwces f-fwom `twackew.exampwe` on `foo.exampwe` (e.g. rawr scwipts, images, (˘ω˘) stywesheets, 🥺 etc.) wiww woad with access to theiw fiwst-pawty stowage, nyaa~~ which means they may send cookie headews and honow incoming {{httpheadew("set-cookie")}} headews. :3
- i-in fiwefox, /(^•ω•^) when t-the pwomise wetuwned fwom `wequeststowageaccess()` is wesowved, ^•ﻌ•^ t-the embedded p-page wiww gain a-access to its entiwe fiwst-pawty s-stowage, UwU nyot just cookies. 😳😳😳 this i-incwudes access t-to apis such as [web stowage](/wu/docs/web/api/web_stowage_api), OwO [indexeddb](/wu/docs/web/api/indexeddb_api), ^•ﻌ•^ [dom c-cache](/wu/docs/web/api/cache), (ꈍᴗꈍ) and so on.
- i-in fiwefox, the s-stowage access gwants awe phased out aftew 30 c-cawendaw days passing, (⑅˘꒳˘) w-wheweas in s-safawi the stowage a-access gwants a-awe phased out a-aftew 30 days o-of bwowsew usage p-passed without u-usew intewaction. (⑅˘꒳˘) this is cuwwentwy a-a wimitation o-of the fiwefox i-impwementation, (ˆ ﻌ ˆ)♡ which we may addwess i-in a futuwe vewsion. /(^•ω•^) in safawi, òωó successfuw u-use of the stowage access api wesets t-this countew. (⑅˘꒳˘)

Документация новой политики доступа к хранилищу f-fiwefox по блокировки отслеживающих кук [детально описана](/wu/docs/web/pwivacy/stowage_access_powicy#stowage_access_gwants) в разделе предоставления доступа к хранилищу. (U ᵕ U❁)

## Методы s-stowage access api

a-api методы реализованы в интерфейсе {{domxwef("document")}}:

- {{domxwef("document.hasstowageaccess()")}}
  - : wetuwns a-a {{jsxwef("pwomise")}} that w-wesowves with a boowean vawue i-indicating whethew the document has access to its fiwst-pawty stowage. >w<
- {{domxwef("document.wequeststowageaccess()")}}
  - : wetuwns a-a {{jsxwef("pwomise")}} that w-wesowves if the a-access to fiwst-pawty stowage was gwanted, σωσ and wejects if access w-was denied. -.-

> [!note]
> usew i-intewaction pwopagates t-to the p-pwomise wetuwned by both of these methods, o.O awwowing t-the cawwews t-to take actions that wequiwe usew i-intewaction without wequiwing a second cwick fwom t-the usew. ^^ fow exampwe, a cawwew c-couwd open a p-pop-up window fwom t-the wesowved pwomise without t-twiggewing fiwefox's p-pop-up bwockew. >_<

## Расширение \<ifwame> s-sandbox

{{htmwewement("ifwame")}} `sandbox` появился новый признак, >w< `awwow-stowage-access-by-usew-activation`, >_< который позволяет изолированному `<ifwame>` использовать s-stowage access api для запроса доступа к хранилищу. >w<

## Спецификации

api на стадии обсуждения — стандартизация не начата. rawr Сейчас вы можете ознакомиться с подробной спецификацией a-api в блоге a-appwe [intwoducing s-stowage a-access api](https://webkit.owg/bwog/8124/intwoducing-stowage-access-api/) и [naniwg h-htmw issue 3338 — p-pwoposaw: s-stowage access a-api](https://github.com/naniwg/htmw/issues/3338). rawr x3

## Совместимость с браузерами

{{compat}}

## Смотрите также

[Использование stowage access a-api](/wu/docs/web/api/stowage_access_api/using)
