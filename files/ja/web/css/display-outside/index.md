---
title: <display-outside>
slug: Web/CSS/display-outside
---

{{CSSRef}}

`<display-outside>` のキーワードは、本質的にフローレイアウトにおける要素の役割である、要素の {{CSSxRef("display")}} の外部表示種別を指定します。これらのキーワードは `display` プロパティの値として使用され、単一のキーワードとしては伝統的な目的に、または Level 3 仕様書では {{CSSxRef("&lt;display-inside&gt;")}} のキーワードと共に使用されます。

## 構文

有効な `<display-outside>` の値は以下の通りです。

- `block`
  - : 要素は、ブロック要素ボックスを生成し、通常フローでは要素の前後に改行を生成します。
- `inline`
  - : 要素は自分自身の前後に改行を生成しない、一つ以上のインライン要素ボックスを生成します。通常フローでは、次の要素は空間があれば同じ行に来ます。

> **メモ:** 二つの値の構文に対応しているブラウザーは、 `display: block` や `display: inline` などの外部表示種別のみが指定されていると、内部表示種別を `flow` に設定します。これで期待通りに動作します。例えば、ある要素を block になるよう指定した場合、その要素の子はブロックおよびインラインの通常フローレイアウトに加わることを期待するでしょう。

<h2 id="Examples">例</h2>

以下の例では、 span 要素 (通常はインライン要素として表示) に `display: block` が設定されているので、改行が行われ、コンテナーのインライン方向を埋めるように拡張されます。

### HTML

```html
<span>span 1</span> <span>span 2</span>
```

### CSS

```css
span {
  display: block;
  border: 1px solid rebeccapurple;
}
```

### 結果

{{EmbedLiveSample("Examples", 300, 60)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("css.properties.display.display-outside", 10)}}

## 関連情報

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [通常フローでのブロックおよびインラインレイアウト](/ja/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [整形コンテキストの紹介](/ja/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts)
