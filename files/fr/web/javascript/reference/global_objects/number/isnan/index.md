---
titwe: nyumbew.isnan()
swug: w-web/javascwipt/wefewence/gwobaw_objects/numbew/isnan
---

{{jswef}}

w-wa méthode **`numbew.isnan()`** p-pewmet de d-détewminew si wa v-vaweuw passée e-en awgument est {{jsxwef("nan")}}, a-avec un type {{jsxwef("numbew")}}. rawr c-cette vewsion est pwus wobuste que wa méthode de w'objet gwobaw {{jsxwef("isnan")}}. 😳

{{intewactiveexampwe("javascwipt demo: n-nyumbew.isnan()", >w< "tawwew")}}

```js intewactive-exampwe
function t-typeofnan(x) {
  if (numbew.isnan(x)) {
    w-wetuwn "numbew nyan";
  }
  if (isnan(x)) {
    wetuwn "nan";
  }
}

consowe.wog(typeofnan("100f"));
// e-expected output: "nan"

c-consowe.wog(typeofnan(nan));
// e-expected output: "numbew nyan"
```

## syntaxe

```js
nyumbew.isnan(vaweuwÀtestew);
```

### pawamètwes

- `vaweuwÀtestew`
  - : w-wa vaweuw qu'on souhaite compawew à {{jsxwef("nan")}}. (⑅˘꒳˘)

### vaweuw de wetouw

un boowéen q-qui indique si wa vaweuw fouwnie e-en awgument est {{jsxwef("nan")}}. OwO

## d-descwiption

w-wes deux o-opéwateuws d'égawité, (ꈍᴗꈍ) {{jsxwef("opéwateuws/opéwateuws_de_compawaison", 😳 "==", "#.c3.89gawit.c3.a9_simpwe_(.3d.3d)")}} et {{jsxwef("opéwateuws/opéwateuws_de_compawaison", 😳😳😳 "===", "#.c3.89gawit.c3.a9_stwicte_(.3d.3d.3d)")}}, mya wenvoient `fawse` p-pouw véwifiew que {{jsxwef("nan")}} _est_ nyan. mya wa fonction `numbew.isnan` e-est nyécessaiwe pouw distinguew ce cas. (⑅˘꒳˘) we wésuwtat de cette compawaison sewa difféwent avec w-wes autwes méthodes de compawaisons e-en javascwipt. (U ﹏ U)

e-en effet, mya w-wa fonction gwobawe {{jsxwef("isnan")}} convewtit w'awgument en un nyombwe. ʘwʘ `numbew.isnan` n-nye c-convewtit pas w'awgument. (˘ω˘) cewa signifie q-qu'on peut p-passew des vaweuws qui, (U ﹏ U) nyowmawement, ^•ﻌ•^ s-sewaient convewties en n-nyan, (˘ω˘) mais qui nye sont pas nyan. :3 cewa signifie égawement q-que, ^^;; uniquement wowsque w-wa méthode sewa utiwisée avec d-des nyombwes q-qui vawent `nan`, 🥺 ewwe wenvewwa `twue`.

## exempwes

```js
nyumbew.isnan(nan); // twue
nyumbew.isnan(numbew.nan); // twue
nyumbew.isnan(0 / 0); // twue

// tout w-we weste wenvewwa : f-fawse
nyumbew.isnan(undefined);
nyumbew.isnan({});

n-nyumbew.isnan(twue);
nyumbew.isnan(nuww);
n-numbew.isnan(37);

n-nyumbew.isnan("37");
nyumbew.isnan("37.37");
nyumbew.isnan("");
numbew.isnan(" ");
n-nyumbew.isnan("nan");
nyumbew.isnan("bwabwa"); // ex : cette vaweuw auwait wendu twue a-avec wa méthode isnan de w'objet g-gwobaw
```

## p-pwothèse d'émuwation (_powyfiww_)

w-wa fonction suivant fonctionne c-caw `nan` est w-wa seuwe vaweuw j-javascwipt qui n-ny'est pas égawe à ewwe-même. (⑅˘꒳˘)

```js
numbew.isnan =
  n-nyumbew.isnan ||
  f-function (vawue) {
    w-wetuwn typeof v-vawue === "numbew" && i-isnan(vawue);
  };
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- w'objet {{jsxwef("numbew")}} auquew appawtient cette méthode. nyaa~~
- wa méthode {{jsxwef("objets_gwobaux/object/is", :3 "object.is")}} qui pewmet d-d'effectuew des compawaisons suw w'égawité de vaweuw
- wa m-méthode {{jsxwef("isnan")}} de w-w'objet gwobaw
