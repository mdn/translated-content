---
title: hyphenate-character
slug: Web/CSS/hyphenate-character
tags:
  - CSS
  - CSS プロパティ
  - リファレンス
browser-compat: css.properties.hyphenate-character
translation_of: Web/CSS/hyphenate-character
---
{{CSSRef}}

**`hyphenate-character`** は [CSS](/ja/docs/Web/CSS) のプロパティで、ハイフンによる改行の前で行末に使用される文字（または文字列）を設定します。

自動ハイフネーション、ソフトハイフネーションのどちらでも、指定された hyphenate-character の値に従って表示されます。

## 構文

この値は、ハイフンの代わりに使用する文字列を設定するか、またはユーザーエージェントが現在の書体の慣習に基づいて適切な文字列を選択することを示します（既定値）。

```css
hyphenate-character: <string>;
hyphenate-character: auto;
```

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
最初のブロックは、ハイフンの値が等号（"`*`"）に変更されています。
これは、このプロパティに対応しているユーザーエージェントでは `hyphenate-character: auto` と同じ意味になります。

#### HTML

```html
<dl>
  <dt><code>hyphenate-character: "*"</code></dt>
  <dd id="string" lang="en">Superc&shy;alifragilisticexpialidocious</dd>
  <dt><code>hyphenate-character の設定なし</code></dt>
  <dd lang="en">Superc&shy;alifragilisticexpialidocious</dd>
</dl>
```

#### CSS

```css
dd {
  width: 90px;
  border: 1px solid black;
  hyphens: auto;
}

dd#string {
  -webkit-hyphenate-character: "*";
  hyphenate-character: "*";
}
```

#### 結果

{{EmbedLiveSample("Examples", "100%", 350)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する CSS プロパティ: {{cssxref("hyphens")}}, {{cssxref("overflow-wrap")}}
