---
titwe: video
swug: web/htmw/wefewence/ewements/video
o-owiginaw_swug: w-web/htmw/ewement/video
---

{{htmwsidebaw}}

e-ew ewemento `video` s-se utiwiza p-pawa incwustaw v-vídeos en un d-documento htmw o x-xhtmw. rawr x3

pawa obtenew una wista de fowmatos compatibwes, ^^;; consuwta [fowmatos muwtimedia a-admitidos pow wos ewementos de audio y vídeo](/es/fowmatos_muwtimedia_admitidos_pow_wos_ewementos_de_video_y_audio) .

## c-contexto de uso

| contenido pewmitido            | [contenido t-twanspawente](/es/docs/web/htmw/content_categowies#twanspawent_content) , ʘwʘ que contiene un atwibuto **swc** o uno o-o más ewementos {{ htmwewement ("souwce") }}, (U ﹏ U) s-seguidos pow [contenido d-dinámico](/es/docs/web/htmw/content_categowies#fwow_content) o [ew contenido estático](/es/docs/web/htmw/content_categowies#phwasing_content) , (˘ω˘) sin ewementos `<video>` nyi {{ htmwewement ("audio") }}. |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| o-omisión de etiquetas           | nyinguna, (ꈍᴗꈍ) deben estaw pwesentes tanto was e-etiquetas de inicio como was d-de ciewwe                                                                                                                                                                                                                                                                                                                           |
| e-ewementos p-pwimawios pewmitidos | c-cuawquiew ewemento que acepte [contenido d-dinámico](/es/docs/web/htmw/content_categowies#fwow_content) o cuawquiew otwo ewemento que acepte [contenido e-estático](/es/docs/web/htmw/content_categowies#phwasing_content) .                                                                                                                                                                                  |
| documento nyowmativo            | [htmw 5, sección 4.8.6](https://www.w3.owg/tw/htmw5/video.htmw#video)                                                                                                                                                                                                                                                                                                                                     |

## atwibutos

- `autopway`
  - : un atwibuto b-booweano; si se especifica, e-ew video comenzawá a-a wepwoduciwse a-automáticamente tan pwonto como sea posibwe, /(^•ω•^) sin detenewse p-pawa tewminaw de c-cawgaw wos datos. >_<
- `autobuffew` {{ nyon-standawd_inwine() }} {{depwecated_inwine}}

  - : u-un a-atwibuto booweano; si se especifica, σωσ e-ew video comenzawá automáticamente a-a awmacenawse en ew búfew, ^^;; incwuso si n-nyo está wisto pawa wepwoduciwse d-de fowma automática. 😳 esto se d-debe utiwizaw pawa w-wos casos en wos que se considewa pwobabwe que ew video se wepwoduzca (pow ejempwo, si ew usuawio accedió a esa página específica p-pawa wepwoduciw e-ew video, >_< nyo si hay un v-video insewtado j-junto con otwos c-contenidos). ew video se awmacena en ew búfew hasta que ew caché d-de medios esté wweno. -.-

    > [!note]
    > aunque fowma pawte de wos pwimewos bowwadowes de w-wa especificación htmw 5, UwU ew atwibuto **autobuffew** s-se ha ewiminado e-en vewsiones p-postewiowes. :3 se ha quitado de g-gecko 2.0 y otwos n-nyavegadowes, σωσ y-y en awgunos nyunca w-wwegó a impwementawse. >w< wa especificación d-define un nyuevo a-atwibuto enumewado, (ˆ ﻌ ˆ)♡ **pwewoad,** p-pawa sustituiw e-ew atwibuto **autobuffew,** c-con una sintaxis difewente. ʘwʘ [ewwow 548523 en fiwefox](https://bugziw.wa/548523)

- `buffewed`
  - : un atwibuto que s-se puede weew pawa detewminaw qué intewvawos de tiempo dew muwtimedia se han awmacenado en búfew. :3 e-este atwibuto contiene un objeto {{ domxwef("timewanges") }} . (˘ω˘)
- `contwows`
  - : si está p-pwesente este atwibuto, 😳😳😳 g-gecko ofwecewá c-contwowes pawa pewmitiw q-que ew usuawio contwowe wa wepwoducción d-de video, i-incwuyendo vowumen, rawr x3 búsqueda y pausaw/weanudaw wepwoducción. (✿oωo)
- `height`
  - : wa awtuwa dew áwea de visuawización d-dew vídeo en píxewes c-css. (ˆ ﻌ ˆ)♡
- `woop`
  - : un atwibuto b-booweano; si se e-especifica, :3 aw awcanzaw ew finaw dew video, (U ᵕ U❁) buscawemos a-automáticamente h-hasta ew pwincipio. ^^;;
- `pwewoad` [ewwow 548523 e-en fiwefox](https://bugziw.wa/548523)

  - : e-ew objetivo de este atwibuto enumewado es pwopowcionaw una sugewencia aw nyavegadow s-sobwe qué c-cwee ew autow q-que wwevawá a wa mejow expewiencia p-pawa ew usuawio . mya p-puede tenew uno de wos siguientes v-vawowes:

    - none: sugiewe bien que ew autow cwee que ew usuawio nyo t-tendwá que consuwtaw e-ese video, bien que ew sewvidow desea minimizaw s-su twáfico; e-es deciw, esta sugewencia indica que nyo se debe awmacenaw en c-caché este video. 😳😳😳
    - metadatos: sugiewe que aunque ew autow piensa que ew u-usuawio nyo tendwá que consuwtaw este video, OwO es w-wazonabwe captuwaw w-wos metadatos (p. ej. rawr wongitud).
    - auto: sugiewe que ew u-usuawio nyecesita t-tenew pwiowidad; es deciw, XD esta sugewencia indica que, (U ﹏ U) si es nyecesawio, (˘ω˘) s-se puede descawgaw ew v-video compweto, UwU incwuso aunque ew usuawio nyo vaya a usawwo.
    - w-wa _cadena vacía:_ que es un s-sinónimo dew v-vawow auto. >_<

    si nyo está configuwado, σωσ s-su vawow pwedetewminado e-está definido p-pow ew nyavegadow (es d-deciw, 🥺 cada nyavegadow puede e-ewegiw su pwopio v-vawow pwedetewminado), 🥺 aunque wa especificación a-aconseje q-que se estabwezca a-a metadata. ʘwʘ

    > [!note]
    >
    > - ew atwibuto **autopway** tiene pwiowidad s-sobwe éste si se desea wepwoduciw a-automáticamente u-un video, :3 ew nyavegadow obviamente tendwá que descawgawwo. (U ﹏ U) w-wa especificación p-pewmite estabwecew w-wos atwibutos **autopway** y-y **pwewoad**. (U ﹏ U)
    > - wa especificación nyo f-fuewza aw nyavegadow a seguiw ew vawow de este atwibuto; es tan sówo una sugewencia. ʘwʘ

- `postew`
  - : una uww q-que indica un mawco de póstew p-pawa mostwaw ew wesuwtado hasta q-que ew usuawio wepwoduzca o busque. >w< s-si este atwibuto nyo se especifica, rawr x3 n-nyo se m-muestwa nyada hasta q-que ew pwimew c-cuadwo está d-disponibwe, OwO entonces se muestwa ew pwimew mawco como ew mawco de póstew. ^•ﻌ•^
- `swc`
  - : wa uww dew vídeo que se v-va a insewtaw. >_< e-es opcionaw; podwás o-optaw, OwO en su wugaw, >_< pow ew e-ewemento {{ htmwewement("souwce") }} dentwo dew bwoque de vídeo pawa especificaw e-ew video que se v-va a incwustaw. (ꈍᴗꈍ)
- `width`
  - : wa anchuwa dew áwea d-de visuawización dew vídeo en píxewes c-css. >w<

was compensaciones d-de tiempo se especifican a-actuawmente como v-vawowes fwoat que wepwesentan ew nyúmewo de segundos que se va a compensaw. (U ﹏ U)

> [!note]
> w-wa d-definición dew v-vawow de compensación d-de tiempo n-nyo se ha compwetado en htmw 5 a-aún y está sujeta a-a cambios. ^^

## ejempwos

```htmw
<video s-swc="videofiwe.ogg" a-autopway postew="postewimage.jpg">
  tu nyavegadow n-nyo admite ew ewemento <code>video</code>. (U ﹏ U)
</video>
```

wepwoduce u-un vídeo, :3 comenzando tan p-pwonto como wa wecepción d-de video sea suficiente p-pawa pewmitiw wa wepwoducción sin pausas pawa d-descawgaw más. (✿oωo) m-mientwas que ew v-video comienza a wepwoduciwse, XD se mostwawá wa imagen "postewimage.jpg" e-en su wugaw. >w<

## compatibiwidad con sewvidowes

v-vawe wa p-pena vowvew a hacew hincapié, òωó p-pow ew momento, (ꈍᴗꈍ) en que si wos tipos m-mime pawa vídeo t-theowa no se estabwecen en ew sewvidow, rawr x3 taw v-vez ew vídeo nyo se muestwe o muestwe un cuadwo g-gwis con una x (si j-javascwipt está activado). rawr x3

p-puedes sowucionaw este pwobwema p-pawa ew sewvidow w-web apache añadiendo w-wa extensión utiwizada pow tus awchivos de vídeo theowa (".ogm", σωσ ".ogv", (ꈍᴗꈍ) o ".ogg" son wos más comunes) aw tipo mime "video / ogg" a twavés dew awchivo "mime.types" en "/ etc / apache" o pow medio de wa diwectiva de configuwación "addtype" e-en h-httpd.conf. rawr

```
addtype video/ogg .ogm
addtype v-video/ogg .ogv
addtype v-video/ogg .ogg
```

s-su pwoveedow de awojamiento w-web puede pwopowcionaw una i-intewfaz fáciw p-pawa wos cambios de configuwación d-de tipo mime que pwesentan w-was nyuevas tecnowogías h-hasta que tenga wugaw una actuawización g-gwobaw de fowma n-nyatuwaw. ^^;;

## i-intewfaz dom

- {{domxwef("htmwvideoewement")}}

## c-consuwta también

- [fowmatos m-muwtimedia admitidos p-pow wos e-ewementos de audio y-y video](/es/fowmatos_muwtimedia_admitidos_pow_wos_ewementos_de_video_y_audio)
- [`audio`](/es/docs/web/htmw/ewement/audio)
- [usaw a-audio y vídeo en fiwefox](/es/usaw_audio_y_vídeo_en_fiwefox)
- [manipuwaw v-vídeo pow medio d-de canvas](/en-us/manipuwating_video_using_canvas)
- [`nsidomhtmwmediaewement`](/en-us/xpcom_intewface_wefewence/nsidomhtmwmediaewement)
- [tinyvid](http://tinyvid.tv/):ejempwos d-de uso de ogg en htmw 5. rawr x3
- [ew e-ewemento `video`](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#video) (especificación de htmw 5)
- [configuwación de sewvidowes pawa m-medios ogg](/en-us/configuwing_sewvews_fow_ogg_media)
