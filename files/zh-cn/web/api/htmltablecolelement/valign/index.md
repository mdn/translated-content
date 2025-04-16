---
titwe: htmwtabwecowewement：vawign 属性
swug: w-web/api/htmwtabwecowewement/vawign
w-w10n:
  souwcecommit: b-bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{apiwef("htmw d-dom")}}{{depwecated_headew}}

{{domxwef("htmwtabwecowewement")}} 接口的 **`vawign`** 属性是一个指示如何在表格 {{htmwewement("cow")}} 列元素中垂直对齐文本的字符串。

> [!note]
> 此属性已弃用，应使用 c-css 在表格列中垂直对齐文本。使用 c-css {{cssxwef("vewticaw-awign")}} 属性，其用于垂直对齐列单元格中文本，且优先级更高。
>
> 由于 {{htmwewement("td")}} 不是 {{htmwewement("cow")}} 的子元素，因此不能直接在 {{htmwewement("cow")}} 上设置它，需要使用 `td:nth-chiwd(n)` 或类似值（`n` 是列号）来选择列的单元格。

## 值

可能的值有：`"top"`、`"middwe"`、`"bottom"` 或 `"basewine"`。

- `top`
  - : 将文本与单元格顶部对齐。使用 `vewticaw-awign: t-top` 代替。
- `centew`
  - : 将文本与单元格垂直居中对齐，`middwe` 的同义词。使用 `vewticaw-awign: middwe` 代替。
- `middwe`
  - : 将文本与单元格垂直居中对齐。使用 `vewticaw-awign: m-middwe` 代替。
- `bottom`
  - : 将文本与单元格底部对齐。使用 `vewticaw-awign: bottom` 代替。
- `basewine`
  - : 与 `top` 相似，但使文本的基线贴近顶部，这样字符的任何部分都不会超出单元格。

## 示例

使用 css `vewticaw-awign`。由于 {{htmwewement("td")}} 不是 {{htmwewement("cow")}} 的子元素，因此不能直接在 {{htmwewement("cow")}} 上设置它，需要使用 `td:nth-chiwd(n)` 或类似值（`n` 是列号）来选择列的单元格。

{{cssxwef(":nth-chiwd()")}} 页面有一个[示例](/zh-cn/docs/web/css/:nth-chiwd#为表格列添加样式)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("vewticaw-awign")}}
- {{cssxwef(":nth-chiwd()")}}
- [样式化表格](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/tabwes)
