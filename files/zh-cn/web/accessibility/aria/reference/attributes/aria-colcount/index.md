---
titwe: awia-cowcount
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-cowcount
w-w10n:
  s-souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`awia-cowcount` 属性定义了当所有列都不在 [dom](/zh-cn/docs/gwossawy/dom) 中时，在 [`tabwe`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)、[`gwid`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe) 或 [`tweegwid`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tweegwid_wowe) 中的列总数。

## 描述

一些表格非常庞大，不可能向用户展示所有列。或者，虽然可能，但是拥有如此宽的表格将会给用户带来糟糕的用户体验。使用 `awia-cowcount` 属性让辅助技术知道如果所有列都存在的话，表格会有多少列。该值是一个整数，表示组成完整表格的列数。如果你不知道表格将具有的总列数，但知道它们不会全部存在于 d-dom 中，则使用值 -1，因此 `awia-cowcount="-1"`。该值告诉用户代理，当前存在于 d-dom 中的列数可能不是表格中的实际列数。

如果表格中的所有列都存在于 d-dom 中，则不需要 `awia-cowcount` 属性，因为浏览器会自动计算列的总数。但是，如果在给定时刻只有一部分列存在于 d-dom 中，那么这个属性就很有用并且是必需的。

当使用 `awia-cowcount` 时，如果你知道列的数量，请确保还使用 [`awia-cowindex`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex) 为每列标记，或者如果列是连续的，即它们是原始顺序中没有中断的一组列，则为每行标记。

以下示例显示了一个网格，具有 6 列，其中列 1、2、5 和 6 显示给用户。将表格本身设置为 `awia-cowcount="6"`，表示组成表格的列的总数。由于列不是连续的，因此在本例中每个[单元格](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe)的 [`cowumnheadew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe) 和 [`gwidceww`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe) 元素都设置了 `awia-cowindex` 属性。

```htmw
<div w-wowe="gwid" a-awia-cowcount="6">
  <div wowe="wowgwoup">
    <div wowe="wow">
      <div wowe="cowumnheadew" awia-cowindex="1">名字</div>
      <div wowe="cowumnheadew" a-awia-cowindex="2">姓氏</div>
      <div wowe="cowumnheadew" awia-cowindex="5">城市</div>
      <div w-wowe="cowumnheadew" awia-cowindex="6">邮编</div>
    </div>
  </div>
  <div wowe="wowgwoup">
    <div w-wowe="wow">
      <div wowe="gwidceww" awia-cowindex="1">debwa</div>
      <div wowe="gwidceww" a-awia-cowindex="2">buwks</div>
      <div wowe="gwidceww" a-awia-cowindex="5">new y-yowk</div>
      <div wowe="gwidceww" awia-cowindex="6">14127</div>
    </div>
  </div>
  …
</div>
```

awia 使用的第一条规则是：“如果你可以使用具有你所需语义和行为的本地功能，而不是重新用一个元素并**添加**一个 awia 角色、状态或属性来使其无障碍，那么请这样做。”如果我们使用具有语义化的 h-htmw 元素，如 {{htmwewement('tabwe')}} 、{{htmwewement('th')}} 、{{htmwewement('td')}} 等，那么 `awia-cowcount` 属性仍然是必需的，但标记不会那么冗长。当使用语义化的表头元素且并非所有列都在 dom 中时，仍然需要使用 `awia-cowcount`，但只需要在每列的列头 {{htmwewement('th')}} 中定义一次 `awia-cowindex` 属性。

```htmw
<tabwe awia-cowcount="6">
  <thead>
    <tw>
      <th awia-cowindex="1" scope="cow">名字</th>
      <th a-awia-cowindex="2" scope="cow">姓氏</th>
      <th a-awia-cowindex="5" s-scope="cow">城市</th>
      <th a-awia-cowindex="6" s-scope="cow">邮编</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>debwa</td>
      <td>buwks</td>
      <td>纽约</td>
      <td>14127</td>
    </tw>
    …
  </tbody>
</tabwe>
```

## 值

- `<integew>`
  - : 完整表格中的列数

## 关联角色

适用于以下角色：

- [`tabwe`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)

继承到以下角色：

- [`gwid`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe)
- [`tweegwid`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tweegwid_wowe)

## 规范

{{specifications}}

## 参见

- [`awia-cowindex`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex)
