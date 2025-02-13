---
title: 语法小节
slug: MDN/Writing_guidelines/Page_structures/Syntax_sections
---

MDN 参考页面的语法小节包含一个语法框，其定义了某个特性的确切语法（例如，它可以接受哪些参数，哪些参数是可选的）。本文将解释如何编写参考页面的语法框。

## API 参考语法

API 参考页面的语法小节是手工书写的，并且通常根据所记录特性的不同有所区别。语法小节以命名为“语法”的标题开头（且通常是二级标题 `##`），并且必须在参考页面的顶部包含此小节（在介绍性文字下方）。标题下方是展示该特性准确语法的代码块，以围栏式代码语法 ` ```[标记语言] ` 标记。

下面的示例显示了一个典型语法部分（JavaScript 函数）的 Markdown 代码：

````md
## 语法

```js-nolint
slice()
slice(start)
slice(start, end)
```
````

> [!NOTE]
> 这里使用的标记语言是 `js-nolint`，其中 `js` 指示了应使用 JavaScript 语法进行高亮。对于 JavaScript 语法部分，也需要指定 `nolint`，因为该部分并不是完全的合法 JavaScript 代码，我们并不想让 linter“修正”它（这里省略了返回值和行尾分号）。

### 通用风格规则

语法块内的标记应遵循一些规则：

- **不要**用分号 `;` 结束每行。语法小节不是用来显示可运行代码的。因此，显示分号毫无意义。
- **不要**在语法块（或在 MDN 的任意示例代码块）内使用 \<code>。它不仅通常毫无用处，而且我们的标记也不需要它，如果包含它，就不会呈现你想要的效果。
- 只指定函数及其参数，下方是一些“修正过”的示例

  ```js-nolint
  querySelector(selector)
  // responseStr = element.querySelector(selector)

  new IntersectionObserver(callback, options)
  // const observer = new IntersectionObserver(callback, options)
  ```

### 构造函数和方法

#### 语法块

以语法块开头，就像这样（节选自 {{DOMxRef("IntersectionObserver.IntersectionObserver", "IntersectionObserver")}} 构造函数页）：

```js-nolint
new IntersectionObserver(callback, options)
```

或这样（节选自 {{DOMxRef("Document.hasStorageAccess()")}} 页）：

```js-nolint
hasStorageAccess()
```

如果是静态方法，如 {{DOMxRef("URL.createObjectURL()")}}，则一同提供它的接口：

```js-nolint
URL.createObjectURL(object)
```

##### 多行/可选参数

可用于多种不同方法的方法应扩展为多行，显示所有可能的变化。

每个选项应独立成行，省略每个选项的注释和赋值。例如，{{jsxref("Array.prototype.slice()")}} 有两个可选参数，其文档如下所示：

```js-nolint
slice()
slice(begin)
slice(begin, end)
```

类似的示例是 {{DOMxRef("CanvasRenderingContext2D.drawImage")}}：

```js-nolint
drawImage(image, dx, dy)
drawImage(image, dx, dy, dWidth, dHeight)
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
```

{{jsxref("Date")}} 构造函数也是这样：

```js-nolint
new Date()
new Date(value)
new Date(dateString)
new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
```

##### 形式语法

语法部分不应使用形式语法符号（使用[巴科斯范式](https://zh.wikipedia.org/wiki/巴科斯范式)），而应使用[如上所述](#多行可选参数)的扩展多行格式。

虽然形式化符号为复杂语法的描述提供了一种简洁的机制，但它并不为许多开发人员所熟悉，而且可能与特定编程语言的有效语法相冲突。例如，“`[ ]`”既表示“可选参数”，也表示 JavaScript {{jsxref("Array")}} 。你可以从下面 {{jsxref("Array.prototype.slice()")}} 的形式语法中看到这一点：

```js-nolint
arr.slice([begin[, end]])
```

在认为有益的特定情况下，可使用形式通知声明单独的**形式语法**部分。

##### 使语法块简洁

目的是使语法块尽可能纯粹、明确地定义功能的语法，不要包含任何无关的语法。例如，你可能会在网站的许多地方看到这种用于描述 promise 的语法形式：

```js-nolint
caches.match(request, options).then(function (response) {
  // 使用 response 完成一些事情
})
```

但下面这个版本要简洁得多，而且不包含多余的 {{JSxRef("Promise.prototype.then()")}} 方法调用：

```js-nolint
match(request, options)
```

##### 回调函数语法块

对于接受回调函数的方法，要将该回调作为参数展示，而不是箭头函数或 `function` 表达式。

```js-nolint
filter(callbackFn)
filter(callbackFn, thisArg)
```

然后，在“参数”小节，列出回调函数的参数和期望的返回类型。

```md
- `callbackFn`
  - : 为数组中的每个元素执行的函数。它应该返回一个[真值](/zh-CN/docs/Glossary/Truthy)以将元素保留在结果数组中，否则返回一个[假值](/zh-CN/docs/Glossary/Falsy)。该函数被调用时将传入以下参数：
    - `element`
      - : 数组中当前正在处理的元素。
    - `index`
      - : 正在处理的元素在数组中的索引。
    - `array`
      - : 调用了 `filter()` 的数组本身。
```

##### 接受任意数量参数的语法

对于接受任意数量参数的方法，语法块的写法如下：

```js-nolint
unshift()
unshift(element1)
unshift(element1, element2)
unshift(element1, element2, /* …, */ elementN)
```

这里更倾向于从 1 开始编号，这样可以写出“`unshift` 在数组开头添加 N 个元素”这样的描述，也可以写成“第一个元素”（而不是“第零个元素”）。

请注意，这里总是包含没有传递剩余参数的情况（即使没有意义）。然后，在“参数”小节中，像这样记录：

```md
- `element1`、…、`elementN`
  - : 添加到数组开头的元素。
```

如果不传递剩余参数具有意义，请在这里添加 `\{{optional_inline}}`。

另一个在剩余参数之前有一些位置参数的示例：

```js-nolint
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)
```

#### 参数小节

然后，包含一个“参数”小节，其中以描述列表的方式解释了每个参数及其作用。如果参数是包含多个成员的对象，可以包含一个嵌套的描述列表，该列表本身也包含对每个成员的解释。可选参数应在其名称旁标注 \\{{optional_inline}} 宏调用。

列表中每个参数的名称应包含在 markdown 代码标记 `` ` ` `` 中。

> [!NOTE]
> 即使该特性不接受任何参数，也应包含“参数”小节，其中的内容为“无”。

#### 返回值小节

然后，包含一个“返回值”小节，其中解释了构造函数或方法的返回值。请参阅上述链接作为示例。

如果没有返回值，使用以下文本：

无（\\{{jsxref("undefined")}}）。

#### 异常小节

最后，加入一个“异常”小节，说明在调用构造函数/方法时如果遇到问题会抛出哪些异常。这可能是因为参数名拼写错误或给定的数据类型错误，也可能是因为调用环境有问题（例如，试图在非安全环境中运行仅限于安全上下文的特性）或其他原因。

确定一个方法会抛出哪些异常需要仔细阅读规范。一般来说，通过规范中对某一特性如何运行的逐步解释，就能提供一份异常和导致异常抛出的情况的可靠列表。

异常情况名称和解释应使用描述列表的形式。

> [!NOTE]
> 如果该特性不抛出任何异常，则不需要包含“异常”小节，但也可以包含该小节，且内容为“无”。

### 属性

#### 值小节

属性不包含语法部分。取而代之的是添加一个“值”小节，其中包含对属性值的解释，说明其数据类型和用途。

#### 异常小节

如果访问属性时会出现异常，则应包含一个“异常”小节，对每种异常进行解释；该小节的结构应与上述方法和构造函数相同。

## JavaScript 参考语法

JavaScript 内置对象参考页面遵循与 API 参考页面相同的基本规则，例如方法和属性。你可能会发现一些不同之处：

- 对于只有一个构造函数的内置对象，构造函数语法通常包含在对象着陆页面中。例如，请参见 {{JSxRef("Date")}}。你会注意到，静态方法（存在于 `Date` 对象本身的方法）列在“方法”（Methods）下，而实例方法列在“Date.prototype 方法”（Date.prototype methods）下。
- 你还会注意到，没有参数/异常的方法更有可能在 JavaScript 参考页面中完全不包含这些小节。请参见 {{JSxRef("Date.getDate()")}} 和 {{JSxRef("Date.now()")}} 以了解示例。

## CSS 参考语法

### 属性

CSS 属性参考页面包括“语法”小节，该小节过去位于页面顶部，但现在越来越多地位于包含代码块的部分下方，代码块显示了该特性的典型用法，另外还有一个示例来说明该特性的作用（例如，请参见 {{CSSxRef("animation")}}）。

> [!NOTE]
> 这样做是因为 CSS 的形式语法非常复杂，MDN 的许多读者都不会使用，而且对初学者来说很不方便。真实的语法和示例对大多数人更有用。

在该小节中你会找到以下内容。

#### 可选说明文字

有些 CSS 属性不言自明，无需额外解释（例如 {{CSSxRef("color")}}）。另一方面，有些属性比较复杂，需要解释语法顺序、包含多个值等（参见 {{CSSxRef("animation")}}）。在这种情况下，可以在任何小节之前添加额外的解释。

#### 值小节

接下来，你应该包含一个“值”小节——该小节包含一个说明列表，解释构成属性值的 CSS 值类型。每种值类型都应该用角括弧括起来，并链接到涵盖该值类型的 MDN 参考页面（如果有相关页面的话）。例如，请参阅 {{CSSxRef("border")}} 属性参考——该属性参考了三种值类型，其中只有一种是链接的（{{CSSxRef("&lt;color&gt;")}}）。

#### 形式语法

最后一部分，“形式语法”，是根据 [MDN data 仓库](https://github.com/mdn/data)的 CSS 目录中的数据自动生成的。你只需在标题下方加入一个 `CSSSyntax` 宏调用，剩下的就交给它了。

唯一的复杂之处在于要确保所需的数据都已存在。[properties.json](https://github.com/mdn/data/blob/main/css/properties.json) 文件需要包含你要记录的属性的条目，而 [types.json](https://github.com/mdn/data/blob/main/css/types.json) 文件需要包含该属性值中使用的所有值类型的条目。

为此，你需要分叉 [MDN data 仓库](https://github.com/mdn/data)，在本地克隆你的分叉，在新分支中进行修改，然后向上游仓库提交拉取请求。你可以[在这里找到关于使用 Git 的更多细节](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)。

### 选择器

与属性页面相比，选择器参考页面的“语法”部分要简单得多。它包含一个使用“语法框”样式的块，显示了选择器的基本语法，无论是一个简单的关键字（例如 {{CSSxRef(":hover")}}），还是一个需要参数的更复杂的函数值（例如 {{CSSxRef(":not", ":not()")}}）。有时，参数会在语法块内的另一个条目中进行解释（以 {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}} 为例）。

该代码块由 [MDN data 仓库](https://github.com/mdn/data)的 CSS 目录中的数据自动生成。你只需在标题下方加入一个 `CSSSyntax` 宏调用，剩下的就交给它了。

唯一的复杂之处在于确保你需要的数据已经存在。[selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json) 文件需要包含你要记录的选择器的条目。

为此，你需要分叉 [MDN data 仓库](https://github.com/mdn/data)，在本地克隆你的分叉，在新分支中进行修改，然后向上游仓库提交拉取请求。你可以[在这里找到更多关于使用 Git 的细节](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)。

## HTML 参考语法

HTTP 参考语法全部是手工创建的，并根据要记录的 HTTP 特性类型而有所不同。

### HTTP 标头/内容安全策略标头

HTTP 标头语法（和内容安全策略）在页面的两个独立部分——“语法”和“指令”中进行了说明。

#### 语法小节

“语法”小节通过使用“语法框”样式的语法块来显示页眉的语法，包括显示值中可以包含哪些指令、顺序如何等的正式语法。例如，{{HTTPHeader("If-None-Match")}} 标头信息的语法块如下所示：

```http
If-None-Match: <etag_value>
If-None-Match: <etag_value>, <etag_value>, …
If-None-Match: *
```

有些标头有单独的请求指令、响应指令和扩展语法。如果有的话，这些语法必须包含在单独的语法块中，每个语法块都有自己的小节。请参阅 {{HTTPHeader("Cache-Control")}} 以了解示例。

#### 指令小节

“指令”小节包含一个说明列表，其中包含语法中可能出现的所有指令的名称和说明。

### HTTP 请求方法

请求方法的语法非常简单，只包含一个使用“语法框”样式的语法块，显示方法语法的结构。[GET 方法](/zh-CN/docs/Web/HTTP/Methods/GET)的语法如下：

```http
GET /index.html
```

### HTTP 响应状态码

同样，HTTP 响应状态代码的语法非常简单——一个包含代码和名称的语法块。例如：

```http
404 Not Found
```

## SVG 参考语法

### SVG 元素

SVG 元素语法部分是不存在的——就像 HTML 元素语法部分一样。每个 SVG 元素的参考页面都只是列出了适用于该元素的属性列表。请参见 {{SVGElement("feTile")}} 为例。

### SVG 属性

SVG 属性参考页面也不包含语法小节。

## 参见

- [MDN 中的 Markdown 语法](/zh-CN/docs/MDN/Writing_guidelines/Howto/Markdown_in_MDN#示例代码块)
