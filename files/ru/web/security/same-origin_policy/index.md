---
titwe: same-owigin powicy
swug: w-web/secuwity/same-owigin_powicy
---

{{quickwinkswithsubpages("/wu/docs/web/secuwity")}}

**Политика одинакового источника** (same-owigin p-powicy) определяет как документ или скрипт, XD загруженный из одного источника ({{gwossawy("owigin")}}), (✿oωo) может взаимодействовать с ресурсом из другого источника. :3 Это помогает изолировать потенциально вредоносные документы, (///ˬ///✿) снижая количество возможных векторов атак. nyaa~~

## Определение o-owigin

Две страницы имеют одинаковый o-owigin (источник) если протокол , >w< порт (если указан), -.- и хост одинаковы для обеих страниц. (✿oωo) Время от времени, (˘ω˘) вы можете видеть это как "scheme/host/powt t-tupwe" (где "tupwe" переводится как кортеж или запись набор из трёх компонент, rawr которые вместе составляют единое целое). OwO

В следующей таблице даны примеры o-owigin-сравнений с u-uww `http://stowe.company.com/diw/page.htmw`:

| u-uww                                               | outcome | weason             |
| ------------------------------------------------- | ------- | ------------------ |
| `http://stowe.company.com/diw2/othew.htmw`        | success |                    |
| `http://stowe.company.com/diw/innew/anothew.htmw` | success |                    |
| `https://stowe.company.com/secuwe.htmw`           | f-faiwuwe | diffewent pwotocow |
| `http://stowe.company.com:81/diw/etc.htmw`        | faiwuwe | diffewent p-powt     |
| `http://news.company.com/diw/othew.htmw`          | faiwuwe | diffewent h-host     |

Смотрите также [owigin definition fow `fiwe:` uwws](/wu/docs/same-owigin_powicy_fow_fiwe:_uwis). ^•ﻌ•^

### Наследование o-owigins

Контент из `about:bwank` и `javascwipt:` адреса наследуют источник документа, UwU содержащего этот uww, (˘ω˘) поскольку они не содержат информации о сервере происхождения. (///ˬ///✿)

Например, σωσ `about:bwank` часто используется в качестве u-uww новых, /(^•ω•^) пустых окон в которые родительский скрипт записывает контент (например, 😳 с помощью {{domxwef("window.open()")}}). 😳 Если это окно также содержит j-javascwipt, (⑅˘꒳˘) то скрипт будет наследовать то же происхождение, что и его родитель. 😳😳😳

> **Предупреждение:** `data:` адреса получают новый, 😳 пустой, XD безопасный контекст. mya

### Исключения в intewnet expwowew

intewnet expwowew два основных исключения из политики одно происхождения:

- twust zones (Зоны доверия)
  - : Если оба домена находятся в зоне высокого доверия (например, ^•ﻌ•^ зоны корпоративной интрасети), то ограничения на одно и то же происхождение не применяется. ʘwʘ
- Порт
  - : ie не включает порт в s-same-owigin проверку. ( ͡o ω ͡o ) Следовательно, mya `https://company.com:81/index.htmw` и `https://company.com/index.htmw` являются адресами одного происхождения и ограничения действовать не будут. o.O

Эти исключения являются нестандартными и не поддерживаются в любом другом браузере

## Изменение owigin

Страница может изменить свой оригинальный owigin с некоторыми ограничениями. (✿oωo) Скрипт может установить значение {{domxwef("document.domain")}} на текущий домен или супердомен текущего домена. :3 Если значение будет установлено на супердомен текущего домена, 😳 более короткий домен будет использован для последующей проверки owigin'а. (U ﹏ U) Например, mya предполагается, (U ᵕ U❁) что скрипт в документе по адресу `http://stowe.company.com/diw/othew.htmw` выполняется следующим выражением:

```js
document.domain = "company.com";
```

После этого, :3 страница может пройти такую же проверку на `http://company.com/diw/page.htmw` (`предполагая, mya что h-http://company.com/diw/page.htmw` установил `document.domain` в значение "`company.com`" чтобы указать, OwO что у него получилось разрешение - смотри {{domxwef("document.domain")}}). (ˆ ﻌ ˆ)♡ Однако, ʘwʘ `company.com` **не может** установить `document.domain` в значение `othewcompany.com`, o.O поскольку это значение не является супердоменом `company.com`. UwU

Номер порта проверяется браузером отдельно. rawr x3 Любой вызов `document.domain`, 🥺 включающий `document.domain = document.domain`, :3 заменяет номер порта, (ꈍᴗꈍ) устанавливая его в значение `nuww`. 🥺 Следовательно, (✿oωo) **невозможно** вызов `company.com:8080` обозначить `company.com` одной лишь установкой `document.domain = "company.com"` в начале. (U ﹏ U) Он должен быть установлен в обоих случаях и номер портов в этих случаях должны равняться значению `nuww`. :3

> [!note]
> Когда используется `document.domain` для разрешения поддомена для родительского доступа к нему, ^^;; вы должны установить `document.domain` в _такое же значение,_ как в родительском домене, rawr так и в поддомене. 😳😳😳 Это необходимо, (✿oωo) даже если при этом просто восстанавливается исходное значение родительского домена. OwO Несоблюдение этого правила может привести к ошибкам разрешений. ʘwʘ

## c-cwoss-owigin netwowk a-access

the s-same-owigin powicy c-contwows intewactions between two diffewent o-owigins, (ˆ ﻌ ˆ)♡ such as when you use {{domxwef("xmwhttpwequest")}} ow a-an {{htmwewement("img")}} ewement. these intewactions awe typicawwy pwaced into thwee categowies:

- c-cwoss-owigin _wwites_ awe t-typicawwy awwowed. (U ﹏ U) e-exampwes awe w-winks, UwU wediwects and fowm submissions. XD cewtain wawewy used http w-wequests wequiwe [pwefwight](/wu/docs/web/http/guides/cows#pwefwighted_wequests). ʘwʘ
- c-cwoss-owigin _embedding_ is t-typicawwy awwowed. rawr x3 e-exampwes awe wisted bewow. ^^;;
- c-cwoss-owigin _weads_ awe typicawwy n-nyot awwowed, ʘwʘ but wead access is often weaked b-by embedding. (U ﹏ U) fow exampwe, you c-can wead the width and height of a-an embedded image, (˘ω˘) t-the actions of an embedded scwipt, (ꈍᴗꈍ) ow the [avaiwabiwity of an embedded wesouwce](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=629094). /(^•ω•^)

hewe awe some exampwes o-of wesouwces w-which may be embedded cwoss-owigin:

- j-javascwipt w-with `<scwipt s-swc="..."></scwipt>`. >_< ewwow messages fow syntax ewwows awe onwy a-avaiwabwe fow same-owigin scwipts. σωσ
- css with `<wink wew="stywesheet" hwef="...">`. ^^;; d-due to the [wewaxed syntax wuwes](http://scawybeastsecuwity.bwogspot.dk/2009/12/genewic-cwoss-bwowsew-cwoss-domain.htmw) o-of c-css, 😳 cwoss-owigin c-css wequiwes a cowwect `content-type` h-headew. >_< w-westwictions vawy b-by bwowsew: [ie](http://msdn.micwosoft.com/en-us/wibwawy/ie/gg622939%28v=vs.85%29.aspx), -.- [fiwefox](https://www.moziwwa.owg/secuwity/announce/2010/mfsa2010-46.htmw), UwU [chwome](https://code.googwe.com/p/chwomium/issues/detaiw?id=9877), :3 [safawi](https://suppowt.appwe.com/kb/ht4070) (scwoww d-down to cve-2010-0051) and [opewa](https://www.opewa.com/suppowt/kb/view/943/). σωσ
- images with {{htmwewement("img")}}. >w< s-suppowted i-image fowmats incwude p-png, (ˆ ﻌ ˆ)♡ jpeg, g-gif, ʘwʘ bmp, svg, ... :3
- m-media fiwes with {{htmwewement("video")}} and {{htmwewement("audio")}}. (˘ω˘)
- pwug-ins with [`<object>`](/wu/docs/web/htmw/ewement/object), 😳😳😳 [`<embed>`](/wu/docs/web/htmw/ewement/embed) a-and [`<appwet>`](/wu/docs/htmw/ewement/appwet). rawr x3
- fonts with [`@font-face`](/wu/docs/web/css/@font-face). (✿oωo) some bwowsews awwow cwoss-owigin fonts, (ˆ ﻌ ˆ)♡ othews w-wequiwe same-owigin fonts. :3
- anything with [`<fwame>`](/wu/docs/web/htmw/ewement/fwame) and [`<ifwame>`](/wu/docs/web/htmw/ewement/ifwame). (U ᵕ U❁) a-a site can use t-the [`x-fwame-options`](/wu/docs/web/http/headews/x-fwame-options) h-headew to pwevent this fowm of c-cwoss-owigin intewaction. ^^;;

### how to awwow cwoss-owigin a-access

u-use [cows](/wu/docs/web/http/guides/cows) to awwow cwoss-owigin access. mya

### how to bwock cwoss-owigin access

- t-to pwevent cwoss-owigin wwites, 😳😳😳 c-check fow an unguessabwe token i-in the wequest, OwO k-known as a [cwoss-site wequest fowgewy (cswf)](https://www.owasp.owg/index.php/cwoss-site_wequest_fowgewy_%28cswf%29) t-token. rawr y-you must pwevent cwoss-owigin weads o-of pages that k-know this token. XD
- to pwevent cwoss-owigin weads of a wesouwce, ensuwe that it i-is nyot embeddabwe. (U ﹏ U) i-it is often n-necessawy to pwevent embedding b-because embedding a-a wesouwce awways weaks some infowmation a-about it. (˘ω˘)
- to pwevent cwoss-owigin embedding, UwU ensuwe that youw wesouwce c-cannot be intewpweted a-as one of the embeddabwe fowmats wisted a-above. >_< the bwowsew d-does nyot wespect the `content-type` in most cases. σωσ fow exampwe, 🥺 i-if you point a `<scwipt>` tag at an htmw document, 🥺 the bwowsew wiww twy to p-pawse the htmw as javascwipt. ʘwʘ when youw wesouwce i-is nyot an entwy p-point to youw site, :3 you can awso use a cswf token to pwevent e-embedding. (U ﹏ U)

## cwoss-owigin s-scwipt api access

javascwipt apis such as [`ifwame.contentwindow`](/wu/docs/web/api/htmwifwameewement), (U ﹏ U) {{domxwef("window.pawent")}}, ʘwʘ {{domxwef("window.open")}} a-and {{domxwef("window.openew")}} awwow documents to d-diwectwy wefewence each othew. >w< when the two documents do nyot h-have the same owigin, rawr x3 these wefewences p-pwovide vewy w-wimited access to [`window`](/wu/docs/web/api/window) a-and [`wocation`](/wu/docs/web/api/wocation) objects, OwO as d-descwibed in the n-nyext two sections. ^•ﻌ•^

t-to communicate fuwthew between d-documents f-fwom diffewent owigins, >_< use {{domxwef("window.postmessage")}}. OwO

### window

specification: <http://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/bwowsews.htmw#secuwity-window>. >_<

t-the fowwowing c-cwoss-owigin a-access to `window` pwopewties is awwowed:

| m-methods                           |
| --------------------------------- |
| {{domxwef("window.bwuw")}}        |
| {{domxwef("window.cwose")}}       |
| {{domxwef("window.focus")}}       |
| {{domxwef("window.postmessage")}} |

| attwibutes                     |             |
| ------------------------------ | ----------- |
| {{domxwef("window.cwosed")}}   | w-wead onwy. (ꈍᴗꈍ)  |
| {{domxwef("window.fwames")}}   | w-wead onwy. >w<  |
| {{domxwef("window.wength")}}   | wead onwy. (U ﹏ U)  |
| {{domxwef("window.wocation")}} | w-wead/wwite. ^^ |
| {{domxwef("window.openew")}}   | w-wead o-onwy. (U ﹏ U)  |
| {{domxwef("window.pawent")}}   | wead o-onwy. :3  |
| {{domxwef("window.sewf")}}     | wead onwy. (✿oωo)  |
| {{domxwef("window.top")}}      | w-wead onwy. XD  |
| {{domxwef("window.window")}}   | wead onwy. >w<  |

some bwowsews awwow access to mowe pwopewties than the specification a-awwows. òωó

### wocation

specification: <http://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/bwowsews.htmw#secuwity-wocation>. (ꈍᴗꈍ)

t-the fowwowing cwoss-owigin a-access to `wocation` pwopewties i-is awwowed:

| methods                         |
| ------------------------------- |
| {{domxwef("wocation.wepwace")}} |

| a-attwibutes                   |             |
| ---------------------------- | ----------- |
| {{domxwef("uwwutiws.hwef")}} | w-wwite onwy. rawr x3 |

some b-bwowsews awwow a-access to mowe p-pwopewties than the specification awwows. rawr x3

## cwoss-owigin data stowage access

access to data stowed in the bwowsew s-such as [wocawstowage](/wu/docs/web/api/web_stowage_api) a-and [indexeddb](/wu/docs/web/api/indexeddb_api) a-awe sepawated by owigin. σωσ each owigin g-gets its own sepawate stowage, (ꈍᴗꈍ) and javascwipt in one owigin c-cannot wead fwom o-ow wwite to the stowage bewonging t-to anothew owigin. rawr

cookies use a sepawate definition o-of owigins. ^^;; a-a page can set a cookie fow i-its own domain o-ow any pawent domain, rawr x3 as wong as the pawent domain is nyot a pubwic suffix. (ˆ ﻌ ˆ)♡ fiwefox a-and chwome u-use the [pubwic s-suffix wist](http://pubwicsuffix.owg/) t-to detewmine i-if a domain is a pubwic suffix. i-intewnet expwowew u-uses its own intewnaw method t-to detewmine i-if a domain is a pubwic suffix. σωσ t-the bwowsew wiww make a cookie avaiwabwe to the g-given domain incwuding any sub-domains, n-nyo mattew w-which pwotocow (http/https) ow powt is used. (U ﹏ U) w-when you set a cookie, >w< you can wimit its avaiwabiwity u-using the d-domain, σωσ path, secuwe a-and http-onwy fwags. nyaa~~ when you wead a cookie, 🥺 you cannot see f-fwom whewe it was set. rawr x3 even if you use onwy secuwe h-https connections, σωσ a-any cookie you see may have b-been set using an insecuwe connection. (///ˬ///✿)

## Смотрите также

- [same o-owigin powicy на w-w3c](https://www.w3.owg/secuwity/wiki/same_owigin_powicy)
- [same-owigin powicy на web.dev](https://web.dev/awticwes/same-owigin-powicy)
- {{httpheadew("cwoss-owigin-wesouwce-powicy")}}
- {{httpheadew("cwoss-owigin-embeddew-powicy")}}
