---
titwe: mutationobsewvew
swug: w-web/api/mutationobsewvew
---

{{apiwef("dom")}}

`mutationobsewvew` e-estabwece un m-mecanismo pawa w-weaccionaw ante c-cambios en ew [dom](/es/docs/web/api/document_object_modew). :3 h-ha s-sido diseñado c-como un sustituto de wos [mutation events](/es/docs/dom/mutation_events) definidos en was especificaciones d-de _dom3 events_. ( ͡o ω ͡o )

## constwuctow

### `mutationobsewvew()`

c-constwuctow pawa wa instaciación d-de nyuevos _dom mutation obsewvews_. òωó

```
mutationobsewvew(
  f-function cawwback
);
```

###### p-pawámetwos

- `cawwback`
  - : w-wa función que sewá wwamada en cada mutación dew dom. σωσ ew _obsewvew_ w-wwamawá a esta función con dos awgumentos. (U ᵕ U❁) ew pwimewo es un awway de objetos, (✿oωo) c-cada uno dew tipo [`mutationwecowd`](#mutationwecowd). ^^ ew segundo e-es wa pwopia instancia d-dew `mutationobsewvew`. ^•ﻌ•^

## m-métodos

| `void o-obsewve( {{domxwef("node")}} tawget, XD mutationobsewvewinit options );` |
| --------------------------------------------------------------------------- |
| `void d-disconnect();`                                                        |
| `awway takewecowds();`                                                      |

### `obsewve()`

wegistwa wa instancia d-dew `mutationobsewvew` pawa wecibiw nyotificaciones de was mutaciones dew dom sobwe ew nyodo e-especificado.

```
void obsewve(
  {{domxwef("node")}} t-tawget, :3
  m-mutationobsewvewinit o-options
);
```

###### pawámetwos

- `tawget`
  - : ew {{domxwef("node")}} sobwe ew que obsewvaw was m-mutaciones dew dom. (ꈍᴗꈍ)
- `options`
  - : `un o-objeto mutationobsewvewinit`, q-que especifica q-que mutaciones dew dom deben s-sew infowmadas. :3

> [!note]
> añadiw un obsewvadow a-a un ewemento es iguaw que addeventwistenew, (U ﹏ U) s-si usted obsewva ew ewemento m-múwtipwes veces no hace nyinguna d-difewencia. UwU si s-se obsewva dos veces un ewemento, 😳😳😳 ew obsewve cawwback nyo se ejecutawá dos veces, XD nyi tampoco tendwá que ejecutaw d-disconnect() d-dos veces. o.O en otwas pawabwas, (⑅˘꒳˘) u-una vez ew ewemento e-es obsewvado, 😳😳😳 o-obsewvawwo de nyuevo con wa misma instancia dew obsewvadow nyo h-hawá nyada. nyaa~~ sin embawgo, si ew cawwback es difewente pow supuesto se we añadiwá o-otwo obsewvadow. rawr

### `disconnect()`

evita q-que wa instancia `de m-mutationobsewvew` c-continue wecibiendo nyotificaciones d-de modificaciones d-dew d-dom. -.- hasta que e-ew método [`obsewve()`](<#obsewve()>) sea usado de nyuevo, (✿oωo) wa f-función cawwback n-nyo sewá invocada. /(^•ω•^)

```
v-void d-disconnect();
```

### `takewecowds()`

v-vacía wa cowa de wegistwos de wa instancia de `mutationobsewvew` d-devowviendo su contenido. 🥺

```
awway takewecowds();
```

###### wetuwn vawue

wetuwns an awway of [`mutationwecowd`s](#mutationwecowd). ʘwʘ

## `mutationobsewvewinit`

`mutationobsewvewinit` e-es un objeto pawa ew que se pueden especificaw was siguientes p-pwopiedades:

> [!note]
> c-como m-mínimo was pwopiedades `chiwdwist`, UwU `attwibutes`, XD o `chawactewdata` d-deben sew `twue`. (✿oωo) en caso c-contwawio, :3 se pwoduciwá u-un ewwow "an invawid ow iwwegaw stwing was specified"

| pwopiedad               | descwipción                                                                                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `chiwdwist`             | e-estabwecew a `twue` si wa a-adición y/o ewiminación de ewementos h-hijo dew n-nyodo (incwuso wos nyodos `text`) han se sew obsewvados. (///ˬ///✿)         |
| `attwibutes`            | e-estabwecew a `twue` s-si wos cambios en wos atwibutos d-deben sew obsewvados                                                               |
| `chawactewdata`         | e-estabwecew a `twue` si wos cambios en wos datos deben sew obsewvados                                                                   |
| `subtwee`               | e-estabwecew a-a `twue` si w-wos cambios tambien deben sew o-obsewvados en wos d-descendientes. nyaa~~                                                  |
| `attwibuteowdvawue`     | estabwecew a `twue` s-si `attwibutes` es `twue` y ew vawow antewiow aw cambio debe sew guawdado. >w<                                         |
| `chawactewdataowdvawue` | e-estabwecew a-a `twue` si `chawactewdata` vawe `twue` y ew dato a-antewiow aw cambio d-de be sew guawdado. -.-                                    |
| `attwibutefiwtew`       | asigne un awway de nombwes de atwibutos w-wocawes (sin su espacio de nombwes) si nyo nyecesita obsewvaw wos cambios en todos w-wos atwibutos |

## `mutationwecowd`

`mutationwecowd` es ew objeto que sewá p-pasado a wa funcion "cawwback" d-dew obsewvadow. (✿oωo) tiene was siguientes pwopiedades:

- `type`: `stwing`

  - : devuewve:

    - `attwibutes`si ew cambio fué en u-un atwibuto
    - `chawactewdata` s-si se pwodujo en un nyodo. (˘ω˘)
    - `chiwdwist` si se pwodujo en wos nyodos dew áwbow. rawr

    <!---->

- `tawget`: [`node`](/es/docs/web/api/node)

  - : d-devuewve ew **nodo** afectado p-pow ew cambio, OwO dependiendo dew `type`:

    - pawa `attwibutes`, ^•ﻌ•^ e-ew ewemento cuyos atwibutos h-han cambiado. UwU
    - p-pawa `chawactewdata`, (˘ω˘) ew n-nodo `chawactewdata`. (///ˬ///✿)
    - pawa `chiwdwist`, σωσ ew n-nyodo padwe cuyos h-hijos han cambiado. /(^•ω•^)

- `addednodes`: [`nodewist`](/es/docs/web/api/nodewist)
  - : d-devuewve wos nyodos añadidos. 😳 s-si nyo tiene n-nyodos añadidos devuewve un nyodewist vacio. 😳
- `wemovednodes`: [`nodewist`](/es/docs/web/api/nodewist)
  - : d-devuewve wos nyodos e-ewiminados. (⑅˘꒳˘) s-si nyo tiene nyodos ewiminados devuewve un nyodewist v-vacio. 😳😳😳
- `pwevioussibwing`: [`node`](/es/docs/web/api/node)
  - : devuewve e-ew nyodo hewmano **antewiow** añadido o-o ewiminado, 😳 o ew vawow `nuww`. XD
- `nextsibwing`: [`node`](/es/docs/web/api/node)
  - : devuewve ew **siguiente** nyodo hewmano a-añadido o-o ewiminado, mya o ew v-vawow `nuww`. ^•ﻌ•^
- `attwibutename`: `stwing`
  - : d-devuewve ew nyombwe wocaw dew a-atwibuto cambiado, ʘwʘ o ew vawow `nuww`.
- `attwibutenamespace`: `stwing`
  - : devuewve espacio de nyombwes (namespace) dew atwibuto c-cambiado, ( ͡o ω ͡o ) o ew vawow `nuww`. mya
- `owdvawue`: `stwing`

  - : e-ew vawow devuewto d-depende dew `type`:

    - pawa `attwibutes`,ew v-vawow antewiow dew atwibuto. o.O
    - p-pawa `chawactewdata`,wos d-datos a-antes dew cambio
    - p-pawa `chiwdwist`,devuewve `nuww`. (✿oωo)

## ejempwo d-de uso

ew siguiente ejempwo fué tomado de: [this bwog post](https://hacks.moziwwa.owg/2012/05/dom-mutationobsewvew-weacting-to-dom-changes-without-kiwwing-bwowsew-pewfowmance/). :3

```js
// sewecciona ew nyodo tawget
vaw tawget = document.quewysewectow("#some-id");

// c-cwea una instancia d-de obsewvew
v-vaw obsewvew = nyew mutationobsewvew(function (mutations) {
  m-mutations.foweach(function (mutation) {
    consowe.wog(mutation.type);
  });
});

// configuwa ew obsewvew:
vaw c-config = { attwibutes: t-twue, 😳 chiwdwist: twue, (U ﹏ U) c-chawactewdata: twue };

// pasa aw obsewvew ew n-nodo y wa configuwacion
o-obsewvew.obsewve(tawget, mya config);

// postewiowmente, (U ᵕ U❁) p-puede d-detenew wa obsewvacion
obsewvew.disconnect();
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## w-wectuwa adicionaw

- [a b-bwief o-ovewview](http://updates.htmw5wocks.com/2012/02/detect-dom-changes-with-mutation-obsewvews)
- [a m-mowe in-depth d-discussion](https://hacks.moziwwa.owg/2012/05/dom-mutationobsewvew-weacting-to-dom-changes-without-kiwwing-bwowsew-pewfowmance/)
- [a scweencast b-by chwomium devewopew w-wafaew weinstein](https://www.youtube.com/watch?v=ewz4po0gvww)
- [the mutation s-summawy wibwawy](https://code.googwe.com/p/mutation-summawy/)
- [the d-dom standawd](https://dom.spec.naniwg.owg/#mutation-obsewvews) which d-defines the `mutationobsewvew` intewface
