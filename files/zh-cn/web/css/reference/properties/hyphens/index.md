---
title: hyphens
slug: Web/CSS/Reference/Properties/hyphens
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`hyphens`** 告知浏览器在换行时如何使用连字符连接单词。可以完全阻止使用连字符，也可以控制浏览器什么时候使用，或者让浏览器决定什么时候使用。

连字规则具有语言特定性。在 HTML 中，语言由 lang 属性决定，浏览器只会在当前属性存在且有合适的连字字典可用的情况使用连字进行连接。在 XML 中，必须使用 `xml:lang` 属性。

> [!NOTE]
> 在规范中，没有明确定义连字符的实现规则，所以具体的连字符在不同浏览器中可能有所区别。

## 语法

```css
hyphens: none;
hyphens: manual;
hyphens: auto;

/* Global values */
hyphens: inherit;
hyphens: initial;
hyphens: unset;
```

### 值

- `none`
  - : 即便单词内有建议换行点也不会在那里换行。只会在空白符处换行。
- `manual`
  - : 只有当单词内存在建议换行点时，才会在该位置断开单词并使用连字符换行。查看[建议换行点](#建议换行点)了解详情。
- `auto`
  - : The browser is free to automatically break words at appropriate hyphenation points, following whatever rules it chooses to use. Suggested line break opportunities, as covered in [Suggesting line break opportunities](#suggesting_line_break_opportunities), should be preferred over automatically selecting break points whenever possible.

> [!NOTE]
> `auto` 的行为取决于语言是否被正确地设置，以便可以选择适当的断词规则。你必须使用 HTML 属性 `lang` 指定语言，以确保自动断词在你选择的语言中得到应用。

## 建议换行点

有两个 Unicode 字符可以用于在文本中手动指定可能的换行点：

- U+2010（HYPHEN）
  - : “硬”连字符表示一个可见的换行点。即使在指定的位置没有真正换行，连字符仍然会显示出来。
- U+00AD（SHY）
  - : 一个不可见的“软”连字符。此字符不会在屏幕上显示出来，而是表示在必要时浏览器可能会在该位置断开单词并出现连字符。在 HTML 中，可以使用 `&shy;` 来插入软连字符。

## 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

以下代码段展示了 `hyphens` 属性取 none/manual/auto 这三类值的效果。

```html
<dl>
  <dt><code>none</code>: no hyphen; overflow if needed</dt>
  <dd lang="en" class="none">An extreme&shy;ly long English word</dd>
  <dt>
    <code>manual</code>: hyphen only at &amp;hyphen; or &amp;shy; (if needed)
  </dt>
  <dd lang="en" class="manual">An extreme&shy;ly long English word</dd>
  <dt><code>auto</code>: hyphens where the algorithm decides (if needed)</dt>
  <dd lang="en" class="auto">An extreme&shy;ly long English word</dd>
</dl>
```

```css
dd {
  width: 55px;
  border: 1px solid black;
}
dd.none {
  hyphens: none;
}
dd.manual {
  hyphens: manual;
}
dd.auto {
  hyphens: auto;
}
```

{{EmbedLiveSample("示例", "100%", 490)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("content")}}
