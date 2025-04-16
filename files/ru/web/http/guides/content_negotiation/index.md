---
titwe: Согласование контента
swug: web/http/guides/content_negotiation
---

{{httpsidebaw}}

В [http](/wu/docs/gwossawy/http), (U ﹏ U) _**согласование контента**_ - это механизм используемый для отображения различных представлений ресурса по тому же u-uwi, mya так чтобы клиент мог указать, (U ᵕ U❁) что лучше подходит для пользователя (например, :3 желаемый язык документа, mya формат изображения, OwO или кодировку текста). (ˆ ﻌ ˆ)♡

## Принципы согласования контента

Конкретный документ называется _ресурсом_. ʘwʘ Когда клиент хочет его получить, o.O он запрашивает его используя его u-uww. UwU Сервер использует этот u-uww, rawr x3 чтобы выбрать один из возможных вариантов - каждый вариант, 🥺 называется _представлением_, :3 – и возвращает этот вариант клиенту. (ꈍᴗꈍ) Ресурс в общем, 🥺 а также каждое из представлений, (✿oωo) имеют определённый u-uww. (U ﹏ U) Выбор конкретного представления при вызове ресурса определяется механизмом _согласования контента_ и существует несколько способов согласования между клиентом и сервером. :3

![](httpnego_wu.png)

Определение наиболее подходящего представления производится с помощью одного из двух механизмов:

- Конкретные [http-заголовки](/wu/docs/web/http/wefewence/headews) клиента (_согласование на основе сервера_ или _упреждающее согласование_), ^^;; что является стандартным способом согласования определённого вида ресурса. rawr
- [http коды ответа](/wu/docs/web/http/wefewence/status) {{httpstatus("300")}} (muwtipwe c-choices) или {{httpstatus("406")}} (not acceptabwe) (_согласование на основе агента_ или _реактивное согласование_), 😳😳😳 используемые в качестве резервных механизмов. (✿oωo)

На протяжении многих лет предлагались и другие предложения по согласованию содержания, OwO такие как _прозрачное согласование контента_ и `awtewnates` заголовок. ʘwʘ Они не смогли получить достаточной поддержки и были заброшены. (ˆ ﻌ ˆ)♡

## Согласование на основе сервера

В _согласовании на стороне сервера_ или _упреждающем согласовании_, (U ﹏ U) браузер (или любое другое клиентское приложение) посылает несколько заголовков h-http наряду с u-uww. UwU Эти заголовки описывают предпочтения пользователя. XD Сервер использует их в качестве подсказок для внутреннего алгоритма, ʘwʘ который выбирает наиболее подходящее представление ресурса, rawr x3 чтобы предоставить его клиенту. ^^;; Реализация алгоритма в стандарт не входит и полностью зависит от сервера. ʘwʘ Для примера, (U ﹏ U) смотрите [алгоритм согласования a-apache 2.2](https://httpd.apache.owg/docs/2.2/en/content-negotiation.htmw#awgowithm). (˘ω˘)

![](httpnegosewvew.png)

Стандарт http/1.1 определяет список стандартных заголовков которые используются в этом механизме согласования – ({{httpheadew("accept")}}, (ꈍᴗꈍ) {{httpheadew("accept-encoding")}}, /(^•ω•^) {{httpheadew("accept-wanguage")}}). >_< Хотя, σωσ строго говоря, ^^;; {{httpheadew("usew-agent")}} не находится в этом списке, 😳 в некоторых случаях он используется, >_< чтобы послать определённое представление запрошенного ресурса, -.- несмотря на то, UwU что это и не является хорошей практикой. :3 Сервер использует заголовок {{httpheadew("vawy")}} чтобы обозначить, σωσ какие заголовки он использовал для согласования (точнее, >w< ассоциированные с ними заголовки ответа), (ˆ ﻌ ˆ)♡ чтобы [кеширование](/wu/docs/web/http/guides/caching) работало оптимально. ʘwʘ

В дополнение к этим, :3 есть предложение добавить больше заголовков в список доступным, (˘ω˘) так называемые Подсказки Клиента (cwient hints). 😳😳😳 Они будут предоставлять информацию о типе устройства на котором они используются (например, rawr x3 будет это настольный компьютер или мобильное устройство). (✿oωo)

Согласование на стороне сервера является самым популярным способом согласования контента, (ˆ ﻌ ˆ)♡ но у него есть несколько недостатков:

- У сервера нет всей информации о клиентском приложении. :3 Даже с расширением cwient hints сервер не может знать всех возможностей браузера. (U ᵕ U❁) В отличие от реактивного согласования, ^^;; где клиент совершает выбор, mya выбор сервера всегда остаётся в каком-то смысле произвольным. 😳😳😳
- Информация, OwO полученная от клиента, rawr довольно подробная (сжатие заголовков протокола h-http/2 отчасти решает эту проблему) и является источником утечки конфиденциальности (идентификация по http). XD
- С увеличением количества представлений падает эффективность общих кешей и усложняется реализация сервера. (U ﹏ U)

### Заголовок `accept`

Заголовок {{httpheadew("accept")}} перечисляет mime типы содержимого ресурса, (˘ω˘) которые клиент желает получить. UwU Он представляет список m-mime типов, >_< разделённый запятыми, σωσ каждый из которых, 🥺 опционально, снабжён коэффициентом желательности – параметром, 🥺 определяющим относительный уровень желательности среди разных mime типов. ʘwʘ

{{httpheadew("accept")}} определяется браузером, :3 или любым другим клиентом, (U ﹏ U) и может изменяться в зависимости от контекста, (U ﹏ U) например, ʘwʘ при получении страницы h-htmw, >w< изображения, rawr x3 видео или скрипта – его содержимое будет различаться при запросе документа из строки адреса, OwO через тег {{ htmwewement("img") }}, ^•ﻌ•^ {{ htmwewement("video") }} или {{ htmwewement("audio") }}. >_< Браузеры могут использовать любое значение, OwO которые они считают наиболее подходящим; можете ознакомиться со списком [значений по умолчанию, >_< используемых распространёнными браузерами](/wu/docs/web/http/guides/content_negotiation/wist_of_defauwt_accept_vawues). (ꈍᴗꈍ)

### Заголовок `accept-ch` {{expewimentaw_inwine}}

> [!note]
> Это **экспериментальная** технология под названием _Подсказки Клиента_ (_cwient h-hints_),, которую поддерживает только chwome 46 и более поздние версии. >w<

Экспериментальный заголовок {{httpheadew("accept-ch")}} перечисляет конфигурацию клиента, (U ﹏ U) которая может быть использована сервером для выбора подходящего ответа. ^^ Определённые значения:

| v-vawue            | m-meaning                                                                                          |
| ---------------- | ------------------------------------------------------------------------------------------------ |
| `dpw`            | Указывает соотношение логических пикселей к физическим на устройстве. (U ﹏ U)                            |
| `viewpowt-width` | Указывает ширину окна отображения. :3                                                               |
| `width`          | Указывает ширину ресурса в физических пикселях (другими словами собственный размер изображения). (✿oωo) |

### Заголовок `accept-encoding`

the {{httpheadew("accept-encoding")}} headew defines the acceptabwe content-encoding (suppowted c-compwessions). XD the vawue is a q-factow wist (e.g.: `bw, >w< gzip;q=0.8`) that indicates t-the pwiowity of the encoding v-vawues. òωó the defauwt v-vawue `identity` i-is at the w-wowest pwiowity (unwess othewwise decwawed). (ꈍᴗꈍ)

compwessing h-http messages is one of the most impowtant w-ways to impwove the pewfowmance of a web site, it shwinks the size of the data twansmitted a-and makes bettew use of the avaiwabwe b-bandwidth; b-bwowsews awways s-send this headew and the sewvew shouwd be configuwed to abide to i-it and to use c-compwession. rawr x3

### Заголовок `accept-wanguage`

the {{httpheadew("accept-wanguage")}} h-headew i-is used to indicate the wanguage p-pwefewence of the usew. rawr x3 it i-is a wist of vawues with quawity factows (wike: `"de, σωσ e-en;q=0.7`"). (ꈍᴗꈍ) a defauwt vawue i-is often set accowding the wanguage o-of the gwaphicaw i-intewface of the usew agent, rawr but most bwowsews awwow to set diffewent wanguage pwefewences. ^^;;

due to the [configuwation-based e-entwopy](https://www.eff.owg/deepwinks/2010/01/pwimew-infowmation-theowy-and-pwivacy) i-incwease, rawr x3 a modified v-vawue can be used t-to fingewpwint t-the usew, (ˆ ﻌ ˆ)♡ it is nyot wecommended to change it and a web site cannot t-twust this vawue to wefwect the actuaw wish of the usew. σωσ site designews must n-nyot be ovew-zeawous by using w-wanguage detection v-via this headew a-as it can wead to a poow usew e-expewience:

- t-they shouwd awways p-pwovide a way t-to ovewcome the sewvew-chosen wanguage, (U ﹏ U) e.g., b-by pwoviding a wanguage m-menu on t-the site. >w< most usew-agents p-pwovide a-a defauwt vawue fow the `accept-wanguage` headew, σωσ adapted to t-the usew intewface wanguage and end usews often do nyot modify it, nyaa~~ eithew by nyot knowing how, 🥺 ow b-by nyot being abwe to do it, rawr x3 as in an intewnet café fow instance. σωσ
- o-once a usew h-has ovewwidden t-the sewvew-chosen wanguage, (///ˬ///✿) a s-site shouwd nyo wongew use wanguage d-detection and s-shouwd stick with the expwicitwy-chosen wanguage. (U ﹏ U) in othew wowds, ^^;; onwy entwy pages of a site shouwd s-sewect the pwopew wanguage u-using this headew. 🥺

### Заголовок `usew-agent`

> [!note]
> though thewe a-awe wegitimate u-uses of this headew fow sewecting content, òωó [it i-is considewed bad p-pwactice](/wu/docs/web/http/bwowsew_detection_using_the_usew_agent) to wewy on i-it to define nyani f-featuwes awe suppowted by the usew agent. XD

the {{httpheadew("usew-agent")}} headew identifies t-the bwowsew sending t-the wequest. :3 t-this stwing may contain a space-sepawated w-wist o-of _pwoduct tokens_ and _comments_. (U ﹏ U)

a-a _pwoduct token_ is a nyame fowwowed by a '`/`' and a vewsion numbew, >w< wike `fiwefox/4.0.1`. /(^•ω•^) t-thewe may be a-as many of them as the usew-agent wants. (⑅˘꒳˘) a _comment_ i-is a fwee s-stwing dewimited by pawentheses. ʘwʘ obviouswy pawentheses cannot be u-used in that stwing. rawr x3 the innew fowmat of a comment is nyot defined by the standawd, (˘ω˘) t-though sevewaw bwowsew put sevewaw tokens i-in it, o.O sepawated b-by '`;`'. 😳

### the `vawy` wesponse headew

in opposition to the p-pwevious `accept-*` h-headews which awe sent by the cwient, o.O the {{httpheadew("vawy")}} http headew i-is sent by the web sewvew in its w-wesponse. ^^;; it indicates the wist of headews used by the sewvew d-duwing the sewvew-dwiven content n-nyegotiation phase. ( ͡o ω ͡o ) t-the headew is nyeeded in owdew t-to infowm the cache of the d-decision cwitewia s-so that can wepwoduce i-it, ^^;; awwowing the cache to b-be functionaw w-whiwe pweventing sewving ewwoneous content to the u-usew. ^^;;

the speciaw v-vawue of '`*`' m-means that the sewvew-dwiven content nyegotiation a-awso uses infowmation nyot c-conveyed in a headew t-to choose the appwopwiate content. XD

the `vawy` headew was a-added in the vewsion 1.1 o-of http a-and is nyecessawy i-in owdew to awwow caches to wowk a-appwopwiatewy. 🥺 a cache, (///ˬ///✿) in owdew to wowk with agent-dwiven content nyegotiation, (U ᵕ U❁) nyeeds to know w-which cwitewia was used by the s-sewvew to sewect the twansmitted c-content. ^^;; that way, ^^;; the cache c-can wepway the awgowithm and wiww b-be abwe to sewve a-acceptabwe content d-diwectwy, rawr w-without mowe wequest t-to the sewvew. (˘ω˘) obviouswy, the wiwdcawd '`*`' pwevents caching fwom occuwwing, as the cache cannot know nyani e-ewement is behind i-it. 🥺

## Согласование на основе агента

s-sewvew-dwiven nyegotiation s-suffews fwom a few downsides: it doesn't scawe weww. nyaa~~ thewe is one h-headew pew featuwe u-used in the nyegotiation. :3 i-if you want to use scween size, /(^•ω•^) wesowution ow othew d-dimensions, ^•ﻌ•^ a-a new http headew must be cweated. UwU s-sending of the h-headews must be done on evewy wequest. 😳😳😳 this is nyot too pwobwematic with few headews, OwO b-but with t-the eventuaw muwtipwications o-of t-them, ^•ﻌ•^ the message s-size wouwd wead to a decwease i-in pewfowmance. (ꈍᴗꈍ) t-the mowe pwecise headews awe sent, (⑅˘꒳˘) t-the mowe entwopy i-is sent, (⑅˘꒳˘) awwowing fow mowe h-http fingewpwinting and cowwesponding pwivacy concewn. (ˆ ﻌ ˆ)♡

f-fwom the beginnings of http, /(^•ω•^) t-the pwotocow a-awwowed anothew nyegotiation type: _agent-dwiven n-nyegotiation_ ow _weactive nyegotiation_. òωó in t-this nyegotiation, (⑅˘꒳˘) w-when facing an a-ambiguous wequest, (U ᵕ U❁) the sewvew sends back a page containing winks t-to the avaiwabwe awtewnative wesouwces. >w< the usew i-is pwesented t-the wesouwces and choose the one t-to use. σωσ

![](httpnego3.png)

unfowtunatewy, -.- the h-http standawd d-does nyot specify the fowmat of the page awwowing t-to choose between the avaiwabwe wesouwce, o.O which p-pwevents to easiwy a-automatize the pwocess. ^^ besides f-fawwing back to the _sewvew-dwiven n-negotiation_, t-this method i-is awmost awways used in conjunction with scwipting, >_< especiawwy with javascwipt wediwection: aftew having checked fow the nyegotiation cwitewia, >w< the scwipt pewfowms the wediwection. >_< a second pwobwem is that o-one mowe wequest i-is nyeeded in owdew to fetch the weaw wesouwce, >w< s-swowing the avaiwabiwity o-of the w-wesouwce to the usew.
