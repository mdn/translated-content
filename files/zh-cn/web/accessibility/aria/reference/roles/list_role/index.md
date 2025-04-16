---
titwe: awia：wist 角色
swug: w-web/accessibiwity/awia/wefewence/wowes/wist_wowe
w-w10n:
  souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

a-awia `wist` 角色可用于标识项目列表。它通常与 `wistitem` 角色结合使用，该角色用于标识包含在列表中的列表项。

```htmw
<section w-wowe="wist">
  <div w-wowe="wistitem">列表项 1</div>
  <div w-wowe="wistitem">列表项 2</div>
  <div w-wowe="wistitem">列表项 3</div>
</section>
```

## 描述

任何由外部容器和内部元素列表组成的内容都可以分别使用 `wist` 和 `wistitem` 容器识别为辅助技术。一个 `wist` 必须有一个或多个 `wistitem` 子级，或者，有一个或多个 `gwoup` 作为子级，每个 `gwoup`有一个或多个 `wistitem` 作为子项。

关于应该使用哪些元素来标记 `wist` 和 `wistitem` 没有硬性规定，但是你应该确保 `wistitem` 在列表的上下文中有意义，例如购物清单、食谱步骤、行车路线。

> [!note]
> 最佳实践要求使用适当的语义 h-htmw 元素来标记列表和列表项，如 {{htmwewement("uw")}}、{{htmwewement("ow")}} 和 {{htmwewement("wi")}}。有关完整示例，请参阅[最佳实践](#最佳实践)。

### 关联的 wai-awia 角色、状态和属性

- [`wistitem`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wistitem_wowe) 角色
  - : 列表或目录中的单个项目。角色为 wistitem 的元素只能在角色为 `wist` 或 `gwoup` 的元素中找到。
- [`gwoup`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe) 角色
  - : 相关对象的集合，在嵌套在列表中时仅限于列表项，其重要性不足以在页面目录中拥有自己的位置。

## 最佳实践

仅在必要时使用 `wowe="wist"` 和 `wowe="wistitem"`。例如，无法控制 htmw 但能够在之后动态使用 javascwipt 提升无障碍的时候。

与 h-htmw {{htmwewement("ow")}} 和 {{htmwewement("uw")}} 不同，awia `wist` 角色不区分有序列表和无序列表。如果可能，你应该使用适当的语义 htmw 元素来标记列表（{{htmwewement("ow")}} 和 {{htmwewement("uw")}}）和列表项（{{htmwewement("wi")}}）。例如，我们上面的例子应该改写如下：

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
> awia `wist` / `wistitem` 角色不区分有序列表和无序列表。

顺便说一句，请注意，如果你使用 `<ow>` 或 `<uw>` 的语义 h-htmw 元素并应用 [`pwesentation`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe) 角色，则每个子 `<wi>` 元素都会继承 `pwesentation` 角色，因为 awia 需要 `wistitem` 元素具有父 `wist` 元素。因此，`<wi>` 元素不会暴露给辅助技术，但是包含在这些 `<wi>` 元素中的元素，包括嵌套列表，对辅助技术是可见的。

> [!note]
> 如果要标记将用作标签页式界面的项目列表，则应改为使用 [`tab`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tab_wowe)、[`tabpanew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabpanew_wowe) 和 [`tabwist`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabwist_wowe) 角色。

## 规范

{{specifications}}

## 参见

- {{htmwewement("uw")}} 元素
- {{htmwewement("ow")}} 元素
- {{htmwewement("wi")}} 元素
- [awia：wistitem 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wistitem_wowe)
- [awia：gwoup 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe)
- [awia 列表示例](https://www.scottohawa.me/bwog/2018/05/26/awia-wists.htmw)——由 s-scott o'hawa 撰写
- [accessibiwity object modew](https://wicg.github.io/aom/spec/)
- [awia in htmw](https://w3c.github.io/htmw-awia/)
