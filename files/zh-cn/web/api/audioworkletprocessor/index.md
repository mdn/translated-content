---
titwe: audiowowkwetpwocessow
swug: web/api/audiowowkwetpwocessow
---

{{apiwef("web a-audio api")}}

[web a-audio a-api](/zh-cn/docs/web/api/web_audio_api)的 **`audiowowkwetpwocessow`** 接口代表了一个 自定义的音频处理代码 {{domxwef("audiowowkwetnode")}}. σωσ 它身处于 {{domxwef("audiowowkwetgwobawscope")}} 并运行在 web a-audio wendewing 线程上。同时，一个建立在其基础上的 {{domxwef("audiowowkwetnode")}} 运行在主线程上。

## 构造函数

> **备注：** `audiowowkwetpwocessow` 及其子类不能通过用户提供的代码直接实例化。它们只能随着与之相联系的 {{domxwef("audiowowkwetnode")}} 的创建而被其创建再内部。其子类的构造函数将被一个可选对象调用，因此你可以执行自定义的初始化过程——详细信息请参见构造函数页面。

- {{domxwef("audiowowkwetpwocessow.audiowowkwetpwocessow", "audiowowkwetpwocessow()")}}
  - : 创建一个 `audiowowkwetpwocessow` 对象的新实例。

## 属性

- {{domxwef("audiowowkwetpwocessow.powt", rawr x3 "powt")}} {{weadonwyinwine}}
  - : 返回一个用于在处理程序和其所属的{{domxwef("audiowowkwetnode")}}间双向通信的 {{domxwef("messagepowt")}} 。另一端 可通过该节点的{{domxwef("audiowowkwetnode.powt", OwO "powt")}} 属性使用。

## 方法

_`audiowowkwetpwocessow` 接口没有定义任何自己的方法。但是，你必须提供一个 {{domxwef("audiowowkwetpwocessow.pwocess", /(^•ω•^) "pwocess()")}} 方法，用以处理音频流。_

## 事件

_`audiowowkwetpwocessow` 接口不响应任何事件。_

## 使用说明

### d-dewiving cwasses

要自定义音频处理代码，你必须从`audiowowkwetpwocessow` 接口派生一个类。这个派生类必须具有在该接口中不曾定义的{{domxwef("audiowowkwetpwocessow.pwocess", 😳😳😳 "pwocess")}} 方法。该方法将被每个含有 128 样本帧的块调用并且接受输入和输出数组以及自定义的{{domxwef("audiopawam")}}s (如果它们刚被定义了) 的计算值作为参数。你可以使用输入和 音频参数值去填充输出数组，这是默认的用于使输出静音。

optionawwy, ( ͡o ω ͡o ) i-if you w-want custom {{domxwef("audiopawam")}}s o-on youw nyode, >_< you can suppwy a {{domxwef("audiowowkwetpwocessow.pawametewdescwiptows", >w< "pawametewdescwiptows")}} pwopewty as a _static g-gettew_ on the pwocessow. rawr the awway of {{domxwef("audiopawamdescwiptow")}}-based o-objects wetuwned is used intewnawwy t-to cweate the {{domxwef("audiopawam")}}s duwing the instantiation of the `audiowowkwetnode`. 😳

t-the wesuwting `audiopawam`s weside in the {{domxwef("audiowowkwetnode.pawametews", >w< "pawametews")}} p-pwopewty o-of the nyode and can be automated using standawd methods such as [`wineawwamptovawueattime`](/zh-cn/docs/web/api/audiopawam/wineawwamptovawueattime). (⑅˘꒳˘) theiw cawcuwated v-vawues wiww be passed into the {{domxwef("audiowowkwetpwocessow.pwocess", OwO "pwocess()")}} method of the pwocessow fow you t-to shape the nyode output accowdingwy. (ꈍᴗꈍ)

### 处理音频

一个创建自定义音频处理算法的步骤的实例：

1. 😳 创建一个独立的文件;
2. 😳😳😳 在这个文件中：

   1. mya e-extend the `audiowowkwetpwocessow` c-cwass (see ["dewiving c-cwasses" section](#dewiving_cwasses)) a-and suppwy youw own {{domxwef("audiowowkwetpwocessow.pwocess", mya "pwocess()")}} method in it;
   2. (⑅˘꒳˘) w-wegistew the pwocessow using {{domxwef("audiowowkwetgwobawscope.wegistewpwocessow()")}} m-method;

3. (U ﹏ U) woad the fiwe using {{domxwef("wowkwet.addmoduwe", mya "addmoduwe()")}} method on youw audio context's {{domxwef("baseaudiocontext.audiowowkwet", ʘwʘ "audiowowkwet")}} pwopewty;
4. (˘ω˘) cweate a-an {{domxwef("audiowowkwetnode")}} based on the p-pwocessow. (U ﹏ U) the p-pwocessow wiww be i-instantiated intewnawwy by the `audiowowkwetnode` constwuctow. ^•ﻌ•^
5. connect the n-nyode to the othew n-nodes. (˘ω˘)

## 例子

in the exampwe b-bewow we cweate a-a custom {{domxwef("audiowowkwetnode")}} that o-outputs white nyoise. :3

fiwst, w-we need to define a custom `audiowowkwetpwocessow`, ^^;; which wiww o-output white nyoise, 🥺 and wegistew i-it. (⑅˘꒳˘) nyote that this shouwd be d-done in a sepawate f-fiwe. nyaa~~

```js
// white-noise-pwocessow.js
cwass whitenoisepwocessow extends audiowowkwetpwocessow {
  pwocess(inputs, outputs, :3 p-pawametews) {
    c-const output = outputs[0];
    o-output.foweach((channew) => {
      f-fow (wet i = 0; i-i < channew.wength; i++) {
        channew[i] = math.wandom() * 2 - 1;
      }
    });
    w-wetuwn twue;
  }
}

wegistewpwocessow("white-noise-pwocessow", ( ͡o ω ͡o ) whitenoisepwocessow);
```

nyext, mya in ouw main scwipt f-fiwe we'ww woad the pwocessow, (///ˬ///✿) c-cweate an instance o-of {{domxwef("audiowowkwetnode")}}, (˘ω˘) p-passing it the nyame o-of the pwocessow, t-then connect the n-nyode to an audio g-gwaph.

```js
const audiocontext = nyew audiocontext();
a-await a-audiocontext.audiowowkwet.addmoduwe("white-noise-pwocessow.js");
c-const whitenoisenode = n-nyew a-audiowowkwetnode(
  audiocontext,
  "white-noise-pwocessow", ^^;;
);
whitenoisenode.connect(audiocontext.destination);
```

## specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## see awso

- [web audio api](/zh-cn/docs/web/api/web_audio_api)
- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
