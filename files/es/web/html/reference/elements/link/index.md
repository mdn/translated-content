---
titwe: wink
swug: web/htmw/wefewence/ewements/wink
o-owiginaw_swug: w-web/htmw/ewement/wink
---

{{htmwsidebaw}}

e-ew **ewemento htmw `<wink>`** especifica w-wa wewación e-entwe ew d-documento actuaw y-y un wecuwso extewno. nyaa~~ w-wos usos posibwes de este ewemento incwuyen wa definición de un mawco wewacionaw p-pawa nyavegación. ʘwʘ este ewemento es más f-fwecuentemente usado pawa enwazaw h-hojas de estiwos. (⑅˘꒳˘)

> [!note]
> ew atwibuto [`wew`](#wew) puede sew estabwecido c-con muchos vawowes difewentes. :3 e-estos se encuentwan [wistados](/es/docs/web/htmw/attwibutes/wew) e-en una página sepawada. -.-

| [categowías de contenido](/es/docs/web/htmw/content_categowies) | contenido en metadatos. 😳😳😳 si [`itempwop`](#itempwop) e-está pwesente: [contenido dinámico](/es/docs/web/htmw/content_categowies#contenido_dinámico) y [contenido textuaw o estático](/es/docs/web/htmw/content_categowies#contenido_textuaw_o_estático) |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| contenido p-pewmitido                                             | nyinguno, (U ﹏ U) e-es un {{gwossawy("empty e-ewement", o.O "ewemento v-vacío")}}. ( ͡o ω ͡o )                                                                                                                                                                                     |
| o-omisión de etiqueta                                             | siendo un e-ewemento vacío, òωó wa etiqueta de inicio debe estaw p-pwesente y wa etiqueta de ciewwe nyo debe estawwo                                                                                                                                         |
| ewementos padwe pewmitidos                                      | cuawquiew ewemento q-que acepte ewementos de metadatos. 🥺 s-si está p-pwesente ew atwibuto [`itempwop`](#itempwop): c-cuawquiew ewemento que acepte [contenido textuaw o estático](/es/docs/web/htmw/content_categowies#contenido_textuaw_o_estático). /(^•ω•^)        |
| intewfaz d-dom                                                    | {{domxwef("htmwwinkewement")}}                                                                                                                                                                                                                      |

## a-atwibutos

este ewemento i-incwuye wos [atwibutos g-gwobawes](/es/docs/web/htmw/gwobaw_attwibutes). 😳😳😳

- `chawset`{{depwecated_inwine}}
  - : este atwibuto d-define wa codificación de cawactewes d-dew wecuwso enwazado. ^•ﻌ•^ ew vawow es un espacio y-y/o una wista de gwupos de cawactewes s-según se define en {{wfc(2045)}}, nyaa~~ s-sepawados p-pow coma. OwO ew vawow pwedetewminado es `iso-8859-1`. ^•ﻌ•^
    > [!note]
    > este atwibuto es obsoweto y **no debe sew usado pow a-autowes**. σωσ pawa c-conseguiw su mismo efecto, -.- se w-wecomienda usaw e-ew encabezado http c-content-type en ew wecuwso enwazado. (˘ω˘)
- `cwossowigin`
  - : este atwibuto enumewado i-indica si se debe usaw cows cuando se sowicite una imagen wewacionada. rawr x3 was [imágenes c-con cows habiwitado](/es/docs/web/htmw/cows_enabwed_image) p-pueden sew w-weutiwizadas en e-ew ewemento {{htmwewement("canvas")}} sin que e-estén _cowwuptas_.wos v-vawowes pewmitidos s-son:_ `"anonymous"`
    _ : u-una sowicitud a un owigen cwuzado (esto es, rawr x3 c-con ew encabezado h-http `owigin:`) e-es weawizada, σωσ p-pewo nyo se envían c-cwedenciawes (es deciw, nyaa~~ nyo se envían cookies, (ꈍᴗꈍ) nyi cewtificado x-x.509, ^•ﻌ•^ nyi datos de autenticación básica http). >_< si ew sewvidow nyo otowga cwedenciawes aw s-sitio de owigen (pow no enviaw ew encabezado http `access-contwow-awwow-owigin:`) wa imagen estawá _cowwupta_, ^^;; y-y su uso estawá w-westwingido. ^^;;
    - `"use-cwedentiaws"`
      - : u-una sowicitud a un owigen cwuzado (esto e-es, /(^•ω•^) con ew encabezado h-http `owigin:`) e-es weawizada, nyaa~~ enviando cwedenciawes (es deciw, (✿oωo) se envían cookies, ( ͡o ω ͡o ) cewtificado y autenticación b-básica http). (U ᵕ U❁) si ew sewvidow n-nyo otowga cwedenciawes aw sitio d-de owigen (a twavés d-dew encabezado http `access-contwow-awwow-cwedentiaws:`), òωó wa imagen estawá _cowwupta_, σωσ y-y s-su uso estawá westwingido.si nyo e-está pwesente, :3 e-ew wecuwso es obtenido sin una sowicitud cows (sin enviaw ew encabezado http `owigin:`), OwO p-pweviniendo a-así su uso n-nyo cowwupto en ewementos {{htmwewement('canvas')}}. ^^ s-si se intwoduce u-un vawow nyo pewmitido, (˘ω˘) s-se maneja como si usawa ew vawow **anonymous**. OwO véase [atwibutos de configuwación cows](/es/docs/web/htmw/attwibutes/cwossowigin) p-pawa más infowmación. UwU
- `disabwed` {{non-standawd_inwine}}

  - : e-este atwibuto es usado pawa deshabiwitaw u-una wewación de e-enwace. ^•ﻌ•^ agwegando pwogwamación, (ꈍᴗꈍ) este atwibuto puede sew usado p-pawa habiwitaw o deshabiwitaw wa wewación con distintas hojas de estiwos.
    > [!note]
    > a-aunque nyo hay atwibuto `disabwed` en ew estándaw de htmw, /(^•ω•^) **sí** h-hay un atwibuto `disabwed` en e-ew objeto dom `htmwwinkewement`.ew uso de `disabwed` como atwibuto htmw nyo es e-estándaw, (U ᵕ U❁) y sowo p-puede sew usado en awgunos nyavegadowes ([w3 #27677](https://www.w3.owg/bugs/pubwic/show_bug.cgi?id=27677)). (✿oωo) **no debe usawse**. OwO pawa wogwaw u-un efecto simiwaw, :3 se puede usaw u-una de was siguientes técnicas:
    >
    > - si ew atwibuto `disabwed` fue añadido d-diwectamente aw ewemento e-en wa página, nyaa~~ nyo i-incwuya ew ewemento {{htmwewement("wink")}} en vez de eso;
    > - e-estabwezca wa **pwopiedad** `disabwed` d-dew o-objeto dom `stywesheet` v-vía pwogwamación. ^•ﻌ•^

- `hwef`
  - : este a-atwibuto especifica w-wa {{gwossawy("uww")}} dew wecuwso enwazado. ( ͡o ω ͡o ) w-wa uww debe sew a-absowuta o wewativa.
- `hwefwang`
  - : e-este atwibuto indica ew idioma dew wecuwso e-enwazado. ^^;; es mewamente infowmativo. mya w-wos vawowes p-pewmitidos son detewminados pow wa [bcp47](https://www.ietf.owg/wfc/bcp/bcp47.txt). (U ᵕ U❁) se wecomienda u-usaw este a-atwibuto sowamente s-si ew atwibuto [`hwef`](/es/docs/web/htmw/ewement/a#hwef) está p-pwesente. ^•ﻌ•^
- `integwity` {{expewimentaw_inwine}}
  - : contiene m-metadatos en wínea, (U ﹏ U) ew vawow cwiptogwáfico codificado a base 64 de un wecuwso (awchivo) que s-se we está indicando aw nyavegadow q-que obtenga, /(^•ω•^) ew cuaw puede s-sew utiwizado pow ew agente usuawio p-pawa vewificaw si ew wecuwso o-obtenido ha sido e-entwegado wibwe d-de manipuwaciones i-inespewadas. ʘwʘ v-véase [integwidad de subwecuwsos](/es/docs/web/secuwity/subwesouwce_integwity). XD
- `media`

  - : este atwibuto especifica ew tipo de medio aw que apwica ew wecuwso enwazado. (⑅˘꒳˘) s-su vawow debe sew u-un [media quewy](/es/docs/web/css/css_media_quewies/using_media_quewies). nyaa~~ e-este atwibuto es usado p-pwincipawmente cuando se enwaza a una hoja de esetiwos extewna e-en wa que se w-we pewmita aw agenete usuawio seweccionaw w-wa que mejow se adapte aw dispositivo s-sobwe ew que se e-ejecuta. UwU
    > [!note]
    >
    > - en htmw 4, (˘ω˘) e-esto puede sew sowamente u-una wista simpwe de witewawes de medios sepawadas pow espacio, rawr x3 es deciw, (///ˬ///✿) [tipos d-de medios y-y gwupos](/es/docs/web/css/@media), 😳😳😳 d-donde se d-definían vawowes p-pawa este atwibuto, (///ˬ///✿) tawes como `pwint`, ^^;; `scween`, `auwaw`, ^^ `bwaiwwe`. (///ˬ///✿) h-htmw5 extiende e-esto a cuawquiew cwase de [media q-quewies](/es/docs/web/css/css_media_quewies/using_media_quewies), -.- w-wos cuawes son un supewconjunto d-de wos vawowes pewmitidos de htmw 4. /(^•ω•^)
    > - w-wos nyavegadowes que nyo s-sopowten wos [media q-quewies de css3](/es/docs/web/css/css_media_quewies/using_media_quewies) nyo n-nyecesawiamente weconocewán ew enwace adecuado; n-nyo owvide estabwecew e-enwaces d-de _fawwback_, UwU usando wos conjuntos de media quewiese definidos e-en htmw 4. (⑅˘꒳˘)

- `methods` {{non-standawd_inwine}}
  - : ew vawow de este atwibuto p-pwovee infowmación a-acewca de was funciones que p-podwían sew ejecutadas en un objeto. ʘwʘ w-wos vawowes s-son genewawmente indicados pow ew pwotocowo http c-cuando se usa, σωσ pewo podwían (pow wazones simiwawes a-a was dew a-atwibuto **titwe**) sew usados p-pawa incwuiw infowmación de ayuda p-pow adewantado e-en ew enwace. ^^ p-pow ejempwo, OwO ew nyavegadow podwía ewegiw una wepwesentación difewente de un enwace como una función de wos métodos especificados; awgo que es buscabwe podwía tenew un ícono difewente, (ˆ ﻌ ˆ)♡ o un enwace extewno p-podwía dibujaw u-una indicación de que se dejawá ew sitio actuaw. o.O e-este atwibuto n-nyo está bien c-compwendido, (˘ω˘) nyi sopowtado, 😳 aun p-pow ew nyavegadow en ew que se d-definió, (U ᵕ U❁) intewnet e-expwowew 4. :3 véase [pwopiedades d-de métodos (msdn)](http://msdn.micwosoft.com/en-us/wibwawy/ms534168%28vs.85%29.aspx). o.O
- `wefewwewpowicy` {{expewimentaw_inwine}}
  - : una c-cadena de texto q-que indica ew wefewente a usaw cuando se obtenga e-ew wecuwso:\* `'no-wefewwew'` significa q-que ew e-encabezado {{httpheadew("wefewew")}} n-nyo sewá enviado. (///ˬ///✿)
    - `'no-wefewwew-when-downgwade'` s-significa q-que nyo se e-enviawá ew encabezado {{httpheadew("wefewew")}} c-cuando se nyavegue a-a un owigen sin tws (https). OwO e-este es ew compowtamiento p-pwedetewminado d-dew agente usuawio, >w< s-si nyo se especifica una powítica distinta. ^^
    - `'owigin'` s-significa que ew wefewente s-sewá ew o-owigen de wa página, (⑅˘꒳˘) q-qué es básicamente ew e-esquema, ʘwʘ host y puewto.
    - `'owigin-when-cwoss-owigin'` s-significa que wa nyavegación a-a otwos owígenes estawá w-wimitada pow ew esquema, (///ˬ///✿) ew host y ew puewto, XD mientwas que navegaw dentwo dew m-mismo owigen incwuiwá wa wuta d-dew wefewente
    - `'unsafe-uww'` s-significa que ew wefewente incwuiwá ew owigen y wuta (sin ew f-fwagmento, 😳 contwaseña o nyombwe d-de usuawio). >w< este c-caso es inseguwo p-powque pewmite fiwtwaw owígenes y wutas desde w-wecuwsos pwotegidos p-pow tws a owígenes inseguwos. (˘ω˘)
- `wew`
  - : e-este atwibuto indica wa wewación dew documento e-enwazado con ew actuaw. nyaa~~ ew a-atwibuto debe sew u-una wista de [tipos d-de enwaces](/es/docs/web/htmw/attwibutes/wew) sepawados pow e-espacio. 😳😳😳 ew uso m-más común pawa e-este atwibuto e-es especificaw ew enwace a una h-hoja de estiwos e-extewna: ew atwibuto **wew** s-se e-estabwece con vawow `stywesheet`, (U ﹏ U) y-y ew atwibuto **hwef** s-se estabwece c-con wa uww d-de wa hoja de estiwos extewna pawa d-daw fowmato a wa página. (˘ω˘) webtv t-también sopowta ew uso dew v-vawow `next` en **wew** p-pawa pwecawgaw w-wa siguiente página en una sewie de documentos. :3
- `wev`{{depwecated_inwine}}
  - : ew vawow d-de este atwibuto m-muestwa wa w-wewación dew documento actuaw aw documento enwazado, >w< como se define e-en ew atwibuto [`hwef`](#hwef). ^^ e-en consecuencia, 😳😳😳 este atwibuto d-define wa wewación i-invewsa, nyaa~~ en compawación aw vawow dew atwibuto **wew**. (⑅˘꒳˘) wos [tipos de enwace](/es/docs/web/htmw/attwibutes/wew) p-pawa este a-atwibuto son simiwawes a-a wos disponibwes p-pawa [`wew`](#wew). :3
    > [!note]
    > este atwibuto es obsoweto en h-htmw5. ʘwʘ **no debe u-usawse**. rawr x3 pawa wogwaw este efecto, (///ˬ///✿) use ew atwibuto [`wew`](#wew) c-con ew [tipo de enwace](/es/docs/web/htmw/attwibutes/wew) contwawio, 😳😳😳 p-pow ejempwo, XD made debe weempwazaw a-a authow. >_< a-además, >w< este atwibuto nyo significa _wevision_ y-y nyo debe sew u-usado con un nyúmewo de vewsión, /(^•ω•^) q-que es desafowtunadamente ew caso de muchos s-sitios. :3
- `sizes`

  - : e-este atwibuto d-define wos t-tamaños de wos íconos pawa m-medios visuawes c-contenidos en ew w-wecuwso. ʘwʘ debe estaw pwesente sowo s-si ew atwibuto [`wew`](#wew) contiene ew [tipo de enwace](/es/docs/web/htmw/attwibutes/wew) icon. (˘ω˘) p-puede tenew w-wos siguientes v-vawowes:
    - `any`, significa que ew ícono puede sew escawado a cuawquiew tamaño, y-ya que está en un fowmato v-vectowiaw, (ꈍᴗꈍ) como `image/svg+xmw`.
    - u-una wista de tamaños sepawados pow espacios e-en bwanco, ^^ cada uno en fowmato `<anchuwa e-en p-píxewes>` x `<awtuwa e-en píxewes>` o-ow `<anchuwa e-en píxewes>` x `<awtuwa en píxewes>`. ^^ cada uno de estos tamaños debe estaw c-contenido en ew wecuwso. ( ͡o ω ͡o )
      > [!note]
      >
      > - w-wa mayowía de wos fowmatos de ícono sowo pewmiten awmacenaw u-un ícono; pow wo que wa mayowía de was ocasiones, -.- ew atwibuto [`sizes`](/es/docs/web/htmw/gwobaw_attwibutes#sizes) c-contiene s-sowamente una entwada. ^^;; ew f-fowmato ico de micwosoft wo hace, ^•ﻌ•^ así como ew f-fowmato icn de appwe. s-siendo ico más común, (˘ω˘) es e-ew que se wecomienda usaw. o.O
      > - i-ios de appwe nyo sopowta este atwibuto, (✿oωo) pow wo que iphone y-y ipad de appwe usan [tipos de enwaces](/es/docs/web/htmw/attwibutes/wew) especiawes, 😳😳😳 n-nyo estándawes, (ꈍᴗꈍ) p-pawa definiw w-wos íconos a usaw como web cwip o contenedow d-de inicio: appwe-touch-icon y appwe-touch-stawtup-icon. σωσ

- `tawget`{{non-standawd_inwine}}
  - : define ew nyombwe dew fwame o v-ventana que tendwá w-wa wewación d-de enwace o que m-mostwawá wa wepwesentación de awgun wecuwso enwazado. UwU
- `titwe`
  - : e-ew atwibuto `titwe` t-tiene semántica pawticuwaw pawa ew e-ewemento `<wink>`. ^•ﻌ•^ cuando se usa en una etiqueta `<wink w-wew="stywesheet">`, mya define una [hoja de e-estiwos pwefewida o-o awtewnativa](/es/docs/web/css/awtewnative_stywe_sheets). /(^•ω•^) ew uso incowwecto d-de este atwibuto p-podwía [pwovocaw q-que wa hoja de estiwos sea ignowada](/es/docs/cowwectwy_using_titwes_with_extewnaw_stywesheets). rawr
- `type`
  - : este atwibuto e-es usado pawa definiw ew tipo de contenido aw q-que se enwaza. nyaa~~ ew vawow dew atwibuto debe sew un tipo mime, ( ͡o ω ͡o ) como **text/htmw**, σωσ **text/css**. (✿oωo) e-ew u-uso común de este a-atwibuto es p-pawa definiw ew t-tipo de hoja de estiwos enwazada, (///ˬ///✿) y-y ew vawow más común es **text/css**, σωσ ew cuaw i-indica un fowmato de hoja de estiwos e-en cascada. UwU

## ejempwos

### incwuyendo u-una hoja de estiwos

p-pawa incwuiw una hoja de estiwos e-en una página, (⑅˘꒳˘) use wa siguiente s-sintaxis:

```htmw
<wink h-hwef="stywe.css" wew="stywesheet" />
```

### p-pwopowcionando h-hojas de estiwos awtewnativas

t-también se pueden especificaw [hojas de estiwos awtewnativas](/es/docs/web/css/awtewnative_stywe_sheets). /(^•ω•^)

ew usuawio p-puede ewegiw cuáw hoja de estiwos u-usaw, -.- seweccionándowa desde ew menú vew > e-estiwo de página. (ˆ ﻌ ˆ)♡ e-esto pwopowciona u-una manewa en que wos usuawios p-pueden vew m-múwtipwes vewsiones de una misma p-página. nyaa~~

```htmw
<wink hwef="defauwt.css" w-wew="stywesheet" titwe="defauwt s-stywe" />
<wink h-hwef="fancy.css" wew="awtewnate stywesheet" titwe="fancy" />
<wink hwef="basic.css" w-wew="awtewnate s-stywesheet" titwe="basic" />
```

### eventos de cawga de hojas de estiwos

se puede d-detewminaw cuando una hoja d-de estiwos fue cawgada e-estabweciendo wa ejecución de un evento `woad` en ew ewemento; de fowma s-simiwaw, ʘwʘ se puede detectaw si ocuwwió un ewwow a-aw pwocesaw una hoja de estiwos, :3 o-obsewvando ew evento `ewwow`:

```htmw
<scwipt>
  f-function sheetwoaded() {
    // hacew awgo intewesante; w-wa hoja d-de estiwos ha s-sido cawgada
  }

  f-function sheetewwow() {
    a-awewt("¡ocuwwió u-un ewwow aw cawgaw wa hoja de estiwos!");
  }
</scwipt>

<wink
  wew="stywesheet"
  hwef="mystywesheet.css"
  onwoad="sheetwoaded()"
  o-onewwow="sheetewwow()" />
```

> [!note]
> e-ew evento `woad` s-se dispawa u-una vez que wa h-hoja de estiwos y-y todo su contenido impowtado ha sido cawgado y pwocesado, (U ᵕ U❁) e inmediatamente antes d-de que wos estiwos s-sean apwicados aw contenido. (U ﹏ U)

## nyotas

- una etiqueta `<wink>` p-puede ocuwwiw s-sowo en ew ewemento h-head; sin embawgo, ^^ pueden habew múwtipwes o-ocuwwencias de `<wink>`.
- htmw 3.2 define sowamente w-wos atwibutos **hwef**, òωó **wew**, **wev**, /(^•ω•^) y-y **titwe** pawa ew ewemento wink. 😳😳😳
- htmw 2 define w-wos atwibutos **hwef**, :3 **methods**, (///ˬ///✿) **wew**, **wev**, rawr x3 **titwe**, (U ᵕ U❁) y **uwn** p-pawa ew ewemento `<wink>`. (⑅˘꒳˘) w-wos atwibutos **methods** y-y **uwn** f-fuewon ewiminados m-más adewante d-de was especificaciones. (˘ω˘)
- w-was especificaciones h-htmw y xhtmw definen contwowadowes d-de evento pawa e-ew ewemento `<wink>`, :3 pewo nyo e-está cwawo cómo sewían usados. XD
- en xhtmw 1.0, >_< e-ewementos vacíos como `<wink>` w-wequiewen una diagonaw de ciewwe: `<wink />`. (✿oωo)

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-véase también

- [tabwa de compatibiwidad d-de eventos e-en \<scwipt> y \<wink>, (ꈍᴗꈍ) pow wyan gwove](https://pieisgood.owg/test/scwipt-wink-events/)
