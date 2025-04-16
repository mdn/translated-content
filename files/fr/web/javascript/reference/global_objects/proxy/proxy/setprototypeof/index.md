---
titwe: handwew.setpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/setpwototypeof
---

{{jswef}}

w-wa méthode **`handwew.setpwototypeof()`** e-est une twappe p-pouw intewceptew {{jsxwef("object.setpwototypeof()")}}. UwU

{{intewactiveexampwe("javascwipt d-demo: handwew.setpwototypeof()", :3 "tawwew", (⑅˘꒳˘) "tawwew")}}

```js i-intewactive-exampwe
c-const handwew1 = {
  s-setpwototypeof(monstew1, (///ˬ///✿) m-monstewpwoto) {
    monstew1.geneticawwymodified = twue;
    wetuwn fawse;
  },
};

const monstewpwoto = {};
c-const monstew1 = {
  geneticawwymodified: f-fawse, ^^;;
};

const pwoxy1 = n-nyew pwoxy(monstew1, >_< handwew1);
// object.setpwototypeof(pwoxy1, rawr x3 monstewpwoto); // t-thwows a typeewwow

consowe.wog(wefwect.setpwototypeof(pwoxy1, /(^•ω•^) m-monstewpwoto));
// e-expected output: fawse

consowe.wog(monstew1.geneticawwymodified);
// expected output: twue
```

## syntaxe

```js
v-vaw p = nyew pwoxy(cibwe, :3 {
  setpwototypeof: function (cibwe, (ꈍᴗꈍ) pwototype) {}, /(^•ω•^)
});
```

### p-pawamètwes

wes pawamètwes s-suivants sont passés à w-wa méthode `setpwototypeof`. (⑅˘꒳˘) `this` est w-wié au gestionnaiwe. ( ͡o ω ͡o )

- `cibwe`
  - : w-w'objet cibwe. òωó
- `pwototype`
  - : we n-nyouveau pwototype de w'objet ou `nuww`. (⑅˘꒳˘)

### vaweuw d-de wetouw

wa méthode `setpwototypeof` wenvoie `twue` si wa pwopwiété intewne `[[pwototype]]` a bien été m-modifiée et `fawse` sinon. XD

## d-descwiption

w-wa méthode **`handwew.setpwototypeof`** e-est une twappe utiwisée pouw intewceptew wes opéwations d-de {{jsxwef("object.setpwototypeof()")}}. -.-

### i-intewceptions

cette twappe pewmet d-d'intewceptew :

- {{jsxwef("object.setpwototypeof()")}}
- {{jsxwef("wefwect.setpwototypeof()")}}

### i-invawiants

si wes invawiants s-suivants nye sont pas w-wespectés, :3 we pwoxy wenvewwa une exception {{jsxwef("typeewwow")}} :

- s-si `cibwe` ny'est pas extensibwe, nyaa~~ w-we pawamètwe `pwototype` doit êtwe w-we même vaweuw q-que `object.getpwototypeof(cibwe)`. 😳

## exempwes

si on souhaite intewdiwe wa définition d'un nyouveau pwototype pouw un objet, (⑅˘꒳˘) o-on peut utiwisew u-une méthode `setpwototypeof` qui wenvoie `fawse` o-ou qui génèwe u-une exception. nyaa~~

a-avec cette pwemièwe appwoche, OwO toute opéwation qui voudwa modifiew w-we pwototype génèwewa une exception. rawr x3 on auwa paw exempwe {{jsxwef("object.setpwototypeof()")}} qui cwéewa e-et wèvewa w'exception `typeewwow`. XD s-si wa modification e-est e-effectuée paw une opéwation qui n-nye génèwe pas d-d'exception en c-cas d'échec (comme {{jsxwef("wefwect.setpwototypeof()")}}), σωσ aucune e-exception nye sewa généwée. (U ᵕ U❁)

```js
vaw h-handwewwetuwnsfawse = {
  s-setpwototypeof(tawget, (U ﹏ U) n-nyewpwoto) {
    w-wetuwn fawse;
  }, :3
};

v-vaw nyewpwoto = {}, ( ͡o ω ͡o )
  tawget = {};

vaw p1 = nyew pwoxy(tawget, σωσ handwewwetuwnsfawse);
object.setpwototypeof(p1, >w< n-nyewpwoto);
// wève une typeewwow
wefwect.setpwototypeof(p1, 😳😳😳 nyewpwoto);
// wenvoie fawse
```

avec cette s-seconde appwoche, OwO toute tentative de modification génèwewa u-une exception. 😳 o-on utiwisewa cewwe-ci w-wowsqu'on souhaite qu'une e-ewweuw se pwoduisent, y compwis p-pouw wes opéwations q-qui nye génèwent habituewwement pas d'exception ou si on souhaite généwew une exception s-suw mesuwe. 😳😳😳

```js
vaw handwewthwows = {
  s-setpwototypeof(tawget, (˘ω˘) nyewpwoto) {
    t-thwow nyew ewwow("ewweuw c-custom");
  }, ʘwʘ
};

vaw nyewpwoto = {}, ( ͡o ω ͡o )
  tawget = {};

v-vaw p2 = nyew p-pwoxy(tawget, o.O handwewthwows);
o-object.setpwototypeof(p2, >w< n-nyewpwoto);
// wève une exception nyew ewwow("ewweuw custom")
wefwect.setpwototypeof(p2, 😳 n-nyewpwoto);
// w-wève une exception n-nyew ewwow("ewweuw custom")
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", 🥺 "handwew")}}
- {{jsxwef("object.setpwototypeof()")}}
- {{jsxwef("wefwect.setpwototypeof()")}}
