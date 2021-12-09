---
title: aspect-ratio
slug: Web/CSS/@media/aspect-ratio
tags:
  - '@media'
  - CSS
  - メディアクエリー
  - リファレンス
  - メディア特性
browser-compat: css.at-rules.media.aspect-ratio
translation_of: Web/CSS/@media/aspect-ratio
---
{{CSSRef}}

**`aspect-ratio`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、{{glossary("viewport", "ビューポート")}}のアスペクト比を調べるために使用します。

## 構文

`aspect-ratio` 特性は、ビューポートの幅対高さのアスペクト比を表現する {{cssxref("&lt;ratio&gt;")}} 値で指定します。これは範囲の特性であり、接頭辞の付いた **`min-aspect-ratio`** および **`max-aspect-ratio`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

以下の例は独自のビューポートを生成する {{htmlElement("iframe")}} に含まれています。 `<iframe>` の大きさを変更して `aspect-ratio` の変化を確認してください。

なお、メディアクエリーの条件がどれも true でない場合、背景は白になります。これは、以下のルールが `<iframe>` 内の `<div>` に適用されないためです。どの幅と高さの値がこれを起こすのか、見つけてみてください。

### HTML

```html
<div id='inner'>
  ビューポートの幅と高さを変更しながら、この要素を見ていてください。
</div>
```

### CSS

```css
/* 最小アスペクト比 */
@media (min-aspect-ratio: 8/5) {
  div {
    background: #9af; /* blue */
  }
}

/* 最大アスペクト比 */
@media (max-aspect-ratio: 3/2) {
  div {
    background: #9ff;  /* cyan */
  }
}

/* 正確なアスペクト比。上書きを防ぐために最下部に配置 */
@media (aspect-ratio: 1/1) {
  div {
    background: #f9a; /* red */
  }
}
```

### 結果

```html hidden
<label id="wf" for="w">width:165</label>
<input id="w" name="w" type="range" min="100" max="250" step="5" value="165">
<label id="hf" for="w">height:165</label>
<input id="h" name="h" type="range" min="100" max="250" step="5" value="165">

<iframe id="outer" src="data:text/html,<style> @media (min-aspect-ratio: 8/5) { div { background: %239af; } } @media (max-aspect-ratio: 3/2) { div { background: %239ff; } } @media (aspect-ratio: 1/1) { div { background: %23f9a; } }</style><div id='inner'> Watch this element as you resize your viewport's width and height.</div>">

</iframe>
```

```css hidden
iframe{
  display:block;
}
```

```js hidden
outer.style.width=outer.style.height="165px"

w.onchange=w.oninput=function(){
  outer.style.width=w.value+"px"
  wf.textContent="width:"+w.value
}
h.onchange=h.oninput=function(){
  outer.style.height=h.value+"px"
  hf.textContent="height:"+h.value
}
```

{{ EmbedLiveSample('Result', '300px', '350px') }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/ja/docs/Web/CSS/@media)
