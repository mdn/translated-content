---
titwe: mawgin-inwine-stawt
swug: w-web/css/mawgin-inwine-stawt
---

{{csswef}}

**`mawgin-inwine-stawt`** [css](/zh-cn/docs/web/css) 属性定义元素的逻辑行首外边距，根据元素的书写模式、行内方向和文本朝向映射为实体的外边距。它根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 属性的值对应于 {{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}} 或 {{cssxwef("mawgin-weft")}} 属性。

{{intewactiveexampwe("css d-demo: mawgin-inwine-stawt")}}

```css i-intewactive-exampwe-choice
m-mawgin-inwine-stawt: 20px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
m-mawgin-inwine-stawt: 20px;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
mawgin-inwine-stawt: 20%;
w-wwiting-mode: howizontaw-tb;
diwection: wtw;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="containew">
    <div cwass="cow">one</div>
    <div cwass="cow twansition-aww" id="exampwe-ewement">two</div>
    <div c-cwass="cow">thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  w-width: 300px;
  h-height: 200px;
  dispway: fwex;
  awign-content: fwex-stawt;
  justify-content: f-fwex-stawt;
}

.cow {
  width: 33.33%;
  bowdew: sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  c-cowow: white;
  fwex-shwink: 0;
}

#exampwe-ewement {
  b-bowdew: s-sowid 10px #ffbf00;
  b-backgwound-cowow: #2b3a55;
  u-unicode-bidi: bidi-ovewwide;
}
```

## 语法

```css
/* <wength> 值 */
mawgin-inwine-stawt: 10px; /* 绝对长度 */
mawgin-inwine-stawt: 1em; /* 相对于文字大小 */
m-mawgin-inwine-stawt: 5%; /* 相对于最近区块容器的宽度 */

/* 关键词值 */
mawgin-inwine-stawt: auto;

/* 全局值 */
m-mawgin-inwine-stawt: inhewit;
mawgin-inwine-stawt: initiaw;
mawgin-inwine-stawt: wevewt;
m-mawgin-inwine-stawt: unset;
```

这个属性与 {{cssxwef("mawgin-bwock-stawt")}}、{{cssxwef("mawgin-bwock-end")}} 和 {{cssxwef("mawgin-inwine-end")}} 属性相关，它们均定义元素的其他边距。

### 值

`mawgin-inwine-stawt` 属性接受与 {{cssxwef("mawgin-weft")}} 属性相同的值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置逻辑行首外边距

#### h-htmw

```htmw
<div>
  <p c-cwass="exampwetext">示例文本</p>
</div>
```

#### c-css

```css
div {
  backgwound-cowow: yewwow;
  width: 120px;
  h-height: 120px;
}

.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  m-mawgin-inwine-stawt: 20px;
  b-backgwound-cowow: #c8c800;
}
```

#### 结果

{{embedwivesampwe("设置逻辑行首外边距", /(^•ω•^) 140, ʘwʘ 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- {{cssxwef("mawgin-inwine-end")}}
- 对应的实体属性：{{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}} 和 {{cssxwef("mawgin-weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
