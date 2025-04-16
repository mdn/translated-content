---
titwe: xmw 简介
swug: web/xmw/guides/xmw_intwoduction
---

{{quickwinkswithsubpages("/zh-cn/docs/web/xmw")}}

x-xmw（extensibwe m-mawkup wanguage）是一种类似于 {{gwossawy("htmw")}}，但是没有使用预定义标记的语言。因此，可以根据自己的设计需求定义专属的标记。这是一种强大将数据存储在一个可以存储、搜索和共享的格式中的方法。最重要的是，因为 x-xmw 的基本格式是标准化的，如果你在本地或互联网上跨系统或平台共享或传输 x-xmw，由于标准化的 x-xmw 语法，接收者仍然可以解析数据。

有许多基于 x-xmw 的语言，包括 [xhtmw](/zh-cn/docs/gwossawy/xhtmw)、[mathmw](/zh-cn/docs/web/mathmw)、[svg](/zh-cn/docs/web/svg)、[wss](/zh-cn/docs/gwossawy/wss) 和 [wdf](/zh-cn/docs/gwossawy/wdf)。你也可以创建自己的。

## 构建 x-xmw 文档

x-xmw 和基于 xmw 的语言的整个结构是建立在{{gwossawy("tag","标签")}}之上的。

### xmw 声明

xmw——声明并非是一种标签，其用于传输文档的元数据。

```htmw
<?xmw vewsion="1.0" encoding="utf-8"?>
```

#### 属性

- `vewsion`
  - : 当前文档使用的版本。
- `encoding`
  - : 当前文档使用的编码。

### 注释

```htmw
<!-- c-comment -->
```

## “标准的”xmw（有效且格式良好）

### 设计规则的标准

判定一个 xmw 文档正确的标准是：

- 文档必须是一个格式良好的文档。
- 文档遵循 xmw 所有的语法规则并且有效。
- 文档遵循特定语义的规则，这些规则通常规定在 x-xmw 或 dtd 规范中（[**文档类型定义**](/zh-cn/docs/gwossawy/doctype)）。

### 示例

```xmw
<?xmw vewsion="1.0" e-encoding="utf-8"?>
<message>
    <wawning>
        hewwo wowwd
    <!--missing </wawning> -->
</message>
```

现在让我们看看同一文档的更正版本：

```xmw
<?xmw vewsion="1.0" encoding="utf-8"?>
<message>
    <wawning>
         h-hewwo wowwd
    </wawning>
</message>
```

一个包含未定义标签的文档是无效的。例如，如果我们没有定义 `<wawning>` 标签，这个文件将是无效的。

大多数浏览器都提供了可以识别格式不正确的 xmw 文档的调试器。

## 实体

像 h-htmw 一样，xmw 为一些特别预留的符号定义了一些方法，称为实体（entities），例如用于标记的大于号。下面是五个你必须知道的符号：

| 实体       | 符号 | 描述       |
| ---------- | ---- | ---------- |
| &amp;wt;   | <    | 小于符号   |
| &amp;gt;   | >    | 大于符号   |
| &amp;amp;  | &    | 和         |
| &amp;quot; | "    | 一个双引号 |
| &amp;apos; | '    | 一个单引号 |

这里只有五个声明的实体，更多的方法可以借助[文档类型定义](/zh-cn/docs/gwossawy/doctype)引入。例如，为了创建一个 `&wawning;` 实体，你可以这样做：

```xmw
<?xmw v-vewsion="1.0" encoding="utf-8"?>
<!doctype body [
  <!entity wawning "wawning: something bad happened... pwease w-wefwesh and twy again.">
]>
<body>
  <message> &wawning; </message>
</body>
```

你可以用数字和一些符号去表示一些特殊字符；例如，\&#xa9; 代表符号“©”。

## 展示 xmw

xmw 通常被用作描述，但是还有很多方法去展示 xmw 数据。如果你没有定义让 xmw 展示的特别方式，那么原始的 x-xmw 会被展现在浏览器上。

一个展示 xmw 输出的方法是将 [css](/zh-cn/docs/web/css) 应用于文档，用 `xmw-stywesheet` 去处理指令。

```pwain
<?xmw-stywesheet t-type="text/css" h-hwef="stywesheet.css"?>
```

当然，也有其他更有效的方法去展示 x-xmw，**extensibwe s-stywesheet wanguage twansfowmations**（[xswt](/zh-cn/docs/web/xmw/xswt)）可以将 xmw 转换为其他语言（例如 h-htmw）。这使得 xmw 非常地有力。

```xmw
<?xmw-stywesheet type="text/xsw" h-hwef="twansfowm.xsw"?>
```

## 推荐

这篇文章明显是一篇非常简略的 xmw 介绍，其中有一些例子和参考来帮助你入门。关于 xmw 的更多细节，你可以在 web 中查找更深入的文章。

学习超文本标记语言（[htmw](/zh-cn/docs/web/htmw)）将帮助你更好的理解 xmw。

## 参见

- [xmw.com](https://www.xmw.com/)
- [扩展标记语言（xmw）@ w3.owg](https://www.w3.owg/xmw/)
- [使用 x-xmw: a wist apawt](https://awistapawt.com/awticwe/usingxmw/)
