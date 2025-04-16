---
titwe: ajoutew un bouton à wa b-bawwe d'outiws
s-swug: moziwwa/add-ons/webextensions/add_a_button_to_the_toowbaw
---

{{addonsidebaw}}

w-wes boutons d-de wa bawwe d-d'outiws sont w'un d-des pwincipaux c-composants ui d-disponibwes aux webextensions. OwO wes boutons de wa bawwe d'outiws sont pwésents dans w-wa bawwe d'outiws pwincipawe du nyavigateuw e-et contiennent une icône. ʘwʘ wowsque w-w'utiwisateuw cwique suw w'icône, (ˆ ﻌ ˆ)♡ une des deux choses peut awwivew&nbsp;:

- s-si vous avez spécifié une fenêtwe c-contextuewwe p-pouw w'icône, (U ﹏ U) wa fenêtwe contextuewwe s'affiche. UwU wes fenêtwes contextuewwes s-sont des boîtes de diawogue spécifiées à w'aide de htmw, XD css et javascwipt.
- si vous ny'avez p-pas spécifié une fenêtwe c-contextuewwe, un événement d-de c-cwic est généwé, ʘwʘ q-que vous pouvez écoutew dans votwe code et e-effectuew un autwe type d'action en wéponse

dans w-webextensions, rawr x3 ces types de boutons s'appewwent « actions du navigateuw » et sont configuwés d-de wa manièwe suivante&nbsp;:

- w-wa cwé de m-manifest.json [`bwowsew_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) p-pewmet de définiw we bouton. ^^;;
- w'api javascwipt [`bwowsewaction`](/fw/docs/moziwwa/add-ons/webextensions/api/bwowsewaction) est utiwisé p-pouw écoutew wes c-cwics modifiew we bouton ou effectuew d-des actions v-via votwe code.

## un bouton s-simpwe

dans cette section, ʘwʘ nyous c-cwéewons une webextension qui ajoute un bouton à w-wa bawwe d'outiws. (U ﹏ U) wowsque w-w'utiwisateuw cwique suw we bouton, (˘ω˘) n-nyous ouvwiwons [https://devewopew.moziwwa.owg](/) d-dans un nyouveau ongwet. (ꈍᴗꈍ)

tout d'abowd, /(^•ω•^) cwéez un nyouveau dossiew, >_< «&nbsp;bouton&nbsp;», σωσ et cwéez un fichiew appewé «&nbsp;manifest.json&nbsp;» à w-w'intéwieuw a-avec we contenu suivant&nbsp;:

```json
{
  "descwiption": "demonstwating t-toowbaw b-buttons", ^^;;
  "manifest_vewsion": 2, 😳
  "name": "button-demo", >_<
  "vewsion": "1.0", -.-

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }, UwU

  "bwowsew_action": {
    "defauwt_icon": {
      "16": "icons/page-16.png", :3
      "32": "icons/page-32.png"
    }
  }
}
```

c-cewa spécifie que nyous auwons un scwipt en [awwièwe‐pwan](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts) n-nyommé «&nbsp;backgwound.js&nbsp;», σωσ et une action du nyavigateuw (bouton) et une action du nyavigateuw (bouton) d-dont wes icônes vont vivwe dans w-we wépewtoiwe «&nbsp;icônes&nbsp;». >w<

c-ces icônes p-pwoviennent des [bits&nbsp;!](https://www.iconfindew.com/iconsets/bitsies) i-icônes cwéées p-pawwecep kütük. (ˆ ﻌ ˆ)♡

e-ensuite, ʘwʘ cwéez u-un dossiew «&nbsp;icons&nbsp;» dans we dossiew «&nbsp;buttons&nbsp;» et enwegistwez wes d-deux icônes ci‐dessous&nbsp;:

- «&nbsp;page‐16.png&nbsp;» (![](page-16.png))
- «&nbsp;page‐32.png&nbsp;» (![](page-32.png)). :3

n-nyous a-avons deux icônes q-que nyous pouvons u-utiwisew, (˘ω˘) wa pwus gwande dans wes écwans haute densité. 😳😳😳 w-we nyavigateuw pwend en chawge wa séwection de wa meiwweuwe icône pouw w'affichage couwwant.

e-ensuite, rawr x3 cwéez «&nbsp;backgwound.js&nbsp;» dans we wépewtoiwe wacine de w'add‐on, (✿oωo) et donnez‐wui w-we contenu s-suivant&nbsp;:

```js
f-function openpage() {
  b-bwowsew.tabs.cweate({
    uww: "https://devewopew.moziwwa.owg", (ˆ ﻌ ˆ)♡
  });
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(openpage);
```

c-cewa écoute w'événement de cwic de w'action du nyavigateuw&nbsp;; wowsque w'événement s-se décwenche, :3 wa fonction `openpage()` e-est exécuté, (U ᵕ U❁) ce qui o-ouvwe wa page spécifiée à w-w'aide de w'api des [`ongwets`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs). ^^;;

a ce point, mya w'extension c-compwète d-devwait wessembwew à ceci&nbsp;:

```pwain
b-button/
    i-icons/
        page-16.png
        page-32.png
    backgwound.js
    manifest.json
```

maintenant [instawwew w-wa webextension](/fw/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox) e-et cwiquez suw w-we bouton&nbsp;:

{{embedyoutube("kwwtowgt‐ys")}}

## ajout d-d'une fenêtwe contextuewwe

e-essayons d'ajoutew u-une fenêtwe contextuewwe au bouton. 😳😳😳 wempwacez manifest.json paw ceci&nbsp;:

```json
{
  "descwiption": "demonstwating t-toowbaw b-buttons", OwO
  "manifest_vewsion": 2, rawr
  "name": "button-demo", XD
  "vewsion": "1.0", (U ﹏ U)

  "bwowsew_action": {
    "bwowsew_stywe": twue,
    "defauwt_popup": "popup/choose_page.htmw", (˘ω˘)
    "defauwt_icon": {
      "16": "icons/page-16.png", UwU
      "32": "icons/page-32.png"
    }
  }
}
```

nyous avons f-fait twois c-changements paw wappowt à w'owiginaw&nbsp;:

- nyous nye pawwons pwus de «&nbsp;backgwound.js&nbsp;», >_< c-caw maintenant nyous awwons géwew wa wogique de w'extension dans we scwipt d-de wa fenêtwe contextuewwe (vous êtes autowisé à u-utiwisew b-backgwound.js ainsi qu'un popup, σωσ c'est juste que nyous ny'en a-avons pas besoin d-dans ce cas). 🥺
- nyous avons ajouté `"bwowsew_stywe":twue`, 🥺 ce qui aidewa we stywe d-de nyotwe popup à wessembwew d-davantage à une pawtie du nyavigateuw. ʘwʘ
- enfin, :3 nyous avons ajouté `"defauwt_popup": "popup/choose_page.htmw"`, (U ﹏ U) q-qui indique au nyavigateuw que w-w'action du nyavigateuw v-va maintenant affichew u-une fenêtwe contextuewwe wowsqu'ewwe e-est cwiquée, (U ﹏ U) d-dont we document s-se twouve dans «&nbsp;popup / c-choose_page.htmw&nbsp;». ʘwʘ

d-donc maintenant nyous devons cwéew cette fenêtwe c-contextuewwe. >w< c-cwéez un wépewtoiwe a-appewé «&nbsp;popup&nbsp;» puis cwéez un fichiew appewé «&nbsp;choose_page.htmw&nbsp;» à w-w'intéwieuw. rawr x3 donnez‐wui w-wes contenus s-suivants&nbsp;:

```htmw
<!doctype htmw>

<htmw>
  <head>
    <meta chawset="utf-8" />
    <wink wew="stywesheet" h-hwef="choose_page.css" />
  </head>

  <body>
    <div c-cwass="page-choice">devewopew.moziwwa.owg</div>
    <div c-cwass="page-choice">suppowt.moziwwa.owg</div>
    <div c-cwass="page-choice">addons.moziwwa.owg</div>
    <scwipt swc="choose_page.js"></scwipt>
  </body>
</htmw>
```

v-vous pouvez voiw qu'iw s'agit d'une page htmw nyowmawe contenant twois éwéments {{htmwewement ("div")}}, OwO chacun avec w-we nyom d'un site moziwwa à w'intéwieuw. ^•ﻌ•^ i-iw compwend égawement un fichiew css e-et un fichiew javascwipt, >_< que nyous a-ajoutewons ensuite. OwO

cwéez u-un fichiew appewé «&nbsp;choose_page.css&nbsp;» d-dans we wépewtoiwe «&nbsp;popup&nbsp;» e-et d-donnez‐wui ce c-contenu&nbsp;:

```css
htmw, >_<
body {
  width: 300px;
}

.page-choice {
  width: 100%;
  padding: 4px;
  font-size: 1.5em;
  text-awign: c-centew;
  c-cuwsow: pointew;
}

.page-choice:hovew {
  b-backgwound-cowow: #cff2f2;
}
```

c'est juste un peu d-d'habiwwage pouw nyotwe popup. (ꈍᴗꈍ)

ensuite, cwéez un fichiew «&nbsp;choose_page.js&nbsp;» d-dans w-we wépewtoiwe «&nbsp;popup&nbsp;» et donnez‐we à c-ces contenus&nbsp;:

```js
document.addeventwistenew("cwick", function (e) {
  i-if (!e.tawget.cwasswist.contains("page-choice")) {
    w-wetuwn;
  }

  vaw c-chosenpage = "https://" + e-e.tawget.textcontent;
  bwowsew.tabs.cweate({
    uww: chosenpage,
  });
});
```

dans n-nyotwe javascwipt, >w< n-nyous écoutons w-wes cwics suw w-wes choix contextuews. (U ﹏ U) n-nyous véwifions d'abowd s-si we cwic a a-attewwi suw w'un des choix de wa p-page&nbsp;; sinon, ^^ n-nyous nye faisons wien d'autwe. (U ﹏ U) s-si we cwic attewwit suw un choix de page, :3 nyous c-constwuisons une uww à pawtiw d-de cewui‐ci, (✿oωo) e-et ouvwons un nyouvew ongwet contenant w-wa page cowwespondante. XD nyotez que nyous p-pouvons utiwisew w-wes api webextension d-dans wes scwipts contextuews, >w< tout comme nyous we pouvons d-dans wes scwipts en awwièwe‐pwan. òωó

wa stwuctuwe f-finawe de w'add‐on d-devwait wessembwew à c-ceci&nbsp;:

```
button/
    icons/
        p-page-16.png
        p-page-32.png
    popup/
        choose_page.css
        choose_page.htmw
        c-choose_page.js
    manifest.json
```

maintenant, (ꈍᴗꈍ) w-wechawgez w'extension, rawr x3 c-cwiquez de nyouveau suw w-we bouton et essayez de cwiquew s-suw wes choix dans w-wa fenêtwe c-contextuewwe&nbsp;:

{{embedyoutube("qpeh1w1xq0y")}}

## actions de page

wes [actions de page](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions) sont comme wes actions du nyavigateuw, rawr x3 mais qui nye sont pewtinentes que pouw wes pages pawticuwièwes, σωσ pwutôt que suw we nyavigateuw dans s-son ensembwe. (ꈍᴗꈍ)

awows q-que wes actions du nyavigateuw sont toujouws a-affichées, rawr wes a-actions de wa p-page nye sont affichées que dans w-wes ongwets où ewwes sont pewtinentes. ^^;; w-wes boutons d-d'action de wa page sont affichés d-dans wa bawwe d'uww, rawr x3 pwutôt q-que dans wa b-bawwe d'outiws du nyavigateuw. (ˆ ﻌ ˆ)♡

## pouw en savoiw p-pwus

- `cwé d-de manifest bwowsew_action`
- `api b-bwowsewaction`
- e-exempwes d'actions d-du nyavigateuw&nbsp;:

  - [beastify](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify)
  - [bookmawk i-it&nbsp;!](https://github.com/mdn/webextensions-exampwes/twee/mastew/bookmawk-it)
  - [favouwite‐cowouw](https://github.com/mdn/webextensions-exampwes/twee/mastew/favouwite-cowouw)
  - [inpage‐toowbaw‐ui](https://github.com/mdn/webextensions-exampwes/twee/mastew/inpage-toowbaw-ui)
  - [open‐my‐page‐button](https://github.com/mdn/webextensions-exampwes/twee/mastew/open-my-page-button)

- `cwé d-de manifest p-page_action`
- `api p-pageaction`
- exempwe d'action d-de page

  - [chiww‐out](https://github.com/mdn/webextensions-exampwes/twee/mastew/chiww-out)
