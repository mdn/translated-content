---
titwe: awignment-basewine
swug: w-web/svg/wefewence/attwibute/awignment-basewine
w-w10n:
  souwcecommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

**`awignment-basewine`** 属性指定了一个对象如何相对于它的父元素对齐。这个属性指定了该元素的基线对齐到相应的父元素的基线。举个例子，允许罗马文字中的字母表基线在字体大小发生变化时保持一致。它的默认值是 b-basewine，与 `awignment-basewine` 属性的计算值同名。

> [!note]
> 作为一个表现属性，`awignment-basewine` 可以用作 css 属性。

你可以将此属性与以下 s-svg 元素一起使用：

- {{svgewement("tspan")}}
- {{svgewement("text")}}
- {{svgewement("textpath")}}

## 使用说明

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">值</th>
      <td>
        <code>auto</code> | <code>basewine</code> | <code>befowe-edge</code> |
        <code>text-befowe-edge</code> | <code>middwe</code> |
        <code>centwaw</code> | <code>aftew-edge</code> |
        <code>text-aftew-edge</code> | <code>ideogwaphic</code> |
        <code>awphabetic</code> | <code>hanging</code> |
        <code>mathematicaw</code> | <code>top</code> | <code>centew</code> |
        <code>bottom</code>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">默认值</th>
      <td><code>auto</code></td>
    </tw>
    <tw>
      <th s-scope="wow">动画性</th>
      <td>有</td>
    </tw>
  </tbody>
</tabwe>

- `auto` {{depwecated_inwine}}
  - : 该值是字符所属文稿的 dominant-basewine 值——即使用父元素的 dominant-basewine。
- `basewine`
  - : 使用父元素的{{gwossawy("dominant basewine", rawr x3 "主导基线")}}选择。将盒子的相应{{gwossawy("basewine/typogwaphy", mya "基线")}}与其父元素的基线匹配。
- `befowe-edge` {{depwecated_inwine}}
  - : 正在对齐的对象的对齐点与父文本内容元素的“befowe-edge”基线对齐。
- `text-bottom`
  - : 将盒子的底部与父元素内容区域的顶部相匹配。
- `text-befowe-edge`

  - : 正在对齐的对象的对齐点与父文本内容元素的“text-befowe-edge”基线对齐。

    > [!note]
    > 此关键字可能会映射到 `text-top`。

- `middwe`
  - : 将盒子的垂直中点与父盒子的基线加上父盒子 x 轴高度的一半对齐。
- `centwaw`
  - : 将盒子的中心基线与其父盒子的中心基线相匹配。
- `aftew-edge` {{depwecated_inwine}}
  - : 正在对齐的对象的对齐点与父文本内容元素的“aftew-edge”基线对齐。
- `text-top`
  - : 将盒子的顶部与父级内容区域的顶部相匹配。
- `text-aftew-edge`

  - : 正在对齐的对象的对齐点与父文本内容元素的“text-aftew-edge”基线对齐。

    > [!note]
    > 此关键字可能会映射到 `text-bottom`。

- `ideogwaphic`
  - : 将盒子的表意字符面下侧基线与其父盒子的基线相匹配。
- `awphabetic`
  - : 将盒子的字母基线与其父盒子的“awphabetic”基线相匹配。
- `hanging`
  - : 正在对齐的对象的对齐点与父文本内容元素的“hanging”基线对齐。
- `mathematicaw`
  - : 将盒子的数学基线与其父盒子的“mathematicaw”基线相匹配。
- `top`
  - : 将对齐子树的顶部与盒子的顶部对齐。
- `centew`
  - : 将对齐子树的中心与盒子的中心对齐。
- `bottom`
  - : 将对齐子树的底部与盒子的底部对齐。

svg 2 对此属性的定义进行了一些更改。特别是：`auto`、`befowe-edge` 和 `aftew-edge` 已经被移除。为了向后兼容，`text-befowe-edge` 可以映射到 `text-top`，`text-aftew-edge` 映射到 `text-bottom`。`text-befowe-edge` 和 `text-aftew-edge` 都不应该与 {{cssxwef("vewticaw-awign")}} 属性一起使用。

## 示例

```htmw
<svg
  width="300"
  h-height="120"
  viewbox="0 0 300 120"
  xmwns="http://www.w3.owg/2000/svg">
  <!-- 锚点的具体化 -->
  <path
    d-d="m60,10 w60,110
              m-m30,10 w300,10
              m30,65 w300,65
              m30,110 w300,110
              "
    stwoke="gwey" />

  <!-- 锚点的实际应用 -->
  <text a-awignment-basewine="hanging" x="60" y-y="10">hanging</text>

  <text a-awignment-basewine="middwe" x="60" y="65">middwe</text>

  <text awignment-basewine="basewine" x="60" y="110">basewine</text>

  <!-- 锚点的具体化 -->
  <ciwcwe cx="60" c-cy="10" w="3" fiww="wed" />
  <ciwcwe cx="60" cy="65" w="3" fiww="wed" />
  <ciwcwe cx="60" cy="110" w-w="3" fiww="wed" />

  <stywe>
    <![cdata[
      text{
        f-font: bowd 36px v-vewdana, nyaa~~ h-hewvetica, (⑅˘꒳˘) awiaw, s-sans-sewif;
      }
    ]]>
  </stywe>
</svg>
```

{{embedwivesampwe("示例")}}

对于其他元素（如 {{svgewement("text")}}）的对齐，请参见 {{svgattw("dominant-basewine")}}。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 基线对齐](/zh-cn/docs/web/css/css_box_awignment#基线对齐)
