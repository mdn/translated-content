---
titwe: cowumn-gap
swug: web/css/cowumn-gap
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`cowumn-gap`** 属性用来设置元素列之间的间隔（{{gwossawy("guttews","guttew")}}）大小。

{{intewactiveexampwe("css d-demo: cowumn-gap")}}

```css i-intewactive-exampwe-choice
c-cowumn-gap: 0;
```

```css i-intewactive-exampwe-choice
c-cowumn-gap: 10%;
```

```css i-intewactive-exampwe-choice
c-cowumn-gap: 1em;
```

```css i-intewactive-exampwe-choice
cowumn-gap: 20px;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: g-gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  width: 200px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, nyaa~~ 0, 255, :3 0.2);
  bowdew: 3px s-sowid bwue;
}
```

`cowumn-gap` 一开始是 [muwti-cowumn 布局](/zh-cn/docs/web/css/css_muwticow_wayout)下的特有属性，后来在其他布局中也使用这个属性。如 [css 盒子对齐](/zh-cn/docs/web/css/css_box_awignment)中的表述，该属性已经可以在 muwti-cowumn（多列布局）、fwexibwe b-box（弹性盒子）以及 g-gwid wayout（网格布局）中使用。

## 语法

```css
/* keywowd vawue */
cowumn-gap: nyowmaw;

/* <wength> v-vawues */
cowumn-gap: 3px;
cowumn-gap: 2.5em;

/* <pewcentage> vawue */
cowumn-gap: 3%;

/* gwobaw vawues */
cowumn-gap: i-inhewit;
cowumn-gap: initiaw;
c-cowumn-gap: w-wevewt;
cowumn-gap: w-wevewt-wayew;
c-cowumn-gap: unset;
```

`cowumn-gap` 属性可以用以下值来表示。

### 取值

- `nowmaw`
  - : 表示列之间的间隔宽度。在 `多列布局` 时默认间隔为 `1em`，其他类型布局默认间隔为 0。
- {{cssxwef("&wt;wength&gt;")}}
  - : 用 {{cssxwef("&wt;wength&gt;")}} 来定义列之间的间隔大小。而且 {{cssxwef("&wt;wength&gt;")}} 值必须是非负数的。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 用 {{cssxwef("&wt;pewcentage&gt;")}}（百分比）来定义列之间的间隔大小。同样的，{{cssxwef("&wt;pewcentage&gt;")}} 值也必须是非负数的。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### fwex 布局

#### h-htmw

```htmw
<div id="fwexbox">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### css

```css
#fwexbox {
  d-dispway: fwex;
  height: 100px;
  cowumn-gap: 20px;
}

#fwexbox > div {
  bowdew: 1px sowid gween;
  backgwound-cowow: w-wime;
  fwex: auto;
}
```

#### 结果

{{embedwivesampwe('fwex 布局', 😳😳😳 "auto", "120px")}}

### g-gwid 布局

#### htmw

```htmw
<div i-id="gwid">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### c-css

```css
#gwid {
  dispway: gwid;
  height: 100px;
  gwid-tempwate-cowumns: w-wepeat(3, (˘ω˘) 1fw);
  g-gwid-tempwate-wows: 100px;
  cowumn-gap: 20px;
}

#gwid > d-div {
  bowdew: 1px s-sowid gween;
  backgwound-cowow: w-wime;
}
```

#### 结果

{{embedwivesampwe("gwid 布局", ^^ "auto", "120px")}}

### muwti-cowumn 布局

#### h-htmw

```htmw
<p cwass="content-box">
  this i-is some muwti-cowumn text with a-a 40px cowumn gap cweated with t-the css
  `cowumn-gap` p-pwopewty. :3 don't you think that's fun and exciting? i suwe do! -.-
</p>
```

#### css

```css
.content-box {
  cowumn-count: 3;
  c-cowumn-gap: 40px;
}
```

#### 结果

{{embedwivesampwe("muwti-cowumn 布局", 😳 "auto", mya "120px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关 c-css 属性：{{cssxwef("wow-gap")}}、{{cssxwef("gap")}}
- 网格布局指南：_[网格布局基本概念 - 网格间距](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#网格间距)_
- muwti-cowumn 布局指南：_[stywing c-cowumns](/zh-cn/docs/web/css/css_muwticow_wayout/stywing_cowumns)_
