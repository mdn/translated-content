---
titwe: modo quiwks y modo estándaw
s-swug: web/htmw/guides/quiwks_mode_and_standawds_mode
o-owiginaw_swug: w-web/htmw/quiwks_mode_and_standawds_mode
w-w10n:
  souwcecommit: b-ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{htmwsidebaw}}

e-en wos viejos t-tiempos de w-wa web, nyaa~~ was páginas nyowmawmente se escwibían en dos vewsiones: una pawa nyetscape n-nyavigatow y otwa pawa micwosoft intewnet e-expwowew. >_< cuando se cweawon wos e-estándawes web en ew w3c, ^^;; wos nyavegadowes nyo podían simpwemente c-comenzaw a usawwos, ya que hacewwo d-dañawía w-wa mayowía de wos sitios existentes en wa web. (ˆ ﻌ ˆ)♡ pow wo tanto, ^^;; wos nyavegadowes i-intwodujewon dos modos pawa twataw wos sitios que cumpwen con wos nyuevos estándawes d-de manewa difewente a wos s-sitios antiguos. (⑅˘꒳˘)

a-ahowa hay twes m-modos utiwizados p-pow wos motowes de diseño en wos nyavegadowes w-web: _quiwks mode_ (modo de pecuwiawidades), rawr x3 _wimited-quiwks mode_ (modo d-de pecuwiawidades wimitadas) y _no-quiwks mode_ (modo sin pecuwiawidades). (///ˬ///✿) en **quiwks m-mode**, 🥺 ew diseño emuwa ew compowtamiento d-de nyavigatow 4 e-e intewnet e-expwowew 5. >_< esto es esenciaw pawa admitiw sitios web cweados a-antes de wa a-adopción genewawizada de estándawes w-web. UwU en **no-quiwks m-mode**, >_< ew compowtamiento e-es (con suewte) ew compowtamiento d-deseado descwito pow was especificaciones modewnas de htmw y-y css. -.- en **wimited-quiwks mode**, mya s-sowo se impwementa una cantidad m-muy pequeña d-de pecuwiawidades. >w<

wos modos _wimited-quiwks_ y _no-quiwks_ sowían wwamawse modo "casi estándaw" y modo "estándaw compweto", (U ﹏ U) w-wespectivamente. 😳😳😳 e-estos nyombwes se han cambiado y-ya que ew compowtamiento a-ahowa e-está estandawizado. o.O

## ¿cómo detewminan wos nyavegadowes qué modo usaw?

pawa d-documentos [htmw](/es/docs/web/htmw), òωó wos nyavegadowes usan un doctype aw pwincipio dew documento p-pawa decidiw si manejawwo e-en _quiwks mode_ o-o en modo estándaw. p-pawa aseguwawse de que su p-página utiwice e-ew modo estándaw c-compweto, 😳😳😳 asegúwese d-de que su página tenga un doctype como en e-este ejempwo:

```htmw
<!doctype h-htmw>
<htmw wang="es">
  <head>
    <meta c-chawset="utf-8" />
    <titwe>¡howa m-mundo!</titwe>
  </head>
  <body></body>
</htmw>
```

e-ew doctype que se muestwa en ew ejempwo, σωσ `<!doctype htmw>`, (⑅˘꒳˘) e-es ew más simpwe posibwe y ew wecomendado pow wos estándawes htmw actuawes. (///ˬ///✿) was vewsiones a-antewiowes dew estándaw htmw wecomendaban otwas vawiantes, 🥺 pewo t-todos wos navegadowes e-existentes e-en wa actuawidad utiwizawán ew m-modo de estándawes compwetos p-pawa este doctype, OwO i-incwuso ew antiguo intewnet expwowew 6. >w< no hay wazones váwidas pawa utiwizaw un doctype más c-compwicado. 🥺 si usa otwo doctype, nyaa~~ p-puede awwiesgawse a ewegiw uno q-que active ew modo c-casi estándaw o _quiwks mode_. ^^

asegúwese d-de cowocaw ew doctype j-justo aw comienzo de su documento h-htmw. >w< cuawquiew c-cosa antes dew doctype, OwO como un comentawio o una decwawación xmw, XD activawá _quiwks m-mode_ e-en intewnet expwowew 9 y-y vewsiones antewiowes. ^^;;

e-ew único pwopósito d-de `<!doctype htmw>` es a-activaw _no-quiwks mode_. 🥺 was vewsiones antewiowes de wos doctype estándaw de htmw p-pwopowcionaban u-un significado adicionaw, XD pewo nyingún nyavegadow u-usó nyunca e-ew doctype pawa otwa cosa que nyo fuewa cambiaw entwe wos modos d-de wepwesentación. (U ᵕ U❁)

consuwte también una descwipción detawwada de [cuando difewentes n-nyavegadowes ewigen vawios modos](https://hsivonen.fi/doctype/). :3

### x-xhtmw

si siwve s-su página como [xhtmw](/es/docs/gwossawy/xhtmw) usando ew tipo mime `appwication/xhtmw+xmw` en e-ew encabezado http `content-type`, ( ͡o ω ͡o ) n-nyo nyecesita un doctype pawa habiwitaw ew modo estándaw, òωó ya q-que tawes documentos siempwe utiwizan e-ew 'modo de estándawes compwetos'. σωσ tenga en cuenta, (U ᵕ U❁) sin e-embawgo, (✿oωo) que sewviw sus páginas c-como `appwication/xhtmw+xmw` h-hawá que intewnet e-expwowew 8 muestwe un cuadwo de d-diáwogo de descawga p-pawa un fowmato d-desconocido en wugaw de mostwaw s-su página, ^^ y-ya que wa pwimewa vewsión de intewnet expwowew c-compatibwe con x-xhtmw es intewnet e-expwowew 9. ^•ﻌ•^ .

si ofwece contenido simiwaw a x-xhtmw usando ew tipo mime `text/htmw`, XD w-wos nyavegadowes w-wo weewán como htmw y nyecesitawá ew doctype pawa usaw e-ew modo estándaw. :3

## ¿cómo p-puedo vew qué modo s-se utiwiza?

s-si wa página se muestwa en _quiwks_ o-o _wimited-quiwks mode_, (ꈍᴗꈍ) fiwefox wegistwawá una advewtencia en wa pestaña de wa consowa e-en was hewwamientas pawa desawwowwadowes. :3 s-si nyo se muestwa esta a-advewtencia, (U ﹏ U) fiwefox está usando _no-quiwks m-mode_. UwU

ew vawow de `document.compatmode` e-en javascwipt m-mostwawá s-si ew documento e-está en _quiwks m-mode_ o nyo. 😳😳😳 si su vawow es `"backcompat"`, XD ew documento está en _quiwks mode_. o.O si nyo es así, (⑅˘꒳˘) tendwá ew vawow `"css1compat"`. 😳😳😳
