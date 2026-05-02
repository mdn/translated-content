---
title: CSS `::cue` 擬似クラス
short-title: ::cue
slug: Web/CSS/Reference/Selectors/::cue
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

**`::cue`** は [CSS](/ja/docs/Web/CSS) の[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)で、選択された要素内の [WebVTT](/ja/docs/Web/API/WebVTT_API) キューに一致します。これにより、 VTT トラック付きのメディアで[キャプションや他のキューをスタイル付設定](/ja/docs/Web/API/WebVTT_API#html_またはスタイルシートの中の_webvtt_のスタイル設定)することができます。

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

上記の例では、`::cue(u)` セレクターは、[キューテキスト](https://github.com/mdn/shared-assets/blob/main/misc/friday.vtt) 内のすべての [`<u>`](/ja/docs/Web/HTML/Reference/Elements/u) 要素を選択します。

## 構文

```css-nolint
::cue | ::cue(<selector>) {
  /* ... */
}
```

## 利用可能なプロパティ

セレクターにこの要素を含むルールでは、次の CSS プロパティしか使用することができません。

- {{cssxref("background")}}
- {{cssxref("background-attachment")}}
- {{cssxref("background-clip")}}
- {{cssxref("background-color")}}
- {{cssxref("background-image")}}
- {{cssxref("background-origin")}}
- {{cssxref("background-position")}}
- {{cssxref("background-repeat")}}
- {{cssxref("background-size")}}
- {{cssxref("color")}}
- {{cssxref("font")}}
- {{cssxref("font-family")}}
- {{cssxref("font-size")}}
- {{cssxref("font-stretch")}}
- {{cssxref("font-style")}}
- {{cssxref("font-variant")}}
- {{cssxref("font-weight")}}
- {{cssxref("line-height")}}
- {{cssxref("opacity")}}
- {{cssxref("outline")}}
- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}
- {{cssxref("ruby-position")}}
- {{cssxref("text-combine-upright")}}
- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-color")}}
- {{cssxref("text-decoration-line")}}
- {{cssxref("text-decoration-style")}}
- {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-shadow")}}
- {{cssxref("visibility")}}
- {{cssxref("white-space")}}

## 例

### WebVTT のキューを黒地に白にする

次の CSS はキューのスタイルを設定し、テキストが白に、背景が半透明の黒い矩形になります。

```css
::cue {
  color: white;
  background-color: rgb(0 0 0 / 60%);
}
```

### WebVTT 内部ノードオブジェクトのスタイル設定

キューテキストには、内部ノードオブジェクトをタグ（HTML 要素と同様）として指定することができます。具体的には、`<c>`、`<i>`、`<b>`、`<u>`、`<ruby>`、`<rt>`、`<v>`、`<lang>` などです。
`::cue()` セレクターを使用することができます。これにより、これらのタグ内のコンテンツにスタイルを適用し、WebVTT トラックの表示方法をカスタマイズすることができます。
`<u>` タグを使用してテキストに下線を引く、次のようなキューテキストを考えてみましょう。

```plain
00:00:01.500 --> 00:00:02.999 line:80%
教えてください、<u>宇宙の主</u>はいらっしゃいますか？
```

次の CSS ルールは、`<u>` タグ内のテキストの色と [text-decoration](/ja/docs/Web/CSS/Reference/Properties/text-decoration) を指定してカスタマイズします。

```css
::cue(u) {
  color: red;
  text-decoration: wavy overline lime;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ動画テキストトラックフォーマット (WebVTT)](/ja/docs/Web/API/WebVTT_API)
- {{HTMLElement("track")}}, {{HTMLElement("video")}}
