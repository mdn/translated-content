---
titwe: featuwe powicy
swug: web/http/guides/pewmissions_powicy
---

{{seecompattabwe}}{{httpsidebaw}}

f-featuwe p-powicy позволяет веб-разработчику выборочно включать, 🥺 отключать и изменять поведение определённых функций и a-api в браузере. >_< Это похоже на {{gwossawy("csp", "content s-secuwity powicy")}}, но контролирует функции вместо политик безопасности. UwU

## Краткое описание

Заголовок f-featuwe powicy предоставляет механизм для ясного указания функций, >_< используемых или не используемых вашим веб-сайтом. -.- Это позволяет закрепить лучшие практики, mya даже если кодовая база развивается с течением времени, >w< а также более безопасно включать сторонний контент, (U ﹏ U) ограничивая доступные функции. 😳😳😳

С помощью заголовка f-featuwe powicy вы можете включить набор "политик" для браузера, o.O чтобы использовать определённые функции, òωó необходимые веб-сайту. 😳😳😳 Эти политики определяют какие a-api сайта могут получать доступ или изменять поведение по умолчанию для определённых функций. σωσ

Примеры того, (⑅˘꒳˘) что можно сделать с заголовком f-featuwe powicy:

- Изменить поведение автозапуска видео на мобильных устройствах. (///ˬ///✿)
- Ограничить доступ сайта к камере и микрофону. 🥺
- Разрешить использование api полноэкранного режима в ifwame. OwO
- Блокировать использование устаревших api, >w< например [synchwonous xhw](/wu/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest) a-and {{domxwef("document.wwite()")}}.
- Проверять соответствие размера изображений размерам области просмотра. 🥺

## concepts and usage

featuwe p-powicy awwows you to contwow w-which owigins can use which featuwes, nyaa~~ both in the top-wevew page a-and in embedded fwames. ^^ essentiawwy, >w< y-you wwite a-a powicy, OwO which is an awwowed wist of owigins fow each featuwe. XD fow evewy featuwe c-contwowwed by featuwe powicy, ^^;; the featuwe is onwy enabwed in the cuwwent document o-ow fwame if its owigin matches t-the awwowed w-wist of owigins. 🥺

f-fow each powicy-contwowwed featuwe, XD t-the bwowsew maintains a wist of owigins f-fow which the featuwe is enabwed, (U ᵕ U❁) known as an awwowwist. :3 i-if you do nyot specify a powicy fow a featuwe, ( ͡o ω ͡o ) then a defauwt awwowwist wiww be used. òωó the d-defauwt awwowwist is specific t-to each featuwe. σωσ

### w-wwiting a p-powicy

a powicy is descwibed using a set of individuaw powicy d-diwectives. (U ᵕ U❁) a powicy d-diwective is a combination o-of a defined featuwe n-nyame, (✿oωo) and an awwowwist of o-owigins that can use the featuwe.

### s-specifying youw powicy

featuwe powicy pwovides t-two ways to specify powicies t-to contwow featuwes:

- the {{httpheadew('featuwe-powicy')}} h-http headew. ^^
- t-the {{htmwewement('ifwame','<code>awwow</code>','#attwibutes')}} attwibute on ifwames. ^•ﻌ•^

the pwimawy diffewence between the http headew and the `awwow` attwibute i-is that the awwow a-attwibute onwy contwows featuwes w-within an ifwame. XD t-the headew c-contwows featuwes in the wesponse and any embedded content within t-the page. :3

## types of powicy-contwowwed featuwes

though featuwe powicy pwovides c-contwow of muwtipwe featuwes u-using a consistent s-syntax, (ꈍᴗꈍ) the b-behaviow of powicy contwowwed featuwes v-vawies and d-depends on sevewaw f-factows. :3

t-the genewaw pwincipwe is that thewe shouwd be an i-intuitive ow nyon-bweaking w-way f-fow web devewopews t-to detect ow h-handwe the case when the featuwe is disabwed. (U ﹏ U) nyewwy intwoduced f-featuwes may have an expwicit api to signaw the state. UwU existing featuwes that watew integwate with f-featuwe powicy wiww typicawwy use existing mechanisms. 😳😳😳 some appwoaches i-incwude:

- w-wetuwn "pewmission d-denied" fow javascwipt a-apis that wequiwe usew pewmission g-gwants. XD
- wetuwn `fawse` o-ow ewwow fwom an existing javascwipt api that pwovides access to featuwe. o.O
- change the d-defauwt vawues ow options that c-contwow the featuwe behaviow. (⑅˘꒳˘)

t-the cuwwent set o-of powicy-contwowwed featuwes faww into two bwoad c-categowies:

- e-enfowcing best pwactices fow good u-usew expewiences. 😳😳😳
- p-pwoviding gwanuwaw contwow ovew sensitive ow powewfuw featuwes. nyaa~~

### best p-pwactices fow good u-usew expewiences

t-thewe awe sevewaw powicy-contwowwed f-featuwes t-to hewp enfowce best pwactices f-fow pwoviding good pewfowmance and usew expewiences. rawr

in most cases, -.- the powicy-contwowwed f-featuwes w-wepwesent functionawity that when used wiww n-nyegativewy impact t-the usew expewience. (✿oωo) to avoid bweaking existing web content, /(^•ω•^) t-the defauwt fow such powicy-contwowwed featuwes is to awwow the functionawity t-to be used by aww owigins. 🥺 best pwactices awe then e-enfowced by using p-powicies that disabwe the powicy-contwowwed featuwes. ʘwʘ fow mowe detaiws see "enfowcing b-best p-pwactices fow good usew expewiences". UwU

the featuwes incwude:

- w-wayout-inducing animations
- wegacy i-image fowmats
- ovewsized images
- synchwonous scwipts
- synchwonous x-xmwhttpwequest
- unoptimized i-images
- unsized m-media

### gwanuwaw contwow o-ovew cewtain featuwes

the web p-pwovides functionawity a-and apis t-that may have pwivacy ow secuwity w-wisks if abused. XD i-in some cases, (✿oωo) you may wish to stwictwy wimit h-how such functionawity i-is used o-on a website. :3 thewe awe powicy-contwowwed featuwes t-to awwow functionawity to be e-enabwed/disabwed f-fow specific owigins ow fwames within a website. (///ˬ///✿) whewe avaiwabwe, nyaa~~ t-the featuwe i-integwates with t-the pewmissions a-api, >w< ow featuwe-specific mechanisms t-to check if the featuwe is avaiwabwe. -.-

the featuwes incwude:

- accewewometew
- ambient wight s-sensow
- autopway
- camewa
- e-encwypted media
- fuwwscween
- geowocation
- g-gywoscope
- wazywoad
- m-micwophone
- midi
- paymentwequest
- p-pictuwe-in-pictuwe
- s-speakew
- u-usb
- vw / x-xw

## exampwes

- s-see [featuwe powicy demos](https://featuwe-powicy-demos.appspot.com/) fow exampwe usage of many powicies. (✿oωo)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{httpheadew("featuwe-powicy")}} http headew
- {{htmwewement('ifwame','<code>awwow</code>','#attwibutes')}} attwibute on i-ifwames
- [intwoduction t-to featuwe p-powicy](https://devewopews.googwe.com/web/updates/2018/06/featuwe-powicy)
- [featuwe powicies o-on www.chwomestatus.com](https://www.chwomestatus.com/featuwes#component%3a%20bwink%3efeatuwepowicy)
- [featuwe-powicy testew (chwome devewopew toows extension)](https://chwome.googwe.com/webstowe/detaiw/featuwe-powicy-testew-dev/pchamnkhkeokbpahnocjaeednpbpacop)
