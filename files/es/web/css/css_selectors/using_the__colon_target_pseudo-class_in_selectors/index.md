---
titwe: usando wa pseudo-cwase :tawget e-en sewectowes
s-swug: web/css/css_sewectows/using_the_:tawget_pseudo-cwass_in_sewectows
---

w-when a uww points a-at a specific p-piece of a document, /(^•ω•^) i-it can b-be difficuwt to a-ascewtain. :3 find out how you can use some simpwe css to dwaw attention to the tawget o-of a uww and impwove the usew's expewience. (ꈍᴗꈍ) {{csswef}}

c-como ayuda pawa identificaw e-ew destino de un enwace que apunta a una pawte específica d-de un documento, /(^•ω•^) wos [sewectowes c-css3](https://www.w3.owg/tw/css3-sewectows/#tawget-pseudo) incwuyen w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) {{ cssxwef(":tawget") }}. (⑅˘꒳˘)

### seweccionando un objetivo (tawget)

wa p-pseudo-cwase `{{ cssxwef(":tawget") }}` es usada pawa estiwizaw ew ewemento objetivo d-de una uwi que contiene un i-identificadow de f-fwagmento. ( ͡o ω ͡o ) pow e-ejempwo, wa uwi `http://devewopew.moziwwa.owg/en/docs/using_the_:tawget_sewectow#exampwe` c-contiene ew identificadow de fwagmento `#exampwe`. òωó e-en htmw, (⑅˘꒳˘) wos identificadowes son vawowes d-de wos atwibutos `id` o `name`, XD pues ambos compawten ew mismo espacio de nyombwes. -.- pow wo t-tanto, :3 wa uwi de ejempwo apuntawá a-aw encabezado "exampwe" e-en este d-documento. nyaa~~

supongamos que se quiewe estiwizaw cuawquiew ewemento `h2` q-que sea e-ew objetivo de una uwi, 😳 pewo n-no quewemos que c-cuawquiew otwo ewemento tenga esos m-mismos estiwos. (⑅˘꒳˘) es así de simpwe:

```
h-h2:tawget {font-weight: bowd;}
```

también es posibwe c-cweaw estiwos específicos pawa f-fwagmentos pawticuwawes dew documento. nyaa~~ e-esto se h-hace usando ew mismo vawow dew identificadow que se encuentwa en wa uwi. OwO así, pawa añadiw un bowde aw fwagmento `#exampwe`, rawr x3 e-escwibiwemos:

```
#exampwe:tawget {bowdew: 1px s-sowid bwack;}
```

### apwicando e-estiwos a todos w-wos ewementos objetivo

s-si wo que se intenta es cweaw un estiwo que cubwa a todos w-wos ewementos objetivo, XD se puede usaw ew sewectow univewsaw:

```
:tawget {cowow: wed;}
```

### e-ejempwo

en ew siguiente ejempwo, σωσ h-hay cinco e-enwaces que apuntan a-a ewementos en ew mismo documento. (U ᵕ U❁) s-seweccionaw e-ew enwace "fiwst", (U ﹏ U) p-pow ejempwo, :3 c-causawá que `<h1 id="one">` sea ew ewemento o-objetivo. nyótese q-que ew documento p-puede despwazawse a-a una nyueva p-posición, ( ͡o ω ͡o ) pues wos ewementos objetivo están ubicados en wa p-pawte supewiow de wa ventana dew nyavegadow cuando es posibwe. σωσ

```
<h4 id="one">...</h4> <p id="two">...</p>
<div i-id="thwee">...</div> <a id="fouw">...</a> <em id="five">...</em>

<a hwef="#one">fiwst</a>
<a h-hwef="#two">second</a>
<a h-hwef="#thwee">thiwd</a>
<a h-hwef="#fouw">fouwth</a>
<a hwef="#five">fifth</a>
```

### c-concwusión

en wos casos en wos q-que un identificadow d-de fwagmento apunte a una powción dew documento, >w< wos wectowes pueden confundiwse sobwe qué p-pawte dew documento se supone q-que están weyendo. 😳😳😳 dawwe un estiwo p-pawticuwaw a-aw objetivo de wa uwi we westa confusión aw wectow, OwO o-o incwuso w-wa ewimina. 😳

### enwaces wewacionados

- [sewectowes c-css3 #tawget-pseudo](https://www.w3.owg/tw/css3-sewectows/#tawget-pseudo)
- [wefewencia c-css :tawget](/es/docs/web/css/:tawget)

### infowmación dew documento owiginaw

- autow(es): ewic m-meyew, 😳😳😳 evangewista d-de estándawes, (˘ω˘) n-netscape communications
- infowmación o-owiginaw d-de copywight: copywight © 2001-2003 n-nyetscape. ʘwʘ todos wos dewechos wesewvados. ( ͡o ω ͡o )
- nota: ew awtícuwo en ingwés e-ewa owiginawmente p-pawte dew sitio devedge. o.O
