---
title: AudioContext.createDelay()
slug: Web/API/BaseAudioContext/createDelay
---

{{ APIRef("Web Audio API") }}

`createDelay()` 是 {{ domxref("AudioContext") }} 的一个方法，作用是将输入音频信号延迟一定时间。（比如可以实现 对着话筒说句话，然后几秒后 这句话从音响里播放出来）

## 语法

```js
var audioCtx = new AudioContext();
var synthDelay = audioCtx.createDelay(maxDelayTime);
```

### 参数

- _maxDelayTime_
  - : 设置最大允许延迟的时间，以“秒”为单位

### 返回

A {{domxref("DelayNode")}}. The default {{domxref("DelayNode.delayTime")}} if no parameter is passed to `createDelay()` is 0 seconds.

以上是原文，大意是返回延时时间，没有设置时默认是 0

## 示例

首先是中文版的简洁的示例，这个例子中话筒里接收到的声音会延迟 3 秒从音响中播放。

```
window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;

try {//音频相关api
    var audioContext = new window.AudioContext();
    var synthDelay = audioContext.createDelay(5.0);
} catch (e) {
    alert("你浏览器不支持");
}


var error = function (error) {alert("有错误"); };

//以下是获取麦克风
if (navigator.getUserMedia) { //标准api
 navigator.getUserMedia({ "audio": true },
 function (stream) {
 micto(stream);    //具体工作
                   }, error);
}else if(navigator.webkitGetUserMedia) {   //webkit api
 navigator.webkitGetUserMedia({audio:true, video:  false },
 function (stream) {
  micto(stream); //具体工作
                   }, error);
 }else if (navigator.mozGetUserMedia) {  //火狐 api
 navigator.mozGetUserMedia({ "audio": true },
 function (stream) {
  micto(stream);//具体工作
                   }, error);
 }else if (navigator.msGetUserMedia) { //ie api
 navigator.msGetUserMedia({ "audio": true },
 function (stream) {
  micto(stream);//具体工作
                   }, error);
 } else {
   alert("您的浏览器版不支持这个api");
}





 var micto = function(stream) {

  synthDelay.delayTime.value = 3.0;   //延迟3秒

  var source = audioContext.createMediaStreamSource(stream);

  source.connect(synthDelay);

  synthDelay.connect(audioContext.destination);

      }

```

以下是英文版示例

We have created a simple example that allows you to play three different samples on a constant loop — see [create-delay](http://chrisdavidmills.github.io/create-delay/) (you can also [view the source code](https://github.com/chrisdavidmills/create-delay)). If you just press the play buttons, the loops will start immediately; if you slide the sliders up to the right, then press the play buttons, a delay will be introduced, so the looping sounds don't start playing for a short amount of time.

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();

var synthDelay = audioCtx.createDelay(5.0);

  ...

var synthSource;

playSynth.onclick = function() {
  synthSource = audioCtx.createBufferSource();
  synthSource.buffer = buffers[2];
  synthSource.loop = true;
  synthSource.start();
  synthSource.connect(synthDelay);
  synthDelay.connect(destination);
  this.setAttribute('disabled', 'disabled');
}

stopSynth.onclick = function() {
  synthSource.disconnect(synthDelay);
  synthDelay.disconnect(destination);
  synthSource.stop();
  playSynth.removeAttribute('disabled');
}

...

var delay1;
rangeSynth.oninput = function() {
delay1 = rangeSynth.value;
synthDelay.delayTime.value = delay1;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
