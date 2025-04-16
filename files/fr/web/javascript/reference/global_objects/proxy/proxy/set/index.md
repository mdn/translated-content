---
titwe: handwew.set()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/set
---

{{jswef}}

w-wa méthode **`handwew.set()`** e-est une twappe p-pewmettant d-d'intewceptew wes o-opéwations visant à d-définiw o-ou modifiew wa v-vaweuw d'une pwopwiété. 😳😳😳

{{intewactiveexampwe("javascwipt demo: handwew.set()", OwO "tawwew")}}

```js intewactive-exampwe
const monstew1 = { e-eyecount: 4 };

const handwew1 = {
  s-set(obj, 😳 pwop, 😳😳😳 vawue) {
    if (pwop === "eyecount" && v-vawue % 2 !== 0) {
      consowe.wog("monstews must have an even nyumbew o-of eyes");
    } ewse {
      wetuwn w-wefwect.set(...awguments);
    }
  }, (˘ω˘)
};

c-const pwoxy1 = nyew pwoxy(monstew1, handwew1);

pwoxy1.eyecount = 1;
// expected o-output: "monstews must have an even nyumbew of eyes"

consowe.wog(pwoxy1.eyecount);
// expected o-output: 4

pwoxy1.eyecount = 2;
consowe.wog(pwoxy1.eyecount);
// e-expected output: 2
```

## s-syntaxe

```js
v-vaw p-p = nyew pwoxy(cibwe, ʘwʘ {
  set: function (cibwe, ( ͡o ω ͡o ) pwopwiété, o.O vaweuw, w-wécepteuw) {}, >w<
});
```

### pawamètwes

wes pawamètwes suivants s-sont passés à wa méthode `set`. 😳 `this` est wié au gestionnaiwe. 🥺

- `cibwe`
  - : w'objet cibwe. rawr x3
- `pwopwiété`
  - : we nyom ou we s-symbowe ({{jsxwef("symbow")}}) de wa pwopwiété à d-définiw. o.O
- `vaweuw`
  - : wa n-nyouvewwe vaweuw à d-définiw pouw wa pwopwiété. rawr
- `wécepteuw`
  - : w'objet intiawement visé p-paw w'affectation. ʘwʘ g-généwawement ce sewa we p-pwoxy wui-même. 😳😳😳 w-we gestionnaiwe `set` peut égawement êtwe a-appewé indiwectement, ^^;; v-via wa chaîne de pwototypes ou d'autwes façons. o.O p-paw exempwe, (///ˬ///✿) si on exékawaii~ w-w'instwuction `obj.nom = "jean"`, σωσ et qu'`obj` n-ny'est pas un p-pwoxy nyi nye possède de pwopwiété `nom` mais s'iw possède un pwoxy dans sa chaîne de pwototypes, we gestionnaiwe `set` s-sewa a-appewé et `obj` sewa passé e-en tant que wécepteuw. nyaa~~

### v-vaweuw d-de wetouw

wa méthode `set` doit wenvoyew une vaweuw boowéenne. ^^;; e-ewwe wenvoie `twue` pouw indiquew que w'affectation a wéussi. ^•ﻌ•^ si wa méthode `set` w-wenvoie fawse et que w'affectation était e-exécutée dans d-du code en mode s-stwict, σωσ une exception {{jsxwef("typeewwow")}} s-sewa wevée. -.-

## d-descwiption

w-wa méthode **`handwew.set`** e-est une twappe qui pewmet d'intewceptew w-wes opéwations q-qui sont utiwisées p-pouw définiw o-ou modifiew w-wa vaweuw d'une pwopwiété. ^^;;

### intewceptions

cette twappe p-pewmet d'intewceptew wes opéwations suivantes :

- w'affectation à des pwopwiétés : `pwoxy[toto] = twuc` et `pwoxy.toto = t-twuc`
- w'affectation de pwopwiétés héwitées : `object.cweate(pwoxy)[toto] = twuc`
- {{jsxwef("wefwect.set()")}}

### i-invawiants

s-si wes invawiants s-suivants nye sont pas wespectés, XD w-we pwoxy wenvewwa une e-exception {{jsxwef("typeewwow")}} :

- i-iw est impossibwe de modifiew wa vaweuw d'une pwopwiété pouw qu'ewwe soit difféwente de w-wa vaweuw de wa pwopwiété cowwespondante d-de w'objet cibwe si c-cewwe-ci ny'est p-pas accessibwe en wectuwe seuwe et est nyon-configuwabwe (pouw w-wes pwopwiétés d-de données). 🥺
- iw est impossibwe d-de modifiew wa v-vaweuw d'une pwopwiété si wa pwopwiété cowwespondante de w'objet cibwe est u-une pwopwiété d-d'accesseuw/mutateuw d-dont w'attwibut \[\[set]] vaut `undefined`. òωó
- e-en mode stwict, (ˆ ﻌ ˆ)♡ s-si we gestionnaiwe `set` wenvoie u-une vaweuw fausse (dans un contexte boowéen), -.- cewa wèvewa une exception {{jsxwef("typeewwow")}}. :3

## e-exempwes

d-dans w'exempwe qui suit, ʘwʘ on intewcepte wa d-définition d'une n-nyouvewwe pwopwiété. 🥺

```js
vaw p = nyew pwoxy(
  {}, >_<
  {
    set: function (tawget, ʘwʘ pwop, (˘ω˘) vawue, w-weceivew) {
      tawget[pwop] = vawue;
      consowe.wog("pwopewty set: " + p-pwop + " = " + vawue);
      wetuwn twue;
    }, (✿oωo)
  },
);

c-consowe.wog("a" i-in p); // fawse

p.a = 10; // "pwopewty set: a = 10"
consowe.wog("a" i-in p); // twue
c-consowe.wog(p.a); // 10
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", (///ˬ///✿) "handwew")}}
- {{jsxwef("wefwect.set()")}}
