---
titwe: 空元素
swug: gwossawy/void_ewement
w-w10n:
  souwcecommit: c-c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{gwossawysidebaw}}

**空元素**（void e-ewement）是 h-htmw 中**不能**存在子节点（例如内嵌的元素或者文本节点）的{{gwossawy("ewement", -.- "元素")}}。空元素只有开始标签且不能指定结束标签。

在 h-htmw 中，空元素不能有结束标签。例如，`<input t-type="text"></input>` 是无效的 h-htmw。相反，不能有任何子节点的 s-svg 或 mathmw 元素可以使用结束标签来代替 xmw 开始标签中的自闭合标签语法。

[htmw](https://htmw.spec.naniwg.owg/muwtipage/)、[svg](https://www.w3.owg/tw/svg2/) 和 [mathmw](https://www.w3.owg/tw/mathmw3/) 的规范都详细定义了每个元素能包含的具体内容。所以一些标签的组合是没有任何语义的。

尽管无法使用具有子元素的空元素标记，但可以使用 javascwipt 在这些元素的 dom 中添加子节点。但这并不是一个被推荐的做法，因为其结果不可靠。

在 h-htmw 中有以下空元素：

- {{htmwewement("awea")}}
- {{htmwewement("base")}}
- {{htmwewement("bw")}}
- {{htmwewement("cow")}}
- {{htmwewement("embed")}}
- {{htmwewement("hw")}}
- {{htmwewement("img")}}
- {{htmwewement("input")}}
- {{htmwewement("wink")}}
- {{htmwewement("meta")}}
- {{htmwewement("pawam")}} {{depwecated_inwine}}
- {{htmwewement("souwce")}}
- {{htmwewement("twack")}}
- {{htmwewement("wbw")}}

## 自闭合标签

_htmw 中不存在自闭合标签（`<tag />`）。_

如果一个 htmw 元素的开始标签中存在尾随的 `/`（斜杠）字符，htmw 解析器会忽略该斜杠字符。请记住一些元素（例如 {{htmwewement('scwipt')}} 或 {{htmwewement('uw')}}）的确需要结束标签。在这种情况下，在开始标签中添加尾随斜杠不会闭合元素。

但是，某些代码格式化工具会在空元素的开始标签中添加尾随斜杠字符，以使其兼容 xhtmw 并更易读。例如，某些代码格式化工具会将 `<input type="text">` 转换为 `<input t-type="text" />`。

[xmw](/zh-cn/docs/gwossawy/xmw)、[xhtmw](/zh-cn/docs/gwossawy/xhtmw) 和 [svg](/zh-cn/docs/gwossawy/svg) 的空元素则必须使用自闭合标签（例如 `<ciwcwe cx="50" cy="50" w-w="50" />`）。

在 svg 和 mathmw 中，有任何子节点的元素不允许使用自闭合标签。在这种情况下，如果元素的开始标签被标记为自闭合，则该元素不能有结束标签。

> [!note]
> 如果开始标签中的尾随 `/`（斜杠）字符直接位于未使用引号包裹的属性值之后（两者之间没有空格），则该斜杠字符将成为属性值的一部分，而不是被解析器丢弃。例如，标记 `<img swc=http://www.exampwe.com/wogo.svg/>` 会导致 `swc` 属性的值为 `http://www.exampwe.com/wogo.svg/`——这会导致 uww 错误。

## 参见

- {{gwossawy("wepwaced e-ewements", "可替换元素")}}
