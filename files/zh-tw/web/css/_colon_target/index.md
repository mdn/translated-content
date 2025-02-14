---
title: :target
slug: Web/CSS/:target
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{CSSRef}}

The **`:target`** [CSS](/en-US/docs/Web/CSS) [pseudo-class](/en-US/docs/Web/CSS/Pseudo-classes) selects the _target element of the document_. When the document is loaded, the target element is derived using the document's [URL fragment identifier](/en-US/docs/Web/URI/Fragment#fragment).

```css
/* 選擇文件的目標元素 */
:target {
  border: 2px solid black;
}
```

For example, the following URL has a fragment identifier (denoted by the _#_ sign) that marks the element with the [`id`](/en-US/docs/Web/HTML/Global_attributes/id) of `setup` as the document's target element:

```url
http://www.example.com/help/#setup
```

當當前 URL 等於上述內容時，以下元素將被 `:target` 選擇器選中：

```html
<section id="setup">Installation instructions</section>
```

## 語法

```css
:target {
  /* ... */
}
```

## Description

When an HTML document loads, the browser sets its target element. The element is identified using the URL fragment identifier. Without the URL fragment identifier, the document has no target element. The `:target` pseudo-class allows styling the document's target element. The element could be focused, highlighted, animated, etc.

The target element is set at document load and [`history.back()`](/en-US/docs/Web/API/History/back), [`history.forward()`](/en-US/docs/Web/API/History/forward), and [`history.go()`](/en-US/docs/Web/API/History/forward) method calls. But it is _not_ changed when [`history.pushState()`](/en-US/docs/Web/API/History/pushState) and [`history.replaceState()`](/en-US/docs/Web/API/History/replaceState) methods are called.

> [!NOTE]
> 由於 [CSS 規範中的可能錯誤](https://discourse.wicg.io/t/target-css-does-not-work-because-shadowroot-does-not-set-a-target-element/2070/)，`:target` 無法在 [Web 組件](/zh-TW/docs/Web/API/Web_components)中運作，因為[影子根](/zh-TW/docs/Web/API/ShadowRoot)無法將目標元素傳遞到影子樹中。

## 範例

### 目錄

`:target` 偽類可以用於高亮顯示從目錄中連結到的頁面部分。

#### HTML

```html
<h3>目錄</h3>
<ol>
  <li><a href="#p1">跳到第一段！</a></li>
  <li><a href="#p2">跳到第二段！</a></li>
  <li>
    <a href="#nowhere">此連結無效，因為目標不存在。 </a>
  </li>
</ol>

<h3>我的有趣文章</h3>
<p id="p1">你可以使用 URL 片段來定位<i>這段文字</i>。點擊上面的第一個連結試試看！</p>
<p id="p2">這是<i>另一段文字</i>，也可以從上面的第二個連結訪問。是不是很有趣？</p>
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

{{EmbedLiveSample('目錄', 500, 300)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [在選擇器中使用 :target 偽類](/zh-TW/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)
