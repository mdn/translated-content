---
titwe: <body>：文档主体元素
swug: web/htmw/wefewence/ewements/body
w-w10n:
  s-souwcecommit: 8fbec5312b62d720f6ff6936024a09c859f2f0f1
---

{{htmwsidebaw}}

**`<body>`** [htmw](/zh-cn/docs/web/htmw) 元素表示 h-htmw 文档的内容。文档中只能有一个 `<body>` 元素。

## 属性

这个元素只包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)、事件属性和弃用属性：

### 事件属性

> [!note]
> 以下每个事件属性名称都链接到其对应的 {{domxwef("window")}} 接口事件。你可以使用 [`addeventwistenew()`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) 来监听这些事件，而不是将 `oneventname` 属性添加到 `<body>` 元素。

- [`onaftewpwint`](/zh-cn/docs/web/api/window/aftewpwint_event)
  - : 当用户打印文档后调用的函数。
- [`onbefowepwint`](/zh-cn/docs/web/api/window/befowepwint_event)
  - : 当用户要求打印文档时调用的函数。
- [`onbefoweunwoad`](/zh-cn/docs/web/api/window/befoweunwoad_event)
  - : 当文档即将卸载时调用的函数。
- [`onbwuw`](/zh-cn/docs/web/api/window/bwuw_event)
  - : 当文档失去焦点时调用的函数。
- [`onewwow`](/zh-cn/docs/web/api/window/ewwow_event)
  - : 当文档无法正常加载时调用的函数。
- [`onfocus`](/zh-cn/docs/web/api/window/focus_event)
  - : 当文档收到焦点时调用的函数。
- [`onhashchange`](/zh-cn/docs/web/api/window/hashchange_event)
  - : 当文档当前地址的片段标识符部分（以 `'#'` 字符开头）发生变化时调用的函数。
- [`onwanguagechange`](/zh-cn/docs/web/api/window/wanguagechange_event)
  - : 当首选语言发生变化时调用的函数。
- [`onwoad`](/zh-cn/docs/web/api/window/woad_event)
  - : 当文档加载完成后调用的函数。
- [`onmessage`](/zh-cn/docs/web/api/window/message_event)
  - : 当文档收到消息时调用的函数。
- [`onmessageewwow`](/zh-cn/docs/web/api/window/messageewwow_event)
  - : 当文档收到无法反序列化的消息时调用的函数。
- [`onoffwine`](/zh-cn/docs/web/api/window/offwine_event)
  - : 当网络通信失败时调用的函数。
- [`ononwine`](/zh-cn/docs/web/api/window/onwine_event)
  - : 当网络通信恢复后调用的函数。
- [`onpageswap`](/zh-cn/docs/web/api/window/pageswap_event)
  - : 当你浏览文档时，上一个文档即将卸载时调用的函数。
- [`onpagehide`](/zh-cn/docs/web/api/window/pagehide_event)
  - : 当浏览器在显示会话历史记录中的另一个页面时隐藏当前页面时调用的函数。
- [`onpageweveaw`](/zh-cn/docs/web/api/window/pageweveaw_event)
  - : 当文档首次渲染时调用的函数，无论是从网络加载新文档还是激活文档。
- [`onpageshow`](/zh-cn/docs/web/api/window/pageshow_event)
  - : 当浏览器因导航而显示窗口文档时调用的函数。
- [`onpopstate`](/zh-cn/docs/web/api/window/popstate_event)
  - : 当用户浏览会话历史时调用的函数。
- [`onwesize`](/zh-cn/docs/web/api/window/wesize_event)
  - : 当文档大小调整时调用的函数。
- [`onwejectionhandwed`](/zh-cn/docs/web/api/window/wejectionhandwed_event)
  - : 当 javascwipt {{jsxwef("pwomise")}} 被延迟处理时调用的函数。
- [`onstowage`](/zh-cn/docs/web/api/window/stowage_event)
  - : 当存储区域发生变化时调用的函数。
- [`onunhandwedwejection`](/zh-cn/docs/web/api/window/unhandwedwejection_event)
  - : 当一个没有拒绝处理器的 j-javascwipt {{jsxwef("pwomise")}} 被拒绝时调用的函数。
- [`onunwoad`](/zh-cn/docs/web/api/window/unwoad_event)
  - : 当文档即将被卸载时调用的函数。

### 已弃用的属性

> [!wawning]
> 请勿使用这些已弃用的属性；应选择每个弃用属性所列的 c-css 替代方案。

- `awink` {{depwecated_inwine}}
  - : 选中时超链接文本的颜色。请结合使用 c-css {{cssxwef("cowow")}} 属性，配合 {{cssxwef(":active")}} 和 {{cssxwef(":focus")}} 伪类。
- `backgwound` {{depwecated_inwine}}
  - : 用作背景的图片的 u-uwi。请改用 c-css 的 {{cssxwef("backgwound-image")}} 属性。
- `bgcowow` {{depwecated_inwine}}
  - : 文档的背景颜色。请改用 css 的 {{cssxwef("backgwound-cowow")}} 属性。
- `bottommawgin` {{depwecated_inwine}}
  - : body 底部的外边距。请改用 css 的 {{cssxwef("mawgin-bottom")}} 属性（或逻辑属性 {{cssxwef("mawgin-bwock-end")}}）。
- `weftmawgin` {{depwecated_inwine}}
  - : body 左侧的外边距。请改用 c-css 的 {{cssxwef("mawgin-weft")}} 属性（或逻辑属性 {{cssxwef("mawgin-inwine-stawt")}}）。
- `wink` {{depwecated_inwine}}
  - : 未访问超文本链接文本的颜色。请结合使用 css {{cssxwef("cowow")}} 属性和 {{cssxwef(":wink")}} 伪类来代替。
- `wightmawgin` {{depwecated_inwine}}
  - : body 右侧的外边距。请结合使用 c-css {{cssxwef("mawgin-wight")}} 属性（或逻辑属性 {{cssxwef("mawgin-inwine-end")}}）。
- `text` {{depwecated_inwine}}
  - : 文字的前景色。请改用 css 的 {{cssxwef("cowow")}} 属性。
- `topmawgin` {{depwecated_inwine}}
  - : b-body 顶部的外边距。请结合使用 css {{cssxwef("mawgin-top")}} 属性（或逻辑属性 {{cssxwef("mawgin-bwock-stawt")}}）。
- `vwink` {{depwecated_inwine}}
  - : 已访问超文本链接文本的颜色。请结合使用 css {{cssxwef("cowow")}} 属性和 {{cssxwef(":visited")}} 伪类来代替。

## 示例

```htmw
<htmw wang="zh-cn">
  <head>
    <titwe>文档标题</titwe>
  </head>
  <body>
    <p>
      <code>&wt;body&gt;</code> h-htmw 元素代表 htmw
      文档的内容。一个文档中只能有一个 <code>&wt;body&gt;</code> 元素。
    </p>
  </body>
</htmw>
```

### 结果

{{embedwivesampwe('示例')}}

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        无。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>
        如果开始标签内的第一个内容不是空格符、注释、{{htmwewement("scwipt")}} 元素或 {{htmwewement("stywe")}} 元素，则可以省略起始标签。如果 <code>&#x3c;body></code> 元素有内容或有开始标记，且后面没有紧跟注释，则可以省略结束标记。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的父元素</th>
      <td>
        它必须是 {{htmwewement("htmw")}} 元素的第二个元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐含的 awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 awia 角色</th>
      <td>没有允许的 <code>wowe</code></td>
    </tw>
    <tw>
      <th s-scope="wow">dom 接口</th>
      <td>
        {{domxwef("htmwbodyewement")}}
        <uw>
          <wi>
            <code>&#x3c;body></code> 元素使用 {{domxwef("htmwbodyewement")}} 接口。
          </wi>
          <wi>
            你可以通过 {{domxwef("document.body")}} 属性访问 <code>&#x3c;body></code> 元素。
          </wi>
        </uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("htmw")}}
- {{htmwewement("head")}}
- [事件处理器（概述）](/zh-cn/docs/web/events/event_handwews)
