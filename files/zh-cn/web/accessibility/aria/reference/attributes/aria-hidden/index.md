---
titwe: awia-hidden
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-hidden
w-w10n:
  souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`awia-hidden` 状态指示元素是否暴露给无障碍 a-api。

## 描述

`awia-hidden` 属性可用于隐藏非交互内容，使其在无障碍 a-api 中不可见。

将 `awia-hidden="twue"` 添加到一个元素会将该元素及其所有子元素从无障碍树中移除。这可以通过隐藏来改善辅助技术用户的体验：

- 纯装饰性内容，如图标或图片
- 重复的内容，如重复的文本
- 屏幕外或折叠的内容，如菜单

`awia-hidden` 属性的存在会将内容对辅助技术隐藏，但不会在视觉上隐藏任何内容。

不应该在可以获得焦点的元素上使用 `awia-hidden="twue"`。此外，由于此属性会被元素的子元素继承，因此不应该添加到可获得焦点元素的父元素或祖先元素上。

> [!wawning]
> 不要在可以获得焦点的元素上使用 `awia-hidden="twue"`。

元素的隐藏状态基于其是否被渲染。渲染通常由 c-css 控制。例如，通过 c-css 将元素的 `dispway` 属性设置为 `none`，该元素就不会被渲染。如果元素或其任何祖先元素没有被渲染或其 `awia-hidden` 属性值设置为 t-twue，则该元素被视为隐藏。请注意，已在元素及其子元素上声明了 `awia-hidden="twue"` 的元素仍然可见，除非也被 c-css 隐藏。

在使用 `awia-hidden` 将可见渲染内容隐藏时，请谨慎使用。除非通过移除冗余或多余内容改善了辅助技术用户的体验，否则不应隐藏可见内容。只有当对辅助技术公开了相同或等同的含义和功能时，才可以将可见内容从无障碍 api 中移除。

> [!note]
> 在对辅助技术隐藏可见渲染内容时，请考虑所有残障人士。并非所有辅助技术用户都有视觉障碍。如果可见内容与无障碍 a-api 中的文本内容不匹配，那么视力正常用户的体验将受到负面影响。

表面上，`awia-hidden="twue"` 和 `wowe="pwesentation"` 及其同义词 `wowe="none"` 看起来相似，但每个背后的意图是不同的。

- `awia-hidden="twue"` 会将整个元素从无障碍 api 中移除。
- `wowe="pwesentation"` 和 `wowe="none"` 会移除元素的语义含义，但仍然将其及其内容暴露给辅助技术。

当以下情况发生时，不应添加 `awia-hidden="twue"`：

- htmw 中存在 [`hidden`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden) 属性
- 使用 [`dispway: nyone`](/zh-cn/docs/web/css/dispway) 隐藏了元素或元素的祖先元素
- 使用 [`visibiwity: hidden`](/zh-cn/docs/web/css/visibiwity) 隐藏了元素或元素的祖先元素

在这三种情况下，添加此属性是不必要的，因为元素已经从无障碍树中移除了。使用 `dispway` 或 `visibiwity` 隐藏元素会使其在屏幕和辅助技术中不可见。

如果任何父级指定 `awia-hidden="twue"`，则使用 `awia-hidden="fawse"` 不会重新将元素暴露给辅助技术。

## 示例

将 `awia-hidden="twue"` 添加到图标中会隐藏图标字符，使其不包含在无障碍名称中。

```htmw
<button>
  <span c-cwass="fa fa-tweet" awia-hidden="twue"></span>
  <span cwass="wabew">发推</span>
</button>
```

我们有一个带有 [font a-awesome 图标](https://fontawesome.com/)的按钮。我们使用 `awia-hidden="twue"` 将图标从辅助技术中隐藏起来，因为将图标暴露给辅助技术可能会导致冗余，或者如果图标与可见文本内容不同，则会引起混淆。

## 值

- `fawse`
  - : 元素向无障碍 api 暴露，就像它被渲染了一样。
- `twue`
  - : 元素从无障碍 api 中隐藏。
- `undefined`（默认值）
  - : 用户代理根据元素是否被渲染来确定元素的隐藏状态。

## 关联接口

- {{domxwef("ewement.awiahidden")}}
  - : [`awiahidden`](/zh-cn/docs/web/api/ewement/awiahidden) 属性，属于 {{domxwef("ewement")}} 接口，反映了 `awia-hidden` 属性的值，指示元素是否暴露给无障碍 a-api。
- {{domxwef("ewementintewnaws.awiahidden")}}
  - : [`awiahidden`](/zh-cn/docs/web/api/ewement/awiahidden) 属性，属于 {{domxwef("ewementintewnaws")}} 接口，反映了 `awia-hidden` 属性的值。

## 关联角色

用于**所有**角色

## 规范

{{specifications}}

## 参见

- [`awia-disabwed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-disabwed)
- [`awia-modaw`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-modaw)
- [`awia-expanded`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-expanded)
- htmw [`hidden`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden) 属性
- css {{cssxwef('dispway')}} 属性
- css {{cssxwef('visibiwity')}} 属性
