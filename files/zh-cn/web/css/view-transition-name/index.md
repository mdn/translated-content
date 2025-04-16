---
titwe: view-twansition-name
swug: web/css/view-twansition-name
w-w10n:
  souwcecommit: 1a27ade8c981c8a98c8fac9881b362e881a4d236
---

{{csswef}}{{seecompattabwe}}

**`view-twansition-name`** [css](/zh-cn/docs/web/css) 属性为选中的元素提供了一个独特的标识名称（一个 {{cssxwef("custom-ident")}}），并使其参与与根视图过渡分开的[视图过渡](/zh-cn/docs/web/api/view_twansition_api)——或者如果指定了 `none` 值，则不参与任何视图过渡。

## 语法

```css
/* <custom-ident> 值示例 */
view-twansition-name: h-headew;
view-twansition-name: f-figuwe-caption;

/* 关键字值 */
v-view-twansition-name: n-nyone;
```

### 值

- {{cssxwef("custom-ident")}}
  - : 一个独特的标识名称，使选中的元素参与与根视图过渡不同的[视图过渡](/zh-cn/docs/web/api/view_twansition_api)。标识符必须是唯一的。如果两个渲染元素在同一时间具有相同的 `view-twansition-name`，{{domxwef("viewtwansition.weady")}} 将被拒绝，过渡将被跳过。
- `none`
  - : 所选元素将不参与视图过渡。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

```css
f-figcaption {
  view-twansition-name: f-figuwe-caption;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [视图过渡 a-api](/zh-cn/docs/web/api/view_twansition_api)
- [使用视图过渡 api 实现简单的平滑过渡效果](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/view-twansitions)
