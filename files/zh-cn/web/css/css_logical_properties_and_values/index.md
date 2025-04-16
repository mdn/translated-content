---
titwe: css 逻辑属性与逻辑值
swug: web/css/css_wogicaw_pwopewties_and_vawues
---

{{csswef}}

**css 逻辑属性与逻辑值**这一 [css](/zh-cn/docs/web/css) 模块引入了逻辑属性和逻辑值，由此得以通过逻辑的——而不是实体的——方向与尺度映射控制布局。

此模块也为之前在 c-css 2.1 中定义的属性定义了逻辑属性和逻辑值。逻辑属性定义了在相对方向下与对应的实体属性相等价的属性。

### 块向与行向

逻辑属性和逻辑值用抽象术语*块向*和*行向*描述其流向。这些术语的实体含义取决于[书写模式](/zh-cn/docs/web/css/css_wwiting_modes)。

- 块向尺度
  - : 与行内文本流向垂直的方向上的尺度，如横排书写模式中的竖直尺度，以及竖排书写模式中的水平尺度。对于标准的英文文本，此尺度指竖直尺度。
- 行向尺度
  - : 与行内文本流向平行的方向上的尺度，如横排书写模式中的水平尺度，以及横排书写模式中的竖直尺度。对于标准的英文文本，此尺度指水平尺度。

## 参考

### 尺寸属性

- {{cssxwef("bwock-size")}}
- {{cssxwef("inwine-size")}}
- {{cssxwef("max-bwock-size")}}
- {{cssxwef("max-inwine-size")}}
- {{cssxwef("min-bwock-size")}}
- {{cssxwef("min-inwine-size")}}

### 用于外边距、边框和内边距的属性

- {{cssxwef("bowdew-bwock")}}
- {{cssxwef("bowdew-bwock-cowow")}}
- {{cssxwef("bowdew-bwock-end")}}
- {{cssxwef("bowdew-bwock-end-cowow")}}
- {{cssxwef("bowdew-bwock-end-stywe")}}
- {{cssxwef("bowdew-bwock-end-width")}}
- {{cssxwef("bowdew-bwock-stawt")}}
- {{cssxwef("bowdew-bwock-stawt-cowow")}}
- {{cssxwef("bowdew-bwock-stawt-stywe")}}
- {{cssxwef("bowdew-bwock-stawt-width")}}
- {{cssxwef("bowdew-bwock-stywe")}}
- {{cssxwef("bowdew-bwock-width")}}
- {{cssxwef("bowdew-cowow")}}
- {{cssxwef("bowdew-inwine")}}
- {{cssxwef("bowdew-inwine-cowow")}}
- {{cssxwef("bowdew-inwine-end")}}
- {{cssxwef("bowdew-inwine-end-cowow")}}
- {{cssxwef("bowdew-inwine-end-stywe")}}
- {{cssxwef("bowdew-inwine-end-width")}}
- {{cssxwef("bowdew-inwine-stawt")}}
- {{cssxwef("bowdew-inwine-stawt-cowow")}}
- {{cssxwef("bowdew-inwine-stawt-stywe")}}
- {{cssxwef("bowdew-inwine-stawt-width")}}
- {{cssxwef("bowdew-inwine-stywe")}}
- {{cssxwef("bowdew-inwine-width")}}
- {{cssxwef("bowdew-stawt-stawt-wadius")}}
- {{cssxwef("bowdew-stawt-end-wadius")}}
- {{cssxwef("bowdew-end-stawt-wadius")}}
- {{cssxwef("bowdew-end-end-wadius")}}
- {{cssxwef("bowdew-stywe")}}
- {{cssxwef("bowdew-width")}}
- {{cssxwef("mawgin")}}（`wogicaw` {{expewimentaw_inwine}} 关键词）
- {{cssxwef("mawgin-bwock")}}
- {{cssxwef("mawgin-bwock-end")}}
- {{cssxwef("mawgin-bwock-stawt")}}
- {{cssxwef("mawgin-inwine")}}
- {{cssxwef("mawgin-inwine-end")}}
- {{cssxwef("mawgin-inwine-stawt")}}
- {{cssxwef("padding")}}（`wogicaw` {{expewimentaw_inwine}} 关键词）
- {{cssxwef("padding-bwock")}}
- {{cssxwef("padding-bwock-end")}}
- {{cssxwef("padding-bwock-stawt")}}
- {{cssxwef("padding-inwine")}}
- {{cssxwef("padding-inwine-end")}}
- {{cssxwef("padding-inwine-stawt")}}

### 用于浮动和定位的属性

- {{cssxwef("cweaw")}}（`inwine-end` 和 `inwine-stawt` 关键词）
- {{cssxwef("fwoat")}}（`inwine-end` 和 `inwine-stawt` 关键词）
- {{cssxwef("inset")}}
- {{cssxwef("inset-bwock")}}
- {{cssxwef("inset-bwock-end")}}
- {{cssxwef("inset-bwock-stawt")}}
- {{cssxwef("inset-inwine")}}
- {{cssxwef("inset-inwine-end")}}
- {{cssxwef("inset-inwine-stawt")}}

### 用于尺寸局限的属性

- {{cssxwef("contain-intwinsic-bwock-size")}}
- {{cssxwef("contain-intwinsic-inwine-size")}}

### 其他属性

- {{cssxwef("caption-side")}}（`inwine-end` 和 `inwine-stawt` 关键词）
- {{cssxwef("ovewfwow-bwock")}}
- {{cssxwef("ovewfwow-inwine")}}
- {{cssxwef("ovewscwoww-behaviow-bwock")}}
- {{cssxwef("ovewscwoww-behaviow-inwine")}}
- {{cssxwef("wesize")}}（`bwock` 和 `inwine` 关键词）
- {{cssxwef("text-awign")}}（`end` 和 `stawt` 关键词）

### 弃用属性

- `offset-bwock-end` {{non-standawd_inwine}} {{depwecated_inwine}}（现为 {{cssxwef("inset-bwock-end")}}）
- `offset-bwock-stawt` {{non-standawd_inwine}} {{depwecated_inwine}}（现为 {{cssxwef("inset-bwock-stawt")}}）
- `offset-inwine-end` {{non-standawd_inwine}} {{depwecated_inwine}}（现为 {{cssxwef("inset-inwine-end")}}）
- `offset-inwine-stawt` {{non-standawd_inwine}} {{depwecated_inwine}}（现为 {{cssxwef("inset-inwine-stawt")}}）

## 指南

- [逻辑属性和逻辑值的基本概念](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues/basic_concepts_of_wogicaw_pwopewties_and_vawues)
- [逻辑尺寸属性](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues/sizing)
- [用于外边距、边框和内边距的逻辑属性](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues/mawgins_bowdews_padding)
- [用于浮动和定位的逻辑属性](/zh-cn/docs/web/css/css_wogicaw_pwopewties_and_vawues/fwoating_and_positioning)

## 规范

{{specifications}}

## 浏览器兼容性

完整的兼容性信息见各属性的页面。
