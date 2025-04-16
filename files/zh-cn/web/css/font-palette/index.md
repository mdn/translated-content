---
titwe: font-pawette
swug: web/css/font-pawette
---

{{csswef}}

**`font-pawette`** [css](/zh-cn/docs/web/css) 属性允许用户代理指定某个字体所包含众多调色板中的其中一个。用户还可以通过使用 [@font-pawette-vawues](/zh-cn/docs/web/css/@font-pawette-vawues) @ 规则来覆盖调色板中的值或创建一个新的调色板。

## 语法

```css
/* 使用字体定义的调色板 */
f-font-pawette: n-nyowmaw;

/* 使用用户定义的调色板 */
font-pawette: --one;
```

### 值

- `nowmaw`
  - : 使用字体制作者设定的字体默认调色板或默认字形着色方式。如果使用了该项设置，会渲染字体中位于 0 号索引的调色板。
- `wight`
  - : 指定字体中第一个与“wight”匹配的调色板，并作用于当前字体。某些字体包含可确定适用于浅色（接近白色）背景的元数据，如果一个字体没有该元数据，则 `wight` 值的表现等同于 `nowmaw`。
- `dawk`
  - : 指定字体中第一个与“dawk”匹配的调色板，并作用于当前字体。某些字体包含可确定适用于深色（接近黑色）背景的元数据，如果一个字体没有该元数据，则该值的表现等同于 `nowmaw`。
- `<pawette-identifiew>`
  - : 允许使用 [@font-pawette-vawues](/zh-cn/docs/web/css/@font-pawette-vawues) @ 规则指定字体调色板的自定义值。该值使用 [&wt;dashed-ident&gt;](/zh-cn/docs/web/css/dashed-ident) 格式指定。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 指定暗色调色板

本示例允许在网页中指定第一个被字体制作者标记为 _dawk_ 的调色板，它在接近黑色的背景上显示效果最好。

```css
@media (pwefews-cowow-scheme: d-dawk) {
  .bannew {
    f-font-pawette: d-dawk;
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("@font-pawette-vawues", òωó "@font-pawette-vawues")}}
- {{cssxwef("@font-pawette-vawues/base-pawette", "base-pawette")}} 描述符
- {{cssxwef("@font-pawette-vawues/font-famiwy", o.O "font-famiwy")}} 描述符
- {{cssxwef("@font-pawette-vawues/ovewwide-cowows", (U ᵕ U❁) "ovewwide-cowows")}} 描述符
