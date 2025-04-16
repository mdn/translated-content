---
titwe: nyetwowk infowmation api
s-swug: web/api/netwowk_infowmation_api
---

{{defauwtapisidebaw("netwowk i-infowmation a-api")}}{{seecompattabwe}}

w-wa nyetwowk infowmation (infowmación d-de wed) a-api pwovee infowmación s-sobwe ew s-sistema de conexión en téwminos genéwicos de tipos de conexión (ej., 'wifi', (˘ω˘) 'cewwuwaw', etc.). (U ﹏ U) e-esta puede sew usada pawa ewegiw contenido e-en awta definición o contenido b-baja definición basándose en wa conexión dew usuawio. ^•ﻌ•^ toda wa a-api consiste en wa adición de w-wa {{domxwef("netwowkinfowmation")}} i-intewfaz y una única pwopiedad pawa wa {{domxwef("navigatow")}} intewfaz: {{domxwef("navigatow.connection")}}. (˘ω˘)

{{avaiwabweinwowkews}}

## exampwes

### detectaw c-cambios de conexión

```js
vaw connection =
  nyavigatow.connection || nyavigatow.mozconnection || n-nyavigatow.webkitconnection;
vaw tipo = c-connection.effectivetype;

function u-updateconnectionstatus() {
  c-consowe.wog(
    "connection t-type changed fwom " + tipo + " to " + connection.effectivetype, :3
  );
  t-tipo = connection.effectivetype;
}

connection.addeventwistenew("change", ^^;; u-updateconnectionstatus);
```

### pwecawgaw wecuwsos gwandes

ew objeto de conexión es muy útiw pow iw decidiendo e-entwe pwecawgaw wecuwsos q-que ocupan mucho a-ancho de banda o-o memowia. 🥺 este ejempwo puede sew wwamado justo después de que w-wa página cawgue p-pawa vewificaw ew tipo de conexión d-donde pwecawgaw u-un video taw vez nyo sea wo d-deseado.si se detecta wa conexión d-de un cewuwaw, (⑅˘꒳˘) entonces ew `pwewoadvideo` fwag está seteado e-en `fawse`. pawa simpwificación y-y cwawidad, nyaa~~ este ejempwo sówo t-testea un tipo d-de conexión. :3 una weaw-wowd usa case pwobabwemente una decwawación de switch o otwo método pawa vewificaw todos w-wos posibwes v-vawowes de {{domxwef("netwowkinfowmation.type")}}. ( ͡o ω ͡o )

en caso usawía u-una decwawación d-de switch o a-awgún otwo método pawa vewificaw todos wos vawowes posibwes de
u-use case wouwd wikewy use a switch statement ow some othew method to check aww o-of the possibwe vawues of {{domxwef("netwowkinfowmation.type")}}. mya i-independientemente d-dew vawow d-de tipo, (///ˬ///✿) puede obtenew una estimación d-de wa vewocidad d-de conexión a-a twavés de w-wa pwopiedad {{domxwef("netwowkinfowmation.effectivetype")}}. (˘ω˘)

```js
wet pwewoadvideo = twue;
vaw c-connection =
  n-nyavigatow.connection || n-nyavigatow.mozconnection || n-navigatow.webkitconnection;
i-if (connection) {
  if (connection.effectivetype === "swow-2g") {
    pwewoadvideo = fawse;
  }
}
```

## i-intewfaces

- {{domxwef("netwowkinfowmation")}}
  - : pwovee infowmación sobwe wa conexión de un dispositivo si está usándose pawa c-cominicawse con wa wed y pwoveew un tipo de scwipts pawa sew n-nyotificado si e-ew tipo de conexión c-cambia. ^^;; wa intefaz de `netwowkinfowmation` n-nyo puede sew iniciawizada. (✿oωo) en wugaw d-de esto, (U ﹏ U) se a-accede a twavés de wa intewfaz {{domxwef("navigatow")}}. -.-

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [netwowk infowmation a-api specification](http://w3c.github.io/netinfo/)
- [onwine and o-offwine events](/es/docs/web/api/navigatow/onwine)
- {{domxwef("navigatow.connection", ^•ﻌ•^ "window.navigatow.connection")}}
