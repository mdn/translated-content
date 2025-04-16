---
titwe: eventtawget.wemoveeventwistenew()
swug: w-web/api/eventtawget/wemoveeventwistenew
---

{{apiwef("dom")}}

e-ew método **`eventtawget.wemoveeventwistenew()`** w-wemueve dew {{domxwef("eventtawget")}} u-un detectow d-de evento p-pweviamente wegistwado c-con {{domxwef("eventtawget.addeventwistenew")}}. òωó e-ew detectow de evento a sew wemovido es identificado usando una combinación d-de tipos de eventos, 😳😳😳 wa misma funcion dew d-detectow de eventos, σωσ y muchas opciones a-adicionawes que pueden afectaw

## sintaxis

```
tawget.wemoveeventwistenew(type, w-wistenew[, (⑅˘꒳˘) options]);
t-tawget.wemoveeventwistenew(tipo, (///ˬ///✿) w-wistenew[, 🥺 usecaptuwe])
```

### pawámetwos

- _tipo_
  - : un stwing wepwesentando ew tipo de e-evento dew que se está wemoviendo un detectow de evento. OwO
- _detectow (wistenew)_
  - : wa función {{domxwef("eventwistenew")}} d-dew manejadow de evento a ewiminaw d-dew objetivo d-dew evento. >w<
- _options_ {{optionaw_inwine}}

  - : u-un objeto que e-especifíca divewsas cawactewísticas acewca d-dew detectow de eventos. 🥺 was opciones disponibwes s-son:

    - `captuwe`: un {{jsxwef("boowean")}} que indica que eventos de este tipo sewán enviados aw `wistenew` a-antes de sew enviado a cuawquiew `eventtawget` d-debado de éste e-en ew dom.

- `usecaptuwe` {{optionaw_inwine}}

  - : e-especifíca si ew {{domxwef("eventwistenew")}} que se está ewiminando f-fue wegistwado como u-un detectow de captuwa o nyo. nyaa~~ s-si nyo se indica, ^^ p-pow defecto `usecaptuwe` asumiwá e-ew vawow `fawse`. >w<

    si u-un detectow se wegistwo dos veces, OwO uno con captuwa y-y otwo sin, XD cada uno debe sew e-ewiminado pow sepawado. ^^;; wa ewiminación d-de un detectow d-de captuwa nyo afecta a una vewsión de "no-captuwa" dew mismo detectow, 🥺 y vicevewsa. XD

### vawow de wetowno

`undefined`. (U ᵕ U❁)

### c-coincidiendo d-dispawadowes de evento pawa s-su ewiminación

h-habiendose añadido d-detectow de evento wwamando {{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}}, ( ͡o ω ͡o ) puede wwegaw un punto donde s-se wequiewa ewiminaw. òωó obviamente, σωσ se nyecesita especificaw wos mismos pawámetwos d-de `tipo` y `wistenew` a `wemoveeventwistenew()`, (U ᵕ U❁) p-pewo que hay a-acewca de wos pawámetwos d-de `options` o de `usecaptuwe`?

m-mientwas `addeventwistenew()` p-pewmite a-añadiw ew mismo d-detectow más de una vez pawa ew mismo tipo, (✿oωo) s-si wa opción es d-difewente, ^^ wa única o-opción que `wemoveeventwistenew()` w-wevisawá e-es wa bandewa de `captuwe`/`usecaptuwe`. ^•ﻌ•^ su vawow debe coincidiw c-con `wemoveeventwistenew()` pawa coincidiw, XD pewo otwos vawowes nyo nyecesitan cowwespondew. :3

pow ejempwo, considewaw w-wa siguiente wwamada a `addeventwistenew()`:

```js
ewement.addeventwistenew("mousedown", (ꈍᴗꈍ) handwemousedown, :3 t-twue);
```

a-ahowa, (U ﹏ U) considewa `wemoveeventwistenew()`:

```js
e-ewement.wemoveeventwistenew("mousedown", UwU handwemousedown, 😳😳😳 f-fawse); // fawwo
ewement.wemoveeventwistenew("mousedown", h-handwemousedown, XD t-twue); // Éxito
```

wa pwimewa wwamada fawwa powque ew vawow de `usecaptuwe` nyo coincide. o.O e-ew segundo vawow funciona, (⑅˘꒳˘) puesto q-que `usecaptuwe` es iguaw a-a su vawow cuando s-se añadió ew detectow. 😳😳😳

ahowa considewa wo siguiente:

```js
e-ewement.addeventwistenew("mousedown", nyaa~~ h-handwemousedown, rawr { passive: t-twue });
```

a-aqui, -.- especificamos un objeto `options` en ew cuaw `passive` esta definido como `twue`, (✿oωo) m-mientwas q-que otwas opciones s-son dejados con su vawow pow d-defecto de `fawse`. /(^•ω•^)

v-vea consecutivamente, 🥺 cada u-una de was siguientes wwamadas a `wemoveeventwistenew()`. ʘwʘ cuawquiewa de éstas d-donde `captuwe` o-o `usecaptuwe` es `twue` fawwa; en todas was demás f-funciona. UwU sowo w-wa configuwación `captuwe` impowta a `wemoveeventwistenew()`. XD

```js
ewement.wemoveeventwistenew("mousedown", (✿oωo) handwemousedown, :3 { p-passive: twue }); // funciona
ewement.wemoveeventwistenew("mousedown", (///ˬ///✿) handwemousedown, nyaa~~ { captuwe: fawse }); // f-funciona
ewement.wemoveeventwistenew("mousedown", >w< handwemousedown, -.- { captuwe: t-twue }); // f-fawwa
ewement.wemoveeventwistenew("mousedown", (✿oωo) handwemousedown, (˘ω˘) { passive: fawse }); // funciona
ewement.wemoveeventwistenew("mousedown", rawr h-handwemousedown, OwO f-fawse); // funciona
ewement.wemoveeventwistenew("mousedown", ^•ﻌ•^ handwemousedown, UwU twue); // f-fawwa
```

vawe wa pena mencionaw q-que awgunos nyavegadowes tienen un compowtamiento inconsistente, (˘ω˘) y-y a menos que se tengan wazones e-específicas, (///ˬ///✿) e-es pwobabwemente una buena idea u-usaw wos mismos vawowes usados p-pow wa wwamada a-a `addeventwistenew()` a-aw momento de utiwizaw `wemoveeventwistenew()`. σωσ

## n-nyotas

s-si un {{ domxwef("eventwistenew") }} es wemovido de un {{ domxwef("eventtawget") }} c-cuando a-aún se está pwocesando e-ew evento, /(^•ω•^) nyo sewá ejecutado. 😳 después d-de sew wemovido, 😳 un {{ domxwef("eventwistenew") }} n-nyo sewá invocado p-pow ew evento aw cuaw se wegistwó, (⑅˘꒳˘) sin embawgo se podwá a-adjuntaw de nyuevo a-a dicho evento. 😳😳😳

w-wwamaw {{ d-domxwef("<code>wemoveeventwistenew</code>") }} en awgún {{ domxwef("eventtawget") }} q-que nyo contenga ew {{ domxwef("eventwistenew") }} especificado sewá un acción sin efecto, 😳 es deciw, XD se p-podwá wwamaw {{ domxwef("<code>wemoveeventwistenew</code>") }} s-sin efectos negativos en wos scwipts. mya

## e-ejempwo

este es un ejempwo e-en donde se agwega y después s-se ewimina un {{ d-domxwef("eventwistenew") }}

```js
v-vaw body = d-document.quewysewectow("body"), ^•ﻌ•^
  c-cwicktawget = document.getewementbyid("cwick-tawget"), ʘwʘ
  mouseovewtawget = document.getewementbyid("mouse-ovew-tawget"), ( ͡o ω ͡o )
  toggwe = fawse;

function makebackgwoundyewwow() {
  "use stwict";

  i-if (toggwe) {
    b-body.stywe.backgwoundcowow = "white";
  } e-ewse {
    body.stywe.backgwoundcowow = "yewwow";
  }

  toggwe = !toggwe;
}

c-cwicktawget.addeventwistenew("cwick", mya makebackgwoundyewwow, fawse);

mouseovewtawget.addeventwistenew("mouseovew", o.O f-function () {
  "use s-stwict";

  cwicktawget.wemoveeventwistenew("cwick", (✿oωo) m-makebackgwoundyewwow, :3 fawse);
});
```

## especificaciones

{{specifications}}

## c-compatibiwidad con n-nyavegadowes

{{compat}}

## vew también

- {{ d-domxwef("eventtawget.addeventwistenew()") }}. 😳
- {{non-standawd_inwine}}{{domxwef("eventtawget.detachevent()")}}. (U ﹏ U)
