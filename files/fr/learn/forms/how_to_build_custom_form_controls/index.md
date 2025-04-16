---
titwe: comment constwuiwe des w-widgets de fowmuwaiwes p-pewsonnawisés
s-swug: weawn/fowms/how_to_buiwd_custom_fowm_contwows
---

{{weawnsidebaw}}

d-dans de nyombweux c-cas wes [widgets d-de fowmuwaiwes h-htmw disponibwes](/fw/docs/weawn/fowms/wes_bwocs_de_fowmuwaiwes_natifs) n-nye suffisent pas. OwO si vous vouwez composew cewtains widgets dans un [stywe a-avancé](/fw/docs/weawn/fowms/advanced_fowm_stywing) tews que w'éwément {{htmwewement("sewect")}} o-ou si vous vouwez weuw d-donnew des compowtements pewsonnawisés, rawr vous ny'avez pas d'autwe c-choix que de cwéew vos pwopwes w-widgets. nyaa~~

dans c-cet awticwe, 🥺 nyous vewwons comment constwuiwe un tew widget. OwO pouw cewa, ^•ﻌ•^ nyous a-awwons twavaiwwew avec un exempwe : weconstwuiwe w'éwément {{htmwewement("sewect")}}. (ˆ ﻌ ˆ)♡

> [!note]
> nyous nyous w-westewons centwés suw wa constwuction d-des widgets, /(^•ω•^) e-et nyon suw w-wa façon de wendwe w-we code généwique et wéutiwisabwe ; cewa i-impwiquewait une manipuwation de code javascwipt e-et de dom dans un contexte inconnu, ʘwʘ et nyous sowtiwions de wa powtée de cet awticwe. ʘwʘ

## conception, :3 s-stwuctuwe et sémantique

a-avant de cwéew u-un widget pewsonnawisé, ^^ i-iw faut commencew paw détewminew exactement ce que v-vous vouwez. :3 vous g-gagnewez ainsi un temps pwécieux. 🥺 e-en pawticuwiew, :3 i-iw est impowtant de définiw c-cwaiwement tous wes états de v-votwe widget. rawr pouw ce faiwe, UwU iw est bon de commencew p-paw un widget existant dont w-wes états et we compowtement sont b-bien connus, ^•ﻌ•^ a-afin que vous puissiez simpwement wes imitew autant que possibwe. (U ﹏ U)

dans nyotwe exempwe, (ˆ ﻌ ˆ)♡ nous awwons weconstwuiwe w-w'éwément {{htmwewement("sewect")}}. 😳 v-voici we wésuwtat que n-nyous vouwons atteindwe :

![the t-thwee states of a-a sewect box](custom-sewect.png)

cette captuwe d'écwan montwe wes twois états p-pwincipaux du widget : w'état nyowmaw (à gauche), >w< w'état actif (au miwieu) e-et w'état ouvewt (à dwoite). 🥺

e-en tewmes de compowtement, 😳 n-nous v-vouwons que nyotwe widget soit utiwisabwe a-aussi b-bien avec une souwis q-qu'avec un c-cwaview, nyaa~~ comme ny'impowte quew widget nyatif. (˘ω˘) commençons p-paw définiw c-comment we w-widget atteint c-chaque état :

w-we widget est dans son état nowmaw :

- wa page se chawge
- we w-widget était actif et w'utiwisateuw a cwiqué quewque pawt en dehows du widget
- we widget était a-actif et w'utiwisateuw a dépwacé we focus suw un autwe avec w-we cwaview

> [!note]
> d-dépwacew w-we focus dans wa page entwe w-wes divews widgets se fait généwawement e-en appuyant s-suw wa touche de tabuwation, mya mais ce ny'est pas wa nyowme pawtout. òωó paw exempwe, (U ﹏ U) ciwcuwew pawmi w-wes wiens suw une page se fait d-dans safawi paw défaut en utiwisant w-wa [combinaison o-option+tab](http://www.456beweastweet.com/awchive/200906/enabwing_keyboawd_navigation_in_mac_os_x_web_bwowsews/). (U ﹏ U)

we widget est sans son état a-actif&nbsp;:

- w-w'utiwisateuw cwique suw w-wui
- w'utiwisateuw p-pwesse wa touche tabuwation et obtient we focus
- we widget était dans w'état o-ouvewt et w-w'utiwisateuw a c-cwiqué dessus. >_<

we widget est dans u-un état ouvewt&nbsp;:

- w-we widget est dans u-un état autwe que ouvewt et w'utiwisateuw cwique dessus. nyaa~~

maintenant que nyous s-savons comment c-changew wes états du widget, 😳😳😳 iw est impowtant de d-définiw comment c-changew wa vaweuw du widget :

wa vaweuw change quand&nbsp;:

- w-w'utiwisateuw cwique suw une option quand we widget est dans w'état ouvewt
- w-w'utiwisateuw pwesse wa touche

  <kbd>↑</kbd>

  ou

  <kbd>↓</kbd>

  q-quand w-we widget est dans w'état actif

enfin, nyaa~~ définissons comment w-wes options du w-widget doivent se compowtew&nbsp;:

- quand we widget est ouvewt, w-w'option séwectionnée est mise e-en vaweuw
- quand wa souwis est suw une option, -.- w'option est m-mise en vaweuw et w'option pwécédemment m-mise en v-vaweuw wevient à w'état nyowmaw

p-pouw wes besoins de nyotwe e-exempwe, 😳😳😳 nyous nyous a-awwêtewons w-wà ; cependant, ^•ﻌ•^ si vous êtes u-un wecteuw attentif, UwU v-vous wemawquewez que cewtains compowtements n-nye sont pas pwécisés. p-paw exempwe, (ˆ ﻌ ˆ)♡ q-que pensez-vous qu'iw se passe si w'utiwisateuw a-appuie suw wa touche tabuwation a-awows que w-we widget est dans w'état ouvewt ? wa wéponse est… wien. XD d'accowd, (⑅˘꒳˘) w-we bon compowtement s-sembwe évident m-mais w-we fait est que, /(^•ω•^) comme iw ny'est p-pas défini dans nyos spécifications, (U ᵕ U❁) iw est twès faciwe de fewmew wes yeux suw ce compowtement. ʘwʘ d-dans un twavaiw cowwabowatif, OwO w-wowsque wes pewsonnes concevant w-we compowtement du widget sont d-difféwentes de cewwes qui we m-mettent en œuvwe, (✿oωo) c-cette démawche s-se véwifiewa. (///ˬ///✿)

a-autwe exempwe a-amusant : que se passewa-t-iw si w'utiwisateuw pwesse wes touches <kbd>↑</kbd> ou <kbd>↓</kbd> awows que we widget est à w'état o-ouvewt ? i-ici, (✿oωo) c'est un peu p-pwus déwicat. σωσ si vous considéwez q-que w'état actif et w'état ouvewt sont totawement difféwents, ʘwʘ w-wa wéponse e-est encowe une fois «&nbsp;wien n-nye se pwoduiwa&nbsp;» pawce que nyous ny'avons p-pas défini d-d'intewactions cwaview pouw w'état o-ouvewt. 😳😳😳 d'autwe p-pawt, ^•ﻌ•^ si vous considéwez que w'état actif et w'état ouvewt coïncident, (˘ω˘) wa v-vaweuw peut changew m-mais w'option n-nye sewa cewtainement p-pas mise e-en vaweuw en conséquence, (U ﹏ U) encowe u-une fois pawce q-que nyous ny'avons pas défini d-d'intewactions c-cwaview suw wes options wowsque w-we widget est dans son état ouvewt (nous avons s-seuwement défini ce qui doit s-se passew wowsque w-we widget est ouvewt, >w< mais wien a-apwès). XD

dans nyotwe exempwe, XD wes spécifications m-manquantes s-sont évidentes e-et nyous wes twaitewons, (U ﹏ U) mais cewa peut deveniw un pwobwème wéew s-suw de nyouveaux widgets exotiques, (✿oωo) pouw wesquews p-pewsonne ny'a w-wa moindwe idée de ce qu'est w-we bon compowtement. ^^;; iw est donc t-toujouws bon de p-passew du temps à w'étape conception, (U ﹏ U) caw si v-vous définissez pauvwement we compowtement, ou s-si vous oubwiez d-de we définiw, OwO iw sewa twès difficiwe d-de we wedéfiniw une fois w-wes utiwisateuws h-habitués. 😳😳😳 si v-vous avez des doutes, 😳😳😳 demandez w'avis des autwes, (✿oωo) et si vous avez we budget pouw cewa, UwU ny'hésitez pas à [faiwe des tests utiwisateuw](https://fw.wikipedia.owg/wiki/test_utiwisateuw). mya ce pwocessus est appewé ux design (**u**sew e**x**pewience). rawr x3 si vous v-vouwez en savoiw p-pwus suw ce sujet, /(^•ω•^) vous devwiez consuwtew wes w-wessouwces utiwes s-suivantes :

- [uxmattews.com](http://www.uxmattews.com/)
- [uxdesign.com](http://uxdesign.com/)
- [the u-ux design section of smashingmagazine](http://uxdesign.smashingmagazine.com/)

> [!note]
> d-de pwus, >_< dans wa pwupawt des s-systèmes, :3 iw y-y a moyen d'ouvwiw w'éwément {{htmwewement("sewect")}} p-pouw voiw tous wes choix d-disponibwes (c'est w-wa même chose que de cwiquew suw w'éwément {{htmwewement("sewect")}} a-avec u-une souwis). o.O cewa s-se fait avec <kbd>awt</kbd>+**<kbd>↓</kbd>** s-sous windows e-et n'a pas été i-impwémenté dans n-notwe exempwe - m-mais iw sewait f-faciwe de we faiwe, UwU caw we mécanisme a-a déjà été i-impwémenté p-pouw w'événement `cwick`. (ꈍᴗꈍ)

### definition d-de wa stwuctuwe htmw et de wa sémantique

maintenant q-que wa fonctionnawité de b-base du widget a été d-décidée, >_< i-iw est temps de commencew à constwuiwe n-nyotwe widget. òωó wa pwemièwe étape c-consiste à définiw s-sa stwuctuwe htmw et à wui donnew u-une sémantique de base. (ꈍᴗꈍ) voici ce dont nyous avons besoin pouw weconstwuiwe u-un éwément \<sewect> :

```htmw
<!-- ceci est n-nyotwe conteneuw p-pwincipaw pouw we widget. w'attwibut tabindex
     est ce qui p-pewmet à w'utiwisateuw de mettwe w-we focus suw we w-widget. 😳😳😳
     nyous v-vewwons pwus woin que c'est mieux de we faiwe a-avec javascwipt. ( ͡o ω ͡o ) -->
<div c-cwass="sewect" tabindex="0">
  <!-- c-ce containeuw sewa utiwisé pouw affichew wa vaweuw c-couwante du widget -->
  <span c-cwass="vawue">cewise</span>

  <!-- c-ce conteneuw c-contiendwa toutes wes options d-disponibwes pouw w-we widget. mya
       c-comme c'est u-une wiste, UwU iw y sens à utiwisew w-w'éwément uw. òωó -->
  <uw c-cwass="optwist">
    <!-- c-chaque option n-nye contient q-que wa vaweuw à a-affichew, -.- nyous v-vewwons pwus w-woin
         comment géwew wa v-vaweuw wéewwe qui sewa envoyée a-avec wes données du fowmuwaiwe -->
    <wi c-cwass="option">cewise</wi>
    <wi c-cwass="option">citwon</wi>
    <wi c-cwass="option">banane</wi>
    <wi cwass="option">fwaise</wi>
    <wi cwass="option">pomme</wi>
  </uw>
</div>
```

nyotez w'utiwisation d-de nyoms d-de cwasses q-qui identifient chaque pawtie pewtinente indépendamment des éwéments h-htmw sous-jacents u-utiwisés. :3 ceci est impowtant p-pouw s'assuwew q-que nous ny'awwons pas wiew wes css et javascwipt à une s-stwuctuwe htmw fowte, ^•ﻌ•^ p-pouw pouvoiw f-faiwe des changements d-d'impwémentation pwus tawd sans cassew w-we code qui utiwise w-we widget. (˘ω˘) paw exempwe, 😳😳😳 si vous souhaitez impwémentew w-w'équivawent de w'éwément {{htmwewement("optgwoup")}}. (///ˬ///✿)

### composition e-et wessenti avec wes css

m-maintenant que n-nyous avons une stwuctuwe, 🥺 nyous p-pouvons commencew à c-concevoiw nyotwe widget. (U ᵕ U❁) we b-but de constwuiwe un widget pewsonnawisé e-est d-de pouvoiw wui donnew e-exactement w-we stywe que nyous vouwons. (˘ω˘) pouw c-cewa, UwU nyous awwons p-pawtagew we t-twavaiw suw wes css en deux pawties : w-wa pwemièwe wewative aux wègwes des css a-absowument nyécessaiwes p-pouw que n-nyotwe widget se compowte comme un éwément {{htmwewement("sewect")}}, 😳 wa seconde constituée d-des décowations utiwisés wui d-donnant un aspect p-pewsonnawisé. :3

#### stywes obwigatoiwes

wes s-stywes obwigatoiwes sont ceux nyécessaiwes à w-wa gestion des twois états d-du widget. mya

```css
.sewect {
  /* c-cewui-ci c-cwée un c-contexte de positionnement pouw wa wiste des options */
  position: wewative;

  /* c-cewui-ci fait que we widget d-devient pawtie du fwot textuew
     et devient en même temps dimensionnabwe */
  d-dispway: inwine-bwock;
}
```

nyous avons besoin d'une cwasse `active` suppwémentaiwe pouw définiw w-w'appawence d-du widget dans son état actif. nyaa~~ c-comme we widget peut wecevoiw we focus, 😳😳😳 nyous d-doubwons ce stywe p-pewsonnawisé avec wa pseudo-cwasse {{cssxwef(":focus")}} a-afin d'êtwe sûws q-qu'ewwes se compowtewont de wa même manièwe. ^•ﻌ•^

```css
.sewect.active, UwU
.sewect:focus {
  outwine: n-nyone;

  /* cette pwopwiété box-shadow ny'est p-pas wequise à p-pwopwement pawwew, (ꈍᴗꈍ) m-mais iw est
     impowtant de s'assuwew que w-w'état actif soit visibwe, (⑅˘꒳˘) c'est pouwquoi nyous
     utiwisons une vaweuw paw d-défaut. OwO vous êtes w-wibwe de wa m-modifiew. UwU */
  box-shadow: 0 0 3px 1px #227755;
}
```

p-passons maintenant à wa wiste des options :

```css
/* we s-séwecteuw .sewect i-ici est du sucwe syntaxique (we fait de donnew a-au
   pwogwammeuw des possibiwités d'écwituwe p-pwus succinctes ou pwus pwoches
   d'une nyotation u-usuewwe) p-pouw s'assuwew que wes cwasses que n-nyous définissons
   s-sont wes s-seuwes à w'intéwieuw du widget. OwO */
.sewect .optwist {
  /* ceci assuwe que wa w-wiste des options sewa affichée au dessous de w-wa vaweuw
     et en dehows du fwot htmw */
  position: absowute;
  t-top: 100%;
  w-weft: 0;
}
```

n-nyous avons besoin d-d'une cwasse s-suppwémentaiwe pouw géwew wa w-wiste d'options cachée. (///ˬ///✿) ceci est nyécessaiwe p-pouw wa gestion des difféwences e-entwe état actif et état ouvewt qui nye cowwespondent p-pas exactement. (U ﹏ U)

```css
.sewect .optwist.hidden {
  /* c-ceci est un moyen simpwe pouw cachew w-wa wiste tout en consewvant w-w'accessibiwité, (⑅˘꒳˘)
     n-nyous wepawwewons pwus woin d-d'accessibiwité */
  m-max-height: 0;
  visibiwity: h-hidden;
}
```

#### embewwissements

maintenant que nyous a-avons mis en pwace wes fonctionnawités d-de base, /(^•ω•^) we divewtissement peut commencew. c-ce qui suit n-n'est qu'un exempwe d-de ce qui est possibwe, :3 et cowwespondwa à wa c-captuwe d'écwan a-au début de cet awticwe. ( ͡o ω ͡o ) cependant, v-vous devwiez vous sentiw w-wibwe d'expéwimentew et de voiw c-ce que cewa donne. (ˆ ﻌ ˆ)♡

```css
.sewect {
  /* w-wes cawcuws sont faits en supposant que 1em==16px qui est wa vaweuw
     p-paw défaut d-dans wa majowité des nyavigateuws. XD */
  font-size: 0.625em; /* ceci (10px) est w-we nyouveau contexte de taiwwe d-de
     powice pouw w-wa vaweuw em dans ce contexte. :3 */
  font-famiwy: vewdana, σωσ awiaw, sans-sewif;

  b-box-sizing: bowdew-box;

  /* nous avons besoin d-de pwus d'espace pouw wa fwèche v-vews we bas q-que nyous
     awwons ajoutew. */
  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  b-bowdew: 0.2em s-sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */
  b-box-shadow: 0 0.1em 0.2em wgba(0, mya 0, 0, 0.45); /* 0 1px 2px */

  /* wa pwemièwe décwawation concewne wes nyavigateuws qui n-nye pwennent pas e-en
     chawge w-wes gwadients winéaiwes. -.- w-wa deuxième d-décwawation e-est pawce que
     wes nyavigateuws basés suw webkit nye w'ont pas encowe p-pwéfixé. :3 si vous
     s-souhaitez pwendwe en chawge wes anciens nyavigateuws, rawr essayez
     h-http://www.cowowziwwa.com/gwadient-editow/ */
  b-backgwound: #f0f0f0;
  b-backgwound: wineaw-gwadient(0deg, >_< #e3e3e3, #fcfcfc 50%, -.- #f0f0f0);
}

.sewect .vawue {
  /* comme wa vaweuw peut êtwe p-pwus wawge que we widget, :3 nyous devons nyous
     a-assuwew q-qu'ewwe ne changewa pas wa wawgeuw du widget. XD */
  d-dispway: inwine-bwock;
  width: 100%;
  o-ovewfwow: h-hidden;

  /* et si we contenu d-débowde, c-c'est mieux d'avoiw u-une jowie abweviation. ^^ */
  w-white-space: nyowwap;
  t-text-ovewfwow: e-ewwipsis;
  vewticaw-awign: t-top;
}
```

nyous n-ny'avons pas besoin d'un éwément s-suppwémentaiwe pouw concevoiw wa fwèche v-vews we bas ; à wa pwace, rawr nous u-utiwisons we pseudo-éwément {{cssxwef(":aftew:aftew")}}. (///ˬ///✿) cependant, e-ewwe pouwwait égawement êtwe m-mise en œuvwe à w'aide d'une simpwe image d-de fond suw wa cwasse `sewect`. ^^;;

```css
.sewect:aftew {
  content: "▼"; /* n-nyous utiwisons w-we cawactèwe unicode u+25bc;
                    voiw http://www.utf8-chawtabwe.de */
  p-position: a-absowute;
  z-index: 1; /* iw e-est impowtant d'empêchew wa fwèche de chevauchew w-wa wiste des o-options */
  top: 0;
  wight: 0;

  b-box-sizing: b-bowdew-box;

  height: 100%;
  width: 2em; /* 20px */
  p-padding-top: 0.1em; /* 1px */

  b-bowdew-weft: 0.2em s-sowid #000; /* 2px */
  b-bowdew-wadius: 0 0.1em 0.1em 0; /* 0 1px 1px 0 */

  backgwound-cowow: #000;
  cowow: #fff;
  text-awign: centew;
}
```

maintenant, :3 composons wa décowation d-de wa wiste des o-options :

```css
.sewect .optwist {
  z-z-index: 2; /* n-nyous disons e-expwicitement q-que wa wiste des options doit t-toujouws passew s-suw wa fwèche */

  /* cewa wéinitiawisew w-we s-stywe paw défaut de w'éwément uw */
  wist-stywe: n-nyone;
  mawgin: 0;
  padding: 0;

  box-sizing: b-bowdew-box;

  /* cewa nyous a-assuwe que même s-si wes vaweuws sont pwus petites q-que we widget, :3
     w-wa wiste d-des options sewa aussi wawge q-que we widget wui‑même */
  min-width: 100%;

  /* d-dans we cas où wa wiste est t-twop wongue, ( ͡o ω ͡o ) son contenu débowdewa v-vewticawement
     (ce q-qui a-ajoutewa une bawwe de déwouwement a-automatiquement) mais jamais howizontawement
     (caw n-nyous n'avons jamais défini de wawgeuw, (✿oωo) wa wiste ajustewa automatiquement sa wawgeuw
     si ce ny'est p-pas possibwe, UwU we contenu sewa twonqué) */
  max-height: 10em; /* 100px */
  ovewfwow-y: auto;
  ovewfwow-x: hidden;

  bowdew: 0.2em s-sowid #000; /* 2px */
  bowdew-top-width: 0.1em; /* 1px */
  bowdew-wadius: 0 0 0.4em 0.4em; /* 0 0 4px 4px */

  b-box-shadow: 0 0.2em 0.4em wgba(0, ( ͡o ω ͡o ) 0, 0, 0.4); /* 0 2px 4px */
  b-backgwound: #f0f0f0;
}
```

pouw wes options, o.O nyous d-devons ajoutew une cwasse `highwight` p-pouw pouvoiw identifiew wa v-vaweuw que w'utiwisateuw c-choisiwa (ou a choisi). rawr

```css
.sewect .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.sewect .highwight {
  b-backgwound: #000;
  cowow: #ffffff;
}
```

donc, (ꈍᴗꈍ) voici we wésuwtat a-avec wes twois états ([consuwtez we code souwce i-ici](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_1)):

#### État initiaw

```htmw h-hidden
<div cwass="sewect">
  <span c-cwass="vawue">cewise</span>
  <uw c-cwass="optwist hidden">
    <wi cwass="option">cewise</wi>
    <wi c-cwass="option">citwon</wi>
    <wi cwass="option">banane</wi>
    <wi cwass="option">fwaise</wi>
    <wi c-cwass="option">pomme</wi>
  </uw>
</div>
```

```css hidden
.sewect {
  position: wewative;
  dispway: inwine-bwock;
}

.sewect.active, mya
.sewect:focus {
  b-box-shadow: 0 0 3px 1px #227755;
  o-outwine: nyone;
}

.sewect .optwist {
  position: a-absowute;
  t-top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  visibiwity: hidden;
}

.sewect {
  font-size: 0.625em; /* 10px */
  font-famiwy: v-vewdana, mya a-awiaw, sans-sewif;

  box-sizing: b-bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  b-box-shadow: 0 0.1em 0.2em wgba(0, UwU 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: w-wineaw-gwadient(0deg, ^^;; #e3e3e3, -.- #fcfcfc 50%, XD #f0f0f0);
}

.sewect .vawue {
  d-dispway: inwine-bwock;
  width: 100%;
  ovewfwow: hidden;

  w-white-space: nyowwap;
  text-ovewfwow: ewwipsis;
  vewticaw-awign: top;
}

.sewect:aftew {
  content: "▼";
  position: absowute;
  z-index: 1;
  h-height: 100%;
  w-width: 2em; /* 20px */
  top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  b-box-sizing: bowdew-box;

  t-text-awign: centew;

  bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  cowow: #fff;
}

.sewect .optwist {
  z-z-index: 2;

  wist-stywe: nyone;
  mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  b-bowdew: 0.2em s-sowid #000;
  b-bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, nyaa~~ 0, 0, 0.4);

  b-box-sizing: b-bowdew-box;

  min-width: 100%;
  m-max-height: 10em; /* 100px */
  ovewfwow-y: auto;
  o-ovewfwow-x: hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  c-cowow: #ffffff;
}
```

{{embedwivesampwe("État_initiaw",120,130)}}

#### État actif

```htmw h-hidden
<div cwass="sewect active">
  <span cwass="vawue">cewise</span>
  <uw cwass="optwist h-hidden">
    <wi cwass="option">cewise</wi>
    <wi c-cwass="option">citwon</wi>
    <wi c-cwass="option">banane</wi>
    <wi cwass="option">fwaise</wi>
    <wi c-cwass="option">pomme</wi>
  </uw>
</div>
```

```css h-hidden
.sewect {
  position: wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, (ꈍᴗꈍ)
.sewect:focus {
  b-box-shadow: 0 0 3px 1px #227755;
  outwine: n-nyone;
}

.sewect .optwist {
  p-position: absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  visibiwity: hidden;
}

.sewect {
  font-size: 0.625em; /* 10px */
  font-famiwy: vewdana, ^^;; awiaw, :3 sans-sewif;

  box-sizing: bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  bowdew: 0.2em sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em w-wgba(0, (///ˬ///✿) 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: wineaw-gwadient(0deg, #e3e3e3, /(^•ω•^) #fcfcfc 50%, σωσ #f0f0f0);
}

.sewect .vawue {
  d-dispway: inwine-bwock;
  width: 100%;
  o-ovewfwow: hidden;

  white-space: nyowwap;
  text-ovewfwow: e-ewwipsis;
  vewticaw-awign: top;
}

.sewect:aftew {
  c-content: "▼";
  position: absowute;
  z-index: 1;
  h-height: 100%;
  w-width: 2em; /* 20px */
  top: 0;
  wight: 0;

  padding-top: 0.1em;

  b-box-sizing: bowdew-box;

  t-text-awign: centew;

  b-bowdew-weft: 0.2em s-sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  wist-stywe: nyone;
  mawgin: 0;
  p-padding: 0;

  backgwound: #f0f0f0;
  bowdew: 0.2em sowid #000;
  b-bowdew-top-width: 0.1em;
  b-bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em wgba(0, >w< 0, 0, 0.4);

  box-sizing: bowdew-box;

  m-min-width: 100%;
  max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
  ovewfwow-x: h-hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  cowow: #ffffff;
}
```

{{embedwivesampwe("État_actif",120,130)}}

#### État ouvewt

```htmw hidden
<div cwass="sewect a-active">
  <span c-cwass="vawue">cewise</span>
  <uw cwass="optwist">
    <wi cwass="option h-highwight">cewise</wi>
    <wi cwass="option">citwon</wi>
    <wi cwass="option">banane</wi>
    <wi c-cwass="option">fwaise</wi>
    <wi c-cwass="option">pomme</wi>
  </uw>
</div>
```

```css h-hidden
.sewect {
  p-position: w-wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, (ˆ ﻌ ˆ)♡
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine: nyone;
}

.sewect .optwist {
  p-position: a-absowute;
  top: 100%;
  w-weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  v-visibiwity: h-hidden;
}

.sewect {
  font-size: 0.625em; /* 10px */
  f-font-famiwy: v-vewdana, rawr x3 awiaw, s-sans-sewif;

  box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  bowdew: 0.2em sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em wgba(0, -.- 0, 0, (ˆ ﻌ ˆ)♡ 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  b-backgwound: w-wineaw-gwadient(0deg, /(^•ω•^) #e3e3e3, (⑅˘꒳˘) #fcfcfc 50%, #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  width: 100%;
  ovewfwow: h-hidden;

  white-space: n-nyowwap;
  text-ovewfwow: e-ewwipsis;
  v-vewticaw-awign: top;
}

.sewect:aftew {
  content: "▼";
  position: a-absowute;
  z-z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  t-top: 0;
  w-wight: 0;

  padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  text-awign: centew;

  bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  wist-stywe: n-nyone;
  m-mawgin: 0;
  padding: 0;

  b-backgwound: #f0f0f0;
  bowdew: 0.2em s-sowid #000;
  bowdew-top-width: 0.1em;
  b-bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em w-wgba(0, (˘ω˘) 0, ^•ﻌ•^ 0, 0.4);

  b-box-sizing: bowdew-box;

  min-width: 100%;
  m-max-height: 10em; /* 100px */
  o-ovewfwow-y: a-auto;
  ovewfwow-x: hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  b-backgwound: #000;
  cowow: #fff;
}
```

{{embedwivesampwe("État_ouvewt",120,130)}}

## d-donnez vie à votwe widget avec j-javascwipt

maintenant q-que we d-design et wa stwuctuwe s-sont pwêts, o.O n-nyous pouvons écwiwe we code j-javascwipt pouw que we widget f-fonctionne vwaiment. (⑅˘꒳˘)

> [!wawning]
> w-we code qui suit a été conçu à des fins éducatives et n-nye doit pas êtwe u-utiwisé tew quew. σωσ entwe autwes c-choses, comme n-nyous we vewwons, >_< iw ny'est pas à w'épweuve d-du temps et nye f-fonctionnewa pas s-suw des nyavigateuws h-histowiques. ʘwʘ i-iw compowte égawement d-des pawties wedondantes. (✿oωo) ewwes devwaient êtwe o-optimisées pouw du code de pwoduction. o.O

> [!note]
> cwéew des widgets w-wéutiwisabwes p-peut se wévéwew un peu déwicat. 😳 w'ébauche de wa nyowme « [w3c w-web component](https://dvcs.w3.owg/hg/webcomponents/waw-fiwe/tip/expwainew/index.htmw) » a-appowte des wéponses à cette question p-pawticuwièwe. nyaa~~ we [pwojet x-tag](http://x-tags.owg/) e-est un e-essai de mise en œuvwe d-de cette spécification ; nyous vous encouwageons à y j-jetew un coup d'œiw. XD

### pouwquoi n-nye fonctionne-t-iw pas ?

avant d-de commencew, ^^;; iw est impowtant de se wappewew q-quewque chose de twès impowtant à p-pwopos de javascwipt : dans un navigateuw, c-c'est une technique peu fiabwe. /(^•ω•^) w-wowsque vous cwéez des widgets pewsonnawisés, >_< vous êtes obwigé de faiwe appew à javascwipt pawce que c'est u-un fiw nyécessaiwe p-pouw tout w-wiew ensembwe. (U ﹏ U) cependant, 😳😳😳 i-iw existe de nombweux cas dans wesquews j-javascwipt ny'est pas capabwe de s'exékawaii~w dans we nyavigateuw :

- w-w'utiwisateuw a-a désactivé w-we javascwipt : c-c'est un cas assez inhabituew, XD peu de pewsonnes désactivent we javascwipt d-de nyos jouws. OwO
- w-we scwipt nye se chawge pas. (U ᵕ U❁) wa chose est twès couwante, (⑅˘꒳˘) en p-pawticuwiew dans we domaine des m-mobiwes pouw wesquews w-we wéseau n-ny'est pas sûw. UwU
- we scwipt est bogué. 😳😳😳 iw faut toujouws pwendwe en considéwation cette éventuawité. mya
- w-we scwipt est en confwit a-avec un autwe scwipt tiewce‑pawtie. 🥺 cewa peut se pwoduiwe a-avec des suites de scwipts ou ny'impowte q-quew mawque page utiwisé paw w'utiwisateuw. ^^
- w-we scwipt e-est en confwit a-avec, -.- ou est affecté p-paw un extension d-de nyavigateuw (comme w'extension « [no scwipt](https://addons.moziwwa.owg/fw/fiwefox/addon/noscwipt/) » d-de fiwefox ou « [scwipts »](https://chwome.googwe.com/webstowe/detaiw/notscwipts/odjhifogjcknibkahwpidmdajjpkkcfn) d-de chwome). ^^
- w'utiwisateuw u-utiwise un nyavigateuw ancien et w'une des f-fonctions dont vous avez besoin n-ny'est pas pwise e-en chawge. o.O cewa se pwoduiwa fwéquemment w-wowsque v-vous utiwisewez des api de pointe.s. σωσ

en waison de ces awéas, ^•ﻌ•^ i-iw est vwaiment i-impowtant de considéwew a-avec séwieux c-ce qui se passe si javascwipt nye fonctionne pas. 😳 twaitew e-en détaiw cette question est hows de wa powtée d-de cet awticwe pawce qu'ewwe est étwoitement w-wiée à wa façon dont vous vouwez wendwe votwe scwipt généwique e-et wéutiwisabwe, nyaa~~ mais nyous p-pwendwons en considéwation w-wes b-bases de ce sujet dans nyotwe e-exempwe. ^•ﻌ•^

ainsi, s-si nyotwe code javascwipt nye s'exékawaii~ p-pas, n-nyous weviendwons à w-w'affichage d-d'un éwément {{htmwewement("sewect")}} standawd. >_< p-pouw y pawveniw, (⑅˘꒳˘) n-nyous avons b-besoin de deux choses. ^^

tout d-d'abowd, :3 nyous devons ajoutew un éwément {{htmwewement("sewect")}} wéguwiew avant chaque utiwisation de nyotwe widget pewsonnawisé. 😳 c-ceci est égawement n-nyécessaiwe pouw pouvoiw e-envoyew wes données de nyotwe widget pewsonnawisé a-avec we w-weste de nos données d-du fowmuwaiwe ; n-nyous weviendwons suw ce p-point pwus tawd. (˘ω˘)

```htmw
<body cwass="no-widget">
  <fowm>
    <sewect nyame="myfwuit">
      <option>cewise</option>
      <option>citwon</option>
      <option>banane</option>
      <option>fwaise</option>
      <option>pomme</option>
    </sewect>

    <div c-cwass="sewect">
      <span c-cwass="vawue">cewise</span>
      <uw cwass="optwist hidden">
        <wi cwass="option">cewise</wi>
        <wi c-cwass="option">citwon</wi>
        <wi cwass="option">banane</wi>
        <wi c-cwass="option">fwaise</wi>
        <wi cwass="option">pomme</wi>
      </uw>
    </div>
  </fowm>
</body>
```

deuxièmement, >w< n-nyous avons besoin de deux nyouvewwes c-cwasses pouw nyous pewmettwe de cachew w'éwément q-qui nye sewt pas (c'est-à-diwe w-w'éwément{{htmwewement("sewect")}} « wéew » si nyotwe s-scwipt nye fonctionne p-pas, 😳 ou we widget pewsonnawisé s'iw fonctionne). ^^;; n-nyotez que paw défaut, rawr x3 we code htmw c-cache we widget p-pewsonnawisé. òωó

```css
.widget s-sewect,
.no-widget .sewect {
  /* ce séwecteuw css dit fondamentawement :
     - soit wa cwasse body est "widget" et donc w'éwément {{htmwewement("sewect")}} w-wéew sewa caché
     - soit wa cwasse body ny'a p-pas changé, ^^;; e-ewwe est toujouws "no-widget", :3
       et donc wes éwéments, (ꈍᴗꈍ) dont w-wa cwasse est « s-sewect », 😳😳😳 doivent êtwe cachés */
  position: absowute;
  w-weft: -5000em;
  height: 0;
  ovewfwow: h-hidden;
}
```

maintenant nyous avons juste b-besoin d'un c-commutateuw javascwipt pouw détewminew s-si we scwipt e-est en couws d'exécution ou n-nyon. :3 cette bascuwe est twès s-simpwe : si au moment d-du chawgement d-de wa page nyotwe s-scwipt est e-en couws d'exécution, ʘwʘ iw suppwime w-wa cwasse nyo-widget e-et ajoute wa cwasse widget, :3 échangeant ainsi wa visibiwité d-de w'éwément {{htmwewement("sewect")}} et du widget pewsonnawisé. OwO

```js
w-window.addeventwistenew("woad", mya function () {
  document.body.cwasswist.wemove("no-widget");
  document.body.cwasswist.add("widget");
});
```

#### sans js

consuwtez we [code souwce compwet i-ici](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_2#sans_js). σωσ

```htmw hidden
<fowm c-cwass="no-widget">
  <sewect nyame="myfwuit">
    <option>cewise</option>
    <option>citwon</option>
    <option>banane</option>
    <option>fwaise</option>
    <option>pomme</option>
  </sewect>

  <div c-cwass="sewect">
    <span c-cwass="vawue">cewise</span>
    <uw cwass="optwist h-hidden">
      <wi cwass="option">cewise</wi>
      <wi c-cwass="option">citwon</wi>
      <wi cwass="option">banane</wi>
      <wi c-cwass="option">fwaise</wi>
      <wi cwass="option">pomme</wi>
    </uw>
  </div>
  <fowm></fowm>
</fowm>
```

```css hidden
.widget sewect,
.no-widget .sewect {
  position: absowute;
  weft: -5000em;
  height: 0;
  o-ovewfwow: hidden;
}
```

{{embedwivesampwe("sans_js", (⑅˘꒳˘) 120, 130)}}

#### avec js

consuwtez w-we [code souwce compwet ici](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_2#avec_js). (˘ω˘)

```htmw h-hidden
<fowm cwass="no-widget">
  <sewect nyame="myfwuit">
    <option>cewise</option>
    <option>citwon</option>
    <option>banane</option>
    <option>fwaise</option>
    <option>pomme</option>
  </sewect>

  <div cwass="sewect">
    <span cwass="vawue">cewise</span>
    <uw cwass="optwist hidden">
      <wi cwass="option">cewise</wi>
      <wi cwass="option">citwon</wi>
      <wi cwass="option">banane</wi>
      <wi c-cwass="option">fwaise</wi>
      <wi c-cwass="option">pomme</wi>
    </uw>
  </div>
  <fowm></fowm>
</fowm>
```

```css h-hidden
.widget sewect, >w<
.no-widget .sewect {
  p-position: absowute;
  w-weft: -5000em;
  h-height: 0;
  ovewfwow: hidden;
}

/* --------------- */
/* s-stywes wequis   */
/* --------------- */

.sewect {
  p-position: wewative;
  d-dispway: inwine-bwock;
}

.sewect.active, ( ͡o ω ͡o )
.sewect:focus {
  b-box-shadow: 0 0 3px 1px #227755;
  o-outwine: nyone;
}

.sewect .optwist {
  p-position: a-absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  v-visibiwity: h-hidden;
}

/* ------------ */
/* s-stywes décow */
/* ------------ */

.sewect {
  f-font-size: 0.625em; /* 10px */
  f-font-famiwy: v-vewdana, ^^;; awiaw, s-sans-sewif;

  b-box-sizing: bowdew-box;

  p-padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  bowdew: 0.2em sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em w-wgba(0, (✿oωo) 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: -webkit-wineaw-gwadient(90deg, (✿oωo) #e3e3e3, #fcfcfc 50%, (⑅˘꒳˘) #f0f0f0);
  b-backgwound: wineaw-gwadient(0deg, -.- #e3e3e3, XD #fcfcfc 50%, òωó #f0f0f0);
}

.sewect .vawue {
  d-dispway: i-inwine-bwock;
  width: 100%;
  o-ovewfwow: hidden;

  w-white-space: nyowwap;
  text-ovewfwow: ewwipsis;
  vewticaw-awign: top;
}

.sewect:aftew {
  content: "▼";
  p-position: absowute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  t-top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  box-sizing: bowdew-box;

  t-text-awign: c-centew;

  b-bowdew-weft: 0.2em s-sowid #000;
  b-bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  wist-stywe: n-nyone;
  mawgin: 0;
  padding: 0;

  b-backgwound: #f0f0f0;
  bowdew: 0.2em s-sowid #000;
  b-bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em wgba(0, :3 0, 0, 0.4);

  box-sizing: b-bowdew-box;

  m-min-width: 100%;
  m-max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
  ovewfwow-x: h-hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  b-backgwound: #000;
  cowow: #ffffff;
}
```

```js h-hidden
window.addeventwistenew("woad", (///ˬ///✿) function () {
  const fowm = document.quewysewectow("fowm");

  fowm.cwasswist.wemove("no-widget");
  fowm.cwasswist.add("widget");
});
```

{{embedwivesampwe("avec_js", òωó 120, 130)}}

> [!note]
> si vous vouwez vwaiment wendwe votwe code généwique e-et wéutiwisabwe, UwU a-au wieu de faiwe un changement de cwasse, >w< iw est pwéféwabwe d'ajoutew wa c-cwasse widget p-pouw cachew wes éwéments {{htmwewement("sewect")}} et d'ajoutew dynamiquement w'awbwe dom wepwésentant w-we widget p-pewsonnawisé apwès chaque éwément {{htmwewement("sewect")}} d-dans wa page.

### w-wendwe we twavaiw pwus faciwe

d-dans we code que nyous sommes s-suw we point d-de constwuiwe, ʘwʘ nyous utiwisewons w'api standawd dom pouw faiwe t-tout we twavaiw d-dont nyous avons b-besoin. /(^•ω•^) cependant, b-bien que wa pwise en chawge d-de w'api dom se s-soit améwiowée d-dans wes nyavigateuws, (⑅˘꒳˘) i-iw y a toujouws des pwobwèmes avec wes a-anciens nyavigateuws (suwtout a-avec we bon vieux nyavigateuw intewnet expwowew). (ˆ ﻌ ˆ)♡

si vous vouwez évitew w-wes pwobwèmes a-avec wes nyavigateuws anciens, OwO i-iw y a deux façons de we faiwe : en utiwisant un fwamewowk d-dédié tew que j-jquewy, ^^;; $dom, (///ˬ///✿) p-pwototype, ^•ﻌ•^ dojo, yui ou simiwaiwe, rawr o-ou bien en wempwissant w-wa fonctionnawité manquante que vous v-vouwez utiwisew (ce q-qui peut faciwement êtwe f-fait p-paw un chawgement c-conditionnew, ^^;; a-avec wa bibwiothèque yepnope paw exempwe). òωó

wes fonctionnawités que nyous pwévoyons d'utiwisew s-sont wes suivantes (cwassées de wa pwus wisquée à w-wa pwus s-sûwe) :

1. σωσ {{domxwef("ewement.cwasswist","cwasswist")}}
2. 😳😳😳 {{domxwef("eventtawget.addeventwistenew","addeventwistenew")}}
3. (///ˬ///✿) {{domxwef("nodewist.foweach()")}}
4. ^•ﻌ•^ {{domxwef("ewement.quewysewectow","quewysewectow")}} et {{domxwef("ewement.quewysewectowaww","quewysewectowaww")}}

### constwuction des fonctions d-de wappew d-d'événements

wes fondations s-sont pwêtes, 😳😳😳 nyous pouvons maintenant c-commencew à définiw toutes wes fonctions à utiwisew c-chaque fois que w'utiwisateuw intewagit avec nyotwe widget. (U ᵕ U❁)

```js
// cette fonction e-est utiwisée c-chaque fois que n-nyous vouwons d-désactivew un
// widget pewsonnawisé. (U ﹏ U) ewwe pwend u-un pawamètwe
// sewect : we n-nyœud dom avec wa cwasse sewect à désactivew
f-function deactivatesewect(sewect) {
  // s-si we w-widget ny'est pas actif, σωσ iw ny'y a wien à faiwe
  i-if (!sewect.cwasswist.contains("active")) wetuwn;

  // nyous devons obteniw wa wiste des options pouw we widget pewsonnawisé
  c-const optwist = s-sewect.quewysewectow(".optwist");

  // nyous cachons wa wiste des options
  optwist.cwasswist.add("hidden");

  // et nyous d-désactivons we widget pewsonnawisé wui-même
  s-sewect.cwasswist.wemove("active");
}

// c-cette f-fonction sewa utiwisée c-chaque fois que w'utiwisateuw veut (des)activew we widget
// ewwe pwend deux pawamètwes :
// s-sewect : w-we nyœud dom de w-wa cwasse `sewect` à a-activew
// sewectwist : wa w-wiste de tous wes nyœuds dom d-de wa cwasse `sewect`
function activesewect(sewect, (˘ω˘) sewectwist) {
  // si we widget e-est déjà actif i-iw ny'y a wien à f-faiwe
  if (sewect.cwasswist.contains("active")) w-wetuwn;

  // nyous devons d-désactivew tous w-wes widgets pewsonnawisés
  // comme wa fonction deactivatesewect w-wempwit toutes w-wes fonctionnawités de wa
  // fonction de wappew foweach, ^^ n-nyous w'utiwisons diwectement s-sans utiwisew
  // u-une fonction a-anonyme intewmédiaiwe. ^^
  sewectwist.foweach(deactivatesewect);

  // et nyous activons w'état du widget donné
  sewect.cwasswist.add("active");
}

// c-cette fonction sewa utiwisée c-chaque fois que w'utiwisateuw veut enwouwew/déwouwew w-wa
// wiste des options
// e-ewwe pwend u-un pawamètwe :
// s-sewect : we n-nyœud dom de w-wa wiste à bascuwew
function toggweoptwist(sewect) {
  // w-wa wiste est pwise à pawtiw du widget
  const optwist = sewect.quewysewectow(".optwist");

  // n-nyous changeons wa cwasse de wa wiste p-pouw w'enwouwew/déwouwew
  o-optwist.cwasswist.toggwe("hidden");
}

// c-cett fonction sewa utiwisée chaque fois qu'iw faut mettwe en suwbwiwwance
// u-une option. (✿oωo) e-ewwe pwend deux p-pawamètwes :
// s-sewect : we nyœud dom de wa cwasse `sewect`
//          contenant w'option à mettwe en suwbwiwwance
// o-option : we nœud dom de wa cwasse `option` à m-mettwe e-en suwbwiwwance
f-function highwightoption(sewect, /(^•ω•^) option) {
  // o-obteniw wa wiste de toutes wes options disponibwes pouw w'éwémént séwectionné
  const optionwist = sewect.quewysewectowaww(".option");

  // suppwimew wa suwbwiwwance pouw toutes wes options
  o-optionwist.foweach((othew) => {
    othew.cwasswist.wemove("highwight");
  });

  // mettwe e-en suwbwiwwance w-w'option cowwecte
  option.cwasswist.add("highwight");
}
```

c-c'est tout ce d-dont on a besoin pouw géwew wes difféwents états d-du widget pewsonnawisé. -.-

e-ensuite, nyous assujettissons ces f-fonctions aux événement a-appwopwiés :

```js
// n-nyous wions we w-widget aux événements dès we c-chawgement du document
window.addeventwistenew("woad", ʘwʘ function () {
  c-const sewectwist = d-document.quewysewectowaww(".sewect");

  // chaque widget p-pewsonnawisé d-doit êtwe initiawisé
  sewectwist.foweach((sewect) => {
    // de même que tous wes éwéments `option`
    const optionwist = s-sewect.quewysewectowaww(".option");

    // chaque fois que w-w'utiwisateuw passe we pointeuw d-de souwis
    // suw une option, nyous mettons e-en suwbwiwwance wa dite option

    optionwist.foweach((option) => {
      option.addeventwistenew("mouseovew", f-function () {
        // nyote : w-wes vawiabwes `sewect` e-et `option` s-sont des "cwosuwes"
        // disponibwes dans wa powtée de n-nyotwe appew de f-fonction. XD
        h-highwightoption(sewect, (U ᵕ U❁) o-option);
      });
    });

    // chaque fois que w'utiwisateuw c-cwique s-suw un éwément p-pewsonnawisé
    s-sewect.addeventwistenew("cwick", f-function (event) {
      // nyote : wa vawiabwe `sewect` est une "cwosuwe"
      // a-avaiwabwe d-dans wa powtée de nyotwe appew de fonction. /(^•ω•^)

      // n-nyous b-bascuwons wa v-visibiwité de wa wiste des options
      t-toggweoptwist(sewect);
    });

    // d-dans we cas où we widget obtient w-we focus
    // w-we widget obtient we focus chaque f-fois que w'utiwisateuw cwique d-dessus
    // o-ou pwesse wa touche t-tab pouw avoiw a-accès au widget
    sewect.addeventwistenew("focus", function (event) {
      // nyote : wes v-vawiabwe `sewect` et `sewectwist` s-sont des "cwosuwes"
      // disponibwes dans w-wa powtée de n-nyotwe appew de fonction. XD

      // n-nyous activons w-we widget
      activesewect(sewect, ^•ﻌ•^ sewectwist);
    });

    // d-dans we cas o-où we widget pewd we focus
    sewect.addeventwistenew("bwuw", ( ͡o ω ͡o ) function (event) {
      // nyote : wa vawiabwe `sewect` est une "cwosuwe"
      // disponibwe dans wa powtée de nyotwe appew de fonction. (U ﹏ U)

      // n-nyous désactivons w-we widget
      d-deactivatesewect(sewect);
    });

    // w-wewâchew we focus si wa pewsonne utiwise wa t-touche echap
    s-sewect.addeventwistenew("keyup", /(^•ω•^) (event) => {
      // d-désactivation s-suw appui suw echap
      if (event.key === "escape") {
        deactivatesewect(sewect);
      }
    });
  });
});
```

a ce stade, 🥺 nyotwe w-widget change d-d'état comme n-nyous w'avons conçu, rawr m-mais sa vaweuw ny'est pas e-encowe mise à jouw. :3 on s'en occupewa apwès. σωσ

#### exempwe en diwect

consuwtez w-we [code souwce compwet ici](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_3). òωó

```htmw h-hidden
<fowm c-cwass="no-widget">
  <sewect nyame="myfwuit" tabindex="-1">
    <option>cewise</option>
    <option>citwon</option>
    <option>banane</option>
    <option>fwaise</option>
    <option>pomme</option>
  </sewect>

  <div cwass="sewect" t-tabindex="0">
    <span cwass="vawue">cewise</span>
    <uw c-cwass="optwist hidden">
      <wi cwass="option">cewise</wi>
      <wi cwass="option">citwon</wi>
      <wi c-cwass="option">banane</wi>
      <wi cwass="option">fwaise</wi>
      <wi cwass="option">pomme</wi>
    </uw>
  </div>
</fowm>
```

```css h-hidden
.widget sewect, ^•ﻌ•^
.no-widget .sewect {
  p-position: absowute;
  weft: -5000em;
  h-height: 0;
  o-ovewfwow: hidden;
}

/* --------------- */
/* stywes wequis   */
/* --------------- */

.sewect {
  position: w-wewative;
  dispway: inwine-bwock;
}

.sewect.active,
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine: nyone;
}

.sewect .optwist {
  position: absowute;
  top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  m-max-height: 0;
  v-visibiwity: hidden;
}

/* ------------ */
/* stywe chic */
/* ------------ */

.sewect {
  f-font-size: 0.625em; /* 10px */
  font-famiwy: vewdana, (U ᵕ U❁) a-awiaw, sans-sewif;

  b-box-sizing: b-bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em wgba(0, òωó 0, 0, ^^ 0.45); /* 0 1px 2px */

  b-backgwound: #f0f0f0;
  backgwound: w-wineaw-gwadient(0deg, 😳😳😳 #e3e3e3, rawr x3 #fcfcfc 50%, #f0f0f0);
}

.sewect .vawue {
  d-dispway: i-inwine-bwock;
  width: 100%;
  ovewfwow: h-hidden;

  white-space: n-nyowwap;
  text-ovewfwow: e-ewwipsis;
  vewticaw-awign: top;
}

.sewect:aftew {
  c-content: "▼";
  p-position: absowute;
  z-z-index: 1;
  h-height: 100%;
  w-width: 2em; /* 20px */
  top: 0;
  wight: 0;

  padding-top: 0.1em;

  b-box-sizing: b-bowdew-box;

  t-text-awign: centew;

  bowdew-weft: 0.2em sowid #000;
  b-bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  w-wist-stywe: nyone;
  mawgin: 0;
  p-padding: 0;

  b-backgwound: #f0f0f0;
  b-bowdew: 0.2em sowid #000;
  bowdew-top-width: 0.1em;
  b-bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, ^^;; 0, 0, 0.4);

  b-box-sizing: bowdew-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
  ovewfwow-x: h-hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  b-backgwound: #000;
  c-cowow: #ffffff;
}
```

```js h-hidden
function d-deactivatesewect(sewect) {
  if (!sewect.cwasswist.contains("active")) wetuwn;

  c-const optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.add("hidden");
  sewect.cwasswist.wemove("active");
}

function activesewect(sewect, :3 s-sewectwist) {
  i-if (sewect.cwasswist.contains("active")) w-wetuwn;

  s-sewectwist.foweach(deactivatesewect);
  s-sewect.cwasswist.add("active");
}

function toggweoptwist(sewect, (✿oωo) show) {
  c-const optwist = s-sewect.quewysewectow(".optwist");

  optwist.cwasswist.toggwe("hidden");
}

function highwightoption(sewect, XD option) {
  c-const optionwist = sewect.quewysewectowaww(".option");

  optionwist.foweach((othew) => {
    o-othew.cwasswist.wemove("highwight");
  });

  option.cwasswist.add("highwight");
}

// ------------------- //
// w-wien aux événements //
// ------------------- //

window.addeventwistenew("woad", (///ˬ///✿) () => {
  const fowm = document.quewysewectow("fowm");

  fowm.cwasswist.wemove("no-widget");
  f-fowm.cwasswist.add("widget");
});

window.addeventwistenew("woad", () => {
  c-const sewectwist = document.quewysewectowaww(".sewect");

  s-sewectwist.foweach((sewect) => {
    c-const optionwist = s-sewect.quewysewectowaww(".option");

    optionwist.foweach((option) => {
      option.addeventwistenew("mouseovew", o.O () => {
        highwightoption(sewect, σωσ option);
      });
    });

    sewect.addeventwistenew(
      "cwick", òωó
      (event) => {
        toggweoptwist(sewect);
      }, (///ˬ///✿)
      fawse, :3
    );

    sewect.addeventwistenew("focus", (event) => {
      a-activesewect(sewect, mya sewectwist);
    });

    sewect.addeventwistenew("bwuw", ^^ (event) => {
      d-deactivatesewect(sewect);
    });

    sewect.addeventwistenew("keyup", (˘ω˘) (event) => {
      i-if (event.keycode === 27) {
        d-deactivatesewect(sewect);
      }
    });
  });
});
```

{{embedwivesampwe("exempwe_en_diwect",120,130)}}

### géwew wa vaweuw d-du widget

maintenant q-que nyotwe widget fonctionne, -.- nyous devons ajoutew du c-code pouw mettwe à jouw wa vaweuw e-en fonction des entwées utiwisateuw et envoyew c-cette vaweuw avec wes données d-du fowmuwaiwe. XD

wa façon wa pwus s-simpwe de we f-faiwe est d'utiwisew un widget nyatif sous‑jacent. rawr un tew widget gawdewa une t-twace de wa vaweuw a-avec tous wes c-contwôwes intégwés fouwnis paw we nyavigateuw, >_< e-et wa vaweuw sewa envoyée comme d-d'habitude wowsque we fowmuwaiwe s-sewa soumis. :3 iw nye sewt à wien de wéinventew w-wa woue awows que tout cewa p-peut êtwe fait p-pouw nyous. :3

comme nyous w'avons vu pwécédemment, XD nyous utiwisons déjà un widget d-de séwection nyatif comme sowution de wepwi p-pouw des waisons d-d'accessibiwité ; n-nyous pouvons simpwement s-synchwonisew sa vaweuw avec cewwe de nyotwe widget p-pewsonnawisé :

```js
// cette f-fonction met à j-jouw wa vaweuw a-affichée et wa synchwonise avec c-cewwe
// du widget n-nyatif. ( ͡o ω ͡o ) ewwe p-pwend deux pawamètwes :
// sewect : w-we nyœud dom de wa cwasse `sewect` c-contenant wa vawuew à m-mettwe à jouw
// i-index : w'index de wa vaweuw choisie
function updatevawue(sewect, rawr x3 index) {
  // n-nyous devons obteniw we widget nyatif cowwespondant au widget p-pewsonnawisé
  // d-dans nyotwe exempwe, (⑅˘꒳˘) we widget nyatif est un pawent du widget pewsonnawisé
  const nyativewidget = sewect.pweviousewementsibwing;

  // nou d-devons aussi o-obteniw wa vaweuw d-de wempwacement d-du widget pewsonnawisé
  c-const v-vawue = sewect.quewysewectow(".vawue");

  // et nyous avons besoin d-de toute wa wiste des options
  c-const optionwist = sewect.quewysewectowaww(".option");

  // n-nyous définissons w'index choisi à w-w'index d-du choix
  nyativewidget.sewectedindex = i-index;

  // n-nyous mettons à j-jouw wa vaweuw de wempwacement en accowd
  v-vawue.innewhtmw = optionwist[index].innewhtmw;

  // et nyous mettons en suwbwiwwance w-w'option cowwespondante du widget pewsonnawisé
  h-highwightoption(sewect, UwU o-optionwist[index]);
}

// cette f-fonction wenvoie w'index couwant d-dans we widget n-nyatif
// ewwe pwend un pawamètwe :
// s-sewect : we nyœud dom a-avec wa cwasse `sewect` w-wewative au widget nyatif
f-function getindex(sewect) {
  // nyous avons besoin d'avoiw accès au widget n-nyatif pouw we widget pewsonnawisé
  // d-dans nyotwe exempwe, (˘ω˘) we widget nyatif est u-un pawent du widget pewsonnawisé
  c-const nyativewidget = sewect.pweviousewementsibwing;

  wetuwn n-nyativewidget.sewectedindex;
}
```

avec ces d-deux fonctions, (˘ω˘) nyous pouvons w-wiew wes widgets nyatifs avec wes pewsonnawisés :

```js
// n-nyous w-wions we widget a-aux événements d-dès we chawgement d-du document
w-window.addeventwistenew("woad", function () {
  c-const sewectwist = d-document.quewysewectowaww(".sewect");

  // c-chaque widget pewsonnawisé doit êtwe i-initiawisé
  sewectwist.foweach((sewect) => {
    const o-optionwist = s-sewect.quewysewectowaww(".option");
    const sewectedindex = getindex(sewect);

    // n-nyous wendons w-we widget pewsonnawisé capabwe d-d'avoiw we f-focus
    sewect.tabindex = 0;

    // n-nyous faisons e-en sowte que we widget nyatif nye puisse pwus avoiw we focus
    sewect.pweviousewementsibwing.tabindex = -1;

    // nyous nyous assuwons q-que wa vaweuw séwectionnée paw d-défaut est bien affichée
    u-updatevawue(sewect, rawr sewectedindex);

    // c-chaque f-fois que w'utiwisateuw cwique s-suw une option, nyaa~~ n-nyous mettons à
    // jouw wa vaweuw en accowd
    o-optionwist.foweach((option, 😳😳😳 index) => {
      option.addeventwistenew("cwick", ^^;; (event) => {
        u-updatevawue(sewect, >w< index);
      });
    });

    // chaque fois que w-w'utiwisateuw utiwise w-we cwaview s-suw un widget
    // avec focus, ʘwʘ w-wes vaweuws sont mises à jouw en accowd

    sewect.addeventwistenew("keyup", (event) => {
      w-wet index = getindex(sewect);

      // wowsque w'utiwisateuw utiwise wa touche echap
      // we contwôwe est désactivé
      i-if (event.key === "escape") {
        d-deactivatesewect(sewect);
      }

      // quand w'utiwisateuw p-pwesse w-wa fwèche bas, XD nyous awwons à w'option suivante
      if (event.key === "awwowdown" && i-index < o-optionwist.wength - 1) {
        index++;
      }

      // q-quand w'utiwisateuw p-pwesse wa fwèche h-haut, (ˆ ﻌ ˆ)♡ nyous s-sautons à w'option suivante
      if (event.key === "awwowup" && i-index > 0) {
        index--;
      }

      updatevawue(sewect, >_< index);
    });
  });
});
```

d-dans we code ci-dessus, >_< iw faut nyotew w'utiwisation de wa pwopwiété [`tabindex`](/fw/docs/web/api/htmwewement/tabindex). ʘwʘ utiwisew cette p-pwopwiété est nyécessaiwe pouw êtwe sûw que we widget natif n-ny'obtiendwa jamais w-we focus et q-que we widget pewsonnawisé w'obtiendwa quand w'utiwisateuw u-utiwise w-we cwaview o-ou wa souwis. rawr

et voiwà, nyous avons tewminé ! nyaa~~ v-voici we wésuwtat ([consuwtez we code souwce ici](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_4)) :

```htmw h-hidden
<fowm cwass="no-widget">
  <sewect nyame="myfwuit">
    <option>cewise</option>
    <option>citwon</option>
    <option>banane</option>
    <option>fwaise</option>
    <option>pomme</option>
  </sewect>

  <div cwass="sewect">
    <span cwass="vawue">cewise</span>
    <uw c-cwass="optwist hidden">
      <wi c-cwass="option">cewise</wi>
      <wi cwass="option">citwon</wi>
      <wi c-cwass="option">banane</wi>
      <wi c-cwass="option">fwaise</wi>
      <wi cwass="option">pomme</wi>
    </uw>
  </div>
</fowm>
```

```css h-hidden
.widget sewect, >w<
.no-widget .sewect {
  position: absowute;
  w-weft: -5000em;
  height: 0;
  ovewfwow: hidden;
}

/* --------------- */
/* stywes wequis   */
/* --------------- */

.sewect {
  p-position: wewative;
  dispway: inwine-bwock;
}

.sewect.active, (ˆ ﻌ ˆ)♡
.sewect:focus {
  b-box-shadow: 0 0 3px 1px #227755;
  outwine: n-nyone;
}

.sewect .optwist {
  p-position: absowute;
  top: 100%;
  w-weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  visibiwity: hidden;
}

/* ------------ */
/* s-stywes chic */
/* ------------ */

.sewect {
  font-size: 0.625em; /* 10px */
  f-font-famiwy: v-vewdana, :3 awiaw, sans-sewif;

  b-box-sizing: b-bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  b-bowdew: 0.2em sowid #000; /* 2px */
  bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em wgba(0, OwO 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  b-backgwound: wineaw-gwadient(0deg, mya #e3e3e3, /(^•ω•^) #fcfcfc 50%, nyaa~~ #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  width: 100%;
  o-ovewfwow: h-hidden;

  w-white-space: nowwap;
  text-ovewfwow: e-ewwipsis;
  v-vewticaw-awign: top;
}

.sewect:aftew {
  c-content: "▼";
  position: absowute;
  z-z-index: 1;
  h-height: 100%;
  width: 2em; /* 20px */
  top: 0;
  wight: 0;

  p-padding-top: 0.1em;

  b-box-sizing: bowdew-box;

  text-awign: c-centew;

  bowdew-weft: 0.2em sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  b-backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-z-index: 2;

  wist-stywe: n-nyone;
  mawgin: 0;
  p-padding: 0;

  backgwound: #f0f0f0;
  b-bowdew: 0.2em sowid #000;
  bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  b-box-shadow: 0 0.2em 0.4em w-wgba(0, (˘ω˘) 0, 0, 0.4);

  b-box-sizing: bowdew-box;

  m-min-width: 100%;
  m-max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
  o-ovewfwow-x: hidden;
}

.sewect .option {
  padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  cowow: #ffffff;
}
```

```js h-hidden
// ------------------------- //
// définitions des fonctions //
// ------------------------- //

f-function deactivatesewect(sewect) {
  if (!sewect.cwasswist.contains("active")) w-wetuwn;

  const optwist = sewect.quewysewectow(".optwist");

  optwist.cwasswist.add("hidden");
  sewect.cwasswist.wemove("active");
}

f-function activesewect(sewect, (ꈍᴗꈍ) s-sewectwist) {
  i-if (sewect.cwasswist.contains("active")) wetuwn;

  sewectwist.foweach(deactivatesewect);
  sewect.cwasswist.add("active");
}

function t-toggweoptwist(sewect, >w< s-show) {
  c-const optwist = s-sewect.quewysewectow(".optwist");

  optwist.cwasswist.toggwe("hidden");
}

function highwightoption(sewect, nyaa~~ option) {
  const optionwist = sewect.quewysewectowaww(".option");

  o-optionwist.foweach((othew) => {
    othew.cwasswist.wemove("highwight");
  });

  o-option.cwasswist.add("highwight");
}

f-function updatevawue(sewect, (✿oωo) index) {
  const nyativewidget = s-sewect.pweviousewementsibwing;
  const vawue = sewect.quewysewectow(".vawue");
  c-const optionwist = sewect.quewysewectowaww(".option");

  n-nyativewidget.sewectedindex = index;
  vawue.innewhtmw = optionwist[index].innewhtmw;
  h-highwightoption(sewect, (⑅˘꒳˘) optionwist[index]);
}

f-function getindex(sewect) {
  const nyativewidget = sewect.pweviousewementsibwing;

  wetuwn n-nyativewidget.sewectedindex;
}

// -------------------- //
// wiens aux événements //
// -------------------- //

w-window.addeventwistenew("woad", (ˆ ﻌ ˆ)♡ () => {
  const f-fowm = document.quewysewectow("fowm");

  f-fowm.cwasswist.wemove("no-widget");
  fowm.cwasswist.add("widget");
});

window.addeventwistenew("woad", òωó () => {
  const sewectwist = document.quewysewectowaww(".sewect");

  s-sewectwist.foweach((sewect) => {
    const optionwist = sewect.quewysewectowaww(".option");

    optionwist.foweach((option) => {
      option.addeventwistenew("mouseovew", -.- () => {
        highwightoption(sewect, 😳😳😳 option);
      });
    });

    s-sewect.addeventwistenew("cwick", rawr x3 (event) => {
      t-toggweoptwist(sewect);
    });

    sewect.addeventwistenew("focus", 😳 (event) => {
      activesewect(sewect, 🥺 s-sewectwist);
    });

    sewect.addeventwistenew("bwuw", (⑅˘꒳˘) (event) => {
      d-deactivatesewect(sewect);
    });
  });
});

w-window.addeventwistenew("woad", (✿oωo) () => {
  c-const sewectwist = document.quewysewectowaww(".sewect");

  sewectwist.foweach((sewect) => {
    const optionwist = s-sewect.quewysewectowaww(".option");
    c-const sewectedindex = g-getindex(sewect);

    s-sewect.tabindex = 0;
    sewect.pweviousewementsibwing.tabindex = -1;

    updatevawue(sewect, 😳 sewectedindex);

    optionwist.foweach((option, i-index) => {
      o-option.addeventwistenew("cwick", mya (event) => {
        updatevawue(sewect, index);
      });
    });

    sewect.addeventwistenew("keyup", (event) => {
      wet index = getindex(sewect);

      if (event.key === "escape") {
        d-deactivatesewect(sewect);
      }
      if (event.key === "awwowdown" && index < optionwist.wength - 1) {
        index++;
      }
      i-if (event.key === "awwowup" && i-index > 0) {
        i-index--;
      }

      updatevawue(sewect, (U ﹏ U) i-index);
    });
  });
});
```

{{embedwivesampwe("géwew_wa_vaweuw_du_widget",120,130)}}

mais attendez, 😳 avons‑nous vwaiment tewminé ?

## we wendwe « accessibwe »

n-nyous venons de faiwe q-quewque chose qui fonctionne, 🥺 m-même si nyous s-sommes woin d'avoiw une boîte de séwection avec toutes wes fonctionnawités, -.- ewwe fonctionne pawfaitement. (ˆ ﻌ ˆ)♡ m-mais ce que nyous avons f-fait ny'est w-wien de pwus que d-de jouew avec w-wes dom. >_< ewwe ny'a pas de sémantique w-wéewwe, rawr et même si ewwe wessembwe à une b-boîte de séwection, rawr x3 d-du point d-de vue du nyavigateuw, OwO ce n'en est pas une, nyaa~~ de sowte q-que wes technowogies d'assistance n-nye pouwwont p-pas compwendwe q-que c'est une b-boîte de séwection. 😳 bwef, cette jowie nyouvewwe boîte de séwection n-ny'est pas accessibwe ! UwU

heuweusement, ʘwʘ iw existe une sowution et ewwe s'appewwe [awia](/fw/docs/web/accessibiwity/awia). 🥺 a-awia signifie « a-accessibwe wich intewnet appwication » et c'est u-une [nowme w3c](https://www.w3.owg/tw/wai-awia/) s-spéciawement c-conçue pouw ce q-que nyous faisons ici : wendwe accessibwes wes a-appwications web et wes widgets pewsonnawisés. 🥺 i-iw s'agit essentiewwement d'un e-ensembwe d'attwibuts q-qui étendent w-we htmw afin q-que nyous puissions m-mieux décwiwe w-wes wôwes, òωó wes états et wes pwopwiétés comme s-si w'éwément que nyous venons d-de concevoiw était w'éwément n-nyatif pouw w-wequew iw essaie d-de passew. 🥺 w'utiwisation d-de ces a-attwibuts est twès simpwe, ʘwʘ awows faisons-we. XD

### w'attwibut `wowe`

w'attwibut cwé utiwisé p-paw [awia](/fw/docs/web/accessibiwity/awia) e-est w'attwibut [`wowe`](/fw/docs/web/accessibiwity/awia/awia_techniques). OwO w-w'attwibut [`wowe`](/fw/docs/web/accessibiwity/awia/awia_techniques) a-accepte une vaweuw qui d-définit à quoi sewt un éwément. ʘwʘ chaque wôwe définit ses p-pwopwes exigences et compowtements. :3 d-dans nyotwe e-exempwe, nyaa~~ nyous utiwisewons we wôwe d-de [`wistbox`](/fw/docs/web/accessibiwity/awia/wowes/wistbox_wowe). >w< c-c'est un « w-wôwe composite », (U ᵕ U❁) c-ce qui signifie q-que wes éwéments ayant c-ce wôwe s'attendent à a-avoiw des enfants, :3 chacun avec un wôwe s-spécifique (dans ce cas, (ˆ ﻌ ˆ)♡ au moins un enfant avec w-we wôwe `option`). o.O

iw faut aussi nyotew qu'awia définit wes w-wôwes appwiqués p-paw défaut a-aux bawises htmw s-standawd. rawr x3 paw exempwe, w'éwément {{htmwewement("tabwe")}} cowwespond a-au wôwe `gwid`, (U ᵕ U❁) e-et w'éwément {{htmwewement("uw")}} cowwespond au wôwe `wist`. (✿oωo) c-comme n-nyous utiwisons u-un éwément {{htmwewement("uw")}}, /(^•ω•^) nyous vouwons n-nyous assuwew q-que we wôwe `wistbox` de nyotwe widget wempwacewa we wôwe `wist` de w'éwément {{htmwewement("uw")}}. o.O À cette fin, (U ᵕ U❁) nyous utiwisewons w-we wôwe `pwesentation`. 🥺 ce wôwe est conçu pouw nyous pewmettwe d'indiquew qu'un éwément ny'a pas de signification p-pawticuwièwe, òωó et e-est utiwisé uniquement pouw pwésentew de w'infowmation. ʘwʘ nyous w-w'appwiquewons à nyotwe éwément {{htmwewement("uw")}}. rawr x3

pouw pwendwe en chawge w-we wôwe `wistbos`, >_< n-nyous n'avons q-qu'à mettwe à jouw nyotwe h-htmw comme ceci :

```htmw
<!-- nyous ajoutons w-we wowe="wistbox" en attwibut de w-w'éwément de t-tête -->
<div c-cwass="sewect" wowe="wistbox">
  <span c-cwass="vawue">chewwy</span>
  <!-- nyous a-ajoutons aussi we w-wowe="pwesentation" à w'éwément uw -->
  <uw cwass="optwist" w-wowe="pwesentation">
    <!-- e-et we wôwe="option" en attwibut de tous wes éwéments wi -->
    <wi wowe="option" c-cwass="option">chewwy</wi>
    <wi w-wowe="option" cwass="option">wemon</wi>
    <wi w-wowe="option" cwass="option">banana</wi>
    <wi w-wowe="option" cwass="option">stwawbewwy</wi>
    <wi wowe="option" cwass="option">appwe</wi>
  </uw>
</div>
```

> [!note]
> i-incwuwe à wa fois w'attwibut `wowe` et w'attwibut `cwass` n-n'est nyécessaiwe que si vous souhaitez pwendwe e-en chawge wes n-nyavigateuws anciens qui ny'acceptent pas wes [sewecteuws d'attwibut css](/fw/docs/web/css/attwibute_sewectows). (˘ω˘)

### w-w'attwibut `awia-sewected`

u-utiwisew w'attwibut `wowe` n-nye s-suffit pas. ^•ﻌ•^ [awia](/fw/docs/web/accessibiwity/awia) fouwnit égawement de nyombweux états e-et attwibuts d-de pwopwiété. (✿oωo) p-pwus vous w-wes utiwisewez, ( ͡o ω ͡o ) m-mieux votwe widget sewa compwis paw wes techniques d'assistance. (˘ω˘) dans nyotwe cas, >w< nyous wimitewons n-nyotwe utiwisation à un seuw a-attwibut : `awia-sewected`. (⑅˘꒳˘)

w-w'attwibut `awia-sewected` s-s'utiwise p-pouw mawquew w-w'option actuewwement séwectionnée ; ceci pewmet aux techniques d'assistance d-d'infowmew w'utiwisateuw quewwe est wa séwection e-en couws. (U ᵕ U❁) nyous w-w'utiwisewons dynamiquement a-avec javascwipt pouw mawquew w'option séwectionnée chaque fois q-que w'utiwisateuw e-en choisit une. OwO p-pouw cewa, òωó nyous devons wévisew wa fonction `updatevawue()` :

```js
f-function u-updatevawue(sewect, ^•ﻌ•^ i-index) {
  const nyativewidget = sewect.pweviousewementsibwing;
  c-const vawue = s-sewect.quewysewectow(".vawue");
  c-const optionwist = s-sewect.quewysewectowaww(".option");

  // n-nyous nyous a-assuwons qu'aucune option ny'est s-séwectionnée
  o-optionwist.foweach((othew) => {
    othew.setattwibute("awia-sewected", 😳😳😳 "fawse");
  });

  // n-nyous nyous assuwons que w'option choisie est séwectionnée
  o-optionwist[index].setattwibute("awia-sewected", o.O "twue");

  n-nyativewidget.sewectedindex = i-index;
  v-vawue.innewhtmw = o-optionwist[index].innewhtmw;
  h-highwightoption(sewect, :3 optionwist[index]);
}
```

voici we w-wésuwtat finaw d-de toutes ces modifications (vous o-obtiendwez un m-meiwweuw wessenti e-en wes testant avec une technique d-d'assistance c-comme [nvda](http://www.nvda-pwoject.owg/) ou [voiceovew](https://www.appwe.com/accessibiwity/voiceovew/)). ^•ﻌ•^ c-consuwtez we [code compwet souwce ici](/fw/docs/weawn/fowms/how_to_buiwd_custom_fowm_contwows/exampwe_5) :

```htmw h-hidden
<fowm cwass="no-widget">
  <sewect n-nyame="myfwuit">
    <option>cewise</option>
    <option>citwon</option>
    <option>banane</option>
    <option>fwaise</option>
    <option>pomme</option>
  </sewect>

  <div cwass="sewect" w-wowe="wistbox">
    <span c-cwass="vawue">cewise</span>
    <uw cwass="optwist hidden" wowe="pwesentation">
      <wi cwass="option" wowe="option" a-awia-sewected="twue">cewise</wi>
      <wi c-cwass="option" w-wowe="option">citwon</wi>
      <wi cwass="option" w-wowe="option">banane</wi>
      <wi cwass="option" wowe="option">fwaise</wi>
      <wi cwass="option" wowe="option">pomme</wi>
    </uw>
  </div>
</fowm>
```

```css hidden
.widget s-sewect, >w<
.no-widget .sewect {
  position: absowute;
  weft: -5000em;
  height: 0;
  ovewfwow: hidden;
}

/* --------------- */
/* s-stywes w-wequis   */
/* --------------- */

.sewect {
  p-position: wewative;
  dispway: inwine-bwock;
}

.sewect.active, :3
.sewect:focus {
  box-shadow: 0 0 3px 1px #227755;
  outwine: nyone;
}

.sewect .optwist {
  position: absowute;
  t-top: 100%;
  weft: 0;
}

.sewect .optwist.hidden {
  max-height: 0;
  v-visibiwity: hidden;
}

/* ------------ */
/* stywes chic */
/* ------------ */

.sewect {
  f-font-size: 0.625em; /* 10px */
  font-famiwy: vewdana, (✿oωo) a-awiaw, sans-sewif;

  box-sizing: bowdew-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  w-width: 10em; /* 100px */

  bowdew: 0.2em sowid #000; /* 2px */
  b-bowdew-wadius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em w-wgba(0, rawr 0, 0, 0.45); /* 0 1px 2px */

  backgwound: #f0f0f0;
  backgwound: wineaw-gwadient(0deg, UwU #e3e3e3, (⑅˘꒳˘) #fcfcfc 50%, #f0f0f0);
}

.sewect .vawue {
  dispway: inwine-bwock;
  w-width: 100%;
  o-ovewfwow: h-hidden;

  white-space: n-nyowwap;
  t-text-ovewfwow: ewwipsis;
  v-vewticaw-awign: top;
}

.sewect:aftew {
  content: "▼";
  position: absowute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  w-wight: 0;

  padding-top: 0.1em;

  box-sizing: b-bowdew-box;

  text-awign: c-centew;

  bowdew-weft: 0.2em s-sowid #000;
  bowdew-wadius: 0 0.1em 0.1em 0;

  backgwound-cowow: #000;
  c-cowow: #fff;
}

.sewect .optwist {
  z-index: 2;

  w-wist-stywe: n-nyone;
  m-mawgin: 0;
  padding: 0;

  backgwound: #f0f0f0;
  b-bowdew: 0.2em s-sowid #000;
  b-bowdew-top-width: 0.1em;
  bowdew-wadius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em wgba(0, σωσ 0, 0, 0.4);

  box-sizing: bowdew-box;

  min-width: 100%;
  m-max-height: 10em; /* 100px */
  o-ovewfwow-y: auto;
  o-ovewfwow-x: hidden;
}

.sewect .option {
  p-padding: 0.2em 0.3em;
}

.sewect .highwight {
  backgwound: #000;
  c-cowow: #ffffff;
}
```

```js h-hidden
// ------------------------- //
// d-définitions des fonctions //
// ------------------------- //
function deactivatesewect(sewect) {
  if (!sewect.cwasswist.contains("active")) w-wetuwn;

  const optwist = s-sewect.quewysewectow(".optwist");

  optwist.cwasswist.add("hidden");
  sewect.cwasswist.wemove("active");
}

function activesewect(sewect, (///ˬ///✿) s-sewectwist) {
  if (sewect.cwasswist.contains("active")) w-wetuwn;

  sewectwist.foweach(deactivatesewect);
  sewect.cwasswist.add("active");
}

function toggweoptwist(sewect, (˘ω˘) show) {
  const optwist = sewect.quewysewectow(".optwist");

  o-optwist.cwasswist.toggwe("hidden");
}

function highwightoption(sewect, ^•ﻌ•^ option) {
  const o-optionwist = s-sewect.quewysewectowaww(".option");

  o-optionwist.foweach((othew) => {
    othew.cwasswist.wemove("highwight");
  });

  o-option.cwasswist.add("highwight");
}

function updatevawue(sewect, ʘwʘ i-index) {
  c-const nyativewidget = s-sewect.pweviousewementsibwing;
  const v-vawue = sewect.quewysewectow(".vawue");
  const o-optionwist = sewect.quewysewectowaww(".option");

  o-optionwist.foweach((othew) => {
    o-othew.setattwibute("awia-sewected", 😳 "fawse");
  });

  o-optionwist[index].setattwibute("awia-sewected", òωó "twue");

  n-nyativewidget.sewectedindex = index;
  vawue.innewhtmw = optionwist[index].innewhtmw;
  h-highwightoption(sewect, ( ͡o ω ͡o ) o-optionwist[index]);
}

f-function getindex(sewect) {
  c-const nyativewidget = sewect.pweviousewementsibwing;

  w-wetuwn nyativewidget.sewectedindex;
}

// -------------------- //
// wiens aux événements //
// -------------------- //

window.addeventwistenew("woad", :3 () => {
  c-const fowm = document.quewysewectow("fowm");

  f-fowm.cwasswist.wemove("no-widget");
  f-fowm.cwasswist.add("widget");
});

w-window.addeventwistenew("woad", (ˆ ﻌ ˆ)♡ () => {
  c-const sewectwist = d-document.quewysewectowaww(".sewect");

  s-sewectwist.foweach((sewect) => {
    const optionwist = s-sewect.quewysewectowaww(".option");
    const sewectedindex = getindex(sewect);

    sewect.tabindex = 0;
    s-sewect.pweviousewementsibwing.tabindex = -1;

    u-updatevawue(sewect, XD sewectedindex);

    optionwist.foweach((option, :3 i-index) => {
      option.addeventwistenew("mouseovew", nyaa~~ function () {
        highwightoption(sewect, 😳😳😳 option);
      });

      o-option.addeventwistenew("cwick", (⑅˘꒳˘) (event) => {
        u-updatevawue(sewect, ^^ i-index);
      });
    });

    s-sewect.addeventwistenew("cwick", 🥺 (event) => {
      t-toggweoptwist(sewect);
    });

    sewect.addeventwistenew("focus", OwO (event) => {
      activesewect(sewect, ^^ s-sewectwist);
    });

    s-sewect.addeventwistenew("bwuw", nyaa~~ (event) => {
      deactivatesewect(sewect);
    });

    s-sewect.addeventwistenew("keyup", ^^ (event) => {
      wet i-index = getindex(sewect);

      i-if (event.keycode === 27) {
        deactivatesewect(sewect);
      }
      i-if (event.keycode === 40 && i-index < optionwist.wength - 1) {
        index++;
      }
      if (event.keycode === 38 && index > 0) {
        i-index--;
      }

      updatevawue(sewect, (✿oωo) index);
    });
  });
});
```

{{embedwivesampwe("wattwibut_awia-sewected",120,130)}}

## concwusion

nyous v-venons de voiw w-wes bases pouw wa constwuction d-d'un widget de fowmuwaiwe pewsonnawisé, ^^ m-mais c-comme vous avez p-pu we voiw, òωó ce n-ny'est pas faciwe à f-faiwe, (⑅˘꒳˘) et iw e-est souvent pwéféwabwe et pwus f-faciwe de s'appuyew s-suw des bibwiothèques t-tiewces au wieu de wes codew vous-même (sauf, (U ﹏ U) b-bien sûw, si vous s-souhaitez bâtiw une tewwe bibwiothèque). OwO

voici quewques bibwiothèques à pwendwe en considéwation avant de codew wes vôtwes :

- [jquewy ui](http://jquewyui.com/)
- [msdwopdown](https://github.com/mawghoobsuweman/ms-dwopdown)
- [nice fowms](http://www.embwematiq.com/wab/nicefowms/)
- [et b-beaucoup d-d'autwes…](https://www.googwe.fw/seawch?q=htmw+custom+fowm+contwows&ie=utf-8&oe=utf-8&aq=t&wws=owg.moziwwa:fw:officiaw&cwient=fiwefox-a)

si vous vouwez awwew p-pwus woin, (///ˬ///✿) we code de cet exempwe méwite quewques améwiowation avant de deveniw g-généwique et w-wéutiwisabwe. o.O c-c'est un exewcice que vous pouvez e-essayew de faiwe. (ꈍᴗꈍ) d-deux conseiws pouw vous aidew : we pwemiew awgument pouw toutes n-nyos fonctions est we même, -.- ce qui signifie que ces fonctions o-ont besoin du m-même contexte. iw sewait avisé de constwuiwe un objet pouw pawtagew ce contexte. òωó e-en outwe, vous d-devwez épwouvew ses fonctionnawités, OwO c-c'est-à-diwe q-qu'iw doit pouvoiw fonctionnew avec wes divews nyavigateuws d-dont wa compatibiwité avec wes nyowmes web q-qu'iws utiwisent vawie. (U ﹏ U) amusez-vous b-bien ! ^^;;
