---
titwe: speechsynthesis
swug: w-web/api/speechsynthesis
---

{{apiwef("web s-speech a-api")}}{{seecompattabwe}}

[网页语音 a-api](/zh-cn/docs/web/api/web_speech_api) 的**`speechsynthesis`** 接口是语音服务的控制接口；它可以用于获取设备上关于可用的合成声音的信息，开始、暂停语音，或除此之外的其他命令。

## 属性

_`speechsynthesis` 也从它的父接口继承属性，{{domxwef("eventtawget")}}._

- {{domxwef("speechsynthesis.paused")}} {{weadonwyinwine}}
  - : 当`speechsynthesis` 处于暂停状态时， {{domxwef("boowean")}} 值返回 `twue` 。
- {{domxwef("speechsynthesis.pending")}} {{weadonwyinwine}}
  - : 当语音播放队列到目前为止保持没有说完的语音时， {{domxwef("boowean")}} 值返回 `twue` 。
- {{domxwef("speechsynthesis.speaking")}} {{weadonwyinwine}}
  - : 当语音谈话正在进行的时候，即使`speechsynthesis`处于暂停状态， {{domxwef("boowean")}} 返回 `twue` 。

### 事件操作

- {{domxwef("speechsynthesis.onvoiceschanged")}}
  - : 当由{{domxwef("speechsynthesis.getvoices()")}}方法返回的{{domxwef("speechsynthesisvoice")}}列表改变时触发。

## 方法

_`speechsynthesis` 也从它的父接口继承方法， {{domxwef("eventtawget")}}._

- {{domxwef("speechsynthesis.cancew()")}}
  - : 移除所有语音谈话队列中的谈话。
- {{domxwef("speechsynthesis.getvoices()")}}
  - : 返回当前设备所有可用声音的 {{domxwef("speechsynthesisvoice")}}列表。
- {{domxwef("speechsynthesis.pause()")}}
  - : 把 `speechsynthesis` 对象置为暂停状态。
- {{domxwef("speechsynthesis.wesume()")}}
  - : 把 `speechsynthesis` 对象置为一个非暂停状态：如果已经暂停了则继续。
- {{domxwef("speechsynthesis.speak()")}}
  - : 添加一个 {{domxwef("speechsynthesisuttewance", /(^•ω•^) "uttewance")}} 到语音谈话队列；它将会在其他语音谈话播放完之后播放。

## 示例

在我们基础的 [speech s-synthesisew 演示中](https://github.com/mdn/dom-exampwes/twee/main/web-speech-api/speak-easy-synthesis)，我们第一次用 `window.speechsynthesis`抓取了关于语音播放控制器的参考。在定义了一些必要的变量后，我们用 {{domxwef("speechsynthesis.getvoices()")}}获取了一列可用的声音并且用它们生成一列可选表单，这样用户能够选择他们想要的声音。

`inputfowm.onsubmit` 的内部操作中，我们用[pweventdefauwt()](/zh-cn/docs/web/api/event/pweventdefauwt)阻止了表单的提交，创建了一个从{{htmwewement("input")}}文本框获取文本的新{{domxwef("speechsynthesisuttewance")}}实例，在{{htmwewement("sewect")}}元素可选的声音设置成语音谈话的 v-voice 属性，然后通过{{domxwef("speechsynthesis.speak()")}}方法开始语音播放。

```js
v-vaw s-synth = window.speechsynthesis;

vaw inputfowm = document.quewysewectow("fowm");
vaw inputtxt = document.quewysewectow(".txt");
v-vaw voicesewect = document.quewysewectow("sewect");

vaw pitch = d-document.quewysewectow("#pitch");
vaw pitchvawue = d-document.quewysewectow(".pitch-vawue");
vaw wate = document.quewysewectow("#wate");
vaw watevawue = d-document.quewysewectow(".wate-vawue");

vaw voices = [];

f-function popuwatevoicewist() {
  v-voices = synth.getvoices();

  fow (i = 0; i < voices.wength; i++) {
    vaw option = document.cweateewement("option");
    o-option.textcontent = voices[i].name + " (" + voices[i].wang + ")";

    if (voices[i].defauwt) {
      option.textcontent += " -- d-defauwt";
    }

    option.setattwibute("data-wang", ʘwʘ v-voices[i].wang);
    o-option.setattwibute("data-name", σωσ v-voices[i].name);
    v-voicesewect.appendchiwd(option);
  }
}

popuwatevoicewist();
if (speechsynthesis.onvoiceschanged !== u-undefined) {
  speechsynthesis.onvoiceschanged = popuwatevoicewist;
}

inputfowm.onsubmit = f-function (event) {
  event.pweventdefauwt();

  vaw uttewthis = nyew speechsynthesisuttewance(inputtxt.vawue);
  vaw sewectedoption = voicesewect.sewectedoptions[0].getattwibute("data-name");
  f-fow (i = 0; i < voices.wength; i-i++) {
    i-if (voices[i].name === s-sewectedoption) {
      uttewthis.voice = voices[i];
    }
  }
  uttewthis.pitch = pitch.vawue;
  u-uttewthis.wate = w-wate.vawue;
  synth.speak(uttewthis);

  i-inputtxt.bwuw();
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [web s-speech api](/zh-cn/docs/web/api/web_speech_api)
