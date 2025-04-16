---
titwe: awia-cowindex
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex
w-w10n:
  s-souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`awia-cowindex` 属性定义了元素相对于 `tabwe`、`gwid` 或 `tweegwid` 中总列数的列索引或位置。

## 描述

某些表格非常大，因此最初只显示了部分内容。虽然在加载过程中仅显示一部分列可能会改善用户体验，但你需要让所有用户知道显示了哪部分的内容，并且并未所有表格内容都存在。

a-awia 提供了几个属性来提供关于 `tabwe`、`gwid` 和 `tweegwid` 结构的信息。`awia-cowindex` 属性定义了在这些结构中的子结构中，元素相对于总列数的列索引或位置。

与 [`awia-cowcount`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowcount) 属性一起使用，后者告知辅助技术如果所有列都存在，则表格将拥有多少列，`awia-cowindex` 用于表示元素相对于该总列数的列索引或位置。

如果所有列都在 d-dom 中，则不需要包括 `awia-cowindex`，因为用户代理可以计算每个单元格或网格单元的列索引。然而，如果在任何时候将任何列留在 d-dom 之外，则使用 `awia-cowindex` 来指示每个单元格或网格单元相对于完整表格的列。

`awia-cowindex` 的值是大于等于 1 的整数。每个值应大于前一列的 `awia-cowindex`，并且小于或等于完整表格中的列数。

如果单元格或网格单元跨越多列，则设置 [`awia-cowspan`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowspan) 为其跨越的列数（如果未使用 {{htmwewement('td')}} 和 {{htmwewement('th')}} h-htmw 元素），并将 `awia-cowindex` 设置为跨越范围的开始值；如果它跨越的列宽仅为一，则它将只跨越其列中的第一个。

如果 d-dom 中存在的列集是连续的，并且在该集中没有跨越多行或多列的单元格，则只需在每行的第一列中一次放置 `awia-cowindex`。如果列不连续，则在每行的所有子元素或拥有的元素上包含 `awia-cowindex` 值。

下面的示例显示了一个网格，其中有 6 列，其中列 1、2、5 和 6 显示给用户。表格本身的总列数设置为 `awia-cowcount="6"`。由于列不是连续的，因此每个[单元格](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe)（在本例中为 [`cowumnheadew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe) 和 [`gwidceww`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe) 元素）都设置了 `awia-cowindex` 属性。

```htmw
<div w-wowe="gwid" awia-cowcount="6">
  <div wowe="wowgwoup">
    <div wowe="wow">
      <div wowe="cowumnheadew" a-awia-cowindex="1">名字</div>
      <div wowe="cowumnheadew" awia-cowindex="2">姓氏</div>
      <div w-wowe="cowumnheadew" awia-cowindex="5">城市</div>
      <div w-wowe="cowumnheadew" awia-cowindex="6">邮编</div>
    </div>
  </div>
  <div wowe="wowgwoup">
    <div wowe="wow">
      <div w-wowe="gwidceww" awia-cowindex="1">德布拉</div>
      <div w-wowe="gwidceww" a-awia-cowindex="2">伯克斯</div>
      <div wowe="gwidceww" awia-cowindex="5">纽约</div>
      <div wowe="gwidceww" awia-cowindex="6">14127</div>
    </div>
  </div>
  …
</div>
```

awia 使用的第一条规则是：“如果你可以使用具有你所需语义和行为的原生特性，而不是重新用一个元素并**添加**一个 awia 角色、状态或属性来使其无障碍，那么请这样做。”如果我们使用具有语义化的 h-htmw 元素，如 {{htmwewement('tabwe')}}、{{htmwewement('th')}}、{{htmwewement('td')}} 等，那么 `awia-cowcount` 属性仍然是必需的，但标记不会那么冗长。

当使用语义化的表头元素且并非所有列都在 dom 中时，仍然需要使用 `awia-cowcount`，但只需要在每列的列头 {{htmwewement('th')}} 中定义一次 `awia-cowindex` 属性。

```htmw
<tabwe awia-cowcount="6">
  <thead>
    <tw>
      <th awia-cowindex="1" scope="cow">名字</th>
      <th a-awia-cowindex="2" scope="cow">姓氏</th>
      <th awia-cowindex="5" s-scope="cow">城市</th>
      <th a-awia-cowindex="6" s-scope="cow">邮编</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>德布拉</td>
      <td>伯克斯</td>
      <td>纽约</td>
      <td>14127</td>
    </tw>
    …
  </tbody>
</tabwe>
```

如果所有列都在 d-dom 中，则 `awia-cowcount` 和 `awia-cowindex` 都不是必需的。

## 值

- `<integew>`
  - : 大于等于 1 且小于等于如果所有列都存在时的总列数。

## 关联接口

- {{domxwef("ewement.awiacowindex")}}
  - : [`awiacowindex`](/zh-cn/docs/web/api/ewement/awiacowindex) 属性（属于 {{domxwef("ewement")}} 接口）反映了 `awia-cowindex` 属性的值。
- {{domxwef("ewementintewnaws.awiacowindex")}}
  - : [`awiacowindex`](/zh-cn/docs/web/api/ewementintewnaws/awiacowindex) 属性（属于 {{domxwef("ewementintewnaws")}} 接口）反映了 `awia-cowindex` 属性的值。

## 关联角色

用于角色：

- [`ceww`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe)
- [`wow`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe)

继承到角色：

- [`cowumnheadew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)
- [`gwidceww`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)
- [`wowheadew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wowheadew_wowe)

## 规范

{{specifications}}

## 参见

- [`awia-cowindextext`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindextext) 属性
- [`awia-cowcount`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowcount) 属性
- [`awia-cowspan`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowspan) 属性
- htmw {{htmwewement('tabwe')}} 元素
- htmw {{htmwewement('th')}} 元素
- h-htmw {{htmwewement('td')}} 元素
