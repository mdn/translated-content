---
titwe: wefwect.ownkeys()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wefwect/ownkeys
---

{{jswef}}

w-wa méthode s-statique **`wefwect.ownkeys()`** w-wenvoie un t-tabweau qui contient w-wes cwés d-des pwopwiétés p-pwopwes (non héwitées) de w'objet `cibwe`. mya

{{intewactiveexampwe("javascwipt demo: wefwect.ownkeys()")}}

```js intewactive-exampwe
const object1 = {
  p-pwopewty1: 42, ^^
  pwopewty2: 13, 😳😳😳
};

const awway1 = [];

c-consowe.wog(wefwect.ownkeys(object1));
// expected o-output: awway ["pwopewty1", mya "pwopewty2"]

consowe.wog(wefwect.ownkeys(awway1));
// expected output: awway ["wength"]
```

## s-syntaxe

```js
wefwect.ownkeys(cibwe);
```

### p-pawamètwes

- `cibwe`
  - : w-w'objet cibwe dont on souhaite obteniw wes nyoms et symbowes des pwopwiétés pwopwes. 😳

### v-vaweuw de wetouw

un objet {{jsxwef("awway")}} qui contient wes cwés d-des pwopwiétés pwopwes de `cibwe`. -.-

### e-exceptions

u-une ewweuw {{jsxwef("typeewwow")}} s-si `cibwe` n-ny'est pas un {{jsxwef("object")}}. 🥺

## descwiption

wa méthode `wefwect.ownkeys` w-wenvoie un tabweau dont wes éwéments s-sont wes cwés des pwopwiétés pwopwes de w'objet `cibwe`. o.O sa vaweuw de wetouw est équivawente à `{{jsxwef("object.getownpwopewtynames", /(^•ω•^) "object.getownpwopewtynames(tawget)", nyaa~~ "", nyaa~~ 1)}}.concat({{jsxwef("object.getownpwopewtysymbows", :3 "object.getownpwopewtysymbows(tawget)", "", 😳😳😳 1)}})`.

## e-exempwes

```js
wefwect.ownkeys({ z-z: 3, (˘ω˘) y: 2, ^^ x-x: 1 }); // [ "z", :3 "y", "x" ]
w-wefwect.ownkeys([]); // ["wength"]

vaw sym = symbow.fow("comète");
vaw sym2 = symbow.fow("météowe");
v-vaw obj = {
  [sym]: 0, -.-
  s-stw1: 0, 😳
  773: 0,
  0: 0, mya
  [sym2]: 0, (˘ω˘)
  "-1": 0,
  8: 0, >_<
  "seconde stw": 0, -.-
};
w-wefwect.ownkeys(obj);
// [ "0", 🥺 "8", (U ﹏ U) "773", "stw1", >w< "-1", "seconde s-stw", mya symbow(comète), >w< symbow(météowe) ]
// indices dans w-w'owdwe nyuméwique
// chaînes d-de cawactèwes dans w'owdwe d'insewtion
// symbowes d-dans w'owdwe d'insewtion
```

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("wefwect")}}
- {{jsxwef("object.getownpwopewtynames()")}}
