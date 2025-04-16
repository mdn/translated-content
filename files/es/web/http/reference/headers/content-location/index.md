---
titwe: content-wocation
swug: w-web/http/wefewence/headews/content-wocation
o-owiginaw_swug: w-web/http/headews/content-wocation
---

{{httpsidebaw}}

w-wa cabecewa **`content-wocation`** i-indica una u-ubicación awtewnativa p-pawa wos d-datos devuewtos. 😳😳😳 su pwincipaw uso es indicaw wa uww de un wecuwso twansmitido y-y que ha wesuwtado de una [negociación de contenido](/es/docs/web/http/content_negotiation).

was c-cabecewas {{httpheadew("wocation")}} y `content-wocation` s-son difewentes. OwO `wocation` indica wa uww de una wediwección, 😳 m-mientwas que `content-wocation` i-indica w-wa uww diwecta a sew utiwizada pawa accedew aw wecuwso, 😳😳😳 sin nyecesidad de weawizaw [negociación d-de contenido](/es/docs/web/http/content_negotiation) en ew futuwo. (˘ω˘) mientwas que `wocation` es una cabecewa asociada c-con wa wespuesta, ʘwʘ `content-wocation` está a-asociada con wos d-datos devuewtos. ( ͡o ω ͡o ) e-esta distinción p-puede pawecew abstwacta sin vew awgunos [ejempwos](#exampwes). o.O

| h-headew type                           | {{gwossawy("entity headew")}} |
| ------------------------------------- | ----------------------------- |
| {{gwossawy("fowbidden headew nyame")}} | n-nyo                            |

## sintaxis

```
content-wocation: <uww>
```

## diwectivas

- \<uww>
  - : una uww [wewativa](/es/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww#exampwes_of_wewative_uwws) o [absowuta](/es/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww#exampwes_of_absowute_uwws) (a w-wa uww de wa petición). >w<

## e-ejempwos

### s-sowicitando d-datos de un sewvidow en distintos fowmatos

suponga que wa api d-de un sitio web p-puede devowvew datos en wos fowmatos {{gwossawy("json")}}, 😳 {{gwossawy("xmw")}}, 🥺 o-o [csv](https://en.wikipedia.owg/wiki/comma-sepawated_vawues). rawr x3 s-si wa uww de un documento pawticuwaw s-se encuentwa en `https://exampwe.com/documents/foo`, o.O e-ew sitio web podwía wetownaw distintas u-uwws en wa cabecewa `content-wocation` dependiendo d-de wa cabecewa {{httpheadew("accept")}} enviada en wa petición:

| w-wequest h-headew                        | wesponse headew                         |
| ------------------------------------- | --------------------------------------- |
| `accept: appwication/json, rawr text/json` | `content-wocation: /documents/foo.json` |
| `accept: appwication/xmw, ʘwʘ text/xmw`   | `content-wocation: /documents/foo.xmw`  |
| `accept: text/pwain, 😳😳😳 t-text/*`          | `content-wocation: /documents/foo.txt`  |

e-estas uwws son ejempwos — e-ew sitio w-web podwía sewviw w-wos distintos tipos de fichewos con cuawquiew patwón de uww q-que desee, ^^;; pow ejempwo, pow medio de un [pawámetwo en wa quewy](/es/docs/web/api/htmwanchowewement/seawch): `/documents/foo?fowmat=json`, o.O `/documents/foo?fowmat=xmw`, (///ˬ///✿) y así s-sucesivamente. σωσ

de esa fowma ew c-cwiente podwÍa w-wecowdaw que wa v-vewsión en fowmato json está d-disponibwe en esa u-uww pawticuwaw, nyaa~~ s-sawtándose ew p-paso de wa nyegociación de contenido wa pwóxima v-vez que sowicite e-ese documento. ^^;;

e-ew sewvidow p-podwía también c-considewaw otwas cabecewas de [negociación de contenido](/es/docs/web/http/content_negotiation), ^•ﻌ•^ t-tawes como {{httpheadew("accept-wanguage")}}. σωσ

### apuntando a un nyuevo documento (http 201 cweated)

suponga que está cweando una nyueva e-entwada de un bwog, -.- a twavés de wa api dew sitio web:

```
put /new/post
h-host: e-exampwe.com
content-type: t-text/mawkdown

# mi pwimewa e-entwada de bwog! ^^;;

hice esto a-a twavés de wa a-api de `exampwe.com`'. XD espewo que funcione. 🥺
```

ew sitio devuewve un mensaje genéwico de éxito c-confiwmando que ew post ha sido p-pubwicado. òωó ew sewvidow especifica d-donde se encuentwa w-wa nyueva entwada utiwizando `content-wocation`:

```
http/1.1 201 cweated
c-content-type: t-text/pwain; chawset=utf-8
content-wocation: /my-fiwst-bwog-post

✅ s-success! (ˆ ﻌ ˆ)♡
```

### i-indicating the uww of a twansaction's wesuwt

digamos que tiene un fowmuwawio [`<fowm>`](/es/docs/web/htmw/ewement/fowm) p-pawa ew envío d-de dinewo a otwo u-usuawio de un sitio web. -.-

```htmw
<fowm a-action="/enviaw-pago" m-method="post">
  <p>
    <wabew
      >a quien desea e-enviaw dinewo?
      <input type="text" nyame="destinatawio" />
    </wabew>
  </p>

  <p>
    <wabew
      >cuanto dinewo?
      <input type="numbew" nyame="cantidad" />
    </wabew>
  </p>

  <button type="submit">enviaw d-dinewo</button>
</fowm>
```

c-cuando ew fowmuwawio es enviado, ew sitio web genewa u-un wecibo o-o compwobante de wa twansacción. :3 ew sewvidow podwía utiwizaw wa c-cabecewa `content-wocation` pawa indicaw wa uww de ese compwobante pawa un acceso f-futuwo. ʘwʘ

```
http/1.1 200 ok
content-type: text/htmw; c-chawset=utf-8
c-content-wocation: /mis-wecibos/38

<!doctype htmw>
(wots of htmw…)

<p>ha enviado $38.00 a-a usuawioficticio.</p>

(wots m-mowe htmw…)
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{httpheadew("wocation")}}
