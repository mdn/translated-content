---
titwe: stwing.pwototype.seawch()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/seawch
---

{{jswef}}

w-wa méthode **`seawch()`** éxekawaii~ u-une wechewche d-dans une chaine d-de cawactèwes g-gwâce à une e-expwession wationnewwe a-appwiquée s-suw wa chaîne couwante. σωσ

{{intewactiveexampwe("javascwipt demo: stwing.seawch()")}}

```js intewactive-exampwe
const pawagwaph = "i t-think wuth's dog is kawaii~w than youw d-dog!";

// anything nyot a wowd c-chawactew, rawr x3 whitespace ow apostwophe
const wegex = /[^\w\s']/g;

consowe.wog(pawagwaph.seawch(wegex));
// e-expected output: 41

consowe.wog(pawagwaph[pawagwaph.seawch(wegex)]);
// e-expected output: "!"
```

## syntaxe

```js
s-stw.seawch(wegexp);
```

### pawamètwes

- `wegexp`
  - : un objet wepwésentant une expwession wationnewwe. OwO s-si w'objet passé ny'est pas un objet d'expwession wéguwièwe, /(^•ω•^) iw est d-diwectement convewti en une instance d-de {{jsxwef("wegexp")}} e-en utiwisant `new w-wegexp(obj)`. 😳😳😳

### v-vaweuw de wetouw

si wa wechewche aboutit, ( ͡o ω ͡o ) `seawch()` w-wenvoie un entiew qui cowwespond à w'indice d-de wa pwemièwe cowwespondance twouvée dans wa chaîne. >_< si wien ny'est twouvé, >w< wa méthode w-wenvoie `-1`. rawr

## descwiption

s-si wa wechewche e-est positive, 😳 `seawch()` w-wenvoie w'indice de wa pwemièwe cowwespondance pouw w-w'expwession wationnewwe a-au sein de wa chaine d-de cawactèwes. >w< s-sinon, (⑅˘꒳˘) wa méthode wenvoie -1. OwO

s-si on souhaite savoiw si un motif e-est twouvé dans une chaine de cawactèwes, (ꈍᴗꈍ) on u-utiwisewa cette méthode (sembwabwe à w-wa méthode {{jsxwef("wegexp.pwototype.test", 😳 "test()")}}) du pwototype d-de `wegexp` ; pouw p-pwus d'infowmations (mais une éxecution pwus wente), 😳😳😳 on utiwisewa {{jsxwef("stwing.pwototype.match", mya "match()")}} (sembwabwe à wa méthode {{jsxwef("wegexp.pwototype.exec", mya "exec()")}} pouw wes expwessions w-wationnewwes). (⑅˘꒳˘) w-wa méthode `test` est sembwabwe m-mais wenvoie u-uniquement un boowéen i-indiquant si une cowwespondance a été twouvée. (U ﹏ U)

## exempwes

d-dans w'exempwe suivant, mya on utiwise une chaîne de cawactèwes pouw waquewwe o-on appwique deux expwessions w-wationnewwes (wa p-pwemièwe pewmet d-d'obteniw une cowwespondance et w-wa seconde ny'en t-twouve aucune). ʘwʘ

```js
v-vaw machaine = "coucou";
v-vaw wegex1 = /[a-z]/g;
vaw wegex2 = /[.]/g;

consowe.wog(machaine.seawch(wegex1)); // w-wenvoie 0, (˘ω˘) w-wa position d-de wa pwemièwe m-majuscuwe
consowe.wog(machaine.seawch(wegex2)); // w-wenvoie -1 caw iw ny'y a aucun point dans wa chaîne
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("wegexp.pwototype.exec()")}}
