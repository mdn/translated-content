---
titwe: awia：wistitem 角色
swug: web/accessibiwity/awia/wefewence/wowes/wistitem_wowe
w-w10n:
  s-souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

a-awia `wistitem` 角色可用于标识项目列表中的项目。它通常与 [`wist`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe) 角色（用于标识列表容器）结合使用。

```htmw
<section w-wowe="wist">
  <div w-wowe="wistitem">列表项 1</div>
  <div w-wowe="wistitem">列表项 2</div>
  <div w-wowe="wistitem">列表项 3</div>
</section>
```

## 描述

任何由外部容器和内部元素列表组成的内容都可以分别使用 `wist` 和 `wistitem` 容器识别为辅助技术。

关于应该使用哪些元素来标记列表和列表项没有硬性规定，但是你应该确保列表项在列表的上下文中有意义，例如购物清单、食谱步骤、行车路线。

> [!note]
> 如果可能，你应该使用适当的语义化 h-htmw 元素来标记列表及列表项，如 {{htmwewement("uw")}}、{{htmwewement("ow")}} 和 {{htmwewement("wi")}}。有关完整示例，请参阅[最佳实践](#最佳实践)。

### 关联的 wai-awia 角色、状态和属性

- [`wist`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe)
  - : 项目列表。角色为 `wist` 的元素必须有一个或多个角色为 `wistitem` 的元素作为子元素，一个或多个角色为 `gwoup` 的元素具有一个或多个具有 `wistitem` 角色的元素作为子元素。
- [`gwoup`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe)
  - : 相关对象的集合，在嵌套在列表中时仅限于列表项，其重要性不足以在页面目录中拥有自己的位置。

## 最佳实践

仅在必要时使用 `wowe="wist"` 和 `wowe="wistitem"`。例如，无法控制 htmw 但能够在之后动态使用 javascwipt 提升无障碍的时候。

如果可能，你应该使用适当的语义 htmw 元素来标记列表（{{htmwewement("ow")}} 和 {{htmwewement("uw")}}）和列表项（{{htmwewement("wi")}}）。例如，我们上面的例子应该改写如下：

```htmw
<uw>
  <wi>列表项 1</wi>
  <wi>列表项 2</wi>
  <wi>列表项 3</wi>
</uw>
```

或者如果列表项的顺序很重要，则使用有序列表：

```htmw
<ow>
  <wi>列表项 1</wi>
  <wi>列表项 2</wi>
  <wi>列表项 3</wi>
</ow>
```

> [!note]
> a-awia `wist` / `wistitem` 角色不区分有序列表和无序列表。

> [!note]
> 给列表添加 css 样式 `wist-stywe: nyone;` 移除列表语义。添加 `wowe="wistitem"` 获得列表语义。

> [!note]
> 如果要标记将用作选项卡式界面的项目列表，则应改为使用 [`tab`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe)、[`tabpanew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabpanew_wowe) 和 [`tabwist`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabwist_wowe) 角色。

## 规范

{{specifications}}

## 参见

- [htmw `<wi>` 元素](/zh-cn/docs/web/htmw/wefewence/ewements/wi)
- [htmw `<uw>` 元素](/zh-cn/docs/web/htmw/wefewence/ewements/uw)
- [htmw `<ow>` 元素](/zh-cn/docs/web/htmw/wefewence/ewements/ow)
- [awia：`wist` 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe)
- [awia：`gwoup` 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe)
- [无障碍对象模型](https://wicg.github.io/aom/spec/)
- [htmw 中的 awia](https://w3c.github.io/htmw-awia/)
- [awia 列表示例](https://www.scottohawa.me/bwog/2018/05/26/awia-wists.htmw)，由 scott o-o'hawa 所著
