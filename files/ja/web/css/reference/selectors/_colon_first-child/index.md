---
title: :first-child
slug: Web/CSS/Reference/Selectors/:first-child
original_slug: Web/CSS/:first-child
l10n:
  sourceCommit: 8d4fb1e2934111a13989d2796152dc601468e7b5
---

**`:first-child`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、兄弟要素のグループの中で最初の要素を表します。

{{InteractiveExample("CSS デモ: :first-child", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

li:first-child {
  border: 2px solid orange;
}
```

```html interactive-example
<p>Track &amp; field champions:</p>
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

## 構文

```css
:first-child {
  /* ... */
}
```

## 例

### 基本的な例

#### HTML

```html live-sample___basic_example
<div>
  <p>このテキストは選択されます。</p>
  <p>このテキストは選択されません。</p>
</div>

<div>
  <h2>このテキストは選択されません。: `p` ではありません。</h2>
  <p>このテキストは選択されません。</p>
</div>
```

#### CSS

```css live-sample___basic_example
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

#### 結果

{{EmbedLiveSample('Basic_example', 500, 200)}}

### リストのスタイル設定

#### HTML

```html live-sample___styling_a_list
<ul>
  <li>アイテム 1</li>
  <li>アイテム 2</li>
  <li>
    アイテム 3
    <ul>
      <li>アイテム 3.1</li>
      <li>アイテム 3.2</li>
      <li>アイテム 3.3</li>
    </ul>
  </li>
</ul>
```

#### CSS

```css live-sample___styling_a_list
ul li {
  color: blue;
}

ul li:first-child {
  color: red;
  font-weight: bold;
}
```

#### 結果

{{EmbedLiveSample('Styling_a_list')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":-moz-first-node")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
