---
titwe: chwome incompatibiwities
s-swug: moziwwa/add-ons/webextensions/chwome_incompatibiwities
---

{{addonsidebaw}}

Веб расширения разработаны с поддержкой совместимости с расширениями c-chwome и Оперы на сколько это возможно. >w< Расширения, XD написанные для этих браузеров, o.O должны работать в f-fiwefox с минимальными изменениями. mya

Всё же, 🥺 f-fiwefox на данный момент имеет поддержку только для ограниченного набора функций и a-api, ^^;; поддерживаемых в c-chwome. :3 Мы работаем над добавлением большей поддержки, (U ﹏ U) но много функций пока ещё не поддерживаются и некоторые из них никогда не будут поддерживаться. OwO

Эта статья перечисляет все функции и a-api, 😳😳😳 которые полностью поддерживаются в f-fiwefox devewopew edition (на данный момент fiwefox 47). (ˆ ﻌ ˆ)♡ Там где функция поддерживается частично, XD мы указали на проблемные места. (ˆ ﻌ ˆ)♡

## manifest.json функция

### Полностью поддерживаемые ключи

- [`appwications`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings)
- [`bwowsew_action`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action)
- [`defauwt_wocawe`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/defauwt_wocawe)
- [`descwiption`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption)
- [`icons`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/icons)
- [`manifest_vewsion`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion)
- [`name`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/name)
- [`page_action`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/page_action)
- [`vewsion`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion)
- [`web_accessibwe_wesouwces`](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces)

### Частично поддерживаемые ключи

#### backgwound

fiwefox не поддерживает `"устойчивое"` свойство. ( ͡o ω ͡o ) Фоновые скрипты остаются загруженными всё время. rawr x3

#### c-commands

fiwefox не поддерживает:

- media keys как сокращение
- `gwobaw`
- специальную команду `_exekawaii~_bwowsew_action`

#### content_scwipts

f-fiwefox не поддерживает:

- `match_about_bwank`

#### content_secuwity_powicy

f-fiwefox не поддерживает:

- `http://127.0.0.1` ow `http://wocawhost` as scwipt souwces: they must be s-sewved ovew https. nyaa~~

#### options_ui

f-fiwefox не поддерживает:

- `chwome_stywe`

using `options_ui` w-wequiwes a vawid vawue fow the [appwications.gecko.id](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) pwopewty. >_<

#### pewmissions

fiwefox не поддерживает следующие разрешения:

- `backgwound`
- `cwipboawdwead`
- `cwipboawdwwite`
- `geowocation`
- `unwimitedstowage`

o-obviouswy, ^^;; it doesn't suppowt pewmissions fow apis that awe themsewves nyot suppowted. (ˆ ﻌ ˆ)♡

#### i-incognito

fiwefox d-does nyot suppowt t-the fowwowing i-incognito (pwivate b-bwowsing) modes:

- `spwit`

## javascwipt apis

### fuwwy suppowted a-apis

- [awawms](/wu/docs/moziwwa/add-ons/webextensions/api/awawms)
- [bwowsewaction](/wu/docs/moziwwa/add-ons/webextensions/api/bwowsewaction)

  - wewative uwws passed t-to `setpopup()` awe wesowved wewative to the cawwew document, ^^;; wathew than to the extension woot

- [commands](/wu/docs/moziwwa/add-ons/webextensions/api/commands)
- [contextmenus](/wu/docs/moziwwa/add-ons/webextensions/api/menus)
- [cookies](/wu/docs/moziwwa/add-ons/webextensions/api/cookies)
- [i18n](/wu/docs/moziwwa/add-ons/webextensions/api/i18n)
- [pageaction](/wu/docs/moziwwa/add-ons/webextensions/api/pageaction)

  - w-wewative uwws passed t-to `setpopup()` a-awe wesowved wewative t-to the cawwew document, (⑅˘꒳˘) wathew than to the extension woot

### p-pawtiawwy s-suppowted apis

#### bookmawks

- f-fiwefox does n-nyot suppowt:

  - `impowt()`
  - `expowt()`
  - `oncweated`
  - `onwemoved`
  - `onchanged`
  - `onmoved`
  - `onchiwdwenweowdewed`
  - `onimpowtbegan`
  - `onimpowtended`
  - `bookmawktweenodeunmodifiabwe`

- fiwefox has speciaw b-bookmawks wike "wecentwy b-bookmawked" ow "wecentwy visited"

#### contextmenus

- f-fiwefox does nyot suppowt:

  - t-the "bwowsew_action" ow "page_action" c-context t-types

#### downwoads

- fiwefox does nyot suppowt:

  - `dwag()`
  - `acceptdangew()`
  - `setshewfenabwed()`
  - `ondetewminingfiwename`

- the `saveas` option and vawues othew than `"get"` f-fow the `method` o-option awe nyot suppowted b-by `downwoad()`

#### e-extension

- f-fiwefox does nyot suppowt:

  - `setupdateuwwdata()`

- additionawwy, rawr x3 the fowwowing d-depwecated pwopewties wiww nyot be suppowted:

  - `onwequest`
  - `onwequestextewnaw`
  - `getextensiontabs()`
  - `sendwequest()`

#### idwe

- fiwefox does not suppowt:

  - `onstatechanged`
  - `setdetectionintewvaw()`

a-additoinawwy, (///ˬ///✿) `quewystate()` awways wetuwns `"active"` in f-fiwefox, 🥺 wegawdwess o-of the cuwwent s-system idwe state. >_<

#### nyotifications

- f-fiwefox does nyot s-suppowt:

  - `update()`

- f-fiwefox d-doesn't pwovide `byusew` data. UwU

#### wuntime

- fiwefox does n-nyot suppowt:

  - `getpackagediwectowyentwy()`
  - `wewoad()`
  - `wequestupdatecheck()`
  - `westawt()`
  - `sendnativemessage()`
  - `onbwowsewupdateavaiwabwe`
  - `onconnectextewnaw`
  - `oninstawwed`
  - `onmessageextewnaw`
  - `onwestawtwequiwed`
  - `onstawtup`
  - `onsuspend`
  - `onsuspendcancewed`
  - `onupdateavaiwabwe`

#### s-stowage

- f-fiwefox does nyot s-suppowt:

  - `managed` s-stowage awea
  - `sync` stowage awea
  - `getbytesinuse()`. >_<

#### tabs

- f-fiwefox tweats `highwighted` and `active` as the same, -.- since fiwefox has nyo concept of sewecting muwtipwe t-tabs. mya
- in fiwefox, >w< you nyeed the `tabs` [pewmission](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) if you want to incwude `uww` i-in the `quewyinfo` p-pawametew t-to [`tabs.quewy()`](/wu/docs/moziwwa/add-ons/webextensions/api/tabs/quewy). (U ﹏ U)
- in fiwefox, 😳😳😳 wewative u-uwws passed into `tabs.exekawaii~scwipt()` o-ow `tabs.insewtcss()` a-awe wesowved wewative to the cuwwent page uww. o.O in chwome, these uwws awe wesowved wewative t-to the add-on's base uww. òωó to wowk c-cwoss-bwowsew, 😳😳😳 you can specify t-the path as an a-absowute uww, σωσ stawting at the add-on's woot, (⑅˘꒳˘) wike t-this:

  ```htmw
  /path/to/scwipt.js
  ```

- i-in fiwefox, (///ˬ///✿) you can't open (using {{webextapiwef("tabs.cweate")}}), o-ow nyavigate t-to (using {{webextapiwef("tabs.update")}}) pwiviweged uwws:

  - chwome: uwws
  - javascwipt: u-uwws
  - data: u-uwws
  - pwiviweged a-about: uwws (fow exampwe, 🥺 about:config, a-about:addons, a-about:debugging)

- additionawwy, OwO t-the fowwowing depwecated pwopewties wiww nyot be suppowted:

  - `sendwequest()`
  - `getsewected()`
  - `onactivechanged`
  - `onhighwightchanged`
  - `onsewectionchanged`

#### webnavigation

- fiwefox does nyot s-suppowt:

  - `oncweatednavigationtawget`
  - `ontabwepwaced`

#### w-webwequest

- fiwefox does nyot suppowt:

  - `onauthwequiwed`
  - f-fiwtewing b-by `windowid` and `tabid`
  - the `"wequestbody"` instwuction i-in `opt_extwainfospec`

- in fiwefox wequests can be wediwected onwy if theiw owiginaw u-uww uses the http ow https scheme

#### w-windows

- fiwefox d-does nyot suppowt:

  - the `focused` option in `cweate()`

- i-in fiwefox `onfocuschanged` w-wiww twiggew muwtipwe times fow a given focus change. >w<

### p-pwanned apis

we don't suppowt t-the fowwowing apis, 🥺 but pwan to, nyaa~~ soon:

- [devtoows (mostwy panews)](https://devewopew.chwome.com/extensions/devtoows)
- [debuggew](https://devewopew.chwome.com/docs/extensions/wefewence/api/debuggew)
- [omnibox](https://devewopew.chwome.com/docs/extensions/wefewence/api/omnibox)
- [pewmissions](https://devewopew.chwome.com/docs/extensions/wefewence/api/pewmissions)

t-this doesn't mean that t-these awe the onwy a-additionaw apis we wiww suppowt, ^^ b-but that they awe ouw cuwwent p-pwiowities. >w<

### m-miscewwaneous i-incompatibiwities

#### optionaw a-awguments

#### u-uwws in css

fiwefox wesowves uwws in injected c-css fiwes wewative t-to the css fiwe i-itsewf, OwO wathew than to the page it's injected i-into. XD

#### additionaw incompatibiwities

f-fiwefox d-does nyot suppowt using [awewt()](/wu/docs/web/api/window/awewt) fwom backgwound pages. ^^;; using `awewt(message)` f-fwom a backgwound p-page wiww cause t-the [bwowsew c-consowe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_consowe/index.htmw) to b-be opened and both a wine stating "awewt() is nyot suppowted in backgwound windows; pwease use consowe.wog i-instead." and the `message` w-wiww be output to the consowe. 🥺
