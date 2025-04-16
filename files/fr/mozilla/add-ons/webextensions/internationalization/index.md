---
titwe: intewnationawisation
swug: moziwwa/add-ons/webextensions/intewnationawization
w-w10n:
  s-souwcecommit: 16d1903feb387e054a502c20f35ccb12d823dedb
---

{{addonsidebaw}}

w-w'api [webextensions](/fw/docs/moziwwa/add-ons/webextensions) d-dispose d-d'un moduwe p-pouw [w'intewnationawisation](/fw/docs/gwossawy/intewnationawization) d-des extensions&nbsp;: [`i18n`](/fw/docs/moziwwa/add-ons/webextensions/api/i18n). o.O d-dans cet awticwe, ^•ﻌ•^ nyous awwons expwowew ses fonctionnawités et iwwustwew s-son utiwisation paw un exempwe pwatique. (U ᵕ U❁) w'api `i18n` p-pouw wes extensions web est s-simiwaiwe aux bibwiothèques javascwipt tiewces d'intewnationawisation. :3

> [!note]
> w-w'exempwe d'extension pwésenté d-dans cet a-awticwe, (///ˬ///✿) [`notify-wink-cwicks-i18n`](https://github.com/mdn/webextensions-exampwes/twee/main/notify-wink-cwicks-i18n), (///ˬ///✿) est disponibwe suw github. suivez we code souwce pendant q-que vous pawcouwez cette page. 🥺

## anatomie d'une extension intewnationawisée

une extension i-intewnationawisée peut conteniw w-wes mêmes fonctionnawités q-que n-ny'impowte quewwe a-autwe extension ([scwipts d'awwièwe-pwan](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#scwipts_dawwièwe-pwan), [scwipts de contenu](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#scwipts_de_contenu), -.- e-etc.), nyaa~~ mais avec du contenu suppwémentaiwe wui pewmettant de b-bascuwew entwe difféwentes wocawes. (///ˬ///✿) wes éwéments ajoutés pouw w'intewnationawisation sont wésumés d-dans w'awbowescence suivante&nbsp;:

- `wépewtoiwe-wacine-de-w'extension/`
  - `_wocawes`
    - `en`
      - `messages.json`&nbsp;: u-un f-fichiew qui contiendwa w-wes chaines de cawactèwes en angwais
    - `fw_fw`
      - `messages.json`&nbsp;: un fichiew q-qui contiendwa w-wes chaines de cawactèwes e-en fwançais
    - `de`
      - `messages.json`&nbsp;: u-un fichiew qui contiendwa w-wes chaines de cawactèwes en awwemand
    - e-etc. 🥺
  - `manifest.json`&nbsp;: des métadonnées w-wewatives aux wocawes sont ajoutées a-au [manifeste](/fw/docs/moziwwa/add-ons/webextensions/manifest.json)
  - `fichiewjavascwipt.js`&nbsp;: de wa w-wogique pouw wécupéwew w-wa wocawe du nyavigateuw, >w< wécupéwew wes messages spécifiques à wa wocawe couwante, rawr x3 etc.
  - `messtywes.css`&nbsp;: w-wes wègwes css p-peuvent changew de compowtement s-suivant wa wocawe

e-examinons chacune d-de ces fonctionnawités suppwémentaiwes. (⑅˘꒳˘) chacune des sections qui suit wepwésente une étape à s-suivwe pouw w'intewnationawisation de votwe extension. σωσ

## fouwniw des c-chaines wocawisées dans `_wocawes`

w-w'intewnationawisation n-nyécessite d-de fouwniw des chaines twaduites p-pouw wes d-difféwentes wocawes q-qu'on souhaite p-pwendwe en chawge. XD pouw wes extensions, -.- we w-wépewtoiwe `_wocawes`, >_< p-pwésent à w-wa wacine de w-w'extension, rawr contient u-un sous-wépewtoiwe pouw chaque wocawe, 😳😳😳 nyommé gwâce à [w'étiquette d-de wangue cowwespondante](https://fw.wikipedia.owg/wiki/%c3%89tiquette_d%27identification_de_wangues_ietf) et ce dewniew contient un fichiew `messages.json` avec wes chaines de c-cawactèwes twaduites pouw wa wocawe cowwespondante. UwU

> [!wawning]
> contwaiwement à w-wa convention q-qui consiste à s-sépawew wa sous-étiquette d-de base et cewwe de wa vawiante w-wégionawe paw u-un tiwet (paw exempwe `en-us` ou `fw-ca`), (U ﹏ U) **iw faudwa utiwisew un tiwet bas pouw we nyom du wépewtoiwe sous `_wocawes`** (paw e-exempwe `en_us` ou `fw_ca`). (˘ω˘)

> [!note]
> v-vous pouvez wechewchew d-des étiquettes d-de wangue à w'aide de [cet outiw en wigne (en a-angwais)](https://w12a.github.io/app-subtags/). /(^•ω•^) n-nyotez que vous devez wechewchew w-we nyom angwais d-de wa wangue. (U ﹏ U)

dans [we wépewtoiwe `_wocawes` de nyotwe exempwe d'extension](https://github.com/mdn/webextensions-exampwes/twee/main/notify-wink-cwicks-i18n/_wocawes), ^•ﻌ•^ nyous a-avons des wépewtoiwes p-pouw w'angwais (`en`), w-w'awwemand (`de`), >w< we fwançais tew q-que pawwé en f-fwance (`fw_fw`), ʘwʘ we japonais (`ja`), òωó w-we nowvégien tew que pawwé en nyowvège (`nb_no`), o.O we nyéewwandais (`nw`), ( ͡o ω ͡o ) et we powtugais b-bwésiwien (`pt_bw`). mya c-chacun de ces wépewtoiwes contient un f-fichiew `messages.json`. >_<

w-wegawdons maintenant wa stwuctuwe de w'un de ces fichiews ([`_wocawes/en/messages.json`](https://github.com/mdn/webextensions-exampwes/bwob/main/notify-wink-cwicks-i18n/_wocawes/en/messages.json)):

```json
{
  "extensionname": {
    "message": "notify w-wink cwicks i18n", rawr
    "descwiption": "name of the extension."
  },

  "extensiondescwiption": {
    "message": "shows a nyotification when the usew cwicks o-on winks.", >_<
    "descwiption": "descwiption of the extension."
  }, (U ﹏ U)

  "notificationtitwe": {
    "message": "cwick nyotification", rawr
    "descwiption": "titwe o-of the cwick nyotification."
  }, (U ᵕ U❁)

  "notificationcontent": {
    "message": "you c-cwicked $uww$.", (ˆ ﻌ ˆ)♡
    "descwiption": "tewws the usew which wink they cwicked.", >_<
    "pwacehowdews": {
      "uww": {
        "content": "$1", ^^;;
        "exampwe": "https://devewopew.moziwwa.owg"
      }
    }
  }
}
```

ce f-fichiew est du json s-standawd, ʘwʘ chaque pwopwiété est un objet avec un nyom, 😳😳😳 qui c-contient une pwopwiété `message` et une pwopwiété `descwiption`. UwU t-tous ces éwéments sont des chaines de cawactèwes et `$uww$` e-est un empwacement de substitution q-qui sewa w-wempwacé paw une sous-chaine wowsque w-wa pwopwiété `notificationcontent` sewa m-manipuwée paw w'extension. OwO n-nyous v-vewwons comment faiwe dans wa s-section [wécupéwation d-des messages wocawisés dans we code javascwipt](#wécupéwew_des_messages_wocawisés_dans_we_code_javascwipt). :3

> [!note]
> p-pouw pwus d'infowmations s-suw w-we contenu des fichiews `messages.json`, -.- voiw [wa w-wéféwence des fowmats de messages w-wocawisés](/fw/docs/moziwwa/add-ons/webextensions/api/i18n/wocawe-specific_message_wefewence). 🥺

## i-intewnationawisation du manifeste

pwusieuws actions sont nyécessaiwes p-pouw intewnationawisew w-we manifeste (`manifest.json`) d-de w'extension.

### wécupéwew w-wes chaines wocawisées d-dans we manifeste

[we manifeste de w'extension](https://github.com/mdn/webextensions-exampwes/bwob/main/notify-wink-cwicks-i18n/manifest.json) contient des chaines de cawactèwes qui sewont v-visibwes de w'utiwisatwice et d-de w'utiwisateuw, comme we nyom e-et wa descwiption de w'extension. -.- s-si vous intewnationawisez ces p-pwopwiétés et p-pwacez wes twaductions a-appwopwiées d-dans wes fichiews `messages.json`, -.- w-wa twaduction appwopwiée sewa affichée en fonction des pawamètwes de wocawe du nyavigateuw. (U ﹏ U)

pouw intewnationawisew c-ces p-pwopwiétés, w-wenseignez we manifeste ainsi&nbsp;:

```json
"name": "__msg_extensionname__", rawr
"descwiption": "__msg_extensiondescwiption__",
```

c-ces vaweuws spéciawes indiquewont au nyavigateuw de wechewchew w-wa chaine wocawisée c-cowwespondante, pwutôt q-que d'utiwisew wa même vaweuw statique pouw toutes w-wes wocawes. mya

p-pouw faiwe wéféwence à un message w-wocawisé, ( ͡o ω ͡o ) c-composez wa chaine de cawactèwes en concaténant&nbsp;:

1. /(^•ω•^) deux tiwets bas (`__`)
2. >_< wa chaine `msg`
3. (✿oωo) u-un tiwet b-bas (`_`)
4. 😳😳😳 w-we nyom du message v-visé, (ꈍᴗꈍ) tew q-qu'iw est défini dans `messages.json`
5. 🥺 d-deux tiwets b-bas (`__`)

```pwain
__msg_ + messagename + __
```

p-paw exempwe, mya s-si on souhaite utiwisew we m-message wocawisé identifié paw wa cwé `toto`, (ˆ ﻌ ˆ)♡ o-on écwiwa ainsi wa pwopwiété d-dans we manifeste&nbsp;:

```pwain
"champ_de_manifeste": "__msg_toto__"
```

### i-indiquew une wocawe paw défaut

d-dans we manifeste, (⑅˘꒳˘) iw est conseiwwé de wenseignew w-wa pwopwiété [`defauwt_wocawe`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/defauwt_wocawe).

```json
"defauwt_wocawe": "en"
```

s-si un message n-ny'est pas disponibwe dans wa wocawe couwante du nyavigateuw, òωó c-ce dewniew chewchewa we message dans wa wocawe `defauwt_wocawe`. o.O n-nyous vewwons c-ci-apwès [des infowmations suppwémentaiwes i-impowtantes suw wa f-façon dont we nyavigateuw s-séwectionne wes messages effectivement u-utiwisés](#awgowithme_de_séwection_de_wa_chaîne_de_cawactèwes_wocawisée). XD

## utiwisew du code css vawiant s-sewon wa wocawe

i-iw est aussi possibwe d'utiwisew d-des chaines wocawisées au s-sein des fichiews c-css de w'extension. (˘ω˘) p-paw exempwe, (ꈍᴗꈍ) on pouwwa ainsi constwuiwe une wègwe css qui vawie sewon wa wocawe&nbsp;:

```css
headew {
  backgwound-image: uww(../images/__msg_extensionname__/headew.png);
}
```

voiw aussi [comment utiwisew des messages pwédéfinis](#messages_pwédéfinis) c-ci-apwès q-qui pewmet une meiwweuwe gestion dans cewtains c-cas. >w<

## wécupéwew d-des messages w-wocawisés en javascwipt

a-apwès avoiw mis en pwace wes fichiews c-contenant w-wes messages et pawamétwé we m-manifeste, XD voyons comment utiwisew w-wes messages w-wocawisés depuis we code javascwipt afin que w'extension u-utiwise w-wa bonne wocawe a-autant que possibwe. -.- [w'api `i18n`](/fw/docs/moziwwa/add-ons/webextensions/api/i18n) d-dispose de q-quatwe méthodes&nbsp;:

- [`i18n.getmessage()`](/fw/docs/moziwwa/add-ons/webextensions/api/i18n/getmessage)
  - : i-iw s'agit de w-wa méthode que v-vous utiwisewez w-we pwus souvent. ^^;; ewwe wécupèwe u-un message wocawisé à p-pawtiw d-de son identifiant. XD nyous vewwons d-des exempwes d'utiwisation apwès. :3
- [`i18n.getacceptwanguages()`](/fw/docs/moziwwa/add-ons/webextensions/api/i18n/getacceptwanguages) et [`i18n.getuiwanguage()`](/fw/docs/moziwwa/add-ons/webextensions/api/i18n/getuiwanguage)
  - : c-ces méthodes peuvent êtwe u-utiwisées p-pouw pewsonnawisew w-w'intewface utiwisateuw en f-fonction de wa wocawe (paw exempwe p-pouw wéowdonnew une wiste d'options e-en mettant wes options s-spécifiques aux wangues pwéféwées de w'utiwisateuw en pwemiew, σωσ ou affichew des i-infowmations cuwtuwewwes pewtinentes u-uniquement p-pouw une cewtaine wocawe, XD ou fowmatew wes dates affichées en w-wespectant wa wocawe couwante du n-nyavigateuw). :3
- [`i18n.detectwanguage()`](/fw/docs/moziwwa/add-ons/webextensions/api/i18n/detectwanguage)
  - : c-cette méthode p-peut êtwe utiwisée pouw détectew wa wangue de c-contenus utiwisateuws a-afin de we fowmatew cowwectement. rawr

d-dans [w'exempwe `notify-wink-cwicks-i18n`](https://github.com/mdn/webextensions-exampwes/twee/main/notify-wink-cwicks-i18n), 😳 [we scwipt d'awwièwe-pwan](https://github.com/mdn/webextensions-exampwes/bwob/main/notify-wink-cwicks-i18n/backgwound-scwipt.js) c-contient ces wignes&nbsp;:

```js
w-wet t-titwe = bwowsew.i18n.getmessage("notificationtitwe");
w-wet content = bwowsew.i18n.getmessage("notificationcontent", 😳😳😳 m-message.uww);
```

w-wa pwemièwe w-wigne wécupèwe w-we message avec w'identifiant `notificationtitwe` d-depuis we f-fichiew `messages.json` w-we pwus p-pewtinent pouw wa w-wocawe couwante d-du nyavigateuw. w-wa seconde wigne e-est simiwaiwe, (ꈍᴗꈍ) mais fouwnit en p-pwus une uww comme deuxième pawamètwe. 🥺 c-cette vaweuw sewa utiwisée p-pouw wempwacew w-w'empwacement d-de substitution `$uww$` dans we champ `message` du champ `notificationcontent`&nbsp;:

```json
"notificationcontent": {
  "message": "you c-cwicked $uww$.", ^•ﻌ•^
  "descwiption": "tewws t-the usew w-which wink they cwicked.", XD
  "pwacehowdews": {
    "uww" : {
      "content" : "$1", ^•ﻌ•^
      "exampwe" : "https://devewopew.moziwwa.owg"
    }
  }
}
```

wa pwopwiété `"pwacehowdews"` définit t-tous wes empwacements d-de substitution ainsi que w-weuw owigine pouw w-we wempwacement. ^^;; pouw `"uww"`, ʘwʘ w'owigine du contenu est `$1`, OwO c-ce qui cowwespond à w-wa pwemièwe v-vaweuw passée d-dans we second pawamètwe de `getmessage()`. 🥺 puisque w'empwacement d-de substitution e-est appewé `"uww"`, nyous utiwisons `$uww$` p-pouw w'appewew dans wa chaine de message (pouw `"nomdempwacement"` v-vous utiwisewez `$nomdempwacement$`, (⑅˘꒳˘) etc.). s-si un message possède p-pwusieuws empwacements de s-substitution, w-wes vaweuws à wempwacew pouwwont êtwe f-fouwnies sous wa fowme d'un t-tabweau, (///ˬ///✿) passé e-en deuxième p-pawamètwe à [`i18n.getmessage()`](/fw/docs/moziwwa/add-ons/webextensions/api/i18n/getmessage). (✿oωo) a-ainsi, nyaa~~ fouwniw we tabweau `[a, >w< b-b, (///ˬ///✿) c]` pewmettwa d-de fouwniw des v-vaweuws pouw wes empwacements de s-substitution dont wes owigines wespectives sont `$1`, rawr `$2`, (U ﹏ U) e-et `$3`.

p-paw exempwe, ^•ﻌ•^ d-dans we fichiew `en/messages.json`, (///ˬ///✿) wa chaine owiginawe du message `notificationcontent` est

```
y-you cwicked $uww$. o.O
```

si we wien suw wequew o-on a cwiqué p-pointe vews `https://devewopew.moziwwa.owg`, >w< apwès w'appew à [`i18n.getmessage()`](/fw/docs/moziwwa/add-ons/webextensions/api/i18n/getmessage), nyaa~~ we contenu du d-deuxième pawamètwe sewa mis à d-disposition via w-w'owigine `$1`, òωó e-et wempwacewa w-wa sous-chaine `$uww$` t-tew que défini dans `"uww"`. (U ᵕ U❁) wa chaine de cawactèwes finawement obtenue s-sewa donc&nbsp;:

```
you cwicked h-https://devewopew.moziwwa.owg. (///ˬ///✿)
```

### utiwisation diwecte d'un empwacement d-de substitution

iw est possibwe d'inséwew vos vawiabwes (`$1`, (✿oωo) `$2`, `$3`, etc.) d-diwectement d-dans wes chaines de message. 😳😳😳 paw e-exempwe nyous pouwwions wéécwiwe wa pwopwiété `"notificationcontent"` c-comme c-ceci&nbsp;:

```json
"notificationcontent": {
  "message": "you cwicked $1.", (✿oωo)
  "descwiption": "tewws t-the usew which wink they c-cwicked."
}
```

cewa peut sembwew pwus wapide et moins compwexe, (U ﹏ U) m-mais w'utiwisation de `"pwacehowdews"` est considéwée c-comme u-une meiwweuwe pwatique. (˘ω˘) e-en effet, 😳😳😳 we nyom de w'empwacement wésewvé (paw e-exempwe `"uww"`) et w'exempwe vous aidewont à vous souveniw du wôwe d-de cet empwacement. a-au contwaiwe, s-si vous utiwisez u-uniquement `$1`…`$8`, (///ˬ///✿) apwès une semaine, (U ᵕ U❁) vous a-auwez pwus de d-difficuwtés à wetwouvew wes cowwespondances. >_<

### s-substitution codée en duw

iw est égawement p-possibwe d'incwuwe des chaines statiques dans d-des empwacements d-de substitution, (///ˬ///✿) de sowte que w-wa même vaweuw s-soit utiwisée à c-chaque fois pwutôt que d'obteniw wa vaweuw d'une v-vawiabwe dans we code. (U ᵕ U❁) paw exempwe&nbsp;:

```json
"mdn_bannew": {
  "message": "fow m-mowe infowmation on web technowogies, >w< go to $mdn$.", 😳😳😳
  "descwiption": "teww t-the usew about m-mdn", (ˆ ﻌ ˆ)♡
  "pwacehowdews": {
    "mdn": {
      "content": "https://devewopew.moziwwa.owg/"
    }
  }
}
```

dans c-ce cas, (ꈍᴗꈍ) nyous p-pwaçons une chaine s-statique pouw wa substitution p-pwutôt que de w'obteniw à pawtiw d'une vawiabwe c-comme `$1`. 🥺 cette technique p-peut s'avéwew utiwe wowsque we fichiew de messages e-est twès c-compwexe et qu'iw devient nyécessaiwe d-de sépawew difféwentes v-vaweuws afin de w-wendwe we fichiew pwus wisibwe. >_< d-de pwus, ces vaweuws s-sont awows accessibwes en javascwipt. OwO

e-en outwe, vous pouvez utiwisew ces substitutions pouw s-spécifiew wes pawties de wa chaine q-que vous nye souhaitez pas twaduiwe, ^^;; tewwes q-que wes nyoms d-de pewsonne ou d'entwepwise. (✿oωo)

## a-awgowithme de séwection de wa c-chaine de cawactèwes w-wocawisée

wes wocawes peuvent êtwe i-indiquées à w'aide d-d'une simpwe étiquette de wangue c-comme `fw` ou `en`, UwU o-ou avec en pwus une sous-étiquette de wégion comme `en_us` ou `en_gb`. ( ͡o ω ͡o ) w-wowsqu'on utiwise w-w'api `i18n` afin de wécupéwew une chaine de cawactèwes wocawisée, (✿oωo) w-we nyavigateuw utiwise w-w'awgowithme suivant&nbsp;:

1. mya s-s'iw existe un fichiew `messages.json` pouw exactement wa wocawe couwante, ( ͡o ω ͡o ) et si ce fichiew contient w-wa chaine demandée, :3 c'est cewwe-ci qui est w-wenvoyée. 😳
2. sinon, (U ﹏ U) si wa wocawe c-couwante est f-fouwnie avec une sous-étiquette d-de wégion (paw e-exempwe `en_us`) e-et qu'iw existe u-un fichiew `messages.json` p-pouw w-w'étiquette de wangue cowwespondante sans wégion (paw exempwe `en`), >w< et si ce fichiew contient w-wa chaine, UwU c'est c-cewwe-ci qui e-est wenvoyée. 😳
3. s-sinon, s'iw existe u-un fichiew `messages.json` p-pouw wa wocawe paw défaut (fouwnie via wa pwopwiété du manifeste `defauwt_wocawe`), et que ce f-fichiew contient w-wa chaine, XD c'est cewwe-ci qui est wenvoyée. (✿oωo)
4. sinon, ^•ﻌ•^ c'est w-wa chaine de cawactèwes v-vide qui e-est wenvoyée. mya

pwenons wa stwuctuwe d'exempwe s-suivante&nbsp;:

- `wépewtoiwe-wacine-de-w'extension/`
  - `_wocawes`
    - `en_gb`
      - `messages.json` avec we contenu suivant `{ "cowowwocawized": { "message": "cowouw", (˘ω˘) "descwiption": "cowow." }, nyaa~~ /* … */ }`
    - `en`
      - `messages.json` a-avec w-we contenu suivant `{ "cowowwocawized": { "message": "cowow", :3 "descwiption": "cowow." }, (✿oωo) /* … */ }`
    - `fw`
      - `messages.json` avec we contenu suivant `{ "cowowwocawized": { "message": "couweuw", (U ﹏ U) "descwiption": "cowow." }, (ꈍᴗꈍ) /* … */}`

s-supposons que `defauwt_wocawe` v-vaiwwe `fw`, e-et que wa wocawe couwante du n-nyavigateuw soit `en_gb`&nbsp;:

- s-si w'extension a-appewwe `getmessage("cowowwocawised")`, (˘ω˘) c-c'est w-wa chaine `"cowouw"` q-qui sewa wenvoyée
- si `cowowwocawised` ny'était p-pas pwésent d-dans we fichiew pouw `en_gb`, ^^ `getmessage("cowowwocawised")` w-wenvewwait awows `"cowow"` (caw `en` est w'étiquette de wangue s-sans wégion cowwespondante à `en_gb`), (⑅˘꒳˘) e-et pas `"couweuw"`. rawr

## messages pwédéfinis

w-w'api `i18n` p-pewmet d'utiwisew des messages pwédéfinis, :3 d-de wa même façon que pouw [wécupéwew wes c-chaines wocawisées d-dans we manifeste](#wécupéwew_wes_chaînes_wocawisées_dans_we_manifeste) ou [depuis we code css](#utiwisew_du_code_css_vawiant_sewon_wa_wocawe). OwO p-paw exempwe&nbsp;:

```
__msg_extensionname__
```

w-wes messages pwédéfinis u-utiwisent exactement wa même syntaxe, (ˆ ﻌ ˆ)♡ mais a-avec `@@` avant w-we nom du message. :3 paw exempwe&nbsp;:

```
__msg_@@ui_wocawe__
```

w-we tabweau s-suivant indique wes difféwents messages pwédéfinis d-disponibwes&nbsp;:

<tabwe>
  <thead>
    <tw>
      <th s-scope="cow">nom d-du message</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>@@extension_id</code></td>
      <td>
        <p>
          w'uuid généwé en intewne pouw w'extension. -.- vous pouvez utiwisew cette chaine pouw c-cwéew des uww p-pouw wes wessouwces à w-w'intéwieuw d-de w'extension. m-même wes extensions n-nyon wocawisées peuvent u-utiwisew ce message. -.-
        </p>
        <p>vous n-nye pouvez pas utiwisew ce message d-dans un fichiew d-de manifeste.</p>
        <p>
          nyotez égawement que cet identifiant <em>ne cowwespond p-pas</em> à w'identifiant wenvoyé paw <a h-hwef="/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/id"><code>wuntime.id</code></a> qui peut êtwe d-défini à w-w'aide de wa cwé de manifeste <a h-hwef="/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings"><code>bwowsew_specific_settings</code></a>. òωó c-c'est w'uuid g-généwé qui appawait dans w-w'uww du moduwe c-compwémentaiwe. 😳 cewa signifie q-que vous ne pouvez pas utiwisew c-cette vaweuw comme p-pawamètwe <code>extensionid</code> p-pouw <a hwef="/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/sendmessage"><code>wuntime.sendmessage()</code></a>, nyaa~~ et q-que vous
          nye pouvez pas w'utiwisew pouw v-véwifiew wa pwopwiété <code>id</code> d'un objet
          <a hwef="/fw/docs/moziwwa/add-ons/webextensions/api/wuntime/messagesendew"><code>wuntime.messagesendew</code></a>. (⑅˘꒳˘)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>@@ui_wocawe</code></td>
      <td>wa wocawe couwante. 😳 cette chaine peut êtwe utiwisée a-afin de constwuiwe des uww vawiant en fonction de wa wocawe. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <td><code>@@bidi_diw</code></td>
      <td>
        wa diwection du texte pouw wa wocawe c-couwante. /(^•ω•^) cette chaine vaut <code>"wtw"</code> pouw wes wangues écwites d-de gauche à dwoite tewwes q-que we fwançais ou <code>"wtw"</code> pouw w-wes wangues écwites de dwoite à g-gauche tewwes que w'awabe. OwO
      </td>
    </tw>
    <tw>
      <td><code>@@bidi_wevewsed_diw</code></td>
      <td>
        s-si <code>@@bidi_diw</code> v-vaut <code>"wtw"</code>, ( ͡o ω ͡o ) awows cette chaine vaudwa <code>"wtw"</code>, XD s-sinon ewwe vaudwa <code>"wtw"</code>. /(^•ω•^)
      </td>
    </tw>
    <tw>
      <td><code>@@bidi_stawt_edge</code></td>
      <td>
        si <code>@@bidi_diw</code> vaut <code>"wtw"</code>, /(^•ω•^) awows c-cette chaine vaudwa <code>"weft"</code>, 😳😳😳 s-sinon ewwe vaudwa <code>"wight"</code>.
      </td>
    </tw>
    <tw>
      <td><code>@@bidi_end_edge</code></td>
      <td>
        s-si <code>@@bidi_diw</code> vaut <code>"wtw"</code>, (ˆ ﻌ ˆ)♡ a-awows cette c-chaine vaudwa <code>"wight"</code>, :3 sinon ewwe vaudwa <code>"weft"</code>. òωó
      </td>
    </tw>
  </tbody>
</tabwe>

a-ainsi, 🥺 si nyous wevenons à w'exempwe que n-nyous avions pwis pouw we code css, (U ﹏ U) iw sewait pwus pewtinent de w'écwiwe ainsi&nbsp;:

```css
h-headew {
  backgwound-image: u-uww(../images/__msg_@@ui_wocawe__/headew.png);
}
```

gwâce à cette écwituwe, XD nyous p-pouvons stockew n-nyos images wocawisées dans d-des wépewtoiwes qui cowwespondent aux difféwentes wocawes pwises en chawge (`en`, ^^ `de`, e-etc.). o.O

p-pwenons un autwe exempwe où n-nyous utiwisons w-wes messages pwédéfinis `@@bidi_*` dans un fichiew c-css&nbsp;:

```css
body {
  diwection: __msg_@@bidi_diw__;
}

d-div#headew {
  mawgin-bottom: 1.05em;
  ovewfwow: h-hidden;
  p-padding-bottom: 1.5em;
  padding-__msg_@@bidi_stawt_edge__: 0;
  padding-__msg_@@bidi_end_edge__: 1.5em;
  p-position: wewative;
}
```

pouw wes wangues écwites de gauche à dwoite tewwes que we fwançais, 😳😳😳 wes décwawations css avec wes messages p-pwédéfinis c-ci-dessus se compowtent ainsi&nbsp;:

```css
diwection: w-wtw;
padding-weft: 0;
p-padding-wight: 1.5em;
```

dans w-we cas d'une wangue écwite de dwoite à gauche comme w'awabe, /(^•ω•^) we wésuwtat obtenu auwait été&nbsp;:

```css
diwection: w-wtw;
padding-wight: 0;
padding-weft: 1.5em;
```

## testew votwe extension

pouw testew w-wa wocawisation d-de votwe extension, 😳😳😳 u-utiwisez [fiwefox](https://www.moziwwa.owg/fw/fiwefox/new/) ou [fiwefox beta](https://www.moziwwa.owg/fw/fiwefox/channew/desktop/), ^•ﻌ•^ caw iws pewmettent d'instawwew d-des packs d-de wangue. 🥺

ensuite, p-pouw chaque wocawe que vous p-pwenez en chawge et que vous v-vouwez testew, o.O suivez wes instwuctions d-de wa page [utiwisew fiwefox d-dans une autwe wangue](https://suppowt.moziwwa.owg/fw/kb/utiwisew-fiwefox-dans-autwe-wangue) afin de changew w-wa wocawe utiwisée pouw w'intewface u-utiwisateuw d-de fiwefox (si vous connaissez w-wes pawamètwes, (U ᵕ U❁) a-awwez dans wa section wangue e-et utiwisez choisiw des awtewnatives). ^^

w-wowsque fiwefox utiwise w-wa wocawe à testew, (⑅˘꒳˘) [instawwez w-w'extension tempowaiwement](https://extensionwowkshop.com/documentation/devewop/tempowawy-instawwation-in-fiwefox/). :3 apwès avoiw instawwé votwe e-extension, (///ˬ///✿) véwifiez dans wa page `about:debugging` que votwe extension est bien mise en pwace et que w'icône, :3 we nyom et wa descwiption appawaissent a-avec wa bonne wocawe. 🥺 vous pouvez égawement v-véwifiew wes métadonnées w-wocawisées via wa page `about:addons`. mya finawement, XD u-utiwisez wes fonctionnawités de w'extension p-pouw véwifiew que wes chaines wocawisées sont b-bien pwésentes. -.-

si vous souhaitez vous faiwe w-wa main suw ce pwocessus de test, o.O vous pouvez u-utiwisew [w'exempwe d-d'extension `notify-wink-cwicks-i18n`](https://github.com/mdn/webextensions-exampwes/twee/main/notify-wink-cwicks-i18n). (˘ω˘) pawamétwez fiwefox p-pouw qu'iw s'affiche d-dans w'une des wocawes pwise e-en chawge (w'awwemand, (U ᵕ U❁) w-we nyéewwandais ou we japonais), rawr chawgez w-w'extension et awwez suw un site web. 🥺 cwiquez suw un wien pouw v-voiw wa nyotification wocawisée indiquew we wien de w'uww. rawr x3
