---
title: CSS `::-webkit-progress-inner-element` 擬似要素
short-title: ::-webkit-progress-inner-element
slug: Web/CSS/Reference/Selectors/::-webkit-progress-inner-element
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

{{Non-standard_header}}

**`::-webkit-progress-inner-element`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、{{HTMLElement("progress")}} 要素のもっとも外側のコンテナーを表します。これは {{cssxref("::-webkit-progress-bar")}} 擬似要素の親です。

> [!NOTE]
> `::-webkit-progress-value` を有効にするには、`<progress>` 要素の {{cssxref("appearance")}} を `none` に設定する必要があります。

## 構文

```css
::-webkit-progress-inner-element {
  /* ... */
}
```

## 例

これらの例は Blink および WebKit のみで動作します。

### 進捗バーの周囲に黒い境界線を追加

この例では、進捗バーの周囲に 2px の黒い境界線を追加しています。

#### HTML

```html
<progress value="10" max="50"></progress>
```

#### CSS

```css
progress {
  -webkit-appearance: none;
}

::-webkit-progress-inner-element {
  border: 2px solid black;
}
```

#### 結果

{{EmbedLiveSample("Adding_a_black_border_around_the_progress_bar", 200, 50)}}

#### 結果のスクリーンショット

Blink または WebKit ベースのブラウザーを使用していない人向けに例を示します。以上のようなコードを実行すると、次のような進捗バーが表示されます。

![プログレスバーは、黒い境界線をつけている、緑とグレーの長いボックスです。ボックスの左側の 20% は緑色で、右側の 80% は灰色です。](-webkit-progress-inner-element_example.png)

## 仕様書

どの仕様書にもありません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- WebKit/Blink が {{HTMLElement("progress")}} 要素のその他の部分にスタイルを適用するために使用する擬似要素：
  - {{cssxref("::-webkit-progress-bar")}}
  - {{cssxref("::-webkit-progress-value")}}

- {{cssxref("::-moz-progress-bar")}}
