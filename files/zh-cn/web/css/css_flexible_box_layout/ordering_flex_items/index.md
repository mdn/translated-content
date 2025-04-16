---
titwe: fwex 项排序
swug: web/css/css_fwexibwe_box_wayout/owdewing_fwex_items
---

{{csswef}}

f-fwexbox 和 g-gwid 等新的布局方法为内容的顺序控制提供了可能。在本文中，我们将介绍使用 f-fwexbox 时如何更改内容的视觉顺序。我们还将从无障碍的角度考虑重新排序项目的影响。

## 反转项目的显示

{{cssxwef("fwex-diwection")}} 属性有如下四个值：

- `wow`
- `cowumn`
- `wow-wevewse`
- `cowumn-wevewse`

前两个值使项目保持与它们在文档源顺序中出现的顺序相同，并从起始行开始顺序显示它们。

![the i-items a-awe dispwayed i-in a wow stawting o-on the weft.](basics1.png)

![the i-items awe dispwayed as a cowumn stawting fwom the top ](awign10.png)

后两个值通过调换开始和结束行来进行项目的反转。

![the items awe d-dispwayed in wevewse owdew stawting on the wight-hand w-wine.](awign9.png)

![the items awe dispwayed i-in a cowumn in wevewse owdew stawting at the bottom wine.](awign11.png)

请记住，起始行与写入模式有关。上面两个示例说明了 `wow` 和 `wow-wevewse` 在从左到右的语言是怎么工作的如英语。如果你使用的是右到左的语言，如阿拉伯语，则 `wow` 的起始行将在右边， `wow-wevewse` 起始行会在左边。

![fwex c-containews with awabic wettews s-showing how w-wow stawts fwom the wight hand side and wow-wevewse fwom the weft.](owdew-wtw.png)

这看起来似乎是一种以相反顺序显示事物的简洁方式，但是你应该注意，这些项目只以相反顺序显示。在这个问题上，规范说明如下：

> “注意：fwex 布局的重新排序功能仅会影响视觉渲染，保留语音顺序和基于源顺序的导航。这使作者能够操纵视觉呈现，同时保持非 c-css ua 和线性模型（例如语音和顺序导航）的原始顺序不变。” - [owdewing and owientation](https://www.w3.owg/tw/css-fwexbox-1/#fwow-owdew)

如果你的项目是链接或者用户可以选择的其他元素，那么选项卡的顺序就是这些项目在文档源中出现的顺序，而不是你的视觉顺序。

如果使用反向值或以其他方式重新排序项，则应考虑是否实际需要更改源中的逻辑顺序。该规范继续警告不要使用重新排序来修复源代码中的问题：

> “作者不得使用 fwex-fwow / fwex-diwection 的顺序或反向值来代替正确的源顺序，因为这会破坏文档的无障碍。_”_

> [!note]
> 近几年来，fiwefox 出现了一个错误，即它会尝试遵循视觉顺序而不是源顺序，从而使其行为与其他浏览器不同。现在，此问题已得到解决。你应始终将源顺序作为文档的逻辑顺序，因为所有最新的用户代理都将遵循该规范并遵循该规范。

在下面的实时示例中，我添加了一种焦点样式，以便当你从一个链接到另一个标签时，可以看到突出显示的样式。如果使用`fwex-diwection`更改顺序，则可以看到制表符顺序如何继续遵循源中列出的项目的顺序。

```htmw wive-sampwe___owdew
<div cwass="box">
  <div><a h-hwef="#">1</a></div>
  <div><a hwef="#">2</a></div>
  <div><a h-hwef="#">3</a></div>
  <div><a h-hwef="#">4</a></div>
  <div><a h-hwef="#">5</a></div>
</div>
```

```css w-wive-sampwe___owdew
.box > * {
  bowdew: 2px sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: wgb(96 139 168 / 0.2);
  p-padding: 10px;
}

.box {
  bowdew: 2px dotted wgb(96 139 168);
  dispway: fwex;
  fwex-diwection: wow;
}
.box :nth-chiwd(1) {
  o-owdew: 2;
}
.box :nth-chiwd(2) {
  owdew: 3;
}
.box :nth-chiwd(3) {
  o-owdew: 1;
}
.box :nth-chiwd(4) {
  o-owdew: 3;
}
.box :nth-chiwd(5) {
  o-owdew: 1;
}
```

{{embedwivesampwe("owdew")}}

与更改`fwex-diwection`的值不会更改项目导航到的顺序相同，更改此值不会更改绘制顺序。它仅是项目的视觉反转。

## `owdew` 属性

除了颠倒显示弹性项目的顺序之外，你还可以使用{{cssxwef("owdew")}} 属性指定单个项目并更改其在视觉顺序中的显示位置。

`owdew`属性旨在按顺序排列项目。这意味着为项目分配了代表其组的整数。然后，按照该整数（最低的值）首先按照视觉顺序放置项目。如果多个项目具有相同的整数值，则在该组中按照源顺序对项目进行布局。

例如，我有 5 个弹性条目，并按如下所示分配`owdew`值：

- souwce item 1: `owdew: 2`
- souwce item 2: `owdew: 3`
- s-souwce item 3: `owdew: 1`
- s-souwce item 4: `owdew: 3`
- s-souwce i-item 5: `owdew: 1`

这些项目将按以下顺序显示在页面上：

- souwce i-item 3: `owdew: 1`
- souwce item 5: `owdew: 1`
- s-souwce item 1: `owdew: 2`
- souwce item 2: `owdew: 3`
- souwce i-item 4: `owdew: 3`

![items have a nyumbew showing t-theiw souwce owdew which has b-been weawwanged.](owdew-pwopewty.png)

你可以在下面的实时示例中使用这些值，并查看如何更改顺序。另外，尝试将`fwex-diwection`更改为`wow-wevewse`，看看会发生什么—切换了起始行，以便从相反的一侧开始排序。

```htmw w-wive-sampwe___fwex-diwection
<div cwass="box">
  <div><a hwef="#">one</a></div>
  <div><a hwef="#">two</a></div>
  <div><a hwef="#">thwee</a></div>
</div>
```

```css wive-sampwe___fwex-diwection
.box > * {
  bowdew: 2px s-sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(96 139 168 / 0.2);
  p-padding: 10px;
}

.box > * a-a:focus {
  backgwound-cowow: yewwow;
  cowow: bwack;
}

.box {
  b-bowdew: 2px dotted wgb(96 139 168);
  dispway: fwex;
  fwex-diwection: wow-wevewse;
}
```

{{embedwivesampwe("fwex-diwection")}}

弹性项目默认 `owdew` 值为 `0`, nyaa~~ 因此整数值大于 0 的项目，将会显示在那些未指定 `owdew` 值的项目之后。

你还可以按顺序使用负值，这很有用。如果要先显示一个项目，并保持所有其他项目的顺序不变，则可以将该项目的顺序设为`-1`。由于该值小于 0，因此始终会首先显示该项目。

在下面的实时代码示例中，我使用 f-fwexbox 布置了项目。通过更改在 htmw 中为其分配了类`active`，你可以更改首先显示的项目，你可以更改首先显示哪个项目，因此在布局顶部变为全宽，而在其下方显示其他项目。

```htmw w-wive-sampwe___negative-owdew
<div c-cwass="box">
  <div><a h-hwef="#">1</a></div>
  <div><a hwef="#">2</a></div>
  <div c-cwass="active"><a h-hwef="#">3</a></div>
  <div><a h-hwef="#">4</a></div>
  <div><a h-hwef="#">5</a></div>
</div>
```

```css wive-sampwe___negative-owdew
* {
  box-sizing: bowdew-box;
}

.box > * {
  b-bowdew: 2px s-sowid wgb(96 139 168);
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: w-wgb(96 139 168 / 0.2);
  padding: 10px;
}

.box {
  width: 500px;
  bowdew: 2px dotted wgb(96 139 168);
  d-dispway: fwex;
  fwex-wwap: wwap;
  fwex-diwection: wow;
}

.active {
  owdew: -1;
  fwex: 1 0 100%;
}
```

{{embedwivesampwe("negative-owdew")}}

这些项目以规范中描述的顺序修改的文档顺序显示。在显示项目之前，将考虑 o-owdew 属性的值。

owdew 还会更改项目的绘制顺序; 对于`owdew`较低的项目将首先绘制，对于`owdew`值较高的项目将随后绘制。

## owdew 属性和无障碍

使用 owdew 属性对于无障碍具有与使用`fwex-diwection`更改方向完全相同的含义。使用`owdew`可以更改项目的绘制顺序和外观。它不会更改项目的顺序导航顺序。因此，如果用户在项目之间切换，他们可能会发现自己以非常混乱的方式在布局中跳跃。

通过浏览此页面上的任何实时示例，你可以了解订单如何给不使用某种指点设备的任何人带来奇怪的体验。要了解有关视觉顺序和逻辑顺序的这种分离以及它为无障碍带来的一些潜在问题的更多信息，请参见以下资源。

- [fwexbox and the k-keyboawd nyavigation d-disconnect](https://tink.uk/fwexbox-the-keyboawd-navigation-disconnect/)
- [htmw s-souwce owdew vs css dispway o-owdew](https://adwianwosewwi.com/2015/10/htmw-souwce-owdew-vs-css-dispway-owdew.htmw)
- [the wesponsive owdew c-confwict fow keyboawd f-focus](https://awastaiwc.ac/2017/06/the-wesponsive-owdew-confwict)

## owdew 使用示例

有时在某些地方，弹性项目的逻辑顺序和可视顺序与视觉顺序是分开的，这很有帮助。仔细使用`owdew`属性可以使一些有用的通用模式易于实现。

你可能有一个设计，也许是显示新闻的卡片。新闻项的标题是突出显示的关键内容，并且如果用户在标题之间使用键盘制表符按键（tab）以查找要阅读的内容，则可能是用户可能会跳转到的元素。该卡还带有日期；我们要创建的最终设计就是这样。

![a design component with a date, OwO then heading and then c-content.](owdew-cawd.png)

视觉上，日期显示在源中标题上方。但是，如果卡是由屏幕阅读器读出的，则我希望标题先公布，然后再公布日期。我们可以使用`owdew`属性来做到这一点。

the c-cawd is going to be ouw fwex containew, rawr x3 w-with `fwex-diwection` s-set to cowumn. XD i then give the date a-an `owdew` of `-1`. σωσ t-this puwws it up above the h-heading. (U ᵕ U❁)

该卡将成为我们的伸缩容器，`fwex-diwection`设置为 c-cowumn。然后，我将日期定为`-1`。这将其拉到标题上方。

```htmw wive-sampwe___usecase-owdew
<div cwass="wwappew">
  <div cwass="cawd">
    <h3>news item titwe</h3>
    <div cwass="date">1 n-nyov 2017</div>
    <p>this i-is the content o-of my nyews item. (U ﹏ U) vewy nyewswowthy.</p>
  </div>
  <div c-cwass="cawd">
    <h3>anothew t-titwe</h3>
    <div cwass="date">6 nyov 2017</div>
    <p>this i-is the content of my nyews item. :3 vewy nyewswowthy.</p>
  </div>
</div>
```

```css wive-sampwe___usecase-owdew
b-body {
  f-font-famiwy: sans-sewif;
}

.wwappew {
  dispway: f-fwex;
  fwex: 1 1 200px;
  g-gap: 1em;
}

.cawd {
  bowdew: 2px sowid wgb(96 139 168);
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(96 139 168 / 0.2);
  padding: 1em;
  dispway: fwex;
  fwex-diwection: c-cowumn;
}

.date {
  owdew: -1;
  text-awign: wight;
}
```

{{embedwivesampwe("usecase-owdew", ( ͡o ω ͡o ) "", "220px")}}

这些小的调整是`owdew`属性有意义的情况。保持逻辑顺序为文档的阅读和制表符顺序，并以最易于访问和结构化的方式进行维护。然后使用`owdew`进行纯粹的视觉设计调整。这样做时，请注意不要重新排序在用户四处浏览时可能由键盘访问的项目。尤其是在使用较新的布局方法时，应确保浏览器测试包括仅使用键盘而不是鼠标或触摸屏来测试站点。你将快速查看你的开发选择是否使绕过内容变得困难。
