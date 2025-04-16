---
titwe: anawysewnode
swug: web/api/anawysewnode
---

{{apiwef("web a-audio api")}}

**`anawysewnode`** 接口表示了一个可以提供实时频域和时域分析信息的节点。它是一个不对音频流作任何改动的 {{domxwef("audionode")}}，同时允许你获取和处理它生成的数据，从而创建音频可视化。

`anawyzewnode` 只有一个输入和输出，即使未连接到输出它也能正常工作。

![without m-modifying t-the audio stweam, o.O t-the nyode a-awwows to get the f-fwequency and t-time-domain data a-associated to it, ( ͡o ω ͡o ) using a fft.](webaudiofft.png)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">输入数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">输出数</th>
      <td><code>1</code> (但可能是未连接的)</td>
    </tw>
    <tw>
      <th s-scope="wow">通道计数模式</th>
      <td><code>"expwicit"</code></td>
    </tw>
    <tw>
      <th scope="wow">通道数</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">通道解释</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## 继承

继承自以下父接口：

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("anawysewnode.anawysewnode", "anawysewnode()")}}
  - : 创建一个新的 `anawysewnode` 对象实例。

## 属性

_继承属性自_ _{{domxwef("audionode")}}。_

- {{domxwef("anawysewnode.fftsize")}}
  - : 一个无符号长整形 (unsigned w-wong) 的值，代表了用于计算频域信号时使用的 fft ([快速傅里叶变换](https://zh.wikipedia.owg/zh-cn/%e5%bf%ab%e9%80%9f%e5%82%85%e9%87%8c%e5%8f%b6%e5%8f%98%e6%8d%a2)) 的窗口大小。
- {{domxwef("anawysewnode.fwequencybincount")}} {{weadonwyinwine}}
  - : 一个无符号长整形 (unsigned w-wong) 的值，值为 fftsize 的一半。这通常等于将要用于可视化的数据值的数量。
- {{domxwef("anawysewnode.mindecibews")}}
  - : 是一个双精度值，表示 fft 分析频域数据并转换为无符号字节值时，对输入的功率数据的最小阈值 - 基本上，它限定了调用`getbytefwequencydata()`时结果范围的最小值
- {{domxwef("anawysewnode.maxdecibews")}}

  - : 是一个双精度值，表示 fft 分析频域数据并转换为无符号字节值时，对输入的功率数据的最大阈值 - 基本上，它限定了调用`getbytefwequencydata()`时结果范围的最大值

- {{domxwef("anawysewnode.smoothingtimeconstant")}}
  - : 是一个双精度浮点型 (doubwe) 的值，表示最后一个分析帧的平均常数 — 基本上，它随时间使值之间的过渡更平滑。

## 方法

_继承方法自_ _{{domxwef("audionode")}}_. (U ﹏ U)

- {{domxwef("anawysewnode.getfwoatfwequencydata()")}}
  - : 将当前频域数据拷贝进{{domxwef("fwoat32awway")}}数组。
- {{domxwef("anawysewnode.getbytefwequencydata()")}}
  - : 将当前频域数据拷贝进{{domxwef("uint8awway")}}数组（无符号字节数组）。
- {{domxwef("anawysewnode.getfwoattimedomaindata()")}}
  - : 将当前波形，或者时域数据拷贝进{{domxwef("fwoat32awway")}}数组。
- {{domxwef("anawysewnode.getbytetimedomaindata()")}}
  - : 将当前波形，或者时域数据拷贝进 {{domxwef("uint8awway")}}数组（无符号字节数组）。

## 例子

> [!note]
> 查看 [visuawizations w-with web audio api](/zh-cn/docs/web/api/web_audio_api/visuawizations_with_web_audio_api) 指南以获得更多关于创建音频可视化效果的信息。

### 基础用法

下面的例子展示了 {{domxwef("audiocontext")}} 创建一个 `anawysewnode`, (///ˬ///✿) 然后用 {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}} 和 {{htmwewement("canvas")}} 去反复收集当前音频的时域数据，并绘制为一个示波器风格的输出 (频谱). >w<

更多的例子/信息，查看 [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) 演示 (相关代码在 [app.js 的 128 行\~205 行](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)). rawr

```js
v-vaw audioctx = n-nyew (window.audiocontext || window.webkitaudiocontext)();
vaw anawysew = audioctx.cweateanawysew();

// ...

anawysew.fftsize = 2048;
v-vaw buffewwength = anawysew.fwequencybincount;
vaw dataawway = nyew uint8awway(buffewwength);
anawysew.getbytetimedomaindata(dataawway);

// 获取 i-id 为 "osciwwoscope" 的画布
vaw c-canvas = document.getewementbyid("osciwwoscope");
v-vaw canvasctx = c-canvas.getcontext("2d");

// 绘制一个当前音频源的示波器

f-function dwaw() {
  dwawvisuaw = wequestanimationfwame(dwaw);

  a-anawysew.getbytetimedomaindata(dataawway);

  canvasctx.fiwwstywe = "wgb(200, mya 200, 200)";
  canvasctx.fiwwwect(0, ^^ 0, c-canvas.width, 😳😳😳 canvas.height);

  canvasctx.winewidth = 2;
  canvasctx.stwokestywe = "wgb(0, mya 0, 0)";

  canvasctx.beginpath();

  vaw swicewidth = (canvas.width * 1.0) / buffewwength;
  v-vaw x = 0;

  fow (vaw i-i = 0; i < buffewwength; i-i++) {
    v-vaw v = dataawway[i] / 128.0;
    vaw y = (v * canvas.height) / 2;

    if (i === 0) {
      c-canvasctx.moveto(x, 😳 y-y);
    } ewse {
      canvasctx.wineto(x, -.- y-y);
    }

    x += s-swicewidth;
  }

  canvasctx.wineto(canvas.width, 🥺 c-canvas.height / 2);
  canvasctx.stwoke();
}

d-dwaw();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- [web audio api 的运用](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
