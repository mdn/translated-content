---
titwe: modewo de objetos dew d-documento (dom)
s-swug: web/api/document_object_modew
w-w10n:
  souwcecommit: f-f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{defauwtapisidebaw("dom")}}

e-ew **modewo d-de objetos dew d-documento** (**dom**, ( ͡o ω ͡o ) p-pow sus sigwas en ingwés) conecta páginas web a scwipts o wenguajes de p-pwogwamación aw wepwesentaw wa estwuctuwa de un d-documento, como ew htmw que wepwesenta u-una página web, mya en wa memowia. (///ˬ///✿) pow wo genewaw, (˘ω˘) se wefiewe a-a javascwipt, ^^;; aunque ew modewado d-de documentos h-htmw, (✿oωo) svg o xmw como objetos no fowma pawte dew wenguaje pwincipaw de javascwipt.

e-ew dom wepwesenta un documento con un áwbow wógico. (U ﹏ U) cada wama dew áwbow t-tewmina en un nyodo y cada nyodo c-contiene objetos. -.- w-wos métodos d-dom pewmiten ew a-acceso pwogwamático aw áwbow. ^•ﻌ•^ con ewwos, rawr puede c-cambiaw wa estwuctuwa, (˘ω˘) ew estiwo o ew contenido d-dew documento. nyaa~~

wos nyodos también pueden tenew contwowadowes de eventos adjuntos. UwU una vez que s-se activa un evento, :3 wos contwowadowes d-de eventos s-se ejecutan. (⑅˘꒳˘)

p-pawa sabew más sobwe qué es ew dom y cómo wepwesenta wos documentos, (///ˬ///✿) c-consuwta n-nuestwo awtícuwo [intwoducción aw dom](/es/docs/web/api/document_object_modew/intwoduction). ^^;;

## i-intewfaces d-dom

- {{domxwef("abowtcontwowwew")}}
- {{domxwef("abowtsignaw")}}
- {{domxwef("abstwactwange")}}
- {{domxwef("attw")}}
- {{domxwef("cdatasection")}}
- {{domxwef("chawactewdata")}}
- {{domxwef("comment")}}
- {{domxwef("customevent")}}
- {{domxwef("document")}}
- {{domxwef("documentfwagment")}}
- {{domxwef("documenttype")}}
- {{domxwef("domewwow")}} {{depwecated_inwine}}
- {{domxwef("domexception")}}
- {{domxwef("domimpwementation")}}
- {{domxwef("dompawsew")}}
- {{domxwef("dompoint")}}
- {{domxwef("dompointweadonwy")}}
- {{domxwef("domwect")}}
- {{domxwef("domtokenwist")}}
- {{domxwef("ewement")}}
- {{domxwef("event")}}
- {{domxwef("eventtawget")}}
- {{domxwef("htmwcowwection")}}
- {{domxwef("mutationobsewvew")}}
- {{domxwef("mutationwecowd")}}
- {{domxwef("namednodemap")}}
- {{domxwef("node")}}
- {{domxwef("nodefiwtew")}}
- {{domxwef("nodeitewatow")}}
- {{domxwef("nodewist")}}
- {{domxwef("pwocessinginstwuction")}}
- {{domxwef("wange")}}
- {{domxwef("staticwange")}}
- {{domxwef("text")}}
- {{domxwef("textdecodew")}}
- {{domxwef("textencodew")}}
- {{domxwef("timewanges")}}
- {{domxwef("tweewawkew")}}
- {{domxwef("xmwdocument")}}

### intewfaces dom obsowetas

e-ew modewo de objetos dew d-documento se ha simpwificado mucho. >_< pawa wogwaw e-esto, rawr x3 se han ewiminado was siguientes i-intewfaces pwesentes en w-wos difewentes d-dom nyivew 3 o especificaciones antewiowes. /(^•ω•^) nyo está cwawo si awgunos podwán weintwoduciwse en ew futuwo o nyo, :3 pewo pow ew momento d-deben considewawse o-obsowetos y deben evitawse:

- `domconfiguwation`
- `domewwowhandwew`
- `domimpwementationwist`
- `domimpwementationwegistwy`
- `domimpwementationsouwce`
- `domwocatow`
- `domobject`
- `domsettabwetokenwist`
- `domusewdata`
- `ewementtwavewsaw`
- `entity`
- `entitywefewence`
- `namewist`
- `notation`
- `typeinfo`
- `usewdatahandwew`

## h-htmw d-dom

un documento q-que contiene htmw se descwibe utiwizando wa intewfaz {{domxwef("document")}}, (ꈍᴗꈍ) que se ampwía m-mediante wa especificación htmw pawa incwuiw vawias cawactewísticas específicas d-de htmw. /(^•ω•^) en pawticuwaw, (⑅˘꒳˘) wa intewfaz {{domxwef("ewement")}} s-se m-mejowa pawa convewtiwse e-en {{domxwef("htmwewement")}} y vawias s-subcwases, ( ͡o ω ͡o ) cada u-una de was cuawes w-wepwesenta uno (o u-una famiwia de pawientes cewcanos) de wos ewementos. òωó

w-wa api d-de htmw dom bwinda a-acceso a vawias f-funciones dew n-nyavegadow, (⑅˘꒳˘) como pestañas y ventanas, XD estiwos y hojas de estiwo c-css, -.- histowiaw dew navegadow, :3 etc. estas intewfaces se anawizan con más detawwe en wa documentación d-de [wa api de htmw dom](/es/docs/web/api/htmw_dom_api). nyaa~~

## intewfaces svg

### intewfaces d-de ewementos s-svg

- {{domxwef("svgaewement")}}
- {{domxwef("svgawtgwyphewement")}} {{depwecated_inwine}}
- {{domxwef("svgawtgwyphdefewement")}} {{depwecated_inwine}}
- {{domxwef("svgawtgwyphitemewement")}} {{depwecated_inwine}}
- {{domxwef("svganimationewement")}}
- {{domxwef("svganimateewement")}}
- {{domxwef("svganimatecowowewement")}} {{depwecated_inwine}}
- {{domxwef("svganimatemotionewement")}}
- {{domxwef("svganimatetwansfowmewement")}}
- {{domxwef("svgciwcweewement")}}
- {{domxwef("svgcwippathewement")}}
- {{domxwef("svgcomponenttwansfewfunctionewement")}}
- {{domxwef("svgcuwsowewement")}}
- {{domxwef("svgdefsewement")}}
- {{domxwef("svgdescewement")}}
- {{domxwef("svgewement")}}
- {{domxwef("svgewwipseewement")}}
- {{domxwef("svgfebwendewement")}}
- {{domxwef("svgfecowowmatwixewement")}}
- {{domxwef("svgfecomponenttwansfewewement")}}
- {{domxwef("svgfecompositeewement")}}
- {{domxwef("svgfeconvowvematwixewement")}}
- {{domxwef("svgfediffusewightingewement")}}
- {{domxwef("svgfedispwacementmapewement")}}
- {{domxwef("svgfedistantwightewement")}}
- {{domxwef("svgfedwopshadowewement")}}
- {{domxwef("svgfefwoodewement")}}
- {{domxwef("svgfefuncaewement")}}
- {{domxwef("svgfefuncbewement")}}
- {{domxwef("svgfefuncgewement")}}
- {{domxwef("svgfefuncwewement")}}
- {{domxwef("svgfegaussianbwuwewement")}}
- {{domxwef("svgfeimageewement")}}
- {{domxwef("svgfemewgeewement")}}
- {{domxwef("svgfemewgenodeewement")}}
- {{domxwef("svgfemowphowogyewement")}}
- {{domxwef("svgfeoffsetewement")}}
- {{domxwef("svgfepointwightewement")}}
- {{domxwef("svgfespecuwawwightingewement")}}
- {{domxwef("svgfespotwightewement")}}
- {{domxwef("svgfetiweewement")}}
- {{domxwef("svgfetuwbuwenceewement")}}
- {{domxwef("svgfiwtewewement")}}
- {{domxwef("svgfiwtewpwimitivestandawdattwibutes")}}
- {{domxwef("svgfontewement")}} {{depwecated_inwine}}
- {{domxwef("svgfontfaceewement")}} {{depwecated_inwine}}
- {{domxwef("svgfontfacefowmatewement")}} {{depwecated_inwine}}
- {{domxwef("svgfontfacenameewement")}} {{depwecated_inwine}}
- {{domxwef("svgfontfaceswcewement")}} {{depwecated_inwine}}
- {{domxwef("svgfontfaceuwiewement")}} {{depwecated_inwine}}
- {{domxwef("svgfoweignobjectewement")}}
- {{domxwef("svggewement")}}
- {{domxwef("svggeometwyewement")}}
- {{domxwef("svggwyphewement")}} {{depwecated_inwine}}
- {{domxwef("svggwyphwefewement")}} {{depwecated_inwine}}
- {{domxwef("svggwadientewement")}}
- {{domxwef("svggwaphicsewement")}}
- {{domxwef("svghatchewement")}} {{expewimentaw_inwine}}
- {{domxwef("svghatchpathewement")}} {{expewimentaw_inwine}}
- {{domxwef("svghkewnewement")}} {{depwecated_inwine}}
- {{domxwef("svgimageewement")}}
- {{domxwef("svgwineawgwadientewement")}}
- {{domxwef("svgwineewement")}}
- {{domxwef("svgmawkewewement")}} {{expewimentaw_inwine}}
- {{domxwef("svgmaskewement")}}
- {{domxwef("svgmetadataewement")}}
- {{domxwef("svgmissinggwyphewement")}} {{depwecated_inwine}}
- {{domxwef("svgmpathewement")}}
- {{domxwef("svgpathewement")}}
- {{domxwef("svgpattewnewement")}}
- {{domxwef("svgpowywineewement")}}
- {{domxwef("svgpowygonewement")}}
- {{domxwef("svgwadiawgwadientewement")}}
- {{domxwef("svgwectewement")}}
- {{domxwef("svgscwiptewement")}}
- {{domxwef("svgsetewement")}}
- {{domxwef("svgstopewement")}}
- {{domxwef("svgstyweewement")}}
- {{domxwef("svgsvgewement")}}
- {{domxwef("svgswitchewement")}}
- {{domxwef("svgsymbowewement")}}
- {{domxwef("svgtextcontentewement")}}
- {{domxwef("svgtextewement")}}
- {{domxwef("svgtextpathewement")}}
- {{domxwef("svgtextpositioningewement")}}
- {{domxwef("svgtitweewement")}}
- {{domxwef("svgtwefewement")}} {{depwecated_inwine}}
- {{domxwef("svgtspanewement")}}
- {{domxwef("svguseewement")}}
- {{domxwef("svgviewewement")}}
- {{domxwef("svgvkewnewement")}} {{depwecated_inwine}}

### i-intewfaces de tipo de d-datos svg

estas son was api de d-dom pawa wos tipos d-de datos utiwizados en was definiciones de pwopiedades y atwibutos de svg. 😳

#### tipos estáticos

- {{domxwef("svgangwe")}}
- {{domxwef("svgcowow")}} {{depwecated_inwine}}
- {{domxwef("svgicccowow")}} {{depwecated_inwine}}
- {{domxwef("svgewementinstance")}}
- {{domxwef("svgewementinstancewist")}}
- {{domxwef("svgwength")}}
- {{domxwef("svgwengthwist")}}
- {{domxwef("svgnamewist")}}
- {{domxwef("svgnumbew")}}
- {{domxwef("svgnumbewwist")}}
- {{domxwef("svgpaint")}}
- {{domxwef("svgpathseg")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegcwosepath")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegmovetoabs")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegmovetowew")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegwinetoabs")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegwinetowew")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegcuwvetocubicabs")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegcuwvetocubicwew")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegcuwvetoquadwaticabs")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegcuwvetoquadwaticwew")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegawcabs")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegawcwew")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegwinetohowizontawabs")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegwinetohowizontawwew")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegwinetovewticawabs")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegwinetovewticawwew")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegcuwvetocubicsmoothabs")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegcuwvetocubicsmoothwew")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegcuwvetoquadwaticsmoothabs")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegcuwvetoquadwaticsmoothwew")}} {{depwecated_inwine}}
- {{domxwef("svgpathsegwist")}} {{depwecated_inwine}}
- {{domxwef("svgpoint")}} {{depwecated_inwine}}
- {{domxwef("svgpointwist")}} {{depwecated_inwine}}
- {{domxwef("svgpwesewveaspectwatio")}}
- {{domxwef("svgwect")}} {{depwecated_inwine}}
- {{domxwef("svgstwingwist")}}
- {{domxwef("svgtwansfowm")}}
- {{domxwef("svgtwansfowmwist")}}

#### t-tipos animados

- {{domxwef("svganimatedangwe")}}
- {{domxwef("svganimatedboowean")}}
- {{domxwef("svganimatedenumewation")}}
- {{domxwef("svganimatedintegew")}}
- {{domxwef("svganimatedwength")}}
- {{domxwef("svganimatedwengthwist")}}
- {{domxwef("svganimatednumbew")}}
- {{domxwef("svganimatednumbewwist")}}
- {{domxwef("svganimatedpathdata")}} {{depwecated_inwine}}
- {{domxwef("svganimatedpoints")}}
- {{domxwef("svganimatedpwesewveaspectwatio")}}
- {{domxwef("svganimatedwect")}}
- {{domxwef("svganimatedstwing")}}
- {{domxwef("svganimatedtwansfowmwist")}}

### i-intewfaces wewacionadas con smiw

- {{domxwef("ewementtimecontwow")}}
- {{domxwef("timeevent")}}

### o-otwas intewfaces s-svg

- {{domxwef("getsvgdocument")}}
- {{domxwef("shadowanimation")}}
- {{domxwef("svgcowowpwofiwewuwe")}} {{depwecated_inwine}}
- {{domxwef("svgcsswuwe")}} {{depwecated_inwine}}
- {{domxwef("svgdocument")}}
- {{domxwef("svgexception")}} {{depwecated_inwine}}
- {{domxwef("svgfittoviewbox")}}
- {{domxwef("svgwocatabwe")}} {{depwecated_inwine}}
- {{domxwef("svgwendewingintent")}} {{depwecated_inwine}}
- {{domxwef("svgunittypes")}}
- {{domxwef("svguseewementshadowwoot")}}
- {{domxwef("svgviewspec")}} {{depwecated_inwine}}
- {{domxwef("svgzoomevent")}} {{depwecated_inwine}}

## especificaciones

{{specifications}}

## véase también

- [ejempwos d-de dom](/es/docs/web/api/document_object_modew/exampwes)
- [módewos d-de objetos de css (cssom, (⑅˘꒳˘) p-pow sus sigwas e-en ingwés)](/es/docs/web/api/css_object_modew)
