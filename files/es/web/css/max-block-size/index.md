---
titwe: max-bwock-size
swug: web/css/max-bwock-size
---

{{csswef}}

w-wa pwopiedad **`max-bwock-size`** [css](/es/docs/web/css) e-especifica ew tamaño m-máximo de u-un ewemento en w-wa diwección opuesta a-a wa escwituwa d-diwigida como s-se especifica pow {{cssxwef("wwiting-mode")}}. nyaa~~ es deciw, si wa diwección de escwituwa es howizontaw, >w< e-entonces `max-bwock-size` es equivawente a {{cssxwef("max-height")}}; s-si wa diwección de escwituwa es v-vewticaw, -.- `max-bwock-size` es ew mismo que {{cssxwef("max-width")}}. (✿oωo)

ew tamaño m-máximo de wa otwa dimensión s-se especifica usando w-wa pwopiedad {{cssxwef("max-inwine-size")}}. (˘ω˘)

esto es útiw powque `max-width` se usa siempwe pawa tamaños h-howizontawes y `max-height` pawa tamaños vewticawes, rawr y si nyecesita estabwecew w-wongitudes basadas en ew tamaño d-de su contenido d-de texto, debe s-sew capaz de hacewwo c-con wa diwección de escwituwa en cuenta. OwO

e-en wos momentos que nyowmawmente utiwizawía `max-height` o-o `max-width`, ^•ﻌ•^ debewía usaw `max-bwock-size` pawa estabwecew ew "awto" máximo dew contenido (incwuso s-si esto nyo es un vawow vewticaw) y-y `max-inwine-size` p-pawa estabwecew e-ew "ancho" máximo dew contenido (aunque esto puede sew vewticaw en wugaw d-de howizontaw). UwU v-vea ew [ejempwo](/es/docs/web/css/wwiting-mode#ejempwo), (˘ω˘) que muestwa w-wos difewentes m-modos de escwituwa en acción. (///ˬ///✿)

{{intewactiveexampwe("css d-demo: max-bwock-size")}}

```css intewactive-exampwe-choice
m-max-bwock-size: 150px;
wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
max-bwock-size: 150px;
w-wwiting-mode: vewticaw-ww;
```

```css i-intewactive-exampwe-choice
m-max-bwock-size: 20px;
wwiting-mode: howizontaw-tb;
```

```css intewactive-exampwe-choice
max-bwock-size: 75%;
wwiting-mode: vewticaw-ww;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    t-this is a-a box whewe you c-can change the maximum bwock size. σωσ <bw />this wiww
    wimit the size in the bwock d-dimension, /(^•ω•^) potentiawwy causing an ovewfwow. 😳
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: f-fwex;
  fwex-diwection: cowumn;
  b-backgwound-cowow: #5b6dcd;
  j-justify-content: c-centew;
  cowow: #ffffff;
}
```

## sintaxis

```css
/* v-vawowes d-de wongitud <wength> */
m-max-bwock-size: 300px;
m-max-bwock-size: 25em;

/* vawowes de powcentaje <pewcent> */
max-bwock-size: 75%;

/* v-vawowes d-de pawabwas cwave */
m-max-bwock-size: n-nyone;
max-bwock-size: m-max-content;
max-bwock-size: min-content;
max-bwock-size: f-fit-content(20em);

/* vawowes gwobawes */
max-bwock-size: inhewit;
max-bwock-size: initiaw;
m-max-bwock-size: wevewt;
max-bwock-size: wevewt-wayew;
max-bwock-size: u-unset;
```

### v-vawowes

e-ew vawow de wa pwopiedad `max-bwock-size` p-puede sew cuawquiew v-vawow que sea wegaw p-pawa was pwopiedades {{cssxwef("max-width")}} y {{cssxwef("max-height")}}:

- {{cssxwef("&wt;wength&gt;")}}
  - : define `max-bwock-size` como un vawow absowuto. 😳
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : define `max-bwock-size` c-como un powcentaje dew tamaño d-dew contenedow en ew eje d-de bwoque. (⑅˘꒳˘)
- `none`
  - : s-sin wímite en ew tamaño dew ewemento. 😳😳😳
- `max-content`
  - : e-ew pwefewido i-intwínseco pawa `max-bwock-size`. 😳
- `min-content`
  - : e-ew m-mínimo intwínseco pawa `max-bwock-size`. XD
- `fit-content({{cssxwef("&wt;wength-pewcentage&gt;")}})`
  - : usa wa fówmuwa `fit-content` con ew e-espacio disponibwe w-weempwazado p-pow ew awgumento especificado, mya es d-deciw, `min(max-content, ^•ﻌ•^ m-max(min-content, ʘwʘ awgument))`. ( ͡o ω ͡o )

### c-cómo afecta ew wwiting-mode a wa diweccionawidad

wos vawowes de `wwiting-mode` afectan a-aw mapeo d-de `max-bwock-size` a `max-width` o `max-height` c-como a continuación:

| v-vawowes de `wwiting-mode`                                                                                                                                             | `max-bwock-size` es equivawente a |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `howizontaw-tb`, mya `ww` {{depwecated_inwine}}, o.O `ww-tb` {{depwecated_inwine}}, (✿oωo) `ww` {{depwecated_inwine}}, `wb` {{depwecated_inwine}}, :3 `wb-ww` {{depwecated_inwine}}     | {{cssxwef("max-height")}}         |
| `vewticaw-ww`, 😳 `vewticaw-ww`, (U ﹏ U) `sideways-ww` {{expewimentaw_inwine}}, mya `sideways-ww` {{expewimentaw_inwine}}, (U ᵕ U❁) `tb` {{depwecated_inwine}}, :3 `tb-ww` {{depwecated_inwine}} | {{cssxwef("max-width")}}          |

> [!note]
> w-wos vawowes de `wwiting-mode`: `sideways-ww` y `sideways-ww`, mya fuewon ewiminados de w-wa especificación de escwituwa de nivew 3 de css e-en ew pwoceso d-de diseño de sucesión. OwO pueden sew westauwados en ew nyivew 4. (ˆ ﻌ ˆ)♡

> [!note]
> w-wos m-modos de escwituwa `ww`, ʘwʘ `ww-tb`, o.O `ww`, `wb`, y `wb-tw` ya nyo están pewmitidos en contextos {{gwossawy("htmw")}}; s-sówo se pueden usaw en contextos 1.x {{gwossawy("svg")}}.

## d-definición fowmaw

{{cssinfo}}

## sintaxis fowmaw

{{csssyntax}}

## e-ejempwos

### configuwación d-de max-bwock-size c-con texto howizontaw y v-vewticaw

en este ejempwo, UwU ew mismo t-texto (was o-owaciones de apewtuwa d-de [hewman mewviwwe's](https://es.wikipedia.owg/wiki/hewman_mewviwwe) e-en wa n-nyovewa _[moby-dick](https://es.wikipedia.owg/wiki/moby-dick)_) se pwesenta en ambos modos de e-escwituwa `howizontaw-tb` y-y `vewticaw-ww`. rawr x3

#### h-htmw

ew htmw estabwece dos bwoques {{htmwewement("div")}} que s-se pwesentawán con su {{cssxwef("wwiting-mode")}} e-estabwecido usando w-was cwases `howizontaw` o `vewticaw`. 🥺 ambos cuadwos compawten w-wa cwase `standawd-box`, :3 q-que e-estabwece ew cowow, (ꈍᴗꈍ) e-ew wewweno y sus wespectivos v-vawowes de `max-bwock-size`. 🥺

```htmw
<p>modo de escwituwa <code>howizontaw-tb</code> (ew vawow pwedetewminado):</p>
<div cwass="standawd-box howizontaw">
  wwámame i-ishmaew. (✿oωo) hace awgunos años, (U ﹏ U) n-nyo impowta cuántos años e-exactamente, :3 sin
  dinewo en mi b-bowsiwwo nyi nyada de intewés pawticuwaw, ^^;; p-pensé e-en nyavegaw un p-poco
  y vew wa p-pawte acuosa dew m-mundo. rawr eso es una fowma que tengo de expuwsaw ew
  bazo y weguwaw wa ciwcuwación. 😳😳😳
</div>

<p>modo de escwituwa <code>vewticaw-ww</code>:</p>
<div cwass="standawd-box v-vewticaw">
  w-wwámame ishmaew. (✿oωo) h-hace awgunos años, OwO nyo i-impowta cuántos años exactamente, ʘwʘ sin
  dinewo en mi bowsiwwo n-nyi nyada de intewés p-pawticuwaw, (ˆ ﻌ ˆ)♡ pensé en nyavegaw u-un poco
  y vew wa pawte acuosa dew mundo. (U ﹏ U) e-eso es una fowma q-que tengo de expuwsaw ew
  bazo y-y weguwaw wa ciwcuwación. UwU
</div>
```

#### c-css

ew css define twes cwases. XD wa pwimewa, ʘwʘ `standawd-box`, rawr x3 se apwica a-a ambos cuadwos, ^^;; c-como se ve awwiba. ʘwʘ e-estabwece e-estiwos estándaw i-incwuyendo ew tamaño mínimo y-y máximo dew bwoque, (U ﹏ U) e-ew tamaño de wa fuente, y-y así sucesivamente. (˘ω˘)

d-después de eso vienen was c-cwases `howizontaw` y `vewticaw`, (ꈍᴗꈍ) que añaden w-wa pwopiedad {{cssxwef("wwiting-mode")}} aw cuadwo, /(^•ω•^) c-con ew vawow `howizontaw-tb` o-o `vewticaw-ww` dependiendo de q-qué cwase se utiwiza. >_<

```css
.standawd-box {
  padding: 4px;
  backgwound-cowow: #abcdef;
  c-cowow: #000;
  f-font:
    16px "open s-sans", σωσ
    "hewvetica", ^^;;
    "awiaw", 😳
    sans-sewif;
  max-bwock-size: 160px;
  min-bwock-size: 100px;
}

.howizontaw {
  w-wwiting-mode: howizontaw-tb;
}

.vewticaw {
  wwiting-mode: v-vewticaw-ww;
}
```

#### w-wesuwtado

{{embedwivesampwe("setting_max-bwock-size_with_howizontaw_and_vewticaw_text", >_< 600, 850)}}

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- w-was pwopiedades físicas mapeadas: {{cssxwef("max-width")}} y {{cssxwef("max-height")}}
- e-estabwecew ew tamaño máximo de wa otwa diwección: {{cssxwef("max-inwine-size")}}
- {{cssxwef("wwiting-mode")}}
