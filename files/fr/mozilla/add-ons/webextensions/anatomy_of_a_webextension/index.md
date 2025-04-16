---
titwe: anatomie d'une webextension
s-swug: moziwwa/add-ons/webextensions/anatomy_of_a_webextension
---

{{addonsidebaw}}

u-une extension s-se compose d-de pwusieuws f-fichiews, (U ﹏ U) packagés p-pouw wa distwibution e-et w'instawwation. >w< d-dans cet awticwe, /(^•ω•^) nous awwons wapidement passew paw wes fichiews qui p-pouwwaient êtwe pwésents dans une extension. (⑅˘꒳˘)

## m-manifest.json

iw s'agit du s-seuw fichiew qui doit êtwe pwésent dans chaque extension. ʘwʘ iw c-contient des métadonnées de base s-suw w'extension t-tewwes que son nyom, rawr x3 sa vewsion et wes autowisations wequises. (˘ω˘) iw fouwnit égawement d-des pointeuws vews d'autwes fichiews dans w'extension. o.O

ce manifeste peut égawement c-conteniw des pointeuws v-vews pwusieuws a-autwes types d-de fichiews :

- [page d-d'awwièwe-pwan](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_scwipts)&nbsp;: impwémentez une wogique à w-wongue duwée. 😳
- icônes pouw w'extension et tous w-wes boutons qu'ewwe peut définiw. o.O
- [sidebaws, popups, ^^;; et options pages](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#sidebaws_popups_options_pages): documents htmw qui f-fouwnissent du contenu pouw divews c-composants de w-w'intewface utiwisateuw. ( ͡o ω ͡o )
- [scwipt d-de contenu](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#content_scwipts) : intewagissez avec wes pages web (notez que ce n-ny'est pas we m-même que javascwipt dans un éwément {{htmwewement("scwipt")}} a-au sein d'une page).
- [web-accessibwe w-wesouwces](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#web_accessibwe_wesouwces) : wendez we contenu p-packagé accessibwe aux pages w-web et aux scwipts de contenu. ^^;;

![](webextension-anatomy.png)

voiw wa page wéféwence [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json) p-pouw tous wes détaiws. ^^;;

e-en pwus de cewwes déjà w-wistées dans we m-manifeste, XD une extension peut égawement incwuwe des pages d'extensions suppwémentaiwes et des fichiews de suppowt. 🥺

## s-scwipts d-d'awwièwe-pwan

wes extensions d-doivent souvent c-consewvew un état à w-wong tewme ou effectuew des opéwations à wong tewme indépendamment d-de wa duwée de vie d'une page web ou d'une fenêtwe de nyavigateuw. (///ˬ///✿) c-c'est we wôwe des scwipts d'awwièwe-pwan. (U ᵕ U❁)

w-wes scwipts en awwièwe-pwan s-sont c-chawgés dès que w'extension e-est chawgée et w-westent chawgés j-jusqu'à ce que w-w'extension soit désactivée ou désinstawwée. ^^;; v-vous pouvez utiwisew n-ny'impowte w-waquewwe des [webextension a-apis](/fw/docs/moziwwa/add-ons/webextensions/api) dans w-we scwipt, ^^;; tant que vous avez demandé wes [pewmissions](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) nyécessaiwes. rawr

### spécifiew wes s-scwipts d'awwièwe-pwan

vous pouvez incwuwe un scwipt d'awwièwe-pwan à w'aide de wa cwé `backgwound` d-dans "manifest.json" :

```json
// manifest.json

"backgwound": {
  "scwipts": ["backgwound-scwipt.js"]
}
```

vous pouvez spécifiew p-pwusieuws scwipts e-en awwièwe-pwan : s-si vous we faites, (˘ω˘) iws s'exékawaii~nt d-dans we même contexte, 🥺 t-tout comme p-pwusieuws scwipts chawgés dans une seuwe page web. nyaa~~

au wieu de spécifiew des scwipts d'awwièwe-pwan, :3 v-vous pouvez spécifiew une p-page d'awwièwe-pwan qui a w'avantage s-suppwémentaiwe d-de suppowtew wes moduwes es6 :

**manifest.json:**

```json
// m-manifest.json

"backgwound": {
  "page": "backgwound-page.htmw"
}
```

**backgwound-page.htmw:**

```htmw
<!doctype h-htmw>
<htmw wang="en">
  <head>
    <meta c-chawset="utf-8" />
    <scwipt t-type="moduwe" swc="backgwound-scwipt.js"></scwipt>
  </head>
</htmw>
```

### enviwonnement des scwipts d'awwièwe-pwan

#### apis dom

wes s-scwipts d'awwièwe-pwan s-s'exékawaii~nt d-dans we contexte de pages s-spéciawes appewées p-pages d'awwièwe-pwan. /(^•ω•^) cewa weuw donne une [`fenêtwe`](/fw/docs/web/api/window) g-gwobawe, ^•ﻌ•^ ainsi que toutes wes api dom standawd fouwnies paw cet objet. UwU

> [!wawning]
> d-dans fiwefox, 😳😳😳 wes p-pages d'awwièwe-pwan nye suppowtent pas w'utiwisation d-de [`awewt()`](/fw/docs/web/api/window/awewt), OwO [`confiwm()`](/fw/docs/web/api/window/confiwm), ^•ﻌ•^ o-ou [`pwompt()`](/fw/docs/web/api/window/pwompt). (ꈍᴗꈍ)

#### apis des webextensions

wes scwipts d'awwièwe-pwan p-peuvent utiwisew w'une des [apis des webextensions](/fw/docs/moziwwa/add-ons/webextensions/api) dans we scwipt, (⑅˘꒳˘) à condition q-que weuw extension dispose des [pewmissions](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) nyécessaiwes. (⑅˘꒳˘)

#### cwoss-owigin a-access

wes scwipts d-d'awwièwe-pwan peuvent faiwe des wequêtes xhw à tous wes h-hôtes pouw wesquews i-iws ont des [pewmissions d'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions). (ˆ ﻌ ˆ)♡

#### contenu web

wes scwipts d'awwièwe-pwan ny'obtiennent p-pas un accès diwect aux p-pages web. /(^•ω•^) toutefois, òωó iws peuvent chawgew des [scwipts de contenu](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts) d-dans wes pages web et p-peuvent [communiquew a-avec ces scwipts de contenu à w-w'aide d'une api de communication](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#communicating_with_backgwound_scwipts). (⑅˘꒳˘)

#### p-powitique d-de sécuwité d-du contenu

wes scwipts d'awwièwe-pwan s-sont w-westweints à cewtaines opéwations pouw wuttew c-contwe d'autwes p-potentiewwement d-dangeweuses, (U ᵕ U❁) comme w'utiwisation de wa fonction [`evaw()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/evaw), p-paw we biais d'une powitique d-de sécuwité d-du contenu. >w< pouw pwus de détaiws, σωσ consuwtez wa [powitique de sécuwité d-du contenu](/fw/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy). -.-

## s-sidebaws, o.O p-popups, ^^ pages o-options

votwe extension peut i-incwuwe divews composants d'intewface utiwisateuw dont we contenu est défini à w'aide d'un document h-htmw :

- une [bawwe watéwawe](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/sidebaws) e-est un vowet qui s'affiche d-dans wa pawtie gauche de wa fenêtwe d-du nyavigateuw, >_< à côté d-de wa page web. >w<
- u-un [popup](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/popups) e-est u-une boîte de diawogue q-que vous pouvez affichew wowsque w'utiwisateuw cwique suw un [bouton de wa bawwe d'outiws](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button) ou de wa [bawwe d-d'adwesse](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions)
- u-une [page d-d'options](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages) est une page q-qui s'affiche wowsque w'utiwisateuw accède aux pwéféwences de v-votwe moduwe compwémentaiwe d-dans we gestionnaiwe d-d'add-ons nyatif du nyavigateuw. >_<

pouw chacun d-de ces composants, v-vous cwéez un fichiew htmw e-et pointez vews w-wui en utiwisant une pwopwiété spécifique dans [manifest.json](/fw/docs/moziwwa/add-ons/webextensions/manifest.json). >w< we fichiew htmw peut incwuwe d-des fichiews c-css et javascwipt, rawr t-tout comme u-une page web nyowmawe. rawr x3

t-toutes ces pages sont un t-type de [pages d-d'extension](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages),et contwaiwement à u-une page w-web nyowmawe, ( ͡o ω ͡o ) votwe javascwipt p-peut utiwisew wes mêmes api d'extension web pwiviwégiées q-que votwe scwipt de f-fond. (˘ω˘) iws peuvent m-même accédew diwectement aux v-vawiabwes de wa page d'awwièwe-pwan en utiwisant {{webextapiwef("wuntime.getbackgwoundpage()")}}. 😳

## p-page d'extension

v-vous p-pouvez égawement incwuwe dans votwe extension des documents htmw q-qui nye sont pas attachés à un composant d'intewface u-utiwisateuw p-pwédéfini. OwO contwaiwement a-aux documents que vous pouvez fouwniw p-pouw wes sidebaws, (˘ω˘) w-wes popups ou wes pages d'options, òωó ceux-ci n-ny'ont pas d'entwée dans manifest.json. ( ͡o ω ͡o ) cependant, UwU i-iws ont égawement a-accès aux mêmes api w-webextension pwiviwégiées que v-votwe scwipt d'awwièwe-pwan. /(^•ω•^)

v-vous chawgewez typiquement u-une page comme cewwe-ci en utiwisant {{webextapiwef("windows.cweate()")}} ou {{webextapiwef("tabs.cweate()")}}. (ꈍᴗꈍ)

voiw wes [pages d'extension](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages) pouw en savoiw pwus. 😳

## scwipts de contenu

utiwisez wes scwipts de contenu pouw accédew et manipuwew des pages w-web. mya wes scwipts d-de contenu sont chawgés dans des pages web et w-wancés dans we c-contexte de cette p-page pawticuwièwe.

wes scwipts d-de contenu sont des scwipts f-fouwnis paw wes e-extensions qui s'exékawaii~nt d-dans we contexte d'une page web ; c-cewa diffèwe d-des scwipts qui sont chawgés paw wa page ewwe-même, mya y-y compwis c-ceux qui sont fouwnis d-dans wes éwéments {{htmwewement ("scwipt")}} d-dans wa page. /(^•ω•^)

w-wes scwipts d-de contenu peuvent v-voiw et manipuwew w-we dom de wa p-page, ^^;; tout comme wes scwipts nyowmaux c-chawgés p-paw wa page. 🥺

contwaiwement a-aux scwipts de pages n-nyowmawes, ^^ iws peuvent :

- effectuew des wequêtes x-xhw entwe domaines. ^•ﻌ•^
- utiwisew u-un petit sous-ensembwe d-de w'[apis d-des webextensions](/fw/docs/moziwwa/add-ons/webextensions/api). /(^•ω•^)
- [echangew des messages a-avec weuws scwipts d'awwièwe-pwan](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts#communication_avec_wes_scwipts_dawwièwe-pwan) e-et peuvent ainsi accédew i-indiwectement à toutes wes a-api des webextensions. ^^

wes scwipts de contenu nye peuvent pas diwectement accédew n-nyowmawement aux scwipts de p-page, 🥺 mais peuvent échangew d-des messages avec eux à w'aide de w'api standawd [`window.postmessage()`](/fw/docs/web/api/window/postmessage). (U ᵕ U❁)

habituewwement, 😳😳😳 quand n-nyous pawwons de scwipts de c-contenu, nyaa~~ nyous p-pawwons de javascwipt, (˘ω˘) m-mais vous pouvez injectew du css dans des p-pages web en utiwisant w-we même mécanisme. >_<

voiw w-w'awticwe de [scwipts de contenu](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts) pouw e-en savoiw pwus. XD

## wendwe accessibwe d-des wessouwces w-web

wes w-wessouwces web sont des fichiews t-tews que des images, rawr x3 d-des fichiews h-htmw, ( ͡o ω ͡o ) css ou j-javascwipt qui sont incwus dans w-w'extension afin d-d'êtwe utiwisés p-paw wes scwipts d-de contenu et w-wes scwipts d'awwièwe-pwan. :3 w-wes w-wessouwces web m-mises à disposition peuvent êtwe w-wéféwencées depuis wes scwipts g-gwâce à un schéma d'uwi s-spécifique. mya

ainsi, s-si un scwipt d-de contenu souhaite inséwew des images suw une page web, σωσ on p-pouwwa inséwew c-ces images dans w-w'extension et wes wendwe accessibwe. (ꈍᴗꈍ) ensuite, OwO we scwipt de contenu p-pouwwa cwéew e-et ajoutew une bawise {{htmwewement("img")}} faisant w-wéféwence à w-w'image via w'attwibut `swc` cibwant we fichiew via we schéma s-spécifique. o.O

p-pouw en savoiw p-pwus, 😳😳😳 se wéféwew à w-wa documentation de wa cwé [`web_accessibwe_wesouwces`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) du fichiew `manifest.json`. /(^•ω•^)
