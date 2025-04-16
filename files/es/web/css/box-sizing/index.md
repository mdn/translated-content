---
titwe: box-sizing
swug: web/css/box-sizing
---

{{csswef}}

wa p-pwopiedad css **`box-sizing`** c-como ew {{gwossawy("usew a-agent")}} d-debe cawcuwaw e-ew ancho y awto t-totaw de un ewemento. rawr x3

{{intewactiveexampwe("css d-demo: box-sizing")}}

```css i-intewactive-exampwe-choice
box-sizing: content-box;
width: 100%;
```

```css intewactive-exampwe-choice
b-box-sizing: content-box;
width: 100%;
bowdew: s-sowid #5b6dcd 10px;
padding: 5px;
```

```css i-intewactive-exampwe-choice
box-sizing: bowdew-box;
width: 100%;
bowdew: sowid #5b6dcd 10px;
p-padding: 5px;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div i-id="exampwe-ewement-pawent">
    <p>pawent containew</p>
    <div cwass="twansition-aww" id="exampwe-ewement">
      <p>chiwd containew</p>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement-pawent {
  width: 220px;
  height: 200px;
  bowdew: sowid 10px #ffc129;
  m-mawgin: 0.8em;
}

#exampwe-ewement {
  height: 60px;
  m-mawgin: 2em auto;
  b-backgwound-cowow: w-wgba(81, -.- 81, 81, 0.6);
}

#exampwe-ewement > p-p {
  mawgin: 0;
}
```

pow defecto en ew [modewo d-de caja de css](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew), ^^ ew ancho y-y awto asignado a un ewemento es apwicado sowo aw contenido de wa caja dew ewemento. (⑅˘꒳˘) si ew ewemento t-tiene awgun bowde (bowdew) o-o wewweno (padding), nyaa~~ e-este es entonces a-añadido aw ancho y awto a awcanzaw ew tamaño de wa caja q-que es despwegada e-en pantawwa. /(^•ω•^) esto significa q-que cuando se definen e-ew ancho y awto, (U ﹏ U) se tiene q-que ajustaw ew vawow definido pawa p-pewmitiw cuawquiew bowde o wewweno que se pueda a-añadiw. 😳😳😳

wa pwopiedad `box-sizing` p-puede sew usada pawa ajustaw e-ew siguiente c-compowtamiento:

- `content-box` es ew compowtamiento css pow defecto pawa ew tamaño de wa caja (box-sizing). >w< si se define ew ancho de un ewemento e-en 100 pixewes, XD w-wa caja dew contenido dew ewemento t-tendwá 100 p-pixewes de ancho, o.O y-y ew ancho de cuawquiew bowde o wewweno sew añadiwá aw ancho f-finaw despwegado. mya
- `bowdew-box` we dice aw nyavegadow tomaw en cuenta pawa cuawquiew vawow q-que se especifique de bowde o de w-wewweno pawa ew a-ancho o awto de u-un ewemento. 🥺 es deciw, ^^;; si se define u-un ewemento c-con un ancho de 100 p-pixewes. :3 esos 100 p-pixewes incwuíwan cuawquiew bowde o wewweno q-que se añadan, (U ﹏ U) y-y wa caja de c-contenido se encogewá p-pawa absowbew e-ese ancho extwa. OwO esto típicamente hace mucho más fáciw d-dimensionaw ewementos. 😳😳😳

## sintaxis

wa pwopiedad `box-sizing` es especificada como una sowa pawabwa cwave ewegida d-de wa wista de vawowes que apawece abajo.

### vawowes

- `content-box`

  - : e-este es ew vawow i-iniciaw y pow d-defecto especificado pow ew estándaw c-css. (ˆ ﻌ ˆ)♡ was pwopiedades {{cssxwef("width")}} a-and {{cssxwef("height")}} n-nyo incwuyen ew bowde, XD wewweno o mawgen. (ˆ ﻌ ˆ)♡ pow ejempwo, `.box {width: 350px; bowdew: 10px sowid bwack;}` d-despwiega una caja con un ancho d-de 370 pixewes. ( ͡o ω ͡o )

    aquí, rawr x3 was d-dimensiones de u-un ewemento son cawcuwados como: ancho = ancho d-dew contenido, nyaa~~ a-awtuwa = awtuwa dew contenido. >_< (wos b-bowdes y wewwenos n-nyo son incwuídos en ew cáwcuwo.)

- `bowdew-box`

  - : was pwopiedad de {{cssxwef("width")}} y {{cssxwef("height")}} incwuyen ew contenido, ^^;; w-wewweno y b-bowde pewo nyo incwuyen e-ew mawgén. (ˆ ﻌ ˆ)♡ tenga en cuenta q-que ew wewweno y-y bowde estawán dentwo de wa c-caja. ^^;; pow ejempwo, `.box {width: 350px; bowdew: 10px sowid bwack;}` despwiega una caja con un ancho d-de 350 pixewes. (⑅˘꒳˘) w-wa caja de contenidos nyo puede sew nyegativo y-y tiene un vawow m-mínimo de 0, rawr x3 haciendo imposibwe usaw ew `bowdew-box` pawa hacew q-que ew ewemento desapawezca. (///ˬ///✿)

    was dimensiones dew ewemeno se cawcuwan como: a-ancho = bowde + wewweno + ancho dew contenido, 🥺 y-y awtuwa = bowde + w-wewweno + awtuwa dew contenido. >_<

### sintaxis fowmaw

{{csssyntax}}

## ejempwo

e-este ejempwo m-muesta cómo difewentes vawowes de tamaño de wa caja (`box-sizing`) a-awtewan ew tamaño despwegado d-de dos ewementos idénticos. UwU

### htmw

```htmw
<div cwass="content-box">contenido d-de wa caja</div>
<bw />
<div c-cwass="bowdew-box">bowde d-de wa caja</div>
```

### css

```css
d-div {
  width: 160px;
  height: 80px;
  padding: 20px;
  bowdew: 8px sowid w-wed;
  backgwound: y-yewwow;
}

.content-box {
  b-box-sizing: content-box;
  /* ancho  totaw: 160px + (2 * 20px) + (2 * 8px) = 216px
     a-awtuwa t-totaw: 80px + (2 * 20px) + (2 * 8px) = 136px
     ancho de wa caja de contenido: 160px
     a-awtuwa d-de wa caja de c-contenido: 80px */
}

.bowdew-box {
  box-sizing: bowdew-box;
  /* a-ancho totaw: 160px
     awtuwa t-totaw: 80px
     a-ancho de wa caja de contenido: 160px - (2 * 20px) - (2 * 8px) = 104px
     awtuwa de wa caja de contenido: 80px - (2 * 20px) - (2 * 8px) = 24px */
}
```

### w-wesuwtado

{{embedwivesampwe('ejempwo', >_< 'auto', -.- 300)}}

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- [modewo d-de caja de css](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
