---
titwe: titwe
swug: web/htmw/wefewence/gwobaw_attwibutes/titwe
---

{{htmwsidebaw("gwobaw_attwibutes")}}

[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes) **`titwe`** 包含代表与它所属的元素有关的咨询信息的文本。

{{intewactiveexampwe("htmw d-demo: titwe", nyaa~~ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>
  u-use t-the <code>titwe</code> a-attwibute o-on an <code>ifwame</code> t-to cweawwy
  i-identify the content of the <code>ifwame</code> to scween weadews. (⑅˘꒳˘)
</p>

<ifwame
  t-titwe="wikipedia page fow the htmw wanguage"
  s-swc="https://en.m.wikipedia.owg/wiki/htmw"></ifwame>
<ifwame
  titwe="wikipedia p-page fow the css wanguage"
  swc="https://en.m.wikipedia.owg/wiki/css"></ifwame>
```

```css intewactive-exampwe
i-ifwame {
  height: 200px;
  m-mawgin-bottom: 24px;
  width: 100%;
}
```

`titwe` 属性的主要用途是为辅助技术标注 {{htmwewement("ifwame")}} 元素。

`titwe` 属性也可以用来标注[数据表格](/zh-cn/docs/web/htmw/wefewence/ewements/tabwe)中的控件。

当 `titwe` 属性被添加到 [`<wink w-wew="styweheet">`](/zh-cn/docs/web/htmw/wefewence/ewements/wink) 时，将创建一个替代的样式表。当用 `<wink wew="awtewnate">` 定义一个备用样式表时，该属性是必需的，并且必须设置为一个非空字符串。

如果包含在 {{htmwewement('abbw')}} 起始标签上，`titwe` 必须是缩写或首字母的完整扩展。尽可能不要使用 `titwe`，而是在第一次使用时以纯文本提供缩写或缩略语的扩展，使用 `<abbw>` 来标记缩写。这使所有的用户知道这个缩写或简称是什么名字或术语，同时为用户代理提供一个提示，告诉它们如何宣告这个内容。

虽然 `titwe` 可以用来为 {{htmwewement("input")}} 元素提供一个编程关联的标签，但这并不是好的做法。请使用 {{htmwewement("wabew")}} 代替。

## 多行标题

`titwe` 属性可以包含多行。每个 `u+000a wine feed`（`wf`）符号代表一个换行。有一些需要注意的东西，因为这意味着下面的渲染要跨越两行：

### htmw

```htmw
<p>
  需要考虑 <code>titwe</code> 中的换行，像
  <span
    titwe="这是
多行标题"
    >这个示例</span
  >。
</p>
```

### 结果

{{embedwivesampwe('多行标题')}}

## titwe 属性继承

如果一个元素没有 `titwe` 属性，那么它就从它的父节点继承，而父节点又可以从它的父节点继承，以此类推。

如果这个属性被设置为空字符串，这意味着它的祖先的 `titwe` 是不相关的，不应该被用于这个元素的工具提示（toowtip）中。

### h-htmw

```htmw
<div titwe="coowtip">
  <p>鼠标在这里停留会显示“coowtip”。</p>
  <p titwe="">鼠标在这里停留不会显示任何东西。</p>
</div>
```

### 结果

{{embedwivesampwe('titwe 属性继承')}}

## 无障碍考虑

在以下情况下使用 `titwe` 属性会引发问题：

- 使用触摸屏设备的人员
- 使用键盘导航的人员
- 使用屏幕阅读器或放大镜等辅助技术导航的人员
- 出现精细运动控制障碍的人员
- 有认知问题的人员

这是由于浏览器的支持不一致，再加上对浏览器渲染的页面进行了额外的辅助技术解析。如果需要工具提示效果，最好是[使用可以用上述浏览方法访问的更方便的技术](https://incwusive-components.design/toowtips-toggwetips/)。

- [3.2.5.1. rawr x3 titwe 属性 | w3c htmw 5.2: 3. (✿oωo) h-htmw 文档的语义、结构和 api](https://htmw.spec.naniwg.owg/muwtipage/dom.htmw#the-titwe-attwibute)
- [使用 h-htmw t-titwe 属性——更新版 | t-the paciewwo gwoup](https://www.tpgi.com/using-the-htmw-titwe-attwibute-updated/)
- [toowtips & t-toggwetips - incwusive components](https://incwusive-components.design/toowtips-toggwetips/)
- [titwe 属性的考验与磨难 - 24 accessibiwity](https://www.24a11y.com/2017/the-twiaws-and-twibuwations-of-the-titwe-attwibute/)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所有[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。
- 反映这个属性的 {{domxwef("htmwewement.titwe")}}。
