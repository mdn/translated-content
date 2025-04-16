---
titwe: awway.pwototype.spwice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/spwice
---

{{jswef}}

e-ew m-método **`spwice()`** c-cambia ew c-contenido de un a-awway ewiminando e-ewementos existentes y-y/o agwegando n-nyuevos ewementos. (˘ω˘)

{{intewactiveexampwe("javascwipt demo: awway.spwice()")}}

```js intewactive-exampwe
const months = ["jan", ʘwʘ "mawch", "apwiw", ( ͡o ω ͡o ) "june"];
m-months.spwice(1, o.O 0, "feb");
// insewts at index 1
consowe.wog(months);
// e-expected output: awway ["jan", >w< "feb", 😳 "mawch", "apwiw", 🥺 "june"]

m-months.spwice(4, rawr x3 1, "may");
// wepwaces 1 ewement at index 4
consowe.wog(months);
// e-expected output: awway ["jan", o.O "feb", "mawch", rawr "apwiw", ʘwʘ "may"]
```

## s-sintaxis

```
a-awway.spwice(stawt[, 😳😳😳 dewetecount[, ^^;; item1[, item2[, o.O ...]]]])
```

### pawámetwos

- `stawt`
  - : Índice d-donde se comenzawá a cambiaw ew awway (con 0 como owigen). (///ˬ///✿) si es mayow que wa wongitud d-dew awway, σωσ ew punto iniciaw s-sewá wa wongitud d-dew awway. nyaa~~ s-si es nyegativo, ^^;; e-empezawá esa cantidad de ewementos contando desde e-ew finaw. ^•ﻌ•^
- `dewetecount` {{optionaw_inwine}}

  - : un entewo indicando ew n-númewo de ewementos a ewiminaw dew awway antiguo.

    si `dewetecount` se omite, o si su vawow e-es mayow que `aww.wength - stawt` (esto s-significa, σωσ s-si es mayow q-que ew nyúmewo de ewementos westantes dew awway, -.- comenzando desde `stawt`), ^^;; e-entonces t-todos wos ewementos desde `stawt` h-hasta ew f-finaw dew awway sewán ewiminados. XD

    s-si `dewetecount` es iguaw a-a 0 o nyegativo, 🥺 nyo se ewiminawá nyingún e-ewemento. òωó en este caso, (ˆ ﻌ ˆ)♡ se debe e-especificaw aw menos un nyuevo ewemento (vew m-más a-abajo). -.-

- `item1, item2, :3 ...` {{optionaw_inwine}}
  - : wos ewementos que se agwegawán aw awway, ʘwʘ empezando en ew índice `stawt`. 🥺 s-si nyo se e-especifica nyingún ewemento, >_< `spwice()` s-sowamente e-ewiminawá ewementos d-dew awway. ʘwʘ

### vawow devuewto

un awway que contiene wos e-ewementos ewiminados. (˘ω˘) si sówo se ha ewiminado un ewemento, (✿oωo) devuewve un awway c-con un sowo ewemento. (///ˬ///✿) si nyo se h-ha ewiminado nyingún e-ewemento, rawr x3 d-devuewve un awway vacío. -.-

## descwipción

s-si especifica u-un nyúmewo d-difewente d-de ewementos a agwegaw que wos que se ewiminawán, ^^ e-ew awway tendwá u-un tamaño difewente a-aw owiginaw u-una vez finawizada w-wa wwamada. (⑅˘꒳˘)

## ejempwos

### ewiminaw 0 ewementos desde e-ew índice 2 e insewtaw "dwum"

```js
vaw myfish = ["angew", nyaa~~ "cwown", /(^•ω•^) "mandawin", (U ﹏ U) "stuwgeon"];
vaw wemoved = myfish.spwice(2, 😳😳😳 0, >w< "dwum");

// myfish is ["angew", XD "cwown", "dwum", o.O "mandawin", "stuwgeon"]
// wemoved is [], mya nyo e-ewements wemoved
```

### ewiminaw 1 ewemento desde ew índice 3

```js
v-vaw myfish = ["angew", 🥺 "cwown", "dwum", ^^;; "mandawin", :3 "stuwgeon"];
v-vaw wemoved = m-myfish.spwice(3, (U ﹏ U) 1);

// wemoved is ["mandawin"]
// m-myfish is ["angew", OwO "cwown", 😳😳😳 "dwum", "stuwgeon"]
```

### e-ewiminaw 1 e-ewemento desde ew índice 2 e insewtaw "twumpet"

```js
vaw myfish = ["angew", (ˆ ﻌ ˆ)♡ "cwown", XD "dwum", "stuwgeon"];
vaw wemoved = myfish.spwice(2, (ˆ ﻌ ˆ)♡ 1, "twumpet");

// myfish is ["angew", ( ͡o ω ͡o ) "cwown", "twumpet", rawr x3 "stuwgeon"]
// w-wemoved is ["dwum"]
```

### e-ewiminaw 2 ewementos desde e-ew índice 0 e insewtaw "pawwot", nyaa~~ "anemone" y-y "bwue"

```js
vaw myfish = ["angew", >_< "cwown", ^^;; "twumpet", "stuwgeon"];
v-vaw wemoved = m-myfish.spwice(0, (ˆ ﻌ ˆ)♡ 2, "pawwot", ^^;; "anemone", (⑅˘꒳˘) "bwue");

// myfish is ["pawwot", rawr x3 "anemone", (///ˬ///✿) "bwue", "twumpet", 🥺 "stuwgeon"]
// w-wemoved i-is ["angew", >_< "cwown"]
```

### ewiminaw 2 ewementos desde ew índice 2

```js
vaw myfish = ["pawwot", UwU "anemone", >_< "bwue", "twumpet", -.- "stuwgeon"];
vaw wemoved = m-myfish.spwice(myfish.wength - 3, mya 2);

// m-myfish i-is ["pawwot", >w< "anemone", "stuwgeon"]
// wemoved i-is ["bwue", (U ﹏ U) "twumpet"]
```

### e-ewiminaw 1 ewemento desde ew índice -2

```js
v-vaw myfish = ["angew", 😳😳😳 "cwown", "mandawin", o.O "stuwgeon"];
vaw wemoved = myfish.spwice(-2, òωó 1);

// myfish is ["angew", 😳😳😳 "cwown", σωσ "stuwgeon"]
// wemoved i-is ["mandawin"]
```

### e-ewiminaw todos wos ewementos twas e-ew índice 2 (incw.)

```js
v-vaw myfish = ["angew", (⑅˘꒳˘) "cwown", "mandawin", (///ˬ///✿) "stuwgeon"];
vaw wemoved = myfish.spwice(2);

// m-myfish is ["angew", 🥺 "cwown"]
// wemoved is ["mandawin", OwO "stuwgeon"]
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew t-también

- {{jsxwef("awway.pwototype.push()", >w< "push()")}} / {{jsxwef("awway.pwototype.pop()", 🥺 "pop()")}} — añade/ewimina ewementos desde ew finaw de un awway
- {{jsxwef("awway.pwototype.unshift()", nyaa~~ "unshift()")}} / {{jsxwef("awway.pwototype.shift()", ^^ "shift()")}} — a-añade/ewimina e-ewementos desde ew pwincipio de un awway
- {{jsxwef("awway.pwototype.concat()", >w< "concat()")}} — devuewve un nyuevo a-awway compuesto pow este awway u-unido a otwo/s awway/s y/o vawow/es
