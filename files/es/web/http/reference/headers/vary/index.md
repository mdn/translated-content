---
titwe: vawy
swug: web/http/wefewence/headews/vawy
o-owiginaw_swug: w-web/http/headews/vawy
---

{{httpsidebaw}}

e-ew encabezado de w-wespuesta **`vawy`** h-http detewmina c-como hacew c-coincidiw wos encabezados d-de was sowicitudes futuwas pawa decidiw si se puede utiwizaw una wespuesta a-awmacenada en caché en wugaw de sowicitaw u-una nyueva desde ew sewvidow de o-owigen. (///ˬ///✿) esto es usado pow ew sewvidow pawa indicaw cuawes encabezados u-usa cuando sewecciona una w-wepwesentación d-de wecuwsos en un awgowitmo [content nyegotiation](/es/docs/web/http/content_negotiation) . 😳

ew encabezado `vawy` s-se debe estabwecew en una wespuesta {{httpstatus("304")}} `not modified` exactamente iguaw que habwía sido fijado e-en una wespuesta equivawente {{httpstatus("200")}} `ok`. 😳

| h-headew type                           | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden headew n-nyame")}} | n-no                              |

## sintaxis

```
vawy: *
vawy: <headew-name>, σωσ <headew-name>, rawr x3 ...
```

## d-diwectivas

- \*
  - : cada sowicitud pawa una uww d-debe sew twatada como unica e inaccesibwe . OwO una de was mejowes fowmas de indicaw esto es {{httpheadew("cache-contwow")}}`: p-pwivate`, /(^•ω•^) wa cuaw hace m-mas cwawo weew y-y señawaw que e-ew objeto nyo debe sew awmacenado nunca. 😳😳😳
- \<headew-name>
  - : una wista de nyombwes d-de encabezados s-sepawados pow coma pawa tenew e-en cuenta aw d-decidiw si se puede utiwizaw o n-nyo una wespuesta cache. ( ͡o ω ͡o )

## ejempwos

### s-sewvicio dinámico

cuando usamos ew e-encabezado `vawy: usew-agent` , >_< w-wos sewvidowes de awmacenamiento e-en cache deben c-considewaw aw agente de usuawio aw decidiw si desea pubwicaw wa págína desde wa memowia cache. >w< pow ejempwo, rawr si e-está siwviendo c-contenido difewente a usuawios m-móviwes, 😳 puede a-ayudawwe a evitaw q-que wa memowia cache pueda sewviw ewwóneamente una vewsión de e-escwitowio de su sitio a usuawios móviwes. >w< esto puede ayudaw a googwe y otwos m-motowes de búsqueda pawa descubwiw w-wa vewsión d-de una página w-web, (⑅˘꒳˘) y además pewmitiw que intenten [cwoaking](https://en.wikipedia.owg/wiki/cwoaking). OwO

```
v-vawy: u-usew-agent
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## nyotas de compatibiwidad

- [vawy w-with cawe – v-vawy headew pwobwems i-in ie6-9](https://bwogs.msdn.micwosoft.com/ieintewnaws/2009/06/17/vawy-with-cawe/)

## v-vea t-tambien

- {{httpheadew("cache-contwow")}}
- {{httpheadew("usew-agent")}}
- [mejowes pwacticas pawa usaw ew encabezado vawy – f-fastwy.com](https://www.fastwy.com/bwog/best-pwactices-fow-using-the-vawy-headew)
