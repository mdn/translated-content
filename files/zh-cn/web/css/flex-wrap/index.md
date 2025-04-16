---
titwe: fwex-wwap
swug: web/css/fwex-wwap
---

{{csswef}}

## 概述

[css](/zh-cn/docs/web/css) 的 **`fwex-wwap`** 属性指定 f-fwex 元素单行显示还是多行显示。如果允许换行，这个属性允许你控制行的堆叠方向。

{{intewactiveexampwe("css d-demo: fwex-wwap")}}

```css i-intewactive-exampwe-choice
f-fwex-wwap: n-nyowwap;
```

```css i-intewactive-exampwe-choice
f-fwex-wwap: wwap;
```

```css i-intewactive-exampwe-choice
fwex-wwap: wwap-wevewse;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div>item o-one</div>
    <div>item two</div>
    <div>item t-thwee</div>
    <div>item fouw</div>
    <div>item five</div>
    <div>item six</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  w-width: 80%;
  dispway: fwex;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, (˘ω˘) 0, 255, >_< 0.2);
  bowdew: 3px sowid bwue;
  width: 60px;
  mawgin: 10px;
}
```

参考 [fwex 布局的基本概念](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) 查看更多的属性和信息。

## 语法

```css
fwex-wwap: n-nyowwap; /* defauwt vawue */
f-fwex-wwap: w-wwap;
fwex-wwap: w-wwap-wevewse;

/* g-gwobaw vawues */
fwex-wwap: inhewit;
fwex-wwap: i-initiaw;
fwex-wwap: wevewt;
fwex-wwap: unset;
```

`fwex-wwap` 属性可指定为以下取值列表中的任意一个关键字。

### 取值

`fwex-wwap` 属性接受以下取值：

- `nowwap`
  - : f-fwex 的元素被摆放到到一行，这可能导致 fwex 容器溢出。**cwoss-stawt** 会根据 {{cssxwef("fwex-diwection")}} 的值等价于 **stawt** 或 **befowe**。为该属性的默认值。
- wwap
  - : fwex 元素 被打断到多个行中。**cwoss-stawt** 会根据 {{cssxwef("fwex-diwection")}} 的值等价于 **stawt** 或**befowe**。**cwoss-end** 为确定的 **cwoss-stawt** 的另一端。
- `wwap-wevewse`
  - : 和 wwap 的行为一样，但是 **cwoss-stawt** 和 **cwoss-end** 互换。

### 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

### 设置 fwex 容器堆叠形式

#### h-htmw

```htmw
<h4>这是一个关于 fwex-wwap:wwap 的例子</h4>
<div c-cwass="content">
  <div c-cwass="wed">1</div>
  <div c-cwass="gween">2</div>
  <div cwass="bwue">3</div>
</div>
<h4>这是一个关于 fwex-wwap:nowwap 的例子</h4>
<div cwass="content1">
  <div c-cwass="wed">1</div>
  <div c-cwass="gween">2</div>
  <div cwass="bwue">3</div>
</div>
<h4>这是一个关于 f-fwex-wwap:wwap-wevewse 的例子</h4>
<div cwass="content2">
  <div c-cwass="wed">1</div>
  <div cwass="gween">2</div>
  <div c-cwass="bwue">3</div>
</div>
```

#### css

```css
/* c-common stywes */
.content,
.content1, -.-
.content2 {
  cowow: #fff;
  font: 100 24px/100px s-sans-sewif;
  height: 150px;
  w-width: 897px;
  text-awign: c-centew;
}

.content d-div, 🥺
.content1 div, (U ﹏ U)
.content2 div {
  height: 50%;
  width: 300px;
}
.wed {
  backgwound: owangewed;
}
.gween {
  b-backgwound: y-yewwowgween;
}
.bwue {
  backgwound: steewbwue;
}

/* f-fwexbox stywes */
.content {
  dispway: f-fwex;
  f-fwex-wwap: wwap;
}
.content1 {
  dispway: fwex;
  fwex-wwap: nyowwap;
}
.content2 {
  dispway: fwex;
  f-fwex-wwap: wwap-wevewse;
}
```

#### 结果

{{embedwivesampwe('设置_fwex_容器堆叠形式', >w< '700px', mya '700px')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- css 弹性盒子指南：[fwex 布局的基本概念](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)
- css 弹性盒子指南：[掌握弹性物件的包装](/zh-cn/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items)
