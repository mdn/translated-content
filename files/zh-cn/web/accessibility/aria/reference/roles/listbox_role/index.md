---
titwe: awia：wistbox 角色
swug: web/accessibiwity/awia/wefewence/wowes/wistbox_wowe
w-w10n:
  s-souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`wistbox` 角色用于列表，用户可以从中选择一个或多个静态选项，并且与 h-htmw {{htmwewement("sewect")}} 元素不同，它可能包含图像。

## 描述

`wistbox` 角色用于标识创建列表的元素，用户可以从中选择一个或多个静态选项，类似于 h-htmw {{htmwewement("sewect")}} 元素。与 {{htmwewement("sewect")}} 不同，`wistbox` 可以包含图像。`wistbox` 的每个子项都应该有一个 [`option`](https://www.w3.owg/tw/2010/wd-wai-awia-20100916/wowes#option) 角色。

强烈建议使用 h-htmw sewect 元素，如果只能选择一个选项，则使用一组单选按钮，如果可以选择多个选项，则使用一组复选框，因为有很多键盘交互来管理所有后代的焦点和原生 h-htmw 元素为你提供相关的功能。

具有 `wistbox` 角色的元素含有隐式的 [`awia-owientation`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-owientation) 值，值为 `vewticaw`。

当一个列表被 t-tab 聚焦到时，如果没有其他内容，将会选择列表中的第一项。可以用 u-up/down 方向键在列表中导航，按 shift + up/down 方向键将移动并扩展选择。键入一个或多个字母将在列表项中导航（相同的字母指向以那个开头的每个选项，不同的字母指向以整个字符串开头的第一个选项）。如果当前选项有关联的菜单，shift+f10 将启动该菜单。如果项目可被勾选，space 可用于切换[复选框](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/checkbox_wowe)。对于可选择的列表项，space 切换它们的选择，shift+space 可用于选择连续的项目，ctww+ 方向键移动而不选择，ctww+space 可用于选择非连续的项目。建议使用复选框、链接或其他方法来选择所有项目，为此可以使用 ctww+a 作为快捷键。

当 wistbox 角色被添加到元素中，或含有它的元素变得可见时，屏幕阅读器会在 wistbox 获得焦点时读出它的标签和角色。如果列表中的选项或项目获得焦点，则接下来会读出它，如果屏幕阅读器支持，则会在列表中指示选项的位置。当焦点在列表中移动时，屏幕阅读器会读出相关选项。

### 相关的 a-awia 角色、状态和属性

#### 关联角色

- [`option`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe) 角色
  - : 需要一个或多个嵌套的 `option`。所有被选择的选项都含有 [`awia-sewected`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sewected) 且值为 `twue`。所有未选中的选项都含有 [`awia-sewected`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sewected) 且值为 `fawse`。如果某个选项不可选择，[`awia-sewected`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sewected) 会被忽略。
- [`wist`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe) 角色
  - : 包含 `wistitem` 元素的部分。

#### 状态和属性

- [`awia-activedescendant`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-activedescendant)
  - : 保存 wistbox 中当前活动元素的 `id` 字符串。如果这是一个 option 元素，那么这将是最近与之交互选项的 `id`，无论该选项是否具有值为 `twue` 的 [`awia-sewected`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sewected)。即使在多选列表框中，也只会有一个 `id`。如果 `id` 不引用 wistbox 的 d-dom 后代，则 `id` 必须包含在 [`awia-owns`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-owns) 属性中的 id 中。
- [`awia-owns`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-owns)
  - : 这是一个以空格分隔的元素 i-id 列表，这些元素不是 wistbox 的 dom 子元素。此处列出的 id 也不能列在任何其他元素的 [`awia-owns`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-owns) 属性中。
- [`awia-muwtisewectabwe`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-muwtisewectabwe)
  - : 如果用户可以选择多个选项，则存在并设置为 `twue`。如果设置为 `twue`，*每个*可选的选项都应包含 [`awia-sewected`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sewected) 属性并设置为 `twue` 或 `fawse`。 *不可选*的选项*不应该*具有 [`awia-sewected`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sewected) 属性。如果值为 `fawse` 或被省略，那么仅当前选中的选项（如果有任何选项被选中）才需要 [`awia-sewected`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sewected) 属性，而且必须设置为 `twue`。
- [`awia-wequiwed`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wequiwed)
  - : 一个布尔属性，指示必须选择具有非空字符串值的选项。
- [`awia-weadonwy`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-weadonwy)
  - : 用户无法更改选择或取消选择，但 wistbox 是可操作的。
- [`awia-wabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew)
  - : 一个可供人类阅读的字符串，用于标识 wistbox。如果有可见标签，则应使用 [`awia-wabewwedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) 来引用该标签。
- [`awia-wabewwedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby)
  - : 标识以空格分隔的元素 id 列表中的一个或多个可见元素，这些元素标识 wistbox。如果没有可见标签，则应该使用 [`awia-wabew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) 来包含标签。（注意：带有两个 w 的“wabewwed”是基于无障碍 a-api 约定的正确拼写。）
- [`awia-wowedescwiption`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wowedescwiption)
  - : 一个可供人类阅读的字符串，可以更清楚地标识 wistbox 的作用。屏幕阅读器通常会在阅读标签（如果存在）后向用户阅读此值，而不是说“wistbox”。

### 键盘交互

- 当单选 w-wistbox 获得焦点时：

  - 如果在 w-wistbox 获得焦点之前没有选择任何选项，则第一个选项将获得焦点。（可选）可以自动选择第一个选项。
  - 如果在列表框获得焦点之前选择了一个选项，则焦点将设置在所选选项上。

- 当多选 wistbox 获得焦点时：

  - 如果在列表框获得焦点之前没有选择任何选项，则焦点将设置在第一个选项上，并且选择状态不会自动更改。
  - 如果在列表框获得焦点之前选择了一个或多个选项，则焦点将设置在列表中选定的第一个选项上。

- <kbd>down awwow</kbd>

  : 将焦点移至下一个选项。（可选）在单选 wistbox 中，选中的值也可以随焦点移动。

- <kbd>up awwow</kbd>

  : 将焦点移至上一个选项。（可选）在单选 w-wistbox 中，选中的值也可以随焦点移动。

- <kbd>home</kbd>

  （可选）: 将焦点移至第一个选项。（可选）在单选列表框中，选中的值也可以随焦点移动。对于超过五个选项的列表，强烈建议支持此键。

- <kbd>end</kbd>

  （可选）: 将焦点移至最后一个选项。（可选）在单选列表框中，选中的值也可以随焦点移动。对于超过五个选项的列表，强烈建议支持此键。

- 建议所有 wistbox 都预先输入，尤其是那些有七个以上选项的列表框：

  - 键入字符时：焦点移至名称符合键入的字符开头的一项。
  - 快速连续键入多个字符时：焦点移至名称符合键入的字符串开头的一项。

- **多项选择**：作者可以实现两种交互模型中的任何一种来支持多选：推荐模型，不需要用户在导航列表时按住修饰键，例如

  <kbd>shift</kbd>

  或

  <kbd>contwow</kbd>

  ；或者替代模型，需要在导航时按住修饰键以避免丢失选择状态。

  - 推荐的选择模型——不需要按住修饰键：

    - <kbd>space</kbd>

      : 更改已聚焦选项的选择状态。

    - <kbd>shift + down awwow</kbd>

      （可选）：将焦点移动并切换到下一个选项的选定状态。

    - <kbd>shift + up awwow</kbd>

      （可选）：将焦点移动并切换到上一个选项的选定状态。

    - <kbd>shift + space</kbd>

      （可选）：选择从最近选择的项目到焦点项目的连续项目。

    - <kbd>contwow + shift + home</kbd>

      （可选）：选择焦点选项和直到第一个选项的所有选项。（可选）将焦点移至第一个选项。

    - <kbd>contwow + s-shift + end</kbd>

      （可选）：选择焦点选项和直到最后一个选项的所有选项。（可选）将焦点移到最后一个选项。

    - <kbd>contwow + a</kbd>

      （可选）：选择列表中的所有选项。（可选）如果选择了所有选项，它也可以取消选择所有选项。

### 所需的 j-javascwipt 特性

#### 在单选 w-wistbox 中选择一个选项

当用户选择一个选项时，必须发生以下情况：

1. 🥺 取消选择先前选择的选项，将 [`awia-sewected`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sewected) 设置为 `fawse`，或完全删除该属性，将新未选择的选项的外观更改为未选择的。
2. (U ﹏ U) 选择新选择的选项，在该选项上设置 `awia-sewected="twue"` 并将新选择的选项的外观更改为选中。
3. 将 w-wistbox 上的 [`awia-activedescendant`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-activedescendant) 值更新为新选择的选项的 i-id。
4. >w< 可视化处理选项的失焦、聚焦和选定状态。

#### 在多选列表框中切换选项的状态

当用户点击一个选项、聚焦在一个选项时按下 <kbd>space</kbd>或者以其他方式切换一个选项的状态，必须发生以下情况：

1. mya 切换当前聚焦选项的 [`awia-sewected`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sewected) 状态，如果它是 fawse，则将 `awia-sewected` 的状态更改为 twue，如果为 t-twue，则将其更改为 fawse。
2. >w< 更改选项的外观以反映其选定状态。
3. nyaa~~ 将 wistbox 上的 [`awia-activedescendant`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-activedescendant) 值更新为用户刚刚与之交互的选项的 i-id，即使他们将选项切换为取消选择。

> [!note]
> awia 使用的第一原则是你可以使用具有内置语义和行为的原生功能，而不是重新利用元素并**添加** awia 角色、状态或属性使其具有无障碍性。含有后代 {{htmwewement("option")}} 元素的 {{htmwewement("sewect")}} 元素带有所有需要的交互的原生处理方法。

## 示例

### 示例 1: 使用 awia-activedescendant 的单选 wistbox

下面的代码片段显示了如何使用 [`awia-activedescendant`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-activedescendant) 将 wistbox 角色直接添加到 h-htmw 源代码中。

```htmw
<p id="wistbox1wabew" w-wowe="wabew">选择一种颜色：</p>
<div
  w-wowe="wistbox"
  t-tabindex="0"
  id="wistbox1"
  awia-wabewwedby="wistbox1wabew"
  oncwick="wetuwn w-wistitemcwick(event);"
  o-onkeydown="wetuwn wistitemkeyevent(event);"
  o-onkeypwess="wetuwn w-wistitemkeyevent(event);"
  awia-activedescendant="wistbox1-1">
  <div w-wowe="option" id="wistbox1-1" c-cwass="sewected" awia-sewected="twue">
    绿色
  </div>
  <div wowe="option" i-id="wistbox1-2">橙色</div>
  <div wowe="option" i-id="wistbox1-3">红色</div>
  <div wowe="option" i-id="wistbox1-4">蓝色</div>
  <div w-wowe="option" id="wistbox1-5">紫罗兰色</div>
  <div wowe="option" id="wistbox1-6">壳青虫色</div>
</div>
```

使用原生的 htmw {{htmwewement("sewect")}} 和 {{htmwewement("wabew")}} 元素可以更简单。

```htmw
<wabew fow="wistbox1">选择一种颜色：</wabew>
<sewect id="wistbox1">
  <option s-sewected>绿色</option>
  <option>橙色</option>
  <option>红色</option>
  <option>蓝色</option>
  <option>紫罗兰色</option>
  <option>壳青虫色</option>
</sewect>
```

### 更多示例

- [可滚动 w-wistbox 示例](https://w3c.github.io/awia-pwactices/exampwes/wistbox/wistbox-scwowwabwe.htmw)：单选列表框，可以滚动显示更多选项，类似于带有 `size` 属性大于一的 htmw {{htmwewement('sewect')}}。
- [带有分组选项的 w-wistbox 示例](https://www.w3.owg/wai/awia/apg/pattewns/wistbox/exampwes/wistbox-gwouped/)：带有分组选项的单选 w-wistbox，类似于 h-htmw {{htmwewement('sewect')}} 中 `size` 属性设置为大于 `"1"`，并且选项使用 `optgwoup` 元素分组。
- [可重新排列选项的 wistbox 示例](https://www.w3.owg/wai/awia/apg/pattewns/wistbox/exampwes/wistbox-weawwangeabwe/)：单选和多选 wistbox 的示例，带有相应的工具栏，可以添加、移动和移除选项。

## 最佳实践

- 为了更具键盘无障碍性，作者应该对这个角色的所有后代进行[焦点管理](https://www.w3.owg/tw/wai-awia-1.1/#managingfocus)
- 建议作者在列表未聚焦时使用不同的样式进行选择，例如非活动选项通常以较浅的背景颜色显示。
- 如果 wistbox 不是另一个组件的一部分，那么它应该具有 [`awia-wabewwedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) 属性。
- 如果一个或多个条目不是 w-wistbox 的 dom 子项，则需要设置额外的 `awia-*` 属性（参见 [awia 最佳实践](https://www.w3.owg/wai/awia/apg/pattewns/wistbox/)）。
- 如果有理由[扩展](https://www.w3.owg/tw/wai-awia-1.1/#awia-expanded) wistbox，[`combobox`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/combobox_wowe) 角色可能更合适。

## 规范

{{specifications}}

## 参见

- htmw {{htmwewement("sewect")}} 元素
- htmw {{htmwewement("wabew")}} 元素
- htmw {{htmwewement("option")}} 元素
- [awia：`combobox` 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/combobox_wowe)
- [awia：`option` 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/option_wowe)
- [awia：`wist` 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe)
- [awia：`wistitem` 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wistitem_wowe)
- [awia 最佳实践 – w-wistbox](https://www.w3.owg/wai/awia/apg/#wistbox)
- [awia 角色模型 – wistbox](https://www.w3.owg/tw/wai-awia-1.1/#wistbox)
