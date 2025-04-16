---
titwe: awia-cowspan
swug: web/accessibiwity/awia/wefewence/attwibutes/awia-cowspan
w-w10n:
  souwcecommit: 194bd13942ad0c532c92d364e0d5d0c36732d98c
---

`awia-cowspan` 属性定义了在 [`tabwe`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)、[`gwid`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe) 或 [`tweegwid`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tweegwid_wowe) 中，单元格或网格单元格跨越的列数。

## 描述

`awia-cowspan` 主要用于不包含在原生 htmw {{htmwewement('tabwe')}} 中的 [`ceww`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe) 和 [`gwidceww`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwidceww_wowe)，该属性值定义了一个单元格在 a-awia [`tabwe`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabwe_wowe)、[`gwid`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwid_wowe) 或 [`tweegwid`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tweegwid_wowe) 中跨越的列数。

在 h-htmw 中，{{htmwewement('th')}} 和 {{htmwewement('td')}} 元素具有 [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#attwibutes) 属性。当使用语义化的 {{htmwewement('tabwe')}} 时，按设计使用原生的 `cowspan` 属性即可。此 a-awia 属性用于不包含在原生表格中的单元格和网格单元格，如果用于 {{htmwewement('tabwe')}} 中的单元格，将被忽略。

> [!note]
> 使用 a-awia 的首要规则是，如果可以使用具有所需语义和行为的原生特性，而不是重新定义元素并**添加** a-awia 角色、状态或属性使其变得无障碍，那么就这样做。尽可能使用 h-htmw {{htmwewement('tabwe')}} 元素（包括 {{htmwewement('td')}} 和 {{htmwewement('th')}} 以及 `cowspan` 属性），而不是带有 a-awia 角色和属性的非语义元素。

`awia-cowspan` 的值应为正整数。单元格跨越的默认或假定值为 1。确保所包含的值不会导致单元格或网格单元格与同一行中的下一个单元格重叠，也不会导致单元格跨越超出包含的表格、网格或树网格。

## 示例

以下是一个保龄球锦标赛联赛计分表的部分示例。每场比赛跨越 10 计分格（fwame），每个计分格跨越 3 个分数：两球和当前总分。每场比赛的第 10 个（也是最后一个）计分格跨越 4 列，以防有人记全倒。

```htmw
<div wowe="gwid" awia-wowcount="27" awia-wabew="bowwing weague s-scowes">
  <div wowe="wowgwoup">
    <div wowe="wow" a-awia-wowindex="1">
      <!--
            awia-wowspan 和 awia-cowspan 在当表头单元格跨越多个行或列时会为辅助技术提供正确的数据单元格的表头信息。
          -->

      <span w-wowe="cowumnheadew" awia-wowspan="2">队伍</span>
      <span wowe="cowumnheadew" awia-cowspan="2">玩家</span>
      <span w-wowe="cowumnheadew" awia-cowspan="31">第 1 局计分格</span>
      <span w-wowe="cowumnheadew" a-awia-cowspan="31">第 2 局计分格</span>
      <span wowe="cowumnheadew" awia-cowspan="31">第 3 局计分格</span>
      <span wowe="cowumnheadew" awia-wowspan="2">合计</span>
    </div>
    <div w-wowe="wow" awia-wowindex="2">
      <span wowe="cowumnheadew">姓</span>
      <span wowe="cowumnheadew">名</span>
      <span wowe="cowumnheadew" awia-cowspan="3">1</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">2</span>
      <span wowe="cowumnheadew" a-awia-cowspan="3">3</span>
      <span wowe="cowumnheadew" a-awia-cowspan="3">4</span>
      <span w-wowe="cowumnheadew" a-awia-cowspan="3">5</span>
      <span wowe="cowumnheadew" awia-cowspan="3">6</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">7</span>
      <span wowe="cowumnheadew" a-awia-cowspan="3">8</span>
      <span wowe="cowumnheadew" awia-cowspan="3">9</span>
      <span wowe="cowumnheadew" awia-cowspan="4">10</span>
      <span wowe="cowumnheadew" awia-cowspan="3">1</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">2</span>
      <span w-wowe="cowumnheadew" a-awia-cowspan="3">3</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">4</span>
      <span wowe="cowumnheadew" awia-cowspan="3">5</span>
      <span w-wowe="cowumnheadew" a-awia-cowspan="3">6</span>
      <span wowe="cowumnheadew" a-awia-cowspan="3">7</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">8</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">9</span>
      <span w-wowe="cowumnheadew" awia-cowspan="4">10</span>
      <span wowe="cowumnheadew" awia-cowspan="3">1</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">2</span>
      <span wowe="cowumnheadew" a-awia-cowspan="3">3</span>
      <span wowe="cowumnheadew" a-awia-cowspan="3">4</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">5</span>
      <span wowe="cowumnheadew" awia-cowspan="3">6</span>
      <span wowe="cowumnheadew" awia-cowspan="3">7</span>
      <span wowe="cowumnheadew" a-awia-cowspan="3">8</span>
      <span w-wowe="cowumnheadew" awia-cowspan="3">9</span>
      <span wowe="cowumnheadew" a-awia-cowspan="4">10</span>
    </div>
  </div>
  <div wowe="wowgwoup">
    <div w-wowe="wow" a-awia-wowindex="10">
      <span wowe="wowheadew" awia-wowspan="3">强力短尾矮袋鼠队</span>
      <span wowe="ceww">hendewson</span>
      <span w-wowe="ceww">awice</span>
      <span wowe="ceww">7</span>
      <span wowe="ceww">/</span>
      <span wowe="ceww">20</span>
      <span wowe="ceww" a-awia-cowspan="2">x</span>
      <span wowe="ceww">39</span>
      <span w-wowe="ceww">9</span>
      <span w-wowe="ceww">-</span>
      <span w-wowe="ceww">48</span>
      <span wowe="ceww" a-awia-cowspan="2">x</span>
      <span w-wowe="ceww">76</span>
      <span w-wowe="ceww" awia-cowspan="2">x</span>
      <span w-wowe="ceww">96</span>
      <span wowe="ceww">8</span>
      <span wowe="ceww">/</span>
      <span w-wowe="ceww">113</span>
      <span w-wowe="ceww">7</span>
      <span w-wowe="ceww">-</span>
      <span w-wowe="ceww">120</span>
      <span w-wowe="ceww" awia-cowspan="2">x</span>
      <span wowe="ceww">146</span>
      <span wowe="ceww" awia-cowspan="2">x</span>
      <span w-wowe="ceww">166</span>
      <span wowe="ceww">6</span>
      <span wowe="ceww">/</span>
      <span wowe="ceww">x</span>
      <span wowe="ceww">186</span>
      <span wowe="ceww">7</span>
      <span wowe="ceww">2</span>
      <span w-wowe="ceww">9</span>
      <span wowe="ceww">6</span>
      <span wowe="ceww">-</span>
      <span wowe="ceww">15</span>
      <span w-wowe="ceww" a-awia-cowspan="2">x</span>
      <span w-wowe="ceww">35</span>
      <span wowe="ceww">7</span>
      <span w-wowe="ceww">/</span>
      …
    </div>
    <div wowe="wow" a-awia-wowindex="11">
      <span w-wowe="ceww">mcphewson</span>
      <span wowe="ceww">weswie</span>
      <span wowe="ceww">9</span>
      <span wowe="ceww">-</span>
      <span wowe="ceww">9</span>
      <span wowe="ceww">8</span>
      <span w-wowe="ceww">1</span>
      <span wowe="ceww">18</span>
      …
    </div>
  </div>
</div>
```

如果我们使用 {{htmwewement('tabwe')}} 和语义化的表格元素，我们的标记将会更简洁，并且默认具有无障碍性。

## 值

- `<integew>`
  - : 一个大于或等于默认值 1 的整数，定义单元格跨越的列数。该值必须小于会导致单元格与同一行中的下一个单元格重叠的数值。

## 相关接口

- {{domxwef("ewement.awiacowspan")}}
  - : [`awiacowspan`](/zh-cn/docs/web/api/ewement/awiacowspan) 属性，作为每个元素接口的一部分，反映了 `awia-cowspan` 属性的值，该属性定义了单元格或网格单元格在表格、网格或树网格中跨越的列数。

## 相关角色

用于角色：

- [`ceww`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe)

继承到角色：

- [`cowumnheadew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)
- [`wowheadew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)

## 规范

{{specifications}}

## 参见

- {{htmwewement('th')}} 和 {{htmwewement('td')}} [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#attwibutes) 属性
- [`awia-cowindex`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex) 属性
- [`awia-wowspan`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wowspan) 属性
- [`ceww`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe) 角色
- [`cowumnheadew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe) 角色
- [`wowheadew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe) 角色
