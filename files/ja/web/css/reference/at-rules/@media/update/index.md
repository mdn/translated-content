---
title: update
slug: Web/CSS/Reference/At-rules/@media/update
original_slug: Web/CSS/@media/update
l10n:
  sourceCommit: 5e7d1f9ae2cce0cb3f7693dfb8dc6e8d375b2231
---

**`update`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、出力端末がどれだけの頻度でコンテンツの表示を更新することができるかを調べるために使用することができます。

```css
@media (update: < none | slow | fast >) {
  /* 出力機器の更新頻度が一致する場合に適用するスタイル */
}
```

## 構文

`update` 特性は、以下の一覧のうち一つのキーワード値で指定します。

- `none`
  - : いったん表示されると、レイアウトは更新されることはありません。例: 紙に印刷する文書。
- `slow`
  - : 通常の CSS のルールによってレイアウトを動的に変更することができますが、出力端末はアニメーションが円滑に見えるほど変更をすばやく表示することができません。例えば、電子ブックリーダーや一部の動力の低い端末などです。
- `fast`
  - : レイアウトは通常の CSS のルールによってレイアウトを動的に変更することができ、出力端末はふつう表示速度が制約されることがなく、 [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)のような恒常的な更新を使用することができます。例えば、コンピューターの画面などです。

## 例

### HTML

```html-nolint
<p>
  このテキストがアニメーションで表示される場合は、お使いのブラウザーが `update` に対応しており、更新の速い機器を使用して閲覧しています。
</p>
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

- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
