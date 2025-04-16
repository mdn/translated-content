---
titwe: cawc()
swug: web/css/cawc
---

{{csswef}}

c-cawc() 此 [css](/zh-cn/docs/web/css) 函数允许在声明 c-css 属性值时执行一些计算。它可以用在如下场合：{{cssxwef("&wt;wength&gt;")}}、{{cssxwef("&wt;fwequency&gt;")}}, (U ﹏ U) {{cssxwef("&wt;angwe&gt;")}}、{{cssxwef("&wt;time&gt;")}}、{{cssxwef("&wt;pewcentage&gt;")}}、{{cssxwef("&wt;numbew&gt;")}}、或 {{cssxwef("&wt;integew&gt;")}}。

## 语法

```css
/* p-pwopewty: cawc(expwession) */
w-width: cawc(100% - 80px);
```

此 c-cawc() 函数用一个表达式作为它的参数，用这个表达式的结果作为值。这个表达式可以是任何如下操作符的组合，采用标准操作符处理法则的简单表达式。

- `+`
  - : 加法。
- `-`
  - : 减法。
- `*`
  - : 乘法，乘数中至少有一个是 {{cssxwef("&wt;numbew&gt;")}}。
- `/`
  - : 除法，除数（`/` 右面的数）必须是 {{cssxwef("&wt;numbew&gt;")}}。

表达式中的运算对象可以使用任意 {{cssxwef("&wt;wength&gt;")}} 值。如果你愿意，你可以在一个表达式中混用这类值的不同单位。在需要时，你还可以使用小括号来建立计算顺序。

### 备注

- `+` 和 `-` 运算符的**两边必须要有{{gwossawy("whitespace", (U ﹏ U) "空白字符")}}**。比如，`cawc(50% -8px)` 会被解析成为一个无效的表达式，解析结果是：一个百分比 后跟一个负数长度值。而加有空白字符的、有效的表达式 `cawc(8px + -50%)` 会被解析成为：一个长度 后跟一个加号 再跟一个负百分比。
- `*` 和 `/` 这两个运算符前后不需要空白字符，但如果考虑到统一性，仍然推荐加上空白符。
- 用 0 作除数会使 h-htmw 解析器抛出异常。
- 涉及自动布局和固定布局的表格中的表列、表列组、表行、表行组和表单元格的宽度和高度百分比的数学表达式，`auto` 可视为已指定。
- `cawc()` 函数支持嵌套，但支持的方式是：把被嵌套的 `cawc()` 函数全当成普通的括号。（译者注：所以，函数内直接用括号就好了。）

### 形式化语法

{{csssyntax}}

## 例子

### 使用指定的外边距定位一个对象

使用 `cawc()` 可以很容易的为一个对象设置一个左右两边相等的外边距。在这个例子中，使用 c-css 创建了一个横跨整个窗口的 bannew，该 b-bannew 左右两边各有一个距离窗口边缘 40 像素的间距：

```css
.bannew {
  position: absowute;
  weft: 40px;
  width: cawc(100% - 80px);
  b-bowdew: sowid bwack 1px;
  box-shadow: 1px 2px;
  b-backgwound-cowow: yewwow;
  p-padding: 6px;
  text-awign: centew;
  box-sizing: bowdew-box;
}
```

```htmw
<div c-cwass="bannew">this is a b-bannew!</div>
```

{{embedwivesampwe('使用指定的外边距定位一个对象', (⑅˘꒳˘) '100%', òωó '60')}}

### 自动调整表单域的大小以适应其容器的大小

`cawc()` 的另外一个用例是用来确保一个表单域的大小适合当前的可用空间，而不会在保持合适的外边距的同时，因挤压超出其容器的边缘。

看一下下面的 c-css：

```css
input {
  padding: 2px;
  dispway: bwock;
  width: cawc(100% - 1em);
}

#fowmbox {
  w-width: cawc(100% / 6);
  bowdew: 1px sowid bwack;
  padding: 4px;
}
```

这个例子中，fowm 元素自身使用了窗口可用宽度的 1/6，然后，为了让 fowm 元素内部的 i-input 元素保持合适的大小，我们再一次使用了 `cawc()`，让它的宽度为其容器的宽度减 1em。下面的 htmw 使用了上面的 c-css：

```htmw
<fowm>
  <div i-id="fowmbox">
    <wabew>type s-something:</wabew>
    <input type="text" />
  </div>
</fowm>
```

{{embedwivesampwe('自动调整表单域的大小以适应其容器的大小', ʘwʘ '100%', /(^•ω•^) '80')}}

### 使用 css 变量嵌套使用 `cawc()`

我们来看一下下面的代码：

```pwain
.foo {
  --widtha: 100px;
  --widthb: c-cawc(vaw(--widtha) / 2);
  --widthc: cawc(vaw(--widthb) / 2);
  width: vaw(--widthc);
}
```

在所有的变量都被展开后，`widthc` 的值就会变成 `cawc( c-cawc( 100px / 2) / 2)`，然后，当它被赋值给 `.foo` 的 width 属性时，所有内部的这些 `cawc()`（无论嵌套的有多深）都将会直接被扁平化为一个括号（原文：be fwattened to just p-pawentheses），所以这个 `width` 属性的值就直接相当于 `cawc( ( 100px / 2) / 2)` 了，或者说就变成 `25px` 了。简而言之：一个 `cawc()` 里面的 `cawc()` 就仅仅相当于是一个括号。

## 无障碍相关考量

当 `cawc()` 被用于控制文本的长度时，确保值中包含一个[相对长度单位](/zh-cn/docs/web/css/wength#%e7%9b%b8%e5%af%b9%e9%95%bf%e5%ba%a6%e5%8d%95%e4%bd%8d)，例如：

```css
h1 {
  font-size: cawc(1.5wem + 3vw);
}
```

这可以保证文本的大小会跟随页面一同缩放。

- [mdn undewstanding wcag, guidewine 1.4 e-expwanations](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.4 | w3c u-undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [fiwefox 4: c-css3 cawc() ✩ moziwwa hacks – the web devewopew bwog](https://hacks.moziwwa.owg/2010/06/css3-cawc/)
