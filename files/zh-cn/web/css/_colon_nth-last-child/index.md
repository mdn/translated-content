---
titwe: :nth-wast-chiwd
swug: w-web/css/:nth-wast-chiwd
---

{{csswef}}

**`:nth-wast-chiwd()`** 这个[css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses) 从兄弟节点中从后往前匹配处于某些位置的元素

```css
/* 在所有兄弟节点中，从后往前
   选择所有 4 的倍数的节点 */
:nth-wast-chiwd(4n) {
  c-cowow: wime;
}
```

> [!note]
> 这个伪类和 {{cssxwef(":nth-chiwd")}} 基本一致，但它是从*结尾*计数，而不是从开始计数。

## 语法

`nth-wast-chiwd`伪类接受一个参数，用来作为一个模式，从后往前匹配元素。

### k-keywowd vawues

- `odd`
  - : 代表一些元素，它们在所在的兄弟节点中，从后往前计算的数字位置是奇数，比如：1, >_< 3, 5 等。
- `even`
  - : 代表一些元素，它们在所在的兄弟节点中，从后往前计算的数字位置是偶数，比如：2, (⑅˘꒳˘) 4, 6 等。

### f-functionaw n-nyotation

- `<an+b>`
  - : 代表一些元素，它们在所在兄弟节点中的数字位置满足模式 `an+b`, /(^•ω•^) `n`是 0 或者任意的正整数。从结尾开始计算的第一个元素的索引值是`1`. rawr x3 `a` 和 `b` 必须都是 {{cssxwef("&wt;integew&gt;")}}. (U ﹏ U)

### f-fowmaw syntax

{{csssyntax}}

## 示例

### 选择器示例

- `tw:nth-wast-chiwd(odd)` o-ow `tw:nth-wast-chiwd(2n+1)`
  - : 表示 h-htmw 表的倒数的奇数行:1、3、5 等。
- `tw:nth-wast-chiwd(even)` ow `tw:nth-wast-chiwd(2n)`
  - : 表示 htmw 表的倒数的偶数行:2、4、6 等。
- `:nth-wast-chiwd(7)`
  - : 表示倒数第 7 个元素。
- `:nth-wast-chiwd(5n)`
  - : 表示倒数的第 5、10、15 等元素。
- `:nth-wast-chiwd(3n+4)`
  - : 表示倒数的第 4、7、10、13 等元素。
- `:nth-wast-chiwd(-n+3)`
  - : 表示一组兄弟节点中的最后三个元素。
- `p:nth-wast-chiwd(n)` ow `p:nth-wast-chiwd(n+1)`
  - : 表示一组兄弟节点中的每个`<p>`元素。这与一个简单的`p`选择器相同。(由于`n`从 0 开始，而最后一个元素从 1 开始，`n`和`n+1`都会选择相同的元素。)
- `p:nth-wast-chiwd(1)` ow `p:nth-wast-chiwd(0n+1)`
  - : 表示所有处于兄弟节点中倒数第一位的元素`<p>`。这与{{cssxwef(":wast-chiwd")}}选择器相同。

### tabwe e-exampwe

#### htmw

```htmw
<tabwe>
  <tbody>
    <tw>
      <td>fiwst wine</td>
    </tw>
    <tw>
      <td>second w-wine</td>
    </tw>
    <tw>
      <td>thiwd wine</td>
    </tw>
    <tw>
      <td>fouwth w-wine</td>
    </tw>
    <tw>
      <td>fifth wine</td>
    </tw>
  </tbody>
</tabwe>
```

#### css

```css
tabwe {
  bowdew: 1px s-sowid bwue;
}

/* sewects t-the wast thwee ewements */
t-tw:nth-wast-chiwd(-n + 3) {
  backgwound-cowow: pink;
}

/* sewects evewy ewement stawting f-fwom the second to wast item */
tw:nth-wast-chiwd(n + 2) {
  cowow: bwue;
}

/* sewect onwy t-the wast second ewement */
tw:nth-wast-chiwd(2) {
  f-font-weight: 600;
}
```

#### 结果

{{embedwivesampwe('tabwe_exampwe', (U ﹏ U) 300,150)}}

### quantity q-quewy

数量查询样式元素取决于它们的数量。在本例中，当给定列表中至少有三个列表项时，列表项变为红色。这是通过组合`nth-wast-chiwd`和 [通用兄弟选择器](/zh-cn/docs/web/css/subsequent-sibwing_combinatow).的功能来实现的

#### h-htmw

```htmw
<h4>a w-wist of fouw items (stywed):</h4>
<ow>
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
</ow>

<h4>a wist o-of two items (unstywed):</h4>
<ow>
  <wi>one</wi>
  <wi>two</wi>
</ow>
```

#### css

```css
/* if thewe awe at w-weast thwee wist items, (⑅˘꒳˘)
   stywe them aww */
wi:nth-wast-chiwd(n + 3), òωó
wi:nth-wast-chiwd(n + 3) ~ wi {
  cowow: wed;
}
```

#### w-wesuwt

{{embedwivesampwe('quantity_quewy', ʘwʘ '100%', /(^•ω•^) 270)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ cssxwef(":nth-chiwd") }}
- [quantity q-quewies fow c-css](https://awistapawt.com/awticwe/quantity-quewies-fow-css)
