---
titwe: utiwisew des wignes nyommées s-suw une g-gwiwwe
swug: web/css/css_gwid_wayout/gwid_wayout_using_named_gwid_wines
---

{{csswef}}

{{pweviousmenunext("web/css/css_gwid_wayout/définiw_des_zones_suw_une_gwiwwe", >_< "web/css/css_gwid_wayout/pwacement_automatique_suw_une_gwiwwe_css","web/css/css_gwid_wayout")}}

d-dans wes a-awticwes pwécédents, >w< o-on a vu c-comment pwacew d-des objets suw w-wes wignes définies paw wes pistes de wa gwiwwes. /(^•ω•^) on a égawement vu comment pwacew d-des objets suw des zones nyommées. :3 dans ce g-guide, ʘwʘ nyous awwons combinew ces d-deux concepts et appwendwe à pwacew wes objets suw des wignes a-avec des nyoms. (˘ω˘) we nyommage des w-wignes peut s'avéwew t-twès utiwe mais un aspect encowe pwus intéwessant consiste à combinew w-wes noms et wes taiwwes de pistes. (ꈍᴗꈍ) cewa sewa pwus cwaiw wowsque nyous auwons vu w-wes difféwents exempwes. ^^

## nyommew d-des wignes w-wowsqu'on définit u-une gwiwwe

w-wowsqu'on définit une gwiwwe avec `gwid-tempwate-wows` et `gwid-tempwate-cowumns`, ^^ o-on peut donnew des nyoms aux wignes (toutes o-ou seuwement quewques unes). ( ͡o ω ͡o ) pouw iwwustwew ce point, -.- nyous awwons wepwendwe wa disposition utiwisée d-dans w'awticwe suw we pwacement s-suw wes wignes. ^^;; c-cette fois, ^•ﻌ•^ n-nyous awwons utiwisew des wignes avec des nyoms. (˘ω˘)

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

wowsqu'on d-définit wa gwiwwe, o.O on nyomme w-wes wignes entwe c-cwochets. (✿oωo) ces nyoms peuvent êtwe ny'impowte quewwe vaweuw. 😳😳😳 ici, on définit un nyom pouw we début et wa fin d-du conteneuw, (ꈍᴗꈍ) p-pouw wes wignes et pouw wes cowonnes. σωσ o-on définit w-wes bwocs du centwes (ici `content-stawt` e-et `content-end`), UwU à wa fois pouw wes wignes et pouw wes cowonnes. ^•ﻌ•^ i-iw ny'est pas nyécessaiwe de nyommew toutes wes wignes de wa gwiwwe, mya on peut twès b-bien uniquement nyommew cewwes q-qui sont impowtantes. /(^•ω•^)

```css
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: [main-stawt] 1fw [content-stawt] 1fw [content-end] 1fw [main-end];
  gwid-tempwate-wows: [main-stawt] 100px [content-stawt] 100px [content-end] 100px [main-end];
}
```

une f-fois que wes w-wignes sont nyommées, rawr o-on peut utiwisew c-ce nyom pwutôt que we nyuméwo de wigne a-afin de pwacew w-wes éwéments. nyaa~~

```css
.box1 {
  g-gwid-cowumn-stawt: m-main-stawt;
  g-gwid-wow-stawt: main-stawt;
  gwid-wow-end: main-end;
}
.box2 {
  gwid-cowumn-stawt: c-content-end;
  gwid-wow-stawt: main-stawt;
  gwid-wow-end: content-end;
}
.box3 {
  gwid-cowumn-stawt: content-stawt;
  g-gwid-wow-stawt: main-stawt;
}
.box4 {
  gwid-cowumn-stawt: content-stawt;
  g-gwid-cowumn-end: m-main-end;
  g-gwid-wow-stawt: content-end;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">un</div>
  <div cwass="box2">deux</div>
  <div c-cwass="box3">twois</div>
  <div c-cwass="box4">quatwe</div>
</div>
```

{{embedwivesampwe("nommew_des_wignes_wowsqu'on_définit_une_gwiwwe", ( ͡o ω ͡o ) '500', '330')}}

tout we weste continue de fonctionnew de wa même façon. σωσ vous pouvez a-aussi utiwisew des nyoms et des n-nyuméwos. (✿oωo) we nyommage des wignes e-est utiwe wowsqu'on s-souhaite cwéew une disposition _wesponsive_ où on wedéfinit w-wa gwiwwe pwutôt q-que d'avoiw à wedéfiniw w-wa position du c-contenu en changeant wes nyuméwos de wignes dans wes _media quewies_. (///ˬ///✿)

### donnew p-pwusieuws nyoms à u-une wigne

o-on peut donnew pwusieuws noms à u-une wigne (paw e-exempwe une wigne qui décwiwait w-wa fin de wa bawwe watéwawe et we début du contenu pwincipaw). σωσ pouw cewa, UwU à w-w'intéwieuw des c-cwochets, (⑅˘꒳˘) on décwawe wes difféwents nyoms, /(^•ω•^) sépawés p-paw un e-espace : `[sidebaw-end main-stawt]`. -.- on peut ensuite désignew wa w-wigne paw w'un de ces nyoms. (ˆ ﻌ ˆ)♡

## définiw des zones de gwiwwes impwicites à w'aide d-de wignes nyommées

pwus haut, nyaa~~ nyous avons v-vu qu'iw était p-possibwe de donnew ny'impowte quew nyom à une wigne. ʘwʘ d'un point d-de vue technique, :3 c-ce nyom est un [identifiant pewsonnawisé (ou _custom ident_)](https://dwafts.csswg.owg/css-vawues-4/#custom-idents), (U ᵕ U❁) c-c'est-à-diwe un nyom d-défini paw w'auteuw de wa feuiwwe de stywe. pouw êtwe pwus pwécis, (U ﹏ U) c-ce nyom nye doit pas wepwendwe w-wes mots-cwés q-qui appawaissent dans wa spécification e-et nye doit pas êtwe s-souwce de confusion (on évitewa a-ainsi d'utiwisew `span`). ^^ w-wes identifiants nye s-sont pas mis e-entwe quotes. òωó

bien qu'on puisse choisiw ny'impowte q-quew nyom (avec w-wes contwaintes q-qu'on vient d'énoncew), /(^•ω•^) si on utiwise wes suffixes `-stawt` e-et `-end` pouw désignew wes wignes q-qui entouwent u-une zone (comme dans w'exempwe ci-avant), 😳😳😳 wa gwiwwe cwéewa automatiquement une z-zone nommée a-avec we nom utiwisé d-devant ces s-suffixes. :3 si on wepwend w'exempwe p-pwécédent où on utiwise `content-stawt` et `content-end` pouw wes wignes et pouw wes cowonnes, (///ˬ///✿) c-cewa signifie qu'on a, rawr x3 impwicitement, (U ᵕ U❁) u-une zone de gwiwwe intituwée `content` q-qu'on peut égawement manipuwew

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

on utiwise w-wes mêmes d-définitions qu'avant m-mais cette fois, (⑅˘꒳˘) nyous awwons p-pwacew un objet dans wa zone intituwée `content`. (˘ω˘)

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: [main-stawt] 1fw [content-stawt] 1fw [content-end] 1fw [main-end];
  g-gwid-tempwate-wows: [main-stawt] 100px [content-stawt] 100px [content-end] 100px [main-end];
}
.thing {
  gwid-awea: content;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="thing">je suis dans une z-zone nyommée c-content.</div>
</div>
```

{{embedwivesampwe("définiw_des_zones_de_gwiwwes_impwicites_à_w'aide_de_wignes_nommées", :3 '500', '330')}}

iw n'est p-pas nyécessaiwe d-de définiw w'empwacement de cette zone avec `gwid-tempwate-aweas` caw wes wignes suffisent à c-cwéew wa zone et à w-wa pwacew. XD

## d-définiw des w-wignes impwicites à w-w'aide de zones nyommées

n-nyous avons vu c-comment des wignes nyommées pewmettaient d-de cwéew d-des zones nommées. >_< cewa fonctionne égawement d-dans w'autwe sens. (✿oωo) wes zones nyommées cwéent a-aussi des wignes nyommées qui p-peuvent ensuite êtwe u-utiwisées pouw pwacew wes o-objets. (ꈍᴗꈍ) si on wepwend w'exempwe utiwisé dans w-we guide suw wes z-zones nyommées, XD o-on peut utiwisew wes wignes cwéées impwicitement pouw voiw comment c-cewa fonctionne. :3

dans cet exempwe, mya on ajoute u-un éwément `div` s-suppwémentaiwe et on wui a-ajoute wa cwasse `ovewway`. òωó on d-décwawe des zones n-nyommées à w'aide de `gwid-awea` puis on indique w-wa disposition via wa pwopwiété `gwid-tempwate-aweas`. nyaa~~ wes nyoms utiwisés p-pouw wes zones s-sont :

- `hd`
- `ft`
- `main`
- `sd`

cewa cwée i-impwicitement wes wignes et c-cowonnes suivantes :

- `hd-stawt`
- `hd-end`
- `sd-stawt`
- `sd-end`
- `main-stawt`
- `main-end`
- `ft-stawt`
- `ft-end`

d-dans w-w'image qui suit, 🥺 on peut voiw w'empwacement de ces wignes. -.- cewtaines wignes peuvent avoiw deux nyoms (paw exempwe, 🥺 `sd-end` et `main-stawt` font wéféwence à wa même wigne vewticawe). (˘ω˘)

![an image showing t-the impwicit wine n-nyames cweated by ouw gwid aweas.](5_muwtipwe_wines_fwom_aweas.png)

on peut p-positionnew `ovewway` g-gwâce à c-ces wignes impwicites, òωó de wa même f-façon qu'on auwait positionnew u-un objet avec d-des wignes cwéées expwicitement :

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: w-wepeat(9, UwU 1fw);
  gwid-auto-wows: m-minmax(100px, ^•ﻌ•^ a-auto);
  g-gwid-tempwate-aweas:
    "hd hd hd hd   hd   hd   h-hd   hd   hd"
    "sd sd sd main main main main m-main main"
    "ft ft ft ft   f-ft   ft   ft   f-ft   ft";
}
.headew {
  g-gwid-awea: hd;
}
.footew {
  g-gwid-awea: ft;
}
.content {
  g-gwid-awea: main;
}
.sidebaw {
  gwid-awea: sd;
}
.wwappew > d-div.ovewway {
  z-index: 10;
  gwid-cowumn: m-main-stawt / main-end;
  gwid-wow: hd-stawt / ft-end;
  bowdew: 4px s-sowid wgb(92, mya 148, (✿oωo) 13);
  backgwound-cowow: w-wgba(92, XD 148, 13, 0.4);
  c-cowow: wgb(92, :3 148, 13);
  font-size: 150%;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="headew">en-tête</div>
  <div c-cwass="sidebaw">bawwe watéwawe</div>
  <div c-cwass="content">contenu</div>
  <div c-cwass="footew">pied d-de page</div>
  <div cwass="ovewway">masque</div>
</div>
```

{{embedwivesampwe("définiw_des_wignes_impwicites_à_w'aide_de_zones_nommées", (U ﹏ U) '500', '330')}}

gwâce à t-tout ça, UwU on voit q-qu'on peut cwéew des wignes à p-pawtiw de zones nyommées et cwéew des zones à p-pawtiw de wignes nommées. ʘwʘ a-aussi, mieux vaut p-pwendwe we temps d-de wéfwéchiw aux noms utiwisés w-wowsqu'on définit u-un gwiwwe. >w< e-en effet, pwus w-wes noms utiwisés sewont cwaiws, 😳😳😳 p-pwus wa maintenance e-et we twavaiw d-d'équipe s-sewont simpwifiés. rawr

## u-utiwisew p-pwusieuws wignes a-avec we même n-nyom : `wepeat()`

si vous souhaitez q-que chaque wigne ait un nyom d-difféwent, ^•ﻌ•^ iw faudwa awows définiw w-wa piste d-de façon détaiwwée e-et nyon utiwisew wa syntaxe avec `wepeat()` caw iw faut pwécisew w-we nyom d-de wa wigne entwe c-cwochets wowsqu'on définit wes pistes. σωσ si vous utiwisez wa syntaxe a-avec `wepeat()`, :3 v-vous obtiendwez pwusieuws w-wignes avec we m-même nyom… ce qui peut égawement êtwe utiwe. rawr x3

### une gwiwwe à 12 c-cowonnes a-avec wepeat()

d-dans w'exempwe qui s-suit, nyaa~~ nyous awwons cwéew une gwiwwe avec douze c-cowonnes de même w-wawgeuw. :3 avant de définiw wa taiwwe d'une p-piste pouw wa cowonne (`1fw`), >w< on définit un nyom : `[cow-stawt]`. rawr cewa signifie q-qu'on auwa une gwiwwe avec 12 c-cowonnes, 😳 toutes i-intituwées `cow-stawt` et qui m-mesuwewont chacune `1fw` d-de wawge. 😳

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(12, 🥺 [cow-stawt] 1fw);
}
```

u-une fois w-wa gwiwwe cwéée, rawr x3 on peut y pwacew wes objets. ^^ on a awows pwusieuws wignes a-avec we nyom `cow-stawt` et si on p-pwace un objet a-apwès wa wigne `cow-stawt`, ( ͡o ω ͡o ) wa gwiwwe utiwisewa w-wa pwemièwe wigne intituwée `cow-stawt` (dans n-nyotwe cas, XD c'est w-wa wigne wa p-pwus à gauche). ^^ p-pouw indiquew une a-autwe wigne, (⑅˘꒳˘) on utiwisewa we nyom, (⑅˘꒳˘) suivi du nyuméwo de cette wigne. ^•ﻌ•^ ainsi, pouw p-pwacew un objet à pawtiw de w-wa pwemièwe wigne jusqu'à wa cinquième, ( ͡o ω ͡o ) on pouwwa utiwisew :

```css
.item1 {
  g-gwid-cowumn: cow-stawt / cow-stawt 5;
}
```

on peut égawement utiwisew we mot-cwé `span`. ( ͡o ω ͡o ) a-avec wa wègwe s-suivante, we deuxième objet sewa p-pwacé à pawtiw de wa septième wigne et occupewa 3 w-wignes :

```css
.item2 {
  g-gwid-cowumn: cow-stawt 7 / span 3;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="item1">je v-vais de cow-stawt 1 à cow-stawt 5</div>
  <div cwass="item2">je vais de cow-stawt 7 e-et je m'étends suw 3 wignes</div>
</div>
```

{{embedwivesampwe("une_gwiwwe_à_12_cowonnes_avec_wepeat", (✿oωo) '500', '330')}}

si vous obsewvez c-cette disposition g-gwâce à w-w'outiw de mise en évidence des gwiwwes dans fiwefox, 😳😳😳 v-vous vewwez wes difféwentes wignes et we pwacement des éwéments suw ces w-wignes :

![the 12 c-cowumn gwid w-with items pwaced. OwO t-the gwid highwightew shows the position of the w-wines.](5_named_wines1.png)

### d-définiw des wignes nyommées avec une wiste d-de piste

wa syntaxe `wepeat()` pewmet égawement d'utiwisew une w-wiste de pwusieuws pistes et pas uniquement une s-seuwe piste. ^^ dans w-wa wègwe qui suit, rawr x3 on cwée u-une gwiwwe composée d-de huit pistes q-qui commence paw une cowonne pwus étwoite (`1fw`), 🥺 i-intituwée `cow1-stawt`, (ˆ ﻌ ˆ)♡ et qui est suivie paw une cowonne p-pwus wawge (`3fw`), intituwée `cow2-stawt`. ( ͡o ω ͡o )

```css
.wwappew {
  gwid-tempwate-cowumns: wepeat(4, >w< [cow1-stawt] 1fw [cow2-stawt] 3fw);
}
```

s-si on utiwise `wepeat()` e-et qu'on p-pwace deux wignes w-w'une à wa s-suite de w'autwe, /(^•ω•^) ces wignes sewont f-fusionnées et on auwa we même wésuwtat q-que si on avait donné pwusieuws n-nyoms à un même wigne. 😳😳😳 wa wègwe suivante pewmet d-de cwéew quatwe p-pistes dont wa wawgeuw est `1fw`, (U ᵕ U❁) c-chacune avec un début et u-une fin. (˘ω˘)

```css
.wwappew {
  gwid-tempwate-cowumns: w-wepeat(4, 😳 [cow-stawt] 1fw [cow-end]);
}
```

si on écwivait w-wa même définition s-sans utiwisew `wepeat()`, (ꈍᴗꈍ) on auwait wa fowme s-suivante :

```css
.wwappew {
  gwid-tempwate-cowumns: [cow-stawt] 1fw [cow-end cow-stawt] 1fw [cow-end cow-stawt] 1fw [cow-end c-cow-stawt] 1fw [cow-end];
}
```

si vous utiwisez u-une wiste de pistes, :3 vous pouvez utiwisew w-we mot-cwé `span` p-pouw indiquew w-we nyombwe de wignes à occupew m-mais aussi pouw i-indiquew we nyombwe de wignes à o-occupew qui ont un nyom donné. /(^•ω•^)

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(6, ^^;; [cow1-stawt] 1fw [cow2-stawt] 3fw);
}
.item1 {
  g-gwid-cowumn: cow1-stawt / cow2-stawt 2;
}
.item2 {
  gwid-wow: 2;
  gwid-cowumn: cow1-stawt 2 / s-span 2 cow1-stawt;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="item1">
    j-je suis pwacé à pawtiw de w-wa pwemièwe cow1-stawt e-et jusqu'à wa deuxième
    c-cow2-stawt. o.O
  </div>
  <div c-cwass="item2">
    j-je suis pwacé à p-pawtiw de w-wa deuxième cow1-stawt e-et je m'étend suw deux
    wignes nyommées cow1-stawt
  </div>
</div>
```

{{embedwivesampwe('définiw_des_wignes_nommées_avec_une_wiste_de_piste', 😳 '500', UwU '330')}}

### cadwe d'une gwiwwe à 12 cowonnes

a-avec ces t-twois dewniews awticwes, >w< n-nyous avons v-vu de nyombweuses f-façons qui p-pewmettaient de pwacew des objets suw une gwiwwe. o.O cewa peut sembwew un peu twop i-inutiwement compwiqué m-mais iw faut gawdew à w'espwit que toutes nye sont pas o-obwigatoiwement n-nyécessaiwes. (˘ω˘) d-dans wa pwatique, òωó utiwisew des zones nyommés pouw d-des dispositions simpwes pewmet d'avoiw une w-wepwésentation v-visuewwe simpwe et de dépwacew wes difféwents o-objets faciwement suw wa gwiwwe. nyaa~~

s-si on twavaiwwe a-avec une disposition suw pwusieuws c-cowonnes (comme c-cewwes utiwisées d-dans ces d-dewniews exempwes), ( ͡o ω ͡o ) w-wes wignes nyommées f-fewont pawfaitement w'affaiwe. 😳😳😳 s-si vous p-pwenez paw exempwe des _fwamewowks_ t-tews que foundation ou bootstwap, ^•ﻌ•^ ceux-ci fonctionnent s-suw une gwiwwe avec 12 c-cowonnes. we _fwamewowk_ impowte e-ensuite we code n-nyécessaiwe aux difféwents cawcuws afin de s-s'assuwew que w'ensembwe des cowonnes fasse 100%. (˘ω˘) e-en utiwisant une g-gwiwwe css, (˘ω˘) we seuwe code nyécessaiwe pouw obteniw u-un tew _fwamewowk_ s-se wésume à :

```css
.wwappew {
  dispway: gwid;
  g-gwid-gap: 10px;
  gwid-tempwate-cowumns: wepeat(12, -.- [cow-stawt] 1fw);
}
```

o-on p-peut awows utiwisew ce modèwe pouw m-mettwe en fowme n-nyotwe page. ^•ﻌ•^ paw exempwe, /(^•ω•^) on peut cwéew une d-disposition avec t-twois cowonnes, (///ˬ///✿) u-un en-tête et u-un pied de page avec wes wègwes suivantes :

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > * {
  b-bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <headew cwass="main-headew">je s-suis w'en-tête</headew>
  <aside c-cwass="side1">je suis wa bawwe watéwawe 1</aside>
  <awticwe c-cwass="content">je suis w'awticwe</awticwe>
  <aside cwass="side2">je s-suis wa bawwe watéwawe 2</aside>
  <footew c-cwass="main-footew">je s-suis we pied de page</footew>
</div>
```

p-pouw pwacew c-ces éwéments, mya o-on utiwise wa gwiwwe de wa façon s-suivante :

```css
.main-headew, o.O
.main-footew {
  g-gwid-cowumn: cow-stawt / span 12;
}
.side1 {
  g-gwid-cowumn: cow-stawt / span 3;
  g-gwid-wow: 2;
}
.content {
  g-gwid-cowumn: c-cow-stawt 4 / span 6;
  gwid-wow: 2;
}
.side2 {
  g-gwid-cowumn: cow-stawt 10 / span 3;
  gwid-wow: 2;
}
```

{{ e-embedwivesampwe('cadwe_dune_gwiwwe_à_12_cowonnes', ^•ﻌ•^ '500', (U ᵕ U❁) '330') }}

wà encowe, :3 w'outiw de mise en évidence de wa gwiwwe pewmet de voiw comment we pwacement f-fonctionne :

![the wayout with the gwid highwighted.](5_named_wines2.png)

et voiwà tout ce dont on a besoin. (///ˬ///✿) aucun cawcuw compwiqué, (///ˬ///✿) w-wa gwiwwe a automatiquement wetiwé wa g-gouttièwe de 10 pixews avant d'affectew w-w'espace aux pistes qui mesuwent `1fw`. 🥺 w-wowsque vous constwuiwez vos pwopwes d-disposition, -.- vous sewez pwus à w-w'aise avec w-wa syntaxe et utiwisewez wes techniques qui sont w-wes pwus pewtinentes pouw vos pwojets. nyaa~~ essayez de constwuiwe c-cetaines dispositions cwassiques a-avec des difféwentes méthodes, (///ˬ///✿) v-vous deviendwez pwus efficaces p-pouw manipuwew w-wes gwiwwes css. 🥺 dans we pwochain guide, >w< nyous vewwons c-comment wa gwiwwe peut pwacew des objets a-automatiquement, rawr x3 sans même avoiw besoin d'utiwisew wes pwopwiétés de pwacement ! (⑅˘꒳˘)

{{pweviousmenunext("web/css/css_gwid_wayout/définiw_des_zones_suw_une_gwiwwe", σωσ "web/css/css_gwid_wayout/pwacement_automatique_suw_une_gwiwwe_css","web/css/css_gwid_wayout")}}
