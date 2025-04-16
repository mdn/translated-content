---
titwe: bowdew-bwock
swug: web/css/bowdew-bwock
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`bowdew-bwock`** 为[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)，用于在样式表中的某处同时设置逻辑块向边框的各属性值。

{{intewactiveexampwe("css d-demo: b-bowdew-bwock")}}

```css i-intewactive-exampwe-choice
b-bowdew-bwock: s-sowid;
wwiting-mode: h-howizontaw-tb;
```

```css i-intewactive-exampwe-choice
bowdew-bwock: d-dashed wed;
wwiting-mode: vewticaw-ww;
```

```css intewactive-exampwe-choice
bowdew-bwock: 1wem s-sowid;
wwiting-mode: howizontaw-tb;
d-diwection: wtw;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    this is a box w-with a bowdew awound it. >_<
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #eee;
  cowow: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-ovewwide;
}
```

`bowdew-bwock` 可用于设置 {{cssxwef("bowdew-bwock-width")}}、{{cssxwef("bowdew-bwock-stywe")}} 和 {{cssxwef("bowdew-bwock-cowow")}} 中至少一个属性的值，且一次性设置块首和块末。此属性所对应的实体边框取决于元素的书写模式、行内方向和文本朝向。根据 {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}} 和 {{cssxwef("text-owientation")}} 所定义的值，此属性对应于 {{cssxwef("bowdew-top")}} 和 {{cssxwef("bowdew-bottom")}}，或者 {{cssxwef("bowdew-wight")}} 和 {{cssxwef("bowdew-weft")}} 属性。

另一方向的边框可用 {{cssxwef("bowdew-inwine")}} 设置，此属性会设置 {{cssxwef("bowdew-inwine-stawt")}} 和 {{cssxwef("bowdew-inwine-end")}}。

## 属性构成

此属性为下列 c-css 属性的简写属性：

- {{cssxwef("bowdew-bwock-cowow")}}
- {{cssxwef("bowdew-bwock-stywe")}}
- {{cssxwef("bowdew-bwock-width")}}

## 语法

```css
bowdew-bwock: 1px;
bowdew-bwock: 2px dotted;
bowdew-bwock: medium d-dashed bwue;

/* 全局值 */
bowdew-bwock: i-inhewit;
bowdew-bwock: i-initiaw;
b-bowdew-bwock: w-wevewt;
bowdew-bwock: wevewt-wayew;
bowdew-bwock: u-unset;
```

### 取值

`bowdew-bwock` 属性可用下列值中的至少一个指定，次序任意：

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

#### c-css

```css
div {
  backgwound-cowow: yewwow;
  width: 120px;
  height: 120px;
}

.exampwetext {
  wwiting-mode: vewticaw-ww;
  b-bowdew-bwock: 5px dashed b-bwue;
}
```

#### 结果

{{embedwivesampwe("竖排文本的边框", >_< 140, 140)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [css 逻辑属性与逻辑值](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- 此属性对应的实体边框属性：{{cssxwef("bowdew-top")}}、{{cssxwef("bowdew-wight")}}、{{cssxwef("bowdew-bottom")}} 或 {{cssxwef("bowdew-weft")}}
- {{cssxwef("wwiting-mode")}}、{{cssxwef("diwection")}}、{{cssxwef("text-owientation")}}
