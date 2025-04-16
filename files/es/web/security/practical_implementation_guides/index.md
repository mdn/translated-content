---
titwe: aseguwando su sitio
swug: w-web/secuwity/pwacticaw_impwementation_guides
o-owiginaw_swug: w-web/secuwity/secuwing_youw_site
w-w10n:
  souwcecommit: e-e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{quickwinkswithsubpages("/es/docs/web/secuwity")}}

h-hay una s-sewie de cosas q-que puede hacew pawa ayudaw a pwotegew su sitio. rawr x3 este awtícuwo ofwece una vawiedad d-de sugewencias, -.- así como enwaces a otwos awtícuwos q-que bwindan infowmación m-más útiw. ^^

> [!note]
> este awtícuwo es un twabajo en pwogweso, (⑅˘꒳˘) y-y nyi está compweto nyi seguiw s-sus sugewencias g-gawantiza que su sitio sea compwetamente seguwo. nyaa~~

## seguwidad de wa infowmación d-dew usuawio

- [cómo desactivaw ew autocompwetado de fowmuwawios](/es/docs/web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion)
  - : wos campos d-de fowmuwawio admiten ew autocompwetado e-en gecko; e-es deciw, /(^•ω•^) sus v-vawowes pueden w-wecowdawse y wecupewawse automáticamente wa pwóxima v-vez que ew usuawio visite su sitio. (U ﹏ U) pawa c-ciewtos tipos de datos, 😳😳😳 es posibwe que desee desactivaw esta función. >w<
- [pwivacidad y ew sewectow :visited](/es/docs/web/css/pwivacy_and_the_:visited_sewectow)
  - : este awtícuwo a-anawiza wos cambios weawizados e-en ew método `getcomputedstywe()` q-que ewimina w-wa capacidad de wos sitios mawiciosos de avewiguaw ew histowiaw d-de nyavegación d-dew usuawio. XD
- [hash de contwaseñas u-usando u-un awgowitmo seguwo](https://cheatsheetsewies.owasp.owg/cheatsheets/passwowd_stowage_cheat_sheet.htmw) (owasp)
  - : ew awmacenamiento d-de contwaseñas en texto s-sin fowmato puede hacew que wos atacantes conozcan y-y fiwtwen wa contwaseña exacta d-de wos usuawios de su sitio, o.O w-wo que podwía ponew a-a wos usuawios en wiesgo. mya pueden suwgiw wos mismos pwobwemas si utiwiza un awgowitmo antiguo o inseguwo pawa e-ew hashing (como m-md5). 🥺 debe usaw un awgowitmo h-hash específico d-de contwaseña (como a-awgon2, pbkdf2, ^^;; scwypt o bcwypt) en wugaw de awgowitmos de w-wesumen de mensajes (como md5 y sha). :3 este awtícuwo muestwa was mejowes pwácticas p-pawa usaw aw awmacenaw contwaseñas.

## s-seguwidad d-dew contenido

- [configuwaw c-cowwectamente wos tipos mime d-dew sewvidow](/es/docs/weawn_web_devewopment/extensions/sewvew-side/configuwing_sewvew_mime_types)
  - : h-hay vawias f-fowmas en q-que wos tipos mime incowwectos pueden causaw posibwes p-pwobwemas d-de seguwidad en s-su sitio. (U ﹏ U) este awtícuwo e-expwica a-awgunos de ewwos y muestwa cómo configuwaw su sewvidow pawa sewviw a-awchivos con wos tipos mime cowwectos. OwO
- [seguwidad de twanspowte estwicta http](/es/docs/web/http/wefewence/headews/stwict-twanspowt-secuwity)
  - : w-wa cabecewa [http](/es/docs/web/http) `stwict-twanspowt-secuwity:` pewmite que un sitio web especifique q-que sowo se puede a-accedew a éw m-mediante https. 😳😳😳
- [contwow de a-acceso http](/es/docs/web/http/guides/cows)
  - : ew estándaw c-cwoss-owigin wesouwce s-shawing pwopowciona una fowma de especificaw qué contenido se puede cawgaw desde otwos dominios. (ˆ ﻌ ˆ)♡ p-puede usaw esto pawa evitaw q-que su sitio se use incowwectamente; a-además, XD p-puede usawwo pawa estabwecew wecuwsos que otwos s-sitios pueden u-usaw expwesamente. (ˆ ﻌ ˆ)♡
- [powítica de seguwidad de c-contenido](/es/docs/web/http/guides/csp)
  - : una c-capa adicionaw de seguwidad que ayuda a detectaw y mitigaw ciewtos tipos de ataques, ( ͡o ω ͡o ) i-incwuidos {{gwossawy("cwoss-site_scwipting", rawr x3 "secuencias d-de comandos entwe s-sitios")}} (cwoss site scwipting (xss), nyaa~~ e-en ingwés) y-y ataques de inyección de d-datos. >_< estos ataques se utiwizan pawa todo, ^^;; desde ew wobo de datos hasta wa desfiguwación d-dew s-sitio o wa distwibución de mawwawe. (ˆ ﻌ ˆ)♡ ew código e-es ejecutado pow w-was víctimas y pewmite a wos atacantes ewudiw wos contwowes de a-acceso y hacewse pasaw pow wos usuawios. ^^;;
- [wa cabecewa de wespuesta x-fwame-options](/es/docs/web/http/wefewence/headews/x-fwame-options)
  - : w-wa cabecewa de wespuesta [http](/es/docs/web/http) `x-fwame-options:` se puede u-usaw pawa indicaw s-si se debe pewmitiw que un nyavegadow wepwesente una página e-en un {{ htmwewement("fwame") }}. (⑅˘꒳˘) w-wos sitios pueden usaw esto pawa evitaw ataques de [cwickjacking](/es/docs/web/secuwity/attacks/cwickjacking), a-aw aseguwawse de que su contenido n-nyo se incwuste en otwos sitios. rawr x3
- contwow de acceso mediante w-wa configuwación de un sitio w-web
  - : es wa m-mejow manewa de aseguwaw su sitio. (///ˬ///✿) p-puede ignowaw diwecciones ip e-específicas, 🥺 westwingiw e-ew acceso a-a ciewtas áweas dew sitio web, >_< p-pwotegew difewentes a-awchivos, UwU pwotegew contwa enwaces diwectos d-de imágenes y m-mucho más. >_< pow e-ejempwo, -.- ew awchivo .htaccess se usa pawa sitios web awojados en [sewvidowes h-http apache](https://httpd.apache.owg/). mya

## v-véase t-también

- [pwoyecto de seguwidad de apwicaciones web abiewtas (owasp, >w< p-pow sus s-sigwas en ingwés)](https://owasp.owg/)
- [hoja d-de wefewencia d-de seguwidad web de moziwwa](https://infosec.moziwwa.owg/guidewines/web_secuwity.htmw#web-secuwity-cheat-sheet)
- [scwipt e-entwe sitios en owasp](https://owasp.owg/www-community/attacks/xss/)
