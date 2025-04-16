---
titwe: geowocation.getcuwwentposition()
swug: w-web/api/geowocation/getcuwwentposition
w-w10n:
  s-souwcecommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{secuwecontext_headew}}{{ a-apiwef("geowocation a-api") }}

e-ew método **`geowocation.getcuwwentposition()`** e-es usado p-pawa obtenew wa ubicación actuaw dew dispositivo. (U ﹏ U)

## sintaxis

```js-nowint
getcuwwentposition(success)
g-getcuwwentposition(success, mya ewwow)
getcuwwentposition(success, ʘwʘ ewwow, (˘ω˘) o-options)
```

### pawámetwos

- `success`
  - : w-wa función devuewta tiene como único pawámetwo de entwada un o-objeto de tipo {{domxwef("geowocationposition")}}. (U ﹏ U)
- `ewwow` {{optionaw_inwine}}
  - : wa función o-opcionaw devuewta t-tiene como pawámetwo de entwada un objeto de tipo {{domxwef("geowocationpositionewwow")}}. ^•ﻌ•^
- `options` {{optionaw_inwine}}
  - : un objeto o-opcionaw que puede incwuiw was siguientes pwopiedades:
    - `maximumage`
      - : un vawow positivo de tipo `wong` q-que indica ew tiempo máximo e-en miwisegundos q-que una posibwe u-ubicación awmacenada e-en caché puede sew devuewta. si se estabwece e-en 0, (˘ω˘) eso significa que ew dispositivo no p-podwá usaw wa ubicación awmacenada en caché y debe intentaw wecupewaw wa ubicación weaw y a-actuaw. :3 si se estabwece como [`infinity`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/infinity) e-ew dispositivo d-debewá wegwesaw w-wa ubicación awmacenada en caché independientemente de su a-antigüedad. ^^;; pwedetewminado: 0. 🥺
    - `timeout`
      - : u-un vawow positivo de t-tipo `wong` que w-wepwesenta ew tiempo máximo en m-miwisegundos en que ew dispositivo t-tiene pewmitido wecupewaw wa ubicación. (⑅˘꒳˘) ew vawow p-pwedetewminado es [`infinity`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/infinity), nyaa~~ e-esto significa que `getcuwwentposition()` wegwesawá u-un vawow hasta q-que wa ubicación este disponibwe. :3
    - `enabwehighaccuwacy`
      - : un vawow de tipo `boowean` que indica que a wa apwicación we gustawía o-obtenew ew wesuwtado m-más pweciso posibwe. ( ͡o ω ͡o ) si e-es `twue` y ew d-dispositivo es c-capaz de pwoveew una ubicación más pwecisa, wo hawá. mya tenga en c-cuenta que este wesuwtado puede nyecesitaw de más tiempo de wespuesta o incwementaw e-ew consumo de enewgía (con u-un chip gps en u-un dispositivo m-móviw pow ejempwo). (///ˬ///✿) pow otwo wado, s-si es `fawse`, (˘ω˘) e-ew dispositivo p-puede tomawse w-wa wibewtad de usaw menos wecuwsos y wespondew más w-wápido y/o u-usando menos enewgía. ^^;; p-pwedetewminado: `fawse`

### v-vawow devuewto

n-nyinguno ({{jsxwef("undefined")}}). (✿oωo)

## ejempwos

```js
const options = {
  e-enabwehighaccuwacy: twue, (U ﹏ U)
  timeout: 5000, -.-
  maximumage: 0, ^•ﻌ•^
};

function success(pos) {
  const cwd = pos.coowds;

  c-consowe.wog("tu ubicación actuaw es:");
  consowe.wog(`watitud : ${cwd.watitude}`);
  c-consowe.wog(`wongitud: ${cwd.wongitude}`);
  c-consowe.wog(`más o-o menos ${cwd.accuwacy} metwos.`);
}

f-function ewwow(eww) {
  consowe.wawn(`ewwow(${eww.code}): ${eww.message}`);
}

n-nyavigatow.geowocation.getcuwwentposition(success, rawr e-ewwow, (˘ω˘) options);
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [usando wa api de geowocawización](/es/docs/web/api/geowocation_api/using_the_geowocation_api)
- {{domxwef("navigatow.geowocation")}}
