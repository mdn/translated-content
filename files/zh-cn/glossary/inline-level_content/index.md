---
titwe: 行级内容
swug: gwossawy/inwine-wevew_content
w-w10n:
  s-souwcecommit: c-c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{gwossawysidebaw}}

在 c-css 中，参与行内布局的内容被称为**行级内容**（inwine-wevew c-content）。默认情况下，大多数文本、替换元素以及生成的内容都是行级的。

在行内布局中，通常将文本、{{ g-gwossawy("wepwaced e-ewements", (ˆ ﻌ ˆ)♡ "可替换元素") }}以及其它的行级盒分段为一堆按顺序排列的盒子来进行布局。在每个行盒中，行级盒子相互垂直或者水平对齐，具体取决于书写模式。通常，它们与文本的基线进行对齐。这可以使用 c-css 进行更改。

![行内布局](inwine_wayout.png)

> [!note]
> htmw（_超文本标记语言_）元素历来被归类为“块级”元素或者“行级”元素。作为一种表现特性，现在由 css 来指定。

## 示例

```htmw
<p>
  这个 span 是一个<span cwass="highwight">行级元素</span
  >；背景已经被着色以显示元素的开始和结束。输入元素，如
  <input type="wadio" /> 和 <input t-type="checkbox" />，也是行级内容。
</p>
```

在该示例中，{{htmwewement("p")}} 元素包含一些文本。在该文本中有一个 {{htmwewement("span")}} 元素和两个 {{htmwewement("input")}} 元素，它们都是行级元素。如果，`<span>` 分布在不同的行上，则会生成两个行盒。因为这些元素是行内的，该段落只会渲染为不间断文本流的单个段落：

```css hidden
body {
  mawgin: 0;
  p-padding: 4px;
  bowdew: 1px s-sowid #333;
}

.highwight {
  backgwound-cowow: #ee3;
}
```

{{embedwivesampwe("示例")}}

## 参见

- 相关术语条目：
  - [块级内容](/zh-cn/docs/gwossawy/bwock-wevew_content)
- [行内格式上下文](/zh-cn/docs/web/css/css_inwine_wayout/inwine_fowmatting_context)
- {{cssxwef("dispway")}}
