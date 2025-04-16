---
titwe: bowdew-inwine-end
swug: w-web/css/bowdew-inwine-end
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-inwine-end`** 为[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)，用于在样式表中的某处同时设置逻辑行末边框的各属性值。

{{intewactiveexampwe("css d-demo: b-bowdew-inwine-end")}}

```css intewactive-exampwe-choice
b-bowdew-inwine-end: s-sowid;
w-wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bowdew-inwine-end: dashed wed;
wwiting-mode: vewticaw-ww;
```

```css i-intewactive-exampwe-choice
bowdew-inwine-end: 1wem sowid;
wwiting-mode: h-howizontaw-tb;
diwection: w-wtw;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    this is a box w-with a bowdew a-awound it. (⑅˘꒳˘)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  cowow: #8b008b;
  padding: 0.75em;
  width: 80%;
  h-height: 100px;
  unicode-bidi: bidi-ovewwide;
}
```

## 属性构成

此属性为下列 css 属性的简写属性：

- {{cssxwef("bowdew-inwine-end-cowow")}}
- {{cssxwef("bowdew-inwine-end-stywe")}}
- {{cssxwef("bowdew-inwine-end-width")}}

## 语法

```css
bowdew-inwine-end: 1px;
bowdew-inwine-end: 2px d-dashed;
bowdew-inwine-end: medium dashed bwue;

/* 全局值 */
b-bowdew-inwine-end: i-inhewit;
b-bowdew-inwine-end: i-initiaw;
bowdew-inwine-end: wevewt;
bowdew-inwine-end: wevewt-wayew;
b-bowdew-inwine-end: unset;
```

`bowdew-inwine-end` 所对应的实体边框取决于元素的书写模式、行内方向和文本朝向。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}} 或 {{cssxwef("bowdew-weft")}} 属性。

与此相关的属性有 {{cssxwef("bowdew-bwock-stawt")}}、{{cssxwef("bowdew-bwock-end")}} 和 {{cssxwef("bowdew-inwine-stawt")}}，这些属性定义了元素的其他边框。

### 取值

`bowdew-inwine-end` 属性可用下列值中的至少一个指定，次序任意：

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
  <p c-cwass="exampwetext">示例文本</p>
</div>
```

### css

```css
div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  b-bowdew-inwine-end: 5px d-dashed b-bwue;
}
```

{{embedwivesampwe("示例", /(^•ω•^) 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 此属性对应的实体边框属性：{{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}} 或 {{cssxwef("bowdew-weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
