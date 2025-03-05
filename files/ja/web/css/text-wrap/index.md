---
title: text-wrap
slug: Web/CSS/text-wrap
l10n:
  sourceCommit: 4809e8217288dc7e1372d5c74140ca6661673206
---

{{CSSRef}}

**`text-wrap`** は CSS の一括指定プロパティで、要素の中のテキストを折り返す方法を制御します。様々な値により、次のことを制御します。

- 組版の改善、例えば見出しの行の長さのバランスの改善。
- テキストの折り返しを完全にオフにする方法。

{{EmbedInteractiveExample("pages/css/text-wrap.html")}}

## 構成要素のプロパティ

このプロパティは、以下の CSS プロパティの一括指定です。

- [`text-wrap-mode`](/ja/docs/Web/CSS/text-wrap-mode)
- [`text-wrap-style`](/ja/docs/Web/CSS/text-wrap-style)

## 構文

```css
/* キーワード値 */
text-wrap: wrap;
text-wrap: nowrap;
text-wrap: balance;
text-wrap: pretty;
text-wrap: stable;

/* グローバル値 */
text-wrap: inherit;
text-wrap: initial;
text-wrap: revert;
text-wrap: revert-layer;
text-wrap: unset;
```

`text-wrap` プロパティは下記の値の一覧から選ばれた単一のキーワードを指定します。

### 値

- `wrap`
  - : テキストは適切な文字（例えば英語のように区切り文字を使用する言語では空白文字）で行をまたがって折り返し、オーバーフローを最小限に抑えます。これが既定値です。
- `nowrap`
  - : テキストは行をまたがって折り返されません。改行されるのではなく、格納する要素からはみ出します。
- `balance`
  - : テキストは、各行の文字数を均等にする方法で折り返し、レイアウトの品質と読みやすさを向上させます。文字を数えて複数の行にまたがるようにバランスをとるのはコンピューターに負荷がかかるため、この値は限られた行数（Chromium では 6 行以下、Firefox では 10 行以下）のテキストブロックにのみ対応しています。
- `pretty`
  - : `wrap`と同じ動作になりますが、ユーザーエージェントは速度よりも優れたレイアウトを優先する遅いアルゴリズムを使用します。この例は、パフォーマンスよりも優れた組版が優先される本体コピーを意図しています（例えば、[オルファン](/ja/docs/Web/CSS/orphans)の数を最小に保つ必要がある場合など）。
- `stable`
  - : `wrap` と同じ動作になりますが、ユーザーがコンテンツを編集しているときに、テキストブロック全体が折り返されるのではなく、編集中の行よりも前の行が静止します。

## 解説

段落（{{HTMLElement("p")}}）や見出し（{{HTMLElement("heading_elements","&lt;h1&gt;-&lt;h6&gt;")}}）のようなコンテンツのブロック内で、テキストが行をまたいで流れることができる方法は 2 つあります。ユーザーによって制御される _強制折り返し_ と、ブラウザーによって制御される _ソフト折り返し_ です。text-wrap` プロパティを使用することで、_ソフト折り返し_ を制御する方法をブラウザーに促すことができます。

`text-wrap` に選ぶ値は、スタイル設定に現れるテキストの行数、テキストが `contenteditable` かどうか、見た目を優先するかパフォーマンスを優先するかによって決まります。

スタイル設定されたコンテンツが見出し、キャプション、ブロック引用などの短い行数に制限される場合、 `text-wrap: balance` を追加して各行の文字数のバランスをとることで、レイアウトの品質と読みやすさを向上させることができます。ブラウザーはこのプロパティが影響する行数を制限しているため、この値がパフォーマンスに与える影響はごくわずかです。

テキストの長い節には `text-wrap: pretty` を使用することができます。 `pretty` はパフォーマンスに悪影響を与えるので、長いテキストブロックの場合は、速度よりもレイアウトを重視する場合にのみ使用しましょう。

`stable` の値は、[`contenteditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) であるコンテンツに使用すると、ユーザーの使い勝手を改善します。この値は、ユーザーがテキストを編集しているとき、編集されている領域の前回行が安定したままであることを確実にします。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### 基本的なテキスト折り返し値の比較

#### HTML

```html live-sample___examples
<h2 class="wrap" contenteditable="true">
  既定の動作。この見出しのテキストは「通常通り」に折り返します。
</h2>

<h2 class="nowrap" contenteditable="true">
  この場合、この見出しのテキストは折り返されず、コンテナーをはみ出します。
</h2>

<h2 class="balance" contenteditable="true">
  この場合、この見出しのテキストは各行のバランスがうまくれます。
</h2>
```

#### CSS

```css live-sample___examples
.wrap {
  text-wrap: wrap;
}

.nowrap {
  text-wrap: nowrap;
}

.balance {
  text-wrap: balance;
}

h2 {
  font-size: 2rem;
  font-family: sans-serif;
}
```

#### 結果

この例のテキストは編集可能です。テキストを変更し、長い単語を追加して、行や単語の長さの違いが折り返しにどのように影響するかを見てみましょう。

{{EmbedLiveSample("Examples", "100%", 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("white-space")}}
- {{CSSxRef("white-space-collapse")}}
- [CSS テキストモジュール](/ja/docs/Web/CSS/CSS_text)
- [CSS `text-wrap: balance`](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance) (developer.chrome.com)
- [CSS `text-wrap: pretty`](https://developer.chrome.com/blog/css-text-wrap-pretty/) (developer.chrome.com)
