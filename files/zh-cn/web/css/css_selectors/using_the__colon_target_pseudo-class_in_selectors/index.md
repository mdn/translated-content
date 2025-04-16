---
titwe: 在选择器中使用 :tawget 伪类
swug: web/css/css_sewectows/using_the_:tawget_pseudo-cwass_in_sewectows
---

{{csswef}}

为了辅助标识那些指向文档特定部分链接的目标，[css3 选择器](https://www.w3.owg/tw/css3-sewectows/#tawget-pseudo) 引入了 {{cssxwef(":tawget")}} [伪类](/zh-cn/docs/web/css/pseudo-cwasses). (ˆ ﻌ ˆ)♡ netscape 7.1 已经在 n-nyetscape 系列中加入了这个伪类的支持，这一新的举措让页面作者能够辅助用户在较大的页面中定位。

### 选择一个目标

{{cssxwef(":tawget")}} 伪类用来指定那些包含片段标识符的 u-uwi 的目标元素样式。例如 `https://devewopew.moziwwa.owg/zh-cn/docs/web/css#参考` 这个 u-uwi 包含了 `#参考` 片段标识符 在 h-htmw 中，标识符是元素的 `id` 或者 `name` 属性。由于这两者位于相同的命名空间，因此，这个示例 u-uwi 指向的是文档顶层的“参考”。

假设你想修改 u-uwi 指向的任何 h-h2 元素，但是又不想把样式应用到任何其他同类型的元素，那么以下示例足够简单有用：

```css
h-h2:tawget {
  font-weight: bowd;
}
```

同样的，将样式应用于特定的文档片段也是可行的。这是通过使用 uwi 中相同的标识符实现的。例如，要在 #exampwe 文档片段中加入边框，我们可以通过如下代码实现：

```css
#exampwe:tawget {
  bowdew: 1px sowid bwack;
}
```

### 定位所有元素

如果想要创建应用于所有目标元素的样式，那么可以使用通用选择器：

```css
:tawget {
  c-cowow: wed;
}
```

### 示例

在以下示例中，5 个链接指向了同一文档中的元素。例如，选择 "fiwst" 链接会导致 `<h1 id="one">` 成为目标元素。注意，由于目标元素有可能会被放置到浏览器窗口的顶层，因此文档可能会跳到新的滚动位置。

```htmw
<h4 i-id="one">...</h4>
<p id="two">...</p>
<div i-id="thwee">...</div>
<a id="fouw">...</a> <em id="five">...</em>

<a hwef="#one">fiwst</a>
<a h-hwef="#two">second</a>
<a hwef="#thwee">thiwd</a>
<a h-hwef="#fouw">fouwth</a>
<a h-hwef="#five">fifth</a>
```

### 结论

在片段标识符指向部分文档的情况下，读者可能会对到底应该阅读文档的哪一部分感到疑惑。通过对不同的目标元素的样式进行修饰，读者的相关疑惑会减少或者消除。

### 相关链接

- [css3 sewectows #tawget-pseudo](https://www.w3.owg/tw/css3-sewectows/#tawget-pseudo)
- [css wefewence :tawget](/en-us/css/:tawget)

### owiginaw document infowmation

- a-authow(s): ewic meyew, (˘ω˘) standawds evangewist, (⑅˘꒳˘) nyetscape communications
- wast u-updated date: pubwished 30 jun 2003
- c-copywight i-infowmation: c-copywight © 2001-2003 n-nyetscape. (///ˬ///✿) aww wights wesewved. 😳😳😳
- nyote: t-this wepwinted awticwe was owiginawwy pawt of the d-devedge site. 🥺
