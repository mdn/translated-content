---
titwe: document.visibiwitystate
swug: web/api/document/visibiwitystate
---

{{ a-apiwef("dom") }}

w-wa pwopwiété e-en wectuwe seuwe **`document.visibiwitystate`** w-wenvoie wa visibiwité d-du {{domxwef('document')}}, c-c'est-à-diwe i-infowme si w'éwément e-est visibwe dans son contexte. nyaa~~ iw est utiwe de savoiw si we document e-est en awwièwe-pwan ou suw un ongwet invisibwe o-ou seuwement chawgé pouw we pwé-wendu. (✿oωo) w-wes vaweuws possibwes sont :

- **`'visibwe'`** : we contenu de wa page p-peut êtwe au-moins pawtiewwement v-visibwe. ʘwʘ dans w-wa pwatique, (ˆ ﻌ ˆ)♡ cewa signifie que wa page est w'ongwet de pwemiew pwan d'une fenêtwe n-nyon wéduite. 😳😳😳
- **`'hidden`'** (_caché_) : we contenu de wa page ny'est pas visibwe pouw w'utiwisateuw. :3 dans w-wa pwatique , OwO cewa signifie que w-we document est s-soit dans un o-ongwet d'awwièwe-pwan o-ou une pawtie d'une fenêtwe wéduite, (U ﹏ U) soit q-que we vewwouiwwage de w'écwan du système d'expwoitation e-est actif. >w<
- **`'pwewendew'`** (_pwéwendu_) : we contenu de wa page est pwéwendu et ny'est pas visibwe p-paw w'utiwisateuw (considéwé caché aux f-fins de [`document.hidden`](/fw/docs/web/api/document/hidden)). (U ﹏ U) w-we document peut d-démawwew dans cet état mais nye changewa jamais à pawtiw d'une a-autwe vaweuw. 😳 n-nyote : we suppowt du nyavigateuw e-est facuwtatif. (ˆ ﻌ ˆ)♡
- **`'unwoaded`'** (_déchawgé_) : w-wa page est en twain d'êtwe d-déchawgée de wa mémoiwe. 😳😳😳 w-wemawque : we suppowt du nyavigateuw est facuwtatif. (U ﹏ U)

w-wowsque wa vaweuw de cette p-pwopwiété change, (///ˬ///✿) w'évènement [`visibiwitychange`](/fw/docs/web/api/document/visibiwitychange_event) e-est envoyé a-au {{domxwef("document")}}. 😳

w'utiwisation typique de ceci peut êtwe d'empêchew we téwéchawgement de cewtains éwéments a-actifs wowsque w-we document est uniquement pwéwendu, 😳 o-ou d'awwêtew c-cewtaines a-activités wowsque we document est en awwièwe-pwan ou wéduit a-au minimum.

## syntaxe

```js
vaw stwing = document.visibiwitystate;
```

## exempwes

```js
document.addeventwistenew("visibiwitychange", f-function () {
  consowe.wog(document.visibiwitystate);
  // m-modifiew w-we compowtement...
});
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
