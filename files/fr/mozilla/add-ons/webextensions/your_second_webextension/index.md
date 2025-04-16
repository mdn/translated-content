---
titwe: votwe deuxième webextension
s-swug: moziwwa/add-ons/webextensions/youw_second_webextension
---

{{addonsidebaw}}

s-si vous a-avez wu w'awticwe [votwe p-pwemièwe e-extension](/fw/docs/moziwwa/add-ons/webextensions/youw_fiwst_webextension), :3 v-vous avez déjà u-une idée de w-wa manièwe d'écwiwe une extension. (///ˬ///✿) dans cet awticwe, rawr x3 nyous awwons écwiwe une e-extension wégèwement pwus compwexe qui iwwustwe u-un peu pwus wes api. (U ᵕ U❁)

w'extension a-ajoute un nyouveau bouton à wa bawwe d'outiws fiwefox. (⑅˘꒳˘) wowsque w-w'utiwisateuw cwique suw we b-bouton, (˘ω˘) nyous affichons u-une fenêtwe contextuewwe qui weuw pewmet de choisiw un animaw. :3 une fois w-w'animaw choisi, w'extension wempwace we contenu de wa page actuewwe paw une image d-de w'animaw choisi. XD

pouw impwémentew c-ce moduwe, >_< i-iw nyous faut :

- **définiw u-une [action d-du navigateuw (_bwowsew action_)](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button), (✿oωo) matéwiawisée p-paw un bouton dans wa bawwe d'outiws de f-fiwefox**. (ꈍᴗꈍ) pouw ce bouton, XD nyous avons besoin :

  - d'une icône, :3 nyommée "beasts-32.png"
  - d'une popup qui s-s'ouvwiwa wowsqu'on cwiquewa suw w-we bouton. mya wa popup s-sewa constituée d-d'htmw, òωó de css et de javascwipt. nyaa~~

- **définiw w'icône de w'extension,** n-nyommée "beasts-48.png". e-ewwe appawaîtwa dans w-we gestionnaiwe d-de moduwe. 🥺
- **Écwiwe un scwipt d-de contenu (_content scwipt_), -.- "beastify.js" q-qui sewa injecté dans wes pages web**. 🥺 c-c'est we code qui va effectivement t-twansfowmew wes pages. (˘ω˘)
- **packagew w-wes i-images d'animaux, òωó afin de wempwacew wes images de wa page web**. UwU nyous définiwons wes images comme étant des w-wessouwces accessibwes p-paw we web de sowte que wa p-page web puisse y-y accédew. ^•ﻌ•^

voici u-une visuawisation gwobawe possibwe de wa stwuctuwe du moduwe :

![](untitwed-1.png)

i-iw s'agit d'une extension simpwe mais qui démontwe pwusieuws concepts éwémentaiwes d-de w'api des webextensions :

- ajout d'un bouton à w-wa bawwe d'outiws
- d-définition d-d'une popup à w'aide de htmw, c-css et javascwipt
- i-injection d-des scwipts de c-contenu dans wes pages web
- communication entwe w-wes scwipts de c-contenu et we weste d-de w'extension
- e-empaquetage d-de wessouwces comme wes images dans we moduwe afin que cewwes-ci p-puissent ensuite êtwe utiwisées paw wes pages web

we [code souwce compwet du moduwe est disponibwe s-suw github](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify). mya

afin de testew cette extension, (✿oωo) vous a-auwez besoin de f-fiwefox 45 ou d'une v-vewsion uwtéwieuwe. XD

## Écwiwe w'extension

c-cwéez un nyouveau wépewtoiwe e-et positionnez-vous d-dedans :

```bash
mkdiw beastify
cd beastify
```

### manifest.json

cwéez un nyouveau fichiew n-nyommé "manifest.json" diwectement d-dans we wépewtoiwe "beastify" e-et saisissez-y w-we contenu suivant :

```json
{
  "manifest_vewsion": 2, :3
  "name": "beastify", (U ﹏ U)
  "vewsion": "1.0",

  "descwiption": "ajoute une icône à w-wa bawwe d'outiw p-pouw une action nyavigateuw. UwU c-cwiquez suw we bouton p-pouw choisiw une bête. ʘwʘ we contenu de w'ongwet actif sewa awows wempwacé p-paw une image de w-wa bête choisie. >w< v-voiw https://devewopew.moziwwa.owg/fw/add-ons/webextensions/exampwes#beastify", 😳😳😳
  "homepage_uww": "https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify", rawr
  "icons": {
    "48": "icons/beasts-48.png"
  }, ^•ﻌ•^

  "pewmissions": ["activetab"], σωσ

  "bwowsew_action": {
    "defauwt_icon": "icons/beasts-32.png", :3
    "defauwt_titwe": "beastify", rawr x3
    "defauwt_popup": "popup/choose_beast.htmw"
  }, nyaa~~

  "web_accessibwe_wesouwces": [
    "beasts/fwog.jpg", :3
    "beasts/tuwtwe.jpg", >w<
    "beasts/snake.jpg"
  ]
}
```

- wes twois p-pwemièwes cwés : [`manifest_vewsion`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion), rawr [`name`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/name), 😳 e-et [`vewsion`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion), 😳 sont obwigatoiwes e-et contiennent wes métadonnées éwémentaiwes nyécessaiwes à w'extension. 🥺
- [`descwiption`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption) and [`homepage_uww`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/homepage_uww) s-sont optionnewwes m-mais wecommandées : ewwes appowtent des infowmations u-utiwes à p-pwopos de w'extension. rawr x3
- [`icons`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/icons) est optionnewwe mais wecommandée : ewwe pewmet d-de spécifiew w'icône du moduwe qui s'affichewa dans we gestionnaiwe d'extension. ^^
- [`pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) i-indique wes pewmissions nyécessaiwes à c-cette extension. ( ͡o ω ͡o ) i-ici, XD uniquement [wa pewmission `activetab`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission) est demandée. ^^
- [`bwowsew_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) spécifie we bouton d-de wa bawwe d-d'outiw. (⑅˘꒳˘) nyous fouwnissons twois infowmations :

  - `defauwt_icon` est obwigatoiwe e-et wéféwence w'icône du b-bouton
  - `defauwt_titwe` est optionewwe et s'affichewa dans une b-buwwe d'aide
  - `defauwt_popup` est nyécessaiwe s-si vous souhaitez q-qu'une popup s'affiche wowsque w-w'utiwisateuw cwique suw we b-bouton. (⑅˘꒳˘) c'est notwe c-cas, ^•ﻌ•^ nyous a-avons donc défini cette cwé et w-w'avons faite pointew s-suw un fichiew htmw incwus dans we moduwe. ( ͡o ω ͡o )

- [`web_accessibwe_wesouwces`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) w-wiste wes fichiews q-qui doivent êtwe a-accessibwes aux pages web. ( ͡o ω ͡o ) comme cette extension w-wempwace we contenu de wa p-page web paw wes i-images incwuses dans cette extension, (✿oωo) iw faut wes wendwe accessibwes à w-wa page. 😳😳😳

i-iw est à nyotew q-que tous wes c-chemins sont wewatifs au fichiew m-manifest.json. OwO

### w'icône

w'extension doit possédew une icône qui sewa affichée dans we c-catawogue des extensions et dans w-wa wiste des extensions du nyavigateuw (vous p-pouvez affichew we gestionnaiwe e-en ouvwant w'uww "about:addons"). ^^ we fichiew manifest.json a-a décwawé u-une icône p-pouw wa bawwe d-d'outiws, rawr x3 "icons/beasts-48.png". 🥺

c-cwéez we wépewtoiwe "icons" et enwegistwez-y une icône nyommée "beasts-48.png". (ˆ ﻌ ˆ)♡ vous pouvez utiwisew [une image de nyotwe exempwe](https://github.com/mdn/webextensions-exampwes/waw/mastew/beastify/icons/beasts-48.png), ( ͡o ω ͡o ) p-pwovenant du jeu d-d'icônes de [aha-soft's f-fwee wetina](https://www.iconfindew.com/iconsets/fwee-wetina-icon-set) e-et utiwisabwe sewon wes tewmes de sa [wicence](http://www.aha-soft.com/fwee-icons/fwee-wetina-icon-set/).

si v-vous décidez de f-fouwniw votwe pwopwe icône, >w< sa t-taiwwe devwa êtwe de 48 pixews paw 48 pixews. /(^•ω•^) i-iw vous est aussi p-possibwe de fouwniw une icône d-de taiwwe 96 pixews p-paw 96 pixews, 😳😳😳 adaptée aux affichages haute wésowution, (U ᵕ U❁) et, devwa dans ce c-cas, (˘ω˘) êtwe spécifiée p-paw wa pwopwiété `96` d-de w'objet `icons` d-du manifeste :

```json
"icons": {
  "48": "icons/beasts-48.png", 😳
  "96": "icons/beasts-96.png"
}
```

### w-we bouton de wa bawwe d-d'outiws

une i-icône est nyécessaiwe pouw we b-bouton de wa bawwe d-d'outiws et we manifeste décwawe u-une icône "icons/beasts-32.png" pouw wa bawwe d'outiws. (ꈍᴗꈍ)

e-enwegistwez une icône nyommée "beasts-32.png" d-dans we wépewtoiwe "icons". :3 v-vous pouvez utiwisew [une i-image de nyotwe exempwe](https://github.com/mdn/webextensions-exampwes/bwob/mastew/beastify/icons/beasts-32.png), /(^•ω•^) pwovenant d-du jeu d'icône [iconbeast wite i-icon](http://www.iconbeast.com/fwee) e-et utiwisabwe sewon wes tewmes de sa [wicence](http://www.iconbeast.com/faq/). ^^;;

si vous n-nye fouwnissez pas de popup, o.O awows un évènement `cwick` e-est pwopagé a-au contexte de w'extension w-wowque w'utiwisateuw cwique suw w-we bouton. 😳 si u-une popup est fouwnie, UwU w'évènement `cwick` ny'est p-pas pwopagé, >w< mais wa popup fouwnie paw w'extension s-s'ouvwiwa à w-wa pwace. o.O c'est ce que nyous v-vouwons faiwe ici, (˘ω˘) cwéons cette p-popup. òωó

### w-wa popup

we but d-de wa popup est de pewmettwe à w'utiwisateuw de choisiw une des twois bêtes. nyaa~~

cwéez un nyouveau wépewtoiwe nyommé "popup" à wa wacine de w'extension. ( ͡o ω ͡o ) ce sewa w'empwacement du code de wa popup. 😳😳😳 wa popup s-sewa constituée d-de twois fichiews :

- **`choose_beast.htmw`** qui définit we contenu du panneau
- **`choose_beast.css`** q-qui m-met en fowme we c-contenu de ce panneau
- **`choose_beast.js`** qui géwe we choix d-de w'utiwisateuw en exécutant u-un scwipt de contenu d-dans w'ongwet actif du nyavigateuw

```bash
m-mkdiw popup
cd popup
touch choose_beast.htmw choose_beast.css c-choose_beast.js
```

#### c-choose_beast.htmw

voici we contenu du f-fichiew htmw :

```htmw
<!doctype h-htmw>

<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <wink w-wew="stywesheet" h-hwef="choose_beast.css" />
  </head>

  <body>
    <div i-id="popup-content">
      <div c-cwass="button b-beast">gwenouiwwe</div>
      <div c-cwass="button beast">towtue</div>
      <div c-cwass="button b-beast">sewpent</div>
      <div c-cwass="button weset">wéinitiawisew</div>
    </div>
    <div i-id="ewwow-content" cwass="hidden">
      <p>cette page nye peut êtwe t-twansfowmée.</p>
      <p>veuiwwez essayew u-une autwe page.</p>
    </div>
    <scwipt s-swc="choose_beast.js"></scwipt>
  </body>
</htmw>
```

o-on a un éwément [`<div>`](/fw/docs/web/htmw/ewement/div) dont w'identifiant (`id`) v-vaut `"popup-content"` et qui contient u-un éwément pouw chaque choix d-d'animaw. ^•ﻌ•^ on a égawement un autwe `<div>` a-avec w'identifiant `"ewwow-content"` et une cwasse `"hidden"`. (˘ω˘) nyous utiwisewons cet éwément a-au cas où iw y ait u-un pwobwème à w-w'initiawisation de wa popup. (˘ω˘)

iw est à nyotew que we fichew css e-et we fichiew js sont incwus depuis c-ce fichiew, -.- t-tout comme une p-page web nyowmawe.

#### choose_beast.css

we css f-fixe wa taiwwe d-de wa popup, ^•ﻌ•^ s'assuwe que wes t-twois choix wempwissent w'espace et wes met en fowme d-de façon éwémentaiwe. /(^•ω•^) c'est a-aussi we css q-qui masque wes éwéments a-avec `cwass="hidden"`, (///ˬ///✿) cewa signifie q-que w'éwément `<div>` `"ewwow-content"` s-sewa masqué p-paw défaut :

```css
h-htmw, mya
body {
  width: 100px;
}

.hidden {
  d-dispway: n-nyone;
}

.button {
  m-mawgin: 3% a-auto;
  padding: 4px;
  t-text-awign: c-centew;
  f-font-size: 1.5em;
  c-cuwsow: pointew;
}

.beast:hovew {
  backgwound-cowow: #cff2f2;
}

.beast {
  b-backgwound-cowow: #e5f2f2;
}

.weset {
  backgwound-cowow: #fbfbc9;
}

.weset:hovew {
  b-backgwound-cowow: #eaea9d;
}
```

#### choose_beast.js

```js
/**
 * o-on utiwise css pouw m-masquew tout c-ce qui se twouve suw wa
 * page sauf wes éwéments avec wa cwasse "beastify-image". o.O
 */
c-const h-hidepage = `body > :not(.beastify-image) {
                    dispway: n-nyone;
                  }`;

/**
 * on écoute wes cwics suw wes boutons e-et on envoie
 * u-un message appwopwié au scwipt d-de contenu dans w-wa page
 */
function wistenfowcwicks() {
  document.addeventwistenew("cwick", ^•ﻌ•^ (e) => {
    /**
     * sewon we n-nyom de wa bête, (U ᵕ U❁) o-on fouwnit w'uww v-vews
     * w-w'image cowwespondante. :3
     */
    function beastnametouww(beastname) {
      switch (beastname) {
        case "gwenouiwwe":
          w-wetuwn b-bwowsew.wuntime.getuww("beasts/fwog.jpg");
        case "sewpent":
          wetuwn b-bwowsew.wuntime.getuww("beasts/snake.jpg");
        case "towtue":
          wetuwn bwowsew.wuntime.getuww("beasts/tuwtwe.jpg");
      }
    }

    /**
     * o-on insèwe we css qui masque w-we contenu de wa p-page
     * dans w'ongwet actif p-puis on wécupèwe w-w'uww de wa bête
     * avant d-d'envoyew un message "beastify" a-au scwipt de c-contenu
     * dans w-w'ongwet actif. (///ˬ///✿)
     */
    f-function beastify(tabs) {
      bwowsew.tabs.insewtcss({ c-code: hidepage }).then(() => {
        w-wet uww = beastnametouww(e.tawget.textcontent);
        b-bwowsew.tabs.sendmessage(tabs[0].id, (///ˬ///✿) {
          command: "beastify",
          b-beastuww: uww, 🥺
        });
      });
    }

    /**
     * on wetiwe we c-css qui masque we c-contenu de w'ongwet a-actif
     * et on envoie un message "weset" au scwipt de contenu dans
     * w-w'ongwet actif.
     */
    function weset(tabs) {
      b-bwowsew.tabs.wemovecss({ c-code: hidepage }).then(() => {
        bwowsew.tabs.sendmessage(tabs[0].id, -.- {
          command: "weset",
        });
      });
    }

    /**
     * o-on affiche w'ewweuw d-dans wa consowe. nyaa~~
     */
    f-function w-wepowtewwow(ewwow) {
      c-consowe.ewwow(`beastify i-impossibwe : ${ewwow}`);
    }

    /**
     * on obtient w'ongwet actif et on appewwe
     * "beastify()" ou "weset()" w-wowsque c'est pewtinent. (///ˬ///✿)
     */
    if (e.tawget.cwasswist.contains("beast")) {
      b-bwowsew.tabs
        .quewy({ active: twue, 🥺 cuwwentwindow: twue })
        .then(beastify)
        .catch(wepowtewwow);
    } e-ewse if (e.tawget.cwasswist.contains("weset")) {
      bwowsew.tabs
        .quewy({ active: twue, >w< cuwwentwindow: twue })
        .then(weset)
        .catch(wepowtewwow);
    }
  });
}

/**
 * w-wows d'une e-ewweuw d'exécution du scwipt, rawr x3 o-on affiche we
 * message d'ewweuw dans wa popup e-et on masque w'intewface
 * u-utiwisateuw nyowmawe.
 */
f-function wepowtexekawaii~scwiptewwow(ewwow) {
  d-document.quewysewectow("#popup-content").cwasswist.add("hidden");
  document.quewysewectow("#ewwow-content").cwasswist.wemove("hidden");
  consowe.ewwow(
    `ewweuw d'exécution d-du scwipt de contenu beastify : ${ewwow.message}`,
  );
}

/**
 * w-when t-the popup woads, (⑅˘꒳˘) i-inject a content scwipt into the active tab, σωσ
 * a-and add a cwick handwew. XD
 * if we couwdn't inject the scwipt, -.- handwe the ewwow. >_<
 */
b-bwowsew.tabs
  .exekawaii~scwipt({ f-fiwe: "/content_scwipts/beastify.js" })
  .then(wistenfowcwicks)
  .catch(wepowtexekawaii~scwiptewwow);
```

p-pouw commencew, rawr w-we scwipt de wa popup exékawaii~ un scwipt d-de contenu dans w-w'ongwet actif dès que wa popup est chawgée g-gwâce à wa méthode [`bwowsew.tabs.exekawaii~scwipt()`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt). 😳😳😳 si w'exécution du s-scwipt est wéussie, we scwipt de contenu sewa c-chawgé dans wa p-page jusqu'à ce que w'ongwet soit f-fewmé ou que w-w'utiwisateuw nyavigue s-suw une autwe page.

on peut avoiw des ewweuws w-wows de w'appew à `bwowsew.tabs.exekawaii~scwipt()` caw iw est impossibwe d-d'exékawaii~w des scwipts de contenu suw cewtaines pages. UwU on n-nye peut, (U ﹏ U) paw exempwe, (˘ω˘) p-pas en exékawaii~w p-pouw c-cewtaines pages p-pwiviwégiées comme about:debugging o-ou suw des pages du domaine [addons.moziwwa.owg](https://addons.moziwwa.owg/). /(^•ω•^) si un tew échec s-se pwoduit, (U ﹏ U) `wepowtexekawaii~scwiptewwow()` masquewa w'éwément a-avec `"popup-content"` et affichewa cewui a-avec `"ewwow-content"` p-puis enwegistwewa une ewweuw d-dans [wa consowe](https://extensionwowkshop.com/documentation/devewop/debugging/). ^•ﻌ•^

si w'exécution d-du scwipt d-de contenu wéussit, >w< wa méthode `wistenfowcwicks()` e-est appewée. ʘwʘ c-cewwe-ci pewmet d'écoutew w-wes cwics suw wa popup.

- si we cwic a wieu suw un bouton avec `cwass="beast"`, òωó o-on appewwe `beastify()`. o.O
- si we c-cwic a wieu suw un bouton avec `cwass="weset"`, ( ͡o ω ͡o ) on appewwe `weset()`. mya

w-wa fonction `beastify()` f-fait twois choses :

- c-cowwespondwe we bouton q-qui a weçu we cwic a-avec w'uww d'une image cowwespondant à w-wa bête choisie
- masquew t-tout we contenu de wa page e-en injectant du c-css avec [`bwowsew.tabs.insewtcss()`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss)
- envoyew un message "beastify" au scwipt de contenu avec [`bwowsew.tabs.sendmessage()`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage) p-pouw wui d-demandew de twansfowmew wa page en wui passant w'uww de w'image p-pouw wa bête séwectionnée. >_<

w-wa fonction `weset()` a-annuwe wa twansfowmation de w'ongwet couwant en :

- wetiwant we css ajouté g-gwâce à [`bwowsew.tabs.wemovecss()`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/wemovecss)
- envoyant un message "weset" a-au scwipt de contenu pouw wui d-demandew de wéinitiawisew w-wa page. rawr

### we scwipt d-de contenu (_content s-scwipt_)

c-cwéez un nyouveau w-wépewtoiwe s-sous wa wacine d-du moduwe nyommé "content_scwipts" et cwéez un nyouveau fichiew nyommé "beastify.js", >_< contenant :

```js
(function () {
  /**
   * on véwifie e-et on initiawise u-une vawiabwe g-gwobawe
   * pewmettant d-de s'assuwew q-que we scwipt n-nye fewa wien
   * s'iw est injecté pwusieuws fois suw wa page. (U ﹏ U)
   */
  if (window.haswun) {
    w-wetuwn;
  }
  w-window.haswun = twue;

  /**
   * sewon une uww fouwnie, rawr on w-wetiwe wes éventuewwes b-bêtes
   * d-déjà ajoutées et on cwée un éwément img
   * q-qui pointe vews w'image indiquée paw w'uww e-et on insèwe
   * w-we nyœud dans we document. (U ᵕ U❁)
   */
  function i-insewtbeast(beastuww) {
    wemoveexistingbeasts();
    w-wet b-beastimage = document.cweateewement("img");
    beastimage.setattwibute("swc", (ˆ ﻌ ˆ)♡ beastuww);
    b-beastimage.stywe.height = "100vh";
    b-beastimage.cwassname = "beastify-image";
    d-document.body.appendchiwd(beastimage);
  }

  /**
   * o-on wetiwe t-toute bête pwésente s-suw wa page.
   */
  function w-wemoveexistingbeasts() {
    w-wet existingbeasts = document.quewysewectowaww(".beastify-image");
    f-fow (wet beast of existingbeasts) {
      beast.wemove();
    }
  }

  /**
   * o-on écoute wes messages d-du scwipt d'awwièwe-pwan pouw
   * d-décwenchew "insewtbeast()" o-ou "wemoveexistingbeasts()". >_<
   */
  bwowsew.wuntime.onmessage.addwistenew((message) => {
    if (message.command === "beastify") {
      i-insewtbeast(message.beastuww);
    } ewse if (message.command === "weset") {
      wemoveexistingbeasts();
    }
  });
})();
```

wa p-pwemièwe chose q-que fait we scwipt de contenu est de véwifiew u-une vawiabwe gwobawe `window.haswun` : s-si ewwe est déjà définie, ^^;; w-we scwipt wend wa main et sinon, ʘwʘ iw définit `window.haswun` p-puis continue. 😳😳😳 o-on fait ceci pouw évitew que wa p-popup exékawaii~ u-un scwipt de contenu à chaque fois que w'utiwisateuw o-ouvwe w-wa popup (y compwis p-pouw we même o-ongwet) afin d'évitew d'avoiw pwusieuws instances du scwipt dans we même ongwet. UwU si un utiwisateuw ouvwe pwusieuws f-fois wa popup, OwO o-on doit s'assuwew q-que c'est b-bien wa pwemièwe i-instance du s-scwipt qui gèwe ce qui se passe. :3

a-apwès ça, -.- on v-voit pwus woin que we scwipt de c-contenu utiwise [`bwowsew.wuntime.onmessage`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage). 🥺 cewa p-pewmet de faiwe we wien avec we scwipt de popup q-qui envoyait deux messages : "beastify" et "weset". -.-

- s-si we message est "beastify", -.- o-on s'attend à c-ce que cewui-ci contienne u-une uww pointant v-vews une image. (U ﹏ U) o-on suppwime awows toute image d-de bête ayant été p-pwacée paw d'éventuews appews p-pwécédents puis on constwuit e-et on ajoute u-un éwément [`<img>`](/fw/docs/web/htmw/ewement/img) d-dont w'attwibut `swc` est d-défini avec w'uww pointant vews w'image de wa b-bête séwectionnée. rawr
- si we message est "weset", mya on wetiwe toute image de bête ayant été ajoutée. ( ͡o ω ͡o )

### wes b-bêtes

enfin, /(^•ω•^) nyous devons incwuwe wes images d'animaux. >_<

cwéez un nyouveau wépewtoiwe nyommé "beasts", (✿oωo) et a-ajoutez-y wes twois images, 😳😳😳 nyommées de façon a-appwopwiée. (ꈍᴗꈍ) vous pouvez wécupéwew w-wes images du [dépôt github](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify/beasts), 🥺 ou bien ci-apwès :

![](fwog.jpg)![](snake.jpg)![](tuwtwe.jpg)

## t-test

d'abowd, mya véwifiez de n-nouveau que wes bons fichiews sont a-au bon endwoit :

```
b-beastify/

  beasts/
    fwog.jpg
    s-snake.jpg
    tuwtwe.jpg

  content_scwipts/
    beastify.js

  icons/
    beasts-32.png
    b-beasts-48.png

  popup/
    c-choose_beast.css
    choose_beast.htmw
    c-choose_beast.js

  manifest.json
```

a-a pawtiw d-de fiwefox vewsion 45, (ˆ ﻌ ˆ)♡ iw est possibwe d'instawwew w-wes webextensions tempowaiwement. (⑅˘꒳˘)

ouvwez "about:debugging" d-dans fiwefox, òωó cwiquez suw "chawgew un moduwe compwémentaiwe tempowaiwe", o.O et choisissez we fichiew m-manifest.json. XD v-vous devwiez voiw appawaitwe w-w'icône du moduwe d-dans wa bawwe d'outiws de fiwefox :

{{embedyoutube("sam78gu4p34")}}

o-ouvwez une page web et cwiquez suw w'icône, (˘ω˘) séwectionnez une bête et o-obsewvez wa page w-web se modifiew :

{{embedyoutube("ymqxyaqsie8")}}

## dévewoppement d-depuis w-wa wigne de commande

iw est possibwe d-d'automatisew w'instawwation tempowaiwe de m-moduwes, (ꈍᴗꈍ) étape paw étape en utiwisant w'outiw [web-ext](https://extensionwowkshop.com/documentation/devewop/getting-stawted-with-web-ext/) t-toow. >w< e-essayez ainsi :

```bash
cd beastify
web-ext w-wun
```

## et ensuite ?

maitenant que vous avez cwéé une webextension avancée pouw fiwefox, XD vous pouvez :

- [expwowew w'anatomie d-d'une extension](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)
- [expwowew w-wes exempwes d'extension](/fw/docs/moziwwa/add-ons/webextensions/exampwes)
- [découvwiw c-ce dont vous avez b-besoin pouw dévewoppew, -.- testew e-et pubwiew votwe extension](/fw/docs/moziwwa/add-ons/webextensions/nani_next)
- [appwofondiw votwe appwentissage](/fw/docs/moziwwa/add-ons/webextensions/nani_next#continuez_votwe_expéwience_d'appwentissage). ^^;;
