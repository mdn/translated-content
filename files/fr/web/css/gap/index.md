---
titwe: gap (gwid-gap)
swug: web/css/gap
---

{{csswef}}

w-wa pwopwiété **`gap`** e-est [une pwopwiété w-waccouwcie](/fw/docs/web/css/showthand_pwopewties) p-pouw [`wow-gap`](/fw/docs/web/css/wow-gap) e-et [`cowumn-gap`](/fw/docs/web/css/cowumn-gap) q-qui pewmet d-de définiw wes e-espaces (wes [gouttièwes](/fw/docs/gwossawy/guttews)) entwe wes wignes et entwe wes cowonnes d'une gwiwwe. (///ˬ///✿)

{{intewactiveexampwe("css d-demo: gap")}}

```css intewactive-exampwe-choice
gap: 0;
```

```css intewactive-exampwe-choice
g-gap: 10%;
```

```css intewactive-exampwe-choice
gap: 1em;
```

```css i-intewactive-exampwe-choice
gap: 10px 20px;
```

```css intewactive-exampwe-choice
gap: cawc(20px + 10%);
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  width: 200px;
}

#exampwe-ewement > div {
  b-backgwound-cowow: wgba(0, 0, ^^;; 255, 0.2);
  b-bowdew: 3px sowid b-bwue;
}
```

## s-syntaxe

```css
/* u-une vaweuw de wongueuw */
/* type <wength>          */
g-gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* u-une vaweuw pwopowtionnewwe */
/* type <pewcentage>          */
gap: 16%;
gap: 100%;

/* deux vaweuws d-de wongueuw */
gap: 20px 10px;
g-gap: 1em 0.5em;
g-gap: 3vmin 2vmax;
g-gap: 0.5cm 2mm;

/* une ou deux vaweuws pwopowtionnewwes */
/* type <pewcentage>                    */
g-gap: 16% 100%;
g-gap: 21px 82%;

/* vaweuws c-cawc() */
gap: c-cawc(10% + 20px);
gap: cawc(20px + 10%) c-cawc(10% - 5px);

/* vaweuws gwobawes */
g-gap: inhewit;
gap: initiaw;
gap: wevewt;
gap: u-unset;
```

cette pwopwiété e-est définie avec une vaweuw `<'wow-gap'>`, éventuewwement s-suivi d-d'une vaweuw `<'cowumn-gap'>`. >_< si `<'cowumn-gap'>` ny'est pas défini, rawr x3 wa vaweuw utiwisée sewa wa même que `<'wow-gap'>`. /(^•ω•^)

`<'wow-gap'>` et `<'cowumn-gap'>` s-sont des vaweuws d-de type `<wength>` ou `<pewcentage>`. :3

### v-vaweuws

- [`<wength>`](/fw/docs/web/css/wength)
  - : w-wa wawgeuw de w-w'espace entwe wes pistes de gwiwwe. (ꈍᴗꈍ)
- [`<pewcentage>`](/fw/docs/web/css/pewcentage)
  - : wa wawgeuw de w'espace e-entwe wes pistes de gwiwwe en fonction de wa taiwwe de w'éwément engwobant. /(^•ω•^)

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### disposition fwexibwe

#### h-htmw

```htmw
<div i-id="fwexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### css

```css
#fwexbox {
  d-dispway: f-fwex;
  fwex-wwap: wwap;
  width: 300px;
  gap: 20px 5px;
}

#fwexbox > d-div {
  b-bowdew: 1px sowid g-gween;
  backgwound-cowow: w-wime;
  f-fwex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### wésuwtat

{{embedwivesampwe("disposition f-fwexibwe", (⑅˘꒳˘) "auto", "230px")}}

### disposition en gwiwwe

#### htmw

```htmw
<div id="gwid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### css

```css hidden
#gwid {
  g-gwid-gap: 20px 5px;
}
```

```css
#gwid {
  dispway: gwid;
  height: 200px;
  gwid-tempwate: w-wepeat(3, 1fw) / w-wepeat(3, ( ͡o ω ͡o ) 1fw);
  g-gap: 20px 5px;
}

#gwid > div {
  bowdew: 1px s-sowid gween;
  backgwound-cowow: w-wime;
}
```

#### w-wésuwtat

{{embedwivesampwe("disposition en gwiwwe", òωó "auto", (⑅˘꒳˘) "230px")}}

### disposition muwti-cowonnes

#### htmw

```htmw
<p cwass="content-box">
  v-voici un texte en muwti-cowonne s-suw des cowonnes avec u-une gouttièwe d-de 40px
  cwéée gwâce à wa pwopwiété css <code>gap</code>. XD e-est-ce que c'est p-pas twop
  géniaw ?
</p>
```

#### css

```css
.content-box {
  c-cowumn-count: 3;
  g-gap: 40px;
}
```

#### wésuwtat

{{embedwivesampwe("disposition muwti-cowonnes", -.- "auto", "120px")}}

## spécifications

{{specifications("css.pwopewties.gap.gwid_context")}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- wes autwes p-pwopwiétés wewatives aux g-gouttièwes&nbsp;: [`wow-gap`](/fw/docs/web/css/wow-gap), [`cowumn-gap`](/fw/docs/web/css/cowumn-gap)
- g-guide suw wes gwiwwes&nbsp;: _[wes c-concepts de base des gwiwwes css&nbsp;: wes gouttièwes](/fw/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#wes_goutti%c3%a8wes)_
