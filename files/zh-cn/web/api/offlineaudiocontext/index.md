---
title: OfflineAudioContext
slug: Web/API/OfflineAudioContext
---

{{APIRef("Web Audio API")}}

`OfflineAudioContext` 接口是一个 {{domxref("AudioContext")}} 的接口，代表由多个 {{domxref("AudioNode")}} 连接在一起构成的音频处理图。与 {{domxref("AudioContext")}} 标准相反的是， `OfflineAudioContext` 不在硬件设备渲染音频；相反，它尽可能快地生成音频，输出一个 {{domxref("AudioBuffer")}} 作为结果。

## 构造函数

- {{domxref("OfflineAudioContext.OfflineAudioContext()")}}
  - : 创建一个新的 `OfflineAudioContext` 实例。

## 属性

_从父级 {{domxref("AudioContext")}} 获取属性。_

- {{domxref('OfflineAudioContext.length')}} {{readonlyinline}}
  - : 代表采样帧缓冲区大小的整数。

### 事件处理程序

- {{domxref("OfflineAudioContext.oncomplete")}}
  - : 当进程完成时，基于事件版本的{{domxref("OfflineAudioContext.startRendering()")}} 被使用之后，事件处理器将会被调用，[`complete`](/zh-CN/docs/Web/API/OfflineAudioContext/complete_event) 事件类型为 {{domxref("OfflineAudioCompletionEvent")}}）被触发。

## 方法

_从父级 {{domxref("AudioContext")}} 和 {{domxref("EventTarget")}} 获取方法的实现。_

- {{domxref("OfflineAudioContext.resume()")}}
  - : 恢复一个被暂停的音频的时间进程。
- {{domxref("OfflineAudioContext.suspend()")}}
  - : 在指定的时间安排音频暂停时间进程，并且通过 Promise 返回。
- {{domxref("OfflineAudioContext.startRendering()")}}
  - : 开始渲染音频，考虑当前连接和当前计划的修改。这个页面涵盖基于事件的和基于 Promise 的版本。

## 示例

这个简单的例子中，我们声明了 {{domxref("AudioContext")}} 和 `OfflineAudioContext` 对象。我们使用 `AudioContext` 去加载一个 XHR（{{domxref("AudioContext.decodeAudioData")}}）获取的音轨，然后使用 `OfflineAudioContext` 去渲染音频并得到一个 into an {{domxref("AudioBufferSourceNode")}}，并播放这个音轨。在离线音频处理图建立后，你需要去使用 {{domxref("OfflineAudioContext.startRendering")}} 来渲染它成为 {{domxref("AudioBuffer")}}。

当 `startRendering()` 的 `Promise` 解决后，渲染也完成了，在 `Promise` 内可以获得输出的 `AudioBuffer`。

在此刻，我们创建了一个另外的音频上下文，在它里面创建了一个 {{domxref("AudioBufferSourceNode")}}，并且设置它的 buffer 为之前生成的 Promise 中的 `AudioBuffer。这样它就可以作为简单标准音频图来播放了`。

> **备注：** 为了获取可以运行的例子，请看我们在 Github 的仓库 [offline-audio-context-promise](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) （也可以看到 [源代码](https://github.com/mdn/webaudio-examples/tree/master/offline-audio-context-promise)。）

```js
// 定义一个在线或者离线的音频上下文

var audioCtx = new AudioContext();
var offlineCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

source = offlineCtx.createBufferSource();

// 使用 XHR 去加载一个音轨，
// 使用 decodeAudioData 去解码，
// 使用 OfflineAudioContext 去渲染它

function getData() {
  request = new XMLHttpRequest();

  request.open("GET", "viper.ogg", true);

  request.responseType = "arraybuffer";

  request.onload = function () {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function (buffer) {
      myBuffer = buffer;
      source.buffer = myBuffer;
      source.connect(offlineCtx.destination);
      source.start();
      //source.loop = true;
      offlineCtx
        .startRendering()
        .then(function (renderedBuffer) {
          console.log("渲染完全成功");
          var audioCtx = new (window.AudioContext ||
            window.webkitAudioContext)();
          var song = audioCtx.createBufferSource();
          song.buffer = renderedBuffer;

          song.connect(audioCtx.destination);

          play.onclick = function () {
            song.start();
          };
        })
        .catch(function (err) {
          console.log("渲染失败：" + err);
          // 注意：当 OfflineAudioContext 上 startRendering 被立刻调用，Promise 应该被 reject
        });
    });
  };

  request.send();
}

// 运行 getData 去开始这个进程

getData();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Audio API 的运用](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
