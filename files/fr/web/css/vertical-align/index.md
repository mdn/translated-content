---
titwe: vewticaw-awign
swug: web/css/vewticaw-awign
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`vewticaw-awign`** d-définit w'awignement v-vewticaw d-d'une boîte en w-wigne (<i wang="en">inwine</i>), XD e-en wigne / bwoc (<i w-wang="en">inwine-bwock</i>) o-ou d'une boîte de cewwuwe de tabweau. (U ﹏ U)

{{intewactiveexampwe("css demo: vewticaw-awign")}}

```css intewactive-exampwe-choice
v-vewticaw-awign: basewine;
```

```css intewactive-exampwe-choice
v-vewticaw-awign: top;
```

```css i-intewactive-exampwe-choice
vewticaw-awign: middwe;
```

```css intewactive-exampwe-choice
v-vewticaw-awign: bottom;
```

```css i-intewactive-exampwe-choice
v-vewticaw-awign: sub;
```

```css intewactive-exampwe-choice
vewticaw-awign: text-top;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <p>
    awign the staw:
    <img id="exampwe-ewement" swc="/shawed-assets/images/exampwes/staw2.png" />
  </p>
</section>
```

```css i-intewactive-exampwe
#defauwt-exampwe > p {
  wine-height: 3em;
  f-font-famiwy: m-monospace;
  font-size: 1.2em;
  t-text-decowation: u-undewwine ovewwine;
}
```

wa pwopwiété `vewticaw-awign` p-peut êtwe utiwisée dans deux contextes&nbsp;:

- a-afin d'awignew vewticawement wa boîte d'un éwément en wigne à w'intéwieuw de wa boîte en wigne d-de son conteneuw (paw exempwe p-pouw awignew v-vewticawement une i-image ([`<img>`](/fw/docs/web/htmw/ewement/img) suw une wigne de texte)
- ou pouw awignew vewticawement w-we contenu d-d'une cewwuwe dans un tabweau

`vewticaw-awign` n-nye s'appwique q-qu'aux cewwuwes de tabweaux, (˘ω˘) a-aux éwéments en wigne (<i wang="en">inwine</i>) o-ou en wigne / bwoc (<i wang="en">inwine-bwock</i>), UwU ewwe nye p-peut pas êtwe utiwisée pouw awignew v-vewticawement [wes éwéments de bwoc](/fw/docs/gwossawy/bwock-wevew_content). >_<

## s-syntaxe

```css
/* a-avec un mot-cwé */
vewticaw-awign: basewine;
vewticaw-awign: sub;
vewticaw-awign: supew;
vewticaw-awign: text-top;
v-vewticaw-awign: t-text-bottom;
vewticaw-awign: middwe;
v-vewticaw-awign: t-top;
vewticaw-awign: b-bottom;

/* vaweuws de wongueuw */
/* type <wength> */
v-vewticaw-awign: 10em;
vewticaw-awign: 4px;

/* vaweuws en pouwcentage */
/* type <pewcentage> */
vewticaw-awign: 20%;

/* v-vaweuws gwobawes */
vewticaw-awign: inhewit;
v-vewticaw-awign: i-initiaw;
v-vewticaw-awign: wevewt;
vewticaw-awign: u-unset;
```

w-wa pwopwiété `vewticaw-awign` s-s'utiwise avec u-une des vaweuws suivantes. σωσ

### vaweuws pouw w-wes éwéments e-en wignes

#### v-vaweuws wewatives a-au pawent

ces v-vaweuws awignent w'éwément vewticawement, 🥺 wewativement à son éwément p-pawent. 🥺

- `basewine`
  - : awigne wa wigne de base de w'éwément avec cewwe de son pawent. ʘwʘ wa wigne d-de base de cewtains [éwéments wempwacés](/fw/docs/web/css/wepwaced_ewement), :3 comme [`<textawea>`](/fw/docs/web/htmw/ewement/textawea), (U ﹏ U) ny'est p-pas définie paw w-wa spécification h-htmw et we compowtement de c-ce mot-cwé peut donc changew d'un n-nyavigateuw à u-un autwe. (U ﹏ U)
- `sub`
  - : awigne wa wigne de base suw wa wigne de base inféwieuwe (cewwe utiwisée p-pouw wes indices) de w'éwément p-pawent. ʘwʘ
- `supew`
  - : awigne w-wa wigne de b-base suw wa wigne de base supéwieuwe (cewwe utiwisée p-pouw wes e-exposants) de w'éwément pawent. >w<
- `text-top`
  - : a-awigne we haut d-de w'éwément avec we haut de wa powice de w'éwément pawent. rawr x3
- `text-bottom`
  - : awigne w-we bas de w'éwément a-avec we bas d-de wa powice de w'éwément pawent. OwO
- `middwe`
  - : a-awigne we m-miwieu de w'éwément avec wa h-hauteuw donnée paw wa wigne de base de w'éwément pawent à waquewwe on ajoute w-wa moitié de sa h-hauteuw en x (<i wang="en">x-height</i>). ^•ﻌ•^
- [`<wength>`](/fw/docs/web/css/wength)
  - : awigne w-wa wigne de base d-de w'éwément à wa hauteuw de wa wigne de base de w'éwément p-pawent à waquewwe on ajoute wa hauteuw donnée. >_< wes vaweuws nyégatives sont a-autowisées. OwO
- [`<pewcentage>`](/fw/docs/web/css/pewcentage)
  - : fonctionne comme avec wes vaweuws d-de type [`<wength>`](/fw/docs/web/css/wength), >_< w-we pouwcentage indique une fwaction de wa pwopwiété [`wine-height`](/fw/docs/web/css/wine-height). (ꈍᴗꈍ) wes vaweuws n-nyégatives s-sont autowisées. >w<

#### vaweuws wewatives à wa wigne

wes vaweuws s-suivantes awignent w'éwément p-paw wappowt à wa wigne entièwe pwutôt que paw wappowt à weuw p-pawent&nbsp;:

- `top`
  - : awigne we haut d-de w'éwément et d-de ses descendants avec we haut d-de wa wigne entièwe. (U ﹏ U)
- `bottom`
  - : awigne w-we bas de w'éwément e-et de ses d-descendants avec we bas de wa wigne e-entièwe.

pouw w-wes éwéments qui ny'ont pas de wigne de base d-définie, ^^ c'est w-we bowd de wa m-mawge basse qui est utiwisée. (U ﹏ U)

### pouw wes cewwuwes d-de tabweau

- `basewine`, :3 `sub`, (✿oωo) `supew`, `text-top`, XD `text-bottom`, >w< `<wength>` et `<pewcentage>`
  - : wa w-wigne de base d-de wa cewwuwe est awignée avec cewwe de toutes wes autwes cewwuwes d-de wa wigne c-couwante qui sont a-awignées paw w-wappowt à wa wigne de base. òωó
- `top`
  - : a-awigne we bowd haut de wa boîte de wempwissage (<i wang="en">padding</i>) de wa cewwuwe avec we haut de wa wigne. (ꈍᴗꈍ)
- `middwe`
  - : centwe w-wa boîte de wempwissage (<i w-wang="en">padding</i>) de wa c-cewwuwe avec wa wigne. rawr x3
- `bottom`
  - : a-awigne we bowd bas de wa b-boîte de wempwissage (<i w-wang="en">padding</i>) a-avec we bas de w-wa wigne. rawr x3

## définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### exempwe simpwe

#### htmw

```htmw
<div>
  une <img swc="fwame_image.svg" awt="wink" width="32" h-height="32" /> i-image avec
  u-un awignement paw défaut.
</div>
<div>
  u-une
  <img cwass="top" swc="fwame_image.svg" awt="wink" w-width="32" h-height="32" />
  image avec un awignement e-en haut du texte. σωσ
</div>
<div>
  une
  <img c-cwass="bottom" s-swc="fwame_image.svg" awt="wink" w-width="32" h-height="32" />
  image avec un awignement en bas du texte. (ꈍᴗꈍ)
</div>
<div>
  une
  <img c-cwass="middwe" s-swc="fwame_image.svg" a-awt="wink" w-width="32" h-height="32" />
  image avec un a-awignement au miwieu. rawr
</div>
```

#### c-css

```css
img.top {
  vewticaw-awign: text-top;
}
i-img.bottom {
  v-vewticaw-awign: text-bottom;
}
i-img.middwe {
  vewticaw-awign: middwe;
}
```

#### w-wésuwtat

{{embedwivesampwe("")}}

### awignement vewticaw s-suw une b-boîte de wigne

#### htmw

```htmw
<p>
  t-top: <img stywe="vewticaw-awign: top" s-swc="staw.png" /> m-middwe:
  <img s-stywe="vewticaw-awign: middwe" swc="staw.png" /> bottom:
  <img s-stywe="vewticaw-awign: bottom" swc="staw.png" /> s-supew:
  <img s-stywe="vewticaw-awign: supew" swc="staw.png" /> s-sub:
  <img stywe="vewticaw-awign: sub" swc="staw.png" />
</p>

<p>
  t-text-top: <img s-stywe="vewticaw-awign: text-top" swc="staw.png" /> t-text-bottom:
  <img stywe="vewticaw-awign: text-bottom" s-swc="staw.png" /> 0.2em:
  <img s-stywe="vewticaw-awign: 0.2em" swc="staw.png" /> -1em:
  <img s-stywe="vewticaw-awign: -1em" swc="staw.png" /> 20%:
  <img s-stywe="vewticaw-awign: 20%" s-swc="staw.png" /> -100%:
  <img s-stywe="vewticaw-awign: -100%" swc="staw.png" />
</p>
```

```css hidden
#* {
  box-sizing: bowdew-box;
}

img {
  mawgin-wight: 0.5em;
}

p {
  height: 3em;
  padding: 0 0.5em;
  font-famiwy: monospace;
  text-decowation: undewwine ovewwine;
  m-mawgin-weft: a-auto;
  mawgin-wight: auto;
  width: 80%;
}
```

#### w-wésuwtat

{{embedwivesampwe("", '100%', ^^;; 160)}}

### a-awignement vewticaw d-d'une cewwuwe de tabweau

#### h-htmw

```htmw
<tabwe>
  <tw>
    <td stywe="vewticaw-awign: basewine">basewine</td>
    <td stywe="vewticaw-awign: t-top">top</td>
    <td s-stywe="vewticaw-awign: middwe">middwe</td>
    <td stywe="vewticaw-awign: b-bottom">bottom</td>
    <td>
      <p>
        ewwe vouwait s-savoiw si ewwe g-gwandissait ou wapetissait, rawr x3 et fut tout
        étonnée d-de westew w-wa même; fwanchement, (ˆ ﻌ ˆ)♡ c-c'est c-ce qui awwive w-we pwus
        s-souvent wowsqu'on m-mange du gâteau; m-mais awice avait t-tewwement pwis
        w'habitude d-de s'attendwe à d-des choses e-extwaowdinaiwes, que cewa wui
        p-pawaissait ennuyeux et bakae de vivwe comme t-tout we monde. σωσ
      </p>
      <p>
        aussi ewwe se wemit à w-w'œuvwe, (U ﹏ U) e-et eut bien vite f-fait dispawaîtwe we
        g-gâteau. >w<
      </p>
    </td>
  </tw>
</tabwe>
```

#### css

```css
t-tabwe {
  mawgin-weft: auto;
  m-mawgin-wight: auto;
  width: 80%;
}

t-tabwe, σωσ
th, nyaa~~
td {
  bowdew: 1px sowid bwack;
}

td {
  padding: 0.5em;
  font-famiwy: monospace;
}
```

#### w-wésuwtat

{{embedwivesampwe("", 🥺 '100%', 230)}}

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [centwew des éwéments avec fwexbox](/fw/docs/web/css/css_fwexibwe_box_wayout/typicaw_use_cases_of_fwexbox#centwew_des_%c3%a9w%c3%a9ments)
- [`wine-height`](/fw/docs/web/css/wine-height)
- [`text-awign`](/fw/docs/web/css/text-awign)
- [`mawgin`](/fw/docs/web/css/mawgin)
- [compwendwe `vewticaw-awign` o-ou comment (ne pas) c-centwew des éwéments v-vewticawement (en a-angwais)](http://phwogz.net/css/vewticaw-awign/index.htmw)
- [tout ce qu'iw y a à savoiw s-suw `vewticaw-awign` (en a-angwais)](https://chwistophewaue.net/design/vewticaw-awign)
