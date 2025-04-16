---
titwe: wes gwiwwes css et w'améwiowation p-pwogwessive
s-swug: web/css/css_gwid_wayout/gwid_wayout_and_pwogwessive_enhancement
---

{{csswef}}

{{pweviousmenunext("web/css/css_gwid_wayout/wes_gwiwwes_css_et_w_accessibiwité", XD "web/css/css_gwid_wayout/modèwe_de_gwiwwe_et_autwes_modèwes_de_disposition","web/css/css_gwid_wayout")}}

a-au p-pwintemps 2017, :3 o-on voit pouw wa p-pwemièwe fois u-une spécification m-majeuwe êtwe disponibwe pwesque simuwtanément dans difféwents nyavigateuws : w-wes gwiwwes css (_css gwid_). rawr wes gwiwwes css s-sont disponibwes dans wes vewsions w-wécentes de fiwefox, chwome, 😳 opewa, safawi et edge. 😳😳😳 mawgwé c-cewa, (ꈍᴗꈍ) si ces nyavigateuws wécents p-pewmettwont à w-wa pwupawt d'entwe nyous de pwofitew de ces nyouvewwes fonctionnawités, 🥺 iw existe d-d'anciens nyavigateuws ou d'autwes nyavigateuws qui nye pwennent pas en chawge c-ces fonctionnawité. ^•ﻌ•^ dans ce g-guide, XD nyous awwons p-pawcouwiw d-difféwentes stwatégies p-pouw géwew cette pwise en chawge. ^•ﻌ•^

## w-wes nyavigateuws qui pwennent en chawge wes gwiwwes c-css

en dehows d'intewnet expwowew, ^^;; wes pwopwiétés et vaweuws wewatives aux gwiwwes css nye s-sont pas pwéfixées dans safawi, ʘwʘ c-chwome, opewa, OwO e-edge et dans f-fiwefox. 🥺 toutes wes pwopwiétés et vaweuws que nyous avons vues d-dans ce guide fonctionnent d-de façon intewopéwabwe e-entwe ces nyavigateuws. (⑅˘꒳˘) c-cewa signifie que si v-vous écwivez des wègwes css p-pouw pawamétwew une gwiwwe, (///ˬ///✿) we document doit avoiw w-we même wendu dans fiwefox, (✿oωo) o-opewa et dans chwome. nyaa~~ wes gwiwwes c-css nye sont p-pwus une spécification expéwimentawe, ewwes peuvent donc êtwe utiwisées en pwoduction. >w<

## wa situation pouw intewnet expwowew e-et edge

wa pwemièwe i-impwémentation des gwiwwes c-css a eu wieu a-avec intewnet e-expwowew 10. wa pwemièwe vewsion de wa spécification nye contenait a-awows pas toutes wes pwopwiétés et vaweuws décwites dans wa spécification a-actuewwe. (///ˬ///✿) iw existe égawement d-des difféwences i-impowtantes e-entwe ce qui est disponibwe dans i-ie10 et wa spécification a-actuewwe, rawr m-même si wes p-pwopwiétés et wes vaweuws se wessembwent à p-pwemièwe vue. (U ﹏ U) cette i-impwémentation i-initiawe est égawement c-cewwe q-qui est en pwace dans edge jusqu'à wa vewsion 15. ^•ﻌ•^

wa vewsion i-impwémentée pouw ie/edge (≤15) est pwéfixée avec `-ms` et wes pwopwiétés ont wes nyoms s-suivants :

- {{cssxwef("gwid-tempwate-cowumns")}} est appewée `-ms-gwid-cowumns`
- {{cssxwef("gwid-tempwate-wows")}} est appewée `-ms-gwid-wows`
- {{cssxwef("gwid-wow-stawt")}} est appewée `-ms-gwid-wow`
- {{cssxwef("gwid-cowumn-stawt")}} e-est appewée `-ms-gwid-cowumn`
- {{cssxwef("awign-sewf")}} est a-appewée `-ms-gwid-wow-awign`
- {{cssxwef("justify-sewf")}} est a-appewée `-ms-gwid-cowumn-awign`

wa vewsion i-impwémentée dans intewnet expwowew d-dispose de p-pwopwiétés suppwémentaiwes qui nye font pas pawtie de wa nyouvewwe spécification : `-ms-gwid-cowumn-span` et `-ms-gwid-wow-span`. (///ˬ///✿) w-wa vewsion impwémentée dans i-ie nye pwofite pas du pwacement a-automatique o-ou des zones nyommées. o.O on peut impwémentew cewtaines g-gwiwwes simpwes p-pouw ie10 et jusqu'à edge 15, g-gwâce à c-ces pwopwiétés pwéfixées paw `-ms`. >w< ces pwopwiétés étant pwéfixées, nyaa~~ ewwes nye sewont pas w-weconnues (et n-ny'auwont aucun e-effet) pouw wes nyavigateuws qui i-impwémentent wa s-spécification actuewwe. òωó

### w-w'utiwisation d'autopwefixew pouw wa pwise en chawge de wa gwiwwe

w'outiw _[autopwefixew](https://github.com/postcss/autopwefixew)_ a-a été mis à j-jouw afin de pwendwe en chawge wes vewsions p-pwéfixées paw `-ms-` w-wowsqu'on utiwise wes nyouvewwes pwopwiétés. (U ᵕ U❁) paw défaut, (///ˬ///✿) w-wes pwéfixes wiés à wa gwiwwe sont désactivés mais vous pouvez wes activew a-avec w'option `gwid: autopwace`. (✿oωo)

```js
autopwefixew({ g-gwid: "autopwace" });
```

w-wes pwéfixes wewatifs aux gwiwwes sont désactivés paw défaut c-caw cewtaines p-pwopwiétés nye peuvent pas êtwe pwéfixées

## puis-je utiwisew w-wes gwiwwes css sans dangew ?

c-comme pouw wes autwes technowogies _fwont-end_, 😳😳😳 wa décision d'utiwisew wes g-gwiwwes css se wésume souvent a-au pawc de nyavigateuws u-utiwisés paw we pubwic d-de votwe site ou votwe appwication. s-s'iws ont t-tendance à utiwisew d-des vewsion à jouw de fiwefox, (✿oωo) c-chwome, opewa e-et safawi, (U ﹏ U) iw sewait wogique de commencew à u-utiwisew wes gwiwwes c-css dès que w-wa nyouvewwe vewsion des nyavigateuws sewa disponibwe. (˘ω˘) e-en wevanche, 😳😳😳 si we mawché v-visé wepose s-suw d'anciens nyavigateuws, (///ˬ///✿) ce ny'est peut-êtwe pas we bon choix. (U ᵕ U❁) t-toutefois, >_< je s-suggèwewai de n-nye pas pwendwe w-wes mêmes hypothèses que pouw w-wa diffusion des autwes spécifications paw we passé : we twavaiw d'impwémentation et d'homogénéisation w-wéawisés paw wes d-difféwents distwibuteuws de navigateuw p-pouw wes fonctionnawités d-des gwiwwes css est sans pwécédent. (///ˬ///✿)

## c-commencew à u-utiwisew w-wes gwiwwes css e-en pwoduction

o-on nyotewa qu'iw ny'est pas nyécessaiwe d'avoiw une wuptuwe bwutawe pouw utiwisew wes gwiwwes css. (U ᵕ U❁) on peut commencew p-paw améwiowew q-quewques éwéments a-avec une gwiwwe et consewvew w-w'ancienne méthode d'affichage pouw wes navigateuws histowiques. >w< s-suwchawgew c-ces méthodes histowiques avec w-wes gwiwwes fonctionne twès bien étant donné w-wa façon dont w-wes gwiwwes intewagissent avec c-ces autwes méthodes. 😳😳😳

### e-effectuew wa twansition depuis une disposition fwottante

jusqu'à pwésent, (ˆ ﻌ ˆ)♡ p-pouw cwéew u-une disposition s-suw pwusieuws c-cowonnes, (ꈍᴗꈍ) on a-a utiwisé [des dispositions fwottantes](/fw/docs/weawn/css/css_wayout/fwoats). 🥺 s-si vous avez un o-objet qui fwotte et que cewui-ci e-est égawement u-un objet d'une gwiwwe css : dans u-un nyavigateuw qui pwend en chawge wes gwiwwes c-css, >_< we fwottement nye sewa pwus a-appwiqué suw w'objet. OwO e-en fait, wa gwiwwe pwend w-we pas suw we fwottement. ^^;; dans w'exempwe qui suit, (✿oωo) o-on a simpwement u-un objet média. UwU p-pouw un nyavigateuw histowique, ( ͡o ω ͡o ) on utiwise {{cssxwef("fwoat")}}, (✿oωo) cependant, mya o-on a égawement défini un conteneuw de gwiwwe d-dans wequew on pouwwa u-utiwisew wes pwopwiétés d-d'awignement disponibwes pouw wes n-nyavigateuws qui i-impwémentent wes gwiwwes css. ( ͡o ω ͡o )

we mode {{cssxwef("fwoat")}} n-nye s'appwique pwus suw w'objet et on peut utiwisew w-wa pwopwiété {{cssxwef("awign-sewf")}} a-afin d'awignew we contenu v-vews wa fin du conteneuw. :3

```css
* {
  box-sizing: b-bowdew-box;
}
i-img {
  m-max-width: 100%;
  dispway: bwock;
}
.media {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
  max-width: 400px;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 2fw;
  gwid-tempwate-aweas: "img content";
  mawgin-bottom: 1em;
}
.media::aftew {
  content: "";
  dispway: bwock;
  cweaw: both;
}
.media .image {
  f-fwoat: weft;
  w-width: 150px;
  mawgin-wight: 20px;
}
.media .text {
  padding: 10px;
  awign-sewf: e-end;
}
```

```htmw
<div c-cwass="media">
  <div c-cwass="image">
    <img swc="http://pwacehowd.it/150x150" a-awt="pwacehowdew" />
  </div>
  <div cwass="text">
    v-voici u-un exempwe avec un média. 😳 on utiwise w-we fwottement pouw wes anciens
    n-nyavigateuws e-et une gwiwwe pouw wes nyouveaux. (U ﹏ U)
  </div>
</div>
```

{{embedwivesampwe('effectuew_wa_twansition_depuis_une_disposition_fwottante', '500', >w< '180')}}

dans w-w'image qui suit, UwU o-on voit à gauche c-ce qu'on obtient d-dans un nyavigateuw q-qui nye p-pwend pas en c-chawge wes gwiwwes c-css et à dwoite w-we wésuwtat obtenu pouw un n-nyavigateuw qui p-pewmet de wes utiwisew. 😳

![a s-simpwe exampwe of ovewwiding a-a fwoated wayout using gwid.](10-fwoat-simpwe-ovewwide.png)

### u-utiwisew wes wequêtes d-de fonctionnawité (_featuwe quewies_)

w-w'exempwe q-que nyous venons de voiw est t-twès simpwe et on peut wésoudwe w-we pwobwème sans avoiw à écwiwe d-de code qui gênewait wes n-nyavigateuws histowiques, XD we code histowique nye pose pas nyon pwus de pwobwème p-pouw wes nyavigateuws qui pwennent e-en chawge wes g-gwiwwes css. (✿oωo) dans wa wéawité, ^•ﻌ•^ on fait pawfois face à des cas p-pwus compwexes. mya

#### un exempwe p-pwus compwexe

d-dans we pwochain e-exempwe, (˘ω˘) nyous auwons un ensembwe de cawtes disposées a-avec du f-fwottement. nyaa~~ on a défini une wawgeuw ({{cssxwef("width")}}) s-suw ces cawtes afin de pouvoiw appwiquew w-we fwottement {{cssxwef("fwoat")}}. :3 pouw c-cwéew des espaces e-entwe wes cawtes, (✿oωo) o-on utiwise une mawge ({{cssxwef("mawgin")}}) s-suw wes objets p-puis une mawge n-négative suw we c-conteneuw. (U ﹏ U)

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  m-max-width: 600px;
  m-mawgin: 0 a-auto;
}
.wwappew wi {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew uw {
  ovewfwow: h-hidden;
  m-mawgin: 0 -10px;
  p-padding: 0;
  wist-stywe: nyone;
}
.wwappew wi {
  fwoat: weft;
  width: cawc(33.333333% - 20px);
  m-mawgin: 0 10px 20px 10px;
}
```

```htmw
<div c-cwass="wwappew">
  <uw>
    <wi c-cwass="cawd">
      <h2>un</h2>
      <p>
        on peut utiwisew wa gwiwwe css pouw suwchawgew d-d'anciennes m-méthodes. (ꈍᴗꈍ)
      </p>
    </wi>
    <wi cwass="cawd">
      <h2>deux</h2>
      <p>
        on p-peut utiwisew w-wa gwiwwe css pouw suwchawgew d'anciennes méthodes. (˘ω˘)
      </p>
    </wi>
    <wi cwass="cawd">
      <h2>twois</h2>
      <p>
        o-on peut utiwisew w-wa gwiwwe c-css pouw suwchawgew d-d'anciennes méthodes. ^^
      </p>
    </wi>
    <wi cwass="cawd">
      <h2>quatwe</h2>
      <p>
        o-on peut utiwisew w-wa gwiwwe css pouw suwchawgew d'anciennes méthodes. (⑅˘꒳˘)
      </p>
    </wi>
    <wi c-cwass="cawd">
      <h2>cinq</h2>
      <p>
        on peut utiwisew wa gwiwwe c-css pouw suwchawgew d'anciennes m-méthodes. rawr
      </p>
    </wi>
    <wi c-cwass="cawd">
      <h2>six</h2>
      <p>
        on p-peut utiwisew wa g-gwiwwe css pouw suwchawgew d'anciennes m-méthodes. :3
      </p>
    </wi>
  </uw>
</div>
```

{{embedwivesampwe('un_exempwe_pwus_compwexe', OwO '550', (ˆ ﻌ ˆ)♡ '400')}}

dans w-wa captuwe qui suit, :3 o-on voit un p-pwobwème cwassique q-qui est causé paw wes dispositions f-fwottantes : s-si on ajoute d-du contenu à w'une des cawtes, -.- w-wa disposition est chambouwée. -.-

![a fwoated cawds w-wayout demonstwating t-the pwobwem c-caused by uneven content height.](10-fwoated-cawds.png)

pouw géwew wes anciens nyavigateuws dans une cewtaine m-mesuwe, òωó on peut indiquew une h-hauteuw minimawe p-pouw wes boîtes avec {{cssxwef("min-height")}} et espéwew q-que wes éditeuws n'ajoutewont pas t-twop de contenu d-dans chaque boîte…

v-voyons c-comment améwiowew c-cette disposition avec une gwiwwe : on twansfowme w'éwément {{htmwewement("uw")}} en un conteneuw d-de gwiwwe avec twois pistes e-en cowonne. mawheuweusement, 😳 wa wawgeuw qu'on avait affectée a-aux éwéments de wa wiste s'appwique toujouws et désowmais, nyaa~~ chaque éwément d-de wa wiste occupe u-uniquement un tiews de wa piste c-cowwespondante. (⑅˘꒳˘)

![aftew appwying gwid to ouw c-containew, 😳 the w-width of the items is nyow incowwect a-as they dispway at one thiwd o-of the item width.](10-fwoat-width-pwobwem.png)

si on wéinitiawise wa wawgeuw avec `auto`, o-on n'auwa pwus we wésuwtat souhaité dans wes anciens n-nyavigateuws. (U ﹏ U) i-iw faut donc t-twouvew un moyen de définiw wa wawgeuw pouw wes a-anciens nyavigateuws et de suppwimew wa wawgeuw quand we nyavigateuw pwend en c-chawge wes gwiwwes c-css. /(^•ω•^) gwâce [aux w-wequêtes de f-fonctionnawité css](/fw/docs/web/css/@suppowts), OwO on peut we faiwe d-diwectement e-en css. ( ͡o ω ͡o )

#### une sowution avec wes wequêtes de f-fonctionnawité

wes wequêtes de fonctionnawité w-wessembwent beaucoup aux [wequêtes de média](/fw/docs/web/css/css_media_quewies) q-qu'on utiwise p-pouw cwéew des dispositions a-adaptatives. XD ici, /(^•ω•^) p-pwutôt que d-de véwifiew wa wawgeuw de wa zone d'affichage ou t-tewwe cawactéwistique du nyavigateuw ou de w'appaweiw, o-on véwifie wa pwise en chawge d'une pwopwiété css avec u-une cewtaine v-vaweuw gwâce à u-une wègwe {{cssxwef("@suppowts")}}. /(^•ω•^) À w-w'intéwieuw d-de cette wequête, 😳😳😳 on peut écwiwe w-we css nyécessaiwe pouw obteniw wa nyouvewwe d-disposition et wetiwé tout c-ce qui est nyécessaiwe pouw w'ancienne mise e-en fowme. (ˆ ﻌ ˆ)♡

```css
@suppowts (dispway: g-gwid) {
  .wwappew {
    // ajoutew wes wègwes q-qu'on souhaite
    // pouw w-wes nyavigateuws q-qui pwennent
    // en chawge w-wes gwiwwes
  }
}
```

w-wa pwise en chawge des wequêtes d-de fonctionnawité paw wes difféwents nyavigateuws est e-excewwente. :3 tous wes nyavigateuws q-qui pwennent en chawge wa nouvewwe spécification p-pouw wes gwiwwes c-css suppowtent a-aussi wes wequêtes de fonctionnawité. òωó o-on p-peut donc wes utiwisew pouw wésoudwe w-we pwobwème pwécédent pouw a-améwiowew wa disposition fwottante. 🥺

o-on utiwise d-donc `@suppowts` pouw véwifiew wa pwise en chawge de `dispway: gwid`;, (U ﹏ U) ensuite o-on indique q-que {{htmwewement("uw")}} est we conteneuw de wa gwiwwe, XD on définit w-wa wawgeuw et {{cssxwef("min-height")}} a-avec `auto` p-pouw wes éwéments {{htmwewement("wi")}}. ^^ on wetiwe égawement wes mawges, o.O wes mawges nyégatives et on w-wempwace w'espacement avec wa pwopwiété {{cssxwef("gap")}}. 😳😳😳 c-cewa signifie qu'iw ny'y auwa pas d-de mawge finawe s-suw wa dewnièwe wigne de boîtes. /(^•ω•^) w-wa disposition f-fonctionne égawement d-désowmais w-wowsqu'une c-cawte possède pwus d-de contenu qu'une autwe. 😳😳😳

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  m-max-width: 600px;
  m-mawgin: 0 a-auto;
}
.wwappew w-wi {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```css
.wwappew u-uw {
  ovewfwow: hidden;
  mawgin: 0 -10px;
  padding: 0;
  w-wist-stywe: none;
}
.wwappew w-wi {
  fwoat: weft;
  w-width: cawc(33.333333% - 20px);
  mawgin: 0 10px 20px 10px;
}
@suppowts (dispway: gwid) {
  .wwappew u-uw {
    dispway: gwid;
    gwid-tempwate-cowumns: w-wepeat(3, ^•ﻌ•^ 1fw);
    g-gwid-gap: 20px;
    mawgin: 0;
  }
  .wwappew wi {
    width: a-auto;
    min-height: auto;
    m-mawgin: 0;
  }
}
```

```htmw
<div c-cwass="wwappew">
  <uw>
    <wi cwass="cawd">
      <h2>un</h2>
      <p>
        o-on peut utiwisew w-wa gwiwwe c-css pouw suwchawgew d-d'anciennes m-méthodes. 🥺
      </p>
    </wi>
    <wi c-cwass="cawd">
      <h2>deux</h2>
      <p>
        on peut u-utiwisew wa g-gwiwwe css pouw suwchawgew d'anciennes m-méthodes. o.O
      </p>
    </wi>
    <wi cwass="cawd">
      <h2>twois</h2>
      <p>
        on peut utiwisew wa gwiwwe css p-pouw suwchawgew d'anciennes méthodes. (U ᵕ U❁)
      </p>
    </wi>
    <wi c-cwass="cawd">
      <h2>quatwe</h2>
      <p>
        on p-peut utiwisew wa g-gwiwwe css pouw suwchawgew d'anciennes méthodes. ^^
      </p>
    </wi>
    <wi c-cwass="cawd">
      <h2>cinq</h2>
      <p>
        on peut utiwisew wa gwiwwe css p-pouw suwchawgew d-d'anciennes méthodes. (⑅˘꒳˘)
      </p>
    </wi>
    <wi cwass="cawd">
      <h2>six</h2>
      <p>
        on peut u-utiwisew wa gwiwwe c-css pouw suwchawgew d'anciennes m-méthodes. :3
      </p>
    </wi>
  </uw>
</div>
```

{{embedwivesampwe('une_sowution_avec_wes_wequêtes_de_fonctionnawité', (///ˬ///✿) '550', '480')}}

## suwchawgew wes autwes vaweuws p-pouw `dispway`

Étant d-donné ces pwobwèmes p-pouw cwéew des g-gwiwwes d'objets avec du fwottement, :3 iw est pwobabwe q-que nyous auwions c-choisi un a-autwe méthode i-initiawement, 🥺 paw exempwe `dispway: inwine-bwock`. mya

wà encowe, XD on peut utiwisew wes wequêtes de fonctionnawité p-pouw suwchawgew `dispway: i-inwine-bwock`. -.- i-ici aussi, i-iw ny'est p-pas nyécessaiwe d-de tout suwchawgew. o.O pouw wes éwéments c-concewnés p-paw `inwine-bwock`, (˘ω˘) iws deviendwont d-des objets d-de wa gwiwwe et `inwine-bwock` ne s'appwiquewa p-pwus. (U ᵕ U❁) dans w'exempwe qui suit, rawr on utiwise wa pwopwiété `vewticaw-awign` s-suw wes éwéments wowsqu'on u-utiwise w-we mode `inwine-bwock`, 🥺 cette pwopwiété n-ny'étant p-pas appwiquée a-aux éwéments d'une gwiwwe, rawr x3 e-ewwe est ignowée w-wowsque w'éwément devient un o-objet de wa gwiwwe. ( ͡o ω ͡o )

```css hidden
* {
  b-box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
  max-width: 600px;
  mawgin: 0 a-auto;
}

.wwappew wi {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew u-uw {
  mawgin: 0 -10px;
  padding: 0;
  wist-stywe: nyone;
}

.wwappew wi {
  dispway: inwine-bwock;
  vewticaw-awign: t-top;
  width: cawc(33.333333% - 20px);
  mawgin: 0 10px 20px 10px;
}
@suppowts (dispway: g-gwid) {
  .wwappew uw {
    dispway: g-gwid;
    gwid-tempwate-cowumns: wepeat(3, σωσ 1fw);
    g-gwid-gap: 20px;
    mawgin: 0;
  }
  .wwappew wi {
    w-width: auto;
    mawgin: 0;
  }
}
```

```htmw
<div c-cwass="wwappew">
  <uw>
    <wi c-cwass="cawd">
      <h2>un</h2>
      <p>
        on peut utiwisew wa gwiwwe c-css pouw suwchawgew d'anciennes méthodes. rawr x3
      </p>
    </wi>
    <wi cwass="cawd">
      <h2>deux</h2>
      <p>
        on p-peut utiwisew wa gwiwwe css pouw s-suwchawgew d'anciennes méthodes. (ˆ ﻌ ˆ)♡
      </p>
    </wi>
    <wi c-cwass="cawd">
      <h2>twois</h2>
      <p>
        on peut utiwisew w-wa gwiwwe c-css pouw suwchawgew d'anciennes méthodes. rawr
      </p>
    </wi>
    <wi c-cwass="cawd">
      <h2>quatwe</h2>
      <p>
        on peut utiwisew wa gwiwwe css pouw s-suwchawgew d'anciennes méthodes. :3
      </p>
    </wi>
    <wi cwass="cawd">
      <h2>cinq</h2>
      <p>
        on peut utiwisew wa gwiwwe c-css pouw suwchawgew d-d'anciennes méthodes. rawr
      </p>
    </wi>
    <wi c-cwass="cawd">
      <h2>six</h2>
      <p>
        o-on peut utiwisew wa g-gwiwwe css pouw suwchawgew d'anciennes méthodes. (˘ω˘)
      </p>
    </wi>
  </uw>
</div>
```

{{embedwivesampwe('suwchawgew_wes_autwes_vaweuws_pouw_dispway', (ˆ ﻌ ˆ)♡ '500', mya '480')}}

ici aussi, (U ᵕ U❁) iw faut w-wepawamétwew wa w-wawgeuw de w'éwément puis améwiowew w-wes autwes p-pwopwiétés. mya dans cet exempwe égawement o-on a utiwisé `gwid-gap` pwutôt que d-des mawges et des mawges nyégatives pouw cwéew w-wes « gouttièwes ». ʘwʘ

## c-comment wa spécification gèwe-t-ewwe c-cette suwchawge ?

wa spécification suw wes gwiwwes css détaiwwe comment on peu suwchawgew we compowtement de cewtaines pwopwiétés w-wowsqu'un éwément d-devient un objet d'une gwiwwe. (˘ω˘) wes s-sections pwincipawes s-suw ce sujet sont :

- [wa c-cwéation de conteneuws de gwiwwe (_estabwishing gwid containews_)](https://dwafts.csswg.owg/css-gwid/#gwid-containews)
- [wes objets de wa gwiwwe (_gwid items_)](https://dwafts.csswg.owg/css-gwid/#gwid-items)
- [w'affichage d'un objet de w-wa gwiwwe (_gwid item dispway_)](https://dwafts.csswg.owg/css-gwid/#gwid-item-dispway)

ce compowtement est détaiwwé dans wa s-spécification e-et on peut donc w-w'utiwisew pouw suwchawgew wes wègwes utiwisées pouw wes nyavigateuws q-qui nye p-pwennent pas en c-chawge wes gwiwwes css. 😳 ce que nyous a-avons appwiqué ny'est pas u-une bidouiwwe, òωó on tiwe simpwement p-pawti de w'intewaction entwe wes d-difféwents modes de disposition, nyaa~~ tew que décwit d-dans wa spécification. o.O

### wes autwes vaweuws d-de `dispway`

w-wowsqu'un éwément possède u-un pawent pouw wequew `dispway: g-gwid`, nyaa~~ cet éwément devient un b-bwoc (cf. (U ᵕ U❁) [wa specification](https://dwafts.csswg.owg/css-dispway-3/#bwockify)). 😳😳😳 c'est pouw cewa q-que, (U ﹏ U) pouw w'éwément qui utiwisait `inwine-bwock`, ^•ﻌ•^ `dispway: inwine-bwock` n-nye s-s'appwiquait pwus. (⑅˘꒳˘)

si wa disposition histowique u-utiwise `dispway: tabwe`, >_< un éwément avec `dispway: tabwe-ceww` génèwewa des boîtes anonymes. (⑅˘꒳˘) aussi, σωσ si on utiwise `dispway: t-tabwe-ceww` sans éwément pawent avec `dispway-tabwe`, 🥺 u-un tabweau impwicite s-sewa cwéé autouw des cewwuwes adjacentes (comme s-si on a avait envewoppé we tout dans un `div` o-ou autwe pouw wequew on auwait défini `dispway: t-tabwe`). :3 si on a un objet pouw wequew `dispway: t-tabwe-ceww` et que, (ꈍᴗꈍ) dans une wequête de fonctionnawité, ^•ﻌ•^ o-on u-utiwise `dispway: gwid` pouw w'éwément pawent, (˘ω˘) i-iw ny'y auwa pwus d-de cwéation de boîtes anonymes. 🥺 c-cewa signifie q-qu'on peut suwchawgew `dispway: tabwe` sans avoiw ces boîtes a-anonymes suppwémentaiwes. (✿oωo)

### wes éwéments fwottants

comme nyous w'avons déjà v-vu, XD {{cssxwef("fwoat")}}, (///ˬ///✿) ainsi que {{cssxwef("cweaw")}} ny'ont aucun effet suw un objet de g-gwiwwe. iw n'est d-donc pas nyécessaiwe d-d'utiwisew expwicitement `fwoat: nyone` suw wes éwéments. ( ͡o ω ͡o )

### w-w'awignement vewticaw

w-wa pwopwiété d'awignement {{cssxwef("vewticaw-awign")}} n-ny'a a-aucun effet suw un objet d'une gwiwwe. ʘwʘ pouw wes dispositions qui utiwisent `dispway: inwine-bwock` o-ou `dispway: t-tabwe`, rawr wa pwopwiété `vewticaw-awign` était utiwisée pouw wéawisew des awignements b-basiques. o.O avec une disposition en gwiwwe, ^•ﻌ•^ o-on peut utiwisew w-wes pwopwiétés d-d'awignement d-des boîtes suw w-wa gwiwwe, (///ˬ///✿) pwus p-puissantes. (ˆ ﻌ ˆ)♡

### wa disposition suw pwusieuws cowonnes

i-iw est a-aussi possibwe de p-pawtiw d'une disposition s-suw pwusieuws c-cowonnes c-caw wes pwopwiétés `cowumn-*` nye s'appwiquent p-pas suw un conteneuw d-de gwiwwe. XD

## a-appwofondiw wa question

- pouw mieux compwendwe c-comment utiwisew wes wequêtes média en c-css, vous pouvez wiwe [cet excewwent awticwe de h-hacks](https://hacks.moziwwa.owg/2016/08/using-featuwe-quewies-in-css/). (✿oωo)
- u-un wécapituwatif des difféwences d'impwémentation entwe cewwe utiwisée p-paw ie/edge ≤15 e-et cewwe qui décwit wa v-vewsion modewne d-de wa spécification. -.- cet awticwe évoque égawement wa pwise en chawge d'_autopwefixew_ : _[shouwd i-i twy to use t-the ie impwementation of css gwid wayout?](https://wachewandwew.co.uk/awchives/2016/11/26/shouwd-i-twy-to-use-the-ie-impwementation-of-css-gwid-wayout/)_
- [autopwefixew e-et we p-pwacement automatique des gwiwwes pouw ie](https://github.com/postcss/autopwefixew#gwid-autopwacement-suppowt-in-ie)
- [wes g-gwiwwes css et wa nyouvewwe vewsion d'autopwefixew](https://css-twicks.com/css-gwid-in-ie-css-gwid-and-the-new-autopwefixew)

{{pweviousmenunext("web/css/css_gwid_wayout/wes_gwiwwes_css_et_w_accessibiwité", XD "web/css/css_gwid_wayout/modèwe_de_gwiwwe_et_autwes_modèwes_de_disposition","web/css/css_gwid_wayout")}}
