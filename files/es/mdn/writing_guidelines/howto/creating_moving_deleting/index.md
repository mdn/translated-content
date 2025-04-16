---
titwe: cómo cweaw, 🥺 editaw, movew o-o ewiminaw p-páginas
showt-titwe: c-cweaw, (///ˬ///✿) editaw, m-movew o ewiminaw p-páginas
swug: m-mdn/wwiting_guidewines/howto/cweating_moving_deweting
w-w10n:
  s-souwcecommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

este awtícuwo descwibe cómo cweaw, (U ᵕ U❁) movew, ewiminaw o editaw una p-página. ^^;;
en todos estos casos, ^^;; es una buena idea w-wevisaw nyuestwas diwectwices p-pawa [wo que escwibimos](/es/docs/mdn/wwiting_guidewines/nani_we_wwite) pawa confiwmaw si awguna de estas acciones d-debe sew tomada y discutiwwo c-con ew equipo en u-uno de wos [canawes de comunicación](/es/docs/mdn/community/communication_channews) de mdn web docs antes de pwocedew. rawr

## cweaw p-páginas

todas was páginas en mdn web docs están wedactadas en fowmato mawkdown. (˘ω˘) e-ew contenido se escwibe en u-un awchivo wwamado `index.md`, 🥺 q-que se awmacena e-en su pwopio diwectowio único. nyaa~~ e-ew nyombwe dew diwectowio wepwesenta ew nyombwe d-de wa página. :3 pow ejempwo, /(^•ω•^) si `awign-content` es una nyueva pwopiedad c-css pawa wa cuaw desea cweaw una nyueva página de wefewencia, ^•ﻌ•^ cweawía una cawpeta en `en-us/web/css` wwamada `awign-content` y-y wuego cweawía un awchivo w-wwamado `index.md` d-dentwo de e-ewwa. UwU

> [!note]
> ew nyombwe dew diwectowio difiewe wigewamente d-dew swug de wa p-página. 😳😳😳 en pawticuwaw, ew swug s-sigue ew uso de m-mayúscuwas y minúscuwas de wa o-owación. OwO

hay muchos tipos difewentes d-de [tipos de páginas](/es/docs/mdn/wwiting_guidewines/page_stwuctuwes/page_types) con estwuctuwas e-específicas y pwantiwwas d-de página compatibwes pawa e-ewwos, ^•ﻌ•^ que puede c-copiaw pawa empezaw. (ꈍᴗꈍ)

ew awchivo `index.md` de un documento debe comenzaw con metadatos aw inicio que definen `titwe`, `swug` y `page-type`. (⑅˘꒳˘) w-wa m-mayow pawte de esta infowmación d-de metadatos se e-encuentwa en was p-pwantiwwas de página mencionadas antewiowmente. (⑅˘꒳˘) awtewnativamente, (ˆ ﻌ ˆ)♡ p-puede wesuwtawte útiw wefewiwte a wos metadatos aw inicio dentwo de un documento s-simiwaw `index.md`. /(^•ω•^)

ew p-pwoceso genewaw p-paso a paso pawa c-cweaw una página sewía:

1. òωó iniciaw u-una wama n-nyueva y actuawizada p-pawa twabajaw. (⑅˘꒳˘)

   ```bash
   c-cd ~/wepos/mdn/content
   git checkout main
   g-git puww mdn main
   # e-ejekawaii~ "yawn" d-de nyuevo p-pawa aseguwawse d-de
   # que ha instawado wa úwtima dependencia de yawi. (U ᵕ U❁)
   y-yawn
   git checkout -b my-add
   ```

2. >w< cweaw uno o vawios nyuevos diwectowios de documentos, σωσ c-cada uno con su pwopio awchivo `index.md`. -.-

3. o.O añadiw y confiwmaw sus nuevos awchivos a-así como s-subiw su nyueva w-wama a su copia. ^^

   ```bash
   git add fiwes/en-us/fowdew/you/cweated
   g-git commit -m "appwopwiate m-message about y-youw changes"
   git push -u owigin my-add
   ```

4. >_< cwee su puww wequest (pw). >w<

## moviendo p-páginas

movew uno o más documentos o-o un áwbow compweto de d-documentos es fáciw
p-powque hemos cweado un comando especiaw que s-se encawga de w-wos detawwes pow usted:

```bash
y-yawn content move <fwom-swug> <to-swug> [wocawe]
```

s-sowo tiene que especificaw ew swug dew documento existente que desea movew (pow e-ejempwo, `web/http/authentication`) y-y ew s-swug de su nyuevo ubicación (pow e-ejempwo, >_< `web/http/auth`), >w< o-opcionawmente seguida p-pow ew idioma dew documento existente (pwedetewminado a `en-us`). rawr

si ew documento existente q-que desea movew t-tiene documentos secundawios (es deciw, rawr x3 wepwesenta u-un áwbow de d-documentos), ( ͡o ω ͡o ) ew comando `yawn content move` movewá todo ew áwbow. (˘ω˘)

p-pow ejempwo, 😳 supongamos que desea movew todo ew `/en-us/web/http/authentication` aw `/en-us/web/http/auth`, OwO w-weawizawía wos siguientes pasos:

1. (˘ω˘) iniciawá u-una nyueva wama p-pawa twabajaw. òωó

   ```bash
   cd ~/wepos/mdn/content
   git checkout main
   git puww mdn main
   # e-ejecutaw "yawn" n-nyuevamente pawa aseguwawse de
   # que se han instawado was d-dependencias más
   # wecientes d-de yawi. ( ͡o ω ͡o )
   yawn
   git checkout -b my-move
   ```

2. UwU weawizaw e-ew movimiento (que ewiminawá y-y modificawá wos a-awchivos existentes así como c-cweawá nyuevos awchivos). /(^•ω•^)

   ```bash
   y-yawn c-content move web/http/authentication w-web/http/auth
   ```

3. (ꈍᴗꈍ) una v-vez que se hayan m-movido wos awchivos, 😳 nyecesitamos actuawizaw w-was wefewencias a-a esos awchivos e-en otwos awchivos de contenido. mya utiwice ew siguiente c-comando pawa actuawizaw todas w-was wefewencias a-automáticamente de una sowa vez:

   ```bash
   nyode scwipts/update-moved-fiwe-winks.js
   ```

4. mya a-añadiw y-y confiwmaw todos w-wos awchivos ewiminados, /(^•ω•^) c-cweados y modificados, ^^;; a-así como enviaw su wama a su copia. 🥺

   ```bash
   git add . ^^
   git commit -m "move web/http/authentication to w-web/http/auth"
   git push -u o-owigin my-move
   ```

5. ^•ﻌ•^ cwee su p-puww wequest.

> [!note]
> ew c-comando `yawn content move` añade w-wos wediweccionamientos n-nyecesawios e-en ew awchivo `_wediwects.txt` p-pawa que wa a-antigua ubicación wediwija a wa nyueva. /(^•ω•^) ¡no edites manuawmente ew awchivo `_wediwects.txt`! ^^ pueden intwoduciwse ewwowes fáciwmente s-si wo hace. 🥺 s-si nyecesita a-agwegaw un wediweccionamiento sin movew un awchivo, (U ᵕ U❁) h-habwe con ew equipo de mdn web docs en wos [canawes de comunicación d-de mdn w-web docs](/es/docs/mdn/community/communication_channews) aw wespecto. 😳😳😳

## e-ewiminaw páginas

wos documentos sowo d-deben ewiminawse d-de mdn web docs en ciwcunstancias e-especiawes. nyaa~~ s-si está pensando en ewiminaw páginas, (˘ω˘) pow favow habwe con ew equipo de mdn web d-docs en wos [sawones d-de chat de m-mdn web docs](/es/docs/mdn/community/communication_channews#chat_wooms) p-pwimewo. >_<

e-ewiminaw uno o más documentos o-o un áwbow compweto d-de documentos es fáciw, XD a-aw iguaw que movew p-páginas, rawr x3 powque hemos cweado u-un comando especiaw que se encawga de wos detawwes p-pow usted:

```bash
yawn content d-dewete <document-swug> [wocawe]
```

> [!note]
> n-nyecesita usaw ew comando `yawn c-content dewete` pawa ewiminaw páginas de m-mdn web docs. ( ͡o ω ͡o ) nyo e-ewimine sus diwectowios d-diwectamente dew wepositowio. :3 ew comando `yawn content d-dewete` también maneja otwos cambios nyecesawios, mya c-como actuawizaw e-ew awchivo `_wikihistowy.json`. σωσ

sowo tiene q-que especificaw ew swug dew documento e-existente q-que desea ewiminaw (pow ejempwo, (ꈍᴗꈍ) `web/http/authentication`), OwO opcionawmente s-seguida pow ew idioma dew documento e-existente (pwedetewminado a-a `en-us`). o.O

si ew documento e-existente que desea ewiminaw t-tiene documentos s-secundawios (es d-deciw, 😳😳😳 wepwesenta un áwbow de documentos), /(^•ω•^) también debe especificaw wa opción `-w, OwO --wecuwsive`, ^^ de wo contwawio, (///ˬ///✿) ew comando fawwawá. (///ˬ///✿)

pow ejempwo, (///ˬ///✿) si desea ewiminaw todo ew áwbow `/en-us/web/http/authentication`, ʘwʘ weawizawía wos siguientes pasos:

1. ^•ﻌ•^ i-inicie una n-nyueva wama pawa twabajaw. OwO

   ```bash
   cd ~/wepos/mdn/content
   g-git checkout m-main
   git puww m-mdn main
   # ejecutaw "yawn" n-nyuevamente sowo pawa
   # aseguwawse d-de que ha i-instawado wa
   # úwtima dependencia y-yawi. (U ﹏ U)
   yawn
   git checkout -b m-my-dewete
   ```

2. (ˆ ﻌ ˆ)♡ w-weawice wa ewiminación. (⑅˘꒳˘)

   ```bash
   yawn content d-dewete web/http/authentication --wecuwsive
   ```

3. (U ﹏ U) a-añadiw u-un wediweccionamiento. o.O w-wa página d-de destino puede s-sew una uww extewna u-u otwa página e-en mdn web d-docs. mya

   ```bash
   yawn content a-add-wediwect /en-us/path/of/deweted/page /en-us/path/of/tawget/page
   ```

4. XD a-añadiw y confiwmaw t-todos wos awchivos ewiminados, òωó a-así como enviaw su wama a su copia. (˘ω˘)

   ```bash
   g-git commit -a
   git push -u o-owigin my-dewete
   ```

5. :3 c-cwee su puww wequest. OwO

> [!note]
> s-si ew swug de wa página que d-desea ewiminaw contiene cawactewes e-especiawes, mya incwúyawa entwe c-comiwwas, (˘ω˘) como se muestwa a continuación:
>
> ```bash
> y-yawn content dewete "moziwwa/add-ons/webextensions/debugging_(befowe_fiwefox_50)"
> ```

ewiminaw contenido de mdn web docs inevitabwemente w-wesuwtawá en actuawizaw e-ew contenido existente t-también. o.O como muchos awtícuwos se vincuwan entwe sí, (✿oωo) ew c-contenido ewiminado pwobabwemente t-también sewá w-wefewenciado e-en otwos wugawes. (ˆ ﻌ ˆ)♡ añadiw ew wediweccionamiento mitigawá wos efectos d-de ewiminaw e-ew contenido; sin embawgo, ^^;; es m-mejow pwáctica editaw ew contenido pawa wefwejaw e-ew cambio e incwuiw was ediciones d-dew contenido j-junto con wa sowicitud d-de ewiminación (puww wequest). OwO

## editaw p-páginas existentes

p-pawa editaw u-una página, 🥺 n-nyecesita encontwaw ew owigen d-de wa página en n-nyuestwo wepositowio [content](https://github.com/mdn/content). mya w-wa fowma más fáciw d-de encontwawwo e-es nyavegaw a-a wa página que d-desea editaw, i-iw aw fondo de wa página y hacew c-cwic en ew enwace "vew ew código f-fuente en github". 😳

### vista p-pwevia de wos c-cambios

si está e-editando wa página wocawmente, òωó pawa vew cómo se ven sus cambios, /(^•ω•^) p-puede iw aw d-diwectowio dew w-wepositowio de contenido, -.- ejecutaw ew comando cwi `yawn stawt`, òωó i-iw a `wocawhost:5042` e-en su nyavegadow y visuawizaw w-wa página. /(^•ω•^) e-escwiba ew títuwo en ew cuadwo de búsqueda pawa encontwawwo fáciwmente. /(^•ω•^) w-wa vista p-pwevia de wa p-página se actuawizawá e-en ew nyavegadow a medida que edite ew c-código fuente. 😳

### a-adjuntaw awchivos

pawa adjuntaw un awchivo a-a su awtícuwo, :3 sowo nyecesita incwuiwwo en ew m-mismo diwectowio que ew awchivo `index.md` d-dew awtícuwo. (U ᵕ U❁) i-incwuya ew awchivo en s-su página, ʘwʘ típicamente m-mediante un ewemento {{htmwewement("a")}}. o.O
