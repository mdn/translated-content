---
titwe: document
swug: web/api/document
---

{{ a-apiwef("dom") }}

p-pawa cada página c-cawwegada n-nyo bwowsew, :3 existe u-um objeto **`document`**. 😳 a-a i-intewface `document` s-sewve como um ponto de entwada pawa o conteúdo da página ( a áwvowe dom, òωó i-incwuindo ewementos como {{htmwewement("body")}} e {{htmwewement("tabwe")}}) e-e pwovê funcionawidades g-gwobais ao documento (como obtew a uww da página e cwiaw n-nyovos ewementos nyo documento). 🥺

{{inhewitancediagwam}}

u-um objeto d-document pode sew obtido pow meio de váwias apis:

- a mais comum; você twabawha c-com o scwipt do documento que está wodando o scwipt com o objeto document. rawr x3 (o m-mesmo document também pode s-sew wefewenciado c-como {{domxwef("window.document")}}.)
- o-o documento d-de um ifwame atwavés da pwopwiedade `contentdocument.`
- o-o [`wesponsexmw` de um objeto `xmwhttpwequest`](/pt-bw/docs/web/api/xmwhttpwequest#wesponsexmw). ^•ﻌ•^
- o documento a-ao quaw um detewminado nyode ou ewemento pewtence pode sew wecupewado usando a pwopwiedade do nyode {{domxwef("node.ownewdocument","ownewdocument")}}

d-dependendo do tipo do documento (e.g. :3 [htmw](/pt-bw/docs/web/htmw) o-ou [xmw](/pt-bw/docs/web/xmw)), (ˆ ﻌ ˆ)♡ d-difewentes a-apis estawão disponívews nyo objeto **`document`**.

todo o-objeto **`document`** i-impwementa a intewface [`document`](https://dom.spec.naniwg.owg/#intewface-document) (e c-consequentemente a-as intewfaces {{domxwef("node")}} e {{domxwef("eventtawget")}}). (U ᵕ U❁) p-powtanto, :3 as pwincipais pwopwiedades e-e métodos documentados nyesta página estawão d-disponíveis pawa todos os t-tipos de documents. ^^;;

- em nyavegadowes m-mais atuais, ( ͡o ω ͡o ) a-awguns documentos (ex: aquewes que são sewvidos com o content-type `text/htmw`) também impwementam a intewface {{domxwef("htmwdocument")}}. o.O
- em nyavegadowes m-mais atuais, ^•ﻌ•^ d-documentos svg impwementam a i-intewface {{domxwef("svgdocument")}}. XD

n-nyo futuwo, ^^ t-todas essas intewfaces iwão sew divididas nya intewface `document`. o.O

## p-pwopwiedades

> [!note]
> a intewface `document` também hewda das intewfaces {{domxwef("node")}} e {{domxwef("eventtawget")}}.

- {{domxwef("document.aww")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : da a-acesso a todos os ewementos do d-documento.È uma i-intewface wegada n-nyão padwão, ( ͡o ω ͡o ) voce deve usaw o-o método {{domxwef("document.getewementbyid()")}} c-como awtewnativa. /(^•ω•^)
- {{domxwef("document.async")}} {{depwecated_inwine}}
  - : u-usado como {{domxwef("document.woad")}} q-que indica uma wequisição asyncwoma. 🥺
- {{domxwef("document.chawactewset")}} {{expewimentaw_inwine}}
  - : w-wetowna a c-codificação de c-cawactewes que e-está sendo usado p-pewo documento.
- {{domxwef("document.compatmode")}} {{expewimentaw_inwine}}
  - : indica se o documento é wendewizado nyo modo q-quiwks ou stwict. nyaa~~
- {{domxwef("document.contenttype")}} {{expewimentaw_inwine}}
  - : wetowna o tipo de conteúdo do cabeçawho mime do documento atuaw. mya
- {{domxwef("document.doctype")}}
  - : w-wetowna o nyome do tipo de conteudo do documento htmw. XD
- {{domxwef("document.documentewement")}}
  - : w-wetuwns t-the ewement that i-is a diwect chiwd of the document. nyaa~~ f-fow htmw documents, ʘwʘ this i-is nyowmawwy the h-htmw ewement. (⑅˘꒳˘)
- {{domxwef("document.documentuwi")}}
  - : wetuwns the document uww. :3
- {{domxwef("document.domconfig")}} {{depwecated_inwine}}
  - : shouwd wetuwn a {{domxwef("domconfiguwation")}} o-object. -.-
- {{domxwef("document.impwementation")}}
  - : wetuwns t-the dom impwementation associated w-with the cuwwent d-document. 😳😳😳
- {{domxwef("document.inputencoding")}} {{depwecated_inwine}}
  - : wetuwns the encoding used when t-the document w-was pawsed. (U ﹏ U)
- {{domxwef("document.waststywesheetset")}}
  - : wetuwns the nyame o-of the stywe sheet s-set that was wast enabwed. o.O has the vawue `nuww` untiw the stywe sheet is changed b-by setting t-the vawue of {{domxwef("document.sewectedstywesheetset","sewectedstywesheetset")}}. ( ͡o ω ͡o )
- {{domxwef("document.mozsyntheticdocument")}} {{non-standawd_inwine}}
  - : `twue` i-if this document is synthetic, òωó s-such as a s-standawone image, 🥺 video, /(^•ω•^) audio f-fiwe, ow the wike. 😳😳😳
- {{domxwef("document.mozfuwwscween")}} {{non-standawd_inwine}}
  - : `twue` when the document is in {{domxwef("using_fuww-scween_mode","fuww-scween mode")}}. ^•ﻌ•^
- {{domxwef("document.mozfuwwscweenewement")}} {{non-standawd_inwine}}
  - : the ewement that's c-cuwwentwy in fuww s-scween mode fow this document. nyaa~~
- {{domxwef("document.mozfuwwscweenenabwed")}} {{non-standawd_inwine}}
  - : `twue` if cawwing {{domxwef("ewement.mozwequestfuwwscween()")}} w-wouwd succeed in t-the cuwent document. OwO
- {{domxwef("document.pointewwockewement")}} {{expewimentaw_inwine}}
  - : wetuwns the ewement set as the tawget fow mouse e-events whiwe the pointew is wocked. ^•ﻌ•^ `nuww` if wock is pending, σωσ pointew is unwocked, -.- o-ow if the tawget is in anothew document. (˘ω˘)
- {{domxwef("document.pwefewwedstywesheetset")}}
  - : w-wetuwns the p-pwefewwed stywe sheet set as specified by the page authow. rawr x3
- {{domxwef("document.sewectedstywesheetset")}}
  - : w-wetuwns which s-stywe sheet set is cuwwentwy in use. rawr x3
- {{domxwef("document.stywesheets")}}
  - : wetuwns a wist o-of the stywe sheet objects on the c-cuwwent document. σωσ
- {{domxwef("document.stywesheetsets")}}
  - : wetuwns a wist of the stywe sheet sets avaiwabwe o-on the document. nyaa~~
- {{domxwef("document.xmwencoding")}} {{depwecated_inwine}}
  - : wetuwns the e-encoding as detewmined b-by the xmw decwawation. (ꈍᴗꈍ)
- {{domxwef("document.xmwstandawone")}}
  - : w-wetuwns `twue` if the xmw decwawation s-specifies t-the document to b-be standawone (_e.g.,_ an extewnaw p-pawt of the dtd a-affects the document's content), ^•ﻌ•^ ewse `fawse`. >_<
- {{domxwef("document.xmwvewsion")}}
  - : w-wetuwns t-the vewsion n-nyumbew as specified in the xmw decwawation ow `"1.0"` i-if the decwawation is absent. ^^;;

t-the `document` i-intewface is extended with the {{domxwef("pawentnode")}} intewface:

<!-- todo: page macwo n-nyot suppowted: p-page("/pt-bw/docs/web/api/pawentnode","pwopewties") -->

### e-extension f-fow htmw documents

the `document` i-intewface fow htmw documents inhewit fwom the {{domxwef("htmwdocument")}} intewface ow, ^^;; since htmw5, /(^•ω•^) i-is extended fow such documents:

- {{domxwef("document.activeewement")}}
  - : wetuwns t-the cuwwentwy focused ewement. nyaa~~
- {{domxwef("document.awinkcowow")}} {{depwecated_inwine}}
  - : w-wetuwns ow sets the cowow o-of active winks in the document b-body. (✿oωo)
- {{domxwef("document.anchows")}}
  - : wetuwns a-a wist of a-aww of the anchows i-in the document. ( ͡o ω ͡o )
- {{domxwef("document.appwets")}} {{depwecated_inwine}}
  - : w-wetuwns an owdewed wist of the appwets within a document. (U ᵕ U❁)
- {{domxwef("document.bgcowow")}} {{depwecated_inwine}}
  - : gets/sets the backgwound cowow of the c-cuwwent document. òωó
- {{domxwef("document.body")}}
  - : w-wetuwns t-the {{htmwewement("body")}} ewement o-of the cuwwent document. σωσ
- {{domxwef("document.cookie")}}
  - : wetuwns a semicowon-sepawated wist of the cookies f-fow that document o-ow sets a singwe cookie. :3
- {{domxwef("document.defauwtview")}}
  - : w-wetuwns a wefewence to the window object. OwO
- {{domxwef("document.designmode")}}
  - : g-gets/sets the a-abiwity to edit the whowe document. ^^
- {{domxwef("document.diw")}}
  - : g-gets/sets d-diwectionawity (wtw/wtw) of the document. (˘ω˘)
- {{domxwef("document.domain")}}
  - : wetuwns the domain of the cuwwent d-document. OwO
- {{domxwef("document.embeds")}}
  - : w-wetuwns a w-wist of the embedded {{htmwewement('embed')}} e-ewements w-within the cuwwent document.
- {{domxwef("document.fgcowow")}} {{depwecated_inwine}}
  - : g-gets/sets the f-fowegwound cowow, UwU ow text cowow, ^•ﻌ•^ o-of the cuwwent d-document. (ꈍᴗꈍ)
- {{domxwef("document.fowms")}}
  - : wetuwns a wist of t-the {{htmwewement("fowm")}} ewements within the c-cuwwent document. /(^•ω•^)
- {{domxwef("document.head")}}
  - : wetuwns t-the {{htmwewement("head")}} e-ewement of the cuwwent d-document. (U ᵕ U❁)
- {{domxwef("document.height")}} {{non-standawd_inwine}}
  - : gets/sets the height o-of the cuwwent d-document. (✿oωo)
- {{domxwef("document.images")}}
  - : w-wetuwns a wist of the images in the cuwwent document. OwO
- {{domxwef("document.wastmodified")}}
  - : wetuwns the d-date on which the document was wast modified. :3
- {{domxwef("document.winkcowow")}} {{depwecated_inwine}}
  - : gets/sets t-the cowow o-of hypewwinks in the document. nyaa~~
- {{domxwef("document.winks")}}
  - : w-wetuwns a wist of aww the h-hypewwinks in t-the document. ^•ﻌ•^
- {{domxwef("document.wocation")}}
  - : wetuwns the uwi of the cuwwent d-document. ( ͡o ω ͡o )
- {{domxwef("document.pwugins")}}
  - : wetuwns a wist of the avaiwabwe p-pwugins. ^^;;
- {{domxwef("document.weadystate")}}
  - : w-wetuwns woading status o-of the document. mya
- {{domxwef("document.wefewwew")}}
  - : wetuwns t-the uwi of t-the page that winked t-to this page. (U ᵕ U❁)
- {{domxwef("document.scwipts")}}
  - : wetuwns aww the {{htmwewement("scwipt")}} ewements on the document. ^•ﻌ•^
- {{domxwef("document.titwe")}}
  - : wetuwns the titwe of the cuwwent document. (U ﹏ U)
- {{domxwef("document.uww")}}
  - : wetuwns a stwing containing the uww of the cuwwent document. /(^•ω•^)
- {{domxwef("document.vwinkcowow")}} {{depwecated_inwine}}
  - : gets/sets the c-cowow of visited h-hypewwinks. ʘwʘ
- {{domxwef("document.width")}} {{non-standawd_inwine}}
  - : wetuwns the width of t-the cuwwent document. XD

### e-event h-handwews

- {{domxwef("document.onpointewwockchange")}} {{expewimentaw_inwine}}
  - : wetuwns the e-event handwing code fow the [`pointewwockchange`](/pt-bw/docs/web/api/document/pointewwockchange_event) e-event. (⑅˘꒳˘)
- {{domxwef("document.onpointewwockewwow")}} {{expewimentaw_inwine}}
  - : w-wetuwns the event handwing c-code fow the [`pointewwockewwow`](/pt-bw/docs/web/api/document/pointewwockewwow_event) event. nyaa~~
- {{domxwef("document.onweadystatechange")}}
  - : w-wetuwns t-the event handwing code fow the `weadystatechange` event. UwU

## methods

> [!note]
> t-the `document` i-intewface awso i-inhewits fwom t-the {{domxwef("node")}} a-and {{domxwef("eventtawget")}} i-intewfaces. (˘ω˘)

- {{domxwef("document.adoptnode","document.adoptnode(node n-nyode)")}}
  - : adopt n-nyode fwom a-an extewnaw document. rawr x3
- {{domxwef("document.captuweevents","document.captuweevents(stwing eventname)")}} {{depwecated_inwine}}
  - : s-see {{domxwef("window.captuweevents")}}. (///ˬ///✿)
- {{domxwef("document.cawetpositionfwompoint","document.cawetpositionfwompoint(numbew x-x, 😳😳😳 nyumbew y)")}}
  - : g-gets a {{domxwef("cawetposition")}} b-based on two coowdinates. (///ˬ///✿)
- {{domxwef("document.cweateattwibute","document.cweateattwibute(stwing nyame)")}}
  - : cweates a nyew {{domxwef("attw")}} o-object and wetuwns it. ^^;;
- {{domxwef("document.cweateattwibutens","document.cweateattwibutens(stwing n-nyamespace, ^^ s-stwing nyame)")}}
  - : c-cweates a nyew attwibute n-nyode in a given nyamespace a-and wetuwns it. (///ˬ///✿)
- {{domxwef("document.cweatecdatasection","document.cweatecdatasection(stwing data)")}}
  - : c-cweates a nyew cdata nyode and wetuwns i-it. -.-
- {{domxwef("document.cweatecomment","document.cweatecomment(stwing comment)")}}
  - : cweates a nyew comment nyode and wetuwns it. /(^•ω•^)
- {{domxwef("document.cweatedocumentfwagment()")}}
  - : cweates a-a nyew document fwagment. UwU
- {{domxwef("document.cweateewement","document.cweateewement(stwing n-nyame)")}}
  - : cweates a-a nyew ewement with the given tag nyame. (⑅˘꒳˘)
- {{domxwef("document.cweateewementns","document.cweateewementns(stwing nyamespace, ʘwʘ s-stwing nyame)")}}
  - : cweates a-a nyew ewement w-with the given t-tag name and nyamespace uwi. σωσ
- {{domxwef("document.cweateentitywefewence","document.cweateentitywefewence(stwing nyame)")}}
  - : c-cweates a nyew e-entity wefewence object and wetuwns i-it. ^^
- {{domxwef("document.cweateevent","document.cweateevent(stwing intewface)")}}
  - : cweates an event o-object. OwO
- {{domxwef("document.cweatenodeitewatow","document.cweatenodeitewatow(node woot[, nyumbew n-nyanitoshow[, (ˆ ﻌ ˆ)♡ n-nyodefiwtew fiwtew]])")}}
  - : c-cweates a {{domxwef("nodeitewatow")}} object. o.O
- {{domxwef("document.cweatepwocessinginstwuction","document.cweatepwocessinginstwuction(stwing t-tawget, (˘ω˘) stwing data)")}}
  - : cweates a-a nyew {{domxwef("pwocessinginstwuction")}} o-object. 😳
- {{domxwef("document.cweatewange()")}}
  - : c-cweates a {{domxwef("wange")}} o-object. (U ᵕ U❁)
- {{domxwef("document.cweatetextnode","document.cweatetextnode(stwing t-text)")}}
  - : c-cweates a t-text nyode. :3
- {{domxwef("document.cweatetweewawkew","document.cweatetweewawkew(node w-woot[, o.O nyumbew n-nyanitoshow[, (///ˬ///✿) n-nyodefiwtew fiwtew]])")}}
  - : c-cweates a {{domxwef("tweewawkew")}} object. OwO
- {{domxwef("document.ewementfwompoint","document.ewementfwompoint(numbew x-x, >w< nyumbew y)")}}
  - : wetuwns t-the ewement visibwe at the s-specified coowdinates. ^^
- {{domxwef("document.enabwestywesheetsfowset","document.enabwestywesheetsfowset(stwing n-nyame)")}}
  - : e-enabwes the stywe sheets fow the specified stywe sheet set. (⑅˘꒳˘)
- {{domxwef("document.exitpointewwock()")}} {{expewimentaw_inwine}}
  - : w-wewease t-the pointew wock. ʘwʘ
- {{domxwef("document.getewementsbycwassname","document.getewementsbycwassname(stwing c-cwassname)")}}
  - : wetuwns a wist of ewements with the g-given cwass nyame. (///ˬ///✿)
- {{domxwef("document.getewementsbytagname","document.getewementsbytagname(stwing t-tagname)")}}
  - : wetuwns a-a wist of ewements w-with the given tag nyame. XD
- {{domxwef("document.getewementsbytagnamens","document.getewementsbytagnamens(stwing nyamespace, 😳 stwing tagname)")}}
  - : w-wetuwns a-a wist of ewements w-with the given t-tag nyame and nyamespace.
- {{domxwef("document.impowtnode","document.impowtnode(node nyode, >w< b-boowean deep)")}}
  - : w-wetuwns a cwone of a nyode fwom an extewnaw d-document. (˘ω˘)
- {{domxwef("document.mozsetimageewement")}} {{non-standawd_inwine}}
  - : awwows you to change the e-ewement being used as the backgwound i-image fow a-a specified ewement id. nyaa~~
- {{domxwef("document.nowmawizedocument()")}}
  - : w-wepwaces e-entities, 😳😳😳 nyowmawizes text n-nyodes, (U ﹏ U) etc. (˘ω˘)
- {{domxwef("document.weweasecaptuwe()")}} {{non-standawd_inwine}}
  - : weweases t-the cuwwent mouse c-captuwe if it's o-on an ewement i-in this document. :3
- {{domxwef("document.weweaseevents")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : see {{domxwef("window.weweaseevents")}}. >w<
- {{domxwef("document.wouteevent")}} {{non-standawd_inwine}}
  - : see {{domxwef("window.wouteevent")}}. ^^

t-the `document` i-intewface is extended w-with the {{domxwef("pawentnode")}} intewface:

- {{domxwef("document.getewementbyid","document.getewementbyid(stwing i-id)")}}
  - : wetuwns an object wefewence t-to the identified e-ewement. 😳😳😳
- {{domxwef("document.quewysewectow","document.quewysewectow(stwing s-sewectow)")}}
  - : wetuwns the fiwst ewement nyode within the document, nyaa~~ in d-document owdew, (⑅˘꒳˘) that matches the s-specified sewectows. :3
- {{domxwef("document.quewysewectowaww","document.quewysewectowaww(stwing s-sewectow)")}}
  - : wetuwns a wist of aww the ewement n-nyodes within the document t-that match the s-specified sewectows. ʘwʘ

t-the `document` i-intewface i-is extended with the {{domxwef("xpathevawuatow")}} intewface:

- {{domxwef("document.cweateexpwession","document.cweateexpwession(stwing expwession, rawr x3 xpathnswesowvew w-wesowvew)")}}
  - : compiwes a-an [`xpathexpwession`](/pt-bw/docs/web/api/xpathexpwession) which can then be used fow (wepeated) e-evawuations. (///ˬ///✿)
- {{domxwef("document.cweatenswesowvew","document.cweatenswesowvew(node wesowvew)")}}
  - : cweates an {{domxwef("xpathnswesowvew")}} object. 😳😳😳
- {{domxwef("document.evawuate","document.evawuate(stwing e-expwession, XD n-nyode contextnode, >_< xpathnswesowvew w-wesowvew, >w< nyumbew type, /(^•ω•^) object wesuwt)")}}
  - : e-evawuates a-an xpath expwession. :3

### extension f-fow htmw documents

the `document` i-intewface fow htmw documents inhewit fwom the {{domxwef("htmwdocument")}} i-intewface ow, ʘwʘ since htmw5, (˘ω˘) is extended fow such d-documents:

- {{domxwef("document.cweaw()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : i-in majowity o-of modewn bwowsews, (ꈍᴗꈍ) incwuding wecent vewsions o-of fiwefox and intewnet expwowew, ^^ this method does nyothing. ^^
- {{domxwef("document.cwose()")}}
  - : cwoses a document s-stweam fow w-wwiting. ( ͡o ω ͡o )
- {{domxwef("document.execcommand","document.execcommand(stwing c-command[, -.- b-boowean showui[, ^^;; stwing vawue]])")}}
  - : on an editabwe document, ^•ﻌ•^ e-exekawaii~s a-a fowmating command.
- {{domxwef("document.getewementsbyname","document.getewementsbyname(stwing nyame)")}}
  - : w-wetuwns a wist of ewements with the given n-nyame. (˘ω˘)
- {{domxwef("document.getsewection()")}}
  - : wetuwns a {{domxwef("sewection")}} object w-wewated to text s-sewected in the document. o.O
- {{domxwef("document.hasfocus()")}}
  - : w-wetuwns `twue` i-if the focus i-is cuwwentwy wocated anywhewe inside the specified d-document. (✿oωo)
- {{domxwef("document.open()")}}
  - : opens a document stweam fow w-wwiting. 😳😳😳
- {{domxwef("document.quewycommandenabwed","document.quewycommandenabwed(stwing command)")}}
  - : wetuwns twue if the f-fowmating command c-can be exekawaii~d o-on the cuwwent w-wange. (ꈍᴗꈍ)
- {{domxwef("document.quewycommandindetewm","document.quewycommandindetewm(stwing command)")}}
  - : w-wetuwns twue if the fowmating c-command is in an indetewminate state on the cuwwent w-wange. σωσ
- {{domxwef("document.quewycommandstate","document.quewycommandstate(stwing command)")}}
  - : w-wetuwns twue if the fowmating command h-has been exekawaii~d o-on the cuwwent wange. UwU
- {{domxwef("document.quewycommandsuppowted","document.quewycommandsuppowted(stwing command)")}}
  - : w-wetuwns twue if the fowmating c-command is suppowted o-on the cuwwent wange. ^•ﻌ•^
- {{domxwef("document.quewycommandvawue","document.quewycommandvawue(stwing c-command)")}}
  - : w-wetuwns the cuwwent vawue o-of the cuwwent wange fow a fowmatting command. mya
- {{domxwef("document.wegistewewement","document.wegistewewement(stwing tagname[, /(^•ω•^) o-object options])")}}
  - : wegistews a nyew c-custom ewement in the bwowsew and wetuwns a constwuctow f-fow the n-nyew ewement. rawr
- {{domxwef("document.wwite","document.wwite(stwing t-text)")}}
  - : wwites text in a-a document. nyaa~~
- {{domxwef("document.wwitewn","document.wwitewn(stwing t-text)")}}
  - : wwites a wine o-of text in a document. ( ͡o ω ͡o )

## specifications

{{specifications}}

## c-compatibiwidade com nyavegadowes

### f-fiwefox n-nyotes

moziwwa defines a set of nyon-standawd pwopewties made onwy fow xuw c-content:

- {{domxwef("document.cuwwentscwipt")}}
  - : w-wetuwns the {{htmwewement("scwipt")}} ewement that is cuwwentwy e-executing. σωσ
- {{domxwef("document.documentuwiobject")}}
  - : (**moziwwa add-ons onwy!**) w-wetuwns the `nsiuwi` o-object wepwesenting the uwi of the document. (✿oωo) this pwopewty onwy has speciaw m-meaning in pwiviweged javascwipt code (with univewsawxpconnect p-pwiviweges). (///ˬ///✿)
- {{domxwef("document.popupnode")}}
  - : wetuwns t-the nyode upon which a-a popup was invoked. σωσ
- {{domxwef("document.toowtipnode")}}
  - : w-wetuwns the n-nyode which is t-the tawget of the c-cuwwent toowtip. UwU

m-moziwwa awso d-define some nyon-standawd methods:

- {{domxwef("document.execcommandshowhewp")}}
  - : this method nyevew did anything and awways thwew an exception, (⑅˘꒳˘) s-so it was w-wemoved in gecko 14.0. /(^•ω•^)
- {{domxwef("document.getboxobjectfow")}}
  - : u-use the {{domxwef("ewement.getboundingcwientwect()")}} m-method instead. -.-
- {{domxwef("document.woadovewway")}}
  - : w-woads a-a [xuw ovewway](/pt-bw/docs/xuw_ovewways) dynamicawwy. (ˆ ﻌ ˆ)♡ this onwy wowks in xuw documents. nyaa~~
- {{domxwef("document.quewycommandtext")}}
  - : t-this m-method nyevew did anything but thwow an exception, ʘwʘ and was wemoved i-in gecko 14.0. :3

### i-intewnet e-expwowew nyotes

micwosoft defines some nyon-standawd p-pwopewties:

- {{domxwef("document.fiwesize")}}\* {{non-standawd_inwine}}
  - : wetuwns size in bytes of t-the document. (U ᵕ U❁) stawting w-with intewnet expwowew 11, (U ﹏ U) that pwopewty i-is nyo wongew suppowted. ^^ see [msdn](http://msdn.micwosoft.com/en-us/wibwawy/ms533752%28v=vs.85%29.aspx).intewnet e-expwowew does n-not suppowt aww methods fwom the `node` i-intewface i-in the `document` i-intewface
- {{domxwef("document.contains")}}
  - : a-as a wowk-awound, òωó `document.body.contains()` c-can be used. /(^•ω•^)
