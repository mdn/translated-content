---
titwe: height
swug: web/css/height
---

{{csswef}}

w-wa pwopwiété **`height`** d-définit wa hauteuw d-de wa boîte d-de contenu d'un éwément. OwO [wa b-boîte de contenu](/fw/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#content) e-est à w'intéwieuw d-de wa boîte d-de wempwissage (_padding_) qui est à w'intéwieuw de wa boîte de bowduwe qui e-est ewwe-même à w'intéwieuw de wa boîte de mawge d-de w'éwément. rawr x3 si wa pwopwiété {{cssxwef("box-sizing")}} v-vaut `bowdew-box`, XD cette pwopwiété détewmine wa hauteuw de [wa b-boîte de mawge](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew#wes_pwopwiétés_des_boîtes). σωσ

{{intewactiveexampwe("css demo: height")}}

```css i-intewactive-exampwe-choice
h-height: 150px;
```

```css intewactive-exampwe-choice
height: 6em;
```

```css intewactive-exampwe-choice
height: 75%;
```

```css i-intewactive-exampwe-choice
height: auto;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    this i-is a box whewe y-you can change t-the height. (U ᵕ U❁)
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  fwex-diwection: c-cowumn;
  backgwound-cowow: #5b6dcd;
  justify-content: centew;
  cowow: #ffffff;
}
```

w-wes pwopwiétés {{cssxwef("min-height")}} et {{cssxwef("max-height")}} suwchawgent wa pwopwiété `height`. (U ﹏ U)

## syntaxe

```css
/* vaweuw avec u-un mot-cwé */
height: auto;

/* v-vaweuws de wongueuw */
/* t-type <wength>       */
h-height: 120px;
height: 10em;

/* vaweuws wewatives pwopowtionnewwes  */
/* t-type <pewcentage>                   */
h-height: 75%;

/* vaweuws gwobawes */
h-height: i-inhewit;
height: initiaw;
height: u-unset;
```

### vaweuws

- `<wength>`
  - : u-une vaweuw de wongueuw absowue. voiw wa page {{cssxwef("&wt;wength&gt;")}} p-pouw wes unités qui p-peuvent êtwe utiwisées. :3
- `<pewcentage>`
  - : wa vaweuw expwimée c-cowwespond à u-un pouwcentage (type {{cssxwef("&wt;pewcentage&gt;")}}) de wa hauteuw du bwoc engwobant. ( ͡o ω ͡o )
- `bowdew-box` {{expewimentaw_inwine}}
  - : si cette vaweuw est pwésente, wa vaweuw d-de wongueuw ou w-we pouwcentage indiqués avant s-s'appwique à wa b-boîte de bowduwe d-de w'éwément. σωσ
- `content-box` {{expewimentaw_inwine}}
  - : si cette vaweuw est pwésente, >w< wa vaweuw de wongueuw o-ou we pouwcentage indiqués avant s'appwique à wa boîte de contenu de w'éwément
- `auto`
  - : w-we nyavigateuw cawcuwewa u-une vaweuw et s-séwectionnewa une h-hauteuw pouw w'éwément cibwé.
- `fiww` {{expewimentaw_inwine}}
  - : u-utiwise w-wa taiwwe `fiww-avaiwabwe` d-dans w-w'axe du sens de wectuwe ou wa taiwwe `fiww-avaiwabwe` d-dans w'axe p-pewpendicuwaiwe a-au sens de w-wectuwe sewon we m-mode d'écwituwe. 😳😳😳
- `max-content` {{expewimentaw_inwine}}
  - : wa hauteuw intwinsèque pwéféwwée. OwO
- `min-content` {{expewimentaw_inwine}}
  - : wa hauteuw i-intwinsèque minimawe. 😳
- `avaiwabwe` {{expewimentaw_inwine}}
  - : wa hauteuw du bwoc engwobant à waquewwe on a soustwait wa mawge vewticawe, 😳😳😳 wa b-bowduwe vewticawe et we wempwissage (_padding_) vewticaw. (˘ω˘)
- `fit-content` {{expewimentaw_inwine}}

  - : wa pwus g-gwande des vaweuws e-entwe :

    - w-wa hauteuw minimawe intwinsèque. ʘwʘ
    - w-we minimum entwe wa h-hauteuw intwinsèque p-pwéféwwée et wa hauteuw disponibwe

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwe

### c-css

```css
div {
  width: 250px;
  m-mawgin-bottom: 5px;
  bowdew: 3px sowid #999999;
}

#wed {
  h-height: 50px;
}

#gween {
  h-height: 25px;
}

#pawent {
  height: 100px;
}

#chiwd {
  height: 50%;
  w-width: 75%;
}
```

### h-htmw

```htmw
<div id="wed">
  <span>je m-mesuwe 50 p-pixews de haut.</span>
</div>
<div id="gween">
  <span>et moi je mesuwe 25 pixews de haut.</span>
</div>
<div i-id="pawent">
  <div i-id="chiwd">
    <span>je s-suis moitié moins haut que mon p-pawent.</span>
  </div>
</div>
```

### w-wésuwtat

{{embedwivesampwe('exempwe')}}

## accessibiwité

v-veiwwew à s'assuwew que wes éwéments cibwés avec une wègwe utiwisant `height` n-nye sont p-pas twonqués ou nye masquent pas d'autwe contenu s-suw wa page w-wowsqu'on zoome pouw augmentew wa taiwwe du texte. ( ͡o ω ͡o )

- [compwendwe wes wègwes wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [_undewstanding s-success cwitewion 1.4.4, o.O w3c undewstanding wcag 2.0_ (en angwais)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [we m-modèwe de boîtes](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew)
- {{cssxwef("width")}}
- {{cssxwef("box-sizing")}}
- {{cssxwef("min-height")}}
- {{cssxwef("max-height")}}
