---
title: "`:-moz-window-inactive` 擬似クラス (CSS)"
short-title: :-moz-window-inactive
slug: Web/CSS/Reference/Selectors/:-moz-window-inactive
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}

**`:-moz-window-inactive`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、アクティブでないウィンドウ内にある要素に一致する [Mozilla 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)です。

`:-moz-window-inactive` はコンテンツ内の HTML 文書でも動作します。

> [!NOTE]
> この擬似クラスが追加される以前は、背景ウィンドウに異なるスタイルを適用するには、最上位の XUL クロームウィンドウに属性 (`active="true"`) を設定する必要がありました。この属性は既に使用できなくなっています。

## 構文

```css
:-moz-window-inactive {
  /* ... */
}
```

## 例

この例では、ボックスのウィンドウがアクティブかどうかによって、ボックスの背景の外観を変更します。

### HTML

```html
<div id="my-box">
  <p>これはボックスです。</p>
</div>
```

### CSS

```css
#my-box {
  background: linear-gradient(to bottom, yellow, cyan);
  width: 200px;
  height: 200px;
}

#my-box:-moz-window-inactive {
  background: cyan;
}
```

### 結果

このコードの実行結果を以下に示します。また、{{LiveSampleLink("Examples", "別個のページ")}}として表示することも可能です。

{{EmbedLiveSample('Examples', 220, 220)}}

## 仕様書

どの仕様にも含まれていません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Mozilla CSS 拡張](/ja/docs/Web/CSS/Reference/Mozilla_extensions)
- 関連 CSS セレクター:
  - {{cssxref(":active")}}

- 通常の DOM の場合は {{domxref("Document.activeElement")}} プロパティ、[シャドウ DOM](/ja/docs/Web/API/Web_components/Using_shadow_DOM) のルートの場合は {{domxref("ShadowRoot.activeElement")}} プロパティ。
