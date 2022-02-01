---
title: update
slug: Web/CSS/@media/update-frequency
tags:
  - '@media'
  - CSS
  - メディアクエリー
  - メディア特性
  - リファレンス
browser-compat: css.at-rules.media.update
translation_of: Web/CSS/@media/update-frequency
---
{{CSSRef}}

**`update`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、出力端末がどれだけの頻度でコンテンツの表示を更新することができるかを調べるために使用することができます。

## 構文

 `update` 特性は、以下の一覧のうち一つのキーワード値で指定します。

- `none`
  - : いったん表示されると、レイアウトは更新されることはありません。例: 紙に印刷する文書。
- `slow`
  - : 通常の CSS の規則によってレイアウトを動的に変更することができますが、出力端末はアニメーションが円滑に見えるほど変更をすばやく表示することができません。例: 電子ブックリーダーや一部の動力の低い端末。
- `fast`
  - : レイアウトは通常の CSS の規則によってレイアウトを動的に変更することができ、出力端末はふつう表示速度が制約されることがなく、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations)のような恒常的な更新を使用することができます。例: コンピューターの画面。

## 例

### HTML

```html
<p>このテキストが動いていれば、高速に更新できる端末を使用しています。</p>
```

### CSS

```css
@keyframes jiggle {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(25px);
  }
}

@media (update: fast) {
  p {
    animation: 1s jiggle linear alternate infinite;
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

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/ja/docs/Web/CSS/@media)
