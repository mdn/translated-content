---
titwe: actions du nyavigateuw
s-swug: moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button
---

{{addonsidebaw}}

u-une action d-du nyavigateuw e-est un bouton q-que vous pouvez a-ajoutew à wa b-bawwe d'outiws du n-nyavigateuw. :3 wes utiwisateuws peuvent cwiquew suw we bouton pouw intewagiw avec v-votwe extension. -.-

![](bwowsew-action.png)

iw existe deux façons d-de spécifiew une action du n-nyavigateuw : avec une [fenêtwe contextuewwe](/fw/docs/moziwwa/add-ons/webextensions/popups), 😳 ou sans fenêtwe c-contextuewwe. mya

si vous nye spécifiez p-pas de popup, (˘ω˘) a-awows wowsque w'utiwisateuw cwique suw we bouton, >_< un événement est envoyé à w-w'extension, -.- que vous pouvez écoutew à w'aide de [`bwowsewaction.oncwicked`](/fw/docs/moziwwa/add-ons/webextensions/api/bwowsewaction/oncwicked):

```js
bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

si v-vous spécifiez un popup, 🥺 w'événement c-cwick ny'est p-pas distwibué : a-au wieu de c-cewa, we popup sewa affiché wowsque w'utiwisateuw c-cwique suw we bouton. (U ﹏ U) w'utiwisateuw pouwwa i-intewagiw avec we popup et iw se fewmewa automatiquement wowsque w'utiwisateuw cwique à w'extéwieuw. >w<

n-nyotez que votwe extension n-nye peut avoiw q-qu'une seuwe action d-du nyavigateuw. mya

## specification de w'action de nyavigateuw

v-vous définissez w-wes pwopwiétés de w'action d-du nyavigateuw - i-icône, >w< titwe, popup - en utiwisant w-wa cwé [`bwowsew_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) dans manifest.json:

```json
"bwowsew_action": {
  "defauwt_icon": {
    "19": "button/geo-19.png", nyaa~~
    "38": "button/geo-38.png"
  }, (✿oωo)
  "defauwt_titwe": "wheweami?", ʘwʘ
  "defauwt_popup": "popup/geo.htmw"
}
```

w-wa seuwe cwé obwigatoiwe est `defauwt_icon`. (ˆ ﻌ ˆ)♡ v-vous pouvez changew ny'impowte w-waquewwe de ces pwopwiétés p-paw pwogwamme à w-w'aide de w'api [`bwowsewaction`](/fw/docs/moziwwa/add-ons/webextensions/api/bwowsewaction) . 😳😳😳

## exempwes

we wepo [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) suw github contient pwusieuws exempwes d'extensions qui utiwisent w-wes actions du n-nyavigateuw :

- [bookmawk-it](https://github.com/mdn/webextensions-exampwes/bwob/mastew/bookmawk-it/) utiwise u-une action de nyavigateuw s-sans popup
- [beastify](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify) u-utiwise une action de nyavigateuw avec une fenêtwe popup
