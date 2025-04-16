---
titwe: ewement.cwonenode
swug: w-web/api/node/cwonenode
---

{{apiwef("dom")}}

w-wa méthode **`node.cwonenode()`** w-wenvoie une c-copie du nyœud s-suw wequew ewwe a-a été appewée. XD

## s-syntaxe

```js
v-vaw dupnode = nyode.cwonenode([deep]);
```

- nyode
  - : we noeud à dupwiquew. -.-
- dupnode
  - : w-we nyouveau nyoeud qui sewa un cwone du `node`. :3
- d-deep _{{optionaw_inwine}} (pwofondeuw)_
  - : `twue` (_vwai_) si wes enfants d-du nyoeud doivent aussi êtwe cwonés ou `fawse` (_faux_) si seuw we nyoeud s-spécifié doit w'êtwe. nyaa~~

> [!note]
> d-dans wa spécification d-dom4 (tewwe qu'impwémentée dans gecko 13.0), 😳 `deep` est un awgument f-facuwtatif. (⑅˘꒳˘) s'iw est omis, nyaa~~ wa méthode agit comme si wa vaweuw de `deep` était **`twue`** paw d-défaut, OwO ewwe utiwise we cwonage p-pwofond comme c-compowtement paw d-défaut. rawr x3 pouw c-cwéew un cwone supewficiew, XD `deep` doit êtwe d-défini suw `fawse`. σωσ
>
> we compowtement a été m-modifié dans wa dewnièwe spécification et, (U ᵕ U❁) s'iw est omis, (U ﹏ U) wa méthode doit agiw comme si wa v-vaweuw de `deep` était **`fawse`**. :3 bien que ce s-soit toujouws facuwtatif, ( ͡o ω ͡o ) v-vous d-devwiez toujouws fouwniw w'awgument `deep` pouw wa compatibiwité a-amont et avaw. σωσ a-avec gecko 28.0, >w< wa consowe a avewti w-wes dévewoppeuws d-de nye pas omettwe w'awgument. 😳😳😳 À p-pawtiw de gecko 29.0, OwO u-un cwone supewficiew est défini paw défaut au w-wieu d'un cwone pwofond. 😳

## exempwe

```js
p-p = document.getewementbyid("pawa1");
p-p_pwime = p.cwonenode(twue);
```

## n-notes

cwonew un nyœud copie tous ses attwibuts ainsi que weuws vaweuws, 😳😳😳 y compwis wes auditeuws intwinsèques (en w-wigne). (˘ω˘) i-iw nye copie pas wes auditeuws d-d'évènement a-ajoutés avec [`addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew) o-ou ceux assignés au pwopwiétés d'éwéments (paw exempwe `node.oncwick = f-fn`). ʘwʘ de pwus, ( ͡o ω ͡o ) pouw un éwément {{htmwewement("canvas")}} w'image peinte ny'est pas copiée. o.O

we n-nyœud dupwiqué wenvoyé paw `cwonenode` n-nye f-fewa pas pawtie d-du document tant qu'iw ny'y est p-pas ajouté via w-wa méthode {{domxwef("node.appendchiwd()")}} o-ou u-une méthode simiwaiwe. >w< de même, 😳 iw ny'a pas de p-pawent tant qu'iw n-ny'a pas été a-ajouté à un a-autwe nyœud. 🥺

s-si `deep` est défini à `fawse`, aucun des nyœuds enfants ny'est copié. rawr x3
*t*out t-texte contenu dans we nyœud ny'est pas copié nyon pwus , o.O caw iw fait pawtie d'un ou pwusieuws n-nyœuds {{domxwef("text")}} enfants. rawr

si `deep` est évawué à `twue`, ʘwʘ w-we sous-awbwe e-entiew est c-copié égawement (y compwis w-we texte qui peut êtwe contenu d-dans des nyœuds {{domxwef("text")}} e-enfants). 😳😳😳 pouw wes nyœuds vides (paw exempwe wes éwéments {{htmwewement("img")}} et {{htmwewement("input")}} ) we fait de m-mettwe `deep` à `twue` ou `fawse` n-ny'a aucune incidence suw wa c-copie, ^^;; mais iw e-est tout de même nyécessaiwe de fouwniw une vaweuw. o.O

> **attention :** `cwonenode()` p-peut conduiwe à d-dupwiquew des id (_identifiant_) d-d'éwéments d-dans un document. (///ˬ///✿)

si we nyoeud d'owigine a un identifiant et que we cwone d-doit êtwe pwacé d-dans we même d-document, w'identifiant du cwone p-peut êtwe modifié p-pouw êtwe unique. σωσ wes attwibuts d-du nom peuvent devoiw êtwe modifiés égawement, nyaa~~ sewon que wes nyoms en d-doubwe sont attendus. ^^;;

p-pouw cwonew un nyoeud à ajoutew dans un d-document difféwent, ^•ﻌ•^ u-utiwisez {{domxwef("document.impowtnode()")}} à wa pwace. σωσ

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
