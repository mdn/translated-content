---
title: CSS `:-moz-only-whitespace` 擬似クラス
short-title: :-moz-only-whitespace
slug: Web/CSS/Reference/Selectors/:-moz-only-whitespace
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}

> [!NOTE]
> [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) では、 {{CSSxRef(":empty")}} セレクターが `:-moz-only-whitespace` のように動作するよう変更されましたが、まだこれに対応しているブラウザーはありません。

**`:-moz-only-whitespace`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、{{Glossary("whitespace", "ホワイトスペース")}}のみが入ったテキストノードのみを含む要素に一致します。（これには空のテキストノードや子ノードを持たない要素も含みます。）

## 構文

```css
:-moz-only-whitespace {
  /* ... */
}
```

## 例

### 基本的な :-moz-only-whitespace の例

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

{{EmbedLiveSample('Basic_-moz-only-whitespace_example', '100%', 50)}}

## 仕様書

短期間だけ `:blank` として [Selectors Level 4](https://drafts.csswg.org/selectors-4/#changes-2018-02) において定義されましたが、その後に機能的に {{CSSxRef(":empty")}} に統合され、 {{CSSxRef(":blank")}} は空欄の {{HTMLElement("input")}} を意味するように再定義されました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":blank")}}
- {{CSSxRef(":empty")}}
