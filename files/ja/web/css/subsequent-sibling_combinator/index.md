---
title: 後続兄弟結合子
slug: Web/CSS/Subsequent-sibling_combinator
l10n:
  sourceCommit: bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{CSSRef}}

**後続兄弟結合子** (subsequent-sibling combinator, `~`) は 2 個のセレクターを結びつけ、 1 つ目の要素の後に 2 つ目の要素があり（直後である必要はない）、かつ両者が同じ親要素の子であるすべてのパターンに一致します。

次の例では、後続兄弟結合子 (`~`) は、画像の兄弟であり、画像の後に現れる段落を選択し、スタイル設定するのに便利です。

```css
img ~ p {
  color: red;
}
```

## 構文

```css-nolint
/* 結合子の前後の空白はオプションですが、推奨されます。 */
先行する要素 ~ 選択される要素 { スタイルプロパティ }
```

## 例

### 単純セレクターと結合子の使用

この例では、両方のセレクターが単純セレクター（`p` と `span`）である場合に、 `~` 結合子を使用する場合を示しています。

```html-nolint
<article>
  <span>これは段落の前に現れるので赤にはなりません。</span>
  <p>ここに段落があります。</p>
  <code>ここに code があります。</code>
  <span>
    この span が赤いのは、間に他のノードがあるにもかかわらず、段落の後に現れるからです。
  </span>
  <p>何かあっても、笑顔を絶やさないでください。</p>
  <h1>夢は大きく</h1>
  <span>
    ノードの数や種類に関係なく、段落の後の同じ親からの span はすべて赤くなります。
  </span>
</article>
<span>
  この span は段落と親を共有していないので赤ではありません。
</span>
```

```css
p ~ span {
  color: red;
}
```

{{EmbedLiveSample("Using the combinator with simple selectors", "auto", 300)}}

### 複合セレクターによる結合子の使用

この例には2つの[複合セレクター](/ja/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector)があり、どちらも後続兄弟結合子 `.foo p ~ span` と `.foo p ~ .foo span` を使用しています。

- 最初の複合セレクターである `.foo p ~ span` は、もし span と段落の親が同じで、**かつ**その親またはその親の祖先がクラス `.foo` を持っている場合、段落の後に来るすべての span に一致します。
- 2 つ目の複合セレクター `.foo p ~ .foo span` は、クラス `.foo` を持っている要素の子孫であるすべての span に一致します。

下記の例は、複合セレクターの対象要素は、複合セレクターの初期要素と同じ親を示さなければならないことを示しています。

```html
<h1>夢は大きく</h1>
<span>またしても赤い span です！</span>
<div class="foo">
  <p>別の段落です。</p>
  <span>青い span</span>
  <div class="foo">
    <span>緑の span</span>
  </div>
</div>
```

```css
.foo p ~ span {
  color: blue;
}

.foo p ~ .foo span {
  color: green;
}
```

{{EmbedLiveSample("Using the combinator with complex selectors", "auto", 200)}}

上の HTML では、`.foo p` の兄弟は `span` と `.foo` です。緑色の `span` は `.foo` クラスの子孫で、`p` の兄弟です。

- 対象セレクターが `span` の場合、`p` の兄弟である `span` 要素が選択されます。 `p` 要素は `.foo` の子孫であるため、その `span` 兄弟要素も選択されます。
- `.foo p ~ .foo span` では、対象とするセレクターは `.foo` の子孫である `span` です。この場合、 `.foo` の子孫である `span` 要素は、その `.foo` が `p` の兄弟である場合に選択されます。基本的には、どちらも `.foo` の祖先に入れ子になっています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [次兄弟結合子](/ja/docs/Web/CSS/Next-sibling_combinator)
