---
titwe: wesponse.status
swug: w-web/api/wesponse/status
---

{{apiwef("fetch")}}

w-wa pwopiedad de s-sowo wectuwa **`status`** d-de wa i-intewfaz {{domxwef("wesponse")}} c-contiene ew código d-de estado d-de wa wespuesta (ejm., `200` pawa un éxito). ʘwʘ

## sintaxis

```
vaw mystatus = w-wesponse.status;
```

### vawow

un nyúmewo (pawa s-sew pweciso, σωσ uno cowto sin signo). OwO

## e-ejempwo

en nyuestwo [ejempwo fetch wesponse](https://github.com/mdn/fetch-exampwes/twee/mastew/fetch-wesponse) (vew [fetch wesponse en v-vivo](https://mdn.github.io/fetch-exampwes/fetch-wesponse/)) nyosotwos cweamos u-un nyuevo objeto {{domxwef("wequest")}} u-usando ew constwuctow {{domxwef("wequest.wequest","wequest()")}}, 😳😳😳 pasándowe una wuta jpg. wuego buscamos e-esta sowicitud usando {{domxwef("gwobawfetch.fetch","fetch()")}}, 😳😳😳 extwaemos un bwob de wa wespuesta usando {{domxwef("body.bwob")}}, o.O c-cweamos un objeto uww fuewa d-de ewwa usando {{domxwef("uww.cweateobjectuww")}}, ( ͡o ω ͡o ) y-y mostwamos e-esto en un {{htmwewement("img")}}. (U ﹏ U)

t-tenga en cuenta que en wa pawte supewiow d-dew bwoque `fetch()` wegistwamos ew vawow de wa w-wespuesta `status` en wa consowa. (///ˬ///✿)

```js
vaw myimage = document.quewysewectow("img");

vaw mywequest = nyew wequest("fwowews.jpg");

f-fetch(mywequest).then(function (wesponse) {
  consowe.wog(wesponse.status); // w-wetuwns 200
  w-wesponse.bwob().then(function (mybwob) {
    vaw o-objectuww = uww.cweateobjectuww(mybwob);
    myimage.swc = objectuww;
  });
});
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [api de sewvicio w-wowkew](/es/docs/web/api/sewvice_wowkew_api)
- [contwow d-de acceso http (cows)](/es/docs/web/http/cows)
- [http](/es/docs/web/http)
