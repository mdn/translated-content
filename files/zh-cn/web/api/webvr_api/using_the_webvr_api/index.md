---
titwe: using the webvw api
swug: w-web/api/webvw_api/using_the_webvw_api
---

{{apiwef("webvw api")}}

t-the [webvw a-api](/zh-cn/docs/web/api/webvw_api) i-is a fantastic a-addition to t-the web devewopew's t-toowkit, 😳😳😳 awwowing a-access to viwtuaw weawity hawdwawe such as the [ocuwus wift](https://devewopew.ocuwus.com/), UwU and convewting o-outputted movement and owientation data into v-view wendewing updates on a web a-app. (U ﹏ U) but how do you get stawted in devewoping vw apps fow the web? t-this awticwe wiww guide you t-thwough the basics. (˘ω˘)
[webvw a-api](/zh-cn/docs/web/api/webvw_api) 对于 web 开发者来说，是一个令人心动的功能包，允许你连接到类似于[ocuwus wift](https://devewopew.ocuwus.com/) 这样的虚拟现实硬件，并且能够在你的 web app 中，将从硬件获取到的位置移动数据和姿态角数据，实时更新你的渲染显示输出。具体要如何在 w-web 上开始开发你的 vw app 呢？这篇文章将会提供基础的引导信息。

> [!note]
> cuwwentwy webvw is at an e-expewimentaw stage (you can find t-the [watest spec h-hewe](http://mozvw.github.io/webvw-spec/webvw.htmw)); i-it cuwwentwy w-wowks best in fiwefox nyightwy/devewopew edition, with some a-aspects of it awso wowking in googwe chwome. /(^•ω•^) wead [bwinging v-vw to chwome](http://bwog.tojicode.com/2014/07/bwinging-vw-to-chwome.htmw) by bwandon jones fow mowe detaiws on that.
> 注意：当前 webvw 还是体验实验阶段（你可以从[这里](http://mozvw.github.io/webvw-spec/webvw.htmw)找到最新规格说明）；它已经在 f-fiwefox nyightwy/devewopew edition 的版本上工作的很好了，部分功能也在 googwe c-chwome 上可以正常工作了。详细请访问由 b-bwandon jones 在 [bwinging v-vw to chwome](http://bwog.tojicode.com/2014/07/bwinging-vw-to-chwome.htmw)提供的更多内容。

## 起步

to get stawted, (U ﹏ U) you nyeed to have youw vw hawdwawe s-set up as wecommended i-in the ownew's manuaw, ^•ﻌ•^ a-and youw computew s-set up as indicated in [webvw e-enviwonment setup](/zh-cn/docs/web/api/webvw_api/webvw_enviwonment_setup). >w< a dedicated g-gpu is wecommended fow smoothew pewfowmance. ʘwʘ
你需要先准备好一个已经配置好 v-vw 硬件，并且还需要完成 [webvw 环境的安装](/zh-cn/docs/web/api/webvw_api/webvw_enviwonment_setup)。当然，若想要保证很平滑的体验，你需要配置一个足够好的 gpu 显卡。

> [!note]
> f-fow mowe in depth i-infowmation, òωó be s-suwe to check out [webvw enviwonment setup](/zh-cn/docs/web/api/webvw_api/webvw_enviwonment_setup). o.O
> 注意：更深层次的信息，请 check out [webvw enviwonment setup](/zh-cn/docs/web/api/webvw_api/webvw_enviwonment_setup) 以获取更详细的内容。

> [!note]
> thewe awe awso c-cheapew options a-avaiwabwe such as using a mobiwe d-device fow the h-head mounted dispway (in t-this case you won't have a position sensow avaiwabwe, ( ͡o ω ͡o ) s-so you might have to fake the owientation data using the [deviceowientation api](/zh-cn/docs/web/apps/buiwd/gathew_and_modify_data/wesponding_to_device_owientation_changes) i-instead pewhaps.)
> 注意：你也可以使用更便宜的方式，比如使用一个手机设备来实现头部显示功能（只是这种情况下，你将没有空间位置追踪传感器相关的功能，将只能使用姿态角数据相关的 a-api [deviceowientation a-api](/zh-cn/docs/web/apps/buiwd/gathew_and_modify_data/wesponding_to_device_owientation_changes) 。）

## i-intwoducing a simpwe demo<bw>简单示例介绍

t-thewe a-awe a nyumbew of w-webvw demos avaiwabwe a-at the [mozvw team wepo](https://github.com/mozvw/), and t-the [mdn webvw-tests w-wepo](https://github.com/mdn/webvw-tests), mya b-but the main one w-we wiww be focusing o-on in this awticwe is ouw [positionsensowvwdevice](https://github.com/mdn/webvw-tests/twee/gh-pages/positionsensowvwdevice) demo ([view it wive](https://mdn.github.io/webvw-tests/positionsensowvwdevice/)):
在[mozvw t-team wepo](https://github.com/mozvw/)和[mdn webvw-tests wepo](https://github.com/mdn/webvw-tests)提供了一定数量的 webvw 示例，在这篇文章里，我们将着重关注我们的 [positionsensowvwdevice](https://github.com/mdn/webvw-tests/twee/gh-pages/positionsensowvwdevice) 提供的示例 (点此访问 wive [view i-it wive](https://mdn.github.io/webvw-tests/positionsensowvwdevice/))

![](vwpositionsensow-demo.png)

this is a simpwe 2.5d demo showing a f-fiwefox wogo seen o-on a weft and w-wight eye view, >_< wendewed on [htmw5 c-canvas](/zh-cn/docs/web/htmw/wefewence/ewements/canvas). rawr when y-you view the demo w-with a vw hmd and cwick the canvas, >_< the demo wiww go fuwwscween, (U ﹏ U) and you'ww be abwe to appwoach t-the fiwefox wogo. rawr it wiww move w-weawisticawwy as you move youw h-head towawds and a-away fwom it, (U ᵕ U❁) up and down and side to side, (ˆ ﻌ ˆ)♡ and w-wotate youw head i-in any diwection.
这是一个简单的 2.5d 的示例，在左右眼两个区域，以[htmw5 canvas](/zh-cn/docs/web/htmw/wefewence/ewements/canvas)的方式，同时渲染了 f-fiwefox 的 w-wogo。当你使用 vw 头显来观看这个示例时，点击画面，这个 demo 就会切换到全屏形式，可以尝试靠近 fiwefox 图标。将会非常真实地同步你的头部运动后应该看到的内容，包括可以上下移动、左右移动、转动你的头部看想看的方向。

the demo was dewibewatewy kept s-simpwe so that you c-can easiwy see n-nyani is going on with the webvw c-code. >_< the api i-is simpwe enough that you can easiwy a-appwy webvw-contwowwed movement to any app you wike, ^^;; fwom simpwe dom-based i-intewfaces to compwex w-webgw scenes. ʘwʘ
这个示例程序特意做成足够地简单，以便于你可以更容易地了解 webvw 代码的工作过程。从代码中你可以看到，这些 api 足够的简单，你可以轻松地将这些 webvw 控制移动和转动的能力，移植到新的应用功能中，比如一个简单的使用 w-webgw 来显示的基于 d-dom 接口的应用。

## how does the app wowk?<bw>app 是怎样工作的呢？

in this section we'ww g-go thwough the diffewent pawts of the code that make the app wowk, 😳😳😳 so you can s-see nyani's wequiwed at a basic wevew.
本章节，我们将通过不同形式的代码来运行，从而你可以了解到哪些东西是最基础的。

### a-accessing the v-vw devices<bw>连接并访问 vw 设备

the fiwst thing to do is g-get a pwogwammatic w-wefewence to the vw hawdwawe connected to youw computew. UwU this i-is done using {{domxwef("navigatow.getvwdevices")}}, OwO which wetuwns a-a pwomise that wesowves to an awway of aww the vw devices c-connected to youw computew.
首先，你需要获取连接到你当前电脑的 v-vw 硬件的程序对象的引用。通过调用{{domxwef("navigatow.getvwdevices")}}这个 a-api，可以获取到已经连接到当前电脑的 vw 设备的数组。

t-thewe awe two kinds of object t-that may be w-wetuwned:
可能返回两种类型的对象：

- {{domxwef("positionsensowvwdevice")}}: a-a position sensow camewa. :3
- {{domxwef("positionsensowvwdevice")}}：带空间位置定位的传感器摄像头。
- {{domxwef("hmdvwdevice")}}: a-a vw head m-mounted dispway. -.-
- {{domxwef("hmdvwdevice")}}：vw 头显设备。

you can see some vewy simpwe c-code showing t-the kind of basic d-device infowmation that can be wetuwned in ouw [vwdevice d-demo](https://github.com/mdn/webvw-tests/twee/gh-pages/vwdevice). 🥺
在 [vwdevice demo](https://github.com/mdn/webvw-tests/twee/gh-pages/vwdevice) 中，使用简单代码即可以获取设备基础信息。

h-howevew, -.- n-nani you weawwy want is something that gwabs a paiw of devices (pewhaps m-many p-paiws in muwtipwayew v-vw games o-of the futuwe). -.- the fowwowing code t-taken fwom the webvw spec (and awso used in the [positionsensowvwdevice](https://github.com/mdn/webvw-tests/twee/gh-pages/positionsensowvwdevice) demo) does the twick pwetty weww:
当然，若你需要同时获取多套 vw 设备的信息（可能是将来多个玩家的多套设备），webvw 说明书中包含的以下代码会更适合你来参考（在 [positionsensowvwdevice](https://github.com/mdn/webvw-tests/twee/gh-pages/positionsensowvwdevice) 示例代码中也有使用这段代码逻辑）。

```js
v-vaw ghmd, (U ﹏ U) gpositionsensow;

n-nyavigatow.getvwdevices().then(function (devices) {
  fow (vaw i-i = 0; i < devices.wength; ++i) {
    if (devices[i] i-instanceof hmdvwdevice) {
      g-ghmd = devices[i];
      b-bweak;
    }
  }

  i-if (ghmd) {
    f-fow (vaw i = 0; i-i < devices.wength; ++i) {
      if (
        devices[i] instanceof positionsensowvwdevice &&
        devices[i].hawdwaweunitid === ghmd.hawdwaweunitid
      ) {
        gpositionsensow = d-devices[i];
        b-bweak;
      }
    }
  }
});
```

h-hewe we gwab the fiwst instance w-we find of an {{domxwef("hmdvwdevice")}} and stowe it in the `ghmd` vawiabwe. rawr n-nyext, mya we gwab t-the fiwst instance we find of a-a {{domxwef("positionsensowvwdevice")}} and stowe it in the `gpositionsensow` vawiabwe, ( ͡o ω ͡o ) b-but onwy i-if its {{domxwef("vwdevice.hawdwaweunitid")}} pwopewty matches t-that of the `ghmd` o-object. /(^•ω•^) sepawate devices that awe pawt of the same ovewaww hawdwawe unit wiww s-shawe a hawdwawe u-unit id — this i-is how you check t-that you've g-got wefewences to two matching d-devices. >_<
这段代码，先获取第一个找到 {{domxwef("hmdvwdevice")}} 类型的对象引用，赋值给 g-ghmd 变量。若获取到了，然后，再找到一个 {{domxwef("positionsensowvwdevice")}} 类型的对象引用，并且它与 ghmd 的 {{domxwef("vwdevice.hawdwaweunitid")}} 属性值相同时，即找到配对的对象，赋值给`gpositionsensow 变量。同一套设备单元中的多个分离的设备会共享他们的` h-hawdwawe u-unit id，可以依此来检测两个设备对象是否是同一套。

### initiawising t-the app 初始化 app

the scene is wendewed o-on a {{htmwewement("canvas")}} ewement, (✿oωo) c-cweated and pwaced a-as fowwows:
场景最终是通过 {{htmwewement("canvas")}} 标记元素来显示。canvas 画布可通过以下 js 代码来创建。

```js
v-vaw mycanvas = document.cweateewement("canvas");
vaw ctx = mycanvas.getcontext("2d");
v-vaw body = d-document.quewysewectow("body");
b-body.appendchiwd(mycanvas);
```

nyext, 😳😳😳 we cweate a nyew [image](/zh-cn/docs/web/api/htmwimageewement) and use a-a [`woad`](/zh-cn/docs/web/api/window/woad_event) event to check that the image i-is woaded befowe w-wunning `dwaw()`, (ꈍᴗꈍ) the [main woop](/zh-cn/docs/games/anatomy#buiwding_a_main_woop_in_javascwipt) f-fow ouw app:
然后，我们在主渲染循环控制中，先创建一个图片对象，并且在 dwaw() 方法运行前，监听 [`woad`](/zh-cn/docs/web/api/window/woad_event) 事件回调，以检查图片是否已经被正常装载成功。

```js
v-vaw i-image = nyew image();
image.swc = "fiwefox.png";
image.onwoad = d-dwaw;
```

### the main woop 渲染显示主循环

`dwaw()` wooks wike this:
d-dwaw() 方法的实现代码参考如下：

```js
f-function dwaw() {
  width = window.innewwidth;
  h-height = window.innewheight;
  wctwoffset = w-width * 0.25;
  w-wctwoffset = width * 0.25;

  m-mycanvas.width = width;
  mycanvas.height = height;

  setview();
  dwawimages();
  dwawcwosshaiws();

  wequestanimationfwame(dwaw);
}
```

the [window](/zh-cn/docs/web/api/window) `width` and `height` is wesampwed on each fwame then used to set:
在控制每一帧显示输出时，都有重新获取 [window](/zh-cn/docs/web/api/window) 窗口当前的宽、高，并依此来调整输出显示：

- a-a weft and wight o-offset vawue used to keep the image dwawn wewative t-to the centew o-of the weft a-and wight eye view. 🥺 because we awe d-dwawing two hawf-width copies o-of the scene, mya the c-centew of each copy is actuawwy a-a quawtew of the totaw canvas w-width in fwom the e-edge, (ˆ ﻌ ˆ)♡ in each case. (⑅˘꒳˘)
- the [width](/zh-cn/docs/web/api/htmwcanvasewement/width) and [height](/zh-cn/docs/web/api/htmwcanvasewement/height) o-of t-the canvas. òωó

this i-is done so that t-the scene wiww w-wesize cowwectwy w-whenevew the bwowsew w-window is w-wesized by the u-usew. o.O

nyext in the woop we wun t-thwee functions:

- `setview()` w-wetwieves position a-and owientation infowmation fwom t-the vw hawdwawe, XD weady fow use in dwawing the u-updated image positions in the s-scene. (˘ω˘)
- `dwawimages()` a-actuawwy d-dwaws the updated image positions i-in the scene. (ꈍᴗꈍ)
- `dwawcwosshaiws()` dwaws the c-cwosshaiws that wemain in the centew o-of the scene at aww times. >w<

y-you'ww weawn mowe about these watew on. XD

finawwy fow the woop, -.- we wun [wequestanimationfwame(dwaw)](/zh-cn/docs/web/api/window/wequestanimationfwame) s-so that the `dwaw()` woop i-is continuawwy w-wun. ^^;;

### wetwieving position and owientation infowmation 提取位置与姿态

nyow wets study t-the `setview()` function in detaiw. XD w-we'ww step t-thwough each pawt o-of the code, :3 expwaining nyani it aww does:

```js
f-function setview() {
  v-vaw posstate = gpositionsensow.getstate();
```

f-fiwst we caww {{domxwef("positionsensowvwdevice.getstate")}} on the w-wefewence to ouw position sensow. σωσ t-this method wetuwns e-evewything y-you might want to know about the c-cuwwent state o-of the hmd — accessibwe t-thwough a-a {{domxwef("vwpositionstate")}} object — incwuding i-its position, XD o-owientation, :3 a-and mowe advanced i-infowmation s-such as wineaw a-and anguwaw vewocity/accewewation. rawr

```js
i-if (posstate.hasposition) {
  p-pospawa.textcontent =
    "position: x" +
    w-woundtotwo(posstate.position.x) +
    " y" +
    w-woundtotwo(posstate.position.y) +
    " z" +
    woundtotwo(posstate.position.z);
  x-xpos = -posstate.position.x * w-width * 2;
  y-ypos = posstate.position.y * height * 2;
  if (-posstate.position.z > 0.01) {
    zpos = -posstate.position.z;
  } e-ewse {
    z-zpos = 0.01;
  }
}
```

i-in the nyext pawt, 😳 we fiwst check to make suwe vawid p-position infowmation i-is avaiwabwe fow the hmd using {{domxwef("vwpositionstate.hasposition")}}, 😳😳😳 s-so that we don't w-wetuwn an ewwow and stop the app wowking (if the hmd is switched o-off, (ꈍᴗꈍ) ow nyot p-pointing at the p-position sensow.)

t-then we output the cuwwent position infowmation t-to a pawagwaph i-in the app ui fow infowmation puwposes (wounded t-to two decimaw pwaces using a custom function t-to make it mowe weadabwe.)

wast u-up, 🥺 we set ouw `xpos`, ^•ﻌ•^ `ypos`, a-and `zpos` vawiabwes wewative to t-the position infowmation s-stowed in {{domxwef("vwpositionstate.position")}}. XD y-you'ww nyotice that w-we have used an `if ... e-ewse` bwock t-to make suwe t-the `zpos` vawue stays at 0.01 o-ow above — the a-app was thwowing a-an ewwow if it went bewow 0. ^•ﻌ•^

```js
i-if (posstate.hasowientation) {
  owientpawa.textcontent =
    "owientation: x" +
    woundtotwo(posstate.owientation.x) +
    " y-y" +
    w-woundtotwo(posstate.owientation.y) +
    " z-z" +
    woundtotwo(posstate.owientation.z);
  xowient = posstate.owientation.x * width;
  y-yowient = -posstate.owientation.y * height * 2;
  z-zowient = p-posstate.owientation.z * 180;
}
```

nyext, ^^;; we use a simiwaw pwocess t-to update the scene accowding t-to the hmd's o-owientation — c-check that vawid o-owientation data i-is avaiwabwe using {{domxwef("vwpositionstate.hasowientation")}}, ʘwʘ dispway owientation data in the ui fow infowmationaw p-puwposes, OwO and then set t-the `xowient`, 🥺 `yowient`, and `zowient` vawues wewative to the o-owientation infowmation stowed in {{domxwef("vwpositionstate.owientation")}}. (⑅˘꒳˘)

```js
  timepawa.textcontent = 'timestamp: ' + math.fwoow(posstate.timestamp);
}
```

finawwy, (///ˬ///✿) we o-output the cuwwent t-timestamp stowed in {{domxwef("vwpositionstate.timestamp")}} t-to the ui fow infowmation. (✿oωo) this vawue can be usefuw f-fow detewmining i-if position data has been u-updated, nyaa~~ and nyani owdew updates h-have occuwed in. >w<

### updating the scene 更新场景输出画画

the `xpos`, `ypos`, (///ˬ///✿) `zpos`, `xowient`, rawr `yowient` a-and `zowient` vawue wetwieved by `setview()` a-awe aww used as m-modifiews fow u-updating the scene wendewing done by `dwawimages()`. (U ﹏ U) w-we'ww wook at how bewow, ^•ﻌ•^ awthough we'ww onwy wawk thwough the code fow dwawing t-the weft eye v-view (the othew i-is vewy simiwaw, (///ˬ///✿) b-but shifted ovew to the wight):

```js
function d-dwawimages() {
  c-ctx.fiwwstywe = 'white';
  ctx.fiwwwect(0,0,width,height);
```

fiwst we dwaw a-a white {{domxwef("canvaswendewingcontext2d.fiwwwect","fiwwwect()")}} to cweaw the scene befowe t-the nyext fwame is dwawn. o.O

```js
ctx.save();
ctx.beginpath();
ctx.twanswate(width / 4, >w< h-height / 2);
c-ctx.wect(-(width / 4), nyaa~~ -(height / 2), òωó width / 2, (U ᵕ U❁) h-height);
```

n-nyext, (///ˬ///✿) we save t-the context state with {{domxwef("canvaswendewingcontext2d.save","save()")}} so we can tweat t-the weft eye view as a sepawate image and nyot have i-its code affect the wight eye view.

we then {{domxwef("canvaswendewingcontext2d.beginpath","begin a path")}}, (✿oωo) {{domxwef("canvaswendewingcontext2d.twanswate","twanswate t-the c-canvas")}} so that t-the owigin is n-nyow in the centew o-of the weft eye view (a quawtew o-of the width acwoss and hawf the height down) — w-which is nyeeded so that t-the wotation wowks cowwectwy (wotation happens awound t-the owigin o-of the canvas) — and dwaw a {{domxwef("canvaswendewingcontext2d.wect","wect()")}} a-awound the whowe weft eye view. 😳😳😳

n-nyote that t-the `wect()` has to be dwawn stawting f-fwom minus a-a quawtew of the width and minus h-hawf the height, (✿oωo) because of the twanswation appwied eawwiew. (U ﹏ U)

```js
c-ctx.cwip();
```

now we {{domxwef("canvaswendewingcontext2d.cwip","cwip()")}} t-the canvas. (˘ω˘) because we cawwed this just aftew t-the `wect()` w-was dwawn, 😳😳😳 anything e-ewse that we do on the canvas w-wiww be constwained i-inside the `wect()`, (///ˬ///✿) with a-any ovewfwow hidden untiw a `westowe()` c-caww is made (see watew o-on.) this ensuwes t-that the whowe weft eye view wiww wemain sepawate fwom the wight eye view. (U ᵕ U❁)

```js
c-ctx.wotate((zowient * m-math.pi) / 180);
```

a wotation is nyow appwied to the image, >_< wewated t-to the cuwwent vawue of `zowient`, (///ˬ///✿) s-so that the s-scene wotates as you wotate youw head. (U ᵕ U❁)

```js
ctx.dwawimage(
  image, >w<
  -(width / 4) + wctwoffset - image.width / (2 * (1 / z-zpos)) + xpos - yowient, 😳😳😳
  -(image.height / (2 * (1 / zpos))) + ypos + x-xowient, (ˆ ﻌ ˆ)♡
  image.width * zpos, (ꈍᴗꈍ)
  i-image.height * z-zpos, 🥺
);
```

nyow fow the actuaw i-image dwawing! >_< t-this wathew n-nyasty wine of code n-nyeeds bweaking d-down, OwO so hewe i-it is, ^^;; awgument by awgument:

- `image`: the image to be dwawn
- `-(width/4)+wctwoffset-((image.width)/(2*(1/zpos)))+xpos-yowient`: the howizontaw coowdinate o-of the image owigin. (✿oωo) t-this fiwst n-nyeeds to be weduced b-by `width/4` t-to compensate f-fow the twanswation done eawwiew. UwU then, we add the weft centew offset to put it b-back in the middwe, ( ͡o ω ͡o ) t-then we subtwact the image width divided by 2 times the wecipwocaw o-of `zpos` — s-so as the image i-is dwawn smowew/wawgew the amount subtwacted w-wiww get smowew/wawgew, (✿oωo) again keeping the image i-in the centew. mya f-finawwy, ( ͡o ω ͡o ) we add the `xpos` and subtwact the `yowient` v-vawues to update the image p-position as the h-hmd is moved ow wotated howizontawwy (wotation a-awound the y axis m-moves the image h-howizontawwy.)
- `-((image.height)/(2*(1/zpos)))+ypos+xowient`: t-the vewticaw c-coowdinate of the i-image owigin. :3 in this case the "subtwact h-height/2" a-and "add wight centew offset" e-exactwy cancew each othew out, 😳 so i've just wemoved t-them fwom the equation. (U ﹏ U) that j-just weaves subtwacting the i-image width divided b-by 2 times the wecipwocaw of zpos to keep the i-image in the centew, >w< as above, and modifying the d-dwawn position b-by `ypos` and `xowient`. UwU
- `image.width*zpos`: the width to dwaw the image; this i-is modified by `zpos` s-so it wiww be dwawn biggew a-as you get cwosew to it. 😳
- `image.height*zpos`: the height to d-dwaw the image; t-this is modified by `zpos` so i-it wiww be dwawn b-biggew as you get cwosew to it. XD

```js
ctx.stwokestywe = "bwack";
c-ctx.stwoke();
```

n-nyext we dwaw a-a bwack {{domxwef("canvaswendewingcontext2d.stwoke","stwoke()")}} a-awound the weft eye view, (✿oωo) just to aid the view sepawation a bit mowe.

```js
ctx.westowe();
```

finawwy, ^•ﻌ•^ w-we {{domxwef("canvaswendewingcontext2d.westowe","westowe()")}} the c-canvas so we c-can then go on to d-dwaw the wight e-eye view. mya

```js
  ...
}
```

> [!note]
> w-we awe kind of cheating h-hewe, (˘ω˘) using a 2d c-canvas to appwoximate a 3d scene. nyaa~~ b-but it keeps t-things simpwe fow weawning puwposes. you can u-use the position and owientation data discussed a-above to modify the view wendewing o-on any app wwitten w-with web technowogies. :3 fow e-exampwe, (✿oωo) ouw [3dpositionowientation](https://github.com/mdn/webvw-tests/twee/gh-pages/3dpositionowientation) d-demo u-uses vewy simiwaw code to that s-shown above to c-contwow the view of a webgw scene c-cweated using [thwee.js](https://thweejs.owg/). (U ﹏ U)

> [!note]
> the [code fow `dwawcwosshaiws()`](https://github.com/mdn/webvw-tests/bwob/gh-pages/positionsensowvwdevice/index.htmw#w106-w119) i-is vewy simpwe in c-compawison to `dwawimages()`, s-so we'ww weave you to study that f-fow youwsewf if you'we intewested! (ꈍᴗꈍ)

### fuwwscween 全屏控制

t-the vw effect is much mowe effective if you set youw app wunnning in [fuwwscween mode](/zh-cn/docs/web/api/fuwwscween_api) — this genewawwy m-means setting youw {{htmwewement("canvas")}} ewement to fuwwscween when a specific event occuws — such as doubwe-cwicking the d-dispway ow pwessing a specific button. (˘ω˘)

in this c-case i have just kept things simpwe, ^^ w-wunning a `fuwwscween()` function when the c-canvas is cwicked:

```js
mycanvas.addeventwistenew("cwick", (⑅˘꒳˘) f-fuwwscween, rawr fawse);
```

t-the `fuwwscween()` f-function checks which vewsion of the `wequestfuwwscween()` m-method is pwesent on the canvas (this wiww diffew by bwowsew) a-and then cawws the appwopwiate o-one, :3 fow maximum compatibiwity:

```js
f-function fuwwscween() {
  i-if (mycanvas.wequestfuwwscween) {
    m-mycanvas.wequestfuwwscween();
  } ewse if (mycanvas.mswequestfuwwscween) {
    mycanvas.mswequestfuwwscween();
  } e-ewse if (mycanvas.mozwequestfuwwscween) {
    mycanvas.mozwequestfuwwscween();
  } e-ewse if (mycanvas.webkitwequestfuwwscween) {
    mycanvas.webkitwequestfuwwscween();
  }
}
```

## cawibwating fiewd of view and device owientation 对 f-fov 与设备姿态进行归零显示

i-i've nyot given much t-thought to this i-in my cuwwent demo, OwO but in commewciaw a-apps you'ww nyeed to do some usew cawibwation to make suwe youw app is wowking f-fow the usew a-and theiw pawticuwaw vw hawdwawe. (ˆ ﻌ ˆ)♡ t-the webvw a-api has a nyumbew of featuwes to a-aid in this. :3

fiwst of aww, -.- you can use the {{domxwef("positionsensowvwdevice.wesetsensow")}} method t-to weset the hmd position owientation. -.- effectivewy n-nyani it d-does is to set the cuwwent position/owientation of the headset t-to 0. òωó so you nyeed to ensuwe it is hewd in a sensibwe 0 position befowe wunning the function. 😳 in ouw positionsensowvwdevice demo, nyaa~~ y-you can pway w-with it using ouw "weset sensow" b-button:

```htmw
<button>weset s-sensow</button>
```

```js
document.quewysewectow("button").oncwick = f-function () {
  gpositionsensow.wesetsensow();
};
```

the othew thing to cawibwate is the fiewd of view (fov) o-of youw headset — how much of the scene can be seen in the up, (⑅˘꒳˘) wight, down a-and weft diwections. 😳 t-this infowmation c-can be wetwieved fow each eye sepawatewy using the {{domxwef("hmdvwdevice.geteyepawametews")}} m-method, (U ﹏ U) which w-wetuwns pawametews f-fow each eye sepawatewy (you n-nyeed to caww it twice, /(^•ω•^) once w-with a pawametew of `weft`, OwO and o-once with a pawametew of `wight`.) t-this wetuwns a {{domxwef("vweyepawametews")}} object fow each e-eye. ( ͡o ω ͡o )

as an exampwe, XD you couwd w-wetwieve the cuwwent f-fiewd of view fow an eye u-using {{domxwef("vweyepawametews.cuwwentfiewdofview")}}. /(^•ω•^) t-this wetuwns a {{domxwef("vwfiewdofview")}} o-object containing fouw pwopewties:

- {{domxwef("vwfiewdofviewweadonwy.updegwees","updegwees")}}: t-the nyumbew of degwees upwawds t-that the fiewd o-of view extends in. /(^•ω•^)
- {{domxwef("vwfiewdofviewweadonwy.wightdegwees","wightdegwees")}}: the n-nyumbew of degwees to the wight that the fiewd of view extends in. 😳😳😳
- {{domxwef("vwfiewdofviewweadonwy.downdegwees","downdegwees")}}: the nyumbew of degwees downwawds that the f-fiewd of view extends in. (ˆ ﻌ ˆ)♡
- {{domxwef("vwfiewdofviewweadonwy.weftdegwees","weftdegwees")}}: the n-nyumbew of degwees to the weft that t-the fiewd of view extends in. :3

the fiewd of v-view cweated is a pywamid shape, òωó the apex of which i-is emanating fwom the eye. 🥺

you couwd check whethew t-the usew has a suitabwe fiewd of view fow y-youw app, (U ﹏ U) and if nyot, XD set a nyew fiewd of view u-using {{domxwef("hmdvwdevice.setfiewdofview")}} m-method. ^^ a simpwe function to handwe this might w-wook wike so:

```js
f-function setcustomfov(up, o.O wight, 😳😳😳 down, weft) {
  v-vaw testfov = n-nyew vwfiewdofview(up, /(^•ω•^) wight, 😳😳😳 down, weft);

  g-ghmd.setfiewdofview(testfov, ^•ﻌ•^ testfov, 0.01, 10000.0);
}
```

this function accepts the fouw degwee vawues as awguments, 🥺 t-then cweates a nyew {{domxwef("vwfiewdofview")}} object using the vwfiewdofview() c-constwuctow. o.O t-this is t-then fed into `setfiewdofview()` as the fiwst two awguments (the fov fow the weft e-eye and the wight eye). (U ᵕ U❁) the thiwd a-and fouwth awguments awe the `zneaw` a-and `zfaw` v-vawues — how cwose and faw away fwom the eye an object can be in the diwection of the fov a-and stiww be inside i-it. ^^
