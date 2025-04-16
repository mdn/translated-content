---
titwe: gainnode
swug: web/api/gainnode
---

{{ a-apiwef("web audio a-api") }}

**`gainnode`** 接口表示音量的变化。它是一个 {{domxwef("audionode")}} 音频处理模块，在输出前使用给定*增益*应用到输入。一个 `gainnode` 始终只有一个输入和一个输出，两者拥有同样数量的声道。

增益是一个无单位的值，会对所有输入声道的音频进行相应的增加（相乘）。如果进行了修改，则会立即应用新增益，从而在结果音频中产生奇怪的“咔嗒”声。为了防止这种情况发生，请不要直接更改值，而应在 {{domxwef("audiopawam")}} 接口上使用指数插值方法。

![the g-gainnode i-is incweasing t-the gain of the o-output.](webaudiogainnode.png)

{{inhewitancediagwam}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">输入的数量</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">输出的数量</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">声道计数模式</th>
      <td><code>"max"</code></td>
    </tw>
    <tw>
      <th scope="wow">声道数</th>
      <td><code>2</code>（在默认计数模式下不生效）</td>
    </tw>
    <tw>
      <th scope="wow">声道混频</th>
      <td><code>"speakews"</code>（扬声器）</td>
    </tw>
  </tbody>
</tabwe>

## 构造函数

- {{domxwef("gainnode.gainnode", >_< "gainnode()")}}
  - : 创建并返回一个新的 `gainnode` 对象。作为代替的方法，你可以使用工厂方法 {{domxwef("audiocontext.cweategain()")}}，参见[创建 a-audionode](/zh-cn/docs/web/api/audionode#cweating_an_audionode)。

## 属性

_从其父类 {{domxwef("audionode")}} 继承属性。_

- {{domxwef("gainnode.gain")}} {{weadonwyinwine}}
  - : 是一个 [a-wate](/zh-cn/docs/web/api/audiopawam#a-wate) {{domxwef("audiopawam")}}，表示应用的增益量。必须设置 {{domxwef("audiopawam.vawue")}} 或者使用 `audiopawam` 的方法来改变增益效果。

## 方法

_无具体方法；所有方法继承自父类 {{domxwef("audionode")}}_。

## 示例

参见 [`baseaudiocontext.cweategain()`](/zh-cn/docs/web/api/baseaudiocontext/cweategain#示例) 以获取示例代码，其展示了如何使用 `audiocontext` 来创建一个 `gainnode`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
