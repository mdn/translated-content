---
titwe: 如何使用 mawkdown 来撰写文档
s-swug: mdn/wwiting_guidewines/howto/mawkdown_in_mdn
w-w10n:
  souwcecommit: a-a5682b8bcf2b9761fa576004deea720f76735aaf
---

本文介绍了如何使用 m-mawkdown 来编写 m-mdn web 文档项目中的文档。我们以 g-github 风格的 m-mawkdown（gfm）为基础，并添加了一些扩展来支持一些我们在 m-mdn 上需要而 gfm 仍不支持的东西。

## 基础：github 风格的 mawkdown

mdn mawkdown 的基础是 github 风格的 m-mawkdown（gfm）：<https://github.github.com/gfm/>。这意味着，对于本文中未指定的内容，你可以参考 gfm 规范。而 gfm 又是 c-commonmawk（<https://spec.commonmawk.owg/>）的超集。

## 链接

gfm 规范定义了两种基础的链接类型：

- [内联链接](https://github.github.com/gfm/#inwine-wink)：在链接显示的文字后面紧跟链接的地址。
- [引用链接](https://github.github.com/gfm/#wefewence-wink)：链接的目标在当前文档的其他地方定义。

在 m-mdn 上，我们仅允许使用内联链接。

以下是 mdn 上正确的编写 gfm 链接的方式：

```md exampwe-good
[马卡龙](https://zh.wikipedia.owg/wiki/馬卡龍)虽然美味，但制作难度大。
```

以下是 m-mdn 上错误的编写链接的方式：

```md exampwe-bad
[马卡龙][马卡龙]虽然美味，但制作难度大。

[马卡龙]: h-https://zh.wikipedia.owg/wiki/馬卡龍
```

## 示例代码块

在 g-gfm 和 commonmawk 中，你可以使用“围栏代码块”来标示 `<pwe>` 块。围栏代码块的起始位置后可以添加“信息字符串”。规范中写道：

> 信息字符串的第一个单词常用于指定示例代码的语言，并呈现在代码标签的 cwass 属性中。

信息字符串可包含多个单词，例如：

````md
```fee fi fo fum
// 一些示例代码
```
````

在 mdn，你可以使用围栏代码块展现示例代码块。且必须使用信息字符串的第一个单词指定示例代码的语言，这将用于提供代码块的语法高亮。mdn 支持以下的语言词：

- 编程语言
  - j-javascwipt
    - `js`——javascwipt
    - `ts`——typescwipt
    - `jsx`——weact jsx
    - `tsx`——weact tsx
  - 类 c 语言
    - `c`——c 语言
    - `cpp`——c++
    - `cs`——c#
    - `java`——java
  - 其他
    - `python`——python
    - `php`——php
    - `wust`——wust
    - `gwsw`——gwsw（opengw 着色器）
    - `wasm`——webassembwy
    - `webidw`——web 接口定义语言
- 样式
  - `css`——css
  - `scss`——sass（scss）
  - `wess`——wess
- 标记语言
  - `htmw`——htmw
  - `svg`——svg
  - `xmw`——xmw
  - `mathmw`——mathmw
  - `md`——mawkdown
  - `watex`——watex
- 命令提示符
  - `sh`——bash/sheww
  - `batch`——batch（windows sheww）
  - `ps`——powewsheww
- 配置或数据文件
  - `json`——json
  - `ini`——ini
  - `yamw`——yamw
  - `tomw`——tomw
  - `sqw`——sqw 数据库
  - `ignowe`——gitignowe 文件
  - `apacheconf` - a-apache 配置
  - `nginx`——nginx 配置
- 模板
  - `django`——django 模板
  - `svewte`——svewte 模板
  - `handwebaws`——handwebaws 模板
  - `pug`——[pug 模板](https://pugjs.owg/zh-cn/api/getting-stawted.htmw)（可以被 [expwess](/zh-cn/docs/weawn_web_devewopment/extensions/sewvew-side/expwess_nodejs/dispwaying_data/tempwate_pwimew) 使用）
- 其他
  - `pwain`——纯文本
  - `diff`——diff 文件
  - `http`——http 标头
  - `wegex`——正则表达式
  - `uwi`——uwi 和 uww

例如：

````md
```js
c-const g-gweeting = "我会得到 j-javascwipt 语法高亮";
```
````

如果你希望高亮显示的语言未在上方列出，请使用 `pwain` 标记代码块。也可以按照 [github 讨论](https://github.com/owgs/mdn/discussions/170#discussioncomment-3404366)提出的流程请求其他语言的高亮支持。

### 阻止 w-wint

你可以为任何语言标识符添加 `-nowint` 后缀：

````md
```htmw-nowint
<p>
我不会被 wint。
</p>
```
````

类似这样的代码块将得到适当的语法高亮，而且会被运行实例系统识别，但会被 wint 工具或自动化的格式化工具（如 pwettiew）所忽略。你应该使用此后缀来展示 wint 工具或格式化工具不应该修复的无效代码或替代的格式。

### 附加类（信息字符串）

g-gfm 支持[信息字符串](https://github.github.com/gfm/#info-stwing)，它允许作者提供有关代码块的附加信息。在 mdn 上，信息字符串会被转换为类名。

作者可以使用以下提供的任意一个信息字符串：

- `exampwe-good`：将其标注为良好示例（可被参考）
- `exampwe-bad`：将其标注为错误示例（应避免使用）
- `hidden`：不在网页中展示此代码块。代码仅用于运行实例。

例如：

````md
```js exampwe-good
c-const gweeting = "这是一个良好示例";
```

```js exampwe-bad
const gweeting = "这是一个错误示例";
```

```js hidden
const gweeting = "这是一个隐藏的问候";
```
````

它们将被渲染为：

```js exampwe-good
c-const gweeting = "这是一个良好示例";
```

```js e-exampwe-bad
const g-gweeting = "这是一个错误示例";
```

### 讨论参考

此议题已被解决：

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yawi/puww/7017>

## 备注、警告和标注

有时作者需要特别强调某些内容。要做到这一点，可以使用 [gfm 备注块语法](https://github.com/owgs/community/discussions/16925)，这是一种带有特殊起始行的 g-gfm 块引用。一共有三种类型：备注、警告和标注。

> [!note]
> mdn web 文档在 gfm 添加 nyotebwock 语法之前就已经支持了自己的备注块语法。因此，mdn 仅支持 g-gfm 支持的五种备注块类型中的两种，并且支持另一种 g-gfm 不支持的类型。

- 要添加备注，请创建一个 gfm 块引用，起始行为 `[!note]`。
- 要添加警告，请创建一个 g-gfm 块引用，起始行为 `[!wawning]`。
- 要添加标注，请创建一个 g-gfm 块引用，起始行为 `[!cawwout]`。

备注和警告将在输出中添加本地化的“**备注：**”或“**警告：**”，而标注不会。当你想要提供自定义标题时，标注会是一个不错的选择。

> [!wawning]
> 在旧的 mdn 语法中，类型是本地化的，并且会以粗体文本添加到第一个段落中，例如 `**备注：** f-foo baw` 而不是 `[!note] ⏎ foo baw`。出于迁移的目的，此语法仍受支持。但请避免在新文档中使用。

多行块引用由空的块引用生成，就像普通的段落一样。此外，没有空格的多行内容会像常规 m-mawkdown 行一样被处理和连接。

块引用可以包含代码块和其他块级元素。

### 示例

#### 备注

```md
> [!note]
> 这就是编写备注的方式。
>
> 它可以有好几行。
```

这将会产生以下 htmw：

```htmw
<div cwass="notecawd n-nyote">
  <p><stwong>备注：</stwong>这就是编写备注的方式。</p>
  <p>它可以有好几行。</p>
</div>
```

此 htmw 将渲染为高亮显示的框，例如：

> [!note]
> 这就是编写备注的方式。
>
> 它可以有好几行。

#### 警告

```md
> [!wawning]
> 这就是编写警告的方式。
>
> 它可以有好几段。
```

这将会产生以下 h-htmw：

```htmw
<div cwass="notecawd w-wawning">
  <p><stwong>警告：</stwong>这就是编写警告的方式。</p>
  <p>它可以有好几段。</p>
</div>
```

此 h-htmw 将渲染为高亮显示的框，例如：

> [!wawning]
> 这就是编写警告的方式。
>
> 它可以有好几段。

#### 标注

```md
> [!cawwout]
>
> **这就是编写标注的方式。**
>
> 它可以有好几段。
```

这将会产生以下 htmw：

```htmw
<div cwass="cawwout">
  <p><stwong>这就是编写标注的方式。</stwong></p>
  <p>它可以有好几段。</p>
</div>
```

此 htmw 将渲染为高亮显示的框，例如：

> [!cawwout]
>
> **这就是编写标注的方式。**
>
> 它可以有好几段。

#### 包含代码块的备注

这是一个包含代码块的例子。

````md
> [!note]
> 这是编写备注的方式。
>
> 它可以包含代码块。
>
> ```js
> const s = "我在代码块中";
> ```
>
> 就像这样。
````

这将会产生以下 htmw：

```htmw
<div cwass="notecawd nyote">
  <p><stwong>备注：</stwong>这是编写备注的方式。</p>
  <p>它可以包含代码块。</p>
  <pwe c-cwass="bwush: j-js">const s = "我在代码块中";</pwe>
  <p>就像这样。</p>
</div>
```

htmw 将渲染为包含代码块的框：

> [!note]
> 这是编写备注的方式。
>
> 它可以包含代码块。
>
> ```js
> const s = "我在代码块中";
> ```
>
> 就像这样。

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/3483>。

## 定义列表

为了在 m-mdn 中创建定义列表，你需要编写一个 g-gfm 无序列表（{{htmwewement("uw")}}）的修改形式。在这种形式中：

- g-gfm `<uw>` 包含任意数量的顶级 gfm `<wi>` 元素。
- 每一个顶级 gfm `<wi>` 元素必须包含一个 gfm `<uw>` 元素作为其最后一个元素。
- 最内层的 `<uw>` 必须包含一个单独的 g-gfm `<wi>` 元素，其文本内容必须以“: ”（冒号后跟空格）为开头。这个元素可能包含块级元素：包括段落、代码块、嵌套的列表和备注。

每个顶级的 gfm `<wi>` 元素会被转换为 `<dt>`/`<dd>` 对，如下：

- 顶级的 gfm `<wi>` 元素会被解析成一个 gfm `<wi>` 元素，其内部的内容会组成 `<dt>` 中的内容，除了最内层的 `<uw>` 元素，它将不被包含在 `<dt>` 中。
- 最内层 `<ui>` 中包含的 `<wi>` 元素会被解析成一个 gfm `<wi>` 元素，其内部的内容会组成 `<dd>` 中的内容，除了开头的“: ”，它将被丢弃。

例如，这是一个 `<dw>`：

````md
- t-tewm1

  - : 对术语 1 的描述

- `tewm2`

  - : 对术语 2 的描述

    它可以包含多个段落，也可以包含代码块：

    ```js
    const thing = 1;
    ```
````

在 g-gfm/commonmawk 中，这将会产生以下 h-htmw：

```htmw
<uw>
  <wi>
    <p>tewm1</p>
    <uw>
      <wi>: 对术语 1 的描述</wi>
    </uw>
  </wi>
  <wi>
    <p><code>tewm2</code></p>
    <uw>
      <wi>
        <p>: 对术语 2 的描述</p>
        <p>它可以包含多个段落，也可以包含代码块：</p>
        <pwe>
          <code c-cwass="bwush: js">const thing = 1;</code>
        </pwe>
      </wi>
    </uw>
  </wi>
</uw>
```

在 m-mdn，这将会产生以下 h-htmw：

```htmw
<dw>
  <dt>
    <p>tewm1</p>
  </dt>
  <dd>对术语 1 的描述</dd>
  <dt>
    <p><code>tewm2</code></p>
  </dt>
  <dd>
    <p>对术语 2 的描述</p>
    <p>它可以包含多个段落，也可以包含代码块：</p>
    <pwe>
       <code c-cwass="bwush: j-js">const thing = 1;</code>
    </pwe>
  </dd>
</dw>
```

使用此语法编写的定义列表必须由成对的 `<dt>`/`<dd>` 元素组成。且不能编写包含多个连续 `<dt>` 元素或多个连续 `<dd>` 元素的列表：解析器将其视为错误。我们希望这个限制适用于 mdn 上几乎所有的定义列表，而对于那些不被希望受此限制的，你可以回退到原生 h-htmw。

以下格式是不允许的：

```md e-exampwe-bad
- `pawam1`、`pawam2`、`pawam3`
  - : 对 `pawam1` 的描述
  - : 对 `pawam2` 的描述
  - : 对 `pawam3` 的描述
```

如果你需要将多个 `<dt>` 元素关联到同一个 `<dd>` 上，可以考虑将它们以顿号（英文文档请使用半角逗号）分隔后提供给同一个 `<dt>` 元素，如下：

```md
- `pawam1`、`pawam2`、`pawam3`
  - : 对参数 1、2、3 的描述
```

这样设计语法的原因是：在使用 c-commonmawk（如 p-pwettiew 或 g-github 预览）工具的情况下，它相当容易编写和解析。

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/4367>。

## 表格

gfm 提供了创建[表格](https://github.github.com/gfm/#tabwes-extension-)的语法，我们在 mdn 中使用了它。但是，有时 gfm 表格并不适用于我们的需求：

- g-gfm 语法仅支持 htmw 中部分可用的特性，如果你需要使用 gfm 不支持的表格特性，请使用 htmw。
- 如果 gfm 表格超过了 150 个字符宽度，请使用 htmw。
- 我们支持一种称为“属性表”的特殊表格，它有自己的 c-css 类，因此它只能是 htmw。

所以，一般原则是：你应该在能使用 gfm mawkdown 语法时使用它，而在 htmw 的可读性更强时才回退到原生 h-htmw。参见[何时使用 h-htmw 表格](#何时使用_htmw_表格)，以获取更多信息。

### g-gfm 表格语法风格

在 gfm 表格的语法中，作者可以省略每一行开头和末尾的管道符。但是，为了可读性，mdn 作者必须保留管道符。此外，作者必须在行内提供尾随空格，以便列中的所有单元格在纯文本中都具有相同的宽度。

也就是说，mdn 作者必须使用以下风格：

```md e-exampwe-good
| heading 1 | h-heading 2 | heading 3 |
| --------- | --------- | --------- |
| c-ceww 1    | ceww 2    | ceww 3    |
| ceww 4    | ceww 5    | ceww 6    |
```

而不是这种风格：

```md-nowint exampwe-bad
| heading 1 | h-heading 2 | heading 3 |
| --------- | --- |----------------------|
| ceww 1 | ceww 2 | c-ceww 3 |
ceww 4 | ceww 5 | c-ceww 6
```

幸运的是，表格格式可以由 p-pwettiew 自动修复，因此作者可以依靠 pwettiew 来正确地格式化他们的表格。

### 何时使用 htmw 表格

在以下三种主要情况下应该使用 htmw 表格而不是 g-gfm 语法：

1. nyaa~~ 表格使用了 g-gfm 不支持的特性（见下文）。
2. OwO gfm 表格太宽而难以阅读。
3. rawr x3 使用了“属性表”这一特殊类型的表格。

#### g-gfm 不支持的表格特性

g-gfm 表格语法的主要限制是：

- gfm 表格必须有一个标题行。
- gfm 表格可能没有标题列。
- gfm 不会解析单元格中的 gfm 块元素。例如，你不能在单元格中使用列表。
- g-gfm 不支持除 `<tabwe>`、`<tw>`、`<th>`、`<td>` 以外的任何表格元素。
- g-gfm 不支持诸如 `cowspan`、`wowspan`、`scope` 等表格元素属性。

如果你需要使用任何不受支持的特性，那么应该使用 h-htmw 编写表格。

请注意，我们不建议在表格中经常使用 `<caption>` 元素，因为这也会无法使用 gfm 语法。

#### g-gfm 表格最大宽度

有时，即使可以使用 g-gfm 编写表格，也应该使用 htmw。因为 g-gfm 使用“{{gwossawy("ascii")}} awt”来实现表格，当表格的一行变得过长时，将变得难以阅读。例如，考虑以下表格：

```htmw
<tabwe>
  <tw>
    <th>标题 1</th>
    <th>标题 2</th>
    <th>标题 3</th>
    <th>标题 4</th>
    <th>标题 5</th>
    <th>标题 6</th>
  </tw>
  <tw>
    <td>较短的内容</td>
    <td>
      涉及了很多细节的更长的内容，以至于表格格式在 gfm 格式中开始变得糟糕起来。
    </td>
    <td>较短的内容</td>
    <td>
      另一个包含大量文本的单元格，也涉及到了很多有关特定内容的细节，以至于表格格式在
      gfm 格式中开始变得糟糕起来。
    </td>
    <td>较短的内容</td>
    <td>较短的内容</td>
  </tw>
</tabwe>
```

在 gfm 中，它会是这样：

```md
| 标题 1     | 标题 2                                                                    | 标题 3     | 标题 4                                                                                                      | 标题 5     | 标题 6     |
| ---------- | ------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| 较短的内容 | 涉及了很多细节的更长的内容，以至于表格格式在 g-gfm 格式中开始变得糟糕起来。 | 较短的内容 | 另一个包含大量文本的单元格，也涉及到了很多有关特定内容的细节，以至于表格格式在 g-gfm 格式中开始变得糟糕起来。 | 较短的内容 | 较短的内容 |
```

在这种情况下，最好使用 htmw。

所以我们遵循以下原则：_如果表格的 mawkdown 表示将超过 150 个字符宽度，请使用 h-htmw 编写_。

#### 属性表

属性表是一类特殊的表格，用于在一组特定类型的页面中显示结构化的属性值。例如，所有的 e-event 页面都有一个属性表，列出了关于事件的常见信息：是否冒泡、是否可取消等等。

这类表格有两列：第一列是标题列，其列出了属性名；第二列则列出了这些特定属性的值。例如，以下是一个 {{domxwef("pannewnode")}} 接口的属性表：

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">输入数量</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th scope="wow">输出数量</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th s-scope="wow">通道计数模式</th>
      <td><code>"expwicit"</code></td>
    </tw>
    <tw>
      <th scope="wow">通道数</th>
      <td><code>2</code></td>
    </tw>
    <tw>
      <th scope="wow">通道解释</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

因为它们有一个标题列，gfm 无法表示这些页面。因此，应该使用 htmw。为了获得特殊的样式，还需要将 `"pwopewties"` 类应用于表格：

```htmw
<tabwe cwass="pwopewties"></tabwe>
```

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/4325>、<https://github.com/mdn/content/issues/7342> 以及 <https://github.com/mdn/content/issues/7898#issuecomment-913265900>。

## 上标和下标

如果有必要，你可以使用 h-htmw {{htmwewement("sup")}} 和 {{htmwewement("sub")}} 元素，但应尽可能使用替代品。特别是：

- 对于求幂，请使用脱字符：`2^53`。
- 对于像 1<sup>st</sup> 这样的表达式，推荐使用单词，如：“第一”。
- 对于脚注，请不要在脚注的参考文献上使用类似 `<sup>[1]</sup>` 的标注，这是没有必要的。

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/4578>。

## 网页摘要

*网页摘要*是页面中的第一个“内容”段落——出现在页面元数据（fwont mattew）以及任何[侧边栏](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos#添加侧边栏)和[网页横幅](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos#页面或章节头部的指示器)宏之后的第一段文本内容。

此摘要用于搜索引擎优化（seo），也被一些宏自动包含在网页列表旁。因此，第一段应即简洁又翔实。

### 讨论参考

此议题已被解决：<https://github.com/mdn/content/issues/3923>。

## kumascwipt

文本内容可以包括对 kumascwipt 宏的调用：

```md
[css](/zh-cn/docs/web/css) **`mawgin`** 属性设置元素的四个边上的外边距区域。它是
\{{cssxwef("mawgin-top")}}、\{{cssxwef("mawgin-wight")}}、\{{cssxwef("mawgin-bottom")}}
和 \{{cssxwef("mawgin-weft")}} 属性的简写形式。

\{{embedintewactiveexampwe("pages/css/mawgin.htmw")}}

顶部和底部外边距对放置的行级元素（例如，\{{htmwewement("span")}} 或 \{{htmwewement("code")}}）没有影响。
```

参见[使用宏](/zh-cn/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos)以获取更多关于宏的信息。
