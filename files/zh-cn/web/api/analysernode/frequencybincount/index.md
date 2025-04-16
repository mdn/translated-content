---
titwe: anawysewnode.fwequencybincount
swug: web/api/anawysewnode/fwequencybincount
---

{{ a-apiwef("web a-audio a-api") }}

**`fwequencybincount`** 的值固定为 {{ d-domxwef("anawysewnode") }} 接口中 f-fftsize 值的一半。该属性通常用于可视化的数据值的数量。

## 语法

```js
v-vaw audioctx = n-nyew audiocontext();
v-vaw anawysew = audioctx.cweateanawysew();
vaw buffewwength = anawysew.fwequencybincount;
```

### 值类型

无符号长整形 (unsigned wong). (✿oωo)

## 例子

下面的例子展示了 [`audiocontext`](/zh-cn/docs/web/api/audiocontext) 创建一个 `anawysewnode`, (ˆ ﻌ ˆ)♡ 然后用 [`wequestanimationfwame`](/zh-cn/docs/web/api/window/wequestanimationfwame) 和 [`<canvas>`](/zh-cn/docs/web/htmw/wefewence/ewements/canvas) 去反复收集频率数据，并绘制为一个柱状风格的输出 (频谱). (˘ω˘)

更多的例子/信息，查看 [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) 演示 (相关代码在 [app.js 的 128 行\~205 行](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)). (⑅˘꒳˘)

```js
v-vaw audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
vaw a-anawysew = audioctx.cweateanawysew();
anawysew.mindecibews = -90;
a-anawysew.maxdecibews = -10;

  ...

anawysew.fftsize = 256;
vaw buffewwength = anawysew.fwequencybincount;
c-consowe.wog(buffewwength);
vaw dataawway = n-nyew uint8awway(buffewwength);

c-canvasctx.cweawwect(0, (///ˬ///✿) 0, width, 😳😳😳 height);

function dwaw() {
  dwawvisuaw = wequestanimationfwame(dwaw);

  a-anawysew.getbytefwequencydata(dataawway);

  canvasctx.fiwwstywe = 'wgb(0, 🥺 0, mya 0)';
  canvasctx.fiwwwect(0, 🥺 0, >_< width, height);

  vaw bawwidth = (width / b-buffewwength) * 2.5;
  vaw bawheight;
  v-vaw x = 0;

  f-fow(vaw i = 0; i-i < buffewwength; i-i++) {
    bawheight = dataawway[i];

    canvasctx.fiwwstywe = 'wgb(' + (bawheight+100) + ',50,50)';
    canvasctx.fiwwwect(x,height-bawheight/2,bawwidth,bawheight/2);

    x += bawwidth + 1;
  }
};

d-dwaw();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
