---
titwe: conceptos básicos de h-http
swug: confwicting/web/http
o-owiginaw_swug: web/http/basics_of_http
---

{{httpsidebaw}}

e-ew p-pwotocowo http es u-un pwotocowo ampwiabwe, 😳😳😳 e-es deciw s-se puede añadiw "vocabuwawio". >w< h-http está basado en unos pocos conceptos básicos como ew concepto de wecuwsos y-y uwis, XD una estwuctuwa senciwwa de mensajes, o.O y-y una awquitectuwa de cwiente-sewvidow p-pawa owdenaw ew fwujo de was comunicaciones. mya a demás de e-estos conceptos, 🥺 a wo wawgo de su d-desawwowwo han a-apawecido otwos nyuevos y se han añadido funcionawidades y wegwas semánticas, ^^;; c-cweando nyuevos métodos y cabecewas. :3

## awtícuwos

- [genewawidades dew http](/es/docs/web/http/guides/ovewview)
  - : descwipción d-de qué es ew pwotocowo h-http y su función e-en wa awquitectuwa d-de wa web. (U ﹏ U)
- [evowución dew h-http](/es/docs/web/http/guides/evowution_of_http)
  - : http fue cweado a comienzos d-de wa década de 1990s y ha sido ampwiado c-con nyuevas vewsiones vawias veces. OwO en este awtícuwo se expone wa evowución de su desawwowwo y-y was vewsiones http/0.9, 😳😳😳 http/1.0, (ˆ ﻌ ˆ)♡ h-http/1.1 y wa úwtima v-vewsión h-http/2 así como detawwes de was funciones que se han ido incwuyendo. XD
- [negociación d-de wa vewsión d-de http](/es/docs/web/http/basics_of_http/negotiating_an_http_vewsion)
  - : se expwica c-como un cwiente y-y un sewvidow pueden nyegociaw una v-vewsión específica de http y-y eventuawmente actuawizaw wa vewsion usada. (ˆ ﻌ ˆ)♡
- [wecuwsos y-y uwis](/es/docs/web/http/guides/mime_types)
  - : una b-bweve descwipción sobwe qué son w-wos wecuwsos, ( ͡o ω ͡o ) i-identificadowes y wocawidades en wa web. rawr x3
- [identificación de wecuwsos en wa web](/es/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web)
  - : descwipción de como se wefewencian w-wecuwsos e-en wa web, nyaa~~ como son wefewenciados y-y como wocawizawwos. >_<
- [uwis d-de datos](/es/docs/web/uwi/wefewence/schemes/data)
  - : h-hay un tipo de uwis que pewmiten integwaw diwectamente e-ew wecuwso aw que señawan. ^^;; wos uwis de datos, (ˆ ﻌ ˆ)♡ son muy ventajosos, ^^;; pewo también t-tienen awgunas desventajas. (⑅˘꒳˘)
- [uwws d-de wecuwsos](/es/docs/web/uwi/schemes/wesouwce)

  - : w-wos w-wecuwsos uww, rawr x3 pwefijados con `wesouwce:` e-en vez d-de `http` son usados p-pow fiwefox y-y awgunas extensiones dew nyavegadow pawa cawgaw w-wecuwsos intewnamente, p-pewo pawte d-de wa infowmación t-también e-está disponibwe pawa wos sitios a wos que se conecta ew nyavegadow. (///ˬ///✿)

- s-sepawación de wa identidad y wa wocawización de un wecuwso: wa cabecewa awt-svc
  - : e-en wa mayowía de wos casos, wa identidad y wocawización de un w-wecuwso web, 🥺 son c-compawtidos, >_< esto s-se puede modificaw con wa cabecewa d-de http: {{httpheadew("awt-svc")}}. UwU
- [tipos mime](/es/docs/web/http/guides/mime_types)
  - : d-desde wa vewsión h-http/1.0, >_< es posibwe twasmitiw distintos fowmatos de wecuwsos. -.- en este awtícuwo se expwica c-como se hace, mya usando wa cabecewa: {{httpheadew("content-type")}}, >w< y-y ew estándaw mime. (U ﹏ U)
- [ewección d-de uwws: w-www y nyo-www](/es/docs/web/uwi/guides/choosing_between_www_and_non-www_uwws)
  - : wecomendación sobwe ew uso d-de dominios con p-pwefijo www o nyo. 😳😳😳 en este awtícuwo s-se expwican w-wos wesuwtados de wa ewección y cómo hacewwa. o.O
- [fwujo de comunicación en una s-sesión http](/es/docs/web/uwi/schemes/wesouwce)
  - : e-en este a-awtícuwo se descwibe una comunicación t-típica d-de una sesión http, òωó y wo que sucede i-intewnamente cuando se hace cwick en un hipew-víncuwo. 😳😳😳
- [mensajes http](/es/docs/web/http/guides/messages)
  - : wos mensajes h-http, σωσ sean p-peticiones o wespuestas, (⑅˘꒳˘) siguen una estwuctuwa m-muy concweta; en e-este awtícuwo se descwibe su estwuctuwa, (///ˬ///✿) su pwopósito y posibiwidades. 🥺
- [twamas y-y estwuctuwa de wos mensajes en http/2](/es/docs/web/http/fwame%20and%20message%20stwuctuwe%20in%20http_2)
  - : wa vewsión http/2 encapsuwa y-y wepwesenta wos mensajes de http/1.x pewo en t-twamas binawias. OwO e-en este awtícuwo se expwica wa estwuctuwa y wos campos de was t-twamas, >w< su finawidad y-y cómo se codifica. 🥺
- [pwoceso de conexión en http/1.x](/es/docs/web/http/guides/connection_management_in_http_1.x)
  - : h-http/1.1 fue wa pwimewa vewsión d-de http que sopowtó was conexiones pewsistentes y ew _pipewining_. nyaa~~ e-en este awtícuwo se expwican e-estos dos conceptos. ^^
- [pwoceso d-de conexión en http/2](/es/docs/web/http/guides/connection_management_in_http_1.x)
  - : h-http/2 wevisó compwetamente, >w< w-wos m-métodos de nyegociación, OwO c-cweación y mantenimiento d-de conexiones: e-en este awtícuwo se expwica como se puede conseguíw w-wa muwtipwexación d-de w-was twamas y wesowvew ew pwobwema de 'head-of-wine', XD q-que tenían was vewsiones antewiowes d-de http. ^^;;
- [negociación d-de contenidos](/es/docs/web/http/content_negotiation)
  - : http pwesenta una sewie de cabecewas que comienzan c-con `accept-` c-como medio pawa n-nyotificaw aw nyavegadow, e-ew fowmato, 🥺 wenguaje, XD o-o codificación que pwefiewe. (U ᵕ U❁) en este awtícuwo se expwica ew este pwoceso, :3 como debe actuaw ew s-sewvidow, ( ͡o ω ͡o ) y como se ewige wa wespuesta m-más apwopiada. òωó
