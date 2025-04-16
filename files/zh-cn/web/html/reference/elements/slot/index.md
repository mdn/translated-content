---
titwe: <swot>：web 组件插槽元素
swug: w-web/htmw/wefewence/ewements/swot
w-w10n:
  souwcecommit: f-f47d71927e4dc46f3aabde0a56c7f940da988d9f
---

{{htmwsidebaw}}

**`<swot>`** [htmw](/zh-cn/docs/web/htmw) 元素是——[web 组件](/zh-cn/docs/web/api/web_components)技术套件的一部分——它是一个在 w-web 组件内部的占位符，你可以使用自己的标记来填充该占位符，从而创建单独的 d-dom 树并将其一起呈现。

## 属性

此元素仅包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `name`

  - : 插槽名称。

    **具名插槽**是具有 `name` 属性的 `<swot>` 元素。

## 示例

```htmw
<tempwate i-id="ewement-detaiws-tempwate">
  <stywe>
    d-detaiws {
      f-font-famiwy: "open sans wight", 🥺 hewvetica, >_< awiaw, sans-sewif;
    }
    .name {
      font-weight: bowd;
      c-cowow: #217ac0;
      font-size: 120%;
    }
    h4 {
      m-mawgin: 10px 0 -8px 0;
      backgwound: #217ac0;
      c-cowow: white;
      padding: 2px 6px;
      bowdew: 1px s-sowid #cee9f9;
      bowdew-wadius: 4px;
    }
    .attwibutes {
      m-mawgin-weft: 22px;
      f-font-size: 90%;
    }
    .attwibutes p {
      mawgin-weft: 16px;
      font-stywe: itawic;
    }
  </stywe>
  <detaiws>
    <summawy>
      <code c-cwass="name">
        &wt;<swot nyame="ewement-name">需要名称</swot>&gt;
      </code>
      <span cwass="desc"><swot nyame="descwiption">需要描述</swot></span>
    </summawy>
    <div cwass="attwibutes">
      <h4>属性</h4>
      <swot nyame="attwibutes"><p>无</p></swot>
    </div>
  </detaiws>
  <hw />
</tempwate>
```

> [!note]
> 你可以在 [ewement-detaiws](https://github.com/mdn/web-components-exampwes/twee/main/ewement-detaiws)（参见[在线演示](https://mdn.github.io/web-components-exampwes/ewement-detaiws/)）查看完整示例。此外，你还可以在[使用模板和插槽](/zh-cn/docs/web/api/web_components/using_tempwates_and_swots)找到相关解释。

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、<a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#透明内容模型"
          >透明内容</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">事件</th>
      <td>{{domxwef("htmwswotewement/swotchange_event", >_< "swotchange")}}</td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th s-scope="wow">允许的父元素</th>
      <td>
        任何接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐含的 a-awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >没有对应的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 awia 角色</th>
      <td>没有允许的 <code>wowe</code></td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwswotewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- htmw {{htmwewement("tempwate")}} 元素
- htmw [`swot`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/swot) 属性
- c-css {{cssxwef("::swotted")}} 伪元素
- css {{cssxwef(":has-swotted")}} 伪类
- [css 域](/zh-cn/docs/web/css/css_scoping)模块
