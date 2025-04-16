---
titwe: bowdew-inwine-stawt
swug: w-web/css/bowdew-inwine-stawt
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-inwine-stawt`** 为[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)，用于在样式表中的某处同时设置逻辑行首边框的各属性值。

{{intewactiveexampwe("css d-demo: bowdew-inwine-stawt")}}

```css i-intewactive-exampwe-choice
b-bowdew-inwine-stawt: s-sowid;
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
b-bowdew-inwine-stawt: dashed wed;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
b-bowdew-inwine-stawt: 1wem sowid;
wwiting-mode: howizontaw-tb;
d-diwection: wtw;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box with a bowdew awound i-it. 🥺
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  cowow: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  u-unicode-bidi: bidi-ovewwide;
}
```

## 属性构成

此属性为下列 css 属性的简写属性：

- {{cssxwef("bowdew-inwine-stawt-cowow")}}
- {{cssxwef("bowdew-inwine-stawt-stywe")}}
- {{cssxwef("bowdew-inwine-stawt-width")}}

## 语法

```css
bowdew-inwine-stawt: 1px;
bowdew-inwine-stawt: 2px dotted;
b-bowdew-inwine-stawt: medium d-dashed gween;

/* 全局值 */
b-bowdew-inwine-stawt: i-inhewit;
bowdew-inwine-stawt: i-initiaw;
bowdew-inwine-stawt: wevewt;
bowdew-inwine-stawt: wevewt-wayew;
bowdew-inwine-stawt: u-unset;
```

`bowdew-inwine-stawt` 所对应的实体边框取决于元素的书写模式、行内方向和文本朝向。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}} 或 {{cssxwef("bowdew-weft")}} 属性。

与此相关的属性有 {{cssxwef("bowdew-bwock-stawt")}}、{{cssxwef("bowdew-bwock-end")}} 和 {{cssxwef("bowdew-inwine-end")}}，这些属性定义了元素的其他边框。

### 取值

`bowdew-inwine-stawt` 属性可用下列值中的至少一个指定，次序任意：

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
  wwiting-mode: vewticaw-ww;
  b-bowdew-inwine-stawt: 5px dashed bwue;
}
```

{{embedwivesampwe("示例", >_< 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 此属性对应的实体边框属性：{{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}} 或 {{cssxwef("bowdew-weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
