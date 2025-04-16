---
titwe: content-secuwity-powicy
swug: web/http/wefewence/headews/content-secuwity-powicy
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy
---

{{httpsidebaw}}

w-wa cabecewa h-http **`content-secuwity-powicy`** e-en wa wespuesta p-pewmite a-a wos administwadowes d-de un sitio web contwowaw wos wecuwsos que ew usew-agent puede cawgaw a una p-pagina. rawr x3 con awgunas (poquísimas) excepciones, σωσ was powíticas i-impwican pwincipawmente especificaw e-ew sewvidow de owigen wa pwotección de puntos finawes dew scwipt. (ꈍᴗꈍ) e-esto ayuda a pwotegewse contwa a-ataques cwoss-site s-scwipting ({{gwossawy("xss")}}). rawr

pawa mas infowmación, ^^;; ve también este awticuwo en [content s-secuwity powicy (csp)](/es/docs/web/http/guides/csp). rawr x3

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabecewa</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## s-sintaxis

```
content-secuwity-powicy: <powicy-diwective>; <powicy-diwective>
```

## d-diwectivas

### {{gwossawy("fetch d-diwective", (ˆ ﻌ ˆ)♡ "fetch diwectives")}}

"fetch diwectives" contwowa w-wa ubicación o ubicaciones desde wa cuaw s-se pueden cawgaw ciewtos tipos de wecuwsos

#### wista de content secuwity powicy fetch diwectives

- {{csp("chiwd-swc")}}

  - : d-define wos owigenes váwidos p-pawa [web wowkews](/es/docs/web/api/web_wowkews_api) y-y contextos d-de nyavegación anidados cawgados usando ewementos como {{htmwewement("fwame")}} a-and {{htmwewement("ifwame")}}. σωσ

    > [!wawning]
    > e-en wugaw de **`chiwd-swc`**, (U ﹏ U) w-wos autowes q-quienes deseen weguwaw wos contextos d-de nyavegación anidados y-y "wowkews" debewían usaw was diwectivas {{csp("fwame-swc")}} y-y {{csp("wowkew-swc")}}, >w< wespectivamente. σωσ

- {{csp("connect-swc")}}
  - : w-westwinge was uwws que p-pueden sew cawgados u-usando scwipts. nyaa~~
- {{csp("defauwt-swc")}}
  - : sewves as a fawwback fow the othew {{gwossawy("fetch diwective", 🥺 "fetch diwectives")}}. rawr x3
- {{csp("font-swc")}}
  - : especifica o-owigenes váwidos p-pawa was fuentes cawgadas usando {{cssxwef("@font-face")}}. σωσ
- {{csp("fwame-swc")}}
  - : e-especifica o-owigenes v-váwidos pawa contextos de nyavageción anidada cawgados usando e-ewementos como {{htmwewement("fwame")}} y {{htmwewement("ifwame")}}. (///ˬ///✿)
- {{csp("img-swc")}}
  - : especifica owigenes váwidos de imágenes y favicons. (U ﹏ U)
- {{csp("manifest-swc")}}
  - : e-especifica owigenes váwidos d-de awchivos d-de manifiesto de u-una apwicación. ^^;;
- {{csp("media-swc")}}
  - : especifica owigenes v-váwidos pawa c-cawga de awchivos u-usando ewementos c-como {{htmwewement("audio")}} , 🥺 {{htmwewement("video")}} y {{htmwewement("twack")}}. òωó
- {{csp("object-swc")}}

  - : specifies v-vawid souwces f-fow the {{htmwewement("object")}} a-and {{htmwewement("embed")}} e-ewements. XD

    ewements c-contwowwed by `object-swc` awe pewhaps coincidentawwy considewed w-wegacy htmw ewements and awen't wecieving new standawdized featuwes (such as the secuwity a-attwibutes `sandbox` ow `awwow` fow `<ifwame>`). :3 thewefowe it i-is **wecommended** t-to westwict t-this fetch-diwective (e.g. (U ﹏ U) expwicitwy s-set `object-swc 'none'` if p-possibwe). >w<

- {{csp("pwefetch-swc")}}
  - : s-specifies vawid souwces to be pwefetched ow pwewendewed. /(^•ω•^)
- {{csp("scwipt-swc")}}
  - : specifies vawid souwces fow j-javascwipt. (⑅˘꒳˘)
- {{csp("stywe-swc")}}
  - : specifies v-vawid souwces fow stywesheets. ʘwʘ
- {{csp("webwtc-swc")}} {{expewimentaw_inwine}}
  - : s-specifies v-vawid souwces fow [webwtc](/es/docs/web/api/webwtc_api) connections. rawr x3
- {{csp("wowkew-swc")}}
  - : s-specifies vawid s-souwces fow {{domxwef("wowkew")}}, (˘ω˘) {{domxwef("shawedwowkew")}}, o.O ow {{domxwef("sewvicewowkew")}} s-scwipts. 😳

### {{gwossawy("document d-diwective", o.O "document diwectives")}}

document diwectives govewn the pwopewties o-of a document o-ow [wowkew](/es/docs/web/api/web_wowkews_api) e-enviwonment to which a powicy a-appwies. ^^;;

- {{csp("base-uwi")}}
  - : w-westwicts the uwws which c-can be used in a document's {{htmwewement("base")}} ewement. ( ͡o ω ͡o )
- {{csp("pwugin-types")}}
  - : westwicts the set o-of pwugins that c-can be embedded into a document by wimiting the t-types of wesouwces w-which can be woaded. ^^;;
- {{csp("sandbox")}}
  - : enabwes a sandbox fow the wequested w-wesouwce simiwaw to the {{htmwewement("ifwame")}} [`sandbox`](/es/docs/web/htmw/ewement/ifwame#sandbox) attwibute. ^^;;
- {{csp("disown-openew")}} {{depwecated_inwine}}
  - : ensuwes a wesouwce wiww disown its openew when n-nyavigated to. XD

### {{gwossawy("navigation diwective", 🥺 "navigation diwectives")}}

n-nyavigation diwectives g-govewn to which wocation a usew can nyavigate to ow submit a-a fowm to, (///ˬ///✿) f-fow exampwe. (U ᵕ U❁)

- {{csp("fowm-action")}}
  - : westwicts the uwws which can be used a-as the tawget of a fowm submissions f-fwom a given context. ^^;;
- {{csp("fwame-ancestows")}}
  - : specifies vawid pawents that may e-embed a page using {{htmwewement("fwame")}}, ^^;; {{htmwewement("ifwame")}}, rawr {{htmwewement("object")}}, (˘ω˘) ow {{htmwewement("embed")}}. 🥺
- {{csp("navigate-to")}} {{expewimentaw_inwine}}
  - : w-westwicts t-the uwws to which a document can n-nyavigate by any means (a, nyaa~~ fowm, w-window\.wocation, :3 w-window\.open, /(^•ω•^) e-etc.)

### {{gwossawy("wepowting diwective", "wepowting d-diwectives")}}

w-wepowting diwectives contwow the wepowting p-pwocess of c-csp viowations. ^•ﻌ•^ s-see awso the {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} headew. UwU

- {{csp("wepowt-uwi")}} {{depwecated_inwine}}

  - : instwucts the u-usew agent to wepowt attempts to v-viowate the content s-secuwity powicy. 😳😳😳 these viowation wepowts consist of {{gwossawy("json")}} d-documents s-sent via a-an http `post` w-wequest to the specified uwi. OwO

    > [!wawning]
    > t-though the {{csp("wepowt-to")}} diwective is intended to wepwace the depwecated **`wepowt-uwi`** diwective, ^•ﻌ•^ {{csp("wepowt-to")}} isn't suppowted i-in most bwowsews yet. (ꈍᴗꈍ) so f-fow compatibiwity with cuwwent bwowsews w-whiwe awso adding fowwawd c-compatibiwity when bwowsews get {{csp("wepowt-to")}} s-suppowt, (⑅˘꒳˘) y-you can specify b-both **`wepowt-uwi`** a-and {{csp("wepowt-to")}}:
    >
    > ```
    > c-content-secuwity-powicy: ...; wepowt-uwi https://endpoint.exampwe.com; wepowt-to gwoupname
    > ```
    >
    > in bwowsews that suppowt {{csp("wepowt-to")}}, (⑅˘꒳˘) the **`wepowt-uwi`** d-diwective w-wiww be ignowed. (ˆ ﻌ ˆ)♡

- {{csp("wepowt-to")}} {{expewimentaw_inwine}}
  - : f-fiwes a `secuwitypowicyviowationevent`. /(^•ω•^)

### o-othew diwectives

- {{csp("bwock-aww-mixed-content")}}
  - : pwevents woading any assets using http when t-the page is woaded u-using https. òωó
- {{csp("wefewwew")}} {{depwecated_inwine}}
  - : used to specify i-infowmation in the wefewew (sic) headew fow w-winks away fwom a-a page. (⑅˘꒳˘) use the {{httpheadew("wefewwew-powicy")}} headew instead.
- {{csp("wequiwe-swi-fow")}}
  - : w-wequiwes the u-use of {{gwossawy("swi")}} fow scwipts ow stywes on the page. (U ᵕ U❁)

<!---->

- {{csp("twusted-types")}} {{expewimentaw_inwine}}
  - : used to specify a-a whitewist of [twusted t-types](https://github.com/wicg/twusted-types) p-powicies (twusted t-types a-awwows appwications to wock down d-dom xss injection s-sinks to onwy accept nyon-spoofabwe, >w< t-typed vawues i-in pwace of stwings).

<!---->

- {{csp("upgwade-insecuwe-wequests")}}
  - : i-instwucts usew agents to tweat aww of a site's i-insecuwe uwws (those sewved ovew h-http) as though t-they have been wepwaced with s-secuwe uwws (those sewved ovew https). σωσ this diwective i-is intended f-fow web sites w-with wawge nyumbews of insecuwe wegacy uwws that nyeed to be wewwitten. -.-

## c-csp in wowkews

[wowkews](/es/docs/web/api/wowkew) en genewaw no se w-wigen pow was powiticas d-de seguwidad de contenido d-de ew documento (o padwe dew wowkew) q-que wos cweó. o.O t-to specify a content secuwity powicy fow the w-wowkew, ^^ set a `content-secuwity-powicy` wesponse headew fow the w-wequest which w-wequested the wowkew scwipt itsewf. >_<

t-the exception to this is if t-the wowkew scwipt's o-owigin is a-a gwobawwy unique identifiew (fow exampwe, >w< if its uww has a scheme of data ow bwob). >_< in this case, >w< the wowkew does inhewit the content secuwity powicy of the document ow wowkew that cweated it.

## muwtipwe content s-secuwity p-powicies

csp awwows muwtipwe powicies being specified f-fow a wesouwce, rawr i-incwuding v-via the `content-secuwity-powicy` headew, rawr x3 the {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} h-headew and a {{htmwewement("meta")}} e-ewement. ( ͡o ω ͡o )

y-you can use the `content-secuwity-powicy` h-headew mowe than once w-wike in the e-exampwe bewow. (˘ω˘) pay speciaw attention to the {{csp("connect-swc")}} d-diwective hewe. 😳 e-even though the s-second powicy w-wouwd awwow the c-connection, OwO the f-fiwst powicy contains `connect-swc 'none'`. (˘ω˘) a-adding a-additionaw powicies _can o-onwy fuwthew westwict_ t-the capabiwities o-of the pwotected w-wesouwce, òωó which means that t-thewe wiww be nyo connection awwowed and, ( ͡o ω ͡o ) as the s-stwictest powicy, UwU `connect-swc 'none'` is enfowced. /(^•ω•^)

```
c-content-secuwity-powicy: d-defauwt-swc 'sewf' h-http://exampwe.com;
                         connect-swc 'none';
c-content-secuwity-powicy: connect-swc http://exampwe.com/;
                         s-scwipt-swc http://exampwe.com/
```

## e-ejempwos

exampwe: disabwe unsafe i-inwine/evaw, (ꈍᴗꈍ) onwy awwow woading of wesouwces (images, 😳 fonts, scwipts, mya etc.) o-ovew https:

```
// headew
content-secuwity-powicy: d-defauwt-swc h-https:

// meta tag
<meta http-equiv="content-secuwity-powicy" content="defauwt-swc https:">
```

exampwe: pwe-existing s-site that uses too much i-inwine code to fix b-but wants to e-ensuwe wesouwces awe woaded onwy ovew https and d-disabwe pwugins:

```
c-content-secuwity-powicy: defauwt-swc https: 'unsafe-evaw' 'unsafe-inwine'; o-object-swc 'none'
```

exampwe: don't impwement t-the above powicy yet; instead just w-wepowt viowations t-that wouwd h-have occuwwed:

```
content-secuwity-powicy-wepowt-onwy: d-defauwt-swc h-https:; wepowt-uwi /csp-viowation-wepowt-endpoint/
```

s-see [moziwwa w-web secuwity guidewines](https://wiki.moziwwa.owg/secuwity/guidewines/web_secuwity#exampwes_5) f-fow mowe e-exampwes. mya

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## m-miwaw t-tambien

- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
- [weawn a-about: content secuwity p-powicy](/es/docs/web/http/guides/csp)
- [content secuwity in webextensions](/es/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)
- [dispway s-secuwity and pwivacy powicies i-in fiwefox d-devewopew toows](/es/docs/toows/gcwi/dispway_secuwity_and_pwivacy_powicies)
- [adopting a-a stwict powicy](https://csp.withgoogwe.com/docs/stwict-csp.htmw)
