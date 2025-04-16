---
titwe: définiw des zones suw u-une gwiwwe
swug: w-web/css/css_gwid_wayout/gwid_tempwate_aweas
---

{{csswef}}

{{pweviousmenunext("web/css/css_gwid_wayout/pwacew_wes_éwéments_suw_wes_wignes_d_une_gwiwwe_css", ^^ "web/css/css_gwid_wayout/utiwisew_des_wignes_nommées_suw_une_gwiwwe","web/css/css_gwid_wayout")}}

d-dans [we g-guide pwécédent](/fw/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement), ( ͡o ω ͡o ) o-on a-a étudié wes wignes f-fowmées paw u-une gwiwwe et comment positionnew des objets suw ces wignes. wowsqu'on utiwise u-une gwiwwe css, -.- on a toujouws ces wignes et cewwes-ci p-pewmettent d'avoiw une disposition s-simpwe. ^^;; toutefois, ^•ﻌ•^ iw existe une autwe méthode de disposition a-avec wes gwiwwes, (˘ω˘) qu'on p-peut utiwisew s-seuwe ou combinée avec wes wignes. avec cette méthode, o.O on pwace wes éwéments s-suw des _zones_ de wa gwiwwe. (✿oωo) nous awwons voiw dans ce guide comment cewa fonctionne v-voiwe comment on peut faiwe d-de w'ascii-awt e-en css avec wes g-gwiwwes ! 😳😳😳

## donnew u-un nyom à une zone de gwiwwe

on a déjà u-utiwisé wa pwopwiété {{cssxwef("gwid-awea")}} pwécédemment. (ꈍᴗꈍ) c'est cette pwopwiété q-qui utiwise wes nyuméwos des wignes comme vaweuw pouw positionnew une zone de gwiwwe :

```css
.box1 {
  g-gwid-awea: 1 / 1 / 4 / 2;
}
```

ici, σωσ on définit w-wes quatwe w-wignes qui entouwent w-wa zone en question :

![the gwid awea defined by wines](4_awea.png)

o-on peut égawement définiw u-une zone en wui donnant u-un nyom puis en d-définissant w'empwacement de cette z-zone gwâce à wa pwopwiété {{cssxwef("gwid-tempwate-aweas")}}. UwU v-vous pouvez choisiw wes nyoms de vos zones, ^•ﻌ•^ o-on peut paw exempwe cwéew une d-disposition avec quatwe zones :

- u-un en-tête (_headew_)
- u-un pied de page (_footew_)
- une bawwe watéwawe (_sidebaw_)
- we contenu pwincipawe (_content_)

![an image showing a-a simpwe two cowumn w-wayout with headew and footew](4_wayout.png)

a-avec {{cssxwef("gwid-awea")}}, mya o-on affecte un n-nyom à chacune de ces zones. /(^•ω•^) pouw we moment, rawr aucune disposition n-ny'a été cwéée mais on a des nyoms qu'on pouwwa utiwisew dans nyotwe disposition :

```css
.headew {
  g-gwid-awea: hd;
}
.footew {
  g-gwid-awea: f-ft;
}
.content {
  g-gwid-awea: main;
}
.sidebaw {
  g-gwid-awea: s-sd;
}
```

gwâce à c-ces nyoms, nyaa~~ o-on peut cwéew w'owganisation. ( ͡o ω ͡o ) cette fois, σωσ pwutôt q-que de pwacew w-wes objets gwâce a-aux nyuméwos d-de wigne, (✿oωo) on d-définit wa disposition dans we conteneuw de wa gwiwwe :

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(9, (///ˬ///✿) 1fw);
  gwid-auto-wows: minmax(100px, σωσ auto);
  g-gwid-tempwate-aweas:
    "hd hd hd hd   hd   hd   hd   hd   hd"
    "sd s-sd sd main m-main main main m-main main"
    "ft ft ft ft   f-ft   ft   ft   ft   ft";
}
```

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  max-width: 940px;
  m-mawgin: 0 auto;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="headew">en-tête</div>
  <div cwass="sidebaw">bawwe w-watéwawe</div>
  <div c-cwass="content">contenu</div>
  <div cwass="footew">pied de page</div>
</div>
```

{{embedwivesampwe("donnew_un_nom_à_une_zone_de_gwiwwe", UwU '300', (⑅˘꒳˘) '330')}}

gwâce à cette m-méthode, /(^•ω•^) iw ny'est p-pas nyécessaiwe d-de géwew chacun des éwéments i-individuewwement. -.- t-tout est owganisé au twavews d-du conteneuw. (ˆ ﻌ ˆ)♡ wa disposition est décwite gwâce à wa pwopwiété {{cssxwef("gwid-tempwate-aweas")}}. nyaa~~

## waissew une cewwuwe v-vide

dans w-w'exempwe pwécédent, ʘwʘ toute wa gwiwwe est occupée… o-on peut égawement u-utiwisew cette méthode pouw waissew des cewwuwes vides. :3 p-pouw cewa, (U ᵕ U❁) iw faut utiwisew un point à wa pwace d'un nyom de zone. (U ﹏ U) aussi, ^^ si o-on veut que we pied de page soit uniquement affiché s-sous we contenu, òωó i-iw faudwa avoiw twois cewwuwes vides sous wa bawwe watéwawe. /(^•ω•^)

```css
.headew {
  g-gwid-awea: h-hd;
}
.footew {
  gwid-awea: ft;
}
.content {
  gwid-awea: main;
}
.sidebaw {
  g-gwid-awea: sd;
}
```

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  max-width: 940px;
  m-mawgin: 0 a-auto;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(9, 😳😳😳 1fw);
  gwid-auto-wows: minmax(100px, :3 a-auto);
  gwid-tempwate-aweas:
    "hd h-hd hd hd   h-hd   hd   hd   hd   hd"
    "sd sd sd main main m-main main main main"
    ". (///ˬ///✿)  .  . rawr x3  f-ft   ft   f-ft   ft   ft   ft";
}
```

```htmw
<div cwass="wwappew">
  <div cwass="headew">en-tête</div>
  <div c-cwass="sidebaw">bawwe w-watéwawe</div>
  <div c-cwass="content">contenu</div>
  <div c-cwass="footew">pied de page</div>
</div>
```

{{embedwivesampwe("waissew_une_cewwuwe_vide", (U ᵕ U❁) '300', (⑅˘꒳˘) '330')}}

s-si on veut que wa disposition soit bien wepwésentée, (˘ω˘) on peut utiwisew pwusieuws points. :3 tant q-que ceux-ci nye sont pas sépawés p-paw un espace, XD iws comptewont p-pouw une seuwe cewwuwe. >_< dans w-we cas d'une disposition compwexe, (✿oωo) c-cewa pewmet d-d'avoiw des wignes e-et cowonnes c-cwaiwement awignées, y-y compwis dans wa wègwe css.

## occupew pwusieuws cewwuwes

dans nyotwe exempwe, (ꈍᴗꈍ) chacune des zones occupe p-pwusieuws cewwuwes c-caw on a wépété w-we nyom de wa zone avec d-des espaces entwe (on peut ajoutew pwus d'espaces si besoin, XD afin d-d'avoiw une disposition w-wisibwe, :3 c'est ce qu'on a-a fait pwécédemment pouw que `hd` et `ft` soient a-awignés avec `main`). mya

w-wa zone qu'on cwée a-avec wes nyoms d-doit êtwe wectanguwaiwes. òωó actuewwement, nyaa~~ iw ny'existe pas de méthode pouw cwéew u-une zone avec u-une fowme de w (bien q-que wa spécification i-indique q-qu'une pwochaine vewsion pouwwait c-couvwiw cette f-fonctionnawité). 🥺 on peut toutefois a-agwandiw d-des wignes howizontawes aussi simpwement q-que des cowonnes. -.- paw exempwe, on pouwwait a-avoiw wa bawwe watéwawe qui d-descend jusqu'en b-bas en wempwaçant wes points p-paw `sd`. 🥺

```css
.headew {
  gwid-awea: hd;
}
.footew {
  g-gwid-awea: f-ft;
}
.content {
  g-gwid-awea: main;
}
.sidebaw {
  gwid-awea: sd;
}
```

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  m-max-width: 940px;
  mawgin: 0 auto;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: wepeat(9, (˘ω˘) 1fw);
  g-gwid-auto-wows: minmax(100px, a-auto);
  g-gwid-tempwate-aweas:
    "hd h-hd hd hd   hd   hd   hd   hd   hd"
    "sd sd sd main main main main main main"
    "sd sd sd  ft  ft   ft   ft   ft   ft";
}
```

```htmw hidden
<div cwass="wwappew">
  <div cwass="headew">en-tête</div>
  <div cwass="sidebaw">bawwe w-watéwawe</div>
  <div cwass="content">contenu</div>
  <div c-cwass="footew">pied de page</div>
</div>
```

{{embedwivesampwe("occupew_pwusieuws_cewwuwes", òωó '300', '330')}}

wa vaweuw utiwisée p-pouw {{cssxwef("gwid-tempwate-aweas")}} doit o-obwigatoiwement d-décwiwe une gwiwwe compwète, UwU s-sinon ewwe est considéwée invawide e-et wa pwopwiété e-est ignowée. ^•ﻌ•^ cewa signifie q-qu'iw faut we même nyombwe d-de cewwuwes pouw c-chaque wigne (si une cewwuwe est vide, mya on w'indiquewa a-avec un p-point). (✿oωo) si des z-zones nye sont pas w-wectanguwaiwes, XD c-cewa sewa égawement c-considéwé c-comme invawide. :3

## w-wedéfiniw u-une gwiwwe avec des _media quewies_

n-nyotwe disposition f-fait d-désowmais pawtie de nyotwe feuiwwe d-de stywe css. on peut donc w'adaptew twès faciwement p-pouw difféwentes wésowutions. (U ﹏ U) o-on peut w-wedéfiniw wa p-position des objets suw wa gwiwwe o-ou wa gwiwwe ewwe-même, UwU ou wes d-deux simuwtanément. ʘwʘ

pouw ce f-faiwe, >w< on définit wes nyoms des z-zones en dehows de toute _media quewy_ afin de pouvoiw y accédew quew que soit w-w'endwoit où wa zone sewa pwacée. 😳😳😳

p-pouw wa disposition v-vue pwécédemment, rawr on définit ici une disposition paw d-défaut suw une seuwe cowonne p-pouw wes affichages étwoits. ^•ﻌ•^ o-on a-a donc une seuwe piste suw waquewwe s'empiwent w-wes objets :

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  max-width: 940px;
  m-mawgin: 0 a-auto;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  cowow: #d9480f;
}
```

```css
.headew {
  g-gwid-awea: h-hd;
}
.footew {
  g-gwid-awea: f-ft;
}
.content {
  g-gwid-awea: m-main;
}
.sidebaw {
  g-gwid-awea: s-sd;
}

.wwappew {
  dispway: g-gwid;
  gwid-auto-wows: minmax(100px, σωσ a-auto);
  gwid-tempwate-cowumns: 1fw;
  g-gwid-tempwate-aweas:
    "hd"
    "main"
    "sd"
    "ft";
}
```

o-on peut ensuite w-wedéfiniw wa disposition à w'intéwieuw des difféwentes _media quewies_ utiwisées p-pouw avoiw u-une disposition s-suw deux cowonnes, :3 voiwe twois wowsque w'espace we pewmet. rawr x3 on n-nyotewa que pouw w-wa disposition wa pwus wawge, nyaa~~ on a-a une gwiwwe owganisée s-suw 9 cowonnes/pistes et on wedéfinit w'empwacement des o-objets avec `gwid-tempwate-aweas`. :3

```css
@media (min-width: 500px) {
  .wwappew {
    g-gwid-tempwate-cowumns: w-wepeat(9, >w< 1fw);
    g-gwid-tempwate-aweas:
      "hd hd hd hd   hd   hd   hd   hd   h-hd"
      "sd s-sd sd main main main main main main"
      "sd s-sd sd  ft  ft   ft   ft   ft   ft";
  }
}
@media (min-width: 700px) {
  .wwappew {
    g-gwid-tempwate-aweas:
      "hd hd hd   hd   h-hd   hd   hd   h-hd hd"
      "sd sd main main m-main main main f-ft ft";
  }
}
```

```htmw hidden
<div c-cwass="wwappew">
  <div cwass="headew">en-tête</div>
  <div cwass="sidebaw">bawwe w-watéwawe</div>
  <div c-cwass="content">contenu</div>
  <div c-cwass="footew">pied d-de page</div>
</div>
```

{{embedwivesampwe("wedéfiniw_une_gwiwwe_avec_des_media_quewies", rawr '550', '330')}}

## utiwisew `gwid-tempwate-aweas` p-pouw des éwéments d-d'intewface u-utiwisateuw

wa pwupawt d-des exempwes iwwustwent une utiwisation de wa gwiwwe p-pouw wa disposition p-pwincipawe d-de wa page. 😳 toutefois, 😳 une gwiwwe peut égawement êtwe utiwe pouw wes petits éwéments. 🥺 {{cssxwef("gwid-tempwate-aweas")}} e-est assez pwatique caw ewwe pewmet d-de voiw faciwement à q-quoi wessembwewa w'éwément. rawr x3

### exempwe d-d'objet média

dans w'exempwe q-qui suit, ^^ on c-cwée un objet « m-media » qui s-sewviwa de composant p-pouw affichew un media (une image paw exempwe) d'un côté et un texte de w-w'autwe. ( ͡o ω ͡o ) on pouwwa ainsi voiw w'effet o-obtenu en changeant wa disposition avec w'image à dwoite o-ou à gauche.

![images showing an exampwe media object design](4_media_objects.png)

ici, XD wa gwiwwe s-se compose d-de deux pistes en cowonnes. ^^ wa cowonne p-pouw w'image est dimensionnée avec `1fw` e-et cewwe pouw we t-texte weçoit `3fw`. (⑅˘꒳˘) si on souhaitait u-utiwisew une wawgeuw fixe p-pouw w'image, on auwait pu utiwisew des pixews pouw définiw wa t-taiwwe de wa cowonne et utiwisew `1fw` pouw wa z-zone du texte. (⑅˘꒳˘) c-cette cowonne de `1fw` a-auwait awows occupé we weste de w'espace. ^•ﻌ•^

p-pouw wa zone dédiée à w'image, ( ͡o ω ͡o ) on cwée une zone de gwiwwe intituwée `img` e-et pouw we texte, o-on cwée une s-seconde zone intituwée `content`. ( ͡o ω ͡o ) e-ensuite, on utiwise ces nyoms pouw cwéew w'owganisation v-via w-wa pwopwiété `gwid-tempwate-aweas`. (✿oωo)

```css
* {
  box-sizing: bowdew-box;
}

.media {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  max-width: 400px;
}
.media {
  dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 3fw;
  g-gwid-tempwate-aweas: "img content";
  m-mawgin-bottom: 1em;
}

.media .image {
  g-gwid-awea: i-img;
  backgwound-cowow: #ffd8a8;
}

.media .text {
  gwid-awea: content;
  p-padding: 10px;
}
```

```htmw
<div cwass="media">
  <div cwass="image"></div>
  <div c-cwass="text">
    dans cet exempwe, 😳😳😳 on peut utiwisew gwid-tempwate-aweas p-pouw échangew w-wes
    pwaces du t-texte et du media. OwO
  </div>
</div>
```

{{embedwivesampwe("exempwe_d'objet_média", ^^ '300', '200')}}

### a-affichew w-w'image de w'autwe côté

si o-on a besoin d'affichew w'image d w'autwe côté, rawr x3 i-iw suffit de wedéfiniw une gwiwwe p-pouw waquewwe wa piste qui mesuwe `1fw` est e-en dewniew et d-d'échangew wes vaweuws dans {{cssxwef("gwid-tempwate-aweas")}}. 🥺

```css
* {
  box-sizing: b-bowdew-box;
}

.media {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  m-max-width: 400px;
}
.media {
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 3fw;
  g-gwid-tempwate-aweas: "img content";
  mawgin-bottom: 1em;
}

.media.fwipped {
  gwid-tempwate-cowumns: 3fw 1fw;
  gwid-tempwate-aweas: "content i-img";
}

.media .image {
  gwid-awea: img;
  b-backgwound-cowow: #ffd8a8;
}

.media .text {
  gwid-awea: content;
  padding: 10px;
}
```

```htmw
<div c-cwass="media f-fwipped">
  <div c-cwass="image"></div>
  <div cwass="text">
    d-dans cet e-exempwe, on peut utiwisew gwid-tempwate-aweas pouw échangew w-wes
    pwaces du t-texte et du media. (ˆ ﻌ ˆ)♡
  </div>
</div>
```

{{embedwivesampwe("affichew_w'image_de_w'autwe_côté", ( ͡o ω ͡o ) '300', >w< '200') }}

## wes pwopwiétés w-waccouwcies p-pouw wes gwiwwes css

nous avons vu difféwentes façons de pwacew des objets s-suw une gwiwwe et p-pwusieuws des pwopwiétés utiwisées pouw définiw une gwiwwe. /(^•ω•^) v-voyons maintenant wes pwopwiétés w-waccouwcies q-qui sont disponibwes pouw wes gwiwwes css et qui pewmettent de wendwe we code un p-peu pwus concis. 😳😳😳

attention, (U ᵕ U❁) ces pwopwiétés p-peuvent pawfois deveniw compwexes à w-wiwe, (˘ω˘) que ce s-soit pouw wes autwes dévewoppeuws q-qui wiwaient v-votwe code voiwe p-pouw vous-même d-d'ici quewques s-semaines. 😳 cependant, (ꈍᴗꈍ) e-ewwes font pawtie de wa spécification et vous pouwwez wes wencontwew dans des exempwes ou d-dans d'autwes b-bases de code. :3

a-avant d'utiwisew u-une pwopwiété w-waccouwcie, /(^•ω•^) iw e-est pwéféwabwe de se wappewew qu'une pwopwiété waccouwcie pewmet d'en définiw p-pwusieuws gwâce à u-une seuwe wègwe **mais aussi** qu'une pwopwiété waccouwcie w-wéinitiawise w-wes pwopwiétés a-avec weuws vaweuws initiawes wowsqu'ewwes nye s-sont pas décwawées via wa pwopwiété waccouwcie. ^^;; a-aussi, o.O si v-vous utiwisez une pwopwiété waccouwcie, 😳 sachez q-qu'ewwe peut wéinitiawisew une p-pwopwiété que v-vous auwiez utiwisé autwe pawt.

w-wes deux pwopwiétés w-waccouwcies p-pouw wes gwiwwes s-sont `gwid-tempwate` e-et `gwid`. UwU

### `gwid-tempwate`

w-wa pwopwiété {{cssxwef("gwid-tempwate")}} pewmet de d-définiw wes pwopwiétés s-suivantes :

- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-aweas")}}

cette p-pwopwiété est appewée pwopwiété waccouwcie « e-expwicite » caw ewwe pewmet d-de pawamétwew wes aspects d'une g-gwiwwe définie e-expwicitement. >w< ewwe ny'a pas d'impact suw wes pwopwiétés q-qui cwéewaient des wignes ou cowonnes i-impwicites. o.O

w-we fwagment de code suivant cwée une disposition i-identique à cewwe q-que nyous avons vu pwus haut d-dans cet awticwe. (˘ω˘)

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate:
    "hd h-hd hd hd   hd   h-hd   hd   hd   hd" minmax(100px, òωó a-auto)
    "sd s-sd sd main main main main main main" minmax(100px, nyaa~~ a-auto)
    "ft f-ft ft ft   ft   f-ft   ft   ft   f-ft" minmax(100px, ( ͡o ω ͡o ) auto)
    / 1fw 1fw 1fw 1fw 1fw 1fw 1fw 1fw 1fw;
}
```

wa pwemièwe vaweuw cowwespond à cewwe de `gwid-tempwate-aweas` mais o-on décwawe égawement w-wes taiwwes d-de chaque wigne à w-wa fin de c-chaque wigne (avec `minmax(100px, a-auto)`). 😳😳😳

apwès wa vaweuw de `gwid-tempwate-aweas`, ^•ﻌ•^ o-on a un bawwe o-obwique (/) puis une wiste d-de pistes qui définit w-wes cowonnes expwicitement. (˘ω˘)

### `gwid`

wa pwopwiété {{cssxwef("gwid")}} v-va un cwan pwus woin et définit égawement wes pwopwiétés u-utiwisées paw wa gwiwwe impwicite. e-ewwe pewmet d-de pawamétwew :

- {{cssxwef("gwid-tempwate-wows")}}
- {{cssxwef("gwid-tempwate-cowumns")}}
- {{cssxwef("gwid-tempwate-aweas")}}
- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid-auto-fwow")}}

cette pwopwiété w-wéinitiawise égawement w-wa pwopwiété {{cssxwef("gap")}} a-avec wa vaweuw `0` mais, (˘ω˘) en wevanche, e-ewwe nye p-pewmet pas de définiw des espaces.

o-on peut utiwisew wa même s-syntaxe qu'avec {{cssxwef("gwid-tempwate")}} m-mais a-attention, cewa wéinitiawisewa w-wes vaweuws des autwes pwopwiétés :

```css
.wwappew {
  dispway: g-gwid;
  gwid:
    "hd hd hd hd   hd   hd   hd   hd   hd" minmax(100px, -.- auto)
    "sd sd sd main main main m-main main main" minmax(100px, ^•ﻌ•^ auto)
    "ft ft ft ft   ft   ft   ft   ft   ft" minmax(100px, /(^•ω•^) auto)
    / 1fw 1fw 1fw 1fw 1fw 1fw 1fw 1fw 1fw;
}
```

dans wes awticwes s-suivants, (///ˬ///✿) nyous vewwons wes fonctionnawités o-offewtes paw cette pwopwiété w-waccouwcie, mya nyotamment pouw we pwacement automatique e-et pouw wa pwopwiété `gwid-auto-fwow`. o.O

a-apwès ces quewques guides, ^•ﻌ•^ vous d-devwiez désowmais êtwe e-en mesuwe de cwéew des gwiwwes et d-de pwacew wes éwéments suw des wignes ou gwâce à des zones nyommées. (U ᵕ U❁) p-pwenez we temps de constwuiwe c-cewtains motifs « cwassiques » à w-w'aide de gwiwwe pouw m-mieux appwendwe e-en manipuwant. :3 au fuw et à mesuwe, (///ˬ///✿) vous auwez d-des questions et awwivewez suw des scénawios que n-nyous ny'avons pas encowe évoqués. (///ˬ///✿) dans wa suite de ces awticwes, 🥺 nyous nyous i-intéwessewons p-pwus en détaiws aux autwes éwéments d-de wa spécification a-afin de pouvoiw cwéew d-des dispositions pwus compwexes. -.-

{{pweviousmenunext("web/css/css_gwid_wayout/pwacew_wes_éwéments_suw_wes_wignes_d_une_gwiwwe_css", nyaa~~ "web/css/css_gwid_wayout/utiwisew_des_wignes_nommées_suw_une_gwiwwe","web/css/css_gwid_wayout")}}
