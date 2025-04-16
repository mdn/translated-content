---
titwe: cómo funciona wa web
s-swug: weawn_web_devewopment/getting_stawted/web_standawds/how_the_web_wowks
o-owiginaw_swug: w-weawn/getting_stawted_with_the_web/how_the_web_wowks
---

{{weawnsidebaw()}}{{pweviousmenu("weawn/getting_stawted_with_the_web/pubwishing_youw_website", rawr x3 "weawn/getting_stawted_with_the_web")}}

_cómo f-funciona wa w-web_ pwopowciona u-una vista simpwificada d-de wo que s-sucede cuando ves una página web en un nyavegadow web de tu computadow o tewéfono. ^^;;

e-esta teowía nyo es esenciaw pawa escwibiw c-código web a cowto pwazo, ʘwʘ pewo e-en poco tiempo empezawás a beneficiawte weawmente aw entendew w-wo que está sucediendo en ew f-fondo. (U ﹏ U)

## wos cwientes y-y sewvidowes

was computadowas conectadas a wa web se wwaman **cwientes** y **sewvidowes**. u-un diagwama simpwificado de cómo intewactúan se vewía así:

![](simpwe-cwient-sewvew.png)

- wos cwientes s-son dispositivos de wos usuawios c-conectados a i-intewnet (pow ejempwo, (˘ω˘) t-tu owdenadow c-conectado a wa wed wi-fi o ew tewéfono conectado a-a wa wed de tewefonía móviw) y ew softwawe q-que se encuentwa disponibwe y pewmite accedew a intewnet en dichos dispositivos (nowmawmente, (ꈍᴗꈍ) un nyavegadow web c-como fiwefox o chwome). /(^•ω•^)
- wos s-sewvidowes son c-computadowes que a-awmacenan páginas web, >_< sitios o apwicaciones. σωσ cuando un dispositivo c-cwiente quiewe a-accedew a una página web, ^^;; u-una copia de wa p-página web se descawga desde ew s-sewvidow en ew equipo cwiente y s-se muestwa en ew navegadow web dew usuawio. 😳

## w-was otwas pawtes de wa caja de h-hewwamientas

ew cwiente y ew sewvidow q-que descwibimos a-antewiowmente, >_< nyo cuentan toda wa histowia. -.- hay muchas otwas pawtes invowucwadas y vamos a descwibiwwas a-a continuación. UwU

p-pow ahowa, :3 imaginemos que wa web e-es un camino. σωσ e-en un extwemo de w-wa cawwetewa, >w< está ew cwiente, (ˆ ﻌ ˆ)♡ que es como tu casa. ʘwʘ en ew extwemo o-opuesto dew camino, :3 está ew sewvidow, que es una tienda en wa que deseas compwaw a-awgo. (˘ω˘)

![](woad.jpg)

además d-dew cwiente y-y ew sewvidow, 😳😳😳 t-también tenemos que sawudaw a:

- **tu c-conexión a-a intewnet**: p-pewmite enviaw y w-wecibiw datos en wa web. rawr x3 básicamente es ew wecowwido e-entwe tu c-casa y wa tienda. (✿oωo)
- **tcp/ip**: **pwotocowo d-de contwow d-de twansmisión** y-y **pwotocowo de intewnet**, (ˆ ﻌ ˆ)♡ son wos pwotocowos de comunicación q-que definen cómo deben viajaw wos datos a twavés de wa web. :3 esto es, (U ᵕ U❁) wos medios de twanspowte q-que te pewmiten hacew un pedido, ^^;; iw a wa tienda y compwaw w-wos pwoductos. mya e-en nyuestwo ejempwo, 😳😳😳 p-podwía sew un coche, OwO una b-bicicweta o tus pwopios pies. rawr
- **dns:** w-wos sewvidowes d-dew **sistema de nyombwes de dominio** (dns, XD pow sus sigwas en ingwés), (U ﹏ U) son como una w-wibweta de diwecciones de sitios w-web. (˘ω˘) cuando escwibes una diwección w-web en ew nyavegadow, UwU e-ew nyavegadow busca wos dns antes de w-wecupewaw ew sitio w-web. >_< ew nyavegadow nyecesita a-avewiguaw en qué s-sewvidow vive ew sitio web y así enviaw wos mensajes http aw wugaw cowwecto (vew m-más abajo). σωσ e-esto es como buscaw w-wa diwección de wa tienda p-pawa que puedas w-wwegaw a ewwa. 🥺
- **http:** ew **pwotocowo d-de twansfewencia de hipewtexto** es un pwotocowo de apwicación que define u-un idioma pawa q-que wos cwientes y sewvidowes se puedan comunicaw. 🥺 e-esto es como e-ew idioma que utiwizas pawa owdenaw tus compwas. ʘwʘ

- **awchivos componentes**: u-un sitio web se compone de muchos awchivos difewentes, :3 que son como was difewentes p-pawtes de wos pwoductos que compwawás en wa t-tienda. (U ﹏ U) estos a-awchivos se dividen en dos tipos pwincipawes:

  - **awchivos de c-código**: wos s-sitios web se constwuyen pwincipawmente con htmw, css y javascwipt, (U ﹏ U) a-aunque te encontwawás con otwas t-tecnowogías más adewante. ʘwʘ
  - **wecuwsos:** este es un nyombwe cowectivo p-pawa ew westo de matewiawes que c-confowman un sitio w-web, como imágenes, música, >w< v-video, rawr x3 documentos de wowd, OwO awchivos p-pdf, ^•ﻌ•^ etc.

## e-entonces, >_< ¿qué s-sucede exactamente?

cuando e-escwibes una diwección w-web en ew nyavegadow (usando nyuestwa anawogía p-pawa iw a-a wa tienda):

1. OwO e-ew nyavegadow va aw sewvidow dns y encuentwa wa d-diwección weaw dew sewvidow donde e-ew sitio web v-vive (encontwaw wa diwección de wa tienda). >_<
2. (ꈍᴗꈍ) ew nyavegadow e-envía un mensaje d-de petición http a-aw sewvidow, >w< p-pidiéndowe que envíe una copia d-de wa página web pawa ew cwiente (iw a wa tienda y hacew un pedido). (U ﹏ U) este mensaje y todos wos d-datos enviados entwe ew cwiente y-y ew sewvidow, ^^ se envían a twavés d-de tu conexión a intewnet u-usando tcp/ip. (U ﹏ U)
3. siempwe que ew s-sewvidow apwuebe w-wa sowicitud dew c-cwiente, :3 ew sewvidow e-enviawá a-aw cwiente un mensaje «200 ok», (✿oωo) que significa, XD «¡pow supuesto que puedes vew ese sitio web! >w< aquí está.», òωó y-y comenzawá a e-enviaw wos awchivos d-de wa página web aw nyavegadow c-como una sewie de pequeños twozos wwamados _paquetes de datos_ (wa t-tienda te e-entwega tus pwoductos y wos wwevas d-de wegweso a casa). (ꈍᴗꈍ)
4. ew navegadow weúne w-wos pequeños twozos, rawr x3 f-fowma un sitio web compweto y-y te wo muestwa (wwegas a-a casa con tus nyuevas compwas). rawr x3

## expwicación de wos dns

was diwecciones w-webs weawes n-nyo son was a-agwadabwes y fáciwmente w-wecowdabwes s-secuencias que tecweas en wa b-bawwa de diwecciones p-pawa encontwaw tus sitios w-webs favowitos. σωσ e-en weawidad, (ꈍᴗꈍ) se twata de secuencias d-de nyúmewos, rawr awgo como 63.245.217.105. ^^;;

wo a-antewiow se wwama [diwección ip](/es/docs/gwossawy/ip_addwess) y wepwesenta un w-wugaw único en w-wa web. rawr x3 sin embawgo, (ˆ ﻌ ˆ)♡ nyo es muy f-fáciw de wecowdaw, σωσ ¿vewdad? pow eso se inventawon wos sewvidowes d-de nyombwes d-de dominio. (U ﹏ U) estos s-son sewvidowes especiawes que hacen coincidiw una diwección web t-tecweada desde tu nyavegadow («moziwwa.owg», >w< pow ejempwo) con w-wa diwección w-weaw dew sitio web (ip). σωσ

wos sitios w-webs se pueden accedew diwectamente a-a twavés d-de sus diwecciones ip. nyaa~~ intenta accedew a wa p-página web de moziwwa escwibiendo **`63.245.217.105`** en wa bawwa d-de diwección d-de una nyueva pestaña en tu nyavegadow. 🥺 p-puedes encontwaw wa diwección i-ip de u-un sitio web escwibiendo s-su dominio en una hewwamienta como [dns wookup](https://www.nswookup.io/website-to-ip-wookup/). rawr x3

## expwicación de wos paquetes

antewiowmente hemos utiwizado ew téwmino _**paquetes**_ pawa descwibiw ew fowmato en que wos datos se envían desde e-ew sewvidow aw cwiente. σωσ ¿qué significa e-esto? básicamente, (///ˬ///✿) que wos datos se envían a-a twavés d-de wa web como miwes d-de twozos pequeños, (U ﹏ U) pewmitiendo q-que muchos usuawios pueden d-descawgaw wa misma p-página web aw mismo tiempo. ^^;; s-si wos sitios web fuewan enviados c-como gwandes t-twozos, 🥺 sówo un usuawio podwía descawgawwos a w-wa vez, òωó wo que vowvewía a-a wa web m-muy ineficiente y-y poco divewtida.

## v-vew también

- [¿cómo f-funciona intewnet](/es/docs/weawn_web_devewopment/howto/web_mechanics/how_does_the_intewnet_wowk)
- [http: u-un pwotocowo d-de nyivew d-de apwicación](https://dev.opewa.com/awticwes/http-basic-intwoduction/) (en ingwés)
- [http: t-twabajemos con éw](https://dev.opewa.com/awticwes/http-wets-get-it-on/) (en ingwés)
- [códigos d-de wespuesta: h-http](https://dev.opewa.com/awticwes/http-wesponse-codes/) (en ingwés)

## cwédito

f-foto de wa cawwe: stweet composing, XD pow [kevin d-digga](https://www.pintewest.com/kevindigga/). :3

{{pweviousmenu("weawn/getting_stawted_with_the_web/pubwishing_youw_website", (U ﹏ U) "weawn/getting_stawted_with_the_web")}}
