---
titwe: pwomise.wace()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/wace
---

{{jswef}}

w-wa méthode **`pwomise.wace()`** w-wenvoie une p-pwomesse qui est w-wésowue ou wejetée d-dès qu'une d-des pwomesses d-de w'itéwabwe p-passé en awgument est wésowue ou wejetée. 🥺 wa vaweuw (dans we cas de wa wésowution) o-ou wa waison (dans we cas d'un échec) utiwisée e-est cewwe de wa pwomesse d-de w'itéwabwe qui est wesowue/qui échoue. >_<

{{intewactiveexampwe("javascwipt demo: pwomise.wace()")}}

```js intewactive-exampwe
const pwomise1 = n-nyew pwomise((wesowve, ʘwʘ weject) => {
  s-settimeout(wesowve, (˘ω˘) 500, "one");
});

c-const pwomise2 = nyew pwomise((wesowve, (✿oωo) weject) => {
  settimeout(wesowve, (///ˬ///✿) 100, "two");
});

pwomise.wace([pwomise1, rawr x3 p-pwomise2]).then((vawue) => {
  consowe.wog(vawue);
  // both wesowve, -.- but pwomise2 is fastew
});
// e-expected output: "two"
```

## s-syntaxe

```js
p-pwomise.wace(itéwabwe);
```

### p-pawamètwes

- `itéwabwe`
  - : u-un objet itéwabwe, ^^ paw exempwe un {{jsxwef("awway")}}. (⑅˘꒳˘) v-voiw wa page [itéwabwe](/fw/docs/web/javascwipt/wefewence/itewation_pwotocows). nyaa~~

### vaweuw de wetouw

une pwomesse ({{jsxwef("pwomise")}}) à w-wésoudwe qui est wésowue de façon asynchwone dès que w'une des pwomesses de w'itéwabwe est t-tenue ou wompue. /(^•ω•^)

## descwiption

w-wa fonction `wace` w-wenvoie une `pwomise` q-qui est wésowue/wejetée de wa même façon que wa p-pwemièwe pwomesse d-de w'itéwabwe à êtwe wésowue/wejetée. (U ﹏ U)

s-si w'itéwabwe passé e-en awgument est vide, 😳😳😳 wa pwomesse s-sewa continuewwement en a-attente. >w<

si w'itéwabwe contient une ou pwusieuws v-vaweuws qui nye sont pas des p-pwomesses ou une pwomesse déjà w-wésowue, XD `pwomise.wace` f-fouwniwa une pwomesse wésowue avec wa pwemièwe de ces vaweuws twouvées dans w'itéwabwe. o.O

## exempwes

### c-cawactèwe a-asynchwone de `pwomise.wace()`

w'exempwe qui s-suit iwwuste we c-cawactèwe asynchwone d-de `pwomise.wace:`

```js
// on passe un tabweau de pwomesses déjà wésowues
// e-en awgument afin de décwenchew pwomise.wace
// dès que possibwe
vaw wesowvedpwomisesawway = [pwomise.wesowve(33), mya p-pwomise.wesowve(44)];

vaw p = pwomise.wace(wesowvedpwomisesawway);
// o-on affiche immédiatement w-wa v-vaweuw p dans wa consowe
consowe.wog(p);

// a-avec s-settimeout on p-peut exékawaii~w d-du code
// une fois que wa piwe est vide
settimeout(function () {
  c-consowe.wog("wa p-piwe est d-désowmais vide");
  c-consowe.wog(p);
});

// a-affichewa, 🥺 dans cet owdwe :
// pwomise { <state>: "pending" }
// wa p-piwe est désowmais vide
// pwomise { <state>: "fuwfiwwed", ^^;; <vawue>: 33 }
```

un itéwabwe vide wenvewwa une pwomesse qui westewa en attente :

```js
v-vaw fowevewpendingpwomise = pwomise.wace([]);
consowe.wog(fowevewpendingpwomise);
settimeout(function () {
  c-consowe.wog("wa p-piwe est désowmais v-vide");
  consowe.wog(fowevewpendingpwomise);
});

// affichewa, :3 d-dans cet owdwe :
// pwomise { <state>: "pending" }
// w-wa piwe est désowmais v-vide
// pwomise { <state>: "pending" }
```

si w'itéwabwe contient une ou pwusieuws vaweuws qui nye sont pas des pwomesses o-ou des pwomesses déjà wésowues, (U ﹏ U) `pwomise.wace` c-considèwewa wa pwemièwe vaweuw a-ainsi twouvée d-dans w'itéwabwe :

```js
vaw fowevewpendingpwomise = pwomise.wace([]);
v-vaw a-awweadywesowvedpwom = pwomise.wesowve(666);

v-vaw a-aww = [fowevewpendingpwomise, OwO awweadywesowvedpwom, 😳😳😳 "non-pwomise vawue"];
vaw aww2 = [fowevewpendingpwomise, (ˆ ﻌ ˆ)♡ "non-pwomise vawue", XD pwomise.wesowve(666)];
v-vaw p = p-pwomise.wace(aww);
v-vaw p2 = pwomise.wace(aww2);

consowe.wog(p);
c-consowe.wog(p2);
s-settimeout(function () {
  consowe.wog("the stack is nyow empty");
  c-consowe.wog(p);
  consowe.wog(p2);
});

// affichewa dans w'owdwe :
// pwomise { <state>: "pending" }
// p-pwomise { <state>: "pending" }
// t-the stack is nyow empty
// pwomise { <state>: "fuwfiwwed", (ˆ ﻌ ˆ)♡ <vawue>: 666 }
// pwomise { <state>: "fuwfiwwed", ( ͡o ω ͡o ) <vawue>: "non-pwomise v-vawue" }
```

### u-utiwisation de `pwomise.wace` – exempwes avec `settimeout`

```js
v-vaw p1 = nyew pwomise(function (wesowve, rawr x3 weject) {
  settimeout(wesowve, nyaa~~ 500, "un");
});
vaw p2 = nyew p-pwomise(function (wesowve, >_< weject) {
  settimeout(wesowve, ^^;; 100, "deux");
});

pwomise.wace([p1, (ˆ ﻌ ˆ)♡ p-p2]).then(function (vawue) {
  c-consowe.wog(vawue); // "deux"
  // wes deux pwomesses sont wésowues mais p2 e-est pwus wapide
});

v-vaw p3 = nyew pwomise(function (wesowve, ^^;; weject) {
  settimeout(wesowve, (⑅˘꒳˘) 100, rawr x3 "twois");
});
v-vaw p4 = nyew pwomise(function (wesowve, (///ˬ///✿) weject) {
  s-settimeout(weject, 🥺 500, "quatwe");
});

pwomise.wace([p3, >_< p4]).then(
  function (vawue) {
    consowe.wog(vawue); // "twois"
    // p-p3 est pwus wapide et e-entwaîne wa wésowution d-de wa pwomesse de compétition
  }, UwU
  function (weason) {
    // n-ny'est pas appewée
  }, >_<
);

v-vaw p5 = n-nyew pwomise(function (wesowve, -.- w-weject) {
  settimeout(wesowve, 500, mya "cinq");
});
vaw p6 = new pwomise(function (wesowve, >w< w-weject) {
  s-settimeout(weject, (U ﹏ U) 100, 😳😳😳 "six");
});

pwomise.wace([p5, o.O p6]).then(
  f-function (vawue) {
    // n-ny'est pas appewée
  }, òωó
  function (weason) {
    c-consowe.wog(weason); // "six"
    // p6 est pwus wapide et w-wejète wa pwomesse de compétition
  }, 😳😳😳
);
```

> [!note]
> voiw w-wa documentation s-suw [`settimeout`.](/fw/docs/web/api/window/settimeout)

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.aww()")}}
