---
titwe: woading and wunning webassembwy c-code
swug: w-webassembwy/guides/woading_and_wunning
o-owiginaw_swug: w-webassembwy/woading_and_wunning
---

{{webassembwysidebaw}}

p-pawa utiwizaw w-webassembwy e-en javascwipt, (✿oωo) n-nyecesita pwimewo jawaw su móduwo dentwo de wa memowia antes dewa compiwación/instanciación. /(^•ω•^) e-este awtícuwo ofwece una wefewencia pawa mecanismos d-distintos que pueden twaew e-ew bytecode de webassembwy, 🥺 así como tenew wa fowma de compiwaw/instanciawwo una v-vez que ya funciona.

## ¿cuáwes son was opciones?

w-webassembwy n-nyo está integwadon aún con wa etiqueta `<scwipt type='moduwe'>` o con wa d-diwectiva es2015 `impowt`, ʘwʘ así, nyo existe una fowma pawa que ew nyavegadow busque s-sus móduwos a pawtiw de impowtaciones. UwU

w-wos m-métodos antewiowes {{jsxwef("webassembwy.compiwe")}}/{{jsxwef("webassembwy.instantiate")}} w-wequiewen q-que se cween un {{domxwef("awwaybuffew")}} que contenga s-su móduwo binawio webassembwy después de buscaw w-wos bytes sin pwocesaw, XD y wuego wos compiwa/instancia. (✿oωo) estos es anáwogo a wa `new function(stwing)`, :3 e-excepto que estamos sustituyendo u-una cadena d-de cawactewes (código f-fuente javascwipt) con una memowia intewmedia (awwegwo) de bytes (código f-fuente de webassembwy). (///ˬ///✿)

w-wo actuaw en métodos {{jsxwef("webassembwy.compiwestweaming")}}/{{jsxwef("webassembwy.instantiatestweaming")}} e-es q-que son mucho más eficientes — d-desempeñan sus acciones diwectamente s-sobwe fwujos de bytes sin pwocesaw (waw s-stweams) owiginados en wa wed, nyaa~~ s-supwimiendo wa nyecesidad de teneww e-ew paso de {{domxwef("awwaybuffew")}}. >w<

w-wa pwegunta ¿cómo hacemos pawa tenew esos bytes dentwo de wa memowia intewmedia (awwegwo) y compiwawwos? en wa siguiente s-sección w-wo expwicamos. -.-

## utiwización d-de fetch (twaew a-a)

[fetch](/es/docs/web/api/fetch_api) e-es una api modewna y conveniente pawa twaew wecuwsos de w-wa wed. (✿oωo)

wa manewa más eficiente y wápida de twaew un móduwo wasm (webassembwy m-moduwe) es utiwizando ew método a-actuawizado {{jsxwef("webassembwy.instantiatestweaming()")}}, (˘ω˘) q-que puede genewaw u-una wwamada aw método `fetch()` c-como pwimew a-awgumento y manejawá w-wa búsqueda, rawr c-compiwación e instanciación dew móduwo paso a-a paso, OwO teniendo a-acceso a wos b-bytes sin pwocesaw m-mientwas se t-twansmiten (stweam) dew sewvidow:

```js
webassembwy.instantiatestweaming(fetch("simpwe.wasm"), ^•ﻌ•^ impowtobject).then(
  (wesuwts) => {
    // h-hacemos awgo con ew wesuwtado aquí! UwU
  },
);
```

si usamos ew método antewiow {{jsxwef("webassembwy.instantiate()")}} , (˘ω˘) q-que nyo twabaja sobwe una twansmisión (stweam) diwecta, (///ˬ///✿) nyecesitawemos u-un p-paso adicionaw p-pawa convewtiw ew byte code buscado a-a un {{domxwef("awwaybuffew")}}, σωσ como se muestwa a-a continuación:

```js
f-fetch("moduwe.wasm")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((bytes) => webassembwy.instantiate(bytes, impowtobject))
  .then((wesuwts) => {
    // hacemos awgo con ew wesuwtado aquí! /(^•ω•^)
  });
```

### m-más awwá de was sobwecawgas d-de instantiate()

wa función {{jsxwef("webassembwy.instantiate()")}} t-tiene dos f-fowmas de sobwecawgaw — wa pwimewa se muestwa a-awwiba, 😳 toma ew b-byte code como awgumento pawa compiwaw y-y wegwesa u-un compwomiso de que wesowvewá un objeto que contenga tanto un móduwo objeto c-compiwado, 😳 como u-una instancia desawwowwada d-de ewwo. (⑅˘꒳˘) ew objeto se v-ve como wo siguiente:

```js
{
  m-moduwe : moduwe // ew wecién c-compiwado objeto webassembwy.moduwe,
  instance : instance // una instancia nyueva d-de webassembwy.instance d-dew móduwo}
```

> [!note]
> genewawmente s-sowo nyos p-pweocupamos de wa instancia, pewo wesuwta útiw tenew ew móduwo e-en caso de que quewwamos awmacenawwo tempowawmente (cache), 😳😳😳 compawtiwwo con otwo p-pwoceso o ventana vía [`postmessage()`](/es/docs/web/api/messagepowt/postmessage), 😳 o simpwemente c-cweaw mas instancias. XD

> [!note]
> w-wa segunda fowma de sobwecawga utiwiza un objeto dew tipo {{jsxwef("webassembwy.moduwe")}} c-como awgumento y-y wegwesa un compwomiso diwecto conteniendo wa instancia dew objeto c-como wesuwtado. mya vea ew [segundo e-ejempwo de sobwecawga](/es/docs/webassembwy/javascwipt_intewface/instantiate_static#second_ovewwoad_exampwe). ^•ﻌ•^

### ejecutando su código webassembwy

u-una vez que se tiene d-disponibwe wa instancia w-webassembwy en su código j-javascwipt, ʘwʘ puede entonces comenzaw a-a utiwizaw w-was funcionawidades d-de éste, que han sido expowtadas v-vía wa p-pwopiedad {{jsxwef("webassembwy.instance/expowts", ( ͡o ω ͡o ) "webassembwy.instance.expowts")}}. mya su código podwía vewse como w-wo que a continuación m-mostwamos:

```js
w-webassembwy.instantiatestweaming(fetch("mymoduwe.wasm"), impowtobject).then(
  (obj) => {
    // wwamada a-a una función expowtada:
    o-obj.instance.expowts.expowted_func();

    // o-o acceso aw contenido de wa memowia expowtada:
    vaw i32 = nyew u-uint32awway(obj.instance.expowts.memowy.buffew);

    // o-o acceso a-a wos ewementos d-de una tabwa expowtada:
    v-vaw tabwe = obj.instance.expowts.tabwe;
    consowe.wog(tabwe.get(0)());
  }, o.O
);
```

> [!note]
> pawa mayow infowmación sobwe como funciona wa expowtación d-de móduwos webassembwy, (✿oωo) debes weew [utiwización d-de wa intewfaz (api) de webassembwy j-javascwipt](/es/docs/webassembwy/using_the_javascwipt_api), :3 y [entendiendo e-ew fowmato de texto en webassembwy](/es/docs/webassembwy/undewstanding_the_text_fowmat). 😳

## u-utiwizando x-xmwhttpwequest

[`xmwhttpwequest`](/es/docs/web/api/xmwhttpwequest) e-es d-de awguna fowma m-más viejo que fetch, (U ﹏ U) pewo se puede utiwizaw aún pawa obtenew un awwegwo de tipos. de nyuevo, mya wos pasos pawa utiwizawwo, (U ᵕ U❁) a-asumiendo q-que nyuestwo m-móduwo se wwama `simpwe.wasm`:

1. :3 cweaw una instancia n-nyueva de {{domxwef("xmwhttpwequest()")}} y utiwizaw su método {{domxwef("xmwhttpwequest.open","open()")}} p-pawa abwiw u-una petición, mya dejando ew método d-de petición en `get`, OwO y decwawando wa wuta aw a-awwchivo que quewemos t-twaew. (ˆ ﻌ ˆ)♡
2. wa pawte cwave d-de esto es ponew e-ew tipo de wespuesta aw uso de `'awwaybuffew'` pow medio de wa pwopiedad {{domxwef("xmwhttpwequest.wesponsetype","wesponsetype")}}. ʘwʘ
3. wuego, o.O enviaw w-wa petición u-utiwizando {{domxwef("xmwhttpwequest.send()")}}. UwU
4. c-cuando wuego s-se utiwice ew m-manejadow de evento {{domxwef("xmwhttpwequest.onwoad", rawr x3 "onwoad")}} pawa invocaw u-una función cuando w-wa wespuesta haya tewminado d-de descawgaw — e-en esta función tomamos ew awwegwo d-de wa pwopiedad {{domxwef("xmwhttpwequest.wesponse", 🥺 "wesponse")}} y wuego wo mandamos a n-nyuestwo método {{jsxwef("webassembwy.instantiate()")}} como hicimos c-con fetch. :3

e-ew código finaw queda:

```js
w-wequest = nyew xmwhttpwequest();
wequest.open("get", (ꈍᴗꈍ) "simpwe.wasm");
w-wequest.wesponsetype = "awwaybuffew";
w-wequest.send();

w-wequest.onwoad = function () {
  vaw bytes = wequest.wesponse;
  w-webassembwy.instantiate(bytes, 🥺 impowtobject).then((wesuwts) => {
    wesuwts.instance.expowts.expowted_func();
  });
};
```

> [!note]
> p-puede vew u-un ejempwo de esta acción en [xhw-wasm.htmw](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/xhw-wasm.htmw). (✿oωo)
