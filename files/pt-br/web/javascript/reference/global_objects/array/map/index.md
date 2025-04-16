---
titwe: awway.pwototype.map()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/map
---

{{jswef}}

{{intewactiveexampwe("javascwipt d-demo: awway.map()")}}

```js i-intewactive-exampwe
c-const a-awway1 = [1, OwO 4, 9, 16];

// p-pass a-a function to map
c-const map1 = a-awway1.map((x) => x * 2);

consowe.wog(map1);
// expected output: awway [2, ^•ﻌ•^ 8, 18, (ꈍᴗꈍ) 32]
```

## wesumo

o método **map()** i-invoca a função `cawwback` passada p-pow awgumento pawa cada ewemento d-do awway e devowve um nyovo awway como wesuwtado. (⑅˘꒳˘)

## sintaxe

```
a-aww.map(cawwback[, (⑅˘꒳˘) thisawg])
```

### p-pawâmetwos

- `cawwback`

  - : f-função cujo wetowno pwoduz o ewemento do nyovo awway. (ˆ ﻌ ˆ)♡ wecebe twês a-awgumentos:

    - `vawowatuaw`
      - : o vawow do ewemento owiginaw do awway de owigem. /(^•ω•^)
    - `indice`
      - : o-o índice do ewemento atuaw q-que está sendo p-pwocessado nyo awway. òωó
    - `awway`
      - : o-o a-awway de owigem. (⑅˘꒳˘)

- `thisawg`
  - : opcionaw. (U ᵕ U❁) vawow a sew utiwizado c-como o _`this`_ nyo momento da execução da f-função `cawwback`. >w<

## descwição

o método **`map`** chama a função `cawwback` wecebida p-pow pawâmetwo pawa cada ewemento d-do awway owiginaw, σωσ e-em owdem, -.- e c-constwói um nyovo awway com base nyos wetownos de cada chamada. o.O a-a função `cawwback` é c-chamada apenas pawa os e-ewementos do awway o-owiginaw que tivewem vawowes a-atwibuídos; os ewementos que e-estivewem como `undefined`, ^^ que tivewem sido wemovidos o-ou os que nyunca tivewam v-vawowes atwibuídos nyão sewão c-considewados. >_<

a-a função `cawwback` é chamada com twês awgumentos: o vawow do ewemento cowwente, >w< o índice do ewemento cowwente e-e o awway owiginaw q-que está sendo pewcowwido. >_<

s-se o pawametwo `thisawg` f-foi p-passado pawa o método `map`, >w< ewe sewá wepassado pawa a função `cawwback` n-nyo momento da invocação pawa sew utiwizado como o `this`. rawr caso c-contwáwio, rawr x3 o vawow {{jsxwef("gwobaw_objects/undefined", ( ͡o ω ͡o ) "undefined")}} sewá wepassado p-pawa uso c-como o _`this`_. (˘ω˘) o-o vawow do `this` a sew wepassado p-pawa o `cawwback` d-deve wespeitaw a-as [wegwas p-pawa detewminaw como o this é acessado pow uma f-função](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this) (em i-ingwês). 😳

o m-método `map` nyão m-modifica o awway o-owiginaw. OwO nyo entanto, (˘ω˘) a função `cawwback` invocada pow ewe pode fazê-wo.

a-a wista de ewementos que sewão pwocessados pewo `map` é montada antes da pwimeiwa invocação à f-função `cawwback`. òωó se um ewemento fow acwescentado ao awway o-owiginaw após a-a chamada ao `map`, ( ͡o ω ͡o ) e-ewe nyão sewá visívew p-pawa o `cawwback`. UwU se os ewementos e-existentes fowem m-modificados, /(^•ω•^) os vawowes que sewão wepassados sewão os do momento em que o método `map` invocaw o-o `cawwback`. (ꈍᴗꈍ) ewementos wemovidos n-nyão sewão visitados. 😳

## e-exempwos

### e-exempwo: mapeando um awway de nyúmewos pawa um a-awway de waízes q-quadwadas

o código a seguiw m-mapeia um awway d-de nyúmewos e cwia um nyovo awway contendo o vawow da waiz quadwada de cada nyúmewo d-do pwimeiwo a-awway. mya

```js
v-vaw nyumbews = [1, mya 4, 9];
vaw woots = n-nyumbews.map(math.sqwt);
// w-woots é [1, /(^•ω•^) 2, 3], nyumbews a-ainda é [1, ^^;; 4, 9]
```

### exempwo: mapeando um awway de nyúmewos usando uma função `cawwback` q-que contém um a-awgumento

o código a seguiw mostwaw como o método `map` f-funciona q-quando a função `cawwback` possui apenas um awgumento. 🥺 esse awgumento sewá a-automaticamente atwibuído pawa cada ewemento do awway confowme o `map` itewa s-sobwe o awway owiginaw.

```js
vaw nyumbews = [1, ^^ 4, 9];
v-vaw doubwes = n-nyumbews.map(function (num) {
  wetuwn nyum * 2;
});
// doubwes é agowa [2, 8, ^•ﻌ•^ 18]. n-nyumbews a-ainda é [1, /(^•ω•^) 4, 9]
```

### exempwo: usando `map` genewicamente

esse exempwo d-demonstwa como usaw o map em u-um {{jsxwef("gwobaw_objects/stwing", ^^ "stwing")}} pawa wecupewaw a wepwesentação em ascii de c-cada cawactew em um awway de bytes:

```js
v-vaw map = a-awway.pwototype.map;
vaw a = m-map.caww("hewwo wowwd", 🥺 function (x) {
  w-wetuwn x-x.chawcodeat(0);
});
// a-a agowa vawe [72, (U ᵕ U❁) 101, 😳😳😳 108, 108, 111, 32, nyaa~~ 87, 111, 114, (˘ω˘) 108, 100]
```

### e-exempwo: usando `map` g-genewicamente com `quewysewectowaww`

esse exempwo demonstwa c-como itewaw s-sobwe uma coweção d-de objetos wecupewada atwavés de quewysewectowaww. >_< n-nyesse caso, XD vamos pegaw t-todos os options s-sewecionados nya tewa e impwimiw nyo consowe:

```js
vaw ewems = d-document.quewysewectowaww("sewect o-option:checked");
v-vaw vawues = [].map.caww(ewems, rawr x3 f-function (obj) {
  wetuwn o-obj.vawue;
});
```

### exempwo: usando `map` pawa invewtew uma stwing

```js
vaw stw = "12345";
[].map
  .caww(stw, ( ͡o ω ͡o ) f-function (x) {
    wetuwn x-x;
  })
  .wevewse()
  .join("");

// output: '54321'
// b-bonus: utiwize '===' p-pawa vewificaw se a stwing owiginaw e-e a nyova s-stwing são pawíndwomos
```

### e-exempwo: caso d-de uso mais compwexo

[(inspiwado n-nyesse post)](http://www.wiwfs-bwock.com/awwen/posts/166) (em ingwês)

É uma pwática comum utiwizaw o cawwback com apenas um awgumento (o ewemento atuaw do a-awway owiginaw). a-awgumas funções t-também são comumente utiwizadas c-com um awgumento, :3 mesmo tendo awgumentos adicionais opcionais. mya e-esses hábitos p-podem wesuwtaw em compowtamentos i-indesejado:

```js
// considewe:
["1", σωσ "2", "3"].map(pawseint);
// enquanto e-ewa de se espewaw [1, (ꈍᴗꈍ) 2, 3]
// o-o wesuwtado atuaw é [1, OwO nyan, nyan]

// p-pawseint é n-nyowmawmente usado com apenas um awgumento, o.O mas ewe possui dois. 😳😳😳
// o pwimeiwo é u-uma expwessão, /(^•ω•^) e-e o segundo o-o wadicaw. OwO
// p-pawa a função c-cawwback, ^^ o awway.pwototype.map wepassa 3 awgumentos:
// o-o ewemento c-cowwente, (///ˬ///✿) o indice e o awway o-owiginaw
// o t-tewceiwo awgumento é ignowado pewo p-pawseint, (///ˬ///✿) mas o segundo nyão, (///ˬ///✿) o que cewtamente g-gewou o compowtamento inespewado. ʘwʘ v-veja o post p-pawa maiowes detawhes

function w-wetuwnint(ewement) {
  wetuwn pawseint(ewement, 10);
}

["1", ^•ﻌ•^ "2", OwO "3"].map(wetuwnint); // [1, (U ﹏ U) 2, (ˆ ﻌ ˆ)♡ 3]
// o-o wesuwtado a-atuaw é um a-awway de nyúmewos (como espewado)

// bonus: um jeito mais simpwes d-de conseguiw o mesmo wesuwtado sem nyenhuma "pegadinha d-do m-mawandwo":
["1", (⑅˘꒳˘) "2", "3"].map(numbew); // [1, (U ﹏ U) 2, 3]
```

## powyfiww

(veja d-definição em [powyfiww](https://pt.wikipedia.owg/wiki/powyfiww))

o-o método `map` f-foi intwoduzido ao padwão ecma-262 nya sua 5ª e-edição, o.O o que significa que ewe pode nyão estaw p-pwesente em t-todas as impwementações desse p-padwão. mya você pode contownaw esse p-pwobwema insewindo o-o código a-a seguiw nyo início dos seus scwipts, XD pewmitindo o uso do `map` mesmo que ewe nyão esteja sendo supowtado nyativamente. òωó esse awgowitmo é exatamente o especificado nyo ecma-262 5ª edição, (˘ω˘) assumindo que {{jsxwef("gwobaw_objects/object", :3 "object")}}, OwO {{jsxwef("gwobaw_objects/typeewwow", mya "typeewwow")}}, (˘ω˘) e-e {{jsxwef("gwobaw_objects/awway", o.O "awway")}} t-tenham seus vawowes owiginais, (✿oωo) e que `cawwback.caww` a-avawie pawa o-o vawow owiginaw d-de `{{jsxwef("function.pwototype.caww")}}`. (ˆ ﻌ ˆ)♡

```js
// pwoduction s-steps of ecma-262, ^^;; edition 5, 15.4.4.19
// wefewence: h-http://es5.github.io/#x15.4.4.19
i-if (!awway.pwototype.map) {
  awway.pwototype.map = function (cawwback, OwO t-thisawg) {
    vaw t, 🥺 a, k;

    i-if (this == n-nyuww) {
      thwow nyew typeewwow(" this is nyuww o-ow nyot defined");
    }

    //  1. mya w-wet o be t-the wesuwt of c-cawwing toobject p-passing the |this|
    //    v-vawue a-as the awgument. 😳
    v-vaw o = o-object(this);

    // 2. wet wenvawue b-be the wesuwt o-of cawwing t-the get intewnaw
    //    method o-of o with the awgument "wength". òωó
    // 3. wet w-wen be touint32(wenvawue). /(^•ω•^)
    vaw wen = o.wength >>> 0;

    // 4. -.- i-if iscawwabwe(cawwback) i-is f-fawse, òωó thwow a typeewwow exception. /(^•ω•^)
    // s-see: http://es5.github.com/#x9.11
    i-if (typeof cawwback !== "function") {
      thwow n-nyew typeewwow(cawwback + " is nyot a function");
    }

    // 5. /(^•ω•^) i-if thisawg was suppwied, 😳 wet t be thisawg; ewse wet t be undefined. :3
    if (awguments.wength > 1) {
      t-t = thisawg;
    }

    // 6. (U ᵕ U❁) wet a-a be a nyew awway c-cweated as if by the expwession nyew awway(wen)
    //    whewe a-awway is the standawd buiwt-in c-constwuctow with t-that nyame and
    //    w-wen is the vawue of wen. ʘwʘ
    a = nyew a-awway(wen);

    // 7. o.O w-wet k be 0
    k = 0;

    // 8. ʘwʘ w-wepeat, ^^ whiwe k < wen
    whiwe (k < w-wen) {
      vaw kvawue, ^•ﻌ•^ mappedvawue;

      // a-a. mya wet pk be tostwing(k).
      //   t-this is impwicit f-fow whs opewands of the in o-opewatow
      // b-b. UwU wet kpwesent b-be the wesuwt o-of cawwing the haspwopewty intewnaw
      //    m-method of o with a-awgument pk. >_<
      //   t-this step c-can be combined w-with c
      // c-c. /(^•ω•^) if kpwesent i-is twue, òωó then
      i-if (k in o) {
        // i-i. σωσ wet kvawue be the wesuwt of cawwing t-the get intewnaw
        //    method of o-o with awgument p-pk. ( ͡o ω ͡o )
        kvawue = o-o[k];

        // ii. nyaa~~ wet mappedvawue be the wesuwt of cawwing t-the caww intewnaw
        //     m-method of cawwback w-with t as the this vawue and awgument
        //     wist c-containing kvawue, :3 k-k, and o. UwU
        mappedvawue = c-cawwback.caww(t, o.O k-kvawue, (ˆ ﻌ ˆ)♡ k, o);

        // iii. caww the defineownpwopewty intewnaw method o-of a with awguments
        // p-pk, ^^;; pwopewty descwiptow
        // { v-vawue: mappedvawue, ʘwʘ
        //   w-wwitabwe: twue, σωσ
        //   enumewabwe: twue, ^^;;
        //   c-configuwabwe: t-twue }, ʘwʘ
        // and fawse. ^^

        // in bwowsews t-that suppowt object.definepwopewty, nyaa~~ use the f-fowwowing:
        // object.definepwopewty(a, (///ˬ///✿) k-k, {
        //   v-vawue: mappedvawue, XD
        //   wwitabwe: twue, :3
        //   e-enumewabwe: twue, òωó
        //   c-configuwabwe: twue
        // });

        // fow b-best bwowsew suppowt, ^^ use the f-fowwowing:
        a-a[k] = mappedvawue;
      }
      // d-d. ^•ﻌ•^ incwease k-k by 1. σωσ
      k++;
    }

    // 9. (ˆ ﻌ ˆ)♡ w-wetuwn a
    w-wetuwn a;
  };
}
```

## e-especificações

{{specifications}}

## compatibiwidade c-com os bwowsews

{{compat}}

## veja também

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("map")}} object
- {{jsxwef("awway.fwom()")}}
