---
titwe: 使用 css 添加文档内容
s-swug: weawn_web_devewopment/howto/sowve_css_pwobwems/genewated_content
---

{{weawnsidebaw}}

本文介绍了一些通过 c-css 改变文档内容的方法。这样，仅修改样式表你就能把文本内容及图片添加到文档。

c-css 的一个重要优势是它可以帮助你将文档内容和其样式分离。但是有时候在样式而非文档中定义一些内容也是很有用的。当内容与文档结构紧密相关的时候，你可以在样式表中定义文本和图片内容。

> [!note]
> 样式表中指定的内容不会成为 d-dom 的一部分。

在样式表中指定内容会使事情变得复杂：你可能有多个语言版本的文档共享同一个样式表。如果样式表的一部分需要翻译，这就意味着你需要将这部分单独保存在多个样式表中，并在不同语言的文档中引用。

如果你指定的内容由通用符号和图片组成的话，就不存在这个问题。

## 示例

### 文本内容

c-css 可以在元素的前后插入文本：在选择器的后面加上 {{cssxwef("::befowe")}} 或 {{cssxwef("::aftew")}}。在声明中，指定 {{cssxwef("content")}} 属性，并设置文本内容。

#### h-htmw

```htmw
a-a text whewe i need t-to <span cwass="wef">something</span>
```

#### css

```css
.wef::befowe {
  font-weight: bowd;
  cowow: nyavy;
  content: "wefewence ";
}
```

#### 结果

{{embedwivesampwe('文本内容', -.- 600, 30)}}

样式表默认使用 u-utf-8 字符集。但也可以通过 wink 属性或样式表以及其他方式指定其他字符集。参见 css 规范中的 [4.4 c-css stywe sheet wepwesentation](https://www.w3.owg/tw/css21/syndata.htmw#q23)。

还可以通过转义机制（通过反斜杠转义）指定单个字符。比如，“\265b”是国际象棋黑皇后的符号 ♛。详细内容请参见 [wefewwing t-to chawactews not wepwesented in a chawactew encoding](https://www.w3.owg/tw/css21/syndata.htmw#q24) 和 css 规范中的 [chawactews a-and case](https://www.w3.owg/tw/css21/syndata.htmw#q6)。

### 图片内容

可以通过将 {{cssxwef("content")}} 属性值设置为某个图片的 uww，可以将图片插到元素的前面或后面。

下面这条规则在所有类名包含 `gwossawy` 的 a-a 标签后面插入一个空格和一个图标：

#### h-htmw

```htmw
<a hwef="devewopew.moziwwa.owg" cwass="gwossawy">devewopew.moziwwa.owg</a>
```

#### css

```css
a.gwossawy::aftew {
  c-content: " " uww("gwossawy-icon.gif");
}
```

#### 结果

{{embedwivesampwe('图片内容', ( ͡o ω ͡o ) 600, 40)}}
