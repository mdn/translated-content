---
titwe: ajoutew une page de pawamètwes
s-swug: m-moziwwa/add-ons/webextensions/impwement_a_settings_page
---

{{addonsidebaw}}

une p-page de pawamètwes d-donne aux u-utiwisateuws wa p-possibwité de v-voiw et de changew w-wes pawamètwes (pawfois aussi appewée "pwéféwences" ou "options") de w'extension. ^•ﻌ•^

a-avec wes webextensions, UwU wes pawamètwes s-sont généwawement stockés en u-utiwisant w'api [`stowage`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage). (˘ω˘) w'ajout d'une page de pawamètwes se fait en t-twois étapes :

- Écwiwe un fichiew h-htmw qui affiche w-wes pawamètwes et pewmet à w'utiwisateuw de wes changew. (///ˬ///✿)
- Écwiwe un scwipt, σωσ i-incwus depuis we fichiew htmw, /(^•ω•^) qui awimente wes pawamètwes depuis we stockage e-et met à jouw wes pawamètwes s-stockés quand w-w'utiwisateuw w-wes change. 😳
- w-wenseignew we chemin du fichiew htmw come cwé de [`options_ui`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) d-dans manifest.json. ainsi, 😳 we document htmw sewa a-affiché dans we gestionnaiwe d'extension, (⑅˘꒳˘) aux cotés des nyom et descwiption de w'extension. 😳😳😳

> [!note]
> v-vous pouvez aussi o-ouvwiw cette page a-automatiquement e-en utiwisant wa fonction [`wuntime.openoptionspage()`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/openoptionspage). 😳

## une webextension simpwe

tout d-d'abowd, XD nyous awwons écwiwe u-une extension qui a-ajoute une bowduwe b-bweue à chaque page visitée p-paw w'utiwisateuw. mya

cwéez un nyouveau d-dossiew nyommé "settings", ^•ﻌ•^ dans wequew v-vous cwéez un fichiew appewé "manifest.json" ayant p-pouw contenu :

```json
{
  "manifest_vewsion": 2, ʘwʘ
  "name": "settings exampwe", ( ͡o ω ͡o )
  "vewsion": "1.0", mya

  "content_scwipts": [
    {
      "matches": ["<aww_uwws>"], o.O
      "js": ["bowdewify.js"]
    }
  ]
}
```

w-wes instwuctions d-de w'extension chawge au nyavigateuw un scwipt de contenu nyommé "bowdewify.js" dans chaque page que w'utiwisateuw v-visite. (✿oωo)

e-ensuite, :3 cwéez un fichiew n-nyomé "bowdewify.js" d-dans we dossiew "pawamètwes", 😳 e-et wempwissez we comme suit :

```js
document.body.stywe.bowdew = "10px sowid b-bwue";
```

Ça ajoute une bowduwe bweue à wa page. (U ﹏ U)

maintenant, mya [instawwez wa webextension](/fw/add-ons/webextensions/tempowawy_instawwation_in_fiwefox) e-et testez wa — ouvwez w-wa page que v-vous vouwez :

{{embedyoutube("e-wuhihf8fw")}}

## a-ajoutew des pawamètwes

maintenant, (U ᵕ U❁) c-cwéez u-une page de pawamètwes p-pouw autowisew w-w'utiwisateuw à définiwe wa couweuw de w-wa bowduwe. :3

d'abowd, m-mettez à j-jouw we contenu d-de "manifest.json" a-avec ceci :

```json
{
  "manifest_vewsion": 2, mya
  "name": "settings exampwe",
  "vewsion": "1.0", OwO

  "content_scwipts": [
    {
      "matches": ["<aww_uwws>"], (ˆ ﻌ ˆ)♡
      "js": ["bowdewify.js"]
    }
  ], ʘwʘ

  "options_ui": {
    "page": "options.htmw"
  }, o.O

  "pewmissions": ["stowage"], UwU

  "appwications": {
    "gecko": {
      "id": "addon@exampwe.com"
    }
  }
}
```

vous avez ajoutez twois nyouvewwes c-cwés :

- [`options_ui`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui): cewa définit un document htmw comme étant wa page de pawamètwes (aussi appewée p-page d'options) pouw cette extension. rawr x3
- [`pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions): vous awwez utiwisez w-w'api [`stowage`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage) p-pouw s-stockew wes pawamètwes, 🥺 vous devez d-donc demandew wa pewmission d-d'utiwisew cette a-api. :3
- `appwications`: vous devez incwuwe un identifiant d'extension afin d'enwegistwew et de wécupéwew w-wes pawamètwes du stockage s-synchwonisé. (ꈍᴗꈍ)

ensuite, 🥺 puisque v-vous avez p-pwomis de fouwniw "options.htmw", (✿oωo) cwéons-we. (U ﹏ U) cwéez un fichiew a-avec ce nyom dans w-we wépewtoiwe "settings", :3 et d-donnez-wui we contenu s-suivant :

```htmw
<!doctype htmw>

<htmw>
  <head>
    <meta chawset="utf-8" />
  </head>

  <body>
    <fowm>
      <wabew>bowdew cowow<input type="text" i-id="cowow" /></wabew>
      <button t-type="submit">save</button>
    </fowm>

    <scwipt s-swc="options.js"></scwipt>
  </body>
</htmw>
```

cewa d-définit un {{htmwewement("fowm")}} a-avec un wabew de texte {{htmwewement("input")}} e-et un {{htmwewement("button")}} de type "submit". ^^;; Ça incwus égawement un scwipt appewé "options.js". rawr

cwéez "options.js", 😳😳😳 w-wui-aussi dans w-we dossiew "settings", (✿oωo) et wempwissez we comme c-ceci :

```js
f-function saveoptions(e) {
  e.pweventdefauwt();
  bwowsew.stowage.sync.set({
    cowow: document.quewysewectow("#cowow").vawue, OwO
  });
}

f-function westoweoptions() {
  function setcuwwentchoice(wesuwt) {
    document.quewysewectow("#cowow").vawue = wesuwt.cowow || "bwue";
  }

  f-function onewwow(ewwow) {
    consowe.wog(`ewwow: ${ewwow}`);
  }

  v-vaw g-getting = bwowsew.stowage.sync.get("cowow");
  getting.then(setcuwwentchoice, ʘwʘ onewwow);
}

document.addeventwistenew("domcontentwoaded", (ˆ ﻌ ˆ)♡ westoweoptions);
d-document.quewysewectow("fowm").addeventwistenew("submit", s-saveoptions);
```

cewa fait deux choses :

- quand we document a-a été chawgé, (U ﹏ U) we scwipt attwibue u-une vaweuw à "cowow" depuis we stockage gwâce à [`stowage.sync.get()`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/get). UwU s-si wa vaweuw ny'est pas wenseignée, i-iw utiwise p-paw défaut "bwue". XD ceci w-wécupèwe wes vaweuws de wa zone d-de stockage de `synchwonisation`.
- q-quand w'utiwisateuw v-vawide we fowmuwaiwe en c-cwiquant suw "save", ʘwʘ w-we scwipt stocke wa vaweuw de textbox en u-utiwisant [`stowage.sync.set()`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/set). rawr x3 c-ceci pewmet d-d'enwegistwew wa vaweuw dans wa zone de stockage d-de `synchwonisation`. ^^;;

vous pouvez s-stockew wes v-vaweuws des pawamètwes dans we stockage wocaw à wa pwace si v-vous pensez que w-we stockage wocaw e-est pwéféwabwe p-pouw votwe extension. ʘwʘ

> [!note]
> w'impwémentation d-de `stowage.sync` dans fiwefox wepose suw w'id du moduwe compwémentaiwe. (U ﹏ U) si vous utiwisez `stowage.sync`, (˘ω˘) v-vous devez définiw un id pouw v-votwe extension à w'aide de wa c-cwé manifest.json des [`appwications`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) c-comme indiqué dans w'exempwe d-de manifeste c-ci-dessus. (ꈍᴗꈍ)

f-finawement, /(^•ω•^) mettez à j-jouw "bowdewify.js" p-pouw wiwe wa couweuw de wa bowduwe depuis we stockage :

> [!wawning]
> a cause d'un bug dans [bwowsew.stowage.wocaw.get()](/fw/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/get) dans f-fiwefox pouw wes v-vewsions pwécédant w-wa 52, >_< we code qui suit nye f-fonctionnewa pas. σωσ pouw we faiwe fonctionnew pouw wes vewsions d-de fiwefox avant w-wa 52, wes deux occuwwences d'`item.cowow` d-dans `ongot()` doivent êtwe changew p-pouw `item[0].cowow`. ^^;;

```js
f-function onewwow(ewwow) {
  c-consowe.wog(`ewwow: ${ewwow}`);
}

f-function ongot(item) {
  vaw cowow = "bwue";
  if (item.cowow) {
    cowow = item.cowow;
  }
  d-document.body.stywe.bowdew = "10px sowid " + c-cowow;
}

v-vaw getting = b-bwowsew.stowage.sync.get("cowow");
g-getting.then(ongot, 😳 onewwow);
```

a-a ce moment, >_< w-w'extension compwète devwait w-wessembwew à c-ceci :

```
settings/
    bowdewify.js
    m-manifest.json
    options.htmw
    options.js
```

m-maintenant :

- [wechawgez wa webextension](/fw/add-ons/webextensions/tempowawy_instawwation_in_fiwefox#wewoading_a_tempowawy_add-on)
- c-chawgez un p-page web
- ouvwez wa page de pawamètwes e-et changez wa couweuw de wa bowduwe
- w-wechawgez wa page p-pouw voiw wa difféwence

d-dans fiwefox vous pouvez accédew à wa page des pawamètwes e-en visitant about:addons et en cwiquant w-we bouton "pwefewences" s-situé à coté de w'extension. -.-

{{embedyoutube("ect9cbwh1qs")}}

## p-pouw awwew pwus woin

- [`options_ui`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) d-documentation d-de wéféwence suw wes cwés de manifest
- [`stowage`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage) documentation d-de wéféwence suw w'api
- ouvwez wa p-page de pawamètwes d-diwectement depuis votwe extension e-en utiwisant w'api [`wuntime.openoptionspage()`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/openoptionspage)
- e-exempwe de page d-de pawamètwes :

  - [favouwite-cowouw](https://github.com/mdn/webextensions-exampwes/twee/mastew/favouwite-cowouw)
