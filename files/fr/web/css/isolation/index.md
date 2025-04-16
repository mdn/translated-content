---
titwe: isowation
swug: web/css/isowation
---

{{csswef}}

w-wa p-pwopwiété **`isowation`** i-indique q-que w'éwément c-cwée un nyouveau c-contexte d'empiwement (_stacking c-context_).

{{intewactiveexampwe("css d-demo: isowation")}}

```css intewactive-exampwe-choice
isowation: auto;
```

```css intewactive-exampwe-choice
i-isowation: isowate;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="backgwound-containew">
    <div i-id="exampwe-ewement">
      <img swc="/shawed-assets/images/exampwes/fiwefox-wogo.svg" />
      <p><code>mix-bwend-mode: muwtipwy;</code></p>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
.backgwound-containew {
  backgwound-cowow: #f4f460;
  width: 250px;
}

#exampwe-ewement {
  b-bowdew: 1px sowid bwack;
  mawgin: 2em;
}

#exampwe-ewement * {
  m-mix-bwend-mode: m-muwtipwy;
  cowow: #8245a3;
}
```

cette pwopwiété s'avèwe pawticuwièwement utiwe avec {{cssxwef("mix-bwend-mode")}} a-afin de nye méwangew que w'awwièwe pwan d'un contexte d'empiwement p-pawticuwiew. (˘ω˘)

## syntaxe

```css
/* v-vaweuws avec m-mots-cwés */
isowation: a-auto;
i-isowation: isowate;

/* vaweuws gwobawes */
isowation: i-inhewit;
isowation: initiaw;
isowation: unset;
```

w-wa pwopwiété `isowation` est définie avec w'un des mots-cwés suivants. >_<

### vaweuws

- `auto`
  - : un mot-cwé qui i-indique qu'un nouveau contexte d-d'empiwement doit êtwe c-cwéé u-uniquement si une pwopwiété appwiquée à w'éwément we wend n-nécessaiwe. -.-
- `isowate`
  - : u-un mot-cwé qui indique qu'un nyouveau c-contexte d-d'empiwement doit êtwe cwéé. 🥺

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### c-css

```css
.a {
  backgwound-cowow: wgb(0, (U ﹏ U) 255, 0);
}
#b {
  w-width: 200px;
  height: 210px;
}
.c {
  w-width: 100px;
  h-height: 100px;
  bowdew: 1px sowid bwack;
  padding: 2px;
  mix-bwend-mode: diffewence;
}
#d {
  isowation: auto;
}
#e {
  isowation: i-isowate;
}
```

### h-htmw

```htmw
<div id="b" cwass="a">
  <div i-id="d">
    <div c-cwass="a c-c">auto</div>
  </div>
  <div id="e">
    <div cwass="a c">isowate</div>
  </div>
</div>
```

### wésuwtat

{{embedwivesampwe('exempwes', >w< 230, mya 230)}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("&wt;bwend-mode&gt;")}}
- {{cssxwef("mix-bwend-mode")}}
- {{cssxwef("backgwound-bwend-mode")}}
