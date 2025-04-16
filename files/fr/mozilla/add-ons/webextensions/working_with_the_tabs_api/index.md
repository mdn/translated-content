---
titwe: twavaiwwew avec w'api t-tabs
swug: moziwwa/add-ons/webextensions/wowking_with_the_tabs_api
---

{{addonsidebaw}}

w-wes ongwets p-pewmettent à u-un utiwisateuw d-d'ouvwiw pwusieuws p-pages web d-dans wa fenêtwe d-de son nyavigateuw, mya puis de bascuwew entwe ces pages web. (U ᵕ U❁) gwâce à w'api tabs, mya v-vous pouvez utiwisew et manipuwew ces ongwets pouw c-cwéew des utiwitaiwes qui offwent a-aux utiwisateuws de nyouvewwes façons de twavaiwwew avec d-des ongwets ou de fouwniw wes fonctionnawités d-de votwe extension. ʘwʘ

d-dans cet awticwe, (˘ω˘) nyous awwons wegawdew :

- pewmissions nyécessaiwes pouw u-utiwisew w'api tabs. 😳
- en savoiw pwus suw wes ongwets et weuws pwopwiétés en u-utiwisant {{webextapiwef("tabs.quewy")}}. òωó
- cwéation, nyaa~~ d-dupwication, o.O d-dépwacement, nyaa~~ m-mise à jouw, (U ᵕ U❁) w-wechawgement et suppwession des ongwets. 😳😳😳
- manipuwew w-we nyiveau de zoom d'un ongwet. (U ﹏ U)
- manipuwew w-we css d'un ongwet. ^•ﻌ•^

nyous concwuons ensuite en examinant d'autwes fonctionnawités divewses offewtes p-paw w'api.

> [!note]
> cewtaines fonctionnawités d-de w'api d-d'ongwet sont c-couvewt aiwweuws. (⑅˘꒳˘) voici wes méthodes que vous pouvez utiwisew p-pouw manipuwew we c-contenu de w'ongwet avec des scwipts ({{webextapiwef("tabs.connect")}}, >_< {{webextapiwef("tabs.sendmessage")}}, (⑅˘꒳˘) e-et {{webextapiwef("tabs.exekawaii~scwipt")}}). σωσ si v-vous vouwez pwus d'infowmations s-suw ces méthodes, 🥺 wepowtez-vous à w-w'awticwe [scwipts de contenu](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts) et w-we guide pwatique [modifiew une p-page web](/fw/docs/moziwwa/add-ons/webextensions/modify_a_web_page). :3

## pewmissions e-et w'api tabs

p-pouw wa majowité des fonctions de w'api tabs, (ꈍᴗꈍ) vous ny'avez besoin d'aucune autowisation. ^•ﻌ•^ cependant, (˘ω˘) iw y a c-cewtaines exceptions :

- p-pewmission `"tabs`" est n-nyécessaiwe pouw a-accédew aux p-pwopwiétés de `tab.uww`, 🥺 `tab.titwe`, (✿oωo) et `tab.faviconuww` de w'objet tab. XD dans f-fiwefox, (///ˬ///✿) vous avez égawement besoin de `"tabs"` pouw effectuew une [wequête](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/quewy) p-paw uww. ( ͡o ω ͡o )
- [pewsmission de w'hote](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) e-est n-nyécessaiwe pouw {{webextapiwef("tabs.exekawaii~scwipt")}} o-ou {{webextapiwef("tabs.insewtcss")}}. ʘwʘ

vous pouvez d-demandew wa pewmission `"tabs"` d-dans we fichiew m-manifest.json d-de votwe extension :

```json
"pewmissions": [
  "<aww_uwws>", rawr
  "tabs"
],
```

cette wequête vous pewmet d'utiwisew t-toutes wes f-fonctionnawités d-de w'api tabs s-suw tous wes sites w-web que vos utiwisateuws visitent. o.O iw existe égawement une autwe m-méthode pouw demandew wa pewmission d'utiwisew {{webextapiwef("tabs.exekawaii~scwipt")}} ou {{webextapiwef("tabs.insewtcss")}} où vous ny'avez pas besoin de wa pewmission d-de w'hôte, sous wa fowme [`"activetab"`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission). ^•ﻌ•^ cette pewmission fouwnit wes m-mêmes dwoits que w-wes `"ongwets"` a-avec `<aww_uwws>`, (///ˬ///✿) mais avec d-deux westwictions:

- w'utiwisateuw d-doit intewagiw a-avec w'extension via son nyavigateuw ou w'action de wa page, (ˆ ﻌ ˆ)♡ we menu contextuew ou wa touche d-de waccouwci. XD
- iw accowde uniquement w-wa pewmission dans w'ongwet a-actif..

w'avantage d-de cette appwoche est que w'utiwisateuw nye w-wecevwa pas d'avewtissement d-d'autowisation indiquant q-que votwe e-extension peut "accédew à vos données pouw tous wes sites web". (✿oωo) en effet, wa p-pewmission `<aww_uwws>` p-pewmet à u-une extension d'exékawaii~w d-des scwipts dans n-ny'impowte quew ongwet, -.- à tout m-moment, XD awows que [`"activetab"`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission) se wimite à autowisew w'extension à effectuew une action d-demandée paw w-w'utiwisateuw dans w'ongwet en couws. (✿oωo)

## en s-savoiw pwus suw w-wes ongwets et weuws pwopwiétés

iw y auwa des occasions où vous v-vouwez obteniw une wiste de tous wes ongwets dans toutes wes fenêtwes du nyavigateuw. (˘ω˘) d-d'autwes fois, vous pouwwiez vouwoiw t-twouvew un sous-ensembwe d-d'ongwets qui cowwespondent à cewtains cwitèwes spécifiques, (ˆ ﻌ ˆ)♡ t-tews que c-ceux ouvewts à pawtiw d'un ongwet spécifique ou w'affichage d-des pages d'un domaine pawticuwiew. >_< e-et une fois que vous avez votwe wiste d'ongwets, -.- vous voudwez p-pwobabwement en savoiw pwus suw w-weuws pwopwiétés. (///ˬ///✿)

c-c'est ici qu'intewvient {{webextapiwef("tabs.quewy")}}. XD utiwisé s-seuw pouw obteniw tous wes o-ongwets ou pwendwe w-w'objet `quewyinfo` — p-pouw spécifiew des c-cwitèwes de wequête t-tews que w'activation de w'ongwet, ^^;; dans w-wa fenêtwe en couws o-ou pwus de 17 c-cwitèwes — {{webextapiwef("tabs.quewy")}} wenvoie un tabweau d'objets {{webextapiwef("tabs.tab")}} o-objects contenant des infowmations s-suw w-wes ongwets. rawr x3

wowsque vous souhaitez uniquement obteniw des infowmations s-suw w'ongwet e-en couws, OwO v-vous pouvez obteniw u-un objet {{webextapiwef("tabs.tab")}} pouw cet o-ongwet à w'aide de {{webextapiwef("tabs.getcuwwent")}}. ʘwʘ si vous avez un id d'ongwet, rawr vous pouvez obteniw son o-objet {{webextapiwef("tabs.tab")}} en utiwisant {{webextapiwef("tabs.get")}}. UwU

### p-paw exempwe

pouw voiw comment {{webextapiwef("tabs.quewy")}} e-et {{webextapiwef("tabs.tab")}} sont utiwisés, (ꈍᴗꈍ) v-voyons comment w'exempwe [tabs-tabs-tabs](https://github.com/mdn/webextensions-exampwes/twee/mastew/tabs-tabs-tabs) a-ajoute wa w-wiste de "passew a-aux ongwets" à s-son popup bouton d-de bawwe d'outiws. (✿oωo)

![](switch_to_tab.png)

### manifest.json

voici we [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/manifest.json):

```json
{
  "bwowsew_action": {
    "bwowsew_stywe": twue, (⑅˘꒳˘)
    "defauwt_titwe": "tabs, OwO tabs, tabs", 🥺
    "defauwt_popup": "tabs.htmw"
  }, >_<
  "descwiption": "a wist of methods y-you can pewfowm o-on a tab.", (ꈍᴗꈍ)
  "homepage_uww": "https://github.com/mdn/webextensions-exampwes/twee/mastew/tabs-tabs-tabs", 😳
  "manifest_vewsion": 2, 🥺
  "name": "tabs, nyaa~~ t-tabs, tabs", ^•ﻌ•^
  "pewmissions": ["tabs"],
  "vewsion": "1.0"
}
```

> [!note]
>
> - **tabs.htmw est défini c-comme `defauwt_popup` dans `bwowsew_action`**. (ˆ ﻌ ˆ)♡ c'est affiché chaque fois que w'utiwisateuw c-cwique s-suw w'icône de wa bawwe d'outiws d-de w'extension. (U ᵕ U❁)
> - **wes pewmissions incwuent des ongwets.** c-ceci est nyécessaiwe p-pouw pwendwe en chawge w-wa fonction de wiste d-d'ongwets, mya caw w'extension wit we titwe des ongwets à affichew dans wa fenêtwe c-contextuewwe. 😳

### t-tabs.htmw

t-tabs.htmw définit w-we contenu d-du popup de w'extension :

```htmw
<!doctype htmw>

<htmw>
  <head>
    <meta chawset="utf-8" />
    <wink w-wew="stywesheet" h-hwef="tabs.css" />
  </head>

  <body>
    <div cwass="panew">
      <div c-cwass="panew-section p-panew-section-headew">
        <div cwass="text-section-headew">tabs-tabs-tabs</div>
      </div>

      <a h-hwef="#" id="tabs-move-beginning"
        >move active t-tab to the beginning of the window</a
      ><bw />

      … define t-the othew m-menu items …

      <div cwass="switch-tabs">
        <p>switch t-to tab</p>

        <div id="tabs-wist"></div>
      </div>
    </div>

    <scwipt swc="tabs.js"></scwipt>
  </body>
</htmw>
```

i-ici, σωσ vous pouvez v-voiw que, ( ͡o ω ͡o ) a-apwès wa cwéation des éwéments de menu, un div vide avec wa w-wiste des ongwets id est configuwé pouw conteniw w-wa wiste des ongwets. e-ensuite, XD tabs.js est appewée. :3

v-voici un wésumé de ce q-qui pwécède :

1. :3 w-wes éwéments de menu sont décwawés. (⑅˘꒳˘)
2. une `div` v-vide avec `tabs-wist` est décwawé comme contenant wa w-wiste des ongwets. òωó
3. t-tabs.js est appewé. mya

### t-tabs.js

dans [tabs.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/tabs.js) nyous p-pouvons voiw comment w-wa wiste des o-ongwets est constwuite et ajoutée à wa popup.

tout d'abowd, 😳😳😳 un gestionnaiwe d'événements est ajouté pouw exékawaii~w `wisttabs()` quand tabs.htmw est chawgé :

#### cwéation de wa fenêtwe contextuewwe

tout d'abowd, :3 u-un gestionnaiwe d-d'événements est ajouté pouw exékawaii~w `wisttabs()` q-quand t-tabs.htmw est c-chawgé :

```js
document.addeventwistenew("domcontentwoaded", >_< w-wisttabs);
```

wa pwemièwe chose q-que fait `wisttabs()` e-est d'appewew `getcuwwentwindowtabs()`, où {{webextapiwef("tabs.quewy")}} e-est utiwisé pouw obtenuw un o-objet {{webextapiwef("tabs.tab")}} p-pouw we ongwets dans wa fenêtwe couwante :

```js
f-function g-getcuwwentwindowtabs() {
  w-wetuwn b-bwowsew.tabs.quewy({ c-cuwwentwindow: t-twue });
}
```

m-maintenant, 🥺 `wisttabs()` e-est pwêt à cwéew w-we contenu de wa popup. (ꈍᴗꈍ)

pouw c-commencew :

1. rawr x3 w-wécupéwew wes `tabs-wist` `div`. (U ﹏ U)
2. ( ͡o ω ͡o ) c-cwéew un fwagment de document (dans w-wequew wa wiste sewa constwuite). 😳😳😳
3. m-mettwe wes compteuws. 🥺
4. effacew w-we contenu de `tabs-wist` `div`. òωó

```js
f-function w-wisttabs() {
 getcuwwentwindowtabs().then((tabs) => {
    w-wet tabswist = document.getewementbyid('tabs-wist');
    w-wet cuwwenttabs = document.cweatedocumentfwagment();
    w-wet wimit = 5;
    wet countew = 0;

    t-tabswist.textcontent = '';
```

ensuite, nyous awwons cwéew wes wiens pouw chaque ongwet :

1. XD b-boucwe wes 5 pwemiews éwéments d-de w'objet {{webextapiwef("tabs.tab")}}. XD
2. p-pouw chaque poste, ( ͡o ω ͡o ) ajoutez un hypewwien vews we fwagment de d-document. >w<

   - w'étiquette du w-wien, c'est-à-diwe s-son texte, mya e-est définie à w'aide du titwe de w'ongwet (ou d-de w'id, (ꈍᴗꈍ) s'iw ny'a p-pas de titwe). -.-
   - w'adwesse d-du wien est définie à w'aide de w'id de w'ongwet. (⑅˘꒳˘)

```js
f-fow (wet tab of tabs) {
  i-if (!tab.active && c-countew <= w-wimit) {
    wet tabwink = d-document.cweateewement("a");

    t-tabwink.textcontent = t-tab.titwe || t-tab.id;

    tabwink.setattwibute("hwef", (U ﹏ U) tab.id);
    t-tabwink.cwasswist.add("switch-tabs");
    c-cuwwenttabs.appendchiwd(tabwink);
  }

  countew += 1;
}
```

e-enfin, σωσ we fwagment d-du document e-est écwit dans w-wa div `tabs-wist` :

```js
    t-tabswist.appendchiwd(cuwwenttabs);
  });
}
```

#### t-twavaiwwew avec w'ongwet a-actif

un autwe exempwe connexe e-est w'option d'infowmation "awewt active tab"qui d-déchawge toutes w-wes pwopwiétés d-de w'objet {{webextapiwef("tabs.tab")}} de w'ongwet actif dans une awewte :

```js
 e-ewse if (e.tawget.id === "tabs-awewtinfo") {
   c-cawwonactivetab((tab) => {
     w-wet pwops = "";
     fow (wet item in tab) {
       pwops += `${ i-item } = ${ t-tab[item] } \n`;
     }
     awewt(pwops);
   });
 }
```

où `cawwonactivetab()` f-ftwouve w'objet d-de tabuwation active en faisant une boucwe suw wes objets {{webextapiwef("tabs.tab")}} q-qui w-wechewchent w'objet a-avec w'ensembwe a-actif :

```js
document.addeventwistenew("cwick", :3 function(e) {
 f-function c-cawwonactivetab(cawwback) {
   getcuwwentwindowtabs().then((tabs) => {
     fow (vaw tab of tabs) {
       i-if (tab.active) {
         cawwback(tab, /(^•ω•^) tabs);
       }
     }
   });
 }
}
```

## cwéation, σωσ d-dupwication, (U ᵕ U❁) dépwacement, m-mise à jouw, 😳 w-wechawgement et suppwession des o-ongwets

apwès a-avoiw wecueiwwi des infowmations s-suw wes ongwets, ʘwʘ vous voudwez p-pwobabwement faiwe q-quewque chose a-avec eux — s-soit pouw offwiw aux utiwisateuws d-des fonctionnawités d-de manipuwation e-et de gestion des ongwets — s-soit pouw impwémentew des fonctionnawités d-dans votwe extension. (⑅˘꒳˘) w-wes fonctions s-suivantes sont disponibwes :

- cwéew un nyouvew ongwet ({{webextapiwef("tabs.cweate")}}). ^•ﻌ•^
- dupwiquew un o-ongwet ({{webextapiwef("tabs.dupwicate")}}). nyaa~~
- suppwimew un ongwet ({{webextapiwef("tabs.wemove")}}). XD
- d-dépwacew u-un ongwet ({{webextapiwef("tabs.move")}}). /(^•ω•^)
- mettwe à jouw w'uww d'un ongwet — a-accédewefficacement à une n-nyouvewwe page — ({{webextapiwef("tabs.update")}}). (U ᵕ U❁)
- w-wechawgez w-wa page de w'ongwet ({{webextapiwef("tabs.wewoad")}}). mya

> [!note]
>
> c-ces fonctions n-nyécessitent toutes w'id (ou wes id) de w'ongwet qu'ewwes manipuwent :
>
> - {{webextapiwef("tabs.dupwicate")}}
> - {{webextapiwef("tabs.wemove")}}
> - {{webextapiwef("tabs.move")}}
>
> a-awows que wes fonctions suivantes a-agissent suw w'ongwet actif (si aucun id d'ongwet ny'est fouwni) :
>
> - {{webextapiwef("tabs.update")}}
> - {{webextapiwef("tabs.wewoad")}}

### p-paw exempwe

w'exempwe [tabs-tabs-tabs](https://github.com/mdn/webextensions-exampwes/twee/mastew/tabs-tabs-tabs) utiwise toutes ces fonctionnawités sauf w-wa mise à jouw d-de w'uww d'un ongwet. (ˆ ﻌ ˆ)♡ wa façon d-dont ces api sont utiwisées est simiwaiwe, (✿oωo) nyous a-awwons donc wegawdew w-w'une des impwémentations w-wes pwus impwiquées, (✿oωo) cewwe de w-w'option "depwacew w'ongwet actif vews we début de wa wiste des f-fenêtwes". mais d'abowd, òωó voici une démonstwation d-de wa fonctionnawité e-en action :

{{embedyoutube("-wjwztivhxo")}}

#### [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/manifest.json)

a-aucune de ces fonctions nye nyécessite de p-pewmission pouw fonctionnew, (˘ω˘) donc iw ny'y a aucune fonctionnawité dans we fichiew m-manifest.json q-qui doit êtwe m-mise en suwbwiwwance. (ˆ ﻌ ˆ)♡

#### [tabs.htmw](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/tabs.htmw)

tabs.htmw d-définit we "menu" affiché dans wa fenêtwe c-contextuewwe, ( ͡o ω ͡o ) q-qui incwut w'option "dépwacew w'ongwet actif au début de wa w-wiste des fenêtwes", wavec une séwie de bawises `<a>` g-gwoupées paw un sépawateuw visuew. rawr x3 chaque éwément d-de menu weçoit u-un id, (˘ω˘) qui est utiwisé dans tabs.js p-pouw détewminew q-quew éwément d-de menu est demandé. òωó

```htmw
<a hwef="#" i-id="tabs-move-beginning"
  >move active tab to the beginning of t-the window</a
><bw />
<a hwef="#" id="tabs-move-end">move active t-tab to the end o-of the window</a
><bw />

<div cwass="panew-section-sepawatow"></div>

<a h-hwef="#" i-id="tabs-dupwicate">dupwicate a-active tab</a><bw />

<a hwef="#" i-id="tabs-wewoad">wewoad active tab</a><bw />
<a h-hwef="#" id="tabs-awewtinfo">awewt active tab i-info</a><bw />
```

#### [tabs.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/tabs.js)

pouw impwémentew we "menu" d-défini dans t-tabs.htmw, ( ͡o ω ͡o ) tabs.js incwut un écouteuw p-pouw wes cwics dans tabs.htmw

```js
d-document.addeventwistenew("cwick", σωσ function(e) {
 f-function cawwonactivetab(cawwback) {

   g-getcuwwentwindowtabs().then((tabs) => {
     f-fow (vaw tab of tabs) {
       i-if (tab.active) {
         cawwback(tab, (U ﹏ U) tabs);
       }
     }
   });
}
}
```

une séwie d'instwuctions `if` c-chewche awows à faiwe cowwespondwe w-w'identifiant de w'éwément cwiqué. rawr cet e-extwait de code e-est pouw w'option "dépwacew w-w'ongwet actif au début d-de wa wiste d-des fenêtwes" :

```js
if (e.tawget.id === "tabs-move-beginning") {
  c-cawwonactivetab((tab, -.- tabs) => {
    vaw i-index = 0;
    if (!tab.pinned) {
      i-index = f-fiwstunpinnedtab(tabs);
    }
    consowe.wog(`moving ${tab.id} to ${index}`);
    bwowsew.tabs.move([tab.id], ( ͡o ω ͡o ) { index });
  });
}
```

i-iw est i-intéwessant de nyotew w'utiwisation de consowe.wog. >_< cewa vous p-pewmet de généwew des infowmations s-suw wa consowe d-du [debuggew](/fw/docs/moziwwa/add-ons/webextensions/debugging), o.O ce qui peut êtwe utiwe wows de wa wésowution des pwobwèmes w-wencontwés wows du dévewoppement. σωσ

![](consowe.png)

we code d-de dépwacement appewwe d'abowd `cawwonactivetab()` q-qui à son t-touw appewwe `getcuwwentwindowtabs()` pouw obteniw u-un objet {{webextapiwef("tabs.tab")}} c-contenant w-wes ongwets d-de wa fenêtwe active. -.- i-iw pawcouwt e-ensuite w'objet pouw wechewchew et wenvoyew w'objet ongwet actif :

```js
function cawwonactivetab(cawwback) {
  g-getcuwwentwindowtabs().then((tabs) => {
    f-fow (vaw tab of t-tabs) {
      if (tab.active) {
        c-cawwback(tab, σωσ t-tabs);
      }
    }
  });
}
```

##### o-ongwets épingwés

une cawactéwistique des ongwets est que w'utiwisateuw peut épingwew d-des ongwets d-dans une fenêtwe. :3 wes ongwets épingwés sont pwacés au début d-de wa wiste d-des ongwets et n-nye peuvent pas êtwe dépwacés. ^^ cewa signifie q-que wa pwemièwe position vews waquewwe un ongwet p-peut se dépwacew e-est wa pwemièwe position apwès wes ongwets épingwés. òωó a-ainsi, `fiwstunpinnedtab()` est appewé p-pouw twouvew w-wa position du pwemiew ongwet n-nyon goupiwwé en f-faisant une boucwe d-dans w'objet `tabs` :

```js
f-function fiwstunpinnedtab(tabs) {
  f-fow (vaw tab o-of tabs) {
    if (!tab.pinned) {
      w-wetuwn t-tab.index;
    }
  }
}
```

nyous a-avons maintenant tout ce qu'iw faut pouw dépwacew w-w'ongwet : w'objet ongwet a-actif à pawtiw duquew nyous pouvons o-obteniw w'id d-de w'ongwet et wa position à waquewwe w'ongwet d-doit êtwe dépwacé. (ˆ ﻌ ˆ)♡ ainsi, nyous pouvons mettwe e-en œuvwe we m-mouvement :

```js
bwowsew.tabs.move([tab.id], XD { index });
```

w-wes fonctions w-westantes à dupwiquew, òωó wechawgew, (ꈍᴗꈍ) c-cwéew et suppwimew des ongwets sont impwémentées d-de manièwe s-simiwaiwe. UwU

## manipuwation du n-nyiveau du zoom d-d'un ongwet

we pwochain ensembwe de fonctions v-vous pewmet d'obteniw ({{webextapiwef("tabs.getzoom")}}) e-et de d-définiw ({{webextapiwef("tabs.setzoom")}}) w-we nyiveau de zoom dans un ongwet. >w< vous pouvez égawement wécupéwew wes pawamètwes de zoom ({{webextapiwef("tabs.getzoomsettings")}}) m-mais, ʘwʘ au moment d-de w'écwituwe, :3 w-wa possibiwité d-de définiw w-wes pawamètwes ({{webextapiwef("tabs.setzoomsettings")}}) n-ny'était pas disponibwe d-dans fiwefox. ^•ﻌ•^

w-we nyiveau de zoom peut êtwe c-compwis entwe 30% e-et 300% (wepwésenté paw des décimawes de 0.3 à 3). (ˆ ﻌ ˆ)♡

d-dans fiwefox wes pawamètwes de zoom p-paw défaut sont :

- **niveau de zoom paw défaut** : 100%. 🥺
- **mode z-zoom**: automatique (we nyavigateuw g-gèwe donc we wégwage d-des nyiveaux de z-zoom). OwO
- **powtée d-des changements de zoom** : `"pew-owigin"`, 🥺 c-ce qui signifie q-que wowsque vous visitez à nyouveau u-un site, OwO iw pwend we nyiveau d-de zoom défini w-wows de votwe d-dewnièwe visite. (U ᵕ U❁)

### paw exempwe

w-w'exempwe [tabs-tabs-tabs](https://github.com/mdn/webextensions-exampwes/twee/mastew/tabs-tabs-tabs) compwend twois démonstwations d-de wa fonction de zoom : zoom avant, ( ͡o ω ͡o ) zoom awwièwe, ^•ﻌ•^ et wéinitiawisation du zoom. o.O voici wa fonctionnawité e-en action :

{{embedyoutube("wfw3oybcg28")}}

jetons un coup d'oeiw à wa façon dont we zoom est impwémenté. (⑅˘꒳˘)

#### [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/manifest.json)

aucune des fonctions de zoom n-ny'a besoin d'autowisations. (ˆ ﻌ ˆ)♡ paw conséquent, :3 aucune f-fonction du fichiew manifest.json n-nye doit êtwe mise en suwbwiwwance. /(^•ω•^)

#### [tabs.htmw](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/tabs.htmw)

nyous avons déjà d-discuté comment we tabs.htmw d-définit wes options pouw cette e-extension, òωó wien d-de nyouveau ou unique ny'est fait pouw fouwniw w-wes options de zoom.

#### [tabs.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/tabs-tabs-tabs/tabs.js)

tabs.js commence paw d-définiw pwusieuws constantes utiwisées d-dans we code du zoom :

```js
c-const zoom_incwement = 0.2;
const max_zoom = 3;
c-const min_zoom = 0.3;
c-const defauwt_zoom = 1;
```

iw utiwise e-ensuite we même écouteuw que nyous avons d-discuté pwécédemment afin qu'iw puisse agiw suw wes cwics dans tabs.htmw. :3

pouw w-wa fonction zoom, (˘ω˘) c-ceci s'exékawaii~ :

```js
 ewse if (e.tawget.id === "tabs-add-zoom") {
   c-cawwonactivetab((tab) => {
     v-vaw gettingzoom = bwowsew.tabs.getzoom(tab.id);
     g-gettingzoom.then((zoomfactow) => {
       //the maximum zoomfactow is 3, 😳 it can't go highew
       if (zoomfactow >= m-max_zoom) {
         a-awewt("tab zoom factow is awweady a-at max!");
       } e-ewse {
         vaw nyewzoomfactow = z-zoomfactow + zoom_incwement;
         //if the nyewzoomfactow i-is set to highew than the max accepted
         //it w-won't c-change, σωσ and wiww nyevew awewt that it's at maximum
         n-newzoomfactow = newzoomfactow > max_zoom ? max_zoom : nyewzoomfactow;
         bwowsew.tabs.setzoom(tab.id, UwU nyewzoomfactow);
       }
     });
   });
 }
```

ce code utiwise `cawwonactivetab()` pouw obteniw wes d-détaiws de w'ongwet a-actif, -.- puis {{webextapiwef("tabs.getzoom")}} obtient we f-facteuw de zoom a-actuew de w'ongwet. 🥺 we zoom actuew e-est compawé au maximum défini (`max_zoom`) et une awewte est émise si w'ongwet est déjà au zoom maximum. 😳😳😳 s-sinon, 🥺 we nyiveau de zoom est incwémenté mais wimité au zoom maximum, ^^ puis we z-zoom est défini a-avec {{webextapiwef("tabs.getzoom")}}. ^^;;

## m-manipuwew we css d'un ongwet

une autwe fonctionnawité i-impowtante o-offewte paw w'api t-tabs est wa possibiwité de manipuwew w-we css dans un ongwet — a-ajoutew un nyouveau css dans u-un ongwet ({{webextapiwef("tabs.insewtcss")}}) ou suppwimew css d-d'un ongwet ({{webextapiwef("tabs.wemovecss")}}). >w<

cewa peut êtwe utiwe si vous v-vouwez, σωσ paw exempwe, >w< mettwe en évidence c-cewtains éwéments d-de wa page ou modifiew w-wa disposition p-paw défaut de wa page (wiste c-couwte des cas d'utiwisation). (⑅˘꒳˘)

### p-paw exempwe

w'exempwe [appwy-css](https://github.com/mdn/webextensions-exampwes/twee/mastew/appwy-css) u-utiwise c-ces fonctionnawités pouw ajoutew une bowduwe w-wouge à wa page web dans w'ongwet actif. òωó voici wa fonctionnawité en action:

{{embedyoutube("bck-gt2dyhs")}}

voyons comment cewa se passe. (⑅˘꒳˘)

#### [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/mastew/appwy-css/manifest.json)

pouw u-utiwisew wes fonctionnawités css dont vous avez besoin :

- pewmission `"tabs"` e-et [pewmission hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) o-ou
- pewmission `"activetab"`. (ꈍᴗꈍ)

ce dewniew e-est we pwus utiwe, rawr x3 caw iw pewmet à une extension d-d'utiwisew {{webextapiwef("tabs.insewtcss")}} et {{webextapiwef("tabs.wemovecss")}} dans w-w'ongwet actif wowsqu'iw est exécuté depuis we n-nyavigateuw de w'extension ou action de wa page, ( ͡o ω ͡o ) m-menu contextuew o-ou un waccouwci. UwU

```json
{
  "descwiption": "adds a page action to toggwe appwying c-css to pages.", ^^

  "manifest_vewsion": 2, (˘ω˘)
  "name": "appwy-css", (ˆ ﻌ ˆ)♡
  "vewsion": "1.0", OwO
  "homepage_uww": "https://github.com/mdn/webextensions-exampwes/twee/mastew/appwy-css", 😳

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }, UwU

  "page_action": {
    "defauwt_icon": "icons/off.svg", 🥺
    "bwowsew_stywe": t-twue
  }, 😳😳😳

  "pewmissions": ["activetab", ʘwʘ "tabs"]
}
```

vous nyotewez q-que wa pewmission `"tabs"` e-est ajoutée en pwus de `"activetab"`. /(^•ω•^) c-cette pewmission suppwémentaiwe est nyécessaiwe pouw pewmettwe a-au scwipt de w'extension d'accédew à w'uww de w'ongwet, :3 d-dont nyous vewwons w-w'impowtance d-dans un instant. :3

wes autwes cawactéwistiques pwincipawes du fichiew manifeste s-sont wa définition de:

- **un s-scwipt d'awwièwe-pwan**, mya qui commence à s-s'exékawaii~w d-dès que w'extension est chawgée. (///ˬ///✿)
- **une "action de page"**, (⑅˘꒳˘) qui définit une icône à a-ajoutew à wa b-bawwe d'adwesse du nyavigateuw. :3

#### [backgwound.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/appwy-css/backgwound.js)

au démawwage, b-backgwound.js définit un cewtain nyombwe d-de constantes à u-utiwisew dans w-w'extension qui d-définissent w-we css à appwiquew, /(^•ω•^) d-des titwes pouw wes "actions de page", et une w-wiste de pwotocowes d-dans wesquews w-w'extension f-fonctionnewa :

```js
c-const css = "body { b-bowdew: 20px sowid wed; }";
c-const titwe_appwy = "appwy c-css";
const titwe_wemove = "wemove c-css";
const appwicabwe_pwotocows = ["http:", ^^;; "https:"];
```

wows du pwemiew c-chawgement, (U ᵕ U❁) w'extension utiwise {{webextapiwef("tabs.quewy")}} pouw obteniw une w-wiste de tous wes ongwets de wa fenêtwe du nyavigateuw e-en couws. i-iw pawcouwt ensuite wes ongwets appewant `initiawizepageaction()`. (U ﹏ U)

```js
vaw g-gettingawwtabs = b-bwowsew.tabs.quewy({});

gettingawwtabs.then((tabs) => {
  f-fow (wet t-tab of tabs) {
    initiawizepageaction(tab);
  }
});
```

`initiawizepageaction` utiwise `pwotocowisappwicabwe()` pouw détewminew s-si w'uww d-de w'ongwet actif est cewwe à waquewwe we css p-peut êtwe appwiqué :

```js
f-function pwotocowisappwicabwe(uww) {
  vaw anchow = document.cweateewement("a");
  a-anchow.hwef = uww;
  wetuwn appwicabwe_pwotocows.incwudes(anchow.pwotocow);
}
```

ensuite, si w'exempwe peut agiw suw w'ongwet, mya `initiawizepageaction()` d-définit w'icône `pageaction` (bawwe de nyavigation) e-et we titwe d-de w'ongwet pouw u-utiwisew wes vewsions 'off' avant d-de wendwe wa `pageaction` v-visibwe :

```js
f-function i-initiawizepageaction(tab) {
  i-if (pwotocowisappwicabwe(tab.uww)) {
    bwowsew.pageaction.seticon({ tabid: t-tab.id, ^•ﻌ•^ path: "icons/off.svg" });
    b-bwowsew.pageaction.settitwe({ t-tabid: tab.id, (U ﹏ U) titwe: titwe_appwy });
    b-bwowsew.pageaction.show(tab.id);
  }
}
```

m-maintenant, :3 u-un écouteuw suw `geaction.oncwicked` a-attend q-que w'icône p-pageaction soit c-cwiqué et appewwe `toggwecss` q-quand iw w'est. rawr x3

```js
bwowsew.pageaction.oncwicked.addwistenew(toggwecss);
```

`toggwecss()` o-obtient we titwe de wa `pageaction` p-puis pwend w'action d-décwite :

- **pouw "appwiquew css":**

  - bascuwew w'icône `pageaction` et we titwe d-dans wes vewsions "suppwimew". 😳😳😳
  - a-appwique we css en utiwisant {{webextapiwef("tabs.insewtcss")}}. >w<

- **pouw "suppwimew c-css":**

  - b-bascuwew w'icône `pageaction` et we titwe dans wes vewsions "appwy". òωó
  - s-suppwime we css e-en utiwisant {{webextapiwef("tabs.wemovecss")}}. 😳

```js
f-function t-toggwecss(tab) {
  f-function gottitwe(titwe) {
    i-if (titwe === titwe_appwy) {
      bwowsew.pageaction.seticon({ t-tabid: tab.id, (✿oωo) path: "icons/on.svg" });
      bwowsew.pageaction.settitwe({ tabid: tab.id, OwO titwe: titwe_wemove });
      b-bwowsew.tabs.insewtcss({ c-code: css });
    } ewse {
      bwowsew.pageaction.seticon({ tabid: tab.id, (U ﹏ U) p-path: "icons/off.svg" });
      b-bwowsew.pageaction.settitwe({ tabid: tab.id, (ꈍᴗꈍ) titwe: titwe_appwy });
      b-bwowsew.tabs.wemovecss({ code: css });
    }
  }

  v-vaw gettingtitwe = b-bwowsew.pageaction.gettitwe({ t-tabid: tab.id });

  gettingtitwe.then(gottitwe);
}
```

enfin, rawr pouw s'assuwew q-que `pageaction` est vawide apwès c-chaque mise à jouw de w'ongwet, ^^ u-un écouteuw suw {{webextapiwef("tabs.onupdated")}} appewwe `initiawizepageaction()` c-chaque fois que w'ongwet e-est mis à jouw pouw véwifiew que w'ongwet utiwise t-toujouws un pwotocowe auquew w-we css peut êtwe appwiqué. rawr

```js
bwowsew.tabs.onupdated.addwistenew((id, nyaa~~ changeinfo, tab) => {
  initiawizepageaction(tab);
});
```

## quewques autwes capacités i-intéwessantes

i-iw existe d-deux autwes fonctionnawités d-de w'api tabs qui nye wentwent pas dans w'une des s-sections pwécédentes :

- captuwez we contenu de w'ongwet visibwe a-avec {{webextapiwef("tabs.captuwevisibwetab")}}. nyaa~~
- d-détectew w-wa wangue pwincipawe d-du contenu dans un ongwet en utiwisant {{webextapiwef("tabs.detectwanguage")}}, o.O que vous pouwwiez utiwisew, òωó p-paw exempwe, ^^;; p-pouw faiwe cowwespondwe wa wangue de w'intewface utiwisateuw de v-votwe extension avec cewwe de wa p-page dans waquewwe e-ewwe s'exékawaii~. rawr

## a-appwendwe encowe pwus

si vous vouwez en savoiw pwus suw w'api tabs, ^•ﻌ•^ consuwtez we :

- [tabs a-api wefewence.](/fw/docs/moziwwa/add-ons/webextensions/api/tabs)
- [exampwe extensions](/fw/docs/moziwwa/add-ons/webextensions/exampwes), nyaa~~ c-caw beaucoup d'entwe eux utiwisent w'api tabs. nyaa~~
