---
title: :link
slug: Web/CSS/Reference/Selectors/:link
original_slug: Web/CSS/:link
l10n:
  sourceCommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

**`:link`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、まだ訪問されていない要素を表します。 {{HTMLElement("a")}} または {{HTMLElement("area")}} など、 `href` 属性を持つ未訪問のすべての要素を選択します。

{{InteractiveExample("CSS デモ: :link", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

a:link {
  color: forestgreen;
  text-decoration-color: hotpink;
}
```

```html interactive-example
<p>Pages that you might have visited:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org">MDN Web Docs</a>
  </li>
  <li>
    <a href="https://www.youtube.com/">YouTube</a>
  </li>
</ul>
<p>Pages unlikely to be in your history:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org/missing-2">Random MDN page</a>
  </li>
  <li>
    <a href="https://example.com/missing-2">Random Example page</a>
  </li>
</ul>
```

`:link` および [`:visited`](/ja/docs/Web/CSS/Reference/Selectors/:visited) 擬似クラスによって定義されたスタイルは、以降のユーザー操作の擬似クラス（{{cssxref(":hover")}} または {{cssxref(":active")}}）によって上書きされる可能性があります。適切にリンクにスタイルを適用するには、 `:link` ルールを他のすべてのリンク関連ルールの前に置き、 _LVHA 順_: `:link` — `:visited` — `:hover` — `:active` で定義されるようにしてください。 `:visited` 擬似クラスと `:link` 擬似クラスは互いに排他的です。

> [!NOTE]
> 訪問済みかどうかにかかわらず要素を選択するには、 {{cssxref(":any-link")}} を使用してください。

## 構文

```css
:link {
  /* ... */
}
```

## 例

既定では、大半のブラウザーが訪問済みのリンクに特別な {{cssxref("color")}} の値を適用しています。そのため、この例のリンクは訪問前でしか特別な文字色にならないでしょう（よって、再度確認するにはブラウザーの履歴をクリアする必要があります）。しかし、 {{cssxref("background-color")}} の値は、大半のブラウザーが既定で訪問済みのリンクに設定していないのでおそらく残ります。

### HTML

```html
<a href="#ordinary-target">これは普通のリンクです。</a><br />
<a href="">このリンクを訪問しました。</a><br />
<a>リンクのプレイスホルダー（スタイルの適用なし）</a>
```

### CSS

```css
a:link {
  background-color: gold;
  color: green;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- リンク関連の擬似クラス: {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
