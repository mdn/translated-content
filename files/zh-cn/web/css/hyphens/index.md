---
title: hyphens
slug: Web/CSS/hyphens
---

{{CSSRef}}

## Summary

[CSS](/zh-CN/docs/CSS) 属性 **`hyphens`** 告知浏览器在换行时如何使用连字符连接单词。可以完全阻止使用连字符，也可以控制浏览器什么时候使用，或者让浏览器决定什么时候使用。

连字规则具有语言特定性。在 HTML 中，语言由 lang 属性决定，浏览器只会在当前属性存在且有合适的连字字典可用的情况使用连字进行连接。在 XML 中，必须使用 `xml:lang` 属性。

> **备注：** 在规范中，没有明确定义连字符的实现规则，所以具体的连字符在不同浏览器中可能有所区别。

{{cssinfo}}

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
  - : 换行时单词不会被打断，甚至在单词内的字符建议有换行点时。行只会在空白符处换行。
- `manual`
  - : Words are broken for line-wrapping only where characters inside the word suggest line break opportunities. See [Suggesting line break opportunities](#suggesting_line_break_opportunities) for details.
- `auto`
  - : The browser is free to automatically break words at appropriate hyphenation points, following whatever rules it chooses to use. Suggested line break opportunities, as covered in [Suggesting line break opportunities](#suggesting_line_break_opportunities), should be preferred over automatically selecting break points whenever possible.

> **备注：** The `auto` setting's behavior depends on the language being properly tagged so that the appropriate hyphenation rules can be selected. You must specify a language using the `lang` HTML attribute in order to guarantee that automatic hyphenation is applied in the language of your choice.

## Suggesting line break opportunities

There are two Unicode characters that can be used to manually specify potential line break points within text:

- U+2010 (HYPHEN)
  - : The "hard" hyphen character indicates a visible line break opportunity. Even if the line is not actually broken at that point, the hyphen is still rendered.
- U+00AD (SHY)
  - : An invisible, "soft" hyphen. This character is not rendered visibly; instead, it suggests a place where the browser might choose to break the word if necessary. In HTML, you can use `&shy;` to insert a soft hyphen.

### Formal syntax

{{csssyntax}}

## 示例

以下代码段展示了`hyphens`属性取 none/manual/auto 这三类值的效果。

```html
<ul>
  <li><code>none</code>: no hyphen; overflow if needed
    <p lang="en" class="none">An extreme&shy;ly long English word</p>
  </li>
  <li><code>manual</code>: hyphen only at &amp;hyphen; or &amp;shy; (if needed)
    <p lang="en" class="manual">An extreme&shy;ly long English word</p>
  </li>
  <li><code>auto</code>: hyphen where the algo is deciding (if needed)
    <p lang="en" class="auto">An extreme&shy;ly long English word</p>
  </li>
</ul>
```

```css
p {
  width: 55px;
  border: 1px solid black;
 }
p.none {
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
p.manual {
  -webkit-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
}
p.auto {
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
```

{{EmbedLiveSample("Example", "100%", "470'")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{Cssxref("content")}}
