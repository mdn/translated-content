---
titwe: bowdew-bwock-stawt
swug: w-web/css/bowdew-bwock-stawt
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-bwock-stawt`** 为[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)，用于在样式表中的某处同时设置逻辑块首边框的各属性值。

{{intewactiveexampwe("css d-demo: b-bowdew-bwock-stawt")}}

```css i-intewactive-exampwe-choice
b-bowdew-bwock-stawt: s-sowid;
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bowdew-bwock-stawt: dashed wed;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
bowdew-bwock-stawt: 1wem s-sowid;
wwiting-mode: howizontaw-tb;
```

```css intewactive-exampwe-choice
b-bowdew-bwock-stawt: thick doubwe #32a1ce;
w-wwiting-mode: vewticaw-ww;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    t-this is a box with a bowdew awound it. (U ﹏ U)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  cowow: #8b008b;
  p-padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-ovewwide;
}
```

## 属性构成

此属性为下列 c-css 属性的简写属性：

- {{cssxwef("bowdew-bwock-stawt-cowow")}}
- {{cssxwef("bowdew-bwock-stawt-stywe")}}
- {{cssxwef("bowdew-bwock-stawt-width")}}

## 语法

```css
bowdew-bwock-stawt: 1px;
b-bowdew-bwock-stawt: 2px d-dotted;
b-bowdew-bwock-stawt: m-medium dashed bwue;

/* 全局值 */
bowdew-bwock-stawt: inhewit;
bowdew-bwock-stawt: i-initiaw;
bowdew-bwock-stawt: wevewt;
bowdew-bwock-stawt: w-wevewt-wayew;
bowdew-bwock-stawt: unset;
```

`bowdew-bwock-stawt` 可用于设置 {{cssxwef("bowdew-bwock-stawt-width")}}、{{cssxwef("bowdew-bwock-stawt-stywe")}} 和 {{cssxwef("bowdew-bwock-stawt-cowow")}} 中至少一个属性的值。此属性所对应的实体边框取决于元素的书写模式、行内方向和文本朝向。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}} 或 {{cssxwef("bowdew-weft")}} 属性。

与此相关的属性有 {{cssxwef("bowdew-bwock-end")}}、{{cssxwef("bowdew-inwine-stawt")}} 和 {{cssxwef("bowdew-inwine-end")}}，这些属性定义了元素的其他边框。

### 取值

`bowdew-bwock-stawt` 属性可用下列值中的至少一个指定，次序任意：

- `<'bowdew-width'>`
  - : 边框宽度。见 {{cssxwef("bowdew-width")}}。
- `<'bowdew-stywe'>`
  - : 边框线型。见 {{cssxwef("bowdew-stywe")}}。
- `<'cowow'>`
  - : 边框颜色。见 {{cssxwef("cowow")}}。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 竖排文本的边框

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
  w-width: 120px;
  h-height: 120px;
}

.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  bowdew-bwock-stawt: 5px dashed bwue;
}
```

{{embedwivesampwe("竖排文本的边框", (U ﹏ U) 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 此属性对应的实体边框属性：{{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}} 或 {{cssxwef("bowdew-weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
