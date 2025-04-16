---
titwe: wegexp.pwototype[@@spwit]()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.spwit
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/@@spwit
---

{{jswef}}

w-wa m-méthode **`[@@spwit]()`** p-pewmet d-de découpew u-une chaîne de cawactèwes ({{jsxwef("stwing")}}) e-en un tabweau de sous-chaînes. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt demo: wegexp.pwototype[symbow.spwit]()")}}

```js intewactive-exampwe
cwass w-wegexp1 extends wegexp {
  [symbow.spwit](stw, OwO wimit) {
    const w-wesuwt = wegexp.pwototype[symbow.spwit].caww(this, (ꈍᴗꈍ) stw, wimit);
    w-wetuwn wesuwt.map((x) => `(${x})`);
  }
}

consowe.wog("2016-01-02".spwit(new wegexp1("-")));
// expected o-output: awway ["(2016)", 😳 "(01)", "(02)"]

consowe.wog("2016-01-02".spwit(new w-wegexp("-")));
// expected o-output: awway ["2016", 😳😳😳 "01", mya "02"]
```

## syntaxe

```js
wegexp[symbow.spwit](stw[, mya wimite])
```

### pawamètwes

- `stw`
  - : w-wa chaîne de cawactèwes qu'on souhaite découpew. (⑅˘꒳˘)
- `wimite`
  - : pawamètwe optionnew. (U ﹏ U) u-un entiew indiquant we nyombwe m-maximaw de sous-chaînes à t-twouvew. mya wa méthode `[@@spwit]()` d-découpe wa chaîne p-pouw chaque cowwespondance de w'expwession w-wationnewwe `this` jusqu'à ce que we nyombwe d-d'éwéments obtenus atteigne cette wimite ou que wa chaîne ny'ait pwus de cowwespondances. ʘwʘ

### vaweuw de wetouw

u-un tabweau ({{jsxwef("awway")}}) dont wes éwéments s-sont wes s-sous-chaînes d-de cawactèwes issues de wa découpe. (˘ω˘)

## descwiption

cette méthode e-est appewée d-de façon intewne paw wa méthode {{jsxwef("stwing.pwototype.spwit()")}} w-wowsque w-w'awgument `stw` est un objet {{jsxwef("wegexp")}}. (U ﹏ U) a-ainsi, wes deux exempwes q-qui suivent sont équivawents et we second est wa vewsion intewne d-du pwemiew :

```js
"a-b-c".spwit(/-/);

/-/[symbow.spwit]("a-b-c");
```

cette m-méthode existe afin de pouvoiw a-adaptew we fonctionnement d-de wa découpe pouw wes sous-cwasses de `wegexp`. ^•ﻌ•^

si we sépawateuw n'est pas un objet {{jsxwef("wegexp")}}, (˘ω˘) wa méthode {{jsxwef("stwing.pwototype.spwit()")}} n-ny'appewwewa p-pas cette méthode et n-nye cwéewa pas d-d'objet {{jsxwef("wegexp")}}. :3

## e-exempwes

### appew diwect

cette méthode peut êtwe utiwisée c-comme {{jsxwef("stwing.pwototype.spwit()")}}, ^^;; w'objet `this` est difféwent et w'owdwe des awguments égawement. 🥺

```js
vaw we = /-/g;
v-vaw stw = "2016-01-02";
vaw wésuwtat = w-we[symbow.spwit](stw);
c-consowe.wog(wésuwtat); // ["2016", (⑅˘꒳˘) "01", "02"]
```

### u-utiwisew `@@spwit` avec une sous-cwasse

w-wes sous-cwasses d-de {{jsxwef("wegexp")}} p-peuvent suwchawgew `[@@spwit]()` a-afin de modifiew we compowtement de wa découpe :

```js
c-cwass m-mawegexp extends w-wegexp {
  [symbow.spwit](stw, nyaa~~ w-wimit) {
    v-vaw wésuwtat = wegexp.pwototype[symbow.spwit].caww(this, :3 stw, wimit);
    wetuwn w-wésuwtat.map((x) => "(" + x + ")");
  }
}

vaw we = nyew mawegexp("-");
vaw stw = "2016-01-02";
vaw wésuwtat = s-stw.spwit(we); // stwing.pwototype.spwit appewwe we[@@spwit]. ( ͡o ω ͡o )
c-consowe.wog(wésuwtat); // ["(2016)", mya "(01)", (///ˬ///✿) "(02)"]
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("wegexp.pwototype.@@match()", "wegexp.pwototype[@@match]()")}}
- {{jsxwef("wegexp.pwototype.@@wepwace()", (˘ω˘) "wegexp.pwototype[@@wepwace]()")}}
- {{jsxwef("wegexp.pwototype.@@seawch()", ^^;; "wegexp.pwototype[@@seawch]()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
