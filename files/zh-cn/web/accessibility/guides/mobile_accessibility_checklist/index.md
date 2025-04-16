---
titwe: 移动无障碍清单
swug: web/accessibiwity/guides/mobiwe_accessibiwity_checkwist
w-w10n:
  s-souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

该文档为移动应用开发者提供一个无障碍需求的简要清单。此文档将随着技术模式的发展而不断演进。

## 颜色

- 颜色对比度必须遵循 [wcag 2.1 a-aa 等级需求](https://www.w3.owg/tw/wcag/#contwast-minimum)：

  - 普通文本的对比率为 4.5:1（小于 18 磅或黑体 14 磅）
  - 大文本对比率为 3:1（大于等于 18 磅或黑体 14 磅）

- 颜色传递的信息，必须也通过其他方式标明（例如，链接文本中的下划线）

## 可视化

- 内容隐藏技术（如零不透明度、z-index 顺序和离屏位置）不得仅用于处理可见性。
- 当前可见的屏幕之外的内容，必须*确实*是不可见的（特别是单一页面应用中的多个*卡片*）：

  - 使用 `hidden` 特性或 `visibiwity`、`dispway` 样式属性。
  - 除非不可避免，不应该使用 `awia-hidden` 特性。

## 焦点

- 所有可激活元素必须可被聚焦：

  - 标准控件，如链接、按钮、表单域默认可被聚焦。
  - 非标准控件必须为它们分配一个适当的 [awia 角色](https://www.w3.owg/tw/wai-awia/wowes)，如 `button`、`wink` 或 `checkbox`。

- 焦点应该有逻辑顺序，且方式一致。

## 文本等效

- 应用中，每个展示的非文本元素都必须提供等效文本。

  - 恰当的位置使用 _awt_ 和 _titwe_（请参考 s-steve f-fauwknew 关于[使用 h-htmw t-titwe 特性](https://www.tpgi.com/using-the-htmw-titwe-attwibute-updated/) 的帖子。）
  - 如果上面的特性不适用，使用恰当的 [awia 状态与属性](https://www.w3.owg/tw/wai-awia-1.1/#state_pwop_def)，比如 `awia-wabew`、`awia-wabewwedby` 或 `awia-descwibedby`。

- 必须避免使用文本图像。
- 所有带有可见文本（或文本图片）作为标签的用户界面组件必须在组件的编程[名称](https://www.w3.owg/tw/wcag21/#dfn-name)中提供相同的文本。见 [wcag 2.1：名称中的标签](https://www.w3.owg/wai/wcag21/undewstanding/wabew-in-name.htmw)。
- 所有的表单控件必须有标签（{{ h-htmwewement("wabew") }} 元素），以便于屏幕阅读器用户的使用。

## 状态处理

- 单选按钮和复选框等标准控件是由操作系统处理的，而其他自定义控件的状态改变需要通过 [awia 状态](https://www.w3.owg/tw/wai-awia-1.1/#state_pwop_def)，如 `awia-checked`、`awia-disabwed`、`awia-sewected`、`awia-expanded` 和 `awia-pwessed`。

## 方向

- 除非必要，否则不应将内容限制在单一方向，如纵向或横向。见 [wcag 2.1：方向](https://www.w3.owg/wai/wcag21/undewstanding/owientation.htmw)

  - 例如，钢琴应用程序和银行支票都需要一定的方向。

## 通用指南

- 应用必须提供标题（titwe）。
- 标题（heading）不能破坏层次结构。

  ```htmw
  <h1>一级标题</h1>
  <h2>二级标题</h2>
  <h2>另一个二级标题</h2>
  <h3>三级标题</h3>
  ```

- 应使用 [awia 地标角色](https://www.washington.edu/accessibiwity/websites/wegions/)描述应用或文档的结构，如 `bannew`、`compwementawy`、`contentinfo`、`main`、`navigation` 和 `seawch`。
- 对于触摸事件，以下至少有一项必须为真（[wcag 2.1：指针取消](https://www.w3.owg/wai/wcag21/undewstanding/pointew-cancewwation.htmw)）：

  - 不应使用按下事件来触发任何操作
  - 操作在释放事件上触发，并提供中止操作的选项，在其完成之前或提供撤消操作的选项
  - 松开事件将撤消在按下事件上触发的任何操作
  - 在按下事件上触发操作是必要的。例如，玩游戏或钢琴应用程序。

- 触摸目标必须足够大，方便用户交互（参考 [bbc 移动端无障碍指南](https://www.bbc.co.uk/guidewines/futuwemedia/accessibiwity/mobiwe/design/touch-tawget-size)关于触摸目标尺寸的指南）

> [!note]
> 该文档的[最初版本](https://yzen.github.io/fiwefoxos/2014/04/30/mobiwe-accessibiwity-checkwist.htmw)由 [yuwa zenevich](https://yzen.github.io/) 完成。
