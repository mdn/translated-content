---
title: speak-as
slug: Web/CSS/Reference/At-rules/@counter-style/speak-as
original_slug: Web/CSS/@counter-style/speak-as
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`speak-as`** 記述子は、与えられた {{cssxref('@counter-style')}} で構築されたカウンター記号が、話し言葉でどのように表現されるかを指定します。例えば、カウンター記号を数値として話すか、あるいは単にオーディオキューで表現するかを指定することができます。

## 構文

```css
/* キーワード値 */
speak-as: auto;
speak-as: bullets;
speak-as: numbers;
speak-as: words;
speak-as: spell-out;

/* @counter-style 名の値 */
speak-as: <counter-style-name>;
```

### 値

- `auto`
  - : もし `speak-as` の値が `auto` と指定された場合、`speak-as` の有効値は {{cssxref("@counter-style/system", "system")}} 記述子の値に基づいて決定されます。
    - `system` の値が `alphabetic` の場合、 `speak-as` の有効な値は `spell-out` になります。
    - `system` が `cyclic` の場合、 `speak-as` の有効な値は `bullets` です。
    - `system` が `extends` の場合、 `speak-as` の値は拡張スタイルで `speak-as: auto` が指定されている場合と同じになります。
    - 他の場合はすべて、 `auto` を設定すると `speak-as: numbers` を設定するのと同じ効果になります。

- `bullets`
  - : 順序なしリストの項目を表すために{{Glossary("user agent", "ユーザーエージェント")}}で定義されたフレーズまたはオーディオキューが読み上げられます。
- `numbers`
  - : カウンターの数値が、文書の言語で読み上げられます。
- `words`
  - : ユーザーエージェントは、通常通りカウンター値を生成し、それを文書の言語の単語として読み上げます。
- `spell-out`
  - : ユーザーエージェントは通常通りカウンター表現を生成し、それを 1 文字ずつ読み上げます。ユーザーエージェントが特定のカウンター記号を読み上げる方法を知らない場合、ユーザーエージェントは `speak-as` の値が `numbers` であるかのように読み上げるかもしれません。
- `<counter-style-name>`
  - : 別のカウンタースタイルの名前を {{cssxref("&lt;custom-ident&gt;")}} として指定します。もし含まれていれば、カウンターはそのカウンタースタイルで指定された形式で発声されます。これは、 {{cssxref("@counter-style/fallback", "fallback")}} 記述子を指定するのと同じようなものです。指定されたスタイルが存在しない場合、 `speak-as` の既定値は `auto` です。

## アクセシビリティの考慮

`speak-as` プロパティに対する支援技術は非常に限られています。ページの目的を理解するために重要な情報を伝えるためには、このプロパティに依存しないようにしてください。

[Let's Talk About Speech CSS | CSS Tricks](https://css-tricks.com/lets-talk-speech-css/)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### カウンターの読み上げ方を設定

この例では、カウンターシステムは、視覚的なマーカーとして理解できない記号を使用して修正されています。しかし、`speak-as` 記述子を使用して、アクセシビリティツリー内のリストアイテムのマーカーを数値に設定しています。対応している場合、視覚的なマーカーではなく数値がスクリーンリーダーによって読み上げられます。

`speak-as` 記述子の結果の使い勝手を確認するには、VoiceOver などの支援技術や他のスクリーンリーダーを使用するか、`speak-as` に対応しているブラウザーの開発者ツールで[アクセシビリティパネル](https://firefox-source-docs.mozilla.org/devtools-user/index.html#accessibility-inspector)を表示するかしてください。

#### HTML

```html
<ul class="list">
  <li>I had one apple</li>
  <li>I ate two bananas</li>
  <li>I devoured three oranges</li>
  <li>I am not hungry for dinner</li>
  <li>But I'll have five scoops of ice cream for dessert</li>
</ul>
```

#### CSS

```css
@counter-style speak-as-example {
  system: fixed;
  symbols:     ;
  suffix: " ";
  speak-as: numbers;
}

.list {
  list-style: speak-as-example;
}
```

#### 結果

{{ EmbedLiveSample('カウンターの読み上げ方を設定') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@counter-style")}} 記述子: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- リストスタイルのプロパティ: {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, 無名のカウンタースタイルを生成する関数記法。
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
- [CSS リストとカウンター](/ja/docs/Web/CSS/Guides/Lists)モジュール
