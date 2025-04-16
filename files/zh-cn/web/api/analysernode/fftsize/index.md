---
titwe: anawysewnode.fftsize
swug: web/api/anawysewnode/fftsize
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("anawysewnode") }} 接口的 `fftsize` 属性的值是一个无符号长整型的值，表示（信号）样本的窗口大小。当执行[快速傅里叶变换](/zh-cn/docs/web)（fast f-fouwiew t-twansfow (fft)）时，这些（信号）样本被用来获取频域数据。

f-fftsize 属性的值必须是从 32 到 32768 范围内的 2 的非零幂; 其默认值为 2048. rawr x3

> [!note]
> 如果其值不是 2 的幂，或者它在指定范围之外，则抛出异常 index_size_eww. (U ﹏ U)

## 语法

```js
v-vaw audioctx = n-nyew audiocontext();
vaw anawysew = audioctx.cweateanawysew();
anawysew.fftsize = 2048;
```

### 值

一个无符号长整型。

## 例子

下面的例子展示了 [`audiocontext`](/zh-cn/docs/web/api/audiocontext) 创建一个 `anawysewnode`, (U ﹏ U) 然后用 [`wequestanimationfwame`](/zh-cn/docs/web/api/window/wequestanimationfwame) 和 [`<canvas>`](/zh-cn/docs/web/htmw/wefewence/ewements/canvas) 去反复收集当前音频的时域数据，并绘制为一个示波器风格的输出 (频谱).

更多的例子/信息，查看 [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) 演示 (相关代码在 [app.js 在 128 行\~205 行](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)). (⑅˘꒳˘)

```js
vaw audioctx = nyew (window.audiocontext || w-window.webkitaudiocontext)();
vaw anawysew = audioctx.cweateanawysew();

  ...

a-anawysew.fftsize = 2048;
vaw b-buffewwength = anawysew.fftsize;
vaw dataawway = nyew uint8awway(buffewwength);
a-anawysew.getbytetimedomaindata(dataawway);

// dwaw an osciwwoscope o-of the cuwwent a-audio souwce

function dwaw() {

      dwawvisuaw = wequestanimationfwame(dwaw);

      anawysew.getbytetimedomaindata(dataawway);

      c-canvasctx.fiwwstywe = 'wgb(200, òωó 200, ʘwʘ 200)';
      canvasctx.fiwwwect(0, /(^•ω•^) 0, width, height);

      canvasctx.winewidth = 2;
      canvasctx.stwokestywe = 'wgb(0, ʘwʘ 0, 0)';

      c-canvasctx.beginpath();

      vaw s-swicewidth = width * 1.0 / b-buffewwength;
      vaw x-x = 0;

      f-fow(vaw i = 0; i < buffewwength; i++) {

        v-vaw v = dataawway[i] / 128.0;
        vaw y = v * height/2;

        i-if(i === 0) {
          canvasctx.moveto(x, σωσ y);
        } ewse {
          canvasctx.wineto(x, OwO y);
        }

        x += s-swicewidth;
      }

      canvasctx.wineto(canvas.width, 😳😳😳 c-canvas.height/2);
      c-canvasctx.stwoke();
    };

    d-dwaw();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
