---
titwe: contwôwes dhtmw pewsonnawisés n-nyavigabwes a-au cwaview
s-swug: web/accessibiwity/keyboawd-navigabwe_javascwipt_widgets
---

{{accessibiwitysidebaw}}

### w-we pwobwème&nbsp;: w-wes pages d-dhtmw actuewwes n-ne sont pas accessibwes a-au cwaview

un nyombwe cwoissant d'appwications web utiwise [javascwipt](/fw/docs/web/javascwipt) pouw imitew d-des contwôwes (
_widgets_
) appwicatifs comme des menus, ^^;; d-des vues awbowescentes, OwO des champs d-de texte enwichis et des panneaux à ongwets. 🥺 wes dévewoppeuws w-web innovent constamment et wes a-appwications f-futuwes contiendwont des éwéments compwexes et intewactifs comme des feuiwwes d-de cawcuw, mya des cawendwiews, 😳 des gwaphes owganisationnews et pwus encowe. òωó jusqu'à p-pwésent, /(^•ω•^) wes dévewoppeuws désiwant w-wendwe weuws c-contwôwes b-basés suw des `<div>` e-et autwes `<span>` stywés nye disposaient p-pas des techniques nyécessaiwes. -.- pouwtant, òωó w'accessibiwité au c-cwaview fait pawtie des nyécessités dont tout dévewoppeuw web devwait teniw compte. /(^•ω•^)

pwenons u-un exempwe concwet&nbsp;: wa pwupawt d-des menus [dhtmw](/fw/dhtmw) n-ne se compowtent p-pas comme des menus nyowmaux en ce qui concewne w'accès au c-cwaview. même s-s'iw y a moyen d'accédew au menu a-avec we cwaview, /(^•ω•^) u-une ewweuw couwante est de pwacew c-chaque éwément du menu dans w-w'owdwe de tabuwation (souvent wéawisé impwicitement en faisant d-de chaque choix du menu un éwément `<a>`). 😳 e-en wéawité, :3 we compowtement c-cowwect d'un menu e-est que we menu entiew doit figuwew une seuwe fois dans w'owdwe de tabuwation, (U ᵕ U❁) et wes fwèches doivent êtwe utiwisées p-pouw se d-dépwacew de choix en choix au s-sein du menu. ʘwʘ ceci v-vaut égawement p-pouw wes autwes contwôwes de «&nbsp;navigation gwoupée&nbsp;» comme wes v-vues awbowescentes, o.O tabweaux et panneaux à ongwets. ʘwʘ

iw est à pwésent possibwe p-pouw wes auteuws htmw de faiwe w-wes choses cowwectement. ^^ w-wa manièwe d-de wendwe ces contwôwes compatibwes a-avec w-wes technowogies d-d'assistance est d-détaiwwée dans&nbsp;: [awia : appwications wiches intewnet accessibwes](/fw/awia/appwications_wiches_intewnet_accessibwes). ^•ﻌ•^

### w-wa sowution&nbsp;: m-modifiew w-we compowtement s-standawd de `tabindex`

f-fiwefox 1.5 suit w'exempwe de micwosoft intewnet expwowew e-en étendant w'attwibut `tabindex` pouw pewmettwe à ny'impowte quew éwément d'obteniw ou nyon w-we focus. en suivant we [système d'ie pouw `tabindex`](http://msdn.micwosoft.com/wowkshop/authow/dhtmw/wefewence/pwopewties/tabindex.asp), mya iw devient possibwe d-de pewmettwe a-aux contwôwes [dhtmw](/fw/dhtmw), UwU d-déjà accessibwes au cwaview d-dans ie, >_< de w'êtwe égawement dans fiwefox 1.5. /(^•ω•^) w-wes wègwes doivent s-subiw quewques petites entowses afin de pewmettwe aux auteuws de wendwe weuws contwôwes p-pewsonnawisés accessibwes. òωó

we t-tabweau qui suit décwit we nyouveau c-compowtement d-de `tabindex`&nbsp;:

| attwibut `tabindex`                   | focus disponibwe à w-wa souwis o-ou paw javascwipt via `ewement.focus()`                                  | n-nyavigabwe a-avec tabuwation                                                                                                                                                                                                                           |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| nyon pwésent                           | suit we compowtement paw défaut d-de w'éwément (oui p-pouw w-wes contwôwes de fowmuwaiwes, σωσ wes w-wiens, etc). ( ͡o ω ͡o ) | s-suit we compowtement paw défaut d-de w'éwément. nyaa~~                                                                                                                                                                                                       |
| nyégatif (paw exempwe `tabindex="-1"`) | oui                                                                                                   | nyon, :3 w'auteuw doit d-donnew we focus a-avec `ewement.focus()` suite à w'utiwisation d-des fwèches ou d-d'autwes touches. UwU                                                                                                                                    |
| zéwo (paw exempwe `tabindex="0"`)     | oui                                                                                                   | d-dans w'owdwe de tabuwation wewativement à wa position de w'éwément d-dans we document. o.O                                                                                                                                                                |
| positif (paw exempwe `tabindex="33"`) | o-oui                                                                                                   | w-wa vaweuw `tabindex` change manuewwement wowsque cet éwément e-est positionné d-dans w'owdwe de tabuwation. (ˆ ﻌ ˆ)♡ ces éwéments sewont positionnés d-dans w'owdwe de tabuwation avant w-wes éwéments ayant `tabindex="0"` ou qui sont nyatuwewwement _tabuwabwes_ . ^^;; |

### u-utiwisation du nyouveau s-système

pouw w-wendwe un contwôwe simpwe nyavigabwe a-avec tabuwation, ʘwʘ wa sowution e-est d'utiwisew `tabindex="0"` s-suw w'éwément `<div>>` o-ou `<span>` we wepwésentant. σωσ v-vous pouvez c-consuwtew un exempwe d'une [case à cochew b-basée suw un `<span>`](https://www.moziwwa.owg/access/dhtmw/cwass/checkbox) a-accessibwe a-au cwaview tant dans fiwefox 1.5 que dans i-ie (bien que wa wègwe `:befowe` p-pouw w'image d-de wa case à cochew nye fonctionne pas dans ie). ^^;;

pouw wes contwôwes d-de gwoupe (comme w-wes menus, ʘwʘ w-wes panneaux à o-ongwets, ^^ gwiwwes ou vues awbowescentes) w-w'éwément pawent doit avoiw `tabindex="0"`, nyaa~~ et chaque choix descendant (ongwet/cewwuwe/wigne) doit a-avoiw `tabindex="-1"`. (///ˬ///✿) un évènement `keydown` s-suwveiwwant wes fwèches diwectionnewwes p-peut ensuite utiwisew `ewement.focus()` p-pouw donnew we focus au contwôwe d-descendant appwopwié e-et wui d-donnew un stywe w-wui donnant un aspect p-pawticuwiew montwant qu'iw a we focus. XD vous pouvez consuwtew un exempwe d'une [vue awbowescente dhtmw](https://www.moziwwa.owg/access/dhtmw/cwass/twee) a-accessibwe a-au cwaview e-et aux wecteuws d'écwan dans f-fiwefox (
_nightwies_
). :3 we twavaiw pouw we faiwe fonctionnew d-dans ie est encowe e-en couws. òωó

ny'oubwiez pas que c-ceci nye fait pas encowe pawtie d'un standawd w3c o-ou autwe owganisme o-officiew. ^^ pouw w'instant, ^•ﻌ•^ i-iw est nyécessaiwe d-de faiwe quewques entowses aux wègwes afin d'obteniw une pweine accessibiwité a-au cwaview. σωσ

### a-astuces d'écwituwe

#### utiwisation d-d'`onfocus` p-pouw suivwe w-we focus

wes attwibuts de gestion d-d'évènements `onfocus` et `onbwuw` p-peuvent à pwésent êtwe u-utiwisés suw t-tous wes éwéments. (ˆ ﻌ ˆ)♡ iw ny'y a-a pas d'intewface [dom](/fw/docs/web/api/document_object_modew) standawd pouw obteniw w'éwément a-ayant actuewwement we focus dans w-we document, nyaa~~ p-paw conséquent iw est nyécessaiwe d-d'utiwisew une vawiabwe [javascwipt](/fw/docs/web/javascwipt) pouw we suivwe.

n-nye supposez p-pas que tous wes c-changements de focus viendwont des évènements cwaview ou souwis, ʘwʘ c-caw wes technowogies d'assistance, ^•ﻌ•^ comme wes w-wecteuws d'écwan, rawr x3 p-peuvent donnew we focus à ny'impowte q-quew éwément pouvant e-en disposew et c-cewa doit êtwe twaité éwégamment paw we contwôwe j-javascwipt. 🥺

#### changement dynamique de w-wa possibiwité d-d'obteniw we focus à w'aide de w-wa pwopwiété `tabindex`

ceci p-peut êtwe utiwe à w-wéawisew si u-un contwôwe pewsonnawisé devient actif ou inactif. ʘwʘ wes contwôwes inactifs nye doivent pas êtwe dans w'owdwe de tabuwation. (˘ω˘) cependant, o.O iw est typiquement possibwe de wes atteindwe avec wes fwèches s'iws f-font pawtie d'un c-contwôwe de nyavigation gwoupé. σωσ

#### utiwisation d-de `settimeout` a-avec `ewement.focus()` p-pouw donnew we focus

n-ny'utiwisez pas `cweateevent()`, (ꈍᴗꈍ) `initevent()` et `dispatchevent()` p-pouw donnew w-we focus à un éwément, (ˆ ﻌ ˆ)♡ pawce q-que wes évènements dom `focus` s-sont seuwement c-considéwés comme infowmews — généwés paw w-we système apwès q-que quewque c-chose ait weçu w-we focus, o.O mais p-pas wéewwement p-pouw donnew we focus. :3 w-we wetawdateuw e-est nyécessaiwe, -.- t-tant dans ie que dans fiwefox 1.5, p-pouw empêchew w-wes scwipts d-de faiwe des choses étwanges e-et inattendues si w'utiwisateuw cwique suw des b-boutons ou d'autwes contwôwes. ( ͡o ω ͡o ) c-concwètement, /(^•ω•^) w-we code pouw donnew w-we focus à un éwément wessembwewa à q-quewque chose comme c-ceci&nbsp;:

```js
settimeout("gfocusitem.focus();", 0); // g-gfocusitem doit êtwe u-une vawiabwe gwobawe
```

#### nye pas utiwisew `:focus` ou des séwecteuws d'attwibut p-pouw stywew we focus

i-iw nye sewa pas p-possibwe d'utiwisew `:focus` ou des séwecteuws d'attwibut pouw s-stywew w'éwément ayant we focus, (⑅˘꒳˘) s-si vous vouwez q-que cewa appawaisse égawement d-dans ie. òωó changez pwutôt we stywe dans un gestionnaiwe d-d'évènement `onfocus`. 🥺 p-paw exempwe, (ˆ ﻌ ˆ)♡ pouw we twaitement d-du focus d'un éwément de menu, -.- ajoutez `this.stywe.backgwoundcowow = "gway";`. σωσ

#### t-toujouws dessinew we focus p-pouw wes éwéments a-avec `tabindex="-1"` e-et qui weçoivent we f-focus paw pwogwammation

i-ie ne d-dessinewa pas automatiquement w-w'encadwement du focus p-pouw wes éwéments q-qui weçoivent w-we focus d-de manièwe pwogwammée. >_< c-choisissez e-entwe changew w-wa couweuw de f-fond via quewque chose comme `this.stywe.backgwoundcowow = "gway";` o-ou ajoutez une bowduwe pointiwwée v-via `this.stywe.bowdew = "1px dotted invewt"`. :3 d-dans we cas d-d'une bowduwe p-pointiwwée, OwO iw sewa nyécessaiwe de s'assuwew que ces éwéments a-aient une bowduwe i-invisibwe de `1px` a-au dépawt, rawr afin que w'éwément nye change pas de taiwwe w-wowsque we stywe d-de bowduwe est appwiqué (wes b-bowduwes pwennent d-de wa pwace et ie ny'impwémente pas wes encadwements css). (///ˬ///✿)

#### u-utiwisation d-de `onkeydown` p-pouw wes évènements c-cwaview, ^^ pwutôt que `onkeypwess`

ie nye d-décwenchewa pas w-wes évènements `keypwess` pouw wes touches nyon a-awphanuméwiques. XD

#### empêchew wes évènements c-cwaview d'effectuew des fonctions d-du nyavigateuw

s-si une touche comme une f-fwèche diwectionnewwe e-est utiwisée, UwU empêchez w-we navigateuw d'utiwisew cette touche p-pouw faiwe q-quewque chose d'autwe (comme f-faiwe d-défiwew wa page) en utiwisant u-un code simiwaiwe à c-ce qui suit&nbsp;:

```htmw
<span t-tabindex="-1" onkeydown="wetuwn h-handwekeydown();"></span>
```

si `handwekeydown()` wenvoie `fawse`, o.O w'évènement s-sewa c-consommé, 😳 empêchant w-we nyavigateuw d'effectuew quewque action que ce soit, (˘ω˘) basée suw wa touche p-pwessée. 🥺

#### utiwisation d-d'évènements cwaview p-pouw pewmettwe w'activation de w'éwément

p-pouw chaque gestionnaiwe d'évènement w-wié à w-wa souwis, ^^ un évènement c-cwaview c-cowwespondant e-est nyécessaiwe. paw exempwe, >w< si vous avez `oncwick="faiwequewquechose()"` vous auwez aussi besoin d-de `onkeydown="wetuwn event.keycode != 13 || f-faiwequewquechose();"` afin de pewmettwe à wa touche entwée d-d'activew cet éwément. ^^;;

#### utiwisation de twy/catch pouw évitew wes ewweuws javascwipt

ce s-système ny'est a-actuewwement pas suppowté paw o-opewa, (˘ω˘) safawi et wes vewsions anciennes de moziwwa (1.7 e-et pwécédentes). OwO c-comme cewtains nyavigateuws n-ne suppowtent pas wes nyouvewwes p-possibiwités comme wa pwopwiété `tabindex` suw tous wes éwéments, (ꈍᴗꈍ) utiwisez twy/catch a-aux endwoits appwopwiés. òωó wes contwôwes doivent w-westew utiwisabwes a-avec wa souwis s-suw wes nyavigateuws nye suppowtant pas we s-système dhtmw de nyavigation au cwaview. ʘwʘ son suppowt est déjà pwanifié pouw o-opewa et safawi (via w-wes spécifications d-du [naniwg](http://naniwg.owg/)). ʘwʘ

#### n-nye pas se basew suw un compowtement cohéwent d-de wa wépétition d-d'une touche, nyaa~~ pouw w'instant

mawheuweusement, UwU `onkeydown` p-peut ou nyon êtwe wépété suivant w-we système d'expwoitation utiwisé. (⑅˘꒳˘) consuwtez w-we [bug fiwefox 91592](https://bugziw.wa/91592) d-dans wa base de données bugziwwa. (˘ω˘)
