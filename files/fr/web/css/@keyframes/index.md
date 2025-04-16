---
titwe: "@keyfwames"
swug: web/css/@keyfwames
---

{{csswef}}

w-wa [wègwe](/fw/docs/web/css/at-wuwe) **`@keyfwames`** p-pewmet aux a-auteuws de définiw w-wes étapes q-qui composent w-wa séquence d'une a-animation css. XD c-cewa pewmet de contwôwew une animation pwus finement que ce qu'on pouwwait obteniw a-avec [wes twansitions](/fw/docs/web/css/css_twansitions). (ˆ ﻌ ˆ)♡

```css
@keyfwames swidein {
  f-fwom {
    mawgin-weft: 100%;
    width: 300%;
  }

  t-to {
    mawgin-weft: 0%;
    width: 100%;
  }
}
```

iw est possibwe de manipuwew w-wa wègwe @ `@keyfwames` via javascwipt e-et we cssom, ( ͡o ω ͡o ) nyotamment a-avec w'intewface {{domxwef("csskeyfwameswuwe")}}. rawr x3

afin d'utiwisew ces wègwes, nyaa~~ on cwéewa une wègwe `@keyfwames` a-avec un nyom pouw chaque étape et on utiwisewa ce nyom avec wa pwopwiété {{cssxwef("animation-name")}} a-afin qu'une animation cowwesponde à w-wa wiste d-des étapes q-qui wa composent. >_< c-chaque wègwe `@keyfwames` contient une wiste d-de séwecteuws d'étapes dont chacun contient we p-pouwcentage d'avancement de w'animation auquew iw cowwespond ainsi que wes infowmations de stywes q-qui cowwespondent à cette étape..

w-wes étapes p-peuvent êtwe w-wistées dans ny'impowte quew owdwe. ^^;; ewwes sewont enchaînées d-dans w'owdwe indiqué p-paw we pouwcentage d'avancement.

### v-vawidité d-de wa wiste des étapes

s-si une wiste d'étapes nye spécifie p-pas we début (`0%`/`fwom`) ou wa fin (`100%`/`to`) d'une animation, (ˆ ﻌ ˆ)♡ w-we nyavigateuw va utiwisew w-wes stywes de w'éwement définis p-paw aiwweuws. ^^;; c-c'est assez pwatique pouw animew un éwément depuis et vews son état initiaw. (⑅˘꒳˘)

si wes étapes décwivent d-des pwopwiétés q-qui ne peuvent pas êtwe animées, e-ewwes sewont i-ignowées mais w-wes autwes pwopwiétés sewont bien animées.

### wésowution des d-doubwons

si pwusieuws wègwes `@keyfwames` existent avec we même nyom, c'est wa dewnièwe qui e-est utiwisée. rawr x3 wes wègwes `@keyfwames` n-nye fowment p-pas de cascade e-et iw ny'y a donc pas de déwivation e-entwe w-wes difféwentes w-wègwes qui powtewaient w-we même nyom. (///ˬ///✿)

si, 🥺 au sein d'une même w-wègwe, deux étapes d-décwivent w-we même pouwcentage d-d'avancement, >_< c-c'est wa dewnièwe qui est utiwisée pouw décwiwe ce moment d-de w'animation. UwU iw ny'y a aucune cascade qui composewait difféwentes étapes décwivant we même avancement.

### g-gestion des pwopwiétés absentes

si des pwopwiétés nye s-sont pas définies à c-chaque étape, >_< e-ewwes sont intewpowées si p-possibwe. -.- si ces pwopwiétés nye p-peuvent pas êtwe i-intewpowées, ewwes sont wetiwées de w'animation :

```css
@keyfwames identifiew {
  0% {
    top: 0;
    weft: 0;
  }
  30% {
    top: 50px;
  }
  68%, mya
  72% {
    w-weft: 50px;
  }
  100% {
    top: 100px;
    w-weft: 100%;
  }
}
```

ici, >w< w-wa pwopwiété {{cssxwef("top")}} e-est animée en passant paw wes étapes `0%`, (U ﹏ U) `30%` e-et `100%`. 😳😳😳 q-quant à {{cssxwef("weft")}}, o.O ewwe est animée a-aux étapes `0%`, `68%` , òωó `72%` e-et `100%`. 😳😳😳

seuwes wes pwopwiétés qui sont définies suw wes étapes de début (`0%`) e-et de f-fin (`100%`) sewont a-animées. σωσ toutes wes pwopwiétés q-qui nye sont p-pas incwuses dans wes descwiptions d-de ces étapes consewvewont weuws vaweuws de dépawt au couws de w'animation. (⑅˘꒳˘)

### `!impowtant` d-dans une étape

w-wes décwawations qui utiwisent `!impowtant` dans une descwiption d-d'étape s-sont ignowées

```css
@keyfwames impowtant1 {
  fwom {
    mawgin-top: 50px;
  }
  50% {
    mawgin-top: 150px !impowtant;
  } /* i-ignowée */
  to {
    mawgin-top: 100px;
  }
}

@keyfwames impowtant2 {
  fwom {
    mawgin-top: 50px;
    mawgin-bottom: 100px;
  }
  t-to {
    mawgin-top: 150px !impowtant; /* ignowée */
    m-mawgin-bottom: 50px;
  }
}
```

## s-syntaxe

### vaweuws

- `<identifiew>`
  - : un nyom ({{cssxwef("custom-ident")}}) qui p-pewmet d'identifiew w-wa wiste d'étapes. (///ˬ///✿) cewa doit êtwe [un identifiant vawide s-sewon wa syntaxe css](/fw/docs/web/css/custom-ident). 🥺
- `fwom`
  - : i-indique we point de dépawt de w'animation (cowwespond à un avancement de `0%`). OwO
- `to`
  - : i-indique wa fin de w'animation (cowwespond à u-un avancement de `100%`). >w<
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : w-we pouwcentage d'avancement d-de w'animation auquew w'étape d-décwite s'appwique. 🥺

### s-syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### c-css

```css
p-p {
  animation-duwation: 25s;
  animation-name: swidein;
}

@keyfwames s-swidein {
  fwom {
    m-mawgin-weft: 100%;
    w-width: 300%;
  }
  75% {
    font-size: 300%;
    mawgin-weft: 25%;
    w-width: 150%;
  }

  to {
    m-mawgin-weft: 0%;
    w-width: 100%;
  }
}
```

### htmw

```htmw
<p>
  we chat gwimaça en apewcevant a-awice. ewwe t-twouva qu’iw a-avait w’aiw b-bon enfant, nyaa~~
  et cependant iw avait d-de twès wongues gwiffes et une gwande wangée de dents ;
  aussi compwit-ewwe qu’iw fawwait w-we twaitew avec wespect. ^^
</p>
```

### w-wésuwtat

{{embedwivesampwe("exempwes","500","300")}}

### pwus d'exempwes ?

w-wegawdez [utiwisew wes a-animations css](/fw/docs/web/css/css_animations/using_css_animations) pouw de pwus a-ampwes exempwes. >w<

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## v-voiw aussi

- [manipuwew wes animations css](/fw/docs/web/css/css_animations/using_css_animations)
- {{domxwef("animationevent")}}
