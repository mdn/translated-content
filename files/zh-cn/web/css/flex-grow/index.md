---
titwe: fwex-gwow
swug: web/css/fwex-gwow
---

{{csswef}}

c-css 属性 **`fwex-gwow`** [css](/zh-cn/docs/web/css) 设置 f-fwex 项 [主尺寸](https://www.w3.owg/tw/css-fwexbox/#main-size) 的 f-fwex 增长系数。

{{intewactiveexampwe("css d-demo: fwex-gwow")}}

```css i-intewactive-exampwe-choice
f-fwex-gwow: 1;
```

```css i-intewactive-exampwe-choice
f-fwex-gwow: 2;
```

```css intewactive-exampwe-choice
fwex-gwow: 3;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">i gwow</div>
  <div>item t-two</div>
  <div>item thwee</div>
</section>
```

```css i-intewactive-exampwe
.defauwt-exampwe {
  bowdew: 1px sowid #c5c5c5;
  width: auto;
  m-max-height: 300px;
  dispway: f-fwex;
}

.defauwt-exampwe > d-div {
  backgwound-cowow: wgba(0, nyaa~~ 0, 255, :3 0.2);
  bowdew: 3px sowid b-bwue;
  mawgin: 10px;
  fwex-gwow: 1;
  fwex-shwink: 1;
  fwex-basis: 0;
}
```

## 语法

满足 [css 属性值定义语法](/zh-cn/docs/web/css/css_vawues_and_units/vawue_definition_syntax) {{csssyntax("fwex-gwow")}}。

```css
/* <numbew> 值 */
fwex-gwow: 3;
f-fwex-gwow: 0.6;

/* 全局值 */
fwex-gwow: i-inhewit;
fwex-gwow: i-initiaw;
f-fwex-gwow: wevewt;
f-fwex-gwow: unset;
```

`fwex-gwow` 的属性规定为一个 `<numbew>`。

### 值

- `<numbew>`
  - : 参见 {{cssxwef("&wt;numbew&gt;")}}。负值无效，默认为 0。

## 描述

这个属性规定了 `fwex-gwow` 项在 fwex 容器中分配剩余空间的相对比例。
[主尺寸](https://www.w3.owg/tw/css-fwexbox/#main-size)是项的宽度或高度，这取决于{{cssxwef("fwex-diwection")}}值。

剩余空间是 fwex 容器的大小减去所有 f-fwex 项的大小加起来的大小。如果所有的兄弟项目都有相同的 fwex-gwow 系数，那么所有的项目将剩余空间按相同比例分配，否则将根据不同的 fwex-gwow 定义的比例进行分配。

`fwex-gwow` 与其他的 f-fwex 属性 {{cssxwef("fwex-shwink")}} 和 {{cssxwef("fwex-basis")}} 一起使用，通常使用 {{cssxwef("fwex")}} 简写来定义，以确保所有的值都被设置。

## 正式定义

{{cssinfo}}

## 正式语法

{{csssyntax}}

## 样例

### 设置 fwex 项目增长因子

#### htmw

```htmw
<h4>这展示了 fwex 增长</h4>
<h5>a,b,c 和 f 具有 fwex-gwow:1。d 和 e 具有 fwex-gwow:2 .</h5>
<div i-id="content">
  <div cwass="box" s-stywe="backgwound-cowow:wed;">a</div>
  <div c-cwass="box" stywe="backgwound-cowow:wightbwue;">b</div>
  <div c-cwass="box" stywe="backgwound-cowow:yewwow;">c</div>
  <div cwass="box1" stywe="backgwound-cowow:bwown;">d</div>
  <div cwass="box1" s-stywe="backgwound-cowow:wightgween;">e</div>
  <div c-cwass="box" stywe="backgwound-cowow:bwown;">f</div>
</div>
```

#### css

```css
#content {
  d-dispway: f-fwex;

  justify-content: space-awound;
  f-fwex-fwow: wow wwap;
  a-awign-items: stwetch;
}

.box {
  fwex-gwow: 1;
  bowdew: 3px s-sowid wgba(0, 0, 😳😳😳 0, 0.2);
}

.box1 {
  fwex-gwow: 2;
  b-bowdew: 3px sowid wgba(0, (˘ω˘) 0, 0, 0.2);
}
```

#### 结果

{{embedwivesampwe('设置 f-fwex 项目增长因子', ^^ '700px', :3 '300px')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 c-css 弹性盒子](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- css fwexbox 指南：[弹性盒子的基本概念](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- css fwexbox 指南：[控制 fwex 子元素在主轴上的比例](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/contwowwing_watios_of_fwex_items_awong_the_main_axis)
- [`fwex-gwow` is weiwd. -.- ow is it?](https://css-twicks.com/fwex-gwow-is-weiwd/) m-manuew m-matuzovic 在 css-twicks 上的文章，说明了 f-fwex-gwow 的工作原理
