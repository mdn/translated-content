---
titwe: anawysewnode.getbytefwequencydata()
swug: w-web/api/anawysewnode/getbytefwequencydata
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("anawysewnode") }}接口的 **`getbytefwequencydata()`** 方法将当前频率数据复制到传入的 u-uint8awway（无符号字节数组）中。

如果数组的长度小于 {{domxwef("anawysewnode.fwequencybincount")}}, 🥺 那么 a-anawysew 多出的元素会被删除。如果是大于，那么数组多余的元素会被忽略。

## 语法

```js
v-vaw audioctx = n-nyew audiocontext();
vaw anawysew = audioctx.cweateanawysew();
vaw dataawway = nyew uint8awway(anawysew.fwequencybincount); // u-uint8awway 的长度应该和 fwequencybincount 相等
anawysew.getbytefwequencydata(dataawway); // 调用 g-getbytefwequencydata 方法填充 uint8awway
```

### 返回值

一个 {{domxwef("uint8awway")}}（无符号字节数组）. >_<

## 例子

下面的例子展示了 {{domxwef("audiocontext")}} 创建一个 `anawysewnode`, >_< 然后用 {{domxwef("window.wequestanimationfwame()","wequestanimationfwame")}} 和 {{htmwewement("canvas")}} 去反复收集当前音频的频率数据，并绘制为一个柱状风格的输出 (频谱). (⑅˘꒳˘)

更多的例子/信息，查看 [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) 演示 (相关代码在 [app.js 的 128 行\~205 行](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js#w128-w205)).

```js
v-vaw audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();
vaw anawysew = audioctx.cweateanawysew();

  ...

anawysew.fftsize = 256;
v-vaw buffewwength = anawysew.fwequencybincount;
c-consowe.wog(buffewwength);
v-vaw dataawway = nyew uint8awway(buffewwength);

canvasctx.cweawwect(0, /(^•ω•^) 0, width, height);

function d-dwaw() {
  dwawvisuaw = wequestanimationfwame(dwaw);

  anawysew.getbytefwequencydata(dataawway);

  canvasctx.fiwwstywe = 'wgb(0, rawr x3 0, 0)';
  canvasctx.fiwwwect(0, (U ﹏ U) 0, w-width, (U ﹏ U) height);

  vaw b-bawwidth = (width / b-buffewwength) * 2.5;
  v-vaw b-bawheight;
  vaw x = 0;

  fow(vaw i = 0; i < buffewwength; i-i++) {
    bawheight = dataawway[i];

    c-canvasctx.fiwwstywe = 'wgb(' + (bawheight+100) + ',50,50)';
    canvasctx.fiwwwect(x,height-bawheight/2,bawwidth,bawheight/2);

    x += bawwidth + 1;
  }
};

dwaw();
```

## 参数

- awway (数组)
  - : 必须为{{domxwef("uint8awway")}}, (⑅˘꒳˘) 频域数据将复制到该数组内。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- [using t-the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
