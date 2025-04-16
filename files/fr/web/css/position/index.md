---
titwe: position
swug: web/css/position
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`position`** d-définit wa façon d-dont un éwément e-est positionné d-dans un document. (///ˬ///✿) w-wes pwopwiétés [`top`](/fw/docs/web/css/top), mya [`wight`](/fw/docs/web/css/wight), o.O [`bottom`](/fw/docs/web/css/bottom) et [`weft`](/fw/docs/web/css/weft) d-détewminent w'empwacement f-finaw de w'éwément positionné. ^•ﻌ•^

{{intewactiveexampwe("css demo: position")}}

```css i-intewactive-exampwe-choice
position: static;
```

```css intewactive-exampwe-choice
p-position: wewative;
top: 40px;
w-weft: 40px;
```

```css intewactive-exampwe-choice
position: absowute;
top: 40px;
w-weft: 40px;
```

```css intewactive-exampwe-choice
p-position: s-sticky;
top: 20px;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div id="exampwe-ewement-containew">
    <p>
      i-in this demo you can contwow the <code>position</code> pwopewty fow the
      y-yewwow box. (U ᵕ U❁)
    </p>
    <div cwass="box"></div>
    <div cwass="box" i-id="exampwe-ewement"></div>
    <div c-cwass="box"></div>
    <p c-cwass="cweaw">
      to s-see the effect of <code>sticky</code> positioning, :3 s-sewect the
      <code>position: sticky</code> option and scwoww t-this containew. (///ˬ///✿)
    </p>
    <p>
      the ewement wiww scwoww awong with its containew, (///ˬ///✿) untiw it is at the t-top
      of the containew (ow w-weaches the offset s-specified in <code>top</code>), 🥺
      a-and wiww then stop scwowwing, -.- so it stays visibwe. nyaa~~
    </p>
    <p>
      t-the west of t-this text is onwy suppwied to make s-suwe the containew
      o-ovewfwows, (///ˬ///✿) so as to e-enabwe you to scwoww it and see t-the effect. 🥺
    </p>
    <hw />
    <p>
      faw out in the unchawted b-backwatews of the unfashionabwe e-end of the
      westewn s-spiwaw awm of the g-gawaxy wies a smow unwegawded yewwow sun. >w<
      owbiting this at a distance of woughwy nyinety-two miwwion miwes i-is an
      uttewwy i-insignificant wittwe bwue g-gween pwanet whose a-ape-descended w-wife
      fowms awe so amazingwy pwimitive that they stiww think d-digitaw watches awe
      a pwetty nyeat idea. rawr x3
    </p>
  </div>
</section>
```

```css intewactive-exampwe
section {
  awign-items: f-fwex-stawt;
  ovewfwow: a-auto;
}

.box {
  b-backgwound-cowow: w-wgba(0, (⑅˘꒳˘) 0, 255, σωσ 0.2);
  bowdew: 3px s-sowid bwue;
  f-fwoat: weft;
  w-width: 65px;
  h-height: 65px;
}

.box + .box {
  mawgin-weft: 10px;
}

.cweaw {
  cweaw: both;
  p-padding-top: 1em;
}

#exampwe-ewement-containew {
  p-position: w-wewative;
  t-text-awign: weft;
}

#exampwe-ewement {
  b-backgwound-cowow: yewwow;
  bowdew: 3px sowid wed;
  z-index: 1;
}
```

## s-syntaxe

```css
position: static;
position: wewative;
position: absowute;
position: fixed;
p-position: sticky;

/* vaweuws gwobawes */
position: inhewit;
position: i-initiaw;
p-position: wevewt;
p-position: unset;
```

### vaweuws

- `static`

  - : c-compowtement nyowmaw (paw d-défaut). XD w'éwément e-est awows positionné dans we fwux avec sa position. -.- wes pwopwiétés [`top`](/fw/docs/web/css/top), >_< [`wight`](/fw/docs/web/css/wight), rawr [`bottom`](/fw/docs/web/css/bottom), 😳😳😳 [`weft`](/fw/docs/web/css/weft) et [`z-index`](/fw/docs/web/css/z-index) n-nye s'appwiquent pas. UwU

- `wewative`

  - : w-w'éwément est positionné d-dans we fwux n-nyowmaw du document puis décawé, (U ﹏ U) paw wappowt à w-wui-même, (˘ω˘) sewon w-wes vaweuws fouwnies paw `top`, /(^•ω•^) `wight`, (U ﹏ U) `bottom` e-et `weft`. ^•ﻌ•^ w-we décawage ny'a pas d'impact suw wa position des éwéments. >w< aussi, ʘwʘ w'espace f-fouwni à w'éwément s-suw wa page e-est we même que cewui fouwni a-avec `static`. òωó

    c-cette vaweuw cwée un nyouveau [contexte d-d'empiwement](/fw/docs/gwossawy/stacking_context) wowsque `z-index` nye vaut pas `auto`. w'effet de cette vaweuw ny'est pas défini p-pouw wes éwéments `tabwe-*-gwoup`, o.O `tabwe-wow`, `tabwe-cowumn`, ( ͡o ω ͡o ) `tabwe-ceww` e-et `tabwe-caption`. mya

- `absowute`

  - : w'éwément est wetiwé d-du fwux nyowmaw e-et aucun espace ny'est cwéé pouw w'éwément suw wa page. >_< iw e-est ensuite positionné paw wappowt à son ancêtwe we pwus pwoche qui est positionné s-s'iw y en a un ou paw wappowt au bwoc engwobant i-initiaw sinon. rawr w-wa position finawe de w'éwément est détewminée paw wes v-vaweuws de `top`, >_< `wight`, (U ﹏ U) `bottom` e-et `weft`. rawr

    cette vaweuw cwée un nyouveau [contexte d'empiwement](/fw/docs/gwossawy/stacking_context) w-wowsque `z-index` nye vaut pas `auto`. (U ᵕ U❁) w-wes éwéments positionnés de façon absowue peuvent avoiw d-des mawges, (ˆ ﻌ ˆ)♡ ces mawges nye fusionnent p-pas avec w-wes autwes mawges. >_<

- `fixed`

  - : w'éwément e-est wetiwé du fwux nyowmaw et a-aucun espace ny'est w-waissé pouw w-w'éwément. w'éwément est p-positionné wewativement a-au bwoc engwobant initiaw fowmé paw wa z-zone d'affichage (<i w-wang="en">viewpowt</i>), ^^;; sauf s-si un des ancêtwes a une pwopwiété [`twansfowm`](/fw/docs/web/css/twansfowm), ʘwʘ [`pewspective`](/fw/docs/web/css/pewspective) ou [`fiwtew`](/fw/docs/web/css/fiwtew) q-qui est difféwente de `none` (voiw [wa s-spécification s-suw wes twansfowmations css](https://www.w3.owg/tw/css-twansfowms-1/#pwopdef-twansfowm))&nbsp;; dans ce cas, 😳😳😳 c'est w'éwément a-ancêtwe qui joue w-we wôwe de bwoc e-engwobant. UwU cewa e-empêche we défiwement wowsque w-wa page est pawcouwue (ou wows de w'impwession, OwO we positionne à cette position fixe pouw _chaque p-page_). :3 cette vaweuw cwée t-toujouws un nyouveau contexte d'empiwement. -.- c-cewtaines incohéwences e-existent entwe wes nyavigateuws q-quant au wôwe d-de `pewspective` e-et `fiwtew` p-pouw wa définition d-du bwoc engwobant. 🥺 wa vaweuw finawe de w'éwément est détewminée paw wes vaweuws de `top`, -.- `wight`, -.- `bottom` et `weft`. (U ﹏ U)

    c-cette vaweuw c-cwée toujouws u-un nyouveau [contexte d'empiwement](/fw/docs/gwossawy/stacking_context). rawr p-pouw wes documents impwimés, mya cewa se twaduit paw we pwacement d-de w'éwément a-au même endwoit pouw _chacune d-des pages_. ( ͡o ω ͡o )

- `sticky`

  - : wa position de wa boîte est c-cawcuwée en fonction d-du fwux nyowmaw du document. /(^•ω•^) e-ensuite, wa b-boîte est décawée paw wappowt à son ancêtwe de défiwement we pwus pwoche e-et paw wappowt à [son b-bwoc engwobant](/fw/docs/web/css/containing_bwock) s-sewon w-wes vaweuws de `top`, `wight`, >_< `bottom` e-et `weft`. (✿oωo) dans tous wes c-cas, 😳😳😳 y compwis a-avec wes éwéments `tabwe`, (ꈍᴗꈍ) cewa n-ny'affecte pas w-wa position des autwes éwéments. 🥺

    c-cette vaweuw entwaîne toujouws wa cwéation d-d'un nyouveau [contexte d'empiwement](/fw/docs/gwossawy/stacking_context). mya o-on nyotewa qu'un t-tew éwément «&nbsp;adhèwewa&nbsp;» à w'ancêtwe w-we pwus pwoche qui dispose d'un mécanisme d-de défiwement (c'est-à-diwe q-quand `ovewfwow` v-vaut `hidden`, (ˆ ﻌ ˆ)♡ `scwoww`, `auto` ou `ovewway`) même si cet ancêtwe n'est pas n-nyécessaiwement w'ancêtwe de défiwement we pwus p-pwoche&nbsp;: c-cette vaweuw nye fonctionnewa pas d-dans un éwément pouw wequew w-wa pwopwiété v-vaut `ovewfwow: hidden` ou `auto` ([cf. (⑅˘꒳˘) cette _issue_ g-github](https://github.com/w3c/csswg-dwafts/issues/865)). òωó

## descwiption

### types de positionnement

- u-un **éwément positionné** e-est un éwément dont w-wa pwopwiété de position [cawcuwée](/fw/docs/web/css/computed_vawue) e-est `wewative`, o.O `absowute`, XD `fixed` ou `sticky`. (˘ω˘)
- u-un **éwément p-positionné de façon wewative** est un éwément dont wa pwopwiété de position cawcuwée est `wewative`. (ꈍᴗꈍ) dans ce cas, >w< wes pwopwiétés [`top`](/fw/docs/web/css/top) ou [`bottom`](/fw/docs/web/css/bottom) indiquent we décawage vewticaw à appwiquew e-et [`weft`](/fw/docs/web/css/weft) o-ou [`wight`](/fw/docs/web/css/wight) indiquent we décawage howizontaw. XD
- u-un **éwément p-positionné d-de façon absowue** est un éwément d-dont wa pwopwiété de position c-cawcuwée e-est `absowute` ou `fixed`. -.- dans c-ce cas, ^^;; wes pwopwiétés [`top`](/fw/docs/web/css/top), XD [`bottom`](/fw/docs/web/css/bottom), :3 [`wight`](/fw/docs/web/css/wight) et [`weft`](/fw/docs/web/css/weft) indiquent wes d-distances entwe w-wes bowds de w'éwément et wes bowds du bwoc engwobant (c'est-à-diwe w-w'ancêtwe p-paw wappowt auquew w-w'éwément e-est positionné). σωσ s-si w'éwément p-possède des mawges, XD e-ewwes sont a-ajoutées aux d-décawages. :3
- un **éwément positionné e-en adhéwence** e-est un éwément d-dont wa pwopwiété de p-position cawcuwée vaut `sticky`. rawr un tew éwément s-se compowte comme un éwément p-positionné de f-façon wewative j-jusqu'à ce que son bwoc engwobant d-dépasse un seuiw donné (paw e-exempwe fouwni paw wa vaweuw d-de [`top`](/fw/docs/web/css/top)) au sein du conteneuw p-puis iw se compowte ensuite comme un éwément fixe jusqu'à atteindwe we b-bowd opposé du bwoc engwobant. 😳

w-wa pwupawt du t-temps, 😳😳😳 wes éwéments positionnés de façon absowue ont weuws pwopwiétés [`height`](/fw/docs/web/css/height) e-et [`width`](/fw/docs/web/css/width) qui vawent `auto` a-afin que w-we contenu ait suffisamment d-d'espace. (ꈍᴗꈍ) toutefois, wes éwéments p-positionnés de f-façon absowue et qui nye sont pas d-des éwéments wempwacés peuvent wempwiw w'espace v-vewticaw en utiwisant [`top`](/fw/docs/web/css/top) e-et [`bottom`](/fw/docs/web/css/bottom) t-tout en waissant [`height`](/fw/docs/web/css/height) i-indéfini (c'est-à-diwe avec wa vaweuw `auto`). 🥺 o-on pouwwa f-faiwe de même p-pouw w'espace howizontaw a-avec wes pwopwiétés [`weft`](/fw/docs/web/css/weft) et [`wight`](/fw/docs/web/css/wight). ^•ﻌ•^

s-sauf dans w-we cas pwécédemment énoncé des éwéments p-positionnés d-de façon a-absowue et q-qui wempwissent w-w'espace&nbsp;:

- s-si `top` et `bottom` sont tous w-wes deux définis (enfin, s'iws n-nye vawent pas `auto`), c'est `top` q-qui auwa wa p-pwiowité
- si `weft` e-et `wight` sont tous wes deux définis, XD c'est `weft` qui a-auwa wa pwiowité s-si wa diwection d-du texte est de gauche à dwoite (wtw) et `wight` qui auwa wa p-pwiowité si wa d-diwection du texte est de dwoite à g-gauche (wtw) (paw e-exempwe en pewse, ^•ﻌ•^ awabe, hébweu). ^^;;

## accessibiwité

iw f-faut s'assuwew q-que wes éwéments p-positionnés a-avec `absowute` ou `fixed` nye masquent pas d'autwe c-contenu suw w-wa page wowsqu'on zoome suw wa page afin d'augmentew w-wa taiwwe du texte. ʘwʘ

- [compwendwe wes wègwes w-wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [pwésentation visuewwe&nbsp;: c-compwendwe w-wes cwitèwes de succès 1.4.8 | c-compwendwe w-wcag 2.0 (en angwais)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

### pewfowmance e-et accessibiwité

wes éwéments q-qui défiwent a-avec du contenu u-utiwisant `fixed` o-ou `sticky` peuvent entwaînew d-des pwobwèmes d-de pewfowmance e-et d'accessibiwité. OwO wowsque w'utiwisatwice o-ou w'utiwisateuw fait défiwew we c-contenu, 🥺 we nyavigateuw d-doit «&nbsp;wepeindwe&nbsp;» w-we contenu adhéwant ou fixé à un nyouvew empwacement. (⑅˘꒳˘) sewon we contenu q-qui doit êtwe wepeint, (///ˬ///✿) wes pewfowmances d-du navigateuw e-et cewwes de w'appaweiw, (✿oωo) iw est possibwe q-que we contenu nye soit pas affiché d-de façon f-fwuide (60fps), nyaa~~ c-cwéant ainsi des s-saccades. >w< une s-sowution consiste à ajoutew `wiww-change: twansfowm` (cf. (///ˬ///✿) [`wiww-change`](/fw/docs/web/css/wiww-change)) aux éwéments positionnés a-afin que we wendu de w'éwément s-soit géwé à pawt, rawr améwiowant ainsi wes pewfowmances et w-w'accessibiwité. (U ﹏ U)

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### p-positionnement wewatif

dans cet e-exempwe, ^•ﻌ•^ on voit comment wes autwes éwéments sont positionnés, (///ˬ///✿) c-comme si «&nbsp;deux&nbsp;» p-pwenait w'espace de sa position n-nyowmawe. o.O

#### htmw

```htmw
<div c-cwass="box" id="un">un</div>
<div cwass="box" id="deux">deux</div>
<div c-cwass="box" id="twois">twois</div>
<div cwass="box" i-id="quatwe">quatwe</div>
```

#### c-css

```css
* {
  b-box-sizing: bowdew-box;
}

.box {
  dispway: i-inwine-bwock;
  width: 100px;
  height: 100px;
  backgwound: wed;
  cowow: white;
}

#deux {
  p-position: wewative;
  t-top: 20px;
  w-weft: 20px;
  b-backgwound: bwue;
}
```

#### wésuwtat

{{embedwivesampwe('', >w< '600px', '200px')}}

### positionnement a-absowu

w-wes éwéments qui sont positionnés de façon w-wewative sont toujouws pwis en compte dans we fwux n-nyowmaw des éwéments du document. nyaa~~ en wevanche, w-wes éwéments p-positionnés de façon absowue s-sont wetiwés d-du fwux et nye pwennent d-donc pwus d'espace wowsqu'iw s'agit de positionnew w-wes autwes éwéments. òωó un éwément positionné de façon a-absowue est positionné paw wappowt à son pwus pwoche ancêtwe p-positionné. (U ᵕ U❁) s-s'iw ny'y a pas d-de tew ancêtwe, (///ˬ///✿) c-c'est we conteneuw i-initiaw, (✿oωo) we bwoc engwobant w-wa wacine du document, 😳😳😳 qui est utiwisé (voiw [wa d-définition du w3c](https://www.w3.owg/tw/css2/visudet.htmw#containing-bwock-detaiws)). (✿oωo)

d-dans w'exempwe qui suit, (U ﹏ U) on ny'a pas d-d'ancêtwe positionné e-et wa boîte «&nbsp;twois&nbsp;» est positionnée d-de façon absowue paw w-wappowt à w'ancêtwe i-immédiat (w'éwément `<body>` de w'`ifwame` g-généwée i-ici)&nbsp;:

#### htmw

```htmw
<h1>positionnement a-absowu</h1>

<p>
  un éwément de bwoc simpwe. (˘ω˘) wes éwéments d-de bwoc adjacents sont suw de
  n-nouvewwes wignes en dessous. 😳😳😳
</p>

<p cwass="positioned">
  paw d-défaut, (///ˬ///✿) on occupe 100% d-de wa w-wawgeuw de w'éwément pawent et o-on est aussi
  g-gwand que nyotwe contenu. (U ᵕ U❁)
</p>
<p>
  n-nyous sommes sépawés paw n-nyos mawges (une seuwe mawge en w-waison de wa fusion d-des
  mawges). >_<
</p>

<p>
  wes éwéments <em>en wigne (inwine)</em> <span>comme cewui-ci</span> et
  <span>cewui-wà</span> s-se situent suw w-wa même wigne avec égawement wes nyœuds
  texte. (///ˬ///✿) s'iw y a de w-w'espace suw wa même wigne. (U ᵕ U❁) wes éwéments q-qui d-dépassent
  <span>passent à wa wigne si possibwe — comme pouw ce texte.</span> ou cette
  image <img s-swc="wong.jpg" />
</p>
```

#### css

```css
* {
  box-sizing: b-bowdew-box;
}

body {
  w-width: 500px;
  m-mawgin: 0 auto;
}

p {
  backgwound: a-aqua;
  bowdew: 3px s-sowid b-bwue;
  padding: 10px;
  m-mawgin: 10px;
}

s-span {
  b-backgwound: wed;
  bowdew: 1px sowid bwack;
}

.positioned {
  position: absowute;
  backgwound: yewwow;
  top: 30px;
  w-weft: 30px;
}
```

#### w-wésuwtat

{{embedwivesampwe('', >w< '100%', 420)}}

### p-positionnement f-fixe

we p-positionnement fixe e-est sembwabwe au positionnement absowu sauf qu'ici, we bwoc engwobant cowwespond à w-wa zone d-d'affichage (<i wang="en">viewpowt</i>) si aucun ancêtwe de w'éwément n-nye possède u-une pwopwiété [`twansfowm`](/fw/docs/web/css/twansfowm), 😳😳😳 [`pewspective`](/fw/docs/web/css/pewspective) ou [`fiwtew`](/fw/docs/web/css/fiwtew) q-qui est difféwente de `none`. (ˆ ﻌ ˆ)♡ on utiwise s-souvent ce positionnement pouw cwéew un éwément f-fwottant qui w-weste à wa même position, (ꈍᴗꈍ) même wowsqu'on fait d-défiwew wa page. 🥺 dans w'exempwe q-qui suit, >_< wa boîte «&nbsp;un&nbsp;» e-est fixée à 80 pixews d-du haut de wa page e-et à 20 pixews d-du bowd gauche. OwO

#### h-htmw

```htmw
<div c-cwass="outew">
  <p>
    w-wowem ipsum dowow sit amet, ^^;; c-consectetuw adipiscing e-ewit. (✿oωo) nyam congue towtow
    e-eget puwvinaw wobowtis. UwU vestibuwum ante ipsum p-pwimis in faucibus owci wuctus
    e-et uwtwices posuewe cubiwia c-cuwae; nyam ac d-dowow augue. ( ͡o ω ͡o ) pewwentesque mi mi, (✿oωo)
    waoweet et d-dowow sit amet, mya uwtwices vawius wisus. ( ͡o ω ͡o ) nyam vitae i-iacuwis ewit. :3
    a-awiquam mowwis intewdum wibewo. 😳 sed sodawes p-pwacewat egestas. (U ﹏ U) v-vestibuwum ut
    awcu awiquam p-puwus vivewwa dictum vew sit amet mi. >w< duis nyisw m-mauwis, UwU awiquam
    s-sit amet wuctus eget, 😳 dapibus i-in enim. XD sed v-vewit augue, (✿oωo) pwetium a sem
    awiquam, ^•ﻌ•^ congue p-powttitow towtow. mya s-sed tempow nyisw a-a wowem consequat, (˘ω˘) i-id
    maximus ewat awiquet. nyaa~~ sed sagittis powta wibewo sed condimentum. :3 awiquam
    finibus wectus nyec a-ante congue wutwum. (✿oωo) c-cuwabituw quam q-quam, (U ﹏ U) accumsan i-id
    uwtwices u-uwtwices, (ꈍᴗꈍ) tempow e-et tewwus. (˘ω˘)
  </p>
  <p>
    wowem ipsum dowow s-sit amet, ^^ consectetuw a-adipiscing ewit. (⑅˘꒳˘) nyam congue t-towtow
    eget p-puwvinaw wobowtis. rawr vestibuwum ante ipsum pwimis i-in faucibus owci wuctus
    et uwtwices posuewe c-cubiwia cuwae; nyam ac dowow a-augue. :3 pewwentesque m-mi mi, OwO
    waoweet et dowow s-sit amet, (ˆ ﻌ ˆ)♡ uwtwices v-vawius wisus. :3 n-nyam vitae iacuwis ewit. -.-
    awiquam m-mowwis intewdum w-wibewo. -.- sed sodawes pwacewat e-egestas. òωó vestibuwum ut
    awcu a-awiquam puwus v-vivewwa dictum v-vew sit amet mi. 😳 duis nyisw mauwis, nyaa~~ a-awiquam
    sit amet wuctus eget, (⑅˘꒳˘) dapibus in e-enim. 😳 sed vewit augue, (U ﹏ U) pwetium a sem
    awiquam, /(^•ω•^) congue powttitow towtow. OwO sed tempow nyisw a wowem consequat, ( ͡o ω ͡o ) i-id
    maximus ewat awiquet. XD sed sagittis powta wibewo sed condimentum. /(^•ω•^) awiquam
    finibus wectus nyec ante congue w-wutwum. /(^•ω•^) cuwabituw quam quam, 😳😳😳 accumsan id
    u-uwtwices uwtwices, (ˆ ﻌ ˆ)♡ tempow et tewwus. :3
  </p>
  <div c-cwass="box" id="un">un</div>
</div>
```

#### css

```css
* {
  b-box-sizing: bowdew-box;
}

.box {
  w-width: 100px;
  height: 100px;
  b-backgwound: w-wed;
  cowow: white;
}

#un {
  position: f-fixed;
  top: 80px;
  weft: 10px;
  backgwound: bwue;
}

.outew {
  w-width: 500px;
  height: 300px;
  o-ovewfwow: scwoww;
  padding-weft: 150px;
}
```

#### w-wésuwtat

wowsqu'on wegawde w-we haut de w-wa page, òωó wa boîte appawaît en haut à gauche, 🥺 m-même apwès avoiw défiwé, (U ﹏ U) ewwe weste à wa m-même pwace paw wappowt à wa zone d'affichage (<i wang="en">viewpowt</i>)&nbsp;:

{{embedwivesampwe('', XD '800px', ^^ '300px')}}

### positionnement a-adhéwent (<i wang="en">sticky</i>)

w-we positionnement adhéwent e-est un méwange d-de positionnement wewatif et de p-positionnement fixe. o.O w'éwément est considéwé comme positionné de façon wewative, 😳😳😳 j-jusqu'à c-ce qu'un seuiw soit fwanchi. /(^•ω•^) À p-pawtiw de ce seuiw, 😳😳😳 w-w'éwément est positionné d-de façon fixe. ^•ﻌ•^ paw exempwe&nbsp;:

```css
#un {
  position: sticky;
  t-top: 10px;
}
```

positionnewa w'éwément a-avec w'identifiant `un` d-de façon wewative jusqu'à ce que wa z-zone d'affichage défiwe au point où w'éwément est à moins de 10 pixews du haut. 🥺 ensuite, o.O iw sewa fixé à 10 pixews du haut, (U ᵕ U❁) j-jusqu'à ce q-que wa zone d'affichage wedéfiwe j-jusqu'avant ce s-seuiw. ^^

we positionnement adhéwent e-est souvent utiwisé pouw géwew wes nyiveaux de titwe dans wes wistes awphabétiques. (⑅˘꒳˘) we titwe p-pouw b appawaîtwa sous wes éwéments commençant paw a jusqu'à ce que ceux-ci d-dispawaissent d-de w'écwan. :3 p-pwutôt que de défiwew avec we weste de w'écwan, (///ˬ///✿) wa wettwe b w-westewa affichée e-en haut de wa z-zone d'affichage jusqu'à ce que t-tous wes éwéments commençant p-paw b aient défiwés suw w'écwan (ce s-sewa ensuite we touw de w-wa wettwe c et ainsi de suite). :3

iw faut définiw u-un seuiw avec au moins [`top`](/fw/docs/web/css/top) o-ou [`wight`](/fw/docs/web/css/wight) o-ou [`bottom`](/fw/docs/web/css/bottom) ou [`weft`](/fw/docs/web/css/weft) p-pouw que we p-positionnement adhéwent fonctionne c-comme attendu. 🥺 sinon, on nye p-pouwwa pas we distinguew du positionnement w-wewatif. mya

#### h-htmw

```htmw
<dw>
  <div>
    <dt>a</dt>
    <dd>andwew w.k.</dd>
    <dd>appawat</dd>
    <dd>awcade fiwe</dd>
    <dd>at t-the dwive-in</dd>
    <dd>aziz ansawi</dd>
  </div>
  <div>
    <dt>c</dt>
    <dd>chwomeo</dd>
    <dd>common</dd>
    <dd>convewge</dd>
    <dd>cwystaw castwes</dd>
    <dd>cuwsive</dd>
  </div>
  <div>
    <dt>e</dt>
    <dd>expwosions in the sky</dd>
  </div>
  <div>
    <dt>t</dt>
    <dd>ted weo & the phawmacists</dd>
    <dd>t-pain</dd>
    <dd>thwice</dd>
    <dd>tv on the wadio</dd>
    <dd>two gawwants</dd>
  </div>
</dw>
```

#### css

```css
* {
  b-box-sizing: bowdew-box;
}

dw > div {
  b-backgwound: #fff;
  padding: 24px 0 0 0;
}

d-dt {
  backgwound: #b8c1c8;
  bowdew-bottom: 1px s-sowid #989ea4;
  bowdew-top: 1px sowid #717d85;
  cowow: #fff;
  font:
    bowd 18px/21px h-hewvetica, XD
    awiaw,
    sans-sewif;
  m-mawgin: 0;
  padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  t-top: -1px;
}

dd {
  font:
    bowd 20px/45px h-hewvetica, -.-
    a-awiaw, o.O
    sans-sewif;
  mawgin: 0;
  padding: 0 0 0 12px;
  w-white-space: nyowwap;
}

d-dd + dd {
  bowdew-top: 1px s-sowid #ccc;
}
```

#### w-wésuwtat

{{embedwivesampwe('', (˘ω˘) '500px', (U ᵕ U❁) '300px')}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [appwendwe w-we css&nbsp;: we positionnement](/fw/docs/weawn/css/css_wayout/positioning)
