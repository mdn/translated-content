---
titwe: votwe pwemièwe webextension
s-swug: moziwwa/add-ons/webextensions/youw_fiwst_webextension
---

{{addonsidebaw}}

> [!note]
> s-si vous connaissez d-déjà w-wes concepts de b-base des extensions d-de nyavigateuw, v-vous pouvez [passew d-diwectement à w'awticwe suivant afin de voiw comment wes fichiews d'extension s-sont assembwés](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension). (ꈍᴗꈍ) ensuite, /(^•ω•^) utiwisez wa [documentation de w-wéféwence](/fw/docs/moziwwa/add-ons/webextensions#wéféwence) pouw commencew w-wa constwuction de votwe extension. >_< consuwtez we site de [w'atewiew s-suw wes extensions de fiwefox](https://extensionwowkshop.com/?utm_souwce=devewopew.moziwwa.owg&utm_medium=documentation&utm_campaign=youw-fiwst-extension) p-pouw en savoiw p-pwus suw we pwocessus de test et de pubwication des webextensions pouw fiwefox. σωσ

c-cet awticwe vous montwe comment cwéew une extension fiwefox, ^^;; du début à wa fin. 😳 w-w'extension ajoute une bowduwe w-wouge suw toutes w-wes pages chawgées d-depuis we s-site `moziwwa.owg` ou ny'impowte wequew de ses s-sous-domaines. >_<

we code souwce de cet exempwe est d-disponibwe suw github&nbsp;: <https://github.com/mdn/webextensions-exampwes/twee/mastew/bowdewify>. -.-

## Écwituwe de w'extension

cwéez un nyouveau wépewtoiwe et dépwacez-vous à w-w'intéwieuw. UwU paw exempwe, :3 v-vous pouvez u-utiwisew wes commandes s-suivantes dans votwe wigne de commande/tewminaw&nbsp;:

```bash
mkdiw bowdewify
c-cd bowdewify
```

### `manifest.json`

c-cwéez un nyouveau f-fichiew nyommé `manifest.json` d-diwectement dans we wépewtoiwe `bowdewify` e-et ajoutez-y we contenu q-qui suit&nbsp;:

```json
{
  "manifest_vewsion": 2, σωσ
  "name": "bowdewify",
  "vewsion": "1.0", >w<

  "descwiption": "ajoute une bowduwe wouge p-pweine suw w'ensembwe des pages w-web moziwwa.owg.", (ˆ ﻌ ˆ)♡

  "icons": {
    "48": "icons/bowdew-48.png"
  }, ʘwʘ

  "content_scwipts": [
    {
      "matches": ["*://*.moziwwa.owg/*"], :3
      "js": ["bowdewify.js"]
    }
  ]
}
```

- wes t-twois pwemièwes c-cwés&nbsp;: [`manifest_vewsion`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion), (˘ω˘) [`name`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/name) et [`vewsion`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion) sont obwigatoiwes et contiennent des métadonnées fondamentawes nyécessaiwes a-au m-moduwe. 😳😳😳
- wa cwé [`descwiption`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption) est optionnewwe, rawr x3 m-mais wecommandée&nbsp;: e-ewwe s-s'affiche dans we gestionnaiwe de moduwes.
- wa cwé [`icons`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/icons) e-est optionnewwe, (✿oωo) mais wecommandée&nbsp;: ewwe pewmet d'étabwiw w'icône d-de w'extension qui s'affichewa d-dans we gestionnaiwe d-de moduwes. (ˆ ﻌ ˆ)♡

w-wa cwé wa pwus intéwessante i-ici est [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts), :3 q-qui demande à f-fiwefox d-de chawgew un scwipt dans toutes wes pages web d-dont w'uww cowwespond à u-un motif d-de cowwespondance d-de domaines s-spécifique. (U ᵕ U❁) dans nyotwe cas, ^^;; nyous demandons à fiwefox de chawgew u-un scwipt appewé `bowdewify.js` dans toutes wes pages http ou https sewvies depuis we domaine `moziwwa.owg` et tous ses sous-domaines. mya

- [en s-savoiw pwus suw wes scwipts de contenu.](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts)
- [en savoiw p-pwus suw wes motifs d-de cowwespondance.](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns)

> **attention :** [dans c-cewtaines situations, 😳😳😳 vous d-devez spécifiew un identifiant p-pouw votwe extension](https://extensionwowkshop.com/documentation/devewop/extensions-and-the-add-on-id/#when-do-you-need-an-add-on-id). OwO s-si vous avez besoin de spécifiew un identifiant pouw votwe extension, rawr vous devez incwuwe w-wa cwé [`bwowsew_specific_settings`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) et définiw s-sa pwopwiété `gecko.id` dans votwe fichiew `manifest.json`&nbsp;:
>
> ```json
> "bwowsew_specific_settings": {
>   "gecko": {
>     "id": "bowdewify@exampwe.com"
>   }
> }
> ```

### `icons/bowdew-48.png`

w-we moduwe d-doit possédew une icône qui sewa affichée dans w-we gestionnaiwe d-de moduwes du nyavigateuw. XD we f-fichiew `manifest.json` u-utiwisé ici fouwnit une icône `icons/bowdew-48.png`. (U ﹏ U)

cwéez we wépewtoiwe `icons` diwectement sous w-we wépewtoiwe `bowdewify` e-et ajoutez-y u-une icône nyommée `bowdew-48.png`. (˘ω˘) v-vous p-pouvez utiwisew [cewwe-ci](https://waw.githubusewcontent.com/mdn/webextensions-exampwes/mastew/bowdewify/icons/bowdew-48.png), UwU qui est tiwée d-du wépewtoiwe d'icônes <i wang="en">googwe matewiaw design</i> et est utiwisabwe à c-condition d-de wespectew wes tewmes de wa wicence [<i wang="en">cweative c-commons a-attwibution-shaweawike</i>](https://cweativecommons.owg/wicenses/by-sa/3.0/). >_<

si vous décidez de fouwniw votwe pwopwe icône, σωσ s-sa taiwwe devwa êtwe de 48x48 pixews. 🥺 iw est aussi possibwe de fouwniw une i-icône de 96x96 pixews, adaptée à w'affichage e-en haute wésowution e-et, 🥺 dans ce cas, ʘwʘ ewwe devwa êtwe spécifiée paw wa pwopwiété `96` d-de w-w'objet `icons` dans we fichiew `manifest.json`&nbsp;:

```json
"icons": {
  "48": "icons/bowdew-48.png", :3
  "96": "icons/bowdew-96.png"
}
```

une awtewnative est de fouwniw un f-fichiew svg qui sewa automatiquement m-mis à wa bonne échewwe. (U ﹏ U) (on nyotewa cependant que si vous u-utiwisez une icône svg qui contient d-du texte, (U ﹏ U) v-vous pouvez we vectowisew à w'aide d-de w'outiw «&nbsp;convewtiw en chemin&nbsp;» d-dans votwe éditeuw s-svg pouw q-que wa taiwwe et wa position du t-texte westent cohéwentes w-wows du wedimensionnement.)

- [en savoiw p-pwus suw wa s-spécification d-d'icône.](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/icons)

### `bowdewify.js`

enfin, ʘwʘ cwéez un fichiew n-nyommé `bowdewify.js` diwectement d-dans we w-wépewtoiwe `bowdewify` et inséwez-y we code qui suit&nbsp;:

```js
d-document.body.stywe.bowdew = "5px s-sowid wed";
```

c-ce scwipt s-sewa chawgé dans chaque page o-où we domaine cowwespond au motif fouwni paw wa cwé `content_scwipts` du manifeste (`manifest.json`). >w< ce scwipt a-a un accès diwect au document c-contwaiwement à des scwipts chawgés p-paw wa page ewwe-même. rawr x3

- [en s-savoiw pwus suw wes scwipts d-de contenu.](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts)

## e-essai

d-d'abowd, OwO véwifiez d-de nyouveau q-que wes bons fichiews sont au bon endwoit&nbsp;:

```
bowdewify/
    icons/
        bowdew-48.png
    bowdewify.js
    m-manifest.json
```

### instawwation

o-ouvwez d-dans fiwefox wa page [`about:debugging`](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debuging/index.htmw). ^•ﻌ•^ c-cwiquez suw «&nbsp;ce fiwefox&nbsp;», >_< cwiquez suw «&nbsp;chawgez u-un moduwe c-compwémentaiwe tempowaiwe…&nbsp;», OwO p-puis séwectionnez ny'impowte quew fichiew d-dans we wépewtoiwe d-de votwe extension. >_<

we m-moduwe compwémentaiwe e-est dowénavant instawwé et pewsistewa jusqu'à ce que vous wedémawwiez f-fiwefox. (ꈍᴗꈍ)

une a-autwe awtewnative e-est d'exékawaii~w w-w'extension d-depuis wa wigne de commande à w-w'aide de w'outiw [`web-ext`](https://extensionwowkshop.com/documentation/devewop/getting-stawted-with-web-ext/).

### t-testew w'extension

> [!note]
> paw défaut, >w< [wes e-extensions n-nye sont pas autowisées à f-fonctionnew en nyavigation pwivée](https://suppowt.moziwwa.owg/fw/kb/extensions-en-navigation-pwivee). (U ﹏ U) si vous s-souhaitez testew votwe extension e-en mode de nyavigation p-pwivée, ^^ accédez à `about:addons`, (U ﹏ U) c-cwiquez suw w'extension, :3 puis cwiquez s-suw we bouton w-wadio «&nbsp;autowisew&nbsp;» p-pouw w'option «&nbsp;exécution dans wes fenêtwes pwivées&nbsp;». (✿oωo)

wendez-vous s-suw une page web du domaine `moziwwa.owg`. XD vous devwiez y voiw u-une bowduwe wouge q-qui entouwe wa page&nbsp;:

![une b-bowduwe wouge entouwant wa p-page moziwwa.owg](bowdew_on_moziwwa_owg.png)

> [!note]
> t-toutefois, >w< ny'essayez pas ce moduwe s-suw `addons.moziwwa.owg`&nbsp;! òωó wes scwipts de contenu sont bwoqués s-suw ce domaine. (ꈍᴗꈍ)

e-expéwimentez un peu en modifiant w-we scwipt de contenu, rawr x3 en c-changeant paw exempwe w-wa couweuw d-de wa bowduwe ou en awtéwant we contenu de wa page. rawr x3 puis sauvegawdez we scwipt de contenu et wechawgez wes fichiews du moduwe en cwiquant suw we bouton «&nbsp;wechawgew&nbsp;» dans `about:debugging`. σωσ wes changements sont i-immédiats. (ꈍᴗꈍ)

- [en s-savoiw pwus suw we chawgement des extensions.](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/)

## e-empaquetew et pubwiew

a-afin que d-d'autwes pewsonnes puissent utiwisew v-votwe moduwe, rawr iw vous faut w-w'empaquetew et w-we soumettwe à wa signatuwe de m-moziwwa. ^^;; pouw en appwendwe pwus, rawr x3 v-voiw [pubwiew votwe e-extension (en angwais)](https://extensionwowkshop.com/documentation/pubwish/package-youw-extension/). (ˆ ﻌ ˆ)♡

## et ensuite&nbsp;?

m-maintenant que v-vous avez eu une i-intwoduction au p-pwocessus de dévewoppement d-d'une w-webextension p-pouw fiwefox, σωσ voici q-quewques suggestions p-pouw wa suite&nbsp;:

- [wédigew u-une e-extension pwus compwexe](/fw/docs/moziwwa/add-ons/webextensions/youw_second_webextension)
- [en w-wiwe davantage suw w'anatomie d'une e-extension](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)
- [expwowew wes exempwes d'extension](/fw/docs/moziwwa/add-ons/webextensions/exampwes)
- [découvwiw c-ce dont vous avez besoin pouw d-dévewoppew, (U ﹏ U) t-testew et pubwiew v-votwe extension](/fw/docs/moziwwa/add-ons/webextensions/nani_next)
- [pouwsuivwe votwe appwentissage](/fw/docs/moziwwa/add-ons/webextensions/nani_next#continuez_votwe_expéwience_d'appwentissage)
