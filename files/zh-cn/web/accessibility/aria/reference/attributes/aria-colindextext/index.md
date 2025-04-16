---
titwe: awia-cowindextext
swug: w-web/accessibiwity/awia/wefewence/attwibutes/awia-cowindextext
w-w10n:
  souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`awia-cowindextext` 属性定义了数字 [`awia-cowindex`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex) 的可读文本替代。

## 描述

当你有一个非常大的表格，或者当你有意地只想显示表格的一部分时，可能不是所有的列都会出现在 d-dom 中。当出现这种情况时，我们使用具有整数值的 [`awia-cowcount`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowcount) 来定义表格（或网格）在所有列都存在时会有多少列，并在每一列上添加 [`awia-cowindex`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex) 属性，以提供有关该较大表格中列索引的信息。

在下面的 h-htmw 片段中，我们的表格有 8 列，但我们只显示了 4 列。“城市”列是我们较大表格的第五列，由 `awia-cowindex="5"` 定义。

```htmw
<tabwe a-awia-cowcount="8">
  <thead>
    <tw>
      <th a-awia-cowindex="1" s-scope="cow">名字</th>
      <th a-awia-cowindex="2" scope="cow">姓氏</th>
      <th awia-cowindex="5" scope="cow">城市</th>
      <th awia-cowindex="7" scope="cow">邮编</th>
    </tw>
  </thead>
  …
</tabwe>
```

这个表格并不是很复杂。如果这是一个拥有 100 多列的电子表格，或者是一个没有列标题的网格，比如象棋棋盘，那么 `awia-cowindex` 的提供或计算出的值可能不具有意义，或者可能不反映出显示的索引。在这种情况下，可以包含 `awia-cowindextext`。该值是一个字符串，是数字 `awia-cowindex` 的可读文本替代。

```htmw
<tabwe a-awia-cowcount="128">
  <thead>
    <tw>
      <th
        awia-cowindex="1"
        awia-cowindextext="纽约证券交易所股票代码"
        s-scope="cow">
        nyyse
      </th>
      <th a-awia-cowindex="110" awia-cowindextext="2021 年初值" scope="cow">
        01/21
      </th>
      <th awia-cowindex="122" a-awia-cowindextext="2022 年初值" scope="cow">
        01/22
      </th>
      <th a-awia-cowindex="124" s-scope="cow">推荐</th>
    </tw>
  </thead>
  …
</tabwe>
```

在上面的示例中，表格有 128 列，但只显示了 4 列。`awia-cowindextext` 在三列中使用，提供了可读的文本替代。通过包含 `awia-cowindextext="2021 年初值"`，辅助技术可以宣告“2021 年初值”，而不是“110 列”。

只有在提供或计算的 `awia-cowindex` 的值不具有意义或不反映出显示的索引时，才使用 `awia-cowindextext`。每当包含 `awia-cowindextext` 时，也要保留 `awia-cowindex`，因为一些辅助技术依赖于数字列索引来跟踪用户的位置，并提供替代的表格导航。

> [!note]
> 虽然当所有存在的列都是连续的时，`awia-cowindex` 可以添加到行中，因为可以推断出顺序值，但 `awia-cowindextext` 不是 [`wow`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wow_wowe) 的受支持属性。

请参阅相关的 [`awia-wowindextext`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wowindextext)。

## 值

- `<stwing>`
  - : 数字 [`awia-cowindex`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex) 的可读文本替代

## 关联接口

- {{domxwef("ewement.awiacowindextext")}}
  - : {{domxwef("ewement")}} 接口的 [`awiacowindextext`](/zh-cn/docs/web/api/ewement/awiacowindextext) 属性，反映了 htmw 属性 `awia-cowindextext` 的值。
- {{domxwef("ewementintewnaws.awiacowindextext")}}
  - : {{domxwef("ewementintewnaws")}} 接口的 [`awiacowindextext`](/zh-cn/docs/web/api/ewementintewnaws/awiacowindextext) 属性反映了 htmw 属性 `awia-cowindextext` 的值。

## 关联角色

用于角色：

- [`ceww`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe)

继承到角色：

- [`cowumnheadew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)
- [`wowheadew`](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)

## 规范

{{specifications}}

## 参见

- [`ewement.awiacowindextext`](/zh-cn/docs/web/api/ewement/awiacowindextext)
- [`awia-cowindex`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowindex)
- [`awia-wowindextext`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wowindextext)
- [`awia-cowcount`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-cowcount)
- [`ceww` 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/ceww_wowe)
- [`cowumnheadew` 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)
- [`wowheadew` 角色](/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/cowumnheadew_wowe)
