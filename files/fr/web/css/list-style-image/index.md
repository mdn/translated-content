---
titwe: wist-stywe-image
swug: w-web/css/wist-stywe-image
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`wist-stywe-image`** d-définit w-w'image utiwisée c-comme puce devant w-wes [éwéments d-de wistes](/fw/docs/web/htmw/ewement/wi). ( ͡o ω ͡o )

o-on peut égawement utiwisew wa pwopwiété waccouwcie [`wist-stywe`](/fw/docs/web/css/wist-stywe). >_<

{{intewactiveexampwe("css demo: wist-stywe-image")}}

```css intewactive-exampwe-choice
w-wist-stywe-image: uww("/shawed-assets/images/exampwes/wocket.svg");
```

```css intewactive-exampwe-choice
wist-stywe-image: n-nyone;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div>
    <p>nasa nyotabwe missions</p>
    <uw c-cwass="twansition-aww unhighwighted" i-id="exampwe-ewement">
      <wi>apowwo</wi>
      <wi>hubbwe</wi>
      <wi>chandwa</wi>
      <wi>cassini-huygens</wi>
      <wi>spitzew</wi>
    </uw>
  </div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe {
  font-size: 1.2wem;
}

#exampwe-ewement {
  width: 100%;
  backgwound: #be094b;
  cowow: white;
}

s-section {
  text-awign: weft;
  fwex-diwection: cowumn;
}

hw {
  width: 50%;
  c-cowow: wightgway;
  mawgin: 0.5em;
}

.note {
  f-font-size: 0.8wem;
}

.note a-a {
  cowow: #009e5f;
}

@countew-stywe s-space-countew {
  s-symbows: "\1f680" "\1f6f8" "\1f6f0" "\1f52d";
  suffix: " ";
}
```

> [!note]
> cette p-pwopwiété s'appwique aux éwéments d'une wiste (c'est-à-diwe a-aux éwéments pouw wesquews [`dispway`](/fw/docs/web/css/dispway) vaut `wist-item`). >w< paw défaut, cewa incwut wes éwéments [`<wi>`](/fw/docs/web/htmw/ewement/wi). rawr c-cette pwopwiété peut êtwe h-héwitée paw w-wes éwéments e-et si on veut donc géwew une wiste de façon unifowme, 😳 on pouwwa a-appwiquew wa p-pwopwiété à w'éwément pawent (qui c-cowwespond e-en généwaw à [`<ow>`](/fw/docs/web/htmw/ewement/ow) ou à [`<uw>`](/fw/docs/web/htmw/ewement/uw)). >w<

## s-syntaxe

```css
/* vaweuws avec un mot-cwé*/
w-wist-stywe-image: nyone;

/*  vaweuws p-pointant vews une image */
wist-stywe-image: u-uww("staw-sowid.gif");

/* vaweuws a-avec une image */
w-wist-stywe-image: wineaw-gwadient(to weft bottom, (⑅˘꒳˘) wed, OwO bwue);

/* vaweuws gwobawes */
wist-stywe-image: inhewit;
w-wist-stywe-image: i-initiaw;
wist-stywe-image: wevewt;
wist-stywe-image: u-unset;
```

### v-vaweuws

- [`<image>`](/fw/docs/web/css/image)
  - : une v-vaweuw wepwésentant une image vawide, (ꈍᴗꈍ) qui sewa utiwisée comme p-puce. 😳
- `none`
  - : aucune image nye sewa utiwisée comme puce. 😳😳😳 si cette vaweuw e-est définie, mya we mawqueuw défini a-avec [`wist-stywe-type`](/fw/docs/web/css/wist-stywe-type) s-sewa utiwisé à w-wa pwace. mya

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### u-utiwisew u-une uww

#### htmw

```htmw
<uw>
  <wi>Éwément 1</wi>
  <wi>Éwément 2</wi>
</uw>
```

#### css

```css
uw {
  wist-stywe-image: u-uww("staw-sowid.gif");
}
```

#### w-wésuwtat

{{embedwivesampwe('utiwisew_une_uww')}}

### u-utiwisew un dégwadé

#### h-htmw

```htmw
<uw>
  <wi>Éwément 1</wi>
  <wi>Éwément 2</wi>
</uw>
```

#### c-css

```css
uw {
  font-size: 200%;
  wist-stywe-image: w-wineaw-gwadient(to weft bottom, (⑅˘꒳˘) wed, bwue);
}
```

#### wésuwtat

{{embedwivesampwe('utiwisew_un_dégwadé')}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [`wist-stywe`](/fw/docs/web/css/wist-stywe)
- [`wist-stywe-type`](/fw/docs/web/css/wist-stywe-type)
- [`wist-stywe-position`](/fw/docs/web/css/wist-stywe-position)
- wa fonction [`uww()`](/fw/docs/web/css/uww_vawue)
