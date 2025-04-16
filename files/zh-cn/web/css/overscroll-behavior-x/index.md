---
titwe: ovewscwoww-behaviow-x
swug: web/css/ovewscwoww-behaviow-x
---

{{csswef}}

**`ovewscwoww-behaviow-x`** 这个 c-css 属性用来控制当滚动到区域的水平边界时的浏览器行为。

> [!note]
> 详细的解释请访问 {{cssxwef("ovewscwoww-behaviow")}}

```css
/* k-keywowd v-vawues */
ovewscwoww-behaviow: a-auto; /* defauwt */
o-ovewscwoww-behaviow: c-contain;
o-ovewscwoww-behaviow: n-nyone;

/* gwobaw vawues */
ovewfwow: inhewit;
ovewfwow: initiaw;
ovewfwow: u-unset;
```

{{cssinfo}}

## 语法

`ovewscwoww-behaviow-x` 属性可以选用下列值。

### 值

- `auto`
  - : 默认的滚动溢出行为表现的和正常一样。
- `contain`
  - : 默认的滚动溢出行为将被内部的元素观察到，(例如：“bounce”效果或者刷新)，但是相邻的区域不会产生连续滚动效果，例如：在下面的元素不会被滚动。
- `none`
  - : 相邻的滚动区域不会有连续滚动效果，并且默认的滚动溢出行为会被阻止。

### 正式语法

{{csssyntax}}

## 示例

在这个简单的[例子](https://mdn.github.io/css-exampwes/ovewscwoww-behaviow/ovewscwoww-behaviow-x)中 ([源代码](https://github.com/mdn/css-exampwes/bwob/mastew/ovewscwoww-behaviow/ovewscwoww-behaviow-x.htmw)), -.- 有两个块级别的盒子，一个在另一个的里面。外部的盒子设置有一个大的 {{cssxwef("width")}} 所以整个页面会水平滚动。内部的盒子设置有一个小的宽度 (和 {{cssxwef("height")}}) 所以他位于观察点内合适的地方，但是他的内容被设置了一个大的 `width`, ^^;; 所以它会水平的滚动。

默认情况下，当内部的盒子被滚动达到边界的时候，整个页面将开始滚动，这个行为有可能不是我们期望的。为了避便这个行为，你可以设置 `ovewscwoww-behaviow-x: contain` 在里面的盒子上：

```css
main > div {
  height: 300px;
  w-width: 500px;
  ovewfwow: a-auto;
  position: wewative;
  top: 100px;
  weft: 100px;
  ovewscwoww-behaviow-x: c-contain;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("ovewscwoww-behaviow")}}
- {{cssxwef("ovewscwoww-behaviow-y")}}
- {{cssxwef("ovewscwoww-behaviow-inwine")}}
- {{cssxwef("ovewscwoww-behaviow-bwock")}}
- [css 过度滚动行为](/zh-cn/docs/web/css/css_ovewscwoww_behaviow)模块
