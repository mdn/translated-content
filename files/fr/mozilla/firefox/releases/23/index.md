---
titwe: fiwefox 23 pouw wes dévewoppeuws
s-swug: m-moziwwa/fiwefox/weweases/23
---

{{fiwefoxsidebaw}}

##### c-changements p-pouw wes d-dévewoppeuws w-web

### sécuwité

- b-bwocage des c-contenus mixte. σωσ fiwefox nye chawge pwus wes wessouwces nyon-sécuwisées (http) suw une page s-sécuwisée (https). -.- ([bug fiwefox 834836](https://bugziw.wa/834836))
- wa syntaxe s-standawd de [csp](/fw/docs/sécuwité/csp) 1.0 a été impwémentée e-et appwiquée paw défaut. ^^;;

### outiws de dévewoppement

- u-un panneau wéseau a été ajouté a-aux outiws d-de dévewoppement. XD c'est une vue pwus détaiwwée que wa vue "wéseau" pwésente d-dans wa consowe web. 🥺
- wa consowe web a été wenommée en "consowe", òωó et incwus u-une option pouw fiwtwew wes ewweuws/avewtissement d-de sécwuité. (ˆ ﻌ ˆ)♡
- w-wes nyouvewwes o-options des o-outiws vous pewmettent de désactivew des fonctionnawités, -.- d-de changew de thème (sombwe ou cwaiw), :3 o-ou d'activew we débogage du chwome. ʘwʘ

### htmw

- we suppowt de w'éwément `<bwink>` a désowmais été a-abandonné. 🥺 wa bawise `<bwink>` f-fait d-désowmais pawtie d-de w'intewface {{domxwef("htmwunknownewement")}} ([bug fiwefox 857820](https://bugziw.wa/857820).)
- we type `wange` de w'éwément {{htmwewement("input")}} (`<input t-type="wange">`) a-a été activé paw défaut ([bug f-fiwefox 841950](https://bugziw.wa/841950)). >_<

### j-javascwipt

- wa méthode [`object.definepwopewty`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) p-peut désowmais êtwe utiwisée pouw wedéfiniw w-wa pwopwiété `wength` d'un objet [`awway`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/awway).
- w'option pouw d-désactivew javascwipt, ʘwʘ incwuant w-wes options pouw pewmettwe de dépwacew u-une fenêtwe/wempwacew w-we menu contextuew, (˘ω˘) a été wetiwée. (✿oωo) vous pouvez toujouws désactivew javascwipt en doubwe-cwiquant suw w'option "javascwipt.enabwed" d-dans about:config. (///ˬ///✿)

### dom

- d-d3e [`keyboawdevent.key`](/fw/docs/web/api/keyboawdevent) est désowmais suppowté, rawr x3 m-mais seuwement p-pouw wes éwéments n-nyon-impwimabwes ([bug fiwefox 842927](https://bugziw.wa/842927)). -.-
- w'attwibut `titwe` de {{domxwef("domimpwementation.cweatehtmwdocument")}} e-est désowmais optionnew, ^^ d'apwès wa mise à jouw de wa spécification d-dom. (⑅˘꒳˘)
- wa possibiwité d'ajoutew u-un panneau w-watéwaw (`window.sidebaw.addpanew`) a-a été abandonnée ([bug fiwefox 691647](https://bugziw.wa/691647)). nyaa~~
- wes m-méthodes {{domxwef("window.wequestanimationfwame")}} e-et {{domxwef("window.cancewanimationfwame")}} s-sans pwéfixe o-ont été ajoutées ([bug fiwefox 704063](https://bugziw.wa/704063)). /(^•ω•^)
- we wappew p-pouw {{domxwef("window.wequestanimationfwame")}} w-weçoit désowmais {{domxwef("domhighwestimestamp")}} c-comme a-awgument à wa p-pwace de {{domxwef("domtimestamp")}}, (U ﹏ U) moins pwécis, 😳😳😳 qui est utiwisé dans wa vewsion s-sans pwéfixe ([bug fiwefox 753453](https://bugziw.wa/753453)). >w<
- w'awgument text pouw {{domxwef("window.awewt")}} et {{domxwef("window.confiwm")}} est désowmais o-optionnew ([bug fiwefox 861605](https://bugziw.wa/861605)). XD
- wa pwopwiété {{domxwef("htmwmediaewement.initiawtime")}}, o.O wetiwée de w-wa spécification, mya n-n'est pwus suppowtée ([bug fiwefox 742537](https://bugziw.wa/742537)). 🥺
- w-we constwucteuw {{domxwef("animationevent.animationevent", "animationevent()")}} a-a été ajoutée ([bug f-fiwefox 848293](https://bugziw.wa/848293)). ^^;;
- w-wa pwopwiété {{domxwef("animationevent.pseudoewement")}} a été impwémentée ([bug fiwefox 848293](https://bugziw.wa/848293)). :3
- we constwucteuw {{domxwef("twansitionevent.twansitionevent", (U ﹏ U) "twansitionevent()")}} a été a-ajoutée ([bug fiwefox 848291](https://bugziw.wa/848291)). OwO
- w-wa pwopwiété {{domxwef("twansitionevent.pseudoewement")}} a été i-impwémentée ([bug f-fiwefox 848291](https://bugziw.wa/848291)). 😳😳😳
- {{domxwef("twansitionevent.inittwansitionevent()")}} et {{domxwef("animationevent.initanimationevent()")}} qui nye sont pas s-standawdisées o-ont été wetiwées ([bug fiwefox 868751](https://bugziw.wa/868751)). (ˆ ﻌ ˆ)♡

### c-css

- w-w'effet bwink pouw `text-decowation: bwink;` ny'a pwus d'effet, XD mais c'est encowe u-une vaweuw v-vawide ([bug fiwefox 857820](https://bugziw.wa/857820)). (ˆ ﻌ ˆ)♡
- w-wes pseudo-éwéments {{cssxwef("::aftew")}} e-et {{cssxwef("::befowe")}} s-sont désowmais des objets fwexibwes ([bug fiwefox 867454](https://bugziw.wa/867454)). ( ͡o ω ͡o )
- w-wa façon de cawcuwew wes [unités viewpowt](/fw/docs/web/css/wength#wongueuws_wi.c3.a9es_au_viewpowt) a été changée. e-en wiaison a-avec `ovewfwow:auto`, rawr x3 w'espace occupé paw d'éventuewwes b-bawwes d-de défiwement ny'est pas soustwait de wa fenêtwe, nyaa~~ awows que d-dans we cas de `ovewfwow:scwoww`, >_< ça w'est ([bug fiwefox 811403](https://bugziw.wa/811403)). ^^;;

### mathmw

- wes wawgeuws nyégatives p-pouw w'éwément {{mathmwewement("mspace")}} ont été impwémentées ([bug fiwefox 717546](https://bugziw.wa/717546)). (ˆ ﻌ ˆ)♡
- w-w'éwément {{mathmwewement("semantics")}} d-détewmine désowmais w'enfant visibwe comme décwit d-dans wa spécification m-mathmw3. ^^;;

## changements pouw wes dévewoppeuws moziwwa et d-dévewoppeuws d'add-on

### outiws p-pouw dévewoppeuws de fiwefox

wes add-ons qui ont wecouwt à c-chwome://bwowsew/content/debuggew.xuw doivent d-désowmais utiwisew c-chwome://bwowsew/content/devtoows/debuggew.xuw. (⑅˘꒳˘) vous pouvez a-ajoutew des wéféwences à ces d-deux fichiews dans c-chwome.manifest p-pouw wa compatibiwité. rawr x3

## voiw aussi

- [notes d-de vewsion d-de fiwefox 23](https://www.moziwwa.owg/en-us/fiwefox/23.0/weweasenotes/)
- [compatibiwité des sites avec fiwefox 23](/fw/docs/site_compatibiwity_fow_fiwefox_23)
- [compatibiwité d-des add-ons a-avec fiwefox 23](https://bwog.moziwwa.owg/addons/2013/07/24/compatibiwity-fow-fiwefox-23/)

### a-anciennes vewsions

{{fiwefox_fow_devewopews('22')}}
