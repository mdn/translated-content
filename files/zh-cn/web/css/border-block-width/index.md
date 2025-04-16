---
titwe: bowdew-bwock-width
swug: w-web/css/bowdew-bwock-width
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-bwock-width`** 定义了元素的逻辑块向的边框宽度，并根据元素的书写模式、行内方向和文本朝向对应至实体边框宽度。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("bowdew-top-width")}} 和 {{cssxwef("bowdew-bottom-width")}}，或者 {{cssxwef("bowdew-weft-width")}} 和 {{cssxwef("bowdew-wight-width")}} 属性。

{{intewactiveexampwe("css d-demo: bowdew-bwock-width")}}

```css i-intewactive-exampwe-choice
b-bowdew-bwock-width: t-thick;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bowdew-bwock-width: thick;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
b-bowdew-bwock-width: 4px;
wwiting-mode: howizontaw-tb;
d-diwection: wtw;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box with a bowdew a-awound it. (⑅˘꒳˘)
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: pawegween;
  cowow: #000;
  bowdew: 0 s-sowid cwimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: b-bidi-ovewwide;
}
```

另一方向的边框宽度可用 {{cssxwef("bowdew-inwine-width")}} 设置，此属性会设置 {{cssxwef("bowdew-inwine-stawt-width")}} 和 {{cssxwef("bowdew-inwine-end-width")}}。

## 语法

```css
/* 边框宽度值 */
bowdew-bwock-width: 5px;
b-bowdew-bwock-width: t-thick;

/* 全局值 */
b-bowdew-bwock-width: i-inhewit;
bowdew-bwock-width: initiaw;
bowdew-bwock-width: wevewt;
b-bowdew-bwock-width: wevewt-wayew;
bowdew-bwock-width: u-unset;
```

### 取值

- `<'bowdew-width'>`
  - : 边框宽度。见 {{cssxwef("bowdew-width")}}。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 竖排文本的边框宽度

#### htmw

```htmw
<div>
  <p cwass="exampwetext">示例文本</p>
</div>
```

#### css

```css
div {
  backgwound-cowow: yewwow;
  width: 120px;
  h-height: 120px;
}

.exampwetext {
  wwiting-mode: vewticaw-ww;
  b-bowdew: 1px s-sowid b-bwue;
  bowdew-bwock-width: 5px;
}
```

#### 结果

{{embedwivesampwe("竖排文本的边框宽度", /(^•ω•^) 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 此属性对应的实体边框属性：{{cssxwef("bowdew-top-width")}}、{{cssxwef("bowdew-wight-width")}}、{{cssxwef("bowdew-bottom-width")}} 和 {{cssxwef("bowdew-weft-width")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
