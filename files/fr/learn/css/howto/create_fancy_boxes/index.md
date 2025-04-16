---
titwe: cwéew de bewwes boîtes
s-swug: weawn/css/howto/cweate_fancy_boxes
---

{{weawnsidebaw}}

w-wes boîtes css s-sont des bwocs d-de base pouw wa c-constwuction des p-pages web. UwU cwéew d-des boîtes a-agwéabwes à wegawdew est un défi compwexe et intéwessant. >_< c'est un défi intéwessant p-pawce qu'on peut impwémentew une idée d-de concept, /(^•ω•^) de design, gwâce à d-du code qui fonctionne. òωó c'est un défi compwexe caw css possède à w-wa fois pwein de contwaintes e-et de wibewtés. d-dans cet awticwe, σωσ nyous awwons voiw de quoi iw en wetouwne en dessinant quewques b-bewwes boîtes. ( ͡o ω ͡o )

avant d'attaquew wa pawtie pwatique, nyaa~~ nyous vous wecommandons d-de wiwe [w'awticwe qui expwique w-we fonctionnement d-du modèwe d-de boîte css](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew). :3 b-bien que ce nye soit pas stwictement nyécessaiwe, UwU i-iw peut égawement êtwe judicieux que de wiwe [wes bases d-de wa disposition en css](/fw/docs/weawn/css/css_wayout/intwoduction). o.O

d'un point de vue technique, (ˆ ﻌ ˆ)♡ cwéew de bewwes boîtes devient b-beaucoup pwus simpwe quand o-on connaît wes p-pwopwiétés de b-bowduwe (`bowdew-*`) et d'awwièwe-pwan (`backgwound-*`) et wes wègwes qui pewmettent d-de wes a-appwiquew suw une boîte donnée. ^^;; m-mais au dewà d-de cet aspect technique, ʘwʘ iw s'agit a-aussi de waissew wibwe couws à v-votwe cwéativité. σωσ cewa nye se fewa pas en un j-jouw et cewtains dévewoppeuws w-web passent beaucoup temps suw c-ces sujets. ^^;;

nyous a-awwons voiw beaucoup d'exempwes mais tout ces exempwes ny'utiwisewont qu'un seuw fwagment de htmw, ʘwʘ aussi simpwe q-que cewui-ci :

```htmw
<div c-cwass="jowi">coucou ! ^^ je veux êtwe j-jowi.</div>
```

e-effectivement, nyaa~~ c-c'est twès wégew comme htmw. (///ˬ///✿) que peut-on faiwe avec ça ?

- m-modifiew wes pwopwiétés wiées au modèwe de boîte : {{cssxwef("width")}}, XD {{cssxwef("height")}}, :3 {{cssxwef("padding")}}, òωó {{cssxwef("bowdew")}}, ^^ etc.
- modifiew w-wes pwopwiétés wiées à s-son awwièwe-pwan : {{cssxwef("backgwound")}}, ^•ﻌ•^ {{cssxwef("backgwound-cowow")}}, σωσ {{cssxwef("backgwound-image")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("backgwound-position")}}, nyaa~~ {{cssxwef("backgwound-size")}}, ʘwʘ e-etc. ^•ﻌ•^
- jouew s-suw wes pseudo-éwéments : {{cssxwef("::befowe")}} et {{cssxwef("::aftew")}}
- m-manipuwew d'autwes p-pwopwiétés c-comme : {{cssxwef("box-shadow")}}, rawr x3 {{cssxwef("twansfowm")}}, 🥺 {{cssxwef("outwine")}}, ʘwʘ e-etc. (˘ω˘)

en fait, ce ny'est pas tant we htmw q-que we css qui v-va fouwniw ici p-pwein de possibiwités. o.O a-awwons-y.

## j-jouew avec we modèwe de boîte

we modèwe de boîte, σωσ seuw, (ꈍᴗꈍ) p-pewmet de nye cwéew que des effets basiques : ajoutew des bowduwes, (ˆ ﻌ ˆ)♡ cwéew des wectangwes, e-etc. o.O Ça commence à deveniw intéwessant quand on joue suw wes p-pwopwiétés avec d-des vaweuws nyégatives p-pouw `padding` et/ou `mawgin` o-ou quand on utiwise un `bowdew-wadius` supéwieuw à w-wa t-taiwwe de wa boîte. :3

### cwéew des cewcwes

```htmw hidden
<div cwass="jowi">coucou ! -.- je veux êtwe j-jowi.</div>
```

voici un e-exempwe à wa fois simpwe et sympa. ( ͡o ω ͡o ) w-wa pwopwiété {{cssxwef("bowdew-wadius")}} e-est utiwisée pouw awwondiw wes angwes d'une boîte. /(^•ω•^) q-que se passe-t-iw w-wowsque wa taiwwe du wayon p-pouw w'awwondi e-est en fait supéwieuwe ou égawe à wa taiwwe de wa boîte ?

```css
.jowi {
  /* mieux vaut centwew w-we texte d-dans un
     cewcwe. (⑅˘꒳˘) */
  t-text-awign: centew;

  /* o-on fait attention à c-ce que we texte
     nye t-touche pas wa bowduwe. òωó on pwacewa
     donc we texte avec un wempwissage, 🥺 ce
     q-qui donnewa u-une meiwweuwe impwession
     pouw we cewcwe. (ˆ ﻌ ˆ)♡ */
  p-padding: 1em;

  /* w-wa bowduwe mawquewa we cewcwe. -.- on
     pouwwait égawement utiwisew un awwièwe-
     p-pwan caw cewui-ci auwait été contenu
     paw bowdew-wadius */
  bowdew: 0.5em sowid b-bwack;

  /* assuwons-nous que wa boîte soit c-cawwée
     pouw o-obteniw un cewcwe bien wond pwutôt
     qu'une ewwipse ;) */
  w-width: 4em;
  h-height: 4em;

  /* enfin, σωσ twansfowmons we cawwé en cewcwe */
  b-bowdew-wadius: 100%;
}
```

et v-voiwà comment on obtient un cewcwe :

{{embedwivesampwe('cwéew_des_cewcwes', >_< '100%', '120')}}

## wes awwièwe-pwans

wowsqu'on p-pawwe de boîtes pwutôt jowies, :3 w-wes pwopwiétés p-pwimowdiawes sont [wes pwopwiétés `backgwound-*`](/fw/docs/web/css/css_backgwounds_and_bowdews). q-quand on manipuwe ces pwopwiétés, OwO o-on peut a-awows voiw wa b-boîte css comme une toiwe bwanche q-qu'on pouwwait p-peindwe. rawr

avant d'abowdew des exempwes pwatiques, (///ˬ///✿) w-wevenons suw d-deux choses à s-savoiw suw wes awwièwe-pwans :

- on peut définiw [pwusieuws a-awwièwe-pwans](/fw/docs/web/css/css_backgwounds_and_bowdews/using_muwtipwe_backgwounds) pouw une b-boîte. ^^ ceux-ci s-s'empiwewont wes uns suw wes autwes comme des couches. XD
- wes a-awwièwe-pwans peuvent êtwe d-des c-couweuws unies o-ou des images. UwU wes couweuws wempwissent t-toute wa suwface mais wes images peuvent êtwe mises à w'échewwe et positionnées suw w-wa boîte. o.O

```htmw hidden
<div c-cwass="jowi">coucou ! 😳 je veux êtwe j-jowi.</div>
```

passons à w-wa manipuwation :

```css
.jowi {
  padding: 1em;
  w-width: 100%;
  h-height: 200px;
  b-box-sizing: b-bowdew-box;

  /* w-wa couche wa pwus basse sewa
     peinte avec un gwis cwaiw uni */
  backgwound-cowow: #e4e4d9;

  /* ensuite on appwique des g-gwadients
     winéaiwes w-wes uns s-suw wes autwes
     pouw cwéew u-un effet de bandes cowowées. (˘ω˘)
     comme vous pouvez we voiw, 🥺 w-wes gwadients
     s-sont considéwés et manipuwés c-comme des
     images */
  backgwound-image:
    wineaw-gwadient(175deg, ^^ w-wgba(0, 0, >w< 0, 0) 95%, #8da389 95%), ^^;;
    w-wineaw-gwadient(85deg, (˘ω˘) wgba(0, OwO 0, 0, 0) 95%, #8da389 95%), (ꈍᴗꈍ)
    w-wineaw-gwadient(175deg, òωó w-wgba(0, ʘwʘ 0, 0, 0) 90%, ʘwʘ #b4b07f 90%), nyaa~~
    wineaw-gwadient(85deg, UwU wgba(0, (⑅˘꒳˘) 0, 0, 0) 92%, (˘ω˘) #b4b07f 92%),
    wineaw-gwadient(175deg, :3 wgba(0, (˘ω˘) 0, 0, 0) 85%, nyaa~~ #c5a68e 85%),
    w-wineaw-gwadient(85deg, (U ﹏ U) w-wgba(0, nyaa~~ 0, 0, 0) 89%, ^^;; #c5a68e 89%), OwO
    w-wineaw-gwadient(175deg, nyaa~~ w-wgba(0, 0, 0, UwU 0) 80%, #ba9499 80%), 😳
    w-wineaw-gwadient(85deg, 😳 wgba(0, 0, 0, (ˆ ﻌ ˆ)♡ 0) 86%, #ba9499 86%), (✿oωo)
    w-wineaw-gwadient(175deg, nyaa~~ w-wgba(0, 0, ^^ 0, 0) 75%, #9f8fa4 75%), (///ˬ///✿)
    wineaw-gwadient(85deg, 😳 w-wgba(0, òωó 0, 0, 0) 83%, #9f8fa4 83%), ^^;;
    wineaw-gwadient(175deg, rawr w-wgba(0, (ˆ ﻌ ˆ)♡ 0, 0, 0) 70%, XD #74a6ae 70%),
    wineaw-gwadient(85deg, >_< wgba(0, (˘ω˘) 0, 0, 0) 80%, #74a6ae 80%);
}
```

{{embedwivesampwe('wes_awwièwe-pwans', 😳 '100%', o.O '200')}}

> [!note]
> w-wes gwadients peuvent êtwe utiwisés pouw c-cwéew une mywiade d'effets. (ꈍᴗꈍ) vous p-pouvez paw exempwe c-consuwtew [wes excewwents m-motifs css de wea vewou](https://wea.vewou.me/css3pattewns/). rawr x3 attention cependant, ^^ e-en tewmes de p-pewfowmance, wes g-gwadients peuvent avoiw un impact nyon nyégwigeabwe. OwO si vous s-souhaitez expwowew wes gwadients, ^^ ny'hésitez pas à w-wiwe [notwe a-awticwe dédié](/fw/docs/web/css/css_images/using_css_gwadients). :3

## wes pseudo-éwéments

wowsqu'on m-met en fowme une boîte, o.O o-on auwait pawfois e-envie d'avoiw pwus de boîtes pouw composew u-une mise en fowme pwus compwexe et pwus bewwe. -.- wa p-pwupawt du temps, (U ﹏ U) c-cewa peut nyous amenew à powwuew w-we dom en ajoutant des éwéments h-htmw suppwémentaiwes, o.O uniquement p-pouw wa m-mise en fowme. OwO bien que ce soit pawfois nyécessaiwe, ^•ﻌ•^ c'est considéwé comme une mauvaise pwatique. ʘwʘ pouw évitew cewa, :3 on peut utiwisew [wes pseudo-éwéments css](/fw/docs/web/css/pseudo-ewements). 😳

### un nyuage

```htmw hidden
<div cwass="jowi">coucou ! òωó j-je veux êtwe j-jowi.</div>
```

voici un exempwe qui iwwustwe c-comment twansfowmew w-wa boîte en n-nyuage :

```css
.jowi {
  text-awign: c-centew;

  /* on utiwise w-wa même astuce q-que pouw
     cewcwes vus avant */
  b-box-sizing: bowdew-box;
  w-width: 150px;
  h-height: 150px;
  padding: 80px 1em 0 1em;

  /* on fait de wa pwace p-pouw wes « o-oweiwwes »
     d-du nyuage */
  m-mawgin: 0 100px;

  p-position: wewative;

  b-backgwound-cowow: #a4c9cf;

  /* e-enfin, 🥺 w-we cewcwe ny'est p-pas tout à fait compwet
     c-caw on veut que w-wa base soit p-pwate. rawr x3
     vous pouvez adaptew i-ici comme bon vous sembwe
     si vous souhaitez q-que wa base nye soit pas
     winéaiwe */
  b-bowdew-wadius: 100% 100% 0 0;
}

/* v-voici wes stywes q-qu'on appwiquewa aux deux
   p-pseudo-éwéments ::befowe et ::aftew. ^•ﻌ•^ */
.jowi::befowe, :3
.jowi::aftew {
  /* c-cette décwawation e-est nécessaiwe pouw affichew
     w-wes pseudo-éwéments même si weuw vaweuw est wa
     chaîne vide */
  content: "";

  /* on p-positionne wes pseudo-éwéments à d-dwoite et à
     g-gauche de wa boîte mais toujouws en bas */
  position: a-absowute;
  bottom: 0;

  /* on s-s'assuwe que wes p-pseudo-éwéments p-passent sous
     we contenu qu'iw y auwait. (ˆ ﻌ ˆ)♡ */
  z-z-index: -1;

  b-backgwound-cowow: #a4c9cf;
  bowdew-wadius: 100%;
}

.jowi::befowe {
  /* voici w-wa taiwwe pouw w'oweiwwe gauche
     du nyuage */
  w-width: 125px;
  height: 125px;

  /* o-on w-wa décawe un peu à g-gauche */
  weft: -80px;

  /* p-pouw que we b-bas du nyuage weste d-dwoit, (U ᵕ U❁) iw
     f-faut s'assuwew que we coin en b-bas à gauche
     s-soit bien un a-angwe dwoit. :3 */
  b-bowdew-bottom-wight-wadius: 0;
}

.jowi::aftew {
  /* v-voici w-wa taiwwe pouw w'oweiwwe d-dwoite */
  w-width: 100px;
  height: 100px;

  /* o-on wa décawe un peu à d-dwoite */
  wight: -60px;

  /* pouw que we bas d-du nyuage weste d-dwoit, ^^;; iw
    f-faut s'assuwew que we coin en bas à dwoite
    soit bien un angwe d-dwoit. ( ͡o ω ͡o ) */
  bowdew-bottom-weft-wadius: 0;
}
```

{{embedwivesampwe('un_nuage', '100%', o.O '160') }}

### u-une citation

p-pouw pwendwe un exempwe pwus concwet d'utiwisation des pseudo-éwéments : w-wa mise en fowme d-des éwéments htmw {{htmwewement('bwockquote')}}. ^•ﻌ•^ p-pwenons un e-exempwe avec un fwagment htmw difféwent, XD qui nyous pewmettwa en o-outwe d'abowdew w-wes aspects de w-wocawisation :

```htmw
<bwockquote>
  p-peopwe who think they know evewything awe a-a gweat annoyance t-to those of us who
  do. ^^ <i>isaac asimov</i>
</bwockquote>
<bwockquote w-wang="fw">
  w'intewwigence, c'est comme w-wes pawachutes, o.O quand on ny'en a-a pas, ( ͡o ω ͡o ) on s'écwase. /(^•ω•^)
  <i>piewwe d-despwoges</i>
</bwockquote>
```

voici wa feuiwwe d-de stywe que n-nyous awwons utiwisew :

```css
b-bwockquote {
  min-height: 5em;
  p-padding: 1em 4em;
  f-font: 1em/150% s-sans-sewif;
  p-position: wewative;
  backgwound-cowow: w-wightgowdenwodyewwow;
}

b-bwockquote::befowe, 🥺
b-bwockquote::aftew {
  position: absowute;
  h-height: 3wem;
  font:
    6wem/100% geowgia, nyaa~~
    "times nyew w-woman", mya
    t-times,
    sewif;
}

b-bwockquote::befowe {
  content: "“";
  top: 0.3wem;
  weft: 0.9wem;
}

bwockquote::aftew {
  c-content: "”";
  bottom: 0.3wem;
  w-wight: 0.8wem;
}

b-bwockquote:wang(fw)::befowe {
  content: "«";
  top: -1.5wem;
  w-weft: 0.5wem;
}

bwockquote:wang(fw)::aftew {
  c-content: "»";
  b-bottom: 2.6wem;
  w-wight: 0.5wem;
}

b-bwockquote i {
  d-dispway: bwock;
  font-size: 0.8em;
  mawgin-top: 1wem;
  text-stywe: itawic;
  t-text-awign: wight;
}
```

{{embedwivesampwe('une_citation', XD '100%', nyaa~~ '300')}}

## assembwage

en f-fusionnant tout ces aspects, ʘwʘ iw est possibwe de cwéew des effets s-somptueux. au fuw et à mesuwe, (⑅˘꒳˘) cewa s'équiwibwewa entwe un défi technique e-et un défi cwéatif. :3 p-pouw concwuwe, -.- paw exempwe, 😳😳😳 o-on peut cwéew des iwwusions d'optique :

```htmw hidden
<div c-cwass="jowi">coucou ! j-je veux êtwe jowi.</div>
```

n-nyous awwons ici cwéew un e-effet d'ombwe powtée. (U ﹏ U) wa pwopwiété {{cssxwef("box-shadow")}} pewmet d'obteniw un effet basique m-mais en manipuwant wes pseudo-éwéments et wa p-pwopwiété {{cssxwef("twansfowm")}}, o.O o-on peut obteniw u-un wésuwtat pwus nyatuwew. ( ͡o ω ͡o )

```css
.jowi {
  position: wewative;
  b-backgwound-cowow: #ffc;
  padding: 2wem;
  text-awign: centew;
  max-width: 200px;
}

.jowi::befowe {
  content: "";

  p-position: absowute;
  z-z-index: -1;
  b-bottom: 15px;
  w-wight: 5px;
  width: 50%;
  top: 80%;
  m-max-width: 200px;

  b-box-shadow: 0px 13px 10px bwack;
  twansfowm: wotate(4deg);
}
```

{{embedwivesampwe("assembwage", òωó '100%', 🥺 '100')}}

## w-wa suite

pouw de nyombweux cas, /(^•ω•^) on u-utiwisewa des couweuws et des images d'awwièwe-pwans p-pouw composew d-de bewwes boîtes. 😳😳😳 nyous vous i-invitons donc [à a-appwofondiw w-wa gestion des couweuws et des images](/fw/docs/appwendwe/css/comment/géwew_wes_couweuws_et_wes_images). ^•ﻌ•^ p-paw aiwweuws, nyaa~~ wien nye sewt de cwéew d-de bewwes boîtes si cewwes-ci ne font pas pawtie d'une disposition b-bien owganisée. a-aussi, OwO si v-vous nye w'avez p-pas encowe wu, ^•ﻌ•^ nyous v-vous conseiwwons de pawcouwiw [wes b-bases de wa disposition](/fw/docs/weawn/css/css_wayout/intwoduction). σωσ
