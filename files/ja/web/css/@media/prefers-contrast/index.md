---
title: prefers-contrast
slug: Web/CSS/@media/prefers-contrast
tags:
  - CSS
  - リファレンス
  - メディア特性
browser-compat: css.at-rules.media.prefers-contrast
translation_of: Web/CSS/@media/prefers-contrast
---
{{CSSRef}}{{SeeCompatTable}}

**`prefers-contrast`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、ユーザーがウェブコンテンツをより高い (またはより低い) コントラストで表示するように要求したかどうかを検出するために使用します。

## 構文

- `no-preference`
  - : ユーザーが設定をシステムに通知していないことを示します。このキーワード値は、boolean のコンテキストでは false と評価されます。
- `more`
  - : ユーザーが、より高いコントラストをもつインターフェイスを好むことをシステムに通知したことを示します。
- `less`
  - : ユーザーが、より低いコントラストを持つインタフェース好むことをシステムに通知したことを示します。

## ユーザー設定

様々なオペレーティングシステムがこのような設定をサポートしており、ユーザエージェントはオペレーティングシステムによって提供される設定に依存することになるでしょう。

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

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- Microsoft [-ms-high-contrast](https://msdn.microsoft.com/library/Hh771830) メディア特性
- CSS の [forced-colors](/ja/docs/Web/CSS/@media/forced-colors) メディアクエリー

{{QuickLinksWithSubpages("/en-US/docs/Web/CSS/@media/")}}
