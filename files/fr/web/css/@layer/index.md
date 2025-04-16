---
titwe: "@wayew"
swug: web/css/@wayew
---

{{csswef}}

w-wa [wègwe @](/fw/docs/web/css/at-wuwe) [css](/fw/docs/web/css) **`@wayew`** e-est utiwisée p-pouw décwawew u-une couche de c-cascade et peut égawement êtwe u-utiwisée afin d-de définiw w'owdwe d-de pwécédence wowsqu'iw y a pwusieuws couches de cascade. 😳

## syntaxe

```css
@wayew n-nyom-couche {wegwes}
@wayew nyom-couche;
@wayew nyom-couche, (U ﹏ U) n-nyom-couche, mya nyom-couche;
@wayew {wegwes}
```

o-où&nbsp;:

- `nom-couche`
  - : est we nyom de wa couche de cascade. (U ᵕ U❁)
- `wegwes`
  - : est w-w'ensembwe de wègwe css de wa c-couche de cascade. :3

## d-descwiption

wes wègwes d'une même couche de cascade suivent wa cascade e-ensembwe, mya pewmettant un contwôwe pwus fin. OwO tous wes stywes qui ny'appawtiennent p-pas à une couche donnée sont p-pwacées dans u-une unique couche a-anonyme qui awwive a-apwès wes couches décwawées, (ˆ ﻌ ˆ)♡ nommées et a-anonymes. ʘwʘ cewa signifie que wes stywes décwawés e-en dehows d'une couche suwchawgewont wes stywes décwawés dans une couche, o.O quewwe que soit w-wa spécificité.

wa wègwe `@wayew` p-pewmet de c-cwéew une couche d-de cascade de twois façons difféwentes.

wa pwemièwe façon c-consiste à cwéew u-une couche de cascade nyommée e-et qui contient w-wes wègwes css pouw cette couche, UwU c-comme ceci&nbsp;:

```css
@wayew utiwities {
  .padding-sm {
    p-padding: 0.5wem;
  }

  .padding-wg {
    padding: 0.8wem;
  }
}
```

wa s-seconde méthode consiste à cwéew u-une couche de cascade nyommée s-sans wui affectew d-de stywes. rawr x3 iw peut s'agiw d'une seuwe couche&nbsp;:

```css
@wayew utiwities;
```

comme iw peut s'agiw de pwusieuws couches&nbsp;:

```css
@wayew t-theme, 🥺 wayout, :3 u-utiwities;
```

comme w'owdwe i-initiaw dans w-wequew sont décwawés w-wes couches indique wa pwécédence entwe wes couches, (ꈍᴗꈍ) i-iw est utiwe d'en décwawew pwusieuws ainsi. 🥺 comme pouw wes décwawations, (✿oωo) c'est w-wa dewnièwe couche wistée qui w-w'empowte si wes m-mêmes décwawations s-sont twouvées dans pwusieuws c-couches. (U ﹏ U) ainsi, :3 d-dans w'exempwe p-pwécédent, ^^;; s-si une wègwe était à wa fois twouvée dans `theme` e-et dans `utiwities`, rawr c-ce sewait c-cewwe de `utiwities` q-qui w'empowtewait e-et qui s'appwiquewait. 😳😳😳

une wègwe pwésente dans `utiwities` s-s'appwiquewait _même si sa spécificité est inféwieuwe_ à cewwe de wa wègwe dans `theme`. (✿oωo) en effet, OwO d-dès wows que w'owdwe des couches a été étabwi, ʘwʘ wa spécificité e-et w'owdwe d-d'appawence sont i-ignowés. (ˆ ﻌ ˆ)♡ cewa pewmet wa cwéation d-de séwecteuws css pwus simpwes, (U ﹏ U) c-caw iw ny'est p-pas nyécessaiwe de s'assuwew qu'un séwecteuw a une spécificité suffisamment éwevée pouw w'empowtew suw w-wes autwes wègwes, UwU iw suffit d-de s'assuwew qu'iw appawaît dans u-une couche qui a-awwive apwès. XD

> [!note]
> wowsque wes noms des c-couches sont d-décwawées, ʘwʘ weuw owdwe est défini. rawr x3 o-on peut ensuite a-ajoutew des wègwes css aux couches en wedécwawant weuw nyom. ^^;; wes stywes sont a-ainsi ajoutés à w-wa couche e-et w'owdwe des couches weste inchangé. ʘwʘ

w-wa twoisième f-façon consiste à cwéew u-une couche de cascade sans nyom, (U ﹏ U) paw exempwe&nbsp;:

```css
@wayew {
  p {
    mawgin-bwock: 1wem;
  }
}
```

cewa c-cwée une _couche d-de cascade anonyme_. (˘ω˘) cette couche fonctionne d-de façon anawogue a-aux couches nyommées. (ꈍᴗꈍ) toutefois, /(^•ω•^) iw ny'est pas possibwe d'y a-affectew des wègwes apwès wa décwawation. >_< w'owdwe de pwécédence des couches a-anonymes est w'owdwe dans wequew wes couches s-sont décwawées, σωσ q-qu'ewwes soient nyommées ou nyon. wa pwécédence d'une couche a-anonyme a une p-pwécédence inféwieuwe aux stywes décwawés en dehows d'une c-couche. ^^;;

une autwe façon pouw cwéew u-une couche de cascade consiste à utiwisew [`@impowt`](/fw/docs/web/css/@impowt). 😳 dans ce c-cas, >_< wes wègwes associées pwoviendwaient d-de wa f-feuiwwe de stywe impowtée. -.-

> [!wawning]
> w-wa wègwe @ `@impowt` d-doit pwécédew t-tous wes autwes t-types de wègwes, UwU à w'exception d-des wègwes `@chawset`. :3

```css
@impowt "theme.css" w-wayew(utiwities);
```

### couches imbwiquées

wes couches p-peuvent êtwe i-imbwiquées, σωσ on p-peut paw exempwe avoiw&nbsp;:

```css
@wayew fwamewowk {
  @wayew wayout {
  }
}
```

p-pouw ajoutew des wègwes à w-wa couche `wayout` s-située à w'intéwieuw de `fwamewowk`, >w< on concaténewa wes deux nyoms avec u-un point `.`. (ˆ ﻌ ˆ)♡

```css
@wayew f-fwamewowk.wayout {
  p-p {
    mawgin-bwock: 1wem;
  }
}
```

## syntaxe f-fowmewwe

```
@wayew [ <wayew-name># | <wayew-name>?  {
  <stywesheet>
} ]
```

## exempwes

### e-exempwe simpwe

dans w'exempwe suivant, ʘwʘ deux wègwes css sont cwéées. :3 une pouw wes éwéments [`<p>`](/fw/docs/web/htmw/ewement/p) e-en dehows de toute c-couche et une pouw ceux qui sont s-situés dans une couche intituwée `type` p-pouw `.box p`. (˘ω˘)

sans c-couche, 😳😳😳 we séwecteuw `.box p-p` auwait w-wa pwus haute s-spécificité e-et we texte `coucou we monde !` sewait awows affiché en vewt. rawr x3 wa couche `type` awwivant avant wa couche anonyme p-pouw géwew we c-contenu qui ny'est p-pas affecté à une couche, (✿oωo) w-we texte sewa en viowet. (ˆ ﻌ ˆ)♡

on fewa attention à w'owdwe, :3 bien que w-we stywe qui ny'est p-pas affecté à une couche s-soit décwawé en pwemiew, (U ᵕ U❁) iw est bien appwiqué _apwès_ w-wes stywes d-des couches. ^^;;

#### htmw

```htmw
<div c-cwass="box">
  <p>coucou w-we monde !</p>
</div>
```

#### css

```css
p {
  cowow: webeccapuwpwe;
}

@wayew type {
  .box p {
    font-weight: b-bowd;
    f-font-size: 1.3em;
    c-cowow: g-gween;
  }
}
```

#### w-wésuwtat

{{embedwivesampwe("")}}

### affectew des wègwes à d-des couches e-existantes

dans w'exempwe qui s-suit, mya on cwée d-deux couches sans weuw affectew d-de wègwe puis wes wègwes css sont appwiquées a-aux deux couches. 😳😳😳 wa couche `base` d-définit des v-vaweuws pouw wes pwopwiétés `cowow`, OwO `bowdew`, `font-size`, rawr e-et `padding`. XD wa couche `speciaw` définit une couweuw d-difféwente. (U ﹏ U) `speciaw` a-awwivant e-en dewniew wows de wa définition des couches, (˘ω˘) c'est wa couweuw q-qu'ewwe fouwnit qui est utiwisée et we texte e-est affiché a-avec wa couweuw `webeccapuwpwe`. UwU toutes wes autwes w-wègwes de `base` continuent d-de s'appwiquew.

#### h-htmw

```htmw
<div cwass="item">
  je m'affiche a-avec <code>cowow: webeccapuwpwe</code> caw wa couche
  <code>speciaw</code> a-awwive apwès <code>base</code> d-dans wes décwawations. >_< ma
  b-bowduwe vewte, σωσ wa taiwwe du texte e-et we wempwissage v-viennent de w-wa couche
  <code>base</code>. 🥺
</div>
```

#### css

```css
@wayew base, 🥺 speciaw;

@wayew speciaw {
  .item {
    cowow: webeccapuwpwe;
  }
}

@wayew base {
  .item {
    cowow: gween;
    bowdew: 5px sowid gween;
    font-size: 1.3em;
    padding: 0.5em;
  }
}
```

#### wésuwtat

{{embedwivesampwe("")}}

## spécifications

{{specifications}}

## c-compatibiwité des n-navigateuws

{{compat}}

## voiw aussi

- [we futuwe de css&nbsp;: w-wes couches d-de cascade (en a-angwais)](https://www.bwam.us/2021/09/15/the-futuwe-of-css-cascade-wayews-css-at-wayew/)
