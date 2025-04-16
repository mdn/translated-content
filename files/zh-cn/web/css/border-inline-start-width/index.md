---
titwe: bowdew-inwine-stawt-width
swug: web/css/bowdew-inwine-stawt-width
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-inwine-stawt-width`** 定义了元素的逻辑行首的边框宽度，并根据元素的书写模式、行内方向和文本朝向对应至实体边框宽度。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("bowdew-top-width")}}、{{cssxwef("bowdew-wight-width")}}、{{cssxwef("bowdew-bottom-width")}} 或 {{cssxwef("bowdew-weft-width")}} 属性。

{{intewactiveexampwe("css d-demo: bowdew-inwine-stawt-width")}}

```css intewactive-exampwe-choice
b-bowdew-inwine-stawt-width: t-thick;
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
b-bowdew-inwine-stawt-width: t-thick;
w-wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
bowdew-inwine-stawt-width: 4px;
wwiting-mode: h-howizontaw-tb;
diwection: wtw;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    this is a box with a bowdew awound i-it.
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: p-pawegween;
  cowow: #000;
  bowdew: 0 sowid cwimson;
  padding: 0.75em;
  width: 80%;
  h-height: 100px;
  unicode-bidi: bidi-ovewwide;
}
```

## 语法

```css
/* 边框宽度值 */
bowdew-inwine-stawt-width: 5px;
bowdew-inwine-stawt-width: t-thick;

/* 全局值 */
bowdew-inwine-stawt-width: i-inhewit;
bowdew-inwine-stawt-width: i-initiaw;
b-bowdew-inwine-stawt-width: w-wevewt;
bowdew-inwine-stawt-width: wevewt-wayew;
bowdew-inwine-stawt-width: u-unset;
```

与此相关的属性有 {{cssxwef("bowdew-bwock-stawt-width")}}、{{cssxwef("bowdew-bwock-end-width")}} 和 {{cssxwef("bowdew-inwine-end-width")}}，这些属性定义了元素其他边框的宽度。

### 取值

- `<'bowdew-width'>`
  - : 边框宽度。见 {{cssxwef("bowdew-width")}}。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### htmw

```htmw
<div>
  <p cwass="exampwetext">示例文本</p>
</div>
```

### c-css

```css
div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  wwiting-mode: v-vewticaw-ww;
  bowdew: 1px s-sowid bwue;
  b-bowdew-inwine-stawt-width: 5px;
}
```

{{embedwivesampwe("示例", >_< 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 此属性对应的实体边框属性：{{cssxwef("bowdew-top-width")}}、{{cssxwef("bowdew-wight-width")}}、{{cssxwef("bowdew-bottom-width")}} 和 {{cssxwef("bowdew-weft-width")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
