---
title: prefers-reduced-transparency
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency
original_slug: Web/CSS/@media/prefers-reduced-transparency
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{SeeCompatTable}}

**`prefers-reduced-transparency`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、ユーザーが端末で使用される透明または半透明のレイヤー効果を縮小する設定を有効にしているかどうかを検出するために使用されます。この設定をオンにすると、一部のユーザーのコントラストや読みやすさを改善することができます。

## 構文

- `no-preference`
  - : ユーザーが端末で環境設定を行っていないことを示します。このキーワード値は、論理値コンテキストでは false として評価されます。
- `reduce`
  - : ユーザーが端末で、透明または半透明のレイヤー効果を最小限に抑える設定を有効にしていることを示します。

## ユーザー設定

さまざまなオペレーティングシステムでは、透明度を低下させる設定が提供されており、ユーザーエージェントはこれらのシステム設定に準拠する傾向が強くあります。
また、特定の設定を提供していないプラットフォームでは、より曖昧な手掛かりに依存する場合もあります。

- Windows 10/11: 設定 > 個人用設定 > 色 > 透明効果
- macOS: System Preferences > Accessibility > Display > Reduce transparency
- iOS: Settings > Accessibility > Display & Text Size > Reduce Transparency

## 例

この例では、既定で半透明のボックスが表示されています。使用している端末のアクセシビリティ設定で透明度を下げる設定が有効になっている場合、半透明のボックスは不透明になります。

### HTML

```html
<div class="translucent">半透明のボックス</div>
```

### CSS

```css
.translucent {
  opacity: 0.4;
}

@media (prefers-reduced-transparency) {
  .translucent {
    opacity: 0.8;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の [prefers-reduced-motion](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) メディアクエリー
- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
