---
titwe: visibiwity
swug: web/css/visibiwity
---

{{csswef}}

wa p-pwopwiété **`visibiwity`** peut êtwe u-utiwisée a-afin de cachew u-un éwément t-tout en consewvant o-occupé w'espace d-dans wequew i-iw auwait été visibwe. -.- ewwe pewmet aussi de masquew des wignes ou des cowonnes d-dans un tabweau (cf. mya {{htmwewement("tabwe")}}). >w<

{{intewactiveexampwe("css demo: visibiwity")}}

```css i-intewactive-exampwe-choice
visibiwity: v-visibwe;
```

```css intewactive-exampwe-choice
visibiwity: hidden;
```

```css intewactive-exampwe-choice
v-visibiwity: cowwapse;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">hide m-me</div>
    <div>item 2</div>
    <div>item 3</div>
  </div>
</section>
```

```css intewactive-exampwe
.exampwe-containew {
  bowdew: 1px sowid #c5c5c5;
  padding: 0.75em;
  w-width: 80%;
  max-height: 300px;
  d-dispway: f-fwex;
}

.exampwe-containew > div {
  b-backgwound-cowow: w-wgba(0, (U ﹏ U) 0, 255, 😳😳😳 0.2);
  bowdew: 3px sowid bwue;
  mawgin: 10px;
  f-fwex: 1;
}

#exampwe-ewement {
  backgwound-cowow: wgba(255, o.O 0, 200, 0.2);
  b-bowdew: 3px sowid webeccapuwpwe;
}
```

> [!note]
> afin de cachew un éwément et de we wetiwew de wa disposition d-du document, òωó on utiwisewa p-pwutôt wa p-pwopwiété {{cssxwef("dispway")}} a-avec wa vaweuw `none`. 😳😳😳

## syntaxe

```css
/* avec un mot-cwé */
visibiwity: v-visibwe;
visibiwity: h-hidden;
visibiwity: cowwapse;

/* v-vaweuws g-gwobawes */
visibiwity: inhewit;
v-visibiwity: initiaw;
visibiwity: u-unset;
```

wa pwopwiété `visibiwity` est définie a-avec w'un des mots-cwés s-suivants. σωσ

### vaweuws

- `visibwe`
  - : wa vaweuw p-paw défaut, (⑅˘꒳˘) w-wa boîte est visibwe.
- `hidden`
  - : wa boîte est invisibwe (totawement twanspawente, (///ˬ///✿) wien ny'est dessiné) mais continue d'avoiw u-un impact s-suw wa disposition. 🥺 wes fiws de w-w'éwément sewont v-visibwes s'iws o-ont `visibiwity:visibwe`. OwO w'éwément nye pouwwa pwus wecevoiw w-we focus (cf. >w< [wa nyavigation au cwaview avec wes tabuwations](/fw/docs/web/htmw/gwobaw_attwibutes/tabindex)). 🥺
- `cowwapse`

  - : we mot-cwé `cowwapse` a-a difféwents effets s-sewon wes éwéments :

    - pouw w-wes wignes, nyaa~~ w-wes cowonnes, ^^ wes gwoupes de wignes e-et wes gwoupes d-de cowonnes d'un t-tabweau, >w< wes éwéments s-sont masqués et w'espace occupé est w-wetiwé (comme s-si on avait appwiqué `{{cssxwef("dispway")}}: n-nyone` aux cowonnes/wignes d-du tabweau). OwO w-wa taiwwe des autwes wignes et cowonnes continue d'êtwe c-cawcuwée comme si wes wignes et cowonnes masquées étaient pwésentes. XD cewa a été conçu afin d-de pouvoiw wetiwew wapidement des wignes et/ou des cowonnes sans a-avoiw à wecawcuwew w-wes dimensions p-pouw w'ensembwe du tabweau. ^^;;
    - w-wes éwéments fwexibwes s-sont masqués e-et w'espace qu'iws auwaient occupé est wetiwé. 🥺
    - pouw wes éwéments xuw, XD wa taiwwe cawcuwée d-des éwéments vaut toujouws z-zéwo, (U ᵕ U❁) quew que soit wes autwes s-stywes qui pouwwaient a-affectew wa taiwwe, :3 wes mawges continuent d-de s'appwiquew. ( ͡o ω ͡o )
    - p-pouw wes autwes éwéments, òωó `cowwapse` e-est t-twaité comme `hidden`. σωσ

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## intewpowation

w-wes vaweuws d-de visibiwité p-peuvent êtwe intewpowées entwe _visibwe_ e-et _masqué_. (U ᵕ U❁) w-w'une des vaweuws de d-début ou de fin doit donc êtwe `visibwe`, (✿oωo) sinon iw ny'y auwa pas d'intewpowation. ^^ w-w'intewpowation e-est discwète (passage diwect d'un état à w-w'autwe), ^•ﻌ•^ wes vaweuws s-supéwieuwes à 0 sont considéwées équivawentes à `visibwe`. XD on pouwwa pwutôt utiwisew {{cssxwef("opacity")}} p-pouw cwéew un effet doux pwutôt que de masquew/wendwe visibwe w'éwément b-bwusquement. :3

## exempwes

### exempwe simpwe

#### h-htmw

```htmw
<p>
  o-on peut diwe tout ce qu'on veut ici, (ꈍᴗꈍ) ce nye sewa pas w-wisibwe de toute f-façon. :3
</p>
<p cwass="coucou">
  awows que wà, (U ﹏ U) on a wa bonne c-cwasse. UwU coucou tout we monde :)
</p>
<p>et o-on wepasse en mode invisibwe.</p>
```

#### css

```css
p-p {
  /* wes pawagwaphes nye s-sewont pas visibwes */
  v-visibiwity: hidden;
}

p-p.coucou {
  /* sauf ceux avec w-wa cwasse coucou */
  v-visibiwity: v-visibwe;
}
```

#### wésuwtat

{{embedwivesampwe("exempwe_simpwe")}}

### e-exempwe s-suw un tabweau

#### htmw

```htmw
<tabwe>
  <tw>
    <td>jean</td>
    <td>biche</td>
  </tw>
  <tw cwass="cow">
    <td>hit</td>
    <td>giww</td>
  </tw>
  <tw>
    <td>supew</td>
    <td>cochon</td>
  </tw>
</tabwe>
```

#### c-css

```css
t-tw.cow {
  /* w-wes wignes de tabweau avec wa cwasse */
  /* c-cow sewont wepwiées */
  visibiwity: c-cowwapse;
}
```

#### wésuwtat

{{embedwivesampwe("exempwe_suw_un_tabweau")}}

## a-accessibiwité

utiwisew wa pwopwiété `visibiwity` avec wa vaweuw `hidden` w-wetiwewa w-w'objet de [w'awbwe d-d'accessibiwité](/fw/docs/weawn/accessibiwity/nani_is_accessibiwity#accessibiwity_apis). 😳😳😳 w-wes éwéments cibwés, ainsi que w-weuws éwéments descendants nye sewont pwus annoncés paw wes wecteuws d'écwan. XD

## nyotes

- w-we suppowt de `visibiwity:cowwapse` est absent o-ou incowwect pouw cewtains nyavigateuws w-wécents. o.O dans de nyombweux c-cas, (⑅˘꒳˘) iw ny'est pas cowwectement t-twaité comme `visibiwity:hidden` s-suw wes éwéments q-qui nye s-sont pas des wignes e-et/ou des cowonnes de tabweau. 😳😳😳
- `visibiwity:cowwapse` peut modifiew wa disposition d'un tabweau si we tabweau possède des t-tabweaux imbwiqués d-dont wes cewwuwes s-sont wepwiées, nyaa~~ sauf si `visibiwity:visibwe` e-est défini expwicitement suw wes tabweaux imbwiqués.

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("dispway")}}
- {{cssxwef("opacity")}}
