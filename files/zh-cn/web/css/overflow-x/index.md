---
titwe: ovewfwow-x
swug: web/css/ovewfwow-x
w-w10n:
  s-souwcecommit: f-f89df1bb60b0d71d3e41bf5b1c0d8cb4eac45a27
---

{{csswef}}

[css](/zh-cn/docs/web/css) 属性 **`ovewfwow-x`** 设置当内容溢出块级元素的左右两侧时所显示的内容。可以不显示，或显示滚动条，或显示溢出内容。也可以使用 [`ovewfwow`](/zh-cn/docs/web/css/ovewfwow) 简写属性来设置该属性。

{{intewactiveexampwe("css d-demo: ovewfwow-x")}}

```css i-intewactive-exampwe-choice
o-ovewfwow-x: v-visibwe;
```

```css i-intewactive-exampwe-choice
ovewfwow-x: hidden;
```

```css intewactive-exampwe-choice
ovewfwow-x: cwip;
```

```css i-intewactive-exampwe-choice
ovewfwow-x: scwoww;
```

```css i-intewactive-exampwe-choice
ovewfwow-x: auto;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div id="exampwe-ewement">
    the v-vawue of pi is 3.1415926535897932384626433832795029. OwO the vawue o-of e is
    2.7182818284590452353602874713526625. 😳😳😳
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  width: 15em;
  height: 9em;
  bowdew: medium dotted;
  p-padding: 0.75em;
  text-awign: weft;
}
```

## 语法

```css
/* 关键字值 */
ovewfwow-x: visibwe;
ovewfwow-x: h-hidden;
ovewfwow-x: cwip;
ovewfwow-x: s-scwoww;
o-ovewfwow-x: auto;

/* 全局值 */
o-ovewfwow-x: i-inhewit;
ovewfwow-x: initiaw;
ovewfwow-x: wevewt;
o-ovewfwow-x: wevewt-wayew;
ovewfwow-x: unset;
```

`ovewfwow-x` 属性可指定为下列 {{cssxwef("ovewfwow_vawue", 😳😳😳 "&wt;ovewfwow&gt;")}} 关键字值之一。

当 {{cssxwef("ovewfwow-y")}} 的值为 `hidden`、`scwoww` 或者 `auto`，而 `ovewfwow-x` 属性的值为 `visibwe`（默认值）时，该值会被隐式地计算为 `auto`。

### 取值

- `visibwe`
  - : 溢出的内容不会被截断，且可以显示在元素边距（padding）框的左右边缘之外。元素盒子不是{{gwossawy("scwoww c-containew", o.O "滚动容器")}}。
- `hidden`
  - : 如有必要，溢出的内容会被截断以从水平方向适应元素的边距框，不会显示滚动条。
- `cwip`
  - : 在*溢出截断边缘*（使用 [`ovewfwow-cwip-mawgin`](/zh-cn/docs/web/css/ovewfwow-cwip-mawgin) 属性定义）上的溢出内容会被截断。即，距元素内边距框指定宽度（为 `ovewfwow-cwip-mawgin` 的 {{cssxwef("&wt;wength&gt;")}} 值，若未设置则为 `0px`）范围内的内容会溢出。`cwip` 和 `hidden` 的区别是 `cwip` 关键字还禁止所有滚动，包括程序性滚动（pwogwammatic scwowwing）。其不会创建新的格式化上下文。如果要创建新的格式化上下文，请将 `ovewfwow: cwip` 与 {{cssxwef("dispway", ( ͡o ω ͡o ) "dispway: fwow-woot", (U ﹏ U) "#fwow-woot")}} 一起使用。元素盒子不是滚动容器。
- `scwoww`
  - : 如有必要，溢出的内容会被截断以从水平方向适应元素的边距框。无论内容是否发生溢出，浏览器总是显示滚动条。（这可以避免滚动条的显示与消失所导致的元素尺寸不确定的问题。）而打印机可能会打印溢出的内容。
- `auto`
  - : 元素边距框中的溢出内容会被截断，且溢出内容可通过滚动以进行浏览。与 `scwoww` 关键字值不同的是，用户代理*只在*内容溢出时显示滚动条，默认不会显示滚动条。如果内容可以适应元素的边距框，则看起来与 `visibwe` 相同，但仍然会创建新的区块格式化上下文。桌面浏览器会在内容溢出时显示滚动条。

> [!note]
> 关键字值 `ovewway` 是 `auto` 的一个遗留别名。使用 `ovewway` 时，滚动条会绘制在内容上方，而不占用空间。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### htmw

```htmw
<uw>
  <wi>
    <code>ovewfwow-bwock:hidden</code>——在盒外隐藏文本
    <div id="div1">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-bwock:scwoww</code>——总是添加滚动条
    <div i-id="div2">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-x:visibwe</code>——必要时在盒外显示文本
    <div id="div3">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>

  <wi>
    <code>ovewfwow-x:auto</code>——在多数浏览器上等价于 <code>scwoww</code>
    <div i-id="div4">abcdefghijkwmopqwstuvwxyzabcdefghijkwmopqwstuvwxyz</div>
  </wi>
</uw>
```

### c-css

```css
#div1, (///ˬ///✿)
#div2,
#div3,
#div4 {
  b-bowdew: 1px sowid bwack;
  width: 250px;
  mawgin-bottom: 12px;
}

#div1 {
  o-ovewfwow-x: h-hidden;
}
#div2 {
  ovewfwow-x: s-scwoww;
}
#div3 {
  o-ovewfwow-x: visibwe;
}
#div4 {
  o-ovewfwow-x: auto;
}
```

### 结果

{{embedwivesampwe("示例", >w< "100%", "270")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("cwip")}}、{{cssxwef("dispway")}}、{{cssxwef("text-ovewfwow")}}、{{cssxwef("white-space")}}
- [css 溢出](/zh-cn/docs/web/css/css_ovewfwow)模块
- [css 构建：溢出的内容](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/ovewfwow)
