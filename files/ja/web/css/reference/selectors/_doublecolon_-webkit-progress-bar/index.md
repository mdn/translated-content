---
title: CSS `::-webkit-progress-bar` 擬似要素
short-title: ::-webkit-progress-bar
slug: Web/CSS/Reference/Selectors/::-webkit-progress-bar
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

**`::-webkit-progress-bar`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、{{HTMLElement("progress")}} 要素の進捗バー全体を表します。通常、デフォルトで {{ cssxref("::-webkit-progress-value") }} 擬似要素の下にレンダリングされるため、バーの塗りつぶされていない部分としてのみ表示されます。これは、{{cssxref("::-webkit-progress-inner-element")}} 擬似要素の子要素であり、{{cssxref("::-webkit-progress-value")}} 擬似要素の親要素です。

> [!NOTE]
> `::-webkit-progress-value` を有効にするには、`<progress>` 要素の {{cssxref("appearance")}} を `none` に設定する必要があります。

## 構文

```css
::-webkit-progress-bar {
  /* ... */
}
```

## 例

### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-bar {
  background-color: orange;
}
```

### HTML

```html
<progress value="10" max="50"></progress>
```

### 結果

{{EmbedLiveSample("Examples", 200, 50)}}

### 結果のスクリーンショット

以上の上のコードを実行すると、WebKit または Blink ベースのブラウザーでは、次のような進捗バーが表示されます。

![進捗バーは、文字1つ分ほどの高さの横棒です。左側の 20% は緑色で、右側の 80% はオレンジ色です。](progress-bar.png)

## 仕様書

どの仕様書にもありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- WebKit/Blink が {{HTMLElement("progress")}} 要素のその他の部分にスタイルを適用するために使用する擬似要素：
  - {{ cssxref("::-webkit-progress-value") }}
  - {{ cssxref("::-webkit-progress-inner-element") }}

- {{ cssxref("::-moz-progress-bar") }}
