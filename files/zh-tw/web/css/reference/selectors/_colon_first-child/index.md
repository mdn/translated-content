---
title: :first-child
slug: Web/CSS/Reference/Selectors/:first-child
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

**`:first-child`** [CSS](/zh-TW/docs/Web/CSS) [偽類](/zh-TW/docs/Web/CSS/Reference/Selectors/Pseudo-classes)代表一群兄弟元素中的第一個元素。

{{InteractiveExample("CSS Demo: :first-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:first-child {
  border: 2px solid orange;
}
```

```html interactive-example
<p>田徑冠軍：</p>
<ul>
  <li>Adhemar da Silva</li>
  <li>Wang Junxia</li>
  <li>Wilma Rudolph</li>
  <li>Babe Didrikson-Zaharias</li>
  <li>Betty Cuthbert</li>
  <li>Fanny Blankers-Koen</li>
  <li>Florence Griffith-Joyner</li>
  <li>Irena Szewinska</li>
  <li>Jackie Joyner-Kersee</li>
  <li>Shirley Strickland</li>
  <li>Carl Lewis</li>
  <li>Emil Zatopek</li>
  <li>Haile Gebrselassie</li>
  <li>Jesse Owens</li>
  <li>Jim Thorpe</li>
  <li>Paavo Nurmi</li>
  <li>Sergei Bubka</li>
  <li>Usain Bolt</li>
</ul>
```

## 語法

```css
:first-child {
  /* ... */
}
```

## 範例

### 基本範例

#### HTML

```html
<div>
  <p>這段文字被選取了！</p>
  <p>這段文字沒有被選取。</p>
</div>

<div>
  <h2>這段文字沒有被選取：它不是一個 `p` 元素。</h2>
  <p>這段文字沒有被選取。</p>
</div>
```

#### CSS

```css
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### 結果

{{EmbedLiveSample('基本範例', 500, 200)}}

### 為列表設定樣式

#### HTML

```html
<ul>
  <li>項目 1</li>
  <li>項目 2</li>
  <li>
    項目 3
    <ul>
      <li>項目 3.1</li>
      <li>項目 3.2</li>
      <li>項目 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css
ul li {
  color: blue;
}

ul li:first-child {
  color: red;
  font-weight: bold;
}
```

#### 結果

{{EmbedLiveSample('為列表設定樣式')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{CSSxRef(":-moz-first-node")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
