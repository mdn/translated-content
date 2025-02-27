---
title: OfflineAudioContext
slug: Web/API/OfflineAudioContext
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Web Audio API")}}

`OfflineAudioContext` 接口是一个 {{domxref("AudioContext")}} 的接口，代表由多个 {{domxref("AudioNode")}} 连接在一起构成的音频处理图。与 {{domxref("AudioContext")}} 标准相反的是，`OfflineAudioContext` 不在硬件设备渲染音频；相反，它尽可能快地生成音频，输出一个 {{domxref("AudioBuffer")}} 作为结果。

{{InheritanceDiagram}}

## 构造函数

- {{domxref("OfflineAudioContext.OfflineAudioContext()", "OfflineAudioContext()")}}
  - : 创建一个新的 `OfflineAudioContext` 实例。

## 实例属性

_从其父接口 {{domxref("BaseAudioContext")}} 继承属性。_

- {{domxref('OfflineAudioContext.length')}} {{ReadOnlyInline}}
  - : 代表采样帧缓冲区大小的整数。

## 实例方法

_从其父接口 {{domxref("BaseAudioContext")}} 继承方法。_

- {{domxref("OfflineAudioContext.suspend()")}}
  - : 在指定的时间安排音频暂停时间进程，并返回 Promise。
- {{domxref("OfflineAudioContext.startRendering()")}}
  - : 开始渲染音频，考虑当前连接和当前计划的修改。这个页面涵盖基于事件的和基于 Promise 的版本。

### 已弃用的方法

- {{domxref("OfflineAudioContext.resume()")}}
  - : 恢复一个被暂停的音频的时间进程。

> **备注：** `resume()` 方法仍然是可用的——现在它定义在 {{domxref("BaseAudioContext")}} 接口中（参见 {{domxref("AudioContext.resume")}}），通过{{domxref("AudioContext")}} 接口和 {{domxref("OfflineAudioContext")}} 接口都可以被访问。

### 事件

通过使用 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 或给这个接口的 `oneventname` 属性指定一个事件监听器来监听这些事件。

- [`complete`](/zh-CN/docs/Web/API/OfflineAudioContext/complete_event)

  - : 当离线音频上下文的渲染完成时触发。

## 示例

### 使用离线音频上下文播放音频

这个例子中，我们声明了 {{domxref("AudioContext")}} 和 `OfflineAudioContext` 对象。我们使用 `AudioContext` 加载一个音轨的 {{domxref("fetch()")}}，然后使用 `OfflineAudioContext` 去渲染音频并得到一个 {{domxref("AudioBufferSourceNode")}}，并播放这个音轨。在离线音频处理图建立后，我们使用 {{domxref("OfflineAudioContext.startRendering")}} 来将它渲染为 {{domxref("AudioBuffer")}}。

当 `startRendering()` 的 promise 兑现后，渲染也完成了，promise 会返回输出的 `AudioBuffer`。

在此刻，我们创建了一个另外的音频上下文，在它里面创建了一个 {{domxref("AudioBufferSourceNode")}}，并且设置它的 buffer 为之前生成的 Promise 中的 `AudioBuffer`，这样它就可以作为简单标准音频图来播放了。

> [!NOTE]
> 你可以[在线运行完整示例](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/)，或[查看源代码](https://github.com/mdn/webaudio-examples/blob/main/offline-audio-context-promise/)。

```js
// 定义一个在线或者离线的音频上下文
let audioCtx; // 必须在用户交互后初始化
const offlineCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

// 定义 DOM 节点的常量
const play = document.querySelector("#play");

function getData() {
  // 获取音频块，对其进行解码放入缓冲区。
  // 然后我们把缓冲区放进 source 对象，就可以播放了。
  fetch("viper.ogg")
    .then((response) => response.arrayBuffer())
    .then((downloadedBuffer) => audioCtx.decodeAudioData(downloadedBuffer))
    .then((decodedBuffer) => {
      console.log("文件下载成功。");
      const source = new AudioBufferSourceNode(offlineCtx, {
        buffer: decodedBuffer,
      });
      source.connect(offlineCtx.destination);
      return source.start();
    })
    .then(() => offlineCtx.startRendering())
    .then((renderedBuffer) => {
      console.log("渲染完全成功。");
      play.disabled = false;
      const song = new AudioBufferSourceNode(audioCtx, {
        buffer: renderedBuffer,
      });
      song.connect(audioCtx.destination);

      // 启动 song
      song.start();
    })
    .catch((err) => {
      console.error(`遇到错误：${err}`);
    });
}

// 激活播放按钮
play.onclick = () => {
  play.disabled = true;
  // 我们可以在用户单击时初始化上下文。
  audioCtx = new AudioContext();

  // 获取数据并启动 song
  getData();
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Audio API 的运用](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
