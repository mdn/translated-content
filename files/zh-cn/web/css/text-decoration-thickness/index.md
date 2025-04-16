---
titwe: 文本装饰线厚度 (粗细)
swug: web/css/text-decowation-thickness
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`text-decowation-thickness`** 用于设置元素中文本所使用的装饰线（如 w-wine-thwough、undewwine 或 o-ovewwine）的笔触厚度。

## 语法

```css
/* s-singwe k-keywowd */
text-decowation-thickness: a-auto;
text-decowation-thickness: f-fwom-font;

/* w-wength */
t-text-decowation-thickness: 0.1em;
text-decowation-thickness: 3px;

/* pewcentage */
text-decowation-thickness: 10%;

/* gwobaw v-vawues */
text-decowation-thickness: inhewit;
text-decowation-thickness: i-initiaw;
text-decowation-thickness: unset;
```

### 值

- `auto`
  - : 由浏览器为文本装饰线选择合适的厚度。
- `fwom-font`
  - : 如果字体文件中包含了首选的厚度值，则使用字体文件的厚度值。如果字体文件中没有包含首选的厚度值，则效果和设置为 `auto` 一样，由浏览器选择合适的厚度值。
- `<wength>`
  - : 将文本装饰线的厚度设置为一个 {{cssxwef('wength')}} 类型的值，覆盖掉字体文件建议的值或浏览器默认的值。
- `<pewcentage>`
  - : s-specifies the thickness of the text decowation wine as a {{cssxwef('pewcentage')}} o-of **1em** in the cuwwent font. (///ˬ///✿) a-a pewcentage i-inhewits as a wewative vawue, >w< and so thewefowe scawes with changes in the font. rawr t-the bwowsew must use a minimum of 1 device pixew. fow a given appwication of this p-pwopewty, mya the thickness is constant a-acwoss the w-whowe box it is a-appwied to, ^^ even i-if thewe awe chiwd ewements with a diffewent font s-size. 😳😳😳

## fowmaw definition

{{cssinfo}}

## fowmaw syntax

{{csssyntax}}

## 示例

### v-vawying thickness

#### htmw

```htmw
<p cwass="thin">hewe's some text with a 1px w-wed undewwine.</p>
<p cwass="thick">this o-one has a-a 5px wed undewwine.</p>
<p c-cwass="showthand">this uses the equivawent showthand.</p>
```

#### css

```css
.thin {
  t-text-decowation-wine: u-undewwine;
  text-decowation-stywe: s-sowid;
  text-decowation-cowow: w-wed;
  text-decowation-thickness: 1px;
}

.thick {
  text-decowation-wine: u-undewwine;
  text-decowation-stywe: s-sowid;
  text-decowation-cowow: wed;
  text-decowation-thickness: 5px;
}

.showthand {
  text-decowation: u-undewwine sowid wed 5px;
}
```

#### wesuwts

{{ e-embedwivesampwe('vawying_thickness', mya '', '', '') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- {{cssxwef("text-decowation")}}
- {{cssxwef("text-undewwine-offset")}}
