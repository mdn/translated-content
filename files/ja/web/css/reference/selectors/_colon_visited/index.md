---
title: :visited
slug: Web/CSS/Reference/Selectors/:visited
original_slug: Web/CSS/:visited
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`:visited`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、ユーザーが訪問したことがあるリンクに適用されます。プライバシー上の理由から、このセレクターを使用して変更できるスタイルはとても限定されています。 `:visited` 擬似クラスは `href` 属性を持つ {{htmlelement("a")}} と {{htmlelement("area")}} 要素にのみ適用されます。

{{InteractiveExample("CSS デモ: :visited", "tabbed-shorter")}}

```css interactive-example
p {
  font-weight: bold;
}

a:visited {
  color: forestgreen;
  text-decoration-color: hotpink;
}
```

```html interactive-example
<p>訪問した可能性のページのリスト:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org">MDN Web Docs</a>
  </li>
  <li>
    <a href="https://www.youtube.com/">YouTube</a>
  </li>
</ul>
<p>履歴にない可能性が高いページ:</p>
<ul>
  <li>
    <a href="https://developer.mozilla.org/missing-1">ランダムな MDN ページ</a>
  </li>
  <li>
    <a href="https://example.com/missing-1">ランダムな例のページ</a>
  </li>
</ul>
```

`:visited` および、未訪問を表す [`:link`](/ja/docs/Web/CSS/Reference/Selectors/:link) 擬似クラスで定義されたスタイルは、少なくとも同等の仕様を持つユーザー操作に関する擬似クラスで（{{cssxref(":hover")}} や {{cssxref(":active")}}）によって上書きされます。適切にリンクにスタイルを適用するには、 `:visited` ルールを `:link` ルールの後、 `:hover` および `:active` ルールの前に置いてください。 _LVHA 順_、 `:link` — `:visited` — `:hover` — `:active` と定義されています。 `:visited` 擬似クラスと `:link` 擬似クラスは互いに排他的です。

## プライバシー上の制約

プライバシー上の理由から、ブラウザーはこの擬似クラスを使って適用できるスタイルに厳しい制限をかけています。使い方は以下の通りです。

- 利用できる CSS プロパティは、 {{ cssxref("color") }}, {{ cssxref("background-color") }}, {{ cssxref("border-color") }}, {{ cssxref("border-bottom-color") }}, {{ cssxref("border-left-color") }}, {{ cssxref("border-right-color") }}, {{ cssxref("border-top-color") }}, {{ cssxref("column-rule-color") }}, {{ cssxref("outline-color") }}, {{ cssxref("text-decoration-color") }}, {{ cssxref("text-emphasis-color") }} です。
- 利用できる SVG 属性は {{SVGAttr("fill")}} と {{SVGAttr("stroke")}} です。
- 利用できるスタイルでもアルファチャンネルは無視されます。要素の `:visited` でない状態のアルファ成分が代わりに使用されます。Firefox でアルファ成分が `0` の場合、`:visited` で設定したスタイルは完全に無視されます。
- これらのスタイルはエンドユーザーに対する表示色を変更できるようになっていますが、 {{domxref("window.getComputedStyle")}} メソッドは嘘をつき、 `:visited` 状態ではない色の値を返します。
- [`<link>`](/ja/docs/Web/HTML/Reference/Elements/link) 要素は `:visited` に一致することはありません。
- CSS セレクターを介して要素と照合する DOM メソッド（[`querySelector()`](/ja/docs/Web/API/Document/querySelector) や [`querySelectorAll()`](/ja/docs/Web/API/Document/querySelectorAll) など）は、文書内に訪問済みのリンクがある場合でも、常に「空」の結果を返します。前述のメソッドの場合、これはそれぞれ `null` または空の [`NodeList`](/ja/docs/Web/API/NodeList) になります。

> [!NOTE]
> これらの制限とその理由については、[プライバシーと :visited セレクター](/ja/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)を参照してください。

## 構文

```css
:visited {
  /* ... */
}
```

## 例

色を持っていないか透過のプロパティは、 `:visited` で変更することができません。この擬似クラスで設定するプロパティについては、ブラウザーが持っている既定値は `color` と `column-rule-color` だけでしょう。そのため、他のプロパティを変更したい場合は、 `:visited` セレクターの外で基本的な値を設定する必要があります。

### HTML

```html
<a href="#test-visited-link">このリンクを訪問しましたか？</a><br />
<a href="">このリンクはすでに訪問済みです。</a>
```

### CSS

```css
a {
  /* 該当するプロパティに不透過の既定値を設定することで、
     :visited 状態のスタイルを定義できるようにします */
  background-color: white;
  border: 1px solid white;
}

a:visited {
  background-color: yellow;
  border-color: hotpink;
  color: hotpink;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [プライバシーと :visited セレクター](/ja/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)
- リンク関連の擬似クラス: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
