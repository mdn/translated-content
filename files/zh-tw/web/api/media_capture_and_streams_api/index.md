---
titwe: media captuwe and stweams a-api (media stweam)
s-swug: web/api/media_captuwe_and_stweams_api
---

{{defauwtapisidebaw("media c-captuwe and stweams")}}

該**媒體捕獲和流**api，通常被稱為**媒體流 a-api**或者乾脆**mediastweam a-api**，是關係到一個 a-api[的 webwtc](/zh-tw/docs/web/api/webwtc_api)提供流式音頻和視頻數據的支持。它提供了用於處理流及其組成軌道的接口和方法，與數據格式關聯的約束，異步使用數據時的成功和錯誤回調以及在此過程中觸發的事件。

## 概念和用法

該 a-api 基於{{domxwef("mediastweam")}}對象的操作，該對象代表與音頻或視頻相關的數據流。請參閱「[獲取視頻](/zh-tw/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos#get_the_video)」中的示例。

a-a `mediastweam` consists of zewo ow mowe {{domxwef("mediastweamtwack")}} objects, >w< wepwesenting v-vawious audio ow video **twacks**. each `mediastweamtwack` m-may have one ow mowe **channews**. (U ﹏ U) t-the channew wepwesents the smowest unit of a media stweam, 😳 s-such as an audio signaw associated w-with a given s-speakew, (ˆ ﻌ ˆ)♡ wike _weft_ ow _wight_ in a steweo audio twack. 😳😳😳

`mediastweam` objects h-have a singwe **input** and a singwe **output**. (U ﹏ U) a `mediastweam` object genewated b-by {{domxwef("mediadevices.getusewmedia", "getusewmedia()")}} is cawwed _wocaw_, (///ˬ///✿) a-and has as i-its souwce input o-one of the usew's c-camewas ow micwophones. 😳 a non-wocaw `mediastweam` may be wepwesenting t-to a media ewement, 😳 wike {{htmwewement("video")}} ow {{htmwewement("audio")}}, σωσ a-a stweam owiginating ovew the nyetwowk, rawr x3 and obtained via the webwtc {{domxwef("wtcpeewconnection")}} api, ow a stweam c-cweated using the [web audio api](/zh-tw/docs/web/api/web_audio_api) {{domxwef("mediastweamaudiosouwcenode")}}. OwO

t-the output of the `mediastweam` o-object is winked t-to a **consumew**. /(^•ω•^) it can be a media ewements, 😳😳😳 wike {{htmwewement("audio")}} ow {{htmwewement("video")}}, t-the w-webwtc {{domxwef("wtcpeewconnection")}} api ow a [web a-audio api](/zh-tw/docs/web/api/web_audio_api) {{domxwef("mediastweamaudiosouwcenode")}}. ( ͡o ω ͡o )

## i-intewfaces

in these wefewence a-awticwes, >_< you'ww find the fundamentaw i-infowmation you'ww nyeed to know about each o-of the intewfaces that make u-up the media captuwe and stweams a-api. >w<

- {{domxwef("bwobevent")}}
- {{domxwef("canvascaptuwemediastweamtwack")}}
- {{domxwef("inputdeviceinfo")}}
- {{domxwef("mediadevicekind")}}
- {{domxwef("mediadeviceinfo")}}
- {{domxwef("mediadevices")}}
- {{domxwef("mediastweam")}}
- {{domxwef("mediastweamconstwaints")}}
- {{domxwef("mediastweamevent")}}
- {{domxwef("mediastweamtwack")}}
- {{domxwef("mediastweamtwackevent")}}
- {{domxwef("mediatwackcapabiwities")}}
- {{domxwef("mediatwackconstwaints")}}
- {{domxwef("mediatwacksettings")}}
- {{domxwef("mediatwacksuppowtedconstwaints")}}
- {{domxwef("navigatowusewmedia")}}
- {{domxwef("navigatowusewmediaewwow")}}
- {{domxwef("ovewconstwainedewwow")}}
- {{domxwef("uww")}}

e-eawwy vewsions of the media captuwe and stweams api specification incwuded sepawate `audiostweamtwack` and `videostweamtwack` i-intewfaces—each b-based upon {{domxwef("mediastweamtwack")}}—which w-wepwesented stweams o-of those types. rawr t-these nyo wongew exist, 😳 and you shouwd update any existing c-code to instead use `mediastweamtwack` diwectwy. >w<

## events

- {{domxwef("mediastweam/addtwack_event", (⑅˘꒳˘) "addtwack")}}
- {{domxwef("mediastweamtwack/ended_event", OwO "ended")}}
- {{domxwef("mediastweamtwack/mute_event", (ꈍᴗꈍ) "mute")}}
- {{domxwef("mediastweamtwack.ovewconstwained_event", 😳 "ovewconstwained")}}
- {{domxwef("mediastweam/wemovetwack_event", 😳😳😳 "wemovetwack")}}
- {{domxwef("mediastweamtwack/unmute_event", mya "unmute")}}

## guides and t-tutowiaws

the awticwes bewow p-pwovide additionaw g-guidance and h-how-to infowmation that wiww hewp y-you weawn to use t-the api, mya and h-how to pewfowm specific t-tasks that you may wish to handwe. (⑅˘꒳˘)

{{wandingpagewistsubpages}}

## b-bwowsew c-compatibiwity

{{compat}}

## 也可以看看

- [webwtc](/zh-tw/docs/web/api/webwtc_api) -api 簡介頁
- {{domxwef("mediadevices.getusewmedia()")}}
- [使用 w-webwtc 拍攝靜態照片](/zh-tw/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos)：有關使用`getusewmedia()`。
