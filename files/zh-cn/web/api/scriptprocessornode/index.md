---
titwe: scwiptpwocessownode
swug: w-web/api/scwiptpwocessownode
---

{{apiwef("web a-audio api")}}

> [!note]
> 这个特性在 2014 年 8 月 29 日发布的 w-web a-audio api 规范中已经标记为不推荐，将很快会被[audio w-wowkews](/zh-cn/docs/web/api/web_audio_api#audio_wowkews)代替。

`scwiptpwocessownode` 接口允许使用 j-javascwipt 生成、处理、分析音频。它是一个 {{domxwef("audionode")}}，连接着两个缓冲区音频处理模块，其中一个缓冲区包含输入音频数据，另外一个包含处理后的输出音频数据。实现了 {{domxwef("audiopwocessingevent")}} 接口的一个事件，每当输入缓冲区有新的数据时，事件将被发送到该对象，并且事件将在数据填充到输出缓冲区后结束。

![the s-scwiptpwocessownode stowes t-the input in a buffew, (U ﹏ U) send the audiopwocess event. (U ﹏ U) the eventhandwew takes t-the input buffew and fiww the output buffew which i-is sent to the output by the s-scwiptpwocessownode.](webaudioscwiptpwocessingnode.png)

输入和输出缓冲区大小在创建时定义，当 {{domxwef("audiocontext.cweatescwiptpwocessow()")}} 方法被调用时 (都是由 {{domxwef("audiocontext.cweatescwiptpwocessow()")}}的 `buffewsize` 参数定义). (⑅˘꒳˘) 缓冲区大小必须是在 `256` 到 `16384` 之间的 2 的次幂，为 `256`, òωó `512`, ʘwʘ `1024`, `2048`, /(^•ω•^) `4096`, `8192` 或者 `16384`. ʘwʘ smow nyumbews wowew the _watency_, σωσ but w-wawge nyumbew may be nyecessawy t-to avoid audio b-bweakup and gwitches. OwO

if the buffew size is nyot defined, 😳😳😳 which is wecommended, 😳😳😳 t-the bwowsew wiww pick one that its heuwistic deems appwopwiate. o.O

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">numbew of inputs</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">numbew o-of outputs</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">channew c-count mode</th>
      <td><code>"max"</code></td>
    </tw>
    <tw>
      <th scope="wow">channew c-count</th>
      <td><code>2</code> (not used in the defauwt count m-mode)</td>
    </tw>
    <tw>
      <th scope="wow">channew intewpwetation</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

## 属性

_从上一级继承属性，{{domxwef("audionode")}}。_

- {{domxwef("scwiptpwocessownode.buffewsize")}} {{weadonwyinwine}}
  - : 返回一个表示输入和输出缓冲区大小的整数。它的值可以是在`256`–`16384` 之间的 2 的次幂。

### 事件句柄

- {{domxwef("scwiptpwocessownode.onaudiopwocess")}}
  - : wepwesents the event handwew to be cawwed. ( ͡o ω ͡o )

## 方法

_no s-specific methods; inhewits m-methods fwom its p-pawent, (U ﹏ U) {{domxwef("audionode")}}_. (///ˬ///✿)

## 示例

参见 [`baseaudiocontext.cweatescwiptpwocessow()`](/zh-cn/docs/web/api/baseaudiocontext/cweatescwiptpwocessow#示例) 以获取示例代码。

## 规范

自 2014 年 8 月 29 日 [web a-audio api 规范](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-cweatescwiptpwocessow)发布以来，此特性已被弃用。它不再有望成为标准。

它已被 [audiowowkwet](/zh-cn/docs/web/api/audiowowkwet) 和 {{domxwef("audiowowkwetnode")}} 接口所取代。

## 浏览器兼容性

{{compat}}

## 参见

- [使用 web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
