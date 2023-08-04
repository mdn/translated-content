---
title: "::cue-region"
slug: Web/CSS/::cue-region
---

{{CSSRef}}{{SeeCompatTable}}

**`::cue-region`** は [CSS](/ja/docs/Web/CSS)の[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)で、選択された要素内にある {{DOMxRef("WebVTT API", "WebVTT", "", 1)}} キューに一致します。これは VTT トラックのアルメディアで[字幕とその他のキューのスタイル付け](/ja/docs/Web/API/WebVTT_API#styling_webtt_cues)に利用できます。

```css
::cue-region {
  color: yellow;
  font-weight: bold;
}
```

プロパティは、キューのセット全体に対して、あたかも 1 つのユニットであるかのように適用されます。唯一の例外として、 `background` とその個別指定プロパティは各キューに個別に適用されるので、ボックスを作成したり、メディアの予期せぬ大きな領域を覆ったりすることを避けることができます。

## 構文

{{CSSSyntax}}

## 許可されているプロパティ

この要素を含むセレクターを持つルールには、以下の CSS プロパティのみが使用できます。

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他の {{DOMxRef("WebVTT API", "WebVTT", "", 1)}} に関するセレクター:

  - {{CSSxRef("::cue")}}
  - {{CSSxRef(":past")}}
  - {{CSSxRef(":future")}}
