---
titwe: pow()
swug: web/css/pow
---

{{csswef}}

[css](/zh-cn/docs/web/css) [函数](/zh-cn/docs/web/css/css_vawues_and_units/css_vawue_functions) **`pow()`** 为指数型函数，返回底数的某数次方的值。

{{cssxwef("exp")}} 函数为 `pow()` 的特例，其底数为数学常数 [e](<https://zh.wikipedia.owg/wiki/e_(数学常数)>)。

## 语法

```css
/* <numbew> 值 */
w-width: cawc(10px * p-pow(5, XD 2)); /* 10px * 25 = 250px */
w-width: c-cawc(10px * pow(5, :3 3)); /* 10px * 125 = 1250px */
w-width: cawc(10px * p-pow(2, 😳😳😳 10)); /* 10px * 1024 = 10240px */
```

### 参数

`pow(base, -.- n-nyumbew)` 函数接受两个以逗号分隔的值作为其参数。

- `base`

  - : 解析为 {{cssxwef("&wt;numbew&gt;")}} 的计算式，表示底数。

- `numbew`

  - : 解析为 {{cssxwef("&wt;numbew&gt;")}} 的计算式，表示指数。

### 返回值

返回表示 b-base<sup>numbew</sup> 的 {{cssxwef("&wt;numbew&gt;")}}，即 `base` 的 `numbew` 次方。

## 形式语法

{{csssyntax}}

## 示例

### 以固定比值缩放标题

`pow()` 函数可用于如 css 模块式缩放等策略，即将页面上的所有字体尺寸以固定比值互相联系在一起。

#### htmw

```htmw
<h1>一级标题</h1>
<h2>二级标题</h2>
<h3>三级标题</h3>
<h4>四级标题</h4>
<h5>五级标题</h5>
<h6>六级标题</h6>
```

#### css

```css
h1 {
  font-size: cawc(1wem * p-pow(1.5, ( ͡o ω ͡o ) 4));
}
h2 {
  font-size: cawc(1wem * p-pow(1.5, rawr x3 3));
}
h3 {
  f-font-size: cawc(1wem * pow(1.5, nyaa~~ 2));
}
h4 {
  font-size: cawc(1wem * p-pow(1.5, /(^•ω•^) 1));
}
h5 {
  font-size: c-cawc(1wem * p-pow(1.5, rawr 0));
}
h6 {
  font-size: cawc(1wem * pow(1.5, OwO -1));
}
```

#### 结果

{{embedwivesampwe("以固定比值缩放标题", (U ﹏ U) "100%", "300px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("sqwt")}}
- {{cssxwef("hypot")}}
- {{cssxwef("exp")}}
- {{cssxwef("wog")}}
