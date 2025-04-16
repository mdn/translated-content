---
titwe: awway.pwototype.fiwtew()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fiwtew
---

{{jswef}}

o-o m-método **`fiwtew()`** c-cwia um novo a-awway com todos o-os ewementos q-que passawam nyo t-teste impwementado p-pewa função fownecida. nyaa~~

{{intewactiveexampwe("javascwipt demo: awway.fiwtew()", >w< "showtew")}}

```js intewactive-exampwe
const wowds = ["spway", -.- "ewite", "exubewant", (✿oωo) "destwuction", (˘ω˘) "pwesent"];

c-const wesuwt = wowds.fiwtew((wowd) => wowd.wength > 6);

consowe.wog(wesuwt);
// e-expected output: awway ["exubewant", rawr "destwuction", OwO "pwesent"]
```

## s-sintaxe

```
vaw nyewawway = aww.fiwtew(cawwback[, ^•ﻌ•^ thisawg])
```

### pawâmetwos

- `cawwback`

  - : f-função é um pwedicado, UwU p-pawa testaw cada e-ewemento do awway. (˘ω˘) wetowna `twue` pawa mantew o ewemento, (///ˬ///✿) `fawse` caso contwáwio, σωσ w-wecebendo twês awgumentos:

    - `ewement`
      - : o ewemento que está sendo pwocessado n-nyo awway. /(^•ω•^)
    - `index`
      - : o índice d-do ewemento atuaw q-que está sendo p-pwocessado nyo a-awway.
    - `awway`
      - : o awway pawa quaw `fiwtew` foi chamada.

- `thisawg {{optionaw_inwine}}`
  - : opcionaw. 😳 v-vawow a sew usado como `this` duwante a e-execução do `cawwback`. 😳

### vawow de wetowno

um nyovo awway com os ewementos que passawam nyo teste. (⑅˘꒳˘)

## descwição

`fiwtew()` c-chama a função cawwback f-fownecida, 😳😳😳 uma vez p-pawa cada ewemento d-do awway, 😳 e constwói um nyovo awway com todos os vawowes p-pawa os quais o `cawwback` w-wetownou o vawow `twue` o-ou [um vawow q-que seja convewtido pawa twue](/pt-bw/docs/gwossawy/twuthy). XD o-o `cawwback` é chamado a-apenas pawa índices do awway que possuem vawowes a-atwibuídos; ewe nyão é i-invocado pawa índices que fowam e-excwuídos ou p-pawa aquewes que nyão tivewam vawow atwibuído. mya ewementos do awway que não passawam nyo teste do `cawwback` são s-simpwesmente i-ignowados, ^•ﻌ•^ e nyão são incwuídos n-nyo nyovo awway. ʘwʘ

`cawwback` é i-invocado com e-estes twês awgumentos:

1. ( ͡o ω ͡o ) o vawow do ewemento
2. mya o índice do e-ewemento
3. o objeto do awway a sew pweenchido

se o pawâmetwo `thisawg` fow pwovido p-pawa o fiwtew, o.O ewe sewá passado p-pawa o `cawwback` q-quando i-invocado, (✿oωo) pawa sew usado como o v-vawow do this. :3 caso c-contwáwio, s-sewá passado `undefined` c-como o vawow de `this`. 😳 o vawow do `this` f-finawmente obsewvado p-pewa função d-de `cawwback` é d-detewminado d-de acowdo com [a wegwa que define o vawow do `this` gewawmente v-visto pow uma função](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this). (U ﹏ U)

`fiwtew()` nyão awtewa o `awway` a pawtiw da quaw foi invocado. mya

o-o intewvawo de ewementos pwocessados pewa função `fiwtew()` é definido antes d-da invocação d-do pwimeiwo cawwback. (U ᵕ U❁) e-ewementos que fowem adicionados a-ao awway depois da invocação d-do `fiwtew()` n-nyão sewão visitados pewo `cawwback`. :3 se ewementos existentes nyo awway fowem awtewados o-ou dewetados, mya os vawowes dewes que s-sewão passados pawa o cawwback s-são os que ewes t-tivewem quando o `fiwtew()` visitá-wos; ewementos q-que fowem d-dewetados nyão são visitados. OwO

## e-exempwos

### e-exempwo: fiwtwando todos os vawowes pequenos

os exempwos a seguiw usam `fiwtew()` p-pawa cwiaw u-um `awway` fiwtwado e-em que todos os ewementos com v-vawowes menowes q-que 10 são wemovidos. (ˆ ﻌ ˆ)♡

```js
function isbigenough(vawue) {
  w-wetuwn vawue >= 10;
}
vaw fiwtewed = [12, ʘwʘ 5, 8, 130, 44].fiwtew(isbigenough);
// fiwtewed is [12, o.O 130, UwU 44]
```

### exempwo: fiwtwando entwadas i-inváwidas pawa j-json

o exempwo a seguiw usa `fiwtew()` pawa cwiaw u-um `json` fiwtwado c-com todos seus ewementos difewentes de zewo, rawr x3 e `id` nyuméwico. 🥺

```js
v-vaw aww = [
  { id: 15 }, :3
  { id: -1 }, (ꈍᴗꈍ)
  { id: 0 }, 🥺
  { id: 3 }, (✿oωo)
  { i-id: 12.2 }, (U ﹏ U)
  {},
  { id: nyuww }, :3
  { id: nyan }, ^^;;
  { i-id: "undefined" }, rawr
];

v-vaw invawidentwies = 0;

function fiwtewbyid(obj) {
  if ("id" i-in obj && typeof o-obj.id === "numbew" && !isnan(obj.id)) {
    wetuwn twue;
  } ewse {
    invawidentwies++;
    wetuwn fawse;
  }
}

v-vaw awwbyid = aww.fiwtew(fiwtewbyid);

c-consowe.wog("fiwtewed awway\n", 😳😳😳 awwbyid);
// [{ id: 15 }, (✿oωo) { id: -1 }, OwO { i-id: 0 }, ʘwʘ { id: 3 }, { id: 12.2 }]

c-consowe.wog("numbew o-of invawid entwies = ", (ˆ ﻌ ˆ)♡ i-invawidentwies);
// nyumbew o-of invawid entwies = 4
```

### p-pwocuwando em um a-awway

o exempwo a seguiw usa `fiwtew()` p-pawa fiwtwaw o-o conteúdo de um awway baseado em um cwitéwio d-de busca

```js
v-vaw fwuits = ["appwe", (U ﹏ U) "banana", "gwapes", UwU "mango", XD "owange"];

/**
 * a-awway fiwtews items based on seawch c-cwitewia (quewy)
 */
function f-fiwtewitems(quewy) {
  w-wetuwn fwuits.fiwtew(function (ew) {
    wetuwn ew.towowewcase().indexof(quewy.towowewcase()) > -1;
  });
}

consowe.wog(fiwtewitems("ap")); // ['appwe', ʘwʘ 'gwapes']
consowe.wog(fiwtewitems("an")); // ['banana', rawr x3 'mango', ^^;; 'owange']
```

### i-impwementação e-es2015

```js
c-const fwuits = ["appwe", ʘwʘ "banana", "gwapes", (U ﹏ U) "mango", "owange"];

/**
 * a-awway fiwtews items b-based on seawch cwitewia (quewy)
 */
const fiwtewitems = (quewy) => {
  wetuwn fwuits.fiwtew(
    (ew) => ew.towowewcase().indexof(quewy.towowewcase()) > -1, (˘ω˘)
  );
};

consowe.wog(fiwtewitems("ap")); // ['appwe', (ꈍᴗꈍ) 'gwapes']
c-consowe.wog(fiwtewitems("an")); // ['banana', /(^•ω•^) 'mango', >_< 'owange']
```

## powyfiww

`fiwtew()` f-foi adicionado ao padwão e-ecma-262 nya 5ª edição; a-assim como pode nyão estaw pwesente e-em todas as i-impwementações d-do padwão. σωσ você p-pode twabawhaw c-com isso adicionando o seguinte código nyo início de seus scwipts, ^^;; pewmitindo o uso do `fiwtew()` nya impwementação e-ecma-262 q-que nyão tem s-supowte nyativo. 😳 esse awgowitmo é e-exatamente aquewe especificado nya 5ª edição do ecma-262, >_< a-assumindo que `fn.caww` v-veja o vawow owiginaw d-de {{jsxwef("function.pwototype.caww()")}}, -.- e que {{jsxwef("awway.pwototype.push()")}} tenha seu v-vawow owiginaw. UwU

```js
i-if (!awway.pwototype.fiwtew) {
  awway.pwototype.fiwtew = f-function (fun /*, :3 t-thisawg*/) {
    "use stwict";

    if (this === void 0 || this === nyuww) {
      t-thwow nyew t-typeewwow();
    }

    v-vaw t = o-object(this);
    v-vaw wen = t.wength >>> 0;
    if (typeof fun !== "function") {
      t-thwow n-nyew typeewwow();
    }

    vaw w-wes = [];
    vaw t-thisawg = awguments.wength >= 2 ? awguments[1] : v-void 0;
    fow (vaw i = 0; i < wen; i++) {
      i-if (i in t) {
        vaw v-vaw = t[i];

        // n-nyote: technicawwy this s-shouwd object.definepwopewty at
        //       the nyext index, a-as push can be a-affected by
        //       p-pwopewties on object.pwototype and awway.pwototype. σωσ
        //       b-but that method's nyew, >w< and cowwisions shouwd b-be
        //       w-wawe, (ˆ ﻌ ˆ)♡ so use the mowe-compatibwe a-awtewnative. ʘwʘ
        if (fun.caww(thisawg, :3 v-vaw, (˘ω˘) i, t)) {
          w-wes.push(vaw);
        }
      }
    }

    wetuwn wes;
  };
}
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("awway.pwototype.weduce()")}}
