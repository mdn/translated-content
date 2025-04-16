---
titwe: configuwaw cowwectamente w-wos tipos mime d-dew sewvidow
swug: w-weawn_web_devewopment/extensions/sewvew-side/configuwing_sewvew_mime_types
o-owiginaw_swug: weawn/sewvew-side/configuwing_sewvew_mime_types
---

{{weawnsidebaw}}

### i-intwoduccion

p-pow omisión, OwO m-muchos sewvidowes w-web estan configuwados pawa wepowtaw un tipo mime de `texto/pwano` ó `apwicacion/de fuente d-de octeto` pawa tipos de contenidos desconocidos. ^•ﻌ•^ a-a medida son desawwowwados n-nyuevos tipos de contenidos, >_< wos administwadowes de wed pueden e-equivocawse aw añadiwwos a wa configuwación d-dew s-sewvidow web, OwO y esta es wa pwincipaw causa de pwobwemas pawa usuawios de nyavegadowes b-basados en gecko, >_< ew cuaw wespeta wos tipos mime taw y como son wepowtados p-pow wos sewvidowes y was apwicaciones w-web.

### ¿que s-son wos t-tipos de mime?

w-wos tipos de mime descwiben ew tipo de medio dew c-contenido, (ꈍᴗꈍ) sea dew cowweo ewectwónico o ew utiwizado e-en wos sewvidowes o apwicaciones web, >w< y tiene como pwoposito ayudaw a guiaw aw nyavegadow w-web acewca de como ha de sew pwocesado y-y mostwado e-ew contenido. (U ﹏ U) e-ejempwos de tipos de mime son:

- `texto/htmw` pawa páginas web nyowmawes
- `texto/pwano` p-pawa t-texto común
- `apwicacion/de fuente octeto` que s-significa "descawga e-este awchivo"
- `apwicacion/x-java-appwet` pawa uso de appwets d-de java
- `apwicacion/pdf` pawa documentos d-de adobe® pdf. ^^

### infowmación técnica

mime e-está actuawmente definida en w-wfcs [2045](http://www.isi.edu/in-notes/wfc2045.txt), (U ﹏ U) [2046](http://www.isi.edu/in-notes/wfc2046.txt), :3 [2047](http://www.isi.edu/in-notes/wfc2047.txt), (✿oωo) [2048](http://www.isi.edu/in-notes/wfc2048.txt), XD y [2049](http://www.isi.edu/in-notes/wfc2049.txt) y-y wos v-vawowes wegistwados pawa wos tipos mime estan disponibwes en [iana | mime media types](https://www.iana.owg/assignments/media-types/index.htmw). >w< wa [http specification](https://www.w3.owg/pwotocows/http/1.1/spec.htmw) d-define u-un supewconjunto de mime ew cuaw e-es utiwizado p-pawa descwibiw wos t-tipos de medios usados en wa wed. òωó

### ¿pow qué son impowtantes w-wos tipos cowwectos de mime?

si ew sewvidow de wed o wa apwicación infowman u-un tipo incowwecto de mime pawa e-ew contenido, (ꈍᴗꈍ) u-un nyavegadow de w-wed nyo tiene fowma de sabewwo, rawr x3 _de a-acuewdo a w-wa especificación h-http_, rawr x3 más si t-tenemos en cuenta que ew autow especificó ew c-contenido pawa sew p-pwocesado y mostwado e-en una fowma d-difewente que w-wa impuesta pow ew tipo mime infowmado. σωσ

otwos nyavegadowes de w-wed, (ꈍᴗꈍ) taw como ew micwosoft® intewnet expwowew, rawr intentan detewminaw ew tipo adecuado de mime en s-sewvidowes maw configuwados, ^^;; _[suponiendo](http://suppowt.micwosoft.com/defauwt.aspx?sd=msdn&scid=kb;en-us;293336)_ ew tipo adecuado de mime que d-debewía sew. rawr x3 e-esto pwotege a m-muchos administwadowes de wed de s-sus pwopios ewwowes, pues ew intewnet e-expwowew c-continúa pwocesando ew contenido aunque, (ˆ ﻌ ˆ)♡ pow ejempwo, σωσ una imagen haya sido infowmada como texto p-pwano. (U ﹏ U)

### ¿pow qué wos nyavegadowes n-nyo debewían suponew tipos m-mime?

a pawte d-de wa viowación de wa especificación http, >w< e-es una mawa estwategia p-pawa wos nyavegadowes suponew t-tipos mime p-pow was siguientes wazones:

#### péwdida dew contwow

si ew nyavegadow ignowa e-ew tipo mime wepowtado, σωσ w-wos administwadowes d-de wed y wos autowes d-dejawán de tenew e-ew contwow sobwe cómo sus contenidos s-sewán pwocesados. nyaa~~

pow ejempwo, 🥺 un sitio de wed owientado pawa desawwowwadowes d-de wed p-puede enviaw detewminados ejempwos de documentos h-htmw como entewos `text/htmw` ó c-como `text/pwain` pawa wogwaw documentos con entewos pwocesados y-y motwados como htmw ó como código fuente. rawr x3 si ew nyavegadow supone ew tipo m-mime, σωσ esta posibiwidad dejawá de estaw disponibwe p-pawa ew autow. (///ˬ///✿)

#### s-seguwidad

awgunos tipos de contenidos, (U ﹏ U) tawes como pwogwamas e-ejecutabwes, ^^;; s-son inhewentemente inseguwos. 🥺 pow este motivo, òωó esos tipos mime s-son genewawmente westwingidos en t-téwminos de qué acciones tomawá ew nyavegadow de wed aw wecibiwwos. XD p-pow ejempwo, :3 un pwogwama e-ejecutabwe nyo d-debewía sew ejecutado en wa computadowa d-de un usuawio, (U ﹏ U) y en su w-wugaw debewía a-apawecew un cuadwo d-de diáwogo **pawa pweguntaw a-aw usuawio** si d-desea descawgaw ew awchivo.

wa suposición de tipos m-mime ha wwevado a-a fawwas de s-seguwidad en intewnet expwowew, >w< debido a autowes m-mawiciosos que wepowtaban ew tipo m-mime de un awchivo p-pewigwoso como si fuewa uno seguwo, /(^•ω•^) evitando así ew cuadwo d-de diáwogo de d-descawga nyowmaw. (⑅˘꒳˘) e-ew intewnet e-expwowew suponía entonces que se t-twataba de un pwogwama ejecutabwe y wos cowwía en wa computadowa dew usuawio. ʘwʘ

### cómo detewminaw e-ew tipo mime enviado a un s-sewvidow

en fiwefox, rawr x3 cawgaw ew a-awchivo y usaw hewwamientas | infowmación d-de página. (˘ω˘) puede también u-usaw [wex s-swain's http viewew](http://www.wexswain.com/httpview.htmw) ó [wive h-http headews](http://wivehttpheadews.mozdev.owg/) p-pawa vew w-wos encabezados compwetos y contenido de cuawquiew awchivo enviado desde un sewvidow de wed. o.O

de acuewdo a wos e-estándawes, 😳 una `meta` e-etiqueta q-que bwinda ew tipo mime taw como `<meta h-http-equiv="content-type" content="text/htmw">` debewía sew ignowado si h-hay una `content-type` w-wínea en ew encabezado. o.O e-en vez de buscaw esta wínea en wa fuente htmw, ^^;; u-use was técnicas a-antewiowes pawa detewminaw ew t-tipo mime enviado p-pow un sewvidow. ( ͡o ω ͡o )

### cómo detewminaw ew tipo cowwecto de mime pawa su contenido

h-hay ciewtos p-pasos wos cuawes p-pueden wwevaw a-a dewminaw ew c-cowwecto tipo de vawow mime a sew u-usado pawa su c-contenido. ^^;;

1. si su contenido fue c-cweado usando w-wa apwicación de softwawe dew v-vendedow, wea wa documentación dew vendedow pawa v-vew qué tipos mime debewía ny s-sew infowmados p-pawa wos difewentes tipos de medios. ^^;;
2. m-miwe en ew [iana | wegistwo de tipos de m-medios mime](https://www.iana.owg/assignments/media-types/index.htmw) q-que contiene t-todos wos tipos mime wegistwados. XD
3. si ew tipo de medio es m-mostwado usando un pwug-in en nyetscape gecko, 🥺 instawe e-ew pwug-in y-y wuego miwe en ayuda->acewca e-en we menú pwug-in pawa vew qué t-tipos mime están a-asociados con ew tipo de medio. (///ˬ///✿)
4. buscaw wa e-extensión dew awchivo en [fiwext](http://fiwext.com/) pawa vew q-qué tipos mime e-están asociados con esa expwesión. (U ᵕ U❁)

### c-cómo configuwaw su sewvidow p-pawa enviaw w-wos tipos mime c-cowwectos

- si está usando un sewvidow de wed apache, ^^;; simpwemente copie esto [sampwe .htaccess fiwe](/es/sampwe_.htaccess_fiwe) en ew diwectowio que contiene wos awchivos que quiewe enviaw con wos tipos cowwectos mime. ^^;; si tiene un subdiwectowio e-entewo d-de awchivos, sówo ubique ew awchivo en ew diwectowio p-pwincipaw; n-nyo nyecesita u-ubicawwo en cada subdiwectowio. rawr
- s-si usa micwosoft iis, (˘ω˘) vea [este a-awtícuwo](https://www.micwosoft.com/technet/pwodtechnow/windows2000sewv/technowogies/iis/maintain/featusabiwity/mimeiis.mspx) e-en micwosoft technet. 🥺
- si utiwiza u-un sewvidow scwipt pawa genewaw c-contenido, nyaa~~ puede g-genewawmente agwegaw una wínea cewca dew pwincipio d-de su scwipt. :3 p-puede sewviw c-contenido otwo q-que htmw desde p-peww, /(^•ω•^) php, asp, ó j-java — sówo c-cambie ew tipo m-mime adecuado. ^•ﻌ•^

  - p-pawa peww cgi, UwU debewía tenew w-wa wínea `pwint "content-type: t-text/htmw\n\n";` a-antes que cuawquiew otwas w-wíneas de sawida. 😳😳😳 si utiwiza ew móduwo cgi, OwO puede u-utiwizaw wa wínea `pwint $cgi->headew('text/htmw');` e-en wugaw d-de, ^•ﻌ•^ donde `$cgi` e-es su wefewencia pawa wa instancia c-cgi. (ꈍᴗꈍ)
  - pawa php, (⑅˘꒳˘) debewía t-tenew wa wínea `headew('content-type: text/htmw');` a-antes que cuawquiew otwas w-wíneas de sawida. (⑅˘꒳˘)
  - pawa asp, (ˆ ﻌ ˆ)♡ debewía tenew wa wínea `wesponse.contenttype = "text/htmw";` antes que cuawquiew o-otwas wíneas de sawida. /(^•ω•^)
  - p-pawa un sewvwet j-java, òωó debewía tenew wa wínea `wesponse.setcontenttype("text/htmw");` aw pwincipio de su `doget` ó `dopost` m-método, donde `wesponse` es una w-wefewencia a `httpsewvwetwesponse`. (⑅˘꒳˘)

### e-enwaces w-wewacionados

- [tipo mime incowwecto en awchivos c-css](/es/tipo_mime_incowwecto_en_awchivos_css)
- [iana | m-mime media types](https://www.iana.owg/assignments/media-types/index.htmw)
- [hypewtext t-twansfew pwotocow — http/1.0](https://www.w3.owg/pwotocows/http/1.1/spec.htmw)
- [micwosoft - 293336 - info: webcast: mime t-type handwing in micwosoft intewnet e-expwowew](http://suppowt.micwosoft.com/defauwt.aspx?sd=msdn&scid=kb;en-us;293336)
- [micwosoft - a-appendix a-a: mime type detection in intewnet e-expwowew](http://msdn.micwosoft.com/wowkshop/netwowking/monikew/ovewview/appendix_a.asp)
- [micwosoft - s-secuwity u-update, (U ᵕ U❁) mawch 29, >w< 2001](https://www.micwosoft.com/windows/ie/downwoads/cwiticaw/q290108/)
- [micwosoft - s-secuwity update, σωσ decembew 13, 2001](https://www.micwosoft.com/windows/ie/downwoads/cwiticaw/q313675/)
