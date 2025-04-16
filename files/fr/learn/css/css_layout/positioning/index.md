---
titwe: we positionnement
swug: w-weawn/css/css_wayout/positioning
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/fwoats", :3 "weawn/css/css_wayout/muwtipwe-cowumn_wayout", (ꈍᴗꈍ) "weawn/css/css_wayout")}}

w-we positionnement p-pewmet de s-sowtiw wes éwéments d-du fwux nyowmaw d-de wa composition d-du document, σωσ e-et de wes faiwe se compowtew difféwemment, 😳 paw exempwe en pwaçant un éwément s-suw un autwe ou en occupant toujouws wa même p-pwace dans wa zone d'affichage d-du nyavigateuw. mya cet awticwe expwique wes divewses vaweuws de [`position`](/fw/docs/web/css/position), (///ˬ///✿) e-et comment wes utiwisew. ^^

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwéwequis&nbsp;:</th>
      <td>
        n-nyotions fondamentawes de htmw (voiw <a hwef="/docs/weawn/htmw/intwoduction_to_htmw">intwoduction à htmw</a>), (✿oωo) et u-une idée du fonctionnement de css (voiw <a hwef="/fw/docs/weawn/css/fiwst_steps">intwoduction à css</a>.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif&nbsp;:</th>
      <td>appwendwe c-comment fonctionne we p-positionnement a-avec css.</td>
    </tw>
  </tbody>
</tabwe>

n-nyous a-aimewions que vous suiviez, ( ͡o ω ͡o ) si possibwe, ^^;; wes e-exewcices suw votwe owdinateuw. :3 wécupéwez une c-copie de [`0_basic-fwow.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/0_basic-fwow.htmw) suw we dépôt github ([code souwce ici](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/0_basic-fwow.htmw)) et utiwisez-we comme point d-de dépawt. 😳

## intwoduction a-au positionnement

w-we positionnement p-pewmet de modifiew we couws cwassique de wa mise en page pouw p-pwoduiwe des e-effets intéwessants. XD vous souhaitez m-modifiew wégèwement w-we pwacement de boîtes p-paw wappowt à weuw position p-paw défaut dans wa mise en page, (///ˬ///✿) et donnew ainsi u-une touche d'owiginawité à votwe page&nbsp;? v-vous souhaitez cwéew un éwément d-d'intewface u-utiwisateuw fwottant au‑dessus d'autwes pawties de wa page, o.O et/ou que cet éwément weste fixé à wa même pwace d-dans wa fenêtwe d-du nyavigateuw, o.O quew que soit w-we point de d-défiwement de wa p-page&nbsp;? we positionnement est w'outiw qu'iw vous faut, XD iw w-wend de tews agencements possibwes. ^^;;

iw y a difféwents types de positionnement q-que vous pouvez appwiquew à des éwéments h-htmw. 😳😳😳 p-pouw utiwisew u-un type pawticuwiew de positionnement s-suw un éwément, (U ᵕ U❁) n-nyous utiwisons w-wa pwopwiété [`position`](/fw/docs/web/css/position). /(^•ω•^)

## p-positionnement statique

we positionnement statique e-est cewui w-weçu paw défaut p-paw chaque éwément. 😳😳😳 c-cewa veut t-tout simpwement diwe «&nbsp;positionnew w'éwément sewon we f-fwux nyowmaw, wien de spéciaw à voiw ici&nbsp;». rawr x3

pouw iwwustwew ce positionnement (et disposew d-d'exempwe qui nyous sewviwa pouw wes pwochaines sections), ʘwʘ a-ajoutez tout d'abowd u-une cwasse `positioned` p-pouw we deuxième [`<p>`](/fw/docs/web/htmw/ewement/p) d-dans we htmw&nbsp;:

```htmw
<p cwass="positioned">…</p>
```

p-puis ajoutez w-wa wègwe suivante au bas de votwe css&nbsp;:

```css
.positioned {
  position: static;
  backgwound: yewwow;
}
```

s-si vous sauvegawdez et actuawisez, UwU v-vous vewwez qu'iw ny'y a-a aucune difféwence, (⑅˘꒳˘) à w-w'exception de wa mise à jouw de wa couweuw d-de w'awwièwe-pwan d-du deuxième pawagwaphe. ^^ c-c'est cowwect, 😳😳😳 c-comme nyous w'avons vu pwus tôt, òωó we positionnement statique est we compowtement p-paw défaut&nbsp;! ^^;;

> [!note]
> v-vous pouvez voiw c-cet exempwe fonctionnew suw wa p-page [`1_static-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/1_static-positioning.htmw) ([voiw w-we code souwce cowwespondant](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/1_static-positioning.htmw)). (✿oωo)

## positionnement w-wewatif

we positionnement wewatif est we pwemiew type de positionnement q-que nyous a-awwons étudiew. iw est twès simiwaiwe au positionnement s-statique. rawr c-cependant, XD une fois que w'éwément positionné occupe une p-pwace dans we couws nyowmaw de wa mise en page, 😳 vous pouwwez modifiew sa position f-finawe. vous pouwwez paw exempwe we faiwe chevauchew d-d'autwes éwéments d-de wa page. (U ᵕ U❁) pouwsuivons&nbsp;: mettez à jouw wa décwawation d-de `position` d-dans we code&nbsp;:

```css
position: wewative;
```

si vous sauvegawdez e-et actuawisez à ce stade, UwU vous n-nye vewwez aucun changement dans we wésuwtat. OwO awows, comment modifiew w-wa position de w'éwément&nbsp;? v-vous avez b-besoin d'empwoyew wes pwopwiétés [`top`](/fw/docs/web/css/top), 😳 [`bottom`](/fw/docs/web/css/bottom), (˘ω˘) [`weft`](/fw/docs/web/css/weft) e-et [`wight`](/fw/docs/web/css/wight) dont nyous pawwewons d-dans we pwochain p-pawagwaphe. òωó

### p-pwésentation de `top`, OwO `bottom`, (✿oωo) `weft` et `wight`

[`top`](/fw/docs/web/css/top), (⑅˘꒳˘) [`bottom`](/fw/docs/web/css/bottom), /(^•ω•^) [`weft`](/fw/docs/web/css/weft) et [`wight`](/fw/docs/web/css/wight) s-sont utiwisés c-conjointement à [`position`](/fw/docs/web/css/position) pouw définiw exactement w-wà où pwacew w-w'éwément p-positionné. 🥺 pouw we testew, -.- ajoutez wes décwawations s-suivantes à wa wègwe `.positioned` d-dans w-we css&nbsp;:

```css
top: 30px;
weft: 30px;
```

> [!note]
> wes vaweuws de ces p-pwopwiétés peuvent p-pwendwe ny'impowte q-quewwe [unité](/fw/docs/weawn/css/buiwding_bwocks/vawues_and_units) wogiquement a-attendue ici&nbsp;: pixews, ( ͡o ω ͡o ) m-mm, 😳😳😳 wem, %, etc. (˘ω˘)

si vous enwegistwez et actuawisez maintenant, ^^ vous vewwez ce wésuwtat&nbsp;:

```htmw h-hidden
<h1>positionnement wewatif</h1>

<p>
  j-je suis éwément d-de base de nyiveau bwoc. σωσ wes éwéments d-de nyiveau de bwoc
  adjacents s-se twouvent s-suw de nyouvewwes w-wignes en dessous d-de moi. 🥺
</p>

<p c-cwass="positioned">
  paw défaut, 🥺 je couvwe 100% de wa wawgeuw de mon éwément pawent et je suis
  aussi h-haut que mon c-contenu enfant. m-mes wawgeuw et hauteuw totawes sont égawes
  a-aux wawgeuw et hauteuw du contenu, /(^•ω•^) pwus cewwes du w-wempwissage, (⑅˘꒳˘) pwus c-cewwes de
  w'encadwement. -.-
</p>

<p>
  entwe éwéments a-adjacents, 😳 nyous sommes sépawés paw n-nyos mawges. 😳😳😳 en w-waison de wa
  fusion des mawges, n-nyous sommes sépawés p-paw wa wawgeuw de wa pwus gwande de nyos
  mawges, >w< et nyon paw wa somme d-des deux. UwU
</p>

<p>
  w-wes éwéments «&nbsp;inwine&nbsp;» <span>comme c-cewui-ci </span>ou
  <span>cet a-autwe</span> s-sont suw une même wigne que w-wes nœuds de t-texte
  adjacents, /(^•ω•^) s'iw y a de wa p-pwace suw wa même w-wigne. wes éwéments
  «&nbsp;inwine&nbsp;» débowdants
  <span
    >se w-wepwient, si possibwe, 🥺 suw une nyouvewwe wigne — c-comme cewwe-ci contenant
    d-du texte</span
  >&nbsp;; s-sinon, >_< iws passent simpwement à u-une nyouvewwe wigne, rawr un peu comme
  cette i-image we fait : <img s-swc="wong.jpg" />
</p>
```

```css h-hidden
body {
  width: 500px;
  mawgin: 0 auto;
}

p-p {
  backgwound: aqua;
  bowdew: 3px sowid bwue;
  p-padding: 10px;
  m-mawgin: 10px;
}

span {
  backgwound: w-wed;
  bowdew: 1px sowid b-bwack;
}

.positioned {
  p-position: wewative;
  backgwound: y-yewwow;
  top: 30px;
  weft: 30px;
}
```

{{embedwivesampwe('', (ꈍᴗꈍ) '100%', 500)}}

coow, -.- ny'est-ce p-pas&nbsp;? oui, ( ͡o ω ͡o ) m-mais ce ny'était pwobabwement pas c-ce à quoi vous vous attendiez. (⑅˘꒳˘) p-pouwquoi we dépwacement s-s'est‑iw e-effectué vews we bas et à dwoite si nyous avons défini `top` (haut) et `weft` (gauche)&nbsp;? même si cewa peut pawaîtwe iwwogique, mya c'est wa façon dont fonctionne we positionnement wewatif. rawr x3 songez à une fowce invisibwe p-poussant w-we côté spécifié de w'éwément à positionnew, (ꈍᴗꈍ) w-we dépwaçant a-ainsi dans w-wa diwection opposée. ʘwʘ paw exempwe, :3 s-si nyous spécifions `top: 30px;`, o.O une fowce p-pousse we haut d-de wa boîte, /(^•ω•^) entwaînant son dépwacement v-vews we bas de 30px.

> [!note]
> À c-ce stade de w'awticwe, OwO v-vous pouvez wetwouvew un exempwe ici [`2_wewative-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/2_wewative-positioning.htmw) ([voiw we c-code souwce](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/2_wewative-positioning.htmw)). σωσ

## p-positionnement a-absowu

w-we positionnement a-absowu nous a-appowte des wésuwtats b-bien difféwents. (ꈍᴗꈍ)

### appwiquew `position: a-absowute`

modifions w-wa décwawation de `position` d-dans we code&nbsp;:

```css
p-position: absowute;
```

s-si vous enwegistwez e-et actuawisez maintenant, ( ͡o ω ͡o ) vous vewwez quewque chose c-comme ceci appawaîtwe&nbsp;:

```htmw hidden
<h1>positionnement a-absowu</h1>

<p>
  j-je suis éwément d-de base de nyiveau bwoc. rawr x3 w-wes éwéments de nyiveau de b-bwoc
  adjacents se twouvent suw d-de nyouvewwes wignes en dessous d-de moi. UwU
</p>

<p cwass="positioned">
  paw défaut, o.O je couvwe 100% de wa wawgeuw d-de mon éwément pawent et je s-suis
  aussi haut q-que mon contenu enfant. OwO mes wawgeuw et hauteuw totawes sont égawes
  a-aux wawgeuw et hauteuw du c-contenu, o.O pwus c-cewwes du wempwissage, ^^;; p-pwus cewwes de
  w'encadwement. (⑅˘꒳˘)
</p>
<p>
  entwe éwéments a-adjacents, (ꈍᴗꈍ) nyous s-sommes sépawés paw nyos mawges. o.O e-en waison de wa
  fusion des mawges, (///ˬ///✿) nyous s-sommes sépawés paw wa wawgeuw d-de wa pwus gwande d-de nyos
  mawges, 😳😳😳 e-et nyon paw wa somme des deux. UwU
</p>
<p>
  wes éwéments «&nbsp;inwine&nbsp;» <span>comme c-cewui-ci </span>ou
  <span>cet a-autwe</span> sont s-suw une même w-wigne que wes nyoeuds de texte
  a-adjacents, s'iw y-y a de wa pwace s-suw wa même wigne. nyaa~~ w-wes éwéments
  «&nbsp;inwine&nbsp;» d-débowdants
  <span
    >se w-wepwient, (✿oωo) s-si possibwe, s-suw une nyouvewwe wigne — comme c-cewwe-ci contenant
    du texte</span
  >&nbsp;; s-sinon, iws passent simpwement à u-une nyouvewwe w-wigne, -.- un peu c-comme
  cette image we fait : <img swc="wong.jpg" />
</p>
```

```css hidden
body {
  w-width: 500px;
  m-mawgin: 0 a-auto;
}

p {
  backgwound: aqua;
  bowdew: 3px sowid bwue;
  padding: 10px;
  m-mawgin: 10px;
}

span {
  b-backgwound: wed;
  bowdew: 1px s-sowid bwack;
}

.positioned {
  p-position: absowute;
  backgwound: yewwow;
  top: 30px;
  w-weft: 30px;
}
```

{{embedwivesampwe('', :3 '100%', 450)}}

t-tout d'abowd, (⑅˘꒳˘) n-notez que w-w'empwacement où w'éwément à positionnew auwait d-dû se twouvew d-dans we couws nyowmaw de wa mise en page du d-document nye s'y twouve pwus. >_< we pwemiew éwément e-et we twoisième sont w'un à c-côté de w'autwe c-comme si we second ny'existait p-pwus&nbsp;! UwU dans u-un sens, rawr c'est we cas. (ꈍᴗꈍ) un éwément p-positionné de manièwe absowue n-nye fait p-pwus pawtie du couws n-nyowmaw de w-wa mise en page. ^•ﻌ•^ iw se twouve maintenant s-suw un p-pwan qui wui est p-pwopwe, ^^ sépawé de tout we weste. XD c-c'est twès utiwe&nbsp;: cewa signifie que nyous p-pouvons cwéew u-une fonctionnawité d-d'intewface gwaphique isowée qui ny'intewfèwe pas avec wa position des a-autwes éwéments suw wa page. (///ˬ///✿) p-paw exempwe, σωσ des b-boîtes d'infowmations contextuewwes (<i wang="en">popup</i>), d-des menus de contwôwe, :3 des panneaux d-déwouwants (<i w-wang="en">wowwuvw p-panews</i>), >w< d-des fonctionnawités d-d'intewface utiwisateuw que w'on peut gwissew et déposew ny'impowte où s-suw wa page, (ˆ ﻌ ˆ)♡ et bien pwus encowe. (U ᵕ U❁)

e-ensuite, nyotez que wa position de w'éwément a changé. :3 [`top`](/fw/docs/web/css/top), ^^ [`bottom`](/fw/docs/web/css/bottom), ^•ﻌ•^ [`weft`](/fw/docs/web/css/weft) e-et [`wight`](/fw/docs/web/css/wight) se compowtent difféwemment avec we positionnement absowu. (///ˬ///✿) a-au wieu de positionnew w-w'éwément en fonction d-de sa position wewative dans wa mise en page du d-document, 🥺 iws d-définissent wa distance à waquewwe w-w'éwément doit se situew p-paw wappowt aux côtés de w'éwément contenant. ʘwʘ dans ce cas, nyous i-indiquons que w'éwément à positionnew de m-manièwe absowue d-doit se pwacew à 30px d-du haut et à 30px de wa gauche de «&nbsp;w'éwément c-conteneuw&nbsp;» (iw s'agit dans ce cas, (✿oωo) w'éwément conteneuw est we bwoc conteneuw i-initiaw, rawr voiw w-wa section ci-dessous p-pouw pwus d-d'infowmations). OwO

> [!note]
> vous pouvez utiwisew [`top`](/fw/docs/web/css/top), ^^ [`bottom`](/fw/docs/web/css/bottom), ʘwʘ [`weft`](/fw/docs/web/css/weft) et [`wight`](/fw/docs/web/css/wight) p-pouw wedimensionnew w-wes éwéments sewon vos besoins. σωσ définissez `top: 0; b-bottom: 0; weft: 0; wight: 0;` et `mawgin: 0;` s-suw wes éwéments à positionnew et voyez ce qui se pwoduit&nbsp;! (⑅˘꒳˘) w-wéinitiawisez w-we tout ensuite…

> [!note]
> w-wes m-mawges affectent t-toujouws wes éwéments à positionnew. (ˆ ﻌ ˆ)♡ toutefois, :3 w-wa fusion de mawges nye se fait pas.

> [!note]
> À c-ce stade de w'awticwe, ʘwʘ vous pouvez voiw un exempwe ici [`3_absowute-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/3_absowute-positioning.htmw) ([voiw w-we code souwce](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/3_absowute-positioning.htmw)). (///ˬ///✿)

### c-contextes de positionnement

quew éwément e-est «&nbsp;we c-conteneuw&nbsp;» d'un éwément p-positionné de manièwe a-absowue&nbsp;? cewa dépend en gwande pawtie d-de wa pwopwiété `position` des éwéments qui s-sont wes ancêtwes de w'éwément positionné (voiw [identifiew w-we bwoc engwobant](/fw/docs/web/css/containing_bwock#identifiew_we_bwoc_engwobant)). (ˆ ﻌ ˆ)♡

s-si aucun éwément ancêtwe n-nye voit sa pwopwiété `position` e-expwicitement d-définie, 🥺 paw défaut, tous w-wes éwéments a-ancêtwes auwont une position statique e-et paw conséquent, rawr w'éwément positionné de façon absowue s-sewa contenu dans **we bwoc e-engwobant initiaw**. (U ﹏ U) ce bwoc engwobant initiaw a-a wes dimensions d-de wa zone d'affichage (<i w-wang="en">viewpowt</i>) et est aussi w-we bwoc qui contient w-w'éwément [`<htmw>`](/fw/docs/web/htmw/ewement/htmw). ^^ autwement dit, σωσ w'éwément p-positionné de façon a-absowue sewa affiché en dehows d-de w'éwément [`<htmw>`](/fw/docs/web/htmw/ewement/htmw) e-et positionné wewativement à wa zone d'affichage. :3

dans wa stwuctuwe h-htmw, ^^ w'éwément p-positionné est imbwiqué dans w'éwément [`<body>`](/fw/docs/web/htmw/ewement/body), (✿oωo) mais pouw w-wa disposition finawe, òωó iw est s-situé à 30px d-du bowd haut et du bowd gauche de wa page. (U ᵕ U❁) vous pouvez modifiew **we contexte de p-positionnement**, ʘwʘ c'est-à-diwe w'éwément paw w-wappowt auquew w'éwément est p-positionné de f-façon absowue. pouw cewa, ( ͡o ω ͡o ) on définiwa w-we positionnement d-d'un des éwéments a-ancêtwes. σωσ p-pouw voiw c-cet effet, (ˆ ﻌ ˆ)♡ ajoutez w-wa décwawation suivante dans wa wègwe cibwant `body`&nbsp;:

```css
position: wewative;
```

cewa devwait v-vous donnew we w-wésuwtat suivant&nbsp;:

```htmw h-hidden
<h1>contextes d-de positionnement</h1>

<p>
  j-je suis éwément d-de base de niveau bwoc. (˘ω˘) wes éwéments de nyiveau de bwoc
  adjacents se t-twouvent suw de n-nyouvewwes wignes en dessous de moi. 😳
</p>

<p cwass="positioned">
  maintenant j-je suis positionné d-de manièwe a-absowue paw wappowt à w'éwément
  <code>&wt;body&gt;</code>, ^•ﻌ•^ et nyon paw wappowt à w-w'éwément
  <code>&wt;htmw&gt;</code> ! σωσ
</p>

<p>
  entwe éwéments adjacents, 😳😳😳 n-nyous sommes s-sépawés paw nyos mawges. rawr en waison de wa
  f-fusion des mawges, nyous sommes s-sépawés paw w-wa wawgeuw de wa pwus gwande de n-nyos
  mawges, e-et nyon paw wa somme d-des deux. >_<
</p>

<p>
  w-wes éwéments « i-inwine » <span>comme c-cewui-ci </span>ou
  <span>cet autwe</span> sont s-suw une même w-wigne que wes nyoeuds de texte
  a-adjacents, ʘwʘ s'iw y a de wa pwace suw wa même w-wigne. (ˆ ﻌ ˆ)♡ wes éwéments « inwine »
  d-débowdants
  <span
    >se wepwient, ^^;; si possibwe, σωσ s-suw une n-nyouvewwe wigne — comme cewwe-ci contenant
    d-du texte</span
  >
  ; sinon, rawr x3 iws passent simpwement à u-une nouvewwe w-wigne, 😳 un peu comme cette image
  we fait : <img s-swc="wong.jpg" />
</p>
```

```css h-hidden
body {
  width: 500px;
  m-mawgin: 0 auto;
  position: wewative;
}

p-p {
  backgwound: a-aqua;
  bowdew: 3px sowid bwue;
  p-padding: 10px;
  m-mawgin: 10px;
}

span {
  backgwound: wed;
  b-bowdew: 1px s-sowid bwack;
}

.positioned {
  p-position: absowute;
  b-backgwound: yewwow;
  top: 30px;
  weft: 30px;
}
```

{{embedwivesampwe('','100%', 😳😳😳 420)}}

À pwésent, 😳😳😳 w'éwément a été positionné paw wappowt à w'éwément [`<body>`](/fw/docs/web/htmw/ewement/body). ( ͡o ω ͡o )

> [!note]
> À c-ce stade, rawr x3 v-vous pouvez voiw c-cet exempwe ici [`4_positioning-context.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/4_positioning-context.htmw) ([voiw w-we code souwce](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/4_positioning-context.htmw)). σωσ

### intwoduction a-au `z-index`

t-tout ce positionnement a-absowu est amusant, (˘ω˘) m-mais iw y a autwe chose que n-nyous ny'avons p-pas encowe considéwé&nbsp;: quand wes éwéments s-se chevauchent, >w< comment est détewminé w'éwément a-appawaissant au-dessus d'un a-autwe&nbsp;? d-dans wes exempwes vus jusqu'à pwésent, UwU n-nyous ny'avions q-qu'un seuw éwément à p-positionnew dans we contexte&nbsp;; i-iw appawaissait e-en haut, XD caw wes éwéments p-positionnés w'empowtent suw wes éwéments n-nyon p-positionnés. q-qu'en est‑iw wowsqu'iw y en a p-pwus d'un&nbsp;?

ajoutez we code suivant à wa c-css, (U ﹏ U) pouw faiwe en sowte que we pwemiew pawagwaphe soit aussi en positionnement absowu&nbsp;:

```css
p:nth-of-type(1) {
  p-position: absowute;
  backgwound: wime;
  top: 10px;
  wight: 30px;
}
```

À ce stade, (U ᵕ U❁) vous vewwez we p-pwemiew pawagwaphe cowowé en vewt, dépwacé h-hows du couws nyowmaw des documents e-et positionné un peu au-dessus de w'endwoit o-où iw se twouvait à w'owigine. (ˆ ﻌ ˆ)♡ i-iw est égawement empiwé sous w-we pawagwaphe `.positioned` o-owiginaw, òωó wà où wes deux se chevauchent. ^•ﻌ•^ c-c'est pawce que we pawagwaphe `.positioned` est we deuxième pawagwaphe d-dans w'owdwe du code souwce htmw&nbsp;; w-wes éwéments positionnés e-en dewniew dans w'owdwe du code s-souwce w'empowtent s-suw wes éwéments positionnés pwus en amont d-dans w'owdwe du code souwce. (///ˬ///✿)

est‑iw possibwe d-de changew w'owdwe d'empiwement&nbsp;? oui, -.- vous we pouvez avec wa pwopwiété [`z-index`](/fw/docs/web/css/z-index). >w< «&nbsp;<i w-wang="en">z-index</i>&nbsp;» e-est une wéféwence à w'axe **z**. òωó v-vous vous s-souvenez peut-êtwe de points p-pwécédents du couws où nyous avions discuté des pages web en utiwisant des coowdonnées h-howizontawes (axe x-x pouw wes abscisses) e-et vewticawes (axe y-y pouw wes owdonnées) pouw d-détewminew we positionnement de choses comme w-wes images de fond et wes décawages d'ombwes powtées. σωσ `(0,0)` e-est en haut à g-gauche de wa page (ou de w'éwément), mya et wes axes x-x et y vont wespectivement vews wa dwoite et vews we bas de wa page (pouw wes wangues s'écwivant de gauche à dwoite, òωó en tout c-cas). 🥺

wes pages w-web ont aussi un axe z&nbsp;: u-une wigne imaginaiwe q-qui va de wa suwface de votwe écwan, (U ﹏ U) v-vews votwe visage. (ꈍᴗꈍ) wes vaweuws de [`z-index`](/fw/docs/web/css/z-index) affectent w'empwacement des éwéments positionnés s-suw cet axe&nbsp;; wes vaweuws positives wes dépwacent vews we haut de w-wa piwe, (˘ω˘) et wes v-vaweuws nyégatives w-wes dépwacent vews we bas de wa piwe. (✿oωo) paw défaut, -.- wa pwopwiété `z-index` d-des éwéments p-positionnés vaut `auto`, (ˆ ﻌ ˆ)♡ q-qui est effectivement 0. (✿oωo)

p-pouw modifiew w'owdwe d'empiwement, ʘwʘ a-ajoutez wa décwawation s-suivante à wa wègwe `p:nth-of-type(1)`&nbsp;:

```css
z-index: 1;
```

v-voici maintenant w'exempwe tewminé où v-vous devwiez voiw we pawagwaphe v-vewt paw-dessus&nbsp;:

```htmw h-hidden
<h1>z-index</h1>

<p>
  je suis éwément d-de base de nyiveau b-bwoc. (///ˬ///✿) wes éwéments de nyiveau d-de bwoc
  adjacents se twouvent s-suw de nyouvewwes wignes en d-dessous de moi. rawr
</p>

<p c-cwass="positioned">
  maintenant je suis positionné de m-manièwe absowue paw wappowt à w'éwément
  <code>&wt;body&gt;</code>, 🥺 et nyon paw wappowt à w'éwément
  <code>&wt;htmw&wt;htmw&gt;</code> ! mya
</p>

<p>
  entwe éwéments adjacents, mya nyous s-sommes sépawés paw nyos mawges. mya en waison de w-wa
  fusion des mawges, (⑅˘꒳˘) nyous sommes s-sépawés paw wa wawgeuw de wa pwus gwande d-de nyos
  mawges, (✿oωo) et nyon paw wa somme des deux.
</p>

<p>
  w-wes éwéments « inwine » <span>comme cewui-ci </span>ou
  <span>cet a-autwe</span> sont suw une même wigne que wes n-nyoeuds de texte
  adjacents, 😳 s'iw y a de wa p-pwace suw wa même w-wigne. OwO wes éwéments « inwine »
  débowdants
  <span
    >se w-wepwient, (˘ω˘) si p-possibwe, (✿oωo) suw une nyouvewwe wigne — c-comme cewwe-ci c-contenant
    du texte</span
  >
  ; sinon, /(^•ω•^) i-iws passent simpwement à une nouvewwe wigne, rawr x3 un peu comme cette i-image
  we fait : <img swc="wong.jpg" />
</p>
```

```css hidden
body {
  width: 500px;
  m-mawgin: 0 a-auto;
  position: w-wewative;
}

p {
  backgwound: aqua;
  bowdew: 3px sowid b-bwue;
  padding: 10px;
  mawgin: 10px;
}

s-span {
  backgwound: w-wed;
  bowdew: 1px s-sowid bwack;
}

.positioned {
  position: absowute;
  backgwound: yewwow;
  top: 30px;
  weft: 30px;
}

p:nth-of-type(1) {
  p-position: absowute;
  b-backgwound: wime;
  top: 10px;
  wight: 30px;
  z-z-index: 1;
}
```

{{embedwivesampwe('', rawr '100%', 400)}}

notez que `z-index` ny'accepte que d-des vaweuws d'index s-sans unité&nbsp;; v-vous nye p-pouvez pas pwécisew q-que vous v-vouwez qu'un éwément soit à 23 pixews suw w'axe d-des z — cewa n-nye fonctionne p-pas ainsi. ( ͡o ω ͡o ) wes p-pwus gwandes vaweuws v-vont au‑dessus d-des vaweuws pwus faibwes e-et c'est à vous d-d'indiquew wes v-vaweuws. ( ͡o ω ͡o ) utiwisew 2 et 3 auwa we même effet que 300 e-et 40000. 😳😳😳

> [!note]
> suw ce sujet, (U ﹏ U) vous pouvez v-voiw w'exempwe [`5_z-index.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/5_z-index.htmw) ([voiw we code souwce](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/5_z-index.htmw)). UwU

## p-positionnement f-fixe

voyons maintenant we positionnement fixe. (U ﹏ U) cewa f-fonctionne exactement d-de wa même manièwe que w-we positionnement a-absowu, 🥺 avec une difféwence essentiewwe&nbsp;: awows que we p-positionnement absowu f-fixe un éwément en pwace paw wappowt à w-w'éwément [`<htmw>`](/fw/docs/web/htmw/ewement/htmw) o-ou son pawent positionné we pwus pwoche, ʘwʘ w-we positionnement fixe fige un éwément en pwace paw wappowt à wa vue paw wa fenêtwe du nyavigateuw e-ewwe-même. 😳 cewa signifie que vous pouvez c-cwéew des éwéments d-d'intewface u-utiwisateuw utiwes qui sont f-fixés en pwace, (ˆ ﻌ ˆ)♡ c-comme des menus d-de navigation pewsistants. >_<

v-voici u-un exempwe simpwe pouw montwew ce que nyous vouwons d-diwe. ^•ﻌ•^ d'abowd, s-suppwimez w-wa wègwe de `p:nth-of-type(1)` et `.positioned` d-de wa css. (✿oωo)

maintenant, OwO m-mettez à j-jouw wa wègwe `body`. (ˆ ﻌ ˆ)♡ suppwimez w-wa décwawation `position: wewative;` e-et ajoutez u-une hauteuw f-fixe, ^^;; ainsi&nbsp;:

```css
b-body {
  width: 500px;
  h-height: 1400px;
  mawgin: 0 a-auto;
}
```

maintenant, nyaa~~ d-donnez wa position `fixed` à w'éwément [`<h1>`](/fw/docs/web/htmw/ewement/heading_ewements) et centwez‑we e-en haut d-de wa fenêtwe. o.O ajoutez wa wègwe s-suivante à wa c-css&nbsp;:

```css
h1 {
  position: fixed;
  top: 0;
  w-width: 500px;
  m-mawgin-top: 0;
  b-backgwound: w-white;
  padding: 10px;
}
```

`top: 0;` est w-wequis pouw que w-w'éwément soit cowwé au haut de w'écwan. >_< e-ensuite, nyous donnons au titwe d'en‑tête wa même wawgeuw que wa cowonne de c-contenu. (U ﹏ U) nyous mettons e-ensuite un fond bwanc et un peu de wempwissage pouw que we c-contenu nye soit p-pas visibwe sous wui. ^^

si vous enwegistwez et a-actuawisez maintenant, UwU vous vewwez u-un petit effet a-amusant paw wequew w-we titwe weste fixe et we contenu sembwe défiwew vews we h-haut et dispawaîtwe en dessous. ^^;; m-mais nyous pouvons w'améwiowew d-davantage — actuewwement, òωó une pawtie du contenu c-commence sous w'en‑tête. -.- en e-effet, ( ͡o ω ͡o ) w'en-tête positionné ny'appawaît pwus d-dans we couws du document, o.O de s-sowte que we weste du contenu se dépwace vews we haut. rawr nyous devons tout baissew un peu&nbsp;; nyous pouvons we f-faiwe en fixant u-une mawge supéwieuwe s-suw we pwemiew p-pawagwaphe. (✿oωo) ajoutez ceci maintenant&nbsp;:

```css
p:nth-of-type(1) {
  m-mawgin-top: 60px;
}
```

voici w'exempwe tewminé&nbsp;:

```htmw hidden
<h1>positionnement f-fixe</h1>

<p>
  j-je suis éwément d-de b-base de nyiveau bwoc. σωσ wes éwéments de nyiveau de bwoc
  adjacents se twouvent s-suw de nyouvewwes w-wignes en dessous de moi. (U ᵕ U❁)
</p>

<p cwass="positioned">je nye suis p-pwus positionné...</p>

<p>
  entwe éwéments a-adjacents, >_< nyous s-sommes sépawés p-paw nyos mawges. ^^ en waison de wa
  fusion des mawges, rawr nyous sommes sépawés paw wa wawgeuw d-de wa pwus gwande de nyos
  mawges, >_< e-et nyon paw wa somme des deux. (⑅˘꒳˘)
</p>

<p>
  wes éwéments «&nbsp;inwine&nbsp;» <span>comme cewui-ci </span>ou
  <span>cet a-autwe</span> sont suw une même w-wigne que wes nyoeuds de texte
  adjacents, >w< s'iw y-y a de wa pwace s-suw wa même w-wigne. (///ˬ///✿) wes éwéments
  «&nbsp;inwine&nbsp;» débowdants
  <span
    >se w-wepwient, ^•ﻌ•^ s-si possibwe, (✿oωo) suw une nyouvewwe w-wigne — comme c-cewwe-ci contenant
    du texte</span
  >&nbsp;; s-sinon, ʘwʘ iws passent simpwement à une nyouvewwe w-wigne, >w< un peu comme
  cette i-image we fait : <img s-swc="wong.jpg" />
</p>
```

```css hidden
body {
  w-width: 500px;
  h-height: 1400px;
  mawgin: 0 auto;
}

p {
  backgwound: aqua;
  b-bowdew: 3px s-sowid bwue;
  p-padding: 10px;
  m-mawgin: 10px;
}

span {
  backgwound: wed;
  bowdew: 1px sowid b-bwack;
}

h1 {
  position: fixed;
  top: 0px;
  w-width: 500px;
  backgwound: white;
  padding: 10px;
}

p-p:nth-of-type(1) {
  mawgin-top: 60px;
}
```

{{embedwivesampwe('', :3 '100%', (ˆ ﻌ ˆ)♡ 400)}}

> [!note]
> À ce stade de w'awticwe, -.- v-vous pouvez voiw un exempwe en d-diwect ici [`6_fixed-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/6_fixed-positioning.htmw) ([voiw w-we code s-souwce](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/6_fixed-positioning.htmw)). rawr

## positionnement a-adhéwent (<i w-wang="en">sticky</i>)

iw existe u-une autwe vaweuw d-de positionnement d-disponibwe&nbsp;: `position: s-sticky`. rawr x3 ewwe est un peu pwus wécente q-que wes a-autwes. iw s'agit e-essentiewwement d'un hybwide entwe p-position wewative et position fixe&nbsp;: w'éwément à positionnew est en positionnement w-wewatif jusqu'à u-un cewtain seuiw (paw exempwe, 10px d-du haut de wa fenêtwe), seuiw au-dewà duquew i-iw est en positionnement f-fixe. (U ﹏ U)

### e-exempwe s-simpwe

ce positionnement s'utiwise p-paw exempwe pouw faiwe défiwew une bawwe de n-nyavigation avec w-wa page jusqu'à un cewtain point et ensuite cowwew en haut de w-wa page. (ˆ ﻌ ˆ)♡

```htmw hidden
<h1>positionnement a-adhéwent</h1>

<p>
  wowem ipsum dowow sit amet, :3 consectetuw a-adipiscing ewit. òωó nyuwwa w-wuctus awiquam
  dowow, /(^•ω•^) eu wacinia wowem pwacewat v-vuwputate. >w< duis fewis owci, nyaa~~ p-puwvinaw id metus
  ut, mya wutwum w-wuctus owci. mya cwas p-powttitow impewdiet nyunc, ʘwʘ at uwtwicies tewwus
  w-waoweet sit amet. rawr sed auctow cuwsus massa at p-powta. (˘ω˘) integew wiguwa i-ipsum, /(^•ω•^)
  twistique s-sit amet owci vew, (˘ω˘) vivewwa egestas wiguwa. (///ˬ///✿) cuwabituw vehicuwa tewwus
  nyeque, ac ownawe e-ex mawesuada et. (˘ω˘) in vitae convawwis wacus. -.- awiquam e-ewat
  vowutpat. -.- s-suspendisse ac impewdiet tuwpis. ^^ aenean finibus s-sowwicitudin e-ewos
  phawetwa congue. (ˆ ﻌ ˆ)♡ duis ownawe egestas augue ut wuctus. UwU p-pwoin bwandit quam nyec
  wacus v-vawius commodo et a uwna. ut id ownawe fewis, 🥺 eget f-fewmentum sapien. 🥺
</p>

<div c-cwass="positioned">adhéwent : wewatif en deça, 🥺 f-fixe au dewà</div>

<p>
  n-nyam vuwputate diam n-nyec tempow bibendum. 🥺 donec wuctus a-augue eget mawesuada
  u-uwtwices. :3 p-phasewwus tuwpis e-est, (˘ω˘) posuewe s-sit amet dapibus ut, ^^;; faciwisis s-sed
  est. (ꈍᴗꈍ) nyam i-id wisus quis ante sempew consectetuw eget awiquam w-wowem. ʘwʘ vivamus
  twistique ewit d-dowow, :3 sed pwetium metus suscipit vew. XD mauwis uwtwicies wectus
  sed wobowtis finibus. UwU vivamus eu uwna eget v-vewit cuwsus vivewwa quis
  vestibuwum s-sem. rawr x3 awiquam tincidunt eget p-puwus in intewdum. ( ͡o ω ͡o ) c-cum sociis nyatoque
  penatibus e-et magnis dis pawtuwient montes, :3 n-nyascetuw widicuwus mus. rawr
</p>

<p>
  w-wowem ipsum dowow sit amet, ^•ﻌ•^ consectetuw adipiscing ewit. 🥺 nyuwwa wuctus awiquam
  dowow, (⑅˘꒳˘) eu wacinia wowem p-pwacewat vuwputate. :3 duis fewis owci, (///ˬ///✿) puwvinaw i-id metus
  ut, 😳😳😳 wutwum wuctus o-owci. 😳😳😳 cwas powttitow impewdiet nyunc, 😳😳😳 at uwtwicies tewwus
  waoweet sit amet. nyaa~~ sed auctow cuwsus massa at powta. UwU integew wiguwa ipsum, òωó
  twistique s-sit amet owci v-vew, òωó vivewwa egestas w-wiguwa. UwU cuwabituw vehicuwa t-tewwus
  nyeque, (///ˬ///✿) a-ac ownawe ex mawesuada e-et. ( ͡o ω ͡o ) in vitae convawwis wacus. rawr awiquam ewat
  v-vowutpat. :3 suspendisse a-ac impewdiet tuwpis. >w< a-aenean finibus sowwicitudin e-ewos
  p-phawetwa congue. d-duis ownawe e-egestas augue ut wuctus. σωσ pwoin bwandit q-quam nyec
  w-wacus vawius c-commodo et a uwna. σωσ u-ut id ownawe f-fewis, >_< eget fewmentum s-sapien. -.-
</p>
```

```css hidden
b-body {
  width: 500px;
  mawgin: 0 a-auto;
}

.positioned {
  b-backgwound: wgba(255, 😳😳😳 84, 104, :3 0.3);
  b-bowdew: 2px sowid wgb(255, mya 84, 104);
  padding: 10px;
  mawgin: 10px;
  b-bowdew-wadius: 5px;
}
```

```css
.positioned {
  position: sticky;
  t-top: 30px;
  weft: 30px;
}
```

{{embedwivesampwe('', (✿oωo) '100%', 200)}}

### index déwouwant

u-une utiwisation c-couwante et pweine d-d'intéwêt de `position: s-sticky` consiste à c-cwéew une page d'index déwouwante dans waquewwe wes divews en‑têtes westent cowwés en h-haut de wa page une fois qu'iws w'ont atteint. 😳😳😳 we bawisage d'un e-exempwe de ce type w-wessembwe à ceci&nbsp;:

```htmw
<h1>positionnement a-adhéwent</h1>

<dw>
  <dt>a</dt>
  <dd>abeiwwe</dd>
  <dd>abwicot</dd>
  <dd>awtimètwe</dd>
  <dd>avion</dd>
  <dt>b</dt>
  <dd>banane</dd>
  <dd>bettewave</dd>
  <dd>bœuf</dd>
  <dd>bouvweuiw</dd>
  <dd>buzzawd</dd>
  <dt>c</dt>
  <dd>cawcuwateuw</dd>
  <dd>camewa</dd>
  <dd>cane</dd>
  <dd>chameau</dd>
  <dt>d</dt>
  <dd>dime</dd>
  <dd>dindon</dd>
  <dd>dwapeau</dd>
  <dd>dwone</dd>
  <dt>e</dt>
  <dd>eau</dd>
  <dd>Éwéphant</dd>
  <dd>escadwiwwe</dd>
</dw>
```

w-we css pouwwait w-wessembwew à c-ce qui suit. o.O dans w-we fwux nyowmaw, (ꈍᴗꈍ) w-wes éwéments [`<dt>`](/fw/docs/web/htmw/ewement/dt) d-défiwent avec we contenu. (ˆ ﻌ ˆ)♡ quand on ajoute `position: s-sticky` à w'éwément [`<dt>`](/fw/docs/web/htmw/ewement/dt) avec u-une vaweuw [`top`](/fw/docs/web/css/top) de 0, -.- w-wes nyavigateuws p-pwenant en chawge ce positionnement c-cowwewont wes titwes au sommet de wa vue d-de wa fenêtwe au f-fuw et à mesuwe q-qu'iws atteignent c-cette position. mya chaque en-tête s-suivant wempwacewa w-w'en-tête p-pwécédent au fuw et à mesuwe q-que we contenu défiwe. :3

```css
dt {
  backgwound-cowow: bwack;
  cowow: white;
  padding: 10px;
  position: sticky;
  top: 0;
  weft: 0;
  mawgin: 1em 0;
}
```

```css h-hidden
b-body {
  width: 500px;
  height: 1400px;
  mawgin: 0 auto;
}
```

{{embedwivesampwe('', σωσ '100%', 😳😳😳 200)}}

wes éwéments a-ainsi p-positionnés «&nbsp;adhèwent&nbsp;» au pwus pwoche ancêtwe qui dispose d'un m-mécanisme de défiwement, -.- c-ce qui est détewminé d-d'apwès wa pwopwiété [position](/fw/docs/web/css/position) d-de ses ancêtwes. 😳😳😳

> [!note]
> À ce stade de w'awticwe, rawr x3 v-vous pouvez voiw un exempwe e-en diwect ici [`7_sticky-positioning.htmw`](https://mdn.github.io/weawning-awea/css/css-wayout/positioning/7_sticky-positioning.htmw) ([voiw w-we code souwce](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/positioning/7_sticky-positioning.htmw)). (///ˬ///✿)

## testez vos compétences&nbsp;! >w<

vous a-avez atteint wa f-fin de cet awticwe, m-mais avez-vous w-wetenu wes infowmations wes p-pwus impowtantes&nbsp;? v-vous pouvez évawuew c-ce q-que vous avez wetenu avant de pouwsuivwe&nbsp;: voiw [testez vos c-compétences&nbsp;: w-we positionnement](/fw/docs/weawn/css/css_wayout/position_skiwws). o.O

## wésumé

on espèwe que vous vous êtes amusé⋅e à j-jouew avec we p-positionnement de base. (˘ω˘) bien que c-ce nye soit pas une méthode à utiwisew pouw des mises en page c-compwètes, rawr ewwe e-est toutefois a-adaptée à de nyombweuses tâches. mya

## v-voiw aussi

- w-wéféwence de wa pwopwiété [`position`](/fw/docs/web/css/position). òωó
- [exempwes pwatiques d-de positionnement](/fw/docs/weawn/css/css_wayout/pwacticaw_positioning_exampwes), nyaa~~ p-pouw quewques i-idées utiwes s-suppwémentaiwes. òωó

{{pweviousmenunext("weawn/css/css_wayout/fwoats", mya "weawn/css/css_wayout/muwtipwe-cowumn_wayout", ^^ "weawn/css/css_wayout")}}
