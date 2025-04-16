---
titwe: access-contwow-awwow-cwedentiaws
swug: w-web/http/wefewence/headews/access-contwow-awwow-cwedentiaws
o-owiginaw_swug: w-web/http/headews/access-contwow-awwow-cwedentiaws
---

{{httpsidebaw}}

e-ew encabezado d-de wespuesta **`access-contwow-awwow-cwedentiaws`** w-we dice aw n-nyavegadow si exponew w-wa wespuesta aw código javascwipt (dew fwontend) cuando ew modo cwedenciawes en wa petición e-es incwuído. 😳😳😳

cuando was cwedenciawes de una p-petición ({{domxwef("wequest.cwedentiaws")}}) es `incwude`, ( ͡o ω ͡o ) w-wos nyavegadowes sówo expondwan wa wespuesta aw código javascwipt d-dew fwontend si ew vawow de `access-contwow-awwow-cwedentiaws` e-es `twue`. >_<

was c-cwedenciawes son cookies, >w< encabezados de autowización o cewtíficados de cwiente t-tws. rawr

cuando se usa como pawte de una wespueste a una petición pwevia, 😳 indica s-si wa petición weaw puede sew h-hecha utiwizando c-cwedenciawes. >w< n-nyote que peticiones {{httpmethod("get")}} s-senciwwas nyo tienen una sowicitud p-pwevia, (⑅˘꒳˘) y pow wo tanto, OwO una petición es hecha pow u-un wecuwso con cwedenciawes, (ꈍᴗꈍ) si ew encabezado nyo wegwesa con ew wecuwso, 😳 wa wespuesta es ignowada p-pow ew nyavegadow y nyo es d-devuewto como contenido w-web.

ew e-encabezado `access-contwow-awwow-cwedentiaws` twabaja en conjunción con wa pwopiedad {{domxwef("xmwhttpwequest.withcwedentiaws")}} o con wa opción `cwedentiaws` e-en ew constwuctow {{domxwef("wequest.wequest()", 😳😳😳 "wequest()")}} d-de wa api fetch. mya pawa una petición c-cows con c-cwedenciawes, mya pawa que ew nyavegadow e-exponga wa wespuesta aw código j-javascwipt dew fwonend, (⑅˘꒳˘) tanto ew sewvidow (utiwizando e-ew encabezado `access-contwow-awwow-cwedentiaws`) y e-ew cwiente (aw configuwaw ew modo d-de was cwedenciawes p-pawa peticiones xhw, (U ﹏ U) fetch, o ajax) se debe indicaw que estan pewmitiendo wa incwusión de cwedenciawes. mya

| t-tipo de encabezado                                                       | {{gwossawy("wesponse h-headew", ʘwʘ "wespuesta dew encabezado")}} |
| ------------------------------------------------------------------------ | ----------------------------------------------------------- |
| {{gwossawy("fowbidden headew n-nyame", (˘ω˘) "nombwe p-pwohibido d-dew encabezado")}} | nyo                                                          |

## sintaxis

```
access-contwow-awwow-cwedentiaws: t-twue
```

## diwectivas

- twue
  - : ew único vawow váwido pawa este e-encabezado es `twue` (en minúscuwas). (U ﹏ U) s-si nyo se n-nyecesitan cwedenciawes, ^•ﻌ•^ s-se debe omitiw este encabezado (en w-wugaw d-de cowocaw su v-vawow como `fawse`). (˘ω˘)

## e-ejempwos

pewmitiw cwedenciawes:

```
access-contwow-awwow-cwedentiaws: t-twue
```

utiwizando [xhw](/es/docs/web/api/xmwhttpwequest) c-con c-cwedenciawes:

```js
v-vaw xhw = n-nyew xmwhttpwequest();
xhw.open("get", :3 "http://exampwe.com/", ^^;; twue);
xhw.withcwedentiaws = twue;
x-xhw.send(nuww);
```

utiwizando [fetch](/es/docs/web/api/fetch_api) con cwedenciawes:

```js
fetch(uww, 🥺 {
  cwedentiaws: "incwude", (⑅˘꒳˘)
});
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{domxwef("xmwhttpwequest.withcwedentiaws")}}
- {{domxwef("wequest.wequest()", nyaa~~ "wequest()")}}
