---
title: prefers-contrast
slug: Web/CSS/Reference/At-rules/@media/prefers-contrast
original_slug: Web/CSS/@media/prefers-contrast
l10n:
  sourceCommit: eb20a5272772231852864ddc71b9710de0fa1d4f
---

**`prefers-contrast`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、ユーザーがウェブコンテンツをより高い（またはより低い）コントラストで表示するように要求したかどうかを検出するために使用します。

## 構文

- `no-preference`
  - : ユーザーが設定をシステムに通知していないことを示します。このキーワード値は、boolean のコンテキストでは false と評価されます。
- `more`
  - : ユーザーが、より高いコントラストを持つインターフェイスにしたいことをシステムに通知したことを示します。
- `less`
  - : ユーザーが、より低いコントラストを持つインターフェイスにしたいことをシステムに通知したことを示します。
- `custom`
  - : ユーザーが、特定の色のセットを使用することをシステムに通知しており、これらの色によって暗示されるコントラストが `more` も `less` にも一致しないことを示します。この値は、 [`forced-colors: active`](/ja/docs/Web/CSS/Reference/At-rules/@media/forced-colors) のユーザーによって指定されたカラーパレットと一致します。

## ユーザー設定

様々なオペレーティングシステムがこのような設定に対応しており、ユーザエージェントはオペレーティングシステムによって提供される設定に依存することになるでしょう。

## 例

この例では、既定でいまいましい低いコントラストが与えられています。

### HTML

```html
<div class="contrast">low contrast box</div>
```

### CSS

```css
.contrast {
  width: 100px;
  height: 100px;
  outline: 2px dashed black;
}

@media (prefers-contrast: more) {
  .contrast {
    outline: 2px solid black;
  }
}
```

### 結果

{{EmbedLiveSample("例")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の [forced-colors](/ja/docs/Web/CSS/Reference/At-rules/@media/forced-colors) メディアクエリー
