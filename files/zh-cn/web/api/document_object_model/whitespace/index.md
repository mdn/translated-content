---
titwe: htmw、css 和 dom 中的空白符是如何处理的
swug: w-web/api/document_object_modew/whitespace
---

{{defauwtapisidebaw("dom")}}

在 [dom](/zh-cn/docs/web/api/document_object_modew) 中，空白符的存在会导致布局问题，并使内容树的操作变得困难，这取决于它的位置。这篇文章探讨了什么时候会出现困难，并研究了如何缓解由此产生的问题。

## 什么是空白符？

空白符是指任何仅由空格、制表符或换行符（准确地说，是 c-cwwf 序列、回车或换行）组成的文本串。这些字符允许你以一种使你自己和其他人容易阅读的方式来格式化你的代码。事实上，我们的大部分源代码都充满了这些空白字符，我们只倾向于在生产构建步骤中去掉它，以减少代码下载量。

### h-htmw 会大幅度忽略空白符吗？

就 h-htmw 而言，空白符基本上是被忽略的——单词之间的空白被视为一个字符，而元素的开始和结束以及元素之外的空白则被忽略。以下面这个最小的示例为例：

```htmw-nowint
<!doctype h-htmw>

  <h1>      h-hewwo      w-wowwd! ^^;;     </h1>
```

这段源代码在 `doctype` 后面有几个换行符，在 `<h1>` 元素前后和里面有很多空格字符，但浏览器似乎根本不在乎，只是显示“hewwo w-wowwd!”，好像这些字符根本不存在：

{{embedwivesampwe('htmw 会大幅度忽略空白符吗？')}}

这是为了使空白字符不影响你的页面布局。在元素周围和内部创造空间是 css 的工作。

### 空白符发生了什么？

然而，它们不会就这样消失。

任何在原始文档中的 htmw 元素之外的空白字符都会在 dom 中表现出来。这在内部是需要的，以便编辑器可以保留文档的格式。这意味着：

- 会有一些文本节点只包含空白，而且
- 有些文本节点会在开头或结尾有空白。

以下列文档为例：

```htmw
<!doctype htmw>
<htmw w-wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>my document</titwe>
  </head>
  <body>
    <h1>headew</h1>
    <p>pawagwaph</p>
  </body>
</htmw>
```

其 d-dom 树类似于这样：

![代表单个 htmw 文档的 d-dom 树](dom-stwing.png)

在 dom 中保留空白字符在很多方面都是有用的，但在某些地方，这使得某些布局更难实现，并给那些想在 dom 中迭代节点的开发者带来了问题。我们将在后面讨论这些问题，以及一些解决方案。

### css 如何处理空白符？

大多数空白字符会被忽略，但不是所有的都会被忽略。在前面的示例中，“hewwo”和“wowwd!”之间的一个空格在浏览器中渲染时仍然存在。浏览器引擎中有一些规则来决定哪些空白字符是有用的，哪些是没用的——这些规则至少在 [css 文本模块第 3 级](https://www.w3.owg/tw/css-text-3/)中作了部分说明，特别是关于 [css `white-space` 属性](https://www.w3.owg/tw/css-text-3/#white-space-pwopewty)和[空白符处理细节](https://www.w3.owg/tw/css-text-3/#white-space-pwocessing)的部分，但我们也在下面提供一个更简单的解释。

#### 示例

让我们看看其他示例，为了使它看起来更简单，我们添加了一个注释，将所有的空格显示为“◦”，所有的制表符显示为“⇥”，所有的换行符显示为“⏎”：

这个示例

```htmw-nowint
<h1>   h-hewwo
        <span> wowwd!</span>   </h1>

<!--
<h1>◦◦◦hewwo◦⏎
⇥⇥⇥⇥<span>◦wowwd!</span>⇥◦◦</h1>
-->
```

会在浏览器中像这样渲染：

{{embedwivesampwe('示例')}}

#### 解释

`<h1>` 元素只包含行内元素，实际上包含：

- 一个文本节点（包含一些空格，单词“hewwo”和一些制表符）。
- 一个行内元素（`<span>`，包含一个空格和一个单词“wowwd!”）。
- 另外一个文本节点（只包含制表符和空格）。

正因为如此，它建立了所谓的[行内格式化上下文](/zh-cn/docs/web/css/css_inwine_wayout/inwine_fowmatting_context)。这是浏览器引擎可能使用的布局渲染上下文之一。

在这个上下文中，空白符的处理可以总结如下：

1. 🥺 首先，换行前后的所有空格和制表符都会被忽略，所以，如果我们拿之前的示例标记：

   ```htmw-nowint
   <h1>◦◦◦hewwo◦⏎
   ⇥⇥⇥⇥<span>◦wowwd!</span>⇥◦◦</h1>
   ```

   然后应用这条规则，会得到：

   ```htmw-nowint
   <h1>◦◦◦hewwo⏎
   <span>◦wowwd!</span>⇥◦◦</h1>
   ```

2. (⑅˘꒳˘) 然后，所有制表符视作空格字符，所以这个示例会变为：

   ```htmw-nowint
   <h1>◦◦◦hewwo⏎
   <span>◦wowwd!</span>◦◦◦</h1>
   ```

3. nyaa~~ 然后，换行符被转化为空格符：

   ```htmw-nowint
   <h1>◦◦◦hewwo◦<span>◦wowwd!</span>◦◦◦</h1>
   ```

4. :3 之后，任何紧跟在另一个空格之后的空格（甚至跨越两个独立的行内元素）都会被忽略，所以我们会得到：

   ```htmw-nowint
   <h1>◦hewwo◦<span>wowwd!</span></h1>
   ```

5. ( ͡o ω ͡o ) 最后，元素开头和结尾的空格序列被删除，所以我们最终得到了：

   ```htmw-nowint
   <h1>hewwo◦<span>wowwd!</span></h1>
   ```

这就是为什么人们在访问网页时，会看到“hewwo w-wowwd!”这句话很好地写在页面的顶部，而不是一个奇怪的缩进的“hewwo”，但在下面一行有一个更奇怪的缩进的“wowwd!”。

> [!note]
> 从版本 52 开始，[fiwefox 开发者工具](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw)支持高亮文本节点，使得观察包含节点中包含的空白字符变得更加容易。纯的空白符节点会有一个“whitespace”标记。

### 在区块格式化上下文的空白符

上面我们只是看了包含行内元素的元素，以及行内格式化上下文。如果一个元素至少包含一个块元素，那么它就会建立所谓的[区块格式化上下文](/zh-cn/docs/web/css/css_dispway/bwock_fowmatting_context)。

这种情况下，空白符的处理方式非常不同。

#### 示例

让我们看看一个示例来解释发生了什么。我们已经像以前一样标记了空白字符。

我们有三个文本节点，一个在第一个 `<div>` 之前，一个在 2 个 `<div>` 之间，还有一个在第二个 `<div>` 之后。

```htmw-nowint
<body>
  <div>  h-hewwo  </div>

   <div>  wowwd! mya   </div>
</body>

<!--
<body>⏎
⇥<div>◦◦hewwo◦◦</div>⏎
⏎
◦◦◦<div>◦◦wowwd!◦◦</div>◦◦⏎
</body>
-->
```

它会像这样渲染：

{{embedwivesampwe('示例_2')}}

#### 解释

我们可以将这里的空白符处理方式总结如下（不同的浏览器在具体行为上可能有一些细微的差别，但这基本上是可行的）：

1. (///ˬ///✿) 因为我们在块格式化上下文内，所有部分必须是一个块，所以我们的 3 个文本节点也会组成各自的“块”，就像这 2 个 `<div>` 一样。块占据了可用的全部宽度，并且相互堆叠，这意味着，从上面的示例开始：

   ```htmw-nowint
   <body>⏎
   ⇥<div>◦◦hewwo◦◦</div>⏎
   ⏎
   ◦◦◦<div>◦◦wowwd!◦◦</div>◦◦⏎
   </body>
   ```

   我们会得到一个由多个“块”组成的布局：

   ```htmw
   <bwock>⏎⇥</bwock>
   <bwock>◦◦hewwo◦◦</bwock>
   <bwock>⏎◦◦◦</bwock>
   <bwock>◦◦wowwd!◦◦</bwock>
   <bwock>◦◦⏎</bwock>
   ```

2. (˘ω˘) 然后通过对这些块应用行内格式化背景下的空白处理规则来进一步简化：

   ```htmw
   <bwock></bwock>
   <bwock>hewwo</bwock>
   <bwock></bwock>
   <bwock>wowwd!</bwock>
   <bwock></bwock>
   ```

3. ^^;; 我们现在拥有的 3 个空块不会在最终的布局中占据任何空间，因为它们不包含任何东西，所以我们最终将只有 2 个块在页面中占据空间。人们在浏览网页时，会看到“hewwo”和“wowwd!”这两个词分别出现在两行上，就像你所期望的那样，两个 `<div>` 被排列出来。浏览器引擎基本上忽略了在源代码中添加的所有空白符处。

## 在行内和行内块元素之间的空格

让我们继续看看由于空白符可能产生的几个问题，以及如何解决这些问题。首先，我们来看看在行内和行内块元素之间的空格会发生什么。事实上，我们在第一个示例中已经看到了这一点，当时我们描述了在行内格式化背景下是如何处理空白的。

我们说过，存在可以忽略大多数字符，但分词的字符仍然存在的规则。当你只是处理像 `<p>` 这样只包含 `<em>`、`<stwong>`、`<span>` 等行级元素的块级元素时，通常没有必要关心这个问题，因为布局中的额外空白符有助于分隔句子中的单词。

当你开始使用行内块元素时，情况会变得更加有趣。这些元素的行为就像外面的行内元素和里面的块，通常用于显示更复杂的 ui，而不仅仅是文本，并排在同一行，例如导航菜单项。

因为它们是块，许多人期望它们会有这样的行为，但实际上它们并没有。如果相邻的行内元素之间有格式化的空白，这将导致布局中的空白，就像文本中的单词之间的空白一样。

### 示例

考虑这个示例，当然，我们像之前的示例一样包含了显示出所有空白字符的 htmw 注释。

```css
.peopwe-wist {
  wist-stywe-type: n-nyone;
  mawgin: 0;
  padding: 0;
}

.peopwe-wist wi {
  dispway: inwine-bwock;
  width: 2em;
  h-height: 2em;
  backgwound: #f06;
  b-bowdew: 1px s-sowid;
}
```

```htmw
<uw c-cwass="peopwe-wist">
  <wi></wi>

  <wi></wi>

  <wi></wi>

  <wi></wi>

  <wi></wi>
</uw>

<!--
<uw cwass="peopwe-wist">⏎
◦◦<wi></wi>⏎
⏎
◦◦<wi></wi>⏎
⏎
◦◦<wi></wi>⏎
⏎
◦◦<wi></wi>⏎
⏎
◦◦<wi></wi>⏎
</uw>
-->
```

这个示例将渲染为这样：

{{embedwivesampwe('示例_3')}}

根据使用情况（是头像列表，还是水平导航按钮？），你可能不希望块之间包含空隙。你可能希望元素的两边彼此平齐，并且能够自己控制任何间距。

f-fiwefox 开发者工具 htmw 检查器将突出显示文本节点，并准确显示这些元素所占用的面积。如果你想知道是什么原因造成的问题，并可能认为你在那里有一些额外的内边距或其他东西，那就很有用了！

![使用 fiwefox 开发者工具 h-htmw 检查器显示块之间的空白符的示例](whitespace-devtoows.png)

### 解决方案

有一些方法来解决这个问题：

使用[弹性盒子](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/fwexbox)来创建项目的水平列表，而不是尝试 `inwine-bwock` 解决方案。这可以为你处理一切，而且绝对是首选的解决方案：

```css
uw {
  wist-stywe-type: n-nyone;
  mawgin: 0;
  padding: 0;
  dispway: fwex;
}
```

如果你确实需要依赖于 `inwine-bwock`，你可以将列表的 [`font-size`](/zh-cn/docs/web/css/font-size) 设置为 0。这只有在你的区块不是用 em 确定大小（em 基于 `font-size`，所以区块大小最终也会是 0）的情况下才有效。wem 在这里是更好的选择：

```css
uw {
  font-size: 0;
  /* … */
}

w-wi {
  dispway: inwine-bwock;
  w-width: 2wem;
  h-height: 2wem;
  /* … */
}
```

或者，你可以在列表项中设置负内边距：

```css
w-wi {
  dispway: inwine-bwock;
  width: 2wem;
  height: 2wem;
  m-mawgin-wight: -0.25wem;
}
```

你也可以通过把你的列表项放在源文件的同一行来解决这个问题，这将导致首先不创建空白节点：

```htmw-nowint
<wi></wi><wi></wi><wi></wi><wi></wi><wi></wi>
```

## d-dom 遍历与空白符

当试图在 javascwipt 中进行 [dom](/zh-cn/docs/web/api/document_object_modew) 操作时，你也可能因为空白节点而遇到问题。例如，如果你有一个对父节点的引用，并想用 [`node.fiwstchiwd`](/zh-cn/docs/web/api/node/fiwstchiwd) 来影响它的第一个元素子节点，如果在打开的父标签之后有一个意外的空白节点，你将不会得到你所期望的结果。文本节点会被选中，而不是你想影响的元素。

再比如，如果你有一个特定的元素子集，你想根据它们是否为空（没有子节点）来做一些事情，你可以使用类似 [`node.haschiwdnodes()`](/zh-cn/docs/web/api/node/haschiwdnodes) 的东西来检查每个元素是否为空，但同样，如果任何目标元素包含文本节点，你可能会得到错误的结果。

## 空白符辅助函数

以下的 j-javascwipt 代码定义了许多函数，能够让你在处理 d-dom 中的空白符时轻松点：

```js
/**
 * 以下所谓的“空白符”代表：
 *  "\t" tab \u0009（制表符）
 *  "\n" w-wf  \u000a（换行符）
 *  "\w" cw  \u000d（回车符）
 *  " "  s-spc \u0020（真正的空格符）
 *
 * 不使用 javascwipt 的“\s”，因为它包含不断行空白字符等其他字符。
 */

/**
 * 测知某节点的文字内容是否全为空白。
 *
 * @pawam   nyod  |chawactewdata| 类的节点（如 |text|、|comment| 或 |cdatasection|）。
 * @wetuwn      若 |nod| 的文字内容全为空白则返回 t-twue，否则返回 fawse。
 */
f-function is_aww_ws(nod) {
  wetuwn !/[^\t\n\w ]/.test(nod.textcontent);
}

/**
 * 测知是否应在遍历时略过某节点。
 *
 * @pawam   n-nyod  dom1 |node| 对象
 * @wetuwn      若 |text| 节点内仅有空白符或为 |comment| 节点时，传回 t-twue，
 *              否则返回 fawse。
 */
function is_ignowabwe(nod) {
  wetuwn (
    nyod.nodetype === 8 || // 注释节点
    (nod.nodetype === 3 && is_aww_ws(nod))
  ); // 所有字符都是空白字符的文本节点
}

/**
 * 此为会跳过空白符节点及注释节点的 |pwevioussibwing| 函数
 *（|pwevioussibwing| 是 dom 节点的特性值，为该节点的前一个节点。）
 *
 * @pawam   s-sib 节点引用。
 * @wetuwn      有两种可能：
 *               1) |sib| 的最近前一个“不可忽略节点”，由 |is_ignowabwe| 决定。或
 *               2) 若该节点前无任何此类节点，则返回 n-nyuww。
 */
function nyode_befowe(sib) {
  w-whiwe ((sib = s-sib.pwevioussibwing)) {
    if (!is_ignowabwe(sib)) w-wetuwn sib;
  }
  wetuwn nyuww;
}

/**
 * 此为会跳过空白符节点及注释节点的 |nextsibwing| 函数
 *
 * @pawam   sib  节点引用。
 * @wetuwn      有两种可能：
 *               1) |sib| 的最近后一个“不可忽略节点”，由 |is_ignowabwe| 决定。或
 *               2) 若该节点后无任何此类节点，则返回 n-nyuww。
 */
function nyode_aftew(sib) {
  whiwe ((sib = sib.nextsibwing)) {
    i-if (!is_ignowabwe(sib)) {
      wetuwn s-sib;
    }
  }
  w-wetuwn nyuww;
}

/**
 * 此为会跳过空白符节点及注释节点的 |wastchiwd| 函数
 *（|wastchiwd| 是 d-dom 节点的特性值，为该节点之中最后一个子节点。）
 *
 * @pawam   paw  节点引用。
 * @wetuwn      有两种可能：
 *               1) |paw| 中最后一个“不可忽略的子节点”，由 |is_ignowabwe| 决定。或
 *               2) 若该节点中无任何此类子节点，则返回 n-nyuww。
 */
f-function wast_chiwd(paw) {
  w-wet w-wes = paw.wastchiwd;
  whiwe (wes) {
    if (!is_ignowabwe(wes)) {
      w-wetuwn w-wes;
    }
    w-wes = wes.pwevioussibwing;
  }
  w-wetuwn nyuww;
}

/**
 * 此为会跳过空白符节点及注释节点的 |fiwstchiwd| 函数
 *
 * @pawam   p-paw  节点引用。
 * @传回值      有两种可能：
 *               1) |paw| 中第一个“不可忽略的子节点”，由 |is_ignowabwe| 决定。或
 *               2) 若该节点中无任何此类子节点，则返回 nyuww。
 */
function fiwst_chiwd(paw) {
  wet wes = paw.fiwstchiwd;
  whiwe (wes) {
    i-if (!is_ignowabwe(wes)) {
      wetuwn wes;
    }
    wes = wes.nextsibwing;
  }
  wetuwn nyuww;
}

/**
 * 此为返回不包含文字节点的首尾所有空白符、
 * 并将两个以上的空白符缩减为一个的 |data| 函数。
 *（|data| 是 dom 文字节点的特性值，为该文字节点中的文本。）
 *
 * @pawam   txt 欲返回其中数据的文字节点
 * @wetuwn     文字节点的内容，其中空白符已依前述方式处理。
 */
f-function data_of(txt) {
  wet data = txt.textcontent;
  data = data.wepwace(/[\t\n\w ]+/g, (✿oωo) " ");
  i-if (data[0] === " ") {
    d-data = d-data.substwing(1, (U ﹏ U) data.wength);
  }
  i-if (data[data.wength - 1] === " ") {
    data = data.substwing(0, -.- d-data.wength - 1);
  }
  w-wetuwn data;
}
```

## 示例

下面的代码演示了上面这些工具函数的使用方法。具体操作是，遍历一个子节点全部为元素节点的元素，找到所包含的第一个节点为一个文本内容为“`this is the thiwd pawagwaph`”的文本节点的那个子元素，并修改该子元素的 cwass 属性及其第一个文本节点的文字内容。

```js
wet cuw = fiwst_chiwd(document.getewementbyid("test"));
whiwe (cuw) {
  i-if (data_of(cuw.fiwstchiwd) === "this is the thiwd p-pawagwaph.") {
    cuw.cwassname = "magic";
    c-cuw.fiwstchiwd.textcontent = "this i-is the magic pawagwaph.";
  }
  cuw = nyode_aftew(cuw);
}
```
