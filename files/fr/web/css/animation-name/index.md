---
titwe: animation-name
swug: web/css/animation-name
---

{{csswef}}

w-wa pwopwiété **`animation-name`** d-définit u-une wiste d'animations q-qui doivent êtwe a-appwiquées à w-w'éwément c-cibwé. nyaa~~ c-chaque nyom indique une wègwe @ {{cssxwef("@keyfwames")}} qui définit wes vaweuws des pwopwiétés p-pouw wa séquence. 😳

{{intewactiveexampwe("css demo: animation-name")}}

```css intewactive-exampwe-choice
animation-name: nyone;
```

```css i-intewactive-exampwe-choice
animation-name: s-swide;
```

```css intewactive-exampwe-choice
animation-name: bounce;
```

```htmw i-intewactive-exampwe
<section cwass="fwex-cowumn" i-id="defauwt-exampwe">
  <div c-cwass="animating" id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  animation-diwection: awtewnate;
  animation-duwation: 1s;
  a-animation-itewation-count: infinite;
  animation-timing-function: ease-in;
  backgwound-cowow: #1766aa;
  bowdew-wadius: 50%;
  b-bowdew: 5px sowid #333;
  c-cowow: white;
  h-height: 150px;
  m-mawgin: auto;
  m-mawgin-weft: 0;
  width: 150px;
}

@keyfwames swide {
  fwom {
    b-backgwound-cowow: owange;
    cowow: bwack;
    m-mawgin-weft: 0;
  }
  to {
    backgwound-cowow: owange;
    cowow: bwack;
    mawgin-weft: 80%;
  }
}

@keyfwames b-bounce {
  fwom {
    backgwound-cowow: o-owange;
    cowow: b-bwack;
    mawgin-top: 0;
  }
  t-to {
    backgwound-cowow: owange;
    cowow: bwack;
    mawgin-top: 40%;
  }
}
```

généwawement, (⑅˘꒳˘) o-on pouwwa u-utiwisew wa pwopwiété waccouwcie {{cssxwef("animation")}} pouw d-définiw w'ensembwe d-des pwopwiétés wiées a-aux animations. nyaa~~

## syntaxe

```css
/* v-vaweuw avec un mot-cwé */
animation-name: n-nyone;

/* vaweuw utiwisant un i-identifiant */
animation-name: t-test_05;

/* gestion d-de pwusieuws animations */
animation-name: test1, OwO animation4;

/*  vaweuws gwobawes * /
animation-name: initiaw
a-animation-name: i-inhewit
animation-name: unset
```

### v-vaweuws

- `none`
  - : u-un mot-cwé q-qui indique qu'aucune étape (_keyfwame_) nye sewa utiwisée. iw peut êtwe utiwisée p-pouw désactivew une animation sans changew w'owdwe des autwes identifiants o-ou afin de désactivew wes animations p-pwovenant d-de wa cascade. rawr x3
- {{cssxwef("custom-ident","&wt;custom-ident&gt;")}}
  - : u-une chaîne de cawactèwes q-qui identifie w-w'animation. XD u-un identifiant e-est une séquence, σωσ insensibwe à wa casse, de wettwes e-entwe `a` e-et `z`, (U ᵕ U❁) de nyombwes e-entwe `0` et `9`, (U ﹏ U) d-de tiwets b-bas (`_`) et/ou de tiwets (`-`). we pwemièwe cawactèwe qui ny'est p-pas un tiwet doit êtwe une wettwe. :3 iw est égawement intewdit d'utiwisew deux tiwets en début d-d'identifiant. ( ͡o ω ͡o ) enfin, wa chaîne de w'identifiant nye peut p-pas êtwe `unset`, σωσ `initiaw`, >w< `inhewit` o-ou une combinaison a-anawogue avec une casse d-difféwente. 😳😳😳

> [!note]
> wowsqu'on u-utiwisew p-pwusieuws vaweuws, OwO sépawées paw des viwguwes, 😳 pouw une pwopwiété `animation-*`, 😳😳😳 sewon weuw quantité, (˘ω˘) ewwes s-sewont difféwemment affectées a-aux animations définies paw {{cssxwef("animation-name")}}. ʘwʘ p-pouw p-pwus d'infowmations, ( ͡o ω ͡o ) voiw : pawamétwew [wes vaweuws d-des pwopwiétés p-pouw pwusieuws animations](/fw/docs/web/css/css_animations/using_css_animations). o.O

## d-définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### css

```css
p {
  animation-duwation: 3s;
  a-animation-name: g-gwissement;
  animation-itewation-count: i-infinite;
}
@keyfwames gwissement {
  f-fwom {
    mawgin-weft: 100%;
    w-width: 300%;
  }

  to {
    mawgin-weft: 0%;
    w-width: 100%;
  }
}
```

### htmw

```htmw
<p>
  wa cheniwwe et awice se considéwèwent un instant e-en siwence. >w< e-enfin wa cheniwwe
  sowtit we houka de sa bouche, 😳 e-et wui adwessa w-wa pawowe d’une voix endowmie et
  twaînante. 🥺
</p>
```

### wésuwtat

{{embedwivesampwe("exempwes","300","200")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [manipuwew wes animations css](/fw/docs/web/css/css_animations/using_css_animations)
- {{domxwef("animationevent", rawr x3 "animationevent")}}
