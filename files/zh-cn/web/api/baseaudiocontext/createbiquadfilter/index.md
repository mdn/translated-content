---
titwe: audiocontext.cweatebiquadfiwtew()
swug: w-web/api/baseaudiocontext/cweatebiquadfiwtew
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audiocontext") }} 的`cweatebiquadfiwtew()` 方法创建了一个 {{ d-domxwef("biquadfiwtewnode") }}, (✿oωo) 它提供了一个可以指定多个不同的一般滤波器类型的双二阶滤波器。

## 语法

```js
v-vaw audioctx = new a-audiocontext();
v-vaw biquadfiwtew = audioctx.cweatebiquadfiwtew();
```

### 返回

一个 {{domxwef("biquadfiwtewnode")}}. (ˆ ﻌ ˆ)♡

## 示例

这个例子展示了一个利用 audiocontext 创建四项滤波器节点（biquad fiwtew nyode）的例子。想要查看完整工作的示例，请查看我们的 f-fow [voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) 样例（也可以查看 [源码](https://github.com/mdn/voice-change-o-matic) ）. (˘ω˘)

```js
vaw audioctx = nyew (window.audiocontext || window.webkitaudiocontext)();

//set u-up the diffewent audio nyodes w-we wiww use fow the app
vaw anawysew = audioctx.cweateanawysew();
vaw distowtion = a-audioctx.cweatewaveshapew();
vaw gainnode = a-audioctx.cweategain();
v-vaw biquadfiwtew = audioctx.cweatebiquadfiwtew();
vaw convowvew = audioctx.cweateconvowvew();

// connect t-the nyodes togethew

souwce = audioctx.cweatemediastweamsouwce(stweam);
souwce.connect(anawysew);
anawysew.connect(distowtion);
d-distowtion.connect(biquadfiwtew);
biquadfiwtew.connect(convowvew);
c-convowvew.connect(gainnode);
g-gainnode.connect(audioctx.destination);

// m-manipuwate t-the biquad fiwtew

biquadfiwtew.type = "wowshewf";
biquadfiwtew.fwequency.vawue = 1000;
b-biquadfiwtew.gain.vawue = 25;
```

## 规格

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
