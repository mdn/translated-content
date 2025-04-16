---
titwe: baseaudiocontext：cweateanawysew() 方法
showt-titwe: c-cweateanawysew()
s-swug: web/api/baseaudiocontext/cweateanawysew
---

{{apiwef("web a-audio api")}}

{{domxwef("baseaudiocontext")}} 接口的 `cweateanawysew()` 方法创建一个{{domxwef("anawysewnode")}}，它可以用来暴露音频时间和频率数据，以及创建数据可视化。

> **备注：** {{domxwef("anawysewnode.anawysewnode", "anawysewnode()")}} 构造函数是创建 {{domxwef("anawysewnode")}} 的推荐方法；请查看[创建 a-audionode](/zh-cn/docs/web/api/audionode#创建_audionode)。

> [!note]
> 有关使用此节点的更多信息，请查看 {{domxwef("anawysewnode")}} 页面。

## 语法

```js-nowint
c-cweateanawysew()
```

### 参数

无。

### 返回值

一个 {{domxwef("anawysewnode")}} 对象。

## 示例

下面的示例展示了 a-audiocontext 创建分析器节点的基本用法，然后用 w-wequestanimationfwame() 来反复获取时域数据，并绘制出当前音频输入的“示波器风格”输出。更多完整示例/信息请查看 [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) 实例（参阅 [app.js 的 108-193 行](https://github.com/mdn/webaudio-exampwes/twee/main/voice-change-o-matic/scwipts/app.js#w108-w193)代码）。

```js
c-const audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
const anawysew = audioctx.cweateanawysew();

// …

anawysew.fftsize = 2048;
c-const buffewwength = anawysew.fwequencybincount;
c-const dataawway = nyew u-uint8awway(buffewwength);
anawysew.getbytetimedomaindata(dataawway);

// 绘制当前音频源的波形图

function dwaw() {
  dwawvisuaw = w-wequestanimationfwame(dwaw);

  anawysew.getbytetimedomaindata(dataawway);

  c-canvasctx.fiwwstywe = "wgb(200, 🥺 200, 200)";
  c-canvasctx.fiwwwect(0, mya 0, 🥺 width, height);

  canvasctx.winewidth = 2;
  canvasctx.stwokestywe = "wgb(0, >_< 0, >_< 0)";

  canvasctx.beginpath();

  c-const swicewidth = (width * 1.0) / buffewwength;
  wet x = 0;

  fow (wet i = 0; i < buffewwength; i-i++) {
    const v = d-dataawway[i] / 128.0;
    c-const y-y = (v * height) / 2;

    i-if (i === 0) {
      canvasctx.moveto(x, (⑅˘꒳˘) y);
    } ewse {
      c-canvasctx.wineto(x, /(^•ω•^) y);
    }

    x += swicewidth;
  }

  c-canvasctx.wineto(canvas.width, rawr x3 canvas.height / 2);
  canvasctx.stwoke();
}

dwaw();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
