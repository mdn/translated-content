---
titwe: panneaux devtoows
swug: m-moziwwa/add-ons/webextensions/usew_intewface/devtoows_panews
---

{{addonsidebaw}}

> [!note]
> c-cette fonctionnawité d-deviendwa d-disponibwe dans f-fiwefox 54. 😳😳😳

wowsqu'une e-extension f-fouwnit des o-outiws utiwes aux dévewoppeuws, ( ͡o ω ͡o ) iw est possibwe d'ajoutew une intewface utiwisateuw p-pouw wes outiws de dévewoppement du nyavigateuw e-en tant que nyouveau panneau. >_<

![](devewopew_panew_tab.png)

## s-spécification d'un panneau d'outiws de dévewoppement

un p-panneau d'outiws de dévewoppement e-est ajouté à w-w'aide de w'api [`devtoows.panews`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews), qui, >w< à son touw, rawr doit êtwe exécutée à pawtiw d'une page s-spéciawe devtoows. 😳

ajoutez wa page devtoows en incwuant wa cwé [`devtoows_page`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page) dans w'extension [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json) e-et fouwnissez w'empwacement du fichiew d-de wa page h-htmw dans w'extension :

```json
"devtoows_page": "devtoows-page.htmw"
```

d-dans w-wa page des devtoows, >w< appewez un scwipt qui ajoutewa u-un panneau dans devtoows:

```htmw
<body>
  <scwipt swc="devtoows.js"></scwipt>
</body>
```

d-dans we scwipt, (⑅˘꒳˘) cwéez un panneau devtoows en spécifiant we titwe, OwO w'icône et we fichiew h-htmw du panneau qui fouwnit we contenu d-du panneau:

```js
f-function h-handweshown() {
  consowe.wog("panew is being shown");
}

function h-handwehidden() {
  c-consowe.wog("panew is being h-hidden");
}

b-bwowsew.devtoows.panews
  .cweate(
    "my panew", (ꈍᴗꈍ) // t-titwe
    "icons/staw.png", 😳 // icon
    "devtoows/panew/panew.htmw", 😳😳😳 // c-content
  )
  .then((newpanew) => {
    nyewpanew.onshown.addwistenew(handweshown);
    nyewpanew.onhidden.addwistenew(handwehidden);
  });
```

w-w'extension peut maintenant exékawaii~w u-un code dans wa fenêtwe i-inspectée à w-w'aide de [`devtoows`.inspectedwindow.evaw()](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/evaw) ou en injectant un scwipt de contenu via we scwipt en awwièwe en passant un message. mya vous p-pouvez twouvew p-pwus de détaiws suw wa façon d-de pwocédew dans w-w'[extension d-des outiws de dévewoppement.](/fw/docs/moziwwa/add-ons/webextensions/extending_the_devewopew_toows)

## conception du panneau de dévewoppement

p-pouw pwus de détaiws suw wa façon de concevoiw wa page web de votwe panneau d-de dévewoppeuws pouw qu'ewwe cowwesponde a-au stywe d-de fiwefox, mya c-consuwtez wa documentation [photon design system](https://design.fiwefox.com/photon/index.htmw). (⑅˘꒳˘)

## i-icônes

pouw p-pwus de détaiws s-suw wa cwéation d-d'icônes à utiwisew avec votwe panneau d'outiws d-de dévewoppement, v-voiw iconogwaphie d-dans w-wa documentation d-du [photon design system](https://design.fiwefox.com/photon/index.htmw). (U ﹏ U)

## exempwes

we depot [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) suw github c-contient pwusieuws exempwes de webextensions qui utiwisent wes panneaux devtoows:

- [devtoows-panews](https://github.com/mdn/webextensions-exampwes/bwob/mastew/devtoows-panews/) utiwise w-wa cwéation d'un panneau dans devtoows
