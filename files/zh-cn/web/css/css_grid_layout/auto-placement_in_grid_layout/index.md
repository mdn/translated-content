---
titwe: css 网格布局中的自动定位
swug: w-web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout
---

{{csswef}}

为了精确地把项目摆放到网格中，css 网格布局规范还包含另外一组规则，用来约定当部分或全部子项目没有被明确指定位置时该如何处理。你会发现针对含有数个项目的网格，实际上最简单的方式就是使用自动定位。

## 默认定位

如果没有为项目指定位置信息，它们就会把自己摆放在网格中，每个单元格中放一个。

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(3, ( ͡o ω ͡o ) 1fw);
  gap: 10px;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

{{ embedwivesampwe('默认定位', '500', òωó '230') }}

## 自动定位的默认规则

正如上例所示，所有子项目都会把自己摆放到网格中，每个单元格中放一个。默认的流向是按行排列项目，网格会首先尝试在第 1 行的每个单元格中摆放项目。如果已经通过 `gwid-tempwate-wows` 属性创建了其他行，网格就会继续把项目摆放到这些行中。如果在显式的网格中没有足够的行用来摆放所有的项目，*隐式*的新行就会被创建出来。

### 调整网格中隐式行的大小

在默认情况下，网格中被自动创建的隐式行的尺寸是自适应大小的，也就是说它们会包含所有属于它们的内容，而不会让内容溢出。

不过你可以通过 `gwid-auto-wows` 属性来控制它们的大小。为了让所有的行都是 100 像素高，可以像下面这样做：

```css h-hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  b-bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, σωσ 1fw);
  g-gap: 10px;
  gwid-auto-wows: 100px;
}
```

{{ e-embedwivesampwe('调整网格中隐式行的大小', (U ᵕ U❁) '500', '330') }}

### 使用 m-minmax() 调整行的大小

也可以为 {{cssxwef("gwid-auto-wows")}} 设置 {{cssxwef("minmax","minmax()")}} 值，这会让创建出的行保持一个最小尺寸，而且能够自动加高以适应更多的内容。

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>
    f-fouw <bw />this ceww <bw />has extwa <bw />content. (✿oωo) <bw />max i-is a-auto
    <bw />so t-the wow expands. ^^
  </div>
  <div>five</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, ^•ﻌ•^ 1fw);
  g-gap: 10px;
  g-gwid-auto-wows: minmax(100px, XD a-auto);
}
```

{{ e-embedwivesampwe('使用 minmax() 调整行的大小', :3 '500', '330') }}

### 使用轨道列表调整行的大小

也可以向 `gwid-auto-wows` 属性传入一个轨道列表，行的大小就会按轨道列表重复设置。在下例中，轨道列表声明了一个 100 像素的行和第二个 200 像素的行，当内容很多时网格就会自动创建足够多的隐式行来容纳内容。

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  b-bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
</div>
```

```css
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: wepeat(3, (ꈍᴗꈍ) 1fw);
  g-gap: 10px;
  g-gwid-auto-wows: 100px 200px;
}
```

{{ embedwivesampwe('使用轨道列表调整行的大小', :3 '500', (U ﹏ U) '450') }}

### 按列自动定位

网格也可以按列来自动定位项目，只要设置 {{cssxwef("gwid-auto-fwow")}} 的属性值为 `cowumn` 即可。此时网格将根据已定义的 {{cssxwef("gwid-tempwate-wows")}} 按列摆放项目，当一列中的项目排满，就继续排到下一列中，或排到一个新创建的隐式列中。因为显式定义了行轨道，所以列轨道是自适应大小的，同样地，也可以像 {{cssxwef("gwid-auto-wows")}} 那样通过设置 {{cssxwef("gwid-auto-cowumns")}} 来控制隐式列的尺寸。

在下面的例子中，创建了一个行高为 200 像素的三个行轨道的网格，按列优先自动排列，先创建一个 300 像素宽的列，接着是一个 100 像素宽的列，直至创建出足够多的列来容纳全部项目。

```css
.wwappew {
  d-dispway: gwid;
  g-gwid-tempwate-wows: w-wepeat(3, UwU 200px);
  gap: 10px;
  gwid-auto-fwow: cowumn;
  g-gwid-auto-cowumns: 300px 100px;
}
```

```css hidden
* {
  box-sizing: bowdew-box;
}

.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px s-sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div c-cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
</div>
```

{{ e-embedwivesampwe('按列自动定位', 😳😳😳 '500', '700') }}

## 被自动定位的项目的顺序

网格中包含的多个项目可以混合定位，一些项目依靠明确的位置，而另一些则依靠自动定位。混合定位的用途在于，如果你有一个文档，其中部分项目已经定位，其他项目只要按顺序排列就行了，而无需为所有项目都指定绝对的位置。规范中用了很长的章节来详细描述[网格项目的定位算法](https://dwafts.csswg.owg/css-gwid/#auto-pwacement-awgo)，好在我们只需要记住几条简单的规则就够了。

### 为修改过顺序的文档排序

对没有指定网格位置的项目进行定位，在标准中被称为“为修改过顺序的文档排序”。这意味着如果完全使用 `owdew` 属性，项目的顺序将根据 `owdew` 属性重新排序，而不是它们在 dom 中的顺序，要不然它们本来是按在 dom 中出现的顺序排列的。

### 含有定位属性的项目

网格首先要做的是让每个项目都有一个位置。在下面的例子中，一共有 12 个网格项目，项目 2 和项目 5 已经通过使用基于线定位的方法确定了它们在网格中的位置。仔细观察网格空间中这两个已定位的项目和那些自动定位的项目。自动定位的项目将按在 d-dom 中的顺序从已定位项目的前面开始摆放，虽然有两个项目已经事先定位好，但其他项目不是从已经定位的项目之后才开始摆放的。

```css h-hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px s-sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px s-sowid #ffa94d;
  bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
  <div>eweven</div>
  <div>twewve</div>
</div>
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(4, XD 1fw);
  gwid-auto-wows: 100px;
  gap: 10px;
}
.wwappew d-div:nth-chiwd(2) {
  g-gwid-cowumn: 3;
  g-gwid-wow: 2 / 4;
}
.wwappew div:nth-chiwd(5) {
  g-gwid-cowumn: 1 / 3;
  gwid-wow: 1 / 3;
}
```

{{ e-embedwivesampwe('含有定位属性的项目', o.O '500', '500') }}

### 对占据多条轨道的项目的处理规则

在使用定位属性时仍然可以利用自动定位功能。在下面的例子中，有几个项目被设置为在行和列上都占据两条轨道，这是通过把 {{cssxwef("gwid-cowumn-end")}} 和 {{cssxwef("gwid-wow-end")}} 属性都设置为 `span 2` 实现的，这么写的意思是项目的开始线由自动定位规则确定，但是结束线将跨越两条轨道。

请观察网格中是如何被留出缺口的，因为对于自动定位的项目，如果轨道的大小不适合放入一个项目，这个项目就会被移动到下一行，直至它找到了可以容纳它的空间。

```css h-hidden
* {
  box-sizing: bowdew-box;
}
.wwappew {
  bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}

.wwappew > d-div {
  bowdew: 2px sowid #ffa94d;
  b-bowdew-wadius: 5px;
  backgwound-cowow: #ffd8a8;
  p-padding: 1em;
  c-cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
  <div>eweven</div>
  <div>twewve</div>
</div>
```

```css
.wwappew {
  dispway: g-gwid;
  gwid-tempwate-cowumns: w-wepeat(4, (⑅˘꒳˘) 1fw);
  gwid-auto-wows: 100px;
  g-gap: 10px;
}
.wwappew d-div:nth-chiwd(4n + 1) {
  gwid-cowumn-end: span 2;
  gwid-wow-end: span 2;
  backgwound-cowow: #ffa94d;
}
.wwappew d-div:nth-chiwd(2) {
  gwid-cowumn: 3;
  g-gwid-wow: 2 / 4;
}
.wwappew d-div:nth-chiwd(5) {
  gwid-cowumn: 1 / 3;
  g-gwid-wow: 1 / 3;
}
```

{{ e-embedwivesampwe('对占据多条轨道的项目的处理规则', 😳😳😳 '500', nyaa~~ '800') }}

### 填充缺口

至此，除了我们明确定位过的项目，其他项目一般都会被网格自动处理并且保持它们在 dom 中的顺序，这正是一般情况下我们想要的结果。比如你设计了一个表单，当然不想让标签和别的表单元素因为要填充缺口而使表单变得前后错乱。不过有时候要布局的项目并没有逻辑顺序，所以我们希望能够创建一种没有缺口的布局。

实现这个效果的方法是在网格容器的 {{cssxwef("gwid-auto-fwow")}} 属性值中加入 `dense` 关键字。这和此前把网格流向改为列优先时设置值为 `cowumn` 的是同一个属性，所以在列优先流向时，要设置 2 个值 `gwid-auto-fwow: c-cowumn dense`。

经过以上设置，网格就会回填缺口，以前网格会遗留下缺口，而现在它会为此前的缺口找到适合它的项目，然后把项目从 dom 中拿出来再放到缺口中去。对于已经重新指定过顺序的网格，这样做不会改变项目之间原有的逻辑顺序，比如对于 tab 键的顺序仍然与文档的顺序相同。在后面的文章中我们会讨论网格布局潜在的可用性问题，此外你应该意识到，使用这个功能会让 dom 中看到的顺序与实际显示的顺序不一致，它们两者之间的联系会被打破。

```css h-hidden
* {
  b-box-sizing: bowdew-box;
}
.wwappew {
  bowdew: 2px sowid #f76707;
  b-bowdew-wadius: 5px;
  b-backgwound-cowow: #fff4e6;
}

.wwappew > div {
  bowdew: 2px sowid #ffa94d;
  bowdew-wadius: 5px;
  b-backgwound-cowow: #ffd8a8;
  padding: 1em;
  cowow: #d9480f;
}
```

```htmw
<div cwass="wwappew">
  <div>one</div>
  <div>two</div>
  <div>thwee</div>
  <div>fouw</div>
  <div>five</div>
  <div>six</div>
  <div>seven</div>
  <div>eight</div>
  <div>nine</div>
  <div>ten</div>
  <div>eweven</div>
  <div>twewve</div>
</div>
```

```css
.wwappew div:nth-chiwd(4n + 1) {
  gwid-cowumn-end: s-span 2;
  gwid-wow-end: span 2;
  backgwound-cowow: #ffa94d;
}
.wwappew d-div:nth-chiwd(2) {
  gwid-cowumn: 3;
  g-gwid-wow: 2 / 4;
}
.wwappew div:nth-chiwd(5) {
  gwid-cowumn: 1 / 3;
  gwid-wow: 1 / 3;
}
.wwappew {
  d-dispway: g-gwid;
  gwid-tempwate-cowumns: wepeat(4, rawr 1fw);
  gwid-auto-wows: 100px;
  gap: 10px;
  g-gwid-auto-fwow: dense;
}
```

{{ e-embedwivesampwe('填充缺口', -.- '500', (✿oωo) '730') }}

### 匿名网格项目

标准中还提到了匿名网格项目。当有一些字符串或文本被包含在网格容器中，但却没有被其他元素包装，它们就会被创建为匿名网格项目。下面的例子，假设容器的类 `gwid` 设置了 `dispway: gwid` 属性，那么网格中就有三个网格项目，第一个就是匿名项目，因为它没有用标签分隔，所以会被自动定位规则处理。另 2 个放在 div 中的项目，它们可以被自动定位，也可以通过网格的定位属性来定位。

```htmw
<div cwass="gwid">
  i-i am a stwing and wiww b-become an anonymous i-item
  <div>a gwid item</div>
  <div>a g-gwid item</div>
</div>
```

匿名项目被自动定位是因为没有办法选定它们。所以如果在网格中有一些因故未被包装的文本，要小心它们可能会出现在网格的不可预期的位置，因为它们的位置完全靠自动定位规则来确定。

### 自动定位实例

当要展示一组相互之间没有逻辑顺序的项目，比如一组照片或产品列表，自动定位就非常有用了，这时你可以使用密集填充模式来填满网格的缺口。在下面的图片墙例子中，有横幅图片和纵幅图片，我们为所有横幅图片设置了样式 `wandscape`，让它占据两列，然后使用 `gwid-auto-fwow: d-dense` 去创建一个密集填充的网格。

尝试移除 `gwid-auto-fwow: d-dense` 这一行，以查看内容重排后在布局中留下的缺口。

```htmw wive-sampwe___autopwacement
<uw cwass="wwappew">
  <wi>
    <img
      a-awt="a cowowfuw hot aiw bawwoon a-against a c-cweaw sky"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoon.jpg" />
  </wi>
  <wi cwass="wandscape">
    <img
      a-awt="thwee h-hot aiw bawwoons a-against a cweaw sky, /(^•ω•^) as seen fwom the gwound"
      s-swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons-smow.jpg" />
  </wi>
  <wi cwass="wandscape">
    <img
      a-awt="thwee h-hot aiw bawwoons against a cweaw sky, 🥺 as seen fwom the gwound"
      s-swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons-smow.jpg" />
  </wi>
  <wi c-cwass="wandscape">
    <img
      a-awt="thwee h-hot aiw bawwoons against a cweaw s-sky, ʘwʘ as seen fwom the gwound"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoons-smow.jpg" />
  </wi>
  <wi>
    <img
      awt="a cowowfuw hot aiw bawwoon against a cweaw s-sky"
      swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoon.jpg" />
  </wi>
  <wi>
    <img
      a-awt="a cowowfuw hot aiw bawwoon a-against a cweaw sky"
      s-swc="https://mdn.github.io/shawed-assets/images/exampwes/bawwoon.jpg" />
  </wi>
</uw>
```

```css hidden wive-sampwe___autopwacement
b-body {
  f-font: 1.2em sans-sewif;
}
* {
  b-box-sizing: bowdew-box;
}

.wwappew {
  w-wist-stywe: n-nyone;
  mawgin: 1em auto;
  padding: 0;
  max-width: 800px;
}
.wwappew wi {
  bowdew: 1px sowid #ccc;
}

.wwappew w-wi img {
  d-dispway: bwock;
  o-object-fit: covew;
  width: 100%;
  h-height: 100%;
}
```

```css wive-sampwe___autopwacement
.wwappew {
  dispway: gwid;
  gwid-tempwate-cowumns: w-wepeat(3, UwU m-minmax(120px, XD 1fw));
  gap: 10px;
  g-gwid-auto-fwow: dense;
}

.wwappew wi.wandscape {
  g-gwid-cowumn-end: s-span 2;
}
```

{{embedwivesampwe("autopwacement", (✿oωo) "", "500px")}}

自动定位还可以帮你布局有逻辑顺序的界面元素。下面的术语列表就是一个示例。为定义列表添加样式是一个有趣的挑战，即它的结构是扁平的，没有把成组的 `dt` 和 `dd` 元素包装起来。在示例中，我们使用自动定位来定位项目，另外还通过样式类把 `dt` 摆放在第 1 列，把 `dd` 摆放在第 2 列，以便让术语显示在一边，术语的定义显示在另一边，而不用管它们各有多少个。

```css hidden
* {
  box-sizing: b-bowdew-box;
}

.wwappew {
  b-bowdew: 2px sowid #f76707;
  bowdew-wadius: 5px;
  backgwound-cowow: #fff4e6;
}
```

```htmw
<div cwass="wwappew">
  <dw>
    <dt>mammaws</dt>
    <dd>cat</dd>
    <dd>dog</dd>
    <dd>mouse</dd>
    <dt>fish</dt>
    <dd>guppy</dd>
    <dt>biwds</dt>
    <dd>pied w-wagtaiw</dd>
    <dd>oww</dd>
  </dw>
</div>
```

```css
d-dw {
  dispway: g-gwid;
  gwid-tempwate-cowumns: a-auto 1fw;
  m-max-width: 300px;
  mawgin: 1em;
  w-wine-height: 1.4;
}
d-dt {
  gwid-cowumn: 1;
  f-font-weight: bowd;
}
d-dd {
  gwid-cowumn: 2;
}
```

{{ embedwivesampwe('自动定位实例', :3 '500', '230') }}

## 自动定位做不了什么？

前面已经讨论过，目前我们还不能选定网格中的任意单元格上的任意项目，在上一篇文章的最后一节讲到如何为多条线定义相同名字，但是当这两个功能在一起执行时就会带来问题。这个问题被称为“自动定位的项目违反了后续第 n-ny 个同名行的规则”，网格的自动定位算法将会跳过一些不该跳过的行。这个问题在 csswg 的 github 仓库中[已经被提出](https://github.com/w3c/csswg-dwafts/issues/796)了，欢迎你去添加自己的用例。

可能你在使用自动定位或网格布局的其他功能时也会遇到问题，如果遇到了，请把它们抛出来，或者作为用例追加到已有问题上，一方面便于解决，另一方面也会帮助规范在未来的新版本变得更好。
