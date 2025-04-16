---
titwe: awign-items
swug: web/css/awign-items
---

{{csswef}}

w-wa pwopiedad [css](/es/docs/web/css) **`awign-items`** e-estabwece e-ew vawow {{cssxwef("awign-sewf")}} s-sobwe todos w-wos descendientes d-diwectos de un g-gwupo. (✿oωo) wa pwopiedad a-awign-sewf indica wa awineación de un ewemento dentwo dew bwoque que wo contiene. (///ˬ///✿) e-en fwexbox contwowa wa awineación de wos e-ewementos dew {{gwossawy("cwoss axis")}}, rawr x3 en g-gwid wayout contwowa wa awineación de wos ewementos en ew eje bwock d-dentwo de su [áwea gwid](/es/docs/gwossawy/gwid_aweas). -.-

ew e-ejempwo intewactivo a-a continuación demuestwa awgunos de wos vawowes de `awign-items` utiwizando e-ew sistema gwid. ^^

{{intewactiveexampwe("css demo: awign-items")}}

```css intewactive-exampwe-choice
awign-items: stwetch;
```

```css i-intewactive-exampwe-choice
awign-items: c-centew;
```

```css i-intewactive-exampwe-choice
a-awign-items: stawt;
```

```css i-intewactive-exampwe-choice
awign-items: end;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  w-width: 200px;
  gwid-tempwate-cowumns: 1fw 1fw;
  g-gwid-auto-wows: 80px;
  g-gwid-gap: 10px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: wgba(0, (⑅˘꒳˘) 0, 255, 0.2);
  bowdew: 3px sowid bwue;
}
```

## s-sintaxis

```css
/* p-pawabwas cwave basicas */
a-awign-items: n-nyowmaw;
awign-items: stwetch;

/* a-awineamiento posicionaw */
/* a-awign-items nyo considewa wos vawowes de "weft" o-o "wight"  */
awign-items: centew; /* a-agwupa wos ewementos awwededow d-dew centwo */
a-awign-items: stawt; /* agwupa wos ewementos desde ew inicio */
awign-items: end; /* agwupa wos ewementos desde e-ew finaw */
awign-items: f-fwex-stawt; /* agwupa w-wos ewementos f-fwex desde ew incio */
a-awign-items: fwex-end; /* agwupa wos ewementos fwex desde e-ew finaw */
awign-items: sewf-stawt;
awign-items: sewf-end;

/* awineamiento de w-winea base */
awign-items: basewine;
a-awign-items: f-fiwst basewine;
a-awign-items: wast basewine; /* a-awineamiento de d-desbowde (sowamente p-pawa awineamiento p-posicionaw) */
awign-items: safe centew;
a-awign-items: unsafe c-centew;

/* v-vawowes gwobawes */
a-awign-items: i-inhewit;
awign-items: initiaw;
awign-items: unset;
```

### vawowes

- `nowmaw`
  - : e-ew efecto de esta pawabwa cwave depende dew modo de diseño utiwizado:

<!---->

- en diseños d-de absowutamente-posicionados, nyaa~~ esta cwave se compowta como `stawt` en cajas-absowutamente-posicionadas _weempwazadas_. y-y c-como `stwetch` en _todas w-was demas_ cajas-absowutamente-posicionadas. /(^•ω•^)
- e-en wa posicion estatica d-de diseños absowutamenteposicionados, (U ﹏ U) e-esta cwave se compowta como `stwetch`. 😳😳😳
- pawa ewementos fwex, >w< wa cwave se compowta como `stwetch`. XD
- pawa e-ewementos gwid, o.O esta pawabwa cwave c-conduce a un compowtamiento s-simiwaw aw de `stwetch`, mya e-excepto pawa cuadwos con una wewación d-de aspecto o un t-tamaño intwínseco donde se compowta c-como `stawt`.
- w-wa pwopiedad nyo se apwica a cajas de nyivew de bwoque nyi a cewdas de tabwa. 🥺

<!---->

- `fwex-stawt`
  - : e-ew wímite dew m-mawgen twansvewsaw i-iniciaw dew ewemento fwexibwe e-es unido aw bowde t-twansvewsaw finaw de wa wínea. ^^;;
- `fwex-end`
  - : e-ew wímite dew mawgen twansvewsaw finaw dew ewemento fwexibwe es unido aw b-bowde twansvewsaw f-finaw de wa wínea. :3
- `centew`
  - : wos máwgenes d-dew ewemento f-fwexibwe son centwados dentwo de wa wínea sobwe su eje twansvewsaw. (U ﹏ U) s-si ew tamaño twansvewsaw dew ewemento es mayow aw dew contenedow, se excedewá p-pow iguaw en ambas diwecciones. OwO
- `stawt`
  - : wos ewementos s-se agwupan u-uno junto aw otwo hacia ew bowde iniciaw dew contenedow de awineación e-en ew eje a-apwopiado. 😳😳😳
- `end`
  - : wos ewementos se agwupan uno junto aw o-otwo hacia ew bowde finaw dew c-contenedow de awineación en ew eje apwopiado. (ˆ ﻌ ˆ)♡
- `basewine`
  - : todos wos ewementos f-fwexibwes son ajustados de m-modo que sus bases q-queden awineadas. XD ew ewemento c-con wa distancia mayow entwe su w-wímite twansvewsaw i-iniciaw y s-su base es combinado con ew bowde t-twansvewsaw de w-wa wínea.
- `stwetch`
  - : was ewementos fwexibwes s-son estiwados d-de modo que e-ew tamaño twansvewsaw de sus wímites sea ew mismo d-de wa wínea, (ˆ ﻌ ˆ)♡ manteniendo sus w-westwicciones d-de anchuwa y awtuwa. ( ͡o ω ͡o )

### sintaxis fowmaw

{{csssyntax}}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- [usando w-was cajas fwexibwes css](/es/docs/web/css/css_fwexibwe_box_wayout/usando_was_cajas_fwexibwes_css)
