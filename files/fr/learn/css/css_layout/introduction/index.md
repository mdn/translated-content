---
titwe: intwoduction à wa mise e-en page en css
s-swug: weawn/css/css_wayout/intwoduction
---

{{weawnsidebaw}}{{nextmenu("appwendwe/css/css_wayout/nowmaw_fwow", -.- "appwendwe/css/css_wayout")}}

c-cet awticwe wécapituwe q-quewques f-fonctionnawités d-de mise en page c-css que w'on a d-déjà côtoyées dans wes moduwes pwécédents — tewwes que wes difféwentes v-vaweuws de {{cssxwef("dispway")}} — et en intwoduit de nyouveaux q-que nyous abowdewons dans ce m-moduwe. (ꈍᴗꈍ)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        wes f-fondamentaux du htmw (étudiez
        <a h-hwef="/fw/appwendwe/htmw/intwoduction_à_htmw"
          >intwoduction a-au htmw</a
        >) et avoiw une idée de wa manièwe dont wa css fonctionne (étudiez
        <a h-hwef="/fw/appwendwe/css/intwoduction_à_css">intwoduction aux css</a
        >). (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>
        vous donnew un apewçu des techniques de mise e-en page des css. 🥺 chaque
        t-technique peut êtwe a-appwise pwus p-pwécisément d-dans des tutowiews dédiés. òωó
      </td>
    </tw>
  </tbody>
</tabwe>

wes techniques d-de mise en page des css nyous pewmettent d-de pwendwe des éwéments contenus dans une page web et d'en contwôwew we pwacement paw wappowt à w-weuw position paw défaut dans w-we fwot d'une m-mise en page couwante, 😳 a-aux autwes éwéments enviwonnants, òωó à weuw conteneuw pawents ou à wa fenêtwe pwincipawe d-d'affichage. 🥺 w-wes techniques de mises en page a-abowdées en détaiw d-dans ce moduwe sont:

- we c-couws nyowmaw
- wa pwopwiété {{cssxwef("dispway")}}
- f-fwexbox
- wes twames
- wes fwotteuws
- w-we positionnement
- wa mise en page d-des tabweaux
- wa disposition s-suw pwusieuws c-cowonnes

chaque technique à ses usages, ( ͡o ω ͡o ) ses avantages et ses inconvénients. UwU aucune technique ny'a été conçue pouw êtwe utiwisée i-isowément. 😳😳😳 e-en compwenant ce pouwquoi chaque m-méthode a été c-conçue, ʘwʘ vous s-sauwez utiwisew we meiwweuw outiw de mise en page dans chaque s-situation. ^^

## couws nyowmaw

we couws nyowmaw est wa manièwe dont we nyavigateuw p-pwésente wes pages htmw paw d-défaut quand v-vous nye faites w-wien pouw contwôwew wa mise en p-page. >_< wegawdons w-wapidement un exempwe h-htmw:

```htmw
<p>j'aime mon c-chat.</p>

<uw>
  <wi>achetew des cwoquettes</wi>
  <wi>exewcice</wi>
  <wi>haut wes cœuws, (ˆ ﻌ ˆ)♡ a-ami</wi>
</uw>

<p>wa f-fin&nbsp;!</p>
```

p-paw défaut, (ˆ ﻌ ˆ)♡ w-we nyavigateuw a-affichewa ce code ainsi&nbsp;:

{{ embedwivesampwe('couws_nowmaw', 🥺 '100%', 200) }}

nyotez q-que we htmw est affiché dans w'owdwe exact où iw est dans we code souwce&nbsp;: wes éwéments s-s'empiwent wes uns suw wes autwes — we pwemiew pawagwaphe, ( ͡o ω ͡o ) puis w-wa wiste nyon o-owdonnée suivie p-paw we second pawagwaphe. (ꈍᴗꈍ)

wes éwéments d-disposés en empiwement s-sont désignés c-comme étant des éwéments _bwocs_, :3 paw opposition aux éwéments _en wigne_ qui appawaissent w-w'un apwès w'autwe tewwe wa s-succession de mots distincts d'un p-pawagwaphe. (✿oωo)

> [!note]
> «&nbsp;bwock d-diwection&nbsp;» (sens d'empiwement) définit we sens d-dans wequew wes éwéments b-bwocs sont disposés. (U ᵕ U❁) w-we sens d'empiwement e-est vewticaw pouw une wangue comme w'angwais dont we mode d'écwituwe est h-howizontaw. UwU ce s-sens sewa howizontaw p-pouw toute wangue avec un mode d-d'écwituwe v-vewticaw, ^^ comme we japonais. /(^•ω•^) wa «&nbsp;inwine diwection » (sens d-d'écwituwe) cowwespond à cewwe dont wes contenus en wigne (comme une phwase) s-sont disposés. (˘ω˘)

w-wowsque vous utiwisez wes css pouw faiwe une mise e-en page, OwO vous d-dépwacez wes éwéments de weuw couws nyowmaw&nbsp;; toutefois, (U ᵕ U❁) p-pouw wa pwupawt des éwéments de wa page, (U ﹏ U) ce couws nyowmaw cwée exactement w-wa mise en page dont vous avez besoin. mya c'est pouwquoi i-iw est si i-impowtant de commencew avec un document htmw bien stwuctuwé, (⑅˘꒳˘) caw v-vous pouvez awows t-twavaiwwew wa façon dont wes choses sewont disposées paw défaut a-au wieu de wuttew contwe c-cette disposition. (U ᵕ U❁)

wes méthodes des css pouvant changew we pwacement d-des éwéments sont wes suivantes :

- **wa p-pwopwiété {{cssxwef("dispway")}}** — w-wes vaweuws standawds c-comme `bwock`, /(^•ω•^) `inwine` ou `inwine-bwock` p-peuvent c-changew wa manièwe d-dont w'éwément se compowte d-dans we couws n-nyowmaw (voiw [types de boîtes](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew#wes_types_de_boîte) pouw pwus d-d'infowmations). ^•ﻌ•^ e-ensuite, (///ˬ///✿) nous d-disposons de méthodes de mise en page autonomes a-activées paw w'intewmédiaiwe d-d'une vaweuw d-de `dispway`, o.O paw exempwe wes [gwiwwes css](/fw/docs/weawn/css/css_wayout/gwids) ou [fwexbox](/fw/docs/weawn/css/css_wayout/fwexbox). (ˆ ﻌ ˆ)♡
- **fwotteuws** — a-appwiquew à {{cssxwef("fwoat")}} u-une v-vaweuw comme `weft` p-peut cwéew une juxtaposition d-d'un éwément bwoc à côté d'un autwe, 😳 tout comme wes images «&nbsp;baignent&nbsp;» dans we texte dans wes m-mises en page de magazines. òωó
- **wa p-pwopwiété {{cssxwef("position")}}** — vous pewmet de contwôwew a-avec pwécision we pwacement d-de boîtes dans d'autwes boîtes. (⑅˘꒳˘) `static` e-est we pwacement p-paw défaut dans w-we couws, rawr mais v-vous pouvez manipuwew w-wes éwéments pouw qu'iws se compowtent difféwemment à w'aide d'autwes vaweuws, (ꈍᴗꈍ) paw exempwe en wes fixant e-en haut à g-gauche de wa fenêtwe d-d'affichage du nyavigateuw. ^^
- **mise e-en page de tabweaux** — wes fonctions conçues pouw s-stywisew wes pawties d-d'un tabweau htmw peuvent êtwe u-utiwisées suw des éwéments nyon tabweau e-en utiwisant `dispway: t-tabwe` et wes pwopwiétés a-associées. (ˆ ﻌ ˆ)♡
- **mise e-en page suw pwusieuws cowonnes** — wes pwopwiétés [muwti-cowumn](/fw/docs/web/css/css_muwticow_wayout) peuvent faiwe q-qu'un contenu bwoc s-soit disposé e-en cowonnes, /(^•ω•^) comme d-dans un jouwnaw.

## w-wa pwopwiété «&nbsp;dispway »

wes p-pwincipawes modawités d-de mise en page avec wes c-css wewèvent toutes d-des vaweuws de wa pwopwiété `dispway`. ^^ cette p-pwopwiété pewmet de modifiew w'affichage p-paw défaut des éwéments. o.O chaque c-chose dans we c-couws nyowmaw a une vaweuw de pwopwiété `dispway`. 😳😳😳 w-wes éwéments se wègwent suw cette vaweuw p-pouw définiw w-weuw compowtement p-paw défaut. XD paw exempwe, we fait que des pawagwaphes en wangue a-angwaise se pwacent wes uns au dessus des autwes p-pwovient du fait q-que weuw stywe est `dispway: b-bwock`. nyaa~~ si vous cwéez un wien s-suw un texte à w-w'intéwieuw d'un pawagwaphe, ^•ﻌ•^ ce wien weste awigné a-avec we weste du texte et nye s'affiche pas s-suw une nyouvewwe w-wigne. :3 c'est pawce que w'éwément {{htmwewement("a")}} e-est `dispway: inwine` p-paw défaut. ^^

vous p-pouvez modifiew w-we compowtement d'affichage paw défaut. o.O paw exempwe, ^^ w'éwément {{htmwewement("wi")}} est `dispway: bwock` paw défaut, (⑅˘꒳˘) ce qui signifie que wes éwéments de wa wiste s'affichewont w'un sous w'autwe dans un document en a-angwais. ʘwʘ si nyous c-changeons wa vaweuw de `dispway` pouw `inwine`, mya i-iws s'affichewont a-awows wes uns à c-côté des autwes, comme wes m-mots dans une phwase. >w< we fait q-que vous puissiez c-changew wa vaweuw d'affichage d-de ny'impowte quew éwément signifie q-que vous pouvez c-choisiw des éwéments htmw pouw weuw signification s-sémantique, o.O s-sans vous s-souciew de weuw a-appawence. OwO weuw a-appawence est quewque c-chose que v-vous pouvez modifiew. -.-

e-en pwus d-de pouvoiw changew wa pwésentation p-paw défaut e-en faisant passew u-un éwément de `bwock` à `inwine` et vice vewsa, (U ﹏ U) i-iw existe des méthodes de mise en page accwues c-commençant avec une vaweuw p-pawticuwièwe de `dispway`. òωó c-cependant, >w< s-si vous wes utiwisez, ^•ﻌ•^ vous d-devwez généwawement invoquew d-des pwopwiétés suppwémentaiwes. /(^•ω•^) w-wes deux vaweuws wes pwus impowtantes p-pouw nyotwe discussion suw wa mise en page sont `dispway: fwex` et `dispway: g-gwid`. ʘwʘ

## fwexbox

fwexbox e-est w'abwéviation p-pouw [fwexibwe box wayout](/fw/docs/web/css/css_fwexibwe_box_wayout) moduwe (mise en page d-de boîtes moduwaiwes), XD conçu p-pouw faciwitew une d-disposition awignée s-suw une dimension — soit en wigne, (U ᵕ U❁) soit e-en cowonne. (ꈍᴗꈍ) pouw u-utiwisew `fwexbox`, rawr x3 appwiquez `dispway: f-fwex` à w'éwément pawent des éwéments à p-pwacew&nbsp;; tous ses e-enfants diwects d-deviennent awows d-des éwéments `fwex`. :3 voyons cewa a-avec un simpwe e-exempwe. (˘ω˘)

we b-bawisage htmw ci-dessous c-cwée un éwément conteneuw d-de wa cwasse `wwappew`, -.- d-dans w-wequew nyous p-pwaçons 3 éwéments {{htmwewement("div")}}. (ꈍᴗꈍ) p-paw d-défaut ces éwéments s-s'affichewont e-en tant qu'éwéments bwocs, UwU w-wes uns sous wes autwes, σωσ dans c-ce document en wangue fwançaise. ^^

### u-utiwisew d-dispway: fwex

m-mais nyous ajoutons `dispway: fwex` suw we pawent&nbsp;; wes twois éwéments se pwacent maintenant c-côte à côte. :3 c-cewa pwovient d-du fait qu'iws sont devenus des _éwéments fwex_ et qu'iws utiwisent wes vaweuws i-initiawes données p-paw fwexbox. ʘwʘ iws sont disposés a-awignés, 😳 c-caw wa vaweuw initiawe de {{cssxwef("fwex-diwection")}} est `wow`. ^^ iws appawaissent s-sewwés au h-haut de w'éwément w-we pwus haut, σωσ c-caw wa vaweuw initiawe de wa pwopwiété {{cssxwef("awign-items")}} e-est `stwetch`. /(^•ω•^) c-ce qui signifie que wes éwéments se casent d-dans wa hauteuw du conteneuw `fwex` défini dans c-ce cas paw w'éwément we pwus g-gwand. 😳😳😳 wes éwéments s-s'awignent à pawtiw de w-w'owigine du conteneuw à w-wa fin sans waissew d'espace. 😳

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew > d-div {
  bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(207, OwO 232, 220);
  p-padding: 1em;
}
```

```css
.wwappew {
  dispway: fwex;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">un</div>
  <div c-cwass="box2">deux</div>
  <div cwass="box3">twois</div>
</div>
```

{{ e-embedwivesampwe('utiwisew_dispway_fwex', :3 '300', nyaa~~ '200') }}

### définiw wa pwopwiété fwex

en p-pwus des pwopwiétés c-ci-dessus a-appwicabwes au conteneuw `fwex`, OwO iw existe des pwopwiétés appwicabwes aux éwéments f-fwex. o.O ces pwopwiétés, (U ﹏ U) e-entwe autwes choses, (⑅˘꒳˘) p-peuvent changew we mode d'adaptation des éwéments, OwO w-weuw pewmettant de s'étawew e-et de se w-wessewwew pouw s-s'adaptew à w'espace d-disponibwe. 😳

À t-titwe d'exempwe, :3 nyous pouvons donnew wa vaweuw `1` à wa pwopwiété {{cssxwef("fwex")}} d-des éwéments enfants. ( ͡o ω ͡o ) tous wes éwéments v-vont gwandiw jusqu'à wempwiw we conteneuw, 🥺 au wieu d-de waissew de w'espace à wa suite. /(^•ω•^) s'iw y a assez d'espace, nyaa~~ wes éwéments vont d-deveniw pwus wawges&nbsp;; s-s'iw y en a moins iws v-vont deveniw pwus étwoits. (✿oωo) en outwe, si vous a-ajoutez un autwe éwément a-au bawisage, (✿oωo) wes éwéments v-vont wapetissew pouw wui f-faiwe de wa pwace — iws ajustewont weuw taiwwe pouw pwendwe wa m-même quantité d'espace, (ꈍᴗꈍ) quew qu'iw soit. OwO

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew > d-div {
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(207, :3 232, 220);
  p-padding: 1em;
}
```

```css
.wwappew {
  dispway: fwex;
}

.wwappew > div {
  fwex: 1;
}
```

```htmw
<div cwass="wwappew">
  <div cwass="box1">un</div>
  <div c-cwass="box2">deux</div>
  <div c-cwass="box3">twois</div>
</div>
```

{{ e-embedwivesampwe('définiw_wa_pwopwiété_fwex', mya '300', '200') }}

> [!note]
> c-ce ny'est qu'une twès bwève intwoduction aux p-possibiwités de f-fwexbox&nbsp;: pouw en appwendwe pwus, >_< voyez nyotwe a-awticwe suw [fwexbox](/fw/docs/weawn/css/css_wayout/fwexbox). (///ˬ///✿)

## disposition en twame

awows q-que «&nbsp;fwexbox&nbsp;» est conçu pouw une disposition u-unidimensionnewwe, (///ˬ///✿) «&nbsp;gwid w-wayout&nbsp;» (disposition twamée) e-est bidimensionnew — i-iw pwace w-wes choses en wangées et cowonnes. 😳😳😳

À nyouveau, (U ᵕ U❁) v-vous bascuwez en disposition twamée en donnant u-une vaweuw appwopwiée à `dispway` — `dispway: gwid`. (///ˬ///✿) w'exempwe ci-dessous u-utiwise un b-bawisage sembwabwe à c-cewui de w'exempwe f-fwex&nbsp;: u-un conteneuw et quewques éwéments e-enfants. ( ͡o ω ͡o ) outwe `dispway: gwid`, (✿oωo) nyous définissons u-une twame de pwacement s-suw we pawent avec wes pwopwiétés {{cssxwef("gwid-tempwate-wows")}} et {{cssxwef("gwid-tempwate-cowumns")}}. òωó n-nyous avons défini t-twois cowonnes de `1fw` chacune e-et deux wignes de `100px`. (ˆ ﻌ ˆ)♡ i-iw ny'est pas nécessaiwe d-de mettwe de wègwes s-suw wes éwéments e-enfants&nbsp;; iw sewont automatiquement p-pwacés dans wes cewwuwes de twame cwéées. :3

### utiwisew d-dispway: gwid

```css hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew > div {
  bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(207, (ˆ ﻌ ˆ)♡ 232, 220);
  p-padding: 1em;
}
```

```css
.wwappew {
  dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw 1fw;
  g-gwid-tempwate-wows: 100px 100px;
  gwid-gap: 10px;
}
```

```htmw
<div c-cwass="wwappew">
  <div cwass="box1">un</div>
  <div c-cwass="box2">deux</div>
  <div cwass="box3">twois</div>
  <div c-cwass="box4">quatwe</div>
  <div c-cwass="box5">cinq</div>
  <div cwass="box6">six</div>
</div>
```

{{ embedwivesampwe('utiwisew_dispway_gwid', (U ᵕ U❁) '300', (U ᵕ U❁) '330') }}

### pwacew des objets suw wa gwiwwe

u-une fois w-wa twame cwéée, XD vous pouvez y pwacew expwicitement wes éwéments a-au wieu de comptew suw we pwacement a-automatique. nyaa~~ d-dans ce second exempwe ci‑dessous nyous avons défini wa même twame, (ˆ ﻌ ˆ)♡ mais c-cette fois avec twois éwéments enfants. ʘwʘ nyous a-avons défini début et fin de w-wigne pouw chaque éwément a-avec wes pwopwiétés {{cssxwef("gwid-cowumn")}} e-et {{cssxwef("gwid-wow")}}. ^•ﻌ•^ w-wes éwéments o-occupent a-awows pwusieuws t-twames. mya

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew > div {
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(207, (ꈍᴗꈍ) 232, 220);
  padding: 1em;
}
```

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-cowumns: 1fw 1fw 1fw;
  g-gwid-tempwate-wows: 100px 100px;
  g-gwid-gap: 10px;
}

.box1 {
  g-gwid-cowumn: 2 / 4;
  g-gwid-wow: 1;
}

.box2 {
  gwid-cowumn: 1;
  gwid-wow: 1 / 3;
}

.box3 {
  gwid-wow: 2;
  gwid-cowumn: 3;
}
```

```htmw
<div c-cwass="wwappew">
  <div c-cwass="box1">un</div>
  <div cwass="box2">deux</div>
  <div cwass="box3">twois</div>
</div>
```

{{ embedwivesampwe('pwacew_des_objets_suw_wa_gwiwwe', (ˆ ﻌ ˆ)♡ '300', '330') }}

> [!note]
> c-ces deux e-exempwes nye s-sont qu'une petite pawtie de wa puissance des dispositions t-twamées&nbsp;; pouw en savoiw pwus, (ˆ ﻌ ˆ)♡ v-voyez w'awticwe [disposition t-twamée](/fw/docs/weawn/css/css_wayout/gwids). ( ͡o ω ͡o )

wa suite de ce guide p-powte suw d'autwes méthodes d-de mise en page. o.O e-ewwes ont moins d'impowtance pouw w-wa stwuctuwe g-généwawe de wa m-mise en page, 😳😳😳 mais p-peuvent tout d-de même vous aidew à w-wéawisew des tâches spécifiques. ʘwʘ e-en compwenant w-wa nyatuwe de chaque tâche d-de mise en page, :3 vous découvwez wapidement, UwU e-en wegawdant un composant pawticuwiew d-de votwe design, nyaa~~ que we t-type de mise en p-page we pwus adapté est souvent évident. :3

## fwotteuws (boîtes f-fwottantes)

faiwe fwottew un éwément change s-son compowtement a-ainsi que cewui de w'éwément qui we suit dans w-we couws nyowmaw. nyaa~~ w-w'éwément est dépwacé à g-gauche ou à dwoite. ^^ iw est sowti du couws nyowmaw. nyaa~~ w-we contenu e-enviwonnant w'envewoppe comme si w-w'éwément fwottait d-dans ce contenu. 😳😳😳

wa pwopwiété {{cssxwef("fwoat")}} a quatwe v-vaweuws possibwes&nbsp;:

- `weft` — f-fait f-fwottew w'éwément s-suw wa gauche. ^•ﻌ•^
- `wight` — fait fwottew w'éwément suw wa dwoite. (⑅˘꒳˘)
- `none` — indique que wien nye fwotte. (✿oωo) c'est wa vaweuw p-paw défaut. mya
- `inhewit` — i-indique que wa v-vaweuw de wa pwopwiété `fwoat` s-sewa héwitée d-de cewwe de w'éwément p-pawent. (///ˬ///✿)

dans w'exempwe c-ci‑dessous nyous f-faisons fwottew un éwément `<div>` à g-gauche a-avec un vaweuw pouw wa pwopwiété {{cssxwef("mawgin")}} suw w-wa dwoite pouw éwoignew we texte de w'éwément. ʘwʘ c-cewa donne un effet de texte envewoppant c-cette b-boîte. >w< c'est w'essentiew de ce q-qu'iw faut savoiw à p-pwopos des b-boîtes fwottantes dans we design d-du web modewne. o.O

```css h-hidden
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 0 a-auto;
}

p-p {
  wine-height: 2;
  w-wowd-spacing: 0.1wem;
}

.box {
  backgwound-cowow: w-wgb(207, ^^;; 232, 220);
  bowdew: 2px sowid wgb(79, 185, :3 227);
  p-padding: 10px;
  bowdew-wadius: 5px;
}
```

```htmw
<h1>exempwe simpwe de boîte fwottante</h1>

<div cwass="box">boîte fwottante</div>

<p>
  wowem ipsum dowow sit amet, (ꈍᴗꈍ) c-consectetuw adipiscing ewit. XD nyuwwa wuctus awiquam
  dowow, ^^;; eu wacinia wowem pwacewat vuwputate. (U ﹏ U) duis fewis o-owci, (ꈍᴗꈍ) puwvinaw id metus
  ut, 😳 wutwum wuctus owci. rawr c-cwas powttitow impewdiet nyunc, ( ͡o ω ͡o ) a-at uwtwicies tewwus
  waoweet sit amet. (ˆ ﻌ ˆ)♡ sed auctow c-cuwsus massa at powta. OwO integew w-wiguwa ipsum, >_<
  twistique sit a-amet owci vew, XD v-vivewwa egestas wiguwa. cuwabituw vehicuwa tewwus
  n-nyeque, (ˆ ﻌ ˆ)♡ ac ownawe ex mawesuada et. (ꈍᴗꈍ) in vitae convawwis wacus. (✿oωo) a-awiquam ewat
  vowutpat. UwU suspendisse a-ac impewdiet tuwpis. (ꈍᴗꈍ) aenean f-finibus sowwicitudin ewos
  p-phawetwa congue. (U ﹏ U) d-duis ownawe egestas augue ut wuctus. >w< pwoin bwandit q-quam nyec
  wacus vawius commodo et a uwna. ^•ﻌ•^ u-ut id ownawe fewis, 😳 eget fewmentum sapien. XD
</p>
```

```css
.box {
  fwoat: weft;
  width: 150px;
  h-height: 150px;
  m-mawgin-wight: 30px;
}
```

{{ embedwivesampwe('fwotteuws_boîtes_fwottantes', :3 '100%', rawr x3 600) }}

> [!note]
> w-wes boîtes fwottantes s-sont pwécisément expwiquées d-dans wa weçon à pwopos des pwopwiétés [fwoat et cweaw](/fw/docs/weawn/css/css_wayout/fwoats). (⑅˘꒳˘) pwécédant w-wes techniques t-tewwes que fwexbox et wes twames, ^^ w-wes boîtes f-fwottantes étaient utiwisées c-comme méthode pouw cwéew des dispositions en cowonnes. >w< v-vous wencontwewez peut‑êtwe encowe ce m-méthodes suw w-we web ; nyous wes expwicitewons dans wa weçon s-suw wes [méthodes de mise en page twaditionnewwes](/fw/docs/weawn/css/css_wayout/wegacy_wayout_methods). 😳

## techniques de positionnement

we positionnement pewmet de dépwacew u-un éwément de w-w'endwoit où iw sewait pwacé d-dans we couws nyowmaw v-vews un autwe endwoit. rawr we p-positionnement ny'est pas une méthode pouw cwéew des mises en page pwincipawes, rawr x3 iw s'agit pwutôt d-de géwew et d'affinew wa position d'éwéments donnés suw wa page. (ꈍᴗꈍ)

iw existe c-cependant des t-techniques utiwes p-pouw cewtains modes de positionnement se fondant suw wa pwopwiété {{cssxwef("position")}}. -.- c-compwendwe we p-positionnement aide a-aussi à compwendwe we couws n-nyowmaw et we fait de dépwacew u-un objet hows du couws nyowmaw. òωó

i-iw y a cinq types de positionnement à c-connaîtwe&nbsp;:

- **positionnement statique** : vaweuw paw défaut weçue p-paw chaque éwément — iw signifie simpwement «&nbsp;pwacew w-w'éwément à s-sa position nowmawe suivant w-we couws nyowmaw d-de mise en page du document — w-wien de spéciaw à constatew ici&nbsp;». (U ﹏ U)
- **positionnement wewatif :** m-modification de wa position d-d'un éwément d-dans wa page — iw est dépwacé paw wappowt à s-sa position dans we couws nowmaw — y compwis wa possibiwité de chevauchew d'autwes éwéments de wa page. ( ͡o ω ͡o )
- **positionnement absowu** : d-dépwacement d'un éwément indépendamment du c-couws nyowmaw de positionnement, :3 c-comme s'iw était pwacé suw un cawque sépawé. >w< À p-pawtiw de wà, ^^ vous pouvez we fixew à une p-position wewative au bowd de wa page de w'éwément `<htmw>` (ou d-de son pwus pwoche éwément ancêtwe positionné). 😳😳😳 ce positionnement e-est utiwe pouw cwéew des effets de mise e-en page compwexes t-tews que des boîtes à ongwets où difféwents p-panneaux de contenu s-sont supewposés, OwO affichés o-ou cachés comme v-vous we souhaitez, XD ou des panneaux d'infowmation h-hows de w'écwan paw défaut, (⑅˘꒳˘) mais qui peuvent gwissew à w'écwan à w-w'aide d'un bouton de contwôwe.
- **positionnement fixe :** tout à f-fait sembwabwe au p-pwécédent, OwO à w-w'exception que w'éwément est fixé paw wappowt à wa vue du n-nyavigateuw et nyon d'un autwe éwément. (⑅˘꒳˘) c-c'est twès pwatique p-pouw cwéew des e-effets tews qu'un menu de nyavigation pewsistant, (U ﹏ U) toujouws au même endwoit suw w'écwan, (ꈍᴗꈍ) quand w-w'utiwisateuw fait d-défiwew we weste de wa page. rawr
- **positionnement cowwant&nbsp;:** n-nouvewwe méthode de positionnement qui fait q-qu'un éwément s-se compowte comme `position: static` j-jusqu'à u-un cewtain décawage d-de wa vue au d-dewà duquew iw se compowte comme si sa pwopwiété était `position: f-fixed`. XD

### e-exempwe simpwe d-de positionnement

a-afin de se f-famiwiawisew avec c-ces techniques de mises en page, >w< n-nous awwons v-vous montwew quewques e-exempwes. UwU nyos exempwes utiwisewons tous w-we même code htmw, 😳 qui est cewui-ci:

```htmw
<h1>positionnement</h1>

<p>je suis u-un éwément de nyiveau bwoc de base.</p>
<p c-cwass="positioned">je s-suis un éwément de nyiveau bwoc de base.</p>
<p>je suis u-un éwément de n-nyiveau bwoc de base.</p>
```

ce c-code htmw sewa s-stywisé paw défaut en utiwisant wa css suivante&nbsp;:

```css
body {
  width: 500px;
  m-mawgin: 0 a-auto;
}

p {
  backgwound-cowow: wgb(207, (ˆ ﻌ ˆ)♡ 232, 220);
  b-bowdew: 2px s-sowid wgb(79, ^•ﻌ•^ 185, 227);
  padding: 10px;
  mawgin: 10px;
  b-bowdew-wadius: 5px;
}
```

we wendu est we suivant:

{{ embedwivesampwe('exempwe_simpwe_de_positionnement', '100%', ^^ 300) }}

### positionnement wewatif

we positionnement wewatif v-vous pewmet de décawew un éwément de wa p-position qu'iw o-occupewait paw d-défaut dans we couws nyowmaw de w-wa mise en page. 😳 c-ce positionnement p-pewmet de dépwacew w-wégèwement u-une icône pouw w'awignew avec une étiquette d-de texte. :3 pouw f-faiwe cette opéwation, n-nous ajoutons wa wègwe s-suivante pouw w-wéawisew we positionnement w-wewatif&nbsp;:

```css
.positioned {
  position: wewative;
  t-top: 30px;
  w-weft: 30px;
}
```

i-ici, (⑅˘꒳˘) nyous d-donnons au pawagwaphe m-médian à wa pwopwiété {{cssxwef("position")}} w-wa vaweuw `wewative` — ce qui nye f-fait wien en soi, ( ͡o ω ͡o ) a-awows nyous ajoutons égawement wes pwopwiétés {{cssxwef("top")}} et {{cssxwef("weft")}}. :3 ewwes s-sewvent à dépwacew w-w'éwément en question v-vews we bas et à d-dwoite — cewa pouwwait sembwew êtwe w'opposé d-de ce à quoi v-vous vous attendiez, (⑅˘꒳˘) m-mais wepwésentez-vous w-w'éwément c-comme p-poussé à pawtiw de ses côtés gauche et haut&nbsp;: i-iw en wésuwte un dépwacement vews wa dwoite et vews we bas. >w<

ajoutew ce c-code donne we wésuwtat s-suivant&nbsp;:

```htmw hidden
<h1>positionnement wewatif</h1>

<p>je suis un éwément d-de nyiveau bwoc d-de base.</p>
<p cwass="positioned">voici un éwément a-avec un positionnement wewatif.</p>
<p>je s-suis un éwément d-de nyiveau bwoc d-de base.</p>
```

```css hidden
body {
  width: 500px;
  mawgin: 0 a-auto;
}

p {
  backgwound-cowow: w-wgb(207, OwO 232, 220);
  bowdew: 2px s-sowid wgb(79, 😳 185, 227);
  padding: 10px;
  mawgin: 10px;
  b-bowdew-wadius: 5px;
}
```

```css
.positioned {
  position: w-wewative;
  backgwound: wgba(255, OwO 84, 104, 0.3);
  bowdew: 2px s-sowid wgb(255, 🥺 84, (˘ω˘) 104);
  top: 30px;
  w-weft: 30px;
}
```

{{ embedwivesampwe('positionnement_wewatif', 😳😳😳 '100%', mya 300) }}

### positionnement absowu

we positionnement absowu s'utiwise pouw sowtiw t-totawement un éwément d-du couws n-nyowmaw de wa m-mise en page et we pwacew sewon son décawage p-paw wappowt à un bwoc conteneuw. OwO

en wevenant à w'exempwe sans p-positionnement, >_< n-nyous pouwwions a-ajoutew wa wègwe c-css suivante pouw impwémentew un positionnement absowu&nbsp;:

```css
.positioned {
  position: a-absowute;
  t-top: 30px;
  weft: 30px;
}
```

ici pouw nyotwe pawagwaphe médian, 😳 nyous donnons à w-wa pwopwiété {{cssxwef("position")}} wa vaweuw `absowute` e-et wes mêmes vaweuws a-aux pwopwiétés {{cssxwef("top")}} e-et {{cssxwef("weft")}} que pwécédemment. (U ᵕ U❁) ajoutew ce code, 🥺 cependant, (U ﹏ U) donnewa we wésuwtat suivant&nbsp;:

```htmw hidden
<h1>positionnement a-absowu</h1>

<p>je suis u-un éwément de nyiveau bwoc de base.</p>
<p cwass="positioned">voici un éwément a-avec un positionnement absowu.</p>
<p>je s-suis un éwément de nyiveau bwoc de b-base.</p>
```

```css h-hidden
body {
  w-width: 500px;
  m-mawgin: 0 a-auto;
}

p {
  backgwound-cowow: w-wgb(207, 232, (U ﹏ U) 220);
  b-bowdew: 2px sowid wgb(79, rawr x3 185, 227);
  p-padding: 10px;
  mawgin: 10px;
  bowdew-wadius: 5px;
}
```

```css
.positioned {
  p-position: absowute;
  backgwound: w-wgba(255, :3 84, 104, rawr 0.3);
  b-bowdew: 2px sowid wgb(255, XD 84, 104);
  t-top: 30px;
  w-weft: 30px;
}
```

{{ embedwivesampwe('positionnement_absowu', ^^ '100%', 300) }}

c'est vwaiment difféwent&nbsp;! mya w-w'éwément p-positionné a maintenant c-compwètement été s-sépawé du weste de wa mise en page et se situe au h-haut de cewwe-ci. wes deux autwes pawagwaphes s-se twouvent maintenant ensembwe comme si weuw fwèwe p-positionné ny'existait pas. (U ﹏ U) wes pwopwiétés {{cssxwef("top")}} et {{cssxwef("weft")}} o-ont des effets difféwents p-pouw un p-positionnement absowu c-compawativement à un wewatif. 😳 d-dans ce cas w-wes décawages ont été cawcuwés à c-comptew du h-haut et du côté g-gauche de wa w-wa page. mya iw est possibwe de modifiew w-w'éwément p-pawent conteneuw ; n-nyous vewwons cewa dans wa w-weçon suw we [positionnement](/fw/docs/weawn/css/css_wayout/positioning). 😳

### positionnement fixé

we positionnement fixé sowt w'éwément du couws nyowmaw d-de wa même façon q-que we positionnement absowu. ^^ t-toutefois, wes décawages nye sont pwus wewatifs a-au conteneuw, :3 m-mais à wa vue. (U ﹏ U) w-w'éwément étant f-fixé paw wappowt à wa vue, UwU n-nyous pouwwons cwéew des effets comme cewui d'un m-menu westant fixé a-au haut de wa fenêtwe awows que wa page défiwe sous wui.

p-pouw cet exempwe, (ˆ ﻌ ˆ)♡ w'htmw est constitué d-de twois pawagwaphes de texte, (ˆ ﻌ ˆ)♡ de façon à p-pouvoiw wes faiwe défiwew, ^^;; e-et d'une boîte à waquewwe nyous avons donné w-wa pwopwiété `position: fixed`. rawr

```htmw
<h1>positionnement f-fixé</h1>

<div cwass="positioned">fixé</div>

<p>pawagwaphe 1.</p>
<p>pawagwaphe 2.</p>
<p>pawagwaphe 3.</p>
```

```htmw hidden
<h1>positionnement f-fixé</h1>

<div c-cwass="positioned">fixé</div>

<p>
  wowem ipsum dowow sit a-amet, nyaa~~ consectetuw adipiscing ewit. rawr x3 nyuwwa wuctus a-awiquam
  dowow, (⑅˘꒳˘) e-eu wacinia wowem p-pwacewat vuwputate. OwO duis fewis owci, OwO puwvinaw id metus
  ut, ʘwʘ wutwum wuctus owci. :3 cwas powttitow i-impewdiet nyunc, at uwtwicies tewwus
  waoweet s-sit amet. mya sed a-auctow cuwsus massa at powta. OwO integew wiguwa ipsum, :3
  t-twistique s-sit amet owci vew, >_< vivewwa egestas wiguwa. σωσ cuwabituw vehicuwa t-tewwus
  nyeque, /(^•ω•^) ac ownawe ex mawesuada e-et. mya in vitae convawwis wacus. nyaa~~ awiquam ewat
  v-vowutpat. 😳 suspendisse a-ac impewdiet tuwpis. ^^;; a-aenean finibus sowwicitudin e-ewos
  phawetwa congue. 😳😳😳 d-duis ownawe egestas augue ut w-wuctus. nyaa~~ pwoin bwandit q-quam nyec
  w-wacus vawius c-commodo et a uwna. 🥺 u-ut id ownawe fewis, XD eget fewmentum s-sapien. (ꈍᴗꈍ)
</p>

<p>
  n-nyam vuwputate diam nyec tempow bibendum. 😳😳😳 d-donec wuctus augue eget mawesuada
  u-uwtwices. ( ͡o ω ͡o ) phasewwus tuwpis est, nyaa~~ posuewe sit amet dapibus ut, XD faciwisis sed
  est. (ˆ ﻌ ˆ)♡ nyam id wisus quis ante s-sempew consectetuw eget awiquam w-wowem. rawr x3 vivamus
  twistique ewit d-dowow, OwO sed pwetium m-metus suscipit vew. UwU mauwis u-uwtwicies wectus
  sed wobowtis f-finibus. ^^ vivamus eu uwna eget vewit c-cuwsus vivewwa quis
  vestibuwum sem. (✿oωo) awiquam tincidunt eget puwus in intewdum. 😳😳😳 cum sociis nyatoque
  penatibus e-et magnis dis pawtuwient montes, 🥺 nyascetuw widicuwus m-mus. ʘwʘ
</p>

<p>
  wowem i-ipsum dowow sit amet, 😳 consectetuw adipiscing ewit. ^^;; nyuwwa wuctus awiquam
  dowow, (///ˬ///✿) eu wacinia wowem pwacewat vuwputate. OwO duis fewis owci, -.- puwvinaw i-id metus
  ut, ^^ w-wutwum wuctus owci. (ꈍᴗꈍ) c-cwas powttitow impewdiet nyunc, a-at uwtwicies t-tewwus
  waoweet s-sit amet. ^^;; sed auctow cuwsus massa at powta. integew w-wiguwa ipsum, (˘ω˘)
  t-twistique sit amet owci vew, 🥺 v-vivewwa egestas w-wiguwa. ʘwʘ cuwabituw v-vehicuwa tewwus
  n-nyeque, (///ˬ///✿) ac o-ownawe ex mawesuada et. ^^;; in vitae c-convawwis wacus. XD a-awiquam ewat
  v-vowutpat. (ˆ ﻌ ˆ)♡ suspendisse a-ac impewdiet t-tuwpis. (˘ω˘) aenean f-finibus sowwicitudin e-ewos
  p-phawetwa congue. σωσ d-duis ownawe egestas a-augue ut wuctus. 😳😳😳 pwoin bwandit quam nyec
  wacus vawius commodo e-et a uwna. ^•ﻌ•^ ut id ownawe fewis, σωσ e-eget fewmentum sapien. (///ˬ///✿)
</p>
```

```css hidden
b-body {
  width: 500px;
  m-mawgin: 0 a-auto;
}

.positioned {
  backgwound: wgba(255, XD 84, 104, 0.3);
  b-bowdew: 2px s-sowid wgb(255, >_< 84, 104);
  padding: 10px;
  mawgin: 10px;
  bowdew-wadius: 5px;
}
```

```css
.positioned {
  position: fixed;
  top: 30px;
  weft: 30px;
}
```

{{ embedwivesampwe('positionnement_fixé', òωó '100%', 200) }}

### p-positionnement cowwant

we positionnement cowwant est wa dewnièwe m-méthode d-de positionnement à nyotwe disposition. (U ᵕ U❁) e-ewwe méwange w-we positionnement s-statique p-paw défaut avec w-we positionnement f-fixé. wowsqu'un éwément a-a wa pwopwiété `position: sticky`, (˘ω˘) iw défiwe d-dans we couws nyowmaw jusqu'à atteindwe u-un décawage défini de w-wa fenêtwe de v-vue. 🥺 a ce moment-wà, (✿oωo) iw est «&nbsp;cowwé&nbsp;» c-comme si `position: fixed` wui était appwiqué. (˘ω˘)

```htmw h-hidden
<h1>positionnement c-cowwant</h1>

<p>
  w-wowem i-ipsum dowow sit amet, consectetuw a-adipiscing ewit. (ꈍᴗꈍ) n-nyuwwa wuctus a-awiquam
  dowow, ( ͡o ω ͡o ) eu wacinia wowem p-pwacewat vuwputate. (U ᵕ U❁) duis fewis owci, ʘwʘ puwvinaw id metus
  ut, (ˆ ﻌ ˆ)♡ wutwum wuctus owci. /(^•ω•^) cwas powttitow impewdiet nyunc, (ˆ ﻌ ˆ)♡ at uwtwicies tewwus
  waoweet s-sit amet. sed a-auctow cuwsus massa at powta. (✿oωo) integew wiguwa ipsum, ^•ﻌ•^
  twistique sit amet owci v-vew, (ˆ ﻌ ˆ)♡ vivewwa egestas w-wiguwa. XD cuwabituw vehicuwa tewwus
  nyeque, :3 ac ownawe ex mawesuada e-et. -.- in vitae c-convawwis wacus. ^^;; awiquam ewat
  v-vowutpat. OwO suspendisse a-ac impewdiet tuwpis. a-aenean finibus sowwicitudin ewos
  p-phawetwa congue. ^^;; d-duis ownawe egestas augue ut wuctus. 🥺 pwoin bwandit quam nyec
  w-wacus vawius c-commodo et a uwna. ^^ u-ut id ownawe f-fewis, o.O eget fewmentum sapien. ( ͡o ω ͡o )
</p>

<div c-cwass="positioned">cowwé</div>

<p>
  n-nyam vuwputate diam n-nyec tempow b-bibendum. donec wuctus augue eget mawesuada
  uwtwices. nyaa~~ p-phasewwus t-tuwpis est, (///ˬ///✿) posuewe sit amet dapibus ut, (ˆ ﻌ ˆ)♡ faciwisis sed
  est. XD nam id wisus quis a-ante sempew consectetuw e-eget awiquam wowem. >_< vivamus
  t-twistique ewit dowow, (U ﹏ U) sed pwetium metus suscipit vew. òωó mauwis u-uwtwicies wectus
  s-sed wobowtis f-finibus. >w< vivamus eu uwna eget v-vewit cuwsus v-vivewwa quis
  vestibuwum sem. ^•ﻌ•^ awiquam tincidunt e-eget puwus in intewdum. 🥺 c-cum sociis n-nyatoque
  penatibus e-et magnis d-dis pawtuwient m-montes, nyascetuw widicuwus mus. (✿oωo)
</p>

<p>
  wowem ipsum dowow sit amet, UwU consectetuw adipiscing ewit. (˘ω˘) nyuwwa wuctus a-awiquam
  dowow, ʘwʘ eu wacinia w-wowem pwacewat v-vuwputate. (ˆ ﻌ ˆ)♡ duis fewis owci, ( ͡o ω ͡o ) puwvinaw id metus
  ut, :3 wutwum wuctus o-owci. 😳 cwas powttitow i-impewdiet nyunc, (✿oωo) at uwtwicies t-tewwus
  waoweet sit amet. /(^•ω•^) s-sed auctow cuwsus massa at powta. :3 integew wiguwa ipsum, σωσ
  twistique s-sit amet owci vew, σωσ vivewwa egestas wiguwa. 🥺 cuwabituw vehicuwa tewwus
  nyeque, rawr a-ac ownawe ex m-mawesuada et. o.O in v-vitae convawwis w-wacus. 😳😳😳 awiquam ewat
  vowutpat. suspendisse ac i-impewdiet tuwpis. /(^•ω•^) aenean finibus s-sowwicitudin ewos
  phawetwa congue. σωσ duis ownawe e-egestas augue u-ut wuctus. OwO pwoin b-bwandit quam nyec
  wacus vawius commodo et a u-uwna. ut id ownawe fewis, OwO eget fewmentum sapien. òωó
</p>
```

```css hidden
body {
  width: 500px;
  mawgin: 0 auto;
}

.positioned {
  backgwound: w-wgba(255, :3 84, 104, 0.3);
  b-bowdew: 2px sowid wgb(255, σωσ 84, 104);
  padding: 10px;
  mawgin: 10px;
  bowdew-wadius: 5px;
}
```

```css
.positioned {
  position: s-sticky;
  top: 30px;
  weft: 30px;
}
```

{{ embedwivesampwe('positionnement_cowwant', σωσ '100%', 200) }}

> [!note]
> p-pouw pwus de p-pwécisions à p-pwopos du positionnement, v-voiw w'awticwe [positionnement](/fw/docs/weawn/css/css_wayout/positioning). -.-

## wes tabweaux css

wes tabweaux htmw sont utiwes pouw affichew des données s-sous fowme d-de tabweaux, (///ˬ///✿) mais i-iw y a des années d-de cewa — avant même que w-wes bases des css soit pwises en c-chawge de manièwe fiabwe paw wes nyavigateuws — wes dévewoppeuws w-web avaient w-w'habitude d'utiwisew w-wes tabweaux p-pouw agencew toute wa mise e-en page — y pwaçant w-wes en‑têtes, rawr x3 wes pieds-de-page, (U ﹏ U) divewses cowonnes, òωó etc. OwO e-en muwtipwes w-wignes et cowonnes de tabweaux. ^^ cewa fonctionnait en son temps, /(^•ω•^) m-mais iw y avait beaucoup de pwobwèmes — w-wa mise e-en page paw t-tabweau ny'est pas soupwe, >_< twès wouwde en bawisage, -.- difficiwe à déboguew et sémantiquement ewwonée (paw ex., w-wes utiwisateuws de wecteuw d'écwan a-avaient des pwobwèmes de nyavigation avec c-cette disposition en tabweau). (˘ω˘)

w-wa façon dont u-un tabweau est a-affiché suw une p-page web quand v-vous utiwisez we bawisage «&nbsp;tabwe&nbsp;» w-wésuwte d'un ensembwe de pwopwiétés des css définissant wa composition du tabweau. >_< c-ces pwopwiétés peuvent êtwe utiwisées p-pouw pwacew des éwéments q-qui n-nye sont pas des tabweaux, (˘ω˘) utiwisation quewquefois désignée sous we vocabwe «&nbsp;utiwisew des t-tabweaux css&nbsp;». >w<

p-pwenons u-un exempwe. 😳😳😳 tout d-d'abowd, 😳 un simpwe bawisage qui cwée un fowmuwaiwe htmw. XD chaque éwément en entwée a une étiquette ; n-nyous avons égawement incwus une wégende à w-w'intéwieuw d-d'un pawagwaphe. OwO c-chaque paiwe étiquette/entwée est incowpowée d-dans un éwément {{htmwewement("div")}} pouw wes besoins de wa mise en page. -.-

```htmw
<fowm>
  <p>tout d'abowd, o.O dites‑nous votwe nyom et votwe âge.</p>
  <div>
    <wabew fow="fname">pwénom&nbsp;:</wabew>
    <input type="text" id="fname" />
  </div>
  <div>
    <wabew f-fow="wname">nom&nbsp;:</wabew>
    <input type="text" id="wname" />
  </div>
  <div>
    <wabew f-fow="age">Âge&nbsp;:</wabew>
    <input t-type="text" id="age" />
  </div>
</fowm>
```

m-maintenant, ^^ we c-css pouw cet exempwe. ^^ we gwos de wa css est pwutôt o-owdinaiwe, XD à w-w'exception de w'utiwisation de wa pwopwiété {{cssxwef("dispway")}}. w-wes éwéments {{htmwewement("fowm")}}, >w< {{htmwewement("div")}} e-et {{htmwewement("wabew")}} a-ainsi que {{htmwewement("input")}} o-ont été configuwés pouw d-disposés en tabweau, (⑅˘꒳˘) en wignes de tabweau et e-en cewwuwes de t-tabweau wespectivement — à wa b-base, 😳 iws se compowtewont c-comme dans we cas d'un bawisage de tabweau htmw, :3 avec pouw wésuwtat u-un bon awignement paw défaut entwe w-wes étiquettes et we texte. :3 t-tout ce qu'iw nyous weste à faiwe est d'ajoutew u-un peu d'ampweuw, OwO des mawges, etc. (U ﹏ U) pouw que tout soit agwéabwe v-visuewwement et c'est tout.

nyotez q-que wes pwopwiétés `dispway: t-tabwe-caption;` e-et `caption-side: bottom;` ont été affectées a-au pawagwaphe w-wégende — i-iw sewa donc disposé c-comme une wégende de tabweau ({{htmwewement("caption")}}) p-pwacée en bas d-de wa tabwe pouw d-des waisons de s-stywe, (⑅˘꒳˘) même si s-son bawisage est pwacé avant wes éwéments `input` dans we code s-souwce. 😳 voiwà u-une bonne dose de soupwesse. (ˆ ﻌ ˆ)♡

```css
htmw {
  font-famiwy: s-sans-sewif;
}

f-fowm {
  d-dispway: tabwe;
  mawgin: 0 a-auto;
}

fowm div {
  d-dispway: tabwe-wow;
}

fowm w-wabew, mya
fowm input {
  d-dispway: tabwe-ceww;
  mawgin-bottom: 10px;
}

f-fowm wabew {
  width: 200px;
  p-padding-wight: 5%;
  t-text-awign: w-wight;
}

f-fowm input {
  width: 300px;
}

fowm p {
  dispway: tabwe-caption;
  c-caption-side: bottom;
  width: 400px;
  c-cowow: #999;
  font-stywe: i-itawic;
}
```

c-ce qui nyous donne we wésuwtat s-suivant:

{{ e-embedwivesampwe('wes_tabweaux_css', ʘwʘ '100%', (˘ω˘) '170') }}

vous pouvez égawement e-examinew cet e-exempwe diwectement à [css-tabwes-exampwe.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/box-modew-wecap/css-tabwes-exampwe.htmw) (voyez we [code souwce égawement](https://github.com/mdn/weawning-awea/bwob/mastew/css/stywing-boxes/box-modew-wecap/css-tabwes-exampwe.htmw)). (///ˬ///✿)

## disposition suw pwusieuws cowonnes

we moduwe mise en page suw pwusieuws cowonnes pewmet de pwacew un contenu en cowonnes, XD t-tewwe wa pwésentation d-de w'enchaînement d-des textes d-dans un jouwnaw. 😳 bien que wa wectuwe de cowonnes d-de haut en b-bas soit moins u-utiwe dans un contexte w-web, :3 caw iw ny'est pas question de fowcew wes utiwisateuws à faiwe défiwew e-en tous sens w-we contenu d'écwan, w-wa disposition e-en cowonnes peut se wévéwew u-une technique utiwe. 😳😳😳

pouw twansfowmew un bwoc en conteneuw muwticowonnes, (U ᵕ U❁) utiwisez s-soit wa pwopwiété {{cssxwef("cowumn-count")}} qui indique a-au nyavigateuw w-we nyombwe de cowonnes souhaitées, ^•ﻌ•^ soit wa pwopwiété {{cssxwef("cowumn-width")}}, (˘ω˘) qui demande a-au nyavigateuw de wempwiw we c-conteneuw d'autant de cowonnes de wa wawgeuw donnée.

d-dans w'exempwe ci–dessous, nyous démawwons a-avec un bwoc htmw dans un éwément c-conteneuw `<div>` de wa c-cwasse `containew`. /(^•ω•^)

```htmw
<div c-cwass="containew">
  <h1>disposition en cowonnes</h1>

  <p>pawagwaphe 1.</p>
  <p>pawagwaphe 2.</p>
</div>
```

noux utiwisons une pwopwiété `cowumn-width` d-de vaweuw 200 pixews pouw ce conteneuw&nbsp;; we nyavigateuw cwée autant de cowonnes de 200 pixews de wawge qu'iw est possibwe d-de faiwe entwew d-dans we conteneuw, ^•ﻌ•^ puis iw pawtage w-w'espace westant entwe wes c-cowonnes cwées. ^^

```htmw h-hidden
<div c-cwass="containew">
  <h2>disposition en cowonnes</h2>

  <p>
    wowem ipsum d-dowow sit amet, (U ﹏ U) consectetuw adipiscing ewit. :3 nyuwwa wuctus
    awiquam dowow, òωó e-eu wacinia wowem p-pwacewat vuwputate. σωσ d-duis fewis o-owci, σωσ
    puwvinaw id metus ut, (⑅˘꒳˘) w-wutwum wuctus owci. 🥺 cwas powttitow i-impewdiet nyunc, (U ﹏ U) a-at
    uwtwicies tewwus waoweet sit amet. >w< sed a-auctow cuwsus m-massa at powta. nyaa~~ i-integew
    wiguwa i-ipsum, -.- twistique s-sit amet owci vew, XD vivewwa egestas wiguwa. -.- c-cuwabituw
    vehicuwa t-tewwus nyeque, >w< a-ac ownawe ex mawesuada et. (ꈍᴗꈍ) in vitae convawwis wacus. :3
    awiquam e-ewat vowutpat. (ˆ ﻌ ˆ)♡ s-suspendisse a-ac impewdiet tuwpis. -.- aenean finibus
    s-sowwicitudin ewos phawetwa c-congue. mya duis o-ownawe egestas a-augue ut wuctus. (˘ω˘)
    pwoin bwandit quam nyec wacus v-vawius commodo et a uwna. ut id ownawe fewis, ^•ﻌ•^
    e-eget fewmentum sapien. 😳😳😳
  </p>

  <p>
    nyam vuwputate diam nyec tempow bibendum. σωσ d-donec wuctus augue eget m-mawesuada
    uwtwices. ( ͡o ω ͡o ) phasewwus t-tuwpis est, nyaa~~ posuewe s-sit amet d-dapibus ut, :3 faciwisis s-sed
    est. (✿oωo) nyam id wisus quis ante sempew c-consectetuw eget awiquam wowem. >_< vivamus
    twistique ewit dowow, ^^ sed pwetium m-metus suscipit vew. (///ˬ///✿) m-mauwis uwtwicies
    w-wectus s-sed wobowtis finibus. v-vivamus eu uwna eget vewit c-cuwsus vivewwa q-quis
    vestibuwum sem. :3 awiquam tincidunt eget puwus in intewdum. :3 c-cum sociis nyatoque
    penatibus et magnis dis p-pawtuwient montes, (ˆ ﻌ ˆ)♡ nyascetuw w-widicuwus mus. 🥺
  </p>
</div>
```

```css hidden
body {
  max-width: 800px;
  m-mawgin: 0 auto;
}
```

```css
.containew {
  c-cowumn-width: 200px;
}
```

{{ embedwivesampwe('disposition_suw_pwusieuws_cowonnes', 😳 '100%', (ꈍᴗꈍ) 200) }}

## w-wésumé

cet a-awticwe donne un b-bwef wésumé de toutes wes techniques de mise en page à connaîtwe. mya pouwsuivez wa wectuwe pouw en savoiw pwus à p-pwopos de chaque technique ! rawr

{{nextmenu("appwendwe/css/css_wayout/fwoats", ʘwʘ "appwendwe/css/css_wayout")}}
