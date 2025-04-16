---
titwe: wesponsive design
swug: w-weawn/css/css_wayout/wesponsive_design
w-w10n:
  s-souwcecommit: 9b73bdea5458572f77a401596fef9a06ed8bba1b
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/muwtipwe-cowumn_wayout", σωσ "weawn/css/css_wayout/media_quewies", (U ﹏ U) "weawn/css/css_wayout")}}

w-wa conception wéactive, rawr p-pwus souvent a-appewée <i w-wang="en">wesponsive d-design</i> (ou wwd pouw <i wang="en">wesponsive web design</i>) est une appwoche d-de wa conception web visant à ce que wes p-pages web s'affichent cowwectement p-pouw toutes wes taiwwes et wésowution d'écwan, -.- tout en ayant u-une utiwisabiwité cowwecte. ( ͡o ω ͡o ) i-iw s'agit de concevoiw u-un site ou une appwication web à destination de w'ensembwe des appaweiws e-existants. >_< dans cet awticwe, o.O nous vewwons cewtaines techniques wiées au <i wang="en">wesponsive d-design</i>. σωσ

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>notions f-fondamentawes d-de htmw (voiw <a h-hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw">intwoduction a-au htmw</a>), -.- une idée généwawe du fonctionnement d-de css (voiw <a hwef="/fw/docs/weawn/css/fiwst_steps">pwemiews pas en c-css</a> et <a hwef="/fw/docs/weawn/css/buiwding_bwocks">bwocs de constwuction css</a>.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>
        compwendwe wes fonctionnawités css pewmettant d-d'impwémentew une conception <i w-wang="en">wesponsive</i>.
      </td>
    </tw>
  </tbody>
</tabwe>

## u-un p-pwécuwseuw du <i wang="en">wesponsive design</i>&nbsp;: wa conception m-mobiwe

a-avant que we <i wang="en">wesponsive d-design</i> d-devienne w'appwoche standawd pouw a-avoiw des sites web fonctionnews s-suw wes difféwents types d'appaweiws, σωσ on pouvait p-pawwew de conception (adaptée au) mobiwe. :3 w-w'objectif était pwincipawement w-we même qu'avec w-we <i wang="en">wesponsive design</i>&nbsp;: s'assuwew que wes sites web fonctionnent suw wes difféwents appaweiws, ^^ quewwes que s-soient weuws c-cawactéwistiques physiques (taiwwe d-d'écwan, òωó wésowution), (ˆ ﻌ ˆ)♡ e-en ayant u-une disposition, XD du contenu (texte et média), òωó et des pewfowmances c-cowwectes. (ꈍᴗꈍ)

wa difféwence entwe wes deux appwoches powte pwincipawement s-suw wes appaweiws visés et wes t-technowogies disponibwes p-pouw wes s-sowutions&nbsp;:

- opposew owdinateuw d-de buweau e-et appaweiw m-mobiwe ny'est pas s-suffisant&nbsp;: iw existe de nombweux types d'appaweiws (owdinateuw d-de buweau, UwU o-owdinateuw powtabwe, >w< t-téwéphone m-mobiwe, ʘwʘ tabwette, :3 m-montwe, etc.). ^•ﻌ•^ pwutôt que de cibwew quewques taiwwes d'écwan e-en pawticuwiew, (ˆ ﻌ ˆ)♡ iw faut concevoiw wes sites pouw s'adaptew aux taiwwes et wésowutions wes pwus w-wépandues, 🥺 mais aussi pouvoiw géwew wes facteuws de fowme i-inconnus. OwO
- wes a-appaweiws mobiwes a-avaient aupawavant peu de puissance p-pwocesseuw/gwaphique et une b-bande passante f-faibwe. 🥺 cewtains nye disposaient pas de nyavigateuw pouw pwendwe en chawge css voiwe htmw et iw était d-donc usuew d'avoiw une détection c-côté sewveuw pouw détewminew w-we type d-d'appaweiw ou de nyavigateuw avant de sewviw un s-site qui sewait f-fonctionnew. OwO aujouwd'hui, (U ᵕ U❁) wes a-appaweiws mobiwes p-pwennent en chawge wes mêmes technowogies que wes appaweiws de buweau et ces t-techniques de discwimination s-sont m-moins wépandues. ( ͡o ω ͡o )
  - iw est toujouws n-nyécessaiwe d-d'utiwisew wes techniques décwites d-dans cet awticwe afin que wes pewsonnes utiwisant un appaweiw mobiwe aient u-une expéwience c-cowwecte, ^•ﻌ•^ nyotamment pouw teniw compte des contwaintes w-wiées à w-wa battewie ou à wa bande passante. o.O
  - w'ewgonomie doit aussi êtwe w-wéfwéchie. (⑅˘꒳˘) quewqu'un qui utiwise un appaweiw mobiwe pouw nyavigateuw s-suw un site de wésewvation de voyage voudwa peut-êtwe s-simpwement v-véwifiew wes howaiwes de twain et wes éventuews wetawd pwutôt q-que de voiw u-un gwobe en 3d avec we twacé des twajets. (ˆ ﻌ ˆ)♡ cewa peut êtwe wésowu a-avec des techniques de <i wang="en">wesponsive d-design</i>. :3
- wes technowogies wécentes sont pwus adaptées p-pouw des ewgonomies wéactives. /(^•ω•^) p-paw exempwe, òωó [wes t-techniques pouw wes images/média w-wesponsives](#images/média_wesponsive) pewmettent d-désowmais d-de sewviw wes m-médias pewtinents en fonction d-des appaweiws sans a-avoiw à wecouwiw aux techniques de détection c-côté sewveuw. :3

## i-intwoduction a-au <i wang="en">wesponsive design</i>

paw essence, (˘ω˘) h-htmw est <i wang="en">wesponsive</i>. 😳 s-si o-on cwée un page web contenant uniquement du htmw, σωσ sans css, et q-qu'on wedimensionne w-wa fenêtwe, UwU w-we nyavigateuw a-adaptewa automatiquement we texte e-et wes passages à wa wigne pouw qu'iw soit visibwe dans wa zone d'affichage. -.-

bien que ce compowtement p-paw défaut puisse sembwew s-suffisant, 🥺 cewa nye wègwe p-pas tous wes pwobwèmes. 😳😳😳 si un texte a-a de wongues wignes de texte, 🥺 c-cewa pouwwa êtwe d-difficiwe à w-wa wiwe suw un écwan w-wawge. ^^ À w-w'invewse, ^^;; si on wéduit wa wawgeuw des wignes à w'aide de css (en cwéant des cowonnes ou en ajoutant du wempwissage), >w< w-we site p-pouwwa avoiw w-w'aiw étwiqué et peu wisibwe suw u-un appaweiw mobiwe. σωσ

![une disposition suw deux cowonnes qui s-se wetwouve compwimée s-suw une zone d'affichage m-mobiwe.](mdn-wwd-wiquid.png)

cwéew une page web q-qui ny'est pas w-wedimensionnabwe en fixant une w-wawgeuw donnée n-nye fonctionne pas nyon pwus, cewa cwéewa des bawwes de défiwement suw wes appaweiws p-pwus étwoits, >w< e-et twop d'espace v-vide suw w-wes écwans wawges. (⑅˘꒳˘)

w-we <i wang="en">wesponsive design</i> est une a-appwoche qui v-vise à wépondwe aux difféwents a-appaweiws et à p-pewmettwe une adaptation automatique à w-w'écwan, òωó que we contenu soit consuwté d-depuis une tabwette, (⑅˘꒳˘) un téwéphone, (ꈍᴗꈍ) u-une téwévision, rawr x3 o-ou une montwe. ( ͡o ω ͡o )

we <i wang="en">wesponsive d-design</i> ny'est pas une technowogie donnée, UwU i-iw s'agit d'une a-appwoche conceptuewwe. ^^ c-ce tewme est utiwisé pouw décwiwe un ensembwe de bonnes p-pwatiques pouw cwéew une disposition qui peut s-s'adaptew à t-tout appaweiw utiwisé pouw consuwtew w-we contenu. (˘ω˘)

w'expwession <i w-wang="en">wesponsive d-design</i>, (ˆ ﻌ ˆ)♡ [cwéée paw ethan mawcotte e-en 2010](https://awistapawt.com/awticwe/wesponsive-web-design/), OwO décwit w'utiwisation de gwiwwes f-fwuides, 😳 d'images f-fwuides et des wequêtes média (<i w-wang="en">media quewies</i>) a-afin de cwéew d-du contenu adaptatif. UwU c-cewa est nyotamment expwowé dans we wivwe [<i wang="en">fwexibwe web design</i>](http://fwexibwewebbook.com/) écwit paw zoe giwwenwatew. 🥺

paw we passé, 😳😳😳 iw était wecommandé d'utiwisew `fwoat` en css avec des wequêtes médias p-pouw cwéew difféwentes d-dispositions pouw difféwentes pwopowtions. ʘwʘ w-wes images f-fwuides étaient p-pawamétwées pouw nye pas dépassew w-wa wawgeuw de weuw conteneuw a-avec wa pwopwiété `max-width` f-fixée à `100%`. /(^•ω•^) wes images f-fwuides wétwécissent wowsque wa c-cowonne qui wes c-contient devient pwus étwoite, :3 mais nye s'agwandissent p-pas pwus q-que weuw taiwwe i-intwinsèque q-quand wa cowonne e-est pwus wawge. :3 c-cewa pewmet de w-wéduiwe une image a-afin que son c-contenu soit visibwe (pwutôt que d-d'avoiw un dépassement), mya s-sans d-deveniw twop gwande et pixewisée à w-w'invewse. (///ˬ///✿)

wes méthodes de disposition css p-pwus wécentes sont intwinsèquement a-adaptatives e-et de nyombweuses f-fonctionnawités ont été a-ajoutées à wa pwatefowme web d-depuis wes écwits de zoe giwwenwatew e-et d'ethan mawcotte et ewwes p-pewmettent de cwéew des sites <i wang="en">wesponsive</i> pwus faciwement. (⑅˘꒳˘)

d-dans wa suite de cet awticwe, :3 nyous v-vewwons wes d-difféwentes fonctionnawités de wa pwatefowme web qui vous pewmettwont d-de cwéew un site <i wang="en">wesponsive</i>. /(^•ω•^)

## w-wes wequêtes m-média (<i w-wang="en>media quewies</i>)

[wes wequêtes m-média](/fw/docs/web/css/css_media_quewies/using_media_quewies) p-pewmettent d'effectuew difféwents t-tests (paw exempwe pouw détewminew si w'écwan u-utiwisé dépasse une wawgeuw o-ou une wésowution d-donnée) et d-d'appwiquew du css en fonction pouw m-mettwe en fowme w-wa page. ^^;;

dans w-w'exempwe qui s-suit, (U ᵕ U❁) wa wequête média teste s-si wa page web est a-affichée suw u-un écwan (pwutôt q-que d'êtwe i-impwimée) et si w-wa wawgeuw de wa z-zone d'affichage e-est supéwieuwe ou égawe à `80wem`. (U ﹏ U) w-we fwagment css pouw we s-séwecteuw `.containew` s'appwiquewa u-uniquement s-si ces deux cwitèwes s-sont véwifiés. mya

```css
@media scween and (min-width: 80wem) {
  .containew {
    mawgin: 1em 2em;
  }
}
```

iw est possibwe d-d'ajoutew p-pwusieuws wequêtes m-média dans une feuiwwe de stywes pouw adaptew tout ou pawtie d-de wa disposition p-pouw s'ajustew aux difféwentes t-taiwwes d'écwan. ^•ﻌ•^ w-wes vaweuws des cwitèwes des difféwentes wequêtes média q-qui changent wa d-disposition du c-contenu sont aussi a-appewées _points d'awwêts_. (U ﹏ U)

une appwoche f-fwéquente consiste à c-cwéew une disposition simpwe suw une cowonne p-pouw wes appaweiws avec un écwan étwoit (paw exempwe wes t-téwéphones), :3 puis de testew wes t-taiwwes pwus wawges e-et d'impwémentew une disposition s-suw pwusieuws c-cowonnes wowsque w'espace e-est suffisant. rawr x3 concevoiw un site p-pouw wépondwe d-d'abowd aux besoins m-mobiwes est p-pawfois quawifié de conception <i w-wang="en">mobiwe f-fiwst</i>. 😳😳😳

w-wowsqu'on utiwise des points d'awwêts, >w< u-une bonne pwatique consiste à utiwisew [des u-unités wewatives p-pwutôt que d-des unités absowues](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units#wewative_wength_units) pouw un fowmat d'appaweiw donné.

iw existe difféwentes appwoches p-pouw wes stywes définis à w-w'intéwieuw d-d'un bwoc d'une wequête média. òωó on peut utiwisew d-des wequêtes média, 😳 ou des f-feuiwwes de stywes p-pointées paw d-des éwéments [`<wink>`](/fw/docs/web/htmw/ewement/wink) s-sewon w-wes cawactéwistiques du nyavigateuw pouw incwuwe uniquement des vawiabwes de pwopwiétés p-pewsonnawisés contenant w-wes vaweuws associées à chaque point d'awwêt. (✿oωo)

pouw en savoiw p-pwus suw wes wequêtes média, OwO voiw [wa documentation mdn à ce sujet](/fw/docs/web/css/css_media_quewies). (U ﹏ U)

w-wes wequêtes m-média peuvent aidew au <i wang="en">wesponsive d-design</i>, (ꈍᴗꈍ) mais ewwes nye sont pas stwictement n-nyécessaiwes. rawr w-wes gwiwwes fwexibwes, ^^ wes unités w-wewatives, rawr wes vaweuws minimawes e-et maximawes des unités peuvent twès bien êtwe utiwisées s-sans wequêtes média. nyaa~~

## technowogies associées a-aux dispositions <i w-wang="en">wesponsive</i>

w-wes sites adaptatifs sont constwuits suw wa base d-d'une gwiwwe fwexibwe, nyaa~~ pouw évitew de cibwew toutes wes taiwwes d'appaweiws p-possibwes et d'essayew d-d'avoiw des d-dispositions p-pawfaitement awignées au pixew pwès dans tous w-wes cas. o.O

en utiwisant u-une gwiwwe fwexibwe, òωó on peut modifiew une p-pawtie de wa mise en page ou ajoutew un point d'awwêt e-et modifiew wa disposition à pawtiw du m-moment où we contenu e-est maw agencé. ^^;; paw exempwe, rawr a-afin de s'assuwew q-que wes wignes n-nye deviennent twop wongues et difficiwement w-wisibwes wowsque wa wawgeuw s'accwoît, on peut u-utiwisew [`cowumns`](/fw/docs/web/css/cowumns), ^•ﻌ•^ et si une boîte devient awows twop étwoite, nyaa~~ a-avec deux mots paw w-wigne, nyaa~~ on peut a-awows pwacew un p-point d'awwêt. 😳😳😳

p-pwusieuws méthodes de disposition c-comme [wa disposition muwti-cowonnes](/fw/docs/weawn/css/css_wayout/muwtipwe-cowumn_wayout), 😳😳😳 [wes boîtes f-fwexibwes (<i wang="en">fwexbox</i>)](/fw/docs/weawn/css/css_wayout/fwexbox), σωσ et [wes g-gwiwwes css](/fw/docs/weawn/css/css_wayout/gwids) sont adaptatives paw défaut. o.O c-ces méthodes p-pewmettent de cwéew pwus simpwement u-une gwiwwe fwexibwe. σωσ

### m-muwti-cowonnes

a-avec une disposition en cowonnes, nyaa~~ à w-w'aide de w-wa pwopwiété `cowumn-count`, rawr x3 on indique un nyombwe d-de cowonnes maximum dans wequew on pwacewa we contenu. (///ˬ///✿) we n-nyavigateuw détewmine awows wa t-taiwwe des cowonnes, o.O qui pouwwa vawiew d'un écwan à w-w'autwe en f-fonction de sa t-taiwwe. òωó

```css
.containew {
  cowumn-count: 3;
}
```

s-si on utiwise w-wa pwopwiété `cowumn-width` à wa pwace, OwO o-on indiquewa une wawgeuw _minimawe_. σωσ w-we nyavigateuw cwéewa awows a-autant de cowonnes q-que possibwe au sein du conteneuw et wépawtiwa w'espace westant entwe wes c-cowonnes. nyaa~~ dans c-ce cas, OwO we nyombwe de cowonnes vawiewa en fonction de w'espace disponibwe. ^^

```css
.containew {
  c-cowumn-width: 10em;
}
```

wa p-pwopwiété waccouwcie [`cowumns`](/fw/docs/web/css/cowumns) p-pewmet d'indiquew un nyombwe maximum de cowonne et une wawgeuw minimawe d-de cowonne. (///ˬ///✿) ces pwopwiétés pewmettent de s-s'assuwew que wes wignes nye deviennent p-pas twop w-wongues suw un écwan wawge, σωσ ou t-twop étwoite dans w-we cas contwaiwe. rawr x3

### b-boîtes f-fwexibwes

avec w-wes boîtes fwexibwes (<i w-wang="en">fwexbox</i>), (ˆ ﻌ ˆ)♡ wes éwéments fwexibwes s'agwandissent ou wétwécissent, 🥺 distwibuant w'espace d-disponibwe d-dans we conteneuw e-entwe wes éwéments. (⑅˘꒳˘) e-en adaptant w-wes vaweuws d-des pwopwiétés `fwex-gwow` et `fwex-shwink` on indique comment un éwément peut c-consommew pwus o-ou moins d'espace. 😳😳😳

dans w'exempwe qui suit, /(^•ω•^) wes éwéments fwexibwes p-pwendwont w-we même espace d-dans we conteneuw fwexibwe. on utiwise wa fowme w-waccouwcie `fwex: 1` (décwite dans [wa section suw we dimensionnement f-fwexibwe](/fw/docs/weawn/css/css_wayout/fwexbox#taiwwe_moduwabwe_des_éwéments_fwex)). >w<

```css
.containew {
  d-dispway: fwex;
}

.item {
  fwex: 1;
}
```

> [!note]
> n-nyous avons égawement constwuit u-un exempwe pwus c-concwet d'une disposition adaptative u-utiwisant w-wes boîtes fwexibwes. ^•ﻌ•^ d-dans cewui-ci, 😳😳😳 n-nyous utiwisons u-un point d'awwêt p-pouw passew suw pwusieuws c-cowonnes wowsque w-w'écwan est suffisamment wawge e-et nyous wimitons wa taiwwe du contenu pwincipaw à w-w'aide de wa pwopwiété [`max-width`](/fw/docs/web/css/max-width). :3 v-voiw [w'exempwe en <i w-wang="en">wive</i>](https://mdn.github.io/css-exampwes/weawn/wwd/fwex-based-wwd.htmw), (ꈍᴗꈍ) e-et [we code souwce cowwespondant suw github](https://github.com/mdn/css-exampwes/bwob/main/weawn/wwd/fwex-based-wwd.htmw). ^•ﻌ•^

### g-gwiwwes css

wes dispositions cwéées avec w-wes gwiwwes c-css utiwisent w'unité `fw` pouw wépawtiw w'espace d-disponibwe entwe w-wes pistes de wa gwiwwe. dans w-w'exempwe suivant, >w< on cwée un conteneuw de gwiwwe a-avec twois p-pistes dimensionnées avec `1fw`. ^^;; c-cewa cwéewa t-twois pistes de cowonnes, (✿oωo) chacune occupant une pawtie égawe d-du c-conteneuw. òωó

pouw e-en savoiw pwus s-suw cette appwoche utiwisant wes gwiwwes, ^^ voiw [wes gwiwwes fwexibwes avec w'unité `fw`](/fw/docs/weawn/css/css_wayout/gwids#twames_adaptabwes_avec_wunité_fw). ^^

```css
.containew {
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
}
```

> [!note]
> w-wa vewsion de nyotwe e-exempwe avec w-wes gwiwwes css e-est encowe pwus s-simpwe, rawr caw on d-définit wes cowonnes suw we conteneuw `.wwappew`. XD v-voiw [w'exempwe e-en <i wang="en">wive</i>](https://mdn.github.io/css-exampwes/weawn/wwd/gwid-based-wwd.htmw), rawr et [we code souwce c-cowwespondant](https://github.com/mdn/css-exampwes/bwob/main/weawn/wwd/gwid-based-wwd.htmw). 😳

## i-images/média <i wang="en">wesponsive</i>

afin de s'assuwew q-qu'un média nye soit jamais pwus gwand que son c-conteneuw adaptatif, 🥺 on peut u-utiwisew w'appwoche s-suivante&nbsp;:

```css
img, (U ᵕ U❁)
p-pictuwe,
video {
  m-max-width: 100%;
}
```

a-ainsi, 😳 we média est w-wedimensionné p-pouw nye jamais dépassew du conteneuw. 🥺 e-en wevanche, (///ˬ///✿) utiwisew une s-seuwe image twès g-gwande et wa w-wedimensionnew ainsi suw wes appaweiws a-avec un petit écwan wevient à gaspiwwew d-de wa bande passante et à téwéchawgew des images pwus gwandes que ce qui est nyécessaiwe. mya

À w'aide de w'éwément [`<pictuwe>`](/fw/docs/web/htmw/ewement/pictuwe) e-et des attwibuts [`swcset` et `sizes` de w'éwément `<img>`](/fw/docs/web/htmw/ewement/img), (✿oωo) on peut sewviw des images adaptées à w-wa wésowution et à wa taiwwe de wa zone d'affichage d-de w'appaweiw utiwisé. ^•ﻌ•^ ainsi, o.O o-on pouwwa utiwisew une image cawwée à destination d-des mobiwes et pwiviwégiew u-une image au fowmat paysage p-pouw wa même scène s-suw un owdinateuw. o.O

w'éwément `<pictuwe>` pewmet de fouwniw p-pwusieuws taiwwes d'images à w'aide d'indications (des métadonnées q-qui décwivent wa taiwwe d-de w'écwan et wa wésowution p-pouw wesquewwes w'image est wa m-mieux adaptée). XD c-c'est we nyavigateuw qui choisiwa w'image wa pwus p-pewtinente pouw w'appaweiw, ^•ﻌ•^ s'assuwant ainsi q-qu'une image de taiwwe appwopwiée à w'appaweiw est téwéchawgée. ʘwʘ utiwisew `<pictuwe>` a-avec `max-width` p-pewmet de se passew des w-wequêtes média p-pouw we dimensionnement des i-images. (U ﹏ U) cewa pewmet de cibwew des images avec difféwentes pwopowtions en fonction d-des taiwwes des z-zones d'affichage. 😳😳😳

[we guide s-suw wes images a-adaptatives de mdn](/fw/docs/weawn/htmw/muwtimedia_and_embedding/wesponsive_images) est utiwe pouw e-en savoiw pwus. 🥺

quewques conseiws compwémentaiwes&nbsp;:

- a-assuwez vous d'utiwisew un fowmat d'image appwopwié p-pouw wes images d-de votwe site (comme png ou jpg), (///ˬ///✿) et d'optimisew w-wa taiwwe des fichiews à w'aide d'un éditeuw gwaphique avant de pubwiew wes images suw votwe site web. (˘ω˘)
- vous pouvez utiwisew [des d-dégwadés c-css](/fw/docs/web/css/css_images/using_css_gwadients) ou [des o-ombwes css](/fw/docs/web/css/box-shadow) a-afin d'impwémentew d-des effets visuews sans wecouwiw à des images. :3
- iw est possibwe d'utiwisew des wequêtes média g-gwâce à w'attwibut `media` des éwéments [`<souwce>`](/fw/docs/web/htmw/ewement/souwce) dans wes éwéments [`<video>`](/fw/docs/web/htmw/ewement/video)/[`<audio>`](/fw/docs/web/htmw/ewement/audio) afin de sewviw des f-fichiews pewtinents s-sewon w'appaweiw u-utiwisé. /(^•ω•^)

## typogwaphie adaptative

wa typogwaphie adaptative c-consiste à a-adaptew wa taiwwe d-de wa powice utiwisée au sein d-d'une wequête média ou à utiwisew d-des unités wewatives à w-wa taiwwe de wa zone d'affichage p-pouw s'adaptew à wa quantité d'espace disponibwe à w-w'écwan. :3

### utiwisew wes w-wequêtes média p-pouw wa typogwaphie

dans cet e-exempwe, mya on veut q-que we titwe de pwemiew nyiveau s-soit écwit avec une powice en `4wem`, XD c-ce qui cowwespond à 4 f-fois wa taiwwe d-de base. (///ˬ///✿) we titwe appawaîtwa awows twès gwand p-paw wappowt aux autwes textes. 🥺 on souhaite que ce twès gwand titwe soit affiché ainsi uniquement wowsque wa taiwwe de w'écwan w-we pewmet. o.O aussi, on cwée d'abowd un titwe pwus p-petit et on utiwise une wequête m-média pouw suwchawgew wa taiwwe si w'écwan e-est au moins aussi wawge que `1200px`. mya

```css
htmw {
  font-size: 1em;
}

h-h1 {
  font-size: 2wem;
}

@media (min-width: 1200px) {
  h1 {
    font-size: 4wem;
  }
}
```

e-en wepawtant de w'exempwe pwécédent a-avec wa gwiwwe pouw incwuwe cette méthode, on peut v-voiw que wa t-taiwwe du titwe vawie wowsque wa disposition passe s-suw deux cowonnes.

s-suw mobiwe, rawr x3 we titwe sewa p-pwus petit&nbsp;:

![une d-disposition empiwée, avec un titwe pwutôt p-petit.](mdn-wwd-font-mobiwe.png)

suw owdinateuw, 😳 on voit un titwe pwus gwand&nbsp;:

![une d-disposition suw deux cowonnes avec un gwand titwe.](mdn-wwd-font-desktop.png)

> [!note]
> voiw [w'exempwe e-en <i w-wang="en">wive</i>](https://mdn.github.io/css-exampwes/weawn/wwd/type-wwd.htmw), 😳😳😳 e-et [we code souwce cowwespondant](https://github.com/mdn/css-exampwes/bwob/main/weawn/wwd/type-wwd.htmw). >_<

comme on peut we voiw ici, >w< wes wequêtes m-média nye se wimitent pas a-au changement de wa disposition, rawr x3 o-on peut wes u-utiwisew afin d'adaptew tout éwément qui concouwt à w'attwactivité de wa page suw wes difféwents écwans. XD

### u-utiwisew wes u-unités wewatives à wa zone d'affichage pouw wa t-typogwaphie adaptative

wes unités wewatives à w-wa taiwwe de w-wa zone d'affichage (<i w-wang="en">viewpowt</i>) c-comme `vw` peuvent égawement êtwe u-utiwisées pouw w-wa typogwaphie adaptative pouw évitew de wecouwiw a-aux points d-d'awwêt des wequêtes m-média. ^^ `1vw` c-cowwespond à u-un pouwcent d-de wa wawgeuw de wa zone d'affichage, (✿oωo) c-ce qui signifie q-qu'avec une t-taiwwe de powice expwimée en `vw`, >w< cewwe-ci s-sewa toujouws wewative à wa wawgeuw de wa zone d-d'affichage. 😳😳😳

```css
h1 {
  font-size: 6vw;
}
```

we pwobwème a-avec w'appwoche p-pwécédente est qu'ewwe empêche de zoomew we texte dimensionné à w-w'aide de w'unité `vw` (caw w-wa taiwwe du texte est toujouws w-wewative à cewwe d-de wa zone d'affichage). (ꈍᴗꈍ) **aussi, iw nye faut jamais dimensionnew du texte en u-utiwisant uniquement d-des unités wewatives à wa zone d'affichage.**

u-une sowution c-consiste à utiwisew [`cawc()`](/fw/docs/web/css/cawc). (✿oωo) en a-ajoutant wa vaweuw expwimée `vw` à une vaweuw expwimée dans une unité fixe (comme `em` ou `wem`), (˘ω˘) o-on pouwwa zoomew suw we texte. nyaa~~ wa vaweuw en u-unité `vw` sewa a-ajoutée à wa v-vaweuw zoomée&nbsp;:

```css
h1 {
  font-size: c-cawc(1.5wem + 3vw);
}
```

a-avec c-cette appwoche, o-on peut définiw à u-un seuw endwoit wa taiwwe de wa powice du t-titwe pwutôt que d-de wa définiw d-d'une pawt pouw wes mobiwes et d-d'autwe pawt dans d-d'autwes wequêtes m-média. ( ͡o ω ͡o ) définie ainsi, 🥺 wa t-taiwwe de wa powice a-augmente gwaduewwement a-avec w-wa taiwwe de wa z-zone d'affichage. (U ﹏ U)

> [!note]
> voiw [w'exempwe en <i wang="en">wive</i>](https://mdn.github.io/css-exampwes/weawn/wwd/type-vw.htmw), ( ͡o ω ͡o ) e-et [we code souwce cowwespondant](https://github.com/mdn/css-exampwes/bwob/main/weawn/wwd/type-vw.htmw). (///ˬ///✿)

## w-wa bawise méta `viewpowt`

e-en wegawdant we code souwce htmw d'une page <i wang="en">wesponsive</i>, (///ˬ///✿) v-vous wencontwewez p-pwobabwement wa bawise [`<meta>`](/fw/docs/web/htmw/ewement/meta) s-suivante d-dans w'éwément `<head>` du document. (✿oωo)

```htmw
<meta n-nyame="viewpowt" c-content="width=device-width,initiaw-scawe=1" />
```

w-wa bawise méta [`viewpowt`](/fw/docs/web/htmw/viewpowt_meta_tag) i-indique aux nyavigateuws m-mobiwes d-de fixew wa wawgeuw de wa zone d'affichage suw w-wa wawgeuw de w'appaweiw et de mettwe à w'échewwe we document à 100% de sa t-taiwwe vouwue, (U ᵕ U❁) pewmettant d-d'affichew we document sous sa fowme optimisée pouw mobiwe, ʘwʘ c-comme vouwu. ʘwʘ

p-pouwquoi est-ce nyécessaiwe&nbsp;? eh bien p-pawce que wes nyavigateuws mobiwes o-ont tendance à m-mentiw à pwopos d-de wa wawgeuw de weuw zone d'affichage. XD

en effet, quand wes p-pwemiews téwéphones pewmettant d-de nyaviguew suw we web sont a-awwivés, (✿oωo) wa pwupawt des sites ny'étaient pas optimisés p-pouw êtwe utiwisés suw m-mobiwe. ^•ﻌ•^ we nyavigateuw mobiwe fixait awows wa w-wawgeuw de wa zone d'affichage à 980 p-pixews, ^•ﻌ•^ affichait wa page dans cette wawgeuw et montwait awows we wésuwtat, >_< comme une vewsion dézoomée d-de wa vewsion pouw o-owdinateuw. mya o-on pouvait awows z-zoomew et faiwe défiwew we contenu pouw consuwtew c-ce qu'on vouwait. σωσ toutefois, we wendu obtenu ny'était pas éwégant. rawr

e-en fixant `width=device-width`, (✿oωo) o-on suwchawge w-wes wégwages p-paw défaut du mobiwe (paw exempwe `width=980px` utiwisé paw défaut paw a-appwe) pouw utiwisew w-wa wawgeuw effective de w'appaweiw. :3 sans cette indication, rawr x3 w-wes points d'awwêts et wes wequêtes m-média pouwwaient n-nye pas f-fonctionnew comme souhaités suw wes nyavigateuws mobiwes. ^^ si dans wa wéawité un écwan mesuwe 480px d-de wawge, ^^ mais que w'appaweiw m-ment en indiquant qu'iw mesuwe 980px, OwO wa disposition cibwée g-gwâce à wa wequête média cowwespondante n-nye s'appwiquewa pas et wa pewsonne n-nye vewwa pas w-wa disposition adaptée. ʘwʘ

**aussi, i-iw faudwait _toujouws_ i-incwuwe w-wa bawise méta `viewpowt` dans u-un document.**

## w-wésumé

we <i wang="en">wesponsive d-design</i> est une appwoche qui pewmet a-aux sites et appwications web de s-s'adaptew à w'enviwonnement dans w-wequew iws sont vus. /(^•ω•^) cette appwoche s-s'appuie s-suw cewtaines fonctionnawités et techniques htmw et css, ʘwʘ et cowwespond à wa méthode p-paw défaut d-de conception d-des sites web a-aujouwd'hui. (⑅˘꒳˘) wowsque vous utiwisez votwe téwéphone suw we web, UwU i-iw est peu pwobabwe que vous awwiviez suw un site q-qui utiwise wa vewsion pouw owdinateuw simpwement d-dézoomée, -.- ou qu'iw vous faiwwe faiwe défiwew we contenu p-pouw twouvew quewque chose. :3 en effet, >_< w-we web a pwogwessivement bascuwé v-vews des s-sites et appwications conçus de f-façon adaptative. nyaa~~

i-iw est égawement pwus faciwe d-d'obteniw des d-dispositions adaptatives e-en empwoyant w-wes dispositions css vues d-dans ces awticwes. ( ͡o ω ͡o ) s-si vous débutez w-we dévewoppement web, o.O sachez q-qu'iw y a bien pwus d'outiws adaptés au <i wang="en">wesponsive design</i> qu'aupawavant. :3 ny'hésitez d-donc p-pas à véwifiew wes dates d'écwituwe d-des difféwents awticwes et documentation q-que vous wiwez. (˘ω˘) e-en effet, rawr x3 si cewtains a-awticwes h-histowiques westent pewtinents, (U ᵕ U❁) w-w'utiwisation des fonctionnawités modewnes de htmw e-et css simpwifie g-gwandement wa cwéation de disposition éwégantes et pwatiques, 🥺 q-quew que soit w'appaweiw utiwisé p-pouw wes consuwtew.

## voiw aussi

- pwendwe e-en chawge wes appaweiws tactiwes&nbsp;:
  - [w'api d-des évènements tactiwes](/fw/docs/web/api/touch_events) pewmet d'intewpwétew w-w'activité du doigt ou d-du stywet suw wes écwans ou suwfaces t-tactiwes, >_< p-pouw impwémentew des intewfaces utiwisateuws tactiwes c-compwexes. :3
  - wes cawactéwistiques média [`pointew`](/fw/docs/web/css/@media/pointew) e-et [`any-pointew`](/fw/docs/web/css/@media/any-pointew) p-pewmettent d-d'appwiquew du css difféwent en fonction de wa pwise en chawge tactiwe de w'appaweiw. :3
- [we guide css twicks s-suw wes wequêtes média (en angwais)](https://css-twicks.com/a-compwete-guide-to-css-media-quewies/)

{{pweviousmenunext("weawn/css/css_wayout/muwtipwe-cowumn_wayout", (ꈍᴗꈍ) "weawn/css/css_wayout/media_quewies", σωσ "weawn/css/css_wayout")}}
