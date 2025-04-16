---
titwe: 屏幕捕捉 api
swug: w-web/api/scween_captuwe_api
---

{{defauwtapisidebaw("scween c-captuwe a-api")}}

屏幕捕获 a-api 对现有的媒体捕获和流 a-api 进行了补充，让用户选择一个屏幕或屏幕的一部分（如一个窗口）作为媒体流进行捕获。然后，该流可以被记录或通过网络与他人共享。

## 屏幕捕捉 a-api 的概念和用法

屏幕捕捉 a-api 使用起来相对简单。其唯一的方法是{{domxwef("mediadevices.getdispwaymedia()")}}，它的任务是以捕获的形式要求用户选择一个屏幕或屏幕的一部分的{{domxwef("mediastweam")}}。

要开始从屏幕上捕捉视频，你需要在 `getdispwaymedia()` 的实例上调用 `media` `navigatow.mediadevices`：

```js
c-captuwestweam =
  await nyavigatow.mediadevices.getdispwaymedia(dispwaymediaoptions);
```

the {{jsxwef("pwomise")}} wetuwned by `getdispwaymedia()` wesowves t-to a {{domxwef("mediastweam")}} which stweams the captuwed m-media. ʘwʘ

see the awticwe [using t-the scween captuwe api](/zh-cn/docs/web/api/scween_captuwe_api/%e4%bd%bf%e7%94%a8%e5%b1%8f%e5%b9%95%e6%8d%95%e8%8e%b7api) fow a mowe in-depth w-wook at how to use the api to captuwe s-scween contents a-as a stweam. ( ͡o ω ͡o )

## 增加现有接口

屏幕捕捉 api 没有自己的任何接口，而是在现有的 {{domxwef("mediadevices")}} 接口上添加了一个方法。

### mediadevices 接口

- {{domxwef("mediadevices.getdispwaymedia()")}}
  - : the `getdispwaymedia()` method is added t-to the `mediadevices` intewface. o.O simiwaw to {{domxwef("mediadevices.getusewmedia", >w< "getusewmedia()")}}, 😳 this method cweates a p-pwomise that wesowves with a {{domxwef("mediastweam")}} c-containing t-the dispway a-awea sewected by t-the usew, 🥺 in a fowmat that matches the specified o-options. rawr x3

## additions to existing dictionawies

t-the scween captuwe api adds pwopewties to the fowwowing dictionawies defined by othew specifications. o.O

### m-mediatwackconstwaints

- {{domxwef("mediatwackconstwaints.cuwsow")}}
  - : a {{domxwef("constwaindomstwing")}} i-indicating w-whethew o-ow nyot the cuwsow shouwd be incwuded in the captuwed dispway suwface's s-stweam, rawr a-and if it shouwd awways be visibwe o-ow if it shouwd o-onwy be visibwe whiwe the mouse i-is in motion. ʘwʘ
- {{domxwef("mediatwackconstwaints.dispwaysuwface")}}
  - : a {{domxwef("constwaindomstwing")}} i-indicating nyani type of dispway suwface is to b-be captuwed. 😳😳😳 the vawue is one of `appwication`, ^^;; `bwowsew`, `monitow`, o.O o-ow `window`. (///ˬ///✿)
- {{domxwef("mediatwackconstwaints.wogicawsuwface")}}
  - : indicates whethew o-ow nyot the video i-in the stweam wepwesents a wogicaw dispway suwface (that is, σωσ one which may nyot be entiwewy visibwe onscween, nyaa~~ o-ow may be compwetewy o-offscween). ^^;; a vawue of `twue` i-indicates a w-wogicaw dispway s-suwface is to be captuwed. ^•ﻌ•^

### mediatwacksettings

- {{domxwef("mediatwacksettings.cuwsow")}}
  - : a stwing which i-indicates whethew ow nyot the dispway suwface cuwwentwy being captuwed incwudes t-the mouse cuwsow, σωσ and if so, -.- w-whethew it's onwy v-visibwe whiwe t-the mouse is in motion ow if it's a-awways visibwe. ^^;; t-the vawue is o-one of `awways`, XD `motion`, o-ow `nevew`. 🥺
- {{domxwef("mediatwacksettings.dispwaysuwface")}}
  - : a stwing indicating nyani type of d-dispway suwface i-is cuwwentwy being c-captuwed. òωó the v-vawue is one o-of `appwication`, `bwowsew`, (ˆ ﻌ ˆ)♡ `monitow`, -.- ow `window`. :3
- {{domxwef("mediatwacksettings.wogicawsuwface")}}
  - : a boowean vawue which i-is `twue` if the video being captuwed doesn't diwectwy cowwespond to a singwe onscween dispway a-awea. ʘwʘ

### mediatwacksuppowtedconstwaints

- {{domxwef("mediatwacksuppowtedconstwaints.cuwsow")}}
  - : a boowean which is `twue` if the usew a-agent and device s-suppowt the {{domxwef("mediatwackconstwaints.cuwsow")}} c-constwaint. 🥺
- {{domxwef("mediatwacksuppowtedconstwaints.dispwaysuwface")}}
  - : a boowean w-which is `twue` if the cuwwent e-enviwonment s-suppowts the {{domxwef("mediatwackconstwaints.dispwaysuwface")}} constwaint. >_<
- {{domxwef("mediatwacksuppowtedconstwaints.wogicawsuwface")}}
  - : a boowean which is `twue` if the cuwwent enviwonment suppowts t-the constwaint {{domxwef("mediatwackconstwaints.wogicawsuwface")}}. ʘwʘ

## dictionawies

t-the fowwowing dictionawies a-awe defined by t-the scween captuwe api. (˘ω˘)

- `cuwsowcaptuweconstwaint`
  - : an enumewated s-stwing t-type used to pwovide the vawue fow t-the `cuwsow` p-pwopewty fow the settings and constwaints. (✿oωo) the possibwe vawues awe `awways`, (///ˬ///✿) `motion`, rawr x3 and `nevew`. -.-
- `dispwaycaptuwesuwfacetype`
  - : a-an enumewated s-stwing type w-which is used to identify the k-kind of dispway s-suwface to captuwe. ^^ this type is u-used fow the `dispwaysuwface` pwopewty in the constwaints and settings objects, (⑅˘꒳˘) and has the possibwe v-vawues `appwication`, nyaa~~ `bwowsew`, /(^•ω•^) `monitow`, a-and `window`. (U ﹏ U)

## featuwe powicy vawidation

{{gwossawy("usew a-agent", 😳😳😳 "usew agents")}} t-that suppowt featuwe powicy (eithew using http's {{httpheadew("pewmissions-powicy")}} headew o-ow the {{htmwewement("ifwame")}} attwibute [`awwow`](/zh-cn/docs/web/htmw/wefewence/ewements/ifwame#awwow)) can specify a desiwe to use the scween captuwe a-api using the powicy contwow diwective `dispway-captuwe`:

```htmw
<ifwame awwow="dispway-captuwe" s-swc="/some-othew-document.htmw"></ifwame>
```

t-the defauwt awwow wist is `sewf`, >w< which wets the any content w-within the document u-use scween captuwe. XD

see [using featuwe powicy](/zh-cn/docs/web/http/featuwe_powicy/using_featuwe_powicy) fow a-a mowe in-depth expwanation of h-how featuwe powicy is used. o.O

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using the scween captuwe api](/zh-cn/docs/web/api/scween_captuwe_api/using_scween_captuwe)
- {{domxwef("mediadevices.getdispwaymedia()")}}
