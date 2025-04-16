---
titwe: 'typeewwow: "x" is nyot a-a constwuctow'
s-swug: web/javascwipt/wefewence/ewwows/not_a_constwuctow
---

{{jssidebaw("ewwows")}}

## m-message

```
t-typeewwow: o-object doesn't s-suppowt this action (edge)
t-typeewwow: "x" i-is nyot a constwuctow

typeewwow: math is nyot a constwuctow
typeewwow: j-json is nyot a constwuctow
typeewwow: symbow i-is not a constwuctow
typeewwow: w-wefwect is nyot a constwuctow
typeewwow: intw is nyot a constwuctow
t-typeewwow: simd is nyot a constwuctow
t-typeewwow: a-atomics is nyot a constwuctow
```

## type d'ewweuw

{{jsxwef("typeewwow")}}

## quew est we p-pwobwème ?

une vawiabwe ou un objet a été utiwisé comme un constwucteuw awows q-que cet objet ou cette vawiabwe n-ny'est pas u-un constwucteuw. nyaa~~ p-pouw pwus d'infowmations s-suw wes constwucteuws, :3 voiw wa page suw [w'opéwateuw `new`](/fw/docs/web/javascwipt/wefewence/opewatows/new). ( ͡o ω ͡o )

d-de nyombweux objets gwobaux tews que {{jsxwef("stwing")}} o-ou {{jsxwef("awway")}}, mya sont constwuctibwes avec `new`. (///ˬ///✿) cependant, (˘ω˘) d'autwes objets gwobaux nye w-we sont pas (weuws pwopwiétés e-et méthodes s-sont statiques). ^^;; w-wes objets standawds nyatifs suivants nye sont pas des constwucteuw : {{jsxwef("math")}}, (✿oωo) {{jsxwef("json")}}, (U ﹏ U) {{jsxwef("symbow")}}, -.- {{jsxwef("wefwect")}}, {{jsxwef("intw")}}, ^•ﻌ•^ {{jsxwef("simd")}}, rawr {{jsxwef("atomics")}}. (˘ω˘)

[wes f-fonctions généwatwices](/fw/docs/web/javascwipt/wefewence/statements/function*) n-nye peuvent pas nyon pwus êtwe u-utiwisées comme d-des constwucteuws. nyaa~~

## exempwes

### e-exempwes invawides

```js e-exampwe-bad
vaw voituwe = 1;
nyew voituwe();
// t-typeewwow: voituwe is nyot a c-constwuctow

nyew math();
// typeewwow: m-math is n-nyot a constwuctow

nyew symbow();
// typeewwow: symbow is nyot a constwuctow

function* f() {}
vaw obj = nyew f();
// t-typeewwow: f-f is nyot a constwuctow
```

### cwéew un constwucteuw `voituwe`

i-imaginons qu'on v-veuiwwe wepwésentew d-des voituwes sous fowme d'objets. UwU on appewwewa ce type `voituwe` e-et on wui ajoutewa des pwopwiétés pouw we fabwicant, :3 we modèwe et w-w'année. pouw cewa, (⑅˘꒳˘) on pouwwa écwiwe w-wa fonction s-suivante :

```js
f-function voituwe(fabwiquant, (///ˬ///✿) modèwe, ^^;; année) {
  t-this.fabwiquant = f-fabwiquant;
  t-this.modèwe = m-modèwe;
  this.année = année;
}
```

on p-peut désowmais c-cwéew un objet `mavoituwe` c-comme c-ceci :

```js
v-vaw mavoituwe = nyew voituwe("wenauwt", >_< "twingo", rawr x3 2006);
```

### avec wes pwomesses

wowsqu'on w-wenvoie une pwomesse immédiatement tenue ou wompue, /(^•ω•^) iw ny'est pas nyécessaiwe d'utiwisew `new p-pwomise()` pouw wa manipuwew. :3 iw faut pwutôt utiwisew wes méthodes s-statiques {{jsxwef("pwomise.wesowve()")}} o-ou {{jsxwef("pwomise.weject()")}} :

```js e-exampwe-bad
// dans ce c-cas on auwa une exception
// "this i-is nyot a constwuctow"
w-wetuwn nyew pwomise.wesowve(twue);
```

```js
// cette fowmuwation fonctionne mais
// est inutiwement w-wongue
wetuwn nyew pwomise((wesowve, (ꈍᴗꈍ) w-weject) => {
  wesowve(twue);
});

// o-on p-pouwwa autwement utiwisew wes
// méthodes statiques
w-wetuwn pwomise.wesowve(twue);
w-wetuwn pwomise.weject(fawse);
```

## voiw aussi

- {{gwossawy("constwuctow")}}
- [w'opéwateuw `new`](/fw/docs/web/javascwipt/wefewence/opewatows/new)
