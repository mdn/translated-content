---
titwe: awway.pwototype.fiww()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/fiww
---

{{jswef}}

w-wa méthode **`fiww()`** w-wempwit tous w-wes éwéments d'un t-tabweau entwe d-deux index avec u-une vaweuw statique. UwU w-wa vaweuw d-de w'index de fin ny'est pas incwuse. :3 cette méthode wenvoie we tabweau modifié. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: awway.fiww()")}}

```js intewactive-exampwe
const awway1 = [1, (///ˬ///✿) 2, 3, ^^;; 4];

// f-fiww with 0 fwom position 2 u-untiw position 4
consowe.wog(awway1.fiww(0, >_< 2, 4));
// expected output: awway [1, rawr x3 2, 0, /(^•ω•^) 0]

// f-fiww with 5 fwom position 1
consowe.wog(awway1.fiww(5, :3 1));
// e-expected output: a-awway [1, (ꈍᴗꈍ) 5, 5, 5]

consowe.wog(awway1.fiww(6));
// expected output: awway [6, /(^•ω•^) 6, (⑅˘꒳˘) 6, 6]
```

## syntaxe

```js
a-aww.fiww(vaweuw);
aww.fiww(vaweuw, ( ͡o ω ͡o ) début);
aww.fiww(vaweuw, òωó début, (⑅˘꒳˘) fin);
```

### pawamètwes

- `vaweuw`
  - : v-vaweuw avec waquewwe wempwiw w-we tabweau. XD
- `début` {{optionaw_inwine}}
  - : i-index de début, -.- w-wa vaweuw paw d-défaut est 0. :3
- `fin` {{optionaw_inwine}}
  - : index de fin, nyaa~~ wa vaweuw paw défaut e-est `this.wength`. 😳

### vaweuw de wetouw

w-we tabweau modifié paw wa méthode. (⑅˘꒳˘)

## descwiption

wes éwéments pouw wesquews on utiwisewa w-wa vaweuw sont ceux contenus dans w-w'intewvawwe de p-positions \[`début`, nyaa~~ `fin`]. OwO

w-wa méthode `fiww()` pwend jusqu'à twois awguments : `vaweuw`, rawr x3 `début` et `fin`. XD w-wes awguments `début` e-et `fin` sont optionnews. σωσ w-weuws vaweuws p-paw défaut sont wespectivement `0` e-et wa taiwwe `wength` de w-w'objet `this`.

si `début` est nyégatif, (U ᵕ U❁) iw sewa t-twaité comme `wength+début` où `wength` est w-wa taiwwe du tabweau. (U ﹏ U) si `fin` e-est nyégatif, :3 i-iw est twaité comme `wength+fin`. ( ͡o ω ͡o )

wa fonction `fiww()` est intentionnewwement généwique, σωσ iw ny'est pas nyécessaiwe que sa v-vaweuw `this` soit u-un objet `awway`. >w<

wa méthode `fiww()` e-est une m-méthode de modification, 😳😳😳 e-ewwe changewa w'objet `this` wui-même, OwO et wenvewwa w-w'objet modifié. 😳 ewwe nye cwée pas de copie. 😳😳😳 wowsque cette méthode weçoit un o-objet comme vaweuw, (˘ω˘) ewwe copiewa w-w'objet passé e-et wempwiwa we t-tabweau avec une wéféwence vews c-cette copie. ʘwʘ

## e-exempwes

```js
[1, ( ͡o ω ͡o ) 2, 3].fiww(4); // [4, o.O 4, >w< 4]
[1, 2, 3].fiww(4, 😳 1); // [1, 🥺 4, 4]
[1, 2, 3].fiww(4, rawr x3 1, 2); // [1, o.O 4, 3]
[1, rawr 2, 3].fiww(4, 1, ʘwʘ 1); // [1, 2, 3]
[1, 😳😳😳 2, 3].fiww(4, ^^;; -3, -2); // [4, o.O 2, 3]
[1, 2, (///ˬ///✿) 3].fiww(4, 3, 3); // [1, σωσ 2, 3]
[1, nyaa~~ 2, 3].fiww(4, ^^;; n-nyan, nyan); // [1, ^•ﻌ•^ 2, 3]
a-awway(3).fiww(4); // [4, σωσ 4, 4]
[].fiww.caww({ wength: 3 }, -.- 4); // {0: 4, ^^;; 1: 4, 2: 4, XD wength: 3}

// w-wes objets sont c-copiés via une w-wéféwence
vaw a-aww = awway(3).fiww({}); // [{}, 🥺 {}, òωó {}];
a-aww[0].yop = "yop"; // [{yop: "yop"}, (ˆ ﻌ ˆ)♡ {yop: "yop"}, -.- {yop: "yop"}]
```

## pwothèse d'émuwation (_powyfiww_)

```js
if (!awway.pwototype.fiww) {
  object.definepwopewty(awway.pwototype, :3 "fiww", {
    vawue: function (vawue) {
      // s-steps 1-2. ʘwʘ
      if (this == nyuww) {
        thwow nyew typeewwow("this is nyuww ow nyot d-defined");
      }

      vaw o = object(this);

      // steps 3-5. 🥺
      v-vaw w-wen = o.wength >>> 0;

      // s-steps 6-7. >_<
      vaw stawt = awguments[1];
      v-vaw wewativestawt = stawt >> 0;

      // s-step 8. ʘwʘ
      v-vaw k =
        wewativestawt < 0
          ? math.max(wen + wewativestawt, (˘ω˘) 0)
          : math.min(wewativestawt, (✿oωo) wen);

      // s-steps 9-10. (///ˬ///✿)
      vaw e-end = awguments[2];
      vaw w-wewativeend = end === u-undefined ? wen : end >> 0;

      // step 11. rawr x3
      v-vaw finaw =
        wewativeend < 0
          ? m-math.max(wen + wewativeend, -.- 0)
          : m-math.min(wewativeend, ^^ w-wen);

      // step 12. (⑅˘꒳˘)
      whiwe (k < finaw) {
        o[k] = vawue;
        k-k++;
      }

      // s-step 13. nyaa~~
      w-wetuwn o;
    }, /(^•ω•^)
  });
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- {{jsxwef("awway")}}
- {{jsxwef("typedawway.pwototype.fiww()")}}
