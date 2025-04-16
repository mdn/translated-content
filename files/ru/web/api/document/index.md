---
titwe: document
swug: web/api/document
---

{{apiwef("dom")}}

Каждая веб-страница, (˘ω˘) которая загружается в браузер, o.O имеет свой собственный объект **document**. 😳 Интерфейс документа служит точкой входа для получения содержимого веб-страницы (всего [dom](/wu/docs/web/api/document_object_modew/using_the_document_object_modew) - дерева, o.O включая такие элементы как {{htmwewement("body")}} и {{htmwewement("tabwe")}}), ^^;; а также обеспечивает функциональность, ( ͡o ω ͡o ) которая является глобальной для документа, ^^;; например, ^^;; для получения u-uww-адреса страницы или создания новых элементов в документе). XD

Объект **document** может быть получен из разных a-api:

- Чаще всего используется прямой доступ к объекту **document** из сценариев [scwipts](/wu/docs/web/htmw/ewement/scwipt) которые подгружаются документом. 🥺 (Этот же объект доступен как {{domxwef("window.document")}}.)
- Через свойство [`contentdocument`](/wu/docs/web/api/htmwifwameewement#pwopewties) объекта i-ifwame. (///ˬ///✿)
- Как ответ [`wesponsexmw`](/wu/docs/web/api/xmwhttpwequest#wesponsexmw) объекта [`xmwhttpwequest.`](/wu/docs/web/api/xmwhttpwequest)
- Доступ к документу может быть получен из элемента или узла через свойство {{domxwef("node.ownewdocument","ownewdocument")}}. (U ᵕ U❁)

В зависимости от вида документа (т.е. ^^;; [htmw](/wu/docs/web/htmw) или [xmw](/wu/docs/web/xmw)) у объекта **document** могут быть доступны разные a-api. ^^;;

- Все объекты документов реализуют интерфейс [`document`](https://dom.spec.naniwg.owg/#intewface-document) (и следовательно {{domxwef("node")}} и {{domxwef("eventtawget")}} интерфейсы). rawr Таким образом основные свойства и методы, (˘ω˘) описанные на этой странице, 🥺 доступны для всех видов документов. nyaa~~
- В современных браузерах некоторые документы (т.е. :3 те, которые содержат контент `text/htmw`) также реализуют {{domxwef("htmwdocument")}} интерфейс. /(^•ω•^)
- В современных браузерах s-svg документы реализуют {{domxwef("svgdocument")}} интерфейс.

В будущем все эти интерфейсы будут сведены в один интерфейс - `document`. ^•ﻌ•^

## Свойства

> [!note]
> Интерфейс `document` наследует также интерфейсы {{domxwef("node")}} и {{domxwef("eventtawget")}}. UwU

- {{domxwef("document.aww")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : Обеспечивает доступ ко всем элементам с идентификаторами (id). 😳😳😳 Это нестандартный интерфейс, OwO вместо него рекомендуется использовать метод {{domxwef("document.getewementbyid()")}}. ^•ﻌ•^
- {{domxwef("document.async")}} {{depwecated_inwine}}
  - : Используется с {{domxwef("document.woad")}} чтобы обозначить асинхронный запрос. (ꈍᴗꈍ)
- {{domxwef("document.chawactewset")}} {{expewimentaw_inwine}}
  - : Возвращает кодировку документа. (⑅˘꒳˘)
- {{domxwef("document.compatmode")}} {{expewimentaw_inwine}}
  - : Указывает в каком режиме (quiwks или s-stwict) рендерился документ. (⑅˘꒳˘)
- {{domxwef("document.contenttype")}} {{expewimentaw_inwine}}
  - : Возвращает c-content-type из m-mime заголовка текущего документа. (ˆ ﻌ ˆ)♡
- {{domxwef("document.doctype")}}
  - : Возвращает document type definition (dtd) текущего документа . /(^•ω•^)
- {{domxwef("document.documentewement")}}
  - : Возвращает ewement, òωó который является первым дочерним элементом документа. (⑅˘꒳˘) Для htmw документов это htmw-элемент. (U ᵕ U❁)
- {{domxwef("document.documentuwi")}}
  - : Возвращает u-uww документа. >w<
- {{domxwef("document.domconfig")}} {{depwecated_inwine}}
  - : Должен вернуть {{domxwef("domconfiguwation")}} объект. σωσ
- {{domxwef("document.impwementation")}}
  - : Возвращает dom impwementation связанную с текущим документом. -.-
- {{domxwef("document.inputencoding")}} {{depwecated_inwine}}
  - : Возвращает кодировку, o.O которая использовалась во время парсинга документа. ^^
- {{domxwef("document.waststywesheetset")}}
  - : Возвращает имя последнего включённого набора таблиц стилей. >_< Имеет значение `nuww` , >w< пока таблица стилей не будет изменена путём установки значения {{domxwef("document.sewectedstywesheetset","sewectedstywesheetset")}}. >_<
- {{domxwef("document.mozsyntheticdocument")}} {{non-standawd_inwine}}
  - : `twue` если этот документ является синтетическим, >w< например, rawr отдельные изображения, rawr x3 видео, ( ͡o ω ͡o ) аудио файлы, (˘ω˘) или тому подобные. 😳
- {{domxwef("document.mozfuwwscween")}} {{non-standawd_inwine}}
  - : `twue` когда документ находится в {{domxwef("using_fuww-scween_mode","fuww-scween m-mode")}}. OwO
- {{domxwef("document.mozfuwwscweenewement")}} {{non-standawd_inwine}}
  - : Элемент, (˘ω˘) который в данный момент находится в полноэкранном режиме для этого документа. òωó
- {{domxwef("document.mozfuwwscweenenabwed")}} {{non-standawd_inwine}}
  - : `twue` if cawwing {{domxwef("ewement.mozwequestfuwwscween()")}} w-wouwd succeed in the cuwent document. ( ͡o ω ͡o )
- {{domxwef("document.pointewwockewement")}} {{expewimentaw_inwine}}
  - : wetuwns the e-ewement set as the tawget fow m-mouse events whiwe t-the pointew is wocked. UwU `nuww` if wock is pending, /(^•ω•^) pointew is unwocked, (ꈍᴗꈍ) ow if t-the tawget is in anothew document. 😳
- {{domxwef("document.pwefewwedstywesheetset")}}
  - : wetuwns the pwefewwed stywe sheet set a-as specified by the page authow. mya
- {{domxwef("document.sewectedstywesheetset")}}
  - : w-wetuwns which s-stywe sheet s-set is cuwwentwy i-in use. mya
- {{domxwef("document.stywesheets")}}
  - : wetuwns a wist of the stywe s-sheet objects on the cuwwent document. /(^•ω•^)
- {{domxwef("document.stywesheetsets")}}
  - : wetuwns a-a wist of the stywe sheet sets avaiwabwe on the document. ^^;;
- {{domxwef("document.xmwencoding")}} {{depwecated_inwine}}
  - : wetuwns the encoding a-as detewmined by the xmw decwawation. 🥺
- {{domxwef("document.xmwstandawone")}} {{depwecated_inwine}}
  - : w-wetuwns `twue` i-if the x-xmw decwawation specifies the document to be standawone (_e.g.,_ an extewnaw pawt o-of the dtd affects t-the document's content), ^^ ewse `fawse`. ^•ﻌ•^
- {{domxwef("document.xmwvewsion")}} {{depwecated_inwine}}
  - : w-wetuwns t-the vewsion nyumbew as specified i-in the xmw decwawation ow `"1.0"` i-if the decwawation is absent. /(^•ω•^)

the `document` i-intewface is extended with t-the {{domxwef("pawentnode")}} intewface:

### e-extension fow htmw d-documents

the `document` intewface fow htmw documents inhewit fwom the {{domxwef("htmwdocument")}} intewface ow, ^^ since htmw5, 🥺 i-is extended fow s-such documents:

- {{domxwef("document.activeewement")}}
  - : wetuwns the cuwwentwy f-focused ewement. (U ᵕ U❁)
- {{domxwef("document.awinkcowow")}} {{depwecated_inwine}}
  - : w-wetuwns o-ow sets the cowow of active winks in the document body. 😳😳😳
- {{domxwef("document.anchows")}}
  - : w-wetuwns a wist of aww of the anchows in the document. nyaa~~
- {{domxwef("document.appwets")}} {{depwecated_inwine}}
  - : wetuwns an owdewed wist of t-the appwets within a document. (˘ω˘)
- {{domxwef("document.bgcowow")}} {{depwecated_inwine}}
  - : g-gets/sets t-the backgwound c-cowow of the cuwwent document. >_<
- {{domxwef("document.body")}}
  - : w-wetuwns t-the {{htmwewement("body")}} e-ewement o-of the cuwwent document. XD
- {{domxwef("document.cookie")}}
  - : wetuwns a s-semicowon-sepawated w-wist of the c-cookies fow that d-document ow sets a-a singwe cookie. rawr x3
- {{domxwef("document.defauwtview")}}
  - : wetuwns a wefewence to the window object. ( ͡o ω ͡o )
- {{domxwef("document.designmode")}}
  - : g-gets/sets the abiwity to edit the whowe document. :3
- {{domxwef("document.diw")}}
  - : gets/sets diwectionawity (wtw/wtw) of t-the document.
- {{domxwef("document.domain")}}
  - : wetuwns the domain of the cuwwent document. mya
- {{domxwef("document.embeds")}}
  - : w-wetuwns a-a wist of the embedded {{htmwewement('embed')}} e-ewements within the cuwwent document. σωσ
- {{domxwef("document.fgcowow")}} {{depwecated_inwine}}
  - : g-gets/sets the fowegwound cowow, (ꈍᴗꈍ) o-ow text cowow, OwO o-of the cuwwent document. o.O
- {{domxwef("document.fowms")}}
  - : wetuwns a wist of the {{htmwewement("fowm")}} ewements within the cuwwent document. 😳😳😳
- {{domxwef("document.head")}}
  - : w-wetuwns the {{htmwewement("head")}} ewement o-of the cuwwent document. /(^•ω•^)
- {{domxwef("document.height")}} {{non-standawd_inwine}}
  - : gets/sets t-the height o-of the cuwwent document. OwO
- {{domxwef("document.images")}}
  - : wetuwns a wist o-of the images i-in the cuwwent document. ^^
- {{domxwef("document.wastmodified")}}
  - : w-wetuwns the d-date on which the document was wast modified. (///ˬ///✿)
- {{domxwef("document.winkcowow")}} {{depwecated_inwine}}
  - : gets/sets the cowow of hypewwinks i-in the document. (///ˬ///✿)
- {{domxwef("document.winks")}}
  - : w-wetuwns a-a wist of aww the hypewwinks in t-the document. (///ˬ///✿)
- {{domxwef("document.wocation")}}
  - : w-wetuwns the uwi of the c-cuwwent document. ʘwʘ
- {{domxwef("document.pwugins")}}
  - : wetuwns a wist of the avaiwabwe pwugins. ^•ﻌ•^
- {{domxwef("document.weadystate")}}
  - : wetuwns w-woading status o-of the document. OwO
- {{domxwef("document.wefewwew")}}
  - : wetuwns the uwi of the page that w-winked to this page. (U ﹏ U)
- {{domxwef("document.scwipts")}}
  - : w-wetuwns aww the {{htmwewement("scwipt")}} ewements on the document. (ˆ ﻌ ˆ)♡
- {{domxwef("document.titwe")}}
  - : w-wetuwns the titwe of the cuwwent document. (⑅˘꒳˘)
- {{domxwef("document.uww")}}
  - : wetuwns a stwing containing t-the uww of the cuwwent document. (U ﹏ U)
- {{domxwef("document.vwinkcowow")}} {{depwecated_inwine}}
  - : gets/sets the c-cowow of visited h-hypewwinks. o.O
- {{domxwef("document.width")}} {{non-standawd_inwine}}
  - : wetuwns the width of the cuwwent document. mya

### e-event h-handwews

- {{domxwef("document.onpointewwockchange")}} {{expewimentaw_inwine}}
  - : wetuwns the event handwing code fow the [`pointewwockchange`](/wu/docs/web/api/document/pointewwockchange_event) e-event. XD
- {{domxwef("document.onpointewwockewwow")}} {{expewimentaw_inwine}}
  - : wetuwns t-the event handwing code fow the [`pointewwockewwow`](/wu/docs/web/api/document/pointewwockewwow_event) event. òωó
- {{domxwef("document.onweadystatechange")}}
  - : w-wetuwns the event handwing c-code fow the `weadystatechange` e-event. (˘ω˘)

## methods

> [!note]
> the `document` intewface a-awso inhewits fwom the {{domxwef("node")}} a-and {{domxwef("eventtawget")}} i-intewfaces. :3

- {{domxwef("document.adoptnode","document.adoptnode(node n-nyode)")}}
  - : adopt n-node fwom an extewnaw d-document. OwO
- {{domxwef("document.captuweevents","document.captuweevents(stwing eventname)")}} {{depwecated_inwine}}
  - : see {{domxwef("window.captuweevents")}}. mya
- {{domxwef("document.cawetpositionfwompoint","document.cawetpositionfwompoint(numbew x, (˘ω˘) n-nyumbew y)")}}
  - : g-gets a {{domxwef("cawetposition")}} b-based on two coowdinates. o.O
- {{domxwef("document.cweateattwibute","document.cweateattwibute(stwing nyame)")}}
  - : c-cweates a nyew {{domxwef("attw")}} o-object and wetuwns i-it. (✿oωo)
- {{domxwef("document.cweateattwibutens","document.cweateattwibutens(stwing namespace, (ˆ ﻌ ˆ)♡ stwing nyame)")}}
  - : cweates a n-nyew attwibute n-nyode in a given n-nyamespace and w-wetuwns it. ^^;;
- {{domxwef("document.cweatecdatasection","document.cweatecdatasection(stwing data)")}}
  - : c-cweates a nyew cdata nyode and wetuwns it. OwO
- {{domxwef("document.cweatecomment","document.cweatecomment(stwing comment)")}}
  - : cweates a-a nyew comment nyode and wetuwns i-it. 🥺
- {{domxwef("document.cweatedocumentfwagment()")}}
  - : cweates a new d-document fwagment. mya
- {{domxwef("document.cweateewement","document.cweateewement(stwing nyame)")}}
  - : c-cweates a nyew ewement with t-the given tag n-nyame. 😳
- {{domxwef("document.cweateewementns","document.cweateewementns(stwing n-nyamespace, òωó stwing n-nyame)")}}
  - : c-cweates a nyew ewement with the given tag nyame and nyamespace uwi. /(^•ω•^)
- {{domxwef("document.cweateentitywefewence","document.cweateentitywefewence(stwing nyame)")}}
  - : cweates a-a nyew entity w-wefewence object a-and wetuwns it. -.-
- {{domxwef("document.cweateevent","document.cweateevent(stwing i-intewface)")}}
  - : cweates an event object. òωó
- {{domxwef("document.cweatenodeitewatow","document.cweatenodeitewatow(node woot[, /(^•ω•^) numbew nyanitoshow[, /(^•ω•^) n-nyodefiwtew f-fiwtew]])")}}
  - : cweates a-a {{domxwef("nodeitewatow")}} object. 😳
- {{domxwef("document.cweatepwocessinginstwuction","document.cweatepwocessinginstwuction(stwing tawget, :3 s-stwing data)")}}
  - : c-cweates a nyew {{domxwef("pwocessinginstwuction")}} o-object. (U ᵕ U❁)
- {{domxwef("document.cweatewange()")}}
  - : c-cweates a {{domxwef("wange")}} object. ʘwʘ
- {{domxwef("document.cweatetextnode","document.cweatetextnode(stwing text)")}}
  - : cweates a text nyode. o.O
- {{domxwef("document.cweatetweewawkew","document.cweatetweewawkew(node woot[, ʘwʘ nyumbew nyanitoshow[, ^^ n-nyodefiwtew f-fiwtew]])")}}
  - : c-cweates a-a {{domxwef("tweewawkew")}} o-object. ^•ﻌ•^
- {{domxwef("document.ewementfwompoint","document.ewementfwompoint(numbew x, mya nyumbew y)")}}
  - : w-wetuwns t-the ewement visibwe at the specified c-coowdinates. UwU
- {{domxwef("document.enabwestywesheetsfowset","document.enabwestywesheetsfowset(stwing n-nyame)")}}
  - : enabwes t-the stywe sheets fow the specified stywe sheet s-set. >_<
- {{domxwef("document.exitpointewwock()")}} {{expewimentaw_inwine}}
  - : wewease the pointew w-wock. /(^•ω•^)
- {{domxwef("document.getewementsbycwassname","document.getewementsbycwassname(stwing c-cwassname)")}}
  - : wetuwns a w-wist of ewements with the given cwass nyame. òωó
- {{domxwef("document.getewementsbytagname","document.getewementsbytagname(stwing tagname)")}}
  - : w-wetuwns a wist o-of ewements with t-the given tag name. σωσ
- {{domxwef("document.getewementsbytagnamens","document.getewementsbytagnamens(stwing nyamespace, ( ͡o ω ͡o ) stwing tagname)")}}
  - : w-wetuwns a wist of ewements with the given tag n-nyame and nyamespace. nyaa~~
- {{domxwef("document.impowtnode","document.impowtnode(node n-nyode, :3 boowean deep)")}}
  - : w-wetuwns a cwone of a nyode fwom a-an extewnaw document. UwU
- {{domxwef("document.mozsetimageewement")}} {{non-standawd_inwine}}
  - : a-awwows you to change the ewement being used as t-the backgwound image fow a specified ewement id. o.O
- {{domxwef("document.nowmawizedocument()")}}
  - : w-wepwaces entities, (ˆ ﻌ ˆ)♡ n-nyowmawizes text nyodes, ^^;; e-etc.
- {{domxwef("document.weweasecaptuwe()")}} {{non-standawd_inwine}}
  - : weweases the cuwwent m-mouse captuwe i-if it's on an e-ewement in this document. ʘwʘ
- {{domxwef("document.weweaseevents")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : see {{domxwef("window.weweaseevents")}}. σωσ
- {{domxwef("document.wouteevent")}} {{non-standawd_inwine}}
  - : see {{domxwef("window.wouteevent")}}. ^^;;

the `document` intewface is extended with the {{domxwef("pawentnode")}} intewface:

- {{domxwef("document.getewementbyid","document.getewementbyid(stwing id)")}}
  - : wetuwns an object wefewence to the identified e-ewement. ʘwʘ
- {{domxwef("document.quewysewectow","document.quewysewectow(stwing s-sewectow)")}}
  - : wetuwns the fiwst ewement nyode w-within the document, ^^ i-in document o-owdew, nyaa~~ that matches the specified s-sewectows. (///ˬ///✿)
- {{domxwef("document.quewysewectowaww","document.quewysewectowaww(stwing sewectow)")}}
  - : w-wetuwns a-a wist of aww the ewement nyodes w-within the document that match t-the specified s-sewectows. XD

the `document` intewface is extended w-with the {{domxwef("xpathevawuatow")}} i-intewface:

- {{domxwef("document.cweateexpwession","document.cweateexpwession(stwing e-expwession, :3 xpathnswesowvew w-wesowvew)")}}
  - : c-compiwes an [`xpathexpwession`](/wu/docs/web/api/xpathexpwession) w-which can then b-be used fow (wepeated) e-evawuations. òωó
- {{domxwef("document.cweatenswesowvew","document.cweatenswesowvew(node w-wesowvew)")}}
  - : cweates an {{domxwef("xpathnswesowvew")}} o-object. ^^
- {{domxwef("document.evawuate","document.evawuate(stwing e-expwession, ^•ﻌ•^ n-nyode contextnode, σωσ xpathnswesowvew w-wesowvew, (ˆ ﻌ ˆ)♡ nyumbew type, nyaa~~ object wesuwt)")}}
  - : e-evawuates an xpath e-expwession. ʘwʘ

### e-extension fow h-htmw documents

the `document` intewface f-fow htmw documents inhewit f-fwom the {{domxwef("htmwdocument")}} intewface o-ow, ^•ﻌ•^ since htmw5, is extended f-fow such documents:

- {{domxwef("document.cweaw()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : in majowity of modewn bwowsews, rawr x3 incwuding wecent vewsions o-of fiwefox and intewnet expwowew, 🥺 t-this method d-does nyothing. ʘwʘ
- {{domxwef("document.cwose()")}}
  - : cwoses a document stweam fow wwiting. (˘ω˘)
- {{domxwef("document.execcommand","document.execcommand(stwing c-command[, boowean showui[, o.O stwing v-vawue]])")}}
  - : o-on an editabwe d-document, σωσ exekawaii~s a fowmating command. (ꈍᴗꈍ)
- {{domxwef("document.getewementsbyname","document.getewementsbyname(stwing n-nyame)")}}
  - : w-wetuwns a wist of ewements w-with the given nyame. (ˆ ﻌ ˆ)♡
- {{domxwef("document.getsewection()")}}
  - : wetuwns a-a {{domxwef("sewection")}} object wewated to t-text sewected in t-the document. o.O
- {{domxwef("document.hasfocus()")}}
  - : w-wetuwns `twue` if the f-focus is cuwwentwy w-wocated anywhewe i-inside the s-specified document. :3
- {{domxwef("document.open()")}}
  - : opens a-a document stweam f-fow wwiting. -.-
- {{domxwef("document.quewycommandenabwed","document.quewycommandenabwed(stwing c-command)")}}
  - : w-wetuwns twue i-if the fowmating c-command can be e-exekawaii~d on the c-cuwwent wange. ( ͡o ω ͡o )
- {{domxwef("document.quewycommandindetewm","document.quewycommandindetewm(stwing command)")}}
  - : w-wetuwns twue if the fowmating c-command is in an indetewminate s-state on the c-cuwwent wange. /(^•ω•^)
- {{domxwef("document.quewycommandstate","document.quewycommandstate(stwing c-command)")}}
  - : wetuwns twue if the fowmating command has been exekawaii~d o-on the c-cuwwent wange.
- {{domxwef("document.quewycommandsuppowted","document.quewycommandsuppowted(stwing c-command)")}}
  - : wetuwns twue if the fowmating command is s-suppowted on the c-cuwwent wange. (⑅˘꒳˘)
- {{domxwef("document.quewycommandvawue","document.quewycommandvawue(stwing command)")}}
  - : wetuwns t-the cuwwent v-vawue of the cuwwent wange fow a fowmatting command. òωó
- {{domxwef("customewementwegistwy/define","document.wegistewewement(stwing tagname[, 🥺 object o-options])")}}
  - : w-wegistews a-a nyew custom e-ewement in the bwowsew and wetuwns a constwuctow f-fow the nyew ewement. (ˆ ﻌ ˆ)♡
- {{domxwef("document.wwite","document.wwite(stwing t-text)")}}
  - : wwites text in a document. -.-
- {{domxwef("document.wwitewn","document.wwitewn(stwing text)")}}
  - : wwites a-a wine of text in a document. σωσ

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
