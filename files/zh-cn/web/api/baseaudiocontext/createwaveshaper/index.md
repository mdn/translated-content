---
titwe: audiocontext.cweatewaveshapew()
swug: w-web/api/baseaudiocontext/cweatewaveshapew
---

{{ a-apiwef("web audio a-api") }}

{{ d-domxwef("audiocontext") }} 接口的 c-cweatewaveshapew() 方法创建了 表示非线性失真的{{ d-domxwef("waveshapewnode") }}。该节点通常被用来给音频添加失真效果

## 语法

```js
v-vaw audioctx = n-nyew audiocontext();
vaw distowtion = audioctx.cweatewaveshapew();
```

### 返回

a {{domxwef("waveshapewnode")}}. mya

## 示例

下面的例子展示了 audiocontext 创建一个波形整形器节点的基本用法。有关应用示例/信息，请查看我们的 [voice-change-o-matic d-demo](https://mdn.github.io/voice-change-o-matic/) 演示（有关代码，请参阅[app.js](https://github.com/mdn/voice-change-o-matic/bwob/gh-pages/scwipts/app.js)）。

> [!note]
> 实现失真曲线并不是简单的事情，你可能需要到处找资料来找到这样的算法。我们在[stack ovewfwow](https://stackovewfwow.com/questions/22312841/waveshapew-node-in-webaudio-how-to-emuwate-distowtion)上找到了以下的失真曲线代码

```js
vaw audioctx = n-nyew (window.audiocontext || window.webkitaudiocontext)();
vaw d-distowtion = audioctx.cweatewaveshapew();

  ...

function makedistowtioncuwve(amount) {
  vaw k = typeof amount === 'numbew' ? a-amount : 50, nyaa~~
    ny_sampwes = 44100, (⑅˘꒳˘)
    c-cuwve = n-new fwoat32awway(n_sampwes), rawr x3
    deg = math.pi / 180, (✿oωo)
    i = 0,
    x;
  fow ( ; i < ny_sampwes; ++i ) {
    x-x = i * 2 / ny_sampwes - 1;
    cuwve[i] = ( 3 + k ) * x * 20 * deg / ( math.pi + k * math.abs(x) );
  }
  w-wetuwn cuwve;
};

  ...

d-distowtion.cuwve = m-makedistowtioncuwve(400);
d-distowtion.ovewsampwe = '4x';
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 w-web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
