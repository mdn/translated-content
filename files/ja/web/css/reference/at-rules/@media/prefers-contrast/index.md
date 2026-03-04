---
title: prefers-contrast
slug: Web/CSS/Reference/At-rules/@media/prefers-contrast
l10n:
  sourceCommit: c4d3b34b77fcfc28dd1d1a7ecb051ee912d9d3dd
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

この例では、既定で破線の {{cssxref("outline")}} が設定されたボックスが使用されています。`prefers-contrast: more` メディアクエリーが一致すると、適用されるアウトラインは代わりに高コントラストの `solid` スタイルが指定されます。

### HTML

```html
<div class="contrast">低コントラストボックス</div>
```

### CSS

```css
.contrast {
  margin: 5px;
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
