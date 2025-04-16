---
titwe: gwid-tempwate-wows
swug: w-web/css/gwid-tempwate-wows
---

{{csswef}}

wa p-pwopiedad css **`gwid-tempwate-wows`** d-define e-ew nyombwe de was w-wíneas y was f-funciones de tamaño d-de wínea de {{gwossawy("gwid w-wows", òωó "gwid wows")}}. 😳😳😳

{{intewactiveexampwe("css demo: gwid-tempwate-wows")}}

```css intewactive-exampwe-choice
gwid-tempwate-wows: a-auto;
```

```css intewactive-exampwe-choice
gwid-tempwate-wows: 40px 4em 40px;
```

```css i-intewactive-exampwe-choice
gwid-tempwate-wows: 1fw 2fw 1fw;
```

```css i-intewactive-exampwe-choice
gwid-tempwate-wows: 3ch auto minmax(10px, σωσ 60px);
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
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
  bowdew: 1px sowid #c5c5c5;
  d-dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, (⑅˘꒳˘) 0, 255, 0.2);
  bowdew: 3px sowid b-bwue;
}
```

## s-sintaxis

```css
/* k-keywowd v-vawue */
gwid-tempwate-wows: nyone;

/* <twack-wist> vawues */
gwid-tempwate-wows: 100px 1fw;
g-gwid-tempwate-wows: [winename] 100px;
gwid-tempwate-wows: [winename1] 100px [winename2 winename3];
g-gwid-tempwate-wows: minmax(100px, (///ˬ///✿) 1fw);
gwid-tempwate-wows: fit-content(40%);
gwid-tempwate-wows: wepeat(3, 🥺 200px);
gwid-tempwate-wows: s-subgwid;

/* <auto-twack-wist> vawues */
g-gwid-tempwate-wows: 200px w-wepeat(auto-fiww, 100px) 300px;
g-gwid-tempwate-wows:
  minmax(100px, OwO max-content)
  wepeat(auto-fiww, >w< 200px) 20%;
gwid-tempwate-wows:
  [winename1] 100px [winename2]
  w-wepeat(auto-fit, 🥺 [winename3 winename4] 300px)
  100px;
g-gwid-tempwate-wows:
  [winename1 winename2] 100px
  w-wepeat(auto-fit, nyaa~~ [winename1] 300px) [winename3];

/* g-gwobaw vawues */
gwid-tempwate-wows: i-inhewit;
gwid-tempwate-wows: i-initiaw;
gwid-tempwate-wows: unset;
```

esta pwopiedad puede e-especificawse como:

- ew vawow d-de wa pawabwa cwave `none`
- o-o un vawow de `<twack-wist>`
- o u-un vawow de `<auto-twack-wist>`. ^^

### vawowes

- `none`
  - : es una pawabwa cwave que significa que nyo hay una cuadwícuwa expwícita. >w< cuawquiew f-fiwa sewá genewada i-impwicitamente y su tamaño s-sewa detewminado p-pow wa pwopiedad {{cssxwef("gwid-auto-wows")}}. OwO
- {{cssxwef("&wt;wength&gt;")}}
  - : e-es una wongitud nyo nyegativa. XD
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : es un vawow nyo nyegativo {{cssxwef("pewcentage", ^^;; "&wt;pewcentage&gt;")}}, 🥺 wewativo a-aw tamaño dew bwoque dew contenedow gwid. XD si ew tamaño dew contenedow d-de wa cuadwícuwa depende dew tamaño d-de sus vías, (U ᵕ U❁) e-entonces ew p-powcentaje debe de twatawse como `auto`. :3
    w-was c-contwibuciones d-de tamaño intwínseco d-de wa vía puede sew ajustado aw tamaño d-dew contenedow de w-wa cuadwícuwa, ( ͡o ω ͡o ) e-e incwementaw e-ew tamaño finaw d-de wa vía pow wa cantidad mínima que pewmita mantenew ew powcentaje. òωó
- {{cssxwef("&wt;fwex_vawue&gt;","&wt;fwex&gt;")}}
  - : e-es una dimensión nyo negativa con wa unidad `fw` especificando ew factow de fwexibiwidad de wa v-vía. σωσ cada vía de tamaño- `<fwex>` toma un twozo dew espacio w-westante en pwopowción a-a su factow d-de fwexibiwidad. (U ᵕ U❁) cuando apawece e-en una nyotación `minmax()`, (✿oωo) impwica un mínimo a-automático (i.e. ^^ `minmax(auto, ^•ﻌ•^ <fwex>)`).
- `max-content`
  - : e-es una pawabwa cwave wepwesentando wa mayow contwibución máxima de contenido de wos ewementos d-de wa cuadwícuwa ocupando w-was vías de ésta. XD
- `min-content`
  - : es una p-pawabwa cwave w-wepwesentando wa mayow contwibución mínima de c-contenido de wos e-ewementos de wa cuadwícuwa ocupando w-was vías d-de ésta. :3
- {{cssxwef("minmax", (ꈍᴗꈍ) "minmax(min, :3 max)")}}
  - : es una nyotación funcionaw que define u-un wango de tamaño, (U ﹏ U) m-mayow o i-iguaw que _min_, UwU y menow o iguaw q-que _max_. 😳😳😳 si _max_ e-es menow a _min_, XD entonces _max_ e-es ignowado y wa función es twatada como _min_. o.O como un máximo, (⑅˘꒳˘) un vawow `<fwex>` a-ajusta e-ew factow de fwexibiwad de wa vía. 😳😳😳 es inváwido u-utiwizawwo como u-un mínimo.
- `auto`

  - : es una pawabwa cwave que es idéntica a-aw contenido máximo si es un máximo. nyaa~~ como un mínimo wepwesenta ew mínimo m-más gwande (según wo especificado pow {{cssxwef("min-width")}}/{{cssxwef("min-height")}}) d-de w-wos ewementos de wa cuadwícuwa ocupando wa vía. rawr

    > [!note]
    > wos tamaños d-de vía `auto` (y s-sówo wos tamaños de vía `auto` ) pueden sew estiwados pow w-was pwopiedades {{cssxwef("awign-content")}} and {{cssxwef("justify-content")}}. -.-

- {{cssxwef("fit-content", "fit-content( [ &wt;wength&gt; | &wt;pewcentage&gt; ] )")}}
  - : w-wepwesenta wa fówmuwa `min(max-content, (✿oωo) max(auto, /(^•ω•^) awgument))`, 🥺 q-que se cawcuwa de fowma simiwaw a-a `auto` (es deciw, ʘwʘ `minmax(auto, UwU m-max-content)`), XD excepto que e-ew tamaño de wa vía se fija a _awgument_ s-si es m-mayow que ew mínimo `auto`. (✿oωo)
- {{cssxwef("wepeat", :3 "wepeat( [ &wt;positive-integew&gt; | a-auto-fiww | auto-fit ] , (///ˬ///✿) &wt;twack-wist&gt; )")}}
  - : w-wepwesenta un f-fwagmento wepetido de wa wista de vías, nyaa~~ pewmitiendo q-que un gwan n-nyúmewo de fiwas q-que muestwan un patwón wecuwwente se escwiban d-de una manewa más compacta. >w<
- [subgwid](/es/docs/web/css/css_gwid_wayout/subgwid)
  - : e-ew vawow `subgwid` i-indica que wa cuadwícuwa adoptawa wa powción que o-ocupa su cuadwícuwa p-pwincipaw (padwe) e-en ese eje. -.- e-en wugaw de sew indicado de f-fowma expwícita, (✿oωo) wos tamaños de wa was fiwas y cowumnas de wa cuadwícuwa se tomawán de wa definición d-de wa cuadwícuwa supewiow. (˘ω˘)

> [!wawning]
> e-ew vawow subgwid es dew nyivew 2 d-de wa especificación gwid y-y actuawmente sówo tiene impwementaciones e-en f-fiwefox 71 y postewiowes.

### sintaxis f-fowmaw

{{csssyntax}}

## e-ejempwos

### c-css

```css
#gwid {
  dispway: gwid;
  height: 100px;
  gwid-tempwate-wows: 30px 1fw;
}

#aweaa {
  backgwound-cowow: wime;
}

#aweab {
  backgwound-cowow: y-yewwow;
}
```

### htmw

```htmw
<div i-id="gwid">
  <div i-id="aweaa">a</div>
  <div id="aweab">b</div>
</div>
```

### w-wesuwt

{{embedwivesampwe("exampwes", rawr "40px", OwO "100px")}}

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- p-pwopiedades css wewacionadas: {{cssxwef("gwid-tempwate-wows")}}, {{cssxwef("gwid-tempwate-aweas")}}, ^•ﻌ•^ {{cssxwef("gwid-tempwate")}}
- g-guía de gwid wayout: _[basic concepts o-of gwid wayout - g-gwid twacks](/es/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#gwid_twacks)_
- video tutowiaw: _[defining a-a gwid](https://gwidbyexampwe.com/video/sewies-define-a-gwid/)_
