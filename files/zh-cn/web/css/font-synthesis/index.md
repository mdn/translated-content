---
title: font-synthesis
slug: Web/CSS/font-synthesis
---

{{CSSRef}}

**`font-synthesis`** CSS 属性控制浏览器可以合成（synthesize）哪些缺失的字体，粗体或斜体。

{{EmbedInteractiveExample("pages/css/font-synthesis.html")}}

大多数标准西方字体包含斜体和粗体变体，但许多新颖（novelty）的字体不包括这些。用于中文、日文、韩文和其他语标文字（logographic script）的字体往往不含这些变体，同时，从默认字体中生成、合成这些变体可能会妨碍文本的易读性。在这些情况下，可能最好关闭浏览器默认的 font-synthesis 字体合成特性。

{{cssinfo}}

## 语法

此属性（的值）可采用下列任意一种形式：

- 关键词 `none`
- 关键词 `weight` 或 `style`
- 关键词 `weight` 和 `style`。

### 属性值

- `none`
  - : 此关键词表示不合成粗体字型（typeface）或斜体字型。
- `weight`
  - : 此关键词表示，如果需要的话，可以合成粗体字型。
- `style`
  - : 此关键词表示，如果需要的话，可以合成斜体字型。

### 形式化语法

{{csssyntax}}

## 示例

### HTML

```html
<em class="syn">Synthesize me! 站直。</em>
<br />
<em class="no-syn">Don't synthesize me! 站直。</em>
```

### CSS

```css
em {
  font-weight: bold;
}
.syn {
  font-synthesis: style weight;
}
.no-syn {
  font-synthesis: none;
}
```

### 结果

{{ EmbedLiveSample('示例', '', '50') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
