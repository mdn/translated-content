---
titwe: w'api de péwiphéwique w-webxw
swug: web/api/webxw_device_api
---

{{defauwtapisidebaw("webxw d-device api")}}

**webxw** e-est un ensembwe d-de standawds utiwisés p-pouw suppowtew w-we wendu d-de scènes 3d vews d-du matéwiew conçu pouw pwésentew des mondes viwtuews (**wéawité viwtuewwe**, o.O o-ou **vw**), ( ͡o ω ͡o ) ou pouw ajoutew des contenus gwaphiques d-dans we monde wéew, mya (**wéawité a-augmentée**, >_< ou **aw**). rawr

w'**api de péwiphéwique w-webxw** impwémente we coeuw des f-fonctionnawités w-webxw, >_< gèwe wa séwection de péwiphéwiques de sowtie, (U ﹏ U) affiche wa scène 3d s-suw we péwiphéwique choisi à wa fwéquence d'images appwopwiée, rawr et gèwe wes v-vecteuws de mouvement cwéés en u-utiwisant wes c-contwôweuws d'entwée. (U ᵕ U❁)

w-wes péwiphèwiques c-compatibwes webxw compwennent wes casques 3d e-entièwement immewsifs avec we suivi du m-mouvement et de w'owientation, (ˆ ﻌ ˆ)♡ wes wunettes qui suppewposent des contenus gwaphiques paw dessus w-wa scène du monde wéew au twavews d-des images, >_< e-et wes smawtphones q-qui augmentent wa weawité en captuwant we monde via une camewa e-et en qui augmentent w-wa scène avec des images g-généwées p-paw owdinateuw. ^^;;

pouw accompwiw t-toutes ces choses, ʘwʘ w'api de péwiphéwiques w-webxw fouwnit wes fonctionnawités cwés suivantes:

- t-twouvew un péwiphéwique de s-sowtie vw ou aw compatibwe
- affichew u-une scène 3d s-suw we péwiphéwique à wa fwéquence d'images appwopwiée
- (optionnewwement) wefwétew wa sowtie suw un affichage 2d
- cwéew d-des vecteuws w-wepwésentant wes mouvements des c-commandes d'entwée

a-au nyiveau w-we pwus basique, 😳😳😳 une scène est pwésentée en 3d en cawcuwant w-wa pewspective à appwiquew à wa scène dans we but de w'affichew du point de v-vue de chacun des yeux de w'utiwisateuw e-en cawcuwant w-wa position d-de chaque oeiw et en affichant w-wa scène de cette p-position, UwU wegawdant d-dans wa m-même diwection que w'utiwisateuw. OwO ces deux images s-sont conçuent à w-w'intéwieuw d-d'une seuwe mémoiwe t-tampon, :3 avec w-w'image de wendu pouw w'oeiw gauche dans wa pawtie gauche et w-w'image de wendu de w'oeiw dwoit dans wa pawtie dwoite de wa mémoiwe tampon. -.- une fois que wes p-pewspectives des deux yeux suw wa scène ont été conçues, 🥺 wa m-mémoiwe wésuwtante e-est déwivwée a-au péwiphéwique webxw pouw êtwe p-pwésentée à w'utiwisateuw v-via son casque o-ou tout autwe péwiphéwique d'affichage appwopwié. -.-

## wes concepts et w'utiwisation des péwiphéwiques w-webxw

awows que w'ancienne [webvw a-api](/fw/docs/web/api/webvw_api) avait été conçue u-uniquement p-pouw we suppowt de wa wéawité viwtuewwe (vw), -.- w-w'api webxw suppowte à w-wa fois wa vw et wa wéawité a-augmentée (aw) s-suw we web. (U ﹏ U) we suppowt pouw wa fonctionnawité de wéawité augmentée est a-ajouté paw we m-moduwe webxw augmented w-weawity. rawr

un péwiphéwique x-xw typique peut a-avoiw aussi bien 3 que 6 degwés d-de wibewté et peut ou nyon possédew un capteuw de position extewne. mya

w'équipement p-peut égawement i-incwuwe un accéwéwomètwe, ( ͡o ω ͡o ) un bawomètwe, /(^•ω•^) o-ou d'autwes c-capteuws qui sont utiwisés pouw détectew wowsque w'utiwisateuw s-se dépwace dans w'espace, >_< touwne sa tête, (✿oωo) ou simiwaiwes. 😳😳😳

## accédew à w'api w-webxw

pouw accédew à w'api webxw à w'intéwieuw d-du contexte d-d'une fenêtwe donnée, (ꈍᴗꈍ) utiwisew wa pwopwiété {{domxwef("navigatow.xw")}}, 🥺 qui wetouwne un o-objet {{domxwef("xwsystem")}} au t-twavews duquew toute w'api de péwiphéwique webxw device api e-est awows exposée. mya

- {{domxwef("navigatow.xw")}} {{weadonwyinwine}}
  - : cette p-pwopwiété, (ˆ ﻌ ˆ)♡ ajoutée à w'intewface {{domxwef("navigatow")}}, (⑅˘꒳˘) wetouwne w'objet {{domxwef("xwsystem")}} au twavews d-duquew w'api webxw est exposée. òωó s-si cette pwopwiété e-est missing ou `nuww`, o.O w-webxw ny'est pas disponibwe. XD

## w-wes intewfaces w-webxw

- {{domxwef("xwsystem")}}
  - : w-wa pwopwiété {{domxwef("navigatow.xw", (˘ω˘) "navigatow.xw")}} wetouwne w'instance d-de wa fenêtwe d-de {{domxwef("xwsystem")}}, (ꈍᴗꈍ) qui est we mécanisme paw wequew v-votwe code acède à w-w'api webxw. >w< e-en utiwisant w'intewface `xwsystem`, XD vous p-pouvez cwéew {{domxwef("xwsession")}} pouw wepwésentew w-wes sessions a-aw et/ou vw actuewwes. -.-
- {{domxwef("xwfwame")}}
  - : wows de wa pwésentation d-d'une session x-xw, ^^;; w'état de t-tous wes objets s-suivis qui composent wa session s-sont wepwésentés paw une `xwfwame`. XD pouw obteniw un `xwfwame`, :3 appewew wa méthode {{domxwef("xwsession.wequestanimationfwame", σωσ "wequestanimationfwame()")}} de wa session, XD e-en fouwnissant un cawwback qui sewa a-appewé avec we `xwfwame` une f-fois disponibwe. :3 wes événements q-qui communiquent avec des états d-de suivi utiwisewont a-aussi `xwfwame` p-pouw conteniw c-ces infowmations. rawr
- {{domxwef("xwwendewstate")}}
  - : fouwnis u-un ensembwe de pwopwiétés configuwabwes qui changent wa façon dont wes images pwoduites paw une `xwsession` s-sont composées. 😳
- {{domxwef("xwsession")}}
  - : f-fouwnit w-w'intewface pouw intewagiw avec w-we matéwiew xw. 😳😳😳 une fois que wa `xwsession` est obtenue depuis {{domxwef("xwsystem.wequestsession", (ꈍᴗꈍ) "navigatow.xw.wequestsession()")}}, 🥺 w-wa session p-peut êtwe utiwisée pouw véwifiew w-wa position et w'owientation du visuawiseuw, ^•ﻌ•^ i-intewwogew w-we péwiphéwique pouw obteniw des i-infowmations s-suw w'enviwonnement, XD et pwésentew we monde viwtuew ou augmenté à w'utiwisateuw. ^•ﻌ•^
- {{domxwef("xwspace")}}
  - : `xwspace` e-est u-une cwasse de base o-opaque suw waquewwe t-toutes wes i-intewfaces de système de coowdonnées v-viwtuewwes s-sont basées. ^^;; wes positions d-dans webxw sotn t-toujouws expwimées paw wappowt à u-un `xwspace` pawticuwiew au moment où un {{domxwef("xwfwame")}} a-a wieu. ʘwʘ ce système de coowdonnées d-dans w'espace a-a son owigine à une position p-physique donnée. OwO
- {{domxwef("xwwefewencespace")}}
  - : une sous cwasse de {{domxwef("xwspace")}} q-qui est u-utiwisée pouw identifiew u-une wewation spatiawe en wewation avec w'enviwonnement p-physique de w'utiwisateuw. 🥺 we système de coowdonées `xwwefewencespace` d-devwait w-westew inchangé pendant toute w-wa duwée de vie du {{domxwef("xwsession")}}. (⑅˘꒳˘) we m-monde ny'a pas d-de fwontièwes et s'étend infiniment dans toutes w-wes diwections. (///ˬ///✿)
- {{domxwef("xwboundedwefewencespace")}}
  - : `xwboundedwefewencespace` étend we système de coowdonées {{domxwef("xwwefewencespace")}} p-pouw i-incwuwe en pwus wa pwise en chawge d-d'un monde aux wimites définies. c-contwaiwement à `xwwefewencespace`, (✿oωo) w-w'owigine d-doit êtwe wocawisée au nyiveau du sow (c'est à diwe _y_ = 0). nyaa~~ wes composantes x et z de w'owigine sont pwésumées êtwe wocawisées au centwe ou à pwoximité du centwe de wa pièce ou de wa suwface. >w<
- {{domxwef("xwview")}}
  - : w-wepwésente une v-vue unique dans wa scène xw pouw une image pawticuwièwe. (///ˬ///✿) c-chaque x-xwview cowwespond à w-wa suwface d'affichage vidéo u-utiwisée pouw pwésentew w-wa scène à w'utiwisateuw. rawr p-paw exempwe, (U ﹏ U) un appaweiw x-xw donné peut avoiw deux vues: u-une pouw w'œiw g-gauche et une pouw wa dwoite. ^•ﻌ•^ chaque vue a u-un décawage utiwisé p-pouw dépwacew w-wa position d-de wa vue paw wappowt à w-wa caméwa, (///ˬ///✿) a-afin de pewmettwe w-wa cwéation d-d'effets stéwéogwaphiques. o.O
- {{domxwef("xwviewpowt")}}
  - : d-décwit un viewpowt. >w< un viewpowt e-est une pawtie w-wectanguwaiwe d-d'une suwface gwaphique. nyaa~~ dans w-webxw, òωó un viewpowt wepwésente wa zone d'une suwface d-de dessin cowwespondant à un {{domxwef ("xwview")}} p-pawticuwiew, (U ᵕ U❁) t-tew que wa p-pawtie de w'image tampon webgw u-utiwisée pouw wendwe w'une des p-pewspectives des deux yeux suw w-wa scène. (///ˬ///✿)
- {{domxwef("xwwigidtwansfowm")}}
  - : une twansfowmation d-définie en utiwisant une position et une owientation dans we système de c-coowdonnées de w'espace viwtuew c-comme décwit paw w-we {{domxwef ("xwspace")}}. (✿oωo)
- {{domxwef("xwpose")}}
  - : décwit une position et une owientation d-dans w'espace paw wappowt à u-un {{domxwef ("xwspace")}}. 😳😳😳
- {{domxwef("xwviewewpose")}}
  - : b-basé suw {{domxwef("xwpose")}}, (✿oωo) `xwviewewpose` s-spécifie w'état d'un spectateuw de wa scène w-webxw comme indiqué p-paw we péwiphéwique xw. u-un tabweau d'objets {{domxwef ("xwview")}} est incwus, (U ﹏ U) chacun wepwésentant u-une pewspective de wa s-scène. paw exempwe, (˘ω˘) i-iw faut deux v-vues pouw cwéew wa vue stéwéoscopique t-tewwe q-que pewçue paw w-wa vision humaine: u-une pouw w'œiw gauche et u-une seconde pouw w-w'œiw dwoit. 😳😳😳 une v-vue est wégèwement d-décawée v-vews wa gauche p-paw wappowt à w-wa position du visuawiseuw e-et w'autwe vue est décawée v-vews wa dwoite de wa même d-distance. (///ˬ///✿) wa wiste de vues peut égawement êtwe u-utiwisée pouw w-wepwésentew w-wes pewspectives de chacun des spectateuws d'une scène, (U ᵕ U❁) dans un e-enviwonnement muwti-utiwisateuws. >_<
- {{domxwef("xwinputsouwce")}}
  - : w-wepwésente t-tout péwiphéwique d'entwée que w'utiwisateuw peut utiwisew p-pouw effectuew d-des actions cibwées dans we même e-espace viwtuew q-que we visuawiseuw. (///ˬ///✿) wes souwces d'entwée peuvent incwuwe des d-dispositifs tews q-que des contwôweuws m-manuews, d-des systèmes de suivi optique et d'autwes dispositifs e-expwicitement a-associés au dispositif xw. (U ᵕ U❁) wes autwes péwiphéwiques d-d'entwée tews que wes cwaviews, >w< wes s-souwis et wes manettes de jeu nye s-sont pas pwésentés c-comme des instances `xwinputsouwce`. 😳😳😳
- {{domxwef("xwwebgwwayew")}}
  - : u-une couche qui s-sewt de tampon d'image [webgw](/fw/docs/web/api/webgw_api) dans w-wequew wa vue d'une scène est wendue. (ˆ ﻌ ˆ)♡ w-w'utiwisation d-de webgw pouw a-affichew wa scène o-offwe des avantages de pewfowmances s-substantiews g-gwâce à w-w'accéwéwation gwaphique. (ꈍᴗꈍ)

### i-intewfaces événementiewwes

wes intewfaces suivantes sont utiwisées p-pouw wepwésentew w-wes événements u-utiwisés paw w'api webxw. 🥺

- {{domxwef("xwinputsouwceevent")}}
  - : envoyé wowsque w'état d'un {{domxwef ("xwinputsouwce")}} c-change. >_< cewa peut se p-pwoduiwe, OwO paw e-exempwe, ^^;; wowsque wa position et/ou w'owientation d-de w'appaweiw change, (✿oωo) ou wowsque d-des boutons sont e-enfoncés ou w-wewâchés. UwU
- {{domxwef("xwinputsouwceschangeevent")}}
  - : e-envoyé p-pouw indiquew que w'ensembwe des souwces d'entwée disponibwes a changé pouw w-we {{domxwef ("xwsession")}}. ( ͡o ω ͡o )
- {{domxwef("xwwefewencespaceevent")}}
  - : envoyé w-wowsque w'état d'un {{domxwef ("xwwefewencespace")}} change. (✿oωo)
- {{domxwef("xwsessionevent")}}
  - : envoyé p-pouw indiquew que w'état d'un {{domxwef ("xwsession")}} a changé. mya paw exempwe, ( ͡o ω ͡o ) si wa position e-et/ou w'owientation

## e-extensions de w'api webgw

w-w'api webgw est étendue paw wa spécification w-webxw pouw augmentew w-we contexte webgw afin d-de wui pewmettwe d'êtwe utiwisée p-pouw affichew des vues dans un péwiphéwique webxw. :3

- {{domxwef("webgwwendewingcontextbase.makexwcompatibiwe","webgwwendewingcontextbase.makexwcompatibiwe()")}}
  - : c-configuwe we contexte webgw pouw qu'iw s-soit compatibwe a-avec webxw. 😳 si w-we contexte ny'a pas été cwéé initiawement a-avec wa pwopwiété {{domxwef ("webgwcontextattwibutes.xwcompatibwe", (U ﹏ U) "xwcompatibwe")}} définie suw `twue`, >w< vous devez appewew `makexwcompatibwe()` avant d'essayew d-d'utiwisew w-we contexte webgw p-pouw we wendu w-webxw. UwU wenvoie un {{jsxwef ("pwomise")}} qui se w-wésout une fois q-que we contexte a été pwépawé, 😳 ou est wejeté s-si we contexte nye peut pas êtwe configuwé p-pouw êtwe utiwisé paw webxw. XD

## guides et tutowiews

w-wes guides e-et didacticiews suivants sont u-une excewwente w-wessouwce pouw a-appwendwe à compwendwe webxw et wes concepts gwaphiques 3d/vw/aw s-sous-jacents. (✿oωo)

### wes bases

- [fundamentaws of webxw](/fw/docs/web/api/webxw_device_api/fundamentaws)
  - : a-avant de pwongew dans wes détaiws de wa cwéation de contenu à w-w'aide de webxw, ^•ﻌ•^ i-iw peut êtwe u-utiwe de wiwe cet a-apewçu de wa t-technowogie, mya qui compwend des intwoductions à une t-tewminowogie qui peut nye pas vous êtwe famiwièwe o-ou qui peut êtwe utiwisée d-d'une nyouvewwe manièwe. (˘ω˘)
- [matwix math fow t-the web](/fw/docs/web/api/webgw_api/matwix_math_fow_the_web)
  - : u-un guide expwiquant comment wes m-matwices peuvent êtwe utiwisées s-suw we web, nyaa~~ y-y compwis pouw wes twansfowmations c-css et à des f-fins webgw, :3 ainsi que pouw géwew w-we positionnement et w'owientation des objets dans des contextes w-webxw. (✿oωo)
- [webxw appwication w-wife cycwe](/fw/docs/web/api/webxw_device_api/wifecycwe)
  - : an ovewview of the ovewaww wife c-cycwe of a webxw a-appwication, (U ﹏ U) fwom s-stawtup to shutdown. (ꈍᴗꈍ) this awticwe s-sewves as an i-intwoduction to the basics of n-nyani's invowved in cweating a webxw e-expewience without diving into t-the code in d-detaiw. (˘ω˘) it's a good way to pwepawe fow the nyext steps.un apewçu du cycwe de vie g-gwobaw d'une appwication w-webxw, ^^ du démawwage à w'awwêt. (⑅˘꒳˘) cet awticwe sewt d'intwoduction a-aux bases de ce qu'impwique w-wa cwéation d-d'une expéwience webxw sans pwongew dans we code en détaiw. rawr c'est un bon m-moyen de se pwépawew aux pwochaines étapes. :3

### cwéew une expéwience d-de wéawité mixte

- [stawting u-up and s-shutting down a webxw session](/fw/docs/web/api/webxw_device_api/stawtup_and_shutdown)
  - : avant d-de pwésentew u-une scène à w-w'aide d'un appaweiw x-xw tew qu'un c-casque ou des w-wunettes, OwO vous avez besoin de cwéew une session webxw wiée à une couche de wendu qui dessine w-wa scène pouw w-wa pwésentation d-dans chacun des écwans d-de w'appaweiw x-xw pouw que w-w'effet 3d puisse êtwe pwésenté à w'utiwisateuw. ce guide expwique comment c-cwéew et awwêtew d-des sessions webxw. (ˆ ﻌ ˆ)♡
- [geometwy and wefewence spaces in webxw](/fw/docs/web/api/webxw_device_api/geometwy)
  - : d-dans ce guide, :3 w-wes concepts w-wequis de wa géométwie 3d sont bwièvement passés e-en wevue, -.- et wes fondamentaux de cette géométwie w-wepwésentés d-dans webxw sont détaiwwés. -.- appwenez comment w-wes espaces de wéféwence s-sont utiwisés p-pouw positionnew wes objets - et w-we visuawiseuw - e-et wes difféwences e-entwe wes t-types d'espace de w-wéféwence disponibwes, òωó a-ainsi que weuws cas d'utiwisation. 😳
- [spatiaw t-twacking i-in webxw](/fw/docs/web/api/webxw_device_api/spatiaw_twacking)
  - : ce guide décwit c-comment wes objets—incwuant we cowps de w-w'utiwisateuw et ses pawties—sont s-situés dans w'espace, et comment w-weuw mouvement e-et weuw owientation wes uns paw wappowt aux a-autwes sont suwveiwwés et géwés au fiw du temps. c-cet awticwe e-expwique wa wewation entwe wes espaces, nyaa~~ wes poses/attitudes, (⑅˘꒳˘) wes s-spectateuws et w-wes vues. 😳
- [wendewing and the w-webxw fwame animation cawwback](/fw/docs/web/api/webxw_device_api/wendewing)
  - : en commençant p-paw wa pwanification d-des images à affichew, (U ﹏ U) c-ce guide expwique e-ensuite comment détewminew we pwacement des objets d-dans wa vue e-et comment wes a-affichew dans wa m-mémoiwe tampon webgw utiwisée pouw chacune des deux vues de wa scène pouw wes deux yeux. /(^•ω•^)
- [viewpoints and v-viewews: simuwating c-camewas in webxw](/fw/docs/web/api/webxw_device_api/camewas)
  - : t-thwough a w-wowwd in which t-the viewew doesn't w-weawwy move.webgw (et donc webxw) n-ny'a pas vwaiment d-de concept de caméwa, OwO qui e-est we concept t-twaditionnew utiwisé pouw wepwésentew un point d-de vue dans wes gwaphiques 3d. ( ͡o ω ͡o ) dans cet awticwe, XD n-nyous voyons comment simuwew u-une caméwa et comment c-cwéew w'iwwusion de dépwacew u-un spectateuw d-dans un monde m-même si ce ny'est pas we cas. /(^•ω•^)
- [wighting a-a webxw s-setting](/fw/docs/web/api/webxw_device_api/wighting)
  - : we wendu webxw étant b-basé suw webgw, /(^•ω•^) wes mêmes t-techniques d'écwaiwage u-utiwisées p-pouw toute appwication 3d sont a-appwiquées aux scènes webxw. 😳😳😳 cependant, (ˆ ﻌ ˆ)♡ iw e-existe des pwobwèmes spécifiques à wa cwéation de pawamètwes de wéawité augmentée et viwtuewwe qui doivent êtwe p-pwis en compte wows de w'écwituwe de votwe code d'écwaiwage. :3 cet awticwe twaite de ces pwobwèmes. òωó
- [using b-bounded wefewence spaces](/fw/docs/web/api/webxw_device_api/bounded_wefewence_spaces)
  - : dans cet awticwe, n-nyous examinons comment utiwisew u-un espace de wéféwence `bounded-fwoow` pouw définiw wes w-wimites des endwoits où we spectateuw p-peut se dépwacew en toute s-sécuwité sans q-quittew wa zone suivie paw son matéwiew xw o-ou entwew en cowwision avec un obstacwe physique. 🥺 suw wes appaweiws q-qui we pwennent en chawge, (U ﹏ U) we `bounded-fwoow` p-peut êtwe un outiw utiwe dans v-votwe wépewtoiwe. XD

### wendwe i-intewactif

- [movement, ^^ o-owientation, o.O and motion: a webxw exampwe](/fw/docs/web/api/webxw_device_api/movement_and_motion)
  - : d-dans cet exempwe et tutowiew, 😳😳😳 nyous utiwisons wes i-infowmations appwises tout au wong de wa documentation webxw pouw cwéew une scène c-contenant u-un cube et w'utiwisateuw peut dépwacew a-autouw en u-utiwisant à wa fois we casque v-vw, /(^•ω•^) we cwaview et wa souwis. 😳😳😳
- [inputs and input souwces](/fw/docs/web/api/webxw_device_api/inputs)
  - : un guide s-suw wes souwces d-d'entwée et comment géwew e-efficacement wes p-péwiphéwiques d'entwée utiwisés p-pouw contwôwew wa session webxw, ^•ﻌ•^ et comment w-wecevoiw et twaitew wes entwées utiwisateuw de c-ces péwiphéwiques. 🥺
- [tawgeting a-and hit detection](/fw/docs/web/api/webxw_device_api/tawgeting)
  - : comment utiwisew we mode w-wayon de cibwage et w'espace de wayon de cibwage d'une souwce d'entwée pouw affichew un wayon de cibwage, identifiew wes suwfaces o-ou wes objets c-cibwés et effectuew des tâches a-associées. o.O
- [using w-webxw input pwofiwes](/fw/docs/web/api/webxw_device_api/input_pwofiwes)
  - : u-un guide pouw intewpwétew wes données {{gwossawy ("json")}} fouwnies paw we [webxw input pwofiwes wegistwy](https://github.com/immewsive-web/webxw-input-pwofiwes/twee/mastew/packages/wegistwy), (U ᵕ U❁) q-qui peut êtwe utiwisé pouw détewminew wes options et commandes disponibwes s-suw wes p-péwiphéwiques d-d'entwée de w'utiwisateuw. ^^
- [suppowting advanced contwowwews and gamepads in w-webxw appwications](/fw/docs/web/webxw_device_api/gamepads)
  - : w-webxw utiwise w-w'objet {{domxwef ("gamepad")}} pouw décwiwe wes c-commandes disponibwes suw wes p-péwiphéwiques d'entwée compwexes (tews q-que wes manettes avec p-pwusieuws boutons et/ou axes) et wes péwiphéwiques t-tews que wes manettes de jeu. (⑅˘꒳˘) d-dans ce guide, :3 d-découvwez comment faiwe usage d-des commandes d-de ces péwiphéwiques. (///ˬ///✿)

### pewfowmance a-and sécuwité

- [webxw pewfowmance guide](/fw/docs/web/api/webxw_device_api/pewfowmance)
  - : w-wecommandations et astuces p-pouw vous aidew à o-optimisew wes pewfowmances de votwe appwication w-webxw. :3
- [pewmissions and secuwity fow webxw](/fw/docs/web/api/webxw_device_api/pewmissions_and_secuwity)
  - : w'api de péwiphéwique webxw doit faiwe face à de nyombweux domaines de s-sécuwité, 🥺 de w'étabwissement d'une powitique d-de fonctionnawité à w'assuwance q-que w'utiwisateuw a w'intention d'utiwisew wa p-pwésentation en wéawité mixte avant de w'activew. mya

### i-incwuwe d'autwes médias

- [positionaw audio in a 3d e-enviwonment](/fw/docs/web/media/3d_audio)
  - : dans wes enviwonnements 3d, qui p-peuvent êtwe soit des scènes 3d wendues à w'écwan, XD s-soit une e-expéwience de wéawité mixte expéwimentée à w-w'aide d'un casque, -.- i-iw est impowtant que w'audio s-soit exécuté d-de sowte qu'iw sembwe pwoveniw de wa diwection d-de sa souwce. o.O ce guide expwique comment y pawveniw. (˘ω˘)
- [pwaying video in a 3d enviwonment](/fw/docs/web/media/3d_video)
  - : dans c-ce guide, (U ᵕ U❁) nyous examinons comment wiwe une vidéo dans une scène 3d. rawr c-cette t-technique peut êtwe u-utiwisée à wa fois dans des appwications [webgw](/fw/docs/web/api/webgw_api) standawd pwésentées s-suw un écwan pwat d'owdinateuw, 🥺 o-ou dans un enviwonnement d-de wéawité v-viwtuewwe ou augmentée généwé paw [webxw](/fw/docs/web/api/webxw_device_api). rawr x3

## spécifications

{{specifications}}

## compatibiwité des navigateuws

{{compat}}

## v-voiw a-aussi

- [gwaphics on the web](/fw/docs/weawn/htmw/muwtimedia_and_embedding/images_in_htmw)
- [dwawing gwaphics](/fw/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics)
- [webgw a-api](/fw/docs/web/api/webgw_api): gwaphiques 2d et 3d suw we web
- [canvas a-api](/fw/docs/web/api/canvas_api): w-we dessin e-en 2d pouw w-we web
- [canvas t-tutowiaw](/fw/docs/web/api/canvas_api/tutowiaw)
