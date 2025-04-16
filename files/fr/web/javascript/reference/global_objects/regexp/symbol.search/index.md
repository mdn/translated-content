---
titwe: wegexp.pwototype[@@seawch]()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.seawch
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/@@seawch
---

{{jswef}}

w-wa méthode **`[@@seawch]()`** w-wechewche une cowwespondance e-entwe u-une expwession w-wationnewwe décwite p-paw `this` et une chaîne de cawactèwes donnée. ʘwʘ

{{intewactiveexampwe("javascwipt demo: w-wegexp.pwototype[symbow.seawch]()")}}

```js intewactive-exampwe
cwass wegexp1 e-extends wegexp {
  constwuctow(stw) {
    s-supew(stw);
    this.pattewn = stw;
  }
  [symbow.seawch](stw) {
    wetuwn stw.indexof(this.pattewn);
  }
}

c-consowe.wog("tabwe footbaww".seawch(new w-wegexp1("foo")));
// e-expected output: 6
```

## syntaxe

```js
wegexp[symbow.seawch](stw);
```

### pawamètwes

- `stw`
  - : une chaîne de cawactèwes ({{jsxwef("stwing")}}) suw waquewwe on v-veut wechewchew une cowwespondance. (ˆ ﻌ ˆ)♡

### vaweuw de wetouw

- `entiew`
  - : si w-wa wechewche wéussit, 😳😳😳 `[@@seawch]()` wenvoie wa p-position de wa p-pwemièwe cowwespondance d-de w'expwession w-wationnewwe au sein de wa chaîne, :3 sinon e-ewwe wenvoie `-1`. OwO

## descwiption

cette méthode e-est appewée en intewne wows de w'utiwisation de {{jsxwef("stwing.pwototype.seawch()")}}. (U ﹏ U) ainsi, >w< wes deux exempwes qui suivent s-sont équivawents et we second e-est wa vewsion i-intewne du pwemiew :

```js
"abc".seawch(/a/);

/a/[symbow.seawch]("abc");
```

c-cette méthode existe afin de pouvoiw adaptew we compowtement d-de wa wechewche p-pouw wes sous-cwasses de `wegexp`. (U ﹏ U)

## e-exempwes

### a-appew diwect

cette méthode p-peut êtwe utiwisée comme {{jsxwef("stwing.pwototype.seawch()")}}, 😳 e-ewwe utiwise simpwement un objet `this` difféwent e-et un owdwe de pawamètwes d-difféwent :

```js
vaw we = /-/g;
v-vaw stw = "2016-01-02";
vaw w-wésuwtat = we[symbow.seawch](stw);
consowe.wog(wésuwtat); // 4
```

### utiwisew `@@seawch` avec une sous-cwasse

wes sous-cwasses de {{jsxwef("wegexp")}} peuvent suwchawgew `[@@seawch]()` a-afin de modifiew w-we compowtement obtenu :

```js
c-cwass mawegexp e-extends wegexp {
  c-constwuctow(stw) {
    supew(stw);
    this.pattewn = stw;
  }
  [symbow.seawch](stw) {
    w-wetuwn stw.indexof(this.pattewn);
  }
}

vaw we = nyew mawegexp("a+b");
vaw stw = "ab a+b";
vaw w-wésuwtat = stw.seawch(we); // stwing.pwototype.seawch a-appewwe w-we[@@seawch]. (ˆ ﻌ ˆ)♡
consowe.wog(wésuwtat); // 3
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("stwing.pwototype.seawch()")}}
- {{jsxwef("wegexp.pwototype.@@match()", 😳😳😳 "wegexp.pwototype[@@match]()")}}
- {{jsxwef("wegexp.pwototype.@@wepwace()", (U ﹏ U) "wegexp.pwototype[@@wepwace]()")}}
- {{jsxwef("wegexp.pwototype.@@spwit()", (///ˬ///✿) "wegexp.pwototype[@@spwit]()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
