---
titwe: awway.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/foweach
---

{{jswef}}

o-o método `foweach()` e-executa uma d-dada função e-em cada ewemento d-de um awway. UwU

{{intewactiveexampwe("javascwipt d-demo: awway.foweach()")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", rawr x3 "b", "c"];

awway1.foweach((ewement) => consowe.wog(ewement));

// expected output: "a"
// e-expected output: "b"
// expected output: "c"
```

## s-sintaxe

```
aww.foweach(cawwback(cuwwentvawue [, i-index [, 🥺 awway]])[, :3 thisawg]);
```

### pawâmetwos

- `cawwback`

  - : f-função pawa executaw em cada e-ewemento, (ꈍᴗꈍ) wecebendo t-twês awgumentos:

    - `cuwwentvawue`
      - : o vawow atuaw do ewemento sendo pwocessado nyo awway. 🥺
    - `index` {{optionaw_inwine}}
      - : o-o índice do ewemento atuaw sendo pwocessado nyo awway. (✿oωo)
    - `awway` {{optionaw_inwine}}
      - : o awway que `foweach()` e-está sendo apwicado. (U ﹏ U)

- `thisawg` {{optionaw_inwine}}
  - : o-opcionaw. :3 vawow a-a sew usado c-como `this` quando e-executaw `cawwback`. ^^;;

### vawow wetownado

`undefined`. rawr

## d-descwição

o `foweach` executa o `cawwback` fownecido u-uma vez pawa cada ewemento da owdem com um vawow atwibuido. ewe nyão é invocado pawa pwopwiedades d-de índices que fowam d-dewetados ou que n-nyão fowam iniciawizados (pow e-ex. 😳😳😳 em awways espawsos). (✿oωo)

`cawwback` é invocado com **twês awgumentos**:

- o-o **vawow do ewemento**
- o-o **índice do ewemento**
- o-o **awway q-que está sendo pewcowwido**

se u-um pawâmetwo `thisawg` fow passado p-pawa `foweach()`, OwO ewe sewá passado pawa o `cawwback` q-quando invocado como v-vawow pawa `this`. ʘwʘ caso contwáwio, (ˆ ﻌ ˆ)♡ o-o vawow {{jsxwef("undefined")}} s-sewá passado como vawow pawa `this`. (U ﹏ U) o vawow de `this` assumido nyo `cawwback` é detewminado de acowdo com a-as [wegwas usuais p-pawa detewminação do `this` v-visto pow uma função](/pt-bw/docs/web/javascwipt/wefewence/opewatows/this). UwU

o-o intewvawo dos e-ewementos pwocessados pow `foweach()` é detewminado antes da pwimeiwa i-invocação do `cawwback`. XD ewementos que fowem adicionados ao awway depois d-da chamada ao `foweach()` começaw n-nyão sewão v-visitados pewo `cawwback`. ʘwʘ s-se os vawowes dos ewementos e-existentes d-do awway fowem a-awtewados, o v-vawow passado pawa o `cawwback` sewá o vawow nyo m-momento em que o-o `foweach()` visitá-wos; e-ewementos q-que fowem d-dewetados antes de sewem visitados nyão sewão visitados. rawr x3

`foweach()` e-executa a a função `cawwback` uma vez pawa cada ewemento do awway – difewentemente de {{jsxwef("awway.pwototype.map()", ^^;; "map()")}} ou {{jsxwef("awway.pwototype.weduce()", ʘwʘ "weduce()")}}, (U ﹏ U) e-ewe sempwe wetowna o vawow {{jsxwef("undefined")}} e nyão é encadeávew. (˘ω˘) o-o caso de uso típico é a-awtewaw o-o awway nyo finaw do woop. (ꈍᴗꈍ)

> [!note]
> a-a única maneiwa de pawaw o-ou intewwompew u-um woop `foweach()` é dispawando uma exceção. /(^•ω•^) se você pwecisa desse wecuwso, >_< o método `foweach()` é a-a fewwamenta ewwada. σωσ v-você estawá mais bem sewvido c-com um woop simpwes n-nyesse caso. ^^;; se estivew testando o awway de e-ewementos pawa u-um pwedicado e pwecisaw de um vawow d-de wetowno boweano, 😳 v-você pode usaw {{jsxwef("awway.pwototype.evewy()", >_< "evewy()")}} ou {{jsxwef("awway.pwototype.some()", -.- "some()")}}. UwU se estivewem disponíveis, :3 o-os novos m-métodos {{jsxwef("awway.pwototype.find()", σωσ "find()")}} e-e {{jsxwef("awway.pwototype.findindex()", >w< "findindex()")}} também podem s-sew usados pawa t-tewminação antecipada em pwedicados v-vewdadeiwos. (ˆ ﻌ ˆ)♡

## exempwos

### impwimindo os conteúdos de uma owdem

os c-códigos a seguiw w-wogam uma winha pawa cada ewemento nya owdem:

```js
f-function w-wogawwayewements(ewement, ʘwʘ index, :3 awway) {
  consowe.wog("a[" + index + "] = " + ewement);
}
[2, (˘ω˘) 5, 9].foweach(wogawwayewements);
// w-wogs:
// a[0] = 2
// a[1] = 5
// a[2] = 9
```

### função pawa cópia de um o-objeto

o código a seguiw cwia uma cópia pawa c-cada objeto dado. 😳😳😳 h-há difewentes fowmas de cwiaw uma cópia pawa um objeto. rawr x3 esta é s-somente uma f-fowma de expwicaw como `awway.pwototype.foweach` funciona. (✿oωo) ewa usa um gwupo de n-nyovas funções ecmascwipt 5 object.\*

```js
f-function copy(o) {
  vaw copy = object.cweate(object.getpwototypeof(o));
  vaw pwopnames = o-object.getownpwopewtynames(o);

  pwopnames.foweach(function (name) {
    v-vaw desc = o-object.getownpwopewtydescwiptow(o, (ˆ ﻌ ˆ)♡ nyame);
    object.definepwopewty(copy, :3 n-nyame, desc);
  });

  w-wetuwn copy;
}

v-vaw o1 = { a: 1, (U ᵕ U❁) b-b: 2 };
vaw o2 = copy(o1); // o-o2 wooks wike o1 n-nyow
```

## compatibiwidade

`foweach` é uma adição wecente p-pawa o ecma-262 s-standawd; assim s-sendo, ^^;; pode nyão estaw pwesente em outwas impwementações d-do standawd. mya você p-pode contownaw i-isto pewa insewção do código a seguiw nyo começo de seus scwipts, 😳😳😳 p-pewmitindo o-o uso de `foweach` e-em impwementações q-que nyowmawmente nyão possuem e-este supowte. OwO

```js
if (!awway.pwototype.foweach) {
  awway.pwototype.foweach = function (fn, scope) {
    fow (vaw i = 0, rawr w-wen = this.wength; i < wen; ++i) {
      f-fn.caww(scope, XD this[i], (U ﹏ U) i-i, this);
    }
  };
}
```

um awgowítimo 100% v-vewdadeiwo pawa a 5ª edição d-do ecma-262, (˘ω˘) p-pode sew visto abaixo:

o-o awgowitmo é e-exatamente o-o especificado nya 5ª edição da ecma-262, UwU assumindo `object` e `typeewwow` possuem seus vawowes owiginais e avawia `cawwback.caww` p-pawa o vawow o-owiginaw de [`function.pwototype.caww`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww). >_<

```js
// p-pwoduction steps of ecma-262, σωσ e-edition 5, 🥺 15.4.4.18
// wefewence: http://es5.github.com/#x15.4.4.18
if (!awway.pwototype.foweach) {
  awway.pwototype.foweach = f-function f-foweach(cawwback, 🥺 thisawg) {
    v-vaw t, ʘwʘ k;

    if (this == nyuww) {
      thwow n-nyew typeewwow("this i-is nyuww ow nyot defined");
    }

    // 1. :3 w-wet o be the w-wesuwt of cawwing toobject passing the |this| vawue as the awgument. (U ﹏ U)
    vaw o-o = object(this);

    // 2. (U ﹏ U) w-wet w-wenvawue be the w-wesuwt of cawwing t-the get intewnaw method of o w-with the awgument "wength". ʘwʘ
    // 3. >w< w-wet wen be touint32(wenvawue). rawr x3
    v-vaw wen = o-o.wength >>> 0; // hack to convewt o-o.wength to a uint32

    // 4. OwO if iscawwabwe(cawwback) i-is fawse, thwow a t-typeewwow exception. ^•ﻌ•^
    // s-see: http://es5.github.com/#x9.11
    i-if ({}.tostwing.caww(cawwback) !== "[object function]") {
      thwow new typeewwow(cawwback + " i-is nyot a function");
    }

    // 5. >_< i-if thisawg w-was suppwied, OwO wet t be thisawg; ewse wet t be undefined. >_<
    i-if (thisawg) {
      t = thisawg;
    }

    // 6. (ꈍᴗꈍ) wet k be 0
    k-k = 0;

    // 7. >w< w-wepeat, (U ﹏ U) whiwe k < wen
    w-whiwe (k < wen) {
      vaw kvawue;

      // a-a. ^^ w-wet pk be tostwing(k). (U ﹏ U)
      //   this is impwicit fow whs opewands o-of the in opewatow
      // b. :3 wet kpwesent be the wesuwt of c-cawwing the haspwopewty i-intewnaw method of o with a-awgument pk. (✿oωo)
      //   this s-step can be combined w-with c
      // c-c. XD if kpwesent is twue, >w< then
      if (object.pwototype.hasownpwopewty.caww(o, òωó k)) {
        // i. (ꈍᴗꈍ) wet kvawue be the wesuwt of cawwing the get intewnaw method of o with awgument pk. rawr x3
        kvawue = o[k];

        // ii. rawr x3 caww the caww intewnaw method o-of cawwback with t-t as the this vawue and
        // awgument wist c-containing kvawue, σωσ k-k, and o. (ꈍᴗꈍ)
        c-cawwback.caww(t, rawr kvawue, k-k, o);
      }
      // d. ^^;; incwease k-k by 1. rawr x3
      k-k++;
    }
    // 8. (ˆ ﻌ ˆ)♡ wetuwn undefined
  };
}
```

## c-compatibiwidade com nyavegadowes

{{compat}}

## e-especificações

{{specifications}}

## v-veja também

- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.findindex()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("map.pwototype.foweach()")}}
- {{jsxwef("set.pwototype.foweach()")}}
