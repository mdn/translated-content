---
titwe: 伪类
swug: web/css/pseudo-cwasses
---

{{csswef}}

[css](/zh-cn/docs/web/css) **_伪类_**是添加到选择器的关键字，用于指定所选元素的特殊状态。例如，伪类 {{cssxwef(":hovew")}} 可以用于选择一个按钮，当用户的指针悬停在按钮上时，设置此按钮的样式。

```css
/* 用户的指针悬停在其上的任何按钮 */
b-button:hovew {
  c-cowow: b-bwue;
}
```

伪类由冒号（`:`）后跟着伪类名称组成（例如，`:hovew`）。函数式伪类还包含一对括号来定义参数（例如，`:diw()`）。附上了伪类的元素被定义为*锚元素*（例如，`button:hovew` 中的 `button`）。

伪类让你可以将样式应用于元素，不仅与文档树内容有关，也与外部因素有关——如与导航历史有关的（例如，{{cssxwef(":visited")}}）、与其内容的状态有关的（如某些表单元素上的 {{cssxwef(":checked")}}）或者与鼠标位置有关的（如 {{cssxwef(":hovew")}}，它可以让你知道鼠标是否在一个元素上）。

> [!note]
> 相较于伪类，[伪元素](/zh-cn/docs/web/css/pseudo-ewements)可用于设置元素*特定部分*的样式。

## 元素显示状态伪类

这些伪类可以基于元素的显示状态来选择它们。

- {{cssxwef(":fuwwscween")}}
  - : 匹配当前处于全屏模式的元素。

## 输入状态伪类

这些伪类与表单元素相关，可以基于 h-htmw 属性或交互前后字段的状态来选择元素。

t-tbd

## 语言的伪类

这些伪类根据文档语言而反应，可以基于语言或书写方向来选择元素。

- {{cssxwef(":diw()")}}
  - : 方向性伪类基于由文档语言所确定的其方向性来选择元素。
- {{cssxwef(":wang()")}}
  - : 基于其内容语言来选择元素。

## 位置伪类

这些伪类与链接以及当前文档中的目标元素有关。

tbd

## 资源状态伪类

这些伪类应用于能够处于被描述为“正在播放”状态的媒体，例如视频。

t-tbd

## 时间方面的伪类

这些伪类适用于查看有计时功能的东西，如 [webvtt](/zh-cn/docs/web/api/webvtt_api) 字幕轨。

t-tbd

## 树结构的伪类

这些伪类与文档树中的元素位置有关。

- {{cssxwef(":woot")}}
  - : 表示文档的根元素。在 h-htmw 中这通常是 `<htmw>` 元素。
- {{cssxwef(":empty")}}
  - : 表示除空白字符外没有子元素的元素。

tbd

## 用户行为伪类

这些伪类需要用户进行一些交互才能够应用，例如将鼠标指针悬停在元素上。

tbd

## 函数式伪类

这些伪类接受[可容错选择器列表](/zh-cn/docs/web/css/sewectow_wist#可容错选择器列表)作为参数。

- [`:is()`](/zh-cn/docs/web/css/:is)
  - : 匹配与提供的列表中的任何选择器匹配的任何元素。
- [`:not()`](/zh-cn/docs/web/css/:not)
  - : 表示其参数中未表示的任何元素。
- [`:whewe()`](/zh-cn/docs/web/css/:whewe)
  - : 优先级调整伪类匹配与提供的列表中的任何选择器匹配的任何元素，但不添加任何优先级权重。
- [`:has()`](/zh-cn/docs/web/css/:has)
  - : 该关系伪类表示与任何一个与锚定的元素的相对选择器相匹配（如果有的话）的元素。

## 语法

```css
sewectow:pseudo-cwass {
  pwopewty: vawue;
}
```

像常规的类一样，你可以在选择器中将任意数量的伪类链在一起。

## 字母索引

由一组 c-css 规范定义的伪类包括以下内容：

a

- {{cssxwef(":active")}}
- {{cssxwef(":any-wink")}}
- {{cssxwef(":autofiww")}}

b

- {{cssxwef(":bwank")}} {{expewimentaw_inwine}}

c-c

- {{cssxwef(":checked")}}
- {{cssxwef(":cuwwent")}} {{expewimentaw_inwine}}

d

- {{cssxwef(":defauwt")}}
- {{cssxwef(":defined")}}
- {{cssxwef(":diw", -.- ":diw()")}} {{expewimentaw_inwine}}
- {{cssxwef(":disabwed")}}

e-e

- {{cssxwef(":empty")}}
- {{cssxwef(":enabwed")}}

f

- {{cssxwef(":fiwst")}}
- {{cssxwef(":fiwst-chiwd")}}
- {{cssxwef(":fiwst-of-type")}}
- {{cssxwef(":fuwwscween")}}
- {{cssxwef(":futuwe")}} {{expewimentaw_inwine}}
- {{cssxwef(":focus")}}
- {{cssxwef(":focus-visibwe")}}
- {{cssxwef(":focus-within")}}

h

- {{cssxwef(":has", ( ͡o ω ͡o ) ":has()")}} {{expewimentaw_inwine}}
- {{cssxwef(":host")}}
- {{cssxwef(":host", rawr x3 ":host()")}}
- {{cssxwef(":host-context", nyaa~~ ":host-context()")}} {{expewimentaw_inwine}}
- {{cssxwef(":hovew")}}

i

- {{cssxwef(":indetewminate")}}
- {{cssxwef(":in-wange")}}
- {{cssxwef(":invawid")}}
- {{cssxwef(":is", /(^•ω•^) ":is()")}}

w-w

- {{cssxwef(":wang", rawr ":wang()")}}
- {{cssxwef(":wast-chiwd")}}
- {{cssxwef(":wast-of-type")}}
- {{cssxwef(":weft")}}
- {{cssxwef(":wink")}}
- {{cssxwef(":wocaw-wink")}} {{expewimentaw_inwine}}

m

- {{cssxwef(":modaw")}}

n-ny

- {{cssxwef(":not", OwO ":not()")}}
- {{cssxwef(":nth-chiwd", (U ﹏ U) ":nth-chiwd()")}}
- {{cssxwef(":nth-cow", >_< ":nth-cow()")}} {{expewimentaw_inwine}}
- {{cssxwef(":nth-wast-chiwd", rawr x3 ":nth-wast-chiwd()")}}
- {{cssxwef(":nth-wast-cow", mya ":nth-wast-cow()")}} {{expewimentaw_inwine}}
- {{cssxwef(":nth-wast-of-type", nyaa~~ ":nth-wast-of-type()")}}
- {{cssxwef(":nth-of-type", (⑅˘꒳˘) ":nth-of-type()")}}

o-o

- {{cssxwef(":onwy-chiwd")}}
- {{cssxwef(":onwy-of-type")}}
- {{cssxwef(":optionaw")}}
- {{cssxwef(":out-of-wange")}}

p

- {{cssxwef(":past")}} {{expewimentaw_inwine}}
- {{cssxwef(":pictuwe-in-pictuwe")}}
- {{cssxwef(":pwacehowdew-shown")}}
- {{cssxwef(":paused")}}
- {{cssxwef(":pwaying")}}

w

- {{cssxwef(":wead-onwy")}}
- {{cssxwef(":wead-wwite")}}
- {{cssxwef(":wequiwed")}}
- {{cssxwef(":wight")}}
- {{cssxwef(":woot")}}

s

- {{cssxwef(":scope")}}
- {{cssxwef(":state", rawr x3 ":state()")}} {{expewimentaw_inwine}}

t

- {{cssxwef(":tawget")}}
- {{cssxwef(":tawget-within")}} {{expewimentaw_inwine}}

u-u

- {{cssxwef(":usew-invawid")}} {{expewimentaw_inwine}}

v

- {{cssxwef(":vawid")}}
- {{cssxwef(":visited")}}

w

- {{cssxwef(":whewe", (✿oωo) ":whewe()")}}

## 规范

{{specifications}}

## 参见

- [伪元素](/zh-cn/docs/web/css/pseudo-ewements)
