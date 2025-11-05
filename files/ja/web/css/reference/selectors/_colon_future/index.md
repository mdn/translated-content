---
title: :future
slug: Web/CSS/Reference/Selectors/:future
original_slug: Web/CSS/:future
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

**`:future`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)セレクターで、 {{cssxref(":current")}} に一致する要素の後に完全に現れる要素と一致する、時間軸の擬似クラスです。例えば、 [WebVTT](/ja/docs/Web/API/WebVTT_API) によって表示されているキャプションに対応する動画などです。

```css
:future(p, span) {
  display: none;
}
```

## 構文

```css
:future {
  /* ... */
}
```

## 例

### CSS

```css
:future(p, span) {
  display: none;
}
```

### HTML

```html
<video controls preload="metadata">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track
    label="English"
    kind="subtitles"
    srclang="en"
    src="subtitles.vtt"
    default />
</video>
```

### WebVTT

```plain
WEBVTT FILE

1
00:00:03.500 --> 00:00:05.000
これは最初のキャプションです

2
00:00:06.000 --> 00:00:09.000
これは 2 つ目のキャプションです

3
00:00:11.000 --> 00:00:19.000
これは 3 つ目のキャプションです
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Video Text Tracks Format (WebVTT)](/ja/docs/Web/API/WebVTT_API)
- {{cssxref(":current")}}
- {{cssxref(":past")}}
