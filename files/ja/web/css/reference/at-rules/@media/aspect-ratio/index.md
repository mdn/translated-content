---
title: aspect-ratio
slug: Web/CSS/Reference/At-rules/@media/aspect-ratio
original_slug: Web/CSS/@media/aspect-ratio
l10n:
  sourceCommit: 9e7260485703694d47aa360e2db97aae2ea5ae42
---

**`aspect-ratio`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、{{glossary("viewport", "ビューポート")}}の{{glossary("aspect ratio", "アスペクト比")}}を調べるために使用します。

## 構文

`aspect-ratio` 特性は、ビューポートの幅対高さのアスペクト比を表現する {{cssxref("&lt;ratio&gt;")}} 値で指定します。これは範囲の特性であり、接頭辞の付いた **`min-aspect-ratio`** および **`max-aspect-ratio`** の変化形を使用して、それぞれ最小値と最大値をクエリーすることができます。

## 例

以下の例は独自のビューポートを生成する {{HTMLElement("iframe")}} に含まれています。 `<iframe>` の大きさを変更して `aspect-ratio` の変化を確認してください。

なお、メディアクエリーの条件がどれも true でない場合、背景は白になります。これは、以下のルールが `<iframe>` 内の `<div>` に適用されないためです。どの幅と高さの値がこれを起こすのか、見つけてみてください。

### HTML

```html
<iframe id="outer">
  <div id="inner">
    ビューポートの幅と高さを変更しながら、この要素を見ていてください。
  </div>
</iframe>
```

### CSS

```css
/* 最小アスペクト比 */
/* アスペクト比が 8/5 = 1.6 以上である場合に選択 */
@media (min-aspect-ratio: 8/5) {
  div {
    background: #99f; /* 青 */
  }
}

/* 最大アスペクト比 */
/* アスペクト比が 3/2 = 1.5 以下である場合に選択 */
@media (max-aspect-ratio: 3/2) {
  div {
    background: #9f9; /* 緑 */
  }
}

/* 正確なアスペクト比。上書きを防ぐために最下部に配置 */
@media (aspect-ratio: 1/1) {
  div {
    background: #f99; /* 赤 */
  }
}
```

### 結果

```html hidden
<label id="wf" for="w">width:165</label>
<input id="w" name="w" type="range" min="100" max="250" step="5" value="165" />
<label id="hf" for="w">height:165</label>
<input id="h" name="h" type="range" min="100" max="250" step="5" value="165" />
<label id="ratio">aspect-ratio: 165/165 = 1</label>

<iframe
  id="outer"
  srcdoc="<style> @media (min-aspect-ratio: 8/5) { div { background: #99f; } } @media (max-aspect-ratio: 3/2) { div { background: #9f9; } } @media (aspect-ratio: 1/1) { div { background: #f99; } }</style><div id='inner'>ビューポートの幅と高さを変更しながら、この要素を見ていてください。</div>">
</iframe>
```

```css hidden
iframe {
  display: block;
  border: 1px dashed black;
}
```

```js hidden
outer.style.width = outer.style.height = "165px";

const updateRatio = () => {
  ratio.textContent = `aspect-ratio: ${w.value}/${h.value} = ${(w.value / h.value).toFixed(2)}`;
};

w.onchange = w.oninput = () => {
  outer.style.width = `${w.value}px`;
  wf.textContent = `width: ${w.value}`;
  updateRatio();
};

h.onchange = h.oninput = () => {
  outer.style.height = `${h.value}px`;
  hf.textContent = `height: ${h.value}`;
  updateRatio();
};
```

{{ EmbedLiveSample('Result', '300px', '350px') }}

`min-aspect-ratio: 8/5` は下限を 1.6 に設定するため、このメディアクエリーはアスペクト比が 1.6 以上の要素を選択します。 `max-aspect-ratio: 3/2` は上限を設定するため、このメディアクエリーはアスペクト比が 1.5 以下の要素を選択します。 `aspect-ratio: 1/1` は、後で宣言されているため、最大アスペクト比のルールを上書きし、アスペクト比が正確に `1` の要素を選択します。

初期状態から高さを縮小すると、アスペクト比は 1 から増加し始めます。そのため、div の背景色は 赤 (1) < 緑 (1.5) < 白 < 青 (1.6) の順に変化します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`aspect-ratio` の理解](/ja/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [@media](/ja/docs/Web/CSS/Reference/At-rules/@media)
