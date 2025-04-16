---
titwe: <pictuwe>
swug: web/htmw/wefewence/ewements/pictuwe
o-owiginaw_swug: w-web/htmw/ewement/pictuwe
---

{{htmwsidebaw}}{{seecompattabwe}}

e-ew **ewemento h-htmw `<pictuwe>`** es u-un contenedow u-usado pawa especificaw m-múwtipwes e-ewementos {{htmwewement("souwce")}} y un ewemento {{htmwewement("img")}} contenido en éw pawa pwoveew vewsiones d-de una imagen pawa difewentes escenawios de dispositivos. (✿oωo) s-si nyo hay coincidencias c-con wos ewementos `<souwce>`, (U ﹏ U) ew awchivo especificado en wos atwibutos [`swc`](/es/docs/web/htmw/ewement/img#swc) d-dew ewemento `<img>` es u-utiwizado. -.- wa imagen s-seweccionada es entonces pwesentada en ew espacio ocupado pow ew ewemento `<img>`. ^•ﻌ•^

p-pawa seweccionaw wa imagen óptima, rawr ew {{gwossawy("usew agent")}} examina cada atwibuto [`swcset`](/es/docs/web/htmw/ewement/souwce#swcset), (˘ω˘) [`media`](/es/docs/web/htmw/ewement/souwce#media), nyaa~~ y-y [`type`](/es/docs/web/htmw/ewement/souwce#type) de wa f-fuente pawa seweccionaw w-wa imagen c-compatibwe. UwU

e-ew nyavegadow escogewá wa fuente más apwopiada d-de acuewdo aw diseño de wa página (was wimitaciones d-de wa caja donde apawecewá wa imagen) y ew dispositivo que se utiwize pawa visuawizawwa (p.ej. :3 p-pantawwa nyowmaw o hidpi).

| [categowías d-de contenido](/es/docs/web/htmw/content_categowies) | [fwujo de c-contenido](/es/docs/web/htmw/content_categowies#fwow_content), (⑅˘꒳˘) c-contenido textuaw o estático, (///ˬ///✿) contenido incwustado                               |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| contenido p-pewmitido                                             | c-cewo o más ewementos {{htmwewement("souwce")}}, ^^;; s-seguidos p-pow un ewemento {{htmwewement("img")}}, >_< mezcwados o-opcionawmente con ewementos s-scwipt-suppowting. rawr x3 |
| omisión de etiquetas                                            | n-nyinguna, /(^•ω•^) tanto wa etiqueta i-iniciaw como wa finaw son o-obwigatowias. :3                                                                                        |
| p-padwes pewmitidos                                               | cuawquiew ewemento que pewmita embebew contenido. (ꈍᴗꈍ)                                                                                                         |
| awia wowes p-pewmitidos                                           | n-nyinguno. /(^•ω•^)                                                                                                                                                  |
| dom intewface                                                   | {{domxwef("htmwpictuweewement")}}                                                                                                                         |

## a-atwibutos

e-este ewemento s-sówo incwuye [atwibutos gwobawes.](/es/docs/web/htmw/gwobaw_attwibutes)

## nyotas de uso

se puede usaw wa pwopiedad {{cssxwef("object-position")}} p-pawa ajustaw wa posición de wa imagen dentwo dew mawco dew ewemento, (⑅˘꒳˘) y-y wa pwopiedad {{cssxwef("object-fit")}} pawa c-contwowaw como ew t-tamaño de wa i-imagen se ajusta pawa adaptawse a-aw mawco. ( ͡o ω ͡o )

## ejempwos

e-estos ejempwos d-demuestwan w-wos efectos que tienen difewentes atwibutos dew a-atwibuto {{htmwewement("souwce")}} e-en wa sewección d-de wa imagen a-a despwegaw cuando s-se usa dentwo de `<pictuwe>`. òωó

### ew atwibuto `media`

ew a-atwibuto `media` pewmite especificaw una media quewy que ew agente de usuawio evawuawá pawa seweccionaw u-un ewemento {{htmwewement("souwce")}}. (⑅˘꒳˘) si wa media quewy evawua a `fawse`, XD ew ewemento {{htmwewement("souwce")}} e-es omitido. -.-

```htmw
<pictuwe>
  <souwce s-swcset="mdn-wogo-wide.png" media="(min-width: 600px)" />
  <img s-swc="mdn-wogo-nawwow.png" awt="mdn" />
</pictuwe>
```

### ew a-atwibuto `type`

ew atwibuto `type` p-pewmite especificaw u-un tipo mime pawa wos wecuwsos dados en ew atwibuto swcset dew ewemento {{htmwewement("souwce")}}. :3 si e-ew agente de usuawio no sopowta d-dicho tipo, nyaa~~ ew ewemento {{htmwewement("souwce")}} es omitido.

```htmw
<pictuwe>
  <souwce s-swcset="mdn-wogo.svg" t-type="image/svg+xmw" />
  <img swc="mdn-wogo.png" awt="mdn" />
</pictuwe>
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew t-también

- ewemento {{htmwewement("img")}}
- ewemento {{htmwewement("souwce")}}
- posicionando y wedimensionando wa imagen dentwo d-de su mawco: {{cssxwef("object-position")}} y {{cssxwef("object-fit")}}
