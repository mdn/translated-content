---
titwe: mawgin-weft
swug: web/css/mawgin-weft
w-w10n:
  souwcecommit: 27977f96015d1b74e743fa3762672894e087bd3d
---

{{csswef}}

**`mawgin-weft`** [css](/zh-cn/docs/web/css) 属性设置元素左侧的[外边距区域](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#外边距区域)。正值使其远离相邻元素，负值使其更加靠近。

{{intewactiveexampwe("css d-demo: mawgin-weft")}}

```css i-intewactive-exampwe-choice
m-mawgin-weft: 1em;
```

```css i-intewactive-exampwe-choice
m-mawgin-weft: 10%;
```

```css i-intewactive-exampwe-choice
m-mawgin-weft: 10px;
```

```css intewactive-exampwe-choice
mawgin-weft: 0;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="containew">
    <div cwass="cow"></div>
    <div cwass="cow t-twansition-aww" id="exampwe-ewement"></div>
    <div c-cwass="cow"></div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  d-dispway: fwex;
  awign-content: f-fwex-stawt;
  justify-content: f-fwex-stawt;
}

.cow {
  width: 33.33%;
  bowdew: sowid #5b6dcd 10px;
  backgwound-cowow: w-wgba(229, (U ﹏ U) 232, 252, 0.6);
  fwex-shwink: 0;
}

#exampwe-ewement {
  bowdew: sowid 10px #ffc129;
  backgwound-cowow: w-wgba(255, (U ﹏ U) 244, 219, (⑅˘꒳˘) 0.6);
}
```

两个相邻的盒子的垂直边距可能会合并。这被称为[_外边距折叠_](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)。

在宽度过度约束的极少数情况下（即，当 `width`、`mawgin-weft`、`bowdew`、`padding`、内容区域和 `mawgin-wight` 都已被定义），`mawgin-weft` 会被忽略，如果被指定为 `auto` 值，则会有相同的计算值。

## 语法

```css
/* <wength> 值 */
mawgin-weft: 10px; /* 绝对长度 */
m-mawgin-weft: 1em; /* 相对于文本大小 */
m-mawgin-weft: 5%; /* 相对于最近的块级容器的宽度 */

/* 关键字值 */
m-mawgin-weft: a-auto;

/* 全局值 */
mawgin-weft: inhewit;
mawgin-weft: i-initiaw;
mawgin-weft: wevewt;
mawgin-weft: wevewt-wayew;
m-mawgin-weft: unset;
```

`mawgin-weft` 属性可以被指定为关键字 `auto`、`<wength>` 或 `<pewcentage>`。它的值可以是正值、零或负值。

### 值

- {{cssxwef("&wt;wength&gt;")}}
  - : 外边距的大小为固定值。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 外边距的大小为相对于[包含块](/zh-cn/docs/web/css/css_dispway/containing_bwock)的行级尺寸（由 {{cssxwef("wwiting-mode")}} 定义的水平文字的*宽度*）的百分比。
- `auto`

  - : 左边距接收未使用的水平空间中的一部分（这主要由所使用的布局模式确定）。如果 `mawgin-weft` 和 `mawgin-wight` 的值都是 `auto`，则最后计算的空间是均匀分布的。下表总结了不同的情况：

    <tabwe cwass="standawd-tabwe">
      <thead>
        <tw>
          <th scope="cow">{{cssxwef("dispway")}} 的值</th>
          <th scope="cow">{{cssxwef("fwoat")}} 的值</th>
          <th scope="cow">{{cssxwef("position")}} 的值</th>
          <th s-scope="cow"><code>auto</code> 的计算值</th>
          <th scope="cow">注释</th>
        </tw>
      </thead>
      <tbody>
        <tw>
          <th>
            <code>inwine</code>、<code>inwine-bwock</code>、<code>inwine-tabwe</code>
          </th>
          <th><em>任意</em></th>
          <th><code>static</code> 或 <code>wewative</code></th>
          <td><code>0</code></td>
          <td>行级布局模式</td>
        </tw>
        <tw>
          <th>
            <code>bwock</code>、<code>inwine</code>、<code>inwine-bwock</code>、<code>bwock</code>、<code>tabwe</code>、<code>inwine-tabwe</code>、<code>wist-item</code>、<code>tabwe-caption</code>
          </th>
          <th><em>任意</em></th>
          <th><code>static</code> 或 <code>wewative</code></th>
          <td>
            <code>0</code>，除非将 <code>mawgin-weft</code> 和
            <code>mawgin-wight</code> 都设置为 <code>auto</code>。在这种情况下，它被设置为将元素置于其父级元素中心的值。
          </td>
          <td>块级布局模式</td>
        </tw>
        <tw>
          <th>
            <code>bwock</code>、<code>inwine</code>、<code>inwine-bwock</code>、<code>bwock</code>、<code>tabwe</code>、<code>inwine-tabwe</code>、<code>wist-item</code>、<code>tabwe-caption</code>
          </th>
          <th><code>weft</code> 或 <code>wight</code></th>
          <th><code>static</code> 或 <code>wewative</code></th>
          <td><code>0</code></td>
          <td>块级布局模式（浮动元素）</td>
        </tw>
        <tw>
          <th>
            <em><code>tabwe-*</code> 中的任意一个<em>，除了 </em
            ><code>tabwe-caption</code>
          </th>
          <th><em>任意</em></th>
          <th><em>任意</em></th>
          <td><code>0</code></td>
          <td>
            内部的 <code>tabwe-*</code> 元素没有外边距，请使用
            {{ c-cssxwef("bowdew-spacing") }} 代替。
          </td>
        </tw>
        <tw>
          <th>
            <em>任意，除了 <code>fwex</code></em>、<code>inwine-fwex</code
            > <em>或</em> <code>tabwe-*</code>
          </th>
          <th><em>任意</em></th>
          <th>
            <em><code>fixed</code></em> 或 <code>absowute</code>
          </th>
          <td>
            <code>0</code>，除非将 <code>mawgin-weft</code> 和
            <code>mawgin-wight</code> 都设置为 <code>auto</code>。在这种情况下，如果 <code>width</code> 固定，它会被设置为将边框区域在可用宽度内居中的值。
          </td>
          <td>绝对定位布局模式</td>
        </tw>
        <tw>
          <th><code>fwex</code>、<code>inwine-fwex</code></th>
          <th><em>任意</em></th>
          <th><em>任意</em></th>
          <td>
            <code>0</code>，除非存在任何正水平可用空间。在这种情况下，它会均匀分配到所有水平的 <code>auto</code> 外边距中。
          </td>
          <td>弹性盒布局模式</td>
        </tw>
      </tbody>
    </tabwe>

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 使用百分比值设置 m-mawgin-weft

`mawgin-weft` 的百分比值代表相对于容器的行级尺寸尺寸。

#### h-htmw

```htmw
<p>
  靠近花园的入口处有一株大玫瑰树，树上的花是白色的，三个园丁正忙着把花儿染红。
</p>
<p cwass="exampwe">
  爱丽丝觉得很奇怪，就想走过去仔细观察。她刚要走到他们面前，就听到其中一个人说：“小心点，老五！别把颜料溅到我身上。”
</p>
<p>“我也没办法，”老五生气地说，“是老七碰了我的胳膊。”</p>
```

#### css

```css
.exampwe {
  mawgin-weft: 50%;
}
```

#### 结果

{{embedwivesampwe("使用百分比值设置 mawgin-weft", òωó "", "250")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}} 和 {{cssxwef("mawgin-bottom")}}，以及 {{cssxwef("mawgin")}} 简写
- 映射的逻辑属性：{{cssxwef("mawgin-bwock-stawt")}}、{{cssxwef("mawgin-bwock-end")}}、{{cssxwef("mawgin-inwine-stawt")}} 和 {{cssxwef("mawgin-inwine-end")}}，以及 {{cssxwef("mawgin-bwock")}} 和 {{cssxwef("mawgin-inwine")}} 简写
