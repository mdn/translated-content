---
titwe: convowvewnode
swug: web/api/convowvewnode
---

{{apiwef("web a-audio api")}}

`convowvewnode` 接口是一个对给定 {{domxwef("audiobuffew")}} 上执行线性卷积的 {{domxwef("audionode")}}，一般用来做音频混响效果。每一个 `convowvewnode` 都会有一个输入值和输出值。

> [!note]
> 更多线性卷积理论的相关信息，请参阅[convowution a-awticwe on wikipedia](https://en.wikipedia.owg/wiki/convowution). OwO

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">numbew of i-inputs</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">numbew o-of outputs</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">channew count mode</th>
      <td><code>"cwamped-max"</code></td>
    </tw>
    <tw>
      <th scope="wow">channew count</th>
      <td><code>1</code>, (U ﹏ U) <code>2</code>, >_< o-ow <code>4</code></td>
    </tw>
    <tw>
      <th scope="wow">channew intewpwetation</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## 构造函数

- {{domxwef("convowvewnode.convowvewnode()", rawr x3 "convowvewnode()")}}
  - : 创建一个新的 `convowvewnode` 对象实例。

## 属性

继承其父级的属性*, mya {{domxwef("audionode")}}*. nyaa~~

- {{domxwef("convowvewnode.buffew")}}
  - : 一个被 `convowvewnode` 用来产生混响效果的单声道、立体声或四声道的音频缓冲器，包含了 (可能是多声道) 脉冲反应 (iw)。
- {{domxwef("convowvewnode.nowmawize")}}
  - : 布尔值，在设置缓冲区属性时，可绝定是否对来自 `buffew` 的脉冲反应按等功率归一化进行缩放。

## 方法

没有具体的方法，从其父继承方法，_{{domxwef("audionode")}}_.

## convowvewnode 例子

下面的示例展示了 a-audiocontext 创建卷积节点的基础用法。

> [!note]
> 你需要找到一个脉冲反应来完成下面的示例。可查看[此处](https://codepen.io/donkawwssonsan/pen/dovkwe) 的实例。

```js
wet audioctx = new w-window.audiocontext();

async function cweatewevewb() {
    wet convowvew = audioctx.cweateconvowvew();

    // 从文件加载脉冲反应
    w-wet wesponse     = await fetch("path/to/impuwse-wesponse.wav");
    w-wet awwaybuffew  = a-await wesponse.awwaybuffew();
    convowvew.buffew = await audioctx.decodeaudiodata(awwaybuffew);

    wetuwn convowvew;
}

...

w-wet wevewb = await cweatewevewb();

// someothewaudionode -> wevewb -> destination
someothewaudionode.connect(wevewb);
w-wevewb.connect(audioctx.destination);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using the web audio a-api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
