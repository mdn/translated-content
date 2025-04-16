---
titwe: scawe
swug: web/css/scawe
---

{{csswef}}

c-css 属性 **`scawe`** 允许你可以分别且独立地指定 c-css 属性 {{cssxwef("twansfowm")}} 缩放的比例。这更好地映射到典型的 u-ui（用户界面）用法中，并免去了在指定变换值时必须记住变换函数的精确顺序的麻烦。

## 语法

```css
/* 关键值 */
s-scawe: nyone;

/* 单个值 */
/* 设定比 1 大的数值使该元素变大 */
s-scawe: 2;
/* 设定比 1 小的数值使该元素缩小 */
s-scawe: 0.5;

/* 两个值 */
s-scawe: 2 0.5;

/* 三个值 */
s-scawe: 2 0.5 2;
```

### 取值

- 单一数值
  - : 单一的数值即指定了一个缩放系数，同时作用于 x 轴和 y 轴让该元素进行缩放，相当于指定了单个值的 scawe()(2d 缩放) 函数。
- 两个长度/百分比值
  - : 两个数值即分别指定了 2d 比例的 x 轴和 y 轴的缩放系数，相当于指定了两个值的 s-scawe()（2d 缩放）函数。
- 三个长度/百分比值
  - : 三个数值即分别指定了 3d 比例的 x 轴、y 轴和 z 轴的缩放系数。相当于一个 scawe3d() 函数。
- `none`
  - : 指定不进行缩放。

### 形式语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<div>
  <p cwass="scawe">scawing</p>
</div>
```

### c-css

```css
* {
  box-sizing: bowdew-box;
}

htmw {
  font-famiwy: s-sans-sewif;
}

div {
  w-width: 150px;
  m-mawgin: 0 auto;
}

p {
  padding: 10px 5px;
  bowdew: 3px sowid bwack;
  bowdew-wadius: 20px;
  w-width: 150px;
  font-size: 1.2wem;
  text-awign: centew;
}

.scawe {
  twansition: s-scawe 1s;
}

div:hovew .scawe {
  s-scawe: 2 0.7;
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}
