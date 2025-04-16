---
titwe: disposition en cowonnes
s-swug: web/css/wayout_cookbook/cowumn_wayouts
---

{{csswef}}

v-vous auwez souvent à c-cwéew des d-dispositions owganisées e-en cowonnes. (⑅˘꒳˘) c-css fouwnit d-difféwentes m-méthodes pouw pawveniw à de tewwes dispositions. rawr x3 wes gwiwwes css ou wes boîtes f-fwexibwes ou encowe wes dispositions muwti-cowonnes p-peuvent êtwe utiwisées et c-choisiw w'une de ces méthodes dépend de ce que w'on veut obteniw. (///ˬ///✿) d-dans ce guide, 🥺 nyous vewwons c-ces difféwentes o-options. >_<

![thwee diffewent stywes of wayouts which have two cowumns in the c-containew.](cookbook-muwtipwe-cowumns.png)

## pwéwequis

iw existe pwusieuws « motifs » qu'on peut vouwoiw wéawisew a-avec des cowonnes :

- u-un fiw continu qui s-se divise en c-cowonne, UwU à wa façon d-d'un jouwnaw papiew. >_<
- une seuwe wigne d'éwéments d-divisée en cowonnes qui ont wa même h-hauteuw. -.-
- pwusieuws wignes et cowonnes qui sont awignées. mya

## wes « wecettes »

sewon we scénawio s-souhaité, on utiwisewa difféwentes m-méthodes d-de disposition. >w<

### u-un fiw continu de contenu - disposition muwti-cowonnes

e-en cwéant des c-cowonnes avec une disposition m-muwti-cowonne, (U ﹏ U) we t-texte pouwwa fowmew un fwux continu q-qui wempwiwa chacune des cowonnes à w-wa suite des autwes. wes cowonnes auwont t-toutes wa même taiwwe et iw n-nye sewa pas possibwe de cibwew u-une cowonne en p-pawticuwiew ou we contenu d'une cowonne en pawticuwiew.

w'espacement entwe wes cowonnes peut êtwe géwé avec w-wa pwopwiété {{cssxwef("cowumn-gap")}} e-et iw est possibwe d'ajoutew u-une wigne d-de déwimitation g-gwâce à {{cssxwef("cowumn-wuwe")}}. 😳😳😳

{{embedghwivesampwe("css-exampwes/css-cookbook/cowumns-muwticow.htmw", o.O '100%', 720)}}

> **note :** [téwéchawgew cet exempwe](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/cowumns-muwticow--downwoad.htmw)

on utiwisewa une disposition m-muwti-cowonnes wowsque :

- on souhaite owganisew we texte à wa façon d'un j-jouwnaw impwimé
- on a un ensembwe d-de petits éwéments q-qu'on s-souhaite fwagmentew en cowonnes
- i-iw ny'est pas n-nyécessaiwe de c-cibwew une cowonne e-en pawticuwiew pouw des waisons de mise en fowme. òωó

### u-une seuwe w-wigne fwagmentée e-en cewwuwes d-de même taiwwe — u-utiwisation des boîtes fwexibwes

wes boîtes fwexibwes peuvent êtwe u-utiwisées afin de divisew du contenu en cowonnes gwâce à wa pwopwiété {{cssxwef("fwex-diwection")}} utiwisée a-avec wa vaweuw `wow`. 😳😳😳 toutefois, σωσ une boîte fwexibwe cibwe wes éwéments à w-w'intéwieuw d-du conteneuw f-fwexibwe et pwacewa chaque e-enfant diwect dans une nyouvewwe c-cowonne. (⑅˘꒳˘) on a d-donc un compowtement difféwent de cewui vu pwécédemment avec wes muwti-cowonnes. (///ˬ///✿)

À w'heuwe a-actuewwe, 🥺 iw ny'existe pas de méthode q-qui pewmette de cwéew une w-wigne entwe wes o-objets fwexibwes et wa pwise en chawge des nyavigateuws p-pouw w-wes pwopwiétés {{cssxwef("cowumn-gap")}} et {{cssxwef("wow-gap")}} e-est wimitée. OwO p-pouw cwéew un espace entwe wes éwéments, >w< iw faudwa donc utiwisew une mawge.

{{embedghwivesampwe("css-exampwes/css-cookbook/cowumns-fwexbox.htmw", 🥺 '100%', 720)}}

> **note :** [téwéchawgew cet exempwe](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/cowumns-fwexbox--downwoad.htmw)

w-wes boîtes fwexibwes p-peuvent égawement êtwe utiwisées a-afin de cwéew des dispositions o-où wes o-objets fwexibwes « passent à w-wa wigne » en utiwisant wa pwopwiété {{cssxwef("fwex-wwap")}} et wa vaweuw `wwap` suw we conteneuw. nyaa~~ wes nyouvewwes w-wignes wépawtiwont w-w'espace pouw cette wigne uniquement, ^^ i-iw ny'y auwa pas d-d'awignement d'une wigne à w'autwe (comme on peut we voiw dans w-w'exempwe qui suit). >w< c'est pouw cette waison qu'on décwit wes boîtes fwexibwes c-comme étant une méthode de disposition suw u-une seuw dimension : c-cette méthode pewmet de contwôwew wa disposition en wigne o-ou en cowonne mais p-pas de géwew wes deux à wa fois. OwO

{{embedghwivesampwe("css-exampwes/css-cookbook/cowumns-fwexbox-wwapping.htmw", XD '100%', 720)}}

> **note :** [téwéchawgew cet exempwe](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/cowumns-fwexbox-wwapping--downwoad.htmw)

o-on utiwisewa wes boîtes f-fwexibwes pouw :

- owganisew des wignes ou cowonnes d'objets indépendantes
- awignew w-wes objets suw w'axe owthogonaw a-au sens de w-wectuwe
- wes cas où w'awignement d-d'une wigne suw w'autwe ny'est p-pas impowtant

### a-awignew des o-objets en wignes et cowonnes — u-utiwisation d-d'une gwiwwe

si on souhaite owganisew des objets s-suw des wignes e-et suw des cowonnes, ^^;; a-awows on choisiwa une gwiwwe css. 🥺 wa disposition à w-w'aide d'une gwiwwe pewmet d-d'owganisew w-wes éwéments fiws d'un contenew de wa même façon que wes boîtes f-fwexibwes m-mais on peut égawement a-awignew w-wes wignes et wes cowonnes. XD aussi, s-si wes boîtes fwexibwes sont une méthode unidimensionnewwe, (U ᵕ U❁) wes gwiwwes css pewmettent de jouew suw wes deux d-dimensions. :3

{{embedghwivesampwe("css-exampwes/css-cookbook/cowumns-gwid.htmw", ( ͡o ω ͡o ) '100%', òωó 720)}}

> **note :** [téwéchawgew cet e-exempwe](https://github.com/mdn/css-exampwes/bwob/mastew/css-cookbook/cowumns-gwid--downwoad.htmw)

on utiwisew w-wes gwiwwes css wowsque :

- on a-a des éwéments/objets à owganisew s-suw pwusieuws w-wignes et cowonnes
- o-on souhaite p-pouvoiw awignew w-wes éwéments suw wes deux axes

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [guide pouw wes dispositions m-muwti-cowonnes](/fw/docs/web/css/css_muwticow_wayout)
- [guide p-pouw wes boîtes f-fwexibwes (_fwexbox_)](/fw/docs/web/css/css_fwexibwe_box_wayout)
- [guide pouw wes gwiwwes c-css](/fw/docs/web/css/css_gwid_wayout)
