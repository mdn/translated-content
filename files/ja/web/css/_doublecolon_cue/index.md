---
title: '::cue'
slug: Web/CSS/::cue
tags:
  - '::cue'
  - CSS
  - メディア
  - 擬似要素
  - リファレンス
  - セレクター
  - ウェブ動画テキストトラック
  - WebVTT
  - cue
browser-compat: css.selectors.cue
translation_of: Web/CSS/::cue
---
{{CSSRef}}

**`::cue`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、選択された要素内の [WebVTT](/ja/docs/Web/API/WebVTT_API) キューに一致します。これにより、 VTT トラック付きのメディアで[キャプションや他のキューをスタイル付けする](/ja/docs/Web/API/WebVTT_API#styling_webtt_cues)ことができます。

```css
::cue {
  color: yellow;
  font-weight: bold;
}
```

このプロパティは、あたかも 1 つの部品であるかのように、一連のキュー全体に適用されます。 `background` とその個別指定だけは例外で、各キューに個別に適用されます。これは、ボックスが生成されて予期せずメディアの大きな領域を占めることを避けるためです。

## 構文

{{CSSSyntax}}

## 利用可能なプロパティ

セレクターにこの要素を含むルールでは、以下の CSS プロパティしか使用することができません。

- [`background`](/ja/docs/Web/CSS/background)
- [`background-attachment`](/ja/docs/Web/CSS/background-attachment)
- [`background-clip`](/ja/docs/Web/CSS/background-clip)
- [`background-color`](/ja/docs/Web/CSS/background-color)
- [`background-image`](/ja/docs/Web/CSS/background-image)
- [`background-origin`](/ja/docs/Web/CSS/background-origin)
- [`background-position`](/ja/docs/Web/CSS/background-position)
- [`background-repeat`](/ja/docs/Web/CSS/background-repeat)
- [`background-size`](/ja/docs/Web/CSS/background-size)
- [`color`](/ja/docs/Web/CSS/color)
- [`font`](/ja/docs/Web/CSS/font)
- [`font-family`](/ja/docs/Web/CSS/font-family)
- [`font-size`](/ja/docs/Web/CSS/font-size)
- [`font-stretch`](/ja/docs/Web/CSS/font-stretch)
- [`font-style`](/ja/docs/Web/CSS/font-style)
- [`font-variant`](/ja/docs/Web/CSS/font-variant)
- [`font-weight`](/ja/docs/Web/CSS/font-weight)
- [`line-height`](/ja/docs/Web/CSS/line-height)
- [`opacity`](/ja/docs/Web/CSS/opacity)
- [`outline`](/ja/docs/Web/CSS/outline)
- [`outline-color`](/ja/docs/Web/CSS/outline-color)
- [`outline-style`](/ja/docs/Web/CSS/outline-style)
- [`outline-width`](/ja/docs/Web/CSS/outline-width)
- [`ruby-position`](/ja/docs/Web/CSS/ruby-position)
- [`text-combine-upright`](/ja/docs/Web/CSS/text-combine-upright)
- [`text-decoration`](/ja/docs/Web/CSS/text-decoration)
- [`text-decoration-color`](/ja/docs/Web/CSS/text-decoration-color)
- [`text-decoration-line`](/ja/docs/Web/CSS/text-decoration-line)
- [`text-decoration-style`](/ja/docs/Web/CSS/text-decoration-style)
- [`text-decoration-thickness`](/ja/docs/Web/CSS/text-decoration-thickness)
- [`text-shadow`](/ja/docs/Web/CSS/text-shadow)
- [`visibility`](/ja/docs/Web/CSS/visibility)
- [`white-space`](/ja/docs/Web/CSS/white-space)

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
