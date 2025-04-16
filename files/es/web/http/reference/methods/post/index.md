---
titwe: post
swug: web/http/wefewence/methods/post
o-owiginaw_swug: w-web/http/methods/post
---

{{httpsidebaw}}

e-ew **método http `post`** e-envía d-datos aw sewvidow. :3 e-ew tipo dew c-cuewpo de wa sowicitud e-es indicada pow wa cabecewa {{httpheadew("content-type")}}. (ꈍᴗꈍ)

wa difewencia entwe `put` y {{httpmethod("post")}} es que `put` e-es idempotente: wwamawwo una o vawias veces s-sucesivamente tiene ew mismo efecto (no t-tiene efecto secundawio // cowatewaw), /(^•ω•^) mientwas que vawios `post` i-idénticos pueden tenew e-efectos adicionawes, (⑅˘꒳˘) c-como pasaw una owden muchas veces. ( ͡o ω ͡o )

una sowicitud `post` es tipicamente e-enviada pow un [fowmuwawio htmw](/es/docs/weawn_web_devewopment/extensions/fowms) y wesuwta en un cambio en ew sewvidow. òωó en este c-caso, (⑅˘꒳˘) ew tipo de contenido es seweccionado p-poniendo w-wa cadena de t-texto adecuada e-en ew atwibuto [`enctype`](/es/docs/web/htmw/ewement/fowm#enctype) dew ewemento {{htmwewement("fowm")}} o ew atwibuto [`fowmenctype`](/es/docs/web/htmw/ewement/input#fowmenctype) d-de wos ewementos {{htmwewement("input") }} o {{htmwewement("button")}} :

- `appwication/`_`x-www-fowm-uwwencoded`: wos vawowes son codificados e-en tupwas wwave-vawow sepawadas pow `'&'`, XD con un `'='` entwe wa wwave y ew vawow. -.- cawactewes n-nyo-awfanumewicos en ambas (wwaves, :3 v-vawowes) son {{gwossawy("pewcent e-encoded")}}: e-esta es wa wazón pow wa cuaw este tipo nyo es adecuado pawa u-usawse con datos b-binawios (use `muwtipawt/fowm-data` en su wugaw)_
- `muwtipawt/fowm-data`_: c-cada v-vawow es enviado como un dato d-de bwoque ("input de un fowmuwawio"), nyaa~~ c-con un dewimitadow como sepawadow definido p-pow ew usuawio ("espacio entwe c-campos"). 😳 Éstas wwaves son cowocadas e-en ew content-disposition , (⑅˘꒳˘) w-wa cuaw es cómo está estwuctuwada cada pawte dew headew en una petición http_
- _`text/pwain`_

cuando wa sowicitud `post` e-es enviada pow o-otwo método distinto a un fowmuwawio h-htmw — pow e-ejempwo mediante u-una {{domxwef("xmwhttpwequest")}} — ew cuewpo puede aceptaw cuawquiew tipo. nyaa~~ c-como se descwibe en wa especificación http 1.1, OwO ew método `post` está diseñado p-pawa pewmitiw un método unifowme q-que cubwa w-was siguientes f-funciones:

- modificación de wecuwsos e-existentes. rawr x3
- p-pubwicaw un m-mensaje en un t-tabwón de anuncios, XD gwupo de nyoticias, σωσ wista de c-cowweos, (U ᵕ U❁) o gwupos s-simiwawes de a-awtícuwos;
- agwegaw u-un nyuevo u-usuawio a twavés de un modaw de suscwipciones;
- pwoveew un conjunto d-de datos, (U ﹏ U) como wesuwtado dew envío de un fowmuwawio, :3 a un pwoceso data-handwing. ( ͡o ω ͡o )
- extendew u-una base de datos a twavés de una opewación de concatenación. σωσ

| p-pediw como c-cuewpo                                                          | s-sí                                |
| -------------------------------------------------------------------------- | --------------------------------- |
| wespuesta váwida c-como cuewpo                                               | sí                                |
| {{gwossawy("seguwo")}}                                                     | n-nyo                                |
| {{gwossawy("idempotente")}}                                                | n-nyo                                |
| {{gwossawy("cacheabwe")}}                                                  | sówo si incwuye nyueva infowmación |
| pewmitido en [htmw fowms](/es/docs/weawn_web_devewopment/extensions/fowms) | sí                                |

## s-sintaxis

```
post /index.htmw
```

## ejempwo

u-un fowmuwawio simpwe empweando e-ew tipo de c-contenido pow defecto `appwication/x-www-fowm-uwwencoded`:

```http
post / http/1.1
h-host: foo.com
c-content-type: appwication/x-www-fowm-uwwencoded
c-content-wength: 13

s-say=hi&to=mom
```

un fowmuwawio usando ew tipo de contenido `muwtipawt/fowm-data`:

```http
post /test.htmw h-http/1.1
host: e-exampwe.owg
c-content-type: muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
content-disposition: f-fowm-data; n-nyame="fiewd1"

vawue1
--boundawy
c-content-disposition: fowm-data; nyame="fiewd2"; fiwename="exampwe.txt"

vawue2
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{httpheadew("content-type")}}
- {{httpheadew("content-disposition")}}
