---
title: margin-left
slug: Web/CSS/margin-left
l10n:
  sourceCommit: 27977f96015d1b74e743fa3762672894e087bd3d
---

{{CSSRef}}

**`margin-left`** [CSS](/zh-CN/docs/Web/CSS) 属性设置元素左侧的[外边距区域](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#外边距区域)。正值使其远离相邻元素，负值使其更加靠近。

{{EmbedInteractiveExample("pages/css/margin-left.html")}}

两个相邻的盒子的垂直边距可能会合并。这被称为[_外边距折叠_](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)。

在宽度过度约束的极少数情况下（即，当 `width`、`margin-left`、`border`、`padding`、内容区域和 `margin-right` 都已被定义），`margin-left` 会被忽略，如果被指定为 `auto` 值，则会有相同的计算值。

## 语法

```css
/* <length> 值 */
margin-left: 10px; /* 绝对长度 */
margin-left: 1em; /* 相对于文本大小 */
margin-left: 5%; /* 相对于最近的块级容器的宽度 */

/* 关键字值 */
margin-left: auto;

/* 全局值 */
margin-left: inherit;
margin-left: initial;
margin-left: revert;
margin-left: revert-layer;
margin-left: unset;
```

`margin-left` 属性可以被指定为关键字 `auto`、`<length>` 或 `<percentage>`。它的值可以是正值、零或负值。

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 外边距的大小为固定值。
- {{cssxref("&lt;percentage&gt;")}}
  - : 外边距的大小为相对于[包含块](/zh-CN/docs/Web/CSS/Containing_block)的行级尺寸（由 {{cssxref("writing-mode")}} 定义的水平文字的*宽度*）的百分比。
- `auto`

  - : 左边距接收未使用的水平空间中的一部分（这主要由所使用的布局模式确定）。如果 `margin-left` 和 `margin-right` 的值都是 `auto`，则最后计算的空间是均匀分布的。下表总结了不同的情况：

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">{{cssxref("display")}} 的值</th>
          <th scope="col">{{cssxref("float")}} 的值</th>
          <th scope="col">{{cssxref("position")}} 的值</th>
          <th scope="col"><code>auto</code> 的计算值</th>
          <th scope="col">注释</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>
            <code>inline</code>、<code>inline-block</code>、<code>inline-table</code>
          </th>
          <th><em>任意</em></th>
          <th><code>static</code> 或 <code>relative</code></th>
          <td><code>0</code></td>
          <td>行级布局模式</td>
        </tr>
        <tr>
          <th>
            <code>block</code>、<code>inline</code>、<code>inline-block</code>、<code>block</code>、<code>table</code>、<code>inline-table</code>、<code>list-item</code>、<code>table-caption</code>
          </th>
          <th><em>任意</em></th>
          <th><code>static</code> 或 <code>relative</code></th>
          <td>
            <code>0</code>，除非将 <code>margin-left</code> 和
            <code>margin-right</code> 都设置为 <code>auto</code>。在这种情况下，它被设置为将元素置于其父级元素中心的值。
          </td>
          <td>块级布局模式</td>
        </tr>
        <tr>
          <th>
            <code>block</code>、<code>inline</code>、<code>inline-block</code>、<code>block</code>、<code>table</code>、<code>inline-table</code>、<code>list-item</code>、<code>table-caption</code>
          </th>
          <th><code>left</code> 或 <code>right</code></th>
          <th><code>static</code> 或 <code>relative</code></th>
          <td><code>0</code></td>
          <td>块级布局模式（浮动元素）</td>
        </tr>
        <tr>
          <th>
            <em><code>table-*</code> 中的任意一个<em>，除了 </em
            ><code>table-caption</code>
          </th>
          <th><em>任意</em></th>
          <th><em>任意</em></th>
          <td><code>0</code></td>
          <td>
            内部的 <code>table-*</code> 元素没有外边距，请使用
            {{ cssxref("border-spacing") }} 代替。
          </td>
        </tr>
        <tr>
          <th>
            <em>任意，除了 <code>flex</code></em>、<code>inline-flex</code
            > <em>或</em> <code>table-*</code>
          </th>
          <th><em>任意</em></th>
          <th>
            <em><code>fixed</code></em> 或 <code>absolute</code>
          </th>
          <td>
            <code>0</code>，除非将 <code>margin-left</code> 和
            <code>margin-right</code> 都设置为 <code>auto</code>。在这种情况下，如果 <code>width</code> 固定，它会被设置为将边框区域在可用宽度内居中的值。
          </td>
          <td>绝对定位布局模式</td>
        </tr>
        <tr>
          <th><code>flex</code>、<code>inline-flex</code></th>
          <th><em>任意</em></th>
          <th><em>任意</em></th>
          <td>
            <code>0</code>，除非存在任何正水平可用空间。在这种情况下，它会均匀分配到所有水平的 <code>auto</code> 外边距中。
          </td>
          <td>弹性盒布局模式</td>
        </tr>
      </tbody>
    </table>

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用百分比值设置 margin-left

`margin-left` 的百分比值代表相对于容器的行级尺寸尺寸。

#### HTML

```html
<p>
  靠近花园的入口处有一株大玫瑰树，树上的花是白色的，三个园丁正忙着把花儿染红。
</p>
<p class="example">
  爱丽丝觉得很奇怪，就想走过去仔细观察。她刚要走到他们面前，就听到其中一个人说：“小心点，老五！别把颜料溅到我身上。”
</p>
<p>“我也没办法，”老五生气地说，“是老七碰了我的胳膊。”</p>
```

#### CSS

```css
.example {
  margin-left: 50%;
}
```

#### 结果

{{EmbedLiveSample("使用百分比值设置 margin-left", "", "250")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("margin-top")}}、{{cssxref("margin-right")}} 和 {{cssxref("margin-bottom")}}，以及 {{cssxref("margin")}} 简写
- 映射的逻辑属性：{{cssxref("margin-block-start")}}、{{cssxref("margin-block-end")}}、{{cssxref("margin-inline-start")}} 和 {{cssxref("margin-inline-end")}}，以及 {{cssxref("margin-block")}} 和 {{cssxref("margin-inline")}} 简写
