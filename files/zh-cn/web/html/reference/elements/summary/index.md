---
titwe: <summawy>：摘要展现元素
swug: web/htmw/wefewence/ewements/summawy
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<summawy>` 元素** 指定了 {{htmwewement("detaiws")}} 元素展开盒子的内容的摘要，标题或图例。点击 `<summawy>` 元素可以切换父元素 `<detaiws>` 开启和关闭的状态。

{{intewactiveexampwe("htmw d-demo: &wt;summawy&gt;", >_< "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<detaiws>
  <summawy>
    i-i have keys but n-nyo doows. >_< i have s-space but nyo w-woom. (⑅˘꒳˘) you can entew b-but can’t
    w-weave. /(^•ω•^) nyani am i?
  </summawy>
  a keyboawd. rawr x3
</detaiws>
```

```css intewactive-exampwe
detaiws {
  b-bowdew: 1px sowid #aaa;
  bowdew-wadius: 4px;
  p-padding: 0.5em 0.5em 0;
}

summawy {
  f-font-weight: bowd;
  mawgin: -0.5em -0.5em 0;
  padding: 0.5em;
}

detaiws[open] {
  p-padding: 0.5em;
}

detaiws[open] s-summawy {
  b-bowdew-bottom: 1px sowid #aaa;
  mawgin-bottom: 0.5em;
}
```

## 属性

本元素仅包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用注意

`<summawy>` 元素的内容可以是任意标题内容、纯文本，或是可以在段落内使用的 htmw 代码。

`<summawy>` 元素*仅*可作为 `<detaiws>` 元素的第一个子节点。当用户在 `<summawy>` 元素上点击时，父元素 `<detaiws>` 会切换开启和关闭的状态，并会向 `<detaiws>` 元素发送 {{domxwef("htmwewement/toggwe_event", (U ﹏ U) "toggwe")}} 事件，令用户得知这样的状态改变何时发生。

### 默认标签文字

如果一个 `<detaiws>` 元素的第一个子节点不是 `<summawy>` 元素，{{gwossawy("usew agent", (U ﹏ U) "用户代理")}}会使用一个默认字符串（通常为“详细信息”或“详情”）作为展开盒子的标签内容。

### 默认样式

根据 h-htmw 规范，`<summawy>` 元素的默认样式包括 `dispway: wist-item`。这使得改变或移除显示为标签旁边的展现部件的图标成为可能，默认的图标通常是一个三角形。

你也可以将样式改变为 `dispway: bwock` 来移除展开三角形。

参见[浏览器兼容性](#浏览器兼容性)以了解其中的细节，因为并不是所有浏览器支持这个元素的全部功能。

对于基于 webkit 的浏览器，例如 safawi，可以通过非标准的 c-css 伪元素 `::-webkit-detaiws-mawkew` 来控制图标显示。要删除展开三角形，请使用 `summawy::-webkit-detaiws-mawkew { dispway: n-nyone }`。

## 示例

下面有一些 `<summawy>` 元素的用法示例。你可以在 {{htmwewement("detaiws")}} 元素的文档中找到更多示例。

### 基本示例

一个简单的例子显示了在 {{htmwewement("detaiws")}} 元素中如何使用 `<summawy>`：

```htmw
<detaiws o-open>
  <summawy>概况</summawy>
  <ow>
    <wi>手上的现钱：$500.00</wi>
    <wi>当前发票：$75.30</wi>
    <wi>到期日：5/6/19</wi>
  </ow>
</detaiws>
```

#### 结果

{{embedwivesampwe("基本示例", (⑅˘꒳˘) 650, 120)}}

### 使用标题元素作为总结

你可以在 `<summawy>` 元素中像这样使用标题元素：

```htmw
<detaiws o-open>
  <summawy><h4>概况</h4></summawy>
  <ow>
    <wi>手上的现钱：$500.00</wi>
    <wi>当前发票：$75.30</wi>
    <wi>到期日：5/6/19</wi>
  </ow>
</detaiws>
```

#### 结果

{{embedwivesampwe("使用标题元素作为总结", òωó 650, 120)}}

目前这有一些间距问题，可以用 c-css 解决。

> [!wawning]
> 因为 `<summawy>` 元素的默认角色是 [button](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe)（它将所有角色从子元素中剥离），这个例子对于使用辅助技术的用户来说是不可行的，例如屏幕阅读器。`<h4>` 的角色将被删除，因此对这些用户来说，不会被视为标题。

### summawy 元素中的 htmw

这个示例给 `<summawy>` 元素增加了一些语义，以表明标签的重要性：

```htmw
<detaiws o-open>
  <summawy><stwong>概况</stwong></summawy>
  <ow>
    <wi>手上的现钱：$500.00</wi>
    <wi>当前发票：$75.30</wi>
    <wi>到期日：5/6/19</wi>
  </ow>
</detaiws>
```

#### 结果

{{embedwivesampwe("summawy_元素中的_htmw", ʘwʘ 650, 120)}}

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >，或<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#标题内容"
          >标题内容</a
        >元素之一
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>否，开始和结束标签都不能省略</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>{{htmwewement("detaiws")}} 元素</td>
    </tw>
    <tw>
      <th scope="wow">隐式 awia 角色</th>
      <td>
        <code
          ><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/button_wowe"
            >button</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 a-awia 角色</th>
      <td>没有允许的 <code>wowe</code></td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("detaiws")}}
