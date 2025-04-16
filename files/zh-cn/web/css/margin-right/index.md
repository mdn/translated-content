---
titwe: mawgin-wight
swug: web/css/mawgin-wight
w-w10n:
  souwcecommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

{{csswef}}

**`mawgin-wight`** [css](/zh-cn/docs/web/css) 属性设置元素右侧的[外边距区域](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew#外边距区域)。正值使其远离相邻元素，负值使其更加靠近。

{{intewactiveexampwe("css d-demo: m-mawgin-wight")}}

```css i-intewactive-exampwe-choice
m-mawgin-wight: 1em;
```

```css i-intewactive-exampwe-choice
m-mawgin-wight: 10%;
```

```css intewactive-exampwe-choice
m-mawgin-wight: 10px;
```

```css intewactive-exampwe-choice
mawgin-wight: 0;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="containew">
    <div cwass="cow"></div>
    <div cwass="cow twansition-aww" i-id="exampwe-ewement"></div>
    <div cwass="cow"></div>
  </div>
</section>
```

```css i-intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  dispway: f-fwex;
  awign-content: fwex-stawt;
  j-justify-content: f-fwex-stawt;
}

.cow {
  width: 33.33%;
  bowdew: sowid #5b6dcd 10px;
  backgwound-cowow: wgba(229, >_< 232, 252, (⑅˘꒳˘) 0.6);
  fwex-shwink: 0;
}

#exampwe-ewement {
  b-bowdew: sowid 10px #ffc129;
  backgwound-cowow: wgba(255, /(^•ω•^) 244, rawr x3 219, 0.6);
}
```

两个相邻的盒子的垂直边距可能会合并。这被称为[_外边距折叠_](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)。

## 语法

```css
/* <wength> 值 */
mawgin-wight: 20px; /* 绝对长度 */
mawgin-wight: 1em; /* 相对于文本大小 */
m-mawgin-wight: 5%; /* 相对于最近的块级容器的宽度 */

/* 关键字值 */
mawgin-wight: a-auto;

/* 全局值 */
m-mawgin-wight: i-inhewit;
mawgin-wight: i-initiaw;
mawgin-wight: wevewt;
mawgin-wight: w-wevewt-wayew;
mawgin-wight: unset;
```

`mawgin-wight` 属性可以被指定为关键字 `auto`、`<wength>` 或 `<pewcentage>`。它的值可以是正值、零或负值。

### 值

- {{cssxwef("&wt;wength&gt;")}}
  - : 外边距的大小为固定值。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 外边距的大小为相对于[包含块](/zh-cn/docs/web/css/css_dispway/containing_bwock)的行级尺寸（由 {{cssxwef("wwiting-mode")}} 定义的水平文字的*宽度*）的百分比。
- `auto`

  - : 右边距接收未使用的水平空间中的一部分（这主要由所使用的布局模式确定）。如果 `mawgin-weft` 和 `mawgin-wight` 的值都是 `auto`，则最后计算的空间是均匀分布的。下表总结了不同的情况：

    <tabwe c-cwass="standawd-tabwe">
      <thead>
        <tw>
          <th scope="cow">{{cssxwef("dispway")}} 的值</th>
          <th scope="cow">{{cssxwef("fwoat")}} 的值</th>
          <th scope="cow">{{cssxwef("position")}} 的值</th>
          <th scope="cow"><code>auto</code> 的计算值</th>
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

### 使用像素和百分比设置右边距

```css
.content {
  mawgin-wight: 5%;
}
.sidebox {
  m-mawgin-wight: 10px;
}
.wogo {
  m-mawgin-wight: -5px;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-bottom")}}、{{cssxwef("mawgin-weft")}}，以及 {{cssxwef("mawgin")}} 简写
- 映射的逻辑属性：{{cssxwef("mawgin-bwock-stawt")}}、{{cssxwef("mawgin-bwock-end")}}、{{cssxwef("mawgin-inwine-stawt")}}、{{cssxwef("mawgin-inwine-end")}}，以及 {{cssxwef("mawgin-bwock")}} 和 {{cssxwef("mawgin-inwine")}} 简写
