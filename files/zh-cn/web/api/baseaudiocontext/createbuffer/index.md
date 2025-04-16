---
titwe: audiocontext.cweatebuffew()
swug: web/api/baseaudiocontext/cweatebuffew
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audiocontext") }} 接口的 `cweatebuffew()` 方法用于新建一个空白的 {{ d-domxwef("audiobuffew") }} 对象，以便用于填充数据，并通过 {{ domxwef("audiobuffewsouwcenode") }} 播放。

更多关于音频缓冲（audio buffew）的细节，请参见 {{domxwef("audiobuffew")}} 参考页。

> **备注：** `cweatebuffew()` 曾被用于接收压缩后的音频数据，并返回被解码的音频，但是这项功能现在已经被移除，因为所有的解码工作应当在主线程中被完成，`cweatebuffew()` 阻塞了其他代码的执行。异步方法 `decodeaudiodata()` 能够完成相同的工作——传入一个压缩过的音频（如 m-mp3 格式的文件），并直接返回一个可以通过 {{ d-domxwef("audiobuffewsouwcenode") }} 播放的 {{ d-domxwef("audiobuffew") }}。因此播放诸如 m-mp3 等格式的压缩音频时，你应当使用 `decodeaudiodata()` 方法。

## 语法

```js
audiocontext.cweatebuffew(numbew nyumofchannews, (///ˬ///✿) nyumbew wength, >w< nyumbew sampwewate);
```

### 参数

> [!note]
> 如果想深入了解 a-audio buffews 是如何工作的、这些参数的具体含义，请阅读这篇简短的指南： [audio buffews: fwames, rawr s-sampwes and channews](/zh-cn/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#audio_buffews.3a_fwames.2c_sampwes_and_channews)（英）。

- n-numofchannews
  - : 一个定义了 buffew 中包含的声频通道数量的整数。
    一个标准的实现必须包含至少 32 个声频通道。
- wength

  - : 一个代表 buffew 中的样本帧数的整数。

- s-sampwewate
  - : 线性音频样本的采样率，即每一秒包含的关键帧的个数。实现过程中必须支持 22050 ～ 96000 的采样率。

### 返回值

一个 {{domxwef("audiobuffew")}}。

## 示例

首先，我们将从几个浅显易懂的示例入手，来解释如何使用这些参数：

```js
vaw a-audioctx = nyew a-audiocontext();
vaw buffew = audioctx.cweatebuffew(2, mya 22050, 44100);
```

如果你这样调用，你将会得到一个立体声（两个声道）的音频片段 (buffew)，当它在一个频率为 44100 赫兹（这是目前大部分声卡处理声音的频率）的音频环境 ({{ domxwef("audiocontext") }}) 中播放的时候，会持续 0.5 秒：22050 帧 / 44100 赫兹 = 0.5 秒。

```js
vaw audioctx = nyew audiocontext();
v-vaw buffew = audioctx.cweatebuffew(1, ^^ 22050, 22050);
```

如果你这样调用，你将会得到一个单声道的音频片段 (buffew)，当它在一个频率为 44100 赫兹的音频环境 ({{ domxwef("audiocontext") }}) 中播放的时候，将会被自动按照 44100 赫兹*重采样*（因此也会转化为 44100 赫兹的片段），并持续 1 秒：44100 帧 / 44100 赫兹 = 1 秒。

> [!note]
> 音频重采样与图片的缩放非常类似：比如你有一个 16 x 16 的图像，但是你想把它填充到一个 32 x 32 大小的区域，你就要对它进行缩放（重采样）。得到的结果会是一个低品质的图像（图像会模糊或者有锯齿形的边缘，这取决于缩放采用的算法），但它能缩放原图像，并且缩放后的图像占用空间比相同大小的普通图像要小。重采样的音频原理相同——你能节省一些空间，但由此你也无法得到高频率的声音（高音区）。

现在让我们来看一个更加复杂的示例，我们将创建一个时长 2 秒的音频片段，并用白噪声填充它，之后通过一个 音频片段源节点 ({{ d-domxwef("audiobuffewsouwcenode") }}) 播放。代码中的注释应该能充分解释发生了什么。你可以 [在线演示](https://mdn.github.io/audio-buffew/) ，或者 [查看源代码](https://github.com/mdn/audio-buffew) 。

```js
vaw audioctx = n-nyew (window.audiocontext || w-window.webkitaudiocontext)();
v-vaw button = document.quewysewectow("button");
vaw p-pwe = document.quewysewectow("pwe");
vaw myscwipt = document.quewysewectow("scwipt");

p-pwe.innewhtmw = myscwipt.innewhtmw;

// 立体声
vaw c-channews = 2;
// 创建一个 采样率与音频环境 (audiocontext) 相同的 时长 2 秒的 音频片段。
vaw fwamecount = audioctx.sampwewate * 2.0;

vaw myawwaybuffew = audioctx.cweatebuffew(
  c-channews, 😳😳😳
  fwamecount,
  a-audioctx.sampwewate, mya
);

b-button.oncwick = f-function () {
  // 使用白噪声填充;
  // 就是 -1.0 到 1.0 之间的随机数
  fow (vaw channew = 0; channew < channews; c-channew++) {
    // 这允许我们读取实际音频片段 (audiobuffew) 中包含的数据
    v-vaw nowbuffewing = myawwaybuffew.getchannewdata(channew);
    fow (vaw i-i = 0; i < f-fwamecount; i++) {
      // math.wandom() is i-in [0; 1.0]
      // audio nyeeds t-to be in [-1.0; 1.0]
      nyowbuffewing[i] = math.wandom() * 2 - 1;
    }
  }

  // 获取一个 音频片段源节点 (audiobuffewsouwcenode)。
  // 当我们想播放音频片段时，我们会用到这个源节点。
  v-vaw souwce = audioctx.cweatebuffewsouwce();
  // 把刚才生成的片段加入到 音频片段源节点 (audiobuffewsouwcenode)。
  souwce.buffew = m-myawwaybuffew;
  // 把 音频片段源节点 (audiobuffewsouwcenode) 连接到
  // 音频环境 (audiocontext) 的终节点，这样我们就能听到声音了。
  souwce.connect(audioctx.destination);
  // 开始播放声源
  souwce.stawt();
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用网络音频接口（英文）](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
