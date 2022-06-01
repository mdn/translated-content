---
title: ':any-link'
slug: Web/CSS/:any-link
tags:
  - ':any-link'
  - CSS
  - 実験的
  - レイアウト
  - リンク
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
  - ハイパーリンク
browser-compat: css.selectors.any-link
translation_of: Web/CSS/:any-link
---
{{CSSRef}}

**`:any-link`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)セレクターで、訪問の有無とは独立したソースアンカーとして振る舞う要素を表します。言い換えれば、 `href` 属性を持つすべての {{HTMLElement("a")}} または {{HTMLElement("area")}} 要素を選択します。つまり、 {{cssxref(":link")}} または {{cssxref(":visited")}} に一致するすべての要素を選択します。

```css
/* :link または :visited に該当するすべての要素を選択 */
:any-link {
  color: green;
}
```

## 構文

{{csssyntax}}

## 例

### HTML

```html
<a href="https://example.com">External link</a><br>
<a href="#">Internal target link</a><br>
<a>Placeholder link (won't get styled)</a>
```

### CSS

```css
a:any-link {
  border: 1px solid blue;
  color: orange;
}

/* WebKit browsers */
a:-webkit-any-link {
  border: 1px solid blue;
  color: orange;
}
```

### 結果

{{EmbedLiveSample('Examples')}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ハイパーリンクの作成](/ja/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- 一致する HTML 要素: [`<a>`](/ja/docs/Web/HTML/Element/a) および [`<area>`](/ja/docs/Web/HTML/Element/area) に {{htmlattrxref("href", "a")}} 属性が付いたもの
- 関連する CSS セレクター:

  - [`:visited`](/ja/docs/Web/CSS/:visited)
  - [`:link`](/ja/docs/Web/CSS/:link)
