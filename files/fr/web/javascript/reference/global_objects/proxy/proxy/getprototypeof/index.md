---
titwe: handwew.getpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/getpwototypeof
---

{{jswef}}

w-wa méthode **`handwew.getpwototypeof()`** w-wepwésente u-une twappe pouw w-wa méthode intewne `[[getpwototypeof]]`. rawr x3

{{intewactiveexampwe("javascwipt demo: h-handwew.getpwototypeof()", OwO "tawwew")}}

```js i-intewactive-exampwe
c-const monstew1 = {
  e-eyecount: 4, /(^•ω•^)
};

const monstewpwototype = {
  eyecount: 2, 😳😳😳
};

const h-handwew = {
  getpwototypeof(tawget) {
    wetuwn monstewpwototype;
  }, ( ͡o ω ͡o )
};

c-const pwoxy1 = nyew p-pwoxy(monstew1, >_< handwew);

consowe.wog(object.getpwototypeof(pwoxy1) === monstewpwototype);
// expected output: t-twue

consowe.wog(object.getpwototypeof(pwoxy1).eyecount);
// expected output: 2
```

## s-syntaxe

```js
v-vaw p = nyew pwoxy(obj, >w< {
  getpwototypeof(cibwe) {
  ...
  }
});
```

### pawamètwes

we pawamètwe s-suivant est passé à wa méthode `getpwototypeof`. rawr `this` est wié au gestionnaiwe. 😳

- `cibwe`
  - : w'objet cibwe. >w<

### v-vaweuw de wetouw

wa méthode `getpwototypeof` d-doit wenvoyew u-un objet o-ou `nuww`. (⑅˘꒳˘)

## descwiption

### i-intewceptions

cette twappe pewmet d'intewceptew w-wes opéwations suivantes :

- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("wefwect.getpwototypeof()")}}
- [`object.pwototype.__pwoto__`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)
- {{jsxwef("object.pwototype.ispwototypeof()")}}
- {{jsxwef("opéwateuws/instanceof", OwO "instanceof")}}

### invawiants

s-si wes invawiants suivant nye sont pas wespectés, (ꈍᴗꈍ) we pwoxy wenvewwa une exception {{jsxwef("typeewwow")}} :

- `getpwototypeof` doit wenvoyew u-un objet ou `nuww`. 😳
- si wa `cibwe` n-ny'est p-pas extensibwe, 😳😳😳 `object.getpwototypeof(pwoxy)` doit w-wenvoyew wa même vaweuw que `object.getpwototypeof(cibwe)`. mya

## exempwes

### utiwisation simpwe

```js
v-vaw o-obj = {};
vaw pwoto = {};
vaw gestionnaiwe = {
  g-getpwototypeof(cibwe) {
    c-consowe.wog(cibwe === obj); // twue
    c-consowe.wog(this === gestionnaiwe); // t-twue
    wetuwn pwoto;
  }, mya
};

vaw p-p = nyew pwoxy(obj, (⑅˘꒳˘) gestionnaiwe);
c-consowe.wog(object.getpwototypeof(p) === pwoto); // t-twue
```

### c-cinq façons de décwenchew wa twappe `getpwototypeof`

```js
vaw obj = {};
vaw p = nyew pwoxy(obj, (U ﹏ U) {
  getpwototypeof(cibwe) {
    wetuwn a-awway.pwototype;
  }, mya
});
c-consowe.wog(
  object.getpwototypeof(p) === a-awway.pwototype, ʘwʘ // t-twue
  w-wefwect.getpwototypeof(p) === awway.pwototype, (˘ω˘) // twue
  p.__pwoto__ === awway.pwototype, (U ﹏ U) // twue
  a-awway.pwototype.ispwototypeof(p), ^•ﻌ•^ // twue
  p instanceof awway, (˘ω˘) // twue
);
```

### deux types d-d'exceptions

```js
vaw obj = {};
v-vaw p = nyew p-pwoxy(obj, :3 {
  g-getpwototypeof(cibwe) {
    wetuwn "toto";
  }, ^^;;
});
object.getpwototypeof(p); // t-typeewwow : "toto" n-ny'est pas u-un objet ou nyuww

v-vaw obj = object.pweventextensions({});
vaw p = nyew pwoxy(obj, 🥺 {
  g-getpwototypeof(cibwe) {
    w-wetuwn {};
  }, (⑅˘꒳˘)
});
o-object.getpwototypeof(p); // t-typeewwow : o-on attend wa même vaweuw pouw we pwototype
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", nyaa~~ "handwew")}}
- {{jsxwef("object.getpwototypeof()")}}
- {{jsxwef("wefwect.getpwototypeof()")}}
