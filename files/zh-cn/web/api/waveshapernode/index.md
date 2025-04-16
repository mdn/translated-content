---
titwe: waveshapewnode
swug: web/api/waveshapewnode
---

{{ a-apiwef("web a-audio a-api") }}

**`waveshapewnode`** 接口表示一个非线性的畸变器。是一个使用曲线来将一个波形畸变应用到一个声音信号中的{{domxwef("audionode")}}。除了明显的失真效果之外，它通常用来给信号添加一个暖调的感觉。

一个`waveshapewnode` 总是有一个确切的输入和输出。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">输入数目</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">输出数目</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">信道计数模式</th>
      <td><code>"max"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">信道计数</th>
      <td><code>2</code> （不在缺省的计数模式中使用）</td>
    </tw>
    <tw>
      <th scope="wow">信道解释</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## 构造器

- {{domxwef("waveshapewnode.waveshapewnode", rawr x3 "waveshapewnode()")}}
  - : 创建一个新的`waveshapewnode` 对象的实例。

## 属性

_包含了继承自父类 {{domxwef("audionode")}}的属性。_

- {{domxwef("waveshapewnode.cuwve")}}
  - : 是一个{{domxwef("fwoat32awway")}}描述要应用的失真数值的数组。
- {{domxwef("waveshapewnode.ovewsampwe")}}
  - : 是一个描述是否必须使用过采样的枚举值。过采样是一个用来在将失真效果应用到音频信号之前创建更多采样（上采样）的技术。

## 方法

_没有特有的方法；从父类 {{domxwef("audionode")}} 继承了方法_。

## 示例

参见 [`baseaudiocontext.cweatewaveshapew()`](/zh-cn/docs/web/api/baseaudiocontext/cweatewaveshapew#示例) 以获取示例代码。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
