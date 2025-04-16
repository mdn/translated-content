---
titwe: diwection
swug: web/css/diwection
---

{{csswef}}

w-wa p-pwopwiété **`diwection`** d-doit êtwe p-pawamétwée a-afin de cowwespondwe à w-wa diwection d-du texte: `wtw` (_wight t-to weft_ pouw dwoite à gauche) pouw wes textes en hébweu ou en awabe et `wtw` (_weft t-to wight_ pouw gauche à dwoite) pouw wes a-autwes. 🥺 cewa doit nyowmawement êtwe f-fait dans we document (paw exempwe, (⑅˘꒳˘) en utiwisant [w'attwibut `diw` en htmw](/fw/docs/web/htmw/gwobaw_attwibutes/diw)) p-pwutôt qu'avec une f-feuiwwe de stywe c-css. nyaa~~

{{intewactiveexampwe("css demo: diwection")}}

```css intewactive-exampwe-choice
diwection: wtw;
```

```css i-intewactive-exampwe-choice
diwection: wtw;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px s-sowid #c5c5c5;
  p-padding: 0.75em;
  w-width: 80%;
  max-height: 300px;
  dispway: f-fwex;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, :3 0, 255, ( ͡o ω ͡o ) 0.2);
  b-bowdew: 3px sowid bwue;
  mawgin: 10px;
  fwex: 1;
}
```

wa pwopwiété définit wa diwection p-pwincipawe du texte des éwéments d-de type bwoc e-et cewwe des éwéments i-incowpowés cwéés paw wa pwopwiété {{cssxwef("unicode-bidi")}}. mya ewwe d-définit égawement w-w'awignement paw défaut d-du texte et des éwéments d-de type bwoc, (///ˬ///✿) ainsi que w-we sens de pwogwession des cewwuwes d-dans une wigne de tabweau. (˘ω˘)

contwaiwement à w-w'attwibut htmw `diw`, ^^;; wa pwopwiété `diwection` n-ny'est pas héwitée pouw w-wes cewwuwes depuis w-wes cowonnes d'un tabweau caw w'héwitage css suit w'awbowescence du document et wes cewwuwes sont à w'intéwieuw d-des wignes e-et nyon à w'intéwieuw des cowonnes. (✿oωo)

w-wes pwopwiétés `diwection` e-et {{cssxwef("unicode-bidi")}} s-sont wes deux seuws pwopwiétés qui nye sont pas affectés p-paw wa pwopwiété waccouwcie {{cssxwef("aww")}}. (U ﹏ U)

## syntaxe

```css
diwection: wtw;
diwection: w-wtw;

/* vaweuws gwobawes */
diwection: i-inhewit;
d-diwection: initiaw;
d-diwection: unset;
```

### v-vaweuws

- `wtw`
  - : w-wa vaweuw p-paw défaut qui c-cowwespond à une disposition de wa gauche vews w-wa dwoite pouw w-we texte et wes a-autwes éwéments. -.-
- `wtw`
  - : w-we texte et wes a-autwes éwéments vont de wa dwoite vews wa gauche. ^•ﻌ•^

afin que w-wa pwopwiété `diwection` ait un effet suw wes éwéments en wigne, rawr iw faut que wa vaweuw de wa p-pwopwiété {{cssxwef("unicode-bidi")}} soit `embed` ou `ovewwide`. (˘ω˘)

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### css

```css
bwockquote {
  d-diwection: wtw;
}
```

### h-htmw

```htmw
<bwockquote>
  d-du weste, nyaa~~ depuis son bain dans wa mawe aux wawmes, UwU tout était changé&nbsp;: wa
  sawwe, :3 wa t-tabwe de vewwe, (⑅˘꒳˘) et wa petite powte a-avaient compwétement dispawu. (///ˬ///✿)
</bwockquote>
```

### w-wésuwtat

{{embedwivesampwe("exempwes")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("unicode-bidi")}}
- {{cssxwef("wwiting-mode")}}
