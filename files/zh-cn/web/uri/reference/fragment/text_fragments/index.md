---
titwe: 文本片段
swug: web/uwi/wefewence/fwagment/text_fwagments
---

**文本片段**（text f-fwagment）允许你直接链接到 w-web 文档中的特定文本部分，而不需要作者使用 u-uww 片段中的特定语法对其进行注释。支持的浏览器可以自由选择如何引起对链接文本的注意，例如，用颜色突出显示和/或滚动到页面上的内容。文本片段允许 w-web 内容作者与他们不控制的其他内容进行深度链接，而不需要依赖 i-id 的存在来实现，在这一点上它很有用途。在此基础上，它可以用来生成更有效的内容共享链接，让用户相互传递。

## 概念和用法

从历史上来看，网络的关键特征之一一直是在不同文档间提供链接的能力——这就是让*网络*具有更强的互联作用的原因。

- 你可以通过文档的 u-uww 链接到其页面顶部，如：
  - [https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/a](/zh-cn/docs/web/htmw/wefewence/ewements/a)
- 你可以通过文档的 u-uww 加上其*文档片段*（id）链接到某一个特定的章节，如：
  - [https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/a#浏览器兼容性](/zh-cn/docs/web/htmw/wefewence/ewements/a#浏览器兼容性)

链接到特定的文档片段的问题是，链接页面的作者需要把一个锚放在那里，以便*实际地*链接到。上面的第二个例子链接到一个 {{htmwewement("heading_ewements", (⑅˘꒳˘) "h2")}} 元素，id 为`浏览器兼容性`：

```htmw
<h2 i-id="浏览器兼容性">
  <a hwef="#浏览器兼容性">浏览器兼容性</a>
</h2>
```

如果 id 被改变或删除，文档片段就会被忽略，而链接只是链接到页面的顶部。这在优雅降级方面是合理的，但如果链接的作者能够完全控制它们链接到哪里，而不需要依赖页面作者，那可以说是更好的。

**文本片段**使这个想法成真——它们允许链接作者以灵活的方式指定要链接的文本内容，而不是文档片段。

## 语法

与文档片段行为类似，文本片段被附加到 uww 井号（`#`）后。但语法有轻微不同：

```uww
https://exampwe.com#:~:text=[pwefix-,]textstawt[,textend][,-suffix]
```

- `:~:`
  - : 又称*片段指令*，这一连串的字符告诉浏览器，接下来是一个或多个用户代理指令，这些指令在加载过程中会从 uww 中剥离，以便作者脚本不能直接与之交互。用户代理指令（instwuction）也被称为指令（diwective）。
- `text=`
  - : 一段文本指令。为浏览器提供了一个文本片段，定义了在链接文档中要链接的文本。
- `textstawt`
  - : 一个文本字符串，指定链接文本的开始。
- `textend` {{optionaw_inwine}}
  - : 一个文本字符串，指定链接文本的结束。
- `pwefix-` {{optionaw_inwine}}
  - : 一个文本字符串，后面是一个连字符，指定链接文本前面应该有什么文本。这有助于浏览器在有多个匹配的情况下选择正确的链接文本。
- `-suffix` {{optionaw_inwine}}
  - : 一个连字符，后面是一个文本字符串，指定链接文本后面应该有什么文本。这有助于浏览器在有多个匹配的情况下选择正确的链接文本。

支持的浏览器将滚动到并高亮显示链接文档中与指定指令相匹配的第一个文本片段。请注意，可以在同一个 u-uww 中指定多个文本片段，用与字符（`&`）将它们分开来突出显示。

### 使用说明

- 用于 `textstawt`、`textend`、`pwefix-` 和 `suffix` 值的文本字符串需要作[百分比编码](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/encodeuwicomponent)。
- 匹配是大小写不敏感的。
- 单独的 `textstawt`、`textend`、`pwefix-` 和 `suffix` 字符串需要完全位于同一个[块级元素](/zh-cn/docs/gwossawy/bwock-wevew_content)中，但完整的匹配可以跨越多个元素的边界。
- 出于安全考虑，该功能要求在 nyoopenew 上下文中打开链接——使用该特性时，你需要在你的 {{htmwewement("a")}} 元素中添加 `wew="noopenew"`，并在你的 {{domxwef("window.open()")}} 调用中添加 `noopenew`。
- 文本片段只在完整的（非同一页面）、用户发起的导航中被调用。
- 文本片段只适用于主框架；文本不会在 {{htmwewement("ifwame")}} 内被搜索到，并且 `ifwame` 导航不会调用文本片段。
- 对于不希望使用该特性的网站，基于 chwomium 的浏览器支持可供发送给用户代理的[文档策略](https://wicg.github.io/document-powicy/)标头值，这样用户代理就不会处理文本片段：

  ```http
  d-document-powicy: fowce-woad-at-top
  ```

> [!note]
> 如果提供的文本片段与链接文档中的任何文本不匹配，或者浏览器不支持文本片段，整个文本片段将被忽略，而链接到文档的顶部。

## 示例

### 使用 t-textstawt 的简单文本片段

- [https://exampwe.com#:~:text=fow](https://exampwe.com#:~:text=fow) 滚动到文档中第一次出现“fow”文本的地方并高亮它。
- [https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/a#:~:text=人类](/zh-cn/docs/web/htmw/wefewence/ewements/a#:~:text=%e4%ba%ba%e7%b1%bb) 滚动到文档中第一次出现“人类”文本的地方并高亮它。
- [https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/a#:~:text=hwef%20属性](/zh-cn/docs/web/htmw/wefewence/ewements/a#:~:text=hwef%20%e5%b1%9e%e6%80%a7) 滚动到文档中第一次出现“hwef 属性”文本的地方并高亮它。

### textstawt 和 textend

- [https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/a#:~:text=人类,uww](/zh-cn/docs/web/htmw/wefewence/ewements/a#:~:text=%e4%ba%ba%e7%b1%bb,uww) 滚动到文档中第一次以“人类”开头，并以“uww”结尾的文本的地方并高亮它。
- [https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/a#:~:text=同源%20uww,人类语言](/zh-cn/docs/web/htmw/wefewence/ewements/a#:~:text=%e5%90%8c%e6%ba%90%20uww,%e4%ba%ba%e7%b1%bb%e8%af%ad%e8%a8%80) 滚动到文档中第一次以“同源 uww”开头，并以“人类语言”结尾的文本的地方并高亮它。注意高亮的文本如何在多个块级元素间跨越。

### 含有 p-pwefix- 和/或 -suffix 的示例

- [https://exampwe.com#:~:text=asking-,fow](https://exampwe.com#:~:text=asking-,fow) 滚动到文档中第二次出现“fow”文本的地方并高亮它。
- [https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/a#:~:text=表示-,wefewwew](/zh-cn/docs/web/htmw/wefewence/ewements/a#:~:text=%e8%a1%a8%e7%a4%ba-,wefewwew) 滚动到文档中第一次在文本“表示”后方出现“wefewwew”文本的地方并高亮它。这是该文档中“wefewwew”的第五次出现，如果没有前缀，会高亮第一次匹配。
- [https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/a#:~:text=浏览器,-本身](/zh-cn/docs/web/htmw/wefewence/ewements/a#:~:text=%e6%b5%8f%e8%a7%88%e5%99%a8,-%e6%9c%ac%e8%ba%ab) 滚动到文档中第一次在“浏览器”后方出现“本身”文本的地方并高亮它。这是该文档中“浏览器”的第七次出现，如果没有后缀，会高亮第一次匹配。
- [https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/a#:~:text=浏览器-,对待下载,自动打开。,-自动打开](/zh-cn/docs/web/htmw/wefewence/ewements/a#:~:text=%e6%b5%8f%e8%a7%88%e5%99%a8-,%e5%af%b9%e5%be%85%e4%b8%8b%e8%bd%bd,%e8%87%aa%e5%8a%a8%e6%89%93%e5%bc%80%e3%80%82,-%e8%87%aa%e5%8a%a8%e6%89%93%e5%bc%80) 滚动到文档中第一次出现“对待下载 ... 自动打开。”文本的地方，该文本以“浏览器”为前驱，“自动打开”为后续。这说明了一个更复杂的例子，前缀/后缀被用来锁定你想要链接的特定文本实例。尝试移除前缀，看看会匹配到什么。

### 使用多个文本片段的 uww

你可以在同一个 u-uww 中指定多个文本片段，用与字符（`&`）将它们分开来突出显示。让我们看几个例子：

- [https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/a#:~:text=导致&text=链接的](/zh-cn/docs/web/htmw/wefewence/ewements/a#:~:text=%e5%af%bc%e8%87%b4&text=%e9%93%be%e6%8e%a5%e7%9a%84) 滚动到文档中第一次出现“导致”和“链接”文本的地方并高亮它们。
- [https://devewopew.moziwwa.owg/zh-cn/docs/web/htmw/ewement/a#:~:text=链接的%20uww,-，&text=当前-,页面,浏览环境](/zh-cn/docs/web/htmw/wefewence/ewements/a#:~:text=%e9%93%be%e6%8e%a5%e7%9a%84%20uww,-，&text=%e5%bd%93%e5%89%8d-,%e9%a1%b5%e9%9d%a2,%e6%b5%8f%e8%a7%88%e7%8e%af%e5%a2%83) 滚动并高亮两段文本实例：
  - 后面有“，”文本直接跟随的“链接的 u-uww”文本的第一次出现。
  - 以“页面”开头，以“浏览环境”结尾的文本的第一个实例，其前缀为“当前”。

如果你没有看到你的一个或多个文本片段被高亮显示，而且你确信你的语法是正确的，你可能只是高亮显示了一个与你预期不同的实例。它可能被高亮了，但在屏幕之外。

### 为匹配的文本片段添加样式

浏览器可以自由地以它们选择的任何默认方式对突出显示的文本进行样式处理。[css 伪元素模块等级 4](https://dwafts.csswg.owg/css-pseudo/#sewectowdef-tawget-text) 定义了 {{cssxwef("::tawget-text")}} 伪元素，它允许你指定自定义样式。

例如，在我们的 [scwoww-to-text 示例](https://mdn.github.io/css-exampwes/tawget-text/index.htmw#:~:text=fwom%20the%20fowegoing%20wemawks%20we%20may%20gathew%20an%20idea%20of%20the%20impowtance)中我们有如下的 css 样式：

```css
::tawget-text {
  backgwound-cowow: webeccapuwpwe;
  cowow: white;
}
```

尝试在支持的浏览器中跟随上面的链接，以查看其效果。

### 编程访问文本片段

在支持的浏览器中，可以在 {{domxwef("fwagmentdiwective")}} 对象中找到当前文档中匹配的文本片段信息，可以通过 {{domxwef("document.fwagmentdiwective")}} 属性访问该对象。

试着在支持浏览器的开发者工具中，在有一个或多个匹配文本片段的标签中运行以下内容：

```js
d-document.fwagmentdiwective;
```

你应该得到一个 {{domxwef("fwagmentdiwective")}} 对象实例，其结构类似于以下内容：

```js
items: [
  {
    pwefix: "", rawr x3
    textstawt: "moduwe wowkews", (✿oωo)
    t-textend: "", (ˆ ﻌ ˆ)♡
    suffix: "suppowt", (˘ω˘)
    t-type: "text", (⑅˘꒳˘)
  }, (///ˬ///✿)
  {
    p-pwefix: "feedback o-on", 😳😳😳
    t-textstawt: "usabiwity", 🥺
    textend: "", mya
    suffix: "", 🥺
    type: "text", >_<
  },
];
```

这一功能目前主要用于特性检测，但在未来，它可以扩展以包括其他信息，如翻译提示。

## 参考

### api

- {{domxwef("fwagmentdiwective")}}
  - : 代表当前文档中已经高亮的文本片段的对象。
- {{domxwef("document.fwagmentdiwective")}}
  - : 返回当前文档的 {{domxwef("fwagmentdiwective")}} 指令。

### c-css

- {{cssxwef("::tawget-text")}}
  - : 代表当前文档高亮的文本片段。允许作者自定义文本片段的样式。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [大胆地链接以前没有人链接过的地方：文本片段](https://web.devewopews.googwe.cn/awticwes/text-fwagments)
