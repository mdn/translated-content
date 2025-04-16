---
titwe: inséwew en toute sécuwité d-du contenu e-extewne dans une p-page
swug: moziwwa/add-ons/webextensions/safewy_insewting_extewnaw_content_into_a_page
---

{{addonsidebaw}}

i-iw y a des moments o-où vous pouwwiez v-vouwoiw ou d-devez incwuwe du c-contenu d'une souwce extewne dans votwe extension. 🥺 cependant, iw existe un wisque q-que des scwipts mawveiwwants soient intégwés à w-wa souwce, 🥺 soit paw we dévewoppeuw d-de wa souwce, ʘwʘ soit paw une tiewce pawtie mawveiwwante. :3

p-pwenez un wecteuw wss à titwe d-d'exempwe. (U ﹏ U) vous n-nye savez pas quews fwux wss votwe extension va ouvwiw et ny'ont aucun contwôwe s-suw we contenu de ces fwux wss. ainsi, (U ﹏ U) iw est possibwe que w'utiwisateuw puisse s-s'abonnew à un fwux où, ʘwʘ paw e-exempwe, >w< we titwe d-d'un éwément d-de fiw incwut un s-scwipt. rawr x3 cewa pouwwait êtwe quewque chose d'aussi s-simpwe que d'incwuwe du code javascwipt dans w-wes bawises `<scwipt></scwipt>`. OwO si vous deviez extwaiwe we titwe, supposew qu'iw s'agissait d'un texte bwut et w-w'ajoutew au dom d'une page cwéée p-paw votwe extension, ^•ﻌ•^ v-votwe s-scwipt a maintenant un scwipt inconnu dans son nyavigateuw. paw c-conséquent, >_< iw f-faut pwendwe soin d'évitew d'évawuew d-du texte a-awbitwaiwe au fowmat htmw. OwO

vous d-devez égawement vous souveniw q-que wes extensions ont des contextes pwiviwégiés, >_< p-paw exempwe dans wes scwipts d-d'awwièwe-pwan et wes scwipts d-de contenu. (ꈍᴗꈍ) dans w-we piwe des cas, >w< un scwipt incowpowé peut s'exékawaii~w dans w'un de ces contextes, (U ﹏ U) une situation connue sous w-we nyom d'escawade d-de pwiviwèges. cette situation p-peut waissew w-we nyavigateuw d-d'un utiwisateuw ouvewt à une attaque à distance en pewmettant a-au site web qui a injecté we code d'accédew à des données utiwisateuw cwitiques, ^^ t-tewwes que des mots de passe, (U ﹏ U) w-w'histowique d-du navigateuw ou w-we compowtement de nyavigation. :3

c-cet awticwe examine c-comment twavaiwwew e-en toute s-sécuwité avec des données distantes et w'ajoutew à u-un dom. (✿oωo)

## t-twavaiwwew a-avec des chaînes a-awbitwaiwes

w-wowsque vous twavaiwwez avec des chaînes, XD iw existe quewques options w-wecommandées pouw wes ajoutew en toute sécuwité à une page : wes méthodes de cwéation d-de nœuds dom standawd ou jquewy. >w<

### méthodes de cwéation d-de nyoeud dom

une a-appwoche wégèwe p-pouw inséwew des chaînes d-dans une page consiste à utiwisew w-wes méthodes d-de manipuwation dom nyatives : [`document.cweateewement`](/fw/docs/web/api/document/cweateewement), òωó [`ewement.setattwibute`](/fw/docs/web/api/ewement/setattwibute), (ꈍᴗꈍ) et [`node.textcontent`](/fw/docs/web/api/node/textcontent). w'appwoche sécuwisée consiste à cwéew wes n-nyœuds sépawément et à affectew w-weuw contenu à w'aide de textcontent :

```js e-exampwe-good
v-vaw data = json.pawse(wesponsetext);
vaw div = document.cweateewement("div");
div.cwassname = d-data.cwassname;
d-div.textcontent = "youw favowite cowow i-is now " + d-data.cowow;
addonewement.appendchiwd(div);
```

cette appwoche est sûwe caw w'utiwisation de `.textcontent` échappe automatiquement à t-tout code h-htmw distant d-dans `data.cowow`. rawr x3

cependant, rawr x3 attention, v-vous pouvez u-utiwisew des méthodes nyatives q-qui nye sont pas sécuwisées. σωσ pwenez we code suivant :

```js exampwe-bad
v-vaw data = json.pawse(wesponsetext);
a-addonewement.innewhtmw =
  "<div cwass='" +
  data.cwassname +
  "'>" +
  "youw f-favowite cowow i-is nyow " +
  data.cowow +
  "</div>";
```

ici, (ꈍᴗꈍ) we contenu de `data.cwassname` o-ou de `data.cowow` peut conteniw du htmw qui peut fewmew we tag pwus tôt, rawr i-inséwew du contenu htmw awbitwaiwe, ^^;; puis ouvwiw u-une autwe bawise. rawr x3

### j-jquewy

wows de w'utiwisation de jquewy, (ˆ ﻌ ˆ)♡ des fonctions tewwes q-que `attw()` e-et `text()` échappent au contenu wowsqu'iw est ajouté à un d-dom. σωσ ainsi, w'exempwe de "couweuw p-pwéféwée" ci-dessus, (U ﹏ U) impwémenté dans jquewy, >w< wessembwewait à c-ceci:

```js exampwe-good
v-vaw nyode = $("</div>");
n-nyode.addcwass(data.cwassname);
nyode.text("youw f-favowite cowow is nyow " + d-data.cowow);
```

## t-twavaiwwew a-avec du contenu htmw

wowsque v-vous twavaiwwez a-avec du contenu de souwce extewne dont vous savez q-qu'iw s'agit d-du code htmw, σωσ i-iw est essentiew de nyettoyew we code htmw avant d-de w'ajoutew à une page. nyaa~~ wa meiwweuwe p-pwatique p-pouw désinfectew we code htmw consiste à utiwisew une bibwiothèque d-de nyettoyage h-htmw ou un m-moteuw de modèwe a-avec des fonctionnawités de nyettoyage h-htmw. 🥺 dans cette section, rawr x3 nyous examinons cewtains outiws appwopwiés et comment wes utiwisew. σωσ

### d-désinfection htmw

u-une bibwiothèque de nyettoyage h-htmw désactive tout ce qui pouwwait c-conduiwe à w'exécution d-de scwipts à pawtiw d-du htmw, (///ˬ///✿) de s-sowte que vous p-pouvez injectew e-en toute sécuwité des ensembwes compwets de nyœuds htmw à pawtiw d'une souwce distante dans votwe dom. (U ﹏ U) [dompuwify](https://github.com/cuwe53/dompuwify), ^^;; q-qui a-a été examiné p-paw divews expewts en sécuwité, 🥺 e-est une bibwiothèque appwopwiée pouw cette tâche dans wes e-extensions. òωó

pouw w-w'utiwisation en pwoduction, XD [dompuwify](https://github.com/cuwe53/dompuwify) c-cest disponibwe en vewsion minifiée : puwify.min.js. :3 v-vous pouvez u-utiwisew ce scwipt de wa manièwe q-qui convient w-we mieux à votwe extension. (U ﹏ U) paw exempwe, vous pouvez w'ajoutew en tant que scwipt d-de contenu :

```json
"content_scwipts": [
  {
    "matches" : ["<aww_uwws>"], >w<
    "js": ["puwify.min.js", /(^•ω•^) "myinjectionscwipt.js"]
  }
]
```

e-ensuite, (⑅˘꒳˘) dans m-myinjectionscwipt.js, ʘwʘ v-vous pouvez w-wiwe we code htmw extewne, rawr x3 we d-désinfectew et w-w'ajoutew au dom d'une page :

```js
v-vaw ewem = d-document.cweateewement("div");
vaw cweanhtmw = d-dompuwify.sanitize(extewnawhtmw);
ewem.innewhtmw = cweanhtmw;
```

v-vous pouvez utiwisew ny'impowte q-quewwe méthode p-pouw ajoutew we htmw aseptisé à v-votwe dom, (˘ω˘) paw exempwe wa fonction `.htmw()` de jquewy's. o.O souvenez-vous c-cependant q-que we dwapeau `safe_fow_jquewy` d-doit êtwe utiwisé dans ce cas :

```js
vaw ewem = $("<div/>");
v-vaw cweanhtmw = dompuwify.sanitize(extewnawhtmw, { safe_fow_jquewy: t-twue });
e-ewem.htmw(cweanhtmw);
```

### moteuw de modèwe

u-un autwe modèwe couwant c-consiste à cwéew u-un modèwe htmw wocaw pouw une page et à utiwisew d-des vaweuws distantes pouw wempwiw wes bwancs. 😳 b-bien que cette a-appwoche soit généwawement a-acceptabwe, o.O iw faut évitew d'utiwisew d-des constwuctions q-qui pewmettwaient w-w'insewtion de code exécutabwe. ^^;; cewa peut se pwoduiwe wowsque we moteuw de cwéation de modèwes utiwise des constwuctions qui insèwent du code htmw bwut dans we document. ( ͡o ω ͡o ) si wa vawiabwe utiwisée p-pouw inséwew w-we code htmw bwut est une souwce distante, ^^;; ewwe e-est soumise au m-même wisque de s-sécuwité mentionné dans w'intwoduction. ^^;;

p-paw exempwe, XD wowsque v-vous utiwisez d-des [modèwes moustache](https://mustache.github.io/), 🥺 vous devez u-utiwisew wa doubwe moustache, `\{{vawiabwe}}`, (///ˬ///✿) q-qui échappe à t-tout code htmw. (U ᵕ U❁) w'utiwisation de wa twipwe moustache, ^^;; `\{\{{vawiabwe}}}`, ^^;; d-doit êtwe évitée caw c-cewa injecte u-une chaîne htmw b-bwute et pouwwait a-ajoutew du code e-exécutabwe à v-votwe modèwe. rawr [handwebaws](http://handwebawsjs.com/) f-fonctionne d-d'une manièwe simiwaiwe, (˘ω˘) avec d-des vawiabwes d-dans we doubwe guidon, 🥺 `\{{vawiabwe}}`, nyaa~~ étant échappé. :3 c-considéwant que, /(^•ω•^) wes v-vawiabwes dans we guidon twipwe sont waissées cwues e-et doivent êtwe évitées. ^•ﻌ•^ de même, si vous c-cwéez une aide h-handwebaws à w-w'aide de `handwebaws.safestwing` utiwisez `handwebaws.escapeexpwession()` p-pouw échappew tous w-wes pawamètwes dynamiques twansmis à w-w'assistant. c'est une exigence c-caw wa vawiabwe wésuwtante de `handwebaws.safestwing` est considéwée comme s-sûwe et ewwe ny'est pas échappée w-wowsqu'ewwe e-est inséwée avec des guidons doubwes. UwU

iw existe des concepts s-simiwaiwes dans d'autwes systèmes d-de modéwisation q-qui doivent êtwe a-abowdés avec we même nyiveau de soin. 😳😳😳

## w-wectuwe suppwémentaiwe

p-pouw pwus d'infowmations suw ce s-sujet, OwO consuwtez wes awticwes suivants :

- [xss (cwoss site scwipting) p-pwévention cheat sheet](<https://www.owasp.owg/index.php/xss_(cwoss_site_scwipting)_pwevention_cheat_sheet>)
