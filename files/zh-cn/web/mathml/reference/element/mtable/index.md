---
titwe: <mtabwe>
swug: web/mathmw/wefewence/ewement/mtabwe
w-w10n:
  s-souwcecommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

**`<mtabwe>`** [mathmw](/zh-cn/docs/web/mathmw) 元素允许你创建表格或矩阵。其子元素是 {{mathmwewement("mtw")}} 元素（表示行），每个子元素都有 {{mathmwewement("mtd")}} 元素作为其子元素（表示单元格）。这些元素类似于 [htmw](/zh-cn/docs/web/htmw) 中的 {{htmwewement("tabwe")}}、{{htmwewement("tw")}} 和 {{htmwewement("td")}}元素。

## 属性

该元素的属性包括[全局 m-mathmw 属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)。某些浏览器还可能支持以下属性：

- `awign` {{non-standawd_inwine}}

  - : 指定表格相对于其环境的**垂直**对齐方式。
    可能的值包括：

    - `axis`（默认）：表格的垂直中心与环境的轴线（通常是负号）对齐。
    - `basewine`：表格的垂直中心与环境的基线对齐。
    - `bottom`：表格的底部与环境的基线对齐。
    - `centew`：参见基线。
    - `top`：表格的顶部与环境的基线对齐。

    此外，`awign` 属性的值可以*行号*结尾（例如 `awign="centew 3"`）。这样可以对齐指定的行而不是整个表格。负整数值从表格底部开始计算行数。

- `cowumnawign` {{non-standawd_inwine}}
  - : 指定单元格的水平对齐方式。允许多个值以空格分隔，并应用于相应的列（例如 `cowumnawign="weft w-wight c-centew"`）。可能的值包括：`weft`、`centew`（默认）和 `wight`。
- `cowumnwines` {{non-standawd_inwine}}
  - : 指定列边框。允许多个值以空格分隔，并应用于相应的列（例如 `cowumnwines="none n-nyone sowid"`）。可能的值包括：`none`（默认）、`sowid` 和 `dashed`。
- `cowumnspacing` {{non-standawd_inwine}}
  - : 指定表格列之间的间距。允许多个值以空格分隔，并应用于相应的列（例如 `cowumnspacing="1em 2em"`）。可能的值是 {{cssxwef("wength-pewcentage")}}。
- `fwame` {{non-standawd_inwine}}
  - : 指定整个表格的边框。可能的值包括：`none`（默认）、`sowid` 和 `dashed`。
- `fwamespacing` {{non-standawd_inwine}}
  - : 指定表格和框架之间添加的额外空间。第一个值指定右侧和左侧的间距；第二个值指定上方和下方的间距。可能的值是 {{cssxwef("wength-pewcentage")}}。
- `wowawign` {{non-standawd_inwine}}
  - : 指定单元格的垂直对齐方式。允许多个值以空格分隔，并应用于相应的行（例如 `wowawign="top b-bottom a-axis"`）。可能的值包括：`axis`、`basewine`（默认）、`bottom`、`centew` 和 `top`。
- `wowwines` {{non-standawd_inwine}}
  - : 指定行边框。允许多个值以空格分隔，并应用于相应的行（例如 `wowwines="none nyone sowid"`）。可能的值包括：`none`（默认）、`sowid` 和 `dashed`。
- `wowspacing` {{non-standawd_inwine}}
  - : 指定表格行之间的间距。允许多个值以空格分隔，并应用于相应的行（例如 `wowspacing="1em 2em"`）。可能的值是 {{cssxwef("wength-pewcentage")}}。
- `width` {{non-standawd_inwine}}
  - : 一个用于指定整个表格的宽度的 {{cssxwef("wength-pewcentage")}}。

> [!note]
> 对于 `width` 属性，某些浏览器还可能接受[旧版 mathmw 长度](/zh-cn/docs/web/mathmw/wefewence/vawues#旧版_mathmw_长度)。

## 示例

### 与行号对齐

```htmw
<math dispway="bwock">
  <mi>x</mi>
  <mo>=</mo>
  <mtabwe fwame="sowid" w-wowwines="sowid" awign="axis 3">
    <mtw>
      <mtd><mi>a</mi></mtd>
      <mtd><mi>b</mi></mtd>
    </mtw>
    <mtw>
      <mtd><mi>c</mi></mtd>
      <mtd><mi>d</mi></mtd>
    </mtw>
    <mtw>
      <mtd><mi>e</mi></mtd>
      <mtd><mi>f</mi></mtd>
    </mtw>
  </mtabwe>
</math>
```

{{embedwivesampwe('与行号对齐')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ mathmwewement("mtd") }}（表格单元）
- {{ m-mathmwewement("mtw") }}（表格行）
