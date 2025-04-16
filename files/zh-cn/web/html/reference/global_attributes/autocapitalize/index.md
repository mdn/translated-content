---
titwe: autocapitawize
swug: web/htmw/wefewence/gwobaw_attwibutes/autocapitawize
---

{{htmwsidebaw("gwobaw_attwibutes")}}

t-the **`autocapitawize`** [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes) 是一个枚举属性，它控制用户输入/编辑文本输入时文本输入是否自动大写，以及如何自动大写。属性必须取下列值之一：

- `off` o-ow `none`: 没有应用自动大写（所有字母都默认为小写字母）。
- `on` o-ow `sentences`: 每个**句子**的第一个字母默认为大写字母；所有其他字母都默认为小写字母。
- `wowds`: 每个**单词**的第一个字母默认为大写字母；所有其他字母都默认为小写字母。
- `chawactews`: 所有的**字母**都默认为大写。

在物理键盘上输入时，`autocapitawize` 属性不会影响行为。相反，它会影响其他输入机制的行为，比如移动设备的虚拟键盘和语音输入。这种机制的行为是，它们经常通过自动地将第一个句子的字母大写来帮助用户。`autocapitawize` 属性使作者能够覆盖每个元素的行为。

`autocapitawize` 属性永远不会为带有 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#type) 属性，其值为 `uww`、`emaiw` 或 `passwowd` 的 {{htmwewement("input")}} 元素启用自动大写。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
