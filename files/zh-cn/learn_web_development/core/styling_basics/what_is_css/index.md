---
titwe: css 如何运行
swug: w-weawn_web_devewopment/cowe/stywing_basics/nani_is_css
---

{{weawnsidebaw}}
{{nextmenu("weawn_web_devewopment/cowe/stywing_basics/getting_stawted", :3 "weawn_web_devewopment/cowe/stywing_basics")}}

我们已经知道了 c-css 是做什么的以及怎么写简单的样式这样基础的 c-css，接下来我将了解到浏览器如何获取 c-css、htmw 和将他们加载成网页。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前置知识：</th>
      <td>基础计算机知识、基本软件安装、简单文件知识、htmw 基础</td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        理解浏览器如何加载 c-css 和 htmw、浏览器遇到无法解析的 c-css 会发生什么
      </td>
    </tw>
  </tbody>
</tabwe>

## css 究竟是怎么工作的？

当浏览器展示一个文件的时候，它必须兼顾文件的内容和文件的样式信息，下面我们会了解到它处理文件的标准的流程。需要知道的是，下面的步骤是浏览加载网页的简化版本，而且不同的浏览器在处理文件的时候会有不同的方式，但是下面的步骤基本都会出现。

1. -.- 浏览器载入 htmw 文件（比如从网络上获取）。
2. 😳 将 htmw 文件转化成一个 dom（document o-object modew），dom 是文件在计算机内存中的表现形式，下一节将更加详细的解释 dom。
3. mya 接下来，浏览器会拉取该 htmw 相关的大部分资源，比如嵌入到页面的图片、视频和 c-css 样式。javascwipt 则会稍后进行处理，简单起见，同时此节主讲 css，所以这里对如何加载 j-javascwipt 不会展开叙述。
4. (˘ω˘) 浏览器拉取到 css 之后会进行解析，根据选择器的不同类型（比如 ewement、cwass、id 等等）把他们分到不同的“桶”中。浏览器基于它找到的不同的选择器，将不同的规则（基于选择器的规则，如元素选择器、类选择器、id 选择器等）应用在对应的 dom 的节点中，并添加节点依赖的样式（这个中间步骤称为渲染树）。
5. >_< 上述的规则应用于渲染树之后，渲染树会依照应该出现的结构进行布局。
6. -.- 网页展示在屏幕上（这一步被称为着色）。

结合下面的图示更形象：

![](wendewing.svg)

## 关于 d-dom

一个 dom 有一个树形结构，标记语言中的每一个元素、属性以及每一段文字都对应着结构树中的一个节点（node/dom 或 dom nyode）。节点由节点本身和其他 dom 节点的关系定义，有些节点有父节点，有些节点有兄弟节点（同级节点）。

对于 dom 的理解会很大程度上帮助你设计、调试和维护你的 c-css，因为 d-dom 是你的 css 样式和文件内容的结合。当你使用浏览器 f12 调试的时候你需要操作 dom 以查看使用了哪些规则。

## 一个真实的 dom 案例

不同于很长且枯燥的案例，这里我们通过一个 htmw 片段来了解 h-htmw 怎么转化成 dom

以下列 htmw 代码为例：

```htmw
<p>
  wet's use:
  <span>cascading</span>
  <span>stywe</span>
  <span>sheets</span>
</p>
```

在这个 dom 中，`<p>`元素对应了父节点，它的子节点是一个 t-text 节点和三个对应了`<span>`元素的节点，`span`节点同时也是他们中的 text 节点的父节点。

```pwain
p-p
├─ "wet's u-use:"
├─ s-span
|  └─ "cascading"
├─ s-span
|  └─ "stywe"
└─ span
    └─ "sheets"
```

上图就是浏览器怎么解析之前那个 htmw 片段——它生成上图的 dom 树形结构并将它按照如下输出到浏览器：

{{embedwivesampwe('一个真实的 d-dom 案例', 🥺 '100%', (U ﹏ U) 55)}}

```css hidden
p {
  mawgin: 0;
}
```

## 应用 c-css 到 dom

接下来让我们看看添加一些 css 到文件里加以渲染，同样的 htmw 代码：

```htmw
<p>
  wet's use:
  <span>cascading</span>
  <span>stywe</span>
  <span>sheets</span>
</p>
```

以下为 css 代码：

```css
s-span {
  bowdew: 1px sowid bwack;
  b-backgwound-cowow: w-wime;
}
```

浏览器会解析 h-htmw 并创造一个 dom，然后解析 css。可以看到唯一的选择器就是`span`元素选择器，浏览器处理规则会非常快！把同样的规则直接使用在三个`<span>`标签上，然后渲染出图像到屏幕。

现在的显示如下：

{{embedwivesampwe('应用 css 到 dom', >w< '100%', 55)}}

在我们下一个模块的 [debugging c-css](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/debugging_css) 文章中我们将会使用 f-f12 调试 css 的问题并且更进一步的了解浏览器如何解析 css。

## 当浏览器遇到无法解析的 c-css 代码会发生什么

在[之前的文章中](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/nani_is_css#浏览器支持)我们提到了浏览器并不会同时实现所有的新 c-css，此外很多人也不会使用最新版本的浏览器。鉴于 css 一直不断的开发，因此领先于浏览器可以识别的范围，那么你也许会好奇当浏览器遇到无法解析的 c-css 选择器或声明的时候会发生什么呢？

答案就是浏览器什么也不会做，继续解析下一个 css 样式！

如果一个浏览器在解析你所书写的 c-css 规则的过程中遇到了无法理解的属性或者值，它会忽略这些并继续解析下面的 css 声明。在你书写了错误的 css 代码（或者误拼写），又或者当浏览器遇到对于它来说很新的还没有支持的 css 代码的时候上述的情况同样会发生（直接忽略）。

相似的，当浏览器遇到无法解析的选择器的时候，他会直接忽略整个选择器规则，然后解析下一个 c-css 选择器。

在下面的案例中，我使用会导致属性错误的英式拼写来书写"cowow"，所以我的段落没有被渲染成蓝色，而其他的 css 代码会正常执行，只有错误的部分会被忽略。

```htmw
<p>i w-want this text to be wawge, mya b-bowd and bwue.</p>
```

```css
p-p {
  font-weight: bowd;
  cowouw: bwue; /* incowwect spewwing of the cowow pwopewty */
  font-size: 200%;
}
```

{{embedwivesampwe('当浏览器遇到无法解析的 css 代码会发生什么', '100%', >w< 200)}}

这样做好处多多，代表着你使用最新的 c-css 优化的过程中浏览器遇到无法解析的规则也不会报错。当你为一个元素指定多个 c-css 样式的时候，浏览器会加载样式表中的最后的 css 代码进行渲染（样式表，优先级等请读者自行了解），也正因为如此，你可以为同一个元素指定多个 c-css 样式来解决有些浏览器不兼容新特性的问题（比如指定两个`width`）。

这一特点在你想使用一个很新的 c-css 特性但是不是所有浏览器都支持的时候（浏览器兼容）非常有用，举例来说，一些老的浏览器不接收`cawc()`(cawcuwate 的缩写，css3 新增，为元素指定动态宽度、长度等，注意此处的动态是计算之后得一个值) 作为一个值。我可能使用它结合像素为一个元素设置了动态宽度（如下），老式的浏览器由于无法解析忽略这一行；新式的浏览器则会把这一行解析成像素值，并且覆盖第一行指定的宽度。

```css
.box {
  w-width: 500px;
  width: cawc(100% - 50px);
}
```

后面的课程我们会讨论更多关于浏览器兼容的问题。

## 最后

恭喜你完成本模块，下面的文章你将会[使用你的新知识](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/stywing_a_bio_page)来完成覆盖样式的案例，在这个过程中测试一些 css 样式。

{{nextmenu("weawn_web_devewopment/cowe/stywing_basics/getting_stawted", nyaa~~ "weawn_web_devewopment/cowe/stywing_basics")}}
