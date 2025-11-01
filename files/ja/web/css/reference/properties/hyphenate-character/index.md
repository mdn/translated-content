---
title: hyphenate-character
slug: Web/CSS/Reference/Properties/hyphenate-character
original_slug: Web/CSS/hyphenate-character
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

**`hyphenate-character`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ハイフンによる改行の前で行末に使用される文字（または文字列）を設定します。

自動ハイフネーション、ソフトハイフネーションのどちらでも、指定された hyphenate-character の値に従って表示されます。

{{InteractiveExample("CSS デモ: hyphenate-character")}}

```css interactive-example-choice
hyphenate-character: auto;
```

```css interactive-example-choice
hyphenate-character: "=";
```

```css interactive-example-choice
hyphenate-character: "—";
```

```html interactive-example
<section id="default-example">
  <p id="example-element">An extra­ordinarily long English word!</p>
</section>
```

```css interactive-example
#example-element {
  border: 2px dashed #999999;
  font-size: 1.5rem;
  text-align: left;
  width: 7rem;
  hyphens: auto;
}
```

## 構文

```css
hyphenate-character: <string>;
hyphenate-character: auto;
```

この値は、ハイフンの代わりに使用する文字列を設定するか、またはユーザーエージェントが現在の書体の慣習に基づいて適切な文字列を選択することを示します（既定値）。

### 値

- `<string>`
  - : {{cssxref("&lt;string&gt;")}} で、ハイフンによる改行の前で行末に使用されるものを表します。
    使用される文字が長すぎる場合は、ユーザーエージェントが切り落とすことがあります。
- `auto`
  - : ユーザーエージェントは、内容の言語における書体の規則に基づいて適切な文字列を選択します。
    これは既定のプロパティ値であり、明示的に指定する必要があるのは、異なる継承値を上書きする場合のみです。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

この例では、 2 つの同じテキストブロックに {{cssxref("hyphens")}} を設定して、必要な場所で確実に改行し、（`&shy;`を使って作成した）ソフトハイフンで改行するようにしています。
最初のブロックは、ハイフンの値が等号 (`=`) に変更されています。
2 番目のブロックにはハイフネーション文字セットが設定されていません。これは、このプロパティをサポートするユーザーエージェントでは、 `hyphenate-character: auto` と同等です。

### HTML

```html live-sample___examples
<dl>
  <dt><code>hyphenate-character: "="</code></dt>
  <dd id="string" lang="en">Superc&shy;alifragilisticexpialidocious</dd>
  <dt><code>hyphenate-character の設定なし</code></dt>
  <dd lang="en">Superc&shy;alifragilisticexpialidocious</dd>
</dl>
```

### CSS

```css live-sample___examples
dd {
  width: 90px;
  border: 1px solid black;
  hyphens: auto;
}

dd#string {
  -webkit-hyphenate-character: "=";
  hyphenate-character: "=";
}
```

### 結果

{{EmbedLiveSample("Examples", "100%", 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("hyphens")}}, {{cssxref("overflow-wrap")}}
