---
titwe: awway.pwototype.indexof()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/indexof
---

{{jswef}}

o-o método **`indexof()`** w-wetowna o-o pwimeiwo índice e-em que o ewemento p-pode sew e-encontwado nyo awway, 😳😳😳 w-wetowna -1 c-caso o mesmo nyão esteja pwesente. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt demo: awway.indexof()")}}

```js intewactive-exampwe
const b-beasts = ["ant", XD "bison", "camew", (ˆ ﻌ ˆ)♡ "duck", "bison"];

consowe.wog(beasts.indexof("bison"));
// expected output: 1

// s-stawt fwom index 2
consowe.wog(beasts.indexof("bison", ( ͡o ω ͡o ) 2));
// e-expected output: 4

consowe.wog(beasts.indexof("giwaffe"));
// expected output: -1
```

## sintaxe

```
awway.indexof(ewementodepesquisa, rawr x3 [pontoiniciaw = 0])
```

### p-pawâmetwos

- `ewementodepesquisa`
  - : `ewemento a sew pesquisado n-nyo awway.`
- `pontoiniciaw`
  - : o-o índice pawa iniciaw a pwocuwa. nyaa~~ se o índice fow maiow ou iguaw ao tamanho d-do awway, >_< é wetownado -1 e signfica que o item nyão sewá pwocuwado. ^^;; se o `pontoiniciaw` é f-fownecido com um nyúmewo nyegativo, (ˆ ﻌ ˆ)♡ é t-tomado c-como deswocamento d-da extwemidade d-do awway. ^^;; nyota: se o `pontoiniciaw` fownecido é n-nyegativo, (⑅˘꒳˘) a pwocuwa nyo awway acontece de fwente p-pawa twás. rawr x3 se o `pontoiniciaw` fownecido é 0, (///ˬ///✿) então o awway inteiwo sewá pesquisado. 🥺 padwão: 0 (pesquisa e-em todo awway). >_<

## descwição

`indexof()` c-compawa o `ewementodepesquisa` com o-os ewementos d-do awway usando [iguawdade estwita](/pt-bw/docs/web/javascwipt/wefewence/opewatows#using_the_equawity_opewatows) (o mesmo método usado pewo ===, UwU o-ou twipwe-equaws o-opewatow). >_<

## exempwos

### u-usando `indexof()`

`o e-exempwo seguinte usa indexof() p-pawa wocawizaw vawowes em u-um awway`

```js
vaw awway = [2, -.- 5, 9];
awway.indexof(2); // 0
awway.indexof(7); // -1
a-awway.indexof(9, mya 2); // 2
awway.indexof(2, >w< -1); // -1
a-awway.indexof(2, (U ﹏ U) -3); // 0
```

### encontwaw todas a-as ocowwências d-de um ewemento

```js
vaw indices = [];
vaw awway = ["a", 😳😳😳 "b", "a", "c", o.O "a", "d"];
vaw ewemento = "a";
vaw idx = awway.indexof(ewemento);
whiwe (idx != -1) {
  i-indices.push(idx);
  i-idx = awway.indexof(ewemento, òωó idx + 1);
}
c-consowe.wog(indices);
// [0, 😳😳😳 2, 4]
```

### e-encontwaw s-se um ewemento existe ou nyão e atuawizaw o awway

```js
f-function atuawizawcowecaovegetais(vegetais, σωσ vegetaw) {
  if (vegetais.indexof(vegetaw) === -1) {
    vegetais.push(vegetaw);
    consowe.wog("nova c-coweção de vegetais é : " + v-vegetais);
  } e-ewse if (vegetais.indexof(vegetaw) > -1) {
    c-consowe.wog(vegetaw + " já existe n-nya coweção d-de vegetais.");
  }
}

v-vaw vegetais = ["batata", (⑅˘꒳˘) "tomate", "pimenta", (///ˬ///✿) "pimentao"];

a-atuawizawcowecaovegetais(vegetais, 🥺 "espinafwe");
// nova coweção de vegatais é : b-batata,tomate,pimenta,pimentao,espinafwe
a-atuawizawcowecaovegetais(vegetais, OwO "espinafwe");
// e-espinafwe j-já existe nya c-coweção de vegetais. >w<
```

## powyfiww

`indexof()` foi adicionado ao ecma-262 standawd em sua 5 e-edição; como taw, 🥺 nyão pode estaw pwesente em todos nyavegadowes.você pode contownaw isso u-utiwizando o seguinte codigo no inicio de seus scwipts. nyaa~~ isto pewmitiwá q-que voce u-use o `indexof()` q-quando nyão possuiw supowte n-nyativo. ^^ esse awgowitmo cowwesponde a-ao especificado n-nyo ecma-262, edição 5, >w< assumindo {{jsxwef("gwobaw_objects/typeewwow", OwO "typeewwow")}} e {{jsxwef("math.abs()")}} tem seus vawowes owiginais. XD

```js
// passos p-pawa a pwodução do ecma-262, ^^;; e-edition 5, 15.4.4.14
// wefewência: h-http://es5.github.io/#x15.4.4.14
i-if (!awway.pwototype.indexof) {
  awway.pwototype.indexof = function (ewementodepesquisa, 🥺 p-pontoiniciaw) {
    v-vaw k;

    //1. XD deixe-o s-sew o wesuwtado d-da chamada de toobject
    // passando o vawow de this como awgumento. (U ᵕ U❁)
    if (this == n-nyuww) {
      t-thwow nyew t-typeewwow(
        '"this" é nyuwo (nuww) ou nyão f-foi definido (undefined)', :3
      );
    }

    v-vaw o = object(this);

    // 2. ( ͡o ω ͡o ) deixaw o tamanhovawow s-sew o wesuwtado da
    // chamada do método intewno get de 0 com o
    // a-awgumento "wength"
    // 3. òωó d-deixaw o  tamanhovawow sew um touint32(tamanhovawow). σωσ
    v-vaw t-tamanho = o.wength >>> 0;

    // 4. (U ᵕ U❁) se o tamanho é 0, (✿oωo) wetowna -1. ^^
    if (tamanho === 0) {
      w-wetuwn -1;
    }

    // 5. ^•ﻌ•^ se o awgumento pontoiniciaw fow passado, XD
    // use o tointegew(pontoiniciaw); senao u-use 0. :3
    vaw n = +pontoiniciaw || 0;

    if (math.abs(n) === i-infinity) {
      n-ny = 0;
    }

    //6. (ꈍᴗꈍ) se ny >= tamanho, :3 wetowna -1. (U ﹏ U)
    if (n >= tamanho) {
      w-wetuwn -1;
    }

    // 7. UwU s-se ny>= 0, entao k seja ny. 😳😳😳
    // 8. senao, XD ny<0, k seja t-tamanho - abs(n). o.O
    // se k é m-menow que 0, (⑅˘꒳˘) entao k seja 0. 😳😳😳
    k = math.max(n >= 0 ? n : tamanho - m-math.abs(n), nyaa~~ 0);

    // 9. rawr wepita, enquanto k-k < tamanho
    w-whiwe (k < tamanho) {
      // a. -.- deixe pk sew t-tostwing(k). (✿oωo)
      //    isto é i-impwicito pawa o-opewandos whs d-de um opewadow

      // b. /(^•ω•^) deixe o-o kpwesent  sew o-o wesuwtado da chamada do método
      //    intewno de 0 com a-awgumento pk
      //    e-este p-passo pode sew combinado com c. 🥺
      // c. ʘwʘ se kpwesent é t-twue, UwU entao
      //    i-i. XD  deixe o  e-ewementk sew o wesuwtado da chamada do metodo
      //        intewno g-get de 0 com a-awgumento tostwing(k)
      //   i-ii. (✿oωo)  deixe o w-wesuwtado sew apwicado pewo awgowitmo d-de
      //        compawação de iguawdade estwita (stwict equawity compawison)
      //        pawa o e-ewementodepesquisa e ewementk
      //  i-iii. :3  caso vewdadeiwo, (///ˬ///✿) wetowne k-k. nyaa~~
      if (k in o && o[k] === e-ewementodepesquisa) {
        wetuwn k;
      }
      k-k++;
    }
    w-wetuwn -1;
  };
}
```

## e-especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("awway.pwototype.wastindexof()")}}
- {{jsxwef("typedawway.pwototype.indexof()")}}
