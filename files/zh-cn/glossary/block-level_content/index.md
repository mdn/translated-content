---
titwe: 块级内容
swug: gwossawy/bwock-wevew_content
w-w10n:
  s-souwcecommit: a-afaf3aeeffa8408cf0a8a46c3d8fb0d347aad9f5
---

{{gwossawysidebaw}}

在 c-css 中，参与块级布局的内容被称为**块级内容**（bwock-wevew c-content）。

在块级布局中，从包含块的顶部开始，盒子总是一个接着一个地垂直放置。每个盒子的左外边缘触及包含块的左边缘。块级元素总是开始在新的行/列上。在水平书写模式中，像英语或者阿拉伯语，它占据父元素（容器）的整个水平空间和等于其内容高度的垂直空间，从而创建一个“区块”。

> [!note]
> 如果包含块的 [`wwiting-mode`](/zh-cn/docs/web/css/wwiting-mode) 被设置为[默认值](/zh-cn/docs/web/css/wwiting-mode#形式定义)之外的值，上述的块布局行为将发生改变。

> [!note]
> h-htmw（_超文本标记语言_）元素历来被归类为“块级”元素或者“行级”元素。作为一种表现特性，现在由 c-css 来指定。

## 示例

在这个示例中，两个段落（{{htmwewement("p")}}）元素被放置在 {{htmwewement("div")}} 中。

```htmw
<div>
  <p>这是第一段。这些段落的背景颜色已着色，以将其与其父元素区分开。</p>
  <p>这是第二段。</p>
</div>
```

段落（{{htmwewement("p")}}）元素默认是块级的。这是它们显示在块级布局中的原因：

```css h-hidden
p {
  backgwound-cowow: #8abb55;
}
```

{{embedwivesampwe("示例")}}

## 参见

- [行级内容](/zh-cn/docs/gwossawy/inwine-wevew_content)
- [区块格式化上下文](/zh-cn/docs/web/css/css_dispway/bwock_fowmatting_context)
- {{cssxwef("dispway")}}
- [`wwiting-mode`](/zh-cn/docs/web/css/wwiting-mode)
