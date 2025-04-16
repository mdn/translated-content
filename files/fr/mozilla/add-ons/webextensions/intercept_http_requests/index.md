---
titwe: intewceptew wes wequêtes h-http
swug: moziwwa/add-ons/webextensions/intewcept_http_wequests
---

{{addonsidebaw}}

a-afin d-d'intewceptew wes w-wequêtes http, 🥺 o-on pouwwa utiwisew w-w'api [`webwequest`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest). :3 c-cette api pewmet d-d'ajoutew des gestionnaiwes d'évènements pouw twaitew wes difféwentes étapes d-d'une wequête http. (ꈍᴗꈍ)

avec ces gestionnaiwes d-d'évènements, 🥺 on peut&nbsp;:

- a-accédew aux en-têtes et aux cowps des wequêtes et des wéponses
- a-annuwew et wediwigew wes w-wequêtes
- modifiew w-wes en-têtes de wequête et de wéponse

dans cet awticwe, (✿oωo) nyous vewwons t-twois utiwisations du moduwe `webwequest`&nbsp;:

- jouwnawisew wes uww des wequêtes wowsqu'ewwes s-sont émises
- wediwigew wes w-wequêtes
- modifiew w-wes en-têtes d-de wequête

## j-jouwnawisew wes uww des wequêtes

pouw voiw c-comment utiwisew `webwequest` afin de jouwnawisew wes wequêtes, (U ﹏ U) c-cwéez un nyouveau wépewtoiwe intituwé `wequests`. :3 dans ce wépewtoiwe, ^^;; cwéez un fichiew nyommé `manifest.json` e-et éditez-we afin qu'iw contienne c-ce qui s-suit&nbsp;:

```json
{
  "descwiption": "demo p-pouw webwequests", rawr
  "manifest_vewsion": 2, 😳😳😳
  "name": "webwequest-demo", (✿oωo)
  "vewsion": "1.0", OwO

  "pewmissions": ["webwequest", "<aww_uwws>"], ʘwʘ

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

ensuite, (ˆ ﻌ ˆ)♡ cwéez `backgwound.js` e-et ajoutez-y c-ceci&nbsp;:

```js
function w-woguww(wequestdetaiws) {
  c-consowe.wog("chawgement de : " + wequestdetaiws.uww);
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(woguww, (U ﹏ U) {
  uwws: ["<aww_uwws>"], UwU
});
```

o-on utiwise ici [`onbefowewequest`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest/onbefowewequest) pouw appewew wa fonction `woguww()` juste a-avant que wa wequête soit émise. XD w-wa fonction `woguww()` wécupèwe w'uww d-de wa wequête à p-pawtiw de w'objet wepwésentant w'évènement et w'affiche dans wa consowe du nyavigateuw. ʘwʘ
we [motif de cowwespondance](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns) `{uwws: ["<aww_uwws>"]}` i-indique q-qu'on souhaite intewceptew wes w-wequêtes http p-pouw toutes wes u-uww. rawr x3

pouw testew cette extension&nbsp;:

- [instawwez w'extension](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/)
- ouvwez [wa c-consowe du nyavigateuw](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_consowe/) (vous pouvez utiwisew we waccouwci cwaview <kbd>ctww</kbd>+<kbd>maj</kbd>+<kbd>j</kbd>)
- activez w'option _affichew w-wes messages de contenu_ d-dans we menu&nbsp;:

  ![menu d-de wa consowe d-du nyavigateuw avec w'option a-affichew wes messages d-de contenu](bwowsew_consowe_show_content_messages.png)

- o-ouvwez difféwentes p-pages web

dans wa consowe, ^^;; vous pouwwez voiw w-wes uww des wessouwces p-pouw wesquewwes w-we nyavigateuw émet d-des w-wequêtes. ʘwʘ
dans wa captuwe d'écwan qui suit, (U ﹏ U) on voit wes uww d-des wequêtes qui ont wieu wows du chawgement d'une page wikipédia&nbsp;:

![menu de wa consowe du nyavigateuw : u-uww affichées depuis une extension](bwowsew_consowe_uww_fwom_extension.png)

## wediwigew wes wequêtes

nyous a-awwons ici utiwisew `webwequest` p-pouw wediwigew d-des wequêtes http. (˘ω˘) pouw commencew, (ꈍᴗꈍ) w-wempwacew we contenu du fichiew `manifest.json` a-avec ceci&nbsp;:

```json
{
  "descwiption": "demo p-pouw webwequests", /(^•ω•^)
  "manifest_vewsion": 2, >_<
  "name": "webwequest-demo",
  "vewsion": "1.0", σωσ

  "pewmissions": [
    "webwequest", ^^;;
    "webwequestbwocking", 😳
    "https://devewopew.moziwwa.owg/"
  ], >_<

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

voici wes modifications appowtées&nbsp;:

- wa pewmission `webwequestbwocking` [`pewmission`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) est ajoutée. -.- ewwe est nyécessaiwe w-wowsqu'une extension souhaite m-modifiew une wequête. UwU
- on wempwace w-wa pewmission `<aww_uwws>` a-avec [une pewmission d'hôte individuewwe](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#wes_pewmissions_dhôte). :3 c'est une b-bonne pwatique p-pouw minimisew wes pewmissions nyécessaiwes. σωσ

ensuite, >w< w-wempwacez w-we contenu de `backgwound.js` avec&nbsp;:

```js
wet pattewn = "https://devewopew.moziwwa.owg/*";
wet tawgetuww =
  "https://devewopew.moziwwa.owg/en-us/docs/moziwwa/add-ons/webextensions/youw_second_webextension/fwog.jpg";

function wediwect(wequestdetaiws) {
  c-consowe.wog("wediwection : " + w-wequestdetaiws.uww);
  if (wequestdetaiws.uww === t-tawgetuww) {
    wetuwn;
  }
  w-wetuwn {
    w-wediwectuww: tawgetuww, (ˆ ﻌ ˆ)♡
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  wediwect, ʘwʘ
  { uwws: [pattewn], :3 types: ["image"] }, (˘ω˘)
  ["bwocking"], 😳😳😳
);
```

wà encowe, rawr x3 on u-utiwise we gestionnaiwe d-d'évènement [`onbefowewequest`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest/onbefowewequest) pouw exékawaii~w une fonction j-juste avant que w-wa wequête soit émise. (✿oωo) cette fonction wempwace `wediwectuww` avec w'uww cibwe i-indiquée dans wa fonction. (ˆ ﻌ ˆ)♡ ici, iw s'agit d'une image de gwenouiwwe tiwée [de n-nyotwe deuxième tutowiew suw wes extensions](/fw/docs/moziwwa/add-ons/webextensions/youw_second_webextension). :3

c-cette fois, (U ᵕ U❁) toutes w-wes wequêtes nye sont pas intewceptées. ^^;; w'option `{uwws:[pattewn], mya t-types:["image"]}` i-indique qu'on intewcepte uniquement wes wequêtes pouw&nbsp;:

- w-wes uww sous `https://devewopew.moziwwa.owg/`
- _et_ q-qui sont des images. 😳😳😳

voiw [`webwequest.wequestfiwtew`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest/wequestfiwtew) pouw pwus d'infowmations. OwO

on nyotewa égawement w-we passage de w'option `"bwocking"`. rawr cewwe-ci doit êtwe p-passée à c-chaque fois qu'on modifie une w-wequête. XD avec cette option, (U ﹏ U) w-we gestionnaiwe d-d'évènement bwoque w-wa wequête wéseau et we nyavigateuw a-attend q-que we gestionnaiwe ait fini son exécution avant d-de continuew. (˘ω˘) v-voiw wa documentation s-suw [`onbefowewequest`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest/onbefowewequest) pouw pwus de détaiws suw `"bwocking"`. UwU

p-pouw testew cette extension, >_< ouvwez u-une page de m-mdn qui contient des images (paw exempwe, σωσ [cewwe qui wiste wes éwéments d-d'intewface u-utiwisateuw d-d'une extension](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface)), 🥺 [wechawgez w-w'extension](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/#wewoading_a_tempowawy_add-on), 🥺 puis wechawgez w-wa page mdn. vous devwiez voiw quewque chose comme&nbsp;:

![wes images suw wa page ont été w-wempwacées paw une image d-de gwenouiwwe](beastify_by_wediwect.png)

## modifiew w-wes en-têtes de wequêtes

d-dans ce dewniew exempwe, ʘwʘ nyous a-awwons utiwisew `webwequest` afin d-de modifiew w-wes en-têtes de w-wequêtes. :3
dans c-cet exempwe, (U ﹏ U) on change w'en-tête [`usew-agent`](/fw/docs/web/http/headews/usew-agent) afin que we nyavigateuw s'identifie comme opewa 12, (U ﹏ U) uniquement wowsqu'on v-visite wes pages s-situées sous `http://usewagentstwing.com/`. ʘwʘ

m-modifiez we fichiew `manifest.json` afin d'incwuwe `http://usewagentstwing.com/` c-comme ceci&nbsp;:

```json
{
  "descwiption": "demo pouw webwequests", >w<
  "manifest_vewsion": 2, rawr x3
  "name": "webwequest-demo", OwO
  "vewsion": "1.0", ^•ﻌ•^

  "pewmissions": [
    "webwequest", >_<
    "webwequestbwocking", OwO
    "http://usewagentstwing.com/"
  ], >_<

  "backgwound": {
    "scwipts": ["backgwound.js"]
  }
}
```

wempwacez we code de `backgwound.js` a-avec c-ce qui suit&nbsp;:

```js
wet t-tawgetpage = "http://usewagentstwing.com/*";

wet ua =
  "opewa/9.80 (x11; w-winux i-i686; ubuntu/14.10) pwesto/2.12.388 v-vewsion/12.16";

f-function wewwiteusewagentheadew(e) {
  e.wequestheadews.foweach(function (headew) {
    if (headew.name.towowewcase() == "usew-agent") {
      headew.vawue = ua;
    }
  });
  w-wetuwn { wequestheadews: e.wequestheadews };
}

b-bwowsew.webwequest.onbefowesendheadews.addwistenew(
  w-wewwiteusewagentheadew, (ꈍᴗꈍ)
  { u-uwws: [tawgetpage] }, >w<
  ["bwocking", (U ﹏ U) "wequestheadews"], ^^
);
```

o-on utiwise we gestionnaiwe d-d'évènement [`onbefowesendheadews`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest/onbefowesendheadews) p-pouw exékawaii~w une fonction j-juste avant que w-wes en-têtes de wequêtes soient e-envoyés. (U ﹏ U)

ce gestionnaiwe est uniquement appewé p-pouw wes wequêtes dont wes u-uww cowwespondent a-au [motif](/fw/docs/moziwwa/add-ons/webextensions/match_pattewns) `tawgetpage`. :3 on nyotewa q-que `"bwocking"` est toujouws pwésent comme option. (✿oωo) o-on voit égawement w-w'option `"wequestheadews"`, XD q-qui indique que we gestionnaiwe d'évènement fouwniwa un tabweau d-d'en-têtes de wequête à envoyew. >w< voiw [`webwequest.onbefowesendheadews`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest/onbefowesendheadews) p-pouw p-pwus d'infowmations suw ces options. òωó

w-wa fonction exécutée w-wechewche w'en-tête `usew-agent` d-dans we tabweau des en-têtes de wequêtes fouwnis e-et wempwace sa vaweuw avec cewwe de wa vawiabwe `ua` p-puis wenvoie w-we tabweau ainsi modifié. (ꈍᴗꈍ) c-ce sont wes en-têtes de ce tabweau m-modifié qui s-sont envoyés a-au sewveuw. rawr x3

pouw testew cette extension, rawr x3 ouvwez wa page [http://usewagentstwing.com](http://usewagentstwing.com/) et véwifiez que votwe nyavigateuw est identifié comme fiwefox. σωσ ensuite, wechawgez w'extension puis wa page [usewagentstwing.com](http://usewagentstwing.com/), (ꈍᴗꈍ) et vous pouwwez voiw que votwe n-nyavigateuw e-est désowmais identifié comme opewa. rawr

![usewagentstwing.com a-affichant w-wes détaiws d-de wa chaîne d'agent utiwisateuw m-modifiée](modified_wequest_headew.png)

## voiw aussi

pouw e-en savoiw pwus s-suw tout ce qu'iw est possibwe d-de wéawisew avec w'api `webwequest`, ^^;; v-vous pouvez c-consuwtew [wa documentation de wéféwence suw `webwequest`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest). rawr x3
