---
title: 後代組合器
slug: Web/CSS/Reference/Selectors/Descendant_combinator
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**後代組合器**（通常以單一空格（「 」）字元表示）結合了兩個選擇器，如此一來，如果匹配第二個選擇器的元素有一個匹配第一個選擇器的祖先元素（父元素、父元素的父元素、父元素的父元素的父元素等等），則會選取這些元素。使用後代組合器的選擇器稱為*後代選擇器*。

```css
/* 「my-things」清單的後代清單項目 */
ul.my-things li {
  margin: 2em;
}
```

技術上來說，後代組合器是在兩個選擇器之間，且沒有其他組合器時，由一個或多個 {{Glossary("CSS")}} 空白字元（空格字元和／或四個控制字元之一：回車、饋頁、換行和 Tab）所組成。此外，組成組合器的空白字元可以包含任意數量的 CSS 註解。

## 語法

```css
selector1 selector2 {
  /* 屬性宣告 */
}
```

## 範例

### CSS

```css
li {
  list-style-type: disc;
}

li li {
  list-style-type: circle;
}
```

### HTML

```html
<ul>
  <li>
    <div>項目 1</div>
    <ul>
      <li>子項目 A</li>
      <li>子項目 B</li>
    </ul>
  </li>
  <li>
    <div>項目 2</div>
    <ul>
      <li>子項目 A</li>
      <li>子項目 B</li>
    </ul>
  </li>
</ul>
```

### 結果

{{EmbedLiveSample("範例", "100%", 160)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [子組合器](/zh-TW/docs/Web/CSS/Reference/Selectors/Child_combinator)
