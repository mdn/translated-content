---
title: :first-of-type
slug: Web/CSS/Reference/Selectors/:first-of-type
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`:first-of-type`** [CSS](/zh-TW/docs/Web/CSS) [偽類](/zh-TW/docs/Web/CSS/Reference/Selectors/Pseudo-classes)代表一群兄弟元素中，其類型（標籤名稱）的第一個元素。

{{InteractiveExample("CSS Demo: :first-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:first-of-type {
  border: 2px solid orange;
}
```

```html interactive-example
<dl>
  <dt>蔬菜：</dt>
  <dd>1. 番茄</dd>
  <dd>2. 小黃瓜</dd>
  <dd>3. 蘑菇</dd>
  <dt>水果：</dt>
  <dd>4. 蘋果</dd>
  <dd>5. 芒果</dd>
  <dd>6. 梨子</dd>
  <dd>7. 柳橙</dd>
</dl>
```

## 語法

```css
:first-of-type {
  /* ... */
}
```

## 範例

### 為第一個段落設定樣式

#### HTML

```html
<h2>標題</h2>
<p>段落 1</p>
<p>段落 2</p>
```

#### CSS

```css
p:first-of-type {
  color: red;
  font-style: italic;
}
```

#### 結果

{{EmbedLiveSample('為第一個段落設定樣式')}}

### 巢狀元素

此範例展示了如何選取巢狀元素。請注意，當沒有撰寫類型選擇器時，會隱含[通用選擇器](/zh-TW/docs/Web/CSS/Reference/Selectors/Universal_selectors)（`*`）。

#### HTML

```html
<article>
  <div>這個 `div` 是第一個！</div>
  <div>這個<span>巢狀的 `span` 是第一個</span>！</div>
  <div>
    這個<em>巢狀的 `em` 是第一個</em>，但這個 <em>巢狀的 `em` 是最後一個</em>！
  </div>
  <div>這個<span>巢狀的 `span` 會被設定樣式</span>！</div>
  <p>這個 `p` 符合條件！</p>
  <div>這是最後一個 `div`。</div>
</article>
```

#### CSS

```css
article :first-of-type {
  background-color: pink;
}
```

#### 結果

{{EmbedLiveSample('巢狀元素', 500)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{Cssxref(":first-child")}}、{{Cssxref(":last-of-type")}}、{{Cssxref(":nth-of-type")}}
