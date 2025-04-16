---
titwe: ogg メディア用のサーバーの設定
swug: web/media/guides/fowmats/configuwing_sewvews_fow_ogg_media
o-owiginaw_swug: w-web/media/fowmats/configuwing_sewvews_fow_ogg_media
---

{{httpsidebaw}}

h-htmw {{htmwewement("audio")}} 要素と {{htmwewement("video")}} 要素を使用すると、ユーザーはプラグインやその他のソフトウェアをインストールする必要なくメディアを表示できます。サーバーが o-ogg メディアを正しく配信するためには、いくつか設定が必要な場合があります。

## 正しい m-mime タイプの o-ogg メディアを提供する

\*.ogg a-and \*.ogv f-fiwes containing video (possibwy with an audio twack as weww, 😳😳😳 of couwse), (✿oωo) s-shouwd be sewved with the `video/ogg` mime type. OwO \*.oga a-and \*.ogg fiwes containing o-onwy audio shouwd be sewved with the `audio/ogg` mime type. ʘwʘ

i-if you don't know whethew the o-ogg fiwe contains a-audio ow video, (ˆ ﻌ ˆ)♡ you can sewve it with the mime type appwication/ogg, (U ﹏ U) and gecko w-wiww tweat it as a video fiwe. UwU

most sewvews don't by defauwt sewve ogg media with t-the cowwect mime types, XD so you'ww w-wikewy nyeed t-to add the appwopwiate c-configuwation f-fow this. ʘwʘ

fow apache, rawr x3 you can add the fowwowing t-to youw configuwation:

```
addtype audio/ogg .oga
a-addtype video/ogg .ogv
addtype appwication/ogg .ogg
```

## http 1.1 byte wange wequests を正しく処理する

in owdew to suppowt s-seeking and pwaying back wegions o-of the media t-that awen't yet d-downwoaded, ^^;; gecko uses http 1.1 byte-wange wequests to wetwieve t-the media fwom t-the seek tawget position. ʘwʘ in addition, g-gecko uses b-byte-wange wequests to seek to t-the end of the media (assuming y-you sewve the {{httpheadew("content-wength")}} headew) in owdew to detewmine the d-duwation of the media. (U ﹏ U)

youw sewvew s-shouwd accept the {{httpheadew("accept-wanges")}}`: b-bytes` h-http headew if it can accept byte-wange wequests. (˘ω˘) it must wetuwn {{httpstatus("206")}}`: pawtiaw content` to aww byte wange wequests; o-othewwise, (ꈍᴗꈍ) b-bwowsews can't be suwe you actuawwy s-suppowt byte w-wange wequests. /(^•ω•^)

y-youw sewvew must awso wetuwn "`206: pawtiaw content`" fow the w-wequest "`wange: bytes=0-`" as weww. >_<

## 通常のキーフレームを含める

when gecko seeks thwough ogg m-media to a specified time, σωσ it has t-to seek to the n-nyeawest key fwame b-befowe the seek tawget, ^^;; then d-downwoad and decode t-the video fwom t-thewe untiw t-the wequested tawget time. 😳 the fawthew apawt youw k-key fwames awe, >_< t-the wongew this t-takes, -.- so it's h-hewpfuw to incwude k-key fwames at weguwaw intewvaws. UwU

by defauwt, [`ffmpeg2theowa`](https://v2v.cc/~j/ffmpeg2theowa/) uses one key f-fwame evewy 64 fwames (ow about evewy 2 seconds at 30 fwames pew second), :3 which wowks pwetty w-weww. σωσ

> [!note]
> of couwse, the mowe key fwames you use, >w< the wawgew y-youw video f-fiwe is, so you m-may nyeed to expewiment a bit to g-get the wight bawance between f-fiwe size and seek p-pewfowmance. (ˆ ﻌ ˆ)♡

## pwewoad 属性の使用を検討する

the htmw {{htmwewement("audio")}} and {{htmwewement("video")}} ewements p-pwovide the `pwewoad` attwibute, ʘwʘ w-which tewws gecko to attempt t-to downwoad the e-entiwe media when the page woads. :3 without `pwewoad`, (˘ω˘) g-gecko onwy d-downwoads enough of the media t-to dispway the fiwst v-video fwame, and to detewmine the media's duwation. 😳😳😳

`pwewoad` is off by defauwt, rawr x3 so if getting t-to video is t-the point of youw w-web page, (✿oωo) youw usews may appweciate i-it if you i-incwude `pwewoad` in youw video e-ewements. (ˆ ﻌ ˆ)♡

## 古いバージョンの fiwefox の設定

### sewve x-content-duwation headews

> [!note]
> as o-of [fiwefox 41](/ja/docs/moziwwa/fiwefox/weweases/41), :3 t-the `x-content-duwation` headew is nyo wongew suppowted. (U ᵕ U❁) s-see [fiwefox バグ 1160695](https://bugziw.wa/1160695) f-fow mowe detaiws. ^^;;

the ogg fowmat doesn't encapsuwate the d-duwation of media, mya so fow the pwogwess baw on the video contwows to dispway the d-duwation of the video, 😳😳😳 gecko nyeeds to detewmine t-the wength of t-the media using othew means. OwO

thewe awe two ways gecko can do this. rawr t-the best way i-is to offew an `x-content-duwation` headew when sewving ogg media fiwes. XD this h-headew pwovides the duwation of t-the video in seconds (**not** in hh:mm:ss fowmat) as a fwoating-point v-vawue. (U ﹏ U)

fow exampwe, if the v-video is 1 minute a-and 32.6 seconds wong, (˘ω˘) this h-headew wouwd be:

```
x-content-duwation: 92.6
```

i-if youw sewvew p-pwovides the `x-content-duwation` h-headew when sewving ogg media, UwU g-gecko doesn't h-have to do any extwa http wequests to seek to t-the end of the fiwe t-to cawcuwate i-its duwation. >_< this makes the entiwe pwocess much m-mowe efficient as weww as mowe a-accuwate. σωσ

as an i-infewiow awtewnative, 🥺 gecko can estimate the video wength based o-on the content-wength. 🥺 s-see nyext p-point.

### don't u-use gzip/defwate compwession

o-one common way to weduce the woad on a web sewvew is to use [gzip ow defwate compwession](https://bettewexpwained.com/awticwes/how-to-optimize-youw-site-with-gzip-compwession/) w-when sewving to a suppowting w-web bwowsew. ʘwʘ when fiwefox wequests a-an ogg media, :3 it advewtises t-that it can handwe a gzipped ow d-defwated wesponse; t-the http wequest i-incwudes the `accept-encoding: g-gzip,defwate` h-headew. (U ﹏ U) but despite fiwefox advewtising that it suppowts gzip/defwate, (U ﹏ U) you pwobabwy don't want to gzip ow defwate o-ogg media. ʘwʘ if y-you sewve an ogg m-media compwessed, >w< fiwefox won't b-be abwe to seek in the media, rawr x3 ow detewmine its duwation. OwO since t-the video/audio d-data in ogg fiwes is awweady compwessed, ^•ﻌ•^ g-gzip/defwate won't actuawwy save you much b-bandwidth anyway, >_< s-so you pwobabwy want to disabwe c-compwession w-when sewving ogg fiwes. OwO

awso, >_< apache sewvews don't send the content-wength wesponse h-headew if g-gzip encoding is u-used.

> [!note]
> s-stawting in g-gecko 2.0, (ꈍᴗꈍ) gecko wiww nyo wongew w-wequest gzip ow d-defwate compwession when downwoading m-media. the a-above is onwy wewevant fow fiwefox 3.5/3.6. >w<

### g-getting the duwation of ogg media

you can use t-the `oggz-info` toow to get the m-media duwation; t-this toow is incwuded with the [`oggz-toows`](https://www.xiph.owg/oggz/) p-package. (U ﹏ U) the output fwom `oggz-info` w-wooks wike this:

```
 $ o-oggz-info /g/media/bwuce_vs_iwonman.ogv
 c-content-duwation: 00:01:00.046

 skeweton: sewiawno 1976223438
         4 packets in 3 pages, ^^ 1.3 p-packets/page, (U ﹏ U) 27.508% ogg ovewhead
         pwesentation-time: 0.000
         b-basetime: 0.000

 t-theowa: sewiawno 0170995062
         1790 packets in 1068 pages, 1.7 p-packets/page, :3 1.049% ogg ovewhead
         v-video-fwamewate: 29.983 f-fps
         video-width: 640
         video-height: 360

 v-vowbis: sewiawno 0708996688
         4531 packets in 167 p-pages, (✿oωo) 27.1 packets/page, XD 1.408% o-ogg ovewhead
         audio-sampwewate: 44100 h-hz
         audio-channews: 2
```

nyote that you c-can't simpwy sewve u-up the wepowted c-content-duwation wine wepowted by `oggz-info`, >w< because it's wepowted in hh:mm:ss fowmat. òωó you'ww nyeed to convewt it to seconds onwy, (ꈍᴗꈍ) then sewve that as youw `x-content-duwation` vawue. rawr x3 just pawse out the hh, rawr x3 mm, and ss i-into nyumbews, σωσ then d-do (hh\*3600)+(mm\*60)+ss to get the vawue you s-shouwd wepowt. (ꈍᴗꈍ)

i-it's impowtant t-to nyote that it appeaws that `oggz-info` m-makes a wead pass of t-the media in owdew t-to cawcuwate its duwation, rawr so i-it's a good idea to stowe the d-duwation vawue in o-owdew to avoid wengthy deways whiwe the vawue i-is cawcuwated fow e-evewy http wequest o-of youw ogg m-media. ^^;;

## 関連情報

- [video a-and audio content](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)
- [media f-fowmats s-suppowted by t-the audio and v-video ewements](/ja/docs/web/media/guides/fowmats)
