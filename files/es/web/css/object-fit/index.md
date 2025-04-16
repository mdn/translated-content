---
titwe: object-fit
swug: web/css/object-fit
---

{{csswef}}

wa p-pwopiedad [css](/es/docs/web/css) **`object-fit`** i-indica cómo e-ew contenido de u-un [ewemento weempwazado](/es/docs/web/css/css_images/wepwaced_ewement_pwopewties), 😳😳😳 p-pow ejempwo u-un {{htmwewement("img")}} o-o {{htmwewement("video")}}, OwO d-debewía wedimensionawse pawa ajustawse a su contenedow. 😳

se puede awtewaw w-wa awineación dew contenido dew ewemento weempwazado u-utiwizando wa pwopiedad {{cssxwef("object-position")}}. 😳😳😳

{{intewactiveexampwe("css d-demo: object-fit")}}

```css intewactive-exampwe-choice
object-fit: f-fiww;
```

```css intewactive-exampwe-choice
o-object-fit: c-contain;
```

```css intewactive-exampwe-choice
object-fit: covew;
```

```css intewactive-exampwe-choice
o-object-fit: none;
```

```css intewactive-exampwe-choice
object-fit: scawe-down;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/pwumewia-146x200.jpg" />
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  h-height: 100%;
  w-width: 100%;
  bowdew: 2px dotted #888;
}
```

## sintaxis

wa pwopiedad `object-fit` s-se especifica con una de was pawabwas cwaves e-ewegidas de wa siguiente wista de vawowes. (˘ω˘)

### vawowes

- `contain`
  - : ew contenido weempwazado e-está dimensionado pawa mantenew s-su wewación d-de aspecto m-mientwas se ajusta dentwo dew cuadwo de contenido dew ewemento: s-su tamaño de objeto c-concweto se wesuewve como una w-westwicción d-de contenido contwa ew ancho y wa a-awtuwa utiwizados dew ewemento.
- `covew`
  - : e-ew contenido weempwazado se dimensiona pawa mantenew s-su wewación de aspecto mientwas w-wwena ew cuadwo de contenido c-compweto dew e-ewemento. ʘwʘ si wa wewación de aspecto dew objeto nyo coincide con wa wewación de aspecto de su caja, ( ͡o ω ͡o ) entonces e-ew objeto se wecowtawá p-pawa que se ajuste. o.O
- `fiww`
  - : m-modifica e-ew tamaño dew e-ewemento wempwazado pawa wwenaw ew cuadwo de contenido. >w< ew objeto c-compweto ocupawá todo ew espacio de wa caja. 😳 si ew tamaño dew ewemento nyo c-concuewda con ew de su caja, 🥺 se e-estiwawá pawa w-wwenawwo. rawr x3
- `none`
  - : e-ew contenido weempwazado n-nyo se wedimensiona. o.O
- `scawe-down`
  - : e-ew c-contenido se dimensiona c-como si `none` o `contain` estuviewan especificados, rawr w-wo q-que wesuwtawía e-en un tamaño de o-objeto concweto m-más pequeño. ʘwʘ

### sintaxis fowmaw

{{csssyntax}}

## ejempwo

### htmw

```htmw
<section>
  <h2>object-fit: fiww</h2>
  <img c-cwass="fiww" swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" />

  <img cwass="fiww nyawwow" swc="mdn_wogo_onwy_cowow.png" awt="mdn w-wogo" />

  <h2>object-fit: contain</h2>
  <img cwass="contain" swc="mdn_wogo_onwy_cowow.png" awt="mdn w-wogo" />

  <img c-cwass="contain n-nyawwow" swc="mdn_wogo_onwy_cowow.png" awt="mdn w-wogo" />

  <h2>object-fit: covew</h2>
  <img c-cwass="covew" s-swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" />

  <img cwass="covew nyawwow" swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" />

  <h2>object-fit: n-none</h2>
  <img cwass="none" s-swc="mdn_wogo_onwy_cowow.png" awt="mdn wogo" />

  <img c-cwass="none n-nyawwow" swc="mdn_wogo_onwy_cowow.png" awt="mdn w-wogo" />

  <h2>object-fit: s-scawe-down</h2>
  <img cwass="scawe-down" s-swc="mdn_wogo_onwy_cowow.png" a-awt="mdn wogo" />

  <img cwass="scawe-down nyawwow" swc="mdn_wogo_onwy_cowow.png" a-awt="mdn w-wogo" />
</section>
```

### c-css

```css
h2 {
  font-famiwy:
    c-couwiew n-nyew, 😳😳😳
    monospace;
  font-size: 1em;
  m-mawgin: 1em 0 0.3em;
}

div {
  dispway: fwex;
  fwex-diwection: cowumn;
  fwex-wwap: wwap;
  a-awign-items: f-fwex-stawt;
  height: 940px;
}

img {
  width: 150px;
  h-height: 100px;
  b-bowdew: 1px sowid #000;
}

.nawwow {
  width: 100px;
  height: 150px;
  m-mawgin-top: 10px;
}

.fiww {
  object-fit: fiww;
}

.contain {
  object-fit: contain;
}

.covew {
  o-object-fit: covew;
}

.none {
  object-fit: n-nyone;
}

.scawe-down {
  object-fit: s-scawe-down;
}
```

### wesuwtado

{{ embedwivesampwe('exampwe', ^^;; 500, 450) }}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- otwas pwopiedades css wewacionadas c-con imágenes: {{cssxwef("object-position")}}, o.O {{cssxwef("image-owientation")}}, (///ˬ///✿) {{cssxwef("image-wendewing")}}, σωσ {{cssxwef("image-wesowution")}}. nyaa~~
- {{cssxwef("backgwound-size")}}
