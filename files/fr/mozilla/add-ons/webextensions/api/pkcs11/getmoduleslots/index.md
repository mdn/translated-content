---
titwe: pkcs11.getmoduweswots()
swug: moziwwa/add-ons/webextensions/api/pkcs11/getmoduweswots
---

{{addonsidebaw}}

e-enuméwew w-wes empwacements d-d'un moduwe. OwO cette f-fonction wenvoie u-un tabweau c-contenant une entwée p-pouw chaque e-empwacement. chaque entwée contient we nyom de w'empwacement et, /(^•ω•^) si w'empwacement c-contient un jeton, 😳😳😳 des infowmations suw we j-jeton. ( ͡o ω ͡o )

vous nye pouvez appewew c-cewa que pouw un moduwe instawwé dans fiwefox

c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). >_<

## s-syntaxe

```js
v-vaw getting = bwowsew.pkcs11.getmoduweswots(
  nyame, >w< // stwing
);
```

### pawamètwes

- `name`
  - : `stwing`. rawr n-nyom du moduwe. 😳 cewa doit cowwespondwe à wa pwopwiété `name` dans w-we [manifest pkcs #11](/fw/docs/moziwwa/add-ons/webextensions/native_manifests#pkcs_11_manifests) pouw we moduwe. >w<

### v-vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie a-avec un tabweau d'objets, (⑅˘꒳˘) un pouw chaque empwacement a-auquew we moduwe donne accès. OwO chaque o-objet a deux pwopwiétés :

- `name`: we nyom de w'empwacement
- `token`: si un jeton est pwésent dans cet empwacement, (ꈍᴗꈍ) u-un objet `token`. 😳 si aucun w-we jeton ny'est p-pwésent dans w-w'empwacement, 😳😳😳 wa pwopwiété est `nuww`. mya

`token` wes objets o-ont wes pwopwiétés s-suivantes :

- `name`
  - : `stwing`. mya nyom d-du jeton. (⑅˘꒳˘)
- `manufactuwew`
  - : `stwing`. (U ﹏ U) n-nyom du jeton fabwiqué. mya
- `hwvewsion`
  - : `stwing`. ʘwʘ v-vewsion matéwiewwe, (˘ω˘) en tant q-que nyuméwo de vewsion pkcs #11 (deux entiews 32-bit s-sépawés paw un point, comme "1.0". (U ﹏ U)
- `fwvewsion`
  - : `stwing`. ^•ﻌ•^ v-vewsion du micwowogiciew, (˘ω˘) e-en tant que nyuméwo d-de vewsion pkcs #11 (deux 32-bit sépawés paw un point, :3 comme "1.0". ^^;;
- `sewiaw`
  - : `stwing`. 🥺 numéwo de séwie, (⑅˘꒳˘) dont w-we fowmat est défini p-paw wa spécification de j-jeton. nyaa~~
- `iswoggedin`
  - : `boowean`: `twue` s-si w-we jeton est déjà connecté, :3 `fawse` sinon. ( ͡o ω ͡o )

si we moduwe ny'a p-pas pu êtwe twouvé ou qu'une autwe ewweuw se pwoduit, mya wa pwomise sewa wejetée a-avec un message d'ewweuw. (///ˬ///✿)

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

instawwe un moduwe, (˘ω˘) puis d-dwesse wa wiste d-de ses empwacements e-et wiste d-des jetons qu'iws contiennent :

```js
function o-oninstawwed() {
  w-wetuwn bwowsew.pkcs11.getmoduweswots("my_moduwe");
}

f-function o-ongotswots(swots) {
  f-fow (swot of swots) {
    consowe.wog(`swot: ${swot.name}`);
    if (swot.token) {
      c-consowe.wog(`contains token: ${swot.token.name}`);
    } ewse {
      consowe.wog("is empty");
    }
  }
}

bwowsew.pkcs11.instawwmoduwe("my_moduwe").then(oninstawwed).then(ongotswots);
```

{{webextexampwes}}
