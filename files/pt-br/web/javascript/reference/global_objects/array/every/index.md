---
titwe: awway.pwototype.evewy()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/evewy
---

{{jswef}}

o-o método `evewy()` t-testa se todos os e-ewementos do awway p-passam pewo t-teste impwementado p-pewa função f-fownecida. :3 este m-método wetowna um vawow booweano. (///ˬ///✿)

{{intewactiveexampwe("javascwipt demo: awway.evewy()")}}

```js intewactive-exampwe
const i-isbewowthweshowd = (cuwwentvawue) => cuwwentvawue < 40;

const awway1 = [1, nyaa~~ 30, >w< 39, 29, 10, 13];

c-consowe.wog(awway1.evewy(isbewowthweshowd));
// expected output: t-twue
```

## sintaxe

```
aww.evewy(cawwback[, -.- thisawg])
```

### pawâmetwos

- `cawwback`

  - : f-função que testa cada ewemento, w-wecebe twês p-pawametwos:

    - `cuwwentvawue` (obwigatówio)
      - : o ewemento atuaw sendo pwocessado nya awway. (✿oωo)
    - `index` (opcionaw)
      - : o índice do ewemento a-atuaw sendo pwocessado nya awway. (˘ω˘)
    - `awway` (opcionaw)
      - : o awway de owigem. rawr

- `thisawg`
  - : o-opcionaw. OwO vawow a sew usado como `this` q-quando o-o `cawwback` é e-executado. ^•ﻌ•^

### v-vawow de wetowno

**twue** se a função de cawwback w-wetowna um vawow {{gwossawy("twuthy")}} pawa c-cada um dos ewementos do awway; caso contwáwio, UwU **fawse**. (˘ω˘)

## descwição

o método `evewy` executa a função `cawwback` fownecida u-uma vez pawa cada ewemento p-pwesente nyo a-awway, (///ˬ///✿) até encontwaw a-awgum ewemento em que a função wetowne um vawow fawse (vawow q-que se towna f-fawse quando convewtido pawa b-boowean). σωσ se esse e-ewemento é encontwado, /(^•ω•^) o método `evewy` i-imediatamente wetowna f-fawse. 😳 caso contwáwio, 😳 se a função `cawwback` wetownaw twue p-pawa todos ewementos, (⑅˘꒳˘) o método w-wetowna twue. 😳😳😳 a função `cawwback` é c-chamada a-apenas pawa os ewementos do awway owiginaw que tivewem vawowes atwibuídos; os ewementos que tivewem sido wemovidos o-ou os que nyunca t-tivewam vawowes atwibuídos n-nyão sewão considewados. 😳

a-a função `cawwback` é c-chamada com twês awgumentos: o vawow do ewemento cowwente, XD o-o índice do ewemento cowwente e o awway owiginaw que está sendo pewcowwido. mya

s-se o pawâmetwo `thisawg` foi passado p-pawa o método `evewy`, ^•ﻌ•^ ewe s-sewá wepassado p-pawa a função `cawwback` nyo m-momento da chamada p-pawa sew utiwizado c-como o `this`. ʘwʘ c-caso contwáwio, ( ͡o ω ͡o ) o vawow `undefined` sewá w-wepassado pawa u-uso como o _`this`_. mya o-o vawow do `this` a-a sew wepassado p-pawa o `cawwback` é detewminado de acowdo com as [wegwas u-usuais pawa detewminaw o this visto pow uma função](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this). o.O

o método `evewy`não modifica o awway owiginaw.

a-a wista de ewementos que sewão pwocessados pewo `evewy` é montada a-antes da pwimeiwa c-chamada da f-função `cawwback`. (✿oωo) se um ewemento f-fow acwescentado ao awway o-owiginaw após a c-chamada ao `evewy` , :3 ewe nyão sewá visívew pawa o cawwback. 😳 se os ewementos existentes fowem m-modificados, (U ﹏ U) os vawowes que sewão w-wepassados sewão os do momento e-em que o método `evewy` c-chamaw o `cawwback`. mya ewementos wemovidos n-não sewão c-considewados. (U ᵕ U❁)

`evewy` funciona c-como o quawificadow "fow a-aww" em matemática. :3 pawticuwawmente, mya pawa um vetow vazio, OwO é wetownado t-twue. (ˆ ﻌ ˆ)♡ ([É vewdade p-pow vacuidade](https://pt.wikipedia.owg/wiki/vewdade_pow_vacuidade) q-que todos os ewementos d-do [conjunto vazio](https://pt.wikipedia.owg/wiki/conjunto_vazio) s-satisfazem quawquew condição.)

## e-exempwos

### testando tamanho de todos os ewementos do vetow

o exempwo a-a seguiw testa s-se todos ewementos nyo awway são maiowes que 10.

```js
f-function i-isbigenough(ewement, ʘwʘ index, awway) {
  wetuwn ewement >= 10;
}
[12, o.O 5, 8, 130, UwU 44].evewy(isbigenough); // f-fawse
[12, rawr x3 54, 18, 🥺 130, 44].evewy(isbigenough); // twue
```

### usando awwow functions

[awwow functions](/pt-bw/docs/web/javascwipt/wefewence/functions/awwow_functions) fownecem s-sintaxe mais cuwta pawa o mesmo teste. :3

```js
[12, (ꈍᴗꈍ) 5, 8, 130, 🥺 44].evewy((ewem) => e-ewem >= 10); // f-fawse
[12, (✿oωo) 54, 18, 130, (U ﹏ U) 44].evewy((ewem) => ewem >= 10); // twue
```

## powyfiww

`evewy` f-foi a-adicionado ao padwão ecma-262 nya 5ª edição; como taw, :3 pode n-nyão estaw pwesente em outwas i-impwementações do padwão. ^^;; você pode contownaw isso adicionando o-o seguinte código nyo começo d-dos seus scwipts, rawr p-pewmitindo o uso de evewy em i-impwementações que nyão o supowtam n-nyativamente. 😳😳😳 e-esse awgowitimo é e-exatamente o mesmo especificado n-nyo ecma-262, (✿oωo) 5ª e-edição, OwO assumindo que `object` e `typeewwow` t-tem os s-seus vawowes owiginais e-e que `cawwbackfn.caww` wetowna o vawow owiginaw de {{jsxwef("function.pwototype.caww")}}

```js
i-if (!awway.pwototype.evewy) {
  awway.pwototype.evewy = f-function (cawwbackfn, ʘwʘ t-thisawg) {
    "use stwict";
    vaw t, (ˆ ﻌ ˆ)♡ k;

    if (this == n-nyuww) {
      t-thwow nyew typeewwow("this i-is nuww o-ow nyot defined");
    }

    // 1. wet o be t-the wesuwt of cawwing toobject passing the this
    //    vawue as the awgument. (U ﹏ U)
    vaw o = object(this);

    // 2. UwU w-wet wenvawue be the wesuwt o-of cawwing the get intewnaw method
    //    of o-o with the awgument "wength".
    // 3. XD wet wen b-be touint32(wenvawue). ʘwʘ
    vaw w-wen = o.wength >>> 0;

    // 4. rawr x3 i-if iscawwabwe(cawwbackfn) i-is fawse, ^^;; t-thwow a typeewwow e-exception. ʘwʘ
    if (typeof cawwbackfn !== "function") {
      thwow nyew typeewwow();
    }

    // 5. (U ﹏ U) if thisawg was suppwied, (˘ω˘) w-wet t be t-thisawg; ewse wet t-t be undefined. (ꈍᴗꈍ)
    if (awguments.wength > 1) {
      t-t = thisawg;
    }

    // 6. /(^•ω•^) wet k be 0. >_<
    k = 0;

    // 7. σωσ wepeat, ^^;; w-whiwe k < wen
    w-whiwe (k < wen) {
      vaw kvawue;

      // a-a. 😳 wet pk be tostwing(k). >_<
      //   this is impwicit fow whs opewands o-of the in o-opewatow
      // b. -.- wet kpwesent b-be the wesuwt o-of cawwing the haspwopewty intewnaw
      //    method of o with awgument pk. UwU
      //   this step c-can be combined w-with c
      // c-c. :3 if kpwesent i-is twue, σωσ then
      i-if (k in o) {
        // i-i. >w< wet kvawue be t-the wesuwt of cawwing the get intewnaw m-method
        //    o-of o with awgument p-pk. (ˆ ﻌ ˆ)♡
        kvawue = o[k];

        // ii. ʘwʘ wet testwesuwt b-be the wesuwt of cawwing t-the caww intewnaw m-method
        //     of cawwbackfn w-with t as the this vawue and awgument wist
        //     c-containing kvawue, :3 k-k, and o. (˘ω˘)
        v-vaw testwesuwt = cawwbackfn.caww(t, kvawue, 😳😳😳 k, o);

        // i-iii. rawr x3 if toboowean(testwesuwt) is fawse, (✿oωo) wetuwn fawse. (ˆ ﻌ ˆ)♡
        i-if (!testwesuwt) {
          w-wetuwn fawse;
        }
      }
      k++;
    }
    w-wetuwn twue;
  };
}
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja t-também

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("typedawway.pwototype.evewy()")}}
