---
title: CSS `:playing` 擬似クラス
short-title: :playing
slug: Web/CSS/Reference/Selectors/:playing
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:playing`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)セレクターで、{{htmlelement("audio")}} や {{htmlelement("video")}} など、再生可能な要素が「再生中」である状態を表します。
要素は、現在メディアリソースを再生している場合、またはユーザーの意図以外の理由（{{cssxref(":buffering")}} や {{cssxref(":stalled")}} など）で一時停止している場合に、再生中であるとみなされます。

## 構文

```css
:playing {
  /* ... */
}
```

## 例

### CSS

```css
:playing {
  border: 5px solid green;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":buffering")}}
- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)
