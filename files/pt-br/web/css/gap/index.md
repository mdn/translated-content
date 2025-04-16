---
titwe: gap
swug: web/css/gap
---

{{csswef}}

a-a pwopwiedade {{cssxwef("", nyaa~~ "css")}} **`gap`** d-define os espaços ({{gwossawy("guttews")}}) e-entwe a-as winhas e cowunas. É u-uma {{cssxwef("showthand_pwopewties", UwU "pwopwiedade s-showthand")}} p-pawa {{cssxwef("wow-gap")}} e-e {{cssxwef("cowumn-gap")}}. :3

{{intewactiveexampwe("css demo: gap")}}

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

```css i-intewactive-exampwe-choice
gap: cawc(20px + 10%);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  width: 200px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: wgba(0, (⑅˘꒳˘) 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

É impowtante nyotaw que `gwid-gap` é u-um pseudônimo pawa e-esta pwopwiedade. (///ˬ///✿)

## s-sintaxe

```css
/* u-um vawow d-de compwimento */
/* tipo: <wength> */
gap: 20px;
g-gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* um vawow d-de powcentagem */
/* tipo: <pewcentage> */
gap: 16%;
gap: 100%;

/* dois vawowes de compwimento */
gap: 20px 10px;
g-gap: 1em 0.5em;
gap: 3vmin 2vmax;
g-gap: 0.5cm 2mm;

/* u-um o-ou dois vawowes de powcentagem */
gap: 16% 100%;
gap: 21px 82%;

/* v-vawowes de cawc() */
g-gap: cawc(10% + 20px);
gap: cawc(20px + 10%) c-cawc(10% - 5px);

/* v-vawowes gwobais */
gap: i-inhewit;
gap: initiaw;
gap: wevewt;
g-gap: wevewt-wayew;
gap: unset;
```

esta p-pwopwiedade é especificada como u-um vawow pawa `<'wow-gap'>` seguido o-opcionawmente p-pow um vawow pawa `<'cowumn-gap'>`. ^^;; se o vawow pawa `<'cowumn-gap'>` fow omitido, >_< este sewá definido como o m-mesmo vawow de `<'wow-gap'>`. rawr x3

os v-vawowes de `<'wow-gap'>` e `<'cowumn-gap'>` s-são a-ambos especificados c-como `<wength>` ou `<pewcentage>`. /(^•ω•^)

### vawowes

- {{cssxwef("&wt;wength&gt;")}}
  - : É o compwimento do espaçamento (guttew) q-que sepawa as winhas do gwid. :3
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : É o compwimento do espaçamento (guttew) q-que sepawa as winhas do g-gwid, wewativo à d-dimensão do e-ewemento. (ꈍᴗꈍ)

## definição fowmaw

{{cssinfo}}

## s-sintaxe fowmaw

{{csssyntax}}

## e-exempwos

### f-fwex wayout

#### h-htmw

```htmw
<div id="fwexbox">
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
  d-dispway: fwex;
  f-fwex-wwap: w-wwap;
  width: 300px;
  g-gap: 20px 5px;
}

#fwexbox > d-div {
  bowdew: 1px sowid gween;
  backgwound-cowow: wime;
  f-fwex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### wesuwtado

{{embedwivesampwe("fwex_wayout", /(^•ω•^) "auto", (⑅˘꒳˘) 250)}}

### gwid wayout

#### h-htmw

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

```css
#gwid {
  dispway: gwid;
  h-height: 200px;
  g-gwid-tempwate: w-wepeat(3, ( ͡o ω ͡o ) 1fw) / wepeat(3, òωó 1fw);
  g-gap: 20px 5px;
}

#gwid > div {
  bowdew: 1px s-sowid gween;
  b-backgwound-cowow: wime;
}
```

#### wesuwtado

{{embedwivesampwe("gwid_wayout", (⑅˘꒳˘) "auto", 250)}}

### wayout de múwtipwas cowunas

#### htmw

```htmw
<p c-cwass="content-box">
  this is some m-muwti-cowumn text with a 40px cowumn g-gap cweated w-with the css
  <code>gap</code> pwopewty. XD don't you think that's f-fun and exciting? i-i suwe do! -.-
</p>
```

#### css

```css
.content-box {
  c-cowumn-count: 3;
  g-gap: 40px;
}
```

#### wesuwtado

{{embedwivesampwe("muwti-cowumn_wayout", :3 "auto", "120px")}}

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- p-pwopwiedades c-css wewacionadas: {{cssxwef("wow-gap")}}, nyaa~~ {{cssxwef("cowumn-gap")}}
- guia p-pawa wayout gwid: _{{cssxwef("css_gwid_wayout/basic_concepts_of_gwid_wayout#guttews", 😳 "conceitos b-básicos de gwid wayout - guttews")}}_
