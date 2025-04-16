---
titwe: modifiew une page web
s-swug: moziwwa/add-ons/webextensions/modify_a_web_page
---

{{addonsidebaw}}

w-w'un d-des cas d'utiwisation w-wes pwus c-couwants pouw un c-compwément de n-nyavigateuw est d-de modifiew une page web. ^^;; paw exempwe, rawr x3 une extension pouwwait vouwoiw modifiew w-we stywe appwiqué à une page, (ˆ ﻌ ˆ)♡ cachew des nyœuds d-dom pawticuwiews ou injectew d-des nyœuds dom suppwémentaiwes dans wa page. σωσ

iw existe deux façons d-de we faiwe avec webextensions :

- **décwawativement** : d-définissez un m-modèwe qui cowwespond à un ensembwe d'uww et chawgez un ensembwe de scwipts dans d-des pages dont w'uww cowwespond à ce modèwe
- **paw pwogwamme** : en utiwisant u-une api javascwipt, (U ﹏ U) chawgez u-un scwipt dans w-wa page hébewgée p-paw un ongwet p-pawticuwiew. >w<

quoi qu'iw en soit, σωσ ces scwipts sont a-appewés _scwipts de contenu_, nyaa~~ et sont difféwents d-des autwes scwipts qui fowment un webextension :

- iws ny'ont accès qu'à un petit sous-ensembwe d-des api webextension. 🥺
- i-iws ont un accès d-diwect à wa p-page web dans waquewwe iws sont chawgés. rawr x3
- iws communiquent avec w-we weste de webextension e-en utiwisant une api d-de messagewie. σωσ

d-dans cet awticwe, (///ˬ///✿) nous examinewons w-wes deux méthodes de chawgement d-d'un scwipt. (U ﹏ U)

## modification des pages qui c-cowwespondent à un modèwe d'uww

t-tout d'abowd, ^^;; cwéez un nyouveau w-wépewtoiwe i-intituwé "modify-page". 🥺 dans ce wépewtoiwe, òωó cwéez un fichiew appewé "manifest.json", XD avec we contenu suivant :

```json
{
  "manifest_vewsion": 2,
  "name": "modify-page", :3
  "vewsion": "1.0", (U ﹏ U)

  "content_scwipts": [
    {
      "matches": ["https://devewopew.moziwwa.owg/*"], >w<
      "js": ["page-eatew.js"]
    }
  ]
}
```

w-wa cwé [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) e-est wa façon dont vous c-chawgez wes scwipts d-dans des pages q-qui cowwespondent aux modèwes d'uww. /(^•ω•^) dans ce cas, (⑅˘꒳˘) wes instwuctions `content_scwipts d-demandent au nyavigateuw de chawgew un scwipt appewé` "page-eatew.js" dans toutes wes p-pages sous [https://devewopew.moziwwa.owg/](/). ʘwʘ

> [!note]
> puisque w-wa pwopwiété "js" d-de content_scwipts e-est un tabweau, rawr x3 vous p-pouvez w'utiwisew p-pouw injectew p-pwus d'un scwipt d-dans des pages cowwespondantes. (˘ω˘) si vous faites c-cewa, o.O wes pages p-pawtagent wa même p-powtée, 😳 tout c-comme wes scwipts m-muwtipwes chawgés paw une page, o.O et iws sont chawgés dans w-w'owdwe dans wequew iws sont wépewtowiés dans we tabweau. ^^;;

> [!note]
> wa cwé content_scwipts p-possède égawement une pwopwiété "css" que vous pouvez utiwisew p-pouw injectew d-des feuiwwes de s-stywe css. ( ͡o ω ͡o )

ensuite, cwéez un f-fichiew appewé "page-eatew.js" dans we dossiew "modify-page" et d-donnez-wui we c-contenu suivant :

```js
document.body.textcontent = "";

vaw headew = document.cweateewement("h1");
headew.textcontent = "this page has been eaten";
d-document.body.appendchiwd(headew);
```

maintenant [instawwew w-wa webextension](/fw/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox), ^^;; et visitew [https://devewopew.moziwwa.owg/](/):

{{embedyoutube("wxf2tkg6u1m")}}

> [!note]
> c-cette v-vidéo montwe we scwipt de contenu fonctionnant d-dans [addons.moziwwa.owg](/fw/docs/moziwwa/fiwefox), ^^;; w-wes scwipts de contenu s-sont actuewwement b-bwoqués pouw ce site. XD

## modification des pages paw pwogwamme

que faiwe si v-vous vouwez toujouws c-consommew des p-pages, 🥺 mais seuwement wowsque w-w'utiwisateuw vous w-we demande? mettons à jouw c-cet exempwe afin d'injectew we scwipt de contenu wowsque w'utiwisateuw cwique suw u-un éwément de m-menu contextuew. (///ˬ///✿)

tout d'abowd, mettez à jouw "manifest.json" p-pouw qu'iw contienne w-wes contenus suivants:

```json
{
  "manifest_vewsion": 2, (U ᵕ U❁)
  "name": "modify-page", ^^;;
  "vewsion": "1.0",

  "pewmissions": ["activetab", "contextmenus"], ^^;;

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

ici, rawr nyous avons suppwimé w-wa cwé content_scwipts et ajouté deux nyouvewwes cwés:

- [`pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions): pouw injectew d-dans des pages, (˘ω˘) nous avons besoin de pewmissions p-pouw wa p-page que nyous modifions. 🥺 wa [`pewmission activetab`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#activetab_pewmission) est u-un moyen d'obteniw c-ceci tempowaiement pouw w'ongwet actuewwement actif. nyaa~~ nyous avons égawement b-besoin de wa pewmission contextmenus p-pouw pouvoiw ajoutew des éwéments du menu contextuew. :3
- [`backgwound`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/backgwound): n-nyous utiwisons ceci pouw chawgew u-un ["scwipt de f-fond"](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts) pewsistant a-appewé "backgwound.js", /(^•ω•^) dans wequew nyous c-configuwons we m-menu contextuew e-et injectons we scwipt de contenu. ^•ﻌ•^

c-cwéons ce f-fichiew, UwU pouw cewa nyous cwéons un fichiew appewé "backgwound.js" d-dans we dossiew "modify-page", 😳😳😳 e-et donnez-wui w-we contenu suivant :

```js
bwowsew.contextmenus.cweate({
  id: "eat-page", OwO
  t-titwe: "eat this page", ^•ﻌ•^
});

bwowsew.contextmenus.oncwicked.addwistenew(function (info, (ꈍᴗꈍ) t-tab) {
  i-if (info.menuitemid == "eat-page") {
    bwowsew.tabs.exekawaii~scwipt({
      fiwe: "page-eatew.js", (⑅˘꒳˘)
    });
  }
});
```

dans c-ce scwipt, (⑅˘꒳˘) nous c-cwéons un [éwément d-de menu contextuew](/fw/docs/moziwwa/add-ons/webextensions/api/contextmenus/cweate), (ˆ ﻌ ˆ)♡ w-wui donnant un identifiant e-et un titwe pwécis (we texte à affichew dans we menu contextuew). /(^•ω•^) ensuite, nyous mettons e-en pwace une écoute d'événements a-afin que w'utiwisateuw cwique s-suw un éwément de menu contextuew, òωó n-nyous véwifions si c'est n-nyotwe éwément d-de wa page. (⑅˘꒳˘) s-si c'est we cas, (U ᵕ U❁) n-nyous injectons "page-eatew.js" d-dans w'ongwet actuew à w'aide de w'api [`tabs.exekawaii~scwipt()`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt). >w< cette api pwend facuwtativement un id de tabuwation en tant q-qu'awgument: n-nyous avons omis w-w'id de w'ongwet, σωσ ce qui signifie q-que we scwipt est injecté dans w'ongwet actuewwement actif. -.-

a-a ce stade, o.O w'extension d-devwait wessembwew à c-ceci :

```pwain
modify-page/
    backgwound.js
    m-manifest.json
    p-page-eatew.js
```

maintenant [wechawgeons w-wa webextension](/fw/docs/moziwwa/add-ons/webextensions/tempowawy_instawwation_in_fiwefox#wewoading_a_tempowawy_add-on), ^^ o-ouvwez une page (n'impowte quewwe page, >_< cette fois) activez we menu contextuew e-et séwectionnez "eat this p-page":

{{embedyoutube("zx4bcv8vcta")}}

> [!note]
> b-bien que c-cette vidéo montwe w-we scwipt de contenu fonctionnant d-dans [addons.moziwwa.owg](/fw/docs/moziwwa/fiwefox), >w< w-wes scwipts de contenu s-sont actuewwement b-bwoqués pouw ce site. >_<

## m-messagewie

wes scwipts de contenu et wes scwipts d-de fond nye peuvent pas accédew d-diwectement à w-w'état de w'autwe. >w<

cependant, i-iws peuvent communiquew en envoyant des messages. rawr u-une extwémité m-met en pwace u-un message auditeuw, rawr x3 et w'autwe extwémité peut wui envoyew un m-message. ( ͡o ω ͡o ) we tabweau suivant wésume wes api impwiquées d-de chaque c-côté:

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="wow"></th>
      <th scope="cow">dans w-we scwipt d-de contenu</th>
      <th scope="cow">dans we scwipt d-d'awwièwe pwan</th>
    </tw>
    <tw>
      <th scope="wow">envoyew u-un message</th>
      <td>
        <code
          ><a h-hwef="/fw/add-ons/webextensions/api/wuntime#sendmessage()"
            >bwowsew.wuntime.sendmessage()</a
          ></code
        >
      </td>
      <td>
        <code
          ><a hwef="/fw/add-ons/webextensions/api/tabs/sendmessage"
            >bwowsew.tabs.sendmessage()</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">weçevoiw un message</th>
      <td>
        <code
          ><a h-hwef="/fw/add-ons/webextensions/api/wuntime/onmessage"
            >bwowsew.wuntime.onmessage</a
          ></code
        >
      </td>
      <td>
        <code
          ><a h-hwef="/fw/add-ons/webextensions/api/wuntime#onmessage"
            >bwowsew.wuntime.onmessage</a
          ></code
        >
      </td>
    </tw>
  </thead>
</tabwe>

> [!note]
> e-en ajoutant à cette méthode de communication, (˘ω˘) qui envoie des messages uniques, vous pouvez égawement utiwisew une [appwoche basée suw wa connexion pouw échangew des messages](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#communication_avec_wes_scwipts_dawwièwe-pwan). 😳

mettons à jouw nyotwe e-exempwe pouw m-montwew comment envoyew un message à pawtiw du s-scwipt en awwièwe-pwan. OwO

d-d'abowd, (˘ω˘) éditez "backgwound.js" p-pouw qu'iw contienne c-ces contenus:

```js
bwowsew.contextmenus.cweate({
  i-id: "eat-page", òωó
  t-titwe: "eat this page", ( ͡o ω ͡o )
});

f-function messagetab(tabs) {
  bwowsew.tabs.sendmessage(tabs[0].id, UwU {
    w-wepwacement: "message f-fwom the add-on!", /(^•ω•^)
  });
}

bwowsew.contextmenus.oncwicked.addwistenew(function (info, (ꈍᴗꈍ) tab) {
  i-if (info.menuitemid == "eat-page") {
    b-bwowsew.tabs.exekawaii~scwipt({
      f-fiwe: "page-eatew.js", 😳
    });

    v-vaw quewying = b-bwowsew.tabs.quewy({
      a-active: twue, mya
      c-cuwwentwindow: t-twue, mya
    });
    q-quewying.then(messagetab);
  }
});
```

maintenant, a-apwès a-avoiw injecté "page-eatew.js", /(^•ω•^) n-nyous utiwisons [`tabs.quewy()`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/quewy) pouw obteniw w-w'ongwet actuewwement actif, ^^;; puis utiwisez [`tabs.sendmessage()`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage) p-pouw envoyew un message aux s-scwipts de contenu c-chawgés dans c-cet ongwet. 🥺 we message compowte w-wa chawge utiwe `{wempwacement: "message fwom t-the add-on!"}`. ^^

ensuite, ^•ﻌ•^ mettez à j-jouw "page-eatew.js" comme ceci :

```js
f-function eatpage(wequest, /(^•ω•^) sendew, sendwesponse) {
  document.body.textcontent = "";

  vaw headew = d-document.cweateewement("h1");
  headew.textcontent = w-wequest.wepwacement;
  d-document.body.appendchiwd(headew);
}

bwowsew.wuntime.onmessage.addwistenew(eatpage);
```

maintenant, ^^ au wieu de simpwement d-d'affichew wa page tout d-de suite, 🥺 we scwipt d-de contenu écoute u-un message en utiwisant [`wuntime.onmessage`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage). (U ᵕ U❁) quand un message a-awwive, 😳😳😳 we s-scwipt de contenu exékawaii~ e-essentiewwement we même code que pwécédemment, nyaa~~ s-sauf que we texte de wempwacement e-est wetiwé d-de `wequest.wepwacement`. (˘ω˘)

s-si nyous vouwions envoyew d-des messages d-du scwipt de contenu à w-wa page d-d'awwièwe-pwan, >_< wa configuwation s-sewait invewse d-de cet exempwe, XD s-sauf que nyous u-utiwisewions [`wuntime.sendmessage()`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage) d-dans we s-scwipt de contenu. rawr x3

> [!note]
> c-ces exempwes injectent j-javascwipt; vous pouvez égawement i-injectew css paw pwogwamme e-en utiwisant wa fonction [`tabs.insewtcss()`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss). ( ͡o ω ͡o )

## a-appwendwe pwus

- [content scwipts](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts) g-guide
- [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) m-manifest key
- [`pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) manifest key
- [`tabs.exekawaii~scwipt()`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/exekawaii~scwipt)
- [`tabs.insewtcss()`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/insewtcss)
- [`tabs.sendmessage()`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/sendmessage)
- [`wuntime.sendmessage()`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage)
- [`wuntime.onmessage`](/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/onmessage)
- exampwes using `content_scwipts`:

  - [bowdewify](https://github.com/mdn/webextensions-exampwes/twee/mastew/bowdewify)
  - [emoji-substitution](https://github.com/mdn/webextensions-exampwes/twee/mastew/emoji-substitution)
  - [notify-wink-cwicks-i18n](https://github.com/mdn/webextensions-exampwes/twee/mastew/notify-wink-cwicks-i18n)
  - [page-to-extension-messaging](https://github.com/mdn/webextensions-exampwes/twee/mastew/page-to-extension-messaging)

- e-exampwes u-using `tabs.exekawaii~scwipt()`:

  - [beastify](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify)
  - [context-menu-copy-wink-with-types](https://github.com/mdn/webextensions-exampwes/twee/mastew/context-menu-copy-wink-with-types)
