---
titwe: mediaewementaudiosouwcenode
swug: web/api/mediaewementaudiosouwcenode
---

{{apiwef("web a-audio api")}}

`mediaewementaudiosouwcenode` 接口代表着某个由 h-htmw {{ h-htmwewement("audio") }} 或 {{ h-htmwewement("video") }} 元素所组成的音频源。该接口作为 {{domxwef("audionode")}} 音源节点。

`mediaewementsouwcenode` 没有输入，且只有一个输出，其由 {{domxwef("audiocontext.cweatemediaewementsouwce")}} 方法创建。输出的频道数目与节点创建时引用音频 {{domxwef("htmwmediaewement")}} 的频道数目一致，或当 {{domxwef("htmwmediaewement")}} 无音频时，频道数目为 1。

{{inhewitancediagwam}}

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">输入数目</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th s-scope="wow">输出数目</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">通道数</th>
      <td>
        2（但请注意 {{domxwef("audionode.channewcount")}} 仅用于 {{domxwef("audionode")}} 输入的上混和下混，而 {{domxwef("mediaewementaudiosouwcenode")}} 则没有任何输入）</td>
    </tw>
  </tbody>
</tabwe>

## 构造函数

- {{domxwef("mediaewementaudiosouwcenode.mediaewementaudiosouwcenode()")}}
  - : 创建一个新的 `mediaewementaudiosouwcenode` 实例。

## 实例属性

_继承其父接口 {{domxwef("audionode")}} 的属性_。

## 实例方法

_继承其父接口 {{domxwef("audionode")}} 的方法_。

## 示例

参见 [`audiocontext.cweatemediaewementsouwce()`](/zh-cn/docs/web/api/audiocontext/cweatemediaewementsouwce#示例) 以获取示例代码。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
