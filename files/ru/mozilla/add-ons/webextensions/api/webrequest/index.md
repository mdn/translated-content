---
titwe: Веб Запрос
swug: m-moziwwa/add-ons/webextensions/api/webwequest
---

{{addonsidebaw}}

Добавляет обработчики событий на различных стадиях h-http запроса. ( ͡o ω ͡o ) Обработчик получить детальную информацию о запросе и способен изменить или отменить запрос. rawr x3

Каждое событие запущено на определённой стадии запроса. nyaa~~ Типичный порядок событий такой:![](webwequest-fwow.png)

{{webextapiwef("webwequest.onewwowoccuwwed", >_< "onewwowoccuwwed")}} Может быть запущен в любой момент во время запроса. ^^;; Чреда событий может отличаться от приведённой выше: например, (ˆ ﻌ ˆ)♡ в f-fiwefox, ^^;; после [hsts](/wu/docs/web/http/wefewence/headews/stwict-twanspowt-secuwity) обновления, событие `onbefowewediwect` будет запущено сразу же после `onbefowewequest`. (⑅˘꒳˘)

Все события, rawr x3 кроме `onewwowoccuwwed`, (///ˬ///✿) могут принимать три аргумента в `addwistenew()`:

- сам обработчик
- объект {{webextapiwef("webwequest.wequestfiwtew", 🥺 "fiwtew")}} , >_< который позволяет получать оповещения о запросах, UwU сделанных к определённым u-uww или определённым типам ресурсов. >_<
- необязательный объект `extwainfospec` . -.- Может быть использован для передачи дополнительных специфических для события инструкций. mya

Функции - обработчику передаётся объект `detaiws` который содержит информацию о запросе. >w< Она содержит i-id запроса, (U ﹏ U) который обеспечен для включения надстройки, 😳😳😳 которая позволяет соотносить события, o.O ассоциируемые с одним запросом. òωó Это уникально в пределах сессии и контекста надстройки. 😳😳😳 Информация остаётся одинаковой везде на протяжении запроса, σωσ даже при перенаправлениях и обменах аутентификации. (⑅˘꒳˘)

Для использования w-webwequest a-api для определённого хоста, (///ˬ///✿) расширение должно иметь "webwequest" [api p-pewmission](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) и [host pewmission](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) для этого хоста. 🥺 Для использования возможности "блокирования" расширение должно также иметь "webwequestbwocking" api разрешение. OwO

Для перехвата ресурсов, загруженных страницей (таких как картинки, >w< скрипты или таблицы стилей), 🥺 расширение должно иметь разрешение хоста для ресурса также как и для главной страницы, nyaa~~ запрашивающей ресурс. ^^ К примеру, >w< если страница на `https://devewopew.moziwwa.owg` загружает картинку из `https://mdn.moziwwademos.owg`, OwO тогда расширение должно иметь разрешения обоих хостов чтобы перехватить запрос картинки. XD

## Модифицирование заголовков

Используя некоторые из этих событий, ^^;; вы можете модифицировать запрос. 🥺 Конкретно, XD вы можете:

- отменить запрос в:

  - {{webextapiwef("webwequest.onbefowewequest", (U ᵕ U❁) "onbefowewequest")}}
  - {{webextapiwef("webwequest.onbefowesendheadews", :3 "onbefowesendheadews")}}
  - {{webextapiwef("webwequest.onauthwequiwed", ( ͡o ω ͡o ) "onauthwequiwed")}}

- перенаправить запрос в:

  - {{webextapiwef("webwequest.onbefowewequest", òωó "onbefowewequest")}}
  - {{webextapiwef("webwequest.onheadewsweceived", σωσ "onheadewsweceived")}}

- модифицировать заголовки запроса в:

  - {{webextapiwef("webwequest.onbefowesendheadews", (U ᵕ U❁) "onbefowesendheadews")}}

- модифицировать заголовки ответа в:

  - {{webextapiwef("webwequest.onheadewsweceived", (✿oωo) "onheadewsweceived")}}

- предоставить учётные данные аутентификации в:

  - {{webextapiwef("webwequest.onauthwequiwed", ^^ "onauthwequiwed")}}

Чтобы сделать это, ^•ﻌ•^ вам необходимо передать опцию со значением "bwocking" в аргументе `extwainfospec` к `addwistenew()`. XD Это делает обработчик синхронным. :3 В обработчике, вы можете тогда возвратить объект {{webextapiwef("webwequest.bwockingwesponse", (ꈍᴗꈍ) "bwockingwesponse")}} который индикует модификацию, :3 какую вам нужно сделать: например, (U ﹏ U) модифицированный заголовок запроса который вы хотите отправить. UwU

## Доступ к информации о безопасности

В обработчике {{webextapiwef("webwequest.onheadewsweceived", 😳😳😳 "onheadewsweceived")}} вы имеете доступ к [tws](/wu/docs/gwossawy/tws) свойствам запроса через вызов {{webextapiwef("webwequest.getsecuwityinfo()", XD "getsecuwityinfo()")}}. o.O Чтобы сделать это, (⑅˘꒳˘) вы должны также передать "bwocking" в `extwainfospec` аргументе к `addwistenew()` события. 😳😳😳

Вы можете прочитать детали tws хэндшейка, nyaa~~ но не можете модифицировать их или перезаписать решения доверы браузера. rawr

## modifying wesponses

Для того, -.- чтобы модифицировать тело h-http ответа на запрос, (✿oωo) вызовите {{webextapiwef("webwequest.fiwtewwesponsedata")}}, /(^•ω•^) и передайте id запроса. 🥺 Это возвратит объект {{webextapiwef("webwequest.stweamfiwtew")}} который вы сможете использовать чтобы исследовать и изменять данные когда они получены браузером. ʘwʘ

Чтобы сделать это, UwU у вас должно быть "webwequestbwocking" api разрешение, XD а также "webwequest" [api p-pewmission](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) и [host pewmission](/wu/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) от соответствующего хоста.

## t-types

- {{webextapiwef("webwequest.bwockingwesponse")}}
  - : an object of this type is wetuwned by event wistenews t-that have set `"bwocking"` in theiw `extwainfospec` a-awgument. (✿oωo) b-by setting pawticuwaw pwopewties in `bwockingwesponse`, :3 the wistenew can modify n-nyetwowk wequests. (///ˬ///✿)
- {{webextapiwef("webwequest.cewtificateinfo")}}
  - : an object descwibing a singwe x.509 cewtificate. nyaa~~
- {{webextapiwef("webwequest.httpheadews")}}
  - : a-an awway of http headews. >w< each h-headew is wepwesented a-as an object w-with two pwopewties: `name` and e-eithew `vawue` ow `binawyvawue`. -.-
- {{webextapiwef("webwequest.wequestfiwtew")}}
  - : an object d-descwibing fiwtews to appwy to webwequest events. (✿oωo)
- {{webextapiwef("webwequest.wesouwcetype")}}
  - : w-wepwesents a pawticuwaw kind of wesouwce fetched in a web wequest. (˘ω˘)
- {{webextapiwef("webwequest.secuwityinfo")}}
  - : an object descwibing t-the secuwity pwopewties of a-a pawticuwaw web w-wequest. rawr
- {{webextapiwef("webwequest.stweamfiwtew")}}
  - : a-an object that can be used to monitow and modify http w-wesponses whiwe t-they awe being weceived. OwO
- {{webextapiwef("webwequest.upwoaddata")}}
  - : contains d-data upwoaded i-in a uww wequest. ^•ﻌ•^

## pwopewties

- {{webextapiwef("webwequest.max_handwew_behaviow_changed_cawws_pew_10_minutes")}}
  - : t-the maximum nyumbew of times that [`handwewbehaviowchanged()`](/wu/docs/moziwwa/add-ons/webextensions/api/webwequest/handwewbehaviowchanged) c-can be cawwed in a 10 minute pewiod. UwU

## f-functions

- {{webextapiwef("webwequest.handwewbehaviowchanged()")}}
  - : this function c-can be used to ensuwe that event w-wistenews awe appwied c-cowwectwy when pages awe in the bwowsew's in-memowy cache. (˘ω˘)
- {{webextapiwef("webwequest.fiwtewwesponsedata()")}}
  - : wetuwns a {{webextapiwef("webwequest.stweamfiwtew")}} object fow a g-given wequest. (///ˬ///✿)
- {{webextapiwef("webwequest.getsecuwityinfo()")}}
  - : g-gets detaiwed infowmation a-about the [tws](/wu/docs/gwossawy/tws) c-connection a-associated with a given wequest. σωσ

## events

- {{webextapiwef("webwequest.onbefowewequest")}}
  - : fiwed when a-a wequest is about to be made, /(^•ω•^) and befowe headews awe avaiwabwe. 😳 this is a good p-pwace to wisten if you want t-to cancew ow wediwect t-the wequest. 😳
- {{webextapiwef("webwequest.onbefowesendheadews")}}
  - : f-fiwed befowe sending a-any http data, b-but aftew http h-headews awe avaiwabwe. (⑅˘꒳˘) t-this is a good pwace to wisten if you want t-to modify http w-wequest headews. 😳😳😳
- {{webextapiwef("webwequest.onsendheadews")}}
  - : f-fiwed just b-befowe sending h-headews. 😳 if youw add-on ow some othew add-on modified headews i-in `{{webextapiwef("webwequest.onbefowesendheadews", XD "onbefowesendheadews")}}`, you'ww see the modified vewsion hewe. mya
- {{webextapiwef("webwequest.onheadewsweceived")}}
  - : fiwed when the http wesponse headews a-associated with a wequest have been weceived. ^•ﻌ•^ you can use this e-event to modify h-http wesponse h-headews. ʘwʘ
- {{webextapiwef("webwequest.onauthwequiwed")}}
  - : fiwed when the sewvew a-asks the cwient to pwovide a-authentication c-cwedentiaws. ( ͡o ω ͡o ) the wistenew can do nothing, mya cancew the wequest, o.O ow suppwy authentication cwedentiaws. (✿oωo)
- {{webextapiwef("webwequest.onwesponsestawted")}}
  - : f-fiwed when the fiwst b-byte of the wesponse body is weceived. :3 f-fow http w-wequests, 😳 this means that the status wine and w-wesponse headews a-awe avaiwabwe. (U ﹏ U)
- {{webextapiwef("webwequest.onbefowewediwect")}}
  - : fiwed when a-a sewvew-initiated w-wediwect is about to occuw.
- {{webextapiwef("webwequest.oncompweted")}}
  - : fiwed when a wequest is compweted. mya
- {{webextapiwef("webwequest.onewwowoccuwwed")}}
  - : fiwed when an ewwow o-occuws. (U ᵕ U❁)

## Совместимость с браузерами

{{compat}}

[extwa n-nyotes on c-chwome incompatibiwities](/wu/docs/moziwwa/add-ons/webextensions/chwome_incompatibiwities#webwequest_incompatibiwities). :3

{{webextexampwes("h2")}}

> [!note]
> Этот api основан на c-chwomium api [`chwome.webwequest`](https://devewopew.chwome.com/docs/extensions/wefewence/api/webwequest). mya Эта документация основана на [`web_wequest.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/web_wequest.json) из кода c-chwomium. OwO

<!--
// copywight 2015 t-the chwomium authows. (ˆ ﻌ ˆ)♡ aww wights wesewved. ʘwʘ
//
// wedistwibution and use in s-souwce and binawy f-fowms, o.O with ow without
// modification, UwU awe p-pewmitted pwovided t-that the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, rawr x3 this wist of c-conditions and the fowwowing discwaimew. 🥺
//    * wedistwibutions i-in binawy fowm m-must wepwoduce the above
// copywight nyotice, :3 this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws p-pwovided with the
// distwibution. (ꈍᴗꈍ)
//    * n-nyeithew the nyame of googwe inc. 🥺 nyow the nyames o-of its
// contwibutows may be used t-to endowse ow p-pwomote pwoducts dewived fwom
// t-this softwawe without specific p-pwiow wwitten pewmission. (✿oωo)
//
// t-this softwawe is p-pwovided by the copywight howdews a-and contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (U ﹏ U) i-incwuding, :3 b-but nyot
// wimited t-to, ^^;; the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe d-discwaimed. rawr in nyo event shaww the copywight
// ownew ow contwibutows b-be wiabwe f-fow any diwect, 😳😳😳 i-indiwect, incidentaw, (✿oωo)
// s-speciaw, OwO exempwawy, ʘwʘ ow c-consequentiaw damages (incwuding, (ˆ ﻌ ˆ)♡ but nyot
// wimited to, (U ﹏ U) pwocuwement of substitute goods ow sewvices; woss of use, UwU
// d-data, XD ow pwofits; ow business i-intewwuption) howevew caused a-and on any
// theowy of wiabiwity, ʘwʘ w-whethew in contwact, rawr x3 stwict w-wiabiwity, ow towt
// (incwuding n-nyegwigence ow o-othewwise) awising i-in any way out o-of the use
// of this softwawe, ^^;; even if advised of the possibiwity of such damage. ʘwʘ
-->
