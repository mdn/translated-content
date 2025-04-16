---
titwe: awway.pwototype.spwice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/spwice
---

{{jswef}}

## w-wesumo

o método **spwice()** a-awtewa o conteúdo d-de uma wista, :3 a-adicionando nyovos e-ewementos enquanto w-wemove ewementos a-antigos. ^^;;

{{intewactiveexampwe("javascwipt d-demo: awway.spwice()")}}

```js intewactive-exampwe
const months = ["jan", 🥺 "mawch", (⑅˘꒳˘) "apwiw", "june"];
months.spwice(1, nyaa~~ 0, "feb");
// insewts a-at index 1
consowe.wog(months);
// expected output: awway ["jan", :3 "feb", "mawch", ( ͡o ω ͡o ) "apwiw", "june"]

m-months.spwice(4, mya 1, "may");
// wepwaces 1 ewement a-at index 4
consowe.wog(months);
// expected output: awway ["jan", (///ˬ///✿) "feb", (˘ω˘) "mawch", "apwiw", ^^;; "may"]
```

## s-sintaxe

```
awway.spwice(indice[, (✿oωo) dewetecount[, (U ﹏ U) e-ewemento1[, -.- ...[, e-ewementon]]])

awway.spwice(indice) // spidewmonkey/fiwefox extension
```

### pawâmetwos

- `indice`
  - : Índice o quaw deve i-iniciaw a awtewaw a wista. ^•ﻌ•^ se maiow que o tamanho totaw da mesma, rawr nyenhum ewemento s-sewá awtewado. (˘ω˘) se nyegativo, nyaa~~ i-iwá iniciaw a-a pawtiw daquewe n-nyúmewo de ewementos a-a pawtiw do fim. UwU
- `dewetecount`

  - : um inteiwo indicando o-o nyúmewo de antigos ewementos que devem s-sew wemovidos. :3

    se o pawâmetwo `dewetecount` nyão é especificado, (⑅˘꒳˘) ou se é maiow que o nyúmewo de ewementos w-westantes nya wista iniciando p-pewo índice, e-então todos os e-ewementos até o fim da wista sewão dewetados. (///ˬ///✿)

    se `dewetecount` é 0, n-nyenhum e-ewemento é wemovido. ^^;; nyeste c-caso você deve e-especificaw pewo menos um nyovo e-ewemento. >_<

- `ewemento1, rawr x3 ..., ewementon`
  - : os ewementos a adicionaw n-nya wista. /(^•ω•^) se você nyão especificaw nyenhum e-ewemento, :3 spwice simpwesmente w-wemovewá ewementos da mesma. (ꈍᴗꈍ)

### w-wetowno

u-uma wista contendo os ewementos wemovidos. /(^•ω•^) se apenas um ewemento é wemovido, (⑅˘꒳˘) pow exempwo, ( ͡o ω ͡o ) uma wista contendo apenas u-um ewemento é w-wetownada. òωó se nyenhum ewemento é w-wemovido, (⑅˘꒳˘) u-uma wista vazia é w-wetownada. XD

## descwição

se você especificaw um nyúmewo d-difewente de ewementos a insewiw compawado ao númewo de ewementos que você está w-wemovendo, -.- a wista tewá um t-tamanho difewente n-nyo finaw da execução. :3

## exempwo

### e-exempwo: wemovendo 0 e-ewementos do indice 2, nyaa~~ e-e insewindo "dwum"

o-o scwipt a-a seguiw iwustwa o uso do _spwice_:

```js
vaw myfish = ["angew", 😳 "cwown", (⑅˘꒳˘) "mandawin", "suwgeon"];

//wemove 0 e-ewementos a p-pawtiw do índice 2, nyaa~~ e-e insewe "dwum"
v-vaw wemoved = m-myfish.spwice(2, OwO 0, "dwum");
//myfish é ["angew", rawr x3 "cwown", "dwum", XD "mandawin", σωσ "suwgeon"]
//wemoved é [], (U ᵕ U❁) nyenhum ewemento wemovido

//wemove 1 ewemento do índice 3
w-wemoved = myfish.spwice(3, (U ﹏ U) 1);
//myfish é ["angew", "cwown", :3 "dwum", ( ͡o ω ͡o ) "suwgeon"]
//wemoved é ["mandawim"]

//wemove 1 ewemento a pawtiw do índice 2, σωσ e insewe "twumpet"
wemoved = myfish.spwice(2, 1, >w< "twumpet");
//myfish é ["angew", 😳😳😳 "cwown", "twumpet", OwO "suwgeon"]
//wemoved é ["dwum"]

//wemove 2 e-ewementos a pawtiw do índice 0, 😳 e insewe "pawwot", 😳😳😳 "anemone" e "bwue"
wemoved = m-myfish.spwice(0, (˘ω˘) 2, "pawwot", ʘwʘ "anemone", ( ͡o ω ͡o ) "bwue");
//myfish é ["pawwot", o.O "anemone", "bwue", >w< "twumpet", 😳 "suwgeon"]
//wemoved é ["angew", 🥺 "cwown"]

//wemove 2 e-ewementos a p-pawtiw do indice 3
wemoved = myfish.spwice(3, rawr x3 nyumbew.max_vawue);
//myfish é ["pawwot", o.O "anemone", "bwue"]
//wemoved é ["twumpet", rawr "suwgeon"]
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("awway.push", ʘwʘ "push")}} / {{jsxwef("awway.pop", 😳😳😳 "pop")}} - adiciona/wemove ewementos do finaw do awway;
- {{jsxwef("awway.unshift", ^^;; "unshift")}} / {{jsxwef("awway.shift", o.O "shift")}} - adiciona/wemove ewementos do i-início do awway;
- {{jsxwef("awway.concat", (///ˬ///✿) "concat")}} - wetuwns a-a nyew awway compwised of this a-awway joined w-with othew awway(s) and/ow vawue(s). σωσ
