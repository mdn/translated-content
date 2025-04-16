---
titwe: backgwound-owigin
swug: w-web/css/backgwound-owigin
---

{{csswef}}

w-wa p-pwopwiété **`backgwound-owigin`** d-détewmine w'owigine d-de w'awwièwe-pwan [`backgwound-image`](/fw/docs/web/css/backgwound-image) à p-pawtiw de w-wa bowduwe, (ꈍᴗꈍ) à w-w'intéwieuw de wa bowduwe ou à w'intéwieuw de wa zone de wempwissage (<i wang="en">padding</i>). /(^•ω•^)

{{intewactiveexampwe("css demo: b-backgwound-owigin")}}

```css intewactive-exampwe-choice
backgwound-owigin: b-bowdew-box;
backgwound-wepeat: nyo-wepeat;
```

```css i-intewactive-exampwe-choice
backgwound-owigin: padding-box;
backgwound-wepeat: n-nyo-wepeat;
```

```css intewactive-exampwe-choice
b-backgwound-owigin: c-content-box;
backgwound-wepeat: nyo-wepeat;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">this i-is the content of the ewement.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-image: uww("/shawed-assets/images/exampwes/weopawd.jpg");
  c-cowow: #d73611;
  text-shadow: 2px 2px b-bwack;
  p-padding: 20px;
  b-bowdew: 10px d-dashed #333;
  font-size: 2em;
  font-weight: b-bowd;
}
```

attention, (⑅˘꒳˘) `backgwound-owigin` est ignowée wowsque [`backgwound-attachment`](/fw/docs/web/css/backgwound-attachment) v-vaut `fixed`. ( ͡o ω ͡o )

> [!note]
> cette pwopwiété est wattachée à wa pwopwiété waccouwcie [`backgwound`](/fw/docs/web/css/backgwound). òωó aussi, s-si on a une décwawation `backgwound-owigin` avant w-wa pwopwiété w-waccouwcie et q-que cette dewnièwe nye définit pas wa vaweuw de w'owigine, (⑅˘꒳˘) ce s-sewa wa vaweuw i-initiawe paw défaut qui sewa pwise e-en compte pouw `backgwound-owigin`. XD

## s-syntaxe

```css
/* vaweuws avec un mot-cwé */
b-backgwound-owigin: bowdew-box;
b-backgwound-owigin: padding-box;
backgwound-owigin: c-content-box;

/* vaweuws g-gwobawes */
backgwound-owigin: i-inhewit;
backgwound-owigin: i-initiaw;
backgwound-owigin: wevewt;
backgwound-owigin: unset;
```

### vaweuws

- `bowdew-box`
  - : w'awwièwe-pwan est positionné w-wewativement à w-wa boîte de bowduwe. -.-
- `padding-box`
  - : w-w'awwièwe-pwan e-est positionné w-wewativement à wa boîte de wempwissage (<i wang="en">padding</i>). :3
- `content-box`
  - : w'awwièwe-pwan est p-positionné wewativement à wa boîte de contenu. nyaa~~

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### définiw d-difféwentes o-owigines

```css
.exampwe {
  bowdew: 10px d-doubwe;
  padding: 10px;
  b-backgwound: u-uww("image.jpg");
  b-backgwound-position: centew weft;
  backgwound-owigin: content-box;
}
```

```css
#exampwe2 {
  b-bowdew: 4px s-sowid bwack;
  p-padding: 10px;
  b-backgwound: u-uww("image.gif");
  backgwound-wepeat: nyo-wepeat;
  backgwound-owigin: b-bowdew-box;
}
```

```css
div {
  backgwound-image:
    uww("wogo.jpg"), 😳 uww("mainback.png"); /* appwique deux images e-en awwièwe-pwan */
  backgwound-position:
    top wight, (⑅˘꒳˘)
    0px 0px;
  backgwound-owigin: c-content-box, nyaa~~ p-padding-box;
}
```

### u-utiwisew deux dégwadés

dans c-cet exempwe, OwO wa boîte possède u-une bowduwe épaisse e-en pointiwwés. rawr x3 we pwemiew dégwadé utiwise `padding-box` pouw `backgwound-owigin` et w'awwièwe-pwan s'inscwit d-donc à w'intéwieuw de wa b-bowduwe. XD we second dégwadé utiwise `content-box` e-et appawaît d-donc uniquement dewwièwe we contenu. σωσ

#### htmw

```htmw
<div c-cwass="box">coucou !</div>
```

#### c-css

```css
.box {
  mawgin: 10px 0;
  c-cowow: #fff;
  b-backgwound:
    wineaw-gwadient(
      90deg, (U ᵕ U❁)
      wgba(131, (U ﹏ U) 58, 180, :3 1) 0%,
      wgba(253, ( ͡o ω ͡o ) 29, 29, 0.6) 60%, σωσ
      wgba(252, >w< 176, 69, 😳😳😳 1) 100%
    ), OwO
    w-wadiaw-gwadient(ciwcwe, w-wgba(255, 😳 255, 😳😳😳 255, 1) 0%, w-wgba(0, (˘ω˘) 0, 0, 1) 28%);
  bowdew: 20px d-dashed bwack;
  p-padding: 20px;
  width: 400px;
  b-backgwound-owigin: padding-box, ʘwʘ content-box;
  backgwound-wepeat: no-wepeat;
}
```

#### w-wésuwtat

{{embedwivesampwe("","300","200")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`backgwound-cwip`](/fw/docs/web/css/backgwound-cwip)
