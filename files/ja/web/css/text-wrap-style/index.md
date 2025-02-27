---
title: text-wrap-style
slug: Web/CSS/text-wrap-style
l10n:
  sourceCommit: 2a3911def06e1850e2b76907b3a42c688ee7a2bc
---

{{CSSRef}}

**`text-wrap-style`** は [CSS](/ja/docs/Web/CSS) プロパティで、要素内のテキストをどのように折り返すかを制御します。様々な値で、ブロック要素のコンテンツを折り返す代替方法を提供します。また、{{CSSXRef("text-wrap")}} の一括指定を使って設定したり、リセットしたりすることができます。

{{EmbedInteractiveExample("pages/css/text-wrap-style.html")}}

## 構文

```css
/* キーワード値 */
text-wrap-style: auto;
text-wrap-style: balance;
text-wrap-style: pretty;
text-wrap-style: stable;

/* グローバル値 */
text-wrap-style: inherit;
text-wrap-style: initial;
text-wrap-style: revert;
text-wrap-style: revert-layer;
text-wrap-style: unset;
```

折り返しが許可されている場合（{{CSSXRef("text-wrap-mode")}} を参照）、`text-wrap-style` プロパティは下記の一覧から選択した単一のキーワードで指定します。

### 値

- `auto`
  - : テキストは、ブラウザーにとって最もパフォーマンスの高い方法で折り返され、文字数を考慮して導かれるわけではありません。
- `balance`
  - : テキストは、各行の文字数を最適にバランスをとる方法で折り返され、レイアウトの品質と読みやすさが向上します。文字を数えて複数の行にまたがるようにバランスをとるのはコンピューターに負荷がかかるため、この値は限られた行数（Chromium では 6 行以下、Firefox では 10 行以下）のテキストブロックにのみ対応しています。
- `pretty`
  - : テキストは、速度よりも優れたレイアウトを優先する、より遅いアルゴリズムを使用して折り返されます。この例は、パフォーマンスよりも優れた組版が優先される本体コピーを意図しています（例えば、[オルファン](/ja/docs/Web/CSS/orphans)の数を最小に保つ必要がある場合など）。
- `stable`
  - : テキストは、ユーザーがコンテンツを編集している際に、編集している行の前の行が固定され、テキスト全体が再配置されるのではなく、そのように折り返されます。

> **メモ:** [CSS テキスト](/ja/docs/Web/CSS/CSS_text)モジュールでは、 `avoid-orphans` 値を `text-wrap-style` プロパティに定義すると、最終行が過度に短くなることを避け、改行の決定を行う際にユーザーエージェントが複数の行を考慮することを期待しています。この値は、現時点ではどのブラウザーでも対応していません。

## 解説

コンテンツが折り返し可能な場合（それが既定でそうなっている場合）、コンテンツの折り返し方法に影響を与えることができるいくつかの選択肢があります。

`text-wrap-style` に選ぶ値は、スタイル設定に現れるテキストの行数、テキストが `contenteditable` かどうか、見た目を優先するかパフォーマンスを優先するかによって決まります。

スタイル設定されたコンテンツが見出し、キャプション、ブロック引用などの短い行数に限定される場合、 `text-wrap-style: balance` を追加することで、各行の文字数のバランスをとり、レイアウトの品質と読みやすさを向上させることができます。ブラウザーはこのプロパティが影響する行数を制限しているため、この値がパフォーマンスに与える影響はごくわずかです。

テキストの長い区間では、`text-wrap-style: pretty` を使用することができます。 `pretty` はパフォーマンスにマイナスの効果があるので、速度よりもレイアウトが重要な場合にのみ、長いテキストブロックに使用しましょう。

`stable` の値は、[`contenteditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) であるコンテンツに使用すると、ユーザーの使い勝手が改善されます。この値は、ユーザーがテキストを編集しているとき、編集されている領域の前の行が安定したままであることを確実にします。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### バランスの取れたテキスト

この例には 2 つの段落があり、最初の段落は既定の `auto` で、 2 つ目は `balance` です。

#### HTML

```html
<h2>バランスなし</h2>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ad. Impedit
  adipisci rerum modi praesentium atque aperiam vitae nesciunt consectetur
  assumenda deleniti repudiandae perferendis sed odio doloremque, aliquid natus
  laboriosam?
</p>
<h2>バランスあり</h2>
<p class="balanced">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, ad. Impedit
  adipisci rerum modi praesentium atque aperiam vitae nesciunt consectetur
  assumenda deleniti repudiandae perferendis sed odio doloremque, aliquid natus
  laboriosam?
</p>
```

#### CSS

```css
p {
  max-width: 60ch;
}
.balanced {
  text-wrap-style: balance;
}
```

#### 結果

{{EmbedLiveSample("balanced_text", "100%",310)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("text-wrap")}}
- {{CSSxRef("text-wrap-mode")}}
