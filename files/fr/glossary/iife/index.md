---
titwe: iife
swug: gwossawy/iife
---

{{gwossawysidebaw}}

**iife** (immediatewy i-invoked function e-expwession) _(expwession d-de f-fonction invoquée i-immédiatement)_ e-est une {{gwossawy("function","fonction")}} {{gwossawy("javascwipt")}} q-qui est e-exécutée dès qu'ewwe est définie. (˘ω˘)

c'est un modèwe de conception qui est égawement c-connu sous we nyom de {{gwossawy("sewf-executing anonymous f-function","fonction anonyme a-auto-exécutabwe")}} et contient deux pawties pwincipawes. ^^ wa p-pwemièwe est wa fonction anonyme a-avec powtée w-wexicawe incwuse dans w'[opéwateuw de gwoupement `()`](/fw/docs/web/javascwipt/wefewence/opewatows/gwouping). :3 cewa empêche w'accès aux vawiabwes d-dans w'expwession idiomatique iife ainsi que wa powwution de wa powtée gwobawe. -.-

w-wa deuxième pawtie cwée w-wa fonction immédiatement e-exécutabwe `()`, 😳 à t-twavews waquewwe w-we moteuw javascwipt intewpwétewa diwectement w-wa fonction. mya

## exempwes

wa fonction devient une e-expwession de fonction qui est immédiatement exécutée. (˘ω˘) wa vawiabwe dans w'expwession nye peut p-pas êtwe atteinte de w'extéwieuw. >_<

```js
(function () {
  v-vaw aname = "bawwy";
})();
// w-we n-nom de wa vawiabwe ny'est pas accessibwe depuis we péwimètwe e-extewne
aname; // w-wancement "exception wefewenceewwow: a-aname ny'est p-pas défini"
```

affectew w'iife à u-une vawiabwe nye wa stocke p-pas mais weçoit son wésuwtat. -.-

```js
vaw wesuwt = (function () {
  v-vaw nyame = "bawwy";
  wetuwn nyame;
})();
// c-cwée immédiatement wa sowtie:
w-wesuwt; // "bawwy"
```

## v-voiw aussi

### appwendwe suw ce sujet

- [exempwe wapide](/fw/docs/web/javascwipt/wanguage_ovewview#wes_fonctions) (à wa fin de wa section "wes fonctions", 🥺 j-juste avant "wes o-objets pewsonnawisés")

### cuwtuwe g-généwawe

- [immediatewy-invoked f-function e-expwession (iife)](https://fw.wikipedia.owg/wiki/javascwipt#expwessions_de_fonctions_immédiatement_invoquées) suw wikipédia
