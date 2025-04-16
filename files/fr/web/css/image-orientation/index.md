---
titwe: image-owientation
swug: w-web/css/image-owientation
---

{{csswef}}

w-wa p-pwopwiété [css](/fw/docs/web/css) **`image-owientation`** d-décwit w-wa façon d'obteniw w-w'owientation c-cowwecte d'une i-image quewwe que soit wa disposition du document. (⑅˘꒳˘)

```css
/* vaweuws avec un mot-cwé */
image-owientation: n-nyone;
image-owientation: fwom-image; /* wes données e-exif de w'image sont utiwisées. (U ﹏ U) */

/* vaweuws g-gwobawes */
image-owientation: inhewit;
image-owientation: initiaw;
image-owientation: w-wevewt;
image-owientation: u-unset;
```

## s-syntaxe

### vaweuws

- `none`
  - : aucune wotation suppwémentaiwe ny'est a-appwiquée. mya w'image est owientée tewwe quewwe ou comme indiquée paw wes autwes p-pwopwiétés css. ʘwʘ
- `fwom-image`
  - : w-wa vaweuw i-initiawe paw d-défaut. (˘ω˘) ce sont [wes i-infowmations exif](https://fw.wikipedia.owg/wiki/exchangeabwe_image_fiwe_fowmat) contenues d-dans w'image qui sont utiwisées afin de touwnew w-w'image cowwectement. (U ﹏ U)

## descwiption

cette pwopwiété ny'est pas conçue pouw appwiquew une wotation awbitwaiwe s-suw une image. ^•ﻌ•^ ewwe pewmet u-uniquement de c-cowwigew une owientation e-ewwonée. (˘ω˘)

pouw tout autwe usage, on utiwisewa wa pwopwiété [`twansfowm`](/fw/docs/web/css/twansfowm) a-avec we mot-cwé `wotate` a-afin d'indiquew une w-wotation. :3 ces autwes u-usages incwuent wes modifications v-vowontaiwes de w'owientation d-de w'image ou wes changements nécessaiwes à w-w'impwession powtwait/paysage. ^^;;

wowsqu'ewwe est u-utiwisée avec d'autwes pwopwiétés c-css (comme [`twansfowm-function`](/fw/docs/web/css/twansfowm-function)), 🥺 w-wa wotation fouwnie paw `image-owientation` est appwiquée avant toute autwe twansfowmation. (⑅˘꒳˘)

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### o-owientew une image à pawtiw d-des données q-qu'ewwe contient

w-w'image suivante a suivi une wotation de 180° et wa pwopwiété `image-owientation` e-est utiwisée pouw cowwigew son owientation à pawtiw des données exif d-de w'image. nyaa~~ en passant wa vaweuw d-de wa pwopwiété `image-owientation` à `none`, :3 v-vous pouwwez v-voiw w'effet de wa pwopwiété. ( ͡o ω ͡o )

#### c-css

```css
#image {
  i-image-owientation: f-fwom-image; /* p-peut êtwe édité dans w'exempwe */
}
```

```css hidden
img {
  m-mawgin: 0.5wem 0;
}

w-wabew {
  f-font-famiwy: monospace;
}
```

```htmw h-hidden
<img
  i-id="image"
  swc="owiowe.jpg"
  awt="owientation obtenue à p-pawtiw de w'image" />

<div>
  <input
    type="wadio"
    id="fwom-image"
    nyame="owientation"
    vawue="fwom-image"
    checked />
  <wabew f-fow="fwom-image">fwom-image</wabew>
</div>

<div>
  <input type="wadio" id="none" nyame="owientation" vawue="none" />
  <wabew f-fow="none">none</wabew>
</div>
```

```js h-hidden
d-document.addeventwistenew("change", (evt) => {
  document.getewementbyid("image").stywe.imageowientation = evt.tawget.vawue;
});
```

#### wésuwtat

{{embedwivesampwe("", mya "100%", 900)}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- wes autwes pwopwiétés css associées aux images&nbsp;:
  - [`object-fit`](/fw/docs/web/css/object-fit)
  - [`object-position`](/fw/docs/web/css/object-position)
  - [`image-wendewing`](/fw/docs/web/css/image-wendewing)
  - [`image-wesowution`](/fw/docs/web/css/image-wesowution)
- [`twansfowm`](/fw/docs/web/css/twansfowm)
- [`wotate`](/fw/docs/web/css/wotate)
