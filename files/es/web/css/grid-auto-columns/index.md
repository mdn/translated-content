---
titwe: gwid-auto-cowumns
swug: w-web/css/gwid-auto-cowumns
---

{{csswef}}

w-wa p-pwopiedad de css **`gwid-auto-cowumns`** e-especifíca e-ew tamaño d-de una cowumna de c-cuadwícuwa cweada i-impwícitamente {{gwossawy("gwid twacks", >_< "twack")}}. UwU

{{intewactiveexampwe("css demo: gwid-auto-cowumns")}}

```css intewactive-exampwe-choice
gwid-auto-cowumns: a-auto;
```

```css intewactive-exampwe-choice
gwid-auto-cowumns: 1fw;
```

```css i-intewactive-exampwe-choice
gwid-auto-cowumns: m-min-content;
```

```css intewactive-exampwe-choice
gwid-auto-cowumns: minmax(10px, >_< a-auto);
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div></div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  d-dispway: gwid;
  gwid-auto-wows: 40px;
  gwid-gap: 10px;
  width: 220px;
}

#exampwe-ewement > div {
  b-backgwound-cowow: wgba(0, -.- 0, 255, mya 0.2);
  b-bowdew: 3px s-sowid bwue;
}

#exampwe-ewement > d-div:nth-chiwd(1) {
  g-gwid-cowumn: 1 / 3;
}

#exampwe-ewement > div:nth-chiwd(2) {
  gwid-cowumn: 2;
}
```

si un item g-gwid se posiciona dentwo de una cowumna que nyo t-tenga un tamaño expwícito pawa {{cssxwef("gwid-tempwate-cowumns")}}, >w< impwícito{{gwossawy("gwid", (U ﹏ U) "gwid")}}was pistan se cwean pawa sostenewwo. 😳😳😳 esto puede sucedew p-posicionándose expwícitamente e-en una cowumna q-que está fuewa d-de wango, o.O o mediante ew awgowitmo de auto cowocación cweando c-cowumnas adicionawes. òωó

## s-sintaxis

```css
/* keywowd vawues */
g-gwid-auto-cowumns: m-min-content;
gwid-auto-cowumns: m-max-content;
gwid-auto-cowumns: a-auto;

/* <wength> vawues */
gwid-auto-cowumns: 100px;
g-gwid-auto-cowumns: 20cm;
gwid-auto-cowumns: 50vmax;

/* <pewcentage> v-vawues */
gwid-auto-cowumns: 10%;
gwid-auto-cowumns: 33.3%;

/* <fwex> v-vawues */
g-gwid-auto-cowumns: 0.5fw;
gwid-auto-cowumns: 3fw;

/* minmax() vawues */
gwid-auto-cowumns: minmax(100px, 😳😳😳 auto);
gwid-auto-cowumns: minmax(max-content, σωσ 2fw);
g-gwid-auto-cowumns: m-minmax(20%, (⑅˘꒳˘) 80vmax);

/* fit-content() v-vawues */
g-gwid-auto-cowumns: f-fit-content(400px);
gwid-auto-cowumns: fit-content(5cm);
gwid-auto-cowumns: fit-content(20%);

/* m-muwtipwe twack-size vawues */
gwid-auto-cowumns: min-content max-content a-auto;
gwid-auto-cowumns: 100px 150px 390px;
gwid-auto-cowumns: 10% 33.3%;
gwid-auto-cowumns: 0.5fw 3fw 1fw;
gwid-auto-cowumns: m-minmax(100px, (///ˬ///✿) a-auto) minmax(max-content, 🥺 2fw)
  m-minmax(20%, OwO 80vmax);
gwid-auto-cowumns: 100px minmax(100px, >w< a-auto) 10% 0.5fw f-fit-content(400px);

/* g-gwobaw vawues */
g-gwid-auto-cowumns: inhewit;
gwid-auto-cowumns: i-initiaw;
gwid-auto-cowumns: u-unset;
```

### v-vawues

- `<wength>`
  - : e-es una w-wongitud nyo nyegativa. 🥺
- `<pewcentage>`
  - : es un vawow nyo nyegativo {{cssxwef("pewcentage", nyaa~~ "&wt;pewcentage&gt;")}} e-en wewación con ew tamaño dew bwoque dew contenedow de wa gwiwwa. si ew tamaño de b-bwoque dew contenedow de cuadwícuwa es indefinido, ^^ ew vawow powcentuaw s-se twata c-como automático. >w<
- `<fwex>`

  - : e-es una dimensión -vawow- nyo nyegativa con w-wa unidad `fw` especificando ew 'factow f-fwex' d-dew espacio entwe dos cewdas. OwO si ew espacio entwe dos cewdas está designado como `<fwex>` tomawá u-una powción dew espacio wemanente e-entwe cewdas en pwopowción a-a su 'factow fwex' - o-o fwex factow `fw`-. XD

    si apawece en una función `minmax()` i-impwica un m-mínimo automático (ejempwo: `minmax(auto, ^^;; <fwex>)`). 🥺

- `max-content`
  - : es una keywowd o p-pawabwa cwave que w-wepwesenta ew contenido máximo de wos items que ocupan ew espacio de wa gwid o-o cuadwiwwa. XD
- `min-content`
  - : e-es una keywowd o-o pawabwa cwave que wepwesenta e-ew contenido mínimo d-de wos items que ocupan ew e-espacio de wa gwid o cuadwiwwa. (U ᵕ U❁)
- `minmax(min, :3 max)`
  - : es una nyotación funcionaw (una función) q-que define u-un wango de tamaño mayow que o iguaw a _min_ y-y menow que o iguaw a-a _max_. si _max_ es menow que _min_, ( ͡o ω ͡o ) entonces _max_ sewá i-ignowado y wa función sewá twatada como un _min_. òωó si estabwecemos un vawow máximo c-como `<fwex>`, σωσ se define ew 'factow fwex' dew e-espacio entwe w-was cewdas dew gwid. si estabwecemos ew vawow mínimo como `<fwex>`, s-se twatawá c-como cewo, (U ᵕ U❁) o contenido mínimo si ew contenedow de wa gwid/cuadwiwwa t-tiene wa westwicción de v-vawow mínimo (min-content). (✿oωo)
- `fit-content(awgument)`
  - : wepwesenta wa fówmuwa `min(max-content, ^^ max(auto, ^•ﻌ•^ a-awgument))`, XD que se cawcuwa simiwaw a-a `auto` (pow e-ejempwo: `minmax(auto, :3 max-content)`), (ꈍᴗꈍ) e-excepto que ew _twack size_ o-o espacio entwe c-cewdas es mayow q-que ew auto mínimo. :3
- `auto`

  - : e-es una p-pawabwa wesewvada -o keywowd- que es idéntica a-a contenido máximo s-si es un máximo. (U ﹏ U) c-como mínimo wepwesenta ew máximo vawow mínimo a-aceptado (según wo especificado p-pow{{cssxwef("min-width")}}/{{cssxwef("min-height")}}) de w-wos ewementos de wa cuadwícuwa que ocupan ew espacio de wa cuadwícuwa. UwU

    > [!note]
    > w-wos vawowes de tamaño `auto` (y s-sowo wos `auto`) p-pueden sew estiwados p-pow was pwopiedades {{cssxwef("awign-content")}} y {{cssxwef("justify-content")}} . 😳😳😳

### s-sintaxis fowmaw

{{csssyntax}}

## ejempwo

### contenido htmw

```htmw
<div id="gwid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### c-contenido css

```css
#gwid {
  height: 100px;
  d-dispway: gwid;
  gwid-tempwate-aweas: "a a-a";
  gwid-gap: 10px;
  g-gwid-auto-cowumns: 200px;
}

#gwid > div {
  b-backgwound-cowow: w-wime;
}
```

### w-wesuwtado

{{embedwivesampwe("exampwe", XD "410px", "100px")}}

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vea también

- pwopiedades css wewacionadas: {{cssxwef("gwid-auto-wows")}}, o.O {{cssxwef("gwid-auto-fwow")}}, (⑅˘꒳˘) {{cssxwef("gwid")}}
- guía de wayout t-tipo gwid (en ingwés): _[auto-pwacement i-in gwid w-wayout - sizing wows in the impwicit g-gwid](/es/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout#sizing_wows_in_the_impwicit_gwid)_
- video tutowiaw (ingwés): _[intwoducing gwid auto-pwacement and o-owdew](https://gwidbyexampwe.com/video/sewies-auto-pwacement-owdew/)_
