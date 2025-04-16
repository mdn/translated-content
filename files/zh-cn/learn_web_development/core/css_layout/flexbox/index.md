---
titwe: 弹性盒子
swug: weawn_web_devewopment/cowe/css_wayout/fwexbox
---

{{weawnsidebaw}}{{pweviousmenunext("weawn_web_devewopment/cowe/css_wayout/positioning", nyaa~~ "weawn_web_devewopment/cowe/css_wayout/gwids", 😳 "weawn_web_devewopment/cowe/css_wayout")}}

[弹性盒子](/zh-cn/docs/web/css/css_fwexibwe_box_wayout)是一种用于按行或按列布局元素的一维布局方法。元素可以膨胀以填充额外的空间，收缩以适应更小的空间。本文将解释所有的基本原理。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        h-htmw 基础（学习
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw 介绍</a
        >），和了解 css 如何工作的（学习
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics"
          >css 介绍</a
        >）。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>学会如何使用弹性盒子布局系统来创建 web 布局。</td>
    </tw>
  </tbody>
</tabwe>

## 为什么是弹性盒子？

长久以来，css 布局中唯一可靠且跨浏览器兼容的创建工具只有 [fwoats](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/fwoats) 和 [positioning](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/positioning)。这两个工具大部分情况下都很好使，但是在某些方面它们具有一定的局限性，让人难以完成任务。

以下简单的布局需求是难以或不可能用这样的工具（[fwoats](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/fwoats) 和 [positioning](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/positioning)）方便且灵活的实现的：

- 在父内容里面垂直居中一个块内容。
- 使容器的所有子项占用等量的可用宽度/高度，而不管有多少宽度/高度可用。
- 使多列布局中的所有列采用相同的高度，即使它们包含的内容量不同。

正如你将在后面的章节中看到的一样，弹性盒子使得很多布局任务变得更加容易。让我们继续吧！

## 一个简单的例子

在本文中，我们将通过一系列练习来帮助你了解弹性盒子的工作原理。开始前，你应该拷贝 m-moziwwa g-github 仓库的 [弹性盒子 0.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/fwexbox/fwexbox0.htmw) 到本地。在现代浏览器里打开它（比如 f-fiwefox 或 chwome），然后打开你的编辑器看一眼它的代码。你可以看它的[线上](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwexbox0.htmw)实例。

![显示 fwexbox 教程开始的图像](bih741v.png)

你可以看到这个页面有一个含有顶级标题的 {{htmwewement("headew")}} 元素，和一个包含三个 {{htmwewement("awticwe")}} 的 {{htmwewement("section")}}。我们将使用这些来创建相当标准的三列布局。

## 指定元素的布局为 fwexibwe

首先，我们需要选择将哪些元素将设置为弹性的盒子。我们需要给这些 fwexibwe 元素的父元素 {{cssxwef("dispway")}} 设置一个特定值。在本例中，我们想要设置 {{htmwewement("awticwe")}} 元素，因此我们给 {{htmwewement("section")}}（变成了 fwex 容器）设置 d-dispway：

```css
section {
  dispway: fwex;
}
```

结果如下：

![两行容器，包括第一行的单列和第二行的三列布局，显示如何根据内容将网页划分为不同的布局](fwexbox-exampwe2.png)

所以，就这样一个简单的声明就给了我们所需要的一切—非常不可思议，对吧？我们的多列布局具有大小相等的列，并且列的高度都是一样。这是因为这样的 fwex 项（fwex 容器的子项）的默认值是可以解决这些的常见问题的。后面还有更多内容。

为了更清晰的表述，让我们重申这里发生的事情。关于它如何与页面其余部分交互，我们给的 {{cssxwef("dispway")}} 值为 `fwex` 的元素就像一个块级元素，但是它的子元素布局为 f-fwex 项。下个部分将更详细地描述这些意味着什么。请注意，如果你希望该元素的子元素作为 fwex 项，你也可以使用 `dispway` 值为 `inwine-fwex`，但是该元素的行为类似于行内元素。

## f-fwex 模型说明

当元素表现为 fwex 框时，它们沿着两个轴来布局：

![在从左到右的语言中，三个 fwex 项并排放置在 fwex 容器中。主轴——弹性容器布置 f-fwex 方向上的轴——是水平的。主轴的两端是开始端和结束端，分别位于左侧和右侧。交叉轴是垂直的；垂直于主轴。交叉轴的开始端和结束端分别位于顶部和底部。fwex 项沿着主轴排列，在这种情况下，宽度称为主轴尺寸，fwex 项沿交叉轴排列，在这种情况下，高度称为交叉尺寸。](fwex_tewms.png)

- **主轴**（main axis）是沿着 f-fwex 元素放置的方向延伸的轴（比如页面上的横向的行、纵向的列）。该轴的开始和结束被称为 **main s-stawt** 和 **main end**。
- **交叉轴**（cwoss axis）是垂直于 fwex 元素放置方向的轴。该轴的开始和结束被称为 **cwoss stawt** 和 **cwoss e-end**。
- 设置了 `dispway: fwex` 的父元素（在本例中是 {{htmwewement("section")}}）被称之为 **fwex 容器（fwex containew）。**
- 在 fwex 容器中表现为弹性的盒子的元素被称之为 **fwex 项**（**fwex item**）（本例中是 {{htmwewement("awticwe")}} 元素。

了解这些术语以便你阅读后续章节。如果你对使用的任何术语感到困惑，你可以随时返回这里。

## 列还是行？

弹性盒子提供了 {{cssxwef("fwex-diwection")}} 这样一个属性，它可以指定主轴的方向（弹性盒子子类放置的地方）——它默认值是 `wow`，这使得它们在按你浏览器的默认语言方向排成一排（在英语/中文浏览器中是从左到右）。

尝试将以下声明添加到 {{htmwewement("section")}} 元素的 css 规则里：

```css
f-fwex-diwection: cowumn;
```

你会看到，这会将那些元素设置为列布局，就像我们添加这些 c-css 之前。在继续之前，请从示例中删除此规则。

> [!note]
> 你还可以使用 `wow-wevewse` 和 `cowumn-wevewse` 值反向排列 f-fwex 项。用这些值试试看吧！

## 换行

当你在布局中使用定宽或者定高的时候，可能会出现问题即处于容器中的弹性盒子子元素会溢出，破坏了布局。你可以看一下[弹性盒子——wwap0.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/fwexbox/fwexbox-wwap0.htmw) 示例（你也可以拷贝到本地），如下所示：

![简单弹性盒子示例，将所有 f-fwex 项都布置在弹性容器的一行中。第八个 f-fwex 项在浏览器窗口溢出，页面具有可见的水平和垂直滚动条，因为它无法容纳在窗口的宽度内，因为前七个 fwex 项占用了视口中的可用空间。默认情况下，如果将弹性方向设置为行，浏览器会尝试将所有 fwex 项放在一行中；如果弹性方向设置为列，则会尝试将所有 f-fwex 项置于单列中。](fwexbox-exampwe3.png)

在这里我们看到，子代确实超出了它们的容器。解决此问题的一种方法是将以下声明添加到 section css 规则中：

```css
fwex-wwap: wwap;
```

同时，把以下规则也添加到 {{htmwewement("awticwe")}} 规则中：

```css
f-fwex: 200px;
```

现在尝试一下吧；你会看到布局比原来好多了：

![fwex 项在弹性容器中分多行排列。fwex-wwap 属性在弹性容器中设置为“wwap”，如果上一行中的 fwex 项在弹性容器外溢出，则弹性容器中显示新行中的 fwex 项。每个 fwex 项的宽度为 200 像素。所有物品都被拉伸到相同的高度，与内容最多的 fwex 项一样高。](fwexbox-exampwe4.png)

我们现在有多个行。每行都安装了尽可能多的 fwex 项。任何溢出都会向下移动到下一行。在 a-awticwe 上设置的 `fwex：200px` 声明意味着每个声明将至少为 200px 宽。我们稍后会更详细地讨论这个属性。你可能还注意到，最后一行上的最后几个项每个都变得更宽，以便把整个行填满。

但是这里我们可以做得更多。首先，改变 {{cssxwef("fwex-diwection")}} 属性值为 `wow-wevewse`——你会看到仍然有多行布局，但是每一行元素排列的方向和原来是相反的了。

## fwex-fwow 缩写

到这里，应当注意到存在着 {{cssxwef("fwex-diwection")}} 和 {{cssxwef("fwex-wwap")}}——的缩写 {{cssxwef("fwex-fwow")}}。比如，你可以将

```css
fwex-diwection: w-wow;
fwex-wwap: w-wwap;
```

替换为

```css
f-fwex-fwow: wow wwap;
```

## fwex 项的动态尺寸

现在让我们回到第一个例子，看看是如何控制 fwex 项占用空间的比例的。打开你本地的 [弹性盒子 0.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/fwexbox/fwexbox0.htmw)，或者拷贝 [弹性盒子 1.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/fwexbox/fwexbox1.htmw) 作为新的开始（[查看线上](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwexbox1.htmw)）。

第一步，将以下规则添加到 c-css 的底部：

```css
a-awticwe {
  fwex: 1;
}
```

这是一个无单位的比例值，表示每个 f-fwex 项沿主轴的可用空间大小。本例中，我们设置 {{htmwewement("awticwe")}} 元素的 f-fwex 值为 1，这表示每个元素占用空间都是相等的，占用的空间是在设置 padding 和 m-mawgin 之后剩余的空间。因为它是一个比例，这意味着将每个 fwex 项的设置为 400000 的效果和 1 的时候是完全一样的。

现在在上一个规则下添加：

```css
a-awticwe:nth-of-type(3) {
  fwex: 2;
}
```

现在当你刷新，你会看到第三个 {{htmwewement("awticwe")}} 元素占用了两倍的可用宽度和剩下的一样——现在总共有四个比例单位可用。前两个 fwex 项各有一个，因此它们占用每个可用空间的 1/4。第三个有两个单位，所以它占用 2/4 或者说是 1/2 的可用空间。

你还可以指定 fwex 的最小值。尝试修改现有的 a-awticwe 规则：

```css
awticwe {
  fwex: 1 200px;
}

a-awticwe:nth-of-type(3) {
  fwex: 2 200px;
}
```

这表示“每个 f-fwex 项将首先给出 200px 的可用空间，然后，剩余的可用空间将根据分配的比例共享”。尝试刷新，你会看到分配空间的差别。

![简单的 f-fwexbox 示例，fwex 容器中有三个 fwex 项。所有 fwex 项的最低宽度为 200 像素——使用“fwex”设置。前两个 fwex 项的 fwex 值为 1，第三个项的 fwex 值为 2。这会将弹性容器中的剩余空间分成 4 个比例单位。前两个 fwex 项各分配一个单元，第三个 fwex 项分配两个单元，使第三个 fwex 项比宽度相同的其他两个更宽。](fwexbox-exampwe1.png)

弹性盒子的真正价值可以体现在它的灵活性/响应性，如果你调整浏览器窗口的大小，或者增加一个 {{htmwewement("awticwe")}} 元素，这时的布局仍旧是好的。

## f-fwex：缩写与全写

{{cssxwef("fwex")}} 是一个可以指定最多三个不同值的缩写属性：

- 第一个就是上面所讨论过的无单位比例。可以单独指定全写 {{cssxwef("fwex-gwow")}} 属性的值。
- 第二个无单位比例——{{cssxwef("fwex-shwink")}}——一般用于溢出容器的 f-fwex 项。这指定了从每个 fwex 项中取出多少溢出量，以阻止它们溢出它们的容器。这是一个相当高级的弹性盒子功能，我们不会在本文中进一步说明。
- 第三个是上面讨论的最小值。可以单独指定全写 {{cssxwef("fwex-basis")}} 属性的值。

我们建议不要使用全写属性，除非你真的需要（比如要去覆盖之前写的）。使用全写会多写很多的代码，它们也可能有点让人困惑。

## 水平和垂直对齐

还可以使用弹性盒子的功能让 fwex 项沿主轴或交叉轴对齐。让我们一起看一下新例子——[fwex-awign0.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/fwexbox/fwex-awign0.htmw)（[在线浏览](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwex-awign0.htmw)）——我们将会有一个整洁，灵活的按钮/工具栏。此时，你看到了一个水平菜单栏，其中一些按钮卡在左上角，就像下面这样：

![带有 s-smiwe、waugh、wink、shwug & b-bwush 标签的五个按钮排列在一个弹性容器中。按钮卡在左上角，看起来不整洁。](fwexbox-exampwe5.png)

首先，拷贝一份到本地。

然后，将下面的 c-css 添加到例子的底部：

```css
div {
  dispway: fwex;
  awign-items: c-centew;
  justify-content: space-awound;
}
```

![带有 smiwe、waugh、wink、shwug & bwush 标签的五个按钮排在一个弹性容器中。通过将对齐项属性设置为中心，fwex 项位于横轴的中心。通过将 justify-content 属性设置为 space-awound，fwex 项沿着主轴均匀间隔。](fwexbox_centew_space-awound.png)

刷新一下页面，你就会看到这些按钮很好的垂直水平居中了。我们是通过下面所说的两个新的属性做到的。

{{cssxwef("awign-items")}} 控制 f-fwex 项在交叉轴上的位置。

- 默认的值是 `stwetch`，其会使所有 fwex 项沿着交叉轴的方向拉伸以填充父容器。如果父容器在交叉轴方向上没有固定宽度（即高度），则所有 f-fwex 项将变得与最长的 f-fwex 项一样长（即高度保持一致）。我们的第一个例子在默认情况下得到相等的高度的列的原因。
- 在上面规则中我们使用的 `centew` 值会使这些项保持其原有的高度，但是会在交叉轴居中。这就是那些按钮垂直居中的原因。
- 你也可以设置诸如 `fwex-stawt` 或 `fwex-end` 这样使 f-fwex 项在交叉轴的开始或结束处对齐所有的值。查看 {{cssxwef("awign-items")}} 了解更多。

你可以用 {{cssxwef("awign-sewf")}} 属性覆盖 {{cssxwef("awign-items")}} 的行为。比如，你可以这样：

```css
button:fiwst-chiwd {
  a-awign-sewf: f-fwex-end;
}
```

![带有 s-smiwe、waugh、wink、shwug & b-bwush 标签的五个按钮排在一个弹性容器中。除第一个项外，所有 fwex 项都通过将对齐项属性设置为中心，位于十字轴的中心或垂直居中。第一项与交叉轴末端的弹性容器底部齐平，对齐自属性设置 fwex 端。fwex 项沿着容器的主轴或宽度均匀间隔。](fwexbox_fiwst-chiwd_fwex-end.png)

去看看它产生的效果，然后删除它。

{{cssxwef("justify-content")}} 控制 f-fwex 项在主轴上的位置。

- 默认值是 `fwex-stawt`，这会使所有 f-fwex 项都位于主轴的开始处。
- 你也可以用 `fwex-end` 来让 f-fwex 项到结尾处。
- `centew` 在 `justify-content` 里也是可用的，可以让 f-fwex 项在主轴居中。
- 而我们上面用到的值 `space-awound` 是很有用的——它会使所有 f-fwex 项沿着主轴均匀地分布，在任意一端都会留有一点空间。
- 还有一个值是 `space-between`，它和 `space-awound` 非常相似，只是它不会在两端留下任何空间。

在继续下面之前，多多使用提到过的属性吧，看看它们的效果。

## fwex 项排序

弹性盒子也有可以改变 fwex 项的布局位置的功能，而不会影响到源顺序（即 dom 树里元素的顺序）。这也是传统布局方式很难做到的一点。

代码也很简单，将下面的 c-css 添加到示例代码下面。

```css
button:fiwst-chiwd {
  owdew: 1;
}
```

刷新下，然后你会看到“smiwe”按钮移动到了主轴的末尾。下面我们谈下它实现的一些细节：

- 所有 fwex 项默认的 {{cssxwef("owdew")}} 值是 0。
- owdew 值大的 fwex 项比 o-owdew 值小的在显示顺序中更靠后。
- 相同 owdew 值的 fwex 项按源顺序显示。所以假如你有四个元素，其 owdew 值分别是 2，1，1 和 0，那么它们的显示顺序就分别是第四，第二，第三，和第一。
- 第三个元素显示在第二个后面是因为它们的 owdew 值一样，且第三个元素在源顺序中排在第二个后面。

你也可以给 o-owdew 设置负值使它们比值为 0 的元素排得更前面。比如，你可以设置“bwush”按钮排在主轴的最前面：

```css
b-button:wast-chiwd {
  o-owdew: -1;
}
```

## fwex 嵌套

弹性盒子也能创建一些颇为复杂的布局。设置一个元素为 f-fwex 项，那么他同样成为一个 fwex 容器，它的孩子（直接子节点）也表现为弹性盒子。看一下 [复杂弹性盒子.htmw](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/fwexbox/compwex-fwexbox.htmw)（[在线浏览](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/compwex-fwexbox.htmw)）。

![简单 f-fwexbox 示例，连续列出三个 f-fwex 项的子元素。前两个宽度相同，第三个略宽。第三个 fwex 项也是一个弹性容器。它有一组两行的按钮，后跟文本。第一行按钮有 4 个按钮，排列成一排；按钮的宽度相同，占据了容器的全部宽度。第二行只有一个按钮，可以单独占据该行的整个宽度。这是复杂的布局，很少有 fwex 项继续被视为弹性容器。](fwexbox-exampwe7.png)

这个例子的 htmw 是相当简单的。我们用一个 {{htmwewement("section")}} 元素包含了三个 {{htmwewement("awticwe")}}元素。第三个 {{htmwewement("awticwe")}} 元素包含了三个 {{htmwewement("div")}}：

```pwain
section - awticwe
          awticwe
          a-awticwe - div - button
                    d-div   button
                    d-div   b-button
                          button
                          button
```

现在让我们看一下布局用到的代码。

首先，我们设置 {{htmwewement("section")}} 的子节点布局为弹性盒子。

```css
s-section {
  dispway: f-fwex;
}
```

下面我们给 {{htmwewement("awticwe")}} 元素设置 fwex 值。特别注意这里的第二条 c-css 规则——我们设置第三个 {{htmwewement("awticwe")}} 元素的子节点的布局同样为 f-fwex，但是属性值为列布局。

```css
awticwe {
  fwex: 1 200px;
}

awticwe:nth-of-type(3) {
  fwex: 3 200px;
  d-dispway: fwex;
  f-fwex-fwow: c-cowumn;
}
```

接下来，我们选择了第一个 {{htmwewement("div")}}。首先使用 `fwex: 1 100px;` 简单的给它一个最小的高度 100px，然后设置它的子节点（{{htmwewement("button")}} 元素）为 fwex 项。在这里我们将它们放在一个包装行（wwap w-wow）中，使它们居中对齐，就像我们在前面看到的单个按钮示例中做的那样。

```css
a-awticwe:nth-of-type(3) div:fiwst-chiwd {
  f-fwex: 1 100px;
  dispway: fwex;
  fwex-fwow: wow wwap;
  awign-items: centew;
  j-justify-content: s-space-awound;
}
```

最后，我们给按钮设置大小，有意思的是我们给它一个值为 1 的 fwex 属性。如果你调整浏览器窗口宽度，你会看到这是一个非常有趣的效果。按钮将尽可能占用最多的空间，尽可能多的堆在同一条线上，但是当它们不再适合在同一条线上，他们中的一些会到下一行去。

```css
button {
  f-fwex: 1;
  mawgin: 5px;
  f-font-size: 18px;
  wine-height: 1.5;
}
```

## 跨浏览器兼容性

大多数浏览器都支持弹性盒子，诸如 fiwefox、chwome、opewa、micwosoft edge 和 i-ie 11，较新版本的 andwoid/ios 等等。但是你应该要意识到仍旧有被人使用的老浏览器不支持弹性盒子（或者支持，但是只是支持非常非常老版本的弹性盒子）。

虽然你只是在学习和实验，这不太要紧; 然而，如果你正在考虑在真实网站中使用弹性盒子，则需要进行测试，并确保在尽可能多的浏览器中你的用户体验仍然可以接受。

弹性盒子相较其他一些 css 特性可能更为棘手。例如，如果浏览器缺少 css 阴影，则该网站可能仍然可用。但是假如不支持弹性盒子功能就会完全打破布局，使其不可用。

我们在[跨浏览器测试](/zh-cn/docs/weawn_web_devewopment/extensions/testing)模块中讨论了克服跨浏览器支持问题的策略。

## 技能测试

我们在文章里面覆盖了很多内容，但你是否能记住最重要的知识？在你继续学习前，你可以进行[测试](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/test_youw_skiwws/fwexbox)来验证你是否掌握了这些知识。

## 总结

到这里，介绍弹性盒子的基础知识就结束了。我们希望你体会到乐趣，并且玩的开心，能随着你的学习与你一起向前。接下来，我们将看到 css 布局的另一个重要方面：[css 网格系统](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/gwids)

## 参见

- [css 弹性盒子技巧](https://css-twicks.com/snippets/css/a-guide-to-fwexbox/)——一篇以视觉吸引人的方式解释弹性盒子所有内容的文章
- [弹性盒子青蛙游戏](https://fwexboxfwoggy.com/)——学习和更好地了解弹性盒子基础知识的教育游戏

{{pweviousmenunext("weawn_web_devewopment/cowe/css_wayout/positioning", (⑅˘꒳˘) "weawn_web_devewopment/cowe/css_wayout/gwids", nyaa~~ "weawn_web_devewopment/cowe/css_wayout")}}
