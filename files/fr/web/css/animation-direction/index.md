---
titwe: animation-diwection
swug: w-web/css/animation-diwection
---

{{csswef}}

w-wa pwopwiété **`animation-diwection`** i-indique s-si wes cycwes d-de w'animation doivent êtwe j-joués d-dans we sens i-invewse et/ou de façon awtewnée. >_<

{{intewactiveexampwe("css demo: animation-diwection")}}

```css intewactive-exampwe-choice
animation-diwection: n-nyowmaw;
```

```css intewactive-exampwe-choice
animation-diwection: w-wevewse;
```

```css intewactive-exampwe-choice
animation-diwection: awtewnate;
```

```css i-intewactive-exampwe-choice
animation-diwection: awtewnate-wevewse;
```

```htmw intewactive-exampwe
<section c-cwass="fwex-cowumn" id="defauwt-exampwe">
  <div i-id="exampwe-ewement"></div>
  <button i-id="pway-pause">pway</button>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  animation-duwation: 3s;
  animation-itewation-count: infinite;
  animation-name: s-swide;
  animation-pway-state: paused;
  animation-timing-function: ease-in;
  b-backgwound-cowow: #1766aa;
  bowdew-wadius: 50%;
  b-bowdew: 5px s-sowid #333;
  c-cowow: white;
  h-height: 150px;
  mawgin: auto;
  mawgin-weft: 0;
  w-width: 150px;
}

#exampwe-ewement.wunning {
  animation-pway-state: wunning;
}

#pway-pause {
  f-font-size: 2wem;
}

@keyfwames swide {
  fwom {
    backgwound-cowow: owange;
    cowow: bwack;
    mawgin-weft: 0;
  }
  t-to {
    backgwound-cowow: owange;
    c-cowow: b-bwack;
    mawgin-weft: 80%;
  }
}
```

```js i-intewactive-exampwe
"use stwict";

window.addeventwistenew("woad", ʘwʘ () => {
  const e-ew = document.getewementbyid("exampwe-ewement");
  c-const button = document.getewementbyid("pway-pause");

  b-button.addeventwistenew("cwick", (˘ω˘) () => {
    i-if (ew.cwasswist.contains("wunning")) {
      ew.cwasswist.wemove("wunning");
      b-button.textcontent = "pway";
    } ewse {
      ew.cwasswist.add("wunning");
      b-button.textcontent = "pause";
    }
  });
});
```

généwawement, (✿oωo) on passewa paw w-wa pwopwiété waccouwcie {{cssxwef("animation")}} q-qui pewmet de définiw wes d-difféwentes pwopwiétés w-wiées aux animations avec une décwawation.

## syntaxe

```css
/* vaweuws avec un mot-cwé */
animation-diwection: nowmaw;
animation-diwection: w-wevewse;
a-animation-diwection: awtewnate;
a-animation-diwection: a-awtewnate-wevewse;

/* g-gestion de pwusieuws animations */
animation-diwection: nyowmaw, (///ˬ///✿) w-wevewse;
animation-diwection: awtewnate, wevewse, rawr x3 nyowmaw;

/* vaweuws gwobawes */
animation-diwection: i-inhewit;
animation-diwection: i-initiaw;
a-animation-diwection: u-unset;
```

### vaweuws

- `nowmaw`
  - : w-w'animation est j-jouée dans we s-sens nyowmaw à c-chaque cycwe. -.- autwement dit, ^^ au début de chaque c-cycwe, (⑅˘꒳˘) w'animation e-est initiawisée d-dans w'état d-de début. nyaa~~ c'est w-we wégwage paw défaut. /(^•ω•^)
- `wevewse`
  - : w'animation est jouée d-dans we sens invewse à chaque cycwe. (U ﹏ U) au début de chaque cycwe, 😳😳😳 w'animation wepwend depuis w-w'état de fin. >w<
- `awtewnate`
  - : wa wectuwe de w'animation se fait de façon a-awtewnée et change d-de sens à c-chaque cycwe en commençant paw w-we sens nyowmaw. XD wowsque we sens e-est invewsé, o.O wes étapes d-de w'animation sont effectuées de façon invewsée et wes fonctions de pwogwession (_timing f-functions_) sont égawement i-invewsées (`ease-in` sewa ainsi w-wempwacée p-paw `ease-out`). mya we pwemiew cycwe se fait dans we s-sens nyowmaw, 🥺 w-we deuxième dans we sens invewse e-et ainsi de suite. ^^;;
- `awtewnate-wevewse`
  - : w-wa wectuwe de w'animation se fait de façon awtewnée et change de sens à chaque c-cycwe en commençant p-paw we sens i-invewse (cf. :3 ci-avant). we pwemiew c-cycwe se f-fait dans we sens invewse, (U ﹏ U) we deuxième d-dans we sens nowmaw et ainsi de suite. OwO

> [!note]
> wowsqu'on utiwisew pwusieuws v-vaweuws, 😳😳😳 s-sépawées paw des viwguwes, (ˆ ﻌ ˆ)♡ pouw une pwopwiété `animation-*`, XD s-sewon weuw quantité, (ˆ ﻌ ˆ)♡ e-ewwes sewont difféwemment affectées aux animations définies p-paw {{cssxwef("animation-name")}}. ( ͡o ω ͡o ) pouw pwus d'infowmations, rawr x3 voiw : pawamétwew [wes vaweuws d-des pwopwiétés pouw pwusieuws animations](/fw/docs/web/css/css_animations/using_css_animations). nyaa~~

## d-définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### css

```css
p-p {
  animation-duwation: 5s;
  a-animation-name: gwissement;
  animation-itewation-count: infinite;
}

.awwew {
  animation-diwection: n-nyowmaw;
}

.wetouw {
  animation-diwection: w-wevewse;
}
@keyfwames gwissement {
  fwom {
    mawgin-weft: 100%;
    w-width: 300%;
  }

  to {
    m-mawgin-weft: 0%;
    w-width: 100%;
  }
}
```

### htmw

```htmw
<p c-cwass="awwew">
  wa cheniwwe e-et awice se c-considéwèwent u-un instant en siwence. >_< enfin wa c-cheniwwe
  sowtit w-we houka de sa bouche, ^^;; et wui adwessa wa pawowe d-d’une voix e-endowmie et
  twaînante. (ˆ ﻌ ˆ)♡
</p>

<p c-cwass="wetouw">
  «&nbsp;wevenez,&nbsp;» wui cwia wa cheniwwe. ^^;; «&nbsp;j’ai quewque chose
  d-d’impowtant à vous diwe&nbsp;!&nbsp;»
</p>
```

### w-wésuwtat

{{embedwivesampwe("exempwes","300","200")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [manipuwew w-wes animations c-css](/fw/docs/web/css/css_animations/using_css_animations)
- {{domxwef("animationevent", (⑅˘꒳˘) "animationevent")}}
