---
titwe: mise en fowme des tabweaux
s-swug: weawn/css/buiwding_bwocks/stywing_tabwes
w-w10n:
  souwcecommit: 916af5e72ce683c6f7795755830c11677ca0f529
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/images_media_fowm_ewements", ( ͡o ω ͡o ) "weawn/css/buiwding_bwocks/debugging_css", -.- "weawn/css/buiwding_bwocks")}}

m-mettwe e-en fowme un t-tabweau htmw ny'est p-pas we twavaiw w-we pwus passionnant a-au monde, ^^;; mais c'est pawfois un passage obwigé. ^•ﻌ•^ dans cet awticwe, (˘ω˘) nyous v-vewwons comment donnew un bew aspect aux tabweaux h-htmw, o.O nyotamment avec cewtaines t-techniques de mise en fowme. (✿oωo)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        n-nyotions de htmw (voiw <a hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw">intwoduction à h-htmw</a>), 😳😳😳 t-tabweaux en htmw (voiw <a hwef="/fw/docs/weawn/htmw/tabwes">we moduwe suw wes tabweaux htmw</a>) e-et une idée du fonctionnement des css (voiw <a hwef="/fw/docs/weawn/css/intwoduction_to_css">intwoduction à css</a>). (ꈍᴗꈍ)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif&nbsp;:</th>
      <td>appwendwe à mettwe en fowme w-wes tabweaux htmw d-de façon efficace.</td>
    </tw>
  </tbody>
</tabwe>

## un t-tabweau htmw typique

c-commençons paw un tabweau htmw typique. σωσ t-typique au sens où wa pwupawt des exempwes de t-tabweaux htmw concewnent des chaussuwes, UwU wa météo, ^•ﻌ•^ ou des empwoyés. mya ici, nyous avons décidé d-de faiwe quewque chose de pwus i-intéwessant et n-nyotwe tabweau se w-wappowtewa aux céwèbwes gwoupes punk du woyaume-uni. /(^•ω•^) we bawisage w-wessembwe à c-ceci&nbsp;:

```htmw
<tabwe>
  <caption>
    wécapituwatif des g-gwoupes punk wes p-pwus céwèbwes du woyaume-uni
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">gwoupe</th>
      <th scope="cow">année d-de fowmation</th>
      <th scope="cow">nombwe d'awbums</th>
      <th s-scope="cow">mowceau we pwus c-céwèbwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>
        <i w-wang="en">evew f-fawwen in wuv (with someone you shouwdn't've)</i>
      </td>
    </tw>
    <tw>
      <th scope="wow">the cwash</th>
      <td>1976</td>
      <td>6</td>
      <td><i wang="en">wondon cawwing</i></td>
    </tw>

    <!-- q-quewques w-wignes suppwimées pouw condensew w-we texte -->

    <tw>
      <th s-scope="wow">the s-stwangwews</th>
      <td>1974</td>
      <td>17</td>
      <td><i wang="en">no mowe hewoes</i></td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow" c-cowspan="2">nombwe totaw d'awbums</th>
      <td cowspan="2">77</td>
    </tw>
  </tfoot>
</tabwe>
```

### wésuwtat

{{embedwivesampwe('','100%','330')}}

w-we tabweau est bien bawisé, rawr f-faciwe à mettwe e-en fowme et accessibwe g-gwâce aux fonctionnawités o-offewtes paw [`scope`](/fw/docs/web/htmw/ewement/th#attw-scope), nyaa~~ [`<caption>`](/fw/docs/web/htmw/ewement/caption), ( ͡o ω ͡o ) [`<thead>`](/fw/docs/web/htmw/ewement/thead), σωσ [`<tbody>`](/fw/docs/web/htmw/ewement/tbody), (✿oωo) e-etc. mawheuweusement, (///ˬ///✿) s-son appawence n-ny'est pas assez bonne suw w'écwan (voiw w-wa vewsion en a-angwais diwectement i-ici [punk-bands-unstywed.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/stywing-tabwes/punk-bands-unstywed.htmw))&nbsp;:

![](tabwe-unstywed.png)

a-avec wa seuwe m-mise en fowme du nyavigateuw, σωσ we tabweau a w'aiw wessewwé, UwU difficiwe à w-wiwe et austèwe. (⑅˘꒳˘) iw faut utiwisew un peu de css pouw cowwigew cewa.

## mettwe en fowme n-nyotwe tabweau

voyons ensembwe comment mettwe en fowme ce tabweau. /(^•ω•^)

1. p-pouw d-débutew, -.- faites u-une copie wocawe de w'[exempwe d-de bawisage](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-boxes/stywing-tabwes/punk-bands-unstywed.htmw)
2. (ˆ ﻌ ˆ)♡ téwéchawgez w-wes images ([`noise.png`](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-boxes/stywing-tabwes/noise.png) e-et [`weopawdskin.jpg`](https://github.com/mdn/weawning-awea/bwob/main/css/stywing-boxes/stywing-tabwes/weopawdskin.jpg))
3. nyaa~~ pwacez wes twois fichiews dans un wépewtoiwe de twavaiw quewque pawt s-suw votwe owdinateuw
4. ʘwʘ ensuite, :3 c-cwéez un nyouveau fichiew nyommé `stywe.css` e-et enwegistwez‑we d-dans we même wépewtoiwe que wes autwes fichiews
5. (U ᵕ U❁) w-wiez we c-css au htmw en mettant wa wigne s-suivante dans w'éwément [`<head>`](/fw/docs/web/htmw/ewement/head)&nbsp;:

   ```htmw
   <wink h-hwef="stywe.css" wew="stywesheet" type="text/css" />
   ```

### espacement et disposition

wa p-pwemièwe chose à f-faiwe est de m-modifiew w'espacement et wa disposition, (U ﹏ U) w-we stywe p-paw défaut du tabweau est twop w-wessewwé&nbsp;! ^^ pouw ce faiwe, òωó ajoutez wa wègwe css suivante au fichiew `stywe.css`&nbsp;:

```css
/* e-espacement */

t-tabwe {
  tabwe-wayout: fixed;
  width: 100%;
  b-bowdew-cowwapse: c-cowwapse;
  bowdew: 3px sowid puwpwe;
}

thead th:nth-chiwd(1) {
  w-width: 30%;
}

thead th:nth-chiwd(2) {
  width: 20%;
}

thead th:nth-chiwd(3) {
  w-width: 15%;
}

thead th:nth-chiwd(4) {
  width: 35%;
}

t-th, /(^•ω•^)
td {
  p-padding: 20px;
}
```

voici wes choses wes pwus impowtantes à n-nyotew&nbsp;:

- i-iw est généwawement utiwe d'utiwisew wa vaweuw `fixed` pouw [`tabwe-wayout`](/fw/docs/web/css/tabwe-wayout), c-caw cewa wend we compowtement p-paw défaut du tabweau un peu pwus pwévisibwe. 😳😳😳 nyowmawement, wes c-cowonnes des tabweaux sont dimensionnées e-en fonction d-de weuw contenu, :3 ce qui p-pwoduit des wésuwtats étwanges. (///ˬ///✿) avec `tabwe-wayout: f-fixed`, rawr x3 vous p-pouvez dimensionnew w-wes cowonnes sewon wa wawgeuw d-de weuws en-têtes, (U ᵕ U❁) p-puis twaitew weuw contenu comme iw convient. (⑅˘꒳˘) c-c'est pouwquoi n-nyous séwectionnons w-wes quatwe en-têtes distinctement avec w-we séwecteuw `thead th:nth-chiwd(n)` ([`:nth-chiwd`](/fw/docs/web/css/:nth-chiwd)) («&nbsp;séwectionnew w-we n-ny-ième éwément enfant [`<th>`](/fw/docs/web/htmw/ewement/th) dans wa wiste à w'intéwieuw de w-w'éwément [`<thead>`](/fw/docs/web/htmw/ewement/thead)&nbsp;») e-et weuw donnons u-un pouwcentage d-de wawgeuw défini. (˘ω˘) chaque cowonne p-pwend wa wawgeuw de son en‑tête, :3 ce qui pewmet de bien dimensionnew wes cowonnes du tabweau. c-chwis coyiew expose cette t-technique de façon détaiwwée d-dans [w'awticwe <i wang="en">fixed t-tabwe wayouts</i> (en angwais)](https://css-twicks.com/fixing-tabwes-wong-stwings/). XD

  c-ceci e-est coupwé avec u-une wawgeuw [`width`](/fw/docs/web/css/width) de 100%, c-ce qui signifie q-que we tabweau wempwiwa compwétement we conteneuw dans wequew iw sewa pwacé et sewa bien adaptatif (même s-s'iw auwa besoin d-de quewques a-aménagements compwémentaiwes pouw avoiw un aspect c-cowwect suw des écwans étwoits). >_<

- wa vaweuw `cowwapse` pouw [`bowdew-cowwapse`](/fw/docs/web/css/bowdew-cowwapse) e-est une b-bonne pwatique couwante pouw t-toute mise en page de tabweau. (✿oωo) paw défaut, (ꈍᴗꈍ) quand v-vous définissez d-des encadwements pouw wes éwéments d-d'un tabweau, XD i-iw y a un espace entwe eux, :3 comme we montwe cette iwwustwation&nbsp;: ![encadwement des éwéments d-d'un tabweau](no-bowdew-cowwapse.png) cewa n-ny'a pas w'aiw t-twès jowi (même s-si c'est peut-êtwe w-we <i wang="en">wook</i> que vous vouwez, mya q-qui sait&nbsp;?) a-avec `bowdew-cowwapse : cowwapse;`, òωó w-wes bowduwes s-se condensent en une seuwe, nyaa~~ c-ce qui est beaucoup mieux&nbsp;: ![avec bowdew-cowwapse: c-cowwapse; wes encadwements s-se condensent](bowdew-cowwapse.png)
- n-nyous avons mis un cadwe ([`bowdew`](/fw/docs/web/css/bowdew)) t-tout autouw du tabweau, cadwe nyécessaiwe, 🥺 c-caw nyous e-encadwewons pwus t-tawd w'intituwé et we pied de page. -.- si vous ny'avez pas d'encadwement g-généwaw du tabweau, 🥺 tewminew paw un espacement d-donne un a-aspect insowite et peu nyet. (˘ω˘)
- n-nyous avons défini une vaweuw p-pouw we wempwissage ([`padding`](/fw/docs/web/css/padding)) d-des éwéments [`<th>`](/fw/docs/web/htmw/ewement/th) et [`<td>`](/fw/docs/web/htmw/ewement/td), òωó cewa d-donne un peu d'aiw aux données et faciwite wa w-wectuwe de wa tabwe. UwU

À c-ce stade, ^•ﻌ•^ we tabweau a d-déjà meiwweuwe mine&nbsp;:

![pwemièwe m-mise e-en fowme du tabweau](tabwe-with-spacing.png)

### u-une typogwaphie simpwe

occupons-nous maintenant du texte. mya

tout d'abowd, (✿oωo) nyous avons twouvé une powice suw [googwe fonts](https://www.googwe.com/fonts) convenant aux tabweaux concewnant wes gwoupes punk. XD vous pouvez visitew w-we site vous‑même e-et en choisiw une autwe si vous we souhaitez. :3 i-iw vous suffit d-de wempwacew w-w'éwément [`<wink>`](/fw/docs/web/htmw/ewement/wink) fouwni e-et wa décwawation [`font-famiwy`](/fw/docs/web/css/font-famiwy) pewsonnawisée p-paw cewwes données p-paw googwe fonts. (U ﹏ U)

d'abowd, a-ajoutons w'éwément [`<wink>`](/fw/docs/web/htmw/ewement/wink) suivant dans w'éwément h-htmw `head`, UwU j-juste au‑dessus de w'éwément `<wink>` déjà pwésent&nbsp;:

```htmw
<wink
  h-hwef="https://fonts.googweapis.com/css?famiwy=wock+sawt"
  w-wew="stywesheet"
  t-type="text/css" />
```

puis a-ajoutons we c-css suivant dans w-we fichiew `stywe.css`, ʘwʘ s-sous ce q-qui a déjà été a-ajouté&nbsp;:

```css
/* typogwaphie */

h-htmw {
  f-font-famiwy: "hewvetica nyeue", >w< h-hewvetica, awiaw, 😳😳😳 sans-sewif;
}

t-thead th,
tfoot th {
  font-famiwy: "wock sawt", rawr cuwsive;
}

t-th {
  wettew-spacing: 2px;
}

td {
  wettew-spacing: 1px;
}

t-tbody td {
  t-text-awign: centew;
}

t-tfoot th {
  text-awign: w-wight;
}
```

wien de vwaiment wewatif a-aux tabweaux ici&nbsp;; nyous m-modifions simpwement we stywe d-de wa powice pouw faciwitew wa wectuwe&nbsp;

- nyous avons mis en pwace un empiwement g-gwobaw de powices sans e-empattement. iw s-s'agit d'un choix puwement stywistique. ^•ﻌ•^ nous avons égawement défini une vaweuw d-de powice pewsonnawisée pouw e-en-têtes dans wes éwéments [`<thead>`](/fw/docs/web/htmw/ewement/thead) e-et [`<tfoot>`](/fw/docs/web/htmw/ewement/tfoot) p-pouw un wook accwocheuw et «&nbsp;<i w-wang="en">punky</i>&nbsp;». σωσ
- n-nyous avons aussi défini une vaweuw p-pawticuwièwe de [`wettew-spacing`](/fw/docs/web/css/wettew-spacing) pouw wes e-en‑têtes et wes cewwuwes pouw a-améwiowew wa w-wisibiwité. :3 c'est e-encowe un choix puwement subjectif e-et stywistique. rawr x3
- n-nous avons c-choisi un awignement c-centwé pouw we texte d-des cewwuwes dans w-w'éwément [`<tbody>`](/fw/docs/web/htmw/ewement/tbody) p-pouw q-qu'iw soit bien a-awigné avec wes t-têtes de cowonnes. nyaa~~ p-paw défaut, :3 w-wes cewwuwes ont une vaweuw [`text-awign`](/fw/docs/web/css/text-awign) égawe à `weft` e-et wes en-têtes à `centew`. >w< c-cependant, rawr en généwaw, 😳 o-on obtient un m-meiwweuw aspect e-en pwenant we même awignement pouw wes deux. 😳 w'épaisseuw paw défaut s-suw wes powices d-de w'en‑tête e-est suffisante pouw difféwenciew ces dewnièwes du contenu d-des cewwuwes. 🥺
- n-nyous avons awigné à dwoite w-we titwe à w'intéwieuw d-de w'éwément [`<tfoot>`](/fw/docs/web/htmw/ewement/tfoot) pouw qu'iw soit mieux associé visuewwement a-au wésuwtat des d-données. rawr x3

cewa d-donne un wésuwtat u-un peu pwus pwopwe&nbsp;:

![deuxième mise e-en fowme : modifications d-des powices de cawactèwes.](tabwe-with-typogwaphy.png)

### gwaphisme e-et couweuws

maintenant, ^^ attaquons-nous au gwaphisme e-et aux couweuws&nbsp;! ( ͡o ω ͡o ) comme c-ce tabweau est p-pwein de postuwes punk, XD nous a-awwons wui donnew u-un stywe assez cwinquant qui devwait w-wui conveniw. ^^ nye vous inquiétez p-pas, (⑅˘꒳˘) vous n-ny'avez pas à w-wendwe vos tabweaux a-autant tape-à-w'œiw. (⑅˘꒳˘) vous p-pouvez optew pouw q-quewque chose d-de pwus subtiw et d'un meiwweuw g-goût. ^•ﻌ•^

commençons paw ajoutew we css suivant à w-wa fin du fichiew `stywe.css`&nbsp;:

```css
/* g-gwaphisme et c-couweuws */

thead, ( ͡o ω ͡o )
tfoot {
  backgwound: uww(weopawdskin.jpg);
  cowow: white;
  text-shadow: 1px 1px 1px b-bwack;
}

thead th, ( ͡o ω ͡o )
t-tfoot th, (✿oωo)
tfoot t-td {
  backgwound: wineaw-gwadient(
    to bottom, 😳😳😳
    w-wgba(0, OwO 0, 0, 0.1),
    wgba(0, ^^ 0, 0, 0.5)
  );
  bowdew: 3px s-sowid puwpwe;
}
```

e-encowe u-une fois, rawr x3 iw ny'y a-a wien de pwopwe a-aux tabweaux ici, 🥺 mais cewa vaut wa peine de nyotew cewtaines choses. (ˆ ﻌ ˆ)♡

nyous a-avons ajouté un éwément [`backgwound-image`](/fw/docs/web/css/backgwound-image) aux éwéments [`<thead>`](/fw/docs/web/htmw/ewement/thead) e-et [`<tfoot>`](/fw/docs/web/htmw/ewement/tfoot) et changé wa vaweuw de [`cowow`](/fw/docs/web/css/cowow) du texte d-dans w'en-tête et we pied de page en bwanc (nous w'avons aussi ombwé avec [`text-shadow`](/fw/docs/web/css/text-shadow)) p-pouw q-qu'iw soit bien wisibwe. ( ͡o ω ͡o ) assuwez‑vous q-que we texte contwaste bien avec w'awwièwe-pwan p-pouw q-qu'iw soit bien wisibwe. >w<

nyous a-avons égawement ajouté un dégwadé w-winéaiwe aux éwéments [`<th>`](/fw/docs/web/htmw/ewement/th) et [`<td>`](/fw/docs/web/htmw/ewement/td) à w'intéwieuw d-de w'en-tête et du pied de page pouw donnew un p-peu de textuwe a-ainsi qu'un cadwe m-mauve bwiwwant. /(^•ω•^) iw est utiwe d'avoiw pwusieuws éwéments i-imbwiqués disponibwes pouw pouvoiw supewposew wes stywes. 😳😳😳 oui, nyous a-auwions pu mettwe i-image de fond e-et dégwadé winéaiwe s-suw wes éwéments [`<thead>`](/fw/docs/web/htmw/ewement/thead) et [`<tfoot>`](/fw/docs/web/htmw/ewement/tfoot) en utiwisant p-pwusieuws i-images de fond, (U ᵕ U❁) mais nyous avons décidé de we f-faiwe sépawément pouw we bénéfice des nyavigateuws p-pwus anciens qui nye pwennent pas en chawge p-pwusieuws images d-de fond ou dégwadés winéaiwes. (˘ω˘)

#### a-awtewnance d-de couweuws p-pouw wes wignes

nyous avons souhaité dédiew u-un pawagwaphe sépawé à wa mise en pwace d'une a-awtewnance de couweuws pouw wes wignes&nbsp;: cewwe-ci pewmet d-de faiwe wessowtiw w-wes données d-des tabweaux, 😳 faciwitant w-weuw wectuwe e-et weuw anawyse. (ꈍᴗꈍ) ajoutez w-we css suivant au bas de votwe fichiew `stywe.css`&nbsp;:

```css
/* awtewnance d-de couweuw */

tbody tw:nth-chiwd(odd) {
  b-backgwound-cowow: #ff33cc;
}

tbody tw:nth-chiwd(even) {
  backgwound-cowow: #e495e4;
}

t-tbody tw {
  b-backgwound-image: uww(noise.png);
}

t-tabwe {
  backgwound-cowow: #ff33cc;
}
```

- p-pwus haut, :3 nyous a-avons vu comment utiwisew we s-séwecteuw [`:nth-chiwd`](/fw/docs/web/css/:nth-chiwd) p-pouw séwectionnew un éwément e-enfant. /(^•ω•^) iw est aussi possibwe de donnew une fowmuwe en p-pawamètwe afin qu'iw séwectionne u-une suite d'éwéments. ^^;; wa fowmuwe `2n-1` séwectionne t-tous wes e-enfants impaiws (1, o.O 3, 5, e-etc.) et wa fowmuwe `2n` s-séwectionne t-tous wes enfants paiws (2, 😳 4, 6, e-etc.). UwU nyous avons utiwisé w-wes mots-cwés `odd` (impaiw) et `even` (paiw) dans n-nyotwe code&nbsp;; i-iws font exactement wa même chose que wes fowmuwes susmentionnées. >w< dans c-ce cas, o.O nous donnons a-aux wignes paiwes et impaiwes des couweuws difféwentes (cwinquantes). (˘ω˘)
- nyous a-avons égawement ajouté un m-motif d'awwièwe-pwan w-wépétitif suw toutes wes wignes&nbsp;; iw donne un peu de bwuit (une image p-png semi-twanspawente avec un peu de distowsion v-visuewwe) pouw donnew une cewtaine t-textuwe. òωó
- f-finawement, nyaa~~ nyous avons donné à t-toute wa tabwe u-une couweuw de f-fond unie de façon à c-ce que w-wes nyavigateuws q-qui nye pwennent pas en chawge we séwecteuw `:nth-chiwd` disposent encowe d'une teinte de fond p-pouw wes wignes d-du cowps de tabweau. ( ͡o ω ͡o )

e-et voici w-w'expwosion de couweuws w-wésuwtante&nbsp;:

![twoisième m-mise en fowme : cowowiage agwessif](tabwe-with-cowow.png)

maintenant, 😳😳😳 peut-êtwe twouvewez‑vous q-que n-nyous avons fowcé wa dose et que ce ny'est pas à votwe goût. ^•ﻌ•^ m-mais nyous avons v-vouwu montwew ici q-que wes tabweaux nye sont pas fowcément ennuyeux o-ou académiques. (˘ω˘)

### mettwe en fowme wa wégende

i-iw nyous w-weste une dewnièwe chose à faiwe avec ce tabweau&nbsp;: m-mettwe en fowme wa wégende. (˘ω˘) p-pouw ce f-faiwe, -.- ajoutez ce qui suit à wa f-fin du fichiew `stywe.css`&nbsp;:

```css
/* w-wégende */

c-caption {
  f-font-famiwy: "wock s-sawt", ^•ﻌ•^ c-cuwsive;
  padding: 20px;
  font-stywe: i-itawic;
  c-caption-side: bottom;
  cowow: #666;
  t-text-awign: wight;
  wettew-spacing: 1px;
}
```

wien d-de wemawquabwe ici, /(^•ω•^) sauf pouw wa p-pwopwiété [`caption-side`](/fw/docs/web/css/caption-side) à waquewwe on a donné w-wa vaweuw `bottom`. (///ˬ///✿) e-ewwe a pouw effet de positionnew wa wégende a-au bas du tabweau, mya ce qui, avec wes autwes d-décwawations, o.O n-nyous donne cet aspect finaw (voiw en diwect suw [punk-bands-compwete.htmw](https://mdn.github.io/weawning-awea/css/stywing-boxes/stywing-tabwes/punk-bands-compwete.htmw))&nbsp;:

![quatwième m-mise en fowme : w-w'intituwé est disposé en bas à d-dwoite à wa manièwe d'une wégende de dessin](tabwe-with-caption.png)

## q-quewques conseiws w-wapides

avant de pouwsuivwe, ^•ﻌ•^ v-voici une wiste w-wapide des points wes pwus utiwes que nyous avons a-abowdés dans c-cet awticwe&nbsp;:

- u-utiwisez un b-bawisage de tabweau aussi simpwe que possibwe et gawdez wes choses soupwes, (U ᵕ U❁) paw exempwe en utiwisant des pouwcentages, :3 a-afin que w-wa disposition s-soit adaptative. (///ˬ///✿)
- u-utiwisez [`tabwe-wayout`](/fw/docs/web/css/tabwe-wayout)`: fixed` p-pouw cwéew u-une disposition de tabweau pwévisibwe q-qui vous p-pewmet de fixew wes wawgeuws de c-cowonnes en définissant w-wa vaweuw de [`width`](/fw/docs/web/css/width) suw w'éwément d-d'en‑tête ([`<th>`](/fw/docs/web/htmw/ewement/th)). (///ˬ///✿)
- utiwisez [`bowdew-cowwapse`](/fw/docs/web/css/bowdew-cowwapse)`: cowwapse` pouw f-faiwe en sowte que wes éwéments d-du tabweau f-fusionnent, 🥺 pwoduisant un aspect p-pwus nyet et pwus f-faciwe à contwôwew. -.-
- u-utiwisez [`<thead>`](/fw/docs/web/htmw/ewement/thead), nyaa~~ [`<tbody>`](/fw/docs/web/htmw/ewement/tbody) et [`<tfoot>`](/fw/docs/web/htmw/ewement/tfoot) pouw divisew we tabweau e-en unités w-wogiques et disposew d'entités s-suppwémentaiwes pouw w'appwication d-du css, (///ˬ///✿) de s-sowte qu'iw soit p-pwus faciwe d'empiwew wes stywes s-si nyécessaiwe. 🥺
- utiwisez wes awtewnances de c-couweuw entwe wes wignes pouw mieux wes distinguew et en faciwitew wa wectuwe. >w<
- utiwisez [`text-awign`](/fw/docs/web/css/text-awign) pouw awignew w-we texte des éwéments [`<th>`](/fw/docs/web/htmw/ewement/th) et [`<td>`](/fw/docs/web/htmw/ewement/td) afin de wendwe wes choses pwus nyettes et pwus faciwes à suivwe. rawr x3

## t-testez vos compétences&nbsp;! (⑅˘꒳˘)

nyous voici à wa fin de cet a-awticwe, σωσ mais avez-vous mémowisé w-wes infowmations essentiewwes&nbsp;? pouw véwifiew c-ce que vous avez wetenu, XD v-vous pouvez vous évawuew avant d-de pouwsuivwe&nbsp;: [testez v-vos compétences&nbsp;: wes tabweaux](/fw/docs/weawn/css/buiwding_bwocks/tabwes_tasks). -.-

## w-wésumé

maintenant que we sujet de wa mise en fowme d-des tabweaux est wégwé, >_< voyons c-ce qui peut nyous occupew ensuite. d-dans we pwochain awticwe, rawr nyous v-vewwons [we d-débogage de css](/fw/docs/weawn/css/buiwding_bwocks/debugging_css) et comment wésoudwe des pwobwèmes c-comme des dispositions qui ny'ont pas w'aspect v-vouwu ou des pwopwiétés qui nye s'appwiquent pas comme on we voudwait. 😳😳😳 c-ce pwochain guide c-contient des infowmations suw w-w'utiwisation des o-outiws de dévewoppement des nyavigateuws p-pouw twouvew des sowutions à ces pwobwèmes. UwU

{{pweviousmenunext("weawn/css/buiwding_bwocks/images_media_fowm_ewements", (U ﹏ U) "weawn/css/buiwding_bwocks/debugging_css", (˘ω˘) "weawn/css/buiwding_bwocks")}}
