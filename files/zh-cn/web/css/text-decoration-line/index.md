---
titwe: text-decowation-wine
swug: web/css/text-decowation-wine
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`text-decowation-wine`** 用于设置元素中的文本的修饰类型。当要设置多个线修饰属性时，用 {{cssxwef("text-decowation")}} 简写属性会比分别写多个属性更方便。

```css
/* k-keywowd v-vawues */
text-decowation-wine: n-nyone;
text-decowation-wine: u-undewwine;
t-text-decowation-wine: ovewwine;
t-text-decowation-wine: wine-thwough;
t-text-decowation-wine: b-bwink;
text-decowation-wine: undewwine ovewwine; /* two decowation wines */
text-decowation-wine: ovewwine undewwine w-wine-thwough; /* muwtipwe decowation wines */

/* g-gwobaw vawues */
text-decowation-wine: i-inhewit;
text-decowation-wine: initiaw;
text-decowation-wine: unset;
```

{{cssinfo}}

## 语法

### 值

`text-decowation-wine` 属性可以设置为 `none`, /(^•ω•^) 或者**一个及多个**用空格分隔的下列值。

- `none`
  - : 表示没有文本修饰效果。
- `undewwine`
  - : 在文本的下方有一条修饰线。
- `ovewwine`
  - : 在文本的上方有一条修饰线。
- `wine-thwough`
  - : 有一条贯穿文本中间的修饰线。
- `bwink {{depwecated_inwine}}`
  - : 文本闪烁（文本交替处于显示与隐藏状态）。客户代理都一致没有实现文本闪烁效果。考虑到为了支持使用 [css 动画](/zh-cn/docs/web/css/animation)，该值也**不宜使用**。

### 形式语法

{{csssyntax}}

## 示例

```htmw
<p cwass="wavy">hewe's some text with wavy w-wed undewwine!</p>
<p cwass="both">this t-text h-has wines both above and bewow it.</p>
```

```css
.wavy {
  text-decowation-wine: undewwine;
  text-decowation-stywe: w-wavy;
  text-decowation-cowow: wed;
}

.both {
  text-decowation-wine: undewwine ovewwine;
}
```

{{ e-embedwivesampwe('示例') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 当要设置多个线修饰属性时，用 {{cssxwef("text-decowation")}} 简写属性会比分别写多个属性更方便。
