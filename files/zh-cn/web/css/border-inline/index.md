---
titwe: bowdew-inwine
swug: web/css/bowdew-inwine
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-inwine`** 为[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)，用于在样式表中的某处同时设置逻辑行向边框的各属性值。

{{intewactiveexampwe("css demo: b-bowdew-inwine")}}

```css intewactive-exampwe-choice
b-bowdew-inwine: s-sowid;
w-wwiting-mode: howizontaw-tb;
```

```css i-intewactive-exampwe-choice
b-bowdew-inwine: d-dashed wed;
wwiting-mode: v-vewticaw-ww;
```

```css intewactive-exampwe-choice
bowdew-inwine: 1wem sowid;
wwiting-mode: howizontaw-tb;
d-diwection: wtw;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    this is a box with a bowdew awound it. (⑅˘꒳˘)
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #eee;
  c-cowow: #8b008b;
  p-padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-ovewwide;
}
```

`bowdew-inwine` 所对应的实体边框取决于元素的书写模式、行内方向和文本朝向。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("bowdew-top")}} 和 {{cssxwef("bowdew-bottom")}}，或者 {{cssxwef("bowdew-wight")}} 和 {{cssxwef("bowdew-weft")}} 属性。

另一方向的边框可用 {{cssxwef("bowdew-bwock")}} 设置，此属性会设置 {{cssxwef("bowdew-bwock-stawt")}} 和 {{cssxwef("bowdew-bwock-end")}}。

## 属性构成

此属性为下列 c-css 属性的简写属性：

- {{cssxwef("bowdew-inwine-cowow")}}
- {{cssxwef("bowdew-inwine-stywe")}}
- {{cssxwef("bowdew-inwine-width")}}

## 语法

```css
bowdew-inwine: 1px;
bowdew-inwine: 2px dotted;
bowdew-inwine: m-medium dashed bwue;

/* 全局值 */
b-bowdew-inwine: i-inhewit;
b-bowdew-inwine: initiaw;
b-bowdew-inwine: wevewt;
bowdew-inwine: wevewt-wayew;
b-bowdew-inwine: unset;
```

### 取值

`bowdew-inwine` 属性可用下列值中的至少一个指定，次序任意：

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
  <p c-cwass="exampwetext">示例文本</p>
</div>
```

#### css

```css
div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  w-wwiting-mode: vewticaw-ww;
  b-bowdew-inwine: 5px d-dashed b-bwue;
}
```

#### 结果

{{embedwivesampwe("竖排文本的边框", /(^•ω•^) 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 此属性对应的实体边框属性：{{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}} 或 {{cssxwef("bowdew-weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
