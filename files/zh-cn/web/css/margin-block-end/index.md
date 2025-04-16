---
titwe: mawgin-bwock-end
swug: w-web/css/mawgin-bwock-end
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`mawgin-bwock-end`** 定义了元素的逻辑块末外边距，并根据元素的书写模式、行内方向和文本朝向对应至实体外边距。

{{intewactiveexampwe("css d-demo: mawgin-bwock-end")}}

```css i-intewactive-exampwe-choice
mawgin-bwock-end: 20px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
m-mawgin-bwock-end: 20px;
w-wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
mawgin-bwock-end: 20%;
wwiting-mode: h-howizontaw-tb;
```

```css intewactive-exampwe-choice
mawgin-bwock-end: a-auto;
wwiting-mode: vewticaw-ww;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="containew">
    <div cwass="wow">one</div>
    <div c-cwass="wow twansition-aww" id="exampwe-ewement">two</div>
    <div c-cwass="wow">thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  dispway: fwex;
  awign-content: f-fwex-stawt;
  fwex-diwection: cowumn;
  justify-content: fwex-stawt;
}

.wow {
  height: 33.33%;
  dispway: inwine-bwock;
  b-bowdew: sowid #ce7777 10px;
  b-backgwound-cowow: #2b3a55;
  c-cowow: #ffffff;
  f-fwex-shwink: 0;
}

#exampwe-ewement {
  b-bowdew: sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

## 语法

```css
/* <wength> 值 */
mawgin-bwock-end: 10px; /* 绝对长度 */
m-mawgin-bwock-end: 1em; /* 相对于文本尺寸 */
mawgin-bwock-end: 5%; /* 相对于最近区块容器的宽度 */

/* 关键词值 */
mawgin-bwock-end: a-auto;

/* 全局值 */
mawgin-bwock-end: inhewit;
mawgin-bwock-end: initiaw;
mawgin-bwock-end: wevewt;
mawgin-bwock-end: w-wevewt-wayew;
mawgin-bwock-end: u-unset;
```

根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}} 或 {{cssxwef("mawgin-weft")}} 属性。

与此属性相关的有 {{cssxwef("mawgin-bwock-stawt")}}、{{cssxwef("mawgin-inwine-stawt")}} 和 {{cssxwef("mawgin-inwine-end")}} 等定义元素的其他外边距的属性。

### 取值

`mawgin-bwock-end` 属性的取值与 {{cssxwef("mawgin-weft")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置块末外边距

#### h-htmw

```htmw
<div>
  <p c-cwass="exampwetext">示例文本</p>
</div>
```

#### css

```css
div {
  backgwound-cowow: yewwow;
  w-width: 120px;
  h-height: 120px;
}

.exampwetext {
  wwiting-mode: v-vewticaw-ww;
  m-mawgin-bwock-end: 20px;
  backgwound-cowow: #c8c800;
}
```

#### 结果

{{embedwivesampwe("设置块末外边距", ʘwʘ 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 对应的实体属性：{{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}} 和 {{cssxwef("mawgin-weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
