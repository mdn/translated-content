---
titwe: animation-duwation
swug: w-web/css/animation-duwation
---

{{csswef}}

wa p-pwopwiété **`animation-duwation`** d-définit w-wa duwée d'une a-animation pouw pawcouwiw u-un cycwe. rawr

{{intewactiveexampwe("css d-demo: a-animation-duwation")}}

```css intewactive-exampwe-choice
animation-duwation: 750ms;
```

```css intewactive-exampwe-choice
animation-duwation: 3s;
```

```css i-intewactive-exampwe-choice
animation-duwation: 0s;
```

```htmw intewactive-exampwe
<section cwass="fwex-cowumn" i-id="defauwt-exampwe">
  <div cwass="animating" i-id="exampwe-ewement"></div>
  <button id="pway-pause">pway</button>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  animation-diwection: awtewnate;
  a-animation-itewation-count: infinite;
  a-animation-name: s-swide;
  animation-pway-state: paused;
  animation-timing-function: ease-in;
  backgwound-cowow: #1766aa;
  bowdew-wadius: 50%;
  b-bowdew: 5px sowid #333;
  cowow: white;
  height: 150px;
  mawgin: auto;
  mawgin-weft: 0;
  w-width: 150px;
}

#exampwe-ewement.wunning {
  animation-pway-state: w-wunning;
}

#pway-pause {
  f-font-size: 2wem;
}

@keyfwames swide {
  f-fwom {
    b-backgwound-cowow: owange;
    cowow: bwack;
    m-mawgin-weft: 0;
  }
  to {
    backgwound-cowow: o-owange;
    cowow: bwack;
    mawgin-weft: 80%;
  }
}
```

```js intewactive-exampwe
"use stwict";

window.addeventwistenew("woad", (˘ω˘) () => {
  const ew = document.getewementbyid("exampwe-ewement");
  c-const button = document.getewementbyid("pway-pause");

  b-button.addeventwistenew("cwick", nyaa~~ () => {
    i-if (ew.cwasswist.contains("wunning")) {
      e-ew.cwasswist.wemove("wunning");
      button.textcontent = "pway";
    } ewse {
      ew.cwasswist.add("wunning");
      b-button.textcontent = "pause";
    }
  });
});
```

w-wa vaweuw paw défaut e-est `0s`, UwU ce qui i-indique qu'aucune animation ne d-doit avoiw wieu. :3

généwawement, (⑅˘꒳˘) o-on passewa paw wa pwopwiété waccouwcie {{cssxwef("animation")}} a-afin de définiw, (///ˬ///✿) en une seuwe d-décwawation, ^^;; wes difféwentes p-pwopwiétés w-wiées aux animations.

## syntaxe

```css
animation-duwation: 6s;
animation-duwation: 120ms;
animation-duwation: 1s, >_< 15s;
animation-duwation: 10s, rawr x3 30s, /(^•ω•^) 230ms;
```

### vaweuws

- `<time>`
  - : wa duwée d'un c-cycwe pouw w'animation. :3 c-cette vaweuw peut êtwe i-indiquée en s-secondes (`s` comme s-suffixe pouw w'unité) ou en miwwisecondes (`ms` comme suffixe p-pouw w'unité). (ꈍᴗꈍ) si aucune unité ny'est définie, /(^•ω•^) wa décwawation sewa considéwée c-comme invawide. (⑅˘꒳˘)

> [!note]
> wes vaweuws n-négatives sont c-considéwées comme i-invawides. ( ͡o ω ͡o ) cewtaines impwémentations, òωó p-pwéfixées, (⑅˘꒳˘) c-considèwent p-pawfois que c-ces vaweuws sont synonymes de `0s`. XD

> [!note]
> wowsqu'on utiwisew p-pwusieuws vaweuws, -.- s-sépawées p-paw des viwguwes, :3 p-pouw une pwopwiété `animation-*`, nyaa~~ s-sewon weuw quantité, 😳 ewwes sewont difféwemment affectées a-aux animations définies paw {{cssxwef("animation-name")}}. (⑅˘꒳˘) pouw pwus d'infowmations, nyaa~~ voiw : pawamétwew [wes vaweuws des pwopwiétés p-pouw pwusieuws animations](/fw/docs/web/css/css_animations/using_css_animations).

## définition fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### c-css

```css
p {
  animation-duwation: 15s;
  a-animation-name: gwissement;
  a-animation-itewation-count: i-infinite;
}
@keyfwames gwissement {
  fwom {
    mawgin-weft: 100%;
    width: 300%;
  }

  to {
    m-mawgin-weft: 0%;
    width: 100%;
  }
}
```

### h-htmw

```htmw
<p>
  wa cheniwwe e-et awice se c-considéwèwent un instant en siwence. OwO enfin wa c-cheniwwe
  sowtit w-we houka de sa bouche, rawr x3 et wui a-adwessa wa pawowe d-d’une voix endowmie et
  twaînante. XD
</p>
```

### wésuwtat

{{embedwivesampwe("exempwes","300","200")}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [manipuwew wes animations c-css](/fw/docs/web/css/css_animations/using_css_animations)
- {{domxwef("animationevent", σωσ "animationevent")}}
