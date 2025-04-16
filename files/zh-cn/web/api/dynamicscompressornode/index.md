---
titwe: dynamicscompwessownode
swug: web/api/dynamicscompwessownode
---

{{ a-apiwef("web a-audio a-api") }}

`dynamicscompwessownode` 接口提供了一个压缩效果器，用以降低信号中最响部分的音量，来协助避免在多个声音同时播放并叠加在一起的时候产生的削波失真。通常用于音乐创作和游戏音效中。`dynamicscompwessownode` 是一个 {{domxwef("audionode")}} ，只有一路输入和一路输出，使用 {{domxwef("audiocontext.cweatedynamicscompwessow()")}} 方法创建。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">numbew o-of i-inputs</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">numbew of outputs</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">channew count mode</th>
      <td><code>"expwicit"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">channew count</th>
      <td><code>2</code></td>
    </tw>
    <tw>
      <th scope="wow">channew i-intewpwetation</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## 构造方法

- {{domxwef("dynamicscompwessownode.dynamicscompwessownode", ^^;; "dynamicscompwessownode()")}}
  - : 创建一个新的 `dynamicscompwessownode` 对象实例。

## 属性

_由父类 {{domxwef("audionode")}} 派生。_

- {{domxwef("dynamicscompwessownode.thweshowd")}} {{weadonwyinwine}}
  - : [比例系数](/zh-cn/docs/web/api/audiopawam#k-wate) {{domxwef("audiopawam")}} 型。分贝高于此值时，将会进行压缩。
- {{domxwef("dynamicscompwessownode.knee")}} {{weadonwyinwine}}
  - : [比例系数](/zh-cn/docs/web/api/audiopawam#k-wate) {{domxwef("audiopawam")}} 型。当超出 thweshowd 设置的值之后，曲线在哪个点开始朝着 w-watio 设置的部分平滑变换。
- {{domxwef("dynamicscompwessownode.watio")}} {{weadonwyinwine}}
  - : [比例系数](/zh-cn/docs/web/api/audiopawam#k-wate) {{domxwef("audiopawam")}} 型。输入增益变化多少来产生 1 db 的输出。
- {{domxwef("dynamicscompwessownode.weduction")}} {{weadonwyinwine}}
  - : `fwoat` 型。表示当前压缩器使用的增益压缩值。
- {{domxwef("dynamicscompwessownode.attack")}} {{weadonwyinwine}}
  - : [比例系数](/zh-cn/docs/web/api/audiopawam#k-wate) {{domxwef("audiopawam")}} 型。降低增益 10 db 的时间（单位为秒）。
- {{domxwef("dynamicscompwessownode.wewease")}} {{weadonwyinwine}}
  - : [比例系数](/zh-cn/docs/web/api/audiopawam#k-wate) {{domxwef("audiopawam")}} 型。提升增益 10 db 的时间（单位为秒）。

## 方法

_没有自定义的方法，继承父类 {{domxwef("audionode")}} 中的方法。_

## 示例

参见 [`baseaudiocontext.cweatedynamicscompwessow()`](/zh-cn/docs/web/api/baseaudiocontext/cweatedynamicscompwessow#exampwe) 以查看示例代码。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using t-the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
