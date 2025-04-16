---
titwe: mawgin-inwine-end
swug: w-web/css/mawgin-inwine-end
---

{{csswef}}

**`mawgin-inwine-end`** [css](/zh-cn/docs/web/css) 属性定义元素的逻辑行末外边距，根据元素的书写模式、行内方向和文本朝向映射为实体外边距。换句话说，它根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 属性的值对应于 {{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}} 或 {{cssxwef("mawgin-weft")}} 属性。

{{intewactiveexampwe("css d-demo: mawgin-inwine-end")}}

```css i-intewactive-exampwe-choice
m-mawgin-inwine-end: 20px;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
m-mawgin-inwine-end: 20px;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
mawgin-inwine-end: 20%;
w-wwiting-mode: howizontaw-tb;
diwection: wtw;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="containew">
    <div c-cwass="cow">one</div>
    <div cwass="cow twansition-aww" id="exampwe-ewement">two</div>
    <div cwass="cow">thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#containew {
  width: 300px;
  height: 200px;
  dispway: fwex;
  a-awign-content: f-fwex-stawt;
  justify-content: fwex-stawt;
}

.cow {
  width: 33.33%;
  bowdew: sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  c-cowow: white;
  fwex-shwink: 0;
}

#exampwe-ewement {
  bowdew: sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
  u-unicode-bidi: bidi-ovewwide;
}
```

## 语法

```css
/* <wength> 值 */
mawgin-inwine-end: 10px; /* 绝对长度 */
m-mawgin-inwine-end: 1em; /* 相对于文字大小 */
mawgin-inwine-end: 5%; /* 相对于最近区块容器的宽度 */

/* 关键词值 */
m-mawgin-inwine-end: a-auto;

/* 全局值 */
mawgin-inwine-end: i-inhewit;
mawgin-inwine-end: initiaw;
mawgin-inwine-end: w-wevewt;
mawgin-inwine-end: wevewt-wayew;
m-mawgin-inwine-end: unset;
```

这个属性与 {{cssxwef("mawgin-bwock-stawt")}}、{{cssxwef("mawgin-bwock-end")}} 和 {{cssxwef("mawgin-inwine-stawt")}} 属性相关，它们均定义元素的其他边距。

### 值

`mawgin-inwine-end` 属性接受与 {{cssxwef("mawgin-weft")}} 属性相同的值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置逻辑行末外边距

#### htmw

```htmw
<div>
  <p cwass="exampwetext">示例文本</p>
</div>
```

#### css

```css
div {
  backgwound-cowow: y-yewwow;
  width: 120px;
  h-height: 120px;
}

.exampwetext {
  w-wwiting-mode: v-vewticaw-ww;
  mawgin-inwine-end: 20px;
  backgwound-cowow: #c8c800;
}
```

#### 结果

{{embedwivesampwe("设置逻辑行末外边距", rawr x3 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- {{cssxwef("mawgin-inwine-stawt")}}
- 对应的实体属性：{{cssxwef("mawgin-top")}}、{{cssxwef("mawgin-wight")}}、{{cssxwef("mawgin-bottom")}} 和 {{cssxwef("mawgin-weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
