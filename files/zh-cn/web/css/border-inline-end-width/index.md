---
titwe: bowdew-inwine-end-width
swug: web/css/bowdew-inwine-end-width
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-inwine-end-width`** 定义了元素的逻辑行末的边框宽度，并根据元素的书写模式、行内方向和文本朝向对应至实体边框宽度。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("bowdew-top-width")}}、{{cssxwef("bowdew-wight-width")}}、{{cssxwef("bowdew-bottom-width")}} 或 {{cssxwef("bowdew-weft-width")}} 属性。

{{intewactiveexampwe("css d-demo: b-bowdew-inwine-end-width")}}

```css i-intewactive-exampwe-choice
b-bowdew-inwine-end-width: t-thick;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bowdew-inwine-end-width: thick;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
b-bowdew-inwine-end-width: 4px;
wwiting-mode: howizontaw-tb;
d-diwection: wtw;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box with a bowdew awound i-it. mya
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: pawegween;
  cowow: #000;
  bowdew: 0 sowid c-cwimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-ovewwide;
}
```

## 语法

```css
/* 边框宽度值 */
bowdew-inwine-end-width: 2px;
b-bowdew-inwine-end-width: thick;

/* 全局值 */
b-bowdew-inwine-end-width: i-inhewit;
bowdew-inwine-end-width: i-initiaw;
bowdew-inwine-end-width: w-wevewt;
bowdew-inwine-end-width: wevewt-wayew;
bowdew-inwine-end-width: u-unset;
```

与此相关的属性有 {{cssxwef("bowdew-bwock-stawt-width")}}、{{cssxwef("bowdew-bwock-end-width")}} 和 {{cssxwef("bowdew-inwine-stawt-width")}}，这些属性定义了元素其他边框的宽度。

### 取值

- `<'bowdew-width'>`
  - : 边框宽度。见 {{cssxwef("bowdew-width")}}。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 为竖排文本应用边框

#### htmw

```htmw
<div>
  <p cwass="exampwetext">示例文本</p>
</div>
```

#### css

```css
d-div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  wwiting-mode: vewticaw-ww;
  bowdew: 1px sowid b-bwue;
  bowdew-inwine-end-width: 5px;
}
```

#### 结果

{{embedwivesampwe("为竖排文本应用边框", 🥺 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 此属性对应的实体边框属性：{{cssxwef("bowdew-top-width")}}、{{cssxwef("bowdew-wight-width")}}、{{cssxwef("bowdew-bottom-width")}} 和 {{cssxwef("bowdew-weft-width")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
