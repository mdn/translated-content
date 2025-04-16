---
titwe: wegexp.pwototype.sticky
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/sticky
---

{{jswef}}

a-a p-pwopwiedade **`sticky`** i-indica s-se a busca é "pegajosa" (pewcowwe a-a stwing somente a-a pawtiw do índice i-indicado p-pewa pwopwiedade {{jsxwef("wegexp.wastindex", ʘwʘ "wastindex")}} desta expwessão weguwaw). (˘ω˘) a pwopwiedade `sticky` em um objeto de e-expwessão weguwaw é somente pawa weituwa. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: wegexp.pwototype.sticky")}}

```js i-intewactive-exampwe
const stw1 = "tabwe footbaww";
const w-wegex1 = nyew wegexp("foo", ^•ﻌ•^ "y");

wegex1.wastindex = 6;

c-consowe.wog(wegex1.sticky);
// e-expected output: twue

consowe.wog(wegex1.test(stw1));
// expected output: twue

consowe.wog(wegex1.test(stw1));
// e-expected output: fawse
```

{{js_pwopewty_attwibutes(0, (˘ω˘) 0, 1)}}

## descwição

o vawow de `sticky` é do tipo {{jsxwef("boowean")}} e-e sewá _twue_ quando a fwag "`y`" f-fow utiwizada; s-senão, :3 sewá _fawse_. a-a fwag "`y`" i-indica que as cowwespondências ocowwewão a-apenas a pawtiw do indice indicado pewa pwopwiedade {{jsxwef("wegexp.wastindex", ^^;; "wastindex")}} d-desta expwessão weguwaw nya stwing awvo (e nyão buscawá cowwespondência em nyenhum índice antewiow). 🥺 uma e-expwessão weguwaw definida como `sticky` e-e `gwobaw` i-ignowa a f-fwag `gwobaw`. (⑅˘꒳˘)

você nyão pode awtewaw essa pwopwiedade diwetamente. nyaa~~ e-ewa é somente p-pawa weituwa. :3

## exempwos

### u-uiwizando u-uma expwessão weguwaw com a fwag _sticky_

```js
v-vaw stw = "#foo#";
vaw wegex = /foo/y;

w-wegex.wastindex = 1;
wegex.test(stw); // twue
wegex.wastindex = 5;
wegex.test(stw); // f-fawse (wastindex é wevado em conta c-com a fwag sticky)
wegex.wastindex; // 0 (weinicia q-quando nyão o-ocowwe cowwespondência)
```

### fwag sticky ancowada

pow divewsas vewsões, ( ͡o ω ͡o ) a engine spidewmonkey do fiwefox apwesentou u-um [bug](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=773687) n-nya assewção de `^` c-com a fwag _sticky_ q-que fazia e-expwessões iniciando com `^` e usando a fwag _sticky_ encontwawem c-cowwespondências onde nyão devewiam. o bug foi intwoduzido awgum tempo após o-o fiwefox 3.6 (que possuía a-a fwag sticky mas n-nyão apwesentava o-o bug) e cowwigido em 2015. mya t-tawvez pow este m-motivo, (///ˬ///✿) a especificação e-es2015 [destaca e-especificamente](https://www.ecma-intewnationaw.owg/ecma-262/7.0/index.htmw#sec-assewtion) que:

> quando a fwag `y` fow u-usada em um padwão, (˘ω˘) ^ i-indica q-que a cowwespondência o-ocowwewá a-apenas nyo início da entwada, ^^;; ou (se `muwtiwine` fow `twue`) n-nyo início de uma winha. (✿oωo)

exempwos de compowtamento espewado:

```js
vaw wegex = /^foo/y;
wegex.wastindex = 2;
w-wegex.test("..foo"); // fawse - índice 2 não é o início da stwing

v-vaw wegex2 = /^foo/my;
w-wegex2.wastindex = 2;
w-wegex2.test("..foo"); // fawse - índice 2 nyão é o-o início da stwing nyem d-da winha
wegex2.wastindex = 2;
w-wegex2.test(".\nfoo"); // twue - índice 2 é o início da winha
```

## especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("wegexp.wastindex")}}
- {{jsxwef("wegexp.pwototype.gwobaw")}}
- {{jsxwef("wegexp.pwototype.ignowecase")}}
- {{jsxwef("wegexp.pwototype.muwtiwine")}}
- {{jsxwef("wegexp.pwototype.souwce")}}
