---
title: "`:past` 擬似クラス (CSS)"
short-title: :past
slug: Web/CSS/Reference/Selectors/:past
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

**`:past`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)セレクターで、時間軸に基づく擬似クラスであり、{{cssxref(":current")}} に一致する要素よりも完全に前に現れるすべての要素に一致します。例えば、[WebVTT](/ja/docs/Web/API/WebVTT_API) によって字幕を表示させている動画の場合などです。S

```css
:past(p, span) {
  display: none;
}
```

## 構文

```css
:past {
  /* ... */
}
```

## 例

### CSS

```css
:past(p, span) {
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
This is the first caption

2
00:00:06.000 --> 00:00:09.000
This is the second caption

3
00:00:11.000 --> 00:00:19.000
This is the third caption
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Web Video Text Tracks Format (WebVTT)](/ja/docs/Web/API/WebVTT_API)
- {{cssxref(":current")}}
- {{cssxref(":future")}}
