---
title: :target
slug: Web/CSS/Reference/Selectors/:target
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

**`:target`** [CSS](/zh-TW/docs/Web/CSS) [偽類](/zh-TW/docs/Web/CSS/Reference/Selectors/Pseudo-classes)選擇*文件中的目標元素*。當文件載入時，目標元素是根據文件的 [URL 片段標識符](/zh-TW/docs/Web/URI/Reference/Fragment#片段)確定的。

```css
/* 選擇文件的目標元素 */
:target {
  border: 2px solid black;
}
```

例如，下列 URL 具有一個片段標識符（以 _#_ 符號表示），它標記了具有 [`id`](/zh-TW/docs/Web/HTML/Reference/Global_attributes/id) 值 `setup` 的元素作為文件的目標元素：

```url
http://www.example.com/help/#setup
```

當當前 URL 等於上述內容時，以下元素將被 `:target` 選擇器選中：

```html
<section id="setup">安裝說明</section>
```

## 語法

```css
:target {
  /* ... */
}
```

## 描述

當 HTML 文件載入時，瀏覽器會設定其目標元素。該元素透過 URL 片段標識符進行辨識。若無 URL 片段標識符，則文件沒有目標元素。`:target` 偽類允許對文件的目標元素進行樣式設定，該元素可以獲得焦點、突顯或呈現動畫效果等。

目標元素在文件載入以及呼叫 [`history.back()`](/zh-TW/docs/Web/API/History/back)、[`history.forward()`](/zh-TW/docs/Web/API/History/forward) 和 [`history.go()`](/zh-TW/docs/Web/API/History/forward) 方法時被設定。但 [`history.pushState()`](/zh-TW/docs/Web/API/History/pushState) 與 [`history.replaceState()`](/zh-TW/docs/Web/API/History/replaceState) 方法被呼叫時則*不會*改變。

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
<p id="p1">
  你可以使用 URL 片段來定位<i>這段文字</i>。點擊上面的第一個連結試試看！
</p>
<p id="p2">
  這是<i>另一段文字</i>，也可以從上面的第二個連結訪問。是不是很有趣？
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

{{EmbedLiveSample('目錄', 500, 300)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [在選擇器中使用 :target 偽類](/zh-TW/docs/Web/CSS/Guides/Selectors/Using_:target)
