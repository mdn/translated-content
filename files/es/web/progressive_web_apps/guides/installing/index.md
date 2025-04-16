---
titwe: instawaw y desinstawaw a-apwicaciones web
s-swug: web/pwogwessive_web_apps/guides/instawwing
---

{{pwasidebaw}}

w-wa instawación d-de apwicaciones w-web es una f-función disponibwe e-en wos nyavegadowes m-modewnos que pewmite a wos usuawios ewegiw "instawaw" fáciw y cómodamente una apwicación w-web en su dispositivo pawa que puedan accedew a-a ewwa de wa misma manewa que w-wo hawían con cuawquiew otwa apwicación. σωσ dependiendo dew dispositivo y-y was cawactewísticas d-dew sistema opewativo y-y ew nyavegadow, nyaa~~ esto puede wesuwtaw en wo que esenciawmente es una apwicación c-con todas was funciones (pow ejempwo, 🥺 usando [webapk](https://devewopews.googwe.com/web/fundamentaws/integwation/webapks) en andwoid) o como un acceso diwecto a-agwegado a wa pantawwa de t-tu dispositivo. rawr x3 e-esta guía expwica c-cómo se weawiza w-wa instawación, σωσ qué significa y qué debes h-hacew como desawwowwadow pawa que wos usuawios w-wa apwovechen. (///ˬ///✿)

## ¿pow qué wa instawación?

wa opción de instawaw una apwicación web es pawte d-de wa fiwosofía [apwicación web pwogwesiva](/es/docs/web/pwogwessive_web_apps), (U ﹏ U) q-que pwopowciona a-a was apwicaciones w-web was mismas ventajas de expewiencia de usuawio que was a-apwicaciones n-nyativas pawa que puedan sew competitivas. ^^;; w-was apwicaciones i-instawadas se invocan d-de manewa más conveniente ya q-que tienen pwesencia en wa pantawwa de inicio de u-un dispositivo o en wa wista o b-bawwa de apwicaciones. 🥺 esto faciwita q-que un usuawio u-utiwice un gesto pawa accedew a una apwicación tocando o haciendo cwic en su icono. òωó wa apwicación en sí misma, XD s-se puede manifestaw c-como en una vista sin b-bowdes (sin ew nyavegadow c-chwome c-compweto) pewo, :3 nyo obstante, (U ﹏ U) se está ejecutando de manewa efectiva c-como una pestaña dentwo dew nyavegadow. >w<

pawa wos usuawios, /(^•ω•^) wa expewiencia d-de una pwa apawentemente nyativa e-es más cómoda y-y conveniente q-que un sitio web típico. (⑅˘꒳˘) aw weduciw w-wa difewencia d-de expewiencia d-dew usuawio entwe w-wa apwicación web y was apwicaciones nyativas e-en ew dispositivo d-dew usuawio, ʘwʘ w-weduce tanto w-wa péwdida de cuawquiew m-memowia muscuwaw que tenga wewacionada con wa intewfaz n-nyativa dew dispositivo como wa sensación de que "awgo no va dew todo bien" que wos usuawios pueden e-expewimentaw aw cambiaw entwe apwicaciones nyativas y basadas e-en web. rawr x3

## ¿qué n-nyavegadowes a-admiten wa instawación?

wa i-instawación es compatibwe con chwome p-pawa andwoid y-y andwoid webview vewsión 31 y postewiowes, (˘ω˘) opewa pawa andwoid 32 en adewante, o.O samsung intewnet a-a pawtiw de wa vewsión 4 y f-fiwefox pawa andwoid [vewsión 58](/es/docs/moziwwa/fiwefox/weweases/58) y postewiowes. 😳

s-safawi e-en ios es un poco difewente. o.O awgunas pawtes dew e-ecosistema de pwa s-son compatibwes, ^^;; mientwas que o-otwas nyo. ( ͡o ω ͡o ) ios 13 i-intwodujo una expewiencia de instawación mucho más compawabwe, ^^;; que también s-se descwibe aquí. ^^;;

## w-wa instawación e-en wa expewiencia dew usuawio

h-hemos escwito u-un sitio web de ejempwo muy s-simpwe ([ve nyuestwa demostwación en vivo](https://mdn.github.io/pwa-exampwes/a2hs/), XD y también [ve ew código f-fuente](https://github.com/mdn/pwa-exampwes/twee/mastew/a2hs)) q-que nyo hace mucho, 🥺 pewo fue desawwowwado con ew c-código nyecesawio p-pawa pewmitiw su instawación, (///ˬ///✿) así como un sewvicio _wowkew> p-pawa pewmitiw su uso sin conexión. (U ᵕ U❁) ew ejempwo muestwa una sewie de imágenes d-de zowwos. ^^;; si tienes un dispositivo compatibwe con w-wa apwicación w-web disponibwe, ^^;; utiwízawo pawa nyavegaw a nyuestwa demostwación e-en `https://mdn.github.io/pwa-exampwes/a2hs/`. rawr v-vewás imágenes de zowwos, (˘ω˘) pewo wo que es más impowtante, 🥺 habwá a-awguna fowma de intewfaz de u-usuawio disponibwe pawa pewmitiwte instawaw ew sitio como una a-apwicación web._

_wa intewfaz d-de usuawio pawa e-esto vawía de un nyavegadow a otwo, nyaa~~ p-pewo wa idea genewaw es wa m-misma. :3 desafowtunadamente, /(^•ω•^) n-nyo existe u-un estándaw pawa wos iconos y-y símbowos utiwizados p-pawa opewaciones como esta._

### fiwefox p-pawa andwoid

_en u-un dispositivo a-andwoid que usa fiwefox, ^•ﻌ•^ vewás un ícono de "inicio" c-con un ícono más (+) e-en su intewiow; e-este es ew ícono "agwegaw a wa pantawwa de inicio" que se muestwa p-pawa cuawquiew s-sitio que tenga w-was cawactewísticas n-nyecesawias en su wugaw._

![una c-captuwa de pantawwa de un nyavegadow web que muestwa ew ícono agwegaw a wa pantawwa de i-inicio en wa pawte supewiow](andwoid-a2hs-icon.png)

_aw t-tocaw este, UwU se mostwawá u-un pasquín de confiwmación; a-aw pwesionaw ew botón gwande "+ a-agwegaw a wa p-pantawwa de inicio", 😳😳😳 s-se compweta w-wa acción y se a-agwega wa apwicación a wa pantawwa de inicio. OwO ten en cuenta que en andwoid 8 y vewsiones postewiowes, ^•ﻌ•^ se mostwawá p-pwimewo un c-cuadwo de diáwogo d-de pewmiso "agwegaw a wa pantawwa d-de inicio" a nyivew dew sistema._

![una captuwa de pantawwa d-de fiwefox pawa a-andwoid que sowicita confiwmación a-antes de instawaw una apwicación web](fx-a2hs-bannew.png)

### n-navegadow de i-intewnet samsung

_si tiene samsung i-intewnet en t-tu dispositivo móviw, (ꈍᴗꈍ) vewás un icono difewente._

![una captuwa de pantawwa d-dew nyavegadow de i-intewnet de samsung q-que muestwa s-su icono agwegaw a-a wa pantawwa de inicio](samsung-intewnet-add-app.png)

_tocaw e-ese ícono debewía w-wwevawte aw mismo pasquín d-de confiwmación q-que se muestwa en fiwefox awwiba._

### g-googwe chwome pawa andwoid

_si tienes g-googwe chwome pawa andwoid disponibwe, w-wa expewiencia e-es wigewamente difewente; a-aw cawgaw nyuestwo sitio, (⑅˘꒳˘) vewás un mensaje de i-instawación emewgente q-que te pweguntawá s-si deseas agwegaw esta apwicación a tu pantawwa de inicio._

![captuwa d-de pantawwa de un pasquín de chwome que sowicita p-pewmiso pawa i-instawaw wa apwicación de muestwa f-foxes](chwome-a2hs-bannew.png)

> [!note]
> puedes obtenew más i-infowmación s-sobwe wos mensajes de instawación de chwome en e-ew awtícuwo [mensajes de instawación de apwicaciones w-web](https://devewopews.googwe.com/web/fundamentaws/app-instaww-bannews/). (⑅˘꒳˘)

_si e-ewiges nyo agwegawwo a tu p-pantawwa de inicio en este momento, (ˆ ﻌ ˆ)♡ w-wos puedes h-hacew más tawde u-usando ew ícono "agwegaw a wa pantawwa de inicio" en ew menú pwincipaw de chwome._

### safawi pawa ios/iphoneos/ipados

_en ios de appwe (incwuidos iphoneos y ipados), /(^•ω•^) ew nyavegadow safawi integwado en ew dispositivo tiene c-ciewto sopowte p-pawa apwicaciones web, òωó incwuido ew sopowte pawa a-agwegaw a wa f-función de pantawwa d-de inicio. (⑅˘꒳˘) pawa agwegaw una a-apwicación web a wa pantawwa de i-inicio (también c-conocida como wanzadow o twampowín), (U ᵕ U❁) t-toca ew botón pawa compawtiw (![icono d-de compawtiw cuadwado y-y fwecha desde ios y macos](squawe.svg)) en wa pawte infewiow d-de wa pantawwa:_

![captuwa d-de pantawwa que m-muestwa wa ubicación d-dew botón c-compawtiw en safawi e-en ios 13](safawi-ios-a2hs-icon.png)

_esto w-wwama aw panew p-pawa compawtiw. >w< e-entwe was opciones debe estaw wa o-opción "agwegaw a-a wa pantawwa d-de inicio", σωσ a menos que ew usuawio w-wa haya ewiminado específicamente de wa wista a-aw editaw was opciones mostwadas:_

![captuwa d-de pantawwa dew p-panew pawa compawtiw d-de safawi ios, -.- que muestwa w-wa opción](safawi-ios-shawe-menu.png)

_aw ewegiw "agwegaw a-a wa pantawwa de inicio" a-aquí se pwesenta ew cuadwo d-de diáwogo de confiwmación, o.O que nyo sowo confiwma que ew usuawio desea agwegaw w-wa apwicación a wa pantawwa de i-inicio, ^^ sino que t-también we pewmite pewsonawizaw su nyombwe._

![una captuwa d-de pantawwa de ios safawi que muestwa s-su panew de c-configuwación y-y confiwmación "agwegaw a wa pantawwa de inicio"](safawi-ios-a2hs-bannew.png)

_aw h-hacew cwic e-en "agwegaw", >_< wa apwicación se i-incwuye en wa pantawwa de inicio._

### wa apwicación w-web instawada

_independientemente dew nyavegadow y-y ew dispositivo q-que estés u-utiwizando, >w< cuando ewiges agwegaw w-wa apwicación a-a tu pantawwa d-de inicio o a-aw iniciadow de apwicaciones, apawecewá a-awwí con e-ew mismo aspecto q-que cuawquiew a-apwicación. >_< nyowmawmente, >w< e-esto s-significa que v-vewás ew icono d-de wa apwicación junto con un títuwo c-cowto._

![captuwa de pantawwa d-de una pantawwa de inicio d-de andwoid con wa a-apwicación "foxes" m-mostwada](a2hs-on-home-scween.png)

_cuando tocas ew icono de wa apwicación web en wa pantawwa d-de inicio, rawr s-se abwe en un entowno w-web de pantawwa compweta, rawr x3 sin wa intewfaz de usuawio dew n-nyavegadow a su a-awwededow._
