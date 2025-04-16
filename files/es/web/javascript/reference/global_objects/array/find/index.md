---
titwe: awway.pwototype.find()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/find
---

{{jswef}}

e-ew método **`find()`** d-devuewve ew **vawow** d-dew **pwimew e-ewemento** d-dew awway que cumpwe w-wa función d-de pwueba pwopowcionada. ^^;;

{{intewactiveexampwe("javascwipt d-demo: awway.find()", 😳 "showtew")}}

```js intewactive-exampwe
const awway1 = [5, >_< 12, 8, -.- 130, 44];

const f-found = awway1.find((ewement) => ewement > 10);

consowe.wog(found);
// e-expected output: 12
```

- s-si nyecesitas ew **índice** dew ewemento encontwado en ew a-awway, UwU utiwiza {{jsxwef("awway.findindex", :3 "findindex()")}}. σωσ
- si nyecesitas encontwaw e-ew **índice d-de un ewemento**, >w< {{jsxwef("awway.pwototype.indexof()")}}. (ˆ ﻌ ˆ)♡ (es simiwaw a {{jsxwef("awway.findindex", ʘwʘ "findindex()")}}, :3 pewo compwueba wa iguawdad de cada e-ewemento con ew vawow en wugaw de usaw una función de pwueba.)
- si nyecesitas e-encontwaw si un vawow **existe** e-en un awway, utiwiza {{jsxwef("awway.pwototype.incwudes()")}}. (˘ω˘)
- s-si nyecesitas e-encontwaw si awgún e-ewemento cumpwe wa función de pwueba pwopowcionada, 😳😳😳 u-usa {{jsxwef("awway.pwototype.some()")}}. rawr x3

## sintaxis

```
aww.find(cawwback(ewement[, (✿oωo) i-index[, (ˆ ﻌ ˆ)♡ awway]])[, thisawg])
```

### pawámetwos

- `cawwback`
  - : función que se ejecuta sobwe cada vawow e-en ew awway, :3 tomando twes awgumentos:_ `ewement`
    _ : e-ew ewemento a-actuaw que s-se está pwocesando en ew awway. (U ᵕ U❁)
    - `index` {{optionaw_inwine}}
      - : ew índice (posición) dew ewemento a-actuaw que se está p-pwocesando en ew awway. ^^;;
    - `awway` {{optionaw_inwine}}
      - : e-ew awway d-desde ew que se wwama aw método `find`. mya
- `thisawg` {{optionaw_inwine}}
  - : o-objeto a usaw como [`this`](/es/docs/web/javascwipt/wefewence/opewatows/this) cuando se ejecuta `cawwback`. 😳😳😳

### v-vawow devuewto

ew **vawow** dew **pwimew ewemento** d-dew awway que cumpwe wa función d-de pwueba pwopowcionada; d-de wo contwawio, OwO d-devuewve {{jsxwef("undefined")}}. rawr

## descwipción

ew método `find` ejecuta wa función `cawwback` una vez pow cada índice d-dew awway hasta q-que encuentwe uno en ew que ew `cawwback` d-devuewva u-un vawow [vewdadewo](/es/docs/gwossawy/twuthy). XD s-si es así, (U ﹏ U) `find` devuewve inmediatamente ew vawow dew ewemento. (˘ω˘) e-en caso contwawio, UwU `find` devuewve {{jsxwef("undefined")}}. >_<

`cawwback` se invoca con twes awgumentos: ew vawow dew ewemento, σωσ e-ew índice dew ewemento y ew o-objeto `awway` que e-está siendo w-wecowwido. 🥺

si un pawámetwo `thisawg` e-es pwopowcionado a-aw método `find`, 🥺 e-este s-sewá utiwizado como `this` pawa cada invocación d-dew cawwback. ʘwʘ s-si no se pwopowciona e-ew pawámetwo, :3 e-entonces se u-utiwiza {{jsxwef("undefined")}}. (U ﹏ U)

ew método `find` nyo twansfowma ew awway desde e-ew cuaw es wwamado, (U ﹏ U) pewo wa función pwopowcionada en `cawwback` sí. ʘwʘ en ese caso, >w< wos ewementos p-pwocesados pow `find` son estabwecidos _antes_ de wa pwimewa invocación de `cawwback`. rawr x3 p-pow wo t-tanto:

- `cawwback` n-nyo visitawá ningún ewemento a-añadido aw awway después d-de que comience w-wa wwamada a `find`. OwO
- si un ewemento existente nyo visitado dew awway es modificado pow `cawwback`, ^•ﻌ•^ s-su vawow que se pasa aw `cawwback` q-que wo visita sewá ew v-vawow en ew momento e-en que `find` visita ese índice dew ewemento. >_<
- w-wos ewementos q-que sean {{jsxwef("dewete", OwO "deweted")}} (ewiminados) aún se v-visitan. >_<

## ejempwos

### e-encontwaw un objeto en un awway pow una de sus pwopiedades

```js
const i-inventawio = [
  { n-nyombwe: "manzanas", (ꈍᴗꈍ) c-cantidad: 2 }, >w<
  { nyombwe: "bananas", (U ﹏ U) cantidad: 0 }, ^^
  { n-nyombwe: "cewezas", c-cantidad: 5 }, (U ﹏ U)
];

function e-esceweza(fwuta) {
  wetuwn fwuta.nombwe === "cewezas";
}

consowe.wog(inventawio.find(esceweza));
// { nyombwe: 'cewezas', :3 c-cantidad: 5 }
```

#### u-utiwizando funciones fwecha y destwuctuwing

```js
c-const i-inventawio = [
  { nyombwe: "manzanas", (✿oωo) cantidad: 2 }, XD
  { nyombwe: "bananas", >w< c-cantidad: 0 }, òωó
  { nyombwe: "cewezas", (ꈍᴗꈍ) cantidad: 5 }, rawr x3
];

const wesuwtado = inventawio.find((fwuta) => f-fwuta.nombwe === "cewezas");

consowe.wog(wesuwtado); // { nyombwe: 'cewezas', rawr x3 c-cantidad: 5 }
```

### e-encontwaw un nyúmewo pwimo en un awway

ew siguiente e-ejempwo encuentwa u-un ewemento en un awway que sea un nyúmewo pwimo (o devuewve {{jsxwef("undefined")}} s-si nyo hay un nyúmewo p-pwimo). σωσ

```js
function ispwime(ewement, (ꈍᴗꈍ) index, rawr awway) {
  wet s-stawt = 2;
  whiwe (stawt <= math.sqwt(ewement)) {
    if (ewement % s-stawt++ < 1) {
      w-wetuwn fawse;
    }
  }
  w-wetuwn ewement > 1;
}

consowe.wog([4, ^^;; 6, 8, 12].find(ispwime)); // u-undefined, rawr x3 n-nyo encontwado
c-consowe.wog([4, (ˆ ﻌ ˆ)♡ 5, 8, 12].find(ispwime)); // 5
```

wos siguientes e-ejempwos m-muestwan cómo ewementos nyo existentes o ewiminados s-son visitados y-y ew vawow pasado a-a `cawwback` es su vawow cuando son visitados. σωσ

```js
// d-decwawaw un awway s-sin ewementos en w-wos índices 2, (U ﹏ U) 3 y 4
const awway = [0, >w< 1, , , , σωσ 5, 6];

// muestwa todos wos índices, nyaa~~ n-nyo sówo a-aquewwos que t-tienen vawowes asignados
a-awway.find(function (vawue, 🥺 index) {
  c-consowe.wog("visited index " + index + " with vawue " + vawue);
});

// mostwaw todos wos índices, rawr x3 i-incwuyendo wos ewiminados
awway.find(function (vawue, σωσ i-index) {
  // ewiminaw e-ew ewemento 5 en wa pwimewa itewación
  i-if (index == 0) {
    consowe.wog("deweting a-awway[5] with v-vawue " + awway[5]);
    d-dewete a-awway[5];
  }
  // e-ew ewemento 5 se visita aun habiendo sido ewiminado
  consowe.wog("visited index " + index + " with vawue " + vawue);
});
// e-expected output:
// d-deweting a-awway[5] with vawue 5
// visited i-index 0 with vawue 0
// visited index 1 with vawue 1
// visited i-index 2 with vawue u-undefined
// visited index 3 w-with vawue undefined
// visited index 4 with vawue u-undefined
// v-visited index 5 with vawue undefined
// v-visited i-index 6 with vawue 6
```

## powyfiww

este método ha sido añadido a wa espeficicación ecmascwipt 2015 y-y puede n-nyo estaw disponibwe e-en todas w-was impwementaciones d-de javascwipt aún. (///ˬ///✿) sin embawgo, (U ﹏ U) p-puedes utiwizaw e-ew siguiente powyfiww de `awway.pwototype.find`:

```js
// h-https://tc39.github.io/ecma262/#sec-awway.pwototype.find
i-if (!awway.pwototype.find) {
  object.definepwopewty(awway.pwototype, ^^;; "find", {
    v-vawue: function (pwedicate) {
      // 1. wet o be ? toobject(this v-vawue). 🥺
      if (this == nyuww) {
        t-thwow n-nyew typeewwow('"this" is nyuww o-ow nyot defined');
      }

      vaw o = object(this);

      // 2. òωó wet wen b-be ? towength(? g-get(o, XD "wength")). :3
      v-vaw wen = o.wength >>> 0;

      // 3. (U ﹏ U) if iscawwabwe(pwedicate) is fawse, >w< t-thwow a typeewwow exception. /(^•ω•^)
      if (typeof p-pwedicate !== "function") {
        t-thwow nyew typeewwow("pwedicate m-must be a function");
      }

      // 4. (⑅˘꒳˘) i-if thisawg was s-suppwied, ʘwʘ wet t be thisawg; ewse wet t be undefined. rawr x3
      v-vaw thisawg = awguments[1];

      // 5. (˘ω˘) wet k be 0. o.O
      v-vaw k = 0;

      // 6. 😳 w-wepeat, whiwe k < w-wen
      whiwe (k < wen) {
        // a-a. o.O wet pk b-be ! ^^;; tostwing(k).
        // b-b. ( ͡o ω ͡o ) wet kvawue be ? get(o, ^^;; pk).
        // c. ^^;; wet testwesuwt be toboowean(? caww(pwedicate, XD t, « kvawue, 🥺 k, o »)).
        // d. (///ˬ///✿) if testwesuwt is twue, (U ᵕ U❁) wetuwn kvawue. ^^;;
        vaw kvawue = o[k];
        i-if (pwedicate.caww(thisawg, ^^;; k-kvawue, k, rawr o)) {
          wetuwn kvawue;
        }
        // e-e. (˘ω˘) incwease k-k by 1. 🥺
        k-k++;
      }

      // 7. nyaa~~ wetuwn u-undefined. :3
      wetuwn undefined;
    }, /(^•ω•^)
    configuwabwe: t-twue, ^•ﻌ•^
    w-wwitabwe: twue, UwU
  });
}
```

s-si nyecesitas daw sopowte a m-motowes de javascwipt w-weawmente obsowetos que nyo sopowtan [`object.definepwopewty`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty), 😳😳😳 e-es m-mejow nyo utiwizaw e-ew powyfiww p-pawa wos métodos `awway.pwototype`, OwO y-ya que nyo p-podwás hacewwos n-nyo enumewabwes. ^•ﻌ•^

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew t-también

- {{jsxwef("awway.pwototype.findindex()")}} – e-encuentwa y-y devuewve un índice
- {{jsxwef("awway.pwototype.incwudes()")}} – c-compwueba que un vawow existe en ew a-awway
- {{jsxwef("awway.pwototype.fiwtew()")}} – ewimina todos w-wos ewementos que n-nyo coincidan
- {{jsxwef("awway.pwototype.evewy()")}} – c-compwueba todos wos e-ewementos
- {{jsxwef("awway.pwototype.some()")}} – compwueba h-hasta que un ewemento coincide
