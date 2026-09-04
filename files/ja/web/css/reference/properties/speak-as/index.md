---
title: CSS `speak-as` プロパティ
short-title: speak-as
slug: Web/CSS/Reference/Properties/speak-as
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

**`speak-as`** は [CSS](/ja/docs/Web/CSS) のプロパティで、[HTML](/ja/docs/Web/HTML) コンテンツの読み上げ方法を定義するために使用されます。1 つから 3 つまでの列挙型キーワードによって、{{glossary("screen reader", "スクリーンリーダー")}}やデジタルアシスタントなどの音声技術による要素やテキストのレンダリング方法が決定されます。

このプロパティは、擬似要素を含むすべてのコンテンツに適用されますが、{{cssxref("@counter-style")}} に[`speak-as`](/ja/docs/Web/CSS/Reference/At-rules/@counter-style/speak-as) 記述子を定義して構築された {{cssxref("::marker")}} 擬似要素を除きます。これは、継承された `speak-as` プロパティ値よりも優先されます。

## 構文

```css
/* 単一の値の構文 */
speak-as: normal;
speak-as: spell-out;
speak-as: literal-punctuation;
speak-as: digits;
speak-as: no-punctuation;

/* 複数の値の構文 */
speak-as: spell-out literal-punctuation;
speak-as: spell-out no-punctuation;
speak-as: digits literal-punctuation;
speak-as: digits no-punctuation;
speak-as: spell-out digits literal-punctuation;
speak-as: spell-out digits no-punctuation;
```

### 値

- `normal`
  - : 通常の発音規則に従い、句読点を休止に置き換えます。たとえば、"Hello, world!" は "Hello（休止）world（休止）" と発音されます。これがデフォルトの設定です。
- `spell-out`
  - : コンテンツは一文字ずつ読み上げられます。たとえば、"role" は "r" "o" "l" "e" と発音されます。
- `literal-punctuation`
  - : 句読点は文字通り読み上げます。たとえば、"Hello, world!" は "Hello カンマ world エクスクラメーションマーク" と発音されます。
- `digits`
  - : 数字は、それぞれの数字の読み方で発音します。例えば、"31" は "スリーワン" と発音します。
- `no-punctuation`
  - : コンテンツは、句読点を一切含まない通常の形で発音されます。たとえば、"Hello, world!" は "Hello" "world" と発音されます。

> [!NOTE]
> `speak-as` プロパティの対応状況は限定的であり、スクリーンリーダーや音声合成ソフトなどのさまざまな支援技術間で実装が統一されていません。発音に依存する重要な情報が、幅広いユーザーにとって使いやすく、アクセシブルな状態を維持するためには、この情報の音声による提示方法を定義する際、この CSS プロパティのみに依存しないようにしてください。

## 公式定義

{{CSSInfo}}

## 形式文法

{{CSSSyntax}}

## 例

### HTML

```html
<p class="normal">Hello, world! I'm 25.</p>
<p class="spell-out">Hello, world! I'm 25.</p>
<p class="literal-punctuation">Hello, world! I'm 25.</p>
<p class="no-punctuation">Hello, world! I'm 25.</p>
<p class="digits">Hello, world! I'm 25.</p>
<p class="multi">Hello, world! I'm 25.</p>
```

### CSS

```css
.normal {
  speak-as: normal;
}

.spell-out {
  speak-as: spell-out;
}

.literal-punctuation {
  speak-as: literal-punctuation;
}

.no-punctuation {
  speak-as: no-punctuation;
}

.digits {
  speak-as: digits;
}
.multi {
  speak-as: literal-punctuation digits;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@counter-style")}} アットルールの {{cssxref("@counter-style/speak-as", "speak-as")}} 記述子
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
- [ウェブ音声 API](/ja/docs/Web/API/Web_Speech_API)
