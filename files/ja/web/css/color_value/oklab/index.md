---
title: oklab()
slug: Web/CSS/color_value/oklab
l10n:
  sourceCommit: fbccdfab6a362590389e3ecf9812395e47e451db
---

{{CSSRef}}{{SeeCompatTable}}

**`oklab()`** 関数記法は、指定された色を、人間の目による色の知覚方法を模倣しようとするOKlab色空間で表現する。この `oklab()` は OKlab 色空間上のデカルト座標系、 a 軸と b 軸で動作します。極座標系、彩度、色相が必要な場合は、 {{cssxref("color_value/oklch", "oklch()")}} を使用してください。

Oklab は知覚的色空間で、次のような場合に使用されます。

- 画像の明度を変えずに、グレースケールに変換する。
- ユーザーが感じる色相や明度を維持したまま、色の彩度を変更することができる。
- 色の滑らかで均一なグラデーションを作成する。例えば、 {{HTMLElement("canvas")}} 要素で手動で補間した場合。

`oklab()` 関数は、Oklab 色空間から、RGB よりも広い、広色域や P3 色を含む任意の色を表現することができます。

## 構文

```css
/* oklab(lightness a-axis b-axis) */
oklab(40.1% 0.1143 0.045);
oklab(59.69% 0.1007 0.1191);

/* oklab(lightness a-axis b-axis / Alpha) */
oklab(59.69% 0.1007 0.1191 / 0.5);
```

> **メモ:** oklab() 関数は、他の色関数のように値を区切るためのカンマに対応しておらず、オプションのアルファ値を指定する場合は、その前にスラッシュ (`/`) を付ける必要があります。

### 値

- lightness
  - : 黒を表す `0%` と白を表す `100%` の間の {{cssxref("&lt;percentage&gt;")}} で、知覚される明度を指定します。
- a-axis
  - : Oklab 色空間の `a` 軸に沿った距離、つまり、色の緑/赤の度合いを表します。
- b-axis
  - : Oklab 色空間の `b` 軸に沿った距離、つまり、色の青/黄の度合いを表します。
- alpha
  - : {{cssxref("&lt;number&gt;")}} で `0` から `1` の間、または {{cssxref("&lt;percentage&gt;")}} で `1` から `100%` （完全に不透明）の間で、この色の透明度（またはアルファチャネル）を表します。

## 例

### oklab() での緑色

```css
div {
  padding: 1em;
  margin: 1em;
  border: solid 1px black;
}

.ref {
  background-color: green;
}

.oklab {
  background-color: oklab(51.975% -0.1403 0.10768);
}
```

```html
<div class="ref">RGB</div>
<div class="oklab">OKLAB</div>
```

{{EmbedLiveSample("Green_with_oklab", "100%", 155)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [A perceptual color space for image processing](https://bottosson.github.io/posts/oklab/)
- {{cssxref("color_value/oklch",'oklch()')}} は `oklab()` と同じ色空間を使用しますが、極座標系を使用します。
