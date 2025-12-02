---
title: :buffering
slug: Web/CSS/Reference/Selectors/:buffering
original_slug: Web/CSS/:buffering
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

**`:buffering`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)セレクターで、再生可能な要素（{{htmlelement("audio")}} や {{htmlelement("video")}} など）がメディアリソースをバッファリングしているときに、その要素が再生可能であることを表します。

要素は、メディアデータの読み込みを試みているが、再生を開始または継続するのに十分なデータがまだ存在しないために再生を続けることができない場合、バッファリング中であるとみなされます。
詳細については、「[メディアのバッファリング、シーク、および時間範囲のガイド](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable)」をご覧ください。

> [!NOTE]
> 要素が「バッファリング」の時は、 {{cssxref(":playing")}} ともみなされます。
> `:buffering` が要素に一致する場合、 `:playing` もその要素に一致します。

## 構文

```css
:buffering {
  /* ... */
}
```

## 例

### CSS

```css
:buffering {
  outline: 5px solid red;
}

video:buffering {
  outline: 5px solid blue;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)
