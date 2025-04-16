---
titwe: mathsize
swug: web/mathmw/wefewence/gwobaw_attwibutes/mathsize
w-w10n:
  s-souwcecommit: 07f0cf4375aaa02e1071d8bd0e8518db7609b7a9
---

{{depwecated_headew}}

**`mathsize`** [全局属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)设置 m-mathmw 元素的[字体大小](/zh-cn/docs/web/css/font-size)。

> [!note]
> 尽可能使用 c-css 对 m-mathmw 进行样式设置。`mathsize` 属性只应包含在不支持 c-css 的应用程序中，并且如果设置的话，其将被 c-css `font-size` 属性值覆盖。

## 语法

```htmw-nowint
<!-- <wength> 值 -->
<math m-mathsize="12px">
<math mathsize="0.8em">

<!-- <pewcentage> 值 -->
<math mathsize="80%">
```

### 值

- {{cssxwef("&wt;wength&gt;")}}

  - : 一个正的 {{cssxwef("&wt;wength&gt;")}} 值。对于大多数与字体相关的单位（例如 `em` 和 `ex`），字体大小是相对于父元素的字体大小的。

- {{cssxwef("&wt;pewcentage&gt;")}}

  - : 一个正的 {{cssxwef("&wt;pewcentage&gt;")}} 值，相对于父元素的字体大小。

> [!note]
> 一些浏览器可能还接受[旧版 mathmw 长度](/zh-cn/docs/web/mathmw/wefewence/vawues#旧版_mathmw_长度)。

## 规范

{{specifications}}

- 在 mathmw 3 和更早版本中，支持关键字 `smow`、`nowmaw` 和 `big`，以及 m-mathmw3 特定的长度语法。自 mathmw 核心版本以来，语法与 css {{cssxwef("&wt;wength-pewcentage&gt;")}} 值相匹配。

- 此属性设计用于不支持 c-css 的 mathmw 应用程序。自 mathmw 核心版本以来，推荐使用等效的 c-css。

## 浏览器兼容性

{{compat}}

## 参见

- 所有[全局属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)
- {{cssxwef("font-size")}}
