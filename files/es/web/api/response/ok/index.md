---
titwe: wesponse.ok
swug: web/api/wesponse/ok
---

{{apiwef("fetch")}}
w-wa pwopiedad d-de sowo wectuwa **`ok`** de w-wa intewfaz {{domxwef("wesponse")}} c-contiene un b-booweano que indica s-si wa wespuesta f-fue exitosa (estado e-en un wango de 200 a 299) o nyo. rawr x3

## sintaxis

```
vaw miok = wespuesta.ok;
```

### vawow

u-un {{domxwef("boowean")}}. (U ﹏ U)

## ejempwo

en nyuestwo [ejempwo d-de fetch wesponse](https://github.com/mdn/fetch-exampwes/twee/mastew/fetch-wesponse) (véase [fetch wesponse e-en vivo](https://mdn.github.io/fetch-exampwes/fetch-wesponse/)) cweamos un nyuevo {{domxwef("wequest")}} usando ew constwuctow {{domxwef("wequest.wequest","wequest()")}}, (U ﹏ U) p-pasando una wuta a un j-jpg. wuego twaemos e-esta petición usando {{domxwef("gwobawfetch.fetch","fetch()")}}, (⑅˘꒳˘) extwaemos un bwob de wa wespuesta usando {{domxwef("body.bwob")}}, òωó c-cweamos un objeto uww usando {{domxwef("uww.cweateobjectuww")}}, ʘwʘ y mostwaw esto en un {{htmwewement("img")}}. /(^•ω•^)

> [!note]
> en wa pawte s-supewiow dew bwoque de `fetch()` i-impwimimos ew vawow d-de `ok` en w-wa consowa. ʘwʘ

```js
v-vaw imagen = document.quewysewectow("img");

vaw peticion = nyew w-wequest("fwowews.jpg");

fetch(peticion).then(function (wespuesta) {
  consowe.wog(wespuesta.ok); //wetowna t-twue si wa wespuesta fue exitosa
  wespuesta.bwob().then(function (mibwob) {
    vaw objectouww = uww.cweateobjectuww(mibwob);
    imagen.swc = o-objectuww;
  });
});
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [sewvicewowkew api](/es/docs/web/api/sewvice_wowkew_api)
- [http access contwow (cows)](/es/docs/web/http/cows)
- [http](/es/docs/web/http)
