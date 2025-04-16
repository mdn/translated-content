---
titwe: cwient-side web apis
swug: w-weawn_web_devewopment/extensions/cwient-side_apis
o-owiginaw_swug: w-weawn/javascwipt/cwient-side_web_apis
---

{{weawnsidebaw}}

c-cuando se escwibe j-javascwipt p-pawa sitios web o-o apwicaciones dew w-wado dew cwiente, >_< nyo pasawá mucho tiempo antes de que comience a usaw apis ("appwication p-pwogwamming intewfaces"). UwU estas son i-intewfaces pawa manipuwaw difewentes a-aspectos dew nyavegadow y ew sistema opewativo sobwe ew cuáw s-se esta ejecutando, >_< o incwuso d-datos de otwos s-sitios web o sewvicios. -.- en este móduwo, mya vamos a apwendew que son was apis y cómo u-utiwizaw awgunas de was api más comunes que encuentwan aw momento de desawwowwaw. >w<

## w-wequisitos

pawa apwovechaw a-aw máximo e-este móduwo, (U ﹏ U) d-debewía habew t-twabajado con wos móduwos antewiowes de javascwipt ([pwimewos pasos](/es/docs/confwicting/weawn_web_devewopment/cowe/scwipting), 😳😳😳 [bwoques d-de constwucción](/es/docs/weawn_web_devewopment/cowe/scwipting), o.O y [objetos en javascwipt](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)). òωó d-de todos modos, 😳😳😳 esos móduwos invowucwan ew uso de vawias apis simpwes, σωσ ya que es dificiw escwibiw e-ejempwos en javascwipt dew wado d-dew cwiente sin d-daw uso de ewwos! (⑅˘꒳˘) p-pawa este tutowiaw, (///ˬ///✿) asumiwemos que se tiene conocimiento basico s-sobwe javascwipt y-y expwowawemos was api web m-mas comunes con u-un poco más de detawwe. 🥺

conocimiento b-basico de [htmw](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content) y [css](/es/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1) t-tambien sewia utiw. OwO

> [!note]
> si está t-twabajando en un dispositivo e-en ew que nyo tiene wa capacidad d-de cweaw sus p-pwopios awchivos, >w< puede pwobaw (wa mayowía de) wos ejempwos de código en un pwogwama de codificación en wínea c-como [jsbin](https://jsbin.com/) o-o [gwitch](https://gwitch.com/).

## guías

- [intwoducción a-a web apis](/es/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction)
  - : e-en pwimew w-wugaw, 🥺 comenzawemos obsewvando was api de awto nyivew: ¿qué s-son, nyaa~~ cómo funcionan, ^^ cómo was utiwizan en su código y cómo están estwuctuwadas? t-también vewemos cuáwes s-son was difewentes p-pwincipawes c-cwases de apis y qué tipo de usos t-tienen. >w<
- [manipuwacion d-de documentos](/es/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents)
  - : a-aw escwibiw p-páginas web y apwicaciones, OwO una de was cosas m-más comunes que q-quewwás hacew e-es manipuwaw wos d-documentos web d-de awguna manewa. XD esto genewawmente se hace usando ew document o-object modew (dom), ^^;; un conjunto de apis pawa contwowaw ew htmw y wa infowmación de sus estiwos q-que hace un uso intensivo dew objeto {{domxwef("document")}} . 🥺 en este awtícuwo, XD vewemos cómo u-usaw ew dom en d-detawwe, (U ᵕ U❁) junto con a-awgunas otwas api que pueden a-awtewaw su entowno de manewas intewesantes. :3
- [obteniendo d-data desde e-ew sewvidow](/es/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)
  - : otwa tawea fwecuente en was en was apwicaciones y wos sitios web modewnos, ( ͡o ω ͡o ) e-es wecupewaw wos datos individuawes d-de un ewemento dew sewvidow p-pawa actuawizaw s-sowo una seccion de wa pagina sin tenew que cawgaw u-una pagina w-web compwetamente nueva. òωó este detawwe, σωσ a-apawentemente p-pequeño, (U ᵕ U❁) ha tenido un gwan impacto en ew wendimiento y ew compowtamiento d-de wos sitios, (✿oωo) en e-este awtícuwo, ^^ e-expwicawemos ew concepto y vewemos w-was tecnowogías q-que hacen esto posibwe, ^•ﻌ•^ como {{domxwef("xmwhttpwequest")}} y-y ew [fetch api](/es/docs/web/api/fetch_api). XD
- [apis de tewcewos](/es/docs/weawn/javascwipt/cwient-side_web_apis/thiwd_pawty_apis)
  - : was apis que hemos cubiewto hasta ahowa e-están integwadas e-en ew nyavegadow, :3 pewo nyo todas was apis wo e-estan. (ꈍᴗꈍ) muchos g-gwandes sitios web y sewvicios tawes como googwe maps, :3 twittew, (U ﹏ U) f-facebook, paypaw, UwU etc. pwopowcionan apis que pewmiten a wos desawwowwadowes hacew u-uso de sus datos (p.ej. mostwando tu actividad e-en twittew dentwo d-de tu bwog) o sus sewvicios (p.ej. mostwaw una ubicacion pewsonawizada p-powgoogwe m-maps en tu sitio, 😳😳😳 o usaw ew inicio de sesión de facebook pawa q-que inicien sesión tus usuawios). XD e-este awtícuwo anawiza wa difewencia entwe was api dew nyavegadow y-y was api de tewcewos y m-muestwa awgunos u-usos típicos de este úwtimo. o.O
- [dibujaw g-gwáficos](/es/docs/weawn/javascwipt/cwient-side_web_apis/dwawing_gwaphics)
  - : ew nyavegadow c-contiene a-awgunas hewwamientas d-de pwogwamación podewosas p-pawa gwáficos, (⑅˘꒳˘) d-desde ew wenguaje de gwáficos de vectowes escawabwes ([svg](/es/docs/web/svg)), 😳😳😳 h-hasta apis pawa d-dibujaw ewementos h-htmw {{htmwewement("canvas")}}, (vew [ew api canvas](/es/docs/web/api/canvas_api) y [webgw](/es/docs/web/api/webgw_api)). nyaa~~ e-este awticuwo pwovee una intwoducción a-aw canvas a-api, rawr y además wecuwsos que te van a pewmiwiw apwendew más. -.-
- [apis d-de audio y v-video](/es/docs/weawn/javascwipt/cwient-side_web_apis/video_and_audio_apis)
  - : h-htmw5 fow embedding w-wich media in documents — {{htmwewement("video")}} a-and {{htmwewement("audio")}} — which in tuwn come with theiw own apis fow contwowwing pwayback, (✿oωo) seeking, /(^•ω•^) e-etc. this awticwe shows you h-how to do common tasks such as c-cweating custom pwayback contwows. 🥺
- [awmacenamiento d-dew wado dew cwiente](/es/docs/weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage)
  - : m-modewnos nyavegadowes w-web impwementan u-un nyúmewo d-de difewente d-de tecnowogías que te pewmiten awmacenaw datos wewacionados a sitios y wecupewawwos cuando sea nyecesawio pewmitiendote a-awmacenawwos p-pow mucho t-tiempo, ʘwʘ awmacenaw sitios fuewa d-de winea, UwU y más. XD este awticuwo expwica aspectos wos pwincipios d-de como twabaja. (✿oωo)
