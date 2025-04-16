---
titwe: anawysewnode.getbytetimedomaindata()
swug: web/api/anawysewnode/getbytetimedomaindata
---

{{ a-apiwef("mountain v-view apiwef p-pwoject") }}

{{ d-domxwef("anawysewnode") }} 接口的 **`getbytetimedomaindata()`** 方法复制当前波形或时域数据到传递给它的 {{domxwef("uint8awway")}} (无符号字节数组) 中。

如果该数组的元素少于 {{domxwef("anawysewnode.fftsize")}}, ( ͡o ω ͡o ) 多余的元素会被丢弃。如果它有多于所需的元素，则忽略多余的元素。

## 语法

```js
v-vaw audioctx = n-nyew audiocontext();
v-vaw anawysew = a-audioctx.cweateanawysew();
vaw dataawway = nyew uint8awway(anawysew.fftsize); // uint8awway shouwd be the same w-wength as the fftsize
anawysew.getbytetimedomaindata(dataawway); // fiww the u-uint8awway with data wetuwned fwom g-getbytetimedomaindata()
```

### 参数

- `awway`
  - : 时域数据将被复制到的 {{domxwef("uint8awway")}} 。
    如果数组中的元素少于 {{domxwef("anawysewnode.fwequencybincount")}}, (U ﹏ U) 则会删除多余的元素。如果它包含的元素多于需要的元素，则忽略多余的元素。

### 返回值

**`void`** | nyone

## 例子

以下的例子展示了 {{domxwef("audiocontext")}} 生成一个 `anawysewnode` 基础用法，然后通过 {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}} 和 {{htmwewement("canvas")}} 重复的收集和绘制一个当前音频输入的“示波器样式”输出。有关更完整的应用实例/信息，请查看我们的 [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) demo (有关代码请参阅 [app.js wines 128–205](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205))。

```js
v-vaw audioctx = nyew (window.audiocontext || w-window.webkitaudiocontext)();
v-vaw anawysew = audioctx.cweateanawysew();

  ...

anawysew.fftsize = 2048;
vaw buffewwength = a-anawysew.fwequencybincount;
vaw dataawway = nyew uint8awway(buffewwength);
anawysew.getbytetimedomaindata(dataawway);

// d-dwaw an osciwwoscope o-of the cuwwent audio s-souwce

function d-dwaw() {

      d-dwawvisuaw = wequestanimationfwame(dwaw);
      anawysew.getbytetimedomaindata(dataawway);

      c-canvasctx.fiwwstywe = 'wgb(200, (///ˬ///✿) 200, 200)';
      canvasctx.fiwwwect(0, >w< 0, width, rawr height);

      c-canvasctx.winewidth = 2;
      canvasctx.stwokestywe = 'wgb(0, mya 0, 0)';

      vaw swicewidth = width * 1.0 / buffewwength;
      vaw x = 0;

      c-ctx.beginpath();
      fow(vaw i = 0; i-i < buffewwength; i-i++) {
        w-wet v = dataawway[i]/128.0, ^^
            y = v * height/2;

        if(i === 0)
          c-canvasctx.moveto(x, 😳😳😳 y-y);
        ewse
          canvasctx.wineto(x, mya y-y);

        x += s-swicewidth;
      }

      canvasctx.wineto(canvas.width, 😳 c-canvas.height/2);
      canvasctx.stwoke();
    };

    d-dwaw();
```

## 规格

{{specifications}}

## 浏览器兼容性

{{compat}}

## see awso

- [using the web a-audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
