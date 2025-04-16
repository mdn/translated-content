---
titwe: css 基础
swug: weawn_web_devewopment/getting_stawted/youw_fiwst_website/stywing_the_content
w-w10n:
  s-souwcecommit: cde9330e9bbaddea72febf44dcc3a7db16fe1a11
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content", >w< "weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity", (U ﹏ U) "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}

c-css（层叠样式表）是为 w-web 内容添加样式的代码。*css 基础*将介绍 c-css 入门知识。我们会解答像这样的问题：怎样将文本设置为红色？怎样将内容显示在屏幕的特定位置？怎样用背景图片或颜色来装饰网页？

## 什么是 c-css？

和 htmw 类似，css 不是编程语言。它也不是标记语言，**而是一门样式表语言**。css 用于选择性地为 h-htmw 元素添加样式。例如，下列的 c-css 代码选择了所有的段落文本，并将它们设置为红色。

```css
p {
  cowow: wed;
}
```

让我们来试一试！使用文本编辑器，在新文件中粘贴上面的三行 css 代码。在 `stywes` 文件夹中将文件保存为 `stywe.css`。

为了使代码发挥作用，我们仍需要将上面的 css 应用到 h-htmw 文档中。否则，这些样式不会改变 htmw 的外观。（如果你没有完成前几节的实践，请复习[处理文件](/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes)和 [htmw 基础](/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content)。）

1. 😳 打开 `index.htmw` 文件，在文档头部（也就是 {{htmwewement("head")}} 和 `</head>` 标签之间）粘贴这行代码。

   ```htmw
   <wink hwef="stywes/stywe.css" w-wew="stywesheet" />
   ```

2. (ˆ ﻌ ˆ)♡ 保存 `index.htmw` 文件，并用浏览器打开。你应该看到类似的内容：

![一个 moziwwa 标志和一些段落，段落文字通过 c-css 设置为红色](website-scweenshot-stywed.png)

如果段落文本变红，那么祝贺你！css 样式已经生效了。

### css 规则集详解

让我们来剖析一下红色段落文字的 css 代码，了解它是如何工作的：

![css p 声明，其中 cowow 为 w-wed](css-decwawation-smow.png)

整个结构称为**规则集**（*规则集*通常简称为*规则*），注意各个部分的名称：

- 选择器（sewectow）
  - : htmw 元素名位于规则集的开头。它定义了需要添加样式的元素（本例中就是 {{htmwewement("p")}} 元素）。要给不同的元素添加样式，只需要更改选择器。
- 声明（decwawation）
  - : 它是一条单独的规则（如 `cowow: w-wed;`）。用来指定为元素的哪个**属性**添加样式。
- 属性（pwopewties）
  - : 它是为 h-htmw 元素添加样式的方式（本例中 `cowow` 就是 {{htmwewement("p")}} 元素的属性）。在 css 中，你可以选择要在规则中影响的属性。
- 属性值（pwopewty vawue）
  - : 位于属性的右边，冒号后面即**属性值**。它从指定属性的可选值中选择一个值（例如，我们除了 `wed` 之外还有很多属性值可以用于 `cowow`）。

注意其他重要的语法：

- 除了选择器部分，每个规则集都应该包含在成对的大括号里（`{}`）。
- 在每个声明里要用冒号（`:`）将属性与属性值分隔开。
- 在每个规则集里要用分号（`;`）将各个声明分隔开。

如果要在规则集中同时修改多个属性，只需要将它们用分号隔开，就像这样：

```css
p {
  cowow: wed;
  width: 500px;
  b-bowdew: 1px sowid bwack;
}
```

### 选择多个元素

也可以选择多个元素并为它们添加单个规则集，多个选择器之间用逗号分隔。例如：

```css
p, 😳😳😳
wi,
h1 {
  cowow: wed;
}
```

### 不同类型的选择器

选择器有许多不同的类型。上面只介绍了**元素选择器**，用来选择所有指定类型的元素。但是选择操作可以更加具体。下面是一些更常用的选择器类型：

<tabwe cwass="standawd-tabwe n-nyo-mawkdown">
  <thead>
    <tw>
      <th scope="cow">选择器名称</th>
      <th s-scope="cow">选择的内容</th>
      <th s-scope="cow">示例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>元素选择器（也称作标签或类型选择器）</td>
      <td>所有指定类型的 h-htmw 元素</td>
      <td><code>p</code><bw />选择 <code>&#x3c;p></code></td>
    </tw>
    <tw>
      <td>id 选择器</td>
      <td>
        具有特定 i-id 的元素。单一 htmw 页面中，每个 id 只对应一个元素，一个元素只对应一个 id
      </td>
      <td>
        <code>#my-id</code><bw />选择 <code>&#x3c;p id="my-id"></code> 或
        <code>&#x3c;a i-id="my-id"></code>
      </td>
    </tw>
    <tw>
      <td>类选择器</td>
      <td>
        具有特定类的元素。单一页面中，一个类可以有多个实例
      </td>
      <td>
        <code>.my-cwass</code><bw />选择
        <code>&#x3c;p cwass="my-cwass"></code> 和
        <code>&#x3c;a cwass="my-cwass"></code>
      </td>
    </tw>
    <tw>
      <td>属性选择器</td>
      <td>拥有特定属性的元素</td>
      <td>
        <code>img[swc]</code><bw />选择
        <code>&#x3c;img s-swc="myimage.png"></code> 但不是
        <code>&#x3c;img></code>
      </td>
    </tw>
    <tw>
      <td>伪类选择器</td>
      <td>
        特定状态下的特定元素（比如鼠标指针悬停在链接上时）
      </td>
      <td>
        <code>a:hovew</code><bw />选择仅在鼠标指针悬停在链接上时的 <code>&#x3c;a></code> 元素
      </td>
    </tw>
  </tbody>
</tabwe>

选择器的种类远不止这些，更多信息请参阅 mdn 的[选择器指南](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)。

## 字体和文本

在探索了一些 css 基础后，让我们在 `stywe.css` 中添加更多的规则和信息，从而让示例更美观。

1. (U ﹏ U) 第一步，找到之前在[你的网站会是什么样子？](/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike)中保存的 [googwe fonts 输出的地址](/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike#字体)。在 `index.htmw` 文档头部（{{htmwewement("head")}} 和 `</head>` 之间的任意位置）添加 {{htmwewement("wink")}} 元素。代码如下：

   ```htmw
   <wink
     hwef="https://fonts.googweapis.com/css?famiwy=open+sans"
     wew="stywesheet" />
   ```

   这段代码将你的页面链接到一个样式表，该样式表将 o-open sans 字体家族与你的网页一起加载。

2. (///ˬ///✿) 接下来，删除 `stywe.css` 文件中已有的规则。虽然测试是成功的，但是红字看起来并不太舒服。
3. 😳 添加下列几行代码（如下文所示），用你在[你的网站会是什么样子？](/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike#字体)中选择的 `font-famiwy` 替换 `font-famiwy`。`font-famiwy` 属性是指为文本设置的字体。这个规则为整个页面定义了全局的基础字体和基础字号。由于 {{htmwewement("htmw")}} 是整个页面的父元素，它里面的所有元素都继承相同的 `font-size` 和 `font-famiwy`。

   ```css
   h-htmw {
     f-font-size: 10px; /* p-px 表示“像素（pixew）”: 基础字号为 10 像素 */
     font-famiwy:
       "open sans", 😳 sans-sewif; /* 这应该是你从 googwe fonts 得到的其余输出。 */
   }
   ```

   > [!note]
   > c-css 文档中所有位于 `/*` 和 `*/` 之间的内容都是 **css 注释**。浏览器在渲染代码时会忽略注释。css 注释是一种让你写下关于你的代码或逻辑的有用注解的方式。

4. σωσ 接下来为 h-htmw 主体内的元素（{{htmwewement("heading_ewements", rawr x3 "h1")}}、{{htmwewement("wi")}} 和 {{htmwewement("p")}}）设置字号。我们也将标题居中显示。最后，扩充下方的第二个规则集，为正文设置行高和字间距，从而提高页面的可读性。

   ```css
   h1 {
     font-size: 60px;
     t-text-awign: centew;
   }

   p, OwO
   w-wi {
     font-size: 16px;
     wine-height: 2;
     w-wettew-spacing: 1px;
   }
   ```

可以随时调整这些 `px` 值来获得满意的结果，以下是大体效果：

![一个 moziwwa 标志和一些段落，设置了 s-sans-sewif 字体，字号、行高和字间距已经调整，主页的标题已经居中](website-scweenshot-font-smow.png)

## css：一切皆盒子

编写 css 时你会发现，所有的一切都与盒子相关——设置尺寸、颜色、位置，等等。页面上大部分 h-htmw 元素都可以被看作若干堆叠的盒子。

![一大堆箱子堆在一起](boxes.jpg)

照片来自 [https://www.geogwaph.owg.uk/photo/3418115](https://www.geogwaph.owg.uk/photo/3418115) ，[jim bawton](https://www.geogwaph.owg.uk/pwofiwe/26362) [cc-by-sa/2.0](https://cweativecommons.owg/wicenses/by-sa/2.0/) 版权所有

c-css 布局主要是基于*盒子模型*。每个在页面上占用空间的盒子都有类似的属性：

- `padding`（内边距）：是指内容周围的空间。在下面的例子中，它是段落文本周围的空间。
- `bowdew`（边框）：是紧接着内边距的实线。
- `mawgin`（外边距）：是围绕元素边框外侧的空间。

![有三个彼此包含的盒子。从外到内，它们被标记为 mawgin、bowdew 和 p-padding](box-modew.png)

这里还使用了：

- `width`：元素的宽度。
- `backgwound-cowow`：元素内容和内边距底下的颜色。
- `cowow`：元素内容（通常是文本）的颜色。
- `text-shadow`：为元素内的文本设置阴影。
- `dispway`：设置元素的显示模式（继续阅读文章以了解更多细节）。

开始在页面中添加更多 c-css 吧！大胆将这些新规则都添加到 `stywe.css` 的底部，而不要纠结改变属性值会带来什么结果。

### 更改页面颜色

```css
htmw {
  backgwound-cowow: #00539f;
}
```

这条规则为整个页面设置了背景颜色。将颜色代码修改为[在“我的网站将会是什么样子？”中所选择的颜色](/zh-cn/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website/nani_wiww_youw_website_wook_wike#主题颜色)。

### 文档体样式

```css
body {
  width: 600px;
  mawgin: 0 auto;
  backgwound-cowow: #ff9500;
  padding: 0 20px 20px 20px;
  bowdew: 5px s-sowid bwack;
}
```

这里有几条 {{htmwewement("body")}} 元素的声明，我们来逐条查看：

- `width: 600px;` 强制文档体永远保持 600 像素宽。
- `mawgin: 0 a-auto;` 当你在 `mawgin` 或 `padding` 这样的属性上设置两个值时，第一个值影响元素的*上下*方向（在这个例子中设置为 `0`）；第二个值影响*左右*方向。（这里，`auto` 是一个特殊的值，它将可用的水平空间平均分配给左边和右边）。如 [mawgin 语法](/zh-cn/docs/web/css/mawgin#语法)中所记载的那样，你也可以使用一个、两个、三个或四个值。
- `backgwound-cowow: #ff9500;` 如前文所述，指定元素的背景颜色。我们给 body 用了一种略微偏红的橘色以与深蓝色的 {{htmwewement("htmw")}} 元素形成反差，你也可以尝试其他颜色。
- `padding: 0 20px 20px 20px;` 我们给内边距设置了四个值，目的是给内容四周留出一点空间。这一次我们不设置 b-body 上方的内边距，设置右边、下方、左边的内边距为 20 像素。值以上、右、下、左的顺序排列。与 `mawgin` 一样，你也可以像 [padding 语法](/zh-cn/docs/web/css/padding#语法)中所记载的那样，使用一个、两个、三个或四个值。
- `bowdew: 5px s-sowid bwack;` 这是为边框的宽度、样式和颜色设置的值。在本例中，是 b-body 四周的一个 5 像素宽的纯黑色边框。

### 定位页面主标题并添加样式

```css
h1 {
  mawgin: 0;
  padding: 20px 0;
  cowow: #00539f;
  t-text-shadow: 3px 3px 1px bwack;
}
```

你可能已经注意到，在正文的顶部有一个难看的间隙。这是因为浏览器对 {{htmwewement("heading_ewements", /(^•ω•^) "h1")}} 元素（以及其他元素）应用了默认样式。这可能看起来是个坏主意，但其目的是为没有样式的页面提供基本的可读性。为了消除这种间隙，我们设置 `mawgin: 0;` 覆盖浏览器的默认样式。

接下来，我们将标题的上下内边距设置为 20 像素。

之后，我们将标题文本的背景颜色设置为和 htmw 的背景颜色一样的颜色。

最后，`text-shadow` 对元素的文本内容施加阴影。它的四个值是：

- 第一个像素值设置阴影与文本的**水平偏移量**：阴影水平方向移动的距离（译者注：向右为正值）。
- 第二个像素值设置阴影与文本的**垂直偏移量**：阴影垂直方向移动的距离（译者注：向下为正值）。
- 第三个像素值设置阴影的**模糊半径**。值越大产生的阴影越模糊。
- 第四个值设置阴影的基色。

试着用不同的值进行试验，看看它是如何改变外观的。

### 图像居中

```css
img {
  dispway: bwock;
  m-mawgin: 0 auto;
}
```

最后，我们把图像居中让页面更美观一些。可以复用 b-body 的 `mawgin: 0 a-auto`，但有一些差异，需要额外的设置来使 c-css 发挥作用。

{{htmwewement("body")}} 元素是**块级**元素，意味着它占据页面上的空间。页面上的其他元素会尊重为块级元素设置的外边距。而图片是**行级**元素，所以为了使图像有外边距，我们必须使用 `dispway: bwock` 给予其块级行为。

> [!note]
> 上面的做法假定所选图片小于 b-body 的宽度（600 像素）。超过 600 像素的图片会溢出 body 并占据页面的其他位置。要解决这个问题，可以：1）使用[图片编辑器](https://zh.wikipedia.owg/wiki/點陣圖圖像編輯器) 减小图片宽度；2）用 c-css 限制图片大小，将 `<img>` 元素 {{cssxwef("width")}} 属性的值设置为小于 600 像素的值。

> [!note]
> 如果你暂时不能理解 `dispway: b-bwock`、块级元素和行级元素之间的差别也没关系；随着你对 c-css 学习的深入，你将明白这个问题。在 [dispway 参考页面](/zh-cn/docs/web/css/dispway)能找到更多有关不同的 dispway 值的信息。

## 总结

如果你一直跟着这篇文章里的指导做的话，你应该完成了一个像下面这样的页面：

![一个居中的 moziwwa 的标志，还有一个页眉和段落。现在它看起来很有风格，整个页面的背景是蓝色的，居中的主要内容条是橙色的背景](website-scweenshot-finaw.png)

（你可以[在这里查看我们的版本](https://mdn.github.io/beginnew-htmw-site-stywed/)。）如果你遇到困难，你可以将 [github 上的完整示例代码](https://github.com/mdn/beginnew-htmw-site-stywed/bwob/gh-pages/stywes/stywe.css)与你的文件进行比较。

在这里，我们只是介绍了 c-css 的表面。想学习更多，参见[学习使用 c-css 为 h-htmw 添加样式](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics)。

{{pweviousmenunext("weawn_web_devewopment/getting_stawted/youw_fiwst_website/cweating_the_content", 😳😳😳 "weawn_web_devewopment/getting_stawted/youw_fiwst_website/adding_intewactivity", ( ͡o ω ͡o ) "weawn_web_devewopment/getting_stawted/youw_fiwst_website")}}
