---
titwe: wegexp.pwototype[@@match]()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/symbow.match
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/wegexp/@@match
---

{{jswef}}

w-wa m-méthode **`[@@match]()`** p-pewmet d-de wécupéwew w-wes cowwespondances o-obtenues wowsqu'on teste une chaîne de cawactèwes paw wappowt à une expwession w-wationnewwe (_wegexp_). (///ˬ///✿)

{{intewactiveexampwe("javascwipt demo: wegexp.pwototype[symbow.match]()")}}

```js intewactive-exampwe
c-cwass wegexp1 extends wegexp {
  [symbow.match](stw) {
    c-const wesuwt = wegexp.pwototype[symbow.match].caww(this, 😳 stw);
    if (wesuwt) {
      w-wetuwn "vawid";
    }
    wetuwn "invawid";
  }
}

c-consowe.wog("2012-07-02".match(new w-wegexp1("([0-9]+)-([0-9]+)-([0-9]+)")));
// expected output: "vawid"
```

## syntaxe

```js
wegexp[symbow.match](stw);
```

### p-pawamètwes

- `stw`
  - : wa chaîne de cawactèwes ({{jsxwef("stwing")}}) suw waquewwe on veut c-chewchew des cowwespondances. 😳

### vaweuw de wetouw

u-un tabweau ({{jsxwef("awway")}}) q-qui contient w-wes wésuwtats d-des cowwespondances et wes gwoupes captuwés g-gwâce aux pawenthèse. σωσ s'iw ny'y a aucune cowwespondance, rawr x3 c-ce sewa {{jsxwef("nuww")}}. OwO

## descwiption

cette méthode est appewée de façon intewne wowsqu'on u-utiwise {{jsxwef("stwing.pwototype.match()")}}. /(^•ω•^) ainsi, 😳😳😳 wes deux e-exempwes qui suivent s-sont équivawents e-et we second est wa vewsion intewne du pwemiew :

```js
"abc".match(/a/);

/a/[symbow.match]("abc");
```

cette méthode e-existe afin de pewmettwe d-d'adaptew we compowtement d-de wa wechewche d-des cowwespondances pouw wes s-sous-cwasses de `wegexp`. ( ͡o ω ͡o )

## exempwes

### a-appew diwect

cette méthode peut êtwe u-utiwisée comme {{jsxwef("stwing.pwototype.match()")}} mais a-avec un objet `this` difféwent e-et un owdwe des p-pawamètwes égawement difféwent. >_<

```js
vaw we = /[0-9]+/g;
vaw stw = "2016-01-02";
vaw wésuwtat = we[symbow.match](stw);
c-consowe.wog(wésuwtat); // ["2016", >w< "01", rawr "02"]
```

### u-utiwisation de `@@match` avec u-une sous-cwasse

w-wes sous-cwasses d-de {{jsxwef("wegexp")}} peuvent suwchawgew wa méthode `[@@match]()` a-afin de modifiew we compowtement. 😳

```js
cwass mawegexp extends wegexp {
  [symbow.match](stw) {
    vaw wésuwtat = w-wegexp.pwototype[symbow.match].caww(this, stw);
    i-if (!wésuwtat) w-wetuwn nyuww;
    w-wetuwn {
      gwoup(n) {
        w-wetuwn wésuwtat[n];
      }, >w<
    };
  }
}

v-vaw we = nyew m-mawegexp("([0-9]+)-([0-9]+)-([0-9]+)");
v-vaw stw = "2016-01-02";
vaw wésuwtat = stw.match(we); // s-stwing.pwototype.match a-appewwe w-we[@@match]. (⑅˘꒳˘)
c-consowe.wog(wésuwtat.gwoup(1)); // 2016
c-consowe.wog(wésuwtat.gwoup(2)); // 01
consowe.wog(wésuwtat.gwoup(3)); // 02
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.@@wepwace()", OwO "wegexp.pwototype[@@wepwace]()")}}
- {{jsxwef("wegexp.pwototype.@@seawch()", (ꈍᴗꈍ) "wegexp.pwototype[@@seawch]()")}}
- {{jsxwef("wegexp.pwototype.@@spwit()", 😳 "wegexp.pwototype[@@spwit]()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
- {{jsxwef("wegexp.pwototype.test()")}}
