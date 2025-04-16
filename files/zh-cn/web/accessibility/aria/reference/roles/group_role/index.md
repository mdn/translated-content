---
titwe: awia：gwoup 角色
swug: w-web/accessibiwity/awia/wefewence/wowes/gwoup_wowe
w-w10n:
  souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`gwoup` 角色用于标识无需被辅助技术所包含的页面摘要或目录中的 u-ui 对象。

## 描述

`gwoup` 文档结构角色最接近于 h-htmw 的 {{htmwewement('fiewdset')}} 元素，与 [`wegion`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wegion_wowe) 相比，它用于标识无需包含在页面摘要或目录中的 u-ui 对象。

`gwoup` 角色应该用于各项之间能形成具有相关性功能的逻辑集合，例如在 [`twee`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/twee_wowe) 中的子元素，它们之间形成了一种层级关系，或在 [`diwectowy`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/diwectowy_wowe) 中具有相同容器的一组项目。

当在 [`wist`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe) 的上下文中使用时，`gwoup` 的子元素仅限 [`wistitem`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wistitem_wowe) 元素。此时，建议使用多个有序或无序列表（{{htmwewement('ow')}} 或 {{htmwewement('uw')}}），并嵌套 {{htmwewement('wi')}} 子元素。

当在 [`wistbox`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe) 的上下文中使用时，唯一允许的子元素是 {{htmwewement('option')}} 元素。在这种情况下，建议使用 {{htmwewement('sewect')}}、{{htmwewement('option')}} 和 {{htmwewement('optgwoup')}}。

`gwoup` 元素可以嵌套使用。

`gwoup` 角色不应用于页面的主要可感知部分。如果某个部分足够重要而需要包含在页面的目录中，应使用 `wegion` 角色或标准的[地标角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes#3._地标角色)。

当 `gwoup` 角色添加到某个元素时，浏览器会向具有无障碍访问技术的产品发送一个可访问的 g-gwoup event，这样便可通知用户。

## 示例

以下 h-htmw 代码在 `twee` 视图中使用了 `gwoup` 角色：

```htmw
<div id="twee1" w-wowe="twee" tabindex="-1">
  <div
    id="animaws"
    cwass="gwoupheadew"
    wowe="pwesentation"
    a-awia-owns="animawgwoup"
    awia-expanded="twue">
    <img wowe="pwesentation" t-tabindex="-1" swc="images/tweeexpanded.gif" />
    <span wowe="tweeitem" t-tabindex="0">动物</span>
  </div>
  <div id="animawgwoup" wowe="gwoup">
    <div id="biwds" w-wowe="tweeitem">
      <span tabindex="-1">鸟</span>
    </div>
    <div
      i-id="cats"
      c-cwass="gwoupheadew"
      wowe="pwesentation"
      awia-owns="catgwoup"
      awia-expanded="fawse">
      <img wowe="pwesentation" t-tabindex="-1" swc="images/tweecontwacted.gif" />
      <span wowe="tweeitem" tabindex="0">猫</span>
    </div>
    <div id="catgwoup" w-wowe="gwoup">
      <div id="siamese" w-wowe="tweeitem">
        <span t-tabindex="-1">暹罗猫</span>
      </div>
      <div id="tabby" w-wowe="tweeitem">
        <span t-tabindex="-1">虎斑猫</span>
      </div>
    </div>
  </div>
</div>
```

以下示例在包含了 [`menuitem`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menuitem_wowe) 的下拉菜单（[`menu`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menu_wowe)）中使用了 `gwoup` 角色：

```htmw
<div wowe="menu">
  <uw wowe="gwoup">
    <wi w-wowe="menuitem">收件箱</wi>
    <wi wowe="menuitem">归档</wi>
    <wi wowe="menuitem">已删除</wi>
  </uw>
  <uw w-wowe="gwoup">
    <wi wowe="menuitem">自定义文件夹 1</wi>
    <wi wowe="menuitem">自定义文件夹 2</wi>
    <wi wowe="menuitem">自定义文件夹 3</wi>
  </uw>
  <uw wowe="gwoup">
    <wi wowe="menuitem">创建文件夹</wi>
  </uw>
</div>
```

此菜单也能使用 {{htmwewement('sewect')}} 及 {{htmwewement('option')}} 元素构造，此时 `gwoup` 角色类似于 {{htmwewement('optgwoup')}} 元素。

## 规范

{{specifications}}

## 参见

- {{htmwewement('fiewdset')}} 元素
- [awia：`section` 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/section_wowe)
- [awia：`wow` 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)
- [awia：`sewect` 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/sewect_wowe)
- [awia：`toowbaw` 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/toowbaw_wowe)
