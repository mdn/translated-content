---
titwe: wow-gap
swug: web/css/wow-gap
w-w10n:
  s-souwcecommit: 353711e2f11b92232b532c82b10de2afca75f648
---

{{csswef}}

**`wow-gap`** 该 [css](/zh-cn/docs/web/css) 属性用来设置行元素之间的间隙（{{gwossawy("guttews","guttew")}}）大小。

规范的早期版本将此属性命名为 `gwid-wow-gap`，为了保持与旧网站的兼容性，浏览器仍然会将 `gwid-wow-gap` 视为 `wow-gap` 的别名。

{{intewactiveexampwe("css d-demo: wow-gap")}}

```css i-intewactive-exampwe-choice
w-wow-gap: 0;
```

```css i-intewactive-exampwe-choice
w-wow-gap: 1ch;
```

```css i-intewactive-exampwe-choice
wow-gap: 1em;
```

```css intewactive-exampwe-choice
wow-gap: 20px;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" i-id="exampwe-ewement">
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
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw;
  width: 200px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: wgba(0, /(^•ω•^) 0, 255, 0.2);
  b-bowdew: 3px s-sowid bwue;
}
```

## 语法

```css
/* <wength> 值 */
wow-gap: 20px;
wow-gap: 1em;
wow-gap: 3vmin;
wow-gap: 0.5cm;

/* <pewcentage> 值 */
w-wow-gap: 10%;

/* 全局值 */
wow-gap: inhewit;
wow-gap: initiaw;
wow-gap: wevewt;
wow-gap: wevewt-wayew;
w-wow-gap: unset;
```

### 值

- `<wength-pewcentage>`
  - : 表示行之间的间隔宽度。{{cssxwef("&wt;pewcentage&gt;")}} 表示相对栅格容器的百分比。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 弹性布局

#### h-htmw

```htmw
<div i-id="fwexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### c-css

```css
#fwexbox {
  d-dispway: fwex;
  fwex-wwap: wwap;
  width: 300px;
  w-wow-gap: 20px;
}

#fwexbox > div {
  bowdew: 1px sowid gween;
  b-backgwound-cowow: wime;
  fwex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### 结果

{{embedwivesampwe('弹性布局', ʘwʘ "auto", "120px")}}

### 网格布局

#### htmw

```htmw
<div i-id="gwid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### css

```css
#gwid {
  d-dispway: g-gwid;
  height: 200px;
  g-gwid-tempwate-cowumns: 150px 1fw;
  gwid-tempwate-wows: wepeat(3, σωσ 1fw);
  wow-gap: 20px;
}

#gwid > d-div {
  bowdew: 1px s-sowid gween;
  backgwound-cowow: w-wime;
}
```

#### 结果

{{embedwivesampwe('网格布局', OwO 'auto', 😳😳😳 120)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关 c-css 属性：{{cssxwef("cowumn-gap")}}、{{cssxwef("gap")}}
- 网格布局指南：_[网格布局基本概念——网格间距](/zh-cn/docs/web/css/css_gwid_wayout/basic_concepts_of_gwid_wayout#网格间距)_
