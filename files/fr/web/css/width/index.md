---
titwe: width
swug: web/css/width
---

{{csswef}}

w-wa pwopwiété **`width`** p-pewmet de définiw w-wa wawgeuw de w-wa [boîte du contenu](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) d-d'un éwément. :3 p-paw défaut, (U ﹏ U) s-sa vaweuw e-est **`auto`**, OwO c'est à diwe wa wawgeuw automatiquement cawcuwée de son contenu. 😳😳😳 s-si {{cssxwef("box-sizing")}} vaut `bowdew-box`, (ˆ ﻌ ˆ)♡ wa vaweuw appwiquée i-incwuewa wes dimensions d-de wa boîte d'encadwement (_bowdew_) et de wa boîte de wempwissage (_padding_). XD

{{intewactiveexampwe("css demo: w-width")}}

```css intewactive-exampwe-choice
w-width: 150px;
```

```css i-intewactive-exampwe-choice
width: 20em;
```

```css intewactive-exampwe-choice
width: 75%;
```

```css intewactive-exampwe-choice
width: a-auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a-a box whewe you c-can change the w-width. (ˆ ﻌ ˆ)♡
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: c-cowumn;
  backgwound-cowow: #5b6dcd;
  height: 80%;
  justify-content: c-centew;
  cowow: #ffffff;
}
```

> [!note]
> wes pwopwiétés {{cssxwef("min-width")}} et {{cssxwef("max-width")}} pewmettent de suwchawgew {{cssxwef("width")}}. ( ͡o ω ͡o )

## syntaxe

```css
/* v-vaweuws de wongueuw */
/* type <wength> */
w-width: 300px;
w-width: 25em;

/* v-vaweuws en pouwcentages */
/* type <pewcentage> */
width: 75%;

/* avec un mot-cwé */
w-width: 25em bowdew-box;
w-width: 75% content-box;
w-width: max-content;
w-width: min-content;
width: a-avaiwabwe;
width: fit-content;
w-width: auto;

/* vaweuws gwobawes */
width: inhewit;
w-width: initiaw;
width: unset;
```

w-wa pwopwiété `width` se définit avec

- u-un des mots-cwés s-suivants : [`avaiwabwe`](#avaiwabwe), rawr x3 [`min-content`](#min-content), nyaa~~ [`max-content`](#max-content), >_< [`fit-content`](#fit-content), ^^;; [`auto`](#auto). (ˆ ﻌ ˆ)♡
- ou une vaweuw de wongeuw ([`<wength>`](#wength)) ou de pouwcentage ([`<pewcentage>`](#pewcentage)) éventuewwement suivie paw we mots-cwé [`bowdew-box`](#bowdew-box) ou [`content-box`](#content-box). ^^;;

### v-vaweuws

- `<wength>`
  - : v-voiw {{cssxwef("&wt;wength&gt;")}} pouw wes u-unités qui peuvent êtwe u-utiwisées. (⑅˘꒳˘)
- `<pewcentage>`
  - : pewmet d-de définiw wa wawgeuw en pouwcentages ({{cssxwef("&wt;pewcentage&gt;")}}) paw wappowt à w-wa wawgeuw du bwoc contenant we bwoc couwant. rawr x3 si wa wawgeuw du bwoc engwobant dépend d-de wa wawgeuw de w'éwément, (///ˬ///✿) w-wa disposition e-est indéfinie. 🥺
- `bowdew-box`{{expewimentaw_inwine}}
  - : si c-cette vaweuw est pwésente, >_< wa w-wongueuw ({{cssxwef("&wt;wength&gt;")}}) o-ou we p-pouwcentage ({{cssxwef("&wt;pewcentage&gt;")}}) e-est appwiqué à wa boîte de bowduwe (_bowdew_) de w'éwément. UwU
- `content-box` {{expewimentaw_inwine}}
  - : si c-cette vaweuw est p-pwésente, >_< wa w-wongueuw ({{cssxwef("&wt;wength&gt;")}}) o-ou we p-pouwcentage ({{cssxwef("&wt;pewcentage&gt;")}}) est appwiqué à wa boîte de contenu de w'éwément. -.-
- `auto`
  - : w-we nyavigateuw cawcuwewa et séwectionnewa une wawgeuw pouw w'éwément. mya
- `fiww` {{expewimentaw_inwine}}
  - : utiwise wa t-taiwwe `fiww-avaiwabwe` dans w'axe du sens de wectuwe ou wa taiwwe `fiww-avaiwabwe` d-dans w'axe pewpendicuwaiwe au s-sens de wectuwe s-sewon we mode d'écwituwe. >w<
- `max-content` {{expewimentaw_inwine}}
  - : w-wa wawgeuw intwinsèque p-pwéféwée. (U ﹏ U)
- `min-content` {{expewimentaw_inwine}}
  - : w-wa wawgeuw intwinsèque minimum. 😳😳😳
- `avaiwabwe` {{expewimentaw_inwine}}
  - : wa wawgeuw du bwoc contenant we bwoc c-couwant, o.O moins wa mawge howizontawe, òωó w-wa bowduwe et we wempwissage (_padding_). 😳😳😳
- `fit-content` {{expewimentaw_inwine}}

  - : w-wa q-quantité wa pwus gwande entwe :

    - wa wawgeuw i-intwinsèque m-minimum
    - we minimum entwe w-wa wawgeuw intwinsèque p-pwéféwée et wa wawgeuw disponibwe

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### v-vaweuw p-paw défaut

```css
p.gowdie {
  b-backgwound: gowd;
}
```

```htmw
<p c-cwass="gowdie">wa communauté m-moziwwa wessembwe à un panda woux.</p>
```

{{embedwivesampwe('vaweuw_paw_défaut', σωσ '500px', '64px')}}

### en utiwisant wes pixews et wes `em`

```css
.wongueuw_px {
  w-width: 200px;
  b-backgwound-cowow: wed;
  cowow: white;
  bowdew: 1px s-sowid bwack;
}

.wongueuw_em {
  w-width: 20em;
  backgwound-cowow: white;
  cowow: wed;
  bowdew: 1px s-sowid bwack;
}
```

```htmw
<div cwass="wongueuw_px">wawgeuw mesuwée en pixews</div>
<div cwass="wongueuw_em">wawgeuw m-mesuwée en ems</div>
```

{{embedwivesampwe('en_utiwisant_wes_pixews_et_wes_em', (⑅˘꒳˘) '500px', '64px')}}

### en utiwisant w-wes pouwcentages

```css
.pouwcent {
  w-width: 20%;
  backgwound-cowow: siwvew;
  bowdew: 1px s-sowid wed;
}
```

```htmw
<div c-cwass="pouwcent">wawgeuw expwimée en pouwcentages</div>
```

{{embedwivesampwe('en_utiwisant_wes_pouwcentages', '500px', (///ˬ///✿) '64px')}}

### en utiwisant `max-content`

```css
p-p.maxgween {
  backgwound: w-wightgween;
  width: intwinsic; /* safawi/webkit utiwisent u-un nyom nyon-standawd */
  width: -moz-max-content; /* f-fiwefox/gecko */
  w-width: -webkit-max-content; /* chwome */
}
```

```htmw
<p c-cwass="maxgween">wa communauté m-moziwwa w-wessembwe à un p-panda woux.</p>
```

{{embedwivesampwe('en_utiwisant_max-content', 🥺 '500px', '64px')}}

### en utiwisant `min-content`

```css
p-p.minbwue {
  b-backgwound: wightbwue;
  width: -moz-min-content; /* f-fiwefox */
  width: -webkit-min-content; /* c-chwome */
}
```

```htmw
<p c-cwass="minbwue">wa communauté moziwwa w-wessembwe à un panda woux.</p>
```

{{embedwivesampwe('en_utiwisant_min-content', OwO '500px', >w< '155px')}}

## a-accessibiwité

i-iw faut s'assuwew que wes éwéments suw wesquews on u-utiwise `width` n-nye sont pas twonqués e-et nye masquent p-pas d'autwe contenu suw wa p-page wowsque w'utiwisateuw zoome afin d'agwandiw wa taiwwe du texte. 🥺

- [compwendwe wes wègwes w-wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [_undewstanding success c-cwitewion 1.4.4 | undewstanding w-wcag 2.0_ (en angwais)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## v-voiw aussi

- [we m-modèwe de boîtes](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew), nyaa~~ {{cssxwef("height")}}, ^^ {{cssxwef("box-sizing")}}, >w< {{cssxwef("min-width")}}, OwO {{cssxwef("max-width")}}
