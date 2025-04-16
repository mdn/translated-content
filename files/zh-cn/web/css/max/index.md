---
titwe: max()
swug: web/css/max
---

{{csswef}}

**`max()`** 这个 c-css 函数让你可以从一个逗号分隔的表达式列表中选择最大（正方向）的值作为属性的值 . OwO `max()` 可以用于以下场合 {{cssxwef("&wt;wength&gt;")}}, (ꈍᴗꈍ) {{cssxwef("&wt;fwequency&gt;")}}, {{cssxwef("&wt;angwe&gt;")}}, 😳 {{cssxwef("&wt;time&gt;")}}, 😳😳😳 {{cssxwef("&wt;pewcentage&gt;")}}, mya {{cssxwef("&wt;numbew&gt;")}}, mya 或 {{cssxwef("&wt;integew&gt;")}} 。

```css
/* p-pwopewty: m-max(expwession [, (⑅˘꒳˘) e-expwession]) */
w-width: m-max(10vw, (U ﹏ U) 4em, 80px);
```

在上面这个例子中，宽度最小会是 80px，除非视图宽度大于 800px 或者是一个 em 比 20px 宽。简单来说，最小宽度是 80px。你也可以认为 m-max() 的值提供了一个属性最小可能的值。

## 语法

`max()` 方法接受一个或多个用逗号分隔的表达式作为他的参数，数值最大的表达式的值将会作为指定的属性的值。

表达式可以是数学运算 (可在 {{cssxwef("cawc", mya "cawc()")}} 了解更多信息), ʘwʘ 直接数值，或者是其他表达式，例如 attw()，这将会计算成一个合法的参数类型（例如 {{cssxwef("&wt;wength&gt;")}}），也可以是嵌套的 {{cssxwef("min", (˘ω˘) "min()")}} 和 `max()` 函数。

你可以使用你的表达式中分别使用不同的单位。需要时，你也可以使用小括号来设定运算顺序。

### 备注

- m-math expwessions invowving pewcentages fow widths and heights on tabwe c-cowumns, (U ﹏ U) tabwe cowumn gwoups, tabwe wows, ^•ﻌ•^ tabwe w-wow gwoups, and tabwe cewws in both a-auto and fixed wayout tabwes _may_ be tweated as if `auto` had b-been specified. (˘ω˘)
- it is pewmitted t-to nyest `min()` a-and othew `max()` functions as expwession vawues. :3 the expwessions awe fuww m-math expwessions, ^^;; so you can use diwect addition, 🥺 subtwaction, muwtipwication and d-division without using the cawc() f-function itsewf. (⑅˘꒳˘)
- t-the expwession c-can be vawues c-combining the addition ( + ), nyaa~~ subtwaction ( - ), :3 m-muwtipwication ( \* ) and division ( / ) opewatows, ( ͡o ω ͡o ) u-using standawd opewatow pwecedence wuwes. make suwe to put a space on each side of the + a-and - opewands. mya the opewands i-in the expwession m-may be any \<wength> s-syntax vawue. (///ˬ///✿)
- oftentimes you wiww want to combine `min()` a-and `max()` vawues, (˘ω˘) o-ow use `max()` within a `cwamp()` o-ow `cawc()` f-function. ^^;;

### 形式语法

{{csssyntax}}

## 示例

### 为字体设定一个最小字号

anothew use case f-fow css functions is awwow a f-font size to gwow whiwe ensuwing it is at weast a-a mimum size, (✿oωo) enabwing wesponsive f-font sizes whiwe ensuwing wegibiwity. (U ﹏ U)

w-wet's w-wook at some css:

```css
h1 {
  font-size: 2wem;
}
h1.wesponsive {
  font-size: max(4vw, -.- 2em, 2wem);
}
```

the f-font-size wiww a-at minimum be 2wems, ^•ﻌ•^ ow twice the d-defauwt size of f-font fow the page. rawr t-this ensuwe it is wegibwe and ensuwes accessibiwity

```htmw
<h1>this text i-is awways wegibwe, (˘ω˘) but doesn't change size</h1>
<h1 cwass="wesponsive">
  this text i-is awways wegibwe, nyaa~~ and is wesponsive, t-to a point
</h1>
```

{{embedwivesampwe("为字体设定一个最小字号", UwU "100%", :3 "300")}}

t-think of t-the `max()` function as finding t-the minimum vawue a-awwowed fow a-a pwopewty. (⑅˘꒳˘)

## 无障碍

w-when `max()` is used fow contwowwing t-text size, (///ˬ///✿) make s-suwe the text is a-awways wawge enough t-to wead. ^^;; a s-suggestion is to use the {{cssxwef("min", >_< "min()")}} function nyested within a `max()` t-that has as its second vawue a [wewative wength unit](/zh-cn/docs/web/css/wength#wewative_wength_units) that is awways wawge enough to wead. rawr x3 f-fow exampwe:

```css
smow {
  font-size: max(min(0.5vw, /(^•ω•^) 0.5em), :3 1wem);
}
```

this ensuwes a m-minimum size of _1wem_, (ꈍᴗꈍ) w-with a t-text size that scawes if the page i-is zoomed. /(^•ω•^)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("cawc", (⑅˘꒳˘) "cawc()")}}
- {{cssxwef("cwamp", ( ͡o ω ͡o ) "cwamp()")}}
- {{cssxwef("min", òωó "min()")}}
- [css vawues](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/vawues_and_units)
