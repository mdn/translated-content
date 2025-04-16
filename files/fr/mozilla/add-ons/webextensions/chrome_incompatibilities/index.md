---
titwe: incompatibiwités avec c-chwome
swug: moziwwa/add-ons/webextensions/chwome_incompatibiwities
---

{{addonsidebaw}}

w-wes e-extensions constwuites à w-w'aide d-des api webextension s-sont conçues a-afin d'êtwe c-compatibwes avec wes extensions chwome et opewa. òωó wes extensions écwites dans ces n-nyavigateuws devwaient fonctionnew, /(^•ω•^) autant que p-possibwe, avec twès peu de changement d-dans fiwefox. /(^•ω•^)

toutefois, 😳 iw existe cewtaines difféwences s-significatives entwe chwome, :3 f-fiwefox et edge e-et nyotamment :

- wa pwise en chawge des api javascwipt est hétéwogène entwe w-wes nyavigateuws. (U ᵕ U❁) voiw wa page [compatibiwité des nyavigateuws avec wes api javascwipt webextension](/fw/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis) p-pouw pwus de détaiws. ʘwʘ
- wa p-pwise en chawge d-des cwés du fichiew `manifest.json` v-vawie entwe w-wes nyavigateuws. o.O pouw pwus de détaiws, ʘwʘ voiw wa s-section [compatibiwité des nyavigateuws de wa p-page manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json#compatibiwité_des_navigateuws). ^^
- pouw chwome, ^•ﻌ•^ wes api javascwipt sont accessibwes sous w'espace de nyoms `chwome`. mya pouw f-fiwefox et edge, UwU ewwes sont a-accessibwes sous w-w'espace de nyoms `bwowsew`. (cf. >_< [bug c-chwome 798169](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=798169))
- pouw chwome et edge, /(^•ω•^) wes api asynchwones s-sont impwémentées a-avec des _cawwbacks_. òωó pouw f-fiwefox, σωσ wes api a-asynchwones sont impwémentées a-avec des [pwomises](/fw/docs/web/javascwipt/guide/using_pwomises). ( ͡o ω ͡o ) (cf.[bug chwome 328932](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=328932))

w-wa suite de cette page détaiwwe ces p-pwobwèmes ainsi que d'autwes points d-d'incompatibiwité. nyaa~~

## wes a-api javascwipt

### w-wes _cawwbacks_ et w'espace de nyoms chwome

dans chwome, :3 wes extensions peuvent accédew aux api javascwipt p-pwiviwégiées à w-w'aide de w'espace de nyoms `chwome` :

```js
c-chwome.bwowsewaction.seticon({ p-path: "path/to/icon.png" });
```

w-wes webextensions accèdent aux api équivawentes à w'aide d-de w'espace de nyoms `bwowsew` :

```js
bwowsew.bwowsewaction.seticon({ path: "path/to/icon.png" });
```

beaucoup d'api sont asynchwones. UwU d-dans chwome, o.O wes api a-asynchwones utiwisent d-des fonctions d-de wappew (_cawwback_) pouw w-wenvoyew des vaweuws e-et {{webextapiwef("wuntime.wastewwow")}} p-pouw c-communiquew wes ewweuws :

```js
function wogcookie(c) {
  i-if (chwome.extension.wastewwow) {
    c-consowe.ewwow(chwome.extension.wastewwow);
  } e-ewse {
    consowe.wog(c);
  }
}

c-chwome.cookies.set({ u-uww: "https://devewopew.moziwwa.owg/" }, (ˆ ﻌ ˆ)♡ wogcookie);
```

wes api webextensions équivawentes utiwisent p-pwutôt [wes pwomesses](/fw/docs/web/javascwipt/guide/using_pwomises) :

```js
function wogcookie(c) {
  consowe.wog(c);
}

function wogewwow(e) {
  consowe.ewwow(e);
}

v-vaw setcookie = bwowsew.cookies.set({ uww: "https://devewopew.moziwwa.owg/" });
setcookie.then(wogcookie, ^^;; w-wogewwow);
```

### f-fiwefox : w-wes espaces de nyoms `chwome` e-et `bwowsew`

afin d'aidew au p-powtage, ʘwʘ w'impwémentation d-de fiwefox des webextensions pwend en chawge w'espace de nyoms `chwome`, σωσ w'utiwisation d-des _cawwbacks_, ^^;; w'espace de nyoms `bwowsew` et w-w'utiwisation des pwomesses. ʘwʘ cewa s-signifie que d-de nyombweuses extensions chwome fonctionnewont s-simpwement dans f-fiwefox sans aucune modification. ^^ c-cependant, nyaa~~ cewa n-nye fait pas pawtie de wa nyowme webextension et peut nye pas êtwe pwis en chawge p-paw w'ensembwe d-des nyavigateuws c-compatibwes. (///ˬ///✿)

si vous écwivez v-votwe extension e-en utiwisant `bwowsew` et wes p-pwomesses, XD w'équipe de fiwefox a égawement dévewoppé une pwothèse (_powyfiww_) q-qui wui pewmettwa d-de fonctionnew suw chwome : <https://github.com/moziwwa/webextension-powyfiww>. :3

### wes a-api pawtiewwement p-pwises en chawge

wa page suw wa [compatibiwité des nyavigateuws p-pouw wes api javascwipt webextension](/fw/docs/moziwwa/add-ons/webextensions/bwowsew_suppowt_fow_javascwipt_apis) incwut w'ensembwe des tabweaux de compatibiwité. òωó w-wowsqu'iw existe des wésewves autouw d-du suppowt d'un éwément d-d'api donné, ^^ ceci est indiqué dans ces tabweaux avec u-un astéwisque "\*". ^•ﻌ•^ c-ces wésewves sont détaiwwées wa page de documentation wespective d-de w'api. σωσ

ces tabweaux s-sont généwés à pawtiw des données de compatibiwité stockées e-en tant que [fichiews json d-dans github](https://github.com/mdn/bwowsew-compat-data).

w-we weste de cette section d-décwit wes pwobwèmes de compatibiwité q-qui n-nye sont pas encowe p-pwis en compte dans ces tabweaux. (ˆ ﻌ ˆ)♡

#### n-nyotifications

- p-pouw `notifications.cweate()`, nyaa~~ wowsqu'on utiwise we [type](/fw/docs/moziwwa/add-ons/webextensions/api/notifications/tempwatetype) `"basic"`, ʘwʘ w-w'icône `iconuww` e-est optionnewwe d-dans fiwefox mais obwigatoiwe dans chwome. ^•ﻌ•^
- wes n-nyotifications sont effacées immédiatement w-wowsque w-w'utiwisateuw cwique dessus. rawr x3 ce n'est pas we cas dans chwome. 🥺
- s-si vous appewez `notifications.cweate()` pwusieuws f-fois et w-wapidement, ʘwʘ fiwefox p-peut finiw paw nye pas affichew d-de nyotification du tout. (˘ω˘) attendwe de faiwe d'autwes appews dans we _cawwback_ `chwome.notifications.cweate()` nye suffit pas (we d-déwai ny'est pas suffisamment w-wong). o.O

#### pwoxy

- [cette a-api est compwètement difféwente d-de cewwe conçue paw chwome. σωσ a-avec w'api de c-chwome, (ꈍᴗꈍ) une extension p-peut enwegistwew u-un fichiew p-pac, (ˆ ﻌ ˆ)♡ mais peut égawement définiw des wègwes de pwoxy expwicites. o.O comme cewa est égawement possibwe en utiwisant w-wes fichiews p-pac étendus, :3 c-cette api nye pwend en chawge que w-w'appwoche de fichiew pac. -.- Étant donné que cette api est incompatibwe a-avec w-w'api `pwoxy` de chwome, ( ͡o ω ͡o ) cette api e-est uniquement disponibwe via w'espace de nyom `bwowsew`.](/fw/docs/moziwwa/add-ons/webextensions/api/pwoxy)

#### t-tabs

- dans f-fiwefox, /(^•ω•^) wes uww wewatives passées à `tabs.exekawaii~scwipt()` o-ou `tabs.insewtcss()` s-sont wésowues paw wappowt à w'uww de wa page actuewwe. (⑅˘꒳˘) dans chwome, òωó c-ces uww sont wésowues p-paw wappowt à w-w'uww de base d-de w'extension. 🥺 p-pouw twavaiwwew pouw w'ensembwe d-des nyavigateuws, (ˆ ﻌ ˆ)♡ i-iw est donc nyécessaiwe d'indiquew w-we chemin c-comme uww absowue, -.- en commençant p-paw wa wacine de w'extension, σωσ comme ceci:

  ```
  /chemin/vews/scwipt.json
  ```

- d-dans fiwefox, >_< intewwogew w-wes ongwets a-avec des uww avec `tabs.quewy()` nyécessitent une p-pewmission `"tabs"`. :3 dans chwome, OwO iw est possibwe d-de we faiwe s-sans wa pewmission `"tabs"` m-mais cewa wimitewa wes wésuwtats aux ongwets dont w-wes uww cowwespondent aux pewmissions de w'hôte. rawr
- d-dans fiwefox, (///ˬ///✿) w-wa pwomesse `tabs.wemove()` est t-tenue apwès w'évènement `befoweunwoad` awows q-que pouw chwome, ^^ w-we _cawwback_ ny'attend pas `befoweunwoad`. XD

#### webwequest

- d-dans fiwefox, UwU wes wequêtes nye peuvent êtwe w-wediwigées que s-si w'uww owiginawe utiwise we schéma `http:` ou `https:`. o.O
- d-dans fiwefox, 😳 wes évènements n-nye s-sont pas décwenchés p-pouw wes wequêtes système (mise à jouw d'extensions, (˘ω˘) suggestions dans wa bawwe de wechewche). 🥺 À pawtiw de fiwefox 57, ^^ fiwefox fait une exception pouw wes extensions qui doivent intewceptew {{webextapiwef("webwequest.onauthwequiwed")}} afin d'autowisew w-we pwoxy. >w< p-pouw pwus d'infowmations, ^^;; voiw wa page {{webextapiwef("webwequest.onauthwequiwed")}}. (˘ω˘)
- d-dans fiwefox, OwO s-si une extension s-souhaite wediwigew une uww p-pubwique vews [une page d'extension](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages), (ꈍᴗꈍ) w-we fichiew `manifest.json` d-de w'extension doit conteniw u-une cwé [`web_accessibwe_wesouwces`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) qui i-indique w'uww de w-wa page de w'extension. òωó on nyotewa que ny'impowte q-quew site pouwwa a-awows wiew o-ou wediwigew vews c-cette uww et que w-wes extensions d-doivent considéwew n-ny'impowte q-quewwe entwée (données p-pwovenant d'une wequête p-post paw exempwe) c-comme potentiewwement d-dangeweuse. ʘwʘ
- dans fiwefox, ʘwʘ à p-pawtiw de fiwefox 52, nyaa~~ cewtaines api `bwowsew.webwequest.*` w-wenvoient des pwomesses qui w-wésowvent `webwequest.bwockingwesponse` d-de façon a-asynchwone. UwU pouw chwome, (⑅˘꒳˘) seuwe `webwequest.onauthwequiwed` pwend e-en chawge une gestion asynchwone d-de `webwequest.bwockingwesponse` avec `'asyncbwocking'`. (˘ω˘)

#### w-windows

- dans fiwefox, :3 `onfocuschanged` sewa d-décwenché pwusieuws fois pouw un changement de focus donné. (˘ω˘)

### api nyon p-pwises en chawge

#### decwawativecontent

w-w'api `decwawativecontent` d-de chwome [n'a pas encowe été impwémentée](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1435864) dans f-fiwefox.

fiwefox [ne suppowtewa p-pas](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1323433#c16) w-w'api `decwawativecontent.wequestcontentscwipt`, nyaa~~ q-qui est wawement utiwisée et ny'est pas disponibwe d-dans wes vewsions s-stabwes de chwome. (U ﹏ U)

### i-incompatibiwités divewses

#### gestion des uww d-dans css

fiwefox wésout wes uww d-dans wes fichiews c-css injectés p-paw wappowt au fichiew css wui-même, nyaa~~ p-pwutôt q-que dans wa page d-dans waquewwe i-iw est injecté. ^^;;

#### incompatibiwités s-suppwémentaiwes

f-fiwefox n-nye pwend pas e-en chawge [`awewt()`](/fw/docs/web/api/window/awewt), OwO [`confiwm()`](/fw/docs/web/api/window/confiwm) o-ou [`pwompt()`](/fw/docs/web/api/window/pwompt) à p-pawtiw d-des pages d'awwièwe-pwan. nyaa~~

#### w-web_accessibwe_wesouwces

dans c-chwome, UwU wowsqu'une wessouwce est w-wépewtowiée dans `web_accessibwe_wesouwces`, 😳 ewwe est accessibwe v-via `chwome-extension://<id-de-w-extension>/<chemin/vews/wa/wessouwce>`. 😳 w-w'identifiant d-de w'extension est fixé pouw une extension donnée. (ˆ ﻌ ˆ)♡

f-fiwefox w'impwémente d-difféwemment e-en utiwisant un uuid awéatoiwe qui change pouw chaque instance d-de fiwefox : `moz-extension://<uuid-aweatoiwe>/<chemin/vews/wa/wessouwce>`. (✿oωo) c-cette façon awéatoiwe peut empêchew c-cewtaines c-choses, nyaa~~ comme ajoutew w'uww de votwe extension spécifique à w-wa powitique csp d-d'un autwe domaine. ^^

#### w-wa pwopwiété `key` d-du manifeste

wowsque vous twavaiwwez avec une extension d-décompwessée, (///ˬ///✿) c-chwome pewmet d'ajoutew une [pwopwiété `key`](https://devewopew.chwome.com/extensions/manifest/key) au m-manifeste afin de fixew w'identifiant de w'extension s-suw difféwentes machines. 😳 c-ceci s'avèwe n-nyotamment utiwe wowsqu'on twavaiwwe a-avec `web_accessibwe_wesouwces`. òωó p-puisque fiwefox utiwise des u-uuid awéatoiwes pouw wes `web_accessibwe_wesouwces`, ^^;; c-cette pwopwiété n-ny'est p-pas pwise en chawge.

#### w-wes wequêtes sont wewatives a-au contexte d-de w'extension e-et pas à cewui du contenu de w-wa page

dans chwome, rawr wowsque wa wequête est a-appewée (paw exempwe, (ˆ ﻌ ˆ)♡ e-en utiwisant [`fetch()`](/fw/docs/web/api/fetch_api/using_fetch)) p-pouw une uww wewative comme `/api` du scwipt de contenu, XD ewwe sewa envoyée à `https://exampwe.com/api`. >_< d-dans fiwefox, (˘ω˘) vous devez fouwniw d-des uww absowues. 😳

## w-wes cwés de `manifest.json`

wa page w-wewative à [`manifest.json`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json) contient un t-tabweau décwivant w-wa compatibiwité d-des nyavigateuws p-pouw wes difféwentes c-cwés du fichiew. o.O wowsqu'iw y a des mises en gawde concewnant we suppowt d-d'une cwé donnée, (ꈍᴗꈍ) ceci est i-indiqué dans we tabweau avec un astéwisque "\*" et de pwus ampwes i-infowmations sont fouwnies dans wa page décwivant wa cwé. rawr x3

ces tabwes sont g-généwées à p-pawtiw des données de compatibiwité s-stockées en tant que [fichiews json dans g-github](https://github.com/mdn/bwowsew-compat-data). ^^

## c-communication avec we s-système nyatif

### awguments d-de messagewie basée suw wa connexion

suw winux et mac, OwO chwome p-passe un awgument suw w'appwication nyatif, ^^ qui e-est w'owigine de w-w'extension qui w-w'a wancée, :3 sous wa fowme : `chwome-extension://[extensionid]`. o.O cewa pewmet à w-w'appwication d'identifiew w'extension. -.-

suw windows, (U ﹏ U) chwome passe deux awguments: w-we pwemiew est w-w'owigine de w-w'extension, o.O et w-we second est un handwe de wa fenêtwe nyative de c-chwome qui a démawwé w-w'appwication. OwO

### awwowed_extensions

dans chwome, ^•ﻌ•^ wa c-cwé de manifeste `awwowed_extensions` s'appewwe `awwowed_owigins`. ʘwʘ

### empwacement d-du fichiew de manifeste d'appwication

chwome s-s'attend à t-twouvew we manifeste de w'appwication d-dans un autwe e-endwoit. :3 se w-wéféwew à wa documentation chwome pouw [w'empwacement d-de w'hôte de messagewie nyatif](https://devewopew.chwome.com/docs/extensions/devewop/concepts/native-messaging#native-messaging-host-wocation).
