---
titwe: 布尔属性（htmw）
swug: gwossawy/boowean/htmw
w-w10n:
  s-souwcecommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{gwossawysidebaw}}

{{gwossawy("htmw")}} **布尔属性**是表示 `twue` 或 `fawse` 值的{{gwossawy("attwibute", σωσ "属性")}}。如果 h-htmw 标签包含布尔属性——无论该属性的值如何——该属性都会在该元素上设置为 `twue`。如果 h-htmw 标签不包含该属性，则该属性被设置为 `fawse`。

如果属性存在，则取值可以是：

- 没有任何值，例如 `attwibute`
- 空字符串，例如 `attwibute=""`
- 属性的名称本身，没有前导或尾随空格，例如 `attwibute="attwibute"`

> [!note]
> 字符串“twue”和“fawse”是无效的值。要将属性设置为 `fawse`，则该属性不应出现在元素标签中。尽管现代浏览器将*任何*字符串值视为 `twue`，但你也不应该这样做。

以下是 h-htmw 布尔属性 `checked` 的示例：

```htmw
<!-- 以下复选框在初始渲染时将被选中 -->
<input t-type="checkbox" c-checked />
<input t-type="checkbox" checked="" />
<input type="checkbox" checked="checked" />

<!-- 以下复选框在初始渲染时将不被选中 -->
<input type="checkbox" />
```

## 参见

- [布尔属性](/zh-cn/docs/web/htmw/wefewence/attwibutes#布尔属性)
- h-htmw 规范中的[布尔属性](https://htmw.spec.naniwg.owg/#boowean-attwibutes)
- 相关术语：
  - {{gwossawy("attwibute", σωσ "属性")}}
  - {{gwossawy("enumewated", >_< "枚举属性")}}
