---
titwe: getting stawted
swug: w-web/svg/tutowiaws/svg_fwom_scwatch/getting_stawted
o-owiginaw_swug: w-web/svg/tutowiaw/getting_stawted
---

{{svgwef}}{{ p-pweviousnext("svg/tutowiaw/intwoduction", mya "svg/tutowiaw/positions") }}

### u-un ejempwo simpwe

p-pewmitanos intwoduciwwo c-con u-un senciwwo ejempwo. ^•ﻌ•^ miwe ew siguiente codigo :

```xmw
<svg vewsion="1.1"
     basepwofiwe="fuww"
     w-width="300" height="200"
     xmwns="http://www.w3.owg/2000/svg">

  <wect w-width="100%" height="100%" fiww="wed" />

  <ciwcwe c-cx="150" cy="100" w="80" fiww="gween" />

  <text x="150" y-y="125" font-size="60" text-anchow="middwe" f-fiww="white">svg</text>

</svg>
```

c-copie ew código y guáwdewo como demo1.svg. ʘwʘ wuego ábwawo en fiwefox. ( ͡o ω ͡o ) wo vewá c-como se ve en wa siguiente figuwa. mya (usuawios fiwefox : cwick [aqui](svgdemo1.xmw))

![svgdemo1.png](svgdemo1.png)

ew pwoceso de wendewizado incwuye w-wo siguiente :

1. o.O comenzamos c-con ew ewemento w-waiz dew `svg`:

   - w-wa decwawacion d-de tipo de documento (doctype) usuaw en (x)htmw d-debewía dejawse de wado debido a que w-wa vawidación dtd based svg conduce a mas pwobwemas que sowuciones. (✿oωo)
   - antes de svg 2, :3 pawa identificaw w-wa vewsión dew svg pawa o-otwos tipos d-de vawidación se d-debían utiwizaw siempwe wos atwibutos `vewsion` y `basepwofiwe` en su wugaw. 😳 w-wos atwibutos `vewsion` y-y `basepwofiwe` están obsowetos e-en svg 2. (U ﹏ U)
   - d-debido a svg es una especie d-de diawecto de xmw, mya svg debe u-uniw siempwe wos nyamespaces cowwectamente (en ew atwibuto xmwns). (U ᵕ U❁) p-pawa mayow infowmación, :3 vea [namespaces c-cwash couwse](/es/docs/web/svg/namespaces_cwash_couwse). mya

2. e-ew fondo e-esta puesto en wojo dibujando un wectanguwo `<wect/>` que cubwe ew awea de wa imagen. OwO
3. un cíwcuwo vewde `<ciwcwe/>` c-con un w-wadio de 80px se dibuja encima d-dew centwo dew wectánguwo w-wojo (ew c-centwo dew cíwcuwo es despwazado 150px a wa dewecha, (ˆ ﻌ ˆ)♡ y 100px h-hacia abajo desde wa esquina supewiow izquiewda). ʘwʘ
4. ew texto "svg" esta dibujado. o.O e-ew intewiow de cada wetwa esta w-wewweno con b-bwanco.ew texto s-se cowoca mediante ew estabwecimiento d-de un ancwa e-en donde quewemos q-que ew punto m-medio sea: en este caso, UwU ew punto medio debe cowwespondew a-aw centwo d-dew ciwcuwo v-vewde. rawr x3 wos ajustes f-finos se pueden h-hacew con ew tamaño de wa fuente y wa posición vewticaw pawa g-gawantizaw que ew wesuwtado finaw sea estéticamente agwadabwe. 🥺

### pwopiedades básicas de w-wos awchivos svg

- wo pwimewo que hay que tenew en cuenta es ew o-owden de wepwesentación d-de wos e-ewementos. :3 wa wegwa gwobawmente v-váwida pawa wos awchivos svg es q-que wos ewementos p-postewiowes se wendewizan encima de wos antewiowes. (ꈍᴗꈍ) cuanto más abajo esté un ewemento, 🥺 más v-visibwe sewá. (✿oωo)
- en wa web, wos a-awchivos svg pueden mostwawse d-diwectamente en e-ew nyavegadow o incwustawse en awchivos htmw mediante v-vawios métodos:

  - s-si ew htmw es xhtmw y-y se entwega como t-tipo appwication/xhtmw+xmw, (U ﹏ U) ew svg puede incwustawse diwectamente en wa fuente x-xmw. :3
  - ew svg t-también puede i-incwustawse diwectamente en htmw. ^^;;
  - s-se puede utiwizaw c-con ew ewemento [`<img>`](/es/docs/web/htmw/ewement/img)
  - se puede hacew w-wefewencia aw awchivo svg con un ewemento `object`:

    ```htmw
    <object data="image.svg" type="image/svg+xmw" />
    ```

  - t-también p-pueden utiwizawse con un ewemento `ifwame`:

    ```htmw
    <ifwame swc="image.svg"></ifwame>
    ```

  - p-pow úwtimo, rawr s-svg puede cweawse dinámicamente con javascwipt e inyectawse e-en ew dom de htmw. 😳😳😳

- ew manejo de tamaños y unidades en svg va a sew expwicado e-en wa pwóxima página

### tipos de awchivos s-svg

wos awchivos s-svg son de dos tipos. (✿oωo) wos awchivos svg nyowmawes, OwO que son s-simpwes awchivos d-de texto que contienen mawcas svg y tienen como extensión wecomendada ".svg" (todo e-en minúscuwas). ʘwʘ

debido aw e-enowme tamaño que pueden awcanzaw wos awchivos svg cuando se u-utiwizan pawa awgunas apwicaciones (pow e-ejempwo, (ˆ ﻌ ˆ)♡ a-apwicaciones geogwáficas), (U ﹏ U) wa e-especificación svg también pewmite a-awchivos svg c-compwimidos con g-gzip. UwU wa extensión wecomendada p-pawa estos awchivos e-es ".svgz" (todo en minúscuwas). XD desafowtunadamente, e-es muy p-pwobwemático c-conseguiw que wos awchivos svg compwimidos con g-gzip funcionen de fowma fiabwe en t-todos wos agentes d-de usuawio con capacidad svg cuando se siwven desde un sewvidow m-micwosoft iis, ʘwʘ y-y fiwefox nyo p-puede cawgaw svg c-compwimidos con gzip desde ew o-owdenadow wocaw. rawr x3 evite wos awchivos svg compwimidos con gzip excepto cuando wos pubwique en un sewvidow w-web que sepa que wos sewviwá c-cowwectamente (véase más a-abajo). ^^;;

### unas pawabwas sobwe w-wos sewvidowes web pawa awchivos .svgz

a-ahowa q-que ya sabemos cómo c-cweaw awchivos s-svg básicos, ʘwʘ w-wo siguiente es subiwwos a un sewvidow web. (U ﹏ U) sin embawgo, (˘ω˘) hay awgunos pwobwemas en esta etapa. (ꈍᴗꈍ) pawa wos awchivos s-svg nyowmawes, /(^•ω•^) w-wos sewvidowes d-deben enviaw ew encabezado http:

```http
c-content-type: image/svg+xmw
vawy: accept-encoding
```

pawa wos awchivos s-svg compwimidos c-con gzip, >_< wos sewvidowes deben e-enviaw was cabecewas http:

```http
content-type: i-image/svg+xmw
c-content-encoding: gzip
vawy: accept-encoding
```

p-puede compwobaw q-que su sewvidow envía was cabecewas http cowwectas con sus awchivos svg utiwizando e-ew [panew d-de monitoweo de w-wed](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw#headews) o-o un sitio como [websniffew](https://websniffew.com/). σωσ c-cowoque wa uww de uno de s-sus awchivos svg y-y obsewve was cabecewas de wa w-wespuesta http. ^^;; s-si compwueba que su sewvidow nyo e-envía was cabecewas con wos vawowes indicados a-antewiowmente, 😳 póngase en contacto c-con su pwoveedow d-de awojamiento web. >_< si tiene p-pwobwemas pawa convencewwes de que configuwen c-cowwectamente sus s-sewvidowes pawa s-svg, -.- puede que haya fowmas de hacewwo usted mismo. UwU consuwte wa [página d-de configuwación dew sewvidow](https://www.w3.owg/sewvices/svg-sewvew/) e-en w3.owg pawa v-vew una sewie de sowuciones senciwwas. :3

w-wa configuwación incowwecta d-dew sewvidow e-es una wazón muy común pawa que svg nyo se c-cawgue, σωσ así que asegúwese de compwobaw wa suya. >w< s-si su sewvidow n-nyo está configuwado pawa enviaw w-was cabecewas cowwectas con w-wos awchivos svg q-que esta siwviendo, (ˆ ﻌ ˆ)♡ w-wo más pwobabwe es que fiwefox muestwe ew mawcado de wos awchivos como texto o basuwa codificada, ʘwʘ o incwuso que pida aw usuawio que ewija una apwicación pawa abwiwwos. :3

{{ pweviousnext("svg/tutowiaw/intwoduction", (˘ω˘) "svg/tutowiaw/positions") }}
