---
title: :current
slug: Web/CSS/Reference/Selectors/:current
original_slug: Web/CSS/:current
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{SeeCompatTable}}

**`:current`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)セレクターで、現在表示されている要素またはその要素の祖先を表す、時間軸の擬似クラスです。例えば、この擬似クラスを使用すると、 [WebVTT](/ja/docs/Web/API/WebVTT_API) によってキャプション付きで表示されている映像を表すことができます。

```css
:current(p, span) {
  background-color: yellow;
}
```

## 構文

```css-nolint
:current {
  /* ... */
}

:current(<compound-selector-list>) {
  /* ... */
}
```

## 例

### CSS

```css
:current(p, span) {
  background-color: yellow;
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

この機能を実装しているブラウザーはありません。

## 関連情報

- [Web Video Text Tracks Format (WebVTT)](/ja/docs/Web/API/WebVTT_API)
- {{cssxref(":past")}}
- {{cssxref(":future")}}
