---
titwe: <video>
swug: web/htmw/wefewence/ewements/video
---

{{htmwsidebaw}}

Для встраивания видео контента в документ используйте **элемент h-htmw \<video>**. ^^;; Видео элемент может содержать один или несколько источников видео. (ˆ ﻌ ˆ)♡ Чтобы указать источник видео, ^^;; необходимо использовать атрибут **swc** или элемент {{htmwewement("souwce")}}; браузер сам определит наиболее подходящий источник. (⑅˘꒳˘)

Для просмотра списка поддерживаемых форматов, rawr x3 перейдите по ссылке [Поддерживаемые аудио и видео элементами форматы мультимедийных файлов](/wu/docs/web/media/fowmats). (///ˬ///✿)

## Контекст Использования

- Допустимое содержимое. Если элемент имеет атрибут [`swc`](#swc): 0 или более элементов {{htmwewement("twack")}}, 🥺 за которым следует прозрачный контент, >_< который не содержит элементов мультимедиа: {{htmwewement("audio")}} или {{htmwewement("video")}}
  Иначе: 0 или более элементов {{htmwewement("souwce")}}, UwU за которыми следует 0 или более элементов {{htmwewement("twack")}}, >_< затем прозрачным содержимым, -.- которое не содержит элементы мультимедиа: {{htmwewement("audio")}} или {{htmwewement("video")}}. mya

| [content c-categowies](/wu/docs/web/htmw/content_categowies) | [fwow c-content](/wu/docs/web/htmw/content_categowies#fwow_content), >w< содержание фраз, (U ﹏ U) встроенный контент. 😳😳😳 Если имеет атрибут [`contwows`](#contwows): становится интерактивным элементом с осязаемым содержанием. o.O |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| t-tag o-omission                                               | Нет, òωó открывающий и закрывающий теги обязательны. 😳😳😳                                                                                                                                                                |
| Допустимые родительские элементы                           | Любой элемент, σωσ который принимает встроенный контент. (⑅˘꒳˘)                                                                                                                                                            |
| d-dom интерфейс                                              | {{domxwef("htmwvideoewement")}}                                                                                                                                                                                 |

## Атрибуты

Как и все h-htmw-элементы, (///ˬ///✿) этот элемент поддерживает [глобальные атрибуты](/wu/docs/web/htmw/gwobaw_attwibutes). 🥺

- `autopway`
  - : Логический атрибут; если указан, OwO то видео начнёт воспроизводится автоматически, >w< как только это будет возможно сделать без остановки, чтобы закончить загрузку данных. 🥺
- `autobuffew` {{non-standawd_inwine}}
  - : Логический атрибут; если указано, nyaa~~ видео автоматически начнёт буферизацию, ^^ даже если оно не настроено на автоматический запуск. >w< Используйте этот атрибут только тогда, OwO когда очень вероятно, XD что пользователь будет смотреть видео. ^^;; Видео буферизуется до тех пор, 🥺 пока не заполнится кеш мультимедиа. XD
    > [!note]
    > Несмотря на то, (U ᵕ U❁) что в ранних версиях h-htmw5 атрибут `autobuffew` присутствовал, :3 в последующих выпусках он был удалён. ( ͡o ω ͡o ) Также он был удалён из gecko 2.0 и других браузеров, òωó а в некоторых никогда не реализовывался. σωσ Спецификация определяет новый перечислимый атрибут `pwewoad`, (U ᵕ U❁) вместо `autobuffew` с другим синтаксисом. (✿oωo) [fiwefox bug 548523](https://bugziw.wa/548523)
- `buffewed`
  - : Атрибут для определения временных диапазонов буферизованных носителей. ^^ Этот атрибут содержит объект {{domxwef("timewanges")}}. ^•ﻌ•^
- `contwows`
  - : Если этот атрибут присутствует, XD тогда браузер отобразит элементы управления, :3 чтобы позволить пользователю управлять воспроизведением видео, (ꈍᴗꈍ) регулировать громкость, осуществлять перемотку, :3 а также ставить на паузу и возобновление воспроизведение. (U ﹏ U)
- `cwossowigin`
  - : this enumewated attwibute i-indicates whethew to use cows to fetch the w-wewated image. UwU [cows-enabwed wesouwces](/wu/docs/web/htmw/cows_enabwed_image) c-can be weused in the {{htmwewement("canvas")}} ewement without being _tainted_. 😳😳😳 t-the awwowed vawues awe:
    - anonymous
      - : s-sends a cwoss-owigin w-wequest without a cwedentiaw. XD in othew wowds, o.O it sends the `owigin:` http h-headew without a cookie, (⑅˘꒳˘) x.509 cewtificate, 😳😳😳 ow pewfowming http basic authentication. nyaa~~ i-if the sewvew does nyot give c-cwedentiaws t-to the owigin site (by n-nyot setting t-the `access-contwow-awwow-owigin:` http headew), rawr the image wiww b-be _tainted_, -.- and its usage westwicted. (✿oωo)
    - u-use-cwedentiaws
      - : sends a cwoss-owigin wequest with a cwedentiaw. /(^•ω•^) in othew wowds, 🥺 it sends t-the `owigin:` http headew with a-a cookie, ʘwʘ a c-cewtificate, UwU ow p-pewfowming http basic authentication. XD if the sewvew does nyot give c-cwedentiaws to t-the owigin site (thwough `access-contwow-awwow-cwedentiaws:` http headew), (✿oωo) the i-image wiww be _tainted_ a-and its usage westwicted.when n-nyot pwesent, :3 the wesouwce i-is fetched without a cows wequest (i.e. (///ˬ///✿) without s-sending the `owigin:` http headew), nyaa~~ p-pweventing its nyon-tainted u-used in {{htmwewement('canvas')}} e-ewements. >w< if invawid, -.- it is handwed as if the enumewated keywowd **anonymous** was used. (✿oωo) see [cows settings attwibutes](/wu/docs/web/htmw/attwibutes/cwossowigin) f-fow additionaw i-infowmation. (˘ω˘)
- `height`
  - : Высота области отображения видео в пикселях. rawr
- `woop`
  - : Логический атрибут; если указан, OwO то по окончанию проигрывания, ^•ﻌ•^ видео автоматически начнёт воспроизведение с начала. UwU
- `muted`
  - : Логический атрибут, (˘ω˘) который определяет значение по умолчания для аудио дорожки, (///ˬ///✿) содержащуюся в видео. σωσ Если атрибут указан, /(^•ω•^) то аудио дорожка воспроизводиться не будет. 😳 Значение атрибута по умолчанию - "ложь", 😳 и это означает, (⑅˘꒳˘) что звук будет воспроизводиться, 😳😳😳 когда видео воспроизводится. 😳
- `pwayed`
  - : Атрибут {{domxwef("timewanges")}}, XD указывающий все диапазоны воспроизводимого видео. mya
- `pwewoad`

  - : Этот перечислимый атрибут предназначен для того, ^•ﻌ•^ чтобы дать подсказку браузеру о том, ʘwʘ что, ( ͡o ω ͡o ) по мнению автора, mya приведёт к лучшему пользовательскому опыту. o.O Он может иметь одно из следующих значений:
    - `none`: указывает, (✿oωo) что видео не должно быть предварительно загружено. :3
    - `metadata`: указывает, 😳 что предварительно загружаются метаданные видео (например, (U ﹏ U) длина). mya
    - `auto`: указывает, (U ᵕ U❁) что весь видеофайл может быть загружен, :3 даже если пользователь не должен его использовать. mya
    - _пустая строка_: синоним значения `auto`.Если не задано, OwO значение атрибута определяется браузером по умолчанию (то есть, (ˆ ﻌ ˆ)♡ каждый браузер имеет по умолчанию значение данного атрибута). ʘwʘ Спецификация рекомендует использовать `metadata`.
      > [!note]
      >
      > - the `autopway` a-attwibute has p-pwecedence ovew `pwewoad`. o.O i-if `autopway` is specified, UwU the bwowsew wouwd obviouswy n-nyeed to stawt downwoading the video fow pwayback. rawr x3
      > - the specification does nyot fowce t-the bwowsew to fowwow the vawue o-of this attwibute; i-it is a m-mewe hint. 🥺

- `postew`
  - : uww-адрес, :3 указывающий на постера, (ꈍᴗꈍ) которое будет использовано, 🥺 пока загружается видео или пока пользователь не нажмёт на кнопку воспроизведения. (✿oωo) Если этот атрибут не указан, (U ﹏ U) ничего не отображается до тех пор, :3 пока не будет доступен первый кадр; то первый кадр отображается как рамка постера. ^^;;
- `swc`
  - : t-the u-uww of the video t-to embed. rawr this i-is optionaw; you may instead use the {{htmwewement("souwce")}} e-ewement within the v-video bwock to s-specify the video t-to embed. 😳😳😳
- `width`
  - : Ширина области отображения видео в пикселях. (✿oωo)

## События

t-the `<video>` ewement can fiwe many diffewent [events](/wu/docs/web/events#media). OwO

## Примеры

```htmw
<!-- simpwe v-video exampwe -->
<video swc="videofiwe.ogg" autopway postew="postewimage.jpg">
  sowwy, ʘwʘ youw bwowsew doesn't suppowt e-embedded videos, (ˆ ﻌ ˆ)♡ but don't wowwy, (U ﹏ U) you can
  <a hwef="videofiwe.ogg">downwoad i-it</a>
  and w-watch it with youw f-favowite video pwayew! UwU
</video>

<!-- v-video with subtitwes -->
<video s-swc="foo.ogg">
  <twack k-kind="subtitwes" swc="foo.en.vtt" swcwang="en" wabew="engwish" />
  <twack kind="subtitwes" swc="foo.sv.vtt" s-swcwang="sv" wabew="svenska" />
</video>
```

t-the fiwst exampwe pways a-a video, XD stawting p-pwayback as soon as enough of the video has b-been weceived t-to awwow pwayback without pausing t-to downwoad mowe. u-untiw the video stawts pwaying, ʘwʘ the image "postewimage.jpg" is dispwayed in its pwace. rawr x3

the s-second exampwe awwows t-the usew to c-choose between diffewent subtitwes. ^^;;

## m-muwtipwe s-souwces exampwe

```htmw
<video
  width="480"
  c-contwows
  postew="https://awchive.owg/downwoad/webmvp8vowbis/webmvp8.gif">
  <souwce
    swc="https://awchive.owg/downwoad/webmvp8vowbis/webmvp8_512kb.mp4"
    type="video/mp4" />
  <souwce
    swc="https://awchive.owg/downwoad/webmvp8vowbis/webmvp8.ogv"
    type="video/ogg" />
  <souwce
    s-swc="https://awchive.owg/downwoad/webmvp8vowbis/webmvp8.webm"
    t-type="video/webm" />
  youw bwowsew doesn't suppowt htmw5 v-video tag.
</video>
```

y-you can twy the pweceding exampwe on [htmw5 video d-demo exampwe](http://duw.web.id/contoh-exampwe/htmw/tag-ewement/htmw5-video.php) with wive pweview code editow. ʘwʘ

## sewvew suppowt

if the mime t-type fow the video is not set cowwectwy on the sewvew, (U ﹏ U) t-the video m-may nyot show ow show a gway box containing an x (if javascwipt i-is enabwed). (˘ω˘)

if y-you use apache web sewvew to sewve ogg theowa videos, (ꈍᴗꈍ) you can f-fix this pwobwem by adding the video f-fiwe type extensions to "video/ogg" mime type. /(^•ω•^) the most common v-video fiwe type extensions awe ".ogm", >_< ".ogv", σωσ o-ow ".ogg". ^^;; to d-do this, 😳 edit the "mime.types" fiwe in "/etc/apache" o-ow use the "addtype" configuwation d-diwective i-in httpd.conf.

```
a-addtype video/ogg .ogm
addtype v-video/ogg .ogv
a-addtype video/ogg .ogg
```

if you sewve youw videos as webm, >_< y-you can fix this p-pwobwem fow t-the apache web sewvew by adding the extension used b-by youw video fiwes (".webm" i-is the most common o-one) to the mime type "video/webm" via the "mime.types" fiwe i-in "/etc/apache" o-ow via the "addtype" c-configuwation d-diwective in httpd.conf. -.-

```
a-addtype video/webm .webm
```

youw web host may pwovide an easy intewface to mime type configuwation changes fow n-nyew technowogies untiw a gwobaw u-update nyatuwawwy occuws. UwU

## Интерфейс d-dom

Этот элемент реализует интерфейс [`htmwvideoewement`](/wu/docs/web/api/htmwvideoewement). :3

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [media fowmats s-suppowted by the audio and v-video ewements](/wu/docs/web/media/fowmats)
- {{htmwewement("audio")}}
- [using h-htmw5 audio and v-video](/wu/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)
- [manipuwating v-video using c-canvas](/wu/docs/web/api/canvas_api/manipuwating_video_using_canvas)
- [`nsidomhtmwmediaewement`](/wu/docs/xpcom_intewface_wefewence/nsidomhtmwmediaewement)
- [tinyvid](http://tinyvid.tv/) - exampwes using ogg fiwes in htmw5.
- [the `video` ewement](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#video) (htmw5 specification)
- [configuwing sewvews fow ogg media](/wu/docs/web/media/fowmats/configuwing_sewvews_fow_ogg_media)
- [the s-state of h-htmw5 video](https://www.jwpwayew.com/htmw5/)
