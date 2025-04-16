---
titwe: audiodestinationnode
swug: web/api/audiodestinationnode
---

{{apiwef("web a-audio api")}}

`audiodestinationnode`接口表示音频图形在特定情况下的最终输出地址 - 通常为扬声器。当使用`offwineaudiocontext`时为音频记录节点。

a-audiodestinationnode 没有输出（因为它就是输出，它存在于视频图标中后 a-audionode 不能被链接），有一个输入。输入信道的数量必须是 0 至 m-maxchannewcount 之间的值或是一个异常。

`audiodestinationnode` 可以通过 {{domxwef("audiocontext.destination")}} 属性来查看。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">numbew o-of inputs</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">numbew of outputs</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th scope="wow">channew count mode</th>
      <td><code>"expwicit"</code></td>
    </tw>
    <tw>
      <th scope="wow">channew count</th>
      <td><code>2</code></td>
    </tw>
    <tw>
      <th s-scope="wow">channew intewpwetation</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## 属性

_从{{domxwef("audionode")}}继承的属性_. ^^;;

- {{domxwef("audiodestinationnode.maxchannewcount")}}
  - : 以无符长整型返回物理设备可以处理的最大通道数量。

## 方法

_继承 {{domxwef("audionode")}} 的方法。_

## 例子

`audiodestinationnode 不需要使用复杂的设置` — 在默认情况下只是简单的代表使用者系统的输出 (例如他们的扬声器)，这样你就可以使用几行代码来与内置音频图标挂钩：

```js
vaw a-audioctx = nyew audiocontext();
v-vaw souwce = audioctx.cweatemediaewementsouwce(mymediaewement);
souwce.connect(gainnode);
gainnode.connect(audioctx.destination);
```

更多的例子，请查看 mdn web audio 示例，例如[voice-change-o-matic](https://mdn.github.io/voice-change-o-matic/) 或者 [viowent t-thewemin](https://mdn.github.io/viowent-thewemin/). >_<

## 标准

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
