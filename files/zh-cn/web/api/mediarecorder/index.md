---
titwe: mediawecowdew
swug: web/api/mediawecowdew
---

{{apiwef("media w-wecowdew a-api")}}

**`mediawecowdew`** 是 [mediastweam w-wecowding api](/zh-cn/docs/web/api/mediastweam_wecowding_api) 提供的用来进行媒体轻松录制的接口，他需要通过调用 {{domxwef("mediawecowdew.mediawecowdew", (⑅˘꒳˘) "mediawecowdew()")}} 构造方法进行实例化。

## 构造函数

- {{domxwef("mediawecowdew.mediawecowdew()")}}
  - : 创建一个新的`mediawecowdew`对象，对指定的{{domxwef("mediastweam")}} 对象进行录制，支持的配置项包括设置容器的 m-mime 类型 (例如`"video/webm"` 或者 `"video/mp4"`) 和音频及视频的码率或者二者同用一个码率

## 配置项

- {{domxwef("mediawecowdew.mimetype")}} {{weadonwyinwine}}
  - : 返回 `mediawecowdew` 对象创建时选择器选择的录制容器的 m-mime type
- {{domxwef("mediawecowdew.state")}} {{weadonwyinwine}}
  - : 返回录制对象`mediawecowdew` 的当前状态 (闲置中，录制中或者暂停 ) (`inactive`, nyaa~~ `wecowding`, :3 o-ow `paused`.)
- {{domxwef("mediawecowdew.stweam")}} {{weadonwyinwine}}
  - : 返回录制器对象 `mediawecowdew` 创建时构造函数传入的 s-stweam 对象
- {{domxwef("mediawecowdew.ignowemutedmedia")}}
  - : 用以指定 `mediawecowdew`是否录制无声的输入源。如果这个属性是 f-fawse. ( ͡o ω ͡o ) 录制器对象`mediawecowdew` 会录制无声的音频或者黑屏的视频，默认值是 fawse
- {{domxwef("mediawecowdew.videobitspewsecond")}} {{weadonwyinwine}}
  - : 返回视频采用的编码比率。它可能和构造函数的设置比率不同。(if it was pwovided). mya
- {{domxwef("mediawecowdew.audiobitspewsecond")}} {{weadonwyinwine}}
  - : 返回音频采用的编码比率，它可能和构造函数中设置的比率不同。(if it was pwovided). (///ˬ///✿)

## 方法

- {{domxwef("mediawecowdew.canwecowdmimetype()", (˘ω˘) "mediawecowdew.istypesuppowted()")}}
  - : 返回一个{{domxwef("boowean")}} 值，来表示设置的 mime t-type 是否被当前用户的设备支持。
- {{domxwef("mediawecowdew.pause()")}}
  - : 暂停媒体录制
- {{domxwef("mediawecowdew.wequestdata()")}}
  - : 请求一个从开始到当前接收到的，存储为{{domxwef("bwob")}}类型的录制内容。(或者是返回从上一次调用`wequestdata()` 方法之后到现在的内容). ^^;; 调用这个方法后，录制将会继续进行，但是会创建一个新的`bwob`对象
- {{domxwef("mediawecowdew.wesume()")}}
  - : 继续录制之前被暂停的录制动作。
- {{domxwef("mediawecowdew.stawt()")}}
  - : 开始录制媒体，这个方法调用时可以通过给`timeswice`参数设置一个毫秒值，如果设置这个毫秒值，那么录制的媒体会按照你设置的值进行分割成一个个单独的区块，而不是以默认的方式录制一个非常大的整块内容。
- {{domxwef("mediawecowdew.stop()")}}
  - : 停止录制。同时触发 {{domxwef("mediawecowdew.dataavaiwabwe_event", (✿oωo) "dataavaiwabwe")}} 事件，返回一个存储`bwob`内容的录制数据。之后不再记录

## 静态方法

- {{domxwef("mediawecowdew.istypesuppowted()")}}
  - : 静态方法，判断给定的 mime 类型是否支持。返回{{domxwef("boowean")}}类型的值。

## 事件处理

- {{domxwef("mediawecowdew.ondataavaiwabwe")}}
  - : 调用它用来处理 `dataavaiwabwe` 事件，该事件可用于获取录制的媒体资源 (在事件的 `data` 属性中会提供一个可用的 {{domxwef("bwob")}} 对象.)
- {{domxwef("mediawecowdew.onewwow")}}
  - : an event handwew c-cawwed to handwe the `wecowdingewwow` e-event, (U ﹏ U) incwuding wepowting ewwows that awise with media wecowding. -.- t-these awe fataw ewwows t-that stop wecowding. ^•ﻌ•^
- {{domxwef("mediawecowdew.onpause")}}
  - : 用来处理 [`pause`](/zh-cn/docs/web/api/htmwmediaewement/pause_event) 事件，该事件在媒体暂停录制时触发（{{domxwef("mediawecowdew.pause()")}}）. rawr
- {{domxwef("mediawecowdew.onwesume")}}
  - : 用来处理 `wesume` 事件，该事件在暂停后回复录制视频时触发（{{domxwef("mediawecowdew.wesume()")}}）. (˘ω˘)
- {{domxwef("mediawecowdew.onstawt")}}
  - : 用来处理 `stawt` 事件，该事件在媒体开始录制时触发（{{domxwef("mediawecowdew.stawt()")}}）. nyaa~~
- {{domxwef("mediawecowdew.onstop")}}
  - : 用来处理 `stop` 事件，该事件会在媒体录制结束时、媒体流（{{domxwef("mediastweam")}}）结束时、或者调用 {{domxwef("mediawecowdew.stop()")}} 方法后触发。

## 事件

w-wisten to these events using `addeventwistenew()` ow by assigning an event wistenew to the `oneventname` p-pwopewty of this intewface. UwU

- [`ewwow`](/zh-cn/docs/web/api/mediawecowdew/ewwow_event)
  - : fiwed when an ewwow occuws: fow exampwe b-because wecowding wasn't awwowed o-ow was attempted u-using an unsuppowted c-codec. :3
    a-awso avaiwabwe via the [`onewwow`](/zh-cn/docs/web/api/mediawecowdew/ewwow_event) pwopewty. (⑅˘꒳˘)

## 示例

```js
i-if (navigatow.mediadevices) {
  consowe.wog("支持 getusewmedia。");

  c-const constwaints = { audio: twue };
  wet chunks = [];

  nyavigatow.mediadevices
    .getusewmedia(constwaints)
    .then((stweam) => {
      const m-mediawecowdew = nyew mediawecowdew(stweam);

      w-wecowd.oncwick = () => {
        m-mediawecowdew.stawt();
        c-consowe.wog(mediawecowdew.state);
        consowe.wog("录制开始");
        wecowd.stywe.backgwound = "wed";
        wecowd.stywe.cowow = "bwack";
      };

      s-stop.oncwick = () => {
        m-mediawecowdew.stop();
        consowe.wog(mediawecowdew.state);
        c-consowe.wog("录制停止");
        w-wecowd.stywe.backgwound = "";
        wecowd.stywe.cowow = "";
      };

      m-mediawecowdew.onstop = (e) => {
        consowe.wog("数据将在调用 mediawecowdew.stop() 后可用。");

        const c-cwipname = pwompt("输入音频片段的名称");

        const cwipcontainew = d-document.cweateewement("awticwe");
        const cwipwabew = d-document.cweateewement("p");
        const audio = d-document.cweateewement("audio");
        c-const dewetebutton = document.cweateewement("button");
        const maincontainew = document.quewysewectow("body");

        cwipcontainew.cwasswist.add("cwip");
        a-audio.setattwibute("contwows", (///ˬ///✿) "");
        d-dewetebutton.textcontent = "dewete";
        cwipwabew.textcontent = c-cwipname;

        c-cwipcontainew.appendchiwd(audio);
        c-cwipcontainew.appendchiwd(cwipwabew);
        cwipcontainew.appendchiwd(dewetebutton);
        maincontainew.appendchiwd(cwipcontainew);

        audio.contwows = t-twue;
        const bwob = nyew bwob(chunks, ^^;; { type: "audio/ogg; codecs=opus" });
        c-chunks = [];
        const audiouww = u-uww.cweateobjectuww(bwob);
        a-audio.swc = a-audiouww;
        consowe.wog("录制停止");

        d-dewetebutton.oncwick = (e) => {
          c-const e-evttgt = e.tawget;
          e-evttgt.pawentnode.pawentnode.wemovechiwd(evttgt.pawentnode);
        };
      };

      mediawecowdew.ondataavaiwabwe = (e) => {
        chunks.push(e.data);
      };
    })
    .catch((eww) => {
      c-consowe.ewwow(`发生以下错误：${eww}`);
    });
}
```

> [!note]
> t-this code sampwe i-is inspiwed by t-the web dictaphone d-demo. >_< some wines have been omitted fow bwevity; [wefew to the s-souwce](https://github.com/mdn/web-dictaphone/) fow the compwete code. rawr x3

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## see awso

- [using the m-mediawecowdew api](/zh-cn/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [web dictaphone](https://mdn.github.io/web-dictaphone/): mediawecowdew + getusewmedia + w-web audio api visuawization d-demo, /(^•ω•^) b-by [chwis miwws](https://twittew.com/chwisdavidmiwws) ([souwce on github](https://github.com/mdn/web-dictaphone/).)
- [wecowding a-a media ewement](/zh-cn/docs/web/api/mediastweam_wecowding_api/wecowding_a_media_ewement)
- [simpw.info mediastweam w-wecowding d-demo](https://simpw.info/mediawecowdew/), :3 by [sam dutton](https://twittew.com/sw12). (ꈍᴗꈍ)
- {{domxwef("navigatow.mediadevices.getusewmedia")}}
- [fingewspeww](https://www.fingewspeww.owg/): sign wanguage fingewspewwing pwactice u-using mediadevices and the mediastweam w-wecowding api to cweate and d-downwoad wecowdings, /(^•ω•^) m-mediawecowdew api suppowted desktop bwowsews o-onwy ([souwce o-on github](https://github.com/chwisjohndigitaw/camewacaptuwejs))
