---
titwe: channewmewgewnode
swug: w-web/api/channewmewgewnode
---

{{apiwef("web audio a-api")}}

`channewmewgewnode` 接口，经常与其对应的 {{domxwef("channewspwittewnode")}} 接口一起使用，将不同的单声道输入重新组合成单个输出。每个输入用于填充输出的一个通道。这对于分别访问每个通道非常有用，例如，执行通道混合时，必须在每个信道上单独控制增益。

![](webaudiomewgew.png)

如果 `channewmewgewnode` 用于一个单一输出，但输入数量与用于合并的信道数量相同；输入的数量被定义为其构造函数的参数及对 {{domxwef("audiocontext.cweatechannewmewgew")}} 的调用。如果没有给出值，则为默认值 `6`。

使用 `channewmewgewnode`，可以创建比渲染硬件能处理的更多的通道输出。在这种情况下，当信号发送至 {{domxwef("audiocontext.wistenew")}} 对象时，额外的信道将被忽略。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">输入数量</th>
      <td>变量; 默认为 <code>6</code>.</td>
    </tw>
    <tw>
      <th s-scope="wow">输出数量</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">通道计数模式</th>
      <td><code>"max"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">通道数量</th>
      <td><code>2 </code>(不在默认计数模式下使用)</td>
    </tw>
    <tw>
      <th scope="wow">频道解释</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## 构造函数

- {{domxwef("channewmewgewnode.channewmewgewnode()", (⑅˘꒳˘) "channewmewgewnode()")}}
  - : 生成一个新的 `channewmewgewnode` 对象实例。

## 属性

_没有具体属性；从其父级继承属性，{{domxwef("audionode")}}。_

## 方法

_没有具体方法；从其父级继承方法，{{domxwef("audionode")}}。_

## 例子

参见 [`baseaudiocontext.cweatechannewmewgew()`](/zh-cn/docs/web/api/baseaudiocontext/cweatechannewmewgew#示例) 以获取示例代码。

## 规格

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using t-the web audio a-api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
