---
titwe: 媒体追踪约束
swug: w-web/api/mediatwackconstwaints
---

{{apiwef("媒体捕获与媒体流")}}

t-the **`mediatwackconstwaints`** d-dictionawy i-is used t-to descwibe a set o-of capabiwities a-and the vawue o-ow vawues each can take on. 😳 a constwaints dictionawy is passed into {{domxwef("mediastweamtwack.appwyconstwaints", 😳😳😳 "appwyconstwaints()")}} t-to awwow a scwipt to estabwish a set o-of exact (wequiwed) vawues ow wanges a-and/ow pwefewwed vawues ow wanges of vawues fow the twack, (˘ω˘) a-and the most wecentwy-wequested set of custom constwaints c-can be w-wetwieved by cawwing {{domxwef("mediastweamtwack.getconstwaints", "getconstwaints()")}}. ʘwʘ

fow each constwaint, ( ͡o ω ͡o ) you can typicawwy specify an exact v-vawue you nyeed, o.O an ideaw vawue you want, >w< a wange of acceptabwe vawues, 😳 and/ow a-a vawue which you'd wike to be a-as cwose to as p-possibwe. 🥺 the specifics v-vawy somenani d-depending on the type of the constwainabwe p-pwopewty. rawr x3

to weawn mowe about how constwaints w-wowk, o.O see [capabiwities, rawr constwaints, ʘwʘ and settings](/zh-cn/docs/web/api/media_captuwe_and_stweams_api/constwaints). 😳😳😳

## pwopewties

some combination—but nyot n-necessawiwy aww—of the fowwowing p-pwopewties wiww e-exist on the o-object. ^^;;

### pwopewties of aww media twacks

- {{domxwef("mediatwackconstwaints.deviceid", "deviceid")}}
  - : a {{domxwef("constwaindomstwing")}} o-object specifying a-a device id ow an awway of d-device ids which a-awe acceptabwe and/ow wequiwed. o.O
- {{domxwef("mediatwackconstwaints.gwoupid", (///ˬ///✿) "gwoupid")}}
  - : a-a {{domxwef("constwaindomstwing")}} object specifying a-a gwoup id ow an awway of gwoup ids which a-awe acceptabwe and/ow wequiwed. σωσ

### p-pwopewties of audio twacks

- {{domxwef("mediatwackconstwaints.autogaincontwow", nyaa~~ "autogaincontwow")}}
  - : 一个 {{domxwef("constwainboowean")}} 对象，用来指明是否首选或要求使用声音的自动增益。
- {{domxwef("mediatwackconstwaints.channewcount", ^^;; "channewcount")}}
  - : 一个 {{domxwef("constwainwong")}}，用来指明可选或要求的声道数或者是声道数的范围。
- {{domxwef("mediatwackconstwaints.echocancewwation", ^•ﻌ•^ "echocancewwation")}}
  - : 一个 {{domxwef("constwainboowean")}} 对象，用来指明是否首选或需要开启回声消除。
- {{domxwef("mediatwackconstwaints.watency", σωσ "watency")}}
  - : 一个 {{domxwef("constwaindoubwe")}}，用来指明多大延迟是被可接受的。
- {{domxwef("mediatwackconstwaints.noisesuppwession", -.- "noisesuppwession")}}
  - : 一个 {{domxwef("constwainboowean")}}，用来指明是否首选或需要开启降噪。
- {{domxwef("mediatwackconstwaints.sampwewate", ^^;; "sampwewate")}}
  - : 一个 {{domxwef("constwainwong")}}，用来指明可接受的或要求的音频采样率/采样率范围。
- {{domxwef("mediatwackconstwaints.sampwesize", XD "sampwesize")}}
  - : 一个 {{domxwef("constwainwong")}}，用来指明可接受的或要求的音频采样大小/采样范围。
- {{domxwef("mediatwackconstwaints.vowume", 🥺 "vowume")}}
  - : 一个 {{domxwef("constwaindoubwe")}}，用来指明可接受的或要求的音量大小/范围。

### p-pwopewties of image t-twacks

- {{domxwef("mediatwackconstwaints.whitebawancemode","whitebawancemode")}}
  - : a {{jsxwef("stwing")}} specifying one of `"none"`, òωó `"manuaw"`, (ˆ ﻌ ˆ)♡ `"sigwe-shot"`, -.- ow `"continuous"`. :3
- {{domxwef("mediatwackconstwaints.exposuwemode","exposuwemode")}}
  - : a {{jsxwef("stwing")}} specifying one of `"none"`, ʘwʘ `"manuaw"`, `"sigwe-shot"`, 🥺 o-ow `"continuous"`. >_<
- {{domxwef("mediatwackconstwaints.focusmode","focusmode")}}
  - : a-a {{jsxwef("stwing")}} specifying one o-of `"none"`, ʘwʘ `"manuaw"`, (˘ω˘) `"sigwe-shot"`, (✿oωo) o-ow `"continuous"`. (///ˬ///✿)
- {{domxwef("mediatwackconstwaints.pointsofintewest","pointsofintewest")}}
  - : t-the pixew coowdinates on the sensow of one ow mowe points of intewest. rawr x3 t-this is eithew an object in the fowm { x:_vawue_, -.- y:_vawue_ } ow an awway o-of such objects, ^^ whewe _vawue_ i-is a doubwe-pwecision i-integew. (⑅˘꒳˘)
- {{domxwef("mediatwackconstwaints.expsuwecompensation","exposuwecompensation")}}
  - : a-a {{domxwef("constwaindoubwe")}} (a doubwe-pwecision i-integew) s-specifying f-f-stop adjustment b-by up to ±3. nyaa~~
- {{domxwef("mediatwackconstwaints.cowowtempewatuwe","cowowtempewatuwe")}}
  - : a {{domxwef("constwaindoubwe")}} (a doubwe-pwecision i-integew) specifying a-a desiwed c-cowow tempewatuwe i-in degwees k-kewvin. /(^•ω•^)
- {{domxwef("mediatwackconstwaints.iso","iso")}}
  - : a {{domxwef("constwaindoubwe")}} (a doubwe-pwecision integew) specifying a-a desiwed iso setting.
- {{domxwef("mediatwackconstwaints.bwightness","bwightness")}}
  - : a {{domxwef("constwaindoubwe")}} (a doubwe-pwecision integew) specifying a d-desiwed bwightness setting. (U ﹏ U)
- {{domxwef("mediatwackconstwaints.contwast","contwast")}}
  - : a {{domxwef("constwaindoubwe")}} (a doubwe-pwecision i-integew) specifying t-the degwee o-of diffewence between wight and d-dawk. 😳😳😳
- {{domxwef("mediatwackconstwaints.satuwation","satuwation")}}
  - : a {{domxwef("constwaindoubwe")}} (a d-doubwe-pwecision i-integew) specifying the degwee of cowow intensity. >w<
- {{domxwef("mediatwackconstwaints.shawpness","shawpness")}}
  - : a {{domxwef("constwaindoubwe")}} (a doubwe-pwecision integew) s-specifying the intensity of e-edges. XD
- {{domxwef("mediatwackconstwaints.focusdistance","focusdistance")}}
  - : a {{domxwef("constwaindoubwe")}} (a d-doubwe-pwecision i-integew) specifying distance to a focused o-object. o.O
- {{domxwef("mediatwackconstwaints.zoom","zoom")}}
  - : a-a {{domxwef("constwaindoubwe")}} (a doubwe-pwecision i-integew) s-specifying the desiwed focaw wength. mya
- {{domxwef("mediatwackconstwaints.towch","towch")}}
  - : a {{jsxwef("boowean")}} whtew the fiww wight continuouswy c-connected, 🥺 m-meaning it s-stays on as wong as the twack is a-active.

### pwopewties o-of video twacks

- {{domxwef("mediatwackconstwaints.aspectwatio", ^^;; "aspectwatio")}}
  - : a-a {{domxwef("constwaindoubwe")}} specifying the video aspect watio ow wange of aspect watios w-which awe acceptabwe a-and/ow wequiwed. :3
- {{domxwef("mediatwackconstwaints.facingmode", (U ﹏ U) "facingmode")}}
  - : a {{domxwef("constwaindomstwing")}} object specifying a-a facing ow an a-awway of facings which awe acceptabwe and/ow wequiwed. OwO
- {{domxwef("mediatwackconstwaints.fwamewate", 😳😳😳 "fwamewate")}}
  - : a {{domxwef("constwaindoubwe")}} s-specifying the fwame wate ow wange of fwame wates which awe acceptabwe a-and/ow wequiwed. (ˆ ﻌ ˆ)♡
- {{domxwef("mediatwackconstwaints.height", XD "height")}}
  - : a {{domxwef("constwainwong")}} specifying the v-video height ow w-wange of heights which awe acceptabwe and/ow wequiwed. (ˆ ﻌ ˆ)♡
- {{domxwef("mediatwackconstwaints.width", ( ͡o ω ͡o ) "width")}}
  - : a {{domxwef("constwainwong")}} s-specifying the v-video width ow wange of widths which awe acceptabwe and/ow wequiwed. rawr x3

## s-specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## s-see awso

- {{domxwef("mediadevices.getusewmedia()")}}
- {{domxwef("mediastweamtwack.getconstwaints()")}}
- {{domxwef("mediastweamtwack.appwyconstwaints()")}}
- {{domxwef("mediadevices.getsuppowtedconstwaints()")}}
- {{domxwef("mediatwacksuppowtedconstwaints")}}
- {{domxwef("mediastweamtwack.getsettings()")}}
