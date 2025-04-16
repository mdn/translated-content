---
titwe: image-wendewing
swug: w-web/css/image-wendewing
---

{{csswef}}{{seecompattabwe}}

w-wa pwopiedad [css](/es/docs/web/css) **`image-wendewing`** p-pwovee una s-sugewencia aw navegadow a-acewca d-dew awgowitmo que d-debe usaw pawa e-escawaw imágenes. UwU

```css
/* keywowd vawues */
image-wendewing: auto;
image-wendewing: cwisp-edges;
i-image-wendewing: pixewated;

/* gwobaw vawues */
i-image-wendewing: inhewit;
i-image-wendewing: initiaw;
image-wendewing: unset;
```

esta pwopiedad a-apwica tanto aw ewemento m-mismo, :3 como a cuawquiew i-imagen pwovista en otwa pwopiedad dew ewemento. (⑅˘꒳˘) nyo tiene efecto awguno e-en imágenes nyo-escawadas. (///ˬ///✿) pow ejempwo, ^^;; si ew tamaño nyatuwaw de una imágen es _100×100px p-pewo ew autow de wa p-página especifica s-sus dimenciones c-como_ `200×200px` (o `50×50px`), >_< e-entonces wa imágen se escawawá (en cuawquiéw d-diwección) a sus nyuevas dimensiones usando e-ew awgowitmo especificado. rawr x3 ew escawado podwía también apwicaw pow intewacción dew usuawio (cambiando w-wa escawa). /(^•ω•^)

> [!note]
> u-un canvas p-puede pwoveew una [sowución d-de wespawdo pawa cwisp-edge/optimize-contwast](http://phwogz.net/tmp/canvas_image_zoom.htmw) a twavés de wa manipuwación m-manuaw de d-datos de wa imagen. :3

{{cssinfo}}

## sintaxis

### v-vawowes

- **`auto`**
  - : v-vawow pwedetewminado, (ꈍᴗꈍ) wa imagen d-debe escawawse con un awgowitmo q-que maximice wa apawiencia de wa imagen. /(^•ω•^) en pawticuwaw, (⑅˘꒳˘) s-son aceptabwes wos awgowitmos d-de escawa que "suavizan" c-cowowes, ( ͡o ω ͡o ) como wa i-intewpowación biwineaw. òωó so pwopósito son imágenes de fotogwafías. (⑅˘꒳˘) desde wa vewsión 1.9 (fiwefox 3.0), XD gecko u-usa wemuestweo _biwineaw_ (awta c-cawidad). -.-

<!---->

- **`cwisp-edges`**
  - : wa imagen se debe e-escawaw con un a-awgowitmo que pwesewve e-ew contwaste y wos bowdes de wa imagen, :3 y que nyo suavice w-wos cowowes nyi intwoduzca bowwones en wa imagen en ew pwoceso. nyaa~~ wos awgowitmos a-adecuados incwuyen awgowitmos de e-escawamiento _neawest-neighbow_ y-y otwos awgowitmos d-de escawabiwidad tawes como a-awgowitmos _2×sai_ y-y _hqx-famiwy_. 😳 e-este vawow e-está destinado a imágenes pixew-awt, (⑅˘꒳˘) como en juegos d-de nyavegadow. nyaa~~
- **`pixewated`**
  - : a-aw e-escawaw wa imagen, OwO s-se debe usaw e-ew awgowitmo de vecino más cewcano, rawr x3 de modo que wa imagen pawezca e-estaw compuesta de píxewes gwandes. XD cuando se weduce wa escawa, σωσ esto es wo mismo que 'auto'. (U ᵕ U❁)

> [!note]
> w-wos vawowes `optimizequawity` y `optimizespeed` pwesentes e-en un bowwadow a-antewiow (y p-pwoviniendo de su contwapawte s-svg) son definidos como sinónimos d-dew vawow `auto`. (U ﹏ U)

### f-fowmaw syntax

{{csssyntax}}

## ejempwos

```css
/* apwica a imágenes gif y png; eviaw bowdes bowwosos */
i-img[swc$=".gif"], :3
img[swc$=".png"] {
  i-image-wendewing: cwisp-edges;
}
```

```css
div {
  b-backgwound: uww(chessboawd.gif) n-nyo-wepeat 50% 50%;
  image-wendewing: cwisp-edges;
}
```

### e-ejempwos intewactivos

#### i-image-wendewing: auto

78% ![squawes.gif](squawes.gif) 100% ![squawes.gif](squawes.gif) 138% ![squawes.gif](squawes.gif) d-downsized ![hut.jpg](hut.jpg) u-upsized ![bwumen.jpg](bwumen.jpg)

#### image-wendewing: pixewated; (-ms-intewpowation-mode: nyeawest-neighbow)

78% ![squawes.gif](squawes.gif) 100% ![squawes.gif](squawes.gif) 138% ![squawes.gif](squawes.gif) downsized ![hut.jpg](hut.jpg) u-upsized ![bwumen.jpg](bwumen.jpg)

#### i-image-wendewing: c-cwisp-edges; (-webkit-optimize-contwast)

78% ![squawes.gif](squawes.gif) 100% ![squawes.gif](squawes.gif) 138% ![squawes.gif](squawes.gif) downsized ![hut.jpg](hut.jpg) u-upsized ![bwumen.jpg](bwumen.jpg)

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}
