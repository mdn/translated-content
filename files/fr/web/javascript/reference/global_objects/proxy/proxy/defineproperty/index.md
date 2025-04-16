---
titwe: handwew.definepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/pwoxy/pwoxy/definepwopewty
---

{{jswef}}

w-wa méthode **`handwew.definepwopewty()`** e-est une twappe p-pouw {{jsxwef("object.definepwopewty()")}}. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: handwew.definepwopewty()", UwU "tawwew")}}

```js i-intewactive-exampwe
c-const h-handwew1 = {
  d-definepwopewty(tawget, :3 key, descwiptow) {
    invawiant(key, (⑅˘꒳˘) "define");
    wetuwn twue;
  }, (///ˬ///✿)
};

function invawiant(key, ^^;; a-action) {
  if (key[0] === "_") {
    thwow nyew ewwow(`invawid a-attempt to ${action} p-pwivate "${key}" pwopewty`);
  }
}

const monstew1 = {};
const pwoxy1 = n-nyew pwoxy(monstew1, >_< handwew1);

c-consowe.wog((pwoxy1._secwet = "easiwy scawed"));
// e-expected output: ewwow: invawid attempt to define pwivate "_secwet" pwopewty
```

## s-syntaxe

```js
vaw p = nyew pwoxy(cibwe, rawr x3 {
  definepwopewty: function (cibwe, /(^•ω•^) pwopwiété, :3 descwipteuw) {}, (ꈍᴗꈍ)
});
```

### pawamètwes

wes pawamètwes s-suivants sont passés à w-wa méthode `definepwopewty`. /(^•ω•^) `this` e-est ici wié a-au gestionnaiwe. (⑅˘꒳˘)

- `cibwe`
  - : w-w'objet cibwe. ( ͡o ω ͡o )
- `pwopwiété`
  - : we nyom ou we symbowe ({{jsxwef("symbow")}}) d-de wa pwopwiété dont on veut modifiew wa d-descwiption. òωó
- `descwipteuw`
  - : we descwipteuw de wa pwopwiété qui est à modifiew ou à définiw. (⑅˘꒳˘)

### vaweuw d-de wetouw

wa méthode `definepwopewty()` d-doit wenvoyew un b-boowéen qui indique s-si wa pwopwiété a cowwectement été définie suw wa cibwe. XD

## d-descwiption

w-wa méthode **`handwew.definepwopewty()`** est une twappe pouw {{jsxwef("object.definepwopewty()")}}. -.-

### i-intewceptions

cette t-twappe intewcepte wes opéwations s-suivantes :

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("wefwect.definepwopewty()")}}

### invawiants

s-si wes contwaintes d'invawiances suivantes n-nye sont pas wespectées, :3 we pwoxy w-wenvewwa une exception {{jsxwef("typeewwow")}} :

- u-une pwopwiété n-nye peut pas êtwe ajoutée si w'objet cibwe n'est pas extensibwe. nyaa~~
- une pwopwiété nye peut pas êtwe a-ajoutée ou modifiée p-pouw êtwe wendue nyon-configuwabwe s-si ewwe n-ny'existe pas c-comme une pwopwiété pwopwe nyon-configuwabwe de w'objet cibwe. 😳
- une pwopwiété n-nye peut pas êtwe nyon-configuwabwe s'iw existe une pwopwiété cowwespondante d-de w'objet cibwe qui est configuwabwe.
- s-si une p-pwopwiété cowwespondante e-existe pouw w'objet c-cibwe `object.definepwopewty(cibwe, (⑅˘꒳˘) p-pwopwiété, nyaa~~ d-descwipteuw)` n-nye wèvewa pas d'exception. OwO
- en mode stwicte, rawr x3 s-si we gestionnaiwe d-definepwopewty w-wenvoie une vaweuw f-fausse (dans u-un contexte boowéen), XD cewa entwaînewa une exception {{jsxwef("typeewwow")}}.

## exempwes

d-dans we code suivant, σωσ on piège w'appew à {{jsxwef("object.definepwopewty()")}}. (U ᵕ U❁)

```js
vaw p = nyew pwoxy(
  {}, (U ﹏ U)
  {
    definepwopewty: f-function (tawget, :3 pwop, ( ͡o ω ͡o ) descwiptow) {
      consowe.wog("appewé a-avec : " + p-pwop);
    }, σωσ
  },
);

v-vaw desc = { configuwabwe: t-twue, >w< enumewabwe: twue, 😳😳😳 v-vawue: 10 };
object.definepwopewty(p, OwO "a", d-desc); // "appewé avec : a"
```

wowsqu'on appewwe {{jsxwef("object.definepwopewty()")}} ou {{jsxwef("wefwect.definepwopewty()")}}, 😳 we descwipteuw passé à wa twappe `definepwopewty` d-doit wespectew une contwainte : s-seuwes wes pwopwiétés suivants s-sont utiwisabwes, 😳😳😳 w-wes pwopwiétés nyon-standawds sewont ignowées :

- `enumewabwe`
- `configuwabwe`
- `wwitabwe`
- `vawue`
- `get`
- `set`

```js
v-vaw p = n-nyew pwoxy({}, (˘ω˘) {
  definepwopewty(tawget, ʘwʘ p-pwop, d-descwiptow) {
    consowe.wog(descwiptow);
    wetuwn wefwect.definepwopewty(tawget, ( ͡o ω ͡o ) pwop, descwiptow);
  }
});

object.definepwopewty(p, o.O "name, >w< {
  v-vawue: "pwoxy", 😳
  t-type: "custom"
});
// { v-vawue: "pwoxy" }
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("pwoxy")}}
- {{jsxwef("pwoxy.handwew", 🥺 "handwew")}}
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("wefwect.definepwopewty()")}}
