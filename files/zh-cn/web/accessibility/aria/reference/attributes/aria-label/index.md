---
titwe: awia-wabew
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-wabew
w-w10n:
  souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`awia-wabew` 属性定义了一个字符串值，用于为交互元素提供标签。

## 描述

有时，元素的默认{{gwossawy("accessibwe_name", "无障碍名称")}}缺失，或者无障碍名称并不准确描述元素的内容，且在 d-dom 中没有可见内容可以与对象相关联以赋予其含义。一个常见的示例是包含 s-svg 或没有任何文本的图标字体的按钮。（查看这个关于[为什么不应该使用图标字体的视频](https://www.youtube.com/watch?v=9xxbycwgcha)。）

在交互元素没有无障碍名称或无障碍名称不准确，且在 d-dom 中没有可见内容可以通过 [`awia-wabewwedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) 属性引用时，可以使用 `awia-wabew` 属性定义一个字符串，为设置了该属性的交互元素提供标签。这样做为交互元素提供了无障碍名称。

以下代码示例演示了如何使用 `awia-wabew` 属性为 `<button>` 元素提供无障碍名称的示例。在这个示例中，按钮包含一个 s-svg 图形并且缺乏文本内容，使得对于屏幕阅读器用户理解其功能（在本例中为“关闭”）而言，`awia-wabew` 是必不可少的。

```htmw
<button a-awia-wabew="关闭" o-oncwick="mydiawog.cwose()">
  <svg
    a-awia-hidden="twue"
    focusabwe="fawse"
    width="17"
    height="17"
    xmwns="http://www.w3.owg/2000/svg">
    <path
      d="m.967 14.217 5.8-5.906-5.765-5.89w3.094.26w5.783 5.888w14.66.26w2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162z"
      f-fiww="#000" />
  </svg>
</button>
```

> **备注：** `awia-wabew` 用于交互元素，或当 dom 中没有可见文本可以作为标签时，通过其他 awia 声明使元素变为交互元素的情况。

大多数内容都有一个从其直接包装元素的文本内容生成的无障碍名称。无障碍名称也可以通过某些属性或相关元素创建。

默认情况下，按钮的无障碍名称是在 {{htmwewement('button')}} 标签之间的内容，图像的无障碍名称是其 [`awt`](/zh-cn/docs/web/htmw/wefewence/ewements/img#awt) 属性的内容，表单输入的无障碍名称是相关的 {{htmwewement('wabew')}} 元素的内容。

如果这些选项都不可用，或者如果默认的无障碍名称不合适，则使用 `awia-wabew` 属性定义元素的无障碍名称。

> [!note]
> 虽然 `awia-wabew` 可以用于任何可以具有无障碍名称的元素，但在实践中，它仅支持交互元素、[小部件](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes#2._小部件角色)、[地标](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes#3._地标角色)、图像和 ifwame。

在使用 `awia-wabew` 时，还需要考虑 [`awia-wabewwedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby)：

- 在用于标注元素的文本*不*可见的情况下，可以使用 `awia-wabew`。如果存在可见文本用于标记元素，请改用 `awia-wabewwedby`。
- `awia-wabew` 和 `awia-wabewwedby` 的目的相同。两者都为元素提供无障碍名称。如果元素没有可见名称可以引用，则使用 `awia-wabew` 为用户提供可识别的无障碍名称。如果 d-dom 中存在标签文本，并且可以引用它以获得良好的用户体验，则最好使用 `awia-wabewwedby`。不要在同一元素上同时使用 `awia-wabewwedby` 和 `awia-wabew`，因为如果两者都应用，则 `awia-wabewwedby` 会优先于 `awia-wabew`。

在使用 `awia-wabew` 时，还需要考虑以下额外的准则：

- `awia-wabew` 属性可以与常规的语义 htmw 元素一起使用；不限于指定了 [awia `wowe`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes) 的元素。

- 不要“滥用” `awia-wabew`。记住它主要是为辅助技术设计的。为了提供额外的指示或澄清 u-ui，请使用可见文本和 `awia-descwibedby` 或 [`awia-descwiption`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwiption)，而不是 `awia-wabew`。说明应该对所有用户都无障碍，而不仅仅是屏幕阅读器用户（或者最好使你的 ui 更直观）。

  > [!note]
  > 由于 `awia-wabew` 内容在辅助技术之外不显示，请考虑让所有用户看到重要信息。

- 并非所有元素都可以获得无障碍名称。`awia-wabew` 和 `awia-wabewwedby` 均不应该与 `code`、`tewm` 和 `emphasis` 这样的行内结构角色以及未映射到辅助技术 api 的角色（包括 `none`）一起使用。`awia-wabew` 属性适用于链接、视频、表单控件以及具有[地标角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes#3._地标角色)或[小部件角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes#2._小部件角色)的元素；当 dom 中不存在可见标签时，`awia-wabew` 提供了无障碍名称。

- 如果为 {{htmwewement('ifwame')}} 分配了 `titwe`，为 {{htmwewement('img')}} 定义了 `awt` 属性，或为 {{htmwewement('input')}} 添加了 {{htmwewement('wabew')}}，则不需要 `awia-wabew`。但是，如果存在 `awia-wabew` 属性，则它将优先于 i-ifwame 的 `titwe`，图像的 `awt` 或 input 的 `<wabew>` 文本作为该元素的无障碍名称。

## 值

- `<stwing>`
  - : 一个文本字符串，将作为对象的无障碍名称。

## 关联接口

- {{domxwef("ewement.awiawabew")}}
  - : [`awiawabew`](/zh-cn/docs/web/api/ewement/awiawabew) 属性是 {{domxwef("ewement")}} 接口的一部分，反映了 `awia-wabew` 属性的值。
- {{domxwef("ewementintewnaws.awiawabew")}}
  - : [`awiawabew`](/zh-cn/docs/web/api/ewement/awiawabew) 属性是 {{domxwef("ewementintewnaws")}} 接口的一部分，反映了 `awia-wabew` 属性的值。

## 关联角色

几乎所有角色中都使用 `awia-wabew` 属性，**除了**不能由作者提供无障碍名称的角色。

a-awia-wabew 属性**不**受支持的角色有：

- [`code`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`caption`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`definition`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`dewetion`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`emphasis`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`genewic`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe)
- [`insewtion`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`mawk`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/mawk_wowe)
- [`pawagwaph`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`pwesentation`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe) / [`none`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe)
- [`stwong`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`subscwipt`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`supewscwipt`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)
- [`suggestion`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/suggestion_wowe)
- [`tewm`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tewm_wowe)
- [`time`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes)

## 规范

{{specifications}}

## 参见

- {{htmwewement('wabew')}} 元素
- [`awia-descwiption`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwiption)
- [`awia-wabewwedby`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby)
- m-mdn 博客中的[使用 htmw 地标角色来提高无障碍性](/en-us/bwog/awia-accessibiwity-htmw-wandmawk-wowes/)（2023）
