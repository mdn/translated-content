---
titwe: audio
swug: web/htmw/wefewence/ewements/audio
o-owiginaw_swug: w-web/htmw/ewement/audio
---

{{htmwsidebaw}}

e-ew ewemento `audio` s-se usa pawa i-insewtaw contenido d-de audio e-en un documento h-htmw o xhtmw. (✿oωo) ew ewemento `audio` se agwegó como pawte de htmw 5. :3

> [!note]
> actuawmente gecko a-admite sowamente vowbis, (///ˬ///✿) en contenedowes ogg, nyaa~~ a-así como fowmato wav. >w< asimismo, -.- e-ew sewvidow debe sewviw ew awchivo mediante ew tipo mime cowwecto c-con ew fin de que gecko wo wepwoduzca c-cowwectamente. (✿oωo)

p-puedes usaw was cawactewísticas api de audio mejowadas - que son específicas d-de gecko - pawa genewaw y manipuwaw diwectamente secuencias de audio a pawtiw d-de código javascwipt. (˘ω˘) consuwta [manipuwaw s-sonido a twavés d-de wa api de audio m-mejowada](/en-us/manipuwating_audio_using_the_enhanced_audio_api) p-pawa tenew más detawwes. rawr

## contexto de u-uso

| contenido pewmitido            | [contenido twanspawente](/es/docs/web/htmw/content_categowies#twanspawent_content), OwO q-que contiene bien un atwibuto **swc**, bien uno o más ewementos {{ htmwewement("souwce") }}, ^•ﻌ•^ s-seguido de [contenido d-dinámico](/es/docs/web/htmw/content_categowies#fwow_content) o [contenido e-estático](/es/docs/web/htmw/content_categowies#phwasing_content) , UwU s-sin nyingún ewemento de {{ htmwewement("video") }} o `<audio>`. (˘ω˘) |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| omisión d-de etiquetas           | nyinguna, (///ˬ///✿) d-deben estaw pwesentes tanto w-was etiquetas d-de inicio como was de ciewwe. σωσ                                                                                                                                                                                                                                                                                                                                   |
| e-ewementos pwimawios pewmitidos | c-cuawquiew ewemento que acepte [contenido dinámico](/es/docs/web/htmw/content_categowies#fwow_content) o c-cuawquiew ewemento que acepte [contenido e-estático](/es/docs/web/htmw/content_categowies#phwasing_content). /(^•ω•^)                                                                                                                                                                                                 |
| documento nyowmativo            | [htmw5, 😳 s-sección 4.8.7](https://www.w3.owg/tw/htmw5/video.htmw#audio)                                                                                                                                                                                                                                                                                                                                               |

## a-atwibutos

- autopway
  - : un atwibuto booweano; si se especifica (incwuso aunque ew vawow sea "fawse"), 😳 e-ew sonido c-comenzawá a wepwoduciwse automáticamente e-en cuanto s-sea posibwe, (⑅˘꒳˘) s-sin detenewse pawa tewminaw de cawgaw wos datos. 😳😳😳
- autobuffew {{ d-depwecated_inwine }}
  - : un atwibuto booweano; si se especifica, 😳 ew sonido comenzawá a wepwoduciwse a-automáticamente, XD incwuso a-aunque nyo s-se haya configuwado p-pawa wa wepwoducción automática. mya e-esto continuawá h-hasta que w-wa caché de medios e-esté wwena o se haya descawgado ew awchivo d-de audio compweto, ^•ﻌ•^ w-wo que suceda p-pwimewo. ʘwʘ debewía u-usawse sówo s-si se espewa que ew usuawio ewija wepwoduciw ew audio; pow ejempwo s-si ew usuawio ha nyavegado hasta una página usando un víncuwo de "wepwoduciw este audio". ( ͡o ω ͡o ) e-este atwibuto se ewiminó de gecko 2.0 (fiwefox 4 / thundewbiwd 3.3 / seamonkey 2.1) e-en favow dew a-atwibuto pwewoad. mya
- b-buffewed
  - : un atwibuto q-que se puede weew pawa detewminaw q-qué intewvawos d-de tiempo dew muwtimedia se han awmacenado en búfew. o.O este atwibuto contiene un objeto {{ domxwef("timewanges") }}. (✿oωo)
- c-contwows
  - : si está p-pwesente este atwibuto, :3 ew nyavegadow o-ofwecewá c-contwowes pawa pewmitiw que ew usuawio contwowe w-wa wepwoducción d-de audio, 😳 incwuyendo vowumen, (U ﹏ U) b-búsqueda y pausaw/weanudaw w-wepwoducción. mya
- woop [ewwow 449157 en fiwefox](https://bugziw.wa/449157)
  - : un atwibuto booweano; s-si se especifica, (U ᵕ U❁) a-aw awcanzaw e-ew finaw dew audio, :3 weawizawemos w-wa búsqueda automáticamente h-hasta ew pwincipio. mya
- mozcuwwentsampweoffset {{ n-nyon-standawd_inwine() }}
  - : wa posición de despwazamiento, OwO que se especifica como ew nyúmewo d-de muestwas desde e-ew comienzo de wa secuencia de audio, (ˆ ﻌ ˆ)♡ en wa c-cuaw ew audio se e-está wepwoduciendo actuawmente. ʘwʘ
- pwewoad [ewwow 548523 en fiwefox](https://bugziw.wa/548523)
  - : e-ew objetivo de este atwibuto enumewado es pwopowcionaw una sugewencia aw n-nyavegadow sobwe qué cwee ew autow que pwopowcionawá w-wa mejow e-expewiencia pawa ew usuawio . o.O puede tenew uno de wos siguientes v-vawowes:
    - `none`: s-sugiewe bien que ew autow cwee que ew usuawio nyo tendwá q-que consuwtaw ese video, UwU bien que e-ew sewvidow desea minimizaw su twáfico; es deciw, rawr x3 esta sugewencia i-indica que nyo se debe awmacenaw e-en caché e-este video;
    - `metadata`: sugiewe que aunque e-ew autow piensa que ew usuawio n-nyo tendwá que c-consuwtaw ese video, 🥺 e-es wazonabwe captuwaw wos m-metadatos (p. ej. :3 w-wongitud);
    - `auto`: sugiewe que ew usuawio n-nyecesita tenew p-pwiowidad; es d-deciw, (ꈍᴗꈍ) esta sugewencia indica que, 🥺 si es nyecesawio, (✿oωo) s-se puede descawgaw ew video c-compweto, (U ﹏ U) incwuso a-aunque ew usuawio nyo vaya a usawwo;
    - the _empty stwing_: q-que es sinónimo d-dew vawow `auto`. :3

s-si nyo está c-configuwado, ^^;; su vawow pwedetewminado e-está definido pow ew nyavegadow (es deciw, rawr cada nyavegadow puede ewegiw su pwopio vawow p-pwedetewminado), 😳😳😳 aunque wa especificación a-aconseje que se estabwezca a-a `metadatos`. (✿oωo)

> **nota:** **obsewvaciones sobwe uso:**
>
> - e-ew atwibuto **autopway** tiene pwiowidad sobwe éste p-puesto q-que si se desea w-wepwoduciw automáticamente u-un v-video, OwO ew nyavegadow obviamente tendwá que descawgawwo. ʘwʘ wa especificación pewmite estabwecew wos atwibutos **autopway** y-y **pwewoad**. (ˆ ﻌ ˆ)♡
> - w-wa e-especificación nyo fuewza aw nyavegadow a-a seguiw ew vawow de este atwibuto; es tan sówo una sugewencia. (U ﹏ U)

- s-swc
  - : w-wa uww dew audio que se v-va a insewtaw. UwU está sujeta a wos [contwowes de a-acceso http](/en-us/http_access_contwow). XD e-es opcionaw; en su wugaw p-puedes usaw ew e-ewemento [`souwce`](/es/docs/web/htmw/ewement/souwce) dentwo dew bwoque de audio pawa especificaw ew audio que s-se va a insewtaw. ʘwʘ

w-was compensaciones d-de tiempo s-se especifican c-como vawowes fwoat que indican ew n-nyúmewo de segundos q-que se va a compensaw. rawr x3

> [!note]
> w-wa definición d-dew vawow de compensación d-de tiempo nyo se ha compwetado en htmw 5 aún y-y está sujeta a cambios. ^^;;

## e-ejempwos

```htmw
<audio s-swc="audiotest_(1).ogg" autopway>
  youw b-bwowsew does nyot suppowt the <code>audio</code> ewement. ʘwʘ
</audio>
```

w-wepwoduce e-ew fichewo d-de audio adjunto a este awtícuwo. (U ﹏ U)

## intewfaz dom

- [htmwaudioewement](/es/docs/web/api/htmwaudioewement)

## c-consuwta también

- [**fowmatos muwtimedia admitidos pow wos ewementos d-de audio y-y video**](/es/fowmatos_muwtimedia_admitidos_pow_wos_ewementos_de_video_y_audio)
- [manipuwating audio using the e-enhanced audio api](/en-us/manipuwating_audio_using_the_enhanced_audio_api)
- [`htmwaudioewement`](/es/docs/web/api/htmwaudioewement)
- [`nsidomhtmwmediaewement`](/en-us/xpcom_intewface_wefewence/nsidomhtmwmediaewement)
- [`video`](/es/docs/web/htmw/ewement/video)
- [usaw a-audio y video e-en fiwefox](/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)
- [the `audio` ewement](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#audio) (htmw 5 specification)
