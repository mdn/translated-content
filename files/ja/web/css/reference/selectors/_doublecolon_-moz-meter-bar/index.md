---
title: CSS `::-moz-meter-bar` 擬似要素
short-title: ::-moz-meter-bar
slug: Web/CSS/Reference/Selectors/::-moz-meter-bar
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

**`::-moz-meter-bar`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Glossary/Pseudo-element)で、{{HTMLElement("meter")}} 要素内のメーターゲージを表します。これは、メーター要素内のゲージを選択し、スタイルを適用するために使用されます。

> [!NOTE]
> デフォルトで、`<meter>` 要素にはネイティブのスタイルが適用されます。独自のスタイルを適用するには、まず `<meter>` 要素に `appearance: none` を設定し、その後 `::-moz-meter-bar` を使用してスタイルを設定してください。

## 構文

```css
meter {
  appearance: none;
}
::-moz-meter-bar {
  /* ... */
}
```

## 例

### HTML

```html
通常のバー: &nbsp;&nbsp;&nbsp;<meter min="0" max="10" value="6">スコア 6/10</meter>
<br />
スタイル設定: <meter class="styled" min="0" max="10" value="6">
  Score 6/10
</meter>
```

### CSS

```css
meter {
  height: 20px;
  width: 200px;
  vertical-align: -0.4rem;
}

.styled {
  appearance: none;
}

.styled::-moz-meter-bar {
  background: lime;
  box-shadow: 0 2px 3px grey inset;
  border-radius: 5px;
}
```

### 結果

{{ EmbedLiveSample('Examples') }}

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("appearance")}}
- {{cssxref("accent-color")}}
