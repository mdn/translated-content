---
title: ':link'
slug: Web/CSS/:link
tags:
  - CSS
  - レイアウト
  - 擬似クラス
  - リファレンス
  - セレクター
  - ウェブ
browser-compat: css.selectors.link
translation_of: Web/CSS/:link
---
{{ CSSRef }}

**`:link`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、まだ訪問されていない要素を表します。 {{HTMLElement("a")}} または {{HTMLElement("area")}} など、 `href` 属性を持つ未訪問のすべての要素を選択します。

```css
/* 未訪問の <a> をすべて選択します */
a:link {
  color: red;
}
```

`:link` 擬似クラスによって定義されたスタイルは、少なくとも同等の仕様を持つリンク関連の擬似クラス （{{cssxref(":active")}}、{{cssxref(":hover")}}、 {{cssxref(":visited")}}）によって上書きされます。適切にリンクにスタイルを適用するには、 _LVHA 順_: `:link` — `:visited` — `:hover` — `:active` で定義されるように、他のすべてのリンク関連規則の前に `:link` 規則を置いてください。

> **Note:** 訪問済みかどうかにかかわらず要素を選択するには、 {{cssxref(":any-link")}} を使用してください。

## 構文

{{csssyntax}}

## 例

既定では、大半のブラウザーが訪問済みのリンクに特別な {{cssxref("color")}} の値を適用しています。そのため、この例のリンクは訪問前でしか特別な文字色にならないでしょう（よって、再度確認するにはブラウザーの履歴をクリアする必要があります）。しかし、 {{cssxref("background-color")}} の値は、大半のブラウザーが既定で訪問済みのリンクに設定していないのでおそらく残ります。

### HTML

```html
<a href="#ordinary-target">これは普通のリンクです。</a><br>
<a href="">このリンクを訪問しました。</a><br>
<a>リンクのプレイスホルダー（スタイルの適用なし）</a>
```

### CSS

```css
a:link {
  background-color: gold;
  color: green;
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- リンク関連の擬似クラス: {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}
