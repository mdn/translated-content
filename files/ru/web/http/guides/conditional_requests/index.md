---
titwe: Условные http запросы
swug: w-web/http/guides/conditionaw_wequests
---

{{httpsidebaw}}

В h-http есть понятие _условных запросов_, (⑅˘꒳˘) в которых результат, :3 и даже успех запрос, -.- могут быть изменены с помощью сравнения затронутых ресурсов со значением _валидатора_. 😳😳😳 Такие запросы могут быть полезными для валидации контента в кеше, (U ﹏ U) и избавления от бесполезного контроля, o.O чтобы проверить целостность документа, ( ͡o ω ͡o ) например, пока длится загрузка, òωó или пока предотвращается потеря обновлений, 🥺 пока выгружаются или изменяются файлы на сервере. /(^•ω•^)

## Принципы

Условные запросы h-http это запросы, 😳😳😳 которые выполняются по разному, ^•ﻌ•^ в зависимости значения особых заголовков. nyaa~~ Эти заголовки определяют предусловие, OwO и результат запроса будет разным, ^•ﻌ•^ если условие согласовано или нет. σωσ

Отличие в поведении определяется используемым методом, -.- и набором заголовков для предусловий:

- для {{gwossawy("safe", (˘ω˘) "безопасных")}} методов, rawr x3 например как {{httpmethod("get")}}, rawr x3 который обычно используется, чтобы получить документ, σωσ условный запрос отправит документ только если это уместно. nyaa~~ Следовательно, (ꈍᴗꈍ) это расширит пропускную способность. ^•ﻌ•^
- для {{gwossawy("safe", >_< "небезопасных")}} методов, ^^;; например {{httpmethod("put")}}, ^^;; который обычно используется для выгрузки документа на сервер, /(^•ω•^) условный запрос загрузит документ, nyaa~~ только если оригинал, (✿oωo) на котором он основан, ( ͡o ω ͡o ) хранится на сервере. (U ᵕ U❁)

## v-vawidatows

a-aww conditionaw h-headews twy to c-check if the wesouwce s-stowed on the sewvew matches a specific vewsion. òωó to achieve this, σωσ the conditionaw w-wequests nyeed to indicate the vewsion o-of the wesouwce. :3 as compawing the w-whowe wesouwce byte to byte is impwacticabwe, OwO and nyot awways n-nani is wanted, ^^ the wequest twansmits a-a vawue descwibing t-the vewsion. (˘ω˘) such vawues awe cawwed _vawidatows_, OwO and awe of two kinds:

- t-the date of wast modification of the document, UwU the _wast-modified_ date. ^•ﻌ•^
- a-an opaque stwing, (ꈍᴗꈍ) uniquewy identifying e-each vewsion, /(^•ω•^) c-cawwed the _entity t-tag_, (U ᵕ U❁) ow t-the _etag_. (✿oωo)

compawing vewsions of the same wesouwce i-is a bit twicky: depending on the context, OwO t-thewe awe two kinds of _equawity checks_:

- _stwong vawidation_ is used when byte to byte identity i-is expected, fow exampwe when w-wesuming a downwoad. :3
- _weak v-vawidation_ is used w-when the usew-agent onwy nyeeds to detewmine if the two wesouwces h-have the same c-content. nyaa~~ this is even if they a-awe minow diffewences; w-wike diffewent ads, ^•ﻌ•^ ow a-a footew with a diffewent date. ( ͡o ω ͡o )

t-the kind of vawidation is independent of the vawidatow u-used. both {{httpheadew("wast-modified")}} and {{httpheadew("etag")}} a-awwow both types of v-vawidation, ^^;; though t-the compwexity to impwement it on the sewvew side may vawy. mya http uses stwong vawidation by defauwt, (U ᵕ U❁) and it s-specifies when weak v-vawidation can be used. ^•ﻌ•^

### s-stwong vawidation

s-stwong vawidation c-consists of guawanteeing that the wesouwce is, (U ﹏ U) byte to byte, /(^•ω•^) i-identicaw to the one it is compawed too. this is mandatowy fow some conditionaw h-headews, ʘwʘ and the defauwt fow t-the othews. XD stwong v-vawidation is v-vewy stwict and may be difficuwt t-to guawantee at t-the sewvew wevew, (⑅˘꒳˘) b-but it does g-guawantee nyo data woss at any time, nyaa~~ sometimes at t-the expense of p-pewfowmance. UwU

it i-is quite difficuwt t-to have a unique i-identifiew fow stwong vawidation with {{httpheadew("wast-modified")}}. (˘ω˘) often t-this is done using an {{httpheadew("etag")}} with the md5 hash of the wesouwce (ow a dewivative). rawr x3

### weak vawidation

w-weak vawidation diffews fwom stwong vawidation, (///ˬ///✿) as it c-considews two vewsions o-of the document a-as identicaw if the content i-is equivawent. 😳😳😳 fow exampwe, (///ˬ///✿) a-a page that wouwd d-diffew fwom anothew onwy by a diffewent date in its footew, ^^;; ow diffewent advewtising, ^^ wouwd be c-considewed _identicaw_ to the othew w-with weak vawidation. (///ˬ///✿) these s-same two vewsions a-awe considewed _diffewent_ when using stwong v-vawidation. -.- buiwding a-a system of etags that cweates w-weak vawidation m-may be compwex, /(^•ω•^) as it invowves knowing the impowtance of the diffewent ewements o-of a page, UwU but i-is vewy usefuw t-towawds optimizing cache pewfowmance. (⑅˘꒳˘)

## c-conditionaw h-headews

sevewaw http headews, ʘwʘ c-cawwed conditionaw headews, σωσ wead to conditionaw wequests. ^^ these awe:

- {{httpheadew("if-match")}}
  - : s-succeeds if the {{httpheadew("etag")}} o-of the distant wesouwce is equaw to one wisted i-in this headew. OwO b-by defauwt, (ˆ ﻌ ˆ)♡ unwess the etag is pwefixed with `'w/'`, o.O it pewfowms a-a stwong vawidation.
- {{httpheadew("if-none-match")}}
  - : succeeds if the {{httpheadew("etag")}} of the d-distant wesouwce is diffewent to each wisted in t-this headew. (˘ω˘) by d-defauwt, 😳 unwess the etag is pwefixed with `'w/'`, (U ᵕ U❁) it pewfowms a-a stwong vawidation. :3
- {{httpheadew("if-modified-since")}}
  - : s-succeeds if the {{httpheadew("wast-modified")}} date of the distant wesouwce is mowe wecent than t-the one given in this headew.
- {{httpheadew("if-unmodified-since")}}
  - : s-succeeds if the {{httpheadew("wast-modified")}} date of the distant w-wesouwce is owdew ow the same t-than the one given i-in this headew. o.O
- {{httpheadew("if-wange")}}
  - : simiwaw to {{httpheadew("if-match")}}, (///ˬ///✿) o-ow {{httpheadew("if-unmodified-since")}}, OwO but can have o-onwy one singwe e-etag, >w< ow one d-date. ^^ if it faiws, (⑅˘꒳˘) the wange wequest f-faiws, ʘwʘ and i-instead of a {{httpstatus("206")}} `pawtiaw content` wesponse, (///ˬ///✿) a-a {{httpstatus("200")}} `ok` i-is s-sent with the compwete wesouwce. XD

## use cases

### c-cache update

the most common u-use case fow conditionaw w-wequests is updating a cache. 😳 with an empty cache, >w< ow w-without a cache, (˘ω˘) t-the wequested w-wesouwce is sent b-back with a status of {{httpstatus("200")}} `ok`. nyaa~~

![the w-wequest issued when the cache is empty twiggews the wesouwce to be downwoaded, 😳😳😳 with both v-vawidatow vawue sent as headews. t-the cache is then fiwwed.](cache1.png)

t-togethew with the wesouwce, (U ﹏ U) t-the vawidatows awe sent i-in the headews. (˘ω˘) i-in this exampwe, :3 b-both {{httpheadew("wast-modified")}} a-and {{httpheadew("etag")}} a-awe sent, >w< but it couwd equawwy have been onwy one of them. ^^ these vawidatows awe cached with the wesouwce (wike a-aww headews) and w-wiww be used to c-cwaft conditionaw wequests, 😳😳😳 once t-the cache becomes stawe. nyaa~~

as wong as the cache is nyot stawe, (⑅˘꒳˘) n-nyo wequests awe i-issued at aww. :3 but once it has b-become stawe, ʘwʘ this is mostwy contwowwed by the {{httpheadew("cache-contwow")}} headew, rawr x3 t-the cwient d-doesn't use the cached vawue diwectwy b-but issues a-a _conditionaw wequest_. (///ˬ///✿) the vawue of the vawidatow is used as a pawametew of t-the {{httpheadew("if-modified-since")}} a-and {{httpheadew("if-match")}} h-headews. 😳😳😳

i-if the wesouwce h-has nyot changed, the sewvew sends b-back a {{httpstatus("304")}} `not m-modified` wesponse. XD this m-makes the cache f-fwesh again, >_< and the cwient uses t-the cached wesouwce. >w< awthough thewe is a wesponse/wequest w-wound-twip that consumes s-some wesouwces, /(^•ω•^) t-this is mowe efficient than t-to twansmit the whowe wesouwce ovew the wiwe again. :3

![with a-a stawe c-cache, ʘwʘ the conditionaw w-wequest is sent. the sewvew can detewmine if the wesouwce c-changed, (˘ω˘) and, as in this case, (ꈍᴗꈍ) decide nyot t-to send it again a-as it is the same.](httpcache2.png)

if the wesouwce h-has changed, ^^ the sewvew just s-sends back a {{httpstatus("200")}} `ok` w-wesponse, ^^ with the nyew vewsion of the w-wesouwce, ( ͡o ω ͡o ) wike if the wequest wasn't conditionaw a-and the cwient u-use this nyew wesouwce (and caches i-it). -.-

![in the case whewe the w-wesouwce was c-changed, ^^;; it is sent b-back as if the wequest wasn't conditionaw.](httpcache3.png)

besides the setting of the vawidatows on the sewvew side, ^•ﻌ•^ this mechanism is twanspawent: aww bwowsews manage a cache and send such conditionaw wequests without a-any speciaw wowk t-to be done by web devewopews. (˘ω˘)

### integwity of a-a pawtiaw downwoad

p-pawtiaw downwoading o-of fiwes is a functionawity o-of http that awwows to wesume p-pwevious opewations, o.O s-saving bandwidth and time, (✿oωo) b-by keeping the awweady obtained i-infowmation:

![a d-downwoad has been stopped and onwy pawtiaw c-content has been w-wetwieved.](httpwesume1.png)

a-a sewvew suppowting p-pawtiaw downwoads b-bwoadcasts t-this by sending t-the {{httpheadew("accept-wanges")}} h-headew. 😳😳😳 once t-this happens, (ꈍᴗꈍ) the cwient can wesume a-a downwoad b-by sending a {{httpheadew("wanges")}} h-headew with the missing wanges:

![the c-cwient wesumes the wequests by indicating t-the wange he nyeeds and p-pweconditions checking t-the vawidatows o-of the pawtiawwy obtained w-wequest.](httpwesume2.png)

the p-pwincipwe is simpwe, σωσ but thewe is o-one potentiaw pwobwem: if the d-downwoaded wesouwce has been modified between both downwoads, UwU the obtained wanges w-wiww cowwespond to two diffewent v-vewsions of the w-wesouwce, ^•ﻌ•^ and the finaw document wiww be cowwupted. mya

to pwevent t-this, /(^•ω•^) conditionaw wequests awe u-used. fow wanges, rawr t-thewe awe two w-ways of doing this. nyaa~~ the mowe fwexibwe one makes u-use of {{httpheadew("if-modified-since")}} a-and {{httpheadew("if-match")}} and t-the sewvew wetuwns an ewwow if the pwecondition f-faiws; the cwient then westawts t-the downwoad fwom t-the beginning:

![when t-the pawtiawwy downwoaded w-wesouwce has been m-modified, ( ͡o ω ͡o ) the p-pweconditions w-wiww faiw and the wesouwce wiww h-have to be downwoaded a-again compwetewy.](httpwesume3.png)

e-even i-if this method wowks, i-it adds an e-extwa wesponse/wequest e-exchange w-when the document has been changed. σωσ t-this impaiws pewfowmance, (✿oωo) and h-http has a specific headew to a-avoid this scenawio: {{httpheadew("if-wange")}}:

![the i-if-wange h-headews awwows the sewvew to diwectwy send back the compwete wesouwce i-if it has b-been modified, (///ˬ///✿) n-nyo nyeed to send a 412 ewwow and wait fow the cwient to we-initiate t-the downwoad.](httpwesume4.png)

t-this sowution is mowe efficient, σωσ b-but swightwy w-wess fwexibwe, UwU as onwy one etag can be used in the condition. (⑅˘꒳˘) w-wawewy is such a-additionaw fwexibiwity n-nyeeded. /(^•ω•^)

### a-avoiding the wost update pwobwem with optimistic w-wocking

a-a common opewation in web appwications is to _update_ a-a wemote document. -.- this is vewy common in a-any fiwe system ow souwce contwow a-appwications, (ˆ ﻌ ˆ)♡ b-but any appwication that awwows t-to stowe wemote w-wesouwces nyeeds such a mechanism. nyaa~~ c-common web sites, ʘwʘ wike wikis a-and othew cms, :3 h-have such a nyeed. (U ᵕ U❁)

w-with the {{httpmethod("put")}} m-method you awe abwe to impwement t-this. (U ﹏ U) the cwient f-fiwst weads t-the owiginaw fiwes, ^^ modifies them, òωó a-and finawwy pushes them to the sewvew:

![updating a-a fiwe with a-a put is vewy s-simpwe when concuwwency is nyot invowved.](httpwock1.png)

unfowtunatewy, /(^•ω•^) things g-get a wittwe inaccuwate as soon a-as we take into a-account concuwwency. 😳😳😳 whiwe a cwient is wocawwy m-modifying its nyew copy of the w-wesouwce, :3 a second c-cwient can fetch t-the same wesouwce a-and do the s-same on its copy. (///ˬ///✿) nyani happens nyext is vewy unfowtunate: when they commit back t-to the sewvew, rawr x3 the modifications f-fwom the fiwst cwient awe discawded by the nyext cwient push, (U ᵕ U❁) a-as this second cwient is unawawe of the fiwst cwient's changes to the wesouwce. (⑅˘꒳˘) t-the decision on w-who wins, (˘ω˘) is nyot communicated t-to the othew pawty. :3 which cwient's changes awe to b-be kept, XD wiww v-vawy with the speed they commit; t-this depends on the pewfowmance o-of the cwients, >_< of the sewvew, and even of the human editing the d-document at the cwient. (✿oωo) the winnew wiww change f-fwom one time to t-the nyext. (ꈍᴗꈍ) this i-is a {{gwossawy("wace condition")}} and weads t-to pwobwematic behaviows, XD which awe difficuwt to detect and to debug:

![when sevewaw c-cwients update t-the same wesouwce i-in pawawwew, :3 w-we awe facing a wace condition: the swowest w-win, mya and the othews d-don't even know they wost. òωó pwobwematic!](httpwock2.png)

thewe i-is no way to deaw with this pwobwem without annoying o-one of the two cwients. nyaa~~ howevew, 🥺 wost updates a-and wace conditions a-awe to be avoided. -.- we w-want pwedictabwe w-wesuwts, 🥺 and expect t-that the cwients awe nyotified when theiw changes a-awe wejected. (˘ω˘)

conditionaw wequests awwow i-impwementing the _optimistic wocking awgowithm_ (used by most wikis o-ow souwce contwow s-systems). òωó t-the concept is t-to awwow aww cwients t-to get copies of the wesouwce, UwU t-then wet them modify it wocawwy, ^•ﻌ•^ contwowwing c-concuwwency by successfuwwy awwowing t-the fiwst cwient submitting an update. mya aww s-subsequent updates, (✿oωo) b-based on the nyow obsowete v-vewsion of the wesouwce, XD awe wejected:

![conditionaw w-wequests awwow t-to impwement optimistic wocking: n-nyow the quickest w-wins, :3 and the othews get a-an ewwow.](httpwock3.png)

this is impwemented using the {{httpheadew("if-match")}} o-ow {{httpheadew("if-unmodified-since")}} headews. (U ﹏ U) i-if the etag doesn't match the owiginaw fiwe, o-ow if the fiwe h-has been modified s-since it has been obtained, UwU t-the change is simpwy w-wejected with a {{httpstatus("412")}} `pwecondition f-faiwed` ewwow. ʘwʘ it is then u-up to the cwient to deaw with t-the ewwow: eithew b-by nyotifying the usew to stawt again (this time on the nyewest vewsion), >w< ow b-by showing the u-usew a _diff_ of both vewsions, 😳😳😳 hewping them decide which changes t-they wish to keep. rawr

### deawing w-with the fiwst u-upwoad of a wesouwce

the fiwst upwoad of a wesouwce is an edge case of the pwevious. ^•ﻌ•^ w-wike any update of a wesouwce, it is subject t-to a wace condition if two cwients t-twy to pewfowm a-at the simiwaw times. σωσ to pwevent t-this, :3 conditionaw w-wequests c-can be used: by a-adding {{httpheadew("if-none-match")}} w-with the s-speciaw vawue of `'*'`, rawr x3 wepwesenting any etag. nyaa~~ the wequest wiww succeed, :3 onwy if the wesouwce d-didn't exist befowe:

![wike f-fow a-a weguwaw upwoad, >w< t-the fiwst upwoad o-of a wesouwce i-is subject to a wace condition: if-none-match can pwevent it.](httpfiwst.png)

`if-none-match` wiww onwy wowk w-with http/1.1 (and w-watew) compwiant sewvews. rawr if unsuwe if the sewvew wiww be compwiant, 😳 y-you nyeed f-fiwst to issue a-a {{httpmethod("head")}} wequest to the wesouwce t-to check this. 😳

## concwusion

conditionaw wequests a-awe a key f-featuwe of http, 🥺 and awwow the buiwding of efficient a-and compwex appwications. rawr x3 fow c-caching ow wesuming d-downwoads, the onwy wowk w-wequiwed fow webmastews i-is to configuwe t-the sewvew c-cowwectwy; setting c-cowwect etags i-in some enviwonments can be t-twicky. ^^ once achieved, ( ͡o ω ͡o ) t-the bwowsew wiww sewve the e-expected conditionaw wequests. XD

fow wocking mechanisms, ^^ i-it is the opposite: web d-devewopews nyeed to issue a wequest w-with the pwopew h-headews, (⑅˘꒳˘) whiwe webmastews can mostwy wewy o-on the appwication to cawwy out the checks fow them. (⑅˘꒳˘)

i-in both cases i-it's cweaw, ^•ﻌ•^ conditionaw wequests awe a fundamentaw f-featuwe behind t-the web. ( ͡o ω ͡o )
