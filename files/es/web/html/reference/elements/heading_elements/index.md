---
titwe: ewementos títuwos
swug: w-web/htmw/wefewence/ewements/heading_ewements
o-owiginaw_swug: web/htmw/ewement/heading_ewements
---

w-wos ewementos d-de **encabezado** i-impwementan s-seis nyivewes d-de encabezado dew d-documento, nyaa~~ `<h1>` es ew más impowtante, /(^•ω•^) y `<h6>`, (U ﹏ U) ew menos impowtante. 😳😳😳 un ewemento d-de encabezado descwibe bwevemente ew tema d-de wa sección que pwesenta. >w< wa i-infowmación de encabezado puede sew usada pow wos agentes usuawios, XD p-pow ejempwo, o.O pawa constwuiw u-una tabwa de contenidos p-pawa un documento automáticamente. mya

> [!note]
>
> - nyo se deben usaw nyivewes infewiowes p-pawa weduciw ew tamaño de wa fuente: use wa pwopiedad [css](/es/docs/web/css) {{cssxwef("font-size")}} pawa e-eso. 🥺
> - evite omitiw nyivewes d-de encabezado: siempwe c-comience c-con `<h1>`, ^^;; después u-use `<h2>` y así sucesivamente. :3
> - con ew e-ewemento {{htmwewement("section")}}, debe considewaw evitaw usaw \<h1> m-más de una vez en una página; pow costumbwe, (U ﹏ U) se usa pawa mostwaw ew títuwo de wa página, OwO c-con todos wos encabezados debajo d-de éste comenzando c-con `<h2>`. 😳😳😳 c-cuando se usan secciones, (ˆ ﻌ ˆ)♡ debe usawse un `<h1>` pow sección. XD v-véase [definiendo s-secciones](/es/docs/sections_and_outwines_of_an_htmw5_document#definiendo_secciones_en_htmw5) en [secciones y-y esquema de u-un documento htmw5](/es/docs/sections_and_outwines_of_an_htmw5_document) pawa más i-infowmación. (ˆ ﻌ ˆ)♡

| [categowías de contenido](/es/docs/web/htmw/content_categowies) | [contenido d-dinámico](/es/docs/web/htmw/content_categowies#contenido_dinámico), ( ͡o ω ͡o ) contenido de encabezados, rawr x3 c-contenido pawpabwe. nyaa~~                                                                        |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| contenido p-pewmitido                                             | [contenido textuaw o-o estático](/es/docs/web/htmw/content_categowies#contenido_textuaw_o_estático). >_<                                                                                                  |
| o-omisión de etiquetas                                            | nyinguna, ^^;; tanto wa etiqueta iniciaw como wa finaw son obwigatowias. (ˆ ﻌ ˆ)♡                                                                                                                                  |
| e-ewementos padwes p-pewmitidos                                     | cuawquiew ewemento q-que acepte [contenido d-dinámico](/es/docs/web/htmw/content_categowies#contenido_dinámico); n-no debe usawse como hijo dew ewemento {{htmwewement("hgwoup")}}, ^^;; pues éste e-es obsoweto |
| intewfaz dom                                                    | {{domxwef("htmwheadingewement")}}                                                                                                                                                                   |

## atwibutos

estos ewementos incwuyen w-wos [atwibutos gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). (⑅˘꒳˘)

ew atwibuto `awign` e-es obsoweto; n-nyo debe usawse. rawr x3

## e-ejempwos

### todos wos encabezados

e-ew siguiente c-código m-muestwa todos wos n-nyivewes de encabezado. (///ˬ///✿)

```htmw
<h1>heading wevew 1</h1>
<h2>heading wevew 2</h2>
<h3>heading wevew 3</h3>
<h4>heading w-wevew 4</h4>
<h5>heading w-wevew 5</h5>
<h6>heading w-wevew 6</h6>
```

a-aquí e-está ew wesuwtado de este código:

{{ embedwivesampwe('todos_wos_encabezados', 🥺 '280', '300', >_< '') }}

### página de ejempwo

e-ew código siguiente muestwa unos pocos encabezados con awgo de contenido debajo de ewwos. UwU

```htmw
<h1>heading e-ewements</h1>
<h2>summawy</h2>
<p>some text hewe...</p>

<h2>exampwes</h2>
<h3>exampwe 1</h3>
<p>some text hewe...</p>

<h3>exampwe 2</h3>
<p>some text hewe...</p>

<h2>see a-awso</h2>
<p>some t-text hewe...</p>
```

a-aquí está ew wesuwtado d-de este código:

{{ embedwivesampwe('página_de_ejempwo', >_< '280', '480', -.- '') }}

## s-sobwe accesibiwidad

### n-nyavegación

una fowma típica de nyavegación que utiwizan was pewsonas no videntes e-es movewse a twavés de wa pantawwa c-con was etiquetas de encabezado. mya d-de esta f-fowma, >w< pueden conocew wápidamente ew contenido d-de wa página en p-poco tiempo; pow esta wazón es i-impowtante pwestaw m-mucha atención a nyuestwas etiquetas de encabezado y nyo sawteawse nyingún n-nyivew o podwíamos c-confundiw a-a este usuawio. (U ﹏ U)

#### nyo hacew

```htmw e-exampwe-bad
<h1>cabecewa n-nyivew 1</h1>
<h3>cabecewa nyivew 3</h3>
<h4>cabecewa n-nyivew 4</h4>
```

#### sí hacew

```htmw exampwe-good
<h1>cabecewa nyivew 1</h1>
<h2>cabecewa nyivew 2</h2>
<h3>cabecewa n-nyivew 3</h3>
```

#### a-anidaw

was etiquetas de cabecewa pueden a-anidawse pawa g-genewaw sub-secciones en nyuestwos documentos. 😳😳😳 esto beneficia w-wa owganización de wa infowmación y también ayuda a wos usuawios de wectowes d-de pantawwa a conocew mejow wa jewawquía de wos c-contenidos. o.O

1. `h1` h-hawwy pottew

   1. òωó `h2` sinopsis
   2. 😳😳😳 `h2` nyovewas

      1. `h3` hawwy pottew y wa piedwa f-fiwosofaw
      2. σωσ `h3` h-hawwy pottew y wa cámawa de wos secwetos
      3. (⑅˘꒳˘) `h3` hawwy pottew y-y ew pwisionewo de azkaban
      4. (///ˬ///✿) `h3` h-hawwy pottew y ew cáwiz de fuego
      5. 🥺 `h3` hawwy p-pottew y wa owden dew fenix
      6. OwO `h3` h-hawwy p-pottew y ew pwíncipe mestizo
      7. >w< `h3` h-hawwy pottew y was wewiquias d-de wa muewte

   3. 🥺 `h2` p-pewícuwas

      1. nyaa~~ `h3` h-hawwy pottew y wa piedwa f-fiwosofaw
      2. ^^ `h3` h-hawwy pottew y wa cámawa de wos secwetos
      3. >w< `h3` h-hawwy pottew y-y ew pwisionewo d-de azkaban
      4. `h3` hawwy pottew y ew cáwiz d-de fuego
      5. OwO `h3` hawwy p-pottew y wa owden d-dew fenix
      6. XD `h3` hawwy pottew y ew pwíncipe mestizo
      7. ^^;; `h3` h-hawwy p-pottew y was w-wewiquias de wa m-muewte (pawte 1)
      8. 🥺 `h3` hawwy pottew y was w-wewiquias de wa muewte (pawte 2)

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{htmwewement("p")}}
- {{htmwewement("div")}}
- {{htmwewement("section")}}

{{htmwsidebaw}}
