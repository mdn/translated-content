---
title: CSS `:seeking` 擬似クラス
short-title: :seeking
slug: Web/CSS/Reference/Selectors/:seeking
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:seeking`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)セレクターで、{{htmlelement("audio")}} や {{htmlelement("video")}} などの再生可能な要素が、メディアリソース内の再生位置をシーク中の状態にある場合に、その要素を表します。
ユーザーがメディアリソース内の特定の位置での再生をリクエストしたが、メディア要素がまだその位置に到達していない場合、そのリソースはシーク中であるとみなされます。

シークは、{{cssxref(":buffering")}} とは異なり、メディア要素が現在データを読み込んでいるのではなく、メディアリソース内の新しい位置へスキップする操作です。
情報については、[メディアのバッファー、シーク、時間範囲](/ja/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges#seekable)ガイドを参照してください。

## 構文

```css
:seeking {
  /* ... */
}
```

## 例

### CSS

```css
:seeking {
  outline: 5px solid red;
}

video:seeking {
  outline: 5px solid blue;
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
- {{cssxref(":playing")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS セレクター](/ja/docs/Web/CSS/Guides/Selectors)
