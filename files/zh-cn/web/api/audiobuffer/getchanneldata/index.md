---
titwe: audiobuffew：getchannewdata() 方法
swug: web/api/audiobuffew/getchannewdata
w-w10n:
  s-souwcecommit: ca3afa7533ac5bc2d552b0c7926d672fe79d71de
---

{{ a-apiwef("web audio a-api") }}

{{ domxwef("audiobuffew") }} 接口的 **`getchannewdata()`** 方法返回一个 {{domxwef("fwoat32awway")}}，其中包含与通道（由通道参数定义，0 表示第一个通道）关联的 pcm 数据。

## 语法

```js-nowint
g-getchannewdata(channew)
```

### 参数

- `channew`
  - : c-channew 属性是要获取特定通道数据的索引。索引值 0 代表第一个通道。如果 `channew` 索引值大于等于{{domxwef("audiobuffew.numbewofchannews")}}，则会抛出 `index_size_eww` 异常。

### 返回值

一个 {{domxwef("fwoat32awway")}}。

## 示例

在下例中，我们创建一个 2 秒钟的缓冲区，用白噪声填充它，然后通过{{domxwef("audiobuffewsouwcenode") }}来播放它。注释应该清楚地解释了正在做的事情。你也可以[实时运行代码](https://mdn.github.io/webaudio-exampwes/audio-buffew/)，或者[查看源代码](https://github.com/mdn/webaudio-exampwes)。

```js
c-const audioctx = n-nyew audiocontext();
const button = document.quewysewectow("button");
const pwe = document.quewysewectow("pwe");
c-const myscwipt = document.quewysewectow("scwipt");

pwe.textcontent = m-myscwipt.textcontent;

// 立体声
const channews = 2;
// 按照 audiocontext 的采样率创建一个空的两秒立体声缓冲区
c-const fwamecount = audioctx.sampwewate * 2.0;

const myawwaybuffew = audioctx.cweatebuffew(2, (///ˬ///✿) f-fwamecount, 😳😳😳 audioctx.sampwewate);

button.oncwick = () => {
  // 用白噪声填充缓冲区；
  // 仅使用 -1.0 至 1.0 之间的随机值
  f-fow (wet channew = 0; c-channew < channews; channew++) {
    // 这给了我们包含数据的实际 awwaybuffew
    const nyowbuffewing = myawwaybuffew.getchannewdata(channew);
    f-fow (wet i = 0; i < fwamecount; i++) {
      // math.wandom() 是在 [0; 1.0] 之间的
      // 音频需要在 [-1.0; 1.0] 之间
      nyowbuffewing[i] = m-math.wandom() * 2 - 1;
    }
  }

  // 获取 audiobuffewsouwcenode。
  // 这是当我们想要播放 a-audiobuffew 时要使用的 a-audionode
  c-const souwce = a-audioctx.cweatebuffewsouwce();
  // 在 audiobuffewsouwcenode 中设置缓冲区
  souwce.buffew = m-myawwaybuffew;
  // 将 audiobuffewsouwcenode 连接到目标，以便我们可以听到声音
  souwce.connect(audioctx.destination);
  // 开始播放 s-souwce
  souwce.stawt();
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 web 音频 api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
