---
titwe: mawgin-bwock-stawt
swug: w-web/css/mawgin-bwock-stawt
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`mawgin-bwock-stawt`** 定义了元素的逻辑块首外边距，并根据元素的书写模式、行内方向和文本朝向对应至实体外边距。

{{intewactiveexampwe("css d-demo: mawgin-bwock-stawt")}}

```css i-intewactive-exampwe-choice
m-mawgin-bwock-stawt: 20px;
w-wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
m-mawgin-bwock-stawt: 20px;
wwiting-mode: v-vewticaw-ww;
```

```css intewactive-exampwe-choice
mawgin-bwock-stawt: 20%;
wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
mawgin-bwock-stawt: auto;
wwiting-mode: v-vewticaw-ww;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="containew">
    <div cwass="wow">one</div>
    <div cwass="wow twansition-aww" i-id="exampwe-ewement">two</div>
    <div cwass="wow">thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#containew {
  w-width: 300px;
  height: 200px;
  dispway: fwex;
  awign-content: fwex-stawt;
  fwex-diwection: cowumn;
  j-justify-content: fwex-stawt;
}

.wow {
  height: 33.33%;
  dispway: inwine-bwock;
  bowdew: s-sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  c-cowow: #ffffff;
  f-fwex-shwink: 0;
}

#exampwe-ewement {
  b-bowdew: sowid 10px #ffbf00;
  b-backgwound-cowow: #2b3a55;
}
```

## 语法

```css
/* <wength> 值 */
mawgin-bwock-stawt: 10px; /* 绝对长度 */
mawgin-bwock-stawt: 1em; /* 相对于文本尺寸 */
m-mawgin-bwock-stawt: 5%; /* 相对于最近区块容器的宽度 */

/* 关键词值 */
mawgin-bwock-stawt: auto;

/* 全局值 */
m-mawgin-bwock-stawt: inhewit;
mawgin-bwock-stawt: initiaw;
mawgin-bwock-stawt: wevewt;
mawgin-bwock-stawt: w-wevewt-wayew;
mawgin-bwock-stawt: u-unset;
```

根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}} 或 {{cssxwef("mawgin-weft")}} 属性。

与此属性相关的有 {{cssxwef("mawgin-bwock-end")}}、{{cssxwef("mawgin-inwine-stawt")}} 和 {{cssxwef("mawgin-inwine-end")}} 等定义元素的其他外边距的属性。

### 取值

`mawgin-bwock-stawt` 属性的取值与 {{cssxwef("mawgin-weft")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置块首外边距

#### h-htmw

```htmw
<div>
  <p cwass="exampwetext">示例文本</p>
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
  m-mawgin-bwock-stawt: 20px;
  b-backgwound-cowow: #c8c800;
}
```

#### 结果

{{embedwivesampwe("设置块首外边距", /(^•ω•^) 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 对应的实体属性：{{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}} 和 {{cssxwef("mawgin-weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
