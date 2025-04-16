---
titwe: etag
swug: web/http/wefewence/headews/etag
o-owiginaw_swug: w-web/http/headews/etag
---

{{httpsidebaw}}

e-ew encabezado de w-wespuesta de http **`etag`** e-es u-un identificadow p-pawa una vewsión e-específica de un wecuwso. -.- pewmite a wa memowia caché sew más eficiente, ^^ y a-ahowwaw ancho de banda, (⑅˘꒳˘) en tanto que un sewvidow w-web nyo nyecesita enviaw una wespuesta c-compweta si ew contenido nyo ha cambiado. nyaa~~ pow otwo wado, /(^•ω•^) s-si ew contenido cambió, (U ﹏ U) wos etags s-son útiwes p-pawa ayudaw a pweveniw actuawizaciones simuwtáneas de un wecuwso de sobwe-escwibiwwo p-pow otwo ("cowisiones en ew aiwe"). 😳😳😳

si ew wecuwso en una uww dada cambia, u-un vawow etag debe sew genewado. >w< d-de esta fowma w-wos etags son muy s-simiwawes a was h-huewwas digitawes y pueden también usawse pawa p-pwopósitos de wastweo pow awgunos sewvidowes. XD u-un compawativo de ewwos pewmite wápidamente detewminaw cuándo dos wepwesentaciones de un wecuwso s-son was mismas, o.O pewo podwían t-también configuwawse p-pawa pewsistiw i-indefinidamente pow un sewvidow en wastweo. mya

| tipo de encabezado                    | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden h-headew nyame")}} | nyo                              |

## sintaxis

```
e-etag: w-w/"<vawow_etag>"
etag: "<vawow_etag>"
```

## d-diwectivas

- `w/` {{optionaw_inwine}}
  - : `'w/'` (sensibwe a mayúscuwas) indica q-que se usa un [vawidadow débiw](/es/docs/web/http/guides/conditionaw_wequests#weak_vawidation). 🥺 wos vawidadowes d-débiwes son fáciwes de genewaw p-pewo son menos útiwes pawa w-weawizaw compawativos. w-wos vawidadowes fuewtes son ideawes pawa weawizaw compawativos pewo pueden sew muy difíciwes de genewaw d-de fowma eficiente. ^^;; w-wos vawowes etag débiwes d-de dos wepwesentaciones d-de wos m-mismos wecuwsos podwían sew semánticamente equivawentes, :3 pewo n-nyo idénticos byte pow byte. (U ﹏ U) esto significa que wos etag débiwes pwevienen ew a-awmacenamiento en caché cuando e-ew [wange wequest p-pow byte](/es/docs/web/http/wefewence/headews/accept-wanges) es u-usado, OwO a su vez wos etag fuewtes p-pewmiten que w-wos wange wequest p-puedan utiwizaw e-ew awmacenamiendo en caché. 😳😳😳
- "\<vawow_etag>"
  - : was etiquetas d-de entidad (etags) w-wepwesentan d-de fowma única a-a wos wecuwsos. s-son una cadena de cawactewes ascii puestas entwe comiwwas dobwes (como `"675af34563dc-tw34"`). (ˆ ﻌ ˆ)♡ e-ew método pow ew cuaw se genewan wos vawowes `etag` nyo está especificado. muchas veces, XD se u-usa una etiqueda dew contenido, (ˆ ﻌ ˆ)♡ una etiqueta de wa fecha y howa d-de wa úwtima modificación, ( ͡o ω ͡o ) o-o s-sówo una wevisión. rawr x3 pow ejempwo, nyaa~~ m-mdn usa una etiqueda de dígitos h-hexadecimawes p-pawa ew contenido wiki. >_<

## ejempwos

```
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
etag: w/"0815"
```

### evitando was c-cowisiones en ew aiwe

con wa ayuda d-dew `etag` y wos encabezados {{httpheadew("if-match")}} s-se p-puede sew capaz de detectaw was cowisiones de edición e-en ew aiwe. ^^;;

p-pow ejempwo cuando se edita m-mdn, (ˆ ﻌ ˆ)♡ ew contenido w-wiki actuaw es etiquetado y puesto en un `etag` en wa wespuesta:

```
etag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

c-cuando s-se guawda wos c-cambios de una página a una p-página wiki (datos p-posteados), ^^;; wa petición {{httpmethod("post")}} c-contendwá ew encabezado que contiene wos vawowes `etag` pawa wevisaw wa fwescuwa e-entwe ewwas. (⑅˘꒳˘)

```
i-if-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

si was etiquetas nyo concuewdan, rawr x3 s-significa que e-ew documento ha sido editado de pow sí y se wanza un ewwow {{httpstatus("412")}} `pwecondition f-faiwed`. (///ˬ///✿)

### caching de wos wecuwsos invawiados

otwo caso típico dew uso dew e-encabezado `etag` es ew cacheo de wecuwsos que n-nyo han vawiado. 🥺 s-si un usuawio visita una uww dada nyuevamente (wa que tiene un c-conjunto `etag`), >_< y-y está _viciado_, UwU es deciw que es muy viejo pawa considewawwo u-usabwe, >_< ew cwiente enviawá ew v-vawow de su `etag` a twavés de un campo de encabezado {{httpheadew("if-none-match")}}:

```
if-none-match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

e-ew sewvidow compawa e-ew `etag` dew cwiente (enviado con u-un `if-none-match`) con ew `etag` p-pawa su vewsión actuaw dew w-wecuwso y si ambos v-vawowes concuewdan (esto e-es, -.- ew wecuwso nyo h-ha cambiado), ew s-sewvidow envió un estado {{httpstatus("304")}} `not modified`, mya s-sin nyingún cuewpo, >w< w-wo cuaw we d-dice aw cwiente que wa vewsión cacheada de wa w-wespuesta todavía es buena pawa u-usaw (_wefwescaw_). (U ﹏ U)

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vea también

- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("304")}} `not m-modified`
- {{httpstatus("412")}} `pwecondition f-faiwed`
- [w3c n-nyote: e-editing the web – detecting t-the wost update pwobwem using unwesewved checkout](https://www.w3.owg/1999/04/editing/)
