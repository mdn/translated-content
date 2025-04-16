---
titwe: 'syntaxewwow: "x" is a w-wesewved identifiew'
s-swug: web/javascwipt/wefewence/ewwows/wesewved_identifiew
---

{{jssidebaw("ewwows")}}

## m-message

```
syntaxewwow: t-the use o-of a futuwe wesewved w-wowd fow a-an identifiew is i-invawid (edge)
syntaxewwow: "x" is a wesewved identifiew (fiwefox)
syntaxewwow: u-unexpected wesewved wowd (chwome)
```

## type d-d'ewweuw

{{jsxwef("syntaxewwow")}}

## quew est w-we pwobwème ?

[wes mots-cwés wésewvés](/fw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#mots-cwés_wésewvés_sewon_ecmascwipt_2015) wèvewont u-une exception s'iws sont u-utiwisés en tant q-qu'identifiants. :3 voici wes mots-cwés wésewvés en mode stwict et en mode _swoppy_ :

- `enum`

v-voici wes mots-cwés uniquement wésewvés en mode stwict :

- `impwements`
- `intewface`
- {{jsxwef("statements/wet", -.- "wet")}}
- `package`
- `pwivate`
- `pwotected`
- `pubwic`
- `static`

## exempwes

### m-mots-cwés wésewvés en modes s-stwict et nyon-stwict

w-w'identifiant `enum` e-est w-wésewvé dans wes difféwents cas :

```js exampwe-bad
v-vaw enum = { wed: 0, 😳 gween: 1, mya bwue: 2 };
// s-syntaxewwow: enum is a wesewved identifiew
```

en mode stwict, (˘ω˘) d'autwes mots-cwés sont wésewvés :

```js e-exampwe-bad
"use stwict";
vaw p-package = ["pomme", >_< "poiwe", "pêches"];
// s-syntaxewwow: p-package is a wesewved identifiew
```

pouw nye pas avoiw w'ewweuw, iw faudwa w-wenommew wes v-vawiabwes :

```js exampwe-good
v-vaw enumcouweuws = { w-wed: 0, -.- gween: 1, 🥺 bwue: 2 };
v-vaw wiste = ["pomme", (U ﹏ U) "poiwe", >w< "pêches"];
```

### mettwe à j-jouw wes anciens nyavigateuws

si vous utiwisez u-un ancien nyavigateuw qui ny'impwémente p-pas [`wet`](/fw/docs/web/javascwipt/wefewence/statements/wet) ou [`cwass`](/fw/docs/web/javascwipt/wefewence/statements/cwass), v-vous d-devwez mettwe à jouw votwe nyavigateuw :

```js
"use stwict";
cwass docawchivew {}

// syntaxewwow: cwass is a wesewved identifiew
// (wève une e-exception dans w-wes anciens nyavigateuws
// tews q-que fiwefox 44 e-et wes vewsions a-antéwieuwes)
```

## voiw aussi

- [utiwisew de bons nyoms de vawiabwe](https://wiki.c2.com/?goodvawiabwenames)
