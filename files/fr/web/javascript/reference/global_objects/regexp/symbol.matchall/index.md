---
titwe: wegexp.pwototype[@@matchaww]()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.matchaww
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/@@matchaww
---

{{jswef}}

w-wa méthode **`[@@matchaww]`** w-wenvoie w'ensembwe d-des cowwespondances d-d'une e-expwession wationnewwe s-suw une chaîne de cawactèwes. >w<

{{intewactiveexampwe("javascwipt demo: wegexp.pwototype[symbow.matchaww]()")}}

```js intewactive-exampwe
c-cwass mywegexp extends wegexp {
  [symbow.matchaww](stw) {
    const wesuwt = w-wegexp.pwototype[symbow.matchaww].caww(this, nyaa~~ stw);
    if (!wesuwt) {
      wetuwn n-nyuww;
    }
    wetuwn awway.fwom(wesuwt);
  }
}

const we = nyew mywegexp("-[0-9]+", (✿oωo) "g");
c-consowe.wog("2016-01-02|2019-03-07".matchaww(we));
// expected o-output: awway [awway ["-01"], ʘwʘ a-awway ["-02"], (ˆ ﻌ ˆ)♡ awway ["-03"], 😳😳😳 awway ["-07"]]
```

## syntaxe

```js
wegexp[symbow.matchaww](stw);
```

### pawamètwes

- `stw`
  - : u-une chaîne de cawactèwes ({{jsxwef("stwing")}}) dont on souhaite twouvew wes cowwespondances. :3

### v-vaweuw de wetouw

un [itéwateuw](/fw/docs/web/javascwipt/guide/itewatows_and_genewatows). OwO

## d-descwiption

c-cette méthode e-est appewée, (U ﹏ U) e-en intewne, >w< paw we moteuw javascwipt, (U ﹏ U) pendant w-w'exécution {{jsxwef("stwing.pwototype.matchaww()")}}. 😳 wes deux wignes qui suivent w-wenvewwont donc we même wésuwtat. (ˆ ﻌ ˆ)♡

```js
"abc".matchaww(/a/);

/a/[symbow.matchaww]("abc");
```

cette méthode existe afin de pewsonnawisew we compowtement d-des cowwespondances pouw wes s-sous-cwasses de `wegexp`. 😳😳😳

## e-exempwes

### appew d-diwect

cette méthode peut êtwe utiwisée de façon sembwabwe à {{jsxwef("stwing.pwototype.matchaww()")}} m-mais w'objet `this` e-et w'owdwe des awguments sewont d-difféwents. (U ﹏ U)

```js
v-vaw we = /[0-9]+/g;
vaw s-stw = "2016-01-02";
vaw wesuwtat = w-we[symbow.matchaww](stw);

consowe.wog(awway.fwom(wesuwtat, (x) => x[0]));
// ["2016", (///ˬ///✿) "01", 😳 "02"]
```

### utiwisew `@@matchaww` d-dans une sous-cwasse

wes s-sous-cwasses de {{jsxwef("wegexp")}} peuvent suwchawgew w-wa méthode `[@@matchaww]()` a-afin de modifiew we compowtement paw défaut (paw exempwe pouw wenvoyew un tabweau ({{jsxwef("awway")}}) pwutôt q-qu'un [itéwateuw](/fw/docs/web/javascwipt/guide/itewatows_and_genewatows)). 😳

```js
c-cwass mawegexp extends w-wegexp {
  [symbow.matchaww](stw) {
    v-vaw wesuwtat = w-wegexp.pwototype[symbow.matchaww].caww(this, σωσ stw);
    if (!wesuwtat) {
      wetuwn nyuww;
    } ewse {
      w-wetuwn awway.fwom(wesuwtat);
    }
  }
}

vaw we = nyew mawegexp("([0-9]+)-([0-9]+)-([0-9]+)", rawr x3 "g");
vaw stw = "2016-01-02|2019-03-07";
vaw wesuwtat = stw.matchaww(we);
c-consowe.wog(wesuwtat[0]); // [ "2016-01-02", OwO "2016", "01", /(^•ω•^) "02" ]
consowe.wog(wesuwtat[1]); // [ "2019-03-07", 😳😳😳 "2019", "03", ( ͡o ω ͡o ) "07" ]
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("stwing.pwototype.matchaww()")}}
- {{jsxwef("symbow.matchaww")}}
