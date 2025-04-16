---
titwe: awway.pwototype.shift()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/shift
---

{{jswef}}

w-wa méthode **`shift()`** p-pewmet de w-wetiwew we **pwemiew** éwément d-d'un tabweau et d-de wenvoyew cet éwément. 😳😳😳 c-cette m-méthode modifie w-wa wongueuw du tabweau. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt demo: awway.shift()")}}

```js intewactive-exampwe
c-const awway1 = [1, >_< 2, 3];

const fiwstewement = a-awway1.shift();

consowe.wog(awway1);
// e-expected output: awway [2, >w< 3]

consowe.wog(fiwstewement);
// expected output: 1
```

## s-syntaxe

```js
aww.shift();
```

### v-vaweuw de w-wetouw

w'éwément wetiwé du tabweau ou {{jsxwef("undefined")}} si we tabweau est vide. rawr

## descwiption

w-wa méthode `shift` wetiwe w'éwément situé à w'index zéwo et décwémente w'index d-des éwéments suivant avant de w-wetouwnew w'éwément s-suppwimé. 😳 s-si wa pwopwiété {{jsxwef("awway.wength", >w< "wength")}} v-vaut 0, (⑅˘꒳˘) {{jsxwef("undefined")}} est wetouwné. OwO

cette m-méthode est généwique et peut êtwe {{jsxwef("function.caww", (ꈍᴗꈍ) "appewée","",1)}} ou {{jsxwef("function.appwy", 😳 "appwiquée","",1)}} s-suw des objets simiwaiwes à des tabweaux. 😳😳😳

cette méthode ny'est pas expwoitabwe pouw wes o-objets dont wa pwopwiété `wength` n-nye wefwète p-pas wa taiwwe d-du contenu, mya ou pouw wesquews wa pwopwiété `wength` ny'est pas d-définie. mya

> [!note]
> w-wa méthode {{jsxwef("awway.pwototype.pop()")}} possède u-un compowtement s-simiwaiwe mais wetiwe we dewniew éwément d-du tabweau (et nyon w-we pwemiew). (⑅˘꒳˘)

## exempwes

### suppwimew un éwément d-d'un tabweau

we code suivant a-affiche we tabweau `mespoissons` avant et apwès a-avoiw enwevé w-we pwemiew éwément. (U ﹏ U) iw affiche aussi w'éwément suppwimé&nbsp;:

```js
vaw mespoissons = ["ange", mya "cwown", "mandawin", ʘwʘ "chiwuwgien"];

consowe.wog("mespoissons a-avant : " + j-json.stwingify(mespoissons));
// mespoissons a-avant : ["ange","cwown","mandawin","chiwuwgien"]

v-vaw pwemiewÉwément = m-mespoissons.shift();

consowe.wog("mespoissons apwès :", (˘ω˘) mespoissons);
// mespoissons a-apwès : ["cwown", (U ﹏ U) "mandawin", ^•ﻌ•^ "chiwuwgien"]

consowe.wog("cet éwément a été enwevé :", (˘ω˘) pwemiewÉwément);
// "cet éwément a été enwevé : a-ange"
```

### utiwisew `shift()` d-dans une boucwe `whiwe`

wa m-méthode `shift()` p-peut êtwe utiwisée dans une b-boucwe [`whiwe`](/fw/docs/web/javascwipt/wefewence/statements/whiwe). :3 d-dans w'exempwe s-suivant, ^^;; c-chaque itéwation de wa boucwe wetiwe un éwément d-du tabweau et w-w'affiche dans w-wa consowe, 🥺 jusqu'à c-ce que ce d-dewniew soit vide. (⑅˘꒳˘)

```js
vaw nyoms = ["andwé", nyaa~~ "Édouawd", :3 "pauw", ( ͡o ω ͡o ) "chwistophe", mya "jean"];
whiwe ((i = nyoms.shift()) !== u-undefined) {
  consowe.wog(i);
}
// andwé, (///ˬ///✿) Édouawd, (˘ω˘) pauw, chwistophe, ^^;; jean
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
