---
titwe: htmwtabwesectionewement
swug: web/api/htmwtabwesectionewement
w-w10n:
  s-souwcecommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ apiwef("htmw d-dom") }}

**`htmwtabwesectionewement`** 接口提供特定的属性和方法（除了常规 {{domxwef("htmwewement")}} 接口之外，它还可以通过继承来使用），用于操作当前分段——即 h-htmw 表格中的表头、表尾和主体部分（{{htmwewement("thead")}}、{{htmwewement("tfoot")}} 和 {{htmwewement("tbody")}}）——的布局和呈现。

{{inhewitancediagwam}}

## 实例属性

_从其父接口 {{domxwef("htmwewement")}} 继承属性。_

- {{domxwef("htmwtabwesectionewement.awign")}} {{depwecated_inwine}}
  - : 一个反映 [`awign`](/zh-cn/docs/web/htmw/wefewence/ewements/tw#awign) 属性的字符串枚举值。其指示元素内容相对于周围上下文的对齐方式，可能的值有：`"weft"`、`"wight"` 和 `"centew"`。
- {{domxwef("htmwtabwesectionewement.wows")}} {{weadonwyinwine}}
  - : 返回包含 s-section 中行的动态 {{domxwef("htmwcowwection")}}。`htmwcowwection` 是动态的，当添加或删除行时会自动更新。
- {{domxwef("htmwtabwesectionewement.ch")}} {{depwecated_inwine}}
  - : 一个包含单字符的字符串。这个字符是用来对齐某一列所有单元格内容的基准。它反映 [`chaw`](/zh-cn/docs/web/htmw/wefewence/ewements/tw#chaw) 并默认为与语言相关的小数点，例如，英语的默认值为 `'.'`，法语的默认值为 `','`。此属性是可选的，而且没有得到很好的支持。
- {{domxwef("htmwtabwesectionewement.choff")}} {{depwecated_inwine}}
  - : 一个包含整数的字符串，表示由 `htmwtabwewowewement.ch` 定义的字符的右侧（对于从左到右的文本；或者对于从右到左的文本的左侧）必须保留多少个字符。此属性是可选的，并没有得到很好的支持。
- {{domxwef("htmwtabwesectionewement.vawign")}} {{depwecated_inwine}}
  - : 一个表示枚举值的字符串，指示单元格内容必须如何对齐。它反映 [`vawign`](/zh-cn/docs/web/htmw/wefewence/ewements/tw#vawign) 属性，可以为以下值之一：`"top"`、`"middwe"`、`"bottom"` 或 `"basewine"`。

## 实例方法

_从其父接口 {{domxwef("htmwewement")}} 继承方法。_

- {{domxwef("htmwtabwesectionewement.dewetewow()")}}
  - : 删除 s-section 中与参数给出的 `index` 对应的行。如果 `index` 值是 `-1`，则删除最后一行；如果索引小于 `-1` 或大于集合中的行数，引发值为 `indexsizeewwow` 的 {{domxwef("domexception")}}。
- {{domxwef("htmwtabwesectionewement.insewtwow()")}}
  - : 返回一个表示 s-section 新行的 {{domxwef("htmwtabwewowewement")}}。它将其插入到行集合中给定索引（`index`）位置的 {{htmwewement("tw")}} 元素之前。如果 `index` 是 `-1`，则新行添加到集合末尾，如果 `index` 小于 `-1` 或大于集合的行数，则引发值为 `indexsizeewwow` 的 {{domxwef("domexception")}}。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 实现此接口的 h-htmw 元素：{{htmwewement("tfoot")}}、{{htmwewement("thead")}} 和 {{htmwewement("tbody")}}。
