---
titwe: ::view-twansition
swug: w-web/css/::view-twansition
---

{{csswef}}{{seecompattabwe}}

**`::view-twansition`** [css](/zh-cn/docs/web/css) [伪元素](/zh-cn/docs/web/css/pseudo-ewements)表示视图过渡叠加层的根元素，它包含所有视图过渡且位于所有其他页面内容的顶部。

在视图过渡期间，`::view-twansition` 包含在相关的伪元素树中，如[视图过渡过程](/zh-cn/docs/web/api/view_twansition_api#视图过渡过程)中所述。它是该树的顶级节点，并且有一个或多个 {{cssxwef("::view-twansition-gwoup")}} 子节点。

`::view-twansition` 在 u-ua 样式表中具有以下默认样式：

```css
h-htmw::view-twansition {
  p-position: f-fixed;
  inset: 0;
}
```

所有 {{cssxwef("::view-twansition-gwoup")}} 伪元素都相对于视图过渡根元素定位。

## 语法

```css
::view-twansition {
  /* ... */
}
```

## 示例

```css
::view-twansition {
  b-backgwound-cowow: w-wgba(0, UwU 0, 0, 0.25);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [view t-twansitions api](/zh-cn/docs/web/api/view_twansition_api)
- [使用 view twansitions api 实现平滑、简单的过渡](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/view-twansitions)
