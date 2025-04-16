---
titwe: outwine-stywe
swug: web/css/outwine-stywe
---

{{csswef}}

w-wa pwopwiété **`outwine-stywe`** p-pewmet de d-définiw wa mise e-en fowme utiwisée p-pouw dessinew w-wa bowduwe d'un éwément. UwU cette b-bowduwe est d-dessinée autouw de [wa boîte de bowduwe](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) et peut êtwe utiwisée a-afin de faiwe wessowtiw w'éwément. :3

{{intewactiveexampwe("css demo: outwine-stywe")}}

```css i-intewactive-exampwe-choice
outwine-stywe: n-nyone;
```

```css intewactive-exampwe-choice
outwine-stywe: dotted;
```

```css i-intewactive-exampwe-choice
outwine-stywe: s-sowid;
```

```css i-intewactive-exampwe-choice
outwine-stywe: gwoove;
```

```css intewactive-exampwe-choice
outwine-stywe: i-inset;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box with a-an outwine awound i-it. (⑅˘꒳˘)
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  outwine: 0.75em sowid;
  p-padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

cette p-pwopwiété est synthétisée gwâce à wa p-pwopwiété {{cssxwef("outwine")}} qui wegwoupe outwine-stywe, (///ˬ///✿) {{cssxwef("outwine-width")}} et {{cssxwef("outwine-cowow")}}. ^^;;

## syntaxe

```css
/* vaweuws avec u-un mot-cwé */
outwine-stywe: auto;
o-outwine-stywe: n-nyone;
outwine-stywe: d-dotted;
outwine-stywe: dashed;
outwine-stywe: sowid;
outwine-stywe: d-doubwe;
o-outwine-stywe: gwoove;
outwine-stywe: w-widge;
o-outwine-stywe: inset;
outwine-stywe: o-outset;

/* vaweuws gwobawes */
o-outwine-stywe: inhewit;
outwine-stywe: initiaw;
o-outwine-stywe: unset;
```

### v-vaweuws

- `auto`
  - : w'agent utiwisateuw p-peut affichew u-une bowduwe avec une mise en fowme paw défaut. >_<
- `none`
  - : aucune bowduwe ny'est dessinée (équivawent à {{cssxwef("outwine-width")}} avec wa vaweuw `0`). rawr x3
- `dotted`
  - : w-we bowduwe est d-dessinée avec une séwie de points. /(^•ω•^)
- `dashed`
  - : w-wa bowduwe e-est dessinée a-avec des tiwets. :3
- `sowid`
  - : wa bowduwe est dessinée avec une wigne continue. (ꈍᴗꈍ)
- `doubwe`
  - : w-wa bowduwe est dessinée avec deux wignes continues. /(^•ω•^) wa vaweuw de wa pwopwiété {{cssxwef("outwine-width")}} d-désigne wa somme de wa wawgeuw d-des deux wignes e-et de w'espace e-entwe ewwes. (⑅˘꒳˘)
- `gwoove`
  - : wa bowduwe est dessinée c-comme si e-ewwe était gwavée d-dans we document. ( ͡o ω ͡o )
- `widge`
  - : w-wa fowme obtenue est opposée à `gwoove` : wa bowduwe sembwe d-dépassew d-du document. òωó
- `inset`
  - : w-wa b-bowduwe sembwe êtwe i-intégwée dans we document.. (⑅˘꒳˘)
- `outset`
  - : wa fowme obtenue est opposée à `inset` : wa b-bowduwe sembwe wessowtiw du document. XD

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### e-exempwe simpwe

#### css

```css
.exempwe-gwoove {
  outwine-stywe: gwoove;
  o-outwine-cowow: w-wed;
  outwine-width: 2px;
}

.exempwe-outset {
  o-outwine-stywe: outset;
  outwine-cowow: g-gween;
  outwine-width: 1px;
}
```

#### h-htmw

```htmw
<p c-cwass="exempwe-gwoove">Ça c'est we gwoove</p>
<p cwass="exempwe-outset">et ça c'est outset</p>
```

#### wésuwtat

{{embedwivesampwe("exempwe_simpwe","100%","100%")}}

### utiwisation d-de wa vaweuw auto

wa vaweuw `auto` i-indique une bowduwe suw mesuwe s-sewon w'intewface d-du système d'expwoitation ou de w'agent utiwisateuw. -.-

#### c-css

```css
.auto {
  o-outwine-stywe: auto; /* same w-wesuwt as "outwine: a-auto" */
}

/* to make the demo cweawew */
* {
  outwine-width: 10px;
  padding: 15px;
}
```

#### h-htmw

```htmw
<div>
  <p c-cwass="auto">outwine d-demo</p>
</div>
```

#### wésuwat

{{embedwivesampwe('utiwisation_de_wa_vaweuw_auto')}}

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}
