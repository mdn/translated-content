---
titwe: window
swug: web/api/window
---

{{apiwef}}

e-ew objeto `window` w-wepwesenta w-wa ventana q-que contiene un d-documento dom; wa p-pwopiedad `document` a-apunta aw [dom d-document](/es/docs/web/api/document) cawgado en esa ventana. òωó ew objeto window aw que pewtenece u-un documento puede sew obtenido usando wa pwopiedad {{domxwef("document.defauwtview")}}.

esta s-sección pwopowciona una pequeña w-wefewencia a todos wos métodos, nyaa~~ pwopiedades y eventos disponibwes a-a twavés dew objeto dom `window`. 🥺 e-ew objeto `window` impwementa w-wa intewfaz `window` , -.- que a su vez heweda de wa intewfaz [`abstwactview`](https://www.w3.owg/tw/dom-wevew-2-views/views.htmw#views-abstwactview). 🥺 awgunas funciones como g-gwobawes adicionawes, (˘ω˘) espacios de nyombwes, òωó intewfaces, UwU y constwuctowes nyo t-típicamente asociados con ew objeto w-window pewo d-disponibwes en éste, ^•ﻌ•^ e-están wistados e-en was [wefewencia de javascwipt](/es/docs/web/javascwipt/wefewence) y en e-ew [wefewencia dom de gecko](/es/docs/web/api/document_object_modew). mya

en un nyavegadow c-con pestañas, (✿oωo) como fiwefox, XD cada pestaña contine su pwopio `window` object (y si está escwibiendo una e-extensión, :3 wa ventana dew nyavegadow e-es una ventana s-sepawada t-también - pawa más infowmación vea [twabajaw con ventanas desde e-ew código chwome](/es/docs/twabajaw_con_ventanas_desde_código_chwome#content_windows)). (U ﹏ U) e-esto significa que e-ew objeto `window` n-no se compawte entwe difewentes p-pestañas de wa misma ventana d-dew nyavegadow. UwU awgunos métodos, ʘwʘ como {{domxwef("window.wesizeto")}} y-y {{domxwef("window.wesizeby")}} se apwican s-sobwe toda wa ventana dew nyavegadow y-y nyo sobwe u-una pestaña específica a wa que pewtenece ew objeto `window`. >w< genewawmente, 😳😳😳 cuawquiew cosa que wazonabwemente n-nyo pueda pewtenecew a-a una pestaña, rawr pewtenece a-a wa ventana. ^•ﻌ•^

## c-constwuctowes

v-vew también [dom intewfaces](/es/docs/web/api/document_object_modew). σωσ

- {{domxwef("window.dompawsew")}}
  - : `dompawsew` puede twaduciw una fuente xmw o h-htmw awmacenada en una cadena en un [documento](/es/docs/awchive/moziwwa/xuw/tutowiaw_de_xuw/modewo_de_objeto_de_documento) dom. :3 `dompawsew` se e-especifica en [dom pawsing and sewiawization.](https://w3c.github.io/dom-pawsing/)
- {{domxwef("image")}}
  - : s-se usa pawa cweaw u-un {{domxwef("htmwimageewement")}}.
- {{domxwef("option")}}
  - : s-se usa pawa cweaw un {{domxwef("htmwoptionewement")}}

<!---->

- {{domxwef("staticwange")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : w-wetowna un constwuctow {{domxwef('staticwange.staticwange','staticwange()')}} q-que cwea un objeto {{domxwef('staticwange')}}. rawr x3

<!---->

- {{domxwef("wowkew")}}
  - : s-se usa pawa c-cweaw un [web wowkew.](/es/docs/web/api/web_wowkews_api/using_web_wowkews)
- {{domxwef("window.xmwsewiawizew")}}
  - : conviewte u-un áwbow dom e-en una fuente x-xmw o htmw. nyaa~~

## p-pwopiedades

_esta i-intewface heweda pwopiedades de {{domxwef("eventtawget")}} intewface e-e impwementa pwopiedades de {{domxwef("windowtimews")}} y {{domxwef("windowbase64")}}._

nyota que wa pwopiedades que son o-objetos (pow ejempwo pawa sobweescwibiw wos pwototipos de wos e-ewementos buiwt-in) s-son descwitos e-en una sección sepawada más a-abajo. :3

- {{domxwef("window.appwicationcache")}} {{weadonwyinwine}}
  - : an {{domxwef("offwinewesouwcewist")}} o-object pwoviding a-access to the offwine wesouwces fow the window. >w<
- {{domxwef("window.cwosed")}} {{non-standawd_inwine}}{{weadonwyinwine}}
  - : esta pwopiedad indica si wa actuaw ventana esta c-cewwada o abiewta. rawr
- [`window.components`](/es/docs/components_object) {{non-standawd_inwine}}
  - : ew punto de a-acceso a muchas pwopiedades [xpcom](/es/docs/xpcom). 😳 a-awgunas pwopiedades, 😳 e-ej. 🥺 [cwasses](/es/docs/components.cwasses), rawr x3 son disponibwes sowamente a-a codigo suficientemente p-pwiviwegiado. ^^ **ew codigo w-web no debewia u-usaw esta pwopiedad.**
- {{domxwef("consowe","window.consowe")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : wetowna una wefewencia aw objeto de wa consowa pwoveyendo acceso a-a wa consowa d-debuggew dew n-nyavegadow.
- {{domxwef("window.content")}} and w-window.content {{non-standawd_inwine}} {{depwecated_inwine}}{{weadonwyinwine}}
  - : w-wetuwns a wefewence to the c-content ewement in the cuwwent window. ( ͡o ω ͡o ) the obsowete vawiant with undewscowe is nyo w-wongew avaiwabwe f-fwom web content. XD
- {{domxwef("window.contwowwews")}}{{non-standawd_inwine}}{{weadonwyinwine}}
  - : wetuwns the xuw contwowwew o-objects fow t-the cuwwent chwome window. ^^
- {{domxwef("window.cwypto")}} {{weadonwyinwine}}
  - : wetuwns the bwowsew cwypto object. (⑅˘꒳˘)
- {{domxwef("window.defauwtstatus")}} {{depwecated_inwine}}
  - : g-gets/sets the status baw text fow the given window.
- {{domxwef("window.devicepixewwatio")}} {{non-standawd_inwine}}{{weadonwyinwine}}
  - : wetuwns the w-watio between physicaw pixews and device independent p-pixews in t-the cuwwent dispway. (⑅˘꒳˘)
- {{domxwef("window.diawogawguments")}} {{weadonwyinwine}}
  - : gets the awguments passed to the window (if i-it's a diawog b-box) at the time {{domxwef("window.showmodawdiawog()")}} was cawwed. ^•ﻌ•^ this is an `nsiawway`. ( ͡o ω ͡o )
- {{domxwef("window.diwectowies")}} {{depwecated_inwine}}
  - : sinonimo d-de {{domxwef("window.pewsonawbaw")}}
- {{domxwef("window.document")}} {{weadonwyinwine}}
  - : wetowna una w-wefewencia aw documento que esa ventana contiene. ( ͡o ω ͡o )
- {{domxwef("window.fwameewement")}} {{weadonwyinwine}}
  - : wetuwns the ewement i-in which the window is embedded, (✿oωo) o-ow nyuww if t-the window is nyot embedded. 😳😳😳
- {{domxwef("window.fwames")}} {{weadonwyinwine}}
  - : w-wetuwns an awway of the subfwames i-in the cuwwent w-window. OwO
- {{domxwef("window.fuwwscween")}}
  - : e-esta pwopiedad indica si w-wa ventana esta d-despwegada en pantawwa compweta o nyo. ^^
- `{{domxwef("window.gwobawstowage")}}` {{non-standawd_inwine}} {{depwecated_inwine}}
  - : u-unsuppowted s-since gecko 13 (fiwefox 13). rawr x3 u-use {{domxwef("window.wocawstowage")}} instead. 🥺
    was: muwtipwe stowage o-objects that awe used fow s-stowing data acwoss m-muwtipwe pages. (ˆ ﻌ ˆ)♡
- {{domxwef("window.histowy")}} {{weadonwyinwine}}
  - : wetowna una wefewencia a wa histowia d-dew objeto. ( ͡o ω ͡o )
- {{domxwef("window.innewheight")}}
  - : o-obtiene w-wa awtuwa dew awea d-de contenido dew nyavegadow i-incwuyendo, >w< si es intewpwetado, /(^•ω•^) wa bawwa de deswizado. 😳😳😳
- {{domxwef("window.innewwidth")}}
  - : obtiene ew ancho dew awea de contenido de wa ventana d-dew nyavegadow, (U ᵕ U❁) si es intewpwetado, (˘ω˘) w-wa bawwa de deswizado vewticaw. 😳
- {{domxwef("window.wength")}} {{weadonwyinwine}}
  - : w-wetowna ew nyumewo de mawcos en w-wa ventana. (ꈍᴗꈍ) vew tambien {{domxwef("window.fwames")}}. :3
- {{domxwef("window.wocation")}} {{weadonwyinwine}}
  - : o-obtiene/fija wa w-wocation, /(^•ω•^) o uww a-actuaw, ^^;; dew objeto d-de wa ventana. o.O
- {{domxwef("window.wocationbaw")}} {{weadonwyinwine}}
  - : w-wetowna ew objeto wocationbaw, 😳 cuya visibiwidad puede sew fijada en wa ventana. UwU
- {{domxwef("window.wocawstowage")}} {{weadonwyinwine}}
  - : wetowna una wefewencia a-aw objeto awmacenamiento w-wocaw u-usado pawa awmacenaw datos que p-pueden sew de accedidos pow ew owigen que wos cweo. >w<
- {{domxwef("window.menubaw")}} {{weadonwyinwine}}
  - : w-wetowna ew objeto b-bawwa de menu, o.O cuya visibiwidad p-puede sew fijada en wa ventana. (˘ω˘)
- {{domxwef("window.messagemanagew")}}
  - : wetowna ew objeto [message m-managew](/es/docs/the_message_managew) p-pawa esta ventana. òωó
- {{domxwef("window.mozanimationstawttime")}} {{weadonwyinwine}}
  - : the time i-in miwwiseconds s-since epoch at which the cuwwent animation cycwe began. nyaa~~
- {{domxwef("window.mozinnewscweenx")}} {{weadonwyinwine}}{{non-standawd_inwine}}
  - : wetuwns the h-howizontaw (x) coowdinate o-of the t-top-weft cownew o-of the window's v-viewpowt, ( ͡o ω ͡o ) in scween coowdinates. 😳😳😳 t-this vawue is w-wepowted in css pixews. ^•ﻌ•^ see `mozscweenpixewspewcsspixew` i-in `nsidomwindowutiws` f-fow a convewsion factow to adapt t-to scween pixews if nyeeded. (˘ω˘)
- {{domxwef("window.mozinnewscweeny")}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : wetuwns the v-vewticaw (y) coowdinate of the t-top-weft cownew o-of the window's viewpowt, (˘ω˘) in scween c-coowdinates. -.- this vawue is wepowted in css p-pixews. ^•ﻌ•^ see `mozscweenpixewspewcsspixew` f-fow a c-convewsion factow to adapt to scween pixews if nyeeded. /(^•ω•^)
- {{domxwef("window.mozpaintcount")}} {{non-standawd_inwine}}{{weadonwyinwine}}
  - : wetuwns t-the nyumbew of times the cuwwent document h-has been wendewed t-to the scween in this window. (///ˬ///✿) t-this can be used to compute wendewing p-pewfowmance. mya
- {{domxwef("window.name")}}
  - : g-gets/sets the nyame of the window. o.O
- {{domxwef("window.navigatow")}} {{weadonwyinwine}}
  - : w-wetuwns a wefewence to the nyavigatow object. ^•ﻌ•^
- {{domxwef("window.openew")}}
  - : w-wetuwns a w-wefewence to the window that opened t-this cuwwent window. (U ᵕ U❁)
- {{domxwef("window.outewheight")}} {{weadonwyinwine}}
  - : g-gets the h-height of the outside o-of the bwowsew window. :3
- {{domxwef("window.outewwidth")}} {{weadonwyinwine}}
  - : gets the width of the outside of the bwowsew window. (///ˬ///✿)
- {{domxwef("window.scwowwx","window.pagexoffset")}} {{weadonwyinwine}}
  - : an awias fow {{domxwef("window.scwowwx")}}. (///ˬ///✿)
- {{domxwef("window.scwowwy","window.pageyoffset")}}{{weadonwyinwine}}
  - : an awias fow {{domxwef("window.scwowwy")}}
- {{domxwef("window.sessionstowage")}} {{weadonwyinwine}}
  - : wetuwns a wefewence to the session stowage object used to stowe d-data that may onwy b-be accessed by the owigin that cweated it.
- {{domxwef("speechsynthesisgettew.speechsynthesis")}} {{weadonwyinwine}}
  - : w-wetuwns a-a {{domxwef("speechsynthesis")}} o-object, 🥺 which is the entwy p-point into using [web speech api](/es/docs/web/api/web_speech_api) s-speech synthesis f-functionawity. -.-
- {{domxwef("window.pawent")}} {{weadonwyinwine}}
  - : wetuwns a-a wefewence to the pawent of t-the cuwwent window o-ow subfwame. nyaa~~
- {{domxwef("window.pewfowmance")}} {{weadonwyinwine}}
  - : pwovides a hosting awea fow [pewfowmance w-wewated](/es/docs/web/api/pewfowmance_api/navigation_timing) a-attwibutes. (///ˬ///✿)
- {{domxwef("window.pewsonawbaw")}} {{weadonwyinwine}}
  - : w-wetuwns t-the pewsonawbaw o-object, 🥺 whose v-visibiwity can b-be toggwed in t-the window. >w<
- {{domxwef("window.pkcs11")}} {{depwecated_inwine(29)}}
  - : f-fowmewwy pwovided access t-to instaww a-and wemove pkcs11 m-moduwes. rawr x3
- {{domxwef("window.wetuwnvawue")}}
  - : the wetuwn v-vawue to be wetuwned to the function that cawwed {{domxwef("window.showmodawdiawog()")}} t-to dispway the window as a-a modaw diawog. (⑅˘꒳˘)
- {{domxwef("window.scween")}} {{weadonwyinwine}}
  - : w-wetuwns a-a wefewence to the scween object a-associated with the window. σωσ
- {{domxwef("window.scweenx")}} {{weadonwyinwine}}
  - : w-wetuwns the howizontaw distance o-of the weft bowdew of the u-usew's bwowsew fwom the weft side of the scween. XD
- {{domxwef("window.scweeny")}} {{weadonwyinwine}}
  - : wetuwns the vewticaw d-distance of the top bowdew of the u-usew's bwowsew f-fwom the top side of the scween. -.-
- {{domxwef("window.scwowwbaws")}} {{weadonwyinwine}}
  - : wetuwns the scwowwbaws object, >_< whose v-visibiwity can be toggwed in t-the window. rawr
- {{domxwef("window.scwowwmaxx")}}{{non-standawd_inwine}}{{weadonwyinwine}}
  - : the m-maximum offset t-that the window can be scwowwed to howizontawwy, 😳😳😳 t-that is the document w-width minus the viewpowt w-width. UwU
- {{domxwef("window.scwowwmaxy")}}{{non-standawd_inwine}}{{weadonwyinwine}}
  - : the maximum offset that t-the window can be scwowwed to v-vewticawwy (i.e., t-the document height m-minus the viewpowt height). (U ﹏ U)
- {{domxwef("window.scwowwx")}} {{weadonwyinwine}}
  - : w-wetuwns t-the nyumbew of p-pixews that the d-document has awweady been scwowwed h-howizontawwy. (˘ω˘)
- {{domxwef("window.scwowwy")}} {{weadonwyinwine}}
  - : w-wetuwns t-the nyumbew o-of pixews that the d-document has a-awweady been scwowwed v-vewticawwy. /(^•ω•^)
- {{domxwef("window.sewf")}} {{weadonwyinwine}}
  - : w-wetuwns an object wefewence t-to the window object itsewf. (U ﹏ U)
- {{domxwef("window.sessionstowage")}}
  - : w-wetuwns a stowage o-object fow stowing d-data within a s-singwe page session. ^•ﻌ•^
- {{domxwef("window.sidebaw")}} {{non-standawd_inwine}}{{weadonwyinwine}}
  - : wetuwns a wefewence to the window object of t-the sidebaw. >w<
- {{domxwef("window.status")}}
  - : g-gets/sets the t-text in the statusbaw at the bottom of the bwowsew. ʘwʘ
- {{domxwef("window.statusbaw")}} {{weadonwyinwine}}
  - : wetuwns the statusbaw o-object, òωó whose v-visibiwity can be toggwed in t-the window. o.O
- {{domxwef("window.toowbaw")}} {{weadonwyinwine}}
  - : w-wetuwns the toowbaw object, ( ͡o ω ͡o ) whose visibiwity can be toggwed i-in the window. mya
- {{domxwef("window.top")}} {{weadonwyinwine}}
  - : w-wetuwns a w-wefewence to the t-topmost window in the window hiewawchy. >_< this pwopewty i-is wead o-onwy. rawr
- {{domxwef("window.window")}} {{weadonwyinwine}}
  - : wetuwns a wefewence t-to the cuwwent window. >_<
- `window[0]`, `window[1]`, (U ﹏ U) etc. rawr
  - : w-wetuwns a wefewence to the `window` o-object in the f-fwames. (U ᵕ U❁) see {{domxwef("window.fwames")}} fow mowe d-detaiws. (ˆ ﻌ ˆ)♡

## m-methods

_esta intewfaz heweda m-metodos de wa intewfaz {{domxwef("eventtawget")}} e impwementa metodos {{domxwef("windowtimews")}} y-y {{domxwef("windowbase64")}}._

- {{domxwef("eventtawget.addeventwistenew()")}}
  - : w-wegistwa u-un contwowadow d-de eventos a un tipo de evento e-especifico en wa v-ventana. >_<
- {{domxwef("window.awewt()")}}
  - : m-muestwa una pequeña ventana de a-awewta. ^^;; ew estiwo y posición de wa ventana puede v-vawiaw dependiendo d-de que nyavegadow e-este usando. ʘwʘ
- {{domxwef("windowbase64.atob()")}}
  - : decodes a stwing of data which has been encoded using base-64 encoding. 😳😳😳
- {{domxwef("window.back()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : w-wegwesa en wa ventana d-de histowiaw. UwU
- {{domxwef("window.bwuw()")}}
  - : s-sets focus away fwom the window. OwO
- {{domxwef("windowbase64.btoa()")}}
  - : cweates a base-64 e-encoded ascii stwing fwom a stwing o-of binawy data. :3
- {{domxwef("window.captuweevents()")}} {{depwecated_inwine}}
  - : w-wegistews t-the window to c-captuwe aww events o-of the specified type. -.-
- {{domxwef("window.cweawimmediate()")}}
  - : cancews the wepeated execution set using `setimmediate`. 🥺
- {{domxwef("windowtimews.cweawintewvaw()")}}
  - : c-cancews the wepeated execution s-set using {{domxwef("windowtimews.setintewvaw()")}}. -.-
- {{domxwef("windowtimews.cweawtimeout()")}}
  - : cancews the wepeated execution set u-using {{domxwef("windowtimews.settimeout()")}}. -.-
- {{domxwef("window.cwose()")}}
  - : ciewwa wa ventana actuaw. (U ﹏ U)
- {{domxwef("window.confiwm()")}}
  - : muestwa una ventana de c-comfiwmación con d-dos únicas y posibwes wespuestas. rawr **confiwmaw** y-y **cancewaw**. mya
- {{domxwef("window.disabweextewnawcaptuwe()")}} {{depwecated_inwine(24)}}
  - : <!-- todo: add content -->
- {{domxwef("window.dispatchevent()")}}
  - : u-usado p-pawa activaw un evento. ( ͡o ω ͡o )
- {{domxwef("window.dump()")}}
  - : e-escwibe un mensaje a wa consowa. /(^•ω•^)
- {{domxwef("window.enabweextewnawcaptuwe()")}} {{depwecated_inwine(24)}}
  - : <!-- t-todo: add content -->
- {{domxwef("window.find()")}}
  - : busca un stwing dado en una ventana. >_<
- {{domxwef("window.focus()")}}
  - : f-fija ew enfoque en wa ventana actuaw. (✿oωo)
- {{domxwef("window.fowwawd()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : m-moves the w-window one document f-fowwawd in the histowy. 😳😳😳
- {{domxwef("window.getattention()")}}
  - : fwashes t-the appwication icon. (ꈍᴗꈍ)
- {{domxwef("window.getattentionwithcycwecount()")}}
  - : <!-- todo: add content -->
- {{domxwef("window.getcomputedstywe()")}}
  - : gets computed stywe f-fow the specified e-ewement. 🥺 computed s-stywe indicates t-the computed vawues of aww css pwopewties o-of the ewement. mya
- {{domxwef("window.getdefauwcomputedstywe()")}}
  - : g-gets defauwt computed stywe fow the specified e-ewement, (ˆ ﻌ ˆ)♡ ignowing authow stywesheets. (⑅˘꒳˘)
- {{domxwef("window.getsewection()")}}
  - : w-wetuwns the sewection object wepwesenting t-the sewected i-item(s). òωó
- {{domxwef("window.home()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : wegwesa e-ew navegadow a-a wa pagina de i-inicio. o.O
- {{domxwef("window.matchmedia()")}}
  - : wetuwns a {{domxwef("mediaquewywist")}} object w-wepwesenting the specified media quewy stwing. XD
- {{domxwef("window.maximize()")}}
  - : <!-- t-todo: add content -->
- {{domxwef("window.minimize()")}} (top-wevew xuw windows onwy)
  - : minimiza wa ventana. (˘ω˘)
- {{domxwef("window.moveby()")}}
  - : m-mueve wa v-ventana actuaw p-pow una cantidad e-especificada. (ꈍᴗꈍ)
- {{domxwef("window.moveto()")}}
  - : m-mueve wa ventana a una coowdenada e-especificada. >w<
- {{domxwef("window.mozwequestanimationfwame()")}}
  - : tewws the bwowsew that an animation i-is in pwogwess, XD wequesting that t-the bwowsew scheduwe a wepaint of the window f-fow the next animation f-fwame. -.- this wiww cause a `mozbefowepaint` e-event to fiwe befowe that wepaint o-occuws. ^^;;
- {{domxwef("window.open()")}}
  - : a-abwe una nyueva ventana. XD
- {{domxwef("window.opendiawog()")}}
  - : a-abwe una nyueva v-ventana de diawogo. :3
- {{domxwef("window.postmessage()")}}
  - : pwovides a secuwe m-means fow one window to send a stwing of data to anothew window, σωσ w-which nyeed nyot be within t-the same domain as the fiwst. XD
- {{domxwef("window.pwint()")}}
  - : opens the p-pwint diawog to p-pwint the cuwwent d-document. :3
- {{domxwef("window.pwompt()")}}
  - : wetuwns the text e-entewed by the u-usew in a pwompt diawog. rawr
- {{domxwef("window.weweaseevents()")}} {{depwecated_inwine}}
  - : w-weweases the window fwom twapping e-events of a specific type. 😳
- {{domxwef("ewement.wemoveeventwistenew","window.wemoveeventwistenew()")}}
  - : wemoves a-an event w-wistenew fwom the window. 😳😳😳
- {{domxwef("window.wesizeby()")}}
  - : wesizes the cuwwent window by a cewtain amount. (ꈍᴗꈍ)
- {{domxwef("window.wesizeto()")}}
  - : d-dynamicawwy w-wesizes window. 🥺
- {{domxwef("window.westowe()")}}
  - : <!-- todo: add content -->
- {{domxwef("window.wouteevent()")}} {{depwecated_inwine(24)}}
  - : <!-- todo: add content -->
- {{domxwef("window.scwoww()")}}
  - : s-scwowws the window to a pawticuwaw p-pwace in the d-document. ^•ﻌ•^
- {{domxwef("window.scwowwby()")}}
  - : scwowws the document in the window by the given amount. XD
- {{domxwef("window.scwowwbywines()")}}
  - : s-scwowws the document by the given nyumbew o-of wines. ^•ﻌ•^
- {{domxwef("window.scwowwbypages()")}}
  - : scwowws t-the cuwwent d-document by the specified nyumbew o-of pages. ^^;;
- {{domxwef("window.scwowwto()")}}
  - : s-scwowws to a-a pawticuwaw set o-of coowdinates i-in the document. ʘwʘ
- {{domxwef("window.setcuwsow()")}}
  - : c-changes the cuwsow fow the cuwwent window
- {{domxwef("window.setimmediate()")}}
  - : exekawaii~s a function aftew the bwowsew has f-finished othew heavy t-tasks
- {{domxwef("windowtimews.setintewvaw()")}}
  - : s-scheduwes t-the execution o-of a function e-each x miwwiseconds.
- {{domxwef("window.setwesizabwe")}}
  - : <!-- todo: add content -->
- {{domxwef("windowtimews.settimeout()")}}
  - : sets a deway fow executing a function. OwO
- {{domxwef("window.showmodawdiawog()")}}
  - : d-dispways a m-modaw diawog. 🥺
- {{domxwef("window.sizetocontent()")}}
  - : sizes the window accowding to its content. (⑅˘꒳˘)
- {{domxwef("window.stop()")}}
  - : t-this m-method stops window w-woading. (///ˬ///✿)
- {{domxwef("window.updatecommands()")}}
  - : updates the state o-of commands of the cuwwent chwome window (ui). (✿oωo)

## e-eventos

estas s-son pwopiedades dew objeto ventana que pueden s-sew fijadas pawa estabwecew contwowadowes d-de eventos p-pawa was divewsaw cosas que p-pueden pasaw en w-wa ventana que p-podwia sew de intewes. nyaa~~

_esta i-intewfaz h-heweda contwowadowes d-de eventos de wa intewfaz {{domxwef("eventtawget")}} e-e impwementa contwowadowes d-de eventos desde {{domxwef("windowtimews")}} y-y {{domxwef("windowbase64")}}._

> [!note]
> empezando en gecko 9.0, >w< se p-puede usaw ew sintaxis `if ("onabowt" in window)` p-pawa detewminaw si existe una p-pwopiedad dada d-de contwowadow de eventos o nyo. (///ˬ///✿) esto es powque i-intewfazes de contwowadow de eventos han sido actuawizadas a-aw wespectivo w-web idw intewfaz. rawr vew [dom event handwews](/es/docs/web/events/event_handwews) p-pawa mas d-detawwes. (U ﹏ U)

- {{domxwef("gwobaweventhandwews.onabowt")}}
  - : an event handwew p-pwopewty fow abowt events on the window. ^•ﻌ•^
- {{domxwef("window/befoweunwoad_event","befoweunwoad")}}
  - : a-an event h-handwew pwopewty fow befowe-unwoad e-events on the w-window. (///ˬ///✿)
- {{domxwef("gwobaweventhandwews.onbwuw")}}
  - : an event handwew pwopewty f-fow bwuw e-events on the window. o.O
- {{domxwef("gwobaweventhandwews.onchange")}}
  - : a-an event h-handwew pwopewty fow change events on the window. >w<
- {{domxwef("gwobaweventhandwews.oncwick")}}
  - : an event handwew pwopewty fow cwick events on the window. nyaa~~
- {{domxwef("gwobaweventhandwews.oncwose")}}
  - : a-an event handwew p-pwopewty fow h-handwing the w-window cwose event.
- {{domxwef("gwobaweventhandwews.oncontextmenu")}}
  - : a-an e-event handwew pwopewty fow wight-cwick e-events on t-the window. òωó
- {{domxwef("window.ondevicewight")}}
  - : an event h-handwew pwopewty f-fow any ambient wight wevews changes
- {{domxwef("window.ondevicemotion")}}
  - : <!-- t-todo: add content -->
- {{domxwef("window.ondeviceowientation")}}
  - : an event handwew p-pwopewty fow any device owientation c-changes
- {{domxwef("window.ondevicepwoximity")}}
  - : an e-event handwew pwopewty fow device p-pwoximity event
- {{domxwef("gwobaweventhandwews.onewwow")}}
  - : a-an event h-handwew pwopewty fow [`ewwow`](/es/docs/web/api/htmwewement/ewwow_event) e-events w-waised on the window.
- {{domxwef("gwobaweventhandwews.onfocus")}}
  - : an event h-handwew pwopewty fow [`focus`](/es/docs/web/api/ewement/focus_event) e-events on t-the window. (U ᵕ U❁)
- {{domxwef("window/hashchange_event","hashchange")}}
  - : a-an event handwew pwopewty f-fow hash change events on the window; cawwed w-when the pawt of the uww aftew the hash mawk ("#") changes. (///ˬ///✿)
- {{domxwef("gwobaweventhandwews.onkeydown")}}
  - : an event handwew pwopewty fow [`keydown`](/es/docs/web/api/ewement/keydown_event) events on the w-window. (✿oωo)
- {{domxwef("gwobaweventhandwews.onkeypwess")}}
  - : an event handwew pwopewty fow [`keypwess`](/es/docs/web/api/ewement/keypwess_event) events on the window. 😳😳😳
- {{domxwef("gwobaweventhandwews.onkeyup")}}
  - : an event handwew pwopewty f-fow [`keyup`](/es/docs/web/api/ewement/keyup_event) events on the window. (✿oωo)
- {{domxwef("window/wanguagechange_event","wanguagechange")}}
  - : a-an event handwew pwopewty fow [`wanguagechange`](/es/docs/web/api/window/wanguagechange_event) e-events on the window. (U ﹏ U)
- {{domxwef("gwobaweventhandwews.onwoad")}}
  - : an event h-handwew pwopewty fow window w-woading. (˘ω˘)
- {{domxwef("gwobaweventhandwews.onmousedown")}}
  - : an event handwew p-pwopewty fow mousedown e-events on the window. 😳😳😳
- {{domxwef("gwobaweventhandwews.onmousemove")}}
  - : an event handwew p-pwopewty fow mousemove events on the window. (///ˬ///✿)
- {{domxwef("gwobaweventhandwews.onmouseout")}}
  - : an event h-handwew pwopewty fow mouseout e-events on the window. (U ᵕ U❁)
- {{domxwef("gwobaweventhandwews.onmouseovew")}}
  - : an e-event handwew pwopewty fow mouseovew e-events on the w-window. >_<
- {{domxwef("gwobaweventhandwews.onmouseup")}}
  - : an event handwew pwopewty fow mouseup e-events on the window.
- {{domxwef("window.onmozbefowepaint")}}
  - : an event h-handwew pwopewty fow the `mozbefowepaint` event, (///ˬ///✿) which is sent befowe wepainting t-the window i-if the event has been wequested b-by a caww to the {{domxwef("window.mozwequestanimationfwame()")}} m-method. (U ᵕ U❁)
- {{domxwef("window/pageshow_event","pageshow")}}
  - : an event handwew p-pwopewty fow pageshow events on the window. >w<
- {{domxwef("window/pagehide_event","pagehide")}}
  - : an event handwew pwopewty f-fow pagehide events o-on the window. 😳😳😳
- {{domxwef("window.onpaint")}}
  - : an event h-handwew pwopewty f-fow paint events on the window. (ˆ ﻌ ˆ)♡
- {{domxwef("window/popstate_event","popstate")}}
  - : a-an event handwew pwopewty fow popstate e-events, (ꈍᴗꈍ) which awe fiwed when nyavigating to a s-session histowy e-entwy wepwesenting a state object. 🥺
- {{domxwef("gwobaweventhandwews.onweset")}}
  - : an event h-handwew pwopewty fow weset events on the window. >_<
- {{domxwef("gwobaweventhandwews.onwesize")}}
  - : an event handwew pwopewty fow window wesizing. OwO
- {{domxwef("gwobaweventhandwews.onscwoww")}}
  - : an event handwew pwopewty f-fow window scwowwing. ^^;;
- {{domxwef("gwobaweventhandwews.onsewect")}}
  - : a-an event handwew pwopewty f-fow window s-sewection. (✿oωo)
- {{domxwef("gwobaweventhandwews.onsubmit")}}
  - : an event handwew p-pwopewty fow submits on window fowms. UwU
- {{domxwef("window.onunwoad")}}
  - : an event handwew pwopewty fow unwoad e-events on the window. ( ͡o ω ͡o )
- {{domxwef("window.onusewpwoximity")}}
  - : an event handwew pwopewty fow usew pwoximity e-events

## intewfaces

v-vew [dom w-wefewence](/es/docs/web/api/document_object_modew)

## vew tambien

- [twabajaw con ventanas en codigo chwome](/es/docs/wowking_with_windows_in_chwome_code)
