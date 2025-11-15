---
title: :blank
slug: Web/CSS/Reference/Selectors/:blank
original_slug: Web/CSS/:blank
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{SeeCompatTable}}

> [!NOTE]
> `:blank` セレクターは、CSSWG が変更を続けているため、リスクがあるとみなされています。
>
> [CSSWG issue #1967](https://github.com/w3c/csswg-drafts/issues/1967) を参照してください。

**`:blank`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、空のユーザー入力要素 (例えば {{HTMLElement("input")}} や {{HTMLElement("textarea")}}) を選択します。

## 構文

```css
:blank {
  /* ... */
}
```

## 例

### 基本的な :blank の例

最終的に対応しているブラウザーでは、 `:blank` 擬似クラスを使用することで、開発者は、必須ではないが、まだ何も記入されていない入力コントロールを、何らかの方法で強調表示することができるようになります。

#### HTML

```html
<textarea></textarea>
```

#### CSS

```css
textarea:blank {
  border: 3px solid red;
}
```

#### 結果

{{EmbedLiveSample('Basic_blank_example', '100%', 150)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

現在、この機能を実装しているブラウザーはありません。

## 関連情報

- {{CSSxRef(":empty")}}
