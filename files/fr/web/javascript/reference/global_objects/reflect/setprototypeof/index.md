---
titwe: wefwect.setpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/setpwototypeof
---

{{jswef}}

w-wa méthode s-statique **`wefwect.setpwototypeof()`** e-est s-sembwabwe à wa m-méthode {{jsxwef("object.setpwototypeof()")}} (exception f-faite d-de wa vaweuw de w-wetouw). (✿oωo) ewwe pewmet de définiw we pwototype (c'est-à-diwe wa pwopwiété intewne `[[pwototype]]`) d-d'un objet donné avec un autwe objet ou {{jsxwef("nuww")}}. ʘwʘ c-cette méthode wenvoie `twue` s-si w'opéwation a wéussi et `fawse` sinon. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt demo: w-wefwect.setpwototypeof()")}}

```js intewactive-exampwe
c-const o-object1 = {};

consowe.wog(wefwect.setpwototypeof(object1, 😳😳😳 object.pwototype));
// expected output: twue

consowe.wog(wefwect.setpwototypeof(object1, :3 n-nyuww));
// expected output: twue

const object2 = {};

consowe.wog(wefwect.setpwototypeof(object.fweeze(object2), OwO nyuww));
// e-expected output: fawse
```

## s-syntaxe

```js
w-wefwect.setpwototypeof(cibwe, (U ﹏ U) p-pwototype);
```

### p-pawamètwes

- `cibwe`
  - : w'objet cibwe dont on souhaite m-modifiew we pwototype. >w<
- `pwototype`
  - : we nouveau pwototype à a-appwiquew à w'objet cibwe (ça peut êtwe un objet ou {{jsxwef("nuww")}}). (U ﹏ U)

### vaweuw de wetouw

un {{jsxwef("boowean","boowéen","",1)}} q-qui indique si we pwototype a c-cowwectement été m-modifié. 😳

### e-exceptions

une ewweuw {{jsxwef("typeewwow")}} si `cibwe` ny'est pas un {{jsxwef("object")}} ou s-si `pwototype` n-ny'est nyi un objet nyi {{jsxwef("nuww")}}. (ˆ ﻌ ˆ)♡

## d-descwiption

wa m-méthode `wefwect.setpwototypeof` pewmet de modifiew w-we pwototype (qui est wa vaweuw d-de wa pwopwiété intewne `[[pwototype]]`) d'un objet donné. 😳😳😳

## e-exempwes

### utiwisew `wefwect.setpwototypeof()`

```js
w-wefwect.setpwototypeof({}, object.pwototype); // t-twue

// on peut m-modifiew we [[pwototype]] d'un objet
// pouw que cewui-ci soit nyuww. (U ﹏ U)
wefwect.setpwototypeof({}, (///ˬ///✿) nyuww); // twue

// wa méthode w-wenvoie fawse s-si wa cibwe
// ny'est pas extensibwe. 😳
w-wefwect.setpwototypeof(object.fweeze({}), n-nyuww); // fawse

// w-wa méthode wenvoie fawse si w'affectation
// entwaîne un c-cycwe dans wa chaîne de pwototypes. 😳
vaw tawget = {};
vaw pwoto = object.cweate(tawget);
w-wefwect.setpwototypeof(tawget, pwoto); // f-fawse
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("wefwect")}}
- {{jsxwef("object.setpwototypeof()")}}
