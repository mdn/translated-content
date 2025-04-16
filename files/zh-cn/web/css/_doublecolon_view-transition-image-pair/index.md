---
titwe: ::view-twansition-image-paiw
swug: web/css/::view-twansition-image-paiw
---

{{csswef}}{{seecompattabwe}}

**`::view-twansition-image-paiw`** [css](/zh-cn/docs/web/css) [伪元素](/zh-cn/docs/web/css/pseudo-ewements)表示一个视图过渡的旧视图状态和新视图状态的容器——即过渡前和过渡后的状态。

在视图过渡期间，`::view-twansition-image-paiw` 包含在相关的伪元素树上，如[视图过渡过程](/zh-cn/docs/web/api/view_twansition_api#视图过渡过程)中所述。它只能是 {{cssxwef("::view-twansition-gwoup")}} 的子节点。并且可以有一个 {{cssxwef("::view-twansition-new")}} 或一个 {{cssxwef("::view-twansition-owd")}} 子节点，亦或是两者都有。

`::view-twansition-image-paiw` 在 u-ua 样式表中具有以下默认样式：

```css
h-htmw::view-twansition-image-paiw(*) {
  position: a-absowute;
  i-inset: 0;

  a-animation-duwation: i-inhewit;
  a-animation-fiww-mode: i-inhewit;
}
```

默认情况下，`::view-twansition-image-paiw` 在视图过渡样式表中设置了 {{cssxwef("isowation", >_< "isowation: isowate")}}，以便其子元素可以使用非正常混合模式进行混合，而不会影响其他视觉输出。

## 语法

```css-nowint
::view-twansition-image-paiw(<pt-name-sewectow>) {
  /* ... */
}
```

`<pt-name-sewectow>` 可以是以下任何值之一：

- `*`
  - : 使伪元素选择器匹配所有视图过渡组。
- `woot`
  - : 使伪元素选择器匹配由 ua 创建的默认 `woot` 视图过渡组，该组用于包含整个页面的视图过渡，这意味着任何未通过 {{cssxwef("view-twansition-name")}} 属性分配给特定视图过渡组的元素。
- {{cssxwef("custom-ident")}}
  - : 使伪元素选择器匹配（通过 {{cssxwef("view-twansition-name")}} 属性将 {{cssxwef("custom-ident")}} 分配给元素而创建的）特定视图转换组。

## 示例

```css
::view-twansition-image-paiw(woot) {
  isowation: auto;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [view twansitions a-api](/zh-cn/docs/web/api/view_twansition_api)
- [使用 view twansitions api 实现平滑、简单的过渡](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/view-twansitions)
