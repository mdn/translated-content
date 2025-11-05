---
title: :-moz-only-whitespace
slug: Web/CSS/Reference/Selectors/:-moz-only-whitespace
original_slug: Web/CSS/:-moz-only-whitespace
l10n:
  sourceCommit: e1608631832f2608632569d0bd4061372adc5199
---

{{Non-standard_header}}

> [!NOTE]
> [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) では、 {{CSSxRef(":empty")}} セレクターが `:-moz-only-whitespace` のように動作するよう変更されましたが、まだこれに対応しているブラウザーはありません。

**`:-moz-only-whitespace`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、{{Glossary("whitespace", "ホワイトスペース")}}のみが入ったテキストノードのみを含む要素に一致します。（これには空のテキストノードや子ノードを持たない要素も含みます。）

## 構文

```
:-moz-only-whitespace
```

## 例

### 単純な :-moz-only-whitespace の例

#### HTML

```html-nolint
<div> </div>
```

#### CSS

```css
div {
  border: 4px solid red;
}

:-moz-only-whitespace {
  border-color: lime;
}
```

#### 結果

{{EmbedLiveSample('Simple_-moz-only-whitespace_example', '100%', 50)}}

## 仕様書

短期間だけ `:blank` として [Selectors Level 4](https://drafts.csswg.org/selectors-4/#changes-2018-02) において定義されましたが、その後に機能的に {{CSSxRef(":empty")}} に統合され、 {{CSSxRef(":blank")}} は空欄の {{HTMLElement("input")}} を意味するように再定義されました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":blank")}} {{Experimental_Inline}}
- {{CSSxRef(":empty")}}
