---
title: ::cue
slug: Web/CSS/Reference/Selectors/::cue
original_slug: Web/CSS/::cue
---

**`::cue`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、選択された要素内の [WebVTT](/ja/docs/Web/API/WebVTT_API) キューに一致します。これにより、 VTT トラック付きのメディアで[キャプションや他のキューをスタイル付けする](/ja/docs/Web/API/WebVTT_API#styling_webtt_cues)ことができます。

```css
::cue {
  color: yellow;
  font-weight: bold;
}
```

{{InteractiveExample("CSS デモ: ::cue", "tabbed-shorter")}}

```css interactive-example
video {
  width: 100%;
}

video::cue {
  font-size: 1rem;
  color: yellow;
}

::cue(u) {
  color: red;
}
```

```html interactive-example
<video controls src="/shared-assets/videos/friday.mp4">
  <track
    default
    kind="captions"
    srclang="en"
    src="/shared-assets/misc/friday.vtt" />
  Sorry, your browser doesn't support embedded videos.
</video>
```

このプロパティは、あたかも 1 つの部品であるかのように、一連のキュー全体に適用されます。 `background` とその個別指定だけは例外で、各キューに個別に適用されます。これは、ボックスが生成されて予期せずメディアの大きな領域を占めることを避けるためです。

## 構文

{{CSSSyntax}}

## 利用可能なプロパティ

セレクターにこの要素を含むルールでは、以下の CSS プロパティしか使用することができません。

- [`background`](/ja/docs/Web/CSS/Reference/Properties/background)
- [`background-attachment`](/ja/docs/Web/CSS/Reference/Properties/background-attachment)
- [`background-clip`](/ja/docs/Web/CSS/Reference/Properties/background-clip)
- [`background-color`](/ja/docs/Web/CSS/Reference/Properties/background-color)
- [`background-image`](/ja/docs/Web/CSS/Reference/Properties/background-image)
- [`background-origin`](/ja/docs/Web/CSS/Reference/Properties/background-origin)
- [`background-position`](/ja/docs/Web/CSS/Reference/Properties/background-position)
- [`background-repeat`](/ja/docs/Web/CSS/Reference/Properties/background-repeat)
- [`background-size`](/ja/docs/Web/CSS/Reference/Properties/background-size)
- [`color`](/ja/docs/Web/CSS/Reference/Properties/color)
- [`font`](/ja/docs/Web/CSS/Reference/Properties/font)
- [`font-family`](/ja/docs/Web/CSS/Reference/Properties/font-family)
- [`font-size`](/ja/docs/Web/CSS/Reference/Properties/font-size)
- [`font-stretch`](/ja/docs/Web/CSS/Reference/Properties/font-stretch)
- [`font-style`](/ja/docs/Web/CSS/Reference/Properties/font-style)
- [`font-variant`](/ja/docs/Web/CSS/Reference/Properties/font-variant)
- [`font-weight`](/ja/docs/Web/CSS/Reference/Properties/font-weight)
- [`line-height`](/ja/docs/Web/CSS/Reference/Properties/line-height)
- [`opacity`](/ja/docs/Web/CSS/Reference/Properties/opacity)
- [`outline`](/ja/docs/Web/CSS/Reference/Properties/outline)
- [`outline-color`](/ja/docs/Web/CSS/Reference/Properties/outline-color)
- [`outline-style`](/ja/docs/Web/CSS/Reference/Properties/outline-style)
- [`outline-width`](/ja/docs/Web/CSS/Reference/Properties/outline-width)
- [`ruby-position`](/ja/docs/Web/CSS/Reference/Properties/ruby-position)
- [`text-combine-upright`](/ja/docs/Web/CSS/Reference/Properties/text-combine-upright)
- [`text-decoration`](/ja/docs/Web/CSS/Reference/Properties/text-decoration)
- [`text-decoration-color`](/ja/docs/Web/CSS/Reference/Properties/text-decoration-color)
- [`text-decoration-line`](/ja/docs/Web/CSS/Reference/Properties/text-decoration-line)
- [`text-decoration-style`](/ja/docs/Web/CSS/Reference/Properties/text-decoration-style)
- [`text-decoration-thickness`](/ja/docs/Web/CSS/Reference/Properties/text-decoration-thickness)
- [`text-shadow`](/ja/docs/Web/CSS/Reference/Properties/text-shadow)
- [`visibility`](/ja/docs/Web/CSS/Reference/Properties/visibility)
- [`white-space`](/ja/docs/Web/CSS/Reference/Properties/white-space)

## 例

### WebVTT のキューを黒地に白にする

次の CSS はキューのスタイルを設定し、テキストが白に、背景が半透明の黒い矩形になります。

```css
::cue {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ動画テキストトラックフォーマット (WebVTT)](/ja/docs/Web/API/WebVTT_API)
- {{HTMLElement("track")}}, {{HTMLElement("video")}}
