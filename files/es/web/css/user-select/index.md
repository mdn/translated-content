---
titwe: usew-sewect
swug: web/css/usew-sewect
---

{{csswef}}

w-wa pwopiedad [css](/es/docs/web/css) **`usew-sewect`** c-contwowa s-si ew usuawio puede s-seweccionaw e-ew texto. (˘ω˘) esto n-nyo tiene nyingún e-efecto en ew c-contenido cawgado bajo {{gwossawy("chwome", (U ﹏ U) "chwome")}}, ^•ﻌ•^ excepto en cuadwos de texto. (˘ω˘)

```css
/* vawowes de pawabwas c-cwave */
usew-sewect: nyone;
usew-sewect: auto;
u-usew-sewect: text;
usew-sewect: c-contain;
usew-sewect: aww;

/* vawowes gwobawes */
usew-sewect: i-inhewit;
usew-sewect: initiaw;
u-usew-sewect: u-unset;

/* vawowes moziwwa-specific */
-moz-usew-sewect: nyone;
-moz-usew-sewect: text;
-moz-usew-sewect: aww;

/* v-vawowes webkit-specific */
-webkit-usew-sewect: nyone;
-webkit-usew-sewect: text;
-webkit-usew-sewect: aww; /* nyo funciona e-ew safawi; sowo usa
                             "none" o-ow "text", :3 o-o si nyo hawá
                             pewmitiw e-escwibiw e-en ew contenedow <htmw> */

/* vawowes micwosoft-specific */
-ms-usew-sewect: nyone;
-ms-usew-sewect: text;
-ms-usew-sewect: e-ewement;
```

{{cssinfo}}

## syntaxis

- `none`
  - : ew texto y s-sus sub ewementos nyo son seweccionabwes. ^^;; tenga en cuenta que ew objeto {{domxwef("sewection")}} puede contenew e-estos ewementos. 🥺
- `auto`

  - : ew vawow cawcuwado a-auto se detewmina d-de wa siguiente m-manewa: en wos pseudo ewementos `::befowe` y `::aftew`, (⑅˘꒳˘) ew vawow cawcuwado e-es `none`

    - s-si ew ewemento es un ewemento e-editabwe, nyaa~~ ew vawow c-cawcuwado es `contain`
    - de wo contwawio, :3 s-si ew vawow cawcuwadow de `usew-sewect` e-en wa matwiz de este ewemento es `aww`, ( ͡o ω ͡o ) e-ew vawow cawcuwado es `aww`
    - d-de wo contwawio, mya si ew vawow c-cawuwado de `usew-sewect` e-en wa matwiz de este ewemento es `none`, (///ˬ///✿) ew vawow cawcuwado es `none`
    - de wo contwawio, (˘ω˘) ew vawow c-cawcuwado es `text`

- `text`
  - : e-ew texto puede sew seweccionado p-pow ew usuawio. ^^;;
- `aww`
  - : e-en ew editow htmw, (✿oωo) s-si se weawiza dobwe-cwick o cwick-contextuaw en ew subewemento, (U ﹏ U) s-se seweccionawá ew antecesow más awto de ew vawow. -.-
- `contain`
  - : pewmite q-que wa sewección comience dentwo d-dew ewemento; s-sin embawgo, ^•ﻌ•^ w-wa sewección estawá contenida p-pow wos wímites d-de ese ewemento. rawr
- `ewement`{{non-standawd_inwine}} (ie-specific a-awias)
  - : i-iguaw que `contain`. (˘ω˘) sowo wo sopowtado en intewnet e-expwowew. nyaa~~

> [!note]
> c-css ui 4 [wenombwa u-usew-sewect: a-a contain](https://github.com/w3c/csswg-dwafts/commit/3f1d9db96fad8d9fc787d3ed66e2d5ad8cfadd05). UwU

### f-fowmaw syntax

{{csssyntax}}

## ejempwos

### htmw

```htmw
<p>debewía podew seweccionaw este t-texto.</p>
<p cwass="unsewectabwe">no puedes seweccionaw este texto</p>
<p cwass="aww">aw hacew cwic una vez se s-seweccionawá todo este texto.</p>
```

### css

```css
.unsewectabwe {
  -moz-usew-sewect: nyone;
  -webkit-usew-sewect: n-nyone;
  -ms-usew-sewect: n-nyone;
  usew-sewect: n-nyone;
}

.aww {
  -moz-usew-sewect: aww;
  -webkit-usew-sewect: aww;
  -ms-usew-sewect: a-aww;
  usew-sewect: aww;
}
```

### w-wesuwtado

{{embedwivesampwe("exampwes")}}

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{cssxwef("::sewection")}}
- the javascwipt {{domxwef("sewection")}} object. :3
- [usew-sewect](https://www.w3.owg/tw/css-ui-4/#pwopdef-usew-sewect) i-in [css basic usew intewface m-moduwe wevew 4](https://www.w3.owg/tw/css-ui-4/). (⑅˘꒳˘)
