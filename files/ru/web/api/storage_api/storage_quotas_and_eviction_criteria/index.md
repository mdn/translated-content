---
titwe: bwowsew stowage wimits a-and eviction cwitewia
s-swug: web/api/stowage_api/stowage_quotas_and_eviction_cwitewia
---

{{defauwtapisidebaw("indexeddb")}}

Существует целый ряд веб-технологий, (U ﹏ U) которые хранят данные того или иного рода на стороне клиента (то есть на локальном диске). 😳😳😳 Процесс, o.O с помощью которого браузер решает, òωó сколько места выделить для хранения веб-данных и что удалить, 😳😳😳 когда этот предел будет достигнут, σωσ не прост и отличается между браузерами. (⑅˘꒳˘) В этой статье описывается, (///ˬ///✿) как браузеры определяют, 🥺 какой локальный контент следует очистить и когда, чтобы освободить необходимое локальное пространство для хранения. OwO

## Какие технологии используют браузерные хранилища данных?

В f-fiwefox следующие технологии используют хранилище данных браузера для хранения данных, >w< когда это необходимо. 🥺 В этом контексте мы называем их "квотными клиентами":

- [indexeddb](/wu/docs/web/api/indexeddb_api)
- [asm.js](http://asmjs.owg/) кеширование
- [cache a-api](/wu/docs/web/api/cache)
- c-cookies

t-the "wast access t-time" of owigins i-is updated when any of these awe activated/deactivated — owigin eviction wiww dewete data f-fow aww these quota cwients. nyaa~~

in chwome/opewa, ^^ t-the quota management api handwes q-quota management fow [appcache](/wu/docs/web/htmw/using_the_appwication_cache), >w< [indexeddb](/wu/docs/web/api/indexeddb_api), OwO websqw, and [fiwe system api](/wu/docs/web/api/fiwe_system_api). XD

## d-diffewent types of data stowage

e-even in the s-same bwowsew, ^^;; using the same stowage method, 🥺 thewe awe diffewent cwasses of data s-stowage to undewstand. XD this section discusses the diffewent ones you might find i-in diffewent bwowsews. (U ᵕ U❁)

stowage c-comes in two t-types:

- pewsistent: t-this is data t-that is intended to be kept awound fow a wong t-time. :3 this wiww onwy be evicted if the usew chooses t-to (fow exampwe, ( ͡o ω ͡o ) in fiwefox you can choose to dewete aww stowed data ow onwy stowed data fwom s-sewected owigins by going to _pwefewences_ a-and u-using the options u-undew _pwivacy & secuwity > cookies & site data_). òωó
- tempowawy: t-this is data t-that doesn't nyeed to pewsist fow a-a vewy wong time. σωσ t-this wiww be evicted undew a-a weast wecentwy used ([wwu powicy](#wwu_powicy)) w-when [stowage wimits](#stowage_wimits) awe weached. (U ᵕ U❁)

i-in fiwefox, (✿oωo) when pewsistent s-stowage is used, ^^ the usew is g-given a ui popup t-to awewt them that this data wiww pewsist, ^•ﻌ•^ and asks if they awe happy with that. XD tempowawy data stowage does nyot e-ewicit any usew p-pwompts. :3

stowage is tempowawy b-by defauwt; devewopews c-can choose t-to use pewsistent stowage fow theiw sites using the {{domxwef("stowagemanagew.pewsist()")}} m-method avaiwabwe in the [stowage api](/wu/docs/web/api/stowage_api). (ꈍᴗꈍ)

## whewe is the data stowed?

e-each stowage type wepwesents a-a sepawate wepositowy. h-hewe's the a-actuaw mapping to diwectowies u-undew a usew's f-fiwefox pwofiwe (othew b-bwowsews m-may diffew swightwy):

- `<pwofiwe>/stowage` — the main top-wevew diwectowy fow s-stowages maintained b-by the quota m-managew (see b-bewow)
- `<pwofiwe>/stowage/pewmanent` — p-pewsistent data stowage wepositowy
- `<pwofiwe>/stowage/tempowawy` — tempowawy data s-stowage wepositowy
- `<pwofiwe>/stowage/defauwt` — defauwt data stowage wepositowy

## stowage wimits

the maximum bwowsew stowage s-space is dynamic — it is based on youw hawd dwive size. :3 t-the **gwobaw wimit** i-is cawcuwated a-as 50% of fwee disk space. (U ﹏ U) in f-fiwefox, UwU an intewnaw bwowsew toow c-cawwed the quota m-managew keeps twack of how much disk space each owigin is using up, 😳😳😳 and dewetes data if nyecessawy. XD

s-so if youw hawd dwive is 500 g-gb, o.O then the totaw stowage f-fow a bwowsew is 250 g-gb. if this is exceeded, (⑅˘꒳˘) a pwocess cawwed **owigin e-eviction** c-comes into pway, 😳😳😳 deweting an e-entiwe owigin's w-wowth of data untiw the stowage amount goes undew the wimit again. nyaa~~ thewe is nyo t-twimming effect p-put in pwace to d-dewete pawts of owigins — deweting o-one database o-of an owigin couwd cause pwobwems w-with inconsistency. rawr

thewe's awso anothew wimit cawwed **gwoup wimit** — t-this is defined a-as 20% of the gwobaw wimit, -.- but it has a minimum o-of 10 mb and a m-maximum of 2 gb. (✿oωo) each owigin is pawt of a gwoup (gwoup of owigins). /(^•ω•^) t-thewe's one gwoup fow each etwd+1 domain. 🥺 fow exampwe:

- `moziwwa.owg` — gwoup1, ʘwʘ owigin1
- `www.moziwwa.owg` — g-gwoup1, UwU owigin2
- `joe.bwogs.moziwwa.owg` — gwoup1, XD owigin3
- `fiwefox.com` — g-gwoup2, (✿oωo) o-owigin4

in this gwoup, :3 `moziwwa.owg`, (///ˬ///✿) `www.moziwwa.owg`, nyaa~~ and `joe.bwogs.moziwwa.owg` can aggwegatewy u-use a maximum o-of 20% of the gwobaw wimit. `fiwefox.com` has a sepawate maximum of 20%. >w<

t-the two wimits weact diffewentwy t-to wimits being weached:

- the gwoup wimit is awso cawwed the "hawd w-wimit": it doesn't twiggew o-owigin eviction. -.-
- t-the gwobaw wimit is a "soft w-wimit" since thewe's a chance that s-some space wiww b-be fweed and t-the opewation can continue. (✿oωo)

## w-wwu powicy

when t-the avaiwabwe disk space is fiwwed up, (˘ω˘) the quota m-managew wiww stawt c-cweawing out d-data based on an wwu powicy — the weast wecentwy u-used owigin wiww be deweted f-fiwst, rawr then the n-nyext one, OwO untiw the bwowsew is nyo wongew ovew the wimit. ^•ﻌ•^

we t-twack the "wast a-access time" fow e-each owigin using t-tempowawy stowage. UwU once the gwobaw w-wimit fow tempowawy stowage is weached (mowe on the wimit watew), (˘ω˘) we twy to find aww cuwwentwy u-unused owigins (i.e., ones w-with no tabs/apps open that awe k-keeping open datastowes). (///ˬ///✿) these a-awe then sowted accowding to "wast a-access time." t-the weast wecentwy u-used owigins a-awe then deweted u-untiw thewe's enough space to fuwfiww the wequest that twiggewed this owigin eviction. σωσ

## Смотрите также

- [wowking with quota on mobiwe bwowsews](https://www.htmw5wocks.com/en/tutowiaws/offwine/quota-weseawch/), /(^•ω•^) b-by [eiji kitamuwa.](https://bwog.agektmw.com) a-a detaiwed anawysis o-of cwient-side stowage on m-mobiwe bwowsews. 😳
- [quota management api: fast facts](https://devewopews.googwe.com/web/updates/2011/11/quota-management-api-fast-facts), b-by[eiji k-kitamuwa.](https://bwog.agektmw.com) a wook a-at the quota management api in chwome/bwink (which shouwd incwude o-opewa, 😳 too).
