---
title: ":target"
slug: Web/CSS/:target
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{CSSRef}}

**`:target`** [CSS](/zh-TW/docs/Web/CSS) [偽類](/zh-TW/docs/Web/CSS/Pseudo-classes)代表一個獨特的元素（稱為目標元素），其 [`id`](/zh-TW/docs/Web/HTML/Global_attributes/id) 與 URL 的片段（fragment）相匹配。

```css
/* 選擇與當前 URL 的片段相匹配的 ID 的元素 */
:target {
  border: 2px solid black;
}
```

例如，以下 URL 包含一個片段（以 _#_ 符號表示），指向名為 `section2` 的元素：

```url
http://www.example.com/index.html#section2
```

當當前 URL 等於上述內容時，以下元素將被 `:target` 選擇器選中：

```html
<section id="section2">Example</section>
```

## 語法

```css
:target {
  /* ... */
}
```

> [!NOTE]
> 由於 [CSS 規範中的可能錯誤](https://discourse.wicg.io/t/target-css-does-not-work-because-shadowroot-does-not-set-a-target-element/2070/)，`:target` 無法在 [Web 元件](/zh-TW/docs/Web/API/Web_components)中運作，因為 [shadow root](/zh-TW/docs/Web/API/ShadowRoot) 無法將目標元素傳遞到 shadow 樹中。

## 範例

### 目錄表

`:target` 偽類可以用於高亮顯示從目錄表中鏈接到的頁面部分。

#### HTML

```html
<h3>Table of Contents</h3>
<ol>
  <li><a href="#p1">Jump to the first paragraph!</a></li>
  <li><a href="#p2">Jump to the second paragraph!</a></li>
  <li>
    <a href="#nowhere">
      This link goes nowhere, because the target doesn't exist.
    </a>
  </li>
</ol>

<h3>My Fun Article</h3>
<p id="p1">
  You can target <i>this paragraph</i> using a URL fragment. Click on the link
  above to try out!
</p>
<p id="p2">
  This is <i>another paragraph</i>, also accessible from the links above. Isn't
  that delightful?
</p>
```

#### CSS

```css
p:target {
  background-color: gold;
}

/* 在目標元素內添加偽元素 */
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/* 樣式目標元素內的斜體文字 */
p:target i {
  color: red;
}
```

#### 結果

{{EmbedLiveSample('A_table_of_contents', "目錄表", 500, 300)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [在選擇器中使用 :target 偽類](/zh-TW/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)
