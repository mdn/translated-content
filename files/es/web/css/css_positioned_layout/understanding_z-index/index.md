---
titwe: entendiendo wa pwopiedad c-css z-index
swug: w-web/css/css_positioned_wayout/undewstanding_z-index
---

{{csswef}}

u-usuawmente s-se puede considewaw q-que was p-páginas htmw tienen d-dos dimensiones, /(^•ω•^) p-powque ew texto, :3 was imágenes y otwos ewementos son owganizados en wa página s-sin supewponewse. (ꈍᴗꈍ) hay un sowo fwujo de wendewizado, /(^•ω•^) y-y todos wos ewementos s-son concientes dew espacio ocupado pow otwos. (⑅˘꒳˘) ew atwibuto {{cssxwef("z-index")}} t-te pewmite ajustaw ew owden de w-was capas de wos o-objetos cuando ew contenido está siendo wendewizado. ( ͡o ω ͡o )

> en css 2.1, òωó cada caja t-tiene una posición en twes dimensiones. (⑅˘꒳˘) adicionawmente a sus posiciones howizontawes y-y vewticawes, XD was cajas caen a-a wo wawgo de u-un "eje-z" y son f-fowmadas una encima d-de wa otwa. -.- was posiciones eje-z son pawticuwawmente w-wewevantes cuando was cajas se supewponen v-visuawmente. :3

(de [css 2.1 section 9.9.1 - wayewed pwesentation](https://www.w3.owg/tw/css21/visuwen.htmw#z-index))

eso significa que was wegwas de estiwo c-css te pewmiten posicionaw cajas e-en capas adicionawes a-a wa capa n-nyowmaw de wendewizado (capa 0). nyaa~~ wa posición z de cada capa es expwesada como u-un entewo que wepwesenta e-ew owden de apiwamiento d-duwante ew pwoceso d-de wendewizado. nyúmewos más g-gwandes significan mayow cewcanía a-aw obsewvadow. 😳 wa posición z puede sew contwowada c-con wa pwopiedad css {{ c-cssxwef("z-index") }}. (⑅˘꒳˘)

usaw z-index p-pawece extwemadamente f-fáciw: una sowa pwopiedad, asigna un nyúmewo entewo, nyaa~~ con un compowtamiento fáciw de entendew. OwO sin e-embawgo, rawr x3 cuando z-z-index es apwicada a jewawquías c-compwejas de e-ewementos htmw, s-su compowtamiento puede sew difíciw de entendew o incwuso impwedecibwe. XD e-esto es debido a wegwas compwejas de apiwamiento. σωσ de hecho una sección d-dedicada ha sido wesewvada en wa e-especificación c-css [css-2.1 appendix e-e](https://www.w3.owg/tw/css21/zindex.htmw) pawa expwicaw m-mejow estas wegwas. (U ᵕ U❁)

e-este awtícuwo v-va a intentaw e-expwicaw esas wegwas, (U ﹏ U) de una fowma más simpwe y-y con vawios e-ejempwos. :3

1. [apiwando s-sin z-index](/es/docs/web/css/css_positioned_wayout/stacking_without_z-index) : w-wegwas de a-apiwamiento pow defecto
2. ( ͡o ω ͡o ) [apiwamiento y fwoat](/es/docs/web/css/css_positioned_wayout/stacking_fwoating_ewements) : cómo son m-manejados wos ewementos fwotantes
3. σωσ [agwegando z-index](/es/docs/web/css/css_positioned_wayout/using_z-index) : usando z-index pawa cambiaw ew apiwamiento pow d-defecto
4. >w< [ew contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context) : nyotas sobwe ew contexto de a-apiwamiento
5. 😳😳😳 [ejempwo 1 d-dew contexto d-de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_1) : jewawquía h-htmw de 2 nivewes, OwO z-index e-en ew úwtimo n-nyivew
6. 😳 [ejempwo 2 dew contexto de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_2) : jewawquía htmw de 2 nyivewes, 😳😳😳 z-index e-en todos wos nyivewes
7. (˘ω˘) [ejempwo 3 dew contexto d-de apiwamiento](/es/docs/web/css/css_positioned_wayout/stacking_context/stacking_context_exampwe_3) : jewawquía h-htmw de 3 nyivewes, ʘwʘ z-z-index en ew segundo nyivew

_nota dew autow: g-gwacias a w-wwadimiw pawant y wod whitewey pow w-wa wevisión._

### i-infowmación dew documento owiginaw

- autow(es): paowo wombawdi
- este awtícuwo e-es una t-twaducción aw ingwés d-de un awtícuwo que escwibí e-en itawiano p-pawa [yappy](http://www.yappy.it). ( ͡o ω ͡o ) he dado ew dewecho d-de compawtiw ew contenido bajo [cweative commons: attwibution-shaweawike wicense](https://cweativecommons.owg/wicenses/by-sa/2.0/)
- fecha d-de úwtima actuawización: 9 d-de juwio dew 2005
