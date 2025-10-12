---
title: sibling-index()
slug: Web/CSS/sibling-index
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

**`sibling-index()`** は [CSS](/ja/docs/Web/CSS) の[関数](/ja/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions)で、 DOM ツリー内におけるすべての兄弟要素に対する、現在の要素の相対的な位置を表す整数を返します。返される値は、親要素内のすべての兄弟要素の中で、コンテキストの子要素の位置のインデックス番号です。最初の子供は `1`、最後の子供は {{domxref("Element.children")}}.length を返します。

{{InteractiveExample("CSS Demo: sibling-index()")}}

```css interactive-example-choice
--width: calc(sibling-index() * 30px);
```

```css interactive-example-choice
--width: calc(sibling-index() * 20px);
```

```css interactive-example-choice
--width: calc(sibling-index() * 10px);
```

```css interactive-example-choice
--width: 100px;
```

```html interactive-example
<ul id="example-element">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
</ul>
```

```css interactive-example
#example-element {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

#example-element > li {
  text-align: center;
  padding: 2px;
  border-radius: 8px;
  width: var(--width, calc(sibling-index() * 30px));
  color: white;
  background-color: hsl(
    calc(360deg / sibling-count() * sibling-index()) 50% 50%
  );
}
```

> [!NOTE]
> {{CSSxRef(":nth-child()")}} 擬似クラスと同様、 `sibling-index()` は 1 から始まります。 0 ではありません。

## 構文

```css
li {
  width: calc(sibling-index() * 100px);
}
```

### 引数

`sibling-index()` 関数は引数を取りません。

### 返値

整数。 DOM ツリー内の現在の要素の兄弟要素の順番における位置です。

## 例

### 動的なリストの幅

この例では、{{htmlelement("ul")}} 内のそれぞれの {{htmlelement("li")}} アイテムの幅を `50px` だけ動的に拡大する方法を示しています。

#### HTML

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

```css
li {
  width: calc(sibling-index() * 50px);
  background-color: #ffaaaa;
}
```

#### 結果

{{EmbedLiveSample("動的なリストの幅", "300", "100")}}

### 順序付きリスト

この例では、{{htmlelement("ol")}} 要素を使用せずに、 `sibling-index()` を使用して順序付きリストを作成する方法を示しています。コンテキストには常に最も意味づけの明確な要素を使用してください。この例は、HTML を変更できない場合に CSS で何ができるかを示すために掲載しています。

#### HTML

{{htmlelement("nav")}} コンテナーと、いくつかの子要素 {{htmlelement("div")}} 要素が含まれています。

```html
<nav arial-label="Ordered list">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</nav>
```

#### CSS

{{CSSxRef("::before")}} 擬似要素を使用して、それぞれの {{htmlelement("div")}} 要素の前に兄弟インデックスを表示し、{{CSSxRef("content")}} を関数 `sibling-index()` が返す整数に設定することで、番号付きリストとして視覚的に現れるようにします。

```css
div {
  --list-index: sibling-index();
  display: flex;
  gap: 1ch;
}

div::before {
  content: var(--list-index);
}
```

#### 結果

{{EmbedLiveSample("順序付きリスト", "300", "100")}}

### 連続アニメーション

`sibling-index()` を CSS アニメーションと組み合わせることで、新しい可能性が開かれます。この例では、DOM 内の順序に基づいて {{cssxref("animation-delay")}} を設定することで、連続する要素の不透明度を変化させています。

#### HTML

コンテナー要素と、 4 つの子要素を設置します。

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ul>
```

#### CSS

それぞれの要素に `fade-in` アニメーションを適用します。 {{cssxref("calc()")}} 関数内で `sibling-index()` 関数を使用して、ソース要素のソース順の位置に基づいて `animation-delay` の再生時間を設定します。 {{cssxref("animation-fill-mode")}} は、`animation-duration` が切れるまで、アニメーションの `0%` キーフレームを適用します。

```css
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  animation-name: fade-in;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-fill-mode: backwards;
  animation-delay: calc(1s * sibling-index());
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

#### 結果

{{EmbedLiveSample("Sequential animations", "300", "100")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("sibling-count", "sibling-count()")}}
