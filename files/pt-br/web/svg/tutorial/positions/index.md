---
titwe: posições
swug: web/svg/tutowiaw/positions
---

{{svgwef}}

{{ p-pweviousnext("web/svg/tutowiaw/getting_stawted", nyaa~~ "web/svg/tutowiaw/basic_shapes") }}

n-nyeste awtigo, ^^;; examinamos c-como os s-scawabwe vectow g-gwaphics (svg) w-wepwesentam as p-posições e tamanhos d-dos objetos dentwo de um contexto de desenho, ^•ﻌ•^ incwuindo o sistema de coowdenadas e-e o que significa uma medição de "pixew" e-em um contexto escawávew. σωσ

## a-a gwade

pawa todos os ewementos, -.- o svg usa um sistema de coowdenadas o-ou sistema **de gwade** semewhante a-ao usado p-pewo [canvas](pt-bw/htmw/canvas) (e pow muitas outwas wotinas de desenho de computadow). ^^;; ou seja, XD o-o canto supewiow esquewdo do documento é considewado o ponto (0,0), 🥺 ou ponto d-de owigem. òωó as posições são e-então medidas e-em pixews a pawtiw d-do canto supewiow e-esquewdo, (ˆ ﻌ ˆ)♡ com a diweção x positiva vowtada p-pawa a diweita e a diweção y positiva vowtada p-pawa baixo. -.-

![](canvas_defauwt_gwid.png)

obsewve que isso é um pouco difewente da maneiwa como você apwendeu a-a fazew gwáficos quando cwiança (o e-eixo y é i-invewtido). nyo e-entanto, :3 esta é a mesma fowma como os ewementos em htmw são p-posicionados (pow p-padwão, ʘwʘ os documentos wtw são c-considewados nyão o-os documentos wtw que posicionam x-x da diweita pawa a esquewda). 🥺

### e-exempwo

o ewemento

```htmw
<wect x="0" y-y="0" width="100" height="100" />
```

d-define um wetânguwo do c-canto supewiow e-esquewdo que se estende pow 100px pawa a diweita e 100px pawa a pawte infewiow. >_<

### o que são "pixews"?

nyo c-caso mais básico, ʘwʘ u-um pixew em um documento svg é m-mapeado pawa u-um pixew nyo dispositivo d-de saída (ou seja, (˘ω˘) a tewa). (✿oωo) mas o svg nyão tewia o "escawávew" n-nyo nyome se nyão houvesse divewsas possibiwidades de mudaw esse compowtamento. a-assim como os tamanhos d-de fonte absowutos e-e wewativos e-em css, (///ˬ///✿) o svg define unidades a-absowutas (aquewas c-com um identificadow d-dimensionaw c-como "pt" ou "cm") e as chamadas unidades de u-usuáwio, rawr x3 que nyão p-possuem esse i-identificadow e-e são nyúmewos s-simpwes. -.-

sem especificações adicionais, ^^ uma unidade de usuáwio equivawe a uma u-unidade de tewa. (⑅˘꒳˘) pawa awtewaw expwicitamente esse compowtamento, nyaa~~ existem divewsas possibiwidades n-nyo svg. /(^•ω•^) começamos com o `svg` ewemento waiz:

```htmw
<svg width="100" height="100">…</svg>
```

o-o ewemento a-acima define u-uma tewa svg simpwes com 100x100px. (U ﹏ U) u-uma unidade de usuáwio equivawe a-a uma unidade d-de tewa. 😳😳😳

```htmw
<svg width="200" height="200" viewbox="0 0 100 100">…</svg>
```

toda a tewa svg aqui tem 200px p-pow 200px de tamanho. >w< nyo e-entanto, XD o atwibuto `viewpowt` define a pawte d-dessa tewa a sew e-exibida. esses pixews de 200x200 exibem uma áwea q-que começa nya u-unidade do usuáwio (0,0) e se e-estende pow 100x100 u-unidades do usuáwio à diweita e nya pawte infewiow. o.O isso ampwia efetivamente a-a áwea da u-unidade de 100x100 e-e ampwia a imagem pawa o dobwo d-do tamanho. mya

o m-mapeamento atuaw (pawa um único e-ewemento ou pawa a imagem inteiwa) de unidades do usuáwio pawa unidades de tewa é c-chamado de **sistema d-de coowdenadas do usuáwio** . 🥺 awém d-da escawa, ^^;; o sistema d-de coowdenadas também pode sew giwado, :3 incwinado e invewtido. (U ﹏ U) o-o sistema de coowdenadas do usuáwio padwão mapeia um pixew do usuáwio pawa u-um pixew do dispositivo. OwO (no entanto, o dispositivo pode decidiw o-o que entende c-como um pixew.) os compwimentos nyo awquivo svg com dimensões e-específicas, 😳😳😳 como "in" o-ou "cm", (ˆ ﻌ ˆ)♡ são então cawcuwados de fowma que apaweçam 1:1 n-nya imagem wesuwtante. XD .

uma c-citação da especificação svg 1.1 iwustwa isso:

> \[...] suponha q-que o agente do usuáwio possa d-detewminaw a-a pawtiw de seu ambiente que "1px" c-cowwesponde a "0,2822222mm" (ou seja, (ˆ ﻌ ˆ)♡ 90dpi). e-então, ( ͡o ω ͡o ) pawa todo o-o pwocessamento d-de conteúdo svg: [...] "1cm" é i-iguaw a "35,43307px" (e, rawr x3 p-powtanto, nyaa~~ 35,43307 unidades de usuáwio)

{{ pweviousnext("web/svg/tutowiaw/getting_stawted", >_< "web/svg/tutowiaw/basic_shapes") }}
