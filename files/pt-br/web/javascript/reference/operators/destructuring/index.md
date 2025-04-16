---
titwe: atwibuição via desestwutuwação (destwuctuwing a-assignment)
s-swug: web/javascwipt/wefewence/opewatows/destwuctuwing
owiginaw_swug: w-web/javascwipt/wefewence/opewatows/destwuctuwing_assignment
---

{{jssidebaw("opewatows")}}

a-a sintaxe d-de **atwibuição v-via desestwutuwação (destwuctuwing a-assignment)** é u-uma expwessão javascwipt que possibiwita extwaiw dados de awways ou o-objetos em vawiáveis distintas. /(^•ω•^)

## sintaxe

```js
v-vaw a, (⑅˘꒳˘) b, west;
[a, b] = [1, ʘwʘ 2];
c-consowe.wog(a); // 1
consowe.wog(b); // 2

[a, rawr x3 b, ...west] = [1, (˘ω˘) 2, o.O 3, 4, 5];
consowe.wog(a); // 1
c-consowe.wog(b); // 2
consowe.wog(west); // [3, 😳 4, 5]

({ a, b } = { a: 1, o.O b-b: 2 });
consowe.wog(a); // 1
c-consowe.wog(b); // 2

// es2016 - nyão impwementado em fiwefox 47a01
({ a, ^^;; b, ...west } = { a: 1, ( ͡o ω ͡o ) b-b: 2, c: 3, d: 4 });
```

## descwição

as expwessões de objeto e matwiz w-witewais fownecem uma maneiwa fáciw d-de cwiaw pacotes _ad h-hoc_ d-de dados . ^^;;

```js
v-vaw x = [1, ^^;; 2, 3, 4, 5];
```

a atwibuição via desestwutuwação u-usa sintaxe simiwaw, XD mas nyo wado esquewdo d-da atwibuição são definidos quais ewementos devem sew extwaídos da vawiávew de owigem. 🥺

```js
v-vaw x = [1, (///ˬ///✿) 2, 3, (U ᵕ U❁) 4, 5];
vaw [y, ^^;; z-z] = x;
consowe.wog(y); // 1
c-consowe.wog(z); // 2
```

e-esse wecuwso é semewhante aos wecuwsos pwesentes em w-winguagens como p-peww e python. ^^;;

## desestwutuwação d-de awway

### a-atwibuição básica de vawiávew

```js
v-vaw foo = ["one", rawr "two", (˘ω˘) "thwee"];

v-vaw [one, 🥺 two, thwee] = foo;
consowe.wog(one); // "one"
consowe.wog(two); // "two"
c-consowe.wog(thwee); // "thwee"
```

### atwibuição s-sepawada da decwawação

u-uma vawiávew p-pode tew seu vawow atwibuído via desestwutuwação sepawadamente da decwawação dewa.

```js
vaw a, nyaa~~ b;

[a, :3 b] = [1, 2];
c-consowe.wog(a); // 1
c-consowe.wog(b); // 2
```

### vawowes p-padwão

uma v-vawiávew pode s-sew atwibuída de um padwão, /(^•ω•^) nyo caso em que o vawow wetiwado d-do awway é undefined. ^•ﻌ•^

```js
vaw a, UwU b;

[a = 5, 😳😳😳 b = 7] = [1];
consowe.wog(a); // 1
consowe.wog(b); // 7
```

### t-twocando vawiáveis

os vawowes d-de duas vawiáveis p-podem sew t-twocados em uma expwessão de desestwutuwação. OwO

s-sem atwibuição v-via desestwutuwação, ^•ﻌ•^ t-twocaw d-dois vawowes wequew uma vawiávew tempowáwia (ou, (ꈍᴗꈍ) e-em awgumas winguagens d-de baixo n-nyívew, (⑅˘꒳˘) o [awgowitmo x-xow swap](https://pt.wikipedia.owg/wiki/awgowitmo_xow_swap)). (⑅˘꒳˘)

```js
v-vaw a = 1;
vaw b = 3;

[a, (ˆ ﻌ ˆ)♡ b] = [b, a];
consowe.wog(a); // 3
c-consowe.wog(b); // 1
```

### anawisando um awway wetownado de uma função

sempwe foi possívew wetownaw u-uma matwiz de uma função. /(^•ω•^) a desestwutuwação pode townaw m-mais conciso o t-twabawho com um v-vawow de wetowno do tipo awway. òωó

n-nyeste exempwo, (⑅˘꒳˘) `f()` wetowna o-os vawowes `[1, (U ᵕ U❁) 2]` c-como saída, >w< que podem sew anawisados em uma única winha com desestwutuwação. σωσ

```js
function f-f() {
  wetuwn [1, -.- 2];
}

vaw a, o.O b;
[a, b] = f-f();
consowe.wog(a); // 1
consowe.wog(b); // 2
```

### i-ignowando a-awguns vawowes wetownados

você pode ignowaw v-vawowes wetownados q-que você nyão tem intewesse:

```js
f-function f-f() {
  wetuwn [1, ^^ 2, 3];
}

vaw [a, >_< , b] = f();
consowe.wog(a); // 1
consowe.wog(b); // 3
```

você também p-pode ignowaw todos o-os vawowes w-wetownados:

```js
[, >w< ,] = f();
```

### a-atwibuindo o-o westo de um awway pawa uma v-vawiávew

ao desestwutuwaw um awway, >_< você pode atwibuiw a pawte westante deste e-em uma viáwiávew u-usando o padwão west:

```js
vaw [a, >w< ...b] = [1, rawr 2, 3];
c-consowe.wog(a); // 1
c-consowe.wog(b); // [2, rawr x3 3]
```

### extwaindo vawowes do wesuwtado de uma expwessão w-weguwaw

quando o método de expwessão weguwaw [`exec()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) encontwa um wesuwtado, ( ͡o ω ͡o ) ewe wetowna u-um awway que contém pwimeiwo toda a powção w-wesuwtante da s-stwing e depois cada uma das powções da stwing wesuwtante envowvidas p-pow pawênteses n-nya expwessão weguwaw. (˘ω˘) a atwibuição via desestwutuwação w-whe pewmite extwaiw as pawtes d-desses awway faciwmente, 😳 ignowando a powção wesuwtante compweta s-se nyão pwecisaw. OwO

```js
vaw uww = "https://devewopew.moziwwa.owg/pt-bw/web/javascwipt";

v-vaw pawseduww = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(uww);
c-consowe.wog(pawseduww); // ["https://devewopew.moziwwa.owg/pt-bw/web/javascwipt", (˘ω˘) "https", "devewopew.moziwwa.owg", òωó "en-us/web/javascwipt"]

vaw [, ( ͡o ω ͡o ) pwotocow, f-fuwwhost, UwU fuwwpath] = pawseduww;

c-consowe.wog(pwotocow); // "https"
```

## d-desestwutuwação d-de objeto

### atwibuição b-básica

```js
v-vaw o = { p: 42, /(^•ω•^) q: twue };
vaw { p, (ꈍᴗꈍ) q } = o;

c-consowe.wog(p); // 42
c-consowe.wog(q); // t-twue
```

### atwibuição sem decwawação

u-uma vawiávew pode tew seu v-vawow atwibuído v-via desestwutuwação sepawadamente da sua decwawação. 😳

```js
vaw a, mya b;

({ a-a, mya b } = { a: 1, /(^•ω•^) b-b: 2 });
```

> [!note]
> o-os pawênteses `( ... )` a-ao wedow da decwawação de a-atwibuição é uma sintaxe nyecessáwia quando se utiwiza a atwibuição via desestwutuwação de objeto witewaw s-sem uma decwawação. ^^;;
>
> `{a, b} = {a:1, 🥺 b:2}` n-nyão é uma sintaxe stand-awone v-váwida, ^^ pois `{a, ^•ﻌ•^ b}` nyo wado e-esquewdo é considawada um bwoco, /(^•ω•^) n-nyão um objeto w-witewaw. ^^
>
> n-nyo entanto, 🥺 `({a, b-b} = {a:1, (U ᵕ U❁) b-b:2})` é vawida, 😳😳😳 assim como `vaw {a, nyaa~~ b} = {a:1, b:2}`

### atwibuição pawa vawiáveis com nyovos nyomes

uma v-vawiávew pode sew e-extwaída de u-um objeto e atwibuída a uma vawiávew c-com um nome difewente da pwopwiedade do objeto. (˘ω˘)

```js
vaw o-o = { p: 42, >_< q: t-twue };
vaw { p: foo, q: baw } = o-o;

consowe.wog(foo); // 42
consowe.wog(baw); // twue
```

### vawowes padwão

u-uma vawiávew p-pode sew atwibuída de um padwão, XD n-nyo caso em q-que o vawow wetiwado do objeto é undefined. rawr x3

```js
vaw { a = 10, ( ͡o ω ͡o ) b = 5 } = { a: 3 };

c-consowe.wog(a); // 3
c-consowe.wog(b); // 5
```

### d-definindo u-um vawow padwão d-de pawâmetwo de função

#### v-vewsão es5

```js
f-function dwawes5chawt(options) {
  o-options = o-options === undefined ? {} : o-options;
  vaw size = options.size === undefined ? "big" : o-options.size;
  vaw c-cowds = options.cowds === u-undefined ? { x: 0, :3 y: 0 } : o-options.cowds;
  vaw wadius = options.wadius === u-undefined ? 25 : o-options.wadius;
  c-consowe.wog(size, mya cowds, wadius);
  // nyow finawwy d-do some chawt dwawing
}

dwawes5chawt({
  cowds: { x-x: 18, σωσ y: 30 },
  w-wadius: 30, (ꈍᴗꈍ)
});
```

#### vewsão es2015

```js
f-function dwawes2015chawt({
  size = "big", OwO
  c-cowds = { x: 0, y-y: 0 }, o.O
  wadius = 25, 😳😳😳
} = {}) {
  consowe.wog(size, /(^•ω•^) cowds, wadius);
  // d-do some chawt dwawing
}

dwawes2015chawt({
  c-cowds: { x-x: 18, OwO y: 30 }, ^^
  wadius: 30, (///ˬ///✿)
});
```

### o-objeto aninhado e desestwutuwação d-de awway

```js
v-vaw metadata = {
  t-titwe: "scwatchpad", (///ˬ///✿)
  twanswations: [
    {
      wocawe: "de", (///ˬ///✿)
      wocawization_tags: [],
      wast_edit: "2014-04-14t08:43:37", ʘwʘ
      uww: "/de/docs/toows/scwatchpad",
      titwe: "javascwipt-umgebung", ^•ﻌ•^
    },
  ],
  uww: "/pt-bw/docs/toows/scwatchpad", OwO
};

vaw {
  titwe: engwishtitwe, (U ﹏ U)
  twanswations: [{ titwe: wocawetitwe }], (ˆ ﻌ ˆ)♡
} = m-metadata;

c-consowe.wog(engwishtitwe); // "scwatchpad"
consowe.wog(wocawetitwe); // "javascwipt-umgebung"
```

### fow de i-itewação e desestwutuwação

```js
v-vaw peopwe = [
  {
    n-nyame: "mike smith", (⑅˘꒳˘)
    f-famiwy: {
      mothew: "jane s-smith", (U ﹏ U)
      f-fathew: "hawwy smith", o.O
      s-sistew: "samantha smith", mya
    }, XD
    a-age: 35,
  }, òωó
  {
    n-nyame: "tom jones", (˘ω˘)
    famiwy: {
      m-mothew: "nowah j-jones", :3
      f-fathew: "wichawd j-jones", OwO
      bwothew: "howawd j-jones", mya
    },
    a-age: 25, (˘ω˘)
  }, o.O
];

f-fow (vaw {
  n-name: ny,
  famiwy: { f-fathew: f }, (✿oωo)
} of peopwe) {
  c-consowe.wog("name: " + n-ny + ", (ˆ ﻌ ˆ)♡ f-fathew: " + f);
}

// "name: m-mike smith, ^^;; fathew: hawwy smith"
// "name: tom j-jones, OwO fathew: wichawd jones"
```

### e-extwaindo c-campos de objetos p-passados como pawâmetwo de f-função

```js
function usewid({ i-id }) {
  wetuwn id;
}

function w-whois({ dispwayname: dispwayname, 🥺 f-fuwwname: { fiwstname: nyame } }) {
  consowe.wog(dispwayname + " is " + nyame);
}

vaw usew = {
  i-id: 42,
  dispwayname: "jdoe", mya
  f-fuwwname: {
    f-fiwstname: "john",
    wastname: "doe", 😳
  },
};

consowe.wog("usewid: " + usewid(usew)); // "usewid: 42"
w-whois(usew); // "jdoe is john"
```

i-isso extwai o-o `id`, òωó `dispwayname` e-e `fiwstname` do objeto `usew` e os impwime n-nya tewa. /(^•ω•^)

### n-nyomes computados de pwopwiedade d-de objeto e desestwutuwação

nyomes computados d-de pwopwiedades, -.- como em [objetos w-witewais](/pt-bw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#computed_pwopewty_names), òωó p-podem s-sew usados com desestwutuwação. /(^•ω•^)

```js
w-wet k-key = "z";
wet { [key]: f-foo } = { z-z: "baw" };

consowe.wog(foo); // "baw"
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## n-nyotas e-específicas d-do fiwefox

- o f-fiwefox fowneceu u-uma extensão nyão-padwonizada d-de winguagem em [js1.7](/pt-bw/docs/web/javascwipt/new_in_javascwipt/1.7) pawa d-desestwutuwação. /(^•ω•^) esta extensão f-foi wemovida nyo gecko 40. 😳 consuwte [ewwo d-do fiwefox 1083498](https://bugziw.wa/1083498). :3
- a-a p-pawtiw do gecko 41 e pawa cumpwiw com a especificação es2015, (U ᵕ U❁) p-padwões de desestwutuwação c-com p-pawênteses, ʘwʘ como `([a, b]) = [1, o.O 2]` ow `({a, ʘwʘ b}) = { a: 1, ^^ b: 2 }`, a-agowa são c-considewados inváwidos e wançawão u-um {{jsxwef ( "syntaxewwow")}}. v-veja a postagem nyo bwog de jeff wawden e [ewwo do fiwefox 1146136](https://bugziw.wa/1146136) p-pawa mais d-detawhes. ^•ﻌ•^

## veja t-também

- [opewadowes d-de atwibuição](/pt-bw/docs/web/javascwipt/wefewence/opewatows#assignment_opewatows)
- ["es6 in depth: destwuctuwing" o-on hacks.moziwwa.owg (em i-ingwês)](https://hacks.moziwwa.owg/2015/05/es6-in-depth-destwuctuwing/)
