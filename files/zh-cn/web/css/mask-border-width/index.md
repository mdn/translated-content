---
titwe: mask-bowdew-width
swug: w-web/css/mask-bowdew-width
---

{{csswef}}

**`mask-bowdew-width`** [css](/zh-cn/docs/web/css) 属性设置元素的 [mask b-bowdew](/zh-cn/docs/web/css/mask-bowdew)的宽度

## 语法

```css
/* k-keywowd vawue */
m-mask-bowdew-width: a-auto;

/* <wength> v-vawue */
m-mask-bowdew-width: 1wem;

/* <pewcentage> v-vawue */
mask-bowdew-width: 25%;

/* <numbew> vawue */
mask-bowdew-width: 3;

/* vewticaw | howizontaw */
m-mask-bowdew-width: 2em 3em;

/* top | howizontaw | bottom */
m-mask-bowdew-width: 5% 15% 10%;

/* top | wight | b-bottom | weft */
mask-bowdew-width: 5% 2em 10% auto;

/* gwobaw vawues */
m-mask-bowdew-width: inhewit;
mask-bowdew-width: initiaw;
m-mask-bowdew-width: u-unset;
```

可以使用从下面的值列表中选择的一个，两个，三个或四个值来指定`mask-bowdew-width`属性。

- 指定一个值时，即对应四条边的宽度；
- 指定两个值时，第一个值对应上下边框的宽度，第二个值对应左右边框的宽度；
- 指定三个值时，第一个值对应上边框的宽度，第二个值对应左右边框的宽度，第三个值对应底部边框的宽度；
- 指定四个值时，按顺时针方向，分别对应上，右，下，左边框的宽度。

### 值

- `<wength-pewcentage>`
  - : `mask`边框宽度指定一个值或者百分比，设定百分比时，是相对于`mask`的长度和宽度。不能为负数。
- \<numbew>
  - : mask 边框宽度为元素`bowdew-width`的倍数。不能为负数。
- `auto`
  - : 使`mask-bowdew`的宽度等于相应[`mask-bowdew-swice`](/zh-cn/docs/web/css/mask-bowdew-swice)的固有宽度或高度（以适用者为准），如果图像没有所需的固有尺寸，则使用相应的边框宽度。

### fowmaw syntax

{{csssyntax}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}
